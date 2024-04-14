
const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());

console.log('running express ')

const  Locations = {'Yapkashnagar':{Distance : 60 , Description : 'the Neon Oasis Glowing alleys and rooftop races, powered by solar energy.'},
'Lihaspur':{Distance : 50 , Description : 'the Misty Labyrinth Ancient temples shrouded in fog, whispers of forgotten tech.'},
'NarmisCity':{Distance : 40 , Description : ' the Steel Jungle Towering skyscrapers and hidden underground networks.'},
'Shekharvati':{Distance : 30 , Description : 'the Sun-Kissed Valley Rolling hills and forgotten mining tunnels.'},
'Nuravgram' : {Distance : 20 , Description : 'the Quirky Village Talking robots and malfunctioning AI guardians.'}
}

const vehicles = {
    "EV Bike" : {Range : 60 , Count : 2},
    "EV Car" : {Range : 100 , Count : 1},
    "EV SUV" : {Range : 120 , Count : 1},
}
const Cities = ['Yapkashnagar','Lihaspur','NarmisCity','Shekharvati','Nuravgram']
const Clues = ['I like to race','Can yount see me','I am a capitalist','I hide in diamonds','I am with Terminator']


app.get('/', (req, res) => {
    const randomNumber = Math.floor(Math.random() * 5) ;
    const hideout  = Cities[randomNumber] ; 
    const clue = Clues[randomNumber] ; 
    const OUT = {Locations : Locations , vehicles : vehicles , hideout  : hideout ,clue : clue }

  res.json(OUT);
});

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});