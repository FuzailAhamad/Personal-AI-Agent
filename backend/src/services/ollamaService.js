const OLLAMA_URL = "http://localhost:11434/api/generate";

async function generateResponse(userMessage) {
  try {
    const response = await fetch(OLLAMA_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "qwen2.5:3b",
        prompt: userMessage,
        stream: false,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to connect to Ollama.");
    }

    const data = await response.json();

    return data.response;

  } catch (error) {
    console.error("Ollama Error:", error.message);
    throw error;
  }
}

module.exports = {
  generateResponse,
};