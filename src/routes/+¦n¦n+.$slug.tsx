import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/+¦n¦n+/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/+¦n¦n+/$slug"!</div>
}
