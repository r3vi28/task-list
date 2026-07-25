import { useTasks } from './hooks/useTasks';
import { TaskInput } from './components/TaskInput';
import { TaskFilter } from './components/TaskFilter';
import { TaskItem } from './components/TaskItem';

function App() {
    const { filteredTasks, filter, setFilter, addTask, toggleTask, deleteTask } = useTasks();

    return (
      <div
        style={{
          width: '100%',
          maxWidth: '520px',
          margin: '0 auto',
        }}
      >
        <h1
          style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '24px',
            textAlign: 'center',
          }}
        >
          Lista de Tareas
        </h1>

        <TaskInput onAdd={addTask} />

        <TaskFilter filter={filter} onFilterChange={setFilter} />

        {filteredTasks.length === 0 ? (
          <p
            style={{
              textAlign: 'center',
              color: '#9ca3af',
              marginTop: '32px',
              fontSize: '15px',
            }}
          >
            No hay tareas para mostrar.
          </p>
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
    );
}

export default App;