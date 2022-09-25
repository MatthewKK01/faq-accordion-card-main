const faqheader = document.querySelectorAll('.faq-header');

faqheader.forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('remove');
        item.nextElementSibling.classList.toggle('active');
    })
})