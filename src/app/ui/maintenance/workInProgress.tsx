import {Card} from "@/app/ui/cards";
import {TitleWithLogo} from "@/app/ui/titles";
import {Label, CardSectionText} from "@/app/ui/typography";
import {ArrowUpRightIcon} from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";


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

function CardSection({ content, icon, label, link }: { content: React.ReactNode; icon?: React.ReactNode; label: string;  link?: string;  }) {
    return (
        <div className='bg-neutral-800 border-l-2 border-neutral-500 flex items-center justify-between lg:min-w-40 min-h-3 my-2'>
            <div className='flex flex-col items-start justify-center min-h-14 px-3 py-2'>
                <Label label={label} />
                <CardSectionText text={content} />
            </div>
            {link && (
                <Link href={link} rel='noopener noreferrer' target='_blank' className='flex h-14 items-center justify-center shrink-0 text-zima-blue w-14'>
                    {icon}
                </Link>
            )}
        </div>
    );
}

export function WorkInProgress({ links, role, technologies, title }: WorkInProgressProps) {
    return (
        <Card>
            <TitleWithLogo label='Website revamp' title={title} />
            <CardSection content={role} label='Role' />
            {links.map((link, index) => (
                <CardSection
                    content={link.name}
                    icon={<ArrowUpRightIcon className='h-6 w-6 text-zima-blue'/>}
                    key={index}
                    label={link.label}
                    link={link.url}
                />
            ))}
            <CardSection content={
                <div className='grid grid-cols-2 gap-1'>
                    {technologies.map((technology, index) => (
                        <span key={index} className='text-sm text-neutral-50'>{technology}</span>
                    ))}
                </div>
            } label='Stack & Technologies'/>
        </Card>
    );
}
