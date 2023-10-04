const display = document.getElementById("display")

const sete = document.getElementById("7");
const oito = document.getElementById("8");
const nove=document.getElementById("9");
const mais = document.getElementById("+");

const quatro=document.getElementById("4");
const cinco=document.getElementById("5");
const seis=document.getElementById("6");
const menos=document.getElementById("-");

const um=document.getElementById("1");
const dois=document.getElementById("2");
const tres=document.getElementById("3");
const vezes=document.getElementById("*");

const zero=document.getElementById("0");
const ponto=document.getElementById(".");
const divis=document.getElementById("/");
const igual=document.getElementById("=");

const clear=document.getElementById("limpar");


var valor1 = display.value;
var operacao = "";
var rs = 0;


sete.onclick=function(){
    if(display.value == "0"){
        display.value = "7";
    }else{display.value += "7"}
}

oito.onclick=function(){
    if(display.value == "0"){
        display.value = "8";
    }else{display.value += "8"}
}

nove.onclick=function(){
    if(display.value == "0"){
        display.value = "9";
    }else{display.value += "9"}
}

quatro.onclick=function(){
    if(display.value == "0"){
        display.value = "4";
    }else{display.value += "4"}
}

cinco.onclick=function(){
    if(display.value == "0"){
        display.value = "5";
    }else{display.value += "5"}
}

seis.onclick=function(){
    if(display.value == "0"){
        display.value = "6";
    }else{display.value += "6"}
}

um.onclick=function(){
    if(display.value == "0"){
        display.value = "1";
    }else{display.value += "1"}
}

dois.onclick=function(){
    if(display.value == "0"){
        display.value = "2";
    }else{display.value += "2"}
}

tres.onclick=function(){
    if(display.value == "0"){
        display.value = "3";
    }else{display.value += "3"}
}

zero.onclick=function(){
    if(display.value == "0"){
        display.value = "0";
    }else{display.value += "0"}
}

ponto.onclick=function(){
    if(display.value == "0"){
        display.value += ".";
        ponto.disabled=true;
    }
}

divis.onclick=function(){
    valor1 = display.value;
    operacao = "divis";
    display.value = "0";
}

mais.onclick=function(){
    valor1 = display.value;
    operacao = "+";
    display.value = "0";
}

menos.onclick=function(){
    valor1 = display.value;
    operacao = "-";
    display.value = "0";
}

vezes.onclick=function(){
    valor1 = display.value;
    operacao = "*";
    display.value = "0";
}

igual.onclick=function(){
    switch(operacao) {
        case "+":
            rs= parseFloat(valor1)+parseFloat(display.value);
            display.value=rs;
            break;
            
        case "-":
            rs=valor1-display.value;
            display.value=rs;
            break;
            
        case "*":
            rs=valor1*display.value;
            display.value=rs;
            break;
            
        case "divis":
            rs=valor1/display.value;
            display.value=rs;
            break;
    }
}

limpar.onclick=function(){
    display.value = "0";
}