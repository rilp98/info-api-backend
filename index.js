const express = require('express')
const app = express()

const cors = require('cors')

app.use(cors())

const info = [
    {
        id: 1,
        title:'Outdoor yoga class',
        alt:'Yoga class',
        description:'Have a relaxing guided meditation provided by Emily.',
        price: '$10',
        images: [
            'https://res.cloudinary.com/dpdlublfz/image/upload/v1643210879/CodeCademy/Mobile/Yoga-Mobile_f7nxfk.png',
            'https://res.cloudinary.com/dpdlublfz/image/upload/v1643210726/CodeCademy/Desktop/Yoga-Desktop_jg09ap.png',
        ]
    },
    {
        id: 2,
        title:'Make your candles activity',
        alt:'Make your candles',
        description:'Learn and create your own personalized candles.',
        price: '$35',
        images: [
            'https://res.cloudinary.com/dpdlublfz/image/upload/v1643210879/CodeCademy/Mobile/Candle-Mobile_ty0ud7.png',
            'https://res.cloudinary.com/dpdlublfz/image/upload/v1643210725/CodeCademy/Desktop/Candle-Desktop_mw3mhe.png',
        ]
    },
    {
        id: 3,
        title:'Learn to cook new and interesting recipes',
        alt:'Learn to cook activity',
        description:'Learn interesting recipes of Mediterranean cuisine.',
        price: '$40',
        images: [
            'https://res.cloudinary.com/dpdlublfz/image/upload/v1643210879/CodeCademy/Mobile/Cook-Mobile_sysxbz.png',
            'https://res.cloudinary.com/dpdlublfz/image/upload/v1643210725/CodeCademy/Desktop/Cook-Desktop_mserwz.png',
        ]
    },
    {
        id: 4,
        title:'Expedition the Santo Angel with us',
        alt:'Expedition on the Santo Angel',
        description:'Take a 3-day guided trip to Santo Angel with us.',
        price: '$15',
        images: [
            'https://res.cloudinary.com/dpdlublfz/image/upload/v1643210888/CodeCademy/Mobile/Expedition-Mobile_tmwhuo.png',
            'https://res.cloudinary.com/dpdlublfz/image/upload/v1643210726/CodeCademy/Desktop/Expedition-Desktop_qjoxma.png',
        ]
    },
    {
        id: 5,
        title:'Learn to take photos of food',
        alt:'Learn to take photos',
        description:'Improve your photos with the help of Michael.',
        price: '$12',
        images: [
            'https://res.cloudinary.com/dpdlublfz/image/upload/v1643210879/CodeCademy/Mobile/Photo-Mobile_pbt0vf.png',
            'https://res.cloudinary.com/dpdlublfz/image/upload/v1643210726/CodeCademy/Desktop/Photos-Desktop_iiu5oo.png',
        ]
    },
    {
        id: 6,
        title:'Diving in the Caribbean sea',
        alt:'Diving in the Caribbean',
        description:'Dive in the islands of Morrocoy.',
        price: '$54',
        images: [
            'https://res.cloudinary.com/dpdlublfz/image/upload/v1643210888/CodeCademy/Mobile/Diving-Mobile_gmmmev.png',
            'https://res.cloudinary.com/dpdlublfz/image/upload/v1643210963/CodeCademy/Desktop/Diving-_Desktop_yv63os.png',
        ]
    }
]

const getItemsByTitle = (title) => info.filter(item => item.title.toLowerCase().includes(title.toLowerCase()))

app.get('/api/info', (request, response) => {
    const {title} = request.query

    let result = info

    if (title) {
        result = getItemsByTitle(title)
    }

    if (!info.length) {
        response.status(404).end()
    }

    return response.json(result)
})

app.get('/api/info/:id', (request, response) => {
    const id = +request.params.id
    const item = info.find((item) => item.id === id)

    if (item) {
        response.json(item)
    } else {
        response.status(404).end()
    }

})

const PORT = process.env.PORT || 3001

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})
