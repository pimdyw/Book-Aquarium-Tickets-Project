const express = require("express");
const pool = require("../config");

router = express.Router();

router.get("/user/promotion", function(req, res, next) {
   
    const promise1 = pool.query("SELECT * FROM promotion;");

    promise1.then((results) => {
            const [promotion] = results;
            console.log(results)
            res.json({
                promotion: promotion,
                error: null,
            });
        })
        .catch((err) => {
            return res.status(500).json(err);
        });
});
exports.router = router;
