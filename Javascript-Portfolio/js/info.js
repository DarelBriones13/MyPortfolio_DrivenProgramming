const leftDiv = ( title ) => {
    let div = document.createElement("div")
    div.className = "classL"
    div.innerHTML = `
    <a href="#" class="logo">${title}</a>

    <i class="fa-solid fa-bars" id="menu-icon"></i>

    <nav class="navbar">
        <ul>
            <li><a href="#sectionOne" class="active">Home</a></li>
            <li><a href="#sectionTwo">Projects</a></li>
            <li><a href="#education">Education</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
    </nav>
    `
    
    return div
}



export { leftDiv }