const addEmailForm = document.querySelector('#form-add-email');

// Initialise an empty array to store email addresses
const emailAddresses = [];

// Populate the array with some generic test data
emailAddresses.push('test1@test.test');
emailAddresses.push('test2@test.test');
emailAddresses.push('test3@test.test');

addEmailForm.addEventListener('submit', (event) => {

    // Stop the page from being reloaded
    event.preventDefault();

    console.log('form-add-email submitted');

    // Get the email input field
    const emailAddress = document.querySelector('#input-add-email').value;

    // Add the input email address to the array of stored email addresses
    emailAddresses.push(emailAddress);

    updateEmailAddressPicker();

    console.log(emailAddresses);
    
    // Clear the input field
    addEmailForm.reset();
});