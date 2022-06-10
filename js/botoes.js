var botaoIniciar = document.getElementById ('botaoIniciar');
var botaoIncremento = document.getElementById ('botaoIncremento');
var botoes = document.querySelector ('.botoes');
var tela =  document.getElementById ('tela');
var inputPagina = document.querySelector ('.inputPagina');
var btnDesistir = document.getElementById ('desistir');
var btnCancelar = document.getElementById ('botaoCancelar');
var btnSalvar = document.getElementById ('botaoSalvar');
var btnNovoJogo = document.getElementById ('novoJogo');


botaoIniciar.addEventListener('click', function () {
	montaTabuleiro();
	botoes.style.display = 'none';
	escreverTracinhos();
});


botaoIncremento.addEventListener('click', function(){
	botoes.style.display = 'none';
	inputPagina.style.display = 'inline-block';
})

btnDesistir.addEventListener('click', function(){
	botoes.style.display = 'block';
	tabuleiro.style.display = 'none';
	botaoIniciar.textContent = 'Voltar ao Jogo';
})

btnCancelar.addEventListener ('click', function(){
	botoes.style.display = 'block';
	inputPagina.style.display = 'none';
})

btnSalvar.addEventListener ('click', function(){
	var palavraDigitada = inputPalavra.value;
	if (inputPalavra.value == ''){
		alert ('Digite uma palavra');
	}else{
		palavras.push(palavraDigitada.toUpperCase());
		inputPagina.style.display = 'none';
		inputPalavra.value = '';
		resetaTabuleiro();
		montaTabuleiro();
		escreverTracinhos();
	}
});

btnNovoJogo.addEventListener ('click', function(){
	resetaTabuleiro();
	montaTabuleiro();
	escreverTracinhos();
})
