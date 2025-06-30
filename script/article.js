document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded article.js");

  const introNavigationOnPublic = document.createElement("div");
  const introInformationTypeArticle = document.getElementById("introInformationTypeArticle").textContent;

  introNavigationOnPublic.classList.add("intro-option");
  introNavigationOnPublic.style.order = "1";
  introNavigationOnPublic.innerHTML = `
    <h1>${introInformationTypeArticle}</h1>
    <span class="icons">
      <i class="bi bi-heart-fill" id="likeButton"></i>
      <i class="bi bi-share-fill" id="shareButton"></i>
      <i class="bi bi-volume-up-fill" id="bacakanArtikel"></i>
    </span>
  `;

  const sosialMediaOptionAdd = document.getElementById("sosialMediaOption");
  sosialMediaOptionAdd.style.order = "1";
  sosialMediaOptionAdd.innerHTML = `
    <a href="https://whatsapp.com/channel/0029VbAdoqVFXUuZTfOWLX2U" style="background-image: url('https://belumtau.com/upload/image/whatsapp.jpeg')"></a>
    <a href="https://x.com/KeztOfficial?t=4d9COf5KwFw_TvDmi6qlZQ&s=09" style="background-image: url('https://belumtau.com/upload/image/x.png')"></a>
    <a href="https://www.instagram.com/kezt_official" style="background-image: url('https://belumtau.com/upload/image/instagram.jpeg')"></a>
    <a href="https://tiktok.com/@kezt_official" style="background-image: url('https://belumtau.com/upload/image/tiktok.png')"></a>
  `;

  const mainIntroArticle = document.getElementById("articleIntro");
  mainIntroArticle.insertBefore(introNavigationOnPublic, mainIntroArticle.firstChild);

  const mainArticle = document.getElementById('mainArticle');
  mainArticle.querySelectorAll("img").forEach(img => {
    const addressImages = document.createElement("address");
    const parsedUrl = new URL(img.src);
    const hostnameParts = parsedUrl.hostname.split('.');
    const domain = (hostnameParts.length >= 3 && ['co', 'ac', 'gov', 'or'].includes(hostnameParts.at(-2)))
      ? hostnameParts.slice(-3).join('.')
      : hostnameParts.slice(-2).join('.');
    addressImages.textContent = "Sumber: " + domain;
    img.insertAdjacentElement('afterend', addressImages);
  });

  const likeButtonIntroOn = document.getElementById("likeButton");
  const shareButtonIntroOn = document.getElementById("shareButton");

  if (likeButtonIntroOn) {
    likeButtonIntroOn.addEventListener("click", () => {
      likeButtonIntroOn.style.color = likeButtonIntroOn.style.color === "red" ? "white" : "red";
    });
  }

  if (shareButtonIntroOn) {
    shareButtonIntroOn.addEventListener("click", () => {
      const judulArticle = document.getElementById('titleArticle')?.textContent || document.title;
      const shareUrl = window.location.href;
      if (navigator.share) {
        navigator.share({
          title: document.title,
          text: `Ayo kita baca Artikel: ${judulArticle}`,
          url: shareUrl
        }).catch(err => console.warn('Gagal berbagi:', err));
      } else {
        alert('Browser tidak mendukung fitur berbagi');
      }
    });
  }

  const pTagID = document.getElementById('userID');
  const h1UserName = document.getElementById('userName');
  const username = pTagID?.textContent.replace('@', '').trim();

  if (username) {
    fetch('https://belumtau.com/api/account-data.json')
      .then(response => response.ok ? response.json() : Promise.reject("Gagal mengambil data"))
      .then(data => {
        h1UserName.textContent = data[username]?.username || 'Username tidak ditemukan';
      })
      .catch(error => {
        console.error('Gagal memuat data:', error);
        h1UserName.textContent = 'Ups, Gagal memuat data';
      });
  }
  
  fetch('https://belumtau.com/api/pages-data.json')
    .then(res => res.json())
    .then(data => {
      const container = document.getElementById("rekomendasiArtikel");
      if (!container) return;
  
      // Acak dan ambil 10 data
      const acakData = data.slice().sort(() => Math.random() - 0.5).slice(0, 10);
  
      // Tampilkan artikel
      acakData.forEach(item => {
        const linkWrapper = document.createElement("a");
        linkWrapper.href = item.link;
        linkWrapper.style.textDecoration = "none";
        linkWrapper.style.color = "inherit";
  
        const itemArticle = document.createElement("div");
        itemArticle.className = "item-content";
        itemArticle.innerHTML = `
          <img src="${item.image}" alt="${item.title}" loading="lazy" decoding="async">
          <div class="text-content">
            <h1>${item.title}</h1>
            <h2>${item.hashtags}</h2>
            <p>${item.date}</p>
          </div>
        `;
  
        linkWrapper.appendChild(itemArticle);
        container.appendChild(linkWrapper);
  
        const itemHr = document.createElement("hr");
        itemHr.className = "article-divider";
        container.appendChild(itemHr);
      });
    })
    .catch(err => console.error("Gagal ambil data artikel:", err));

  const tombol = document.getElementById("bacakanArtikel");
  const suara = new SpeechSynthesisUtterance();
  suara.lang = 'id-ID';
  let membaca = false;

  tombol?.addEventListener("click", () => {
    if (!membaca) {
      suara.text = document.getElementById("mainArticle").textContent;
      window.speechSynthesis.speak(suara);
      tombol.className = "bi bi-volume-mute-fill";
      membaca = true;
    } else {
      window.speechSynthesis.cancel();
      tombol.className = "bi bi-volume-up-fill";
      membaca = false;
    }
  });

  suara.onend = () => {
    tombol.className = "bi bi-volume-up-fill";
    membaca = false;
  };
  
  
});

window.addEventListener("beforeunload", () => {
  window.speechSynthesis.cancel();
});
