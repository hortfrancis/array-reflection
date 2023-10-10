/* 
    Handle state persistence in the browser, using localStorage
*/

// Save current state
function saveToLocalStorage(emailAddresses) {

    localStorage.setItem('emailAddresses', JSON.stringify(emailAddresses));
}

// Retrieve previous state
function loadFromLocalStorage() {

    if (localStorage.getItem('emailAddresses')) {

        // Load the saved JSON data from localStorage
        const loadedData = JSON.parse(localStorage.getItem('emailAddresses'));

        // Return an array of EmailAddress objects
        return loadedData.map(item => {
            // Need to reinstantiate each EmailAddress object
            const emailAddress = new EmailAddress(item.emailAddress);
            emailAddress.images = item.images;
            emailAddress.uuid = item.uuid;
            return emailAddress;
        });
    }
}

