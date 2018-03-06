var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    'article-one':{
        title :'article-one',
        heading:'articleOne',
        content:` <h1>Hello</h1>
                   <p>
                   the quick brown fox jumps over the lazy dogs.the quick brown fox jumps over the lazy dogs.the quick brown fox jumps over the lazy dogs
                   </p>
                   <p>
                   the quick brown fox jumps over the lazy dogs.the quick brown fox jumps over the lazy dogs.the quick brown fox jumps over the lazy dogs
                  </p>
                  <p>
                   the quick brown fox jumps over the lazy dogs.the quick brown fox jumps over the lazy dogs.the quick brown fox jumps over the lazy dogs
                  </p>`
                    },
    'article-two':{
        title :'article-two',
        heading:'articleTwo',
        content:` <h1>Hello</h1>
                   <p>
                   the quick brown fox jumps over the lazy dogs.the quick brown fox jumps over the lazy dogs.the quick brown fox jumps over the lazy dogs
                   </p>
                   <p>
                   the quick brown fox jumps over the lazy dogs.the quick brown fox jumps over the lazy dogs.the quick brown fox jumps over the lazy dogs
                  </p>
                  <p>
                   the quick brown fox jumps over the lazy dogs.the quick brown fox jumps over the lazy dogs.the quick brown fox jumps over the lazy dogs
                  </p>`
                    
    }
};

function createTemp(data){
    var title   = data.title;
    var heading = data.heading;
    var content = data.content;
    
    var htmltemp=`<html>
            <head> 
              <title>
              ${title}
              </title>
                 <link href="/ui/style.css" rel="stylesheet" />
              </head>
             <body>
                 <div class="container">
                 <a href="/">HOme</a>
                 <hr>
               <h1>${heading}</h1>
               ${content}
              </div>
             </body>
            </html>`;

return htmltemp;

}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    var articleName= req.params.articleName;
   res.send(createTemp(articles[articleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});




var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
