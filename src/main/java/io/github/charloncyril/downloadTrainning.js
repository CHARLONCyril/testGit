var casper = require('casper').create();
casper.start("http://www.dessinemoiunsite.com/comment-creer-un-lien-de-telechargement-fichier/");
casper.waitForText("Téléchargez le fichier",function() {
	
	this.download("http://www.dessinemoiunsite.com/documents/Acronymes-Informatiques.xls","fichier.xls");
});

casper.run();
