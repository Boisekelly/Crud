function addGift(){
    var newGift = document.createElement("div");
    newGift.innerHTML = document.getElementById("box").value;
    newGift.onclick = removeGift;
    document.getElementById("list").appendChild(newGift);
    saveList();
}
function removeGift(){
    document.getElementById("list").removeChild(this);
    saveList();
}
function saveList(){
    localStorage.storedList = document.getElementById("list").innerHTML;
}
function loadList(){
    document.getElementById("list").innerHTML = localStorage.storedList;
    for(var i = 0; i < saveList.children.length; i++){
        saveList.children[i].onclick = removeGift;
    }
}