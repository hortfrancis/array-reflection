const fetchedImageContainer = document.querySelector('.fetched-image-displayer__image-container');
let currentImageURL = '';

// Because this is a front-end project, we need to call the API from the client browser.
// This 'access key' only permits requests for image URLs. 
const accessKey = 'zHaO4h1oOz3bR_zLHY2XX0TAKF7Jy4Ny0gimZmSPrx0';
const randomImageEndpoint = 'https://api.unsplash.com/photos/random';

function fetchImage() {
    // Using Unsplash API
    // https://unsplash.com/documentation#get-a-random-photo
    fetch(`${randomImageEndpoint}?client_id=${accessKey}`)
        .then(response => {

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json(); // (Returns a promise)
        })
        .then(data => {
            console.log(data);
            // Saving the URL of the 'small' version of the image
            fetchedImageContainer.innerHTML = `<img src="${data.urls.small}" alt="random image">`;
            currentImageURL = data.urls.small;
        })
        .catch(error => console.error(error));
}

// Fetch another image each time the button is pressed
document.querySelector('.fetched-image-displayer__another-image-button').addEventListener('click', fetchImage);

// Display the first image on page load
fetchImage();
