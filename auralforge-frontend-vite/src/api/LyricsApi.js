export const generateLyrics = async (data) => {
    const response = await fetch (
        "http://localhost:5000/api/generate-lyrics",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        }
    );

    if(!response.ok) {
        throw new Error("Failed to generate lyrics");
    }

    const result = await response.json();
    return result;
};