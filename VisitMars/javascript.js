  
let form = document.getElementById("myForm");

function submit() {
    $("#formSent").show()
    form.reset();
}

$(document).ready(function() {
    $("#formSent").hide()
    
    $("#closeAlert").click(function() {
        $("#formSent").hide()
      
    })
})





