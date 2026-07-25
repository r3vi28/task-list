import { useState } from 'react';

interface Props {
    onAdd: (title: string) => void;
}

export function TaskInput({ onAdd }: Props) {
    const [value, setValue] = useState('');

    function handleSubmit() {
        if (value.trim() === '') return;
        onAdd(value.trim());
        setValue('');
    }

    function handleKeyDown(e: React.KeyboardEvent<HTMLInputElement>) {
        if (e.key === 'Enter') handleSubmit();
    }

    return (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        <input
            type="text"
            placeholder="Nueva tarea..."
            value={value}
            onChange={e => setValue(e.target.value)}
            onKeyDown={handleKeyDown}
            style={{
            flex: 1,
            padding: '10px 14px',
            borderRadius: '8px',
            border: '1px solid #d1d5db',
            fontSize: '15px',
            outline: 'none',
            }}
        />
        <button
            onClick={handleSubmit}
            style={{
            padding: '10px 20px',
            backgroundColor: '#3b82f6',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            fontSize: '15px',
            cursor: 'pointer',
            }}
        >
            Agregar
        </button>
        </div>
    );
}