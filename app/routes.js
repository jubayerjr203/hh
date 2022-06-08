const router = require("express").Router();
const routerEx = require("../routes/ticketsRouter");

router.use("/api/v1/tickets", routerEx);

router.get("/heltgh", (_req, res) => {
  // throw new Error({ hi: "by" });

  res.status(200).json({ masss: "done" });
});

module.exports = router;
