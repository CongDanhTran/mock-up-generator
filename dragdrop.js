/* from https://www.w3schools.com/html/html5_draganddrop.asp */
/* drag drop java script start here */

var i = 0;
$('td').find('>*').each(function (i, e) {
    $(this).attr("draggable", true);
});

function allowDrop(ev) {

    ev.preventDefault();
}

function drag(ev) {
    ev.dataTransfer.setData("text/html", ev.target.id);
}

function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text/html");
    var nodeCopy = document.getElementById(data).cloneNode(true);
    $(nodeCopy).find(".description").remove();
    $(nodeCopy).find("div.view").removeClass("view");
    nodeCopy.id = "clone" + i;
    i++;
    ev.target.appendChild(nodeCopy);
}


function removeElm(e) {

    var ele = $(event.target).parent();
    if (confirm("Remove this element?")) {
        e.preventDefault();
        $(ele).parent().remove();
    }
}

/* drag drop java script end here */


//print button
$('#print').on("click", function () {
    window.print();
});
