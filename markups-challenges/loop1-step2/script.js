function select(selected, unselected1, unselected2){
    document.getElementById(selected).classList.toggle("selected");
    document.getElementById(selected + "Text").classList.toggle("text-selected");
    document.getElementById(unselected1).classList.remove("selected");
    document.getElementById(unselected1 + "Text").classList.remove("text-selected");
    document.getElementById(unselected2).classList.remove("selected");
    document.getElementById(unselected2 + "Text").classList.remove("text-selected");
}