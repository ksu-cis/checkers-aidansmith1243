﻿// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.



var selectedChecker;

function onClickChecker(event) {
    if (selectedChecker) {
        selectedChecker.setAttribute("stroke","white");
    }
    selectedChecker = event.target;
    event.target.setAttribute("stroke", "green");

}

function onClickSquare(event) {
    if (selectedChecker) {
        document.getElementById("cx").value = selectedChecker.getAttribute("data-x");
        document.getElementById("cy").value = selectedChecker.getAttribute("data-y");
        document.getElementById("sx").value = event.target.getAttribute("data-x");
        document.getElementById("sy").value = event.target.getAttribute("data-y");
        document.getElementById("move-form").submit();
    }
}

var checkers = document.getElementsByTagName("circle");
for (var i = 0; i < checkers.length; i++) {
    checkers[i].addEventListener("click", onClickChecker);
}

var squares = document.getElementsByTagName("rect");
for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", onClickSquare);
}