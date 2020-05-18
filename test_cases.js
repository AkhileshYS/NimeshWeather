let Response = pm.response.json();
console.log(Response);
// console.log(Response.message);
//console.log(Response.list[0].dt_txt);
var firstdate= Response.list[0].dt_txt;

//console.log(Response.list[95].dt_txt);
var lastdate= Response.list[95].dt_txt;

console.log(firstdate);
console.log(lastdate);

var final = Response.list[95].dt_txt - Response.list[0].dt_txt;

console.log(final);

console.log(Response.list[0].main.temp);
console.log(Response.list[95].main.temp);

console.log(Response.city.coord);
    
pm.test(" TEST CASE : Check temp is lt temp_min & gt temp_max", function () {
    var jsonData = pm.response.json();
    var listofdata = jsonData.list;
    listofdata.forEach(ele => {
        var temptrue = (ele.main.temp >= ele.main.temp_min && ele.main.temp <= ele.main.temp_max)
        pm.expect(temptrue).to.eql(true);
    })

});

pm.test("Status code have to be 200", function () {
    pm.response.to.have.status(200);
});
