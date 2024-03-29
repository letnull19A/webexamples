var input = document.querySelector("#phone");
window.intlTelInput(input, {
  // allowDropdown: false,
  // autoHideDialCode: false,
  // autoPlaceholder: "off",
  // dropdownContainer: document.body,
  // excludeCountries: ["us"],
  // formatOnDisplay: false,
   geoIpLookup: function(callback) {
     $.get("http://ipinfo.io", function() {}, "jsonp").always(function(resp) {
       var countryCode = (resp && resp.country) ? resp.country : "";
       callback(countryCode);
     });
   },
  // hiddenInput: "full_number",
  // initialCountry: "auto",
  // localizedCountries: { 'de': 'Deutschland' },
  // nationalMode: false,
   onlyCountries: ['us', 'gb', 'ch', 'ca', 'do', 'ru', 'de', 'lv'],
   placeholderNumberType: "MOBILE",
  // preferredCountries: ['cn', 'jp'],
  // separateDialCode: true,
  utilsScript: "build/js/utils.js",
});