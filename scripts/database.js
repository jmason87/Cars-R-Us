const database = {
   colors: [
        {
            id: 1,
            color: "Silver",
            price: 50
        },
        {
            id: 2,
            color: "Midnight Blue",
            price: 100
        },
        {
            id: 3,
            color: "Firebrick Red",
            price: 200
        },
        {
            id: 4,
            color: "Spring Green",
            price: 1000
        } 
    ],
    interiors: [
        {
            id: 1,
            intPackage: "Beige Fabric",
            price: 150
        },
        {
            id: 2,
            intPackage: "Charcoal Fabric",
            price: 150
        },
        {
            id: 3,
            intPackage: "White Leather",
            price: 175
        },
        {
            id: 4,
            intPackage: "Black Leather",
            price: 525
        }
    ],
    techPackage: [
        {
            id: 1,
            tech: "Basic Package",
            price: 432
        },
        {
            id: 2,
            tech: "Navigation Package",
            price: 837
        },
        {
            id: 3,
            tech: "Visibility Package",
            price: 142
        },
        {
            id: 4,
            tech: "Ultra Package",
            price: 435
        }
    ],
    wheels: [
        {
            id: 1,
            type: "17-inch Pair",
            price: 23
        },
        {
            id: 2,
            type: "17-inch Pair Black",
            price: 5325
        },
        {
            id: 3,
            type: "18-inch Pair Spoke Silver",
            price: 1504
        },
        {
            id: 4,
            type: "18-inch Pair Spoke Black",
            price: 245
        }
    ],
    customOrders: [
        {
            id: 1,
            colorId: 2,
            interiorId: 4,
            techId: 1,
            wheelId: 3,
            timestamp: 1614659931693
        }
    ],
    packageBuilder: {

    },
}

export const getColors = () => {
    return database.colors.map(color => ({...color}))
}

export const getInteriors = () => {
    return database.interiors.map(interior => ({...interior}))
}

export const getTech = () => {
    return database.techPackage.map(tech => ({...tech}))
}

export const getWheels = () => {
    return database.wheels.map(wheel => ({...wheel}))
}

export const getOrders = () => {
    return database.customOrders.map(customOrder => ({...customOrder}))
}

export const setColor = (id) => {
    database.packageBuilder.colorId = id
}

export const setInterior = (id) => {
    database.packageBuilder.interiorId = id
}

export const setTech = (id) => {
    database.packageBuilder.techId = id
}

export const setWheels = (id) => {
    database.packageBuilder.wheelId = id
}

export const addOrder = () => {
    const newOrder = {...database.packageBuilder}
    const lastIndex = database.customOrders.length -1
    newOrder.id = database.customOrders[lastIndex].id + 1
    newOrder.timestamp = Date.now()
    database.customOrders.push(newOrder)
    database.packageBuilder = {}
    document.dispatchEvent(new CustomEvent("stateChanged"))
}