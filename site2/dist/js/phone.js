var input=document.querySelector("#phone");window.intlTelInput(input,{geoIpLookup:function(o){$.get("http://ipinfo.io",function(){},"jsonp").always(function(n){n=n&&n.country?n.country:"";o(n)})},onlyCountries:["us","gb","ch","ca","do","ru","de","lv"],placeholderNumberType:"MOBILE",utilsScript:"build/js/utils.js"});