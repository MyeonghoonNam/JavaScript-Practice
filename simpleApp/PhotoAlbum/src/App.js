import Nodes from './Nodes.js';
import ImageViewer from './ImageViewer.js';
import { request } from './api.js';

export default function App({ target }) {
  this.state = {
    isRoot: true,
    nodes: [],
    selectedImageUrl: null,
  };

  this.setState = (nextState) => {
    this.state = nextState;

    nodes.setState({
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
      selectedImageUrl: null,
    });

    imageViewer.setState({
      selectedImageUrl: this.state.selectedImageUrl,
    });
  };

  const nodes = new Nodes({
    target,
    initialState: {
      isRoot: this.state.isRoot,
      nodes: this.state.nodes,
    },
    onClick: async (node) => {
      if (node.type === 'DIRECTORY') {
        await fetchNodes(node.id);
      } else if (node.type === 'FILE') {
        this.setState({
          ...this.state,
          selectedImageUrl: `https://cat-api.roto.codes/static${node.filePath}`,
        });
      }
    },
  });

  const imageViewer = new ImageViewer({
    target,
    onClose: () => {
      this.setState({
        ...this.state,
        selectedImageUrl: null,
      });
    },
  });

  const fetchNodes = async (id) => {
    try {
      const nodes = await request(id ? `/${id}` : '/');

      this.setState({
        ...this.state,
        isRoot: id ? false : true,
        nodes,
      });
    } catch (e) {
      alert(e.message);
    }
  };

  fetchNodes();
}
