
/**   
  document.getElementById("Click").addEventListener("submit", myFunctions);

function myFunctions() {
  alert("The form was submitted");
}
    function myFunctiones() {
      var x = document.getElementById("Presiona");
      if (x.style.display == "none" ) {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    }
    
function myFunction() {
  document.getElementById("myDIV").style.backgroundColor = "#F1B0E8";
}

doco$.ajax({
  url: 'https://randomuser.me/api/',
  dataType: 'json',
  success: function(data) {
    console.log(data);
  }
});
*/
/** 
const collection = document.getElementsByClassName("fondo");
for (let i=0; i <collection.length; i++){
  collection [i].style.backgroundColor = "#E67FD8";
 NO ME FUNCIONO
}
TAMPOCO ME FUNCIONO EN CHECK BUTTON
*/
/** 
<button onclick="myFunction()" id="myDIV">Cambiar Fondo de Color</button>

<script>
  function myFunction() {
document.getElementById("myDIV").style.backgroundColor = "#F1B0E8";
}
</script>

document.getElementById('boton').addEventListener('click', function() {
  document.body.style.backgroundColor = '#E67FD8'
})

document.getElementById('boton_default').addEventListener('click', function() {
  document.body.style.backgroundColor = '#E67FD8'
});
<button type="button" id="boton_default">Restablecer fondo</button>

*/
