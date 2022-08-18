function lockedProfile() {
    const btns = [...document.getElementsByTagName('button')];
    btns.forEach(btn => btn.addEventListener('click', showHide));

    function showHide(event) {
        const button = event.target;
        const profile = button.parentNode;
        const hiddenData = profile.getElementsByTagName('div')[0];
        const lockStatus = profile.querySelector('input[type="radio"]:checked').value;
        
        if (lockStatus === 'unlock') {
            if (button.textContent === 'Show more') {
                hiddenData.style.display = 'inline-block';
                button.textContent = 'Hide it';
            } else if (button.textContent === 'Hide it') {
                hiddenData.style.display = 'none';
                button.textContent = 'Show more';
            }
        }
    }

}


