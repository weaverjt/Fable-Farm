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








