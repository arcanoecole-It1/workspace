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
    },
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
];

const imagesContainer = document.querySelector(".gallery"); // Assuming your images are displayed in a container with the class "gallery"

function displayImages(imageArray) {
    imagesContainer.innerHTML = ""; // Clear the container before adding new images

    imageArray.forEach(imageData => {
        const imgElement = document.createElement("img");
        imgElement.src = imageData.src;
        imgElement.alt = imageData.alt;
        imgElement.classList.add("test"); // Add the "test" class if needed
        imagesContainer.appendChild(imgElement);
    });
}

// Initial display of all images
displayImages(pictures);

// Get all filter buttons
const filterButtons = document.querySelectorAll(".filter-button"); // Assuming your filter buttons have the class "filter-button"

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.id; // Assuming the button's ID corresponds to the category

        if (category === "all") {
            displayImages(pictures); // Display all images if "all" is clicked
        } else {
            const filteredImages = pictures.filter(image => image.category === category);
            displayImages(filteredImages);
        }
    });
});