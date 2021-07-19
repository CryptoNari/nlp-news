const uiUpdate = (appData={}) => {
        const subjElement = document.getElementById('subjectivity');
        const agreeElement = document.getElementById('agreement');
        const confElement = document.getElementById('confidence');
        const ironyElement = document.getElementById('irony');
        subjElement.innerHTML = `Subjectivity:      ${appData.subjectivity}`;
        agreeElement.innerHTML = `Agreement:      ${appData.agreement}`;
        confElement.innerHTML = `Confidence:      ${appData.confidence}`;
        ironyElement.innerHTML = `Irony:      ${appData.irony}`;
}

export {uiUpdate}