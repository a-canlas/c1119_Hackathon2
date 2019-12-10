class movieResult{
    constructor(movieToSearch){
        this.getMovieInfo(movieToSearch);
        $('.resultContainer').empty();
    }

        getMovieInfo(movieTitle){
            var ajaxConfigObject = {
                dataType: 'json',
                url: "http://www.omdbapi.com/?i=tt3896198&apikey=6c2d937e",
                method: 'GET',
                data: {
                    s: movieTitle
                },
                success: this.processOmdbResult,
                error: this.processOmdbError
            };
            $.ajax(ajaxConfigObject)
        }

        processOmdbResult(response){
            console.log(response);
            
            for(var i=0; i<response.Search.length; i++){
                if(response.Search[i].Poster === 'N/A'){
                    var noPosterDiv = $('<div>').text(response.Search[i].Title).addClass('moviePoster');
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