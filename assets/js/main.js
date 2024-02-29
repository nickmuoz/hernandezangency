(function($) {
    var $window = $(window),
        $body = $('body');

    // Breakpoints.
    breakpoints({
        xlarge:   [ '1141px',  '1680px' ],
        large:    [ '981px',   '1140px' ],
        medium:   [ '737px',   '980px'  ],
        small:    [ '481px',   '736px'  ],
        xsmall:   [ '321px',   '480px'  ],
        xxsmall:  [ null,      '320px'  ]
    });

    function testPrint(){
    console.log("este es el archivo main")
    }
    // Play initial animations on page load.
    $window.on('load', function() {
        window.setTimeout(function() {
            $body.removeClass('is-preload');
        }, 100);
        
        // Call toggleLanguage function to fetch JSON data
        toggleLanguage();
    });

    // Scrolly.
    $('.scrolly').scrolly();

    // Function to fetch JSON data from the file
    function fetchJSONData(callback) {
        var xhr = new XMLHttpRequest();
        xhr.overrideMimeType("application/json");
        xhr.open('GET', 'assets/js/data.json', true);
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
    fetchJSONData(function(jsonData) {
        var langButton = document.getElementById('languageButton').value; // Access value directly
        var h1Element = document.querySelector('#titleHeader');
        var pElement = document.querySelector('#textHeader');
        var aElement = document.querySelector('#anchorHeader');
        var textDescription = document.querySelector('#TextDescription');
        var parraftDescription = document.querySelector('#parraftDescription');
        var carouselTitle1 = document.querySelector('#carouselTitle1');
        var descriptionTitle1 = document.querySelector('#descriptionTitle1');
        var carouselTitle2 = document.querySelector('#carouselTitle2');
        var descriptionTitle2 = document.querySelector('#descriptionTitle2');
        var carouselTitle3 = document.querySelector('#carouselTitle3');
        var descriptionTitle3 = document.querySelector('#descriptionTitle3');

        //peding to make a services part 
        
        if (langButton === 'Español / Ingles') { // Check value directly
            // Update button value
            document.getElementById('languageButton').value = 'English / Español';
            // Update content to English
            h1Element.innerText = jsonData.intro.title.en.h1;
            pElement.innerText = jsonData.intro.title.en.p;
            aElement.innerText = jsonData.intro.title.en.a;
            textDescription.innerText = jsonData.intro.description.en.h2;
            parraftDescription.innerText = jsonData.intro.description.en.p;
            carouselTitle1.innerText = jsonData.intro.description.en.carouselTitle1;
            carouselTitle1.innerText = jsonData.intro.description.en.carouselTitle1;
            descriptionTitle1.innerText = jsonData.intro.description.en.descriptionTitle1;
            carouselTitle2.innerText = jsonData.intro.description.en.carouselTitle2;
            descriptionTitle2.innerText = jsonData.intro.description.en.descriptionTitle2;
            carouselTitle3.innerText = jsonData.intro.description.en.carouselTitle3;
            descriptionTitle3.innerText = jsonData.intro.description.en.descriptionTitle3;
        } else {
            // Update button value
            document.getElementById('languageButton').value = 'Español / Ingles';
            // Update content to Spanish
            h1Element.innerText = jsonData.intro.title.sp.h1;
            pElement.innerText = jsonData.intro.title.sp.p;
            aElement.innerText = jsonData.intro.title.sp.a;
            textDescription.innerText = jsonData.intro.description.sp.h2;
            parraftDescription.innerText = jsonData.intro.description.sp.p;
            carouselTitle1.innerText = jsonData.intro.description.sp.carouselTitle1;
            descriptionTitle1.innerText = jsonData.intro.description.sp.descriptionTitle1;
            carouselTitle2.innerText = jsonData.intro.description.sp.carouselTitle2;
            descriptionTitle2.innerText = jsonData.intro.description.sp.descriptionTitle3;
            carouselTitle3.innerText = jsonData.intro.description.sp.carouselTitle3;
            descriptionTitle3.innerText = jsonData.intro.description.sp.descriptionTitle3;
        }
    });
}

	

    // Attach click event to language button
    $(document).ready(function () {
		// Adjuntar controlador de eventos al botón de cambio de idioma
		$('#languageButton').click(function () {
			toggleLanguage();
		});
	});
	
	// Resto de tu código sigue igual
	

})(jQuery);
