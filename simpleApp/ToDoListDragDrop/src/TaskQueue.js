export default function TaskQueue() {
  const tasks = [];

  this.addTask = (task) => {
    tasks.push(task);
  };

  this.run = () => {
    if (tasks.length > 0) {
      const task = tasks.shift();
      task();
      this.run();
    }
  };

  this.hasTask = () => tasks.length > 0;
}
