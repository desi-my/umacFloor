
$( "#name" ).hover(
  function() {
    $( this ).addClass( "nameHover" );
  }, function() {
    $( this ).removeClass( "nameHover" );
  }
);


function showDetails(person) {
    var animalType = animal.getAttribute("data-animal-type");
    alert("This is " + person.innerHTML +  ".");
}
