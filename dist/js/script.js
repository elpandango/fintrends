$(document).ready(function () {
    $('#burger').on('click', function(){
        $(this).closest('header.main').toggleClass('active');
    });
});

