// Display appropriate product card via the select element
var selector = document.getElementById("project_type");
var selection;

selector.addEventListener("change", function(){
    selection = selector.value;
    console.log(selection);
    $(".quoter").fadeOut();
    var curProductCard = "#" + selection;
    var $curProductCard = $(curProductCard);
    setTimeout(() => {  $curProductCard.fadeIn(); }, 600)
})

