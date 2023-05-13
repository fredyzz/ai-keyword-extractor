import { useEffect, useState } from "react";

import ApiKeyInput from "@/components/apiKeyInput/index.jsx";
import ClearButton from "@/components/clearButton";
import ErrorMessage from "@/components/errorMessage/index.jsx";
import SubmitButton from "@/components/submitButton/index.jsx";
import TextInput from "@/components/textInput/index.jsx";
import TextOutput from "@/components/textOutput/index.jsx";
import TextOutputFormatSelector from "@/components/textOutputFormatSelector/index.jsx";
import useOpenAi from "@/hooks/useOpenAi";

const App = () => {
  const [apiKey, setApiKey] = useState(undefined);
  const [error, setError] = useState(undefined);
  const [keywords, setKeywords] = useState(undefined);
  const [selectedFormat, setSelectedFormat] = useState(undefined);
  const [text, setText] = useState(undefined);

  const { error: openAiError, getKeywords, isLoading } = useOpenAi();

  const isSubtmitButtonDisabled = !apiKey || !text || isLoading;

  useEffect(() => {
    setError(openAiError?.type);
  }, [openAiError]);

  const handleOnSubmit = async () => {
    const data = await getKeywords({ apiKey, text });
    setKeywords(data);
  };

  const handleClearFormulary = () => {
    setError(undefined);
    setKeywords(undefined);
    setSelectedFormat(undefined);
    setText(undefined);
  };

  const handleTextChange = (text) => {
    setError(undefined);
    setText(text);
  };

  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-200">
        <div className="w-full max-w-md px-6 py-10 bg-white shadow-md rounded-md mx-auto">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            AI Keyword extractor
          </h1>
          <ApiKeyInput apiKey={apiKey} setApiKey={setApiKey} />
          <TextInput text={text} setSelectedText={handleTextChange} />
          <TextOutputFormatSelector
            selectedFormat={selectedFormat}
            setSelectedFormat={setSelectedFormat}
          />
          <div className="flex mt-4">
            <SubmitButton
              disabled={isSubtmitButtonDisabled}
              onClick={handleOnSubmit}
            />
            <ClearButton onClick={handleClearFormulary} />
          </div>
          <ErrorMessage error={error} />
          <TextOutput
            keywordsArray={keywords}
            textOutputType={selectedFormat}
          />
        </div>
      </div>
    </>
  );
};

export default App;
