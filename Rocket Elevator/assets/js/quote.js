// Calculate recommended elevators for Residential

function recommendResidential(){
    var floors = $("#resfloors").val();
    var apartments = $("#resapartments").val();
    var apartmentsByFloor = Math.ceil(apartments / floors);
    var elevators = Math.ceil(apartmentsByFloor / 6);
    var numColumns = Math.ceil(floors / 20);
    var totalElevators = elevators * numColumns;
    var isPlural = "s";

    if(totalElevators > 1){
        document.getElementById("restotal").innerHTML = totalElevators;
        document.getElementById("resplural").innerHTML = isPlural;
    }else {
        document.getElementById("restotal").innerHTML = "1";
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
    }
})

// Recalculate recommended elevators for residential when steppers change
$(".resinput").change(function(){
    recommendResidential();
});