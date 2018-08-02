$(document).ready(function(){
    console.log("hello world");
    $.get("/api/stories",function(data){
         
        console.log(data);
        for (var i in data){

            $("#storyList> tbody").append("<tr><td>" + i + "</td><td>" + data[i].title + "</td><td>" +
            data[i].settings + "</td><td>" + data[i].storyText + "</td><td>" + data[i].Category.catName 
            + "</td><td>" + "<button>Create Frag</button>"+"</td><td>" +"<button>View Full Story</button>" + "</td></tr>");
            

        }

    });
})








