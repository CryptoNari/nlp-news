function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    const data = {
       url: formText
    }

    if (Client.checkForName(formText)) {
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
    } else {
        alert('URL not valid.Please submit a valid URL!')
    }
}
export { handleSubmit }
