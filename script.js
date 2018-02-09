"use strict";

var api_key = "2d3c294fd0b065c50e0fa0ce7425c67e";

function kToF(temp) {
	var f = temp * (9/5) - 459.67;
	return Math.trunc(f);
}

$(document).ready(function() {
    $('form').submit(function(e) {
    	e.preventDefault();
        var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + $('#city').val() + '&&appid=' + api_key;
        $.get(url, function(res) {
            var el = '';
            el += '<h1>' + res.name + '</h1>';
            el += '<p>Temperature: ' + kToF(res.main.temp);

            $('.weather').html(el);
        }, 'json');
 
    });
});