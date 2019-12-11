class nytArticles {
  constructor(searchTerm) {
    this.nyReviews(searchTerm);
    $('.carousel').carousel();
    $('.carousel.carousel-slider').carousel({
      fullWidth: true,
      indicators: true
    });
    this.carouselDblClick = this.carouselDblClick.bind(this);
    this.carouselDblClick();
    this.carouselExpand = this.carouselExpand.bind(this);
    this.carouselExpand();
    //this.processResponse = this.processResponse.bind(this);
  }
  carouselDblClick() {
    $(".carousel-item").on('dblclick', function () {console.log('test run for event', event)})
  }
  carouselExpand() {
    $(".carousel-item").on('dblclick', function () { console.log('test run for resize') }).addClass('carouselSize')
  }
function nyReviews(searchTerm) {
  var ajaxReviews = {
    dataType: 'json',
    url: "https://api.nytimes.com/svc/movies/v2/reviews/critics-pick.json",
    method: 'get',
    data: {
      query: searchTerm,
      'api-key': 'CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs',
    },
    success: data => console.log(data),
    error: e => console.log(e)
  }
  $.ajax(ajaxReviews);
  console.log(ajaxReviews)
}