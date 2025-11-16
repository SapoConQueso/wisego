import { Bell, BookOpen, Calendar, GraduationCap, Info, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useNotifications } from "@/hooks/useNotifications";
import { formatDistanceToNow } from "date-fns";
import { es } from "date-fns/locale";

interface NotificationsPanelProps {
  onClose: () => void;
}

const typeIcons = {
  scholarship: BookOpen,
  fair: Calendar,
  admission: GraduationCap,
  general: Info
};

const typeColors = {
  scholarship: "bg-green-500/10 text-green-600 dark:text-green-400",
  fair: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  admission: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  general: "bg-gray-500/10 text-gray-600 dark:text-gray-400"
};

export function NotificationsPanel({ onClose }: NotificationsPanelProps) {
  const { notifications, loading, markAsRead, markAllAsRead, unreadCount } = useNotifications();

  if (loading) {
    return (
      <div className="p-6 text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-between p-4 border-b border-border">
        <div className="flex items-center gap-2">
          <Bell className="h-5 w-5 text-primary" />
          <h3 className="font-semibold text-lg">Notificaciones</h3>
          {unreadCount > 0 && (
            <Badge variant="destructive" className="rounded-full">
              {unreadCount}
            </Badge>
          )}
        </div>
        <div className="flex items-center gap-2">
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead}>
              Marcar todas
            </Button>
          )}
          <Button variant="ghost" size="icon" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </div>
      </div>

      <ScrollArea className="flex-1">
        {notifications.length === 0 ? (
          <div className="p-8 text-center text-muted-foreground">
            <Bell className="h-12 w-12 mx-auto mb-3 opacity-20" />
            <p>No tienes notificaciones</p>
          </div>
        ) : (
          <div className="divide-y divide-border">
            {notifications.map((notification) => {
              const Icon = typeIcons[notification.type];
              return (
                <div
                  key={notification.id}
                  className={`p-4 hover:bg-accent/50 transition-colors cursor-pointer ${
                    !notification.is_read ? 'bg-accent/20' : ''
                  }`}
                  onClick={() => !notification.is_read && markAsRead(notification.id)}
                >
                  <div className="flex gap-3">
                    <div className={`p-2 rounded-full ${typeColors[notification.type]} flex-shrink-0`}>
                      <Icon className="h-4 w-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <h4 className="font-medium text-sm">{notification.title}</h4>
                        {!notification.is_read && (
                          <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0 mt-1.5" />
                        )}
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {notification.message}
                      </p>
                      <p className="text-xs text-muted-foreground mt-2">
                        {formatDistanceToNow(new Date(notification.created_at), {
                          addSuffix: true,
                          locale: es
                        })}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </ScrollArea>
    </div>
  );
}
