  let displayInput = document.querySelector("#display")
  let degButton = document.querySelector(".degbutton")
  let sinButton = document.querySelector(".sinbutton")
  let cosButton = document.querySelector(".cosbutton")
  let tanButton = document.querySelector(".tanbutton")
  let asinButton = document.querySelector(".asinbutton")
  let numberButtons = document.querySelectorAll(".numberbutton")
  let decimalButton = document.querySelector(".decimalbutton")
  let acosButton = document.querySelector(".acosbutton")
  let atanButton = document.querySelector(".atanbutton")
  let operatorButton = document.querySelectorAll(".operatorbutton")
  let acButton = document.querySelector(".acbutton")
  let delButton = document.querySelector(".delbutton")
  let equalButton = document.querySelector(".equalbutton")
   let base;
   let root;
   let answer;
   
  
   function toDegree(radian){
    return radian*180/Math.PI
   }
   function toRadian(degree){
    return degree*Math.PI/180
   }

  let isDegree = true
  degButton.addEventListener("click",function(){
    isDegree = !isDegree 
    
  })
  sinButton.addEventListener("click",function(){
   let value = Number(displayInput.value);
   displayInput.value = isDegree ? Math.round(Math.sin(toRadian(value))*100)/100 : Math.sin(value);
   
   
  })
  cosButton.addEventListener("click",()=>{
    let value = Number(displayInput.value);
   displayInput.value = isDegree ? Math.round( Math.cos(toRadian(value))*100)/100: Math.cos(value);
  })
  tanButton.addEventListener("click",()=>{
    let value = Number(displayInput.value);
   displayInput.value = isDegree ? Math.round( Math.tan(toRadian(value))*100)/100: Math.tan(value);
  })
  asinButton.addEventListener("click",()=>{
     let value = Number(displayInput.value);
    displayInput.value = isDegree ? Math.round(toDegree(Math.asin(value))) : Math.asin(value);
  })
   acosButton.addEventListener("click",()=>{
     let value = Number(displayInput.value);
    displayInput.value = isDegree ? Math.round(toDegree(Math.acos(value))) : Math.acos(value);
  })
   atanButton.addEventListener("click",()=>{
     let value = Number(displayInput.value);
    displayInput.value = isDegree ? Math.round(toDegree(Math.atan(value))) : Math.atan(value);
  })
  let operators = ["+","-","×","÷","%"]
 
  numberButtons.forEach((button)=>{
    button.addEventListener("click",()=>{
      displayInput.value += button.textContent
     
        
    })
  })
  decimalButton.addEventListener("click",()=>{
    let lastcharcter = displayInput.value.slice(-1)
    let currentNumber = displayInput.value.split(/[+ - × ÷ % ]/).pop()
    console.log(currentNumber);
    if(displayInput.value === "" || lastcharcter === "." || currentNumber.includes(".")){

    }else{

      displayInput.value += decimalButton.textContent;
    }
    
  })
  operatorButton.forEach((item)=>{
    item.addEventListener("click",()=>{
    let lastcharcter = displayInput.value.slice(-1)
    
    if(displayInput.value === ""||["+","-","×","÷","%"].includes(lastcharcter)){

    }else{
      displayInput.value += item.textContent
    }
      
    })
  })
  acButton.addEventListener("click",()=>{
    displayInput.value = ""
  })
  delButton.addEventListener("click",()=>{
    displayInput.value = displayInput.value.slice(0,-1)
  })
  equalButton.addEventListener("click",()=>{
  if(displayInput.value === ""){

  }else{
    let expression = displayInput.value

    if(expression.includes("%")){
      let percentIndex = expression.indexOf("%")

      if(percentIndex === expression.length - 1){
        let [first, second] = expression.split("×")
        second = Number(second.replace("%",""))
        displayInput.value = (Number(first) * second) / 100
       
      }else{
        expression = expression.replaceAll("×","*").replaceAll("÷","/")
        displayInput.value = eval(expression)
        
      }

    }else{
      expression = expression.replaceAll("×","*").replaceAll("÷","/")
      displayInput.value = eval(expression)
    }
  }
  answer = displayInput.value 
})
let plusMinusButton = document.querySelector(".plusminusbutton")

