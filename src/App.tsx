import { useTasks } from './hooks/useTasks';
import { TaskInput } from './components/TaskInput';
import { TaskFilter } from './components/TaskFilter';
import { TaskItem } from './components/TaskItem';

function App() {
  const { filteredTasks, filter, setFilter, addTask, toggleTask, deleteTask } = useTasks();

  const total = filteredTasks.length;

  return (
    <div style={{ width: '100%', maxWidth: '540px', margin: '0 auto' }}>

      {/* Header */}
      <div style={{ textAlign: 'center', marginBottom: '32px' }}>
        <h1 style={{
          fontSize: '32px',
          fontWeight: '800',
          background: 'linear-gradient(90deg, #60a5fa, #a78bfa)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          marginBottom: '6px',
        }}>
          Lista de Tareas
        </h1>
        <p style={{ color: '#64748b', fontSize: '14px' }}>
          {total === 0 ? 'Sin tareas por mostrar' : `${total} tarea${total !== 1 ? 's' : ''}`}
        </p>
      </div>

      {/* Card principal */}
      <div style={{
        backgroundColor: '#1e293b',
        borderRadius: '16px',
        padding: '24px',
        boxShadow: '0 25px 50px rgba(0,0,0,0.4)',
        border: '1px solid #334155',
      }}>
        <TaskInput onAdd={addTask} />
        <TaskFilter filter={filter} onFilterChange={setFilter} />

        <div style={{ marginTop: '8px' }}>
          {filteredTasks.length === 0 ? (
            <div style={{
              textAlign: 'center',
              padding: '40px 0',
              color: '#475569',
            }}>
              <div style={{ fontSize: '36px', marginBottom: '8px' }}>📭</div>
              <p style={{ fontSize: '14px' }}>No hay tareas aquí</p>
            </div>
          ) : (
            filteredTasks.map(task => (
              <TaskItem
                key={task.id}
                task={task}
                onToggle={toggleTask}
                onDelete={deleteTask}
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default App;