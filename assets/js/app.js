$(document).ready(function() {
//j.harveywilliams@outlook.com
  let fname = $("#fname").val().trim();
  let lname = $("#lname").val().trim();
  let email = $("#email").val().trim();
  let tel = $("#phone").val().trim();
  let dob = "not filled yet";

  let nationality = "not filled yet";
  let country_of_resodence = "not filled yet";
  let address_1 = "not filled yet";
  let address_2 = "not filled yet";
  let city = "not filled yet";
  let postcode = "not filled yet";
  let residential_status = "not filled yet";

  let employment_status = "not filled yet";
  let annual_income = "not filled yet";
  let tex = "not filled yet";
  let account_type = "not filled yet";
  let inv_amount = "not filled yet";
  let source = "not filled yet";

  let name_on_account = "not filled yet";
  let acc_num = "not filled yet";
  let sort_code = "not filled yet";
  let bank_name = "not filled yet";



  let regEx = /^[a-zA-Z\s]+$/;
  let regexDigits = /^\d+$/;
  let validEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
  let error = true;


  // Intercept form submissions
  $('form').on('submit', function (e) {
    e.preventDefault(); // Prevent actual form submission
    if (error) return;

    // Find the current tab
    const currentTab = $(this).closest('.tab-pane');
    const currentTabId = currentTab.attr('id');

    // Find the current tab button
    const currentTabButton = $(`button[data-bs-target="#${currentTabId}"]`);

    // Get the next tab button
    const nextTabButton = currentTabButton.closest('li').next().find('button');
    console.log(nextTabButton);

    if (nextTabButton.length) {
      // Use Bootstrap's Tab API to show the next tab
      const tab = new bootstrap.Tab(nextTabButton[0]);
      tab.show();
    }
  });

  $("#submit-primary").on('click', () => {
    $(".form-container").css("transform","translateX(-415px)");
    $(".form-container").removeClass("height-1");
    $(".form-container").addClass("height-2");
  })

  $("#fname").focusout(function() {
    fname = $(this).val().trim();
    if (fname == "") {
    $("#error-fname").text("Please Enter Your Name");
    error = true;
  } else if (!regEx.test(fname)) {
    $("#error-fname").text("You cannot enter a number in your First name");
    error = true;
  } else {
    $("#error-fname").text("");
  }
  })
  $("#lname").focusout(function() {
    lname = $(this).val().trim();
    if (lname == "") {
    $("#error-lname").text("Please Enter Your Last Name");
    error = true;
  } else if (!regEx.test(lname)) {
    $("#error-lname").text("You cannot enter a number in your name");
    error = true;
  } else {
    $("#error-lname").text("");
  }
  })
  $("#email").focusout(function() {
    email = $(this).val().trim();
    if (email == "") {
    $("#error-email").text("Please Enter Your Email Address");
    error = true;
  } else if (!validEmail.test(email)) {
    $("#error-email").text("Please Enter a valid email address");
    error = true;
  } else {
    $("#error-email").text("");
  }
  })
  $("#phone").focusout(function() {
    tel = $(this).val().trim();
    if (tel == "") {
    $("#error-tel").text("Please Enter Your Phone Number");
    error = true;
  } else if (!regexDigits.test(tel)) {
    $("#error-tel").text("Please Enter a valid Phone Number");
    error = true;
  } else {
    $("#error-tel").text("");
  }
  })

 

  

  


  $("#second-next").on('click', () => {
    if ($("#fname").val().trim() === "") {
      error = true;
      $("#error-fname").text("Please Enter Your Name");

    } else if ($("#lname").val().trim() === "") {
      error = true;
      $("#error-lname").text("Please Enter Your Last Name");

    } else if ($("#email").val().trim() === "") {
      error = true;
      $("#error-email").text("Please Enter Your Email Address");

    } else if ($("#phone").val().trim() === "") {
      error = true;
      $("#error-tel").text("Please Enter Your Phone Number");

    } else if (!$("#email-updates").is(":checked")) {
      $("#error-check-one").text("Please check the tick box");
      error = true;

    } else if (!$("#agree").is(":checked")) {
      $("#error-check-2").text("Please check the tick box");
      error = true;

    } else {
      error = false;
    } 

      if (!error) {
        let sendmail = {
          from_f_name: fname,
          from_l_name: lname,
          from_email: email,
          from_number: tel,
          from_dob: dob,
          from_nationality: nationality,
          from_country_of_birth: country_of_birth,
          flat_number: flat,
          street: street,
          city: city,
          country: country,
          post_code: postcode,
          residential_Status: residential_status,
          tex_country: tex,
          employment_status: employment_status,
          income: annual_income,
          investment_term: inv_term,
          investment_amount: inv_amount,
          source_of_funds: source,
          name_on_account: name_on_account,
          account_number: acc_num,
          sort_code: sort_code
        }
        // emailjs.send("service_pnwngym","template_smbrnse",sendmail);
        $(".form-container").css("transform","translateX(-830px)");
        $(".form-container").removeClass("height-2");
        $(".form-container").addClass("height-3");
        error = true;
      }
    
  })

  $("#startDate").focusout(function() {
    input = $(this).val().trim();
    if (input == "") {
    $("#error-date").text("Please Select Your Date of Birth");
    error = true;
  } else {
    $("#error-date").text("");
    dob = $(this).val().trim();
  }
  })
  $("#Nationality").focusout(function() {
    input = $(this).val().trim();
    if (input == "select") {
    $("#error-nationality").text("Please Select Your Nationality");
    error = true;
  } else {
    $("#error-nationality").text("");
    nationality = $(this).val().trim();
    error = false;
  }
  })
  $("#country-of-birth").focusout(function() {
    input = $(this).val().trim();
    if (input == "select") {
    $("#error-birth-country").text("Please Select Your Birth Country");
    error = true;
  } else {
    $("#error-birth-country").text("");
    country_of_birth = $(this).val().trim();
    error = false;
  }
  })
  $("#flat").focusout(function() {
    input = $(this).val().trim();
    if (input == "") {
    $("#error-flat").text("Please Enter Flat Number");
    error = true;
  } else {
    $("#error-flat").text("");
    flat = $(this).val().trim();
    error = false;
  }
  })
  $("#street").focusout(function() {
    input = $(this).val().trim();
    if (input == "") {
    $("#error-street").text("Please Enter Street Number");
    error = true;
  } else {
    $("#error-street").text("");
    street = $(this).val().trim();
    error = false;
  }
  })
  $("#city").focusout(function() {
    input = $(this).val().trim();
    if (input == "") {
    $("#error-city").text("Please Enter Street Number");
    error = true;
  } else {
    $("#error-city").text("");
    city = $(this).val().trim();
    error = false;
  }
  })
  $("#postcode").focusout(function() {
    input = $(this).val().trim();
    if (input == "") {
    $("#error-postcode").text("Please Enter Postcode");
    error = true;
  } else {
    $("#error-postcode").text("");
    postcode = $(this).val().trim();
    error = false;
  }
  })
  $("#Residential-status").focusout(function() {
    input = $(this).val().trim();
    if (input == "select") {
    $("#error-residential").text("Please Select Your Residential Status");
    error = true;
  } else {
    $("#error-residential").text("");
    residential_status = $(this).val().trim();
    error = false;
  }
  })
  $("#employment-status").focusout(function() {
    input = $(this).val().trim();
    if (input == "select") {
    $("#error-employment").text("Please Select Your Employment Status");
    error = true;
  } else {
    $("#error-employment").text("");
    employment_status = $(this).val().trim();
    error = false;
  }
  })
  $("#annual-income").focusout(function() {
    input = $(this).val().trim();
    if (input == "select") {
    $("#error-annual").text("Please Select Your Annual Income");
    error = true;
  } else {
    $("#error-annual").text("");
    if($("#in-uk").is(":checked")) {
      tex = "Only in the UK";
    } else if($("#in-abroad").is(":checked")) {
      tex = "Only abroad";
    } else if($("#in-both").is(":checked")) {
      tex = "In the UK and abroad";
    } else {
      tex = "something is wrong";
    }
    annual_income = $(this).val().trim();
    error = false;
  }
  })

  $("#third-submit").on('click', () => {
    if ($("#startDate").val().trim() === "") {
      error = true;
      $("#error-date").text("Please Enter this field");

    } else  if ($("#Nationality").val().trim() === "select") {
      error = true;
      $("#error-nationality").text("Please Enter this field");

    } else  if ($("#country-of-birth").val().trim() === "select") {
      error = true;
      $("#error-birth-country").text("Please Enter this field");

    } else  if ($("#flat").val().trim() === "") {
      error = true;
      $("#error-flat").text("Please Enter this field");

    } else  if ($("#city").val().trim() === "") {
      error = true;
      $("#error-city").text("Please Enter this field");

    } else  if ($("#postcode").val().trim() === "") {
      error = true;
      $("#error-postcode").text("Please Enter this field");

    } else  if ($("#Residential-status").val().trim() === "select") {
      error = true;
      $("#error-residential").text("Please Enter this field");

    } else  if ($("#employment-status").val().trim() === "select") {
      error = true;
      $("#error-employment").text("Please Enter this field");

    } else  if ($("#annual-income").val().trim() === "select") {
      error = true;
      $("#error-annual").text("Please Enter this field");

    }  else {
      error = false;
    } 



    if(!error) {
      let sendmail = {
          from_f_name: fname,
          from_l_name: lname,
          from_email: email,
          from_number: tel,
          from_dob: dob,
          from_nationality: nationality,
          from_country_of_birth: country_of_birth,
          flat_number: flat,
          street: street,
          city: city,
          country: country,
          post_code: postcode,
          residential_Status: residential_status,
          tex_country: tex,
          employment_status: employment_status,
          income: annual_income,
          investment_term: inv_term,
          investment_amount: inv_amount,
          source_of_funds: source,
          name_on_account: name_on_account,
          account_number: acc_num,
          sort_code: sort_code
        }
        // emailjs.send("service_pnwngym","template_smbrnse",sendmail);
      $(".form-container").css("transform","translateX(-1245px)");
      $(".form-container").removeClass("height-3");
        $(".form-container").addClass("height-4");
        error = true;
    }
  })


  $("#investment-term").focusout(function() {
    input = $(this).val().trim();
    if (input == "select") {
    $("#error-investment").text("Please Select Your Investment Term");
    error = true;
  } else {
    $("#error-investment").text("");
    inv_term = $(this).val().trim();
    error = false;
  }
  })
  $("#investment-amount").focusout(function() {
    input = $(this).val().trim();
    if (input == "select") {
    $("#error-amount").text("Please Select Your Investment Amount");
    error = true;
  } else {
    $("#error-amount").text("");
    inv_amount = $(this).val().trim();
    error = false;
  }
  })
  $("#source").focusout(function() {
    input = $(this).val().trim();
    if (input == "select") {
    $("#error-source").text("Please Select Your Source of Funds");
    error = true;
  } else {
    $("#error-source").text("");
    source = $(this).val().trim();
    error = false;
  }
  })

  $("#name-on-account").focusout(function() {
    input = $(this).val().trim();
    if (input == "") {
    $("#error-name").text("Please Enter Name of Account");
    error = true;
  } else {
    $("#error-name").text("");
    name_on_account = $(this).val().trim();
    error = false;
  }
  })
  $("#account-number").focusout(function() {
    input = $(this).val().trim();
    if (input == "") {
    $("#error-acc-num").text("Please Enter Your Account Number");
    error = true;
  } else {
    $("#error-acc-num").text("");
    acc_num = $(this).val().trim();
    error = false;
  }
  })
  $("#sort-code").focusout(function() {
    input = $(this).val().trim();
    if (input == "") {
    $("#error-sort").text("Please Enter Sort Code");
    error = true;
  } else {
    $("#error-sort").text("");
    sort_code = $(this).val().trim();
    error = false;
  }
  })

  $("#final-submit").on("click", ()=> {
    if ($("#investment-term").val().trim() === "select") {
      error = true;
      $("#error-investment").text("Please Enter this field");

    } else  if ($("#investment-amount").val().trim() === "select") {
      error = true;
      $("#error-amount").text("Please Enter this field");

    } else  if ($("#source").val().trim() === "select") {
      error = true;
      $("#error-source").text("Please Enter this field");

    } else  if ($("#name-on-account").val().trim() === "") {
      error = true;
      $("#error-name").text("Please Enter this field");

    } else  if ($("#account-number").val().trim() === "") {
      error = true;
      $("#error-acc-num").text("Please Enter this field");

    } else  if ($("#sort-code").val().trim() === "") {
      error = true;
      $("#error-sort").text("Please Enter this field");

    } else  if (!$("#bank-detail-accept").is(":checked")) {
      error = true;
      $("#error-confirm").text("Please tick the above box");

    } else {
      error = false;
    }


    if (!error) {
      if ($("#bank-detail-accept").is(":checked")) {
        let sendmail = {
          from_f_name: fname,
          from_l_name: lname,
          from_email: email,
          from_number: tel,
          from_dob: dob,
          from_nationality: nationality,
          from_country_of_birth: country_of_birth,
          flat_number: flat,
          street: street,
          city: city,
          country: country,
          post_code: postcode,
          residential_Status: residential_status,
          tex_country: tex,
          employment_status: employment_status,
          income: annual_income,
          investment_term: inv_term,
          investment_amount: inv_amount,
          source_of_funds: source,
          name_on_account: name_on_account,
          account_number: acc_num,
          sort_code: sort_code
        }
        // emailjs.send("service_pnwngym","template_smbrnse",sendmail).then(function() {
        //   location.reload(true);
        // });

        setTimeout(function() {
          window.location.assign("./thankyou.html");
        }, 2000)
        
        
      }
    }
  })


})