const request = require("request-promise");
const cheerio = require("cheerio");
const { json, errorJson } = require('../utils/response');

exports.index = (req, res) => {
    const fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
    
    return json(res, {
        maintainer: 'Azhari Muhammad M <azhari.marzan@gmail.com>',
        source: '',
    });
}

exports.search = async (req, res) => {
    const baseUrl = req.protocol + '://' + req.get('host');
    const { q } = req.query;
    if(!q) {
        return errorJson(res, "Mohon isi query pencarian!");
    }
    const htmlResult = await request.get(
        `${process.env.BASE_URL}/search.php?q=${q}`
    );
    const $ = await cheerio.load(htmlResult);

    return json(res, []);
}