document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded Main.js");

  const navigationOption = `
    <li><a href="https://belumtau.com/"><i class="bi bi-house"></i> Home</a></li>
    <li><a href="https://belumtau.com/search"><i class="bi bi-search"></i> Search</a></li>
    <li><a href="https://belumtau.com/contact"><i class="bi bi-telephone"></i> Kontak</a></li>
    <li><a href="https://belumtau.com/tentang"><i class="bi bi-person-vcard"></i> Tentang Kami</a></li>
    <li><a href="https://belumtau.com/privacy-policy"><i class="bi bi-shield-check"></i> Kebijakan Privasi</a></li>
    <li><a href="https://belumtau.com/terms-of-service">Syarat & Ketentuan</a></li>
    <li><a href="https://belumtau.com/disclaimer">Sanggahan</a></li>
  `;

  const mainNavigationOnPublic = document.createElement("header");
  mainNavigationOnPublic.innerHTML = `
    <a href="https://belumtau.com/"><img src="https://belumtau.com/script/belum-tau.png" alt="Belum Tau Logo" id="navigationImage" width="150" height="50"/></a>
    <button id="buttonOpenSidebar" aria-label="Buka Sidebar">
      <i class="bi bi-list"></i>
    </button>
  `;

  const sidebarNavigationContainer = document.createElement("aside");
  sidebarNavigationContainer.innerHTML = `
    <button id="buttonCloseSidebar"><i class="bi bi-x"></i></button>
    <ul>${navigationOption}</ul>
    <a href="https://saweria.co/silarzai">Suport kami</a>
  `;

  const navigationDesktop = document.createElement("nav");
  navigationDesktop.innerHTML = `
    <a href="https://belumtau.com/"><img src="https://belumtau.com/script/belum-tau.png" alt="Belum Tau Logo" id="navigationImage" width="150" height="50"/></a>
    <ul>${navigationOption}</ul>
  `;

  document.body.insertBefore(sidebarNavigationContainer, document.body.firstChild);
  document.body.insertBefore(mainNavigationOnPublic, document.body.firstChild);
  document.body.insertBefore(navigationDesktop, document.body.firstChild);

  const buttonOpenSidebar = document.getElementById("buttonOpenSidebar");
  const buttonCloseSidebar = document.getElementById("buttonCloseSidebar");

  if (buttonOpenSidebar) {
    buttonOpenSidebar.addEventListener("click", function () {
      sidebarNavigationContainer.style.width = "100vw";
    });
  }

  if (buttonCloseSidebar) {
    buttonCloseSidebar.addEventListener("click", function () {
      sidebarNavigationContainer.style.width = "0vw";
    });
  }

  const footerWebsite = document.getElementById("footerWeb");
  footerWebsite.innerHTML = `
    <section class="akhiran">
      <p>belum tau adalah sumber informasi yang mencakup berbagai aspek kehidupan, mulai dari berita terbaru, edukasi, hingga informasi menarik lainnya.</p>
      <div class="contentakhiran-container">
        <div class="contentakhiran">
          <p>Credits</p>
          <a href="https://larzai.github.io">Larzai</a>
        </div>
        <div class="contentakhiran">
          <p>Support</p>
          <a href="https://belumtau.com/contact">Hubungi Kami</a>
          <a href="https://belumtau.com/tentang">Tentang Kami</a>
          <a href="https://belumtau.com/privacy-policy">Kebijakan Privasi</a>
          <a href="https://belumtau.com/terms-of-service">Syarat & Ketentuan</a>
          <a href="https://belumtau.com/disclaimer">Sanggahan</a>
          <a href="https://saweria.co/silarzai">Suport Kami</a>
        </div>
      </div>
      <section class="sosialmedia">
        <a href="https://tiktok.com/@kezt_official"><i class="bi bi-tiktok"></i></a>
        <a href="https://x.com/KeztOfficial"><i class="bi bi-twitter-x"></i></a>
        <a href="https://whatsapp.com/channel/0029VbAdoqVFXUuZTfOWLX2U"><i class="bi bi-whatsapp"></i></a>
        <a href="https://www.instagram.com/kezt_official"><i class="bi bi-instagram"></i></a>
      </section>
      <p>&copy; 2025 Belum Tau</p>
    </section>
  `;

  const moduleSuportArticle = [
    "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  ];
  moduleSuportArticle.forEach(href => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  });

  const script = document.createElement("script");
  script.src = "https://larzai.github.io/api/kesis-message.js";
  script.type = "text/javascript";
  script.charset = "utf-8";
  script.defer = true;
  document.head.appendChild(script);
});
