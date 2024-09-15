// Code for navbar scroll color changing
$(window).scroll(function () {
  $("nav").toggleClass("scrolled", $(this).scrollTop() > 50);
});


//this coad for testmonial (newly launnched)

// var btn1 = document.getElementsByClassName("btn1");
// var slide = document.getElementById("slide");

// btn1[0].onclick = function () {
//   slide.style.transform = "translateX(0px)";
//   for (i = 0; i < 4; i++) {
//     btn1[i].classList.remove("active-test");
//   }
//   this.classList.add("active-test");
// };
// btn1[1].onclick = function () {
//   slide.style.transform = "translateX(-800px)";
//   for (i = 0; i < 4; i++) {
//     btn1[i].classList.remove("active-test");
//   }
//   this.classList.add("active-test");
// };
// btn1[2].onclick = function () {
//   slide.style.transform = "translateX(-1600px)";
//   for (i = 0; i < 4; i++) {
//     btn1[i].classList.remove("active-test");
//   }
//   this.classList.add("active-test");
// };
// btn1[3].onclick = function () {
//   slide.style.transform = "translateX(-2400px)";
//   for (i = 0; i < 4; i++) {
//     btn1[i].classList.remove("active-test");
//   }
//   this.classList.add("active-test");
// };

 





//get input from clint  inquiry form

const form = $("inquiry-form");
const nameInput = $("name");
const LastName = $("LastName");
const emailInput = $("email");
const companyInput = $("company");
const messageInput = $("message");
const submitButton = $("submit-button");

form.addEventListener("submit", (event) => {
  // event.preventDefault();

  const formData = new FormData(event.target);
  const formValues = Object.fromEntries(formData.entries());

  //console.log(formValues);
  // Replace the console.log statement with your own code to process the form data
  // For example, you could use fetch() to send the data to a server
});
