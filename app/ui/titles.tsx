import { Label } from '@/app/ui/typography';
import Image from 'next/image';
import mhLogo from '@/public/images/mh-logo.svg';

export function TitleWithLogo({ label, title }: Readonly<{ label: string; title: string }>) {
    return (
        <div className="mb-4 flex flex-row items-center gap-3">
            <div className="flex flex-col items-start">
                <Image
                    src={mhLogo}
                    alt="The mango habanero logo."
                    className="h-12 w-12 flex-shrink-0"
                ></Image>
            </div>
            <div className="flex flex-col items-start">
                <Label label={label} />
                <div className="text-center not-italic text-neutral-50 lg:text-3xl">{title}</div>
            </div>
        </div>
    );
}
