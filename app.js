const sayac = document.getElementById("sayac");

//Buton
const baslatButon = document.getElementById("baslat");


baslatButon.addEventListener("click",startTimer);

    function startTimer(){
        let say = sayac.textContent;
        let interval = setInterval(() => {
            
            say++;
    
            //  console.log(say);
        sayac.textContent = say

        
    },1000)
    }

