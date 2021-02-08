$(document).ready(() => {
    
    /// More ...
    
    $("#exit").hide();

    var Entered;

    $("#enter").on("click", ()=>{
        $("#exit").show();
        $("#enter").hide();
    });

    $("#exit").on("click", ()=>{
        $("#enter").show();
        $("#exit").hide();
    });

});