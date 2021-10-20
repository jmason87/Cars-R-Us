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
    ]
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