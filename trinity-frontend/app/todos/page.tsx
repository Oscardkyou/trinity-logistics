'use client'

import { useState, useEffect } from 'react'
import { todos } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface Todo {
  id: string
  title: string
  description: string
  priority: number
  due_date: string
  completed: boolean
}

export default function TodosPage() {
  const [todoList, setTodoList] = useState<Todo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [newTodo, setNewTodo] = useState({
    title: '',
    description: '',
    priority: 1,
    due_date: '',
    completed: false,
  })

  useEffect(() => {
    loadTodos()
  }, [])

  const loadTodos = async () => {
    try {
      const data = await todos.getAll()
      setTodoList(data)
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to load todos')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const created = await todos.create(newTodo)
      setTodoList([...todoList, created])
      setNewTodo({
        title: '',
        description: '',
        priority: 1,
        due_date: '',
        completed: false,
      })
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to create todo')
    }
  }

  const handleToggleComplete = async (id: string, completed: boolean) => {
    try {
      await todos.update(id, { completed })
      setTodoList(todoList.map(todo => 
        todo.id === id ? { ...todo, completed } : todo
      ))
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to update todo')
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await todos.delete(id)
      setTodoList(todoList.filter(todo => todo.id !== id))
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to delete todo')
    }
  }

  if (loading) return <div className="p-8">Loading...</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Задачи</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Новая задача</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Название</Label>
              <Input
                id="title"
                value={newTodo.title}
                onChange={e => setNewTodo({ ...newTodo, title: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="description">Описание</Label>
              <Textarea
                id="description"
                value={newTodo.description}
                onChange={e => setNewTodo({ ...newTodo, description: e.target.value })}
              />
            </div>
            <div>
              <Label htmlFor="priority">Приоритет</Label>
              <Input
                id="priority"
                type="number"
                min="1"
                max="5"
                value={newTodo.priority}
                onChange={e => setNewTodo({ ...newTodo, priority: parseInt(e.target.value) })}
              />
            </div>
            <div>
              <Label htmlFor="due_date">Срок</Label>
              <Input
                id="due_date"
                type="datetime-local"
                value={newTodo.due_date}
                onChange={e => setNewTodo({ ...newTodo, due_date: e.target.value })}
              />
            </div>
            <Button type="submit">Добавить задачу</Button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Список задач</h2>
          <div className="space-y-4">
            {todoList.map(todo => (
              <div
                key={todo.id}
                className={`p-4 rounded-lg border ${
                  todo.completed ? 'bg-gray-50' : 'bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className={`font-medium ${todo.completed ? 'line-through text-gray-500' : ''}`}>
                      {todo.title}
                    </h3>
                    <p className="text-sm text-gray-600">{todo.description}</p>
                    <div className="text-sm text-gray-500 mt-1">
                      Приоритет: {todo.priority} | Срок: {new Date(todo.due_date).toLocaleString()}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button
                      variant="outline"
                      onClick={() => handleToggleComplete(todo.id, !todo.completed)}
                    >
                      {todo.completed ? 'Отменить' : 'Завершить'}
                    </Button>
                    <Button
                      variant="destructive"
                      onClick={() => handleDelete(todo.id)}
                    >
                      Удалить
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
