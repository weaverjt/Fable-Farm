$(document).ready(function(){
    console.log("hello world");
    $.get("/api/stories",function(data){
         
        console.log(data);
        for (var i in data){

            $("#storyList> tbody").append(`<tr><td class="col-md-2">` + data[i].title + '</td><td class="col-md-2">' +
            data[i].settings + `</td><td class="col-md-3">` + data[i].storyText + `</td><td class="col-md-1">` + data[i].Category.catName 
            + `</td><td class="col-md-2">` + `<button class="createNewFrag" value="${data[i].id}">Add To Story</button></td><td class="col-md-2">`
            + `<button id="story${data[i].id}-Btn" class="viewStoryBtn" value="${data[i].id}">View Full Story</button>` + "</td></tr>");
            

        }

    });
})


$(document).on("click",".viewStoryBtn",function(){
    event.preventDefault(); 
    var storyID = $(this).val();
    location.replace(/stories/ + storyID);
}
)

$(document).on("click",".createNewFrag",function(){
    event.preventDefault(); 
    var storyID = $(this).val();
    location.replace(/createFrag/ + storyID);
}
)





