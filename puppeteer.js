const puppeteer = require('puppeteer');

const tara      = async(siteurl) =>{
  const browser = await puppeteer.launch();
  const page    = await browser.newPage();
  await page.goto(siteurl);

  //incele sağ click elements html kodunda h1 sağ click Copy > Copy XPath
  const [baslikxpath] = await page.$x(`//*[@id="html5Canvas"]/div/main/div/div/div/div/div[1]/div/div/div/div[2]/h1`);
  const baslikcontent = await baslikxpath.getProperty('textContent');
  const baslik = await baslikcontent.jsonValue();
  console.log(baslikcontent);
  console.log(baslik);
  await browser.close();
}

tara('https://ismailgultekin.com');
