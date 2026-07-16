import React, { useEffect, useState } from 'react'

interface Category {
  id: number
  name: string
}

interface Props {
  selectedCategory: string
  onChange: (value: string) => void
}

export function CategorySelector({ selectedCategory, onChange }: Props) {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Fetch categories from VTEX open API
    fetch('/api/catalog_system/pub/category/tree/0?depth=1')
      .then(res => res.json())
      .then(data => {
        setCategories(data ?? [])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [])

  return (
    <div>
      <label>Category</label>
      <select
        value={selectedCategory || ''}
        onChange={e => onChange(e.target.value)}
        disabled={loading}
      >
        <option value="">Select a category</option>
        {categories.map(cat => (
          <option key={cat.id} value={cat.id}>{cat.name}</option>
        ))}
      </select>
      {loading && <span>Loading categories...</span>}
    </div>
  )
}