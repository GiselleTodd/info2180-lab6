window.onload = function() {
  let url = "https://info2180-lab6-gist.c9users.io/request.php?q=definition"
  let search = document.getElementById("#search-button").addEventListener("click", function() {
    let defRequest = new XMLHttpRequest();
    defRequest.onreadystatechange = function(){
           
          if (defRequest.readyState === 4 && defRequest.status == 200){
              alert (defRequest.responseText);

          }
        
      }
      defRequest.open('GET', 'request.php', true);
      defRequest.send();

    });
``
    
  }
  


