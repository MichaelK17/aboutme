document.addEventListener('DOMContentLoaded', function() {
    const blurredImages = document.querySelectorAll('.blurred-img');
    
    blurredImages.forEach(img => {
        img.addEventListener('click', function() {
            this.classList.remove('blurred-img');
               // Find and hide the text element
               const textElement = this.parentElement.querySelector('.img-txt');
               if (textElement) {
                   textElement.style.display = 'none';
               }
        });
    });
});