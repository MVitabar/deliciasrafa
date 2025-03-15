import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface TimelineEvent {
  id: string
  date: string
  title: string
  description: string
  status: string
}

interface OrderTimelineProps {
  events: TimelineEvent[]
}

export function OrderTimeline({ events }: OrderTimelineProps) {
  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <Card key={event.id} className="relative border-rose-100">
          {index !== events.length - 1 && <div className="absolute left-5 top-[52px] bottom-0 w-0.5 bg-rose-200" />}
          <CardContent className="p-4 flex gap-4">
            <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-rose-100 text-rose-600">
              <div className="h-2 w-2 rounded-full bg-rose-600" />
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <h4 className="font-medium text-rose-800">{event.title}</h4>
                  <Badge variant="outline" className="text-rose-600 border-rose-200">
                    {event.status}
                  </Badge>
                </div>
                <time className="text-sm text-muted-foreground">{new Date(event.date).toLocaleString("pt-BR")}</time>
              </div>
              <p className="mt-1 text-sm text-rose-600">{event.description}</p>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}

