const texto = document.getElementById('text');
const imagen = document.getElementById('imagen');
const resultado = document.getElementById('resultado');
const copiar = document.getElementById('copiar');
const error = document.getElementById('error');
const acentos = /[ÁÉÍÓÚáéíóú´Ññ]/;
const encriptacion = texto => {
    return texto
    .replace(/a/g, "ai")
    .replace(/e/g, "enter")
    .replace(/i/g, "imes")
    .replace(/o/g, "ober")
    .replace(/u/g, "ufat")
}
const descencriptacion = texto => {
    return texto
    .replace(/ai/g, "a")
    .replace(/enter/g, "e")
    .replace(/imes/g, "i")
    .replace(/ober/g, "o")
    .replace(/ufat/g, "u")
}

let textofinal ='';

function verAcentos (texto) {
    let resultado = acentos.test(texto)
    if (resultado != false){
        error.classList.add("error");
    }else{
        error.classList.remove("error");
    }
    return resultado;
}

function encriptar(){
    textofinal='';
    let textoinicial = texto.value.toLowerCase();
    let acento = verAcentos(textoinicial);
    if (textoinicial.trim() == '' ){
        window.location.reload();
    }
    if(textoinicial != '' && acento != true){
        textofinal = encriptacion(textoinicial);
        imagen.classList.add( "ocultarImagen");
        resultado.textContent =  textofinal;
        copiar.removeAttribute('hidden');
    }
}

function desencriptar() {
    textofinal = '';
    let textoinicial = texto.value.toLowerCase();
    let acento = verAcentos( textoinicial );
    if ( textoinicial.trim() == '' ) {
        window.location.reload();
    }
    if ( textoinicial != ''  &&  acento != true ) {
        textofinal = descencriptacion( textoinicial );
        imagen.classList.add( "ocultarImagen" );
        resultado.textContent = textofinal;
        copiar.removeAttribute('hidden');
    }    
}
copiar.addEventListener('click', ()=> {
    navigator.clipboard.writeText(textofinal);
})