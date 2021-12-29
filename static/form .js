$(document).ready(function(){
    $('form').on('submit', function(event){
        //code goes here
        $.ajax({
            data : {
                'name': $("#nameInput").val(),
                'email': $("#emailInput").val(),
                'tel': $("#telInput").val(),
                'contribution':$("contributionInput").val()

            },
            type: 'POST',
            url: '/process'

        })//end ajx
        .done(function(data){
            if (data.error){

                //TODO
                $("#errorAlert").text(data.error).show();
                $("#errorAlert2").hide();
                $("#successAlert").hide();
            
            }
            else if (data.error2){
                $("#errorAlert2").text(data.error2).show();
                $("#errorAlert").hide();
                $("#successAlert").hide();
            }
            else if (data.error2){
                $("#errorAlert2").text(data.error2).show();
                $("#errorAlert").hide();
                $("#successAlert").hide();
            }
            else if (data.error2){
                $("#errorAlert2").text(data.error2).show();
                $("#errorAlert").hide();
                $("#successAlert").hide();
            }

            else{
                //TODO
                $("#successAlert").text(data.name).show();
                $("#errorAlert2").hide();
                $("#errorAlert").hide();
                
            }

        });
        // prevents the form from submitting
        event.preventDefault();
    })// end on submit

});// end ready