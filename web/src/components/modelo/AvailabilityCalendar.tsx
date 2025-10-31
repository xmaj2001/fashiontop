import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface AvailabilityCalendarProps {
  availableDates?: Set<string>;
}

export default function AvailabilityCalendar({ availableDates = new Set() }: AvailabilityCalendarProps) {
  const [currentDate, setCurrentDate] = useState(new Date());

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentDate);

  const goToPreviousMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1));
  };

  const goToNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1));
  };

  const monthName = currentDate.toLocaleString('default', { month: 'long', year: 'numeric' });

  const isDateAvailable = (day: number) => {
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    return availableDates.has(dateStr);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-white">Availability</h2>
      </div>

      <div className="bg-white/5 backdrop-blur-sm rounded-md p-4 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-white font-semibold">{monthName}</h3>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/10"
              onClick={goToPreviousMonth}
              data-testid="button-prev-month"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-white hover:bg-white/10"
              onClick={goToNextMonth}
              data-testid="button-next-month"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-7 gap-1">
          {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
            <div
              key={day}
              className="text-center text-white/60 text-xs font-medium py-2"
            >
              {day}
            </div>
          ))}

          {Array.from({ length: startingDayOfWeek }).map((_, i) => (
            <div key={`empty-${i}`} />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const day = i + 1;
            const available = isDateAvailable(day);

            return (
              <div
                key={day}
                className={cn(
                  "aspect-square flex items-center justify-center text-sm rounded-sm transition-colors",
                  available
                    ? "bg-green-500/20 text-green-300 border border-green-500/30"
                    : "bg-white/5 text-white/40 border border-white/10"
                )}
                data-testid={`calendar-day-${day}`}
              >
                {day}
              </div>
            );
          })}
        </div>

        <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-green-500/20 border border-green-500/30" />
            <span className="text-white/70 text-xs">Available</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-sm bg-white/5 border border-white/10" />
            <span className="text-white/70 text-xs">Unavailable</span>
          </div>
        </div>
      </div>
    </div>
  );
}
