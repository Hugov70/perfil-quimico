//jogador avança 25px
var abrirDica = 1; 
let carta = 1; 
export let vez = 1; 
let dica = 0;
let temVencedor = false;
let playerUm;
let playerDois;
let playerTres;
let playerQuatro; 
let pontosP1 = 1;
let pontosP2 = 1;
let pontosP3 = 1;
let pontosP4 = 1;
let leftp1 = 8;
let leftp2 = 8;
let leftp3 = 8;
let leftp4 = 8;
let cartaTxt = document.getElementById('cartaTxt')
const tabuleiro = document.getElementById('tabuleiro'); 
export const msg = document.getElementById('mensagens');

cartaTxt.innerHTML = `Carta ${carta}`

import { carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14, carta15, carta16, carta17} from './cartas.js';
import showDica from './showDica.js';


document.addEventListener("DOMContentLoaded", () => {
    playerUm = localStorage.getItem("player1");
    document.getElementById("pUm").innerHTML =  playerUm;
    playerDois = localStorage.getItem("player2");
    document.getElementById("pDois").innerHTML =  playerDois;
    playerTres = localStorage.getItem("player3");
    document.getElementById("pTres").innerHTML =  playerTres;
    playerQuatro = localStorage.getItem("player4");
    document.getElementById("pQuatro").innerHTML =  playerQuatro;
});

document.addEventListener('click', e => {
    const el= e.target;
    const res = document.getElementById('res').value;
    if (abrirDica === 0 && el.classList.contains('dica')) {
        msg.innerText = 'Responda primeiro antes de abrir a próxima dica'
        setTimeout(() => {
            msg.innerText = ''
        }, 4000);
    }

    if (abrirDica === 1 && el.classList.contains('dica') && !el.classList.contains('aberta')) {
        msg.innerText = '';
        abrirDica = showDica(el);
        dica += 1;
        res.focus();
        res.innerText = '';
    }



    if (el.classList.contains('btn-enviar') && abrirDica === 1) {
        msg.innerText = 'Abra a dica primeiro.'
    }

    if (el.classList.contains('btn-enviar') && abrirDica === 0 && !temVencedor) {
        if (res === '') {
            msg.innerText = 'Preencha o campo de resposta antes de enviar'
            return
        }
        verificarReposta(); 
    }
    
})



function vezJogadorText() {
    abrirDica = 1; 
    const vezText = document.getElementById('vezJogador');
    vezText.innerHTML = `Vez do jogador ${vez}`
};

 

function removerAcentos(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function verificarReposta () {
    let resElement = document.getElementById('res');
    let respostaUsuario = resElement.value;
    let respostaNormalizada = removerAcentos(respostaUsuario);
    respostaNormalizada = respostaNormalizada.replace('ç', 'c')
    let nomeCarta; 
    if (dica === 5) {
        dica = 0; 
        carta += 1;
        voltarPadrao(); 
        setTimeout(() => {
            alert('Nova carta gerada');
        }, 500)
   
    }
    
    if (carta === 1) nomeCarta = carta1.nome; 
    if (carta === 2) nomeCarta = carta2.nome;
    if (carta === 3) nomeCarta = carta3.nome;
    if (carta === 4) nomeCarta = carta4.nome;
    if (carta === 5) nomeCarta = carta5.nome;
    if (carta === 6) nomeCarta = carta6.nome;
    if (carta === 7) nomeCarta = carta7.nome;
    if (carta === 8) nomeCarta = carta8.nome;
    if (carta === 9) nomeCarta = carta9.nome;
    if (carta === 10) nomeCarta = carta10.nome;
    if (carta === 11) nomeCarta = carta11.nome;
    if (carta === 12) nomeCarta = carta12.nome;
    if (carta === 13) nomeCarta = carta13.nome;
    if (carta === 14) nomeCarta = carta14.nome;
    if (carta === 15) nomeCarta = carta15.nome;
    if (carta === 16) nomeCarta = carta16.nome;
    if (carta === 17) nomeCarta = carta17.nome;
    if (String(respostaNormalizada.toLowerCase()) === String(nomeCarta)) {
        avancarCasa();
       if (!temVencedor) msg.innerText = `Jogador ${vez} acertou. Vamos para a próxima carta`; 
        setTimeout(() => {
            msg.innerText = ''
        }, 3000);

    } else {
        msg.innerText = 'Errou';
        passouVez(); 
        
    }         

}

export function passouVez() {
    if (vez === 1) {
        vez = 2; 
        vezJogadorText();
        return 
    };
    if (vez === 2 && playerTres !== '') {
        vez = 3; 
        vezJogadorText();
        return
    }
    if (vez === 3 && playerQuatro !== '') {
        vez = 4;
        vezJogadorText();
        return 
    } else {
        vez = 1; 
        vezJogadorText();
    }
}

export function avancarCasa () {
    
    const positionP1 = document.getElementById('playerUm'); 
    const positionP2 = document.getElementById('playerDois');
    const positionP3 = document.getElementById('playerTres');
    const positionP4 = document.getElementById('playerQuatro');
    dica = 0; 
    if (vez === 1) {
        pontosP1 += 1; 
        leftp1 += 25;
        positionP1.style.left = `${leftp1}px`;
        carta += 1;
        abrirDica = 1;
        tabuleiro.scrollIntoView({ behavior: 'smooth' });
        voltarPadrao(1);

    }
    if (vez === 2) {
        pontosP2 += 1; 
        leftp2 += 25;
        positionP2.style.left = `${leftp2}px`;
        carta += 1;
        abrirDica = 1;
        tabuleiro.scrollIntoView({ behavior: 'smooth' });
        voltarPadrao(2);

    }
    if (vez === 3) {
        pontosP3 += 1; 
        leftp3 += 25;
        positionP3.style.left = `${leftp3}px`;
        carta += 1;
        abrirDica = 1;
        tabuleiro.scrollIntoView({ behavior: 'smooth' });
        voltarPadrao(3);
    }
    if (vez === 4) {
        pontosP4 += 1; 
        leftp4 += 25;
        positionP4.style.left = `${leftp4}px`;
        carta += 1;
        abrirDica = 1;
        tabuleiro.scrollIntoView({ behavior: 'smooth' });
        voltarPadrao(4);

    }
    cartaTxt.innerHTML = `Carta ${carta}`
    
}

function voltarPadrao(n) {
    const p = n;
    dica1.innerText = 'Dica 1'; 
    dica1.classList.remove('aberta');
    dica2.innerText = 'Dica 2'; 
    dica2.classList.remove('aberta');
    dica3.innerText = 'Dica 3'; 
    dica3.classList.remove('aberta');
    dica4.innerText = 'Dica 4'; 
    dica4.classList.remove('aberta');
    dica5.innerText = 'Dica 5'; 
    dica5.classList.remove('aberta');
    verificarVencedor(p);
}

function verificarVencedor(n) {
    const p = n;
    if (pontosP1 === 6 || pontosP2 === 6 || pontosP3 === 6 || pontosP4 === 6) {
        temVencedor = true;
        alert(`Jogador ${p} venceu!`)
    }
}


export const dica1 = document.getElementById('dica1');
export const dica2 = document.getElementById('dica2');
export const dica3 = document.getElementById('dica3');
export const dica4 = document.getElementById('dica4');
export const dica5 = document.getElementById('dica5');

export { carta }
