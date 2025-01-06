'use client'

import { useState, useEffect } from 'react'
import { notes } from '@/lib/api'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

interface Note {
  id: string
  title: string
  content: string
  is_public: boolean
  tags: string[]
}

export default function NotesPage() {
  const [notesList, setNotesList] = useState<Note[]>([])
  const [tags, setTags] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedTag, setSelectedTag] = useState('')
  const [newNote, setNewNote] = useState({
    title: '',
    content: '',
    is_public: false,
    tags: [] as string[],
  })
  const [newTag, setNewTag] = useState('')

  useEffect(() => {
    loadNotes()
    loadTags()
  }, [])

  const loadNotes = async () => {
    try {
      const data = await notes.getAll({
        search: searchTerm,
        tag: selectedTag,
      })
      setNotesList(data)
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to load notes')
    } finally {
      setLoading(false)
    }
  }

  const loadTags = async () => {
    try {
      const data = await notes.getTags()
      setTags(data)
    } catch (err: any) {
      console.error('Failed to load tags:', err)
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      const created = await notes.create(newNote)
      setNotesList([...notesList, created])
      setNewNote({
        title: '',
        content: '',
        is_public: false,
        tags: [],
      })
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to create note')
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await notes.delete(id)
      setNotesList(notesList.filter(note => note.id !== id))
    } catch (err: any) {
      setError(err.response?.data?.detail || 'Failed to delete note')
    }
  }

  const handleAddTag = () => {
    if (newTag && !newNote.tags.includes(newTag)) {
      setNewNote({
        ...newNote,
        tags: [...newNote.tags, newTag],
      })
      setNewTag('')
    }
  }

  const handleRemoveTag = (tagToRemove: string) => {
    setNewNote({
      ...newNote,
      tags: newNote.tags.filter(tag => tag !== tagToRemove),
    })
  }

  if (loading) return <div className="p-8">Loading...</div>

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Заметки</h1>

      {error && (
        <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-xl font-semibold mb-4">Новая заметка</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <Label htmlFor="title">Название</Label>
              <Input
                id="title"
                value={newNote.title}
                onChange={e => setNewNote({ ...newNote, title: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="content">Содержание</Label>
              <Textarea
                id="content"
                value={newNote.content}
                onChange={e => setNewNote({ ...newNote, content: e.target.value })}
                required
              />
            </div>
            <div>
              <Label htmlFor="is_public">Публичная заметка</Label>
              <Input
                id="is_public"
                type="checkbox"
                checked={newNote.is_public}
                onChange={e => setNewNote({ ...newNote, is_public: e.target.checked })}
              />
            </div>
            <div>
              <Label htmlFor="tags">Теги</Label>
              <div className="flex gap-2">
                <Input
                  id="tags"
                  value={newTag}
                  onChange={e => setNewTag(e.target.value)}
                  placeholder="Добавить тег"
                />
                <Button type="button" onClick={handleAddTag}>
                  Добавить
                </Button>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {newNote.tags.map(tag => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm flex items-center"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => handleRemoveTag(tag)}
                      className="ml-1 text-blue-600 hover:text-blue-800"
                    >
                      ×
                    </button>
                  </span>
                ))}
              </div>
            </div>
            <Button type="submit">Создать заметку</Button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4">Список заметок</h2>
          <div className="space-y-4 mb-4">
            <Input
              placeholder="Поиск заметок..."
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              className="mb-2"
            />
            <select
              value={selectedTag}
              onChange={e => setSelectedTag(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="">Все теги</option>
              {tags.map(tag => (
                <option key={tag} value={tag}>
                  {tag}
                </option>
              ))}
            </select>
            <Button onClick={loadNotes}>Применить фильтры</Button>
          </div>
          <div className="space-y-4">
            {notesList.map(note => (
              <div key={note.id} className="p-4 rounded-lg border bg-white">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-medium">{note.title}</h3>
                  <Button
                    variant="destructive"
                    onClick={() => handleDelete(note.id)}
                  >
                    Удалить
                  </Button>
                </div>
                <p className="text-gray-600 mb-2">{note.content}</p>
                <div className="flex flex-wrap gap-2">
                  {note.tags.map(tag => (
                    <span
                      key={tag}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-500 mt-2">
                  {note.is_public ? 'Публичная' : 'Приватная'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
