let btnNature = document.getElementById("natures");
btnNature.addEventListener("click", function() {
    nature();
});
let btnAnime = document.getElementById("autres");
btnAnime.addEventListener("click", function() {
    autre();
});
let btnFilm = document.getElementById("films");
btnFilm.addEventListener("click", function() {
    film();
});
let btnAnimaux = document.getElementById("animaux-btn");
btnAnimaux.addEventListener("click", function() {
    animaux();
});
let btnGen = document.getElementById("gens");
btnGen.addEventListener("click", function() {
    gen();
});


const pictures = [
    {
        src: "assets/images/nature1.jpg",
        alt: "Image de la nature",
        category: "nature"
    },
    {
        src: "assets/images/nature2.jpg",
        alt: "Image de la nature",
        category: "nature"
    },
    {
        src: "assets/images/nature3.jpg",
        alt: "Image de la nature",
        category: "nature"
    },
    {
        src: "assets/images/nature4.jpg",
        alt: "Image de la nature",
        category: "nature"
    },
    {
        src: "assets/images/film.jpg",
        alt: "Image de film",
        category: "film"
    },
    {
        src: "assets/images/film1.jpg",
        alt: "Image de film",
        category: "film"
    },
    {
        src: "assets/images/film2.jpg",
        alt: "Image de film",
        category: "film"
    },
    {
        src: "assets/images/film3.jpg",
        alt: "Image de film",
        category: "film"
    },
    {
        src: "assets/images/animaux1.jpg",
        alt: "Image d'animaux",
        category: "animaux"
    },
    {
        src: "assets/images/animaux2.jpg",
        alt: "Image d'animaux",
        category: "animaux"
    }
    ,
    {
        src: "assets/images/animaux3.jpg",
        alt: "Image d'animaux",
        category: "animaux"
    },
    {
        src: "assets/images/animaux4.jpg",
        alt: "Image d'animaux",
        category: "animaux"
    },
    {
        src: "assets/images/anime1.jpg",
        alt: "Image anime",
        category: "anime"
    },
    {
        src: "assets/images/anime2.jpg",
        alt: "Image anime",
        category: "anime"
    },
    {
        src: "assets/images/anime3.jpg",
        alt: "Image anime",
        category: "anime"
    },
    {
        src: "assets/images/anime4.jpg",
        alt: "Image anime",
        category: "anime"
    },
    {
        src: "assets/images/gen1.jpg",
        alt: "Image gens",
        category: "gens"
    },
    {
        src: "assets/images/gen2.jpg",
        alt: "Image gens",
        category: "gens"
    },
    {
        src: "assets/images/gen3.jpg",
        alt: "Image gens",
        category: "gens"
    },
    {
        src: "assets/images/gen4.jpg",
        alt: "Image gens",
        category: "gens"
    }
]
const container = document.getElementById('semi-container');
let images= document.querySelectorAll(".test");



images.forEach((img,index) =>{
    img.src=pictures[index].src;
    
})

