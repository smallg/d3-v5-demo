var margin = {top: 60, bottom: 60, left: 300, right: 60};
var dataset = [250, 210, 170, 130, 90];

var svg = d3.select("svg");
var g = svg.append("g")
        .attr("transform", "translate(" + margin.top + "," + margin.left + ") rotate(-90)");
var rectHeight = 30;

g.selectAll("rect")
        .data(dataset)
        .enter()
        .append("rect")
        .attr("x", 20)
        .attr("y", function (d, i) {
            return i * rectHeight;
        })
        .attr("width", function (d) {
            return d;
        })
        .attr("height", rectHeight - 5)
        .attr("fill", "blue");