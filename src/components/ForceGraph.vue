<template>
    <v-container style="max-width: 1600px;">
        <v-row>
            <v-col cols="12" sm="12" md="8">
                <v-card>
                    <svg id="forcegraph"></svg>
                </v-card>
            </v-col>
            <v-col cols="12" sm="12" md="4">
                <v-card>
                    <v-card-title>
                        Case Details
                    </v-card-title>
                    <v-card-subtitle>
                        Mouse hover a node to display details
                    </v-card-subtitle>
                    <v-card-text>
                        P: Partially Vaccinated
                        <br>
                        N: Not vaccinated
                    </v-card-text>
                    <v-list dense>
                        <v-list-item v-for="(value, key) in focusNode" :key="key">
                            <v-list-item-content>
                                <v-list-item-title>{{ capitalise(key) }}</v-list-item-title>
                                <v-list-item-subtitle>{{ value + "&nbsp;" }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<style>
.node-hover {
    stroke-width: 2px;
    stroke: black;
}
</style>

<script lang="ts">
import { Component, Prop, Vue, } from 'vue-property-decorator';
import * as d3 from "d3";

type CovidLink = {
    source: any
    target: any
    infector: any
    infectee: any
}

type CovidCase = {
    id: number
    gender: "female" | "male"
    age: number
    nationality: string
    occupation: string
    organization: string
    date: string
    serology: string
    vaccinated: string
}

type CovidNode = d3.SimulationNodeDatum & CovidCase

@Component
export default class ForceGraph extends Vue
{
    focusNode = {
        id: "",
        gender: "",
        age: "",
        nationality: "",
        occupation: "",
        organization: "",
        date: "",
        serology: "",
        vaccinated: "",
    }

    capitalise(text: string)
    {
        return text.replace(/(\w)(\w*)/g,
            function (g0, g1, g2) { return g1.toUpperCase() + g2.toLowerCase(); })
    }

    async mounted()
    {
        let width = 800, height = 600;

        const radius = 16
        const arrowSize = 10
        let svg = d3.select("#forcegraph").attr("viewBox", "0 0 " + width + " " + height)


        const [graphDataLinks, graphDataNodes] = await Promise.all([d3.json("data/links-sample.json"), d3.json("data/cases-sample.json")]) as [CovidLink[], CovidNode[]]

        graphDataLinks.forEach(e =>
        {
            e.source = e.infector;
            e.target = e.infectee;
        });

        // console.log("links", graphDataLinks); //links
        // console.log("cases", graphDataNodes); //cases

        // Arrow head
        svg.append("defs")
            .append("marker")
            .attr("id", "arrowhead")
            .attr("viewBox", "0 -5 10 10")
            .attr("refX", 0)
            .attr("refY", 0)
            .attr("markerWidth", arrowSize)
            .attr("markerHeight", arrowSize)
            .attr("orient", "auto")
            .append("path")
            .attr("d", "M0,-5L10,0L0,5");

        // Path line
        let linkpath = svg.append("g")
            .attr("id", "links")
            .selectAll("path")
            .data(graphDataLinks)
            .enter()
            .append("path")
            .attr("fill", "none")
            .attr("stroke", "black")
            .attr("marker-end", "url(#arrowhead)");

        // Node g
        let node = svg.append("g")
            .attr("id", "nodes")
            .selectAll("g")
            .data(graphDataNodes)
            .enter()
            .append("g")
            .on("mouseover", (e: MouseEvent, data) =>
            {
                d3.select(e.target as SVGAElement).classed("node-hover", true);
                for (const key in this.focusNode)
                {
                    if (Object.prototype.hasOwnProperty.call(this.focusNode, key))
                    {
                        this.focusNode[key as keyof (CovidCase)] = data[key as keyof (CovidCase)].toString()
                    }
                }
            })
            .on("mouseout", (e: MouseEvent, data) =>
            {
                d3.select(e.target as SVGAElement).classed("node-hover", false);
                for (const key in this.focusNode)
                {
                    if (Object.prototype.hasOwnProperty.call(this.focusNode, key))
                    {
                        this.focusNode[key as keyof (CovidCase)] = ""
                    }
                }
            })
            .call(
                d3.drag<SVGGElement, CovidNode>()
                    .on("start", dragstarted)
                    .on("drag", dragged)
                    .on("end", dragended)
            )


        // Circles
        node.append("circle")
            .attr("r", radius)
            .style("fill", d => d.gender === "female" ? "palevioletred" : "steelblue")

        // Labels
        node.append('text')
            .attr('text-anchor', 'middle')
            .attr('dominant-baseline', 'central')
            .attr('font-size', '18px')
            .style("pointer-events", "none")
            .text((d) => d.vaccinated == "no" ? "N" : d.vaccinated.startsWith("partial") ? "P" : "")
        // Force 
        let simulation = d3.forceSimulation()
            .nodes(graphDataNodes)
            .force("x", d3.forceX().strength(0.1).x(width / 2))
            .force("y", d3.forceY().strength(0.1).y(height / 2))
            .force("link", d3.forceLink<CovidNode, CovidLink>(graphDataLinks).id(d => d.id))
            .force("charge", d3.forceManyBody().strength(20))
            .force("collide", d3.forceCollide().strength(0.3).radius(radius * 3))
            .on("tick", () =>
            {
                // node.attr("cx", d => d.x as number)
                //     .attr("cy", d => d.y as number)

                node.attr("transform", d => "translate(" + d.x + "," + d.y + ")")

                // Curve path
                linkpath.attr("d", d =>
                {
                    // https://stackoverflow.com/questions/16568313/arrows-on-links-in-d3js-force-layout
                    const dx = d.target.x - d.source.x,
                        dy = d.target.y - d.source.y,
                        dr = Math.sqrt(dx * dx + dy * dy),
                        gamma = Math.atan2(dy, dx), // Math.atan2 returns the angle in the correct quadrant as opposed to Math.atan
                        sx = Math.max(radius, Math.min(width - radius, d.source.x + (Math.cos(gamma) * radius))),
                        sy = Math.max(radius, Math.min(height - radius, d.source.y + (Math.sin(gamma) * radius))),
                        // Recall that 10 is the size of the arrow
                        tx = Math.max(radius, Math.min(width - radius, d.target.x - (Math.cos(gamma) * (radius + arrowSize)))),
                        ty = Math.max(radius, Math.min(height - radius, d.target.y - (Math.sin(gamma) * (radius + arrowSize))));
                    // If you like a tighter curve, you may recalculate dx dy dr:
                    //dx = tx - sx;
                    //dy = ty - sy;
                    //dr = Math.sqrt(dx * dx + dy * dy);
                    return "M" + sx + "," + sy + "A" + dr + "," + dr + " 0 0,1 " + tx + "," + ty;
                });
                // Straight path
                // linkpath
                //     .attr("d", d => "M" + d.source.x + "," + d.source.y + " " + d.target.x + "," + d.target.y);
            });

        function dragstarted(event: d3.D3DragEvent<SVGCircleElement, CovidNode, d3.SubjectPosition>, d: CovidNode)
        {
            if (!event.active)
            {
                simulation.alphaTarget(0.05).restart()
            }
            else
            {
                console.log("dragstarted event.active", event.active, event)
            }
            d.fx = d.x;
            d.fy = d.y;
        }

        function dragged(event: d3.D3DragEvent<SVGCircleElement, CovidNode, d3.SubjectPosition>, d: CovidNode)
        {
            d.fx = event.x;
            d.fy = event.y;
        }

        function dragended(event: d3.D3DragEvent<SVGCircleElement, CovidNode, d3.SubjectPosition>, d: CovidNode)
        {
            if (!event.active)
            {
                simulation.alphaTarget(0)
            }
            else
            {
                console.log("dragended event.active", event.active, event)
            }
            d.fx = null;
            d.fy = null;
        }
    }
}
</script>
