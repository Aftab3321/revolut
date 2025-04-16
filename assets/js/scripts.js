$(document).ready(function () {
    var first_submit = true;
    var formData = {
        "fname": "not filled yet",
        "lname": "not filled yet",
        "email": "not filled yet",
        "phone": "not filled yet",
        "dob": "not filled yet",

        "country-of-residence": "not filled yet",
        "address-1": "not filled yet",
        "street": "not filled yet",
        "city": "not filled yet",
        "postcode": "not filled yet",
        "Residential-status": "not filled yet",

        "employment-status": "not filled yet",
        "annual-income": "not filled yet",
        "tax-country": "not filled yet",
        "account-type": "not filled yet",
        "inv-amount": "not filled yet",
        "source-of-funds": "not filled yet",

        "acc-name": "not filled yet",
        "acc-num": "not filled yet",
        "sort-code": "not filled yet",
        "bank-name": "not filled yet",
    }



    function validateForm(form) {
        let isValid = true;

        // Clear previous errors
        $(form).find('.error').text('');

        // Validate text, email, date, and number fields
        $(form).find('input[type="text"], input[type="email"], input[type="date"], input[type="number"], select').each(function () {
            const $input = $(this);
            const value = $input.val().trim();
            const id = $input.attr('id');
            formData[id] = value;
            if (!value && !$input.hasClass('optional')) {
                $(`#error-${id}`).text('This field is required');
                isValid = false;
            } else {
                if ($input.attr('type') === 'email') {
                    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                    if (!emailRegex.test(value)) {
                        $(`#error-${id}`).text('Enter a valid email address');
                        isValid = false;
                    }
                }
            }
        });

        // Validate select fields
        $(form).find('select').each(function () {
            const $select = $(this);
            const value = $select.val();
            const id = $select.attr('id');

            if (value === "select" || !value) {
                $(`#error-${id}`).text('Please select an option');
                isValid = false;
            }
        });

        return isValid;
    }

    $('form').on('submit', function (e) {
        e.preventDefault();
        const $form = $(this);
        if (!validateForm($form)) return;

        // Tab transition logic
        const currentTab = $form.closest('.tab-pane');
        const currentTabId = currentTab.attr('id');
        const currentTabButton = $(`button[data-bs-target="#${currentTabId}"]`);
        const nextTabButton = currentTabButton.closest('li').next().find('button');
        if (first_submit) {
            first_submit = false;
        } else {
            emailjs.send(emailjs_service_id,emailjs_template_id,formData);
        }
        console.log(nextTabButton.length);
        if (nextTabButton.length) {
            const nextTab = new bootstrap.Tab(nextTabButton[0]);
            nextTab.show();
        } else {
                window.location.assign("./thankyou.html");
        }
    });
});