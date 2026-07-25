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
    <div style={{
      display: 'flex',
      gap: '6px',
      marginBottom: '20px',
      backgroundColor: '#0f172a',
      padding: '4px',
      borderRadius: '10px',
    }}>
      {filters.map(f => (
        <button
          key={f.value}
          onClick={() => onFilterChange(f.value)}
          style={{
            flex: 1,
            padding: '8px 0',
            borderRadius: '8px',
            border: 'none',
            backgroundColor: filter === f.value ? '#3b82f6' : 'transparent',
            color: filter === f.value ? 'white' : '#64748b',
            cursor: 'pointer',
            fontSize: '13px',
            fontWeight: filter === f.value ? '600' : '400',
            transition: 'all 0.2s',
          }}
        >
          {f.label}
        </button>
      ))}
    </div>
  );
}