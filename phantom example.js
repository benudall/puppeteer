var page = require('webpage').create();

//page.viewportSize={width:1680,height:720};
page.open("http://google.com" , function(status){
	
	//evaluate script in the context of the page
	page.evaluate(function(){
		document.body.style.background="blue";
	});
	
	//evaluate script in the context of the page while passing in variable
	var newColor = "red"
	page.evaluate(function(newColor){
		document.body.style.background=newColor;
	},newColor);
	
	//take screenshot
	page.render("phantom example.png");
	
	phantom.exit();
});