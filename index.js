function tellJoke() {
    window.alert("Justin Beaver!")
}

const button = document.getElementById("joke-btn")

button.addEventListener("click", tellJoke)