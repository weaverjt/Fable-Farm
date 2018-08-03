let id;
let name;
let imageUrl;

/* profContent

$(document).ready(function(){
    console.log("hello world");
    $.get("/api/stories",function(data){
         
        console.log(data);
        for (var i in data){
            
            $("#storyList> tbody").append(`<tr class="fables"><td class="col-md-2" style="font-size: 70%">` + data[i].title + '</td><td class="col-md-2"  style="font-size: 70%">' +
            data[i].settings + `</td><td class="col-md-4" style="font-size: 70%">` + data[i].storyText + `</td><td class="col-md-1"  style="font-size: 70%">` + data[i].Category.catName 
            + `</td><td class="col-md-1">` + `<button class="btn createNewFrag" value="${i+1}"  style="font-size: 70%">Add To Story</button></td><td class="col-md-2"  style="font-size: 70%">`
            + `<button id="story${i+1}-Btn" class="btn viewStoryBtn" value="${i+1}">View Full Story</button>` + "</td></tr>");
            

        }

    });
})

*/

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
                $("#profile").html(`<h3>Welcome ${name} </h3>`)

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

        // for (var i in data) {

        //     $("#storyList> tbody").append(`<tr class="fables"><td class="col-md-2" style="font-size: 70%">` + data[i].title
        // + '</td><td class="col-md-2"  style="font-size: 70%">' +
        //         data[i].settings + `</td><td class="col-md-4" style="font-size: 70%">` + data[i].storyText
        // + `</td><td class="col-md-1"  style="font-size: 70%">` + data[i].Category.catName
        //         + `</td><td class="col-md-1">` 
        // + `<button class="btn createNewFrag" value="$${data[i].id}" style="font-size: 70%">Add To Story</button></td>
        //<td class="col-md-2"  style="font-size: 70%">`
        //         + `<button id="story${data[i].id}-Btn" class="btn viewStoryBtn" value="${data[i].id}">View Full Story</button>`
        // + "</td></tr>");


        // }

        for (var f in data.Fragments) {
            $("#myFrags").append(`<p>we found :  ${data.Fragments[f].fragmentText} as a fragment of story id : ${data.Fragments[f].StoryId}<p>`)
        }

    })


}