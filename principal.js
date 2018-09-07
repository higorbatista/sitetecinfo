var banners=
	["os melhores do brasil", "qualidade"]
var bannerAtual = 0;

function trocaBanner(){
	bannerAtual = (bannerAtual + 1) %2;
	document.querySelector('h2#mansagem').textContent =
		banner[bannerAtual];


}

Setintevalt(trocaBanner,2000)