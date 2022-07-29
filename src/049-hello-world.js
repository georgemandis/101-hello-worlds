/**
 *  Hello World #49
 *  By @mcecode
 */

var a = a => parseInt(a, 2)
var b = a => a.toString(2).padStart(8, 0 + "")
var c = a => a.reduce((b, c) => b + +c, 0)
var d = a => String.fromCharCode(a)
var e = a => a.b.map(b => a.a[b]).join`` == a.b.map(_ => a.c).join``
var f = a => a.length - c(a)
var g = a => b(Math.round(Math.random() * a))
var h = a => a.split``

var i = g(87)
var j = g(1)
var k = g(2)
var l = g(72)
var m = g(38)
var n = g(115)
var o = g(37)
var p = g(11)
var q = g(17)

while (!(6 == f(h(i)) && e({c: 1, a: i, b: [4, 1]}))) i = b(a(i) ^ a(g(93)))
while (4 != f(h(j)) || !e({b: [4, 5, 1, 2], a: j, c: 1})) j = b(a(g(112)) & a(g(127)))
while (!(e({b: [4, 6, 0, 3], c: 0, a: k}) && 4 == c(h(k)))) k = b(a(g(124)) | a(g(111)))
while (!e({a: l, c: 0, b: [3, 0]}) || 6 != c(h(l))) l = b(a(l) ^ a(g(126)))
while (!(3 == f(h(m)) && e({a: m, c: 1, b: [6, 3, 7, 1, 5]}))) m = b(a(g(89)) | a(g(88)))
while (5 != f(h(n)) || !e({b: [2, 1, 5], a: n, c: 1})) n = b(a(n) ^ a(g(101)))
while (!(e({a: o, b: [5, 4, 0, 7], c: 0}) && 4 == c(h(o)))) o = b(a(g(116)) & a(g(114)))
while (!e({c: 0, a: p, b: [3, 7, 0, 6, 1]}) || 3 != c(h(p))) p = b(a(g(46)) | a(g(52)))
while (7 != f(h(q)) || !e({a: q, b: [2], c: 1})) q = b(a(g(67)) & a(g(35)))

module.exports = () => d(a(i)) + d(a(k)) + d(a(j)) + d(a(j)) + d(a(l)) + d(a(p)) + d(a(q)) + d(a(m)) + d(a(l)) + d(a(o)) + d(a(j)) + d(a(n))

/**
 * If run directly "Hello, World" will be written to the console
 * If run as a module during the tests it return "Hello, World" as
 * a value to assert correctness;
 */

module.id == "." ? console.log(module.exports()) : null
