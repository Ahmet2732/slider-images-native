var allImages= Array.from(document.querySelectorAll(".item img"))
var lightBoxContainer=document.getElementById("lightBoxContainer")
var lightbox = document.querySelector("#lightbox")
var closeBtn=document.getElementById("closeBtn")
var prevBtn=document.getElementById("prevBtn")
var nextBtn=document.getElementById("nextBtn")
var currentImg;



nextBtn.addEventListener("click",nextBt)
prevBtn.addEventListener("click",prevbt)
closeBtn.addEventListener("click", close);



for(var i=0;i<allImages.length;i++){
    allImages[i].addEventListener("click",function(e){ 
        lightBoxContainer.classList.replace("d-none","d-flex")
        var imgSrc=e.target.getAttribute("src");
        currentImg=allImages.indexOf(e.target)
        lightbox.style.backgroundImage = `url(${imgSrc})`
        console.log(imgSrc);
        
})}


function close(){
    lightBoxContainer.classList.replace("d-flex","d-none")
}


function nextBt(){
currentImg++;
var imgurl=allImages[currentImg].getAttribute("src")
lightbox.style.backgroundImage = `url(${imgurl})`

console.log(allImages[currentImg]);
}

function prevbt(){
    currentImg--;
    var imgurl=allImages[currentImg].getAttribute("src")
    lightbox.style.backgroundImage = `url(${imgurl})`
    
    console.log(allImages[currentImg]);
    
    
    
    }
