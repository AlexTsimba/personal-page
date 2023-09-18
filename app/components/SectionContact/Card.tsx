import { HtmlHTMLAttributes } from 'react';

interface CardProps extends HtmlHTMLAttributes<HTMLDivElement> {}

export default function Card({ children, ...rest }: CardProps) {
  return (
    <div className="absolute inset-0 " {...rest}>
      {children}
    </div>
  );
}
