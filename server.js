import express from 'express';
import cors from 'cors';
const app = express();


// the port your server runs on - hope 3000 isn't in use!
// if you close your terminal window without properly stopping the server
// it'll be there for a while
const port = 3000;
app.use(cors({origin: 'http://localhost:5173'}));

// app.get, .post, .push - these are all set to handle different
// HTTP verbs/methods - we should talk about these
// I like to call these "routes"
app.get('/', (req, res) => {
    res.send('Hello World!');
})

app.get('/another_route', (req, res) => {
    res.send('This is another route!');
})

// I want to add a route that spits back the current Chicago weather
app.get('/weather', async (req, res) => {

    let weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=42.9187&lon=-87.6298&appid=414bdd15b8405e3a47982e6fc5f805d1";

    // getting back a promise, asynchronously
    let response = await fetch(weatherUrl);

    let weatherData = await response.json();

    console.log(weatherData);
    console.log(weatherData.main.temp);

    res.send({'temp': weatherData.main.temp, 'wind_speed': weatherData.wind.speed});
})

// starts the app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})