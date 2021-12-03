const KEY = '313698e5d41cebecef7dd7a6fb93043d';
let searchText = '';


const searchField = document.querySelector("#searchpic");
const searchButton = document.querySelector("#searchBtn");


searchField.addEventListener("input", (e)=> {
   searchText =  e.target.value;
   
})



function search () {
    searchButton.addEventListener("click", ()=> {
        
        console.log(searchText);

        manageTheData();


    })
}





async function getData () {
    const url = `https://www.flickr.com/services/rest/?api_key=${KEY}&method=flickr.photos.search&text=${searchText}&format=json&nojsoncallback=1&per_page=1&page=1`;
    
    const response = await fetch(url);
    const data = await response.json();

    return data;
}



function manageTheData() {
    getData().then((data)=>{
        console.log(data);
    });
}



search();