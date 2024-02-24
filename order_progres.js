JotForm.newDefaultTheme = true;
JotForm.extendsNewTheme = false;
JotForm.singleProduct = false;
JotForm.newPaymentUIForNewCreatedForms = false;
JotForm.texts = { "confirmEmail": "E-mail does not match", "pleaseWait": "Please wait...", "validateEmail": "You need to validate this e-mail", "confirmClearForm": "Are you sure you want to clear the form", "lessThan": "Your score should be less than or equal to", "incompleteFields": "There are incomplete required fields. Please complete them.", "required": "This field is required.", "requireOne": "At least one field required.", "requireEveryRow": "Every row is required.", "requireEveryCell": "Every cell is required.", "email": "Enter a valid e-mail address", "alphabetic": "This field can only contain letters", "numeric": "This field can only contain numeric values", "alphanumeric": "This field can only contain letters and numbers.", "cyrillic": "This field can only contain cyrillic characters", "url": "This field can only contain a valid URL", "currency": "This field can only contain currency values.", "fillMask": "Field value must fill mask.", "uploadExtensions": "You can only upload following files:", "noUploadExtensions": "File has no extension file type (e.g. .txt, .png, .jpeg)", "uploadFilesize": "File size cannot be bigger than:", "uploadFilesizemin": "File size cannot be smaller than:", "gradingScoreError": "Score total should only be less than or equal to", "inputCarretErrorA": "Input should not be less than the minimum value:", "inputCarretErrorB": "Input should not be greater than the maximum value:", "maxDigitsError": "The maximum digits allowed is", "minCharactersError": "The number of characters should not be less than the minimum value:", "maxCharactersError": "The number of characters should not be more than the maximum value:", "freeEmailError": "Free email accounts are not allowed", "minSelectionsError": "The minimum required number of selections is ", "maxSelectionsError": "The maximum number of selections allowed is ", "pastDatesDisallowed": "Date must not be in the past.", "dateLimited": "This date is unavailable.", "dateInvalid": "This date is not valid. The date format is {format}", "dateInvalidSeparate": "This date is not valid. Enter a valid {element}.", "ageVerificationError": "You must be older than {minAge} years old to submit this form.", "multipleFileUploads_typeError": "{file} has invalid extension. Only {extensions} are allowed.", "multipleFileUploads_sizeError": "{file} is too large, maximum file size is {sizeLimit}.", "multipleFileUploads_minSizeError": "{file} is too small, minimum file size is {minSizeLimit}.", "multipleFileUploads_emptyError": "{file} is empty, please select files again without it.", "multipleFileUploads_uploadFailed": "File upload failed, please remove it and upload the file again.", "multipleFileUploads_onLeave": "The files are being uploaded, if you leave now the upload will be cancelled.", "multipleFileUploads_fileLimitError": "Only {fileLimit} file uploads allowed.", "dragAndDropFilesHere_infoMessage": "Drag and drop files here", "chooseAFile_infoMessage": "Choose a file", "maxFileSize_infoMessage": "Max. file size", "generalError": "There are errors on the form. Please fix them before continuing.", "generalPageError": "There are errors on this page. Please fix them before continuing.", "wordLimitError": "Too many words. The limit is", "wordMinLimitError": "Too few words. The minimum is", "characterLimitError": "Too many Characters. The limit is", "characterMinLimitError": "Too few characters. The minimum is", "ccInvalidNumber": "Credit Card Number is invalid.", "ccInvalidCVC": "CVC number is invalid.", "ccInvalidExpireDate": "Expire date is invalid.", "ccInvalidExpireMonth": "Expiration month is invalid.", "ccInvalidExpireYear": "Expiration year is invalid.", "ccMissingDetails": "Please fill up the credit card details.", "ccMissingProduct": "Please select at least one product.", "ccMissingDonation": "Please enter numeric values for donation amount.", "disallowDecimals": "Please enter a whole number.", "restrictedDomain": "This domain is not allowed", "ccDonationMinLimitError": "Minimum amount is {minAmount} {currency}", "requiredLegend": "All fields marked with * are required and must be filled.", "geoPermissionTitle": "Permission Denied", "geoPermissionDesc": "Check your browser's privacy settings.", "geoNotAvailableTitle": "Position Unavailable", "geoNotAvailableDesc": "Location provider not available. Please enter the address manually.", "geoTimeoutTitle": "Timeout", "geoTimeoutDesc": "Please check your internet connection and try again.", "selectedTime": "Selected Time", "formerSelectedTime": "Former Time", "cancelAppointment": "Cancel Appointment", "cancelSelection": "Cancel Selection", "noSlotsAvailable": "No slots available", "slotUnavailable": "{time} on {date} has been selected is unavailable. Please select another slot.", "multipleError": "There are {count} errors on this page. Please correct them before moving on.", "oneError": "There is {count} error on this page. Please correct it before moving on.", "doneMessage": "Well done! All errors are fixed.", "doneButton": "Done", "reviewSubmitText": "Review and Submit", "nextButtonText": "Next", "prevButtonText": "Previous", "seeErrorsButton": "See Errors", "notEnoughStock": "Not enough stock for the current selection", "notEnoughStock_remainedItems": "Not enough stock for the current selection ({count} items left)", "soldOut": "Sold Out", "justSoldOut": "Just Sold Out", "selectionSoldOut": "Selection Sold Out", "subProductItemsLeft": "({count} items left)", "startButtonText": "START", "submitButtonText": "Submit", "submissionLimit": "Sorry! Only one entry is allowed. Multiple submissions are disabled for this form.", "reviewBackText": "Back to Form", "seeAllText": "See All", "progressMiddleText": "of", "fieldError": "field has an error.", "error": "Error" };
JotForm.newPaymentUI = true;
JotForm.replaceTagTest = true;
JotForm.clearFieldOnHide = "disable";
JotForm.submitError = "jumpToFirstError";
JotForm.init(function () {
  /*INIT-START*/
  productID = { 
    "0": "input_3_1000", 
    "1": "input_3_1001", 
    "2": "input_3_1002", 
    "3": "input_3_1003", 
    "4": "input_3_1004", 
    "5": "input_3_1005",
    "6": "input_3_1006", 
    "7": "input_3_1007", 
    "8": "input_3_1008", 
    "9": "input_3_1009", 
    "10": "input_3_1010", 
    "11": "input_3_1011", 
    "12": "input_3_1012", 
    "13": "input_3_1013", 
    "14": "input_3_1014", 
    "15": "input_3_1015", 
    "16": "input_3_1016", 
    "17": "input_3_1017", 
    "18": "input_3_1018", 
    "19": "input_3_1019", 
    "20": "input_3_1020" 
  };

  paymentType = "product";
  JotForm.setCurrencyFormat('IDR', true, 'point', 'point', false);

  JotForm.totalCounter({ 
    "input_3_1000": { "price": "65000", "quantityField": "input_3_quantity_1000_0" }, 
    "input_3_1001": { "price": "50000", "quantityField": "input_3_quantity_1001_0" }, 
    "input_3_1002": { "price": "50000", "quantityField": "input_3_quantity_1002_0"}, 
    "input_3_1003": { "price": "50000", "quantityField": "input_3_quantity_1003_0"}, 
    "input_3_1004": { "price": "50000", "quantityField": "input_3_quantity_1004_0" }, 
    "input_3_1005": { "price": "60000", "quantityField": "input_3_quantity_1005_0"},
    "input_3_1006": { "price": "50000", "quantityField": "input_3_quantity_1006_0" },
    "input_3_1007": { "price": "50000", "quantityField": "input_3_quantity_1007_0" },
    "input_3_1008": { "price": "85000", "quantityField": "input_3_quantity_1008_0" },
    "input_3_1009": { "price": "50000", "quantityField": "input_3_quantity_1009_0" },
    "input_3_1010": { "price": "85000", "quantityField": "input_3_quantity_1010_0" },
    "input_3_1011": { "price": "85000", "quantityField": "input_3_quantity_1011_0" },
    "input_3_1012": { "price": "75000", "quantityField": "input_3_quantity_1012_0" },
    "input_3_1013": { "price": "75000", "quantityField": "input_3_quantity_1013_0" },
    "input_3_1014": { "price": "75000", "quantityField": "input_3_quantity_1014_0" },
    "input_3_1015": { "price": "75000", "quantityField": "input_3_quantity_1015_0" },
    "input_3_1016": { "price": "75000", "quantityField": "input_3_quantity_1016_0" },
    "input_3_1017": { "price": "75000", "quantityField": "input_3_quantity_1017_0" },
    "input_3_1018": { "price": "75000", "quantityField": "input_3_quantity_1018_0" }
  });

  RpRp('.form-product-custom_quantity').each(function (el, i) { el.observe('blur', function () { isNaN(this.value) || this.value < 1 ? this.value = '0' : this.value = parseInt(this.value) }) });
  RpRp('.form-product-custom_quantity').each(function (el, i) { el.observe('focus', function () { this.value == 0 ? this.value = '' : this.value }) });
  JotForm.handleProductLightbox();
  if (window.JotForm && JotForm.accessible) Rp('input_12').setAttribute('tabindex', 0);

  JotForm.calendarMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  if (!JotForm.calenderViewMonths) JotForm.calenderViewMonths = {}; JotForm.calenderViewMonths[10] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  if (!JotForm.calenderViewDays) JotForm.calenderViewDays = {}; JotForm.calenderViewDays[10] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  JotForm.calendarDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
  JotForm.calendarOther = { "today": "Today" };
  var languageOptions = document.querySelectorAll('#langList li');
  for (var langIndex = 0; langIndex < languageOptions.length; langIndex++) {
    languageOptions[langIndex].on('click', function (e) { setTimeout(function () { JotForm.setCalendar("10", false, { "days": { "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true }, "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "", "countSelectedDaysOnly": false }); }, 0); });
  }
  JotForm.onTranslationsFetch(function () { JotForm.setCalendar("10", false, { "days": { "monday": true, "tuesday": true, "wednesday": true, "thursday": true, "friday": true, "saturday": true, "sunday": true }, "future": true, "past": true, "custom": false, "ranges": false, "start": "", "end": "", "countSelectedDaysOnly": false }); });
  JotForm.displayLocalTime("input_10_hourSelect", "input_10_minuteSelect", "input_10_ampm", "input_10_timeInput", true);
  JotForm.setPhoneMaskingValidator('input_6_full', '\u0028\u0023\u0023\u0023\u0029 \u0023\u0023\u0023\u002d\u0023\u0023\u0023\u0023');
  JotForm.alterTexts(undefined);
  JotForm.alterTexts({ "couponApply": "Apply", "couponBlank": "Please enter a coupon.", "couponChange": "", "couponEnter": "Enter coupon", "couponExpired": "Coupon is expired. Please try another one.", "couponInvalid": "Coupon is invalid.", "couponValid": "Coupon is valid.", "shippingShipping": "Shipping", "taxTax": "Tax", "totalSubtotal": "Subtotal", "totalTotal": "Total" }, true);
  /*INIT-END*/
});
setTimeout(function () {
  JotForm.paymentExtrasOnTheFly([null, { "name": "heading", "qid": "1", "text": "Bakery Products Order Form", "type": "control_head" }, null, { "name": "products", "qid": "3", "text": "Products", "type": "control_payment" }, { "name": "customerDetails", "qid": "4", "text": "Customer Details", "type": "control_head" }, { "name": "name", "qid": "5", "text": "Name", "type": "control_fullname" }, { "name": "phoneNumber", "qid": "6", "text": "Phone Number", "type": "control_phone" }, { "name": "email", "qid": "7", "subLabel": "example@example.com", "text": "Email", "type": "control_email" }, { "name": "deliveryAddress", "qid": "8", "text": "Delivery Address", "type": "control_address" }, { "name": "orderNumber", "qid": "9", "text": "Order Number", "type": "control_autoincrement" }, { "name": "pickupdeliveryDate", "qid": "10", "text": "Pick-up\u002FDelivery Date and Time", "type": "control_datetime" }, null, { "mde": "No", "name": "specialInstructions", "qid": "12", "text": "Special Instructions", "type": "control_textarea", "wysiwyg": "Disable" }, { "name": "paymentMethod", "qid": "13", "text": "Payment Method", "type": "control_radio" }, null, { "name": "orderType", "qid": "15", "text": "Order Type", "type": "control_radio" }, { "name": "input16", "qid": "16", "text": "Reminders:\n\nAfter submitting this form, we'll check your order and we'll contact you within 24-48 hours for confirmation.\nThe turn around time depends on the ordered items.\nTaxes and Shipping Fee will be applied for every order.\n", "type": "control_text" }, { "name": "submit", "qid": "17", "text": "Submit", "type": "control_button" }]);
}, 20);
