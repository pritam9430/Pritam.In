// alert("hello");
$('#check').click(function () {

});
function WhatAppFN() {
  // Create an anchor element
  var link = document.createElement("a");
  // Set the href attribute to the Google URL
  link.href = "https://wa.me/918804789470"
  // Open the link in a new tab
  link.target = "_blank";
  // Click the link programmatically
  link.click()
}
// resume downlode
function ResumeDownlode() {
  var link = document.createElement('a');
  link.href = "https://drive.google.com/file/d/1ofPdF3aqh_9AjgB-SRCYg3j96J780sN2/view?usp=sharing";
  link_target = "_blank";
  link.click();
}
// send button 
function action() {
  alert("Thank You For Connecting");
}
let a = document.querySelector(".contact-form-btn");
a.addEventListener('click', action);