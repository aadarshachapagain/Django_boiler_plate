$(document).ready(function () {
    var max_fields_limit = 10;
    var x = 1;
    $('.add_more_button').click(function (e) {
        e.preventDefault();
        if (x < max_fields_limit) {
            x++;
            $('.input_fields_container').append('<div><input type="text"/><a href="#" class="remove_field" style="margin-left:10px;">Remove</a></div>');
        }
    });
    $('.input_fields_container').on("click", ".remove_field", function (e) { //user click on remove text links
        e.preventDefault();
        $(this).parent('div').remove();
        x--;
    });
});