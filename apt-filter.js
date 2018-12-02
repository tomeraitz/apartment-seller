//Only start playing with this file if you're done with all the basics

const must = (radio) => radio.filter(rb => rb.checked).length

const findRelevantApts = function (address, minPrice, maxPrice, minRooms, maxRooms, immediate , park) {
    let relevantApts = apartments.filter(a =>
        a.address.toLowerCase().includes(address.toLowerCase() || "") &&
        a.price >= (minPrice || 0) &&
        a.price <= (maxPrice || a.price) &&
        a.rooms >= (minRooms || 0) &&
        a.rooms <= (maxRooms || a.rooms)
    )

    immediate = immediate[0].checked 
    park = park[0].checked
    if(immediate && !park){
        return relevantApts.filter(a => (a.immediate))
    }
    else if(park && !immediate){
        return relevantApts.filter(a => (a.parking))
    }
    else if(immediate && park){
        return relevantApts.filter(a => (a.parking && a.immediate))
    }
    else{
        return relevantApts
    }
}