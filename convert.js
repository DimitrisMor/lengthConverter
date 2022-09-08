var input;
var output;
var inputType;
var outputType;


function convert(){

    input=document.getElementById('input');
    inputType=document.getElementById('inputType').value;
    outputType=document.getElementById('outputType').value;
    
    if(input.value===''){
        alert("Enter value!");

    }else{
        if(inputType=='meters' && outputType=='meters'){
            document.getElementById('output').value=input.value;

        }else if(inputType=='meters' && outputType=='centimeters'){
            document.getElementById('output').value=input.value*100;

        }else if (inputType=='meters' && outputType=='kilometers'){
            document.getElementById('output').value=input.value/1000;

        }else if (inputType=='centimeters' && outputType=='meters'){
            document.getElementById('output').value=input.value/100;

        }else if (inputType=='centimeters' && outputType=='centimeters'){
            document.getElementById('output').value=input.value;

        }else if (inputType=='centimeters' && outputType=='kilometers'){
            document.getElementById('output').value=input.value/100000;

        }else if (inputType=='kilometers' && outputType=='meters'){
            document.getElementById('output').value=input.value*1000;

        }else if (inputType=='kilometers' && outputType=='centimeters'){
            document.getElementById('output').value=input.value*100000;

        }else if (inputType=='kilometers' && outputType=='kilometers'){
            document.getElementById('output').value=input.value;

        }else{
            alert("Enter convert types!");
        }
    }
}
