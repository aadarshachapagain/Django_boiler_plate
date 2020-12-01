$(document).ready(function () {

    $("#sidebar").mCustomScrollbar({
        theme: "minimal"
    });

    $('#sidebarCollapse').on('click', function () {
        // open or close navbar
        $('#sidebar').toggleClass('active');
        // close dropdowns
        $('.collapse.in').toggleClass('in');
        // and also adjust aria-expanded attributes we use for the open/closed arrows
        // in our CSS
        $('a[aria-expanded=true]').attr('aria-expanded', 'false');
    });

    $('.sidebar-link').on('click', function () {
        var $this = $(this);
        var sidebar_link = $('.sidebar-link');
        if ($(this).attr('aria-expanded') === 'true') {
            $(this).parent().toggleClass('active');
        } else {
            sidebar_link.attr('aria-expanded', 'false');
            sidebar_link.addClass('collapsed');
            $('.sidebar-item').removeClass('active');
            $('.sidebar-dropdown').removeClass('show');
            $this.parent().addClass('active');
        }

    });
});

$(document).ready(function () {
    var current = location.pathname;
   $('.sidebar-item li a').each(function () {
        var $this = $(this);
        if($this.attr('href').indexOf(current)!== -1){
            $this.parent().parent().addClass('show');
            $this.parent().parent().parent().addClass('active');
            $this.parent().parent().parent().find('.sidebar-link').attr('aria-expanded', 'true');
            $this.parent().parent().parent().find('.sidebar-link').removeClass('collapse');
            $this.parent().addClass('active');
        }
   });
});
