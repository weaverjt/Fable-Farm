
<<<<<<< HEAD
$(document).on("click","#submitFrag",function(){
    console.log("clicked");
    var userId=$.cookie('userId')
     console.log(userId);

   var urlfilter=window.location.hash;

   console.log("urlfilter",urlfilter);

   var storyId = urlfilter.slice(1); 
   
   console.log(storyId);

     

=======
$(document).on("click", "#submitFrag", function () {

    var userId = $.cookie('userId')
>>>>>>> 0e1701ecbeddd2400f1ef9ae8ad85ce7c57e0659

    if (userId) {
        console.log("submit yeaaahhh");
        var data = {
            UserId: userId,
<<<<<<< HEAD
            StoryId: storyId,
            fragmentText:$("#fragText").val().trim(),
=======
            StoryId: $("#storyId").val().trim(),
            fragmentText: $("#fragText").val().trim(),
>>>>>>> 0e1701ecbeddd2400f1ef9ae8ad85ce7c57e0659
            status: $("#status option:selected").val(),

        };

        console.log(data);

        $.ajax({
            method: "POST",
            url: "/api/fragment/",
            data: data
        })
            .then(function () {
                console.log(" Post added");
            });
    }

    else {
        alert("you are not logged in , please log-in first");
        location.replace("/");
    }


})
