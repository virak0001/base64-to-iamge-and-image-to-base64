function readFile() {
    if (this.files && this.files[0]) {
      var FR= new FileReader();
      FR.addEventListener("load", function(e) {
        document.getElementById("b64").innerHTML = e.target.result;
      }); 
      FR.readAsDataURL( this.files[0] );
    }
  }
  document.getElementById("inp").addEventListener("change", readFile);

//   base64 to image
function base64(){
    var b64 = document.getElementById('b64').innerHTML;
    document.getElementById("imgage").src = b64;
}
var btn = document.getElementById('bs64');
btn.addEventListener('click', base64);
