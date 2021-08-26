export default function Editor({target, initialState = {
  title: '',
  content: ''
}, onEditing}) {
  const editor = document.createElement('div');
  let isInitialize = false

  target.appendChild(editor);

  this.state = initialState;

  this.setState = (nextState) => {
    this.state = nextState;
    editor.querySelector('[name=title]').value = this.state.title;
    editor.querySelector('[name=content]').value = this.state.content;
    this.render(); 
  }

  this.render = () => {
    if(!isInitialize) {
      editor.innerHTML = `
        <input type="text" name="title" style="width:600px; display:block" value="${this.state.title}" />
        <textarea name="content" style="width:600px; height:400px">${this.state.content}</textarea>
      `

      isInitialize = true;
    }
  }

  this.render();

  editor.addEventListener('keyup', e => {
    const {target} = e;
    const name = target.getAttribute('name');

    if(this.state[name] !== undefined) {
      const nextState = {
        ...this.state,
        [name]: target.value
      }

      this.setState(nextState);
      onEditing(this.state);
    }
  })
}