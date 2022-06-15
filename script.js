let usernameInput = document.getElementById("searchInput");
let allNamesDOMCollection = document.getElementsByClassName("name");


usernameInput.addEventListener('keyup', function (event) {


    let searchQuery = event.target.value.toLowerCase();

    for (let counter = 0; counter < allNamesDOMCollection.length; counter++) {
        const currentName = allNamesDOMCollection[counter].textContent.toLowerCase();
        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[counter].style.display = "block";
        } else {
            allNamesDOMCollection[counter].style.display = "none";
        }
    }
})


