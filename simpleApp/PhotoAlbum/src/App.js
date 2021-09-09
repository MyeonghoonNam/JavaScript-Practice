import Nodes from './Nodes.js';
import { request } from './api.js';

export default function App({ target }) {
  this.state = {
    isRoot: true,
    nodes: [],
  };

  this.setState = (nextState) => {
    this.state = nextState;

    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    });
  };

  const nodes = new Nodes({
    target,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    },
    onClick: () => {},
  });

  const fetchNodes = async (id) => {
    const nodes = await request(id ? `/${id}` : '/');

    this.setState({
      ...this.state,
      isRoot: id ? false : true,
      nodes,
    });
  };

  fetchNodes();
}
