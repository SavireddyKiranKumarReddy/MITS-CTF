export default function handler(req, res) {
  try {
    if (req.method !== "POST") {
      return res.status(405).json({ success: false });
    }

    const normalize = (v) => (v || "").trim().toLowerCase();

    const correct = {
      q1: "cat",
      q2: "london",
      q3: "unileverwifi",
      q4: "owoodflint@gmail.com",
      q5: "github",
      q6: "new york",
      q7: "pennydr0pper.!"
    };

    for (const key in correct) {
      if (normalize(req.body[key]) !== correct[key]) {
        return res.status(200).json({ success: false });
      }
    }

    return res.status(200).json({
      success: true,
      flag: "CTF{un!t3d_w3_st@nd}"
    });

  } catch (err) {
    return res.status(500).json({ success: false });
  }
}
