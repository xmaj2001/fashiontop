import { createFileRoute } from '@tanstack/react-router'
import logo from '../logo.svg'
import HomePage from '@/pages/HomePage'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
  <HomePage />
  )
}
