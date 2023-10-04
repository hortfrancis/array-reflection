const fetchedImageContainer = document.querySelector('.fetched-image-displayer__image-container');
let currentImageURL = '';

function fetchImage() {
    fetch('https://picsum.photos/200/300')
        .then(response => {
            console.log(response);
            fetchedImageContainer.innerHTML = `<img src="${response.url}" alt="random image">`;
            currentImageURL = response.url;
        })
        .catch(error => console.log(error));
}

// Fetch another image each time the button is pressed
document.querySelector('.fetched-image-displayer__another-image-button').addEventListener('click', fetchImage);

// Display the first image on page load
fetchImage();
