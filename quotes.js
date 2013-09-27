$(document).ready(function(){


// Display quote submission lightbox.

$(".submitnewquote").on("click", function(){
	$(".newlightbox").css("display","block")

});

// Function to output quote submission into main page.

var newquote = {};
var newquotelist = [];
var id = 0;

var getQuote = function(author, quote, timeStamp) {
	newquotelist[id] = {
		num: id,
		author: author,
		quote: quote,
		timeStamp: timeStamp,
	}
	id++;
};

console.log("var id outside", id);


$(".submitquote").on("click", function(event) {
	//event.preventDefault ? event.preventDefault() : event.returnValue = false;
	
	var author = $(".newauthor").val();
	var quote = $(".newquote").val();
	var timeStamp = new Date();

	console.log("before if newquotelist", newquotelist);
	console.log("id before if", id);

		if(author && quote) {
			getQuote(author, quote, timeStamp);
			console.log("after if newquotelist", newquotelist);
			console.log("id after if", id);
			console.log("var id", id-1);

            $(".quotelist").prepend("<div class=\"quotebox\" id=\"" +newquotelist[id-1].num + "\"><div class=\"delqb\">X</div><div class=\"author\"><a href='#' id=\""+newquotelist[id-1].author+"\">" + author+"</a></div>" + "<div class=\"quote\"><p>\"" + quote+"\"</p></div><div class=\"rating\"><span class=\"star\"id=\"5s\">☆</span><span class=\"star\"id=\"4s\">☆</span><span class=\"star\"id=\"3s\">☆</span><span class=\"star\"id=\"2s\">☆</span><span class=\"star\"id=\"1s\">☆</span></div></div>");
		
		// Close submit new quote box & empty.
		$(".newlightbox").css("display","none");
		$(".newauthor").val("");
		$(".newquote").val("");

		}
		// Alert plus keep box open.
		else {
			alert("Please fill out the form completely!")
		}
		newquotelist.push(newquote);

		// Add star rating for each quote to object.

		var starrating;
		var idnum;

		$(".star").on("click", function(){
			starrating = $(this).attr("id");
			idnum = $(this).parent().parent().attr("id");

			newquotelist[idnum]["rating"] = starrating;

			$(this).nextAll().andSelf().css("color","gold");
			$(this).prevAll().css("color", "black");
			});

		$(".delqb").on("click", function(){
			$(this).parent().fadeOut("slow");
			$(".undo:hidden").fadeIn("slow");
		});

		$(".undo").on("click", function(){
			$(".quotebox:hidden:first").fadeIn("slow");
			$(this).fadeOut("slow");
		});

		$(".ratingSort").on("click", function(){
			newquotelist.sort(descendingObj);
			console.log('sorted', newquotelist);
		});

		// $("a").on("click", function(){
		// });


			
});
		


// Cancel submit and close new quote lightbox.
		
$(".cancel").on("click", function() {
	$(".newlightbox").css("display","none");
});


// Display random quote lightbox.

$(".randomquote").on("click", function(){
	$(".randomlightbox").css("display","block")
});


// Close random quote lightbox.

$(".close").on("click", function(){
	$(".randomlightbox").css("display","none")
});


});