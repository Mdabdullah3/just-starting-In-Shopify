$(document).ready(function () {
    if ($('button[name="add"]').length > 0) {
        $(document).on("click", "button[name='add']", function (e) {
            e.preventDefault();

            var formData = $(this).closest('.product-form').serialize();
            console.log("Form data:", formData); // Debug

            $.ajax({
                type: 'POST',
                url: '/cart/add.js',
                dataType: 'json',
                data: formData,
                success: function (data) {
                    console.log('data:', data);
                    // getCartDetails();
                    $('#offcanvasWithBothOptions').offcanvas('show');
                },
                error: function (xhr) {
                    console.error('Add to cart error:', xhr.responseText);
                }
            });
        });
    }
});
