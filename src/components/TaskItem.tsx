import type { Task } from '../types/task';

interface Props {
  task: Task;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
}

export function TaskItem({ task, onToggle, onDelete }: Props) {
  const completed = task.status === 'completed';

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        padding: '14px 16px',
        backgroundColor: completed ? '#0f172a' : '#263349',
        borderRadius: '10px',
        marginBottom: '8px',
        border: `1px solid ${completed ? '#1e293b' : '#334155'}`,
        transition: 'all 0.2s',
        opacity: completed ? 0.6 : 1,
      }}
    >
      {/* Checkbox personalizado */}
      <div
        onClick={() => onToggle(task.id)}
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          border: `2px solid ${completed ? '#3b82f6' : '#475569'}`,
          backgroundColor: completed ? '#3b82f6' : 'transparent',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          flexShrink: 0,
          transition: 'all 0.2s',
        }}
      >
        {completed && (
          <span style={{ color: 'white', fontSize: '11px', fontWeight: 'bold' }}>✓</span>
        )}
      </div>

      <span style={{
        flex: 1,
        fontSize: '14px',
        color: completed ? '#475569' : '#e2e8f0',
        textDecoration: completed ? 'line-through' : 'none',
        transition: 'all 0.2s',
      }}>
        {task.title}
      </span>

      <button
        onClick={() => onDelete(task.id)}
        style={{
          background: 'none',
          border: 'none',
          color: '#475569',
          cursor: 'pointer',
          fontSize: '16px',
          padding: '2px 6px',
          borderRadius: '6px',
          transition: 'all 0.2s',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.color = '#ef4444';
          e.currentTarget.style.backgroundColor = '#1e293b';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.color = '#475569';
          e.currentTarget.style.backgroundColor = 'transparent';
        }}
      >
        ✕
      </button>
    </div>
  );
}