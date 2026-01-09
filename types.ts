
export interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export interface SectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}
