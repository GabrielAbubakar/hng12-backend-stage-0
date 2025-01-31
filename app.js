const express = require('express')


const app = express()


app.get('/', (req, res) => {
    const currentDate = new Date().toISOString()



    res.status(200).json({
        email: 'gabrielogrima@gmail.com',
        currentDate,
        githubUrl: ''
    })
})

app.listen(8000, () => {
    console.log('App is listening')
})