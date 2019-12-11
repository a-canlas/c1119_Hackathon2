class Movie{
    constructor(movieTitle, movieType, releaseYear, moviePoster, modalCallback){
        this.data = {
            title: movieTitle,
            type: movieType,
            year: releaseYear,
            poster: moviePoster
        };
        this.showModal = modalCallback;
        this.handleShowModal = this.handleShowModal.bind(this);
        this.modalTitle = $('.modalTitle')
        this.modalYear = $('.modalReleaseDate')
        this.modalType = $('.modalMovieType')
        this.modalPoster = $('.modalMoviePoster')
        this.renderMovie();
    }


    renderMovie(){
        $('.resultContainer').empty();
        var posterDiv = $('<div>').css('background-image', 'url(' + this.data.poster + ')').addClass('moviePoster');
        $('.resultContainer').append(posterDiv);
        $('.resultContainer').on('click', '.moviePoster', this.handleShowModal);
    }

    handleShowModal(){
        this.showModal();
        //instantiate article class
        //instantiate reviews class
    }

    clearModal(){
        this.modalTitle.text("");
        this.modalYear.text("");
        this.modalType.text("");
        this.modalPoster.attr('background-image', 'url()');
    }


}