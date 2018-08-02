let id;
let name;
let imageUrl;


$(document).ready(function () {
    $("#profile").empty();
    console.log("Hello Profile");

    var userUId = $.cookie('uid');
    var userId = $.cookie('userId');
    console.log("userId cookie is: ", userId);

    if (userUId) {
        console.log(userUId);
        $.get("/api/uid/" + userUId).then(
            function (data) {
                console.log(" id for this user is : ", data.id);
                id = data.id;
                name = data.userName;
                imageUrl = data.imageURL;
                // create cookie userId for all the pages
                $.cookie('userId', data.id, { expires: 7, path: '/' });
                $("#profile").html(`<h3>Welcome ${name} </h3>`)

                RetrieveUserInfo(id);
                $("#userImg").attr("src", imageUrl);
            })

    }
    else if (userId) {
        console.log("userId is : ", userId)
        RetrieveUserInfo(userId);

    }
    else {
        alert("no user sign-in, no profile to display!");
        console.log("error sign-in");
    }


})

function RetrieveUserInfo(id) {
    $("#charContainer").empty();
    $("#storyContainer").empty();
    $("#fragContainer").empty();

    console.log("welcome : ", name);

    console.log("user id is : ", id);

    $.get("/api/users/" + id, function (data) {
        console.log(data);

        // for (var c in data.Characters) {
        //     $("#charContainer").append(`<p>we found :  ${data.Characters[c].charName} as a character</p>`)
        // }

        for (var s in data.Stories) {
            $("#myStoryList").append(`<p>we found that you are the ADMIN/CREATOR :  ${data.Stories[s].title}</p>`)
        }

        for (var f in data.Fragments) {
            $("#myFrags").append(`<p>we found :  ${data.Fragments[f].fragmentText} as a fragment of story id : ${data.Fragments[f].StoryId}<p>`)
        }

    })


}