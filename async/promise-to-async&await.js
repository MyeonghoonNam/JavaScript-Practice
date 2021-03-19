class UserStorage{
  async loginUser(id, password){
    setTimeout(() => {
      if (id === 'hoon' && password === '0822') {
        return id;
      } else {
        return new Error('not found');
      }
    }, 1000);
  }

  async getRoles(user){
    setTimeout(() => {
      if (user === 'hoon') {
        return {name: 'hoon', role: 'admin'};
      } else {
        return new Error('not found2');
      }
    }, 1000);

  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your pw');

userStorage.loginUser(id, password)
.then(user => userStorage.getRoles(user))
.then(user => alert(`Hello ${user.name}, you have a ${user.role}`))
.catch(console.log)

