import { useState } from 'react';
import type { Task, FilterType } from '../types/task';

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<FilterType>('all');

    function addTask(title: string) {
        const newTask: Task = {
        id: Date.now(),
        title,
        status: 'pending',
        };
        setTasks(prev => [...prev, newTask]);
    }

    function toggleTask(id: number) {
        setTasks(prev =>
        prev.map(task =>
            task.id === id
            ? { ...task, status: task.status === 'pending' ? 'completed' : 'pending' }
            : task
        )
        );
    }

    function deleteTask(id: number) {
        setTasks(prev => prev.filter(task => task.id !== id));
    }

    const filteredTasks = tasks.filter(task => {
        if (filter === 'all') return true;
        return task.status === filter;
    });

    return { filteredTasks, filter, setFilter, addTask, toggleTask, deleteTask };
}