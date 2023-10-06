// Use a local default image while building, to avoid hitting the API limit
// These function are not called anywhere within the application, but can be called in the browser console 

function setTestingModeOn() {
    localStorage.setItem('testing', 'true');
    console.log('Testing mode enabled.');
}

function setTestingModeOff() {
    localStorage.setItem('testing', 'false');
    console.log('Testing mode disabled.');
}

function toggleTestingMode() {
    if (localStorage.getItem('testing') === 'true') {
        setTestingModeOff();
    } else {
        setTestingModeOn();
    }
}

function checkTestingMode() {
    if (localStorage.getItem('testing') === 'true') {
        console.log('Testing mode is enabled.');
    } else {
        console.log('Testing mode is disabled.');
    }
}