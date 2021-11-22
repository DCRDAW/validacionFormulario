'use strict'
window.onload= iniciar
let nombre, apellidos, email,edad,nif,politica, comunidad,brocoli,sw
const letras = "TRWAGMYFPDXBNJZSQVHLCKE";
    sw=0
    nombre= document.getElementById("iNombre")
    apellidos= document.getElementById("iApellidos")
    email= document.getElementById("iEmail")
    edad= document.getElementById("iEdad")
    nif= document.getElementById("iNIF")
    politica= document.getElementById("iPolitica")
    comunidad= document.getElementById("sComunidad")
    brocoli= document.getElementById("rSi")
    
function iniciar(){
    
    let formulario =document.forms[0]
    formulario.onsubmit= validar
}
function validar(evento){
    //comprobar si un checkbox esta lleno
    politica= document.getElementById("iPolitica")
    
    if(!politica.checked){
        alert('politica');
        evento.preventDefault()
    }

    if(nombre.value.length < 3){
        alert('longitud nombre');
        evento.preventDefault()
    }
    let ape=[]
    ape= apellidos.value.split(" ")
    if(ape.length<2){
        alert('apellidos');
        evento.preventDefault()
    }
    if(comunidad.value==3 && brocoli.value=='si'){
        alert('brocoli asturiano');
        evento.preventDefault()
    }
    let letra=nif.value[8]
    let numeros= nif.value.substring(0, nif.value.length - 1);
    let comprobacion=parseInt(numeros)%23
    
    if(letras[comprobacion]!=letra){
        alert('NIF');
        evento.preventDefault()
    }
    if(comunidad.value=='11'){
        if(sw==0){
            let provincia=document.createElement('select')
            let caceres = document.createElement("option");
            caceres.text="Cáceres"
            let badajoz = document.createElement("option");
            badajoz.text="Badajoz"
            document.body.appendChild(provincia)
            provincia.add(caceres)
            provincia.add(badajoz)
            sw=1
        }

    }
   
}
