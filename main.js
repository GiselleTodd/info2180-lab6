window.onload = function() {

  var searchButton = document.getElementById("seachButton");
  console.log (searchButton);

  searchButton.onclick = function(){
      var xHttp = new XMLHttpRequest();
      var url = "request.php?q=definition";
      xHttp. onreadystatechange = function(){
          if (xHttp.readyState === XMLHttpRequest.DONE){
              if (xHttp.status === 200){
                alert(xHttp.responseText);

              }

          }

      }



      xHttp.open("GET", url, true);
      xHttp.send();

  }
  
}
  


