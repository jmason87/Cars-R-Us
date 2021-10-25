import { getInteriors, setInterior } from "./database.js"

const interiors = getInteriors()

document.addEventListener(
    "change",
    (event) => {
        if (event.target.id === "interiors") {
            setInterior(parseInt(event.target.value))
        }
    }
)

export const interiorsChoices = () => {
    let html =  `<h2>Interiors</h2>`

    html += `<select id="interiors">`
    html += `<option value="0">Select a technology package</option>`

    for (const interior of interiors) {
        html += `<option value="${interior.id}">${interior.intPackage}</option>`
    }
    html += "</select>"
    return html 
}