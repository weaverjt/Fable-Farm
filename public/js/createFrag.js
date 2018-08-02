
$(document).on("click", "#submitFrag", function () {

    var userId = $.cookie('userId')

    if (userId) {
        console.log("submit yeaaahhh");
        var data = {
            UserId: userId,
            StoryId: $("#storyId").val().trim(),
            fragmentText: $("#fragText").val().trim(),
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
        window.location.href("/login");
    }


})
