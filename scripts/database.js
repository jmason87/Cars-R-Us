const database = {
   colors: [
        {
            id: 1,
            color: "Silver"
        },
        {
            id: 2,
            color: "Midnight Blue"
        },
        {
            id: 3,
            color: "Firebrick Red"
        },
        {
            id: 4,
            color: "Spring Green"
        } 
    ],
    interiors: [
        {
            id: 1,
            intPackage: "Beige Fabric"
        },
        {
            id: 2,
            intPackage: "Charcoal Fabric"
        },
        {
            id: 3,
            intPackage: "White Leather"
        },
        {
            id: 4,
            intPackage: "Black Leather"
        }
    ],
    techPackage: [
        {
            id: 1,
            tech: "Basic Package"
        },
        {
            id: 2,
            tech: "Navigation Package"
        },
        {
            id: 3,
            tech: "Visibility Package"
        },
        {
            id: 4,
            tech: "Ultra Package"
        }
    ],
    wheels: [
        {
            id: 1,
            type: "17-inch Pair"
        },
        {
            id: 2,
            type: "17-inch Pair Black"
        },
        {
            id: 3,
            type: "18-inch Pair Spoke Silver"
        },
        {
            id: 4,
            type: "18-inch Pair Spoke Black"
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
    return database.wheels.map(color => ({...color}))
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
    database.packageBuilder.wheelsId = id
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