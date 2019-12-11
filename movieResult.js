class movieResult {
    constructor() {

        this.processOmdbResponse = this.processOmdbResponse.bind(this);
        this.getMovieInfo = this.getMovieInfo.bind(this);
        this.getNewsInfo = this.getNewsInfo.bind(this);
        this.newsResponse = this.newsResponse.bind(this);
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
        // console.log('response', response.Search.length);
        $('.resultContainer').empty();
        for (var i = 0; i < response.Search.length; i++) {
            var movieTitle = response.Search[i].Title;
            var movieType = response.Search[i].Type;
            var releaseYear = response.Search[i].Year;
            var moviePoster = response.Search[i].Poster;
            var makeMovieClass = new Movie(movieTitle, movieType, releaseYear, moviePoster, this.displayModal);
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

    getNewsInfo() {
        var ajaxConfigObject = {
            dataType: 'json',
            url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs",
            method: 'GET',
            success: this.newsResponse,
            error: this.newsResponseError
        };
        $.ajax(ajaxConfigObject)
    }

    newsResponse(response) {
        if (response.response.length > 5) {
            for (var index = 0; index < 5; index++) {
                console.log(response.response.docs[index].web_url);
                // var url = response.response.docs[index].web_url;
            }
        } else {
            for (var index = 0; index < response.response.docs.length; index++) {
                console.log(response.response.docs[index].web_url);
                // var url = response.response.docs[index].web_url;
            }
        }
    }

    newsResponseError(response) {
        console.log(response);
    }
}
