const functions = require("firebase-functions");
const axios = require("axios");

exports.chatHandler = functions.https.onRequest(async (req, res) => {
  try {
    const userMessage = req.body.message;

    // Example AI call (replace with your model later)
    const response = await axios.post("https://api.openai.com/v1/chat/completions", {
      model: "gpt-4o-mini",   // or whichever model you choose
      messages: [{ role: "user", content: userMessage }]
    }, {
      headers: {
        "Authorization": `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json"
      }
    });

    res.json({ reply: response.data.choices[0].message.content });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});
