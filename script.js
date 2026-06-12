const directionBtn = 
document.getElementById("directionBtn");
const locationmessage = 
document.getElementById("locationmessage");

if(directionBtn){

    directionBtn.addEventListener("click",
        (e) => {
            e.preventDefault();

locationmessage.classList.toggle("show");
            
        }
    )
}

const btn = document.getElementById('learnmorebtn');
const texts = document.querySelectorAll('.hidden-text');

btn.addEventListener('click', () => {
  texts.forEach((text, i) => {
    
    setTimeout(() => {
      text.classList.toggle('show');
    }, i * 300); 
  });
});


const reservationform =
document.getElementById("reservationform");

reservationForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
    document.getElementById("name").value;

    const email =
    document.getElementById("email").value;

    const phone =
    document.getElementById("phone").value;

    const date =
    document.getElementById("date").value;

    const time =
    document.getElementById("time").value;

    const guests =
    document.getElementById("guests").value;

    const message =
`🍷 VELORA RESERVATION

Name: ${name}

Email: ${email}

Phone: ${phone}

Date: ${date}

Time: ${time}

Guests: ${guests}`;

    const whatsappNumber =
    "2348162305255";

    const whatsappURL =
`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, "_blank");

});


const menuToggle =
document.getElementById("menuToggle");

const menuModal =
document.getElementById("menuModal");

const closeMenu =
document.getElementById("closeMenu");

menuToggle.addEventListener("click", () => {

    menuModal.classList.add("active");

});

closeMenu.addEventListener("click", () => {

    menuModal.classList.remove("active");

});

