export const assignDepth = (nodemap: Map<any, any>, depth: number = 0) => {
  for (let node of nodemap.values()) {
    node.depth = depth;
    if ((node.children as Map<any, any>).size) {
      assignDepth(node.children, depth + 1);
    }
  }
};

export const findParentNode = (targetId: any, nodemap: any): any => {
  let parentNode = null;
  for (let node of nodemap.values()) {
    if (node.id === targetId) {
      parentNode = node;
      break;
    }
    const childParentNode = findParentNode(targetId, node.children);
    if (childParentNode !== null) {
      parentNode = childParentNode;
      break;
    }
  }
  return parentNode;
};

export const makeMap = (nodes: any) => {
  const linearMap = new Map();
  nodes.forEach((node: any) =>
    linearMap.set(node.id, { ...node, children: new Map() })
  );

  const nodeMap = new Map();
  linearMap.forEach((value, key, map) => {
    const { children, parentId } = value;
    if (!parentId) nodeMap.set(key, value);

    map.forEach((value1, key1) => {
      const { parentId } = value1;
      if (key === parentId) {
        children.set(key1, value1);
      }
    });

    if (parentId && map.has(parentId)) {
      const updatingNode = map.get(parentId);
      updatingNode.children.set(key, value);
      map.delete(key);
    }
  });
  assignDepth(nodeMap);
  return nodeMap;
};
