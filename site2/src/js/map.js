(function () {
    var setting = {"height":650,"width":795,"zoom":17,"queryString":"Борисоглебская улица, д. 4, Уфа, Россия","place_id":"EkTQkdC-0YDQuNGB0L7Qs9C70LXQsdGB0LrQsNGPINGD0LvQuNGG0LAsINC0LiA0LCDQo9GE0LAsINCg0L7RgdGB0LjRjyJQEk4KNAoyCUNusPYOSNlDEWfO8OFVmXFSGh4LEO7B7qEBGhQKEgl7zF7j4UfZQxGp0mNXLsJ3AAwQBCoUChIJXTFuFAlI2UMRs8fIShtcwzs","satellite":false,"centerCoord":[54.81794121893885,56.10777489753796],"cid":"0x2f2fc693fa6da5c7","lang":"ru","cityUrl":"/russia/ufa-17460","cityAnchorText":"Карта [CITY1], Урал - Сибирь - Дальний Восток, Россия","id":"map-9cd199b9cc5410cd3b1ad21cab2e54d3","embed_id":"399156"};
    var d = document;
    var s = d.createElement('script');
    s.src = 'https://1map.com/js/script-for-user.js?embed_id=399156';
    s.async = true;
    s.onload = function (e) {
    window.OneMap.initMap(setting)
    };
    var to = d.getElementsByTagName('script')[0];
    to.parentNode.insertBefore(s, to);
})();