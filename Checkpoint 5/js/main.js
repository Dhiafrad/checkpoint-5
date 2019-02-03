$(document).ready(function(){
$("#bold").click(function(){
    console.log($("#text").css("font-weight"));
    if($("#text").css("font-weight")==700){
        $("#text").css("font-weight",400);
    }
    else{
        $("#text").css("font-weight","Bold"); 
    }
});
});
$(document).ready(function(){
    $("#italic").click(function(){
        console.log($("#text").css("font-style"));
        if($("#text").css("font-style")=="italic"){
            $("#text").css("font-style","normal"); 
        }
        else{
            $("#text").css("font-style","italic"); 
        }
    });
    });
 $(document).ready(function(){
    $("#Underline").click(function(){
        console.log($("#text").css("text-decoration"));
        if($("#text").css("text-decoration")=="underline solid rgb(0, 0, 0)"){
         $("#text").css("text-decoration","none solid rgb(0, 0, 0)"); 
        }
        else{
        $("#text").css("text-decoration","underline");
    }
});
});
$("#font").change(function(){
    
    $("#text").css("font-family", $(this).val());
});
$("#size").change(function() {
    $("#text").css("font-size", $(this).val());
});
