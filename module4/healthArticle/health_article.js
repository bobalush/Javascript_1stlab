/* This code below creates a new instance of XMLHttpRequest, which is an 
API used to send HTTP requests and receive responses from server.
This will help in retrieving the JSON data. */
var xhr = new XMLHttpRequest();

var url = './health_article.json'; // specifies the location of the JSON file that contains the health articles


/* 
The open method configures an XHR request with the following parameters:

'GET': Specifies the HTTP method used for the request (in this case, a GET request).
URL: Represents the URL from where you will fetch the data.
True: Indicates if the request is asynchronous (true) or synchronous (false). 
In this case, it's set to true for asynchronous operation, allowing other 
scripts to run while the request is processed.
*/
xhr.open('GET', url, true);

xhr.responseType = 'json';  //inform the XMLHttpRequest object that the expected response from the server should be in JSON format

xhr.onload = function() {
    var articles = xhr.response.articles;
    var articlesDiv = document.getElementById('articles');

    articles.forEach(function(article) {
        var articleDiv = document.createElement('div');
        articleDiv.classList.add('article');
  
        var title = document.createElement('h2');
        title.textContent = article.title;
  
        var description = document.createElement('p');
        description.textContent = article.description;
  
        var waysHeader = document.createElement('h3');
        waysHeader.textContent = 'Ways to Achieve:';
  
        var waysList = document.createElement('ul');
        article.ways_to_achieve.forEach(function(way) {
          var listItem = document.createElement('li');
          listItem.textContent = way;
          waysList.appendChild(listItem);
        });
  
        var benefitsHeader = document.createElement('h3');
        benefitsHeader.textContent = 'Benefits:';
  
        var benefitsList = document.createElement('ul');
        article.benefits.forEach(function(benefit) {
          var listItem = document.createElement('li');
          listItem.textContent = benefit;
          benefitsList.appendChild(listItem);
        });
  
        articleDiv.appendChild(title);
        articleDiv.appendChild(description);
        articleDiv.appendChild(waysHeader);
        articleDiv.appendChild(waysList);
        articleDiv.appendChild(benefitsHeader);
        articleDiv.appendChild(benefitsList);
  
        articlesDiv.appendChild(articleDiv);
      });
}

  xhr.send();
