'use client';

interface BaseCardProps {
    children: React.ReactNode
}

export default function BaseCard({ children }: BaseCardProps) {
    return (
        <div className="bg-card border border-border rounded p-4"> 
            {children}
        </div>
    );
}