$(document).ready(() => {
    
    /// More ...
    
    $("#exit").hide();

    var Entered;

    $("#enter").on("click", ()=>{
        $("#exit").show();
        $("#enter").hide();
        $("#menu").show();
    });

    $("#exit").on("click", ()=>{
        $("#enter").show();
        $("#exit").hide();
        $("#menu").hide();
    });

});