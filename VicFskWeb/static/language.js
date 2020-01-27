/* The script for translate web site to other language */

// define language reload anchors
var dataReload = document.querySelectorAll('.float-right')


// Language translations
var language = {
    eng: {
        txt1: "Victorian Tamil Keyboard",
        txt11: "New Screen keyboard software",
        nav1: "Home",
        nav2: "Articles",
        nav3: "Download",
        nav4: "Products",
        nav5: "Testimonis",
        nav6: "Questions",
        nav7: "Contact",
        txt2: "",
        txt3: "",
        txt4: "",
        Arc1: "Article 1",
        Arc2: "Article 2",
        Arc3: "Article 3"
     },
    tml: {
        txt1: "விக்டோரியன் தமிழ் விசைப்பலகை",
        txt11: "புதிய திரை விசைப்பலகை மென்பொருள்",
        nav1: "வீடு",
        nav2: "கட்டுரைகள்",
        nav3: "பதிவிறக்கு",
        nav4: "தயாரிப்புகள்",
        nav5: "டெஸ்டிமோனிஸ்",
        nav6: "கேள்விகள்",
        nav7: "தொடர்பு",
        txt2: "",
        txt3: "",
        txt4: "",
        Arc1: "கட்டுரை 1",
        Arc2: "கட்டுரை 2",
        Arc3: "கட்டுரை 3"

    }
};

//  Define language via windows hash
dataReload[0].onclick = function() {
 if (window.location.hash) {
   if (window.location.hash === "#tml") {
      lang.innerText = "En";
      lang.className = "fa fa-language";
      lang.hash = "#eng" ;
      Art1.textContent = language.eng.Arc1;
      Art2.textContent = language.eng.Arc2;
      Art3.textContent = language.eng.Arc3;
      a.textContent = language.eng.nav1
      b.textContent = language.eng.nav2
      c.textContent = language.eng.nav3
      d.textContent = language.eng.nav4
      e.textContent = language.eng.nav5
      f.textContent = language.eng.nav6
      g.textContent = language.eng.nav7
      a.className = "fa fa-home";
      b.className = "fa fa-file-text";
      c.className = "fa fa-download";
      d.className = "fa fa-shopping-cart";
      e.className = "fa fa-legal";
      f.className = "fa fa-question-circle";
      g.className = "fa fa-envelope";
      Hd.textContent = language.eng.txt1;
      Shd.textContent = language.eng.txt11;

   };
   if (window.location.hash === "#eng") {
      lang.innerText = "Tm";
      lang.className = "fa fa-language";
      lang.hash = "#tml" ;
      Art1.textContent = language.tml.Arc1;
      Art2.textContent = language.tml.Arc2;
      Art3.textContent = language.tml.Arc3;
      a.textContent = language.tml.nav1
      b.textContent = language.tml.nav2
      c.textContent = language.tml.nav3
      d.textContent = language.tml.nav4
      e.textContent = language.tml.nav5
      f.textContent = language.tml.nav6
      g.textContent = language.tml.nav7
      a.className = "fa fa-home";
      b.className = "fa fa-file-text";
      c.className = "fa fa-download";
      d.className = "fa fa-shopping-cart";
      e.className = "fa fa-legal";
      f.className = "fa fa-question-circle";
      g.className = "fa fa-envelope";
      Hd.textContent = language.tml.txt1;
      Shd.textContent = language.tml.txt11;

   };
 }
}

// define language reload onclick illiteration
/*
for (i = 0; i <= dataReload.length; i++) {
   //console.log(dataReload.length)
   dataReload[i].onclick = function() {

      window.location.reload(true);
   };
}
*/

