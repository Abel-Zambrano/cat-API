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

//Buttons to refresh cat image

