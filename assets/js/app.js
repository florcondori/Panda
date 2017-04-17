window.addEventListener("load", function(){
	var arrayImagenes = [{name:"Oso Panda", url:"Oso_panda.png"},
						{name:"Oso Panda en el Arbol", url:"panda_arbol.jpg"},
						{name:"Panda con su hijo", url:"panda_hijo.jpg"},
						{name:"Oso Panda sentado", url:"panda_sentado.jpg"}];
	//agregando img dinamicamente
	var seccionFotos = document.getElementById("pandas");
	seccionFotos.appendChild(cargarImagenes(arrayImagenes));

	//eliminando fotos
	var arrayBtn = document.getElementsByClassName("js-btn-cerrar-img");
	for(var i=0; i<arrayBtn.length; i++){
		arrayBtn[i].addEventListener("click", openImagen);
	}
});

function cargarImagenes(arrayImagenes){
	var documentFragment = document.createDocumentFragment();
	arrayImagenes.forEach(function(elem){
		var div = document.createElement("div");
		div.classList.add("div-contenedor");

		var img = document.createElement("img");
		img.setAttribute("src", "assets/img/"+elem.url);
		img.setAttribute("alt", elem.name);
		div.appendChild(img);

		var btn = document.createElement("button");
		btn.innerHTML = "X";
		btn.setAttribute("class", "js-btn-cerrar-img");
		div.appendChild(btn);

		documentFragment.appendChild(div);
	});

			return documentFragment;
}

function openImagen(){
	this.parentNode.style.display = "none";
}