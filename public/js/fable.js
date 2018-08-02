$(document).ready(function(){
    console.log("hello world");
    $.get("/api/stories",function(data){
         
        console.log(data);
        for (var i in data){

            $("#storyList> tbody").append("<tr><td>" + i + "</td><td>" + data[i].title + "</td><td>" +
            data[i].settings + "</td><td>" + data[i].storyText + "</td><td>" + data[i].Category.catName 
            + "</td><td>" + `<button id="createNewFrag">Add To Story</button>"+"</td><td>` + `<button id="story${i+1}-Btn">View Full Story</button>` + "</td></tr>");
            

        }

    });
})




$(document).on("click",".viewStoryBtn",function(){
    event.preventDefault(); 
    var storyID = $(this).val();
    location.replace(/stories/ + storyID);
}
)

$(document).on("click",".viewStoryBtn",function(){
    event.preventDefault(); 
    var storyID = $(this).val();
    location.replace(/crateFrag/ + storyID);
}
)