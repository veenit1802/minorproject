
function openwindowmaster()
{
  document.write("<textarea></textarea>")
   this.className="highlight";
}

    function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "more"; 
      moreText.style.display = "none";
      moreText.style.outline="none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "less"; 
      moreText.style.outline="none";
      moreText.style.display = "inline";
    }
  }