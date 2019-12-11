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
// function nyMovies(searchTerm) {
//   var ajaxArticle = {
//     dataType: 'json',
//     url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//     method: 'get',
//     // headers: {
//     //   "X-Access-Token": "CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs"
//     // },
//     data: {
//       query: searchTerm,
//       'api-key': 'CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs',
//     },
//     success: data => console.log(data),
//     error: e => console.log(e)
//   }
//   $.ajax(ajaxArticle);
//   console.log(ajaxArticle)
// }

// nyMovies("Movies");

// function nyActors(searchTerm) {
//   var ajaxArticle = {
//     dataType: 'json',
//     url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//     method: 'get',
//     // headers: {
//     //   "X-Access-Token": "CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs"
//     // },
//     data: {
//       query: searchTerm,
//       'api-key': 'CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs',
//     },
//     success: data => console.log(data),
//     error: e => console.log(e)
//   }
//   $.ajax(ajaxArticle);
//   console.log(ajaxArticle)
// }

// nyActors("Actors");

// function nyActresses(searchTerm) {
//   var ajaxArticle = {
//     dataType: 'json',
//     url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//     method: 'get',
//     // headers: {
//     //   "X-Access-Token": "CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs"
//     // },
//     data: {
//       query: searchTerm,
//       'api-key': 'CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs',
//     },
//     success: data => console.log(data),
//     error: e => console.log(e)
//   }
//   $.ajax(ajaxArticle);
//   console.log(ajaxArticle)
// }

// nyActresses("Actresses");

// function nyTelevision(searchTerm) {
//   var ajaxArticle = {
//     dataType: 'json',
//     url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//     method: 'get',
//     // headers: {
//     //   "X-Access-Token": "CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs"
//     // },
//     data: {
//       query: searchTerm,
//       'api-key': 'CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs',
//     },
//     success: data => console.log(data),
//     error: e => console.log(e)
//   }
//   $.ajax(ajaxArticle);
//   console.log(ajaxArticle)
// }

// nyTelevision("Television");

nyReviews(searchTerm) {
  var ajaxReviews = {
    dataType: 'json',
    url: "https://api.nytimes.com/svc/movies/v2/reviews/critics-pick.json",
    method: 'get',
    // headers: {
    //   "X-Access-Token": "CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs"
    // },
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

// function nyDirectors(searchTerm) {
//   var ajaxArticle = {
//     dataType: 'json',
//     url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
//     method: 'get',
//     // headers: {
//     //   "X-Access-Token": "CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs"
//     // },
//     data: {
//       query: searchTerm,
//       'api-key': 'CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs',
//     },
//     success: function (searchTerm) {
//       data => console.log(data),
//         response = searchTerm
//     },
//     error: e => console.log(e),
//   }
//   $.ajax(ajaxArticle);
//   console.log(ajaxArticle)
// }

// nyTelevision("Directors");
// processResponse() {
//   var response = null;
//   for (var index = 0; index <= 10; index++) {
//     response = response.results['index']
//       //response = response.docs['index']
//   }
// }
}
