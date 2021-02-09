class UserStorage {
  loginUser(id, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (
          id === 'hoon' && password === '0822'
        ) {
          resolve(id);
        } else {
          reject(new Error('not found'));
        }
      }, 2000);
    })
  }

  getRoles(user){
    new Promise((resolve, reject) => {
      setTimeout(() => {
        if (user === 'hoon') {
          resolve({name:'hoon', role:'admin'});
        } else {
          reject(new Error('not found2'));
        }
      }, 1000);
    })
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your pw');

userStorage.loginUser(id, password)
.then(userStorage.getRoles)
.then(user => alert(`Hello ${user.name}, you have a ${user.role}`))
.catch(console.log)
