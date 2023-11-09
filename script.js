let count = 0;
let tentativas = 0;
let botaoSim = document.querySelector('#botaoSim');
let botaoNao = document.querySelector('#botaoNao');
let principal = document.querySelector('#estrutura')

botaoNao.addEventListener('click', function() {
    let larguraJanela = window.innerWidth;
    let alturaJanela = window.innerHeight;

    let novaPosicaoEsquerda = Math.random() * (larguraJanela - botaoNao.clientWidth);
    let novaPosicaoTopo = Math.random() * (alturaJanela - botaoNao.clientHeight);

    botaoNao.style.left = novaPosicaoEsquerda + 'px';
    botaoNao.style.top = novaPosicaoTopo + 'px';            

    count ++; 

    if (count == 1) {
        console.log(count);
        botaoNao.style.backgroundImage = "url('Imagens/felca.png')";
        botaoNao.style.backgroundSize = "100%";
        botaoNao.style.fontSize = "30px";
        botaoNao.textContent = 'Ta certo isso?';
    }

    else if (count == 2) {
        console.log(count)
        botaoNao.style.backgroundImage = "url('Imagens/imagem_fundo3.png')"
        botaoNao.style.backgroundSize = "cover";
        botaoNao.style.backgroundPosition = 'center center'
        botaoNao.style.fontSize = "20px";
        botaoNao.textContent = 'Num era pra ser assim não?';
    }

    else if (count == 3) {
        console.log(count)
        botaoNao.style.backgroundImage = "url('Imagens/escuta_aqui.png')"
        botaoNao.style.backgroundSize = "cover";
        botaoNao.style.backgroundPosition = 'center center'
        botaoNao.style.fontSize = "30px";
        botaoNao.textContent = 'Escuta aqui oh!!!';
    }

    else if (count == 4) {
        console.log(count)
        botaoNao.style.backgroundImage = "url('Imagens/dancinha.png')"
        botaoNao.style.backgroundSize = "cover";
        botaoNao.style.backgroundPosition = 'center center'
        botaoNao.style.fontSize = "20px";
        botaoNao.textContent = 'Faço até uma dancinha';
    }

    else if (count == 5) {
        console.log(count)
        botaoNao.style.backgroundImage = "url('Imagens/aceita_muie.png')"
        botaoNao.style.backgroundSize = "cover";
        botaoNao.style.backgroundPosition = 'center center'
        botaoNao.style.fontSize = "30px";
        botaoNao.textContent = 'Aceita muié';
    }

    else if (count == 6) {
        console.log(count)
        botaoNao.style.backgroundImage = "url('Imagens/quer_saber.png')"
        botaoNao.style.backgroundSize = "cover";
        botaoNao.style.backgroundPosition = 'center center'
        botaoNao.style.fontSize = "30px";
        botaoNao.textContent = 'Quer saber, vou mimir';
    }

    else if (count == 7) {
        console.log(count)
        botaoNao.style.backgroundImage = "url('Imagens/mimir.png')"
        botaoNao.style.backgroundSize = "cover";
        botaoNao.style.backgroundPosition = 'center center'
        botaoNao.style.fontSize = "30px";
        botaoNao.textContent = 'A mimir';
    }

    else if (count == 8) {
        console.log(count)
        botaoNao.style.backgroundImage = "url('Imagens/imagem_fundo4.png')"
        botaoNao.style.backgroundSize = "cover";
        botaoNao.style.backgroundPosition = 'center center'
        botaoNao.style.fontSize = "30px";
        botaoNao.textContent = 'Tchau';
    }

    else if(count > 8) {
        botaoSim.style.backgroundImage = "url('Imagens/imagem_fundo2.png')"
        botaoSim.style.backgroundSize = "cover";
        botaoSim.style.backgroundPosition = 'center center'
        botaoSim.textContent = '';
        principal.removeChild(botaoNao)
    }
});

botaoSim.addEventListener('click', function() { 
    function pinguins() {
        x = document.querySelector("#sim")
        x.style.backgroundImage = "url('Imagens/pinguin.png')"
        x.style.backgroundSize = "cover";
        x.style.backgroundPosition = 'center center'

        document.querySelector("#textoSim").innerHTML = `
        <h1>Lembra dos Pinguins ?</h1>
        `
    }

    function invisivel() {
        document.querySelector("#estrutura").style.display = 'none';
    }

    if(count == 0 && tentativas == 0) {
        count = 0;
        tentativas ++;
        x = document.querySelector("#sim")
        x.style.backgroundImage = "url('Imagens/facil.png')"
        x.style.backgroundSize = "cover";
        x.style.backgroundPosition = 'center center'

        document.querySelector("#textoSim").innerHTML = `
        <h1>Facil assim ???</h1>
        <h2>Naaaaao, eu conheço meu potencial</h2>
        <h2>Bora tentar de novo</h2>
        `
        function fechaModal() {
            x.close()
        }
        x.showModal();
        setTimeout(fechaModal, 5000)
    }  

    else if(tentativas == 1) {
        x = document.querySelector("#sim")
        x.style.backgroundImage = "url('Imagens/feliz.png')"
        x.style.backgroundSize = "cover";
        x.style.backgroundPosition = 'center center'

        document.querySelector("#textoSim").innerHTML = `
        <h1>Então...</h1>
        <h2>&#128151 &#128151 &#128151 Você me ama &#128151 &#128151 &#128151</h2>
        <h2>&#128525 &#128525 &#128525 Ahhhhhhhhh &#128525 &#128525 &#128525</h2>
        `
        x.showModal();
        invisivel()
        setTimeout(pinguins, 10000)
    }

    else if(count >= 5) {
        x = document.querySelector("#sim")
        x.style.backgroundImage = "url('Imagens/antes_tarde.png')"
        x.style.backgroundSize = "cover";
        x.style.backgroundPosition = 'center center'

        document.querySelector("#textoSim").innerHTML = `
        <h1>Antes tarde do que nunca...</h1>
        `
        invisivel()
        function trol() {
            x.style.backgroundImage = "url('Imagens/feliz.png')"
            x.style.backgroundSize = "cover";
            x.style.backgroundPosition = 'center center'

            document.querySelector("#textoSim").innerHTML = `
            <h1>Zoas kkkkk</h1>
            <h2>&#128525 &#128525 &#128525 Também de amo &#128525 &#128525 &#128525</h2>
            <h2>&#128525 &#128525 &#128525 Minha doidinha &#128525 &#128525 &#128525</h2>
            `
        }
        x.showModal();
        setTimeout(trol, 5000)
        setTimeout(pinguins, 10000)
    }

    else if(count > 0 || count < 5) {
        x = document.querySelector("#sim")
        x.style.backgroundImage = "url('Imagens/feliz.png')"
        x.style.backgroundSize = "cover";
        x.style.backgroundPosition = 'center center'

        document.querySelector("#textoSim").innerHTML = `
        <h2>&#128525 &#128525 &#128525 Também de amo &#128525 &#128525 &#128525</h2>
        <h2>&#128525 &#128525 &#128525 Minha doidinha &#128525 &#128525 &#128525</h2>
        `
        invisivel()
        x.showModal();
        setTimeout(pinguins, 10000)
    }
});