plusMinusButton.addEventListener("click",()=>{
  if(displayInput.value === ""){

  }else{
    displayInput.value = Number(displayInput.value) * -1
  }
})
    // factorial ber korar jonno function baniye loop chalate hoyece

  function factorial(number){
    let result = 1
    for(let i = 1; i<=number; i++){
      result *= i
    }
    return result
  }
   let Memory = 0
let buttons = document.querySelectorAll("button")
 buttons.forEach((item)=>{
  item.addEventListener("click",()=>{
    if(item.textContent === "log"){
      displayInput.value = Math.log10(Number(displayInput.value))
    }else if(item.textContent === "ln"){
      displayInput.value = Math.log(Number(displayInput.value))
    }else if(item.textContent === "e"){
      displayInput.value = Math.E
    }else if(item.textContent === "π"){
      displayInput.value = Math.PI
    }else if(item.textContent === "x²"){ 
     displayInput.value = Math.pow(Number(displayInput.value),2)
    }else if(item.textContent === "xʸ"){
       base = Number(displayInput.value)
      displayInput.value = ""
    }
     if (item.textContent === "=" && base !== undefined) {
  displayInput.value = Math.pow(base, Number(displayInput.value))
  base = undefined
}else if(item.textContent === "√"){
  displayInput.value = Math.sqrt(Number(displayInput.value))
}else if(item.textContent === "ʸ√x"){
  base = Number(displayInput.value)
  displayInput.value = ""
}else if(item.textContent === "=" && base !== undefined){
  displayInput.value = Math.pow(base, 1 / root)
  base = undefined
  root = undefined
} else if(item.textContent === "!"){
  displayInput.value = factorial(Number(displayInput.value))

}else if (item.textContent === "Ans"){
  displayInput.value = answer
}else if(item.textContent === "log₂"){
  displayInput.value = Math.log2(Number(displayInput.value))
}else if(item.textContent === "M+"){
  Memory += Number(displayInput.value)
 
}else if(item.textContent === "MR"){
  displayInput.value = Memory
}else if(item.textContent === "M-"){
  Memory -= Number(displayInput.value)
}else if(item.textContent === "MC"){
 Memory = 0
}else if(item.textContent === "cot"){
  let value = Number(displayInput.value);
  displayInput.value = isDegree ? Math.round(1 / Math.tan(toRadian(value))*100)/100 : 1 / Math.tan(value);
}else if(item.textContent === "cosec"){
  let value = Number(displayInput.value);
  displayInput.value = isDegree ? Math.round(1 / Math.sin(toRadian(value))*100)/100 : 1 / Math.sin(value);
}else if(item.textContent === "sec"){
  let value = Number(displayInput.value);
  displayInput.value = isDegree ? Math.round(1 / Math.cos(toRadian(value))*100)/100 : 1 / Math.cos(value);
}else if(item.textContent === "asec"){
  let value = Number(displayInput.value);
  displayInput.value = isDegree ? Math.round(Math.acos(1 / value) * 180 / Math.PI * 100) / 100 : Math.acos(1 / value);
}else if(item.textContent === "acosec"){
  let value = Number(displayInput.value);
  displayInput.value = isDegree ? Math.round(Math.asin(1 / value) * 180 / Math.PI * 100) / 100 : Math.asin(1 / value);
}else if(item.textContent === "acot"){
  let value = Number(displayInput.value);
  displayInput.value = isDegree ? Math.round(Math.atan(1 / value) * 180 / Math.PI * 100) / 100 : Math.atan(1 / value);
} else if(item.textContent === "("){
  displayInput.value += "("
  

} else if(item.textContent === ")"){
  displayInput.value += ")"
}
  })
 })
let triButton = document.querySelector(".tributton")
  triButton.addEventListener("click",()=>{
    trigoButtons.classList.toggle("hidden")
  })
let trigoButtons = document.querySelector(".trigobuttons")