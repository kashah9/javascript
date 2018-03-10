var content = document.getElementById("content");
var button = document.getElementById("show-more");
// function showMessage(){
//     contentVar.className = "show";
// }

// setTimeout(showMessage, 3000);
button.onclick = function(){
    button.onclick = function(){
      if(content.className == "open"){
          //shrink 
          content.className = " ";
          button.innerHTML = "Show More"

      }  
      else {
          content.className = "open";
          button.innerHTML = "Show Less";
      }
    };
}