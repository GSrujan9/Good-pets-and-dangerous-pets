setScreen("screen1");

// Good Pets
onEvent("dog","click", function() {
  playSound("sound://category_animals/dog.mp3");
});

onEvent("cat","click", function() {
  playSound("sound://category_animals/cat.mp3");
});

onEvent("puppy","click", function() {
  playSound("sound://category_animals/puppy.mp3");
});

onEvent("kitten","click", function() {
  playSound("sound://category_animals/kitten.mp3");
});


// Bad Pets
onEvent("crocodile","click", function() {
  playSound("sound://category_animals/crocodile.mp3");
});

onEvent("tiger","click", function() {
  playSound("sound://category_animals/tiger.mp3");
});

onEvent("bear","click", function() {
  playSound("sound://category_animals/bear.mp3");
});

onEvent("rhino","click", function() {
  playSound("sound://category_animals/rhinoceros.mp3");
});

onEvent("monkey","click", function() {
  playSound("sound://category_animals/monkey.mp3");
});

onEvent("elephant","click", function() {
  playSound("sound://category_animals/elephant.mp3");
});


// Screens
onEvent("goTodangerousPets", "click", function() {
  setScreen("DangerousPets");
});

onEvent("Gotogoodpets", "click", function() {
  setScreen("GoodPets");
});

onEvent("Gotogoodpets2", "click", function( ) {
  setScreen("GoodPets");
});

onEvent("goTodangerousPets2", "click", function() {
  setScreen("DangerousPets");
});