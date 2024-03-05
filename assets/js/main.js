(function ($) {
  var $window = $(window),
    $body = $("body");

  // Breakpoints.
  breakpoints({
    xlarge: ["1141px", "1680px"],
    large: ["981px", "1140px"],
    medium: ["737px", "980px"],
    small: ["481px", "736px"],
    xsmall: ["321px", "480px"],
    xxsmall: [null, "320px"],
  });

  function testPrint() {
    console.log("este es el archivo main");
  }
  // Play initial animations on page load.
  $window.on("load", function () {
    window.setTimeout(function () {
      $body.removeClass("is-preload");
    }, 100);

    // Call toggleLanguage function to fetch JSON data
    toggleLanguage();
  });

  // Scrolly.
  $(".scrolly").scrolly();

  // Function to fetch JSON data from the file
  function fetchJSONData(callback) {
    var xhr = new XMLHttpRequest();
    xhr.overrideMimeType("application/json");
    xhr.open("GET", "assets/js/data.json", true);
    xhr.onreadystatechange = function () {
      if (xhr.readyState == 4 && xhr.status == 200) {
        callback(JSON.parse(xhr.responseText));
      }
    };
    xhr.send(null);
  }

  // Function to toggle between English and Spanish text
  function toggleLanguage() {
    console.log("toggleLanguage is called");
    fetchJSONData(function (jsonData) {
      var langButton = document.getElementById("languageButton").value; // Access value directly
      var h1Element = document.querySelector("#titleHeader");
      var pElement = document.querySelector("#textHeader");
      var aElement = document.querySelector("#anchorHeader");
      var textDescription = document.querySelector("#TextDescription");
      var parraftDescription = document.querySelector("#parraftDescription");
      var carouselTitle1 = document.querySelector("#carouselTitle1");
      var descriptionTitle1 = document.querySelector("#descriptionTitle1");
      var carouselTitle2 = document.querySelector("#carouselTitle2");
      var descriptionTitle2 = document.querySelector("#descriptionTitle2");
      var carouselTitle3 = document.querySelector("#carouselTitle3");
      var descriptionTitle3 = document.querySelector("#descriptionTitle3");
      var titleServ = document.querySelector("#titleServ");
      var descripServ = document.querySelector("#descripServ");
      var serv1 = document.querySelector("#serv1");
      var servText1 = document.querySelector("#servText1");
      var serv2 = document.querySelector("#serv2");
      var servText2 = document.querySelector("#servText2");
      var serv3 = document.querySelector("#serv3");
      var servText3 = document.querySelector("#servText3");
      var button1 = document.querySelector("#button1");
      var button2 = document.querySelector("#button2");
      var button3 = document.querySelector("#button3");
      var titleContact = document.querySelector("#titleContact");
      var contacttext1 = document.querySelector("#contacttext1");
      var contacttext2 = document.querySelector("#contacttext2");
      var contacttext3 = document.querySelector("#contacttext3");
      var fullNameContac = document.querySelector("#fullNameContac");
      var phonecontac = document.querySelector("#phonecontac");

      if (langButton === "Español / Ingles") {
        // Update button value
        document.getElementById("languageButton").value = "English / Español";
        // Update content to English
        h1Element.innerText = jsonData.intro.title.en.h1;
        pElement.innerText = jsonData.intro.title.en.p;
        aElement.innerText = jsonData.intro.title.en.a;
        textDescription.innerText = jsonData.intro.description.en.h2;
        parraftDescription.innerText = jsonData.intro.description.en.p;
        carouselTitle1.innerText = jsonData.intro.description.en.carouselTitle1;
        descriptionTitle1.innerText =
          jsonData.intro.description.en.descriptionTitle1;
        carouselTitle2.innerText = jsonData.intro.description.en.carouselTitle2;
        descriptionTitle2.innerText =
          jsonData.intro.description.en.descriptionTitle2;
        carouselTitle3.innerText = jsonData.intro.description.en.carouselTitle3;
        descriptionTitle3.innerText =
          jsonData.intro.description.en.descriptionTitle3;
        titleServ.innerText = jsonData.intro.services.en.titleServ;
        descripServ.innerText = jsonData.intro.services.en.descripServ;
        serv1.innerText = jsonData.intro.services.en.serv1;
        servText1.innerText = jsonData.intro.services.en.servText1;
        serv2.innerText = jsonData.intro.services.en.serv2;
        servText2.innerText = jsonData.intro.services.en.servText2;
        serv3.innerText = jsonData.intro.services.en.serv3;
        servText3.innerText = jsonData.intro.services.en.servText3;
        button1.innerText = jsonData.intro.services.en.buttonText;
        button2.innerText = jsonData.intro.services.en.buttonText;
        button3.innerText = jsonData.intro.services.en.buttonText;
        titleContact.innerText = jsonData.intro.contact.en.titleContact;
        contacttext1.innerText = jsonData.intro.contact.en.contacttext1;
        contacttext2.innerText = jsonData.intro.contact.en.contacttext2;
        contacttext3.innerText = jsonData.intro.contact.en.contacttext3;
        fullNameContac.placeholder = jsonData.intro.contact.en.fullNameContac;
        phonecontac.placeholder = jsonData.intro.contact.en.phonecontac;
      } else {
        // Update button value
        document.getElementById("languageButton").value = "Español / Ingles";
        // Update content to Spanish
        h1Element.innerText = jsonData.intro.title.sp.h1;
        pElement.innerText = jsonData.intro.title.sp.p;
        aElement.innerText = jsonData.intro.title.sp.a;
        textDescription.innerText = jsonData.intro.description.sp.h2;
        parraftDescription.innerText = jsonData.intro.description.sp.p;
        carouselTitle1.innerText = jsonData.intro.description.sp.carouselTitle1;
        descriptionTitle1.innerText =
          jsonData.intro.description.sp.descriptionTitle1;
        carouselTitle2.innerText = jsonData.intro.description.sp.carouselTitle2;
        descriptionTitle2.innerText =
          jsonData.intro.description.sp.descriptionTitle2;
        carouselTitle3.innerText = jsonData.intro.description.sp.carouselTitle3;
        descriptionTitle3.innerText =
          jsonData.intro.description.sp.descriptionTitle3;
        titleServ.innerText = jsonData.intro.services.sp.titleServ;
        descripServ.innerText = jsonData.intro.services.sp.descripServ;
        serv1.innerText = jsonData.intro.services.sp.serv1;
        servText1.innerText = jsonData.intro.services.sp.servText1;
        serv2.innerText = jsonData.intro.services.sp.serv2;
        servText2.innerText = jsonData.intro.services.sp.servText2;
        serv3.innerText = jsonData.intro.services.sp.serv3;
        servText3.innerText = jsonData.intro.services.sp.servText3;
        button1.innerText = jsonData.intro.services.sp.buttonText;
        button2.innerText = jsonData.intro.services.sp.buttonText;
        button3.innerText = jsonData.intro.services.sp.buttonText;
        titleContact.innerText = jsonData.intro.contact.sp.titleContact;
        contacttext1.innerText = jsonData.intro.contact.sp.contacttext1;
        contacttext2.innerText = jsonData.intro.contact.sp.contacttext2;
        contacttext3.innerText = jsonData.intro.contact.sp.contacttext3;
        fullNameContac.placeholder = jsonData.intro.contact.sp.fullNameContac;
        phonecontac.placeholder = jsonData.intro.contact.sp.phonecontac;
      }
    });
  }

  // Attach click event to language button
  $(document).ready(function () {
    // Adjuntar controlador de eventos al botón de cambio de idioma
    $("#languageButton").click(function () {
      toggleLanguage();
    });
  });

  // Resto de tu código sigue igual
})(jQuery);
