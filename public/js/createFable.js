
$(document).ready(function () {
    console.log("hello world");
    SetDropDownCat();
})


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
        $(".dropGenre").append(select);

        for (var i in data) {
            console.log("Cat name :", data[i].catName);
            console.log("id : ", data[i].id);
        }
    })
}

$(document).on("click", "#createStory", function () {

    console.log("clicked");
    var newStory = {

        title: $("#title").val().trim(),
        settings: $("#setting").val().trim(),
        storyText: $("#opening").val().trim(),
        CategoryId: $("#drpCat option:selected").val().trim(),
        UserId: $.cookie('userId') //value by default , will change when UID firebase available!!!
    }

    $.post("/api/story", newStory, function (data) {
        console.log("Story successfully created!");
        window.location.replace("/fables");
        
    })

    // $.ajax({
    //     method: "POST",
    //     url: "/api/story/",
    //     data : newStory
    //   })
    //     .then(function() {
    //      console.log(" Story created Successfully!!");
    //     });
}
)
