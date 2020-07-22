(function(){

//cambiar los fondos

var boton1= document.getElementById("claro");
var boton2= document.getElementById("predeterminado");
var boton3= document.getElementById("oscuro");

var fondo=document.body;


var vinculo_fq=document.getElementById("divido").getElementsByTagName("a");



var cambiaFondo=function cambiaFondo(){

if(boton1.checked){

    fondo.className="body1";
   for(var i=0;i<vinculo_fq.length;i++){
    vinculo_fq[i].style.color="black";}
    
}
else if(boton2.checked){
    fondo.className="body2";
    for(var i=0;i<vinculo_fq.length;i++){
    vinculo_fq[i].style.color="black";}
}
else if(boton3.checked){

    fondo.className="body3";
    for(var i=0;i<vinculo_fq.length;i++){
    vinculo_fq[i].style.color="white";}
}

} 


boton1.addEventListener("click",cambiaFondo);
boton2.addEventListener("click",cambiaFondo);
boton3.addEventListener("click",cambiaFondo);

///imagen de fondo bailando

var patata=document.getElementById("cabecera").getElementsByTagName("img")[0];



var patata_baila=function patata_baila(){
patata.src="imagenes/patata.gif";
}

patata_baila();
setInterval(patata_baila,5000);




//validacion de formulario

var nombre_p=document.getElementById("nombre_p");
var nombre_aut=document.getElementById("nombre_aut");
var precio=document.getElementById("precio");
var imagen=document.getElementById("imagen");

var formulario=document.getElementById("formulario");

/////////////////////////expresiones regulares para validaciones del formulario

var  ex_re_nombre_p=/^[a-zA-Z\s]*$/;
var  ex_re_nombre_aut=/^[a-zA-Z\s]*$/;
var ex_re_precio=/^\d+\.\d\d$/;
var ex_re_imagen=/(.jfif|.jpg)$/i;
///////////////////////////////////////////////
var validar_datos=function validar_datos(e){

if(nombre_p.value ==""){
alert("Ingrese campo nombre de plato");
e.preventDefault();
}
else if(!ex_re_nombre_p.test(nombre_p.value)){
alert("Ingresa un nombre válido");
e.preventDefault();
}
else{
    formulario.action="informacion_enviada.html"; 
}


if(nombre_aut.value ==""){
    alert("Ingrese campo nombre de autor");
    e.preventDefault();
}
else if(!ex_re_nombre_aut.test(nombre_aut.value)){
    alert("Ingrese nombre y apellido válidos");
    e.preventDefault();
}

else{
    formulario.action="informacion_enviada.html"; 
}

if(precio.value==""){
    alert("Ingrese campo precio"); 
    e.preventDefault();
    
}else if(!ex_re_precio.test(precio.value )) {
    alert("Ingrese el precio con dos decimales");
    e.preventDefault();
    }
    else{
        formulario.action="informacion_enviada.html"; 
    }


if(imagen.value ==""){
    alert("importe una imagen");
    e.preventDefault();
}
else if(!ex_re_imagen.test(imagen.value)) {
    alert("Ingrese un archivo con el formato adecuado");
    e.preventDefault();
    }

    else{
        formulario.action="informacion_enviada.html"; 
    }

}


formulario.addEventListener("submit",validar_datos);

}())

