class Review {
  constructor(url, headline) {
    this.data = {
      url: url,
      headline: headline
    }
    this.render();
  }

  render() {
    var divElem = $('<div>');
    var anchorElem = $('<a>').attr({'href': this.data.url, 'target': '_blank'}).text(this.data.headline);
    divElem.append(anchorElem);
    $('.modalReviewsBox').append(divElem);
  }
}
