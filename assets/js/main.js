
const avancar = document.getElementById('avancar')
let numberPlayers = 2; 
avancar.addEventListener('click', e => {
    const player1 = document.getElementById('jogador-um');
    const player2 = document.getElementById('jogador-dois');
    const player3 = document.getElementById('jogador-tres');
    const player4 = document.getElementById('jogador-quatro');
    const el = e.target;
    e.preventDefault()
    if (el.type.toLowerCase() === 'submit' && possoAvancar(numberPlayers)) {
        localStorage.setItem('player1', player1.value);
        localStorage.setItem('player2', player2.value);
        localStorage.setItem('player3', player3.value);
        localStorage.setItem('player4', player4.value);
        window.location.href = 'jogo.html';
   
        
    } else {
        alert('Preencha todos os campos de nome de jogadores')
    }
})

document.addEventListener('click', e => {
    const el = e.target;
    const txtplayer3 = document.getElementById('player3') ;
    const txtplayer4 = document.getElementById('player4') ;

    if (el.id === 'dois-jogadores') {
        txtplayer4.style.display = 'none';
        txtplayer3.style.display = 'none';
        numberPlayers = 2; 
    }

    if (el.id === 'tres-jogadores') {
        txtplayer3.style.display = 'block';
        txtplayer4.style.display = 'none';
        numberPlayers = 3; 
    }

    if (el.id === 'quatro-jogadores') {
        txtplayer3.style.display = 'block';
        txtplayer4.style.display = 'block';
        numberPlayers = 4; 
    }

    
})

function possoAvancar(n) {
    const player1 = document.getElementById('jogador-um');
    const player2 = document.getElementById('jogador-dois');
    const player3 = document.getElementById('jogador-tres');
    const player4 = document.getElementById('jogador-quatro');
    let np = n; 
    
    if (np === 2) {
        if (player1.value !== '' && player2.value !== '') {
            return true;
        }
    }
    if (np === 3) {
        if (player1.value !== '' && player2.value !== '' && player3.value !== '') {
            return true;
        }
    }
    if (np === 4) {
        if (player1.value !== '' && player2.value !== '' && player3.value !== '' && player4.value !== '') {
            return true;
        }
    }
    return false
}


