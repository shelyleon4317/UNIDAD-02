function encriptar(elememto){
    var palabra =  document.getElementsByTagName("input")[0].value;
    var palabra_codificada = btoa(palabra);
    document,getElementsByTagNameId("resultado").innerHTML = palabra_codificada;
}

function desencriptar(elememto){
    var palabra =  document.getElementsByTagName("input")[0].value;
    var palabra_descodificada = btoa(palabra);
    document,getElementsByTagNameId("resultado").innerHTML = palabra_descodificada;
}