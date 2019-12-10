function nyMovies(searchTerm){
  var ajaxArticle = {
    dataType: 'json',
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
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
  $.ajax(ajaxArticle);
  console.log(ajaxArticle)
}

nyMovies("Movies");

function nyActors(searchTerm) {
  var ajaxArticle = {
    dataType: 'json',
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
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
  $.ajax(ajaxArticle);
  console.log(ajaxArticle)
}

nyActors("Actors");

function nyActresses(searchTerm) {
  var ajaxArticle = {
    dataType: 'json',
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
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
  $.ajax(ajaxArticle);
  console.log(ajaxArticle)
}

nyActresses("Actresses");

function nyTelevision(searchTerm) {
  var ajaxArticle = {
    dataType: 'json',
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
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
  $.ajax(ajaxArticle);
  console.log(ajaxArticle)
}

nyTelevision("Television");

function nyReviews(searchTerm) {
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

nyTelevision("Movie Reviews");

function nyDirectors(searchTerm) {
  var ajaxArticle = {
    dataType: 'json',
    url: "https://api.nytimes.com/svc/search/v2/articlesearch.json",
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
  $.ajax(ajaxArticle);
  console.log(ajaxArticle)
}

nyTelevision("Directors");
