const displayImageContainer = document.querySelector('.image-displayer__image-container');

function fetchImage() {
    fetch('https://picsum.photos/200/300')
        .then(response => {
            console.log(response);
            displayImageContainer.innerHTML = `<img src="${response.url}" alt="random image">`;
        })
        .catch(error => console.log(error));
}

document.querySelector('.image-displayer__another-image-button').addEventListener('click', fetchImage);

// Display the first image on page load
fetchImage();
