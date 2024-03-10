// Example function for querying OpenAI's API - remember to refine for security & efficiency
async function queryOpenAI(command) {
    const response = await fetch('https://api.openai.com/v4/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // NEVER expose your API key in client-side code like this.
            // This example is for educational purposes only.
            // In production, call a backend service that securely stores and uses your API key.
            'Authorization': 'Bearer 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'
        },
        body: JSON.stringify({
            model: "text-davinci-003",
            prompt: command,
            temperature: 0.5,
            max_tokens: 60,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0
        }),
    });

    const data = await response.json();
    speak(data.choices[0].text.trim());
}
