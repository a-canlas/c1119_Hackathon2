$(document).ready(initializeApp);


function initializeApp(){
    var getMovies = new movieResult();
    getMovies.addEventHandler();
}
// function initializeApp(){
//     $('#searchButton').on('click', getInfo);
//     $('.resultContainer').on('click', '.moviePoster', handleShowModal);
//     $('.modalCloseButton').on('click', handleCloseModal)
// }

// function getInfo(){
//     var searchInputValue = $('#searchInput').val();
//     var movieSearch = new movieResult(searchInputValue);

// }

// function handleShowModal(){
//     console.log(event.currentTarget);
//     $('.modalReleaseDate').text($(event.delegateTarget).data('title'));
//     $('#movieInfoModal').removeClass('hidden');
// }

// function handleCloseModal(){
//     $('#movieInfoModal').addClass('hidden');
// }

