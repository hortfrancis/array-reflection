const displayedEmailAddress = document.querySelector('.current-email-address-displayer__displayed-email-address');
const emailAddressPicker = document.querySelector('.current-email-address-displayer__email-addresses-picker select');
const addCurrentImageButton = document.querySelector('.current-email-address-displayer__add-current-image-button');

let currentlySelectedEmailAddress = '';

function setDisplayedEmailAddress() {

    if (currentlySelectedEmailAddress) {
        displayedEmailAddress.textContent = currentlySelectedEmailAddress;
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

// When the user changes the value of the email address picker
emailAddressPicker.addEventListener('change', () => {

    currentlySelectedEmailAddress = emailAddressPicker.value;

    console.log(currentlySelectedEmailAddress);

    // Update the UI to reflect the new application state
    setDisplayedEmailAddress();
    updateAddCurrentImageButton();
});

addCurrentImageButton.addEventListener('click', () => {

    // To be added 

});

function updateEmailAddressPicker() {

    // Clear the email address picker
    emailAddressPicker.innerHTML = '';

    // Add a default value
    const defaultOption = document.createElement('option');
    defaultOption.value = '';
    defaultOption.textContent = 'Please select an email address';
    emailAddressPicker.appendChild(defaultOption);

    // Create an `<option>` element for each email address
    emailAddresses.forEach((email) => {

        const option = document.createElement('option');
        option.value = email;
        option.textContent = email;

        // Add each `<option>` element to the `<select>` element
        emailAddressPicker.appendChild(option);
    });
}

// On page load, populate the email address picker with any stored email addresses 
updateEmailAddressPicker();

