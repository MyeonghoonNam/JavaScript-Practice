export default function toDoCount({ target, initialState }) {
  try {
    if (!new.target) {
      throw new Error('경고 : toDoCount 컴포넌트를 new로 생성해주세요 !');
    }

    const toDoCount = document.createElement('section');

    target.appendChild(toDoCount);

    this.state = initialState;

    this.setState = (updateState) => {
      this.state = updateState;
      this.render();
    };

    this.render = () => {
      const [completedToDoCount, totalToDoCount] = calculateToDoCount();

      toDoCount.innerHTML = `
        <div class="todo__count">Completed ToDoCount : ${completedToDoCount} / ${totalToDoCount}</div>
      `;
    };

    const calculateToDoCount = () => {
      const completedToDoCount = this.state.filter(
        ({ isCompleted }) => isCompleted
      ).length;
      const totalToDoCount = this.state.length;

      return [completedToDoCount, totalToDoCount];
    };

    this.render();
  } catch (e) {
    alert(e.message);
  }
}
