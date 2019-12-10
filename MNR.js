$(document).ready(initializeApp);

function initializeApp(){
    $('#searchButton').on('click', getInfo);
}

function getInfo(){
    var searchInputValue = $('#searchInput').val();
    console.log(searchInputValue);
    var movieSearch = new movieResult(searchInputValue);

}