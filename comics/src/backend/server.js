const express = require('express');
const axios = require('axios');

const app = express();

// Ruta para hacer la solicitud a la API de XKCD y reenviar los datos
app.get('/comic/:num', async (req, res) => {
    try {
        const response = await axios.get(`https://xkcd.com/${req.params.num}/info.0.json`);
        res.header('Access-Control-Allow-Origin', '*');
        res.send(response.data);
    } catch (error) {
        console.error(error);
        res.status(500).send('Server Error');
    }
});

// Iniciar el servidor en el puerto 5000
app.listen(5000, () => {
    console.log('Server started on port 5000');
});
