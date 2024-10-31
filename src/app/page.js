import { ArticleCard } from "@/components/article-card";
import { SubscribeCard } from "@/components/subscribe-card";
import { SkillsCard } from "@/components/skills-card";
import Profile from "@/components/profile";
import Work from "@/components/work-card";

const articles = [
    {
        date: "Pallet Argentina (2023 - Present)",
        title: 'Software Development',
        description: 'Collaborated with stakeholders to gather requirements and iteratively improve the platform.',
        link: '#'
    },
    {
        date: "AgriMex (2023 - Present)",
        title: 'Software Development',
        description: 'Developed and maintained the company website, enhancing user experience and optimizing page load times.',
        link: '#'
    },
    {
        date: "PrestaFacil (2023 - Present)",
        title: 'Software Development',
        description: 'Built and maintained a customer-facing loan application website.',
        link: '#'
    }
]

export default async function Home() {
    const data = {
        languages: [
            {
                name: 'JavaScript',
                percent: 95,
            },
            {
                name: 'CSS',
                percent: 30,
            },
            {
                name: 'HTML',
                percent: 10,
            },
        ],
    };

    return (
        <div className="flex justify-between min-h-screen mx-0 px-[144px] py-4"> {/* Added padding and adjusted margin */}
            <div className="flex flex-col items-start flex-grow"> {/* Allow this column to grow */}
                <Profile />
                <div className={'flex flex-col md:flex-row'}>
                    <div className={'md:w-3/5'}>
                        {articles.map((article, index) => (
                            <ArticleCard key={index} {...article} />
                        ))}
                    </div>
                    <div className={'md:w-2/5 space-y-8'}>
                        <SubscribeCard />
                        <Work />
                        <SkillsCard stats={data} />
                    </div>
                </div>
            </div>
        </div>
    );
}
