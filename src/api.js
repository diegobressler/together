const axios = require("axios");

const api = axios.create({
    baseURL: "https://api.brasil.io/v1/dataset/socios-brasil/empresas/data/"
});

module.exports = api;