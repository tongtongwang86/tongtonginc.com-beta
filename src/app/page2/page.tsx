// app/page2/page.tsx

import { Footer,VStack,HStack,TextContainer,HomeButton} from '@/components';

import Image from 'next/image';
import Link from 'next/link';
import getBase64 from '@/lib/getLocalBase64'


export default async function Page2() {
  const myBlurDataUrl = await getBase64('http://localhost:3000/shrek.jpg')
  return (
    <main className="block min-h-screen  items-center  ">
      <h1 className="text-3xl font-bold mb-4">Page 2</h1>
      <p className="mb-4">This is the content of Page 2.</p>
      <Link href="/" className="text-blue-500 hover:underline">Back to Home</Link>


<VStack gap={20} align="center" justify="space-between">
      <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>Item 1</div>
      <HStack gap={15} align="center" justify="space-between" wrap={true}>
      <div style={{ backgroundColor: 'lightblue', padding: '20px' }}>Item 1</div>
      <div style={{ backgroundColor: 'lightcoral', padding: '20px' }}>Item 2</div>
      <Image
        src='/shrek.jpg'  // Use the relative path from the public folder
        width={100}
        height={100}
        alt="A descriptive alt text for the image"
        className="rounded-lg shadow-md"
        placeholder='blur'
        blurDataURL={myBlurDataUrl}
        priority
      />
      <div style={{ backgroundColor: 'lightpink', padding: '20px' }}>Item 4</div>
    </HStack>
      <div style={{ backgroundColor: 'lightgreen', padding: '20px' }}>Item 3</div>

      

</VStack>

<TextContainer>
      <h1 className="text-2xl font-bold text-right">Welcome to My Blog</h1>
      <p className="text-right">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
        quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent
        mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum
        lacinia arcu eget nulla.
      </p>
      <HStack>

      <p className="text-right">
        Curabitur sit amet mauris morbi in dui quis est pulvinar ullamcorper.
        Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed
        aliquet risus a tortor. Integer id quam. Morbi mi.stst Quisque nisl felis,
        venenatis tristique, dignissim in, ultrices sit amet, augue.
      </p>

      <p className="text-right">
        Curabitur sit amet mauris morbi in dui quis est pulvinar ullamcorper.
        Nulla facilisi. Integer lacinia sollicitudin massa. Cras metus. Sed
        aliquet risus a tortor. Integer id quam. Morbi mi.stst Quisque nisl felis,
        venenatis tristique, dignissim in, ultrices sit amet, augue.
      </p>
      </HStack>
    </TextContainer>

<HomeButton></HomeButton>
    
      <Footer/>

      
    </main>
    
  );
}
