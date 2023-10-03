
/*  Create a unique identifier as a string of hexadecimal characters. 
    Used to bind application-level data to the user interface:
    `EmailAddress` objects can be retrieved from `select#select-email-address`
*/
function makeUUID() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
        const r = Math.random() * 16 | 0;
        const v = c === 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
};

class EmailAddress {

    constructor(emailAddress) {
        // Store the email address as a string
        this.emailAddress = emailAddress;
        // Store assigned images in an array
        this.images = [];
        this.uuid = makeUUID();
    }

    addImage(image) {
        this.images.push(image);
    }
}

const addEmailForm = document.querySelector('#form-add-email');

// Initialise an empty array to store email addresses
const emailAddresses = [];

// Populate the array with some generic test data
emailAddresses.push(new EmailAddress('test1@test.test'));
emailAddresses.push(new EmailAddress('test2@test.test'));
emailAddresses.push(new EmailAddress('test3@test.test'));


addEmailForm.addEventListener('submit', (event) => {

    // Stop the page from being reloaded
    event.preventDefault();

    console.log('form-add-email submitted');

    // Get the email input field
    const emailAddress = document.querySelector('#input-add-email').value;

    // Add the input email address to the array of stored email addresses
    emailAddresses.push(new EmailAddress(emailAddress));

    updateEmailAddressPicker();

    console.log(emailAddresses);

    // Clear the input field
    addEmailForm.reset();
});

console.log(emailAddresses);