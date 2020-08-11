var booksjason= {
          books:[
              {
                  "name":"ABC",
                  "quantity":100,
                  suppliers:[
                      {
                          "name":"Rahul",
                          "address":"a"
                      },
                      {
                          "name":"Karan",
                          "address":"b"
                      }
                  ]
              },
              {
                  "name":"XYZ",
                  "quantity":1001,
                  suppliers:[
                      {
                          "name":"Rahul1",
                          "address":"a"
                      },
                      {
                          "name":"Karan1",
                          "address":"b"
                      }
                  ]
              },
              {
                  "name":"ABC",
                  "quantity":100,
                  suppliers:[
                      {
                          "name":"Rahul",
                          "address":"a"
                      },
                      {
                          "name":"Karan",
                          "address":"b"
                      }
                  ]
              }
          ]
      }



var express = require('express');
var app = express();
app.set('view engine', 'ejs');


app.get('/book/lists',function (req , res ) {
  res.render('profile',{"posts":booksjason.books});
});
app.get('/',function (req , res ) {
  res.render('index',{"posts":booksjason.books});
});
app.get('/about',function (req , res ) {
  res.render('about',{"posts":booksjason.books});
});

app.listen(3000);
console.log("Server is  running ");
