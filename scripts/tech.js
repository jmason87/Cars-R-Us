import { getTech, setTech } from "./database.js"

const techs = getTech()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "techs") {
            setTech(parseInt(event.target.value))
        }
    }
)

export const techChoices = () => {
    let html = `<h2>Technology</h2>`

    html += `<select id="techs">`
    html += `<option value="0">Select a technology package</option>`

    for (const tech of techs) {
        html += `<option value="${tech.id}">${tech.tech}</option>`
    }
    html += "</select>"
    return html 


}