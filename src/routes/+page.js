

export const load = async({fetch}) => {
    const fetchEurope = async() => {
        const response11 = await fetch('https://spring23-bc-group6.onrender.com/movement?year_from=1400&year_to=2015&region=Europe')
        const movementEurope = await response11.json()
        return movementEurope
    }

    const fetchAfrica = async() => {
        const response2 = await fetch('https://spring23-bc-group6.onrender.com/movement?year_from=1400&year_to=2015&region=Africa')
        const movementAfrica = await response2.json()
        return movementAfrica
    }

    const fetchMiddleEast = async() => {
        const response2 = await fetch('https://spring23-bc-group6.onrender.com/movement?year_from=1400&year_to=2015&region=MiddleEast')
        const movementAfrica = await response2.json()
        return movementAfrica
    }

    const fetchAmericas = async() => {
        const response2 = await fetch('https://spring23-bc-group6.onrender.com/movement?year_from=1400&year_to=2015&region=Americas')
        const movementAfrica = await response2.json()
        return movementAfrica
    }

    const fetchAsia = async() => {
        const response2 = await fetch('https://spring23-bc-group6.onrender.com/movement?year_from=1400&year_to=2015&region=AsiaOceania')
        const movementAfrica = await response2.json()
        return movementAfrica
    }
    
    const fetchPaintings = async() => {
        const paintingRes = await fetch('https://spring23-bc-group6.onrender.com/paintings?img_folder=images'
        )
        const paintings = await paintingRes.json()
        return  paintings
    }

    const fetchRegions = async() => {
        const regionsRes = await fetch('https://spring23-bc-group6.onrender.com/region'
        )
        const regions = await regionsRes.json()
        return  regions
    }

    return {
        europe: fetchEurope(),
        africa: fetchAfrica(),
        middleEast: fetchMiddleEast(),
        americas: fetchAmericas(),
        asiaOceania: fetchAsia(),
        paintings:fetchPaintings(),
        regions:fetchRegions() 
    }
}