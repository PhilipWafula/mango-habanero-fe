import {Label} from "@/app/ui/typography";


export function TitleWithLogo({label, title}: { label: string, title: string }) {
    return (
        < div className='flex flex-row gap-3 items-center mb-4'>
            <div className='flex flex-col items-start'>
                <div className='w-12 h-12 bg-zima-blue flex-shrink-0'></div>
            </div>
            <div className='flex flex-col items-start'>
                <Label label={label}/>
                <div className='not-italic text-center text-neutral-50 lg:text-3xl'>{title}</div>
            </div>
        </div>
    );
}