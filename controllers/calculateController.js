const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const calculateRes = async (req, res) => {
    console.log(req.body.expression);

    let prompt = `You are a calculator assistant. Your job is to evaluate the mathematical expression that is given. Do not respond with anything
        other than "The result is [RESULT]" where [RESULT] is the answer to the expression. If the expression is empty, respond with
        "empty expression".

        The given expression is: ${req.body.expression}
        `;

    // call Gemini with the above prompt
    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt
    });

    res.status(201).send({
        message: response.text
    });
}

module.exports = {
    calculateRes
}