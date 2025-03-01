/**
 * Topbar Store
 * 
 * A Zustand-powered store that manages the dynamic content of the application's top bar.
 * This store provides centralized state management for the topbar's title and action buttons,
 * allowing any page component to control what appears in the top bar.
 * 
 * Dependencies:
 * - zustand: Lightweight state management
 * 
 * Usage:
 * ```tsx
 * const setTopbar = useTopbarStore((state) => state.setTopbar)
 * 
 * // Set title and actions
 * setTopbar("Page Title", [
 *   {
 *     label: "Action",
 *     icon: IconComponent,
 *     onClick: () => console.log("Action clicked")
 *   }
 * ])
 * ```
 */

import { create } from 'zustand'

/**
 * Defines the structure of a topbar action button
 * @property label - Text description of the action (for accessibility)
 * @property icon - Optional Lucide icon component
 * @property onClick - Handler function for the action
 */
type TopbarAction = {
  label: string
  icon?: React.ComponentType
  onClick: () => void
}

/**
 * Defines the structure of the topbar store
 * @property title - Current page title displayed in the topbar
 * @property actions - Array of action buttons to display
 * @property setTopbar - Function to update both title and actions
 */
interface TopbarStore {
  title: string
  actions?: TopbarAction[]
  setTopbar: (title: string, actions?: TopbarAction[]) => void
}

/**
 * Creates the Zustand store with initial empty state
 * The store provides a single method to update both title and actions simultaneously
 */
export const useTopbarStore = create<TopbarStore>((set) => ({
  title: '',
  actions: [],
  setTopbar: (title, actions) => set({ title, actions }),
}))