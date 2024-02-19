window.function = async function(url, csva, csvb) {
    if (url.value === undefined) return "Enter your url";
    if (csva.value === undefined) return "Enter your csv1";
    if (csvb.value === undefined) return "Enter your csvb";

    let webhook = url.value;
    const ch = email.value;
    const raw = JSON.stringify({
        params: {
            csva: csva.value,
            csvb: csvb.value
        }
    });

    // Append the password as a query parameter to the webhook URL
    // webhook += `?pwd=${encodeURIComponent(pwd.value)}`;

    const requestOptions = {
        method: 'POST',
        body: raw,
        headers: {
            'Content-Type': 'application/json'
        },
        redirect: 'follow'
    };
//let data = "Please confirm your Email!!!";
    const response = await fetch(`${webhook}`, requestOptions);
    
  
   

    // Read the response body as plain text
    const data = await response.text();

    return data; // Return the plain text response
};
