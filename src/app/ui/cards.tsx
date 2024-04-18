import React from "react";

export function Card({ children }: { children: React.ReactNode }) {
    return (
        <div className="bg-neutral-900 flex-col gap-6 items-start p-4 lg:w-max md:w-maxq">{children}</div>
    );
}