$(document).ready(function(){
    console.log("hello world");
    $.get("/api/stories",function(data){
         
        console.log(data);
        for (var i in data){
            
            $("#storyList> tbody").append(`<tr><td class="col-md-2">` + data[i].title + '</td><td class="col-md-2">' +
            data[i].settings + `</td><td class="col-md-3">` + data[i].storyText + `</td><td class="col-md-1">` + data[i].Category.catName 
            + `</td><td class="col-md-2">` + `<button class="createNewFrag" value="${i+1}">Add To Story</button></td><td class="col-md-2">`
            + `<button id="story${i+1}-Btn" class="viewStoryBtn" value="${i+1}">View Full Story</button>` + "</td></tr>");
            

        }

    });
})








