var p = d3.select("body")
        .selectAll("p");
var dataset = ['so cute', 'cute', 'fat'];

var str = ' is an animal ';

// p.datum(str)
//         .text(function (d, i) {
//             return "第" + i + "个元素" + d;
//         });

p.data(dataset)
        .text(function (d, i) {
            return 'The ' + i + ' animal ' + d;
        });