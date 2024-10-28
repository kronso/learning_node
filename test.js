const express = require('express');
const cors    = require('cors');

let app = express();

const API_KEY = "RGAPI-b4cc8ad3-30eb-4f16-9e4c-17892ccf740e";
const url = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/weird%20person/4086?api_key=RGAPI-b4cc8ad3-30eb-4f16-9e4c-17892ccf740e`;

async function getPUUID(gameName, tagLine) {
    const url = `https://asia.api.riotgames.com/riot/account/v1/accounts/by-riot-id/${gameName}/${tagLine}?api_key=${API_KEY}`;

    let response = new Response();
    response = await fetch(url)
        .then(result => result.json());

    // verify response
    // console.log(response);
    return response;
}
async function getMatches() {

    const PUUID = getPUUID("weird person", "4086");
    console.log(PUUID);

    const url = `https://asia.api.riotgames.com/val/match/v1/matchlists/by-puuid/${PUUID}?api_key=${API_KEY}`;

    let response = new Response();
    response = await fetch(url)
        .then(result => result.json());

    // verify response
    console.log(response);
}
getMatches();

