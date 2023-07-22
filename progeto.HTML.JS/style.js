
const form = document.getElementById('form-EBAC');

form.addEventListener('submit', function(e){

let valorB = document.getElementById('valorBase');
let valorA = document.getElementById('valorDesejado');
let result = Number(valorA.value)/Number(valorB.value);
const menssagemSucesso = 'O valor desejado sera atigindo em '+result+' meses';
const msmOk = 'chegara no valor desejado em ';

    e.preventDefault();
    
    console.log(result);
    if (valorA.value > valorB.value){
        document.querySelector('.msn-ok').style.display = 'block';
        document.querySelector('.msn-erro').style.display = 'none';
        const msnOks = document.querySelector('.msn-ok');
        msnOks.innerHTML = menssagemSucesso;
    
        valorA.value = '';
        valorB.value = '';
        
    }else{
        document.querySelector('.msn-erro').style.display = 'block';
        document.querySelector('.msn-ok').style.display = 'none';
    }
    })