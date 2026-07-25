import type { FilterType } from '../types/task';

interface Props {
    filter: FilterType;
    onFilterChange: (filter: FilterType) => void;
}

const filters: { label: string; value: FilterType }[] = [
    { label: 'Todas', value: 'all' },
    { label: 'Pendientes', value: 'pending' },
    { label: 'Completadas', value: 'completed' },
];

export function TaskFilter({ filter, onFilterChange }: Props) {
    return (
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
        {filters.map(f => (
            <button
            key={f.value}
            onClick={() => onFilterChange(f.value)}
            style={{
                padding: '6px 16px',
                borderRadius: '20px',
                border: '1px solid #3b82f6',
                backgroundColor: filter === f.value ? '#3b82f6' : 'white',
                color: filter === f.value ? 'white' : '#3b82f6',
                cursor: 'pointer',
                fontSize: '14px',
            }}
            >
            {f.label}
            </button>
        ))}
        </div>
    );
}