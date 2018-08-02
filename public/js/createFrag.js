
$(document).on("click","#submitFrag",function(){
    console.log("clicked");
    var userId=$.cookie('userId')
     console.log(userId);

   var urlfilter=window.location.hash;

   console.log("urlfilter",urlfilter);

   var storyId = urlfilter.slice(1); 
   
   console.log(storyId);

     


    if(userId) {
        console.log("submit yeaaahhh");
        var data={
            UserId: userId,
            StoryId: storyId,
            fragmentText:$("#fragText").val().trim(),
            status: $("#status option:selected").val(),
    
        };
    
        console.log(data);
    
        $.ajax({
            method: "POST",
            url: "/api/fragment/",
            data : data
          })
            .then(function() {
             console.log(" Post added");
            });
    }

    else
    {
        alert("you are not logged in , please log-in first");
        location.replace("/");
    }


})
