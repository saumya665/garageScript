pconst express = require("express");
const fs = require("fs");
const app = express();
app.listen(3615);
app.use(express.static('public'));
app.get("/ha", (req,res)=>{
  const firstN = req.query.Name;
  const Name2 = req.query.Comment;
  fs.writeFile("/home/sya/garageScript/public/public_htmlOut.txt", firstN + " "+Name2);
  res.send("done");
});
