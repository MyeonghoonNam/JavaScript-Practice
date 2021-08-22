export default function toDoList({ target, initialState }) {
  try {
    if(!new.target) {
      throw new Error('경고 : toDoList 컴포넌트를 new로 생성해주세요 !')
  
      return;
    }
  
    const toDoList = document.createElement('div');
  
    target.appendChild(toDoList);
  
    this.state = initialState;
  
    this.setState = (nextState) => {
      this.state = nextState;
      this.render();
    };
  
    this.render = () => {
      toDoList.innerHTML = `
        <ul>
          ${this.state.map(({ text }) => `<li>${text}</li>`).join('')}
        </ul>
      `;
    };
  
    this.render();
    
  } catch(e) {
    alert(e.message);
  }
}
