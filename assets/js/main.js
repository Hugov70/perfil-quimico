const avancar = document.getElementById("avancar");
const input2Jogadores = document.getElementById("dois-jogadores");
const input3Jogadores = document.getElementById("tres-jogadores");
const input4Jogadores = document.getElementById("quatro-jogadores");
let numberPlayers = 2;

input2Jogadores.addEventListener("click", () => {
    atualizaListaDeJogadores(2);
});
input3Jogadores.addEventListener("click", () => {
    atualizaListaDeJogadores(3);
});
input4Jogadores.addEventListener("click", () => {
    atualizaListaDeJogadores(4);
});

avancar.addEventListener("click", (event) => {
    const player1 = document.getElementById("jogador-1").value;
    const player2 = document.getElementById("jogador-2").value;

    const elemento = event.target;
    event.preventDefault();
    if (
        elemento.type.toLowerCase() === "submit" &&
        possoAvancar(numberPlayers)
    ) {
        localStorage.setItem("player1", player1);
        localStorage.setItem("player2", player2);
        if (numberPlayers > 2 && numberPlayers < 4) {
            const player3 = document.getElementById("jogador-3");
            localStorage.setItem("player3", player3);
        }
        if (numberPlayers == 4) {
            const player4 = document.getElementById("jogador-4");
            localStorage.setItem("player4", player4);
        }
        window.location.href = "jogo.html";
    } else {
        alert(
            "Preencha todos os campos de nome de jogadores e nomes diferentes porfavor!"
        );
    }
});

const atualizaListaDeJogadores = (quantidadeDeJogadores) => {
    const listaJogadores = document.getElementById("nome-jogadores");
    numberPlayers = quantidadeDeJogadores;

    listaJogadores.innerHTML = retornaHtmlDaLista(quantidadeDeJogadores);

    if (quantidadeDeJogadores == 3) {
        listaJogadores.innerHTML = retornaHtmlDaLista(quantidadeDeJogadores);
    }

    if (quantidadeDeJogadores == 4) {
        listaJogadores.innerHTML = retornaHtmlDaLista(quantidadeDeJogadores);
    }
};

function retornaHtmlDaLista(quantidade) {
    let htmlDaLista = "";
    for (let index = 1; index <= quantidade; index++) {
        aux = `<li>
                        <label class="nome-jogador-texto" for="jogador-${index}"
                            >Nome jogador ${index}:</label
                        ><br />
                        <input type="text" name="jogador-${index}" id="jogador-${index}" />
                    </li>`;
        htmlDaLista = htmlDaLista + aux;
    }

    return htmlDaLista;
}

function possoAvancar(numberPlayers) {
    const player1 = document.getElementById("jogador-1").value;
    const player2 = document.getElementById("jogador-2").value;
    if (numberPlayers == 2) {
        if (player1 !== "" && player2 !== "") {
            return true;
        }
    }
    if (numberPlayers == 3) {
        const player3 = document.getElementById("jogador-3").value;
        if (player1 !== "" && player2 !== "" && player3 !== "") {
            return true;
        }
    }
    if (numberPlayers == 4) {
        const player3 = document.getElementById("jogador-3").value;
        const player4 = document.getElementById("jogador-4").value;
        if (
            player1 !== "" &&
            player2 !== "" &&
            player3 !== "" &&
            player4 !== ""
        ) {
            return true;
        }
    }

    return false;
}

