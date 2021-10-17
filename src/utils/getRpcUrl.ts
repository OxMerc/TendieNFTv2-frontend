import sample from 'lodash/sample'

// Array of available nodes to connect to
// export const nodes = [process.env.REACT_APP_NODE_1, process.env.REACT_APP_NODE_2, process.env.REACT_APP_NODE_3]
export const nodes = process.env.REACT_APP_APP_ENV === 'test' ? [process.env.REACT_APP_TEST_NODE] : [process.env.REACT_APP_MAIN_NODE];

const getNodeUrl = () => {
  return sample(nodes)
}

export default getNodeUrl
