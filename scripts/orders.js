import { getOrders, getColors, getInteriors, getTech, getWheels } from "./database.js"


const buildPackageListItem = (order) => {
    const colors = getColors()
    const interiors = getInteriors()
    const techs = getTech()
    const wheels = getWheels()

    const chosenColor = colors.find(color => {
        return color.id === order.colorId
    })

    const chosenInterior = interiors.find(interior => {
        return interior.id === order.interiorId
    })
    
    const chosenTech = techs.find(tech => {
        return tech.id === order.techId
    })
    
    const chosenWheels = wheels.find(wheel => {
        return wheel.id === order.wheelId
    })
    
    
    
    
    const totalCost = chosenColor.price + chosenInterior.price + chosenTech.price + chosenWheels.price

    const costString = totalCost.toLocaleString("en-US", {
        style: "currency",
        currency: "USD"
    })
    
    return `<li>
        Order #${order.id} cost ${costString}
        </li>`
    
    
    // return `<li>
    //     Order #${order.id} was placed on ${order.timestamp}
    //     </li>`
}




export const packageOrder = () => {

const orders = getOrders()

let html = "<ul>"

const listItems = orders.map(buildPackageListItem)

html += listItems.join("")
html += "</ul>"

return html
}