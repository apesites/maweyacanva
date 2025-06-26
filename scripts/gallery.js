const viewedImgCon = document.querySelector('.viewed-img-con');
let viewedImg = document.querySelector('.viewed-img .img');
const closingButton = document.querySelector('.closing-button');
const images = document.querySelectorAll('.picture');

    images.forEach((image) => {
        image.addEventListener('click', () => {

            const imageSrc = image.src;

            viewedImg.src = imageSrc;
            
            viewedImgCon.style.display = 'flex';            

        });
    });

    closingButton.addEventListener('click', () => {
        viewedImgCon.style.display = 'none'
    });



