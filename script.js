// script.js

// Function to handle button click events
function selectOption(option) {

    var count = parseInt(localStorage.getItem("count"));

    if (count === 3){
        location.replace("no.html");
        localStorage.removeItem("count");
    }
    
    // Check which option was clicked
    if (option === 'yes') {
        location.replace("yes.html");
    } else if (option === 'no') {
        // Change text on the "No" button to "You sure?"
        document.getElementById('no-button').innerText = 'You sure?'; 
        // Increase font size of "Yes" button
        var yesButton = document.getElementById('yes-button');
        var currentFontSize = window.getComputedStyle(yesButton).getPropertyValue('font-size');
        var newSize = parseFloat(currentFontSize) * 2; // Increase font size by  * 2px
        yesButton.style.fontSize = newSize + 'px';
        localStorage.setItem("count", count + 1);
    } else {
        // If neither "Yes" nor "No" was clicked, show an alert message
        alert('Invalid option!');
    }
    
}

// Function to display the clare pic
function displayClare() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var clareImage = new Image();
    clareImage.src = 'clarepoh.jpg';
    clareImage.alt = 'Angry Bunny';
    clareImage.style.maxWidth = '10%';
    clareImage.onload = function() {
        imageContainer.appendChild(clareImage);
        // document.getElementById('options').style.display = 'none';
    };
}

// Function to display the angry bunny gif
function displayNo() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var angryImage = new Image();
    angryImage.src = 'angry-bunny.gif';
    angryImage.alt = 'Angry Bunny';
    angryImage.onload = function() {
        imageContainer.appendChild(angryImage);
        document.getElementById('options').style.display = 'none';
    };
}

// Function to display the happy rabbits gif
function displayYes() {
    document.getElementById('image-container').innerHTML = '';
    var imageContainer = document.getElementById('image-container');
    var happyImage = new Image();
    happyImage.src = 'bunny-heart.gif';
    happyImage.alt = 'Happy Rabbit Couple';
    happyImage.onload = function() {
        imageContainer.appendChild(happyImage);
        document.getElementById('options').style.display = 'none';
    };
}



document.addEventListener("DOMContentLoaded", function () {
    // Adjust the path check to be more flexible
    var path = window.location.pathname;
    if (path.endsWith('index.html')) {
        displayClare();
    }

    if (path.endsWith('no.html')) { 
        displayNo();
    }

    if (path.endsWith('yes.html')) { 
        displayYes();
    }
});

