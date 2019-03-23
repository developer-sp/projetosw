if('serviceWorker' in navigator) {
	window.onload = function() {

		navigator.serviceWorker.register('/projetosw/sw.js')
			.then(function(){
				console.log("Service Worker registrado com sucesso!");
			}, function(e){
				console.log("Houve um erro ao registrar o Service Worker");
				console.log(e);
			});

			setTimeout(function(){

				var img = new Image();
				img.src = 'carro.jpg';
				document.body.appendChild(img);

			}, 200);
	};
}