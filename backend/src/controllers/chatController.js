const { generateResponse } = require("../services/ollamaService");

async function chat(req, res) {
  try {
    const { message } = req.body;

    // Validation
    if (!message || message.trim() === "") {
      return res.status(400).json({
        success: false,
        message: "Message is required.",
      });
    }

    // AI Response
    const aiReply = await generateResponse(message);

    res.status(200).json({
      success: true,
      userMessage: message,
      reply: aiReply,
    });

  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
}

module.exports = {
  chat,
};