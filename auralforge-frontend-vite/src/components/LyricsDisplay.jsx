import React from "react";

function LyricsDisplay({ lyrics }) {
    if(!lyrics) return null;

    return(
<div style={{marginTop: "2rem"}}>
<h2>Generated Lyrics:</h2>
<pre style={{whiteSpace:"pre-wrap"}}></pre>


</div>
    )
}

export default LyricsDisplay;