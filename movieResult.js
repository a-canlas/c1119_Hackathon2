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
            error: this.processOmdbError
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
