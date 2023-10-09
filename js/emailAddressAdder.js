
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
        // List of image URLs
        this.images = [];
        // Unique identifier to bind application data to the user interface 
        this.uuid = makeUUID();
    }

    addImage(image) {
        this.images.push(image);
    }
}

const addEmailForm = document.querySelector('#form-add-email');
const addEmailInput = addEmailForm.querySelector('#input-add-email');

// Initialise an empty array to store email addresses
const emailAddresses = [];

// Populate the array with some generic test data
emailAddresses.push(new EmailAddress('test1@test.test'));
emailAddresses.push(new EmailAddress('test2@test.test'));
emailAddresses.push(new EmailAddress('test3@test.test'));


addEmailForm.addEventListener('submit', (event) => {

    // Stop the page from being reloaded
    event.preventDefault();

    // Get the email input field
    const emailAddress = document.querySelector('#input-add-email').value;

    // Add the input email address to the array of stored email addresses
    emailAddresses.push(new EmailAddress(emailAddress));

    updateEmailAddressPicker();

    makeIndicator('Email address added!', 'success');

    // Make the input element 'flash' green to indicate success
    addEmailInput.classList.add('email-address-adder__email-input--success');
    setTimeout(() => {
        addEmailInput.classList.remove('email-address-adder__email-input--success');
    }, 300);  // Flash for 0.3 seconds

    // Clear the input field
    addEmailForm.reset();
});

// When the form attempts to submit, it will check the validity of the input field; 
// if the value is not a valid email address, this event listener will fire
addEmailInput.addEventListener('invalid', () => {

    makeIndicator("Please enter a valid email address.", 'error');

    // Make the border of the input element red
    addEmailInput.classList.add('email-address-adder__email-input--invalid');

    // Wait until the user interacts with the input field again, and then remove the red border
    addEmailInput.addEventListener('input', () => {
        addEmailInput.classList.remove('email-address-adder__email-input--invalid');
    }, {
        // Event will remove itself automatically after firing once
        once: true
    }
    );
}, {
    // 'invalid' event do not bubble; must be captured instead.
    capture: true
}
);