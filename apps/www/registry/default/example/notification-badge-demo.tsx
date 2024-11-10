import { Bell } from "lucide-react"
import { Button } from "@/registry/default/ui/button"
import { NotificationBadge } from "@/registry/default/ui/notification-badge"

export default function NotificationBadgeDemo() {
  return (
    <div className="relative">
      <Button variant="outline" size="icon">
        <Bell className="h-4 w-4" />
      </Button>
      <NotificationBadge count={3} />
    </div>
  )
}
