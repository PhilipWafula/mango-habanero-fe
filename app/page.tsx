import { WorkInProgress } from '@/app/ui/maintenance/workInProgress';

export default function Home() {
    const links = [
        {
            label: 'Github',
            name: 'Philip Wafula',
            url: 'https://github.com/mango-habanero',
        },
        {
            label: 'LinkedIn',
            name: 'Philip Wafula',
            url: 'https://linkedin.com/in/philipwafula',
        },
    ];
    const technologies = [
        'Digital Ocean',
        'Fast API',
        'Git',
        'Github Actions',
        'Next.js',
        'Postgres',
        'Python',
        'Typescript',
    ];
    return (
        <main className="min-w-screen flex min-h-screen flex-col gap-6 p-6">
            <WorkInProgress
                links={links}
                role="Software Engineer"
                technologies={technologies}
                title="Work in progress"
            />
        </main>
    );
}
