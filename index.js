
function NewIdea(title, body) {
  // this.id = id;
  this.title = title;
  this.body = body;
  this.quality = "swill";
}

function grabValues() {
  var title = $( ".title" ).val();
  var idea = $( ".idea" ).val();
  console.log(title + " " + idea);
  var newIdea = new NewIdea(title, idea);
  console.log(newIdea);
  stringObj(newIdea);
}

var uniqueID;

$( ".save" ).on("click",function(e) {
  uniqueID = e.timeStamp;
  grabValues();
});

function stringObj(ideaObj) {
  var stringObj = JSON.stringify(ideaObj);
  localStorage.setItem(uniqueID, stringObj);
  // idNum ++;
}
// var idNum = 1;


function retrieveIdeas() {
  for(var key in localStorage) {
    var parsed = JSON.parse(localStorage[key]);
    console.log(parsed);
  }
}
