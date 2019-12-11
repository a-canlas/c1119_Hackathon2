$(document).ready(initializeApp);


function initializeApp(){
    $('#searchButton').on('click', getInfo);
    $('.resultContainer').on('click', '.moviePoster', handleShowModal);
    $('.modalCloseButton').on('click', handleCloseModal)
}

function getInfo(){
    var searchInputValue = $('#searchInput').val();
    var movieSearch = new movieResult(searchInputValue);

}

function handleShowModal(){
    $('#movieInfoModal').removeClass('hidden');
}

function handleCloseModal(){
    $('#movieInfoModal').addClass('hidden');
}