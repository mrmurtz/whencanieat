

// Time API


$.getJSON('http://muslimsalat.com/daily.json?key=API_KEY&jsoncallback=?', function (times){
		console.log(times);
			$('.eat h1').html(times.items[0].maghrib);
			$('.until').html('until');
			$('.stop h1').html(times.items[0].fajr)
		 	
		 // .append(' by MuslimSalat.com');
		 	$('.prayerTimesExample').append(' ' + times.city);

	  });





// Current time in the format 9:12 pm

var now = moment().format("h:mm a");
console.log(now);




// if (now < ){
// 	$('body').css('background-color', '#aa2c43')
// 	$('h1').append('NO');
// }	
// 	else {
// 	$('body').css('background-color', '#6f9283');
// 	$('h1').append('YES');
// 	$('button').remove();
// }




// These are the fake times just to check

// var fakeTimes = '13:15';

