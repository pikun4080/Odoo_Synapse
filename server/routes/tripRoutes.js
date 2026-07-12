const express = require("express");
const router = express.Router();

const { getAllTrips,
    createTrip,
    completeTrip,
    cancelTrip
 } = require("../controllers/tripController");

router.get("/", getAllTrips);
router.post("/", createTrip);
router.patch("/:id/complete", completeTrip);
router.patch("/:id/cancel", cancelTrip);


module.exports = router;