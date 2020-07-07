const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.send("d;fljkhdf;lghjfdl;jhlkdf;jh");
});

// router.get('/specific', (req, res) => {
//     res.send("SPECIFIC POST");
// });




module.exports = router;