const express = require("express");
const axios = require("axios");

const PORT = 4000;
const app = express();

const options = {
  method: "GET",
  url: "https://dad-jokes.p.rapidapi.com/random/joke",
  headers: {
    "content-type": "application/octet-stream",
    "X-RapidAPI-Key": "ac36004e64msh2f03d5e28e75ab5p1a32bfjsn9dc87404b637",
    "X-RapidAPI-Host": "dad-jokes.p.rapidapi.com",
  },
};

app.get("/", async function getRandomJokes() {
  try {
    const response = await axios.get(options);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
});

app.listen(PORT, () => {
  console.log("App is running on port " + PORT);
});
