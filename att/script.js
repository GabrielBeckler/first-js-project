alert("Calculadora!");

function somar(){
    let num1 = Number(prompt("Digite o primeiro número da soma:"));
    let num2 = Number(prompt(`${num1} + _ = _ \nDigite o segundo número da soma:`));
    let resultado = num1 + num2;
    alert(`${num1} + ${num2} = ${resultado}`);
}

function subtrair(){
    let num1 = Number(prompt("Digite o primeiro número da subtração:"));
    let num2 = Number(prompt(`${num1} - _ = _ \nDigite o segundo número da subtração:`));
    let resultado = num1 - num2;
    alert(`${num1} - ${num2} = ${resultado}`);
}

function multiplicar(){
    let num1 = Number(prompt("Digite o primeiro número da multiplicação:"));
    let num2 = Number(prompt(`${num1} * _ = _ \nDigite o segundo número da multiplicação:`));
    let resultado = num1 * num2;
    alert(`${num1} * ${num2} = ${resultado}`);
}

function dividir(){
    let num1 = Number(prompt("Digite o primeiro número da divisão:"));
    let num2 = Number(prompt(`${num1} / _ = _ \nDigite o segundo número da divisão:`));
    if (num2 <= 0){
        alert("Segundo número não pode ser igual ou menor que 0.");
    } else {
        let resultado = num1 / num2;
        alert(`${num1} / ${num2} = ${resultado}`);
    }
}

let opc = 0;
function menu(){

    while (opc != 5){
        let text = `Menu:
        1. Soma
        2. Subtração
        3. Multiplicação
        4. Divisão
        5. Sair`;
        
        let opc = Number(prompt(text));
        switch(opc){
            case 1:
                somar();
                break;
                case 2:
                    subtrair();
                    break;
                    case 3:
                        multiplicar();
                        break;
                        case 4:
                            dividir();
                            break;
                            case 5:
                                alert("Saindo...");
                                break;
                                default:
                                    alert("Código inválido");
                                    break;
                                }
                            }
                            
                        }
menu()