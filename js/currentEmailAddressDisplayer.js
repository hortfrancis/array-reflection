const displayedEmailAddress = document.querySelector('.current-email-address-displayer__displayed-email-address');
const emailAddressPicker = document.querySelector('.current-email-address-displayer__email-address-picker select');
const addCurrentImageButton = document.querySelector('.current-email-address-displayer__add-current-image-button');
const assignedImagesDisplayer = document.querySelector('.current-email-address-displayer__assigned-images-displayer');

let currentlySelectedEmailAddress;

function setDisplayedEmailAddress() {

    if (currentlySelectedEmailAddress) {
        displayedEmailAddress.textContent = currentlySelectedEmailAddress.emailAddress;
    } else {
        displayedEmailAddress.textContent = 'Please select an email address';
    }
}

function updateAddCurrentImageButton() {

    if (currentlySelectedEmailAddress) {
        addCurrentImageButton.disabled = false;
    } else {
        addCurrentImageButton.disabled = true;
    }
}

function updateAssignedImagesDisplayer() {

    // Clear the assigned images displayer
    assignedImagesDisplayer.innerHTML = '';

    if (currentlySelectedEmailAddress &&
        currentlySelectedEmailAddress.images.length > 0) {

        // Create a `<ul>` element to contain the assigned images
        const assignedImagesList = document.createElement('ul');
        assignedImagesDisplayer.appendChild(assignedImagesList);

        // Add each image URL to the assigned images displayer
        currentlySelectedEmailAddress.images.forEach((imageURL) => {

            const listItem = document.createElement('li');
            listItem.innerHTML = `<img src="${imageURL}" alt="random image">`;
            assignedImagesList.appendChild(listItem);
        });
    }
}

function retrieveEmailAddressFromUUID(uuid) {

    // Find the email address with the matching UUID
    const emailAddress = emailAddresses.find((emailAddress) => {
        return emailAddress.uuid === uuid;
    });

    return emailAddress;
}

// Repopulate the email address picker with the contents of the emailAddresses array
function updateEmailAddressPicker() {

    // Clear the email address picker
    emailAddressPicker.innerHTML = '';

    // Add a default value
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Pick an email address';
    emailAddressPicker.appendChild(defaultOption);

    // Create an `<option>` element for each email address
    emailAddresses.forEach((emailAddress) => {

        const option = document.createElement('option');
        option.value = emailAddress.emailAddress;
        option.textContent = emailAddress.emailAddress;
        option.dataset.uuid = emailAddress.uuid;

        // Add each `<option>` element to the `<select>` element
        emailAddressPicker.appendChild(option);
    });
}

// When the user changes the value of the email address picker
emailAddressPicker.addEventListener('change', () => {

    // Retrieve the user-selected email address from the emailAddresses array
    // and store it as the currently selected email address
    currentlySelectedEmailAddress = retrieveEmailAddressFromUUID(emailAddressPicker.selectedOptions[0].dataset.uuid);

    // Update the UI to reflect the new application state
    setDisplayedEmailAddress();
    updateAddCurrentImageButton();
    updateAssignedImagesDisplayer();
});

addCurrentImageButton.addEventListener('click', () => {

    currentlySelectedEmailAddress.addImage(currentImageURL);
    updateAssignedImagesDisplayer( );
    makeIndicator('Image assigned to email address!', 'success');
});

// On page load, populate the email address picker with any stored email addresses 
updateEmailAddressPicker();