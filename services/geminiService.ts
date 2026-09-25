export const generateAIResponse = async (query: string): Promise<string> => {
  try {
    const response = await fetch('/api/ai/ask', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    if (!response.ok) {
      const data = await response.json().catch(() => ({}));
      return data.error || "I couldn't process that question right now. Please try again.";
    }

    const data = await response.json();
    return data.text || "I couldn't process that question right now. Please try again.";
  } catch (error) {
    console.error('Gemini API Error:', error);
    return "I couldn't process that question right now. Please try again.";
  }
};