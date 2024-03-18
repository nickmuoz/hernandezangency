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
    fetchJSONData(function (jsonData) {
      var langButton = document.getElementById("languageButton").value;
      var language = langButton === "Español / Ingles" ? "en" : "sp";
      var languageData = jsonData.intro.title[language];

      // Update button value
      document.getElementById("languageButton").value =
        language === "en" ? "English / Español" : "Español / Ingles";

      // Update content
      document.querySelector("#titleHeader").innerText = languageData.h1;
      document.querySelector("#textHeader").innerText = languageData.p;
      document.querySelector("#anchorHeader").innerText = languageData.a;
      document.querySelector("#TextDescription").innerText =
        jsonData.intro.description[language].h2;
      document.querySelector("#parraftDescription").innerText =
        jsonData.intro.description[language].p;
      document.querySelector("#carouselTitle1").innerText =
        jsonData.intro.description[language].carouselTitle1;
      document.querySelector("#descriptionTitle1").innerText =
        jsonData.intro.description[language].descriptionTitle1;
      document.querySelector("#carouselTitle2").innerText =
        jsonData.intro.description[language].carouselTitle2;
      document.querySelector("#descriptionTitle2").innerText =
        jsonData.intro.description[language].descriptionTitle2;
      document.querySelector("#carouselTitle3").innerText =
        jsonData.intro.description[language].carouselTitle3;
      document.querySelector("#descriptionTitle3").innerText =
        jsonData.intro.description[language].descriptionTitle3;
      document.querySelector("#titleServ").innerText =
        jsonData.intro.services[language].titleServ;
      document.querySelector("#descripServ").innerText =
        jsonData.intro.services[language].descripServ;
      document.querySelector("#serv1").innerText =
        jsonData.intro.services[language].serv1;
      document.querySelector("#servText1").innerText =
        jsonData.intro.services[language].servText1;
      document.querySelector("#serv2").innerText =
        jsonData.intro.services[language].serv2;
      document.querySelector("#servText2").innerText =
        jsonData.intro.services[language].servText2;
      document.querySelector("#serv3").innerText =
        jsonData.intro.services[language].serv3;
      document.querySelector("#servText3").innerText =
        jsonData.intro.services[language].servText3;
      document.querySelector("#button1").innerText =
        jsonData.intro.services[language].buttonText;
      document.querySelector("#button2").innerText =
        jsonData.intro.services[language].buttonText;
      document.querySelector("#button3").innerText =
        jsonData.intro.services[language].buttonText;
      document.querySelector("#titleContact").innerText =
        jsonData.intro.contact[language].titleContact;
      document.querySelector("#contacttext1").innerText =
        jsonData.intro.contact[language].contacttext1;
      document.querySelector("#contacttext2").innerText =
        jsonData.intro.contact[language].contacttext2;
      document.querySelector("#contacttext3").innerText =
        jsonData.intro.contact[language].contacttext3;
      document.querySelector("#fullNameContac").placeholder =
        jsonData.intro.contact[language].fullNameContac;
      document.querySelector("#phoneContac").placeholder =
        jsonData.intro.contact[language].phonecontac;
      document.querySelector("#emailContac").placeholder =
        jsonData.intro.contact[language].emailContac;
      document.querySelector("#opcionText").innerText =
        jsonData.intro.contact[language].opcionText;
      document.querySelector("#opcionText1").innerText =
        jsonData.intro.contact[language].opcionText1;
      document.querySelector("#opcionText2").innerText =
        jsonData.intro.contact[language].opcionText2;
      document.querySelector("#opcionText3").innerText =
        jsonData.intro.contact[language].opcionText3;
      document.querySelector("#messageContac").placeholder =
        jsonData.intro.contact[language].messageContac;
      document.querySelector("#buttonContac").innerText =
        jsonData.intro.contact[language].buttonContac;
    });
  }

  //function to select modal Theme
  function selectTheme(theme) {
    fetchJSONData(function (jsonData) {
        var modalTitle = jsonData.intro.modal[theme][getCurrentLanguage()].titleServ1;
        var modalSubTitle = jsonData.intro.modal[theme][getCurrentLanguage()].subTitle;
        var modalTextserv = jsonData.intro.modal[theme][getCurrentLanguage()].textserv;
        var modalImgSrc1 = jsonData.intro.modal[theme].img1Modal;
        var modalImgSrc2 = jsonData.intro.modal[theme].img2Modal;
        var modalImgSrc3 = jsonData.intro.modal[theme].img3Modal;
        var modalImgSrc4 = jsonData.intro.modal[theme].img4Modal;

        // Update the modal elements
        var modalTitleElement = document.querySelector("#exampleModalLabel");
        var modalSubTitleElement = document.querySelector("#subTitle");
        var modalTextservElement = document.querySelector("#textserv");
        var modalImgElement1 = document.querySelector("#imgModal1");
        var modalImgElement2 = document.querySelector("#imgModal2");
        var modalImgElement3 = document.querySelector("#imgModal3");
        var modalImgElement4 = document.querySelector("#imgModal4");

        modalTitleElement.innerText = modalTitle;
        modalSubTitleElement.innerText = modalSubTitle;
        modalTextservElement.innerText = modalTextserv;
        modalImgElement1.src = modalImgSrc1;
        modalImgElement2.src = modalImgSrc2;
        modalImgElement3.src = modalImgSrc3;
        modalImgElement4.src = modalImgSrc4;
    });
}


  // Attach click event to language button
  $(document).ready(function () {
    // Event controller
    $("#languageButton").click(function () {
      toggleLanguage();
    });
    $("#button1").click(function () {
      selectTheme("Remodelin");
    });
    $("#button2").click(function () {
      selectTheme("Accounting");
    });
    $("#button3").click(function () {
      selectTheme("Longevidad");
    });
    $("#buttonContac").click(function () {
      sendMail();
    });
    $("#fullNameContac, #phoneContac, #emailContac, #contacBy, #messageContac").on("input", setValue);
  $("#formReg").on("submit", function(event) {
    // Prevent default form submission
    event.preventDefault();
    // Call sendMail function when the form is submitted
    sendMail();
  });
  });

  // Helper function to get the current language
  function getCurrentLanguage() {
    var languageSet = document.getElementById("languageButton").value;
    return languageSet === "Español / Ingles" ? "sp" : "en";
  }

  // Function to send the contac Form

  // Modify your setValue function to accept an event parameter
