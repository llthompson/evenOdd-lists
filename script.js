let usersWord = "";
let oddList = document.getElementById("odd")
let evenList = document.getElementById("even")

function updateWord(element) {
    usersWord = element.value
}

function handleSubmit() {
    let newListItem = document.createElement('li')
    console.log(newListItem)
    newListItem.innerText = usersWord

    if (usersWord.length % 2 === 0) {
        evenList.appendChild(newListItem)
    } else {
        oddList.appendChild(newListItem)
    }



    document.getElementById("even-odd-form").reset()
}

var input = document.getElementById("even-odd-form");
input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submit-btn").click();
    }
});