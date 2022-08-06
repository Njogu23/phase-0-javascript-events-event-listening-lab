function addingEventListener() {
    const button = document.getElementById('button');

    function clickAlert(){
        alert('I\'ve been clicked!');
    }

button.addEventListener('click', clickAlert);

}

addingEventListener();
