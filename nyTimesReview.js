class Review {
  constructor(url, headline) {
    this.url = url;
    this.headline = headline;
    this.render();
  }

  render() {
    var divElem = $('<div>');
    var anchorElem = $('<a>').attr({'href': this.url, 'target': '_blank'}).text(this.headline);
    divElem.append(anchorElem);
    $('.modalReviewsBox').append(divElem);
  }
}
