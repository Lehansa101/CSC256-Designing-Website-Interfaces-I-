let images = [ 
    "./images/blackhole.jpg",
    "./images/Neutron Star.jpg",
    "./images/Pillars of Creation.jpg",
    "./images/Quasar.jpg"
];

let currentImage = 0;

function nextImage()
{
    currentImage++;

    if(currentImage >= images.length)
    {
        currentImage = 0;
    }

    document.getElementById("slideshow").src = images[currentImage];
}

function previousImage()
{
    currentImage--;
    if(currentImage < 0)
    {
        currentImage = images.length - 1;
    }
    document.getElementById("slideshow").src = images[currentImage];
}