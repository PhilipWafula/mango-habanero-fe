import { Card } from '@/app/ui/cards';
import { TitleWithLogo } from '@/app/ui/titles';
import { Label, CardSectionText } from '@/app/ui/typography';
import { ArrowUpRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import React from 'react';

interface WorkInProgressProps {
    links: {
        label: string;
        name: string;
        url: string;
    }[];
    role: string;
    technologies: string[];
    title: string;
}

function CardSection({
    content,
    icon,
    label,
    link,
}: {
    content: React.ReactNode;
    icon?: React.ReactNode;
    label: string;
    link?: string;
}) {
    return (
        <div className="my-2 flex min-h-3 items-center justify-between border-l-2 border-neutral-500 bg-neutral-800 lg:min-w-40">
            <div className="flex min-h-14 flex-col items-start justify-center px-3 py-2">
                <Label label={label} />
                <CardSectionText text={content} />
            </div>
            {link && (
                <Link
                    href={link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="flex h-14 w-14 shrink-0 items-center justify-center text-zima-blue"
                >
                    {icon}
                </Link>
            )}
        </div>
    );
}

export function WorkInProgress({ links, role, technologies, title }: WorkInProgressProps) {
    return (
        <Card>
            <TitleWithLogo label="Website revamp" title={title} />
            <CardSection content={role} label="Role" />
            {links.map((link, index) => (
                <CardSection
                    content={link.name}
                    icon={<ArrowUpRightIcon className="h-6 w-6 text-zima-blue" />}
                    key={index}
                    label={link.label}
                    link={link.url}
                />
            ))}
            <CardSection
                content={
                    <div className="grid grid-cols-2 gap-1">
                        {technologies.map((technology, index) => (
                            <span key={index} className="text-sm text-neutral-50">
                                {technology}
                            </span>
                        ))}
                    </div>
                }
                label="Stack & Technologies"
            />
        </Card>
    );
}
