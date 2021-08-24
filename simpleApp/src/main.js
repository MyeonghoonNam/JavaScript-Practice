import TodoList from './TodoList.js';
import TodoForm from './TodoForm.js';

const DUMMY_DATA = [
  {
    _id: 1,
    content: '자바스크립트 학습하기',
    isCompleted: true,
  },
  {
    _id: 2,
    content: '리액트 학습하기',
    isCompleted: false,
  },
];

const target = document.querySelector('#app');

new TodoForm({
  target,
  onSubmit: (content) => {
    alert(`${content} 추가`);
  },
});

new TodoList({
  target,
  initialState: DUMMY_DATA,
  onToggle: (id) => {
    alert(`${id} 토글`);
  },
  onRemove: (id) => {
    alert(`${id} 삭제`);
  },
});
