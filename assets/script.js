// Initialize Firebase
var config = {
	apiKey: "AIzaSyAGwq7YxNgYOezAOcJQ3k1q8Jlho2u1rDY",
	authDomain: "train-assignment-82d1a.firebaseapp.com",
	databaseURL: "https://train-assignment-82d1a.firebaseio.com",
	projectId: "train-assignment-82d1a",
	storageBucket: "train-assignment-82d1a.appspot.com",
	messagingSenderId: "241336060293"
};

firebase.initializeApp(config);

var databse = firebase.database();

//submit button that is activated when clicked
$("#add-user").on("click", function(event) {
	event.preventDefault();

//grabs the user input
	var trainName = $("#name-input").val().trim();
	var destination = $("#destination-input").val().trim();
	var frequency = $("#frequency-input").val().trim();

	//local "temporary" object for holding the data
	var newTrain = {
		name: trainName,
		place: destination,
		time: frequency 
	};

	//puts the data into the database
	database.ref().push(newTrain);

	console.log(newTrain.trainName);
	console.log(newTrain.destination);
	console.log(newTrain.frequency);

	alert("Successfully added the train");

	$("#user-input").val("");
	$("#destination-input").val("");
	$("#frequency-input").val("");
});

//creates a firebase event for adding the data to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
	console.log(childSnapshot.val());

	//stores everything into a variable
	var trainName = childSnapshot.val().name;
	var destination = childSnapshot.val().destination;
	var frequency = childSnapshot.val().frequency;

	console.log(trainName);
	console.log(destination);
	console.log(frequency);

	//create new row
	var newRow = $("<tr>").append(
		$("<td>").text(trainName),
		$("<td>").text(destination),
		$("<td>").text(frequency)
	);

	// new row to the table
});