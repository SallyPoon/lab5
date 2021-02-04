'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
	$("h3.listen").click(projectClick)
})

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	console.log("Javascript connected!");
	//$("a.clicker").click(projectClick)
}

function anagrammedName(name) {
	// Thanks, Internet Anagram Server!
	//$("a.clicker").click(projectClick)
	
	if (name == "Doug Engelbart") {
		return "Notable Grudge";
	} 
	else if (name == "Ivan Sutherland") {
		return "Vandal Heist Run";
	}
	else if (name == "JCR Licklider") {
		return "Crick Rid Jell";
	}
	else if (name == "Vannevar Bush") {
		return "Ravens Van Hub";
	}
	else if (name == "Alan C. Kay") {
		return "Canal Yak";
	}
	else if (name == "Allen Newell") {
		return "Ellen All New";
	}
	else if (name == "Lucy Suchman") {
		return "Lunacy Chums";
	}
	else if (name == "Grace Hopper") {
		return "Gear Chopper";
	}
	else {
		console.log(name + " not known for anagramming.");
		return name;
	}
}
function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    console.log("hi" + anagrammedName(name))
    // In an event handler, $(this) refers to      
    // the object that triggered the event 
    $(this).text(anagrammedName($(this).text()));
}