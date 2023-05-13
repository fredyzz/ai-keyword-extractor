import { useState } from "react";

import { OPENAI_API_URL } from "@/utils/constants.js";

const useOpenAi = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getKeywords = async ({ apiKey, text }) => {
    if (!apiKey) setError("Please enter an openAI API key");

    setIsLoading(true);

    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "text-davinci-003",
        prompt: `Extract the main keywords from the following text: ${text}. Make the first letter of each keyword uppercase, and separate with commas.`,
        temperature: 0.5,
        max_tokens: 60,
        frequency_penalty: 0.2,
      }),
    };

    try {
      const response = await fetch(OPENAI_API_URL, requestOptions);
      const responseJson = await response.json();

      if (responseJson.error) {
        setIsLoading(false);
        setError(responseJson.error);
        return;
      }

      const data = responseJson.choices[0].text
        .split(",")
        .map((keyword) => keyword.trim());

      setIsLoading(false);
      return data;
    } catch (error) {
      setError(error);
    }
  };

  return { getKeywords, isLoading, error };
};

export default useOpenAi;
