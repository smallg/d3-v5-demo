var p = d3.select("body")
        .selectAll("p");
var dataset = [3, 6, 9, 12, 15];
var update = p.data(dataset);
var enter = update.enter();
update.text(function (d, i) {
    return "update: " + d + ", index: " + i;
});
var pEnter = enter.append("p");
pEnter.text(function (d, i) {
    return "enter: " + d + ", index: " + i;
});