document.addEventListener('DOMContentLoaded', function() {
    const faqButtons = document.querySelectorAll('.footer__faq-button');
    faqButtons.forEach(button => {
        button.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isActive = this.classList.contains('active');

            faqButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.nextElementSibling.classList.remove('active');
            });

            if (!isActive) {
                this.classList.add('active');
                content.classList.add('active');
            }
        });
    });

    document.addEventListener('click', function(event) {
        const isClickInsideAccordion = event.target.closest('.footer__faq-item');
        
        if (!isClickInsideAccordion) {
            faqButtons.forEach(button => {
                button.classList.remove('active');
                button.nextElementSibling.classList.remove('active');
            });
        }
    });
});