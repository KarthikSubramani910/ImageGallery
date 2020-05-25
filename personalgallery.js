window.addEventListener("load",function(e){
    let url = "https://api.thecatapi.com/v1/images?limit=10&order=ASC";
    let innerTxt = "Oops! There is no image in your gallery."
    $(document).ready(function () {			
        urlCall(url,innerTxt);
    });
},false);

document.querySelector(".search button").addEventListener("click", function(e){
    let searchValue = document.querySelector(".search input").value;
    let url = "https://api.thecatapi.com/v1/images?limit=10&order=ASC&original_filename="+searchValue;
    let innerTxt = "Oops! There is no image for your search in your gallery.";
    $(document).ready(function () {			
        urlCall(url,innerTxt);
    });
},false);