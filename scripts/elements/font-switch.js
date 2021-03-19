(function () {
  const root = document.documentElement;
console.log('funcionou, viu!');
  const div = document.createElement('div');
  div.style.position = 'fixed';
  div.style.right = '16px';
  div.style.bottom = '16px';
  div.style.display = 'flex';
  div.style.alignItems = 'center';
  div.innerHTML = `
    <span style="font-size: 20px;
                  height: 56px;
                  display: block;
                  background-color: rgba(0,0,0,0.5);
                  color: white;
                  align-items: center;
                  display: flex;
                  padding: 16px;
    ">Fonte atual: <span id="currentFont"></span></span>
    <button id="changeFontBtn" class="c-button c-button-danger">F</button>
  `;
  root.appendChild(div);

  const changeFontBtn = document.getElementById('changeFontBtn');
      const currentFontEl = document.getElementById('currentFont');
      // const changeFontBtn = document.createElement('button');
      // changeFontBtn.style.position = 'fixed';
      // changeFontBtn.style.bottom = '16px';
      // changeFontBtn.style.right = '16px';
      // changeFontBtn.style.borderRadius = '50%';
      // changeFontBtn.style.height = '64px';
      // changeFontBtn.style.width = '64px';
      // changeFontBtn.style.fontSize = '48px';
      // changeFontBtn.style.backgroundColor = 'crimson';
      // changeFontBtn.innerHTML = 'F';

      // document.body.appendChild(changeFontBtn);

      const initialRootStyle = getComputedStyle(root);
      const fonts = [
        initialRootStyle.getPropertyValue('--family-be'), 
        initialRootStyle.getPropertyValue('--family-beautiful'), 
        initialRootStyle.getPropertyValue('--family-yellow'), 
        initialRootStyle.getPropertyValue('--family-gochi'), 
        initialRootStyle.getPropertyValue('--family-sedwick'), 
        initialRootStyle.getPropertyValue('--family-hey'), 
        initialRootStyle.getPropertyValue('--family-pastelyn'), 
      ];
      currentFontEl.innerHTML = initialRootStyle.getPropertyValue('--family-handwritten');
      changeFontBtn.onclick = () => {
        const rootStyle = getComputedStyle(root);
        const currentFont = rootStyle.getPropertyValue('--family-handwritten');
        const currentIndex = fonts.indexOf(currentFont);
        const newFont = fonts[(currentIndex + 1) % fonts.length];
        root.style.setProperty('--family-handwritten', newFont);
        currentFontEl.innerHTML = newFont;
      };
})();