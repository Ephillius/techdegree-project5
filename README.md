# Techdegree-project5
This is an "interactive" image gallery.
I used a Lightbox plugin in order to showcase the pictures in a larger size.
I was initially going to write one myself using the anchor tag strategy but the project didn't demand for that so I decided to skip it for now (will probably do it later on my own).
When a new photo is added, the script adds an attribute to its 'div', making it accessible to the plugin. As the photo is incorporated, I also enhanced my workflow by adding a function that adds the corresponding caption to it - it only works if the captions are saved numerically inside the array.
For the input (search bar), I had to come up with a search function that would show in realtime the potential matches to what the user was typing at the time, making the non-matched pics disappear.
I searched for a better way to accomplish this and found out that by using a regular expression such as the RegExp I could match both the input and the value I wanted - which was the caption itself.
The search is also case insensitive so it returns the images correctly.
I also decided to make the content scrollable while leaving both the header and footer fixed.
The website is responsive across all, if not, most devices; has a mobile-first approach and was styled mainly with floats (flexbox used on the header and footer).
