
const themeSelector = document.createElement('select');


themeSelector.setAttribute("id","themeSelector");
themeSelector.setAttribute("aria-label","theme selector");
themeSelector.setAttribute("name","themeSelector");
themeSelector.classList= "theme-selector | capitalize"
themeSelector.innerHTML = `
        <option value="system" data-theme="system">system</option>
        <option value="light" data-theme="light">light</option>
        <option value="dark" data-theme="dark">dark</option>
       `

document.querySelector('#root').appendChild(themeSelector)