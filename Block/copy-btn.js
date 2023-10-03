let copycdnLink = document.getElementById("copycdnLink");
    let cdnLink = document.getElementById("cdnLink");

    cdnLink.onclick = function () {
      copycdnLink.select();
      document.execCommand("copy");
      cdnLink.innerText = ("copied!");
      cdnLink.style.backgroundColor = "#880000";;
      cdnLink.style.color = "white";;
    }