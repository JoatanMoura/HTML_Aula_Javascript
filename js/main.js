function soma(n1, n2){
    return n1 + n2;
}

function validaIdade(idade){
    var validar;
    if (idade >= 18){
        validar = true
    }else{
        validar = false
    }
    return validar;
}

var idade = prompt("Qual é a sua idade?");
console.log(validaIdade(idade));

//alert(soma(5,10));

/*
var d = new Date;
alert(d.getMinutes());
*/

/*
var count;
for (count=0;count<=5;count++){
    alert(count);
}
*/

/*
var count = 0;
while(count <= 5){
    alert(count);
    console.log(count);
    count ++;
};
*/
/*
var idade = prompt("Qual sua idade?");
if (idade >= 18){
    alert("maior de idade");
}else{
    alert("menor de idade")
};
*/

/*
var frutas = [{nome:"maçã",cor:"vermelha"},{nome:"uva",cor:"roxa"}];
console.log(frutas);
alert(frutas[1].nome);
var fruta = {nome:"maçã",cor:"vermelha"};
console.log(fruta.nome);
alert(fruta.cor);
var lista = ["maçã","pêra","laranja"];
lista.push("uva");
console.log(lista.toString());
console.log(lista.join(" - "));
alert(lista);
var nome = "Joatan Moura";
var idade = 47;
var idade2 = 8;
var frase = "Japão é o melhor time do mundo."
alert(nome + " tem " + idade + " anos.");
alert(idade+idade2);
console.log(nome);
console.log(idade2);
console.log(frase.replace("Japão","Brasil"));
alert(frase.toLowerCase());
*/