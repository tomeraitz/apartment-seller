
$("button").on("click", function () {
    let address = $("#addr-input").val()
    let minPrice = $("#min-p-input").val()
    let maxPrice = $("#max-p-input").val()
    let minRooms = $("#min-r-input").val()
    let maxRooms = $("#max-r-input").val()
    let immediate = $("#immed-y")
    let park = $("#park-y")
    

    let relevantApts = findRelevantApts(address, minPrice, maxPrice, minRooms, maxRooms, immediate , park)
    renderApts(relevantApts)
})

const renderApts = function (apartments) {
    $("#results").empty()
    const source = $('#results-template').html();
    const template = Handlebars.compile(source);
    const apartmentsData = {apartments}
    let newHTML = template(apartmentsData);
    $('#results').append(newHTML); 
}

renderApts(apartments) //renders apartments when page loads