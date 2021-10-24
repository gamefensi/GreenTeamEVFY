$(document).ready(function () {
    $(document).ready(function () {
        $(document).on("scroll", onScroll);
        
        //smoothscroll
        $('a[href^="#"]').on('click', function (e) {
            e.preventDefault();
            $(document).off("scroll");
            
            $('a').each(function () {
                $(this).removeClass('active');
            })
            $(this).addClass('active');
          
            var target = this.hash,
                // menu = target;
            $target = $(target);
            $('html, body').stop().animate({
                'scrollTop': $target.offset().top+2
            }, 500, 'swing', function () {
                window.location.hash = target;
                $(document).on("scroll", onScroll);
            });
        });
    });
    
    function onScroll(event){
        var scrollPos = $(document).scrollTop();
        $('#navbarContent .nav-link').each(function () {
            var currLink = $(this);
            var refElement = $(currLink.attr("href"));
            // var refElementChild = $(currLink > a);
            var currLinkChildren = $(this).siblings("ul").find("a");
            var refElementChildren = $(currLinkChildren).attr("href");
            if (
                refElement.position().top <= scrollPos + 20
                || refElementChildren.position().top <=scrollPos + 20
                && refElement.position().top + refElement.height() > scrollPos + 20
                || refElementChildren.position().top + refElementChildren.height() > scrollPos + 20) {
                $('#navbarContent ul li a').removeClass("active");
                currLink.addClass("active");
                // console.log(scrollPos);
                // console.log(currLink);
                // console.log(refElement);
                console.log(refElementChildren);
            }
            else{
                currLink.removeClass("active");
            }
        });
    }
});