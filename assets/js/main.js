(function ($) {
    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge: ['1141px', '1680px'],
        large: ['981px', '1140px'],
        medium: ['737px', '980px'],
        small: ['481px', '736px'],
        xsmall: ['321px', '480px'],
        xxsmall: [null, '320px']
    });

    // Play initial animations on page load.
    $window.on('load', function () {
        window.setTimeout(function () {
            $body.removeClass('is-preload');
        }, 100);

        // Call toggleLanguage function to fetch JSON data
        toggleLanguage();
    });

    // Scrolly.
    $('.scrolly').scrolly();
})(jQuery);

function toggleLanguage() {
    // Cargar el JSON usando Fetch
    var langButton = document.getElementById('languageButton').value; // Access value directly

    if (langButton === 'Español / Ingles') { // Check value directly
        // Update button value
        document.getElementById('languageButton').value = 'English / Español';
        // Update content to English
        translate("sp");

    } else {
        // Update button value
        document.getElementById('languageButton').value = 'Español / Ingles';
        // Update content to Spanish
        translate("en");

    }
}

function translate(language) {
    fetch('assets/js/data.json')
        .then(response => response.json())
        .then(jsonData => {
            // Recorrer el JSON y buscar las claves correspondientes al idioma
            for (let section in jsonData) {
                if (jsonData.hasOwnProperty(section)) {
                    for (let subSection in jsonData[section]) {
                        if (jsonData[section].hasOwnProperty(subSection)) {
                            let langData = jsonData[section][subSection][language];
                            if (langData) {
                                for (let key in langData) {
                                    if (langData.hasOwnProperty(key)) {
                                        let element = document.querySelector(key);
                                        if (element) {
                                            element.textContent = langData[key];
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        })
        .catch(error => console.error('Error fetching JSON:', error));
}
