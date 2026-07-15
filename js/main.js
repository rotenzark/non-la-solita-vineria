/* ===== NON la solita vineria — main.js ===== */
(function () {
  "use strict";

  var EN = {
    "nav.about": "The place",
    "nav.wine": "The list",
    "nav.food": "The plates",
    "nav.where": "Find us",
    "nav.book": "Book",

    "hero.eyebrow": "Wine bar · Via Orti · Porta Romana, Milan",
    "hero.title2": "not the usual wine bar.",
    "hero.lede": "A carefully built cellar of wines you don't expect, fine cured meats and cheeses, and the best toastie in Milan. From the evening on, no rush.",
    "hero.cta1": "Book a table",
    "hero.cta2": "The wine list",

    "status.loading": "Checking opening hours…",

    "strip.1k": "Open",
    "strip.1v": "Mon–Sat · from 6pm",
    "strip.2k": "The moment",
    "strip.2v": "Aperitivo & light dinner",
    "strip.3k": "Where",
    "strip.3v": "Via Orti, Porta Romana",
    "strip.4k": "Rating",
    "strip.4v": "reviews",

    "mani.eyebrow": "Not a name, a promise",
    "mani.p1": "“NON la solita vineria” — not the usual wine bar — isn't just a name.",
    "mani.p2": "It's the way things are here: wines beyond the usual labels, plates done properly, and no one rushing you.",
    "mani.p3": "A deep, carefully built cellar, a menu made to go with the wine, and two hosts who make you feel at home. The format is thought through — and you can tell.",

    "neg.carta.title": "the usual wine list",
    "neg.carta.p": "A whole wall of labels, by the glass or the bottle. Reds, whites, sparkling and skin-contact — many from small growers, often beyond the names you already know. And if you don't know where to start, Valentina, the sommelier, guides you to the right glass.",
    "neg.carta.i1": "A deep, studied cellar",
    "neg.carta.i2": "By the glass or the bottle",
    "neg.carta.i3": "Skin-contact, sparkling, small growers",
    "neg.carta.i4": "Guided by a real sommelier",

    "neg.food.title": "the usual small plates",
    "neg.food.p": "Selected cured meats and cheeses, refined little plates built around the wine — and their signature: the toastie, which for many is simply the best in Milan. A few things, all done properly.",
    "neg.food.i1": "The toastie, their pride and joy",
    "neg.food.i2": "Quality cured meats and cheeses",
    "neg.food.i3": "Pastry with coppa di testa and salsa verde",
    "neg.food.i4": "Crostino with mascarpone and confit tomatoes",

    "neg.welcome.title": "the usual welcome",
    "neg.welcome.p": "A curated but informal room, under a brick vault on a quiet street in Porta Romana. Running the place are Valentina, the sommelier, and Daniele, the host: competence and warmth, the kind that's rare to find. You sit down and don't feel like leaving.",
    "neg.welcome.i1": "Brick vault, low lights",
    "neg.welcome.i2": "Valentina, the sommelier",
    "neg.welcome.i3": "Daniele, the host",
    "neg.welcome.i4": "Curated but informal, never rushed",

    "gallery.eyebrow": "An evening at NON",
    "gallery.title": "Wine, small plates and no rush",

    "rev.eyebrow": "What guests say",
    "rev.title": "4.3 on Google, 96 reviews",
    "rev.lg": "Local Guide",
    "rev.1": "The format is thought through, and “not the usual wine bar” really isn't just a name. The cellar is deep and very studied, the menu goes beautifully with the wine. And the sommelier, Valentina, is superb!",
    "rev.2": "I had excellent wines and tasted stunning small plates, with refined ingredients. Daniele is a very warm host and Valentina read our wine wishes perfectly.",
    "rev.3": "Precise, friendly and wine-savvy service, fair prices; I'd dare say the best toastie in Milan. Highly recommended!",
    "rev.4": "Pleasant atmosphere, informal but refined. Remarkable expertise and warmth from those who guided our tasting. Cured meats and cheeses all delicious. A lovely surprise.",
    "rev.5": "Interesting options by the glass or the bottle, plus refined nibbles, quality cured meats and cheeses. I loved the pastry with coppa di testa and salsa verde.",
    "rev.6": "Very good spot for a date! They are truly masters of wine, and the friendly staff will help you make the right choice.",

    "where.eyebrow": "Find us",
    "where.title": "In Via Orti, Porta Romana",
    "where.addr": "Address",
    "where.hours": "Hours",
    "where.service": "Service",
    "where.service.v": "Dine in · Takeaway",
    "where.cta1": "Book a table",
    "where.cta2": "Directions",

    "faq.eyebrow": "Frequently asked",
    "faq.title": "Before you come",
    "faq.q1": "What are your opening hours?",
    "faq.a1": "We're open Monday to Saturday, from 6pm to midnight. We're closed on Sundays.",
    "faq.q2": "Do I need to book?",
    "faq.a2": "Booking is recommended, especially at weekends: after 7:30pm the place fills up. You can book easily online.",
    "faq.q3": "Is it food or just wine?",
    "faq.a3": "Both: alongside the wine list there are cured meats, cheeses, refined small plates and our toastie. Perfect for an aperitivo or a light dinner.",
    "faq.q4": "What kind of wines do you have?",
    "faq.a4": "A wide, studied list: reds, whites, sparkling and skin-contact, many from small growers. By the glass or the bottle, with the sommelier's guidance.",
    "faq.q5": "Can I get takeaway?",
    "faq.a5": "Yes, as well as dining in, takeaway is available. Home delivery, however, isn't offered.",

    "footer.tag": "not the usual wine bar.<br>Wine, cured meats and the toastie, in Via Orti, Milan.",
    "footer.contacts": "Contact",
    "footer.book": "Book online",
    "footer.hoursk": "Hours",
    "footer.hours1": "Mon–Sat · 18:00–00:00",
    "footer.hours2": "Sunday closed",
    "footer.demo": "Demo website made by Bespoke Studio · this is not the official website of the business.",
    "footer.totop": "Back to top",

    "qb.dir": "Directions",
    "qb.book": "Book"
  };

  var LABELS = {
    it: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"],
    en: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  };

  var currentLang = "it";

  function applyLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (lang === "en") {
        if (!el.dataset.it) el.dataset.it = el.innerHTML;
        if (EN[key] != null) el.innerHTML = EN[key];
      } else if (el.dataset.it != null) {
        el.innerHTML = el.dataset.it;
      }
    });
    document.querySelectorAll("[data-i18n-attr]").forEach(function (el) {
      if (!el._origAttrs) el._origAttrs = {};
      el.getAttribute("data-i18n-attr").split(";").forEach(function (pair) {
        var bits = pair.split(":");
        var attr = bits[0].trim(), key = bits[1].trim();
        if (el._origAttrs[attr] == null) el._origAttrs[attr] = el.getAttribute(attr) || "";
        el.setAttribute(attr, lang === "en" ? (EN[key] || el._origAttrs[attr]) : el._origAttrs[attr]);
      });
    });
    document.querySelectorAll(".lang__btn").forEach(function (b) {
      b.classList.toggle("is-active", b.dataset.lang === lang);
    });
    renderStatus();
    renderHoursList();
  }

  document.querySelectorAll(".lang__btn").forEach(function (b) {
    b.addEventListener("click", function () { applyLang(b.dataset.lang); });
  });

  /* opening hours: Mon–Sat 18:00–24:00, Sun closed */
  var OPEN_MIN = 18 * 60;   // 1080
  var CLOSE_MIN = 24 * 60;  // 1440 (midnight)

  function nowRome() {
    try { return new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Rome" })); }
    catch (e) { return new Date(); }
  }
  function isOpenDay(d) { return d >= 1 && d <= 6; }

  function statusInfo() {
    var d = nowRome();
    var day = d.getDay();
    var mins = d.getHours() * 60 + d.getMinutes();
    if (isOpenDay(day) && mins >= OPEN_MIN && mins < CLOSE_MIN) {
      return { open: true, soon: (CLOSE_MIN - mins) <= 45 };
    }
    if (isOpenDay(day) && mins < OPEN_MIN) return { open: false, nextToday: true };
    var probe = day;
    for (var i = 1; i <= 7; i++) { probe = (day + i) % 7; if (isOpenDay(probe)) return { open: false, nextToday: false, nextDay: probe }; }
    return { open: false, nextToday: false, nextDay: 1 };
  }

  function renderStatus() {
    var pill = document.getElementById("statusPill");
    var txt = document.getElementById("statusText");
    if (!pill || !txt) return;
    var s = statusInfo(), en = currentLang === "en";
    pill.classList.remove("is-open", "is-closed");
    if (s.open) {
      pill.classList.add("is-open");
      txt.textContent = s.soon ? (en ? "Open · closing at midnight" : "Aperto · chiude a mezzanotte")
                               : (en ? "Open now · until midnight" : "Aperto ora · fino a mezzanotte");
    } else {
      pill.classList.add("is-closed");
      if (s.nextToday) txt.textContent = en ? "Closed · opens today at 6pm" : "Chiuso · apre oggi alle 18:00";
      else {
        var dn = LABELS[en ? "en" : "it"][s.nextDay];
        txt.textContent = (en ? "Closed · opens " + dn + " at 6pm" : "Chiuso · apre " + dn + " alle 18:00");
      }
    }
  }

  function renderHoursList() {
    var host = document.getElementById("hoursList");
    if (!host) return;
    var en = currentLang === "en", today = nowRome().getDay();
    var rows = [
      { label: en ? "Mon–Sat" : "Lun–Sab", val: "18:00–00:00", days: [1, 2, 3, 4, 5, 6] },
      { label: en ? "Sunday" : "Domenica", val: en ? "Closed" : "Chiuso", days: [0] }
    ];
    host.innerHTML = rows.map(function (r) {
      var active = r.days.indexOf(today) !== -1;
      return '<span class="hrow' + (active ? ' hrow--now' : '') + '"><b>' + r.label + '</b> ' + r.val + '</span>';
    }).join("");
  }

  /* burger */
  var burger = document.getElementById("burger"), nav = document.getElementById("nav");
  if (burger && nav) {
    burger.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      burger.classList.toggle("is-open", open);
      burger.setAttribute("aria-expanded", open ? "true" : "false");
      burger.setAttribute("aria-label", open ? "Chiudi il menu" : "Apri il menu");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open"); burger.classList.remove("is-open");
        burger.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* reveal */
  var revs = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("is-in"); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    revs.forEach(function (el) { io.observe(el); });
    setTimeout(function () { revs.forEach(function (el) { el.classList.add("is-in"); }); }, 1600);
  } else { revs.forEach(function (el) { el.classList.add("is-in"); }); }

  var toTop = document.getElementById("toTop");
  if (toTop) toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });

  applyLang("it");
  setInterval(renderStatus, 60000);
})();
