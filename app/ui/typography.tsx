import React from 'react';

export function CardSectionText({ text }: { text: React.ReactNode }) {
    return <span className="text-sm font-medium not-italic text-neutral-50">{text}</span>;
}

export function Label({ label }: { label: string }) {
    return (
        <span className="overflow-hidden text-ellipsis text-xs font-medium text-neutral-500">
            {label}
        </span>
    );
}
