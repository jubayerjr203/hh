const router = require("express").Router();
const mdb = require("../db/db");

router.get("/t/:ticketId", (req, res) => {
  const tId = req.params.ticketId;
  const ticket = mdb.findByid(tId);
  res.status(200).json(ticket);
});
router.patch("/t/:ticketId", (req, res) => {
  const tId = req.params.ticketId;
  const updetedTicket = mdb.updetByid(tId);
  res.status(200).json({ massege: "ticket updeted!", updetedTicket });
});
router.delete("/t/:ticketId", (req, res) => {
  const tId = req.params.ticketId;
  mdb.deleteByid(tId);
  res.status(203).send();
});

router.get("/u/:username", (req, res) => {
  const Un = req.params.username;
  const ticket = mdb.findByid(Un);
  res.status(200).json(ticket);
});
router.patch("/u/:username", (req, res) => {});
router.delete("/u/:username", (req, res) => {});

router.post("/sell", (req, res) => {
  const { username, price } = req.body;
  const ticket = mdb.create(username, price);
  res.status(201).json({ masseges: "ticket created succesfully", ticket });
});
router.post("/bulk", (req, res) => {
  const { username, price, quntity } = req.body;
  const tickets = mdb.bulkCreate(username, price, quntity);
  res
    .status(201)
    .json({ masseges: "bluk tickets created succesfully", tickets });
});
router.get("/draw", (req, res) => {
  const winnerCount = req.query.wc ?? 3;
  const winners = mdb.draw(winnerCount);
  res.status(200).json(winners);
});
router.get("", (req, res) => {
  const tickets = mdb.find();
  res.status(200).json(tickets);
});

module.exports = router;
