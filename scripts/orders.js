import { getOrders } from "./database.js"

export const packageOrder = () => {

const orders = getOrders()

let html = "<ul>"

html += `order #${customOrders.id} was placed on ${customOrders.timestamp}`
html += "</ul>"
}