var formulario = {'seq':0,'campos':[],'dados':[]};

// Função para adicionar campos ao formulário
function addCampo() {
	formulario.seq++;
	id 		= formulario.seq;
	titulo 	= 'Titulo'+formulario.seq;

	formulario.campos.push({'id':id,'titulo':titulo});

	localStorage.setItem('formulario', JSON.stringify(formulario));

	let campo 	= createCampo(id,titulo);
	document.getElementById('pagina').appendChild(campo);

	message("Campo adicionado!");
}

function createCampo(id,titulo,valor) {
	let campo 	= document.createElement('div');
	campo.style.marginBottom = '5px';

	let item = '<input type="text" id="titulo'+id+'" name="titulo'+id+'" class="titulo" value="'+titulo+'">';

	item = item + '<input type="text" id="campo'+id+'" name="campo'+id+'" class="campo", value="'+valor+'">';

	campo.innerHTML = item;
	return campo;
}

function loadFormulario(dados) {
	document.getElementById('pagina').innerHTML = '';
	if(typeof dados == 'undefined') dados=[];

	for (var i = 0; i <= formulario.campos.length - 1; i++) {	
		let id 		= formulario.campos[i].id;
		let titulo 	= formulario.campos[i].titulo;	
		let valor 	= '';

		for (var l = 0; l <= dados.length - 1; l++) {	
			if(dados[l].campo == id){
				valor = dados[l].valor;
			}
		}

		let campo 	= createCampo(id,titulo,valor);
		document.getElementById('pagina').appendChild(campo);
	}

	message("Montando formulario!");
}

function loadDados() {
	var dados = [];
	document.getElementById('lista').innerHTML = '';
	let tabela = "<table class='tabela'><thead><tr><th>Id</th>";

	for (var i = 0; i <= formulario.campos.length - 1; i++) {	
		let id 		= formulario.campos[i].id;
		let titulo 	= formulario.campos[i].titulo;
		tabela  	= tabela + "<th>"+titulo+"</th>";
	}
	tabela = tabela + "<th></th></tr></thead><tbody>";

	for (var i = 0; i <= formulario.dados.length - 1; i++) {	
		let registro = formulario.dados[i]; 
		let id = (i+1);
		tabela = tabela + "<tr>";
		tabela = tabela + "<td>"+id+"</td>";

		for (var l = 0; l <= registro.length - 1; l++) {	
			tabela = tabela + "<td>"+registro[l].valor+"</td>";
		}

		tabela = tabela + "<td><a href='#' onclick='loadDado("+i+")'>>></a></td></th></tr>";
	}

	tabela = tabela + "</tbody></table>"; 
	document.getElementById('lista').innerHTML = tabela;

	message("Listando dados!");
}

function loadDado(id) {
	let dados = formulario.dados[id];
	console.log(dados);
	loadFormulario(dados);
	message("Carregado dados!");
}

function saveDados() {
	var dados = [];
	for (var i = 0; i <= formulario.campos.length - 1; i++) {	
		let id = formulario.campos[i].id;
		var titulo = document.querySelector('#titulo' + id).value;
		var valor = document.querySelector('#campo' + id).value;
	
		formulario.campos[i].titulo = titulo;

		dados.push({'campo':id, 'valor': valor});
	}
	formulario.dados.push(dados);
	localStorage.setItem('formulario', JSON.stringify(formulario));

	message("Salvando dados!");
}

function exportFormulario() {
		var json = localStorage.getItem('formulario');
		if (json != null) {
			const blob = new Blob([JSON.stringify(json, null, 2)], { type: 'application/json' });
  			const a = document.createElement('a');
  			a.href = URL.createObjectURL(blob);
  			a.download = `pybrowser-${Date.now()}.json`;
  			a.click();
			console.log('Exportando formulario...');
			console.log(json);
		} else {
			console.log("Não há dados!");
		}
	}

function importFormulario() {
	document.getElementById('fileInput').click();
}

function message(mensagem) {
    console.log(mensagem);
    //console.log(JSON.stringify(formulario));
}

function loadFile(event) {
	const file = event.target.files[0];
	if (file) {
		const reader = new FileReader();

		reader.onload = function(e) {
			try {
				const jsonString = e.target.result;
				formulario = JSON.parse(jsonString);
				localStorage.setItem('formulario', JSON.stringify(formulario));
				loadFormulario();
				loadDados();
			} catch (error) {
				console.error("Erro ao ler arquivo:", error);
			}
		};

		reader.readAsText(file);
	}
}

window.onload = function() {
	let salvo = localStorage.getItem('formulario');
	if (salvo != null) {
		formulario = JSON.parse(salvo);
		loadFormulario();
		loadDados();
		message("Carregando formulario!");
	} else {
		message("Sem formulario!");
	}
};	