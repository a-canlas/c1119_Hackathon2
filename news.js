class News {
  constructor(url) {
    this.data = {
      url: url
    }
  }

  render() {
    var divElem = $('<div>');
    var anchorElem = $('<a>').attr({ 'href': this.data.url, 'target': '_blank' }).text('news');
    var renderFinish = divElem.append(anchorElem);
    return renderFinish;
  }
}
