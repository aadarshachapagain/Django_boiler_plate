    final_url = "http://127.0.0.1:8000/image_handler/image_drag_and_drop/upload/";
    Dropzone.options.dropZoneForm = {
        url: final_url,
        addRemoveLinks: true,
        method: "POST",
        params: 'file_upload',
        maxFilesize: 256 * 4 * 2,
        dictFileTooBig: "File is too big.",
        autoProcessQueue: false,
        acceptedFiles: '.png, .jpg,.gif,.bmp,.jpeg',
        uploadMultiple: true,
        dictDefaultMessage: "Drag and Drop files here to upload",
        parallelUploads: 10,
        maxFiles: 12,
        clickable: true,
        headers: {
            'Access-Control-Request-Headers':'authorization,cache-control,x-requested-with',
            'Access-Control-Allow-Origin':'*'
            // remove Cache-Control and X-Requested-With
            // to be sent along with the request
        },
        init: function () {
            mydropzone = this;

            $("#submit-all").click(function (evt) {
                evt.preventDefault();
                evt.stopPropagation();
                var paymentNotes = $("#paymentNotes").val();
                mydropzone.autoProcessQueue = true;
                mydropzone.processQueue();

            });
            mydropzone.on('sending', function (file, xhr, formData) {

                var notes = $("#paymentNotes").val();
                var outgoingManualPaymentID = $("#outgoingManualPaymentID").val();
                console.log('notes from sending' + notes);
                console.log('notes from sending' + notes);
                formData.append('paymentNotes', notes);
                formData.append('outgoingManualPaymentID', outgoingManualPaymentID);
            });
        },
        success: function f(response) {
            console.log('response' + response);
            $('.dz-remove').hide();
        },
    };
