const express = require("express");
//const {Console} = require("console");
const app = express();
app.use(express.static('public'));
app.listen(3615);
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.post('/www',(req,res)=>{
  const userName = `${req.body.name}`;
  const password = `${req.body.password}`;
  const name= `${req.body.name}`;
  const email =`${req.body.email}`;
  var domain = req.headers.host,
  console.log(domain);

  // console.log("userName"+userName+"password"+password);
  res.send("name"+userName+"password"+password);
  console.log("name "+name+" password "+password+" email "+email+
    " username "+userName );
})

app.get('*',(req,res)=>{
  exports.index = function(req,res){
    subDomain = domain.split('.');
    if(subDomain.length>2){
      subDomain=subDomain[0].split("-").join("");
    } else {
      subDomain = "Everyone";
    }
    res.render('index', {subDomain: subDomain});
  }
})

