const app = require('express')();
const PORT = 25501;

function getRandomInt(max) {
    return Math.floor(Math.random() * max)
}

app.get('/', (req, res) => {
    var response;
    RNG = getRandomInt(17);
    console.log(RNG)
    if(RNG === 0 || RNG === 2 || RNG === 3 || RNG === 1){
        response = "Yes."
    }
    if(RNG === 5 || RNG === 6 || RNG === 7 || RNG === 4){
        response = "No."
    }
    if(RNG === 9 || RNG === 10 || RNG === 11 || RNG === 8){
        response = "Ho Ho Ho."
    }
    if(RNG === 13 || RNG === 14 || RNG === 15 || RNG === 12){
        response = "Ugh."
    }
    res.status(200).send(response)
});

app.listen(PORT)