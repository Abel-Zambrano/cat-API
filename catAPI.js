
//cat image API

const catImage = () => {
    const xhr = new XMLHttpRequest();
    const url = 'https://api.thecatapi.com/v1/images/search';

    xhr.responseType = 'json';
    xhr.onreadystatechange = () => {
        if(xhr.readyState === XMLHttpRequest.DONE) {
            const image = document.getElementById('cat-image');
            image.src = xhr.response[0].url;
        }
    }

    xhr.open('GET', url);
    xhr.send()
}

catImage();

// refresh button 

const refresh = document.getElementsByClassName('vote');

for(var i = 0; i < refresh.length; i++) {
    addEventListener('click', catImage);
}

// refresh[0].addEventListener('click', catImage);
// refresh[1].addEventListener('click', catImage);

