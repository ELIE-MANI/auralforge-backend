const response = await fetch('generate-lyrics',{
    method: "POST",
    headers: {"Content-Type":"application.json"},
    body: JSON.stringify({prompt})

});