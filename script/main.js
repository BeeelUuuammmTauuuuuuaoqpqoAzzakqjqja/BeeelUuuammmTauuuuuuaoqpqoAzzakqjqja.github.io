document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM content loaded Main.js");

  const navigationOption = `
    <li><a href="https://belumtau.com/"><i class="bi bi-house"></i> Home</a></li>
    <li><a href="https://belumtau.com/search.html"><i class="bi bi-search"></i> Search</a></li>
    <li><a href="https://belumtau.com/contact.html"><i class="bi bi-telephone"></i> Kontak</a></li>
    <li><a href="https://belumtau.com/tentang.html"><i class="bi bi-person-vcard"></i> Tentang Kami</a></li>
    <li><a href="https://belumtau.com/privacy-policy.html"><i class="bi bi-shield-check"></i> Kebijakan Privasi</a></li>
  `;

  const mainNavigationOnPublic = document.createElement("header");
  mainNavigationOnPublic.innerHTML = `
    <img src="https://i.imgur.com/r5zeJgB.png" alt="Belum Tau Logo" id="navigationImage" />
    <i class="fi fi-br-bars-staggered" id="buttonOpenSidebar"></i>
  `;

  const sidebarNavigationContainer = document.createElement("aside");
  sidebarNavigationContainer.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; padding: 25px; width: 100%; font-size: 35px; color: #252525;">
      <i style="margin-left: 25px;" class="fi fi-br-cross" id="buttonCloseSidebar"></i>
      <i style="margin-right: 25px;" class="fi fi-rr-octagon-exclamation"></i>
    </div>
    <ul>
      ${navigationOption}
    </ul>
    <a href="https://saweria.co/silarzai">Suport kami</a>
  `;

  const navigationDesktop = document.createElement("nav");
  navigationDesktop.innerHTML = `
    <img src="https://i.imgur.com/r5zeJgB.png" alt="belum tau Logo" id="navigationImage" />
    <ul>
      ${navigationOption}
    </ul>
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
          <a href="https://belumtau.com/contact.html">Kontak</a>
          <a href="https://belumtau.com/tentang.html">Tentang Kami</a>
          <a href="https://belumtau.com/privacy-policy.html">Kebijakan Privasi</a>
          <a href="https://saweria.co/silarzai">Suport Kami</a>
        </div>
      </div>
      <section class="sosialmedia">
        <a href="httpz://tiktok.com/@kezt_official"><i class="fi fi-brands-tik-tok"></i></a>
        <a href="https://x.com/KeztOfficial?t=4d9COf5KwFw_TvDmi6qlZQ&s=09"><i class="fi fi-brands-twitter-alt"></i></a>
        <a href="https://whatsapp.com/channel/0029VbAdoqVFXUuZTfOWLX2U"><i class="fi fi-brands-whatsapp"></i></a>
        <a href="https://www.instagram.com/kezt_official"><i class="fi fi-brands-instagram"></i></a>
      </section>
      <p>&copy 2025 Belum Tau</p>
    </section>
  `;

  const moduleSuportArticle = [
    "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600&display=swap",
    "https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-straight/css/uicons-solid-straight.css",
    "https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-straight/css/uicons-regular-straight.css",
    "https://cdn-uicons.flaticon.com/2.6.0/uicons-bold-rounded/css/uicons-bold-rounded.css",
    "https://cdn-uicons.flaticon.com/2.6.0/uicons-solid-rounded/css/uicons-solid-rounded.css",
    "https://cdn-uicons.flaticon.com/2.6.0/uicons-brands/css/uicons-brands.css",
    "https://cdn-uicons.flaticon.com/2.6.0/uicons-regular-rounded/css/uicons-regular-rounded.css",
    "https://cdn-uicons.flaticon.com/2.6.0/uicons-thin-rounded/css/uicons-thin-rounded.css",
    "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
  ];
  moduleSuportArticle.forEach(href => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
  });

  var script = document.createElement("script");
  script.src = "https://larzai.github.io/api/kesis-message.js";
  script.type = "text/javascript";
  script.charset = "utf-8";
  script.defer = true;
  document.head.appendChild(script);
});
