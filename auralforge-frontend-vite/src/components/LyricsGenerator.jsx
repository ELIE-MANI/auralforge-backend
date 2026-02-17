import { useState } from "react";
import {useMutation} from "@tanstack/react-query";
import { generateLyrics } from "../api/LyricsApi";

function LyricsGenerator() {

const [prompt, setPrompt] = useState("");

const mutation = useMutation({
    mutationFn: generateLyrics,
});

const handleSubmit = (e) => {   
    e.preventDefault();
    mutation.mutate({prompt : prompt});
};

return(
    <div >
  <h2>Lyrics Generator</h2>
  
  <form onSubmit={handleSubmit}>
    <textarea 
    value={prompt}
    onChange = {(e) => setPrompt(e.target.value)}
    placeholder="Enter your theme"
    />

    <button type="submit"
    disabled={mutation.isPending}
    >
   {mutation.isPending ? "Generating..." : "Generate Lyrics"}
   
    </button>
     </form>
    {mutation.isError ? `Error: ${mutation.error.message}`: null} 
    {mutation.isSuccess && (
    <div>
        <h3>Generated Lyrics:</h3>
        <pre>{mutation.data.lyrics}</pre>

    </div>
 )}

    </div>
)
};

export default LyricsGenerator;
