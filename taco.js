class Taco {
  constructor(url) {
    this.url = url;
    this.render();
  }

  render(){
    var anchorTag = $('<a>').attr({'href': this.url, 'target': '_blank'});
    var imageTag = $('<img>').attr({'src': './assets/taco.jpg', 'height': '30px'});
    anchorTag.append(imageTag);
    $('.taco').append(anchorTag);
  }
}
