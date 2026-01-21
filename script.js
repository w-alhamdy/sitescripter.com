const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');

const sections = document.querySelectorAll('.section');

const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

const portfolioLists = document.querySelectorAll('.portfolio-list');
const portfolioBoxs = document.querySelectorAll('.portfolio-box');

// navbar actions and all sections along with cube rotation when navbar is clicked
navs.forEach((nav, idx) => {
    nav.addEventListener('click', () => {
        document.querySelector('.nav-list li.active').classList.remove('active');
nav.classList.add('active');

cube.style.transform = `rotateY(${idx * -90}deg)`;

document.querySelector('.section.active').classList.remove('active');
sections[idx].classList.add('active');

const array = Array.from(sections);
const arrSecs = array.slice(1, -1); // only requires indexes 1, 2, 3 or does not require start and end indexes
arrSecs.forEach(arrSec => {
    if (arrSec.classList.contains('active')) {
       sections[4].classList.add('action-contact');
    }    
});
if (sections[0].classList.contains('active')) {
    sections[4].classList.remove('action-contact'); 
}
});
});

// resume section when clicking tab-list
resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.resume-list.active').classList.remove('active');
list.classList.add('active');

document.querySelector('.resume-box.active').classList.remove('active');
resumeBoxs[idx].classList.add('active');
    });
});

// portfolio section when clicking tab-list
portfolioLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        document.querySelector('.portfolio-list.active').classList.remove('active');
list.classList.add('active');

document.querySelector('.portfolio-box.active').classList.remove('active');
portfolioBoxs[idx].classList.add('active');
    });
});


// visibility for contact section when reloading (cube reloading animation) 
setTimeout(() => {
    sections[4].classList.remove('active');
}, 1500);
const form = document.querySelector('form');
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const subject = document.getElementById("subject");
const mess = document.getElementById("message");

function sendEmail() {
    const bodyMessage = `Full Name: ${fullName.value}<br> Email: ${email.value}<br> Phone Number: ${phone.value}<br> Message: ${mess.value}`;

    Email.send({
        SecureToken:"5d3c199f-1da4-48a2-88cf-d77322ce193e",
        To : 'w.alhamdy@icloud.com',
        From : "w.alhamdy@icloud.com",
        Subject : subject.value,
        Body : bodyMessage
    }).then(
      message => {
        if (message == "OK") {
Swal.fire({
  title: "Success!",
  text: "Message sent successfully!",
  icon: "success"
});
        }
      }
    );
}

function checkInputs() {
    const items = document.querySelectorAll(".item");

    for ( const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.parentElement.classList.add("error");
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
checkEmail();
        });

        item.addEventListener("keyup", () => {
if (items.value != "") {
    item.classList.remove("error");
            item.parentElement.classList.remove("error");
}
else {
    item.classList.add("error");
            item.parentElement.classList.add("error");
}
        });
    }
}
function checkEmail() {
    const emailRegex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/;
    const errorTxtEmail = document.querySelector(".error-txt.email");

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.parentElement.classList.add("error");

        if (email.value != "") {
            errorTxtEmail.innerText = "Enter a valid email address";  
        }
        else {
            errorTxtEmail.innerText = "Email Address can't be blank";
        }
    }
    else {
        email.classList.remove("error");
        email.parentElement.classList.remove("error");

    }
}


form.addEventListener("submit", (e) => { 
    e.preventDefault();
    checkInputs(); 

    if (!fullName.classList.contains("error") && !email.classList.contains("error") &&
!phone.classList.contains("error") && !subject.classList.contains("error") && !mess.classList.contains("error")) {
    sendEmail();

    form.reset();
    return false;
}
});


