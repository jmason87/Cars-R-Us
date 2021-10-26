import { colorChoices } from "./colors.js";
import { addOrder } from "./database.js";
import { interiorsChoices } from "./interiors.js";
import { packageOrder } from "./orders.js";
import { techChoices } from "./tech.js";
import { wheelsChoices } from "./wheels.js";



document.addEventListener(
    "click",
    (event) => {
        if (event.target.id === "orderButton") {
            addOrder()
        }
    }
)

export const carsRUs = () => {
    return `
        ${colorChoices()}
        ${interiorsChoices()}
        ${techChoices()}
        ${wheelsChoices()}

        <br><br><br>
        <article id="order">
        <button id="orderButton">Create Custom Order</button>
        </article>
    
        <article class="customOrders">
        <h2>Car Package Orders</h2>
        </article>
        
        
        ${packageOrder()}
        `


}
