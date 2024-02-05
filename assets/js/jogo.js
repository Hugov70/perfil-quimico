//jogador avança 25px
var abrirDica = 1; 
let podeResponder = 0; 
let carta = 1; 
let vez = 1; 
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
const msg = document.getElementById('mensagens');

cartaTxt.innerHTML = `Carta ${carta}`
class Carta {
    constructor (nome, dica1, dica2, dica3, dica4, dica5) {
        this.nome = nome;
        this.d1 = dica1;
        this.d2 = dica2;
        this.d3 = dica3;
        this.d4 = dica4;
        this.d5 = dica5;
        
    }
}; 

const carta1 = new Carta('petroleo', 'Já houve guerra por conta dele(a)', 'É a principal fonte de renda da economia do Oriente Médio', 'É inflamável', 'Perca sua vez ', 'Está associado a debates sobre poluição ambiental e mudanças climáticas.');

const carta2 = new Carta('oxigenio', 'Faz parte dos calcogênios na tabela periódica', 'Elemento mais abundante da superfície da Terra.', 'Foi descoberto pelos cientistas Priestley e Scheele e nomeado por Lavoisier.', 'Perca sua vez', 'É liberado pela natureza');

const carta3 = new Carta('saponificacao', 'Ocorre entre um éster e uma base inorgânica', 'A última letra do seu nome é O', 'Perca sua vez',  'É utilizada principalmente para fabricaçao de sabão', 'Desde antes de Cristo, fenícios e romanos já a realizavam');

const carta4 = new Carta('hidrogenio', 'Não possui família periódica', 'Combustível para foguetes espaciais ou carros', 'Avance 1 casa', 'Em temperatura ambiente, é um gás', 'Compõe a substância H2O'); 

const carta5 = new Carta('vinagre', 'Em substâncias como água se dissolve', 'Se coloca em salada', 'Elimina manchas e sedimentos resistentes.', 'Atribui gosto e traz aroma aos alimentos', 'Pode ser usado como produto de limpeza');

const carta6 = new Carta('butano', 'Altamente inflamável', ' Seu uso mais famoso no dia a dia é no botijão de gás', 'Caso seja inalado, pode levar até a morte', 'Possui 4 carbonos em sua composição', 'Avance 1 casa');

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
    console.log(respostaNormalizada, nomeCarta)
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

function passouVez() {
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

function avancarCasa () {
    
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
    if (pontosP1 === 4 || pontosP2 === 4 || pontosP3 === 4 || pontosP4 === 4) {
        temVencedor = true;
        alert(`Jogador ${p} venceu!`)
    }
}



function showDica(el) {
    const id = el.id; 
    el.classList.add('aberta')
    const dica1 = document.getElementById('dica1');
    const dica2 = document.getElementById('dica2');
    const dica3 = document.getElementById('dica3');
    const dica4 = document.getElementById('dica4');
    const dica5 = document.getElementById('dica5');
    if (carta === 1) {
        if (id === 'dica1') {
            dica1.innerText = carta1.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta1.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta1.d3; 
        }
        if (id === 'dica4') {
            dica4.innerText = carta1.d4;
            passouVez();  
            return 1; 
        }
        if (id === 'dica5') {
            dica5.innerText = carta1.d5; 
        }
    }
    if (carta === 2) {
        if (id === 'dica1') {
            dica1.innerText = carta2.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta2.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta2.d3; 
        }
        if (id === 'dica4') {
            dica4.innerText = carta2.d4; 
            passouVez();
            return 1;
        }
        if (id === 'dica5') {
            dica5.innerText = carta2.d5; 
        }
    }
    if (carta === 3) {
        if (id === 'dica1') {
            dica1.innerText = carta3.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta3.d2; 
        }
        if (id === 'dica3') { 
            dica3.innerText = carta3.d3; 
            passouVez(); 
            return 1;
        }
        if (id === 'dica4') {
            dica4.innerText = carta3.d4; 
        }
        if (id === 'dica5') {
            dica5.innerText = carta3.d5; 
        }
    }
    if (carta === 4) {
        if (id === 'dica1') {
            dica1.innerText = carta4.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta4.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta4.d3; 
            msg.innerHTML = `Jogador ${vez} avançou uma casa`; 
            setTimeout (() => {
                avancarCasa(); 
            }, 3000)
            

        }
        if (id === 'dica4') {
            dica4.innerText = carta4.d4; 
        }
        if (id === 'dica5') {
            dica5.innerText = carta4.d5; 
        }
    }
    if (carta === 5) {
        if (id === 'dica1') {
            dica1.innerText = carta5.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta5.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta5.d3; 

        }
        if (id === 'dica4') {
            dica4.innerText = carta5.d4; 
        5 }
        if (id === 'dica5') {
            dica5.innerText = carta5.d5; 
        }
    }
    if (carta === 6) {
        if (id === 'dica1') {
            dica1.innerText = carta6.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta6.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta6.d3; 

        }
        if (id === 'dica4') {
            dica4.innerText = carta6.d4; 
        5 }
        if (id === 'dica5') {
            avancarCasa(); 
            dica5.innerText = carta6.d5; 
        }
    } 
    return 0;
}

