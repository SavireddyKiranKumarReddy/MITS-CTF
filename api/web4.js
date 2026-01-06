export default function handler(req, res) {
  const key = req.query.key;

  if (key === "ch4") {
    res.status(200).json({
      success: true,
      flag: "CTF{wr0ng_p@th!}"
    });
  } else {
    res.status(403).json({
      success: false,
      message: "Access denied"
    });
  }
}
