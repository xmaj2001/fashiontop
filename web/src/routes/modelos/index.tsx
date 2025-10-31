import { createFileRoute } from '@tanstack/react-router'
import ModelosPage from '@/pages/modelos/ModelosPage'

function modelosPage() {
  return (
  <ModelosPage />
  )
}

export const Route = createFileRoute('/modelos/')({
  component: modelosPage,
})