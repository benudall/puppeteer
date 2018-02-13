const puppeteer = require('puppeteer');

(async () => {
	const browser = await puppeteer.launch();
	const page = await browser.newPage();
	await page.goto('http://gooogle.com');
	
	//evaluate script in the context of the page
	await page.evaluate(() => {
		document.body.style.background="blue";
	})
	
	//evaluate script in the context of the page while passing in variable
	let newColor = "red";
	await page.evaluate((newColor) => {
		document.body.style.background=newColor;
	},newColor)
	
	await page.screenshot({path: ' puppeteer example.png'});

	await browser.close();
})();

