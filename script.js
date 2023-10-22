document.addEventListener("DOMContentLoaded", function () {
    let multipleCardCarousel = document.querySelector(".carousel");
  
    if (window.matchMedia("(min-width: 768px)").matches) {
      let carousel = new bootstrap.Carousel(multipleCardCarousel, {
        interval: false, 
        wrap: false,
      });
  
      let carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
      let cardWidth = document.querySelector(".carousel-item").offsetWidth;
      let scrollPosition = 0;
  
      document.querySelector(".carousel .carousel-control-next").addEventListener("click", function () {
        if (scrollPosition <= carouselWidth - cardWidth * 4) {
          scrollPosition += cardWidth;
          document.querySelector(".carousel .carousel-inner").scroll({ left: scrollPosition, behavior: "smooth" });
          }
        });
  
      document.querySelector(".carousel .carousel-control-prev").addEventListener("click", function () {
        if (scrollPosition >= 0) {
          scrollPosition -= cardWidth;
          document.querySelector(".carousel .carousel-inner").scroll({ left: scrollPosition, behavior: "smooth" });
        }
      });
    } else {
      multipleCardCarousel.classList.add("slide");
    }});

    function validateForm(){
        var nama = document.getElementById("Nama");
        var namaError = document.getElementById("nama-error");
        var isValid = true;
        if(nama.value==""){
          namaError.innerText = "Nama tidak boleh kosong!";
          isValid = false;
        }
        else if(nama.value.length<3){
          namaError.innerText = "Nama harus lebih dari 2 karakter";
          isValid = false;
        }else{
          namaError.innerText = "";
          isValid = true;
        }
  
        var nomor = document.getElementById("Notelp");
        var nomorError = document.getElementById("notelp-error");
        if(nomor.value==""){
          nomorError.innerText = "Nomor telepon tidak boleh kosong!";
          isValid = false;
        }
        else if(nomor.value.length<10 || nomor.value.length>13 ){
          nomorError.innerText = "Nomor harus 10 hingga 13 karakter";
          isValid = false;
        }
        else if(!nomor.value.startsWith("08")){
          nomorError.innerText = "Masukkan nomor yang valid";
          isValid = false;
        }else{
          nomorError.innerText = "";
          isValid = true;
        }
        var email = document.getElementById("Email");
        var emailError = document.getElementById("email-error");
        if(email.value==""){
          emailError.innerText = "Email tidak boleh kosong!";
          isValid = false;
        }
        else if(!email.value.includes("@") || !email.value.includes(".")){
          emailError.innerText = "Masukkan email yang valid";
          isValid = false;
        }else{
          emailError.innerText = "";
          isValid = true;
        }
        var pesan = document.getElementById("Pesan");
        var pesanError = document.getElementById("pesan-error");
        if(pesan.value==""){
          pesanError.innerText = "Pesan tidak boleh kosong!";
          isValid = false;
        }else{
          pesanError.innerText = "";
          isValid = true;
        }
  
      }