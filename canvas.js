document.addEventListener('DOMContentLoaded',domloaded,false);
function domloaded(){
        var firstCanvas = document.getElementById("firstCanvas");
        
        console.log(firstCanvas);
        
        var context = firstCanvas.getContext("2d");
        
        //context.fillStyle = "green";
        //context.fillRect(25,25,50,60);
        
        var googleImage = new Image();
        
        googleImage.src = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png";
        
        googleImage.onload = function(){
              context.drawImage(googleImage,50, 50);  
        };
        
        
       
}