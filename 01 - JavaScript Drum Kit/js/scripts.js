window.addEventListener("keydown", (e) => {
  // Selects the audio elements that contain the data-key attribute
  // with an specific value when the keydown event takes place
  const audio = document.querySelector(`audio[data-key=${e.key}]`);
  // Selects the element that contain the class ".key" and the 
  // data-key attribute with an specific value when the keydown
  // event takes place
  const key = document.querySelector(`.key[data-key=${e.key}]`);
  // Returns null when the user press a key that doesn't contain
  // "key" class, since it's no associated to the audio element.
  // The audio element doesn't play
  if (!audio) return;
  // Set the current time of the audio element to 0
  // Basically it sets the start at 0
  audio.currentTime = 0;
  // Play the audio element
  audio.play();
  // Add the class "playing" to key
  key.classList.add("playing");
});

// Remove the 
const removeTransition = function(e) {
  if(e.propertyName !== "transform") return;
  this.classList.remove("playing");
}


// Save all the elements that contain the key function into a node-list
const keys = document.querySelectorAll(".key");
// Loop over every element of the node-list (keys), and add a transition end
// event listener. Besides, it runs the removeTransition function
keys.forEach(key => key.addEventListener("transitionend", removeTransition));