// stores all captions used, in order of placement, of course
var captions = [
	'I love hay bales. Took this snap on a drive through the countryside past some straw fields.',
	'The lake was so calm today. We had a great view of the snow on the mountains from here.',
	'I hiked to the top of the mountain and got this picture of the canyon and trees below.',
	'It was amazing to see an iceberg up close, it was so cold but didn&apos;t snow today.' ,
	'The red cliffs were beautiful. It was really hot in the desert but we did a lot of walking through the canyons.',
	'Fall is coming, I love when the leaves on the trees start to change color.',
	'I drove past this plantation yesterday, everything is so green!',
	'My summer vacation to the Oregon Coast. I love the sandy dunes!',
	'We enjoyed a quiet stroll down this countryside lane.',
	'Sunset at the coast! The sky turned a lovely shade of orange.',
	'I did a tour of a cave today and the view of the landscape below was breathtaking.',
	'I walked through this meadow of bluebells and got a good view of the snow on the mountain before the fog came in.'
]

//This function simplifies my job in terms of attribute addition
//I don't need to add the captions to each one of the photos manually
// when the page loads
$(document).ready(function(){
	//for each anchor tag child do:
	$(".grid_image a").each(function(index){
		//1st, if they have an attribute that starts with 'photo'
		if($('a[href^="photo"]')){
			//add another attribute of 'data-lightbox' with the value of 'roadtrip'
			//this will initialize the lightbox plugin on the specified anchor tags
			$(this).attr('data-lightbox','roadtrip');
			// just checking if it works here
			console.log("Attribute added");
			//another attribute will be added to the anchor tag
			//this time, the function will iterate through the captions array
			//and add the plugin attribute + corresponding caption
			$(this).attr('data-title', captions[index]);
			console.log(captions[index] + ' - caption added'); 
		}
	})
});

//Lightbox options
lightbox.option({
	'alwaysShowNavOnTouchDevices': true,
	'positionFromTop': 20
})