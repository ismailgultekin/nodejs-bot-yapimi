const cheerio = require('cheerio');
const rqtpro  = require('request-promise');
const url     = 'https://www.ismailgultekin.com/';

rqtpro(url).then((html)=>{
  //console.log(html);
  const $ = cheerio.load(html);

  const baslikcek = $('.user-specs h1').text();
  console.log(baslikcek);
});
