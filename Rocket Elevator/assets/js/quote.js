// Calculate recommended elevators for Residential

function recommendResidential(){
    var floors = $("#resfloors").val();
    var apartments = $("#resapartments").val();
    var apartmentsByFloor = Math.ceil(apartments / floors);
    var elevators = Math.ceil(apartmentsByFloor / 6);
    var numColumns = Math.ceil(floors / 20);
    var totalElevators = elevators * numColumns;

    if(totalElevators > 1){
        document.getElementById("restotal").innerHTML = totalElevators;
        document.getElementById("resplural").innerHTML = "s";
    }else {
        document.getElementById("restotal").innerHTML = "1";
    }
};

// Calculate recommended elevators for Corporate

function recommendCorporate(){
    var floors = $("corporatefloors").val();
    var basements = $("corporatebasements").val();
    var columns = Math.ceil((floors + basements) / 20);
    var totalOccupants = floors * ($("corporateoccupants").val());
    var elevators = Math.ceil(totalOccupants / 1000);
    var totalElevators = Math.ceil(elevators / columns) * columns;

    if(totalElevators > 1){
        document.getElementById("corporatetotal").innerHTML = totalElevators;
        document.getElementById("corporateplural").innerHTML = "s";
    }else {
        document.getElementById("corporatetotal").innerHTML = "1";
    }
};

// Calculate recommended elevators for Hybrid

function recommendHybrid(){
    var floors = $("hybridfloors").val();
    var basements = $("hybridbasements").val();
    var columns = Math.ceil((floors + basements) / 20);
    var totalOccupants = floors * ($("hybridoccupants").val());
    var elevators = Math.ceil(totalOccupants / 1000);
    var totalElevators = Math.ceil(elevators / columns) * columns;

    if(totalElevators > 1){
        document.getElementById("hybridtotal").innerHTML = totalElevators;
        document.getElementById("hybridplural").innerHTML = "s";
    }else {
        document.getElementById("hybridtotal").innerHTML = "1";
    }
};

// Display appropriate product card via the select element
var selector = document.getElementById("project_type");
var selection;

selector.addEventListener("change", function(){
    selection = selector.value;
    console.log(selection);
    $(".quoter").fadeOut();
    var curProductCard = "#" + selection;
    var $curProductCard = $(curProductCard);
    setTimeout(() => {  $curProductCard.fadeIn(); }, 600);
    if(selection === "residential"){
        recommendResidential();
    }else if(selection === "corporate") {
        recommendCorporate();
    }else if (selection === "hybrid") {
        recommendHybrid();
    }
})

// Recalculate recommended elevators for residential when steppers change
$(".resinput").change(function(){
    recommendResidential();
});