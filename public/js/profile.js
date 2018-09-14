let id;
let name;
let imageUrl;


$(document).ready(function () {
    $("#profile").empty();
    console.log("Hello Profile");

    var userUId = $.cookie('uid');
    var userId = $.cookie('userId');
    var userImg = $.cookie('userImg');
    console.log("userId cookie is: ", userId);

    if (userUId) {
        console.log(userUId);
        $.get("/api/uid/" + userUId).then(
            function (data) {
                console.log(data);
                console.log(" id for this user is : ", data.id);
                id = data.id;
                name = data.userName;
                imageUrl = data.imageURL;
                // create cookie userId for all the pages
                $.cookie('userId', data.id, { expires: 7, path: '/' });
                $.cookie('userImg', imageUrl, {expires: 7, path: '/'});
                $("#profile").html(`<h2>Welcome ${name} </h2>`)

                RetrieveUserInfo(id);
                $("#userImg").attr("src", $.cookie('userImg'));
            })

    }
    else if (userId) {
        console.log("userId is : ", userId)
        RetrieveUserInfo(userId);

    }
    else {
        alert("no user sign-in, no profile to display!");
        console.log("error sign-in");
        window.location.replace('login.html')
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
            var story = data.Stories[s];
            $("#myStoryList> tbody").append(`<tr class="fables"><td class="col-md-2" style="font-size: 70%">${data.Stories[s].title}</td><td class="col-md-2" style="font-size:70%">${data.Stories[s].settings}`
                + `</td><td class="col-md-5" style="font-size: 70%">${data.Stories[s].storyText}</td><td class="col-md-1" style="font-size: 70%">${data.Stories[s].Category.catName}</td><td class="col-md-1">`
                + `<button class="btn viewStoryBtn" id="story${data.Stories[s].id}-Btn" value="${data.Stories[s].id}">View Full Story</button></td></tr>`)
        }

 

        for (var f in data.Fragments) {
            $("#myFrags").append(`<p>we found :  ${data.Fragments[f].fragmentText} as a fragment of story id : ${data.Fragments[f].StoryId}<p>`)
        }

    })


}