function darkMode() {
    const darkmodeBtn = document.querySelector(".darkmodeBtn")
    const mainContainer = document.querySelector(".main__container")
    darkmodeBtn.addEventListener("click", () => {
        mainContainer.classList.toggle("darkmode__main")
    })
}

darkMode()