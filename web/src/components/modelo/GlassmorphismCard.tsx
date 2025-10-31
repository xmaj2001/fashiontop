
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface GlassmorphismCardProps {
  children: ReactNode;
  className?: string;
}

export default function GlassmorphismCard({ children, className }: GlassmorphismCardProps) {
  return (
    <div
      className={cn(
        "backdrop-blur-lg bg-white/10 dark:bg-black/20 border border-white/20 rounded-md shadow-xl",
        className
      )}
    >
      {children}
    </div>
  );
}
