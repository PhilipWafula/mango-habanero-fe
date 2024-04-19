import React from 'react';

export function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="md:w-maxq flex-col items-start gap-6 bg-neutral-900 p-4 lg:w-max">
            {children}
        </div>
    );
}
