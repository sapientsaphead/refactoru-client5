$(document).ready(function(){


// Display quote submission lightbox.

$(".submitnewquote").on("click", function(){
	$(".newlightbox").css("display","block")

});

// Function to output quote submission into main page.

var newquote = {};
var newquotelist =[];
var author;
var quote;

	
	newquote.num = 0;
	newquote.author;
	newquote.quote;


$(".submitquote").on("click", function(event) {
	event.preventDefault();


	$(".newauthor").trigger("focusout");
	$(".newquote").trigger("focusout");
	
	var author = $(".newauthor").val();
	var quote = $(".newquote").val();
		newquote.author = author;
		newquote.quotetext = quote;
		newquote.num +=1;	

	$(".quotebox").prepend("<div class=\"author\"><p>" + author + "</p></div>" 
		+ "<div class=\"quote\"><p>\"" + quote + "\"</p></div>" 
		+ "<div class=\"rating\"><span class=\"star\">☆</span><span class=\"star\">☆</span><span class=\"star\">☆</span><span class=\"star\">☆</span><span class=\"star\">☆</span>	`</div>");

	console.log("iauthor", author);
	console.log("iquote", quote);
	console.log("inewquote", newquote);

	newquotelist.push(newquote);
	console.log("inewquotelist", newquotelist);

	// Close submit new quote box & empty.
	$(".newlightbox").css("display","none");
	


});

console.log("onewquote", newquote)
console.log("onewquote", newquote)
console.log("onewquotelist", newquotelist)


// Display random quote lightbox.

$(".randomquote").on("click", function(){
	$(".randomlightbox").css("display","block")
});


// Close random quote lightbox.

$(".close").on("click", function(){
	$(".randomlightbox").css("display","none")
});


});