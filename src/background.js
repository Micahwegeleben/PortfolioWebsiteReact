import $ from 'jquery';

var interval = null;
export default function startGradient() {
    if (interval) clearInterval(interval)
var colors = new Array(
    [0, 255, 0],
    [80, 58, 245],
    [255, 0, 0],
    [243, 132, 21],
    [0, 0, 255],
    [211, 110, 52],
    [255, 255, 0],
    [196, 114, 192],
    [80, 58, 245],
    [255, 255, 255],
    [243, 132, 21],
    [0, 255, 255]);

var step = 0;
var colori = [0, 1, 2, 3];
var speed = 0.0320;
function updateGradient() {

    if ($ === undefined) return;

    var c0_0 = colors[colori[0]];
    var c0_1 = colors[colori[1]];
    var c1_0 = colors[colori[2]];
    var c1_1 = colors[colori[3]];

    var istep = 1 - step;
    var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

    var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

    $('#gradient').css({
        background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
    }).css({
        background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"
    });
    step += speed;
    if (step >= 1) {
        step %= 1;
        colori[0] = colori[1];
        colori[2] = colori[3];
        colori[1] = (colori[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
        colori[3] = (colori[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

    }
}
    interval = setInterval(updateGradient, 10);

}