/*
    Create an indicator message to communicate application state to the user.
    Can be used for success, error, or other messages.
*/

// Default duration = 5 seconds
function showIndicator(message, type = 'default' , duration = 5000) {

    // Create a new DOM element
    const indicator = document.createElement('span');

    // Add base styling class
    indicator.className = 'indicator';

    // Add the message to the indicator element 
    indicator.textContent = message;

    // Add a styling modifier class based on the on the indicator type
    if (type === 'success') {

        indicator.classList.add('indicator--success');

    } else if (type === 'error') {

        indicator.classList.add('indicator--error');

    } else if (type !== 'default') {

        // A custom type was specified but not recognised
        console.error('Unknown indicator type: ' + type);
        // The default styling will still be applied
    } 

    // Add the indicator to the DOM
    document.body.appendChild(indicator);

    // Ensure browser renders the transition by 'triggering a reflow'
    void indicator.offsetWidth;
    // CSS transition on `.indicator` will cause a fade-in effect 
    indicator.style.opacity = '1';

    // Indicator will disappear after a default duration of 5 seconds, or a custom duration provided 
    setTimeout(() => {

        // Trigger fade out as a transition
        indicator.style.opacity = '0';

        // Wait for the transition to finish before removing from the DOM
        indicator.addEventListener('transitionend', () => {
            indicator.remove();
            // No need to remove the event listener, as the element has been removed from the DOM
            // (Garbage collection should destroy the event listener as well)
        });
    }, duration);
}