import { getWheels, setWheels } from "./database.js"

const wheels = getWheels()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "wheels") {
            setWheels(parseInt(event.target.value))
        }
    }
)

export const wheelsChoices = () => {
    let html =  `<h2>Wheels</h2>`

    html += `<select id="wheels">`
    html += `<option value="0">Select a technology package</option>`

    for (const wheel of wheels) {
        html += `<option value="${wheel.id}">${wheel.type}</option>`
    }
    html += "</select>"
    return html 


} 