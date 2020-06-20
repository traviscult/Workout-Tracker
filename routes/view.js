const router = require("express").Router();
const path = require("path");

router.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/exercise.html"))
})

module.exports = router;

// const path = require("path");
// //create file paths for html
// module.exports = (app) => {
//     app.get('/workouts', (req, res) => {
//         res.sendFile(path.join(__dirname, '../public/exercise.html'));
//     });
//     app.get('/stats', (req, res) => {
//         res.sendFile(path.join(__dirname, '../public/stats.html'));
//     });
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, '../public/index.html'));
//     });
// };