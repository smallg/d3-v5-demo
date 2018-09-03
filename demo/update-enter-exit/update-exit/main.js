var div = d3.select("body")
        .selectAll("div");
var divDataset = [2, 4, 6];
var updateDiv = div.data(divDataset);
var exitDiv = updateDiv.exit();
updateDiv.text(function (d, i) {
    return "update: " + d + ", index: " + i;
});
exitDiv.text(function (d, i) {
    return "exit: " + i;
});