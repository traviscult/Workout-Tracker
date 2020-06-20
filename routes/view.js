const router = require("express").Router();
// const path = require("path");

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

module.exports = router;

  
// const path = require("path");

// module.exports = (app) => {
//     app.get("/", (req, res) => {
//         res.send(index.html);
//     });

//       app.get("/exercises", (req, res) => {
//         res.sendFile(path.join(__dirname, "../public/exercise.html"));
//     });

//     app.get("/stats", (req, res) => {
//         res.sendFile(path.join(__dirname, "../public/stats.html"));
//     });
// };