import { useState } from 'react';

interface Props {
  onAdd: (title: string) => void;
}

export function TaskInput({ onAdd }: Props) {
  const [value, setValue] = useState('');
  const [focused, setFocused] = useState(false);

  function handleSubmit() {
    if (value.trim() === '') return;
    onAdd(value.trim());
    setValue('');
  }

  function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') handleSubmit();
  }

  return (
    <div style={{ display: 'flex', gap: '8px', marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Escribe una nueva tarea..."
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          flex: 1,
          padding: '11px 16px',
          borderRadius: '10px',
          border: `1px solid ${focused ? '#60a5fa' : '#334155'}`,
          backgroundColor: '#0f172a',
          color: '#f1f5f9',
          fontSize: '14px',
          outline: 'none',
          transition: 'border-color 0.2s',
        }}
      />
      <button
        onClick={handleSubmit}
        style={{
          padding: '11px 20px',
          backgroundColor: '#3b82f6',
          color: 'white',
          border: 'none',
          borderRadius: '10px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer',
          transition: 'background-color 0.2s',
        }}
        onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2563eb')}
        onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#3b82f6')}
      >
        + Agregar
      </button>
    </div>
  );
}