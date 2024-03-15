// // const ham = document.querySelector('#ham');
// // ham.addEventListener('click',() => {
// //     ham.classList.toggle("active");
// // });
// const but = document.querySelector('.switch');
// const body = document.querySelector('body');
// console.log(but)
// but.addEventListener('click', () => {
//     if(but.textContent === '🌙'){
//         but.textContent = '🌞'
//         body.style['background-color'] = 'white';
//     }
//     else{
//         but.textContent = '🌙'
//         body.style['background-color'] = 'rgb(53, 48, 48)';
//     }
// })
fetch('assests/html_files/navbar.html')
                .then(res => res.text())
                .then(data =>{
                    const parsedNavbar = new DOMParser().parseFromString(data, 'text/html');
                    const headerElement = parsedNavbar.querySelector('.cont');
                    const navbarHTML = headerElement.innerHTML;
                    const currentHeader = document.querySelector('.cont');
                    currentHeader.innerHTML = navbarHTML;

                    
                        const but = document.querySelector('.switch');
                        const body = document.querySelector('body');
                        console.log(but)
                        but.addEventListener('click', () => {
                        if(but.textContent === '🌙'){
                            but.textContent = '🌞'
                            body.style['background-color'] = 'white';
                        }
                        else{
                            but.textContent = '🌙'
                            body.style['background-color'] = 'rgb(53, 48, 48)';
                        }
                        })
                })

fetch('assests/html_files/footer.html')
    .then(res => res.text())
    .then(data =>{
        const parsedFooter = new DOMParser().parseFromString(data, 'text/html');
        const footElement = parsedFooter.querySelector('.footer');
        const foot = footElement.innerHTML;
        const currentFoot = document.querySelector('.footer');
        currentFoot.innerHTML = foot;
        console.log(foot);
    })

var swiper = new Swiper('.swiper-container', {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});