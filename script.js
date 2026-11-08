(function () {
  var cfg = window.SITE_CONFIG || {};

  // Enlaces de WhatsApp
  function waLink(text) {
    return "https://wa.me/" + (cfg.whatsapp || "") + "?text=" + encodeURIComponent(text);
  }
  document.querySelectorAll("[data-wa]").forEach(function (el) {
    var producto = el.getAttribute("data-producto");
    var text = producto
      ? "¡Hola! Me interesan " + producto + ". ¿Me puede dar más información?"
      : cfg.mensajeGeneral || "¡Hola! Me gustaría más información.";
    el.href = waLink(text);
    el.target = "_blank";
    el.rel = "noopener";
  });

  // Datos de contacto
  document.querySelectorAll("[data-config]").forEach(function (el) {
    el.textContent = cfg[el.getAttribute("data-config")] || "";
  });

  // Redes sociales
  var social = document.getElementById("social");
  [["facebook", "Facebook"], ["instagram", "Instagram"], ["tiktok", "TikTok"]].forEach(function (s) {
    if (cfg[s[0]]) {
      var a = document.createElement("a");
      a.href = cfg[s[0]];
      a.textContent = s[1];
      a.target = "_blank";
      a.rel = "noopener";
      social.appendChild(a);
    }
  });

  document.getElementById("year").textContent = new Date().getFullYear();

  // Menú móvil
  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("menu");
  toggle.addEventListener("click", function () {
    var open = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", open);
  });
  nav.querySelectorAll("a").forEach(function (a) {
    a.addEventListener("click", function () {
      nav.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });

  // Filtro de productos
  var tabs = document.querySelectorAll(".tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      var f = tab.getAttribute("data-filter");
      tabs.forEach(function (t) {
        t.classList.toggle("is-active", t === tab);
        t.setAttribute("aria-selected", t === tab);
      });
      document.querySelectorAll(".product").forEach(function (p) {
        p.hidden = f !== "todos" && p.getAttribute("data-cat") !== f;
      });
    });
  });
})();
