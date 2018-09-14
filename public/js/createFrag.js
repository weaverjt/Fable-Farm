let storyId="";
let authorId="";

$(document).ready(function () {
    if(!($.cookie('userId'))){
        alert("please log-in first");
        window.location.replace("/");
    }

    //$("#admin").hide(); 
    console.log("hello");
    var urlfilter=window.location.hash;
    console.log(urlfilter);
    storyId= urlfilter.slice(1); 
    console.log(storyId);
    var fragHTML="";


    $.get("/api/story/" + storyId, function (data) {

        //console.log("inside stories",data);
        authorId=parseInt(data.UserId);
        var cookieId=parseInt($.cookie('userId'));
        console.log("author  :",authorId);
        console.log("cookie id : ",cookieId);


        if (authorId !== cookieId)
        {
            $("#admin").hide();  // hide question admin          
        }
        // Link Author and Story 
        $("#author").html(`Author : ${data.User.userName}`);
        $("#story").html(data.title);
        $("#setting").html(data.settings);
        $("#storyText").html(data.storyText);
        
        for (var f in data.Fragments) {   
            
            fragHTML += `       <div class="card col-5 m-2 float-left">
            <div class="card-header">
            Story #${storyId} 
            </div>
            <div class="card-body">
            <h5 class="card-title">Fragment id#${data.Fragments[f].id} </h5>
            <p id="content${f}" class="card-text">${data.Fragments[f].fragmentText}</p>
            <button type="button" class="btn btn-primary">                
                    <span class="sr-only">likes counter</span>
                    <span class="icon is-large has-text-danger"><i class="far fa-thumbs-up"></i></span>
                    Like <span class="badge badge-light">9</span>
            </button>
            <button type="button" class="btn btn-danger">
                
                    <span class="sr-only">dislikes counter</span>
                    <span class="icon is-large has-text-danger"><i class="far fa-thumbs-down"></i></span>
                    DisLike <span class="badge badge-light">9</span></button>

            <button type="button" class="btn btn-light choices" value="${f}" style="display:none">
            <span class="icon is-large has-text-danger"><i class="far fa-hand-point-right"></i>
            Choose Me 
    </button>
            
            </div>
        </div>`;
        
    }
       // console.log(fragHTML);     
        $("#fragmentContainer").append(fragHTML);

    })

})

$(document).on("click","#submitFrag",function(){
    console.log("clicked");
    var userId=$.cookie('userId')
     console.log(userId);
     console.log(storyId);     


    if (userId) {
        console.log("submit yeaaahhh");
        var data = {
            UserId: userId,
            StoryId: storyId,
            fragmentText:$("#fragText").val().trim(),
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
              

                 // create new html fragment and append it
                
                var newFrag= `       <div class="card col-5 m-2 float-left">
                <div class="card-header">
                Story #${storyId} 
                </div>
                <div class="card-body">
                <h5 class="card-title">your post</h5>
                <p class="card-text">${$("#fragText").val().trim()}</p>
                <button type="button" class="btn btn-primary">                
                        <span class="sr-only">likes counter</span>
                        <span class="icon is-large has-text-danger"><i class="far fa-thumbs-up"></i></span>
                        Like <span class="badge badge-light">0</span>
                </button>
                <button type="button" class="btn btn-danger">
                    
                        <span class="sr-only">dislikes counter</span>
                        <span class="icon is-large has-text-danger"><i class="far fa-thumbs-down"></i></span>
                        DisLike <span class="badge badge-light">0</span>
                </button><button class="float-right" id="delete">Delete</button>
                
                </div>
            </div>`;
            $("#fragmentContainer").append(newFrag);         
           
            });
    }
    else {
        alert("you are not logged in , please log-in first");
        location.replace("/");
    }


})



$(document).on("click","#submitChoice",function(){
 $(".choices").css("display","inline-block"); 
})

$(document).on("click",".choices",function(){
    var fragchoice= $(this).val();

    console.log(fragchoice);
    //var temp=`"#content${fragchoice}"`
    var temp=`#content${fragchoice}`
    console.log("temp: ",temp);
  
    var fragToAdd= $(temp).html($(temp).html());
    console.log(fragToAdd[0].innerText);
    $("#fragmentContainer").empty();
    $("#storyText").append(fragToAdd);
    $("#admin").empty();
    $("#admin").hide();


   
})