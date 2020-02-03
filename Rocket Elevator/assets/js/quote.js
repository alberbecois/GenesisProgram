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

// Calculate recommended elevators for Corporate or Hybrid
function recommendElevators(quoteType){
    var floors = $(`#${quoteType}floors`).val();
    var basements = $(`#${quoteType}basements`).val();
    var columns = Math.ceil((floors + basements) / 20);
    var totalOccupants = floors * ($(`#${quoteType}occupants`).val());
    var elevators = Math.ceil(totalOccupants / 1000);
    var totalElevators = Math.ceil(elevators / columns) * columns;

    if(totalElevators > 1){
        document.getElementById(`${quoteType}total`).innerHTML = totalElevators;
        document.getElementById(`${quoteType}plural`).innerHTML = "s";
    }else {
        document.getElementById(`${quoteType}total`).innerHTML = "1";
    }
}

// Display appropriate product card via the select element
var selector = document.getElementById("project_type");
var selection;

selector.addEventListener("change", function(){
    selection = selector.value;
    $(".quoter").fadeOut();
    isElevatorSelectionShowing = false;
    var curProductCard = "#" + selection;
    var $curProductCard = $(curProductCard);
    setTimeout(() => {  $curProductCard.fadeIn(); }, 600);
    if(selection === "residential"){
        recommendResidential();
    }else if(selection !== "commercial") {
        recommendElevators(selection);
    }
})

// Recalculate recommended elevators for residential when steppers change
$(".resinput").change(function(){
    recommendResidential();
});

// Recalculate recommended elevators for corporate or hybrid when steppers change
$(".recommendinput").change(function(){
    recommendElevators(selection);
});

// Next button displays the Elevator Selector card

var $nextButtons = $(".nextbutton");
var isElevatorSelectionShowing = false;

$($nextButtons).click(function(){
    if(isElevatorSelectionShowing === false){
        $("#elevatorselection").fadeIn();
        isElevatorSelectionShowing = true;
    }
});