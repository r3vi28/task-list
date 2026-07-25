import type { Task } from '../types/task';

interface Props {
    task: Task;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

export function TaskItem({ task, onToggle, onDelete }: Props) {
    return (
        <div
        style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            padding: '12px 16px',
            backgroundColor: 'white',
            borderRadius: '8px',
            marginBottom: '8px',
            boxShadow: '0 1px 3px rgba(0,0,0,0.08)',
        }}
        >
        <input
            type="checkbox"
            checked={task.status === 'completed'}
            onChange={() => onToggle(task.id)}
            style={{ width: '18px', height: '18px', cursor: 'pointer' }}
        />
        <span
            style={{
            flex: 1,
            fontSize: '15px',
            textDecoration: task.status === 'completed' ? 'line-through' : 'none',
            color: task.status === 'completed' ? '#9ca3af' : '#111827',
            }}
        >
            {task.title}
        </span>
        <button
            onClick={() => onDelete(task.id)}
            style={{
            background: 'none',
            border: 'none',
            color: '#ef4444',
            cursor: 'pointer',
            fontSize: '18px',
            }}
        >
            ✕
        </button>
        </div>
    );
}