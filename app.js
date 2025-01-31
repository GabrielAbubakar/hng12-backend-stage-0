const express = require('express')


const app = express()


app.get('/', (req, res) => {
    const current_datetime = new Date().toISOString()

    res.status(200).json({
        email: 'gabrielogrima@gmail.com',
        current_datetime,
        github_url: 'https://github.com/GabrielAbubakar/hng12-backend-stage-0'
    })
})

app.listen(8000, () => {
    console.log('App is listening')
})