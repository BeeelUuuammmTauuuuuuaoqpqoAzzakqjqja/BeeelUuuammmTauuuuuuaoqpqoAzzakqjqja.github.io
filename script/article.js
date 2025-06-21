document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded article.js");
  
  // Bikin navigasi intro artikel
  const introNavigationOnPublic = document.createElement("div");
  const introInformationTypeArticle = document.getElementById("introInformationTypeArticle").textContent;
  
  introNavigationOnPublic.classList.add("intro-option"); // kasih class
  introNavigationOnPublic.style.order = "1"; // urutin biar di depan
  introNavigationOnPublic.innerHTML = `
    <h1>${introInformationTypeArticle}</h1>
    <span class="icons">
      <i class="fi fi-ss-heart" id="likeButton"></i>
      <i class="fi fi-ss-share" id="shareButton"></i>
      <i class="fi fi-rr-volume" id="bacakanArtikel"></i>
    </span>
  `;
  
  // Tambahin tombol sosial media di bawah intro
  const sosialMediaOptionAdd = document.getElementById("sosialMediaOption");
  sosialMediaOptionAdd.style = "order: 1;";
  sosialMediaOptionAdd.innerHTML = `
    <a href="https://whatsapp.com/channel/0029VbAdoqVFXUuZTfOWLX2U" style="background-image: url('https://belumtau.com/upload/image/whatsapp.jpeg')"></a>
    <a href="https://x.com/KeztOfficial?t=4d9COf5KwFw_TvDmi6qlZQ&s=09" style="background-image: url('https://belumtau.com/upload/image/x.png')"></a>
    <a href="https://www.instagram.com/kezt_official" style="background-image: url('https://belumtau.com/upload/image/instagram.jpeg')"></a>
    <a href="https://tiktok.com/@kezt_official" style="background-image: url('https://belumtau.com/upload/image/tiktok.png')"></a>
  `;
  
  // Masukin elemen intro ke dalam artikel paling atas
  const mainIntroArticle = document.getElementById("articleIntro");
  mainIntroArticle.insertBefore(introNavigationOnPublic, mainIntroArticle.firstChild);
  
  // Tambahin sumber di bawah gambar otomatis
  let mainArticle = document.getElementById('mainArticle');
  mainArticle.querySelectorAll("img").forEach(img => {
    const addressImages = document.createElement("address");
    const parsedUrl = new URL(img.src);
    const hostnameParts = parsedUrl.hostname.split('.');
    
    // Ngakalin domain buat ditulis sebagai sumber
    let domain;
    if (hostnameParts.length >= 3 && ['co', 'ac', 'gov', 'or'].includes(hostnameParts[hostnameParts.length - 2])) {
      domain = hostnameParts.slice(-3).join('.');
    } else {
      domain = hostnameParts.slice(-2).join('.');
    }

    addressImages.textContent = "Sumber: " + domain;
    img.insertAdjacentElement('afterend', addressImages);
  });

  // Ambil tombol-tombol buat interaksi
  let likeButtonIntroOn = document.getElementById("likeButton");
  let shareButtonIntroOn = document.getElementById("shareButton");

  // Like: toggle warna merah putih gitu doang
  if (likeButtonIntroOn) {
    likeButtonIntroOn.addEventListener("click", function() {
      likeButtonIntroOn.style.color = likeButtonIntroOn.style.color === "red" ? "white" : "red";
    });
  } else {
    sistem.message.log("Terjadi Kesalahan");
  }

  // Share: pake fitur bawaan HP kalau ada
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

  // Ganti nama user dari file JSON (biar lebih manusiawi)
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

  // TTS: Bacain artikel otomatis
  const tombol = document.getElementById("bacakanArtikel");
  const suara = new SpeechSynthesisUtterance();
  suara.lang = 'id-ID';

  let membaca = false;

  tombol.addEventListener("click", function () {
    if (!membaca) {
      let textArticle = document.getElementById("mainArticle").innerText;
      suara.text = textArticle;
      window.speechSynthesis.speak(suara);
      tombol.className = "fi fi-rr-volume-slash"; // ubah ikon jadi mute
      membaca = true;
    } else {
      window.speechSynthesis.cancel();
      tombol.className = "fi fi-rr-volume"; // balik ke volume
      membaca = false;
    }
  });

  // Reset tombol kalau udah selesai baca
  suara.onend = function () {
    tombol.className = "fi fi-rr-volume";
    membaca = false;
  };
});

// Kalau user mau keluar, matikan suara dulu
window.addEventListener("beforeunload", function () {
  window.speechSynthesis.cancel();
});
