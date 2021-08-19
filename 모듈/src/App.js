export default function App() {
  this.render = () => {
    alert('hello!');
  };

  this.render();
}

export const printToday = () => {
  console.log(new Date().toLocaleDateString());
};
