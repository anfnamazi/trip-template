import { Handle, Position } from '@xyflow/react';
import type { ReactNode } from 'react';

const postion = {
  '1': { source: Position.Right, target: Position.Left },
  '2': { source: Position.Top, target: Position.Top },
  '3': { source: Position.Bottom, target: Position.Left },
  '4': { source: Position.Right, target: Position.Left },
};

export default function TravelNode({
  data,
  id,
}: {
  id: string;
  data: {
    icon: ReactNode;
    label: string;
  };
}) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: id === '3' || id === '4' ? 'row-reverse' : 'row',
        gap: 12,
        direction: 'rtl',
      }}
    >
      <div
        style={{ textAlign: 'center', background: '#F5F5F5', padding: '20px', borderRadius: 16 }}
      >
        {data.icon}
      </div>
      <div
        style={{
          textAlign: 'center',
          background: '#F5F5F5',
          padding: '20px',
          borderRadius: 16,
        }}
      >
        {data.label}
      </div>

      {/* Handles define connection points */}
      <Handle
        type="source"
        position={postion[id as '1' | '2' | '3' | '4'].source}
        style={id === '2' ? { left: '85%' } : id === '3' ? { left: '17%' } : {}}
      />
      <Handle
        type="target"
        position={postion[id as '1' | '2' | '3' | '4'].target}
        style={id === '2' ? { left: '80%' } : {}}
      />
    </div>
  );
}
