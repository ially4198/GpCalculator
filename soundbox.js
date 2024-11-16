let container = document.createElement("div");
container.className = "container";
let childDiv1 = document.createElement("div");
    childDiv1.id ="courses";
let childDiv2 = document.createElement("div");
    childDiv2.id ="grades"
let childDiv3 = document.createElement("div");
    childDiv3.id ="unit"
container.appendChild(childDiv1);
container.appendChild(childDiv2);
container.appendChild(childDiv3);

let inputElement1 =document.createElement("input");
    inputElement1.type="text";
    inputElement1.placeholder="Enter Course"
    childDiv1.appendChild(inputElement1);

let inputElement2 =document.createElement("input");
    inputElement2.type="text";
    inputElement2.className="mygrade";
     inputElement2.placeholder="Enter grade"
    childDiv2.appendChild(inputElement2);
    inputElement2 = document.querySelectorAll(".mygrade");

let inputElement3 =document.createElement("input");
    inputElement3.type="number";
    inputElement3.className="myunit";
    inputElement3.placeholder="Enter unit"
    childDiv3.appendChild(inputElement3);
    inputElement3 = document.querySelectorAll(".myunit");
document.body.appendChild(container);


let addButton = document.getElementById("add");
    addButton.addEventListener("click", ()=>{
                let container = document.createElement("div");
            container.className = "container";
            let childDiv1 = document.createElement("div");
                childDiv1.id ="courses";
            let childDiv2 = document.createElement("div");
                childDiv2.id ="grades"
            let childDiv3 = document.createElement("div");
                childDiv3.id ="unit"
            container.appendChild(childDiv1);
            container.appendChild(childDiv2);
            container.appendChild(childDiv3);

            let inputElement1 =document.createElement("input");
                inputElement1.type="text";
                inputElement1.placeholder="Enter Course"
                childDiv1.appendChild(inputElement1);

            let inputElement2 =document.createElement("input");
                inputElement2.type="text";
                inputElement2.className="mygrade";
                inputElement2.placeholder="Enter grade"
                childDiv2.appendChild(inputElement2);
                inputElement2 = document.querySelectorAll(".mygrade");

            let inputElement3 =document.createElement("input");
                inputElement3.type="number";
                inputElement3.className="myunit";
                inputElement3.placeholder="Enter unit"
                childDiv3.appendChild(inputElement3);
                inputElement3 = document.querySelectorAll(".myunit");
            document.body.appendChild(container);
    });
  
  
       
            let submit = document.getElementById("submit");
            submit.addEventListener("click",()=>{
                let displayPara = document.getElementById("para");
                displayPara.innerHTML = "";
                inputElement2 = document.querySelectorAll(".mygrade");
                let values = Array.from(inputElement2).map(input => input.value);
                inputElement3 = document.querySelectorAll(".myunit");
                let unit = Array.from(inputElement3).map(input => input.value);  
                for (let i= 0; i<values.length; i++){
                    if(values[i] ==="A" || values[i] ==="a"){
                        values[i] =5;
                    }else if(values[i]==="B" || values[i] ==="b"){
                        values[i]=4;
                    }else if(values[i]==="C" || values[i] ==="c"){
                        values[i]=3;
                    }else if(values[i]==="D" || values[i] ==="d"){
                        values[i]=2;
                    }else if(values==="E" || values[i] ==="e"){
                        values[i]=1;
                    }else if(values[i]==="F" || values[i] ==="f"){
                        values[i]=0;
                    }else{
                        values[i]=null;
                    }
                }
                const gradeXUnit= values.map((value, index)=>value*unit[index]);
                let sum = 0;
                console.log(gradeXUnit);
                for(let i = 0; i<gradeXUnit.length; i++){
                    sum+=gradeXUnit[i];
                }
                let sum1 = 0;
                for(let i = 0; i<unit.length; i++){
                    sum1+= +unit[i];
                }
                 displayPara = document.getElementById("para")
                let display = document.createElement("span");
                    const total= sum/sum1;
                    display.textContent = " "+total.toFixed(2);
                    display.className = "diplay";
                    displayPara.appendChild(display);
           
            });
          
         


