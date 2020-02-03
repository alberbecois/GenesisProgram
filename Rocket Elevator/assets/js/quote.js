// Calculate recommended elevators for Residential
function recommendResidential(){
    var floors = parseInt($("#resfloors").val());
    var apartments = parseInt($("#resapartments").val());
    var apartmentsByFloor = Math.ceil(apartments / floors);
    var elevators = Math.ceil(apartmentsByFloor / 6);
    var numColumns = Math.ceil(floors / 20);
    var totalElevators = elevators * numColumns;
    quotedElevators = totalElevators;

    if(totalElevators > 1){
        document.getElementById("restotal").innerHTML = totalElevators;
        document.getElementById("resplural").innerHTML = "s";
    }else {
        document.getElementById("restotal").innerHTML = "1";
    }
};

// Calculate recommended elevators for Corporate or Hybrid
function recommendElevators(quoteType){
    var floors = parseInt($(`#${quoteType}floors`).val());
    var basements = parseInt($(`#${quoteType}basements`).val());
    var columns = Math.ceil((floors + basements) / 20);
    var totalOccupants = (floors + basements) * parseInt(($(`#${quoteType}occupants`).val()));
    var elevators = Math.ceil(totalOccupants / 1000);
    var totalElevators = Math.ceil(elevators / columns) * columns;
    quotedElevators = totalElevators;

    if(totalElevators > 1){
        document.getElementById(`${quoteType}total`).innerHTML = totalElevators;
        document.getElementById(`${quoteType}plural`).innerHTML = "s";
    }else {
        document.getElementById(`${quoteType}total`).innerHTML = "1";
    }
}

// Set elevators for Commercial
function setElevators(){
    var elevators = parseInt($("#commercialelevators").val());
    quotedElevators = elevators;
}

// Display appropriate product card via the select element
var selector = document.getElementById("project_type");
var selection;
var quotedElevators;

selector.addEventListener("change", function(){
    selection = selector.value;
    $(".quoter").fadeOut();
    isElevatorSelectionShowing = false;
    isFinalQuoteShowing = false;
    var curProductCard = "#" + selection;
    var $curProductCard = $(curProductCard);
    setTimeout(() => {  $curProductCard.fadeIn(); }, 600);
    if(selection === "residential"){
        recommendResidential();
    }else if(selection !== "commercial") {
        recommendElevators(selection);
    }else {
        setElevators();
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

// Recalculate pricing for Commercial
$("#commercialelevators").change(function(){
    setElevators();
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

// Final Calculator
function updateTotal(){
    var selectedElevator = document.querySelector('input[name="elevatortype"]:checked').value;
    if(selectedElevator === "standard"){
        var elevatorPrice = quotedElevators * 7565;
        var elevatorString = elevatorPrice.toFixed(2);
        document.getElementById("selectedtype").innerHTML = "Standard";
        document.getElementById("productprice").innerHTML = elevatorString;
        var installationPrice = elevatorPrice * 0.1;
        var installationString = installationPrice.toFixed(2);
        document.getElementById("installationprice").innerHTML = installationString;
        var totalPrice = elevatorPrice + installationPrice;
        var totalString = totalPrice.toFixed(2);
        document.getElementById("totalprice").innerHTML = totalString;
    } else if(selectedElevator === "premium"){
        var elevatorPrice = quotedElevators * 12345;
        var elevatorString = elevatorPrice.toFixed(2);
        document.getElementById("selectedtype").innerHTML = "Premium";
        document.getElementById("productprice").innerHTML = elevatorString;
        var installationPrice = elevatorPrice * 0.13;
        var installationString = installationPrice.toFixed(2);
        document.getElementById("installationprice").innerHTML = installationString;
        var totalPrice = elevatorPrice + installationPrice;
        var totalString = totalPrice.toFixed(2);
        document.getElementById("totalprice").innerHTML = totalString;
    } else {
        var elevatorPrice = quotedElevators * 15400;
        var elevatorString = elevatorPrice.toFixed(2);
        document.getElementById("selectedtype").innerHTML = "Excelium";
        document.getElementById("productprice").innerHTML = elevatorPrice;
        var installationPrice = elevatorPrice * 0.16;
        var installationString = installationPrice.toFixed(2);
        document.getElementById("installationprice").innerHTML = installationString;
        var totalPrice = elevatorPrice + installationPrice;
        var totalString = totalPrice.toFixed(2);
        document.getElementById("totalprice").innerHTML = totalString;
    }
};

// Displays Final Quote

var isFinalQuoteShowing = false;

$("#calculate").click(function(){
    if(isFinalQuoteShowing === false){
        updateTotal();
        $("#finalquote").fadeIn();
        isFinalQuoteShowing = true;
    }
    else{
        updateTotal();
    }
})
