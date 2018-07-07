jQuery(document).ready(function() 
{
    jQuery(".widget-trending-product .products-grid").owlCarousel(
    {
        navigation: true,
        items: 6,
        itemsTablet: [767, 3],
        itemsTabletSmall: [721, 2]
    });
});

$(function() 
{
    var slider, // Global slider value to force playing and pausing by direct access of the slider control
        canSlide = true; // Global switch to monitor video state

        // Setup the slider control
        slider = $(".flexslider")
            .flexslider({
                selector: ".slides > li",
                animation: "fade",
                easing: "swing",
                slideshowSpeed: 4000,
                animationSpeed: 900,
                pauseOnHover: true,
                pauseOnAction: true,
                touch: true,
                video: true,
                controlNav: true,
                directionNav: true,
                keyboardNav: true,

                useCSS: true,
                slideshow: true,
                start: function(slider) { // Fires when the slider loads the first slide
                    var slide_count = slider.count - 1;

                    $(slider)
                        .find('img.lazy:eq(0)')
                        .each(function() {
                            var src = $(this).attr('data-src');
                            $(this).attr('src', src).removeAttr('data-src');
                        });
                },
                before: function(slider) { // Fires asynchronously with each slider animation
                    var slides = slider.slides,
                        index = slider.animatingTo,
                        $slide = $(slides[index]),
                        $img = $slide.find('img[data-src]'),
                        current = index,
                        nxt_slide = current + 1,
                        prev_slide = current - 1;
                    if (!canSlide)
                        slider.flexslider("stop");

                    $slide
                        .parent()
                        .find('img.lazy:eq(' + current + '), img.lazy:eq(' + prev_slide + '), img.lazy:eq(' + nxt_slide + ')')
                        .each(function() {
                            var src = $(this).attr('data-src');
                            $(this).attr('src', src).removeAttr('data-src');
                        });
                }

            });


        jQuery('.flexslider li img').click(function() {
            var url = jQuery(this).attr('data-url');
            if (url.length > 0) {
                window.location.href = url;
            }
        });
    });



window.onload = function(){
   var menuLeft = document.getElementById( 'mobile-menu' ),
      showLeftPush = document.getElementById( 'showLeftPush' ),
      body = document.body;

  showLeftPush.onclick = function() {
      classie.toggle( this, 'active' );
      classie.toggle( body, 'mobile-menu-push-toright' );
      classie.toggle( menuLeft, 'mobile-menu-open' );
  };
}
  