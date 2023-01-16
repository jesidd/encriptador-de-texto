
function mostrar(objeto){
    document.querySelector(objeto).style.display="show";
    document.querySelector(objeto).style.display="inherit";
}

function ocultar(objeto){
    document.querySelector(objeto).style.display="none";
}

function comprobandoDatos(texto){

    if(texto.trim()==""){
        //Si esta vacia la variable muestra todo el section y oculta el textarea
        ocultar("#resultado");
        ocultar("#botonCopiar")
        mostrar(".sinDatos");

    }else{
      mostrar("#resultado");
      mostrar("#botonCopiar")
      ocultar(".sinDatos");
    }
}

function encriptar(){
    let texto=document.getElementById("textdescrinp").value;
    comprobandoDatos(texto);
    
    let newTexto=texto.replace(/[e]/g,"enter");
    newTexto=newTexto.replace(/[i]/g,"imes");
    newTexto=newTexto.replace(/[a]/g,"ai");
    newTexto=newTexto.replace(/[o]/g,"ober");
    newTexto=newTexto.replace(/[u]/g,"ufat");
   
    document.getElementById("resultado").value=newTexto;
}

function descrinptar(){
    let texto=document.getElementById("textdescrinp").value;
    comprobandoDatos(texto);

    let newTexto=texto.replace(/enter/gi,"e");
    newTexto=newTexto.replace(/imes/gi,"i");
    newTexto=newTexto.replace(/ai/gi,"a");
    newTexto=newTexto.replace(/ober/gi,"o");
    newTexto=newTexto.replace(/ufat/gi,"u");

    document.getElementById("resultado").value=newTexto;
}

function copiar(){
    let texto=document.getElementById("resultado").value;
    navigator.clipboard.writeText(texto);
}