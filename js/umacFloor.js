$("#name").hover(function () {
    $(this).find('data-user').fadeIn(100);
},
function () {
    $(this).find('data-user').fadeOut(100);
});


function showDetails(person) {
    var animalType = animal.getAttribute("data-animal-type");
    alert("This is " + person.innerHTML +  ".");
}
