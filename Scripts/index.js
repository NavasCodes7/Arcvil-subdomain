$(document).ready(function () {
	"use strict";
    var evnt = parseInt($('.event').css('width'), 10);
    var evntht = Math.floor(0.5625 * evnt)+'px';
    $('.event').css('height', evntht);

    $(window).on('resize', function () {
        var evnt = parseInt($('.event').css('width'), 10);
        var evntht = Math.floor(0.5625 * evnt) + 'px';
        $('.event').css('height', evntht);
    });

    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 20) {
            $('#tr-nav-wrapper').addClass('fixed');
        }
        else {
            $('#tr-nav-wrapper').removeClass('fixed');
        }
    });

    //navigator--------------------------------------------------------------

    $('#btn-nav').click(function () {
        console.log("clicked");
        $("#nav").toggleClass("show");
    });

    //event-button-----------------------------------------------------------

    $("#cn-button").click(function () {
        $(".cn-wrapper").toggleClass("opened-nav");
        if (!btnEventStatus){
            btnEventStatus = true;
            $("#cn-button").html("CLOSE");
        }
        else{
            btnEventStatus = false;
            $("#cn-button").html("EVENTS");
        }
    });

    $("#tr-nav-content > li").click( function (e) {
        var target = "#" + this.getAttribute('data-target');
        console.log("working to this far.." + "\ntarget id : " + target + "\neventdetails\n" + e);
        $('html, body').animate({
            scrollTop: $(target).offset().top - 10
        },500);
    });

    //Count-Down
    //---------------------------------------------------------------------

    $(function ($) {
        var labels = ['weeks', 'days', 'hours', 'minutes', 'seconds'],
          nextYear = '2018/11/01',
          template = _.template($('#main-example-template').html()),
          currDate = '00:00:00:00:00',
          nextDate = '00:00:00:00:00',
          parser = /([0-9]{2})/gi,
          $example = $('#main-example');
        // Parse countdown string to an object
        function strfobj(str) {
            var parsed = str.match(parser),
              obj = {};
            labels.forEach(function (label, i) {
                obj[label] = parsed[i]
            });
            return obj;
        }
        // Return the time components that diffs
        function diff(obj1, obj2) {
            var diff = [];
            labels.forEach(function (key) {
                if (obj1[key] !== obj2[key]) {
                    diff.push(key);
                }
            });
            return diff;
        }
        // Build the layout
        var initData = strfobj(currDate);
        labels.forEach(function (label, i) {
            $example.append(template({
                curr: initData[label],
                next: initData[label],
                label: label
            }));
        });
        // Starts the countdown
        $example.countdown(nextYear, function (event) {
            var newDate = event.strftime('%w:%d:%H:%M:%S'),
              data;
            if (newDate !== nextDate) {
                currDate = nextDate;
                nextDate = newDate;
                // Setup the data
                data = {
                    'curr': strfobj(currDate),
                    'next': strfobj(nextDate)
                };
                // Apply the new values to each node that changed
                diff(data.curr, data.next).forEach(function (label) {
                    var selector = '.%s'.replace(/%s/, label),
                        $node = $example.find(selector);
                    // Update the node
                    $node.removeClass('flip');
                    $node.find('.curr').text(data.curr[label]);
                    $node.find('.next').text(data.next[label]);
                    // Wait for a repaint to then flip
                    _.delay(function ($node) {
                        $node.addClass('flip');
                    }, 50, $node);
                });
            }
        });
    });

	//slide-show-------------------------------------------------

	var myIndex = 0;
	carousel();

	function carousel() {
    var i;
    var x = document.getElementsByClassName("single-slide");
    for (i = 0; i < x.length; i++) {
       x[i].style.display = "none";  
    }
    myIndex++;
    if (myIndex > x.length) {myIndex = 1;} 
    x[myIndex-1].style.display = "block";  
    setTimeout(carousel, 9000);    
}
	//-----------------------------------------------------------   
});