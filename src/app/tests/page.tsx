import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import * as UI from '@/components';

const getSubPages = (dir: string) => {
    const subPages: string[] = [];
    const files = fs.readdirSync(dir);

    files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);

        if (stat.isDirectory()) {
            subPages.push(file);
        }
    });

    return subPages;
};

const Page = () => {
    const subPages = getSubPages(path.join(process.cwd(), 'src/app/tests'));

    return (
        <UI.BodyContainer>
            <div style={{ maxWidth: '900px', margin: '0 1em' }}>
                <h1 className="text-5xl font-bold mb-8 mx-5">Test Pages</h1>
                <div className='flex flex-row items-center max-w-full flex-wrap'>
                    {subPages.map(subPage => (
                        <div key={subPage} className="m-3">
                            <Link className="px-5 py-3 bg-white/10 hover:bg-white/30 transition-all duration-500 shadow-visionprohome backdrop-blur-lg rounded-full font-bold underline text-2xl" href={`/tests/${subPage}`}>
                                {subPage}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </UI.BodyContainer>
    );
};

export default Page;