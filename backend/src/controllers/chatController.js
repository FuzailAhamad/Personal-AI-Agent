const sendMessage = async (req, res) => {
    try {

        // User ka message frontend se aayega
        const { message } = req.body;

        // Temporary response
        res.status(200).json({
            success: true,
            userMessage: message,
            reply: "Hello Fuzail 👋, Backend is working successfully!"
        });

    } catch (error) {

        console.error(error);

        res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });

    }
};

module.exports = {
    sendMessage
};