console.log("main.js");

let productCard = [];
productCard.push({
	title: "Cuba and Its People: A Photographic Exploration", 
	copy: "Experience the evolution of Cuba through its people on a cultural program that uses photography as a means of getting to know Cubans from all walks of life. Join a National Geographic photographer and two Cuban photographers for an intimate look at Havana and the surrounding countryside. Rise with the sun to capture the old city’s early morning rhythms, and photograph the people you engage with on visits to schools, dance studios, art cooperatives, and more. This trip is limited to 16 travelers.", 
	price: "Starting at $1000.00",
	img: "../images/cuba.jpg"
});

productCard.push({
	title: "Advanced Photography and Lighting Workshop: Saint Lucia", 
	copy: "Blanketed in lush jungles, edged by luminous sandy beaches, and crowned by the staggering twin peaks of its iconic Pitons, Saint Lucia is one of the Caribbean’s most picturesque islands. Capture this stunning tropical scenery—and the stories of a vibrant Caribbean culture—while fine-tuning your photography and lighting skills. This advanced workshop is led by National Geographic photographer Joe McNally and a professional instructor and is designed for advanced photographers. The workshop is limited to 16 participants.", 
	price: "Starting at $3500.00",
	img: "../images/aussie.jpg"
});

productCard.push({
	title: "Dog Sledding Across the Prince Edward Islands", 
	copy: "Experience winter like never before. Enjoy this fun, 5-hour dog sledding package. Join our team in beautiful Northern Canada for this exciting and fulfilling dogsled experience. Gear and meals provided.", 
	price: "Starting at $300.00",
	img: "../images/snowdogs.png"
});

productCard.push({
	title: "Spelunking tour of Crystal Caverns California", 
	copy: "Enjoy this spectacular spelunking tour in the heart of the rainforests of South America.  This 3-hour cave diving package comes with all gear and excitement provided. Come join us today!", 
	price: "Starting at $100.00",
	img: "../images/spelunking.png"
});

productCard.push({
	title: "Skydiving", 
	copy: "Come with us on a once of a lifetime adventure! Fly through the sky at exhilarating speeds and get your heart pumping! Skydiving is a great way to spend an afternoon. Come early, leave stoked.", 
	price: "Starting at $500.00",
	img: "../images/skydiving.png"
});

productCard.push({
	title: "Backcountry Skiing", 
	copy: "Do you like snow up to your knees? Steep inclines? Breath taking views that only you get to see? Backcountry skiing delivers all of this and more! Come skiing just 20 miles north of Vail, CO on picturesque mountains. Take a day, create memories for life!", 
	price: "Starting at $1500.00",
	img: "../images/backcountry.jpg"
});

productCard.push({
	title: "Rock Climbing Expedition", 
	copy: "Rock climbing is an incomparable challenge. It takes every muscle in your body to inch you upward. There's no time for distraction, no room for your mind to wander. It's you and a route up narrow fissures and narrower ledges. Chase your fear back into the shadows, as you balance on fingertips and toeholds all the way to the top.", 
	price: "Starting at $1500.00",
	img: "../images/rockclimb.png"
});

productCard.push({
	title: "Zipline in the Sunshine State", 
	copy: "Soar through the air and get a bird's eye view of the forest, beaches and river below.  Adventures Unlimited's Zip Adventures combines the adrenaline rush of a zip line canopy tour with the beauty of Northwest Florida's pristine longleaf pine forest and Coldwater Creek.", 
	price: "Starting at $1500.00",
	img: "../images/zipline.png"
});


//console.log("productCard", productCard);

// //for each object in here...I want to list each item of each line/array
productCard.forEach(function(item){
	document.getElementById("products").innerHTML += `<div class="card">
			<h2>${item.title}</h2>
			<img src="${item.img}">
			<p>${item.copy}</p>
			<p class="price">Investment in your happiness: <br>${item.price}</p>
			<button><a href="#">Learn More</a></button>
		</div>`;
	
});


	// <img src="${item.img}">