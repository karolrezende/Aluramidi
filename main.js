const teclado = document.querySelectorAll(".tecla")

for (let i = 0; i < teclado.length; i++){

    const teclaesp = teclado[i]
    const teclaclass = teclado[i].classList[1]
    

    const idtecla = `#som_${teclaclass}`

    teclaesp.onclick = function(){
        tocasom(idtecla)

    }
 
        if (evento.code === 'Space' || evento.code === 'Enter'){
            teclaesp.classList.add('ativa')
        }

        teclaesp.onkeyup = function(){
            teclaesp.classList.remove('ativa')
        }

}

function tocasom(idtecla){
    document.querySelector(idtecla).play()

    let teclat = document.querySelector(idtecla)

    if (teclat != null && teclat.localName === 'audio'){
            teclat.play();
    }
    else {
        alert("esse elemento nao existe");
    }
 
}


