import { create } from 'zustand'

type TopbarAction = {
  label: string
  icon?: React.ComponentType
  onClick: () => void
}

interface TopbarStore {
  title: string
  actions?: TopbarAction[]
  setTopbar: (title: string, actions?: TopbarAction[]) => void
}

export const useTopbarStore = create<TopbarStore>((set) => ({
  title: '',
  actions: [],
  setTopbar: (title, actions) => set({ title, actions }),
}))