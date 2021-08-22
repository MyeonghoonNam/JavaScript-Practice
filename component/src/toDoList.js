export default function toDoList({ target, initialState, onToDo }) {
  try {
    if(!new.target) {
      throw new Error('경고 : toDoList 컴포넌트를 new로 생성해주세요 !')
    }
  
    const toDoList = document.createElement('div');
  
    target.appendChild(toDoList);
  
    this.state = initialState;
  
    this.setState = (nextState) => {
      this.state = nextState;
      this.render();
    };
  
    this.render = () => {
      toDoList.innerHTML = createToDoList();

      toDoList.addEventListener('click', (e) => {
        console.log(e.target);
      })
    };
  
    const createToDoList = () => {
      return `
        <ul>
          ${this.state.map(({ text, isCompleted }, index) => `
            <li data-index="${index}">
              <span class="toDo-text${isCompleted ? ' isCompleted' : ''}">${text}</span>
            </li>
          `).join('')}
        </ul>
      `;      
    }

    this.render();
    
  } catch(e) {
    alert(e.message);
  }
}
