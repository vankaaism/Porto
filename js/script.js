// Ini Untuk Sidebar
function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const slides = document.querySelectorAll(".slider img");
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;

    function slide() {
        currentIndex++;
        if (currentIndex >= slides.length) {
            currentIndex = 0;
            slider.scrollTo({
                left: 0,
                behavior: "auto"
            });
        } else {
            slider.scrollTo({
                left: currentIndex * slideWidth,
                behavior: "smooth"
            });
        }
    }

    setInterval(slide, 3000);
});

function showForm() {
    document.getElementById('contactFormPopup').style.display = 'flex';
}

function hideForm() {
    document.getElementById('contactFormPopup').style.display = 'none';
}

// Close the form when clicking outside of it
window.onclick = function(event) {
    var popup = document.getElementById('contactFormPopup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}
// script.js

function showForm() {
    document.getElementById('contactFormPopup').style.display = 'flex';
}

function hideForm() {
    document.getElementById('contactFormPopup').style.display = 'none';
}

function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name.length < 1 || subject.length < 1 || message.length < 1) {
        alert('Name, Subject, and Message must be at least 1 characters long.');
        return false;
    }

    if (!email.includes('@')) {
        alert('Email must contain @.');
        return false;
    }

    return true;
}


window.onclick = function(event) {
    var popup = document.getElementById('contactFormPopup');
    if (event.target == popup) {
        popup.style.display = 'none';
    }
}

