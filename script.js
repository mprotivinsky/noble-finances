const quotes = [
    {
        quote: "\"Managing my taxes as a freelancer used to be overwhelming, but Noble Finance made it effortless.\”",
        img: "images/pfp-graphic-designer.png",
        alt: "Taylor M.",
        author: "Taylor M., 28 years old"
    },

    {
        quote: "\"From invoicing to tax prep, Noble Finance has been a game-changer for my freelance business.\”",
        img: "images/pfp-commericial-photographer.png",
        alt: "Markus N.",
        author: "Markus N., 31 years old"
    },

    {
        quote: "\"I used to worry about missing deductions, but with Noble Finance, I know I’m maximizing my savings.\”",
        img: "images/pfp-stylist.png",
        alt: "Margaret L.",
        author: "Margaret L., 24 years old"
    }
]

const btns = document.querySelectorAll('.quote-btn');
const quoteContainer = document.querySelector('.quote');
const quoteText = document.querySelector('.quote-text');
const quoteImg = document.querySelector('.quote-author img');
const quoteAuthor = document.querySelector('.quote-personal-info');

btns.forEach(function(btn, index) {
        btn.addEventListener('click', function() {
            
            if (btn.classList.contains('active')) return;

            document.querySelector('.quote-btn.active').classList.remove('active');
            btn.classList.add('active');

            quoteContainer.classList.add('fade-out');

            setTimeout(() => {
                quoteText.textContent = quotes[index].quote;
                quoteImg.src = quotes[index].img;
                quoteImg.alt = quotes[index].alt;
                quoteAuthor.textContent = quotes[index].author;

                quoteContainer.classList.remove('fade-out');
            }, 300); 
        });
    });