
var count=0;

$(document).ready(function () {
$("#second").hide();
$("#third").hide()
$("#fourth").hide()
$("#comments").hide();
})


$(document).on("click",".choices",function(){
    count++;
    if (count===1) {
        $("#first").hide(); 
        setTimeout(function(){ $("#second").show(); }, 3000);
        $("#storytext").append(`<p>A beautiful unicorn appears in front of him and begin to charge at him</p>`)
       

    }
    else if (count===2) {
        $("#second").hide();
        setTimeout(function(){ $( $("#third").show()).show(); }, 3000);
        $("#storytext").append(`<p>sam is so paralysed that he couldn’t move a finger and yell : ""Mr Trump make me strong again!!!</p>`)
       
        
    }
    else if (count===3) {
        $("#third").hide();
        setTimeout(function(){ $($("#fourth").hide()).show(); }, 3000);
        $("#storytext").append(`<p>Catwoman and blackwidow came to the rescue</p>`)
        
    }
    else{console.log("not ready");}

})


$(document).on("click","#submitCom",function(){

   
    var comment=$("#cmText").val().trim();
    var htmlcomment=`   <div class="mt-2 ml-3 card" style="width: 80rem;">
    <div class="card-body">
      <h5 class="card-title">Edison77</h5>
      
      <p class="card-text"><i>${comment}</i></p>                    
    </div>
  </div>`


  $("#comments").show();
  $("#comments").append(htmlcomment);

  
 
})