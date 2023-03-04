// TODO: Add code to check answers to questions
// TODO: Add code to check answers to questions
            
//pegar div e imprimir nela "correto" ou "incorreto"
let div1 = document.querySelector('#sec1');
let div2 = document.querySelector('#sec2');

//botão de cada resposta
let answ_one = document.querySelector('.ans1');
let answ_two = document.querySelector('.ans2');
let answ_three = document.querySelector('.ans3');
let answ_four = document.querySelector('.ans4');

//imprimir resposta
let resposta1 = document.querySelector('.resposta1');

let answ_five = document.querySelector('.ans5');
let sen = document.querySelector('.send');

//imprimir resposta
let resposta2 = document.querySelector('.resposta2');

function certa_um() {
    answ_two.style.background = 'green';
    resposta1.innerHTML = "Correto!"

    //limpar tudo quando outro botao for clicado
    if (answ_one.style.backgroundColor = 'red'){
        answ_one.style.backgroundColor = '#d9edff';
    }
    if (answ_three.style.backgroundColor = 'red'){
        answ_three.style.backgroundColor = '#d9edff';
    }
    if (answ_four.style.backgroundColor = 'red'){
        answ_four.style.backgroundColor = '#d9edff';
    }
}
answ_two.addEventListener('click', certa_um); //quando for clicado

function errada(){
    answ_one.style.background = 'red';  
    resposta1.innerHTML = "Incorreto!"

    //limpar tudo quando outro botao for clicado
    if (answ_two.style.backgroundColor = 'green'){
        answ_two.style.backgroundColor = '#d9edff';
    }
    if (answ_three.style.backgroundColor = 'red'){
        answ_three.style.backgroundColor = '#d9edff';
    }
    if (answ_four.style.backgroundColor = 'red'){
        answ_four.style.backgroundColor = '#d9edff';
    }
}
answ_one.addEventListener('click', errada);

function errada_three(){
    answ_three.style.background = 'red';  
    resposta1.innerHTML = "Incorreto!"

    //limpar tudo quando outro botao for clicado
    if (answ_one.style.backgroundColor = 'red'){
        answ_one.style.backgroundColor = '#d9edff';
    }
    if (answ_two.style.backgroundColor = 'green'){
        answ_two.style.backgroundColor = '#d9edff';
    }
    if (answ_four.style.backgroundColor = 'red'){
        answ_four.style.backgroundColor = '#d9edff';
    }
}
answ_three.addEventListener('click', errada_three);

function errada_four() {
    answ_four.style.background = 'red';  
    resposta1.innerHTML = "Incorreto!"

    if (answ_one.style.backgroundColor = 'red'){
        answ_one.style.backgroundColor = '#d9edff';
    }
    if (answ_two.style.backgroundColor = 'green'){
        answ_two.style.backgroundColor = '#d9edff';
    }
    if (answ_three.style.backgroundColor = 'red'){
        answ_three.style.backgroundColor = '#d9edff';
    }

}
answ_four.addEventListener('click', errada_four);

//checar se resposta é igual a beija-flor-abelha

function certa_dois() {
    //checar se está escrito "beija-flor-abelha" e imprimir "correto" ou "incorreta"
    if(answ_five.value === "beija-flor-abelha"){
        resposta2.innerHTML = "Correto!"
    } else if (answ_five.value !== "beija-flor-abelha") {
        resposta2.innerHTML = "Incorreto!"
    }
}
sen.addEventListener('click', certa_dois); //quando for checado    
answ_five.addEventListener("keypress", (e) => {
    if (e.key == "Enter" && answ_five.value != ""){
        certa_dois();
    }
})               