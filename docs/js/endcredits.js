/*
 * jQuery endcredits Plugin
 *
 * Copyright (c) 2014 Daniel Malkafly <malk@epichail.com>
 * Dual licensed under the MIT or GPL Version 2 licenses or later.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 */
$(document).ready(function () {

    $('#creditsBtn').click(function (e) {
        e.preventDefault();
        
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();
	let scrollFactor = 0.9;
        let scrollDuration = 35000;
	
        $('#titles').css({
            'width': maskWidth,
            'height': maskHeight
        });

        $('#titles').fadeIn(1000);
        $('#titles').fadeTo("fast");
        $('#titles').fadeIn();
        $('#credits').css("left", (($('#credits').parent().width() - $('#credits').outerWidth()) / 2) + "px");
        $('#credits').css("bottom", "-" + maskHeight * scrollFactor + "px");
        $('#credits').show('fast');

        $('#credits').animate({
            bottom: maskHeight + "px"
        }, {
            duration: scrollDuration,
            complete: function () {
                $('#titles').fadeOut();
                $('.window').fadeOut();
                $('#credits').css("bottom", "-" + (maskHeight * scrollFactor) + "px");
            },
            step: function (n, t) {
                var pos = $(this).position();
            }
        });

    });

    $('.window .close').click(function (e) {
        e.preventDefault();
        $('#credits').css("bottom", "-" + ($(document).height() * scrollFactor) + "px");
        $('#titles').hide();
        $('.window').hide();
    });

    $('#titles').click(function () {
        $(this).hide();
        $('#credits').css("bottom", "-" + ($(document).height() * scrollFactor) + "px");
        $('.window').hide();
    });
});
