export default function header({ target, text, icon }) {
  try {
    if (!new.target) {
      throw new Error('경고 : header 컴포넌트를 new로 생성해주세요 !');
    }

    const header = document.createElement('header');
    header.setAttribute('class', 'header');

    target.appendChild(header);

    this.render = () => {
      header.innerHTML = `${icon}${text}`;
    };

    this.render();
  } catch (e) {
    alert(e.message);
  }
}
