
function masonryloader() {

	/* This function loads the masonry script */
	
	var $container = $('#postContainer');
	// initialize
	$container.imagesLoaded( function() {
		$container.masonry({
			itemSelector: '.post'
		});
		
	});
	
	var msnry = $container.data('masonry');

}


function detectmob() { 

	/* This function detects the user agent 
	 * and if it is not mobile, then it loads the 
	 * bootstrap-select script > selectpicker() for example
	 */

	if( navigator.userAgent.match(/Android/i)
	|| navigator.userAgent.match(/webOS/i)
	|| navigator.userAgent.match(/iPhone/i)
	|| navigator.userAgent.match(/iPad/i)
	|| navigator.userAgent.match(/iPod/i)
	|| navigator.userAgent.match(/BlackBerry/i)
	|| navigator.userAgent.match(/Windows Phone/i)
	){
		// If mobile, then we do all this
		
		/* 
		 * 	
		 * 	The following code replaces inputs with type=text for type=date,
		 *  ONLY on mobile devices. The objective is to remove the datepicker on phones
		 *  and use the native controls instead.
		 *  
		 */
		
		$('.input-daterange').find('input:text').each(function() {
			   $("<input type='date' class='form-control' style='-webkit-appearance: none;-moz-appearance: none;' />").attr({ name: this.name, value: this.value }).insertBefore(this);
			}).remove();
		
		return true;
	}
	else {
		
		// If not mobile then do this		
		$('.selectpicker').selectpicker();
		document.getElementById("bgvid").innerHTML = '<source src="assets/img/landing/cover.webm" type="video/webm"><source src="assets/img/landing/cover.mp4" type="video/mp4">';
	
	}
} // detectmob


// Video section

//jQuery is required to run this code
$( document ).ready(function() {

    scaleVideoContainer();

    initBannerVideoSize('.video-container .poster img');
    initBannerVideoSize('.video-container .filter');
    initBannerVideoSize('.video-container video');

    $(window).on('resize', function() {
        scaleVideoContainer();
        scaleBannerVideoSize('.video-container .poster img');
        scaleBannerVideoSize('.video-container .filter');
        scaleBannerVideoSize('.video-container video');
    });
      

});

function scaleVideoContainer() {

    var height = $(window).height() + 5;
    var unitHeight = parseInt(height) + 'px';
    $('.homepage-hero-module').css('height',unitHeight);

}

function initBannerVideoSize(element){

    $(element).each(function(){
        $(this).data('height', $(this).height());
        $(this).data('width', $(this).width());
    });

    scaleBannerVideoSize(element);

}

function scaleBannerVideoSize(element){

    var windowWidth = $(window).width(),
    windowHeight = $(window).height() + 5,
    videoWidth,
    videoHeight;

    console.log(windowHeight);

    $(element).each(function(){
        var videoAspectRatio = $(this).data('height')/$(this).data('width');

        $(this).width(windowWidth);

        if(windowWidth < 1000){
            videoHeight = windowHeight;
            videoWidth = videoHeight / videoAspectRatio;
            $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

            $(this).width(videoWidth).height(videoHeight);
        }

        $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

    });
}

//Animation for Landing Anchor
jQuery(document).ready(function($) {
    $(".scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 15 }, 1000);
    });
});

jQuery(document).ready(function($) {
    $(".scroll-guide").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top - 55 }, 1000);
    });
});