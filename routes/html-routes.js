var path = require("path");

module.exports = function(app) {

    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "..public/index.html"));
    })

    app.get("/fables", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/fables.html"))        
    })

    app.get("/myProfile", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/profile.html"))
    })

    app.get("/developers", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/devPage.html"))
    })

    app.get("/create", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/createFable.html"))
    })

    app.get("/test", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/test-api.html"))
    })

    app.get("/adminStory", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/adminStory.html"))
    })

    app.get("/createFrag/:storyId", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/createFrag.html"))
    })



}