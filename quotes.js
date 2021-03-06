var newquotelist = [];

$(document).ready(function(){


	// Display quote submission lightbox.

	$(".submitnewquote").on("click", function(){
		$(".newlightbox").css("display","block")

	});

	// Function to output quote submission into main page.

	var newquote = {};
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


	$(".submitquote").on("click", function(event) {
	
		var author = $(".newauthor").val();
		var quote = $(".newquote").val();
		var timeStamp = new Date();
		var starrating;
		var filteredObjects;
		var parentId;

		if(author && quote) {
			getQuote(author, quote, timeStamp);

            $(".quotelist").prepend("<div class=\"quotebox\" id=\"" +newquotelist[id-1].num + "\"><div class=\"delqb\">X</div><div class=\"author\" id=\"" + newquotelist[id-1].author + "\">" + author + "</div>" + "<div class=\"quote\"><p>\"" + quote+"\"</p></div><div class=\"rating\"><span class=\"star\"id=\"5s\">☆</span><span class=\"star\"id=\"4s\">☆</span><span class=\"star\"id=\"3s\">☆</span><span class=\"star\"id=\"2s\">☆</span><span class=\"star\"id=\"1s\">☆</span></div></div>");
		
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
		// Add star rating as quotebox id for sorting.

		$(".star").on("click", function(){
			var idnum;
			starrating = $(this).attr("id");
			idnum = $(this).parent().parent().attr("id");

			newquotelist[idnum]["rating"] = starrating;

			$(this).nextAll().andSelf().css("color","gold");
			$(this).prevAll().css("color", "black");
		});
		
		// Delete quotes and undo delete quotes.

		var getparentId = function(id) {
			return id;
		};

		$(".quotelist").on("click", ".delqb", function(){
			$(this).parent().fadeOut("slow");
			parentId = $(this).parent().attr("id");
			$(".undo:hidden").fadeIn("slow");
			getparentId(parentId);
		});


		$(".mainpage").on("click",".undo", function(){
			$("#"+parentId).fadeIn("slow");
		});

		// Author page filter
	
		$(".quotelist").on("click", ".author",function(){
			var authorname = $(this).attr("id");
			$(".mainpage").css("display", "none");
			$(".authorpage").css("display", "block");
			$(".bigauthortitle").text("Quotes by "+ authorname);
			$(".authorquotelist").text("");

			filteredObjects = filter(newquotelist, function(o) {
	  			if(o.author === authorname) {
	    		return true;
	  			}
	  			else {
	    		return false;
	  			}
	  		});
		
			for (var j=0; j < filteredObjects.length; j++) {
				
				$(".authorquotelist").prepend("<div class=\"quotebox\" id='" + filteredObjects[j].num + "'><div class=\"author\">" + filteredObjects[j].author + "</div><div class=\"quote\"><p>\"" + filteredObjects[j].quote + "\"</p></div></div>");
				
				if (filteredObjects[j].rating === undefined) {
				}

				else {
					$("#"+filteredObjects[j].rating).nextAll().andSelf().css("color","gold");
					$("#"+filteredObjects[j].rating).prevAll().css("color", "black");
				};

				$(".star").on("click", function(){
					var idnum;
					starrating = $(this).attr("id");
					idnum = $(this).parent().parent().attr("id");
					filteredObjects[idnum]["rating"] = starrating;

					$(this).nextAll().andSelf().css("color","gold");
					$(this).prevAll().css("color", "black");

				});
			};
		});
		

		$(".back").on("click", function(){
			$(".mainpage").css("display", "block");
			$(".authorpage").css("display", "none");
			
		});

	});


	// Cancel submit and close new quote lightbox.
			
	$(".cancel").on("click", function() {
		$(".newlightbox").css("display","none");
	});


	// Display random quote lightbox.

	$(".randomquote").on("click", function(){
		$(".randomlightbox").css("display","block");
		var randomid = Math.floor(Math.random() * (newquotelist.length-1));
		$(".randomquotebox").prepend("<div id='" + newquotelist[id-1].num + "'class=\"quotebox\"><div class=\"author\">"+ newquotelist[randomid].author +"</div><div class=\"quote\"><p>\"" + newquotelist[randomid].quote +"\"</p></div><div class=\"rating\"><span class=\"star\"id=\"5s\">☆</span><span class=\"star\"id=\"4s\">☆</span><span class=\"star\"id=\"3s\">☆</span><span class=\"star\"id=\"2s\">☆</span><span class=\"star\"id=\"1s\">☆</span></div></div>");
		
		if (newquotelist[randomid].rating === undefined) {
		}

		else {
			$("#"+newquotelist[randomid].rating).nextAll().andSelf().css("color","gold");
			$("#"+newquotelist[randomid].rating).prevAll().css("color", "black");
		};

		$(".star").on("click", function(){
			var idnum;
			starrating = $(this).attr("id");
			idnum = $(this).parent().parent().attr("id");
			newquotelist[idnum]["rating"] = starrating;

			$(this).nextAll().andSelf().css("color","gold");
			$(this).prevAll().css("color", "black");

			// $(this).parent().parent().addClass(starrating+"q");
		});

	});

	// Close random quote lightbox.

	$(".close").on("click", function(){
		$(".randomlightbox").css("display","none")
		$(".randomquotebox").empty();
	});



	// Sort by Rating
	$(".ratingSort").on("click",function(){
		newquotelist.sort(descendingObj);

		$(".quotelist").empty();

		for (var i=0; i < newquotelist.length-1; i++) {
		$(".quotelist").prepend("<div class=\"quotebox\" id=\"" + newquotelist[i].num + "\"><div class=\"delqb\">X</div><div class=\"author\" id=\"" + newquotelist[i].author + "\">" + newquotelist[i].author + "</div><div class=\"quote\"><p>" + newquotelist[i].quote + "</p></div><div class=\"rating\"><span class=\"star\"id=\"5s\">☆</span><span class=\"star\"id=\"4s\">☆</span><span class=\"star\"id=\"3s\">☆</span><span class=\"star\"id=\"2s\">☆</span><span class=\"star\"id=\"1s\">☆</span></div></div>");
		
			if (newquotelist[i].rating === undefined) {
			}

			else {
				$("#"+newquotelist[i].rating).nextAll().andSelf().css("color","gold");
				$("#"+newquotelist[i].rating).prevAll().css("color", "black");
			};
		};

			$(".star").on("click", function(){
				var idnum;
				starrating = $(this).attr("id");
				idnum = $(this).parent().parent().attr("id");

				newquotelist[idnum]["rating"] = starrating;

				$(this).nextAll().andSelf().css("color","gold");
				$(this).prevAll().css("color", "black");
			});

	});		
});
