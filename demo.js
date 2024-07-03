// We use the Objects below to control toggling like / unlike status

const glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

const colorStates = {
  "red" : "",
  "": "red"
};

// STEP 1: The line of code below is what lets JavaScript find the elements that
// we want to make clickable. Without JavaScript, clicking on these heart shapes
// does nothing. Uncomment the code and refresh the demo page. 


//Once you uncomment the line of code below and refresh the page, you can use the console to verify that the articleHearts variable contains a nodeList with five elements.
  const articleHearts = document.querySelectorAll(".like-glyph");

function likeCallback(e) {
  const heart = e.target;
  mimicServerCall()
    .then(function(serverMessage){
      // STEP 2: Uncomment the 3 lines after the alert.
      // Here we're using Pillar 1 (DOM Manipulation) to update the screen and
      // mimicking Pillar 3 (Server Communication) to only update the screen if
      // the sending of information to the server succeeds.

     //find the comments describing Step 2, which sets up the mock server communication (our third pillar): 
     /*Once you've uncommented out the code and refreshed the page,
      try clicking one of the "Like" buttons again. 
      You'll see that it's still not working. That's because we've uncommented the code that mocks our communication with the server, 
      but we haven't yet told JavaScript to listen for the "click" event.
        */

      alert("You notified the server!");
         alert(serverMessage);
         heart.innerText = glyphStates[heart.innerText];
         heart.style.color = colorStates[heart.style.color];
    })
    .catch(function(error) {
      alert("Something went wrong!");
    });
}

// STEP 3: In order for the call to the server and the update of the screen to
// work, we need to add a click event listener to the elements we identified in
// STEP 1. That's Pillar 2, event handling. Uncomment this code:
//Find Step 3 in the commented code. It's time to bring in the second pillar, events:


    for (const glyph of articleHearts) {
     glyph.addEventListener("click", likeCallback);
}

// STEP 4: 

// When all the STEPs' code changes have been complete, you'll be able to see a
// working demonstration of our reference example. Sure, it's maybe not as
// pretty as a professional site, but they're only different from our site in
// style, not substance.

//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall() {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      resolve("Pretend remote server notified of action!");
    }, 300);
  });
}
