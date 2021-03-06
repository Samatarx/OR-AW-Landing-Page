const site = document.querySelector('.site');
const next = document.querySelector('.next');


const switcher = () => {
    site.classList.toggle('show')
    next.classList.toggle('show')
}

const time = setInterval(switcher,5000)


