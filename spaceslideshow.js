// Array that stores the file locations of all slideshow images
let images = [
    "./images/blackhole.jpg",
    "./images/Neutron Star.jpg",
    "./images/Pillars of Creation.jpg",
    "./images/Quasar.jpg"
];

// Keeps track of which image is currently being displayed
let currentImage = 0;

// Function moves the slideshow forward to the next image
function nextImage()
{
    // Increase the image index by 1
    currentImage++;

    // If the slideshow reaches the last image,
    // return to the first image
    if(currentImage >= images.length)
    {
        currentImage = 0;
    }

    // Update the image displayed on the webpage
    document.getElementById("slideshow").src = images[currentImage];
}

// Function moves the slideshow backward to the previous image
function previousImage()
{
    // Decrease the image index by 1
    currentImage--;

    // If the slideshow goes before the first image,
    // move to the last image
    if(currentImage < 0)
    {
        currentImage = images.length - 1;
    }

    // Update the image displayed on the webpage
    document.getElementById("slideshow").src = images[currentImage];
}