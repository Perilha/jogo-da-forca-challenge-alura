var palavras = ["ARVORE", "PIADA", "TEMPO", "AUSENCIA"];
var pincel = document.getElementById('tela').getContext('2d');
var letras = [];
var palavraCorreta = '';
var erros = 7;
var acertos = 0;


function escolherPalavraSecreta(){
	var palavraSelecionada = palavras[Math.floor(Math.random()*palavras.length)];
	palavraSecreta = palavraSelecionada
	console.log (palavraSelecionada);
	return palavraSelecionada
}escolherPalavraSecreta();

function escreverTracinhos(){
	pincel.lineWidth = 3;
	pincel.lineCap = 'round';
	pincel.lineJoin = 'round';
	pincel.strokeStyle = '#0A3871';
	pincel.beginPath();
	var eixo = 380/palavraSecreta.length
	for (let i = 0; i < palavraSecreta.length; i++){
		pincel.moveTo(750+(eixo*i), 280);
		pincel.lineTo(790+(eixo*i), 280);
	}	
	pincel.stroke();
	pincel.closePath();
} 

function escreverLetraCorreta(index){
	pincel.font = 'bold 52px Inter';
	pincel.lineWidth = 3;
	pincel.lineCap = 'round';
	pincel.lineJoin = 'round';
	pincel.strokeStyle = '#0A3871';
	var eixo = 380/palavraSecreta.length
	pincel.fillText(palavraSecreta[index], 755+(eixo*index),260);
}

function escreverLetraIncorreta(letra, errorsLeft){
	pincel.font = 'bold 40px Inter';
	pincel.lineWidth = 3;
	pincel.lineCap = 'round';
	pincel.lineJoin = 'round';
	pincel.strokeStyle = '#0A3871';
	pincel.fillText(letra, 600+(40*(10-errorsLeft)),100,30);
}

function verificarLetraCorreta(key){
	if (letras.length < 1 || letras.indexOf(key) < 0){
		console.log(key);
		letras.push(key);
		return false
	}else {
		letras.push(key.toUpperCase())
		return true
	}
}

function adicionarLetraCorreta(i){
	palavraCorreta += palavraSecreta[i].toUpperCase;
}

function adicionarLetraIncorreta(letter){
	if(palavraSecreta.indexOf(letter) <= 0){
		erros-=1
	}
}

document.onkeydown = (e) => {
	var letra = e.key.toUpperCase();
	if(!verificarLetraCorreta(e.key)){
		if(palavraSecreta.includes(letra)){
			adicionarLetraCorreta(palavraSecreta.indexOf(letra))
			for (let i = 0; i < palavraSecreta.length; i++){
				if (palavraSecreta[i] === letra){
					escreverLetraCorreta(i);
					acertos = acertos + 1;
				}
			} venceJogo();
	}

	else {
		if(!verificarLetraCorreta(e.key))
		return
		adicionarLetraIncorreta(letra)
		escreverLetraIncorreta (letra, erros)
		perderJogo();
		}

	}
}

function resetaTabuleiro(){
	pincel.clearRect (0, 0, 1200,400);
	escolherPalavraSecreta();
	letras = [''];
	erros = 7;
	acertos = 0;
	document.onkeydown = (e) => {
	var letra = e.key.toUpperCase();
	if(!verificarLetraCorreta(e.key)){
		if(palavraSecreta.includes(letra)){
			adicionarLetraCorreta(palavraSecreta.indexOf(letra))
			for (let i = 0; i < palavraSecreta.length; i++){
				if (palavraSecreta[i] === letra){
					escreverLetraCorreta(i);
					acertos = acertos + 1;
					console.log (acertos, palavraSecreta.length);
				}
			} venceJogo(); 
		}
	else {
		if(!verificarLetraCorreta(e.key))
		return
		adicionarLetraIncorreta(letra)
		escreverLetraIncorreta (letra, erros)
		perderJogo();
		}

}}}

function perderJogo(){
	if(erros == 6){
		desenhaCabeca();
	}
	if(erros == 5){
		desenhaCorpo();
	}
	if(erros == 4) {
		desenhaBracoEsquerdo();
	}
	if(erros == 3){
		desenhaBracoDireito();
	}
	if (erros == 2){
		desenhaPeEsquerdo();
	}
	if (erros == 1){
		desenhaPeDireito();
		pincel.fillText('Você Perdeu', 130, 190)
		document.onkeydown = letras;
	}
}

function venceJogo() {
	if(acertos == palavraSecreta.length){
		pincel.font = 'bold 40px Inter';
		pincel.fillText('Você Venceu', 110, 150)
		document.onkeydown = letras;
	}
}

function desativaInput (){

}

