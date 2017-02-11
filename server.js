var app=require("express")();
app.get("/sse",function (req,res) {
    res.append("Access-Control-Allow-Origin","*");
    res.append("Content-Type","text/event-stream");
    res.write("event: connecttime\n");
    res.write("retry: 10000\n");
    res.write("data: " + (new Date()) + "\n\n");
    var timer=setInterval(function () {
        res.write("data: " + (new Date()) + "\n\n");
    },2000);
    // req.connection.addListener("close", function () {
    //     clearInterval(timer);
    // }, false);

});

app.listen(8088);