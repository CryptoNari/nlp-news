const uiUpdate = (appData={}) => {
        console.log(appData.status)
        const subjElement = document.getElementById('subjectivity');
        const agreeElement = document.getElementById('agreement');
        const confElement = document.getElementById('confidence');
        const ironyElement = document.getElementById('irony');

        if (appData.status.code === '0') { 
                subjElement.innerHTML = `<div>Subjectivity:</div><div>${appData.subjectivity}</div>`;
                agreeElement.innerHTML = `<div>Agreement:</div><div>${appData.agreement}</div>`;
                confElement.innerHTML = `<div>Confidence:</div><div>${appData.confidence}</div>`;
                ironyElement.innerHTML = `<div>Irony:</div><div>${appData.irony}</div>`;
        } else {
                subjElement.innerHTML = '';
                agreeElement.innerHTML = '';
                confElement.innerHTML = '';
                ironyElement.innerHTML = '';
                alert(`Was not able to get sentiment data. Error msg: "${appData.status.msg}"`);
        }
}

export {uiUpdate}