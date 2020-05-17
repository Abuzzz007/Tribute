$(function(){
    $("#Hero").focus(function(event){
        $("#collapseDoctor").collapse('hide');
        $("#collapsePolice").collapse('hide');
        $("#collapseGovt").collapse('hide');
    });
});