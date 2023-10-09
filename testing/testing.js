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

/*
    Test cases for the indicator message function
*/ 

if (localStorage.getItem('testing') === 'true') {

    setTimeout(() => {
        showIndicator('Testing a SUCCESS message.', 'success');
    }
    , 1);
    
    setTimeout(() => {
        showIndicator('Testing an ERROR message.', 'error');
    }
    , 6000);
    
    setTimeout(() => {
        showIndicator('Testing a DEFAULT message.');
    }
    , 12000);

    setTimeout(() => {
        showIndicator('Testing a very long UNKNOWN message. The rain in Spain falls mainly on the plain. The frame in Maine is probably out of blame.', 'unknown');
    }
    , 18000);
}