function setValue(event) {
  // Prevent form submission if invoked by pressing Enter key
  if (event && event.key === 'Enter') {
    event.preventDefault();
    return;
  }
  dataMail.html = document.getElementById("messageContac").value;
  dataMail.to = document.getElementById("emailContac").value;
  dataMail.about = "Beatriz hernadez";
  dataMail.contacBy = document.getElementById("contacBy").value;
  dataMail.customerName = document.getElementById("fullNameContac").value;
  dataMail.movil = document.getElementById("phoneContac").value;
  console.log(dataMail)
}

let dataMail = new Object({
  html: null,
  to: null,
  about: null,
  contacBy:null,
  customerName:null,
  movil:null
})

//vatidation Data Function

function validationData(data) {
  let formIsValid = true;

  const validations = {
    email: {
      field: data.to,
      errorSetter: setemailError,
      errorMessage: "Email No valido",
      validationRegex: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
    },
    address: {
      field: data.address,
      errorSetter: setaddressError,
      errorMessage: "Ingrese Direccion por favor"
    },
    fullName: {
      field: data.fullName,
      errorSetter: setfullNameError,
      errorMessage: "Ingrese su Nombre por favor"
    },
    phone: {
      field: data.phone,
      errorSetter: setphoneError,
      errorMessage: "Phone is required"
    },
    // Additional fields for validation
    contacBy: {
      field: data.contacBy,
      errorSetter: setContacByError,
      errorMessage: "ContacBy is required"
    },
    customerName: {
      field: data.customerName,
      errorSetter: setCustomerNameError,
      errorMessage: "Customer Name is required"
    },
    movil: {
      field: data.movil,
      errorSetter: setMovilError,
      errorMessage: "Movil is required"
    }
  };

  for (const key in validations) {
    const validation = validations[key];
    if (!validation.field || (validation.validationRegex && !validation.validationRegex.test(validation.field))) {
      formIsValid = false;
      validation.errorSetter(validation.errorMessage);
    } else {
      validation.errorSetter("");
    }
  }

  if (formIsValid) {
    setShowModal(true);
  }

  return formIsValid;
}


async function sendMail() {
  if(Object.keys(dataMail).length === 0){
    alert("llena los campos por favor")
  }else{
  // validateEmail(to) 
  const myheaders = new Headers();
  myheaders.append("Content-Type", "application/x-www-form-urlencoded");
  var urlencoded = new URLSearchParams();
  urlencoded.append("to", "infohernandezagency@gmail.com");
  urlencoded.append(
    "html",
    `
<div class="card">
    <h1>El cliente ${dataMail.customerName}</h1>
    <p class="title">Estos son los datos de contacto</p>
    <p>Celular : ${dataMail.movil}</p>
    <p>Correo : ${dataMail.to}</p>
    <p>Esta interesado: ${dataMail.contacBy}</p>
    <p>Mensaje: ${dataMail.html}</p>
</div>`
  );
  urlencoded.append("name", dataMail.customerName)
  urlencoded.append("text", dataMail.contacBy);
  urlencoded.append("subject", dataMail.about);
  urlencoded.append("from", "negocioscol@interactivebytes.co");

  var requestOptions = {
    method: "POST",
    headers: myheaders,
    body: urlencoded,
    redirect: "follow",
  };

  fetch("https://magicsweetapi.fly.dev/mail/send-mail", requestOptions)
    .then((response) => response.json())
  .then( response => {
    var contacUs = JSON.stringify(response);
    
    alert (`Gracias Pronto Nos Podremos en Contacto Contigo` );
    window.location.href="#header";
  })
 .catch((error) => console.log("error", error));
}}



})(jQuery);
