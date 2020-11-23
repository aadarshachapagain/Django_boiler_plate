$('.multi-field-wrapper').each(function () {
    var $wrapper = $('.multi-fields', this);
    $(".add-field", $(this)).click(function (e) {
        var a = $('.multi-field:first-child', $wrapper).clone(true);
        a.find("input").val("");
        $wrapper.append(a);
    });

    $('.multi-field .remove-field', $wrapper).click(function () {
        if ($('.multi-field', $wrapper).length > 1)
            $(this).parent().parent('.multi-field').remove();
    });
});

$(document).ready(function () {
    var $wrapper = $('.multi-fields', this);
    $('.multi-field .remove-field', $wrapper).click(function () {
        if ($('.multi-field', $wrapper).length < 1)
            $('.remove-field').hide();
    });
});
