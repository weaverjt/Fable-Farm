//var firebaseId = require("./app");
//https://github.com/carhartl/jquery-cookie

$(document).ready(function () {
    console.log("hello world");
    SetDropDownUser();
    SetDropDownCat();

    var userUId = $.cookie('uid');
    console.log(userUId);
    $.removeCookie('uid'); // remove cookie
    $.get("/api/uid/" + userUId, function (data) {
        console.log(" id for this user is : ", data.id);
        $.cookie('userId', data.id, { expires: 7, path: '/' }); // create a cookie of userid for all the pages.
    })
})

function SetDropDownUser() {
    $.get("/api/user", function (data) {

        console.log(data);

        var select = $("<select>");
        select.attr("id", "drpUsers");
        var options;

        for (var index in data) {
            options = $("<option>");
            options.val(data[index].id);
            options.text(data[index].userName);
            select.append(options);
        }
        $(".dropdown_users").append(select);

        for (var i in data) {
            console.log("name :", data[i].userName);
            console.log("id : ", data[i].id);
        }
    })
}


function SetDropDownCat() {
    $.get("/api/category", function (data) {

        console.log(data);

        var select = $("<select>");
        select.attr("id", "drpCat");
        var options;

        for (var index in data) {
            options = $("<option>");
            options.val(data[index].id);
            options.text(data[index].catName);
            select.append(options);
        }
        $(".dropdown_cat").append(select);

        for (var i in data) {
            console.log("Cat name :", data[i].catName);
            console.log("id : ", data[i].id);
        }
    })
}



$(document).on("click", "#checkUser", function () {
    $("#charContainer").empty();
    $("#storyContainer").empty();
    $("#fragContainer").empty();

    console.log("helloooo");
    console.log("user selected is :", $("#drpUsers option:selected").text());
    console.log("user id is : ", $("#drpUsers option:selected").val());

    var userId = $("#drpUsers option:selected").val().trim();

    $.get("/api/users/" + userId, function (data) {
        console.log(data);



        for (var c in data.Characters) {
            $("#charContainer").append(`<p>we found :  ${data.Characters[c].charName} as a character</p>`)
        }

        for (var s in data.Stories) {
            $("#storyContainer").append(`<p>we found that you are the ADMIN/CREATOR :  ${data.Stories[s].title}</p>`)
        }

        for (var f in data.Fragments) {
            $("#fragContainer").append(`<p>we found :  ${data.Fragments[f].fragmentText} as a fragment of story id : ${data.Fragments[f].StoryId}<p>`)
        }

    })

})

$(document).on("click", "#sortCat", function () {
    $("#storiesContainer").empty();


    var catId = $("#drpCat option:selected").val().trim();

    $.get("/api/category/" + catId, function (data) {
        console.log(data);

        for (var s in data.Stories) {
            $("#storiesContainer").append(`<p>we found :  ${data.Stories[s].title} as a Story</p>`);
            var newbutton = $("<button>");
            newbutton.attr("value", data.Stories[s].id);
            newbutton.addClass("storiesButtons");
            newbutton.text("more info");
            $("#storiesContainer").append(newbutton);
        }

    })

})


$(document).on("click", ".storiesButtons", function () {
    console.log("clicked");
    $("#adminContainer").empty();
    var htmlText = "";
    var newStoryId = ($(this).val());
    console.log(newStoryId);

    $.get("/api/story/" + newStoryId, function (data) {

        console.log("inside stories",data);

        htmlText = `<p>Admin user id : ${data.UserId} - for story Id: ${data.id}</p>`

        for (var f in data.Fragments) {
            htmlText += `<p> <button id="choose" class="chooseButton" value="${data.Fragments[f].id}"> select me</button> fragment ${f} : ${data.Fragments[f].fragmentText} <button id="frag${data.Fragments[f].id}" class="fragButtons" value="${data.Fragments[f].id}"> delete? </button></p>`
        }
        console.log(htmlText);
        $("#adminContainer").append(htmlText);

    })

})

$(document).on("click", ".chooseButton", function () {
    console.log("enter choose");
    var chooseId = ($(this).val());
    console.log(chooseId);

    console.log(`frag${chooseId}`);

    $(`#frag${chooseId}`).attr("disabled", "disabled");

    var data = { "status": "true" }
    // update fragments status to "true"
    $.ajax({
        method: "PUT",
        url: "/api/fragment/" + chooseId,
        data: data
    })
        .then(function () {
            console.log("updated");
        });
})

$(document).on("click", ".fragButtons", function () {
    console.log("enter fragggg");
    var fragId = ($(this).val());
    console.log(fragId);

    $.ajax({
        method: "DELETE",
        url: "/api/fragment/" + fragId,

    })
        .then(function () {
            console.log(" fragment deleted");
        });
})



$(document).on("click", "#submitFrag", function () {

    console.log("submit yeaaahhh");
    var data = {
        UserId: $("#userId").val().trim(),
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
})

