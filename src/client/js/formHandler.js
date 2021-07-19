function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const data = {
       url: formText
    }

    Client.checkForName(formText);

    console.log("::: Form Submitted :::");
    fetch('http://localhost:8081/nlp-api', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
        .then(res => res.json())
        .then(function (res){
                Client.uiUpdate(res)
            })
}

export { handleSubmit }
