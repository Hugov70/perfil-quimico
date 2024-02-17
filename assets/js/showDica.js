import {dica1, dica2, dica3, dica4, dica5, carta, vez, passouVez, msg, avancarCasa} from './jogo.js' 
import { carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8, carta9, carta10, carta11, carta12, carta13, carta14, carta15, carta16, carta17} from './cartas.js';
export default function showDica(el) {
    const id = el.id; 
    el.classList.add('aberta')
    console.log(id, el)
    console.log(carta1.d1)
    if (carta === 1) {
        if (id === 'dica1') {
            console.log('Cheguei')
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
            msg.innerHTML = `Jogador ${vez} perdeu a vez`; 
            setTimeout (() => {
                passouVez();
            }, 3000)
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
            msg.innerHTML = `Jogador ${vez} perdeu a vez`; 
            setTimeout (() => {
                passouVez();
            }, 3000)
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
            msg.innerHTML = `Jogador ${vez} perdeu a vez`; 
            setTimeout (() => {
                passouVez();
            }, 3000)
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
         }
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
         }
        if (id === 'dica5') {
            dica5.innerText = carta6.d5; 
            msg.innerHTML = `Jogador ${vez} avançou uma casa`; 
            setTimeout (() => {
                avancarCasa(); 
            }, 3000)
        }
    } 
    if (carta === 7) {
        if (id === 'dica1') {
            dica1.innerText = carta7.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta7.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta7.d3; 

        }
        if (id === 'dica4') {
            dica4.innerText = carta7.d4; 
         }
        if (id === 'dica5') {
            dica5.innerText = carta7.d5; 
        }
    }
    if (carta === 8) {
        if (id === 'dica1') {
            dica1.innerText = carta8.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta8.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta8.d3; 

        }
        if (id === 'dica4') {
            dica4.innerText = carta8.d4; 
         }
        if (id === 'dica5') {
            dica5.innerText = carta8.d5; 
        }
    }
    if (carta === 9) {
        if (id === 'dica1') {
            dica1.innerText = carta9.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta9.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta9.d3; 

        }
        if (id === 'dica4') {
            dica4.innerText = carta9.d4; 
            msg.innerHTML = `Jogador ${vez} avançou uma casa`; 
            setTimeout (() => {
                avancarCasa(); 
            }, 3000)
        }
        if (id === 'dica5') {
            dica5.innerText = carta9.d5; 
        }
    }
    if (carta === 10) {
        if (id === 'dica1') {
            dica1.innerText = carta10.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta10.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta10.d3; 

        }
        if (id === 'dica4') {
            dica4.innerText = carta10.d4; 
         }
        if (id === 'dica5') {
            dica5.innerText = carta10.d5; 
        }
    }
    if (carta === 11) {
        if (id === 'dica1') {
            dica1.innerText = carta11.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta11.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta11.d3; 

        }
        if (id === 'dica4') {
            dica4.innerText = carta11.d4; 
         }
        if (id === 'dica5') {
            dica5.innerText = carta11.d5; 
        }
    }
    if (carta === 12) {
        if (id === 'dica1') {
            dica1.innerText = carta12.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta12.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta12.d3; 

        }
        if (id === 'dica4') {
            dica4.innerText = carta12.d4; 
         }
        if (id === 'dica5') {
            dica5.innerText = carta12.d5; 
        }
    }
    if (carta === 13) {
        if (id === 'dica1') {
            dica1.innerText = carta13.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta13.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta13.d3; 

        }
        if (id === 'dica4') {
            dica4.innerText = carta13.d4; 
        }
        if (id === 'dica5') {
            dica5.innerText = carta13.d5; 
        }
    }
    if (carta === 14) {
        if (id === 'dica1') {
            dica1.innerText = carta14.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta14.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta14.d3; 

        }
        if (id === 'dica4') {
            dica4.innerText = carta14.d4; 
         }
        if (id === 'dica5') {
            dica5.innerText = carta14.d5; 
        }
    }
    if (carta === 15) {
        if (id === 'dica1') {
            dica1.innerText = carta15.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta15.d2; 
            msg.innerHTML = `Jogador ${vez} avançou uma casa`; 
            setTimeout (() => {
                avancarCasa(); 
            }, 3000)
        }
        if (id === 'dica3') {
            dica3.innerText = carta15.d3; 

        }
        if (id === 'dica4') {
            dica4.innerText = carta15.d4; 
         }
        if (id === 'dica5') {
            dica5.innerText = carta15.d5; 
        }
    }
    if (carta === 16) {
        if (id === 'dica1') {
            dica1.innerText = carta16.d1; 
        }
        if (id === 'dica2') {
            dica2.innerText = carta16.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta16.d3; 

        }
        if (id === 'dica4') {
            dica4.innerText = carta16.d4; 
         }
        if (id === 'dica5') {
            dica5.innerText = carta16.d5; 
        }
    }
    if (carta === 17) {
        if (id === 'dica1') {
            dica1.innerText = carta17.d1; 
            msg.innerHTML = `Jogador ${vez} perdeu a vez`; 
            setTimeout (() => {
                passouVez();
            }, 3000)
            return 1;
        }
        if (id === 'dica2') {
            dica2.innerText = carta17.d2; 
        }
        if (id === 'dica3') {
            dica3.innerText = carta17.d3; 

        }
        if (id === 'dica4') {
            dica4.innerText = carta17.d4; 
         }
        if (id === 'dica5') {
            dica5.innerText = carta17.d5; 
        }
    }
    return 0;
}


