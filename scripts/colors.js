import { getColors,setColor } from "./database.js"

const colors = getColors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "color") {
            setColor(parseInt(event.target.value))
        }
    }
)

export const colorChoices = () => {
    let html = `<h2>Colors</h2>`

    html += `<select id="color">`
    html += `<option value="0">Select a Color</option>`

    for (const color of colors) {
        html += `<option name="color" value="${color.id}">${color.color}</option>`

    }
    html += "</select>"
    return html 
    
}
