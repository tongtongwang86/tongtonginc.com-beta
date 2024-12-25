// app/page1/page.tsx
import dynamic from 'next/dynamic';
import * as UI from '@/components';
import Link from 'next/link';


export default function Page1() {
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center text-center bg-[var(--background2)]">
      <h1 className="text-3xl font-bold mb-4">Page 1</h1>

<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec egestas augue. Sed pulvinar lorem libero, a suscipit sem sollicitudin ultrices. Donec quis posuere risus. Ut dictum eu libero sed sagittis. Nunc vitae quam a ipsum tempor blandit. Nam laoreet magna dui, eu auctor ante sodales non. Phasellus velit sem, rhoncus sed semper posuere, tristique quis felis. Vivamus maximus enim neque, eu venenatis elit ullamcorper non.

Aenean condimentum suscipit vulputate. In congue lorem elementum tristique pulvinar. Integer tincidunt ac nisi ut cursus. Vestibulum orci orci, suscipit ullamcorper augue non, malesuada ultricies enim. Phasellus id augue lacus. Sed et turpis a turpis aliquam sodales. Sed tincidunt purus non ligula rhoncus interdum. Nam aliquam ipsum nisl, eu egestas orci ullamcorper in. Mauris et dictum nunc. Vestibulum aliquet orci nibh, ac facilisis dui commodo sit amet. Sed auctor est sit amet leo facilisis, at molestie lectus consequat. Donec sagittis non dui a maximus. Vivamus blandit nulla felis, at scelerisque elit tincidunt at. Vivamus sodales luctus lectus, a posuere leo tempor vel. Aliquam imperdiet urna vel magna fringilla, sed tempor risus hendrerit.

Vestibulum at sapien massa. Cras nisl felis, commodo sit amet bibendum ut, sodales sed eros. Nunc placerat ex quis quam scelerisque pellentesque. Aliquam ullamcorper metus et mi laoreet, sit amet dapibus magna aliquet. Nullam pellentesque pellentesque posuere. Donec leo leo, bibendum ut rutrum volutpat, sollicitudin at ante. Etiam dictum suscipit nunc, sed lacinia arcu rutrum nec. Aliquam a elementum quam, vel placerat odio.

Proin posuere odio sit amet ante ultrices, vel egestas augue gravida. Duis consectetur convallis arcu, consectetur volutpat libero pellentesque eget. Integer posuere dignissim nunc, sed fringilla justo efficitur non. Nam et diam sit amet velit rhoncus dictum. Suspendisse sit amet scelerisque justo. Donec at arcu ac dui volutpat lobortis. Nullam vitae viverra urna. Proin lobortis tellus quis est placerat, vel efficitur turpis congue.

Nam mauris erat, varius vel cursus ut, faucibus sed lacus. Ut sollicitudin sed lacus eget tempor. Nunc varius ex vitae augue venenatis, ac cursus ligula fermentum. Proin tempus tortor ut sem imperdiet rutrum. Sed eu odio vel massa condimentum gravida nec eget mi. Nulla porta rhoncus risus sit amet vulputate. Nulla ut lacus sed felis posuere commodo. Proin facilisis commodo orci, a facilisis turpis. Suspendisse sodales velit id justo bibendum gravida. Nam quis nisl in est porta varius ut sit amet magna. Nam sollicitudin sit amet lacus et sagittis. Praesent euismod nibh leo, vel euismod risus laoreet non. Nam non feugiat nulla.
</p>

<UI.ThreeCanvas />



<p>
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec egestas augue. Sed pulvinar lorem libero, a suscipit sem sollicitudin ultrices. Donec quis posuere risus. Ut dictum eu libero sed sagittis. Nunc vitae quam a ipsum tempor blandit. Nam laoreet magna dui, eu auctor ante sodales non. Phasellus velit sem, rhoncus sed semper posuere, tristique quis felis. Vivamus maximus enim neque, eu venenatis elit ullamcorper non.

Aenean condimentum suscipit vulputate. In congue lorem elementum tristique pulvinar. Integer tincidunt ac nisi ut cursus. Vestibulum orci orci, suscipit ullamcorper augue non, malesuada ultricies enim. Phasellus id augue lacus. Sed et turpis a turpis aliquam sodales. Sed tincidunt purus non ligula rhoncus interdum. Nam aliquam ipsum nisl, eu egestas orci ullamcorper in. Mauris et dictum nunc. Vestibulum aliquet orci nibh, ac facilisis dui commodo sit amet. Sed auctor est sit amet leo facilisis, at molestie lectus consequat. Donec sagittis non dui a maximus. Vivamus blandit nulla felis, at scelerisque elit tincidunt at. Vivamus sodales luctus lectus, a posuere leo tempor vel. Aliquam imperdiet urna vel magna fringilla, sed tempor risus hendrerit.

Vestibulum at sapien massa. Cras nisl felis, commodo sit amet bibendum ut, sodales sed eros. Nunc placerat ex quis quam scelerisque pellentesque. Aliquam ullamcorper metus et mi laoreet, sit amet dapibus magna aliquet. Nullam pellentesque pellentesque posuere. Donec leo leo, bibendum ut rutrum volutpat, sollicitudin at ante. Etiam dictum suscipit nunc, sed lacinia arcu rutrum nec. Aliquam a elementum quam, vel placerat odio.

Proin posuere odio sit amet ante ultrices, vel egestas augue gravida. Duis consectetur convallis arcu, consectetur volutpat libero pellentesque eget. Integer posuere dignissim nunc, sed fringilla justo efficitur non. Nam et diam sit amet velit rhoncus dictum. Suspendisse sit amet scelerisque justo. Donec at arcu ac dui volutpat lobortis. Nullam vitae viverra urna. Proin lobortis tellus quis est placerat, vel efficitur turpis congue.

Nam mauris erat, varius vel cursus ut, faucibus sed lacus. Ut sollicitudin sed lacus eget tempor. Nunc varius ex vitae augue venenatis, ac cursus ligula fermentum. Proin tempus tortor ut sem imperdiet rutrum. Sed eu odio vel massa condimentum gravida nec eget mi. Nulla porta rhoncus risus sit amet vulputate. Nulla ut lacus sed felis posuere commodo. Proin facilisis commodo orci, a facilisis turpis. Suspendisse sodales velit id justo bibendum gravida. Nam quis nisl in est porta varius ut sit amet magna. Nam sollicitudin sit amet lacus et sagittis. Praesent euismod nibh leo, vel euismod risus laoreet non. Nam non feugiat nulla.
</p>



<UI.HomeButton></UI.HomeButton>



    </main>
  );
}
