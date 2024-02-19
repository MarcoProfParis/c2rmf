window.function = async function(url, csv1, csv2) {
    if (url.value === undefined) return "Enter your url";
    if (csv1.value === undefined) return "Enter your csv1";
    if (csv2.value === undefined) return "Enter your csv2";

    let webhook = url.value;
    const ch = email.value;
    const raw = JSON.stringify({
        params: {
            csv1: csv1.value,
            csv2: csv2.value
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
