class news {
  constructor() {
    this.getNewsInfo = this.getNewsInfo.bind(this);
    this.newsResponse = this.newsResponse.bind(this);
  }

  getNewsInfo() {
    var ajaxConfigObject = {
      dataType: 'json',
      url: "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=CL81LUbZFCEpOlFyAH0ejmIgf9l93Sqs",
      method: 'GET',
      success: this.newsResponse,
      error: this.newsResponseError
    };
    $.ajax(ajaxConfigObject)
  }

  newsResponse(response) {
    if (response.response.length > 5) {
      for (var index = 0; index < 5; index++) {
        console.log(response.response.docs[index].web_url);
        // var url = response.response.docs[index].web_url;
      }
    } else {
      for (var index = 0; index < response.response.docs.length; index++) {
        console.log(response.response.docs[index].web_url);
        // var url = response.response.docs[index].web_url;
      }
    }
  }

  newsResponseError(response) {
    console.log(response);
  }
}

// $(".modalNewsBox").append()
