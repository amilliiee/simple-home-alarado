const toggleSwitch = document.querySelector('.switch input[type="checkbox"]');
const logo = document.getElementById('logo');
const moon = document.getElementById('moon');
const sun = document.getElementById('sun');
const active = document.getElementsByClassName('active');
const comms = document.getElementsByClassName('comms');
const actions = document.getElementsByClassName('actions');

console.log(active);
console.log(comms);
console.log(actions);

function switchTheme(e) {
    const [theme, logoSrc, moonSrc, sunSrc, activeClr] = e.target.checked
    ? ['dark', './img/alarado-icon-homepage-dark.svg', './img/Moon_fill_dark.svg', './img/Sun_fill_dark.svg', '#F2F9FE']
    : ['light', './img/alarado-icon-homepage.svg', './img/Moon_fill_light.svg', './img/Sun_fill_light.svg', '#223344'];

    document.documentElement.setAttribute('data-theme', theme);
    logo.src = logoSrc;
    moon.src = moonSrc;
    sun.src = sunSrc;
    active[0].style.color = activeClr;
    comms[0].style.color = activeClr;
    actions[0].style.color = activeClr;
}

toggleSwitch.addEventListener('change', switchTheme, false);