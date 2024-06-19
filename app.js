function calc(){
    let number1 = document.getElementById("number1").value;
    let number2 = document.getElementById("number2").value;
    let operator = document.getElementById("operator").value;
    let lblOutput = document.getElementById("output");

    number1 = new Number(number1);
    number2 = new Number(number2);

    switch(operator){
        case "+" : op = number1+number2;break;
        case "-" : op = number1-number2;break;
        case "*" : op = number1*number2;break;
        case "/" : op = number1/number2;break;
    }

    lblOutput.innerHTML = op;

}