const slider = document.querySelectorAll(".slides");
console.log(slider.length);
var counter = 0;
slider.forEach((slides,index)=>{
    slides.style.left=`${index*100}%`;
});
function prev(){
    document.getElementById("demo").innerHTML=counter+"/"+slider.length;
    document.getElementById("next").disabled=false;
        counter--;  
        slideimg();
        if(counter<=0){
            document.getElementById("prev").disabled=true;
           
        }
       
       
   
}

function next(){
    document.getElementById("demo").innerHTML=counter+2 +"/"+slider.length;
    document.getElementById("prev").disabled=false;
        counter++;  
        slideimg();
        if(counter+1>=slider.length){
            document.getElementById("next").disabled=true;
            
        }
      
       
   
}
const slideimg = () =>{

    slider.forEach((slides)=>{
       slides.style.transform=`translateX(-${counter * 100}%)`;
    });
}

//show
document.getElementById("demo").innerHTML=counter+1 +"/"+slider.length;
