var tela = document.getElementById('tela');
var tabuleiro = document.querySelector ('.tabuleiro');
var pincel = tela.getContext('2d');
var larguraTela = tela.width;
var alturaTela = tela.height;
var corDoCanvas = '#F3F5FC';
var corDoTabuleiro = '#0A3871';
var espessuraTabuleiro = 3;

function montaTabuleiro(){
	tabuleiro.style.display = 'inline-block';
	pincel.fillStyle = corDoTabuleiro;
	pincel.fillRect (400, 30, espessuraTabuleiro, 330);
	pincel.fillRect (300, 360, 300, espessuraTabuleiro);
	pincel.fillRect (400, 30, 180 ,espessuraTabuleiro);
	pincel.fillRect (580, 30, espessuraTabuleiro, 60);
	pincel.closePath();
}


function desenhaCabeca(){
	pincel.fillStyle = corDoTabuleiro;
	pincel.beginPath();
	pincel.arc(581, 120, 30, 0, 2 * 3.14);
	pincel.lineWidth = espessuraTabuleiro;
	pincel.strokeStyle = corDoTabuleiro
	pincel.stroke();
}

function desenhaCorpo(){
	pincel.fillStyle = corDoTabuleiro;
	pincel.fillRect (580, 150, espessuraTabuleiro, 130);
}

function desenhaBracoEsquerdo(){
	pincel.fillStyle = corDoTabuleiro;
	pincel.beginPath();
	pincel.moveTo(581, 150);
	pincel.lineTo (550, 212);
 	pincel.stroke();
}

function desenhaBracoDireito(){
	pincel.fillStyle = corDoTabuleiro;
	pincel.beginPath();
	pincel.moveTo(582, 150);
	pincel.lineTo (610, 212);
 	pincel.stroke();
}

function desenhaPeEsquerdo(){
	pincel.fillStyle = corDoTabuleiro;
	pincel.beginPath();
	pincel.moveTo(581, 279);
	pincel.lineTo (560, 340);
 	pincel.stroke();
}

function desenhaPeDireito(){
	pincel.fillStyle = corDoTabuleiro;
	pincel.beginPath();
	pincel.moveTo(582, 279);
	pincel.lineTo (602, 340);
 	pincel.stroke();
}



