import React from "react";

export function CardSectionText({ text }: { text: React.ReactNode }) {
    return (
        <span className='font-medium not-italic text-neutral-50 text-sm'>{text}</span>
    )
}

export function Label({ label }: { label: string }) {
    return (
        <span className='font-medium overflow-hidden text-neutral-500 text-ellipsis text-xs'>{label}</span>
    );
}
