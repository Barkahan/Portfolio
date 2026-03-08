const numrange = 59;
const maxNumbers =6;
var slots = document.querySelectorAll(".box");
var pickedNumbers = [];



function GenerateNumbers(){
    let rand = Math.ceil(Math.random() * numrange);
    while(pickedNumbers.length < maxNumbers)
    {
        if(pickedNumbers.includes(rand))
        {
        GenerateNumbers();
        }
        else
        {
        pickedNumbers.push(rand)
        }
    }
    pickedNumbers.sort((a,b)=> a - b);
    
}


document.querySelector("button").onclick = () =>{
    
    if(pickedNumbers.length == 0)
    {
        GenerateNumbers();
        for(let i = 0; i < slots.length; i++)
        {
            const p = document.createElement("p");
            document.querySelector(".lotto_text").textContent = "Here's your lucky numbers";
            p.classList.add("t");
            p.textContent = pickedNumbers[i];
            const parent = slots[i].appendChild(p);

        }
    }
    else
    {
        pickedNumbers = [];
        
        const p = document.getElementsByClassName("t");
        for (let i = p.length - 1; i >= 0; i--) {
            p[i].remove();
        }
        slots.length = 0;
        for(let i = 0; i < slots.length; i++)
        {
            const p = document.createElement("p");
            p.classList.add("t");
            p.textContent = pickedNumbers[i];
            const parent = slots[i].appendChild(p);

        }
        
        

        
    }
    
}


