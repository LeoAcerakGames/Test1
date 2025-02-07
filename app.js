var express = require("express");
var path = require("path");
var app = express();
var routes = require("./router/router");


app.set("views", path.join(__dirname, "views")); 
app.set("view engine", 'ejs');

// app.set("port", process.env.PORT || 3000);

app.use(routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log `Server is running at http://localhost:${PORT}`;
})



// app.listen(app.get("port"),function(){
//     console.log("Server started on port " + app.get("port"));
// });