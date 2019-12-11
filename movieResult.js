class movieResult {
    constructor() {
        
        this.processOmdbResponse = this.processOmdbResponse.bind(this);
        this.getMovieInfo = this.getMovieInfo.bind(this);
    }

    addEventHandler() {
        $('#searchButton').on('click', this.getMovieInfo);
        $('.modalCloseButton').on('click', this.closeModal);
    }

    getMovieInfo() {
        var ajaxConfigObject = {
            dataType: 'json',
            url: "http://www.omdbapi.com/?i=tt3896198&apikey=6c2d937e",
            method: 'GET',
            data: {
                s: $('#searchInput').val()
            },
            success: this.processOmdbResponse,
            error: console.log
        };
        $.ajax(ajaxConfigObject)
    }

    processOmdbResponse(response) {
        for (var i = 0; i < response.Search.length; i++) {
            var movieTitle = response.Search[i].Title;
            var movieType = response.Search[i].Type;
            var releaseYear = response.Search[i].Year;
            var moviePoster = response.Search[i].Poster;
            var makeMovieClass = new Movie(movieTitle, movieType, releaseYear, moviePoster, this.displayModal);
            console.log('make movie class', makeMovieClass)
            // if (response.Search[i].Poster === 'N/A') {
            //     var noPosterDiv = $('<div>').text(response.Search[i].Title).addClass('moviePoster');
            //     $('.resultContainer').append(noPosterDiv);
            // } else {
            //     var posterDiv = $('<div>').css('background-image', 'url(' + response.Search[i].Poster + ')').addClass('moviePoster').attr({'title': response.Search[i].Title}).attr({'type': response.Search[i].Type}).attr({'year': response.Search[i].Year});
            //     $('.resultContainer').append(posterDiv);
        }
    }
    
    processOmdbError(response) {
        console.log(response);
    }
    
    resetInput(){
        $('#searchInput').val("");
    }

    closeModal(){
        $('#movieInfoModal').addClass('hidden');
    }

    displayModal(){
        
        $('#movieInfoModal').removeClass('hidden');

        
    }
}
