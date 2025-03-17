//console.log(document.getElementsByTagName("h1"));
// let dom = document.getElementById("dom");
//let dom = document.querySelectorAll("#dom");
let dom = document.querySelector("#dom");
console.log(dom);
if (dom) {
    //dom.append(`append()`);
    // dom.prepend(`prepend()`);
    dom.before(`before()`);
    dom.after(`after()`);
    //dom.replaceWith("<h2>Çהוסü בûכ div</h2>");

    let counter = document.getElementById("number");
    counter.style.cssText += "background-color:darckblue;";
    dom.replaceWith(counter);
    // console.log(dom.innerHTML);// = "<h2>innerHTML</h2>");
    //console.log(dom);
    //console.log(dom.outerHTML);// = "<h2>outerHTML</h2>");
    //console.log(dom); }
}// JavaScript source code
