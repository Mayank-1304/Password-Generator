const upperSet= ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
const lowerSet =["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
const numbersSet=["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
const symbolsSet = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?", "/"]
let upperCaseInput = document.querySelector(".uppercase")
let lowerCaseInput = document.querySelector(".lowercase")
let symbolsInput = document.querySelector(".symbols")
let numberInput = document.querySelector(".numbers")
let genratePassEl = document.querySelector(".showpass")
let passRange = document.querySelector(".range")
let password= ""
function getRandomData(dataSet){
    return  dataSet.at(Math.floor(Math.random() * dataSet.length))
}

function generatePass(){
    if(upperCaseInput.checked){
        password+= getRandomData(upperSet)
    }
    if(lowerCaseInput.checked){
        password+= getRandomData(lowerSet)
    }
    if(symbolsInput.checked){
        password+= getRandomData(symbolsSet)
    }
    if(numberInput.checked){
        password+= getRandomData(numbersSet)
    }
}

document.querySelector(".pass").addEventListener("click", function(){
    generatePass()
    if(password.length==0){
        alert("Please select one of the option")
    }else{
        while(password.length < passRange.value){
            generatePass()
        }
        trimPassword()
        genratePassEl.innerHTML = password
        password=""
    }
   
})

const trimPassword = (()=>{
    let difference = -(password.length - passRange.value)
    if(password.length>passRange.value){
        password= password.slice(0,difference)
    }
})


