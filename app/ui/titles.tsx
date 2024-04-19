import { Label } from '@/app/ui/typography';

export function TitleWithLogo({ label, title }: { label: string; title: string }) {
    return (
        <div className="mb-4 flex flex-row items-center gap-3">
            <div className="flex flex-col items-start">
                <div className="h-12 w-12 flex-shrink-0 bg-zima-blue"></div>
            </div>
            <div className="flex flex-col items-start">
                <Label label={label} />
                <div className="text-center not-italic text-neutral-50 lg:text-3xl">{title}</div>
            </div>
        </div>
    );
}
