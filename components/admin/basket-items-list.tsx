"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd"
import { GripVertical, Plus, Save, Trash2, X } from "lucide-react"

interface BasketItemsListProps {
  items: string[]
  onChange: (items: string[]) => void
}

export function BasketItemsList({ items, onChange }: BasketItemsListProps) {
  const [newItem, setNewItem] = useState("")
  const [editingIndex, setEditingIndex] = useState<number | null>(null)
  const [editingValue, setEditingValue] = useState("")

  const handleAddItem = () => {
    if (newItem.trim()) {
      onChange([...items, newItem.trim()])
      setNewItem("")
    }
  }

  const handleRemoveItem = (index: number) => {
    const newItems = [...items]
    newItems.splice(index, 1)
    onChange(newItems)
  }

  const handleStartEditing = (index: number) => {
    setEditingIndex(index)
    setEditingValue(items[index])
  }

  const handleSaveEdit = () => {
    if (editingIndex !== null && editingValue.trim()) {
      const newItems = [...items]
      newItems[editingIndex] = editingValue.trim()
      onChange(newItems)
      setEditingIndex(null)
    }
  }

  const handleCancelEdit = () => {
    setEditingIndex(null)
  }

  const handleDragEnd = (result: any) => {
    if (!result.destination) return

    const reorderedItems = [...items]
    const [removed] = reorderedItems.splice(result.source.index, 1)
    reorderedItems.splice(result.destination.index, 0, removed)

    onChange(reorderedItems)
  }

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <Input
          placeholder="Adicionar novo item..."
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleAddItem()}
        />
        <Button onClick={handleAddItem} className="shrink-0">
          <Plus className="h-4 w-4 mr-2" />
          Adicionar
        </Button>
      </div>

      <div className="border rounded-md">
        {items.length === 0 ? (
          <div className="p-4 text-center text-muted-foreground">
            Nenhum item adicionado. Adicione itens à cesta usando o campo acima.
          </div>
        ) : (
          <DragDropContext onDragEnd={handleDragEnd}>
            <Droppable droppableId="items-list">
              {(provided) => (
                <ul {...provided.droppableProps} ref={provided.innerRef} className="divide-y">
                  {items.map((item, index) => (
                    <Draggable key={`${item}-${index}`} draggableId={`${item}-${index}`} index={index}>
                      {(provided) => (
                        <li
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          className="flex items-center p-3 group hover:bg-muted/30"
                        >
                          <div {...provided.dragHandleProps} className="mr-2 cursor-grab text-muted-foreground">
                            <GripVertical className="h-5 w-5" />
                          </div>

                          {editingIndex === index ? (
                            <div className="flex-1 flex gap-2">
                              <Input
                                value={editingValue}
                                onChange={(e) => setEditingValue(e.target.value)}
                                autoFocus
                                onKeyDown={(e) => e.key === "Enter" && handleSaveEdit()}
                              />
                              <Button size="icon" onClick={handleSaveEdit} variant="ghost" className="h-9 w-9">
                                <Save className="h-4 w-4 text-green-600" />
                              </Button>
                              <Button size="icon" onClick={handleCancelEdit} variant="ghost" className="h-9 w-9">
                                <X className="h-4 w-4 text-red-600" />
                              </Button>
                            </div>
                          ) : (
                            <>
                              <span className="flex-1" onDoubleClick={() => handleStartEditing(index)}>
                                {item}
                              </span>
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => handleStartEditing(index)}
                                className="h-8 w-8 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Save className="h-4 w-4" />
                              </Button>
                              <Button
                                size="icon"
                                variant="ghost"
                                onClick={() => handleRemoveItem(index)}
                                className="h-8 w-8 text-red-600 opacity-0 group-hover:opacity-100 transition-opacity"
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </>
                          )}
                        </li>
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                </ul>
              )}
            </Droppable>
          </DragDropContext>
        )}
      </div>

      <div className="text-sm text-muted-foreground">
        <p>Dica: Arraste os itens para reordenar. Clique duas vezes em um item para editá-lo.</p>
      </div>
    </div>
  )
}

