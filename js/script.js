$(document).ready(function () {
    $(".design_icon").click(function () {
        $("#design-p").toggle();
    });
    $(".dev_icon").click(function () {
        $("#development").toggle();
    });
    $(".product_icon").click(function () {
        $("#pmanagent").toggle();
    });
    $("#submit").click(function(){
        event.preventDefault()
        var name=$("#name").val();
        var email=$("#email").val();
        var message=$("#message").val();
        if(name==""|| email=="" || message==""){
            $("#results").html("please fill all fields in this form");
            $("#results").css('background-color', 'red')
        } else{
            $("#results").html(name + " we have received your message. thank you for reaching out to us");
            $("#results").css('background-color', 'green')
            $("form")[0].reset(); 
             }
    });
});