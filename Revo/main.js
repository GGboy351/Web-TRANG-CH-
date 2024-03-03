document.addEventListener('DOMContentLoaded', () => {
    const features = document.querySelector('.feature');
    window.addEventListener('scroll', () => {
        let ScrolCordinates = window.scrollY;
        let featureCenter = features.offsetHeight / 2;
        if (ScrolCordinates >= featureCenter+100) {
            console.log(true);
            features.classList.remove('feature-hidden')
        }
    })
});