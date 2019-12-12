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
    }

    renderMovie(){
        var posterDiv = $('<div>').addClass('moviePoster').on('click', this.handleShowModal);
        if(this.data.poster === 'N/A'){
            posterDiv = posterDiv.text(this.data.title).addClass('noPoster');
        }else{
            posterDiv = posterDiv.css('background-image', 'url(' + this.data.poster + ')');;
        }
        return posterDiv;
    }

    handleShowModal(){
        this.clearModal();
        this.modalYear.text(this.data.year);
        this.modalType.text(this.data.type);
        this.modalTitle.text(this.data.title);
        this.modalPoster.css('background-image', 'url(' + this.data.poster + ')');
        this.showModal(this.data);
    }

    clearModal(){
        this.modalTitle.text("");
        this.modalYear.text("");
        this.modalType.text("");
        this.modalPoster.attr('background-image', 'url()');
    }
}
