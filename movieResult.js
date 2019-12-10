class movieResult{
    constructor(movieToSearch){
        $('.resultContainer').empty();
        this.getMovieInfo(movieToSearch);
    }

        getMovieInfo(movieTitle){
            var ajaxConfigObject = {
                dataType: 'json',
                url: "http://www.omdbapi.com/?i=tt3896198&apikey=6c2d937e",
                method: 'GET',
                data: {
                    s: movieTitle
                },
                success: this.processOmdbResponse,
                error: this.processOmdbError
            };
            $.ajax(ajaxConfigObject)
        }

        processOmdbResponse(response){
            console.log(response);
            var movieTitle = response.Search[i].Title;
            var movieTitle = response.Search[i].Title;
            for(var i=0; i<response.Search.length; i++){
                if(response.Search[i].Poster === 'N/A'){
                    var noPosterDiv = $('<div>').text(movieTitle).addClass('moviePoster');
                    $('.resultContainer').append(noPosterDiv);
                }else{
                    var posterDiv = $('<div>').css('background-image', 'url(' + response.Search[i].Poster + ')').addClass('moviePoster');
                    $('.resultContainer').append(posterDiv);
                    
                }
            }
        }
        // processOmdbResult(response){
        //     console.log(response);
            
        //     for(var i=0; i<response.Search.length; i++){
        //         // var posterDiv = $('<div>').attr('background-image', 'url(\"' + response.Search[i].Poster + '\")');
        //         var posterDiv = $('<div>').css('background-image', 'url(' + response.Search[i].Poster + ')').addClass('moviePoster');
        //         $('.resultContainer').append(posterDiv);
        //     }
        // }
        
        processOmdbError(response){
            console.log(response);
        }











}