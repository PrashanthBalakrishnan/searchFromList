
let searchItems = document.getElementById("searchInput");
const listItems = document.getElementsByClassName("name");


searchItems.addEventListener("keyup", function (event) {
    let searchQuery = event.target.value;

    for (let i = 0; i < listItems.length; i++) {
        const searchList = listItems[i].textContent.toLowerCase();
        if (searchList.includes(searchQuery)) {
            listItems[i].style.display = "block";
        } else {
            listItems[i].style.display = "none";
        }
    }
})