import {
  addEdge,
  type Connection,
  type Edge,
  getConnectedEdges,
  getIncomers,
  getOutgoers,
  type Node,
  ReactFlow,
  useEdgesState,
  useNodesState,
} from '@xyflow/react';

import '@xyflow/react/dist/style.css';
import TravelNode from './TravelNode.tsx';

interface Props {
  nodes: Node[];
  edges: Edge[];
}

const nodeTypes = { travel: TravelNode };

export default function Graph(props: Props) {
  const [nodes, , onNodesChange] = useNodesState(props.nodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(props.edges);

  const onConnect = (params: Connection) => setEdges((eds) => addEdge(params, eds));

  const onNodesDelete = (deleted: Node[]) => {
    let remainingNodes = [...nodes];
    setEdges(
      deleted.reduce<Edge[]>((acc, node) => {
        const incomers = getIncomers(node, remainingNodes, acc);
        const outgoers = getOutgoers(node, remainingNodes, acc);
        const connectedEdges = getConnectedEdges([node], acc);

        const remainingEdges = acc.filter((edge) => !connectedEdges.includes(edge));

        const createdEdges: Edge[] = incomers.flatMap(({ id: source }) =>
          outgoers.map(({ id: target }) => ({
            id: `${source}->${target}`,
            source,
            target,
          }))
        );

        remainingNodes = remainingNodes.filter((rn) => rn.id !== node.id);

        return [...remainingEdges, ...createdEdges];
      }, edges)
    );
  };

  return (
    <div style={{ height: 192, width: 696 }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onNodesDelete={onNodesDelete}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
        proOptions={{ hideAttribution: true }}
        panOnDrag={false}
        panOnScroll={false}
        zoomOnScroll={false}
        zoomOnPinch={false}
        zoomOnDoubleClick={false}
        nodesDraggable={false}
        nodesConnectable={false}
        elementsSelectable={false}
        nodeTypes={nodeTypes}
      ></ReactFlow>
    </div>
  );
}
