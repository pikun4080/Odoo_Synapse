const express = require("express");
const router = express.Router();

const { getAllTrips,
    createTrip,
    completeTrip
 } = require("../controllers/tripController");

router.get("/", getAllTrips);
router.post("/", createTrip);
router.patch("/:id/complete", completeTrip);


module.exports = router;