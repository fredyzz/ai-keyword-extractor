import TextInput from "@/components/textInput/index.jsx"

const App = () => {

  const handleTextInputChange = (text) => console.log(text)

  return (
    <>
      <div>
      <h1>AI Keyword extractor</h1>
      <TextInput onChange={handleTextInputChange}/>
      </div>
     
    </>
  )
}

export default App
