const fetch = require('node-fetch');

async function handleSubmit(event) {
    event.preventDefault();

    let url = document.getElementById('url').value;
    console.log("::: Form Submitted :::");
    let data = { 'url': url };

    if (Client.isValidURL(url)) {
        await fetch('/add', {
            method: 'POST',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                document.getElementById('agreement').innerHTML = `Agreement: ${result.agreement}`;
                document.getElementById('confidence').innerHTML = `Confidence: ${result.confidence}`;
                document.getElementById('irony').innerHTML = `Irony: ${result.irony}`;
                document.getElementById('model').innerHTML = `Model: ${result.model}`;
                document.getElementById('score_tag').innerHTML = `Score Tag: ${result.score_tag}`;
            })
            .catch(error => console.log("Error fetching data:", error));
    } else {
        console.log("Invalid URL. Please try again");
    }
}

export { handleSubmit };
