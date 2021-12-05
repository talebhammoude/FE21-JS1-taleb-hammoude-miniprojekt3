const KEY = '313698e5d41cebecef7dd7a6fb93043d';
let searchText = '';

const searchField = document.querySelector("#searchpic");
const searchButton = document.querySelector("#searchBtn");
const displayPic = document.querySelector("#pics")



async function getData () {
    const url = `https://www.flickr.com/services/rest/?api_key=${KEY}&method=flickr.photos.search&text=${searchText}&format=json&nojsoncallback=1&per_page=1&page=1`;
    
    const response = await fetch(url);
    const data = await response.json();

    return data;
}




searchField.addEventListener("input", (e)=> {
   searchText =  e.target.value;
   
})



function search () {
    searchButton.addEventListener("click", ()=> {
        
        console.log(searchText);


        getData().then((data)=>{
            
            manageTheData(data.photos.photo[0]);
        });
        

        

    })
}




function manageTheData(photoObject) {

    let photo = photoObject;
    let size = 'm';
    let imgUrl = `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}_${size}.jpg`;

    let img = document.createElement('img');
    img.src = imgUrl;

    displayPic.appendChild(img);

 
}



search();