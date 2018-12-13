(function createTimeNodes() { //时间轴
    var date = new Date()
    for (let i = 0; i < 12; i++) {
        var nodes = document.getElementsByClassName("time")
        var length = nodes.length + 1;
        var e1 = document.createElement('li')
        var e2 = document.createElement('span')
        e1.className = "time"
        e1.draggable = true
        e1.addEventListener('dragstart', drag)
        e2.className = "order_item"
        e2.style.left = length / 13 * 100 + '%';
        e2.textContent = date.getFullYear() + "/" + length;
        e1.appendChild(e2)
        document.getElementsByClassName("main_line")[0].appendChild(e1);
    }

})();

function allowDrop(ev) { 
    ev.preventDefault();
}

function drag(ev) {  // drag element
    ev.dataTransfer.setData("Text", ev.target.childNodes[0].textContent);
      if (ev.x > (window.screen.availWidth / 2)) {
        direction = "left"
    } else {
        direction = "right"
    }
}

function drop(ev) { // drop element
    ev.preventDefault();
    moveElement(ev);
    var text =  ev.dataTransfer.getData("Text");
    loadXMLDoc(`/drag/`+encodeURIComponent(text));
}


function moveElement(ev) {// mouve timer
    var nodes = document.getElementsByClassName("time")
    if (direction === "right") {
        for (let i = 0; i < 12; i++) {
            if ((i + 1) < 12) {
                nodes[i].childNodes[0].style.left = nodes[i].nextSibling.childNodes[0].style.left
            } else {
                nodes[i].childNodes[0].style.left = nodes[0].childNodes[0].style.left;
            }
        }
    } else {
        for (let i = 11; i >= 0; i--) {
            if (i > 0) {
                nodes[i].childNodes[0].style.left = nodes[i - 1].childNodes[0].style.left;
            } else {
                nodes[i].childNodes[0].style.left = nodes[11].childNodes[0].style.left
            }
        }
    }
}