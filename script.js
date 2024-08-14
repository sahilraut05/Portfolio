function toggleMenu(){
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

//for form msg
const scriptURL = 'https://script.google.com/macros/s/AKfycbxky3QvyhgY6tkbTlo7bhRj_wG-wMMSt98navubTWA4O2DHYg8ntt_sakxtmfuKJvmp/exec';

const form = document.forms['contact-form'];
const messageDiv = document.getElementById('form-message');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  messageDiv.textContent = '';

  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
      messageDiv.textContent = "		Thank you! We will get back to you soon.";
      messageDiv.style.color = 'green';
    })
    .catch(error => {
      messageDiv.textContent = 'Error! ' + error.message;
      messageDiv.style.color = 'red';
    });
});


//
//
//function openVideoPopup(videoSrc) {
//    // Get the video modal
//    var videoModal = document.getElementById("videoModal");
//
//    // Set the video source dynamically
//    var videoIframe = document.createElement("iframe");
//    videoIframe.width = "600";
//    videoIframe.height = "375";
//    videoIframe.src = videoSrc;
//    videoIframe.frameBorder = "0";
//    videoIframe.allowFullscreen = true;
//
//    // Append the iframe to the video container in the modal
//    document.getElementById("videoContainer").innerHTML = "";
//    document.getElementById("videoContainer").appendChild(videoIframe);
//
//    // Display the modal
//    videoModal.style.display = "flex";
//}
//
//function closeVideoPopup() {
//    // Hide the modal
//    document.getElementById("videoModal").style.display = "none";
//}