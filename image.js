function emptyCheck(data, childNode, parentNode,innerTxt)
{
    if(data.length === 0)
    {
        let header = document.createElement("h1");
        header.innerText = innerTxt;
        header.style.top = 250+"px";
        header.style.left = 250+"px";
        header.style.position = "fixed";
        childNode.appendChild(header);
    }else{
        for(let i=0;i<data.length;i++){
            let image = document.createElement("img");
            image.src=data[i].url;
            image.title = data[i].id;
            image.alt = "blank";
            childNode.appendChild(image);
        }
    }
    parentNode.appendChild(childNode);
}
function urlCall(url,innerTxt){
    $.get({
        headers:{
            'x-api-key':'a5bad40d-b72c-4716-aac2-ea2dbf9b4b3c'
        },
        url: url},
        function (data, textStatus, jqXHR) {
        return new Promise((resolve, reject)=>{
            setTimeout(()=>{
                if(textStatus === "success"){   
                    let imageSection = document.querySelector(".imagesec"); 
                    let parentNode = document.querySelector(".overview");
                    if(imageSection !== null) 
                        parentNode.removeChild(imageSection);
                    let childNode = document.createElement("div");
                    childNode.className="imagesec";
                    emptyCheck(data,childNode,parentNode,innerTxt);
                    resolve(data);
                }
                else{
                    reject("There is an error");
                }
            },1000);
        })
    });
}

window.addEventListener("load",function(e){
    let url = "https://api.thecatapi.com/v1/images/search?limit=10&size=med&order=ASC";
    let innerTxt = "Oops! There is no image in public gallery."
    $(document).ready(function () {			
        urlCall(url,innerTxt);
    });
},false);
        

document.querySelector(".search button").addEventListener("click", function(e){
    let searchValue = document.querySelector(".search input").value;
    let url = "https://api.thecatapi.com/v1/images/search?limit=10&size=med&Order=ASC&breed_id="+searchValue;
    let innerTxt = "Oops! There is no image for your search in public gallery.";
    $(document).ready(function () {			
        urlCall(url,innerTxt);
    });
},false);


document.querySelector(".search input[type='text']").addEventListener("keyup", function(e){
    let searchValue = document.querySelector(".search input").value;
    let url = "https://api.thecatapi.com/v1/images/search?limit=10&size=med&Order=ASC&breed_id="+searchValue;
    let innerTxt = "Oops! There is no image for your search in public gallery.";
    $(document).ready(function () {			
        urlCall(url,innerTxt);
    });
},false);
