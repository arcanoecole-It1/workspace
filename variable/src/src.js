let image = document.getElementById("img");
console.log(image)
image.addEventListener("click",function(){
    if(image.src = "img.jpg") {
        console.log(image.src)
        image.src = "image1.jpg"
        image.alt = "Image 2 d'un paysage"
    }else {
        image.src = "img.jpg"
        image.alt = "image d'un paysage"
    }
})
image.addEventListener("mouseenter" , function(){
    image.classList.add('grand')
})

image.addEventListener("mouseleave" , function(){
    image.classList.remove('grand')
})