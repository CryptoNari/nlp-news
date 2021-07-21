const uiUpdate = (appData={}) => {
        console.log(appData.status)
        const subjElement = document.getElementById('subjectivity');
        const agreeElement = document.getElementById('agreement');
        const confElement = document.getElementById('confidence');
        const ironyElement = document.getElementById('irony');

        if (appData.status.code === '0') { 
                subjElement.innerHTML = `Subjectivity:      ${appData.subjectivity}`;
                agreeElement.innerHTML = `Agreement:      ${appData.agreement}`;
                confElement.innerHTML = `Confidence:      ${appData.confidence}`;
                ironyElement.innerHTML = `Irony:      ${appData.irony}`;
        } else {
                subjElement.innerHTML = `Subjectivity:`;
                agreeElement.innerHTML = `Agreement:`;
                confElement.innerHTML = `Confidence:`;
                ironyElement.innerHTML = `Irony:`;
                alert(`Was not able to get sentiment data. Error msg: "${appData.status.msg}"`);
        }
}

export {uiUpdate}