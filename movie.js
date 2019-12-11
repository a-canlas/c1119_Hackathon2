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
        var posterDiv;
        if(this.data.poster === 'N/A'){
            posterDiv = $('<div>').text(this.data.title).addClass('moviePoster').on('click', this.handleShowModal);
        }else{
            posterDiv = $('<div>').css('background-image', 'url(' + this.data.poster + ')').addClass('moviePoster').on('click', this.handleShowModal);;
        }
        return posterDiv;
    }

    handleShowModal(){
        this.clearModal();
        console.log(this.data.year)
        $('.modalReleaseDate').text(this.data.year);
        $('.modalMovieType').text(this.data.type);
        $('.modalTitle').text(this.data.title);
        $('.modalMoviePoster').css('background-image', 'url(' + this.data.poster + ')');

        this.showModal(this.data);
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
