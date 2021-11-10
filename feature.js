document.querySelector("#btn").addEventListener("click",fullproject);
 //function to run the whole code
  function fullproject(){
        var hexnumbers = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
         var hex_code1 = "";
            var hex_code2 = "";
            var random_index = 0;
             //Making loop
            for(var i=0;i<6;i++){
                 random_index = Math.floor(Math.random() * hexnumbers.length);
                  hex_code1+= hexnumbers[random_index];
                  random_index = Math.floor(Math.random() * hexnumbers.length);
                  hex_code2+=hexnumbers[random_index];

            }
             document.body.style.background = `linear-gradient(to right, #${hex_code1}, #${hex_code2})`;
                document.querySelector("#hexcode1").textContent = hex_code1;
                document.querySelector("#hexcode2").textContent = hex_code2;
                
  }