document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded article.js");
  
  // Navigasi intro
  const introNavigationOnPublic = document.createElement("nav");
  const introInformationTypeArticle = document.getElementById("introInformationTypeArticle").textContent;
  introNavigationOnPublic.style = "order: 1;";
  introNavigationOnPublic.innerHTML = `
    <h1>${introInformationTypeArticle}</h1>
    <span class="icons">
      <i class="fi fi-ss-heart" id="likeButton"></i>
      <i class="fi fi-ss-share" id="shareButton"></i>
      <i class="fi fi-rr-volume" id="bacakanArtikel"></i>
      <i class="fi fi-rs-circle-ellipsis-vertical" id="moreOptionButton"></i>
    </span>
  `;
  
  // Add Sosial Media Option
  const sosialMediaOptionAdd = document.getElementById("sosialMediaOption");
  sosialMediaOptionAdd.style = "order: 1;";
  sosialMediaOptionAdd.innerHTML = `
    <a href="https://whatsapp.com/channel/0029VbAdoqVFXUuZTfOWLX2U" style="background-image: url('https://belumtau.com/upload/image/whatsapp.jpeg')"></a>
    <a href="https://x.com/KeztOfficial?t=4d9COf5KwFw_TvDmi6qlZQ&s=09" style="background-image: url('https://belumtau.com/upload/image/x.png')"></a>
    <a href="https://www.instagram.com/kezt_official" style="background-image: url('https://belumtau.com/upload/image/instagram.jpeg')"></a>
    <a href="https://tiktok.com/@kezt_official" style="background-image: url('https://belumtau.com/upload/image/tiktok.png')"></a>
  `;
  
  // Load to Web
  const mainIntroArticle = document.getElementById("articleIntro");
  mainIntroArticle.insertBefore(introNavigationOnPublic, mainIntroArticle.firstChild);
  
  // Sistem sumber dari image
  let mainArticle = document.getElementById('mainArticle');
  mainArticle.querySelectorAll("img").forEach(img => {
    const addressImages = document.createElement("address");
    const parsedUrl = new URL(img.src);
    const hostnameParts = parsedUrl.hostname.split('.');
    
    let domain;
    if (hostnameParts.length >= 3 && ['co', 'ac', 'gov', 'or'].includes(hostnameParts[hostnameParts.length - 2])) {
      domain = hostnameParts.slice(-3).join('.');
    } else {
      domain = hostnameParts.slice(-2).join('.');
    }
  
    addressImages.textContent = "Sumber: " + domain;
    img.insertAdjacentElement('afterend', addressImages);
  });

  // Button Option Intro
  let likeButtonIntroOn = document.getElementById("likeButton");
  let shareButtonIntroOn = document.getElementById("shareButton");
  let moreOptionButtonIntroOn = document.getElementById("moreOptionButton");
  
  // Like System
  if (likeButtonIntroOn) {
    likeButtonIntroOn.addEventListener("click", function() {
      if (likeButtonIntroOn.style.color === "red") {
        likeButtonIntroOn.style.color = "white";
      } else {
        likeButtonIntroOn.style.color = "red";
      }
    });
  } else {
    sistem.message.log("Terjadi Kesalahan");
  }
  
  // Share System (hanya jika diperlukan)
  if (shareButtonIntroOn) {
    shareButtonIntroOn.addEventListener("click", function() {
      console.log("Share button clicked");
      if (navigator.share) {
        var judulArticle = document.getElementById('titleArticle').textContent;
        var shareUrl = window.location.href;
        navigator.share({
          title: document.title,
          text: 'Ayo kita baca Artikel: ' + judulArticle + "\n" + "Link: ",
          url: shareUrl
        })
        .catch((error) => sistem.message.log('Gagal berbagi', error));
      } else {
        sistem.message.log('Browser tidak mendukung fitur berbagi');
      }
    });
  }
  
  moreOptionButtonIntroOn.addEventListener("click", function () {
    sistem.message.info("Fitur ini masih dalam pengembangan dan belum dapat digunakan. :(");
  });
  
  // Deteksi tag name Account
  const pTagID = document.getElementById('userID');
  const h1UserName = document.getElementById('userName');
  const username = pTagID.textContent.replace('@', '').trim();

  fetch('https://belumtau.com/api/account-data.json')
    .then(response => response.json())
    .then(data => {
      if (data[username]) {
        h1UserName.textContent = data[username].username;
      } else {
        h1UserName.textContent = 'Username tidak ditemukan';
      }
    })
    .catch(error => {
      console.error('Error loading JSON:', error);
      h1UserName.textContent = 'Ups, Gagal memuat data';
    });
  
  // TTS Sistem
  const tombol = document.getElementById("bacakanArtikel");
  const suara = new SpeechSynthesisUtterance();
  suara.lang = 'id-ID';

  let membaca = false;

  tombol.addEventListener("click", function () {
    if (!membaca) {
      let textArticle = document.getElementById("mainArticle").innerText;
      suara.text = textArticle;
      window.speechSynthesis.speak(suara);
      tombol.className = "fi fi-rr-volume-slash";
      membaca = true;
    } else {
      window.speechSynthesis.cancel();
      tombol.className = "fi fi-rr-volume";
      membaca = false;
    }
  });

  suara.onend = function () {
    tombol.className = "fi fi-rr-volume";
    membaca = false;
  };
});

window.addEventListener("beforeunload", function () {
  window.speechSynthesis.cancel();
});

