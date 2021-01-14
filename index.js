
const {JSDOM} = require("jsdom")
require("google-closure-library")
goog.require("goog.async.nextTick")

console.log("Hello World")

function callback() {
    console.log("Hello from callback")
}

const dom = new JSDOM();

dom.window.onload = function () {
    goog.async.nextTick(callback)
}

setInterval(() => {}, 1 << 30) //keep node alive
