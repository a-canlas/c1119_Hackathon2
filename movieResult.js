class MovieResult {
    constructor() {
        this.processOmdbResponse = this.processOmdbResponse.bind(this);
        this.getMovieInfo = this.getMovieInfo.bind(this);
        this.getMovieReviews = this.getMovieReviews.bind(this);
        this.displayModal = this.displayModal.bind(this);
        this.getNewsInfo = this.getNewsInfo.bind(this);
    }

    addEventHandler() {
        $('#searchButton').on('click', this.getMovieInfo);
        $('.modalCloseButton').on('click', this.closeModal);
        $('.resetButton').on('click', this.resetInput);
    }

    getMovieInfo() {
        var ajaxConfigObject = {
            dataType: 'json',
            url: 'http://www.omdbapi.com/?i=tt3896198&apikey=6c2d937e',
            method: 'GET',
            data: {
                s: $('#searchInput').val()
            },
            success: this.processOmdbResponse,
            error: this.processOmdbError
        }
        $.ajax(ajaxConfigObject);
    }

    processOmdbResponse(response) {
        $('.resultContainer').empty();
        for (var i = 0; i < response.Search.length; i++) {
            var movieTitle = response.Search[i].Title;
            var movieType = response.Search[i].Type;
            var releaseYear = response.Search[i].Year;
            var moviePoster = response.Search[i].Poster;
            var makeMovieClass = new Movie(movieTitle, movieType, releaseYear, moviePoster, this.displayModal);
            var moviePosterParentDiv = makeMovieClass.renderMovie()
            $('.resultContainer').append(moviePosterParentDiv)
        }
    }

    processOmdbError(response) {
        console.log(response);
    }

    getMovieReviews() {
        var movieTitle = $('.modalTitle').text();
        var ajaxDataConfig = {
            url: 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?query=' + movieTitle + '&api-key=0GPR4cqA3yzxnL9SWBBA34E40fAL1fC2',
            method: 'GET',
            success: this.onGetReviewsSuccess,
            error: this.onGetReviewsError
        }
        $.ajax(ajaxDataConfig);
    }

    onGetReviewsSuccess(response) {
        $('.modalReviewsBox').empty();
        response.results.slice(0, 5);
        for(var index = 0; index < response.results.length; index++){
            var urlLink = response.results[index].link.url;
            var headlineText = response.results[index].headline;
            new Review(urlLink, headlineText);
        }
    }

    onGetReviewsError(error){
        console.log('Error with Review GET: ', error);
    }

    resetInput(){
        $('#searchInput').val("");
        $('.resultContainer').empty();
    }

    closeModal(){
        $('#movieInfoModal').addClass('hidden');
    }

    displayModal(){
        $('#movieInfoModal').removeClass('hidden');
        this.getMovieReviews();
        this.getNewsInfo();
    }

    getNewsInfo() {
        var movieTitle = $('.modalTitle').text();
        var ajaxConfigObject = {
            dataType: 'json',
            url: 'https://api.nytimes.com/svc/search/v2/articlesearch.json?query=' + movieTitle + '&api-key=CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs',
            method: 'GET',
            success: this.newsResponse,
            error: this.newsResponseError
        };
        $.ajax(ajaxConfigObject)
    }

    newsResponse(response) {
        console.log(response)
        $('.modalNewsBox').empty();
        if (response.response.length > 5) {
            for (var index = 0; index < 5; index++) {
                var urlLink = response.response.docs[index].web_url;
                var newsItem = new News(urlLink);
                $('.modalNewsBox').append(newsItem.render());
            }
        } else {
            for (var index = 0; index < response.response.docs.length; index++) {
                var urlLink = response.response.docs[index].web_url;
                var newsItem = new News(urlLink);
                $('.modalNewsBox').append(newsItem.render());
            }
        }
        console.log(urlLink);
    }

    newsResponseError(response) {
        console.log(response);
    }
}
