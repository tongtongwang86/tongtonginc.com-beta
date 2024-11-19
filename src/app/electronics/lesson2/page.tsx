'use client';

import { useCallback, useMemo, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';


import * as UI from '@/components';
import Link from 'next/link';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const resizeObserverOptions = {};

export default function lesson2() {
  const [file] = useState<string>('/assets/eca/electronics/lesson2.pdf');
  const [numPages, setNumPages] = useState<number>();
  const [containerRef, setContainerRef] = useState<HTMLElement | null>(null);
  const [containerWidth, setContainerWidth] = useState<number>();
  const [pageAspectRatio, setPageAspectRatio] = useState<number>(1.5); // Default aspect ratio (width:height)

  const options = useMemo(
    () => ({
      cMapUrl: '/cmaps/',
      standardFontDataUrl: '/standard_fonts/',
    }),
    []
  );

  const onResize = useCallback<ResizeObserverCallback>((entries) => {
    const [entry] = entries;
    if (entry) {
      setContainerWidth(entry.contentRect.width);
    }
  }, []);

  useResizeObserver(containerRef, resizeObserverOptions, onResize);

 function onDocumentLoadSuccess({ numPages: nextNumPages }: PDFDocumentProxy): void {
  setNumPages(nextNumPages);
}

  function onPageRenderSuccess(page: any): void {
    // Update aspect ratio when the first page is loaded
    if (page.originalWidth && page.originalHeight) {
      setPageAspectRatio(page.originalHeight / page.originalWidth);
    }
  }

  return (
    <UI.BodyContainer
      navColor="var(--background)"
      navDropoffColor="var(--navgradient)"
      backgroundColor="var(--background2)"
      logoColor="var(--logocolor)"
      hoverShadowColor="var(--logoHover)"
    >
      <h1 className="text-3xl font-bold mb-8">Lesson 2 Resources</h1>

      <UI.HStack>
        <Link href="https://www.arduino.cc/en/software" className="mb-8 underline ml-10">
          Arduino IDE Download
        </Link>
        <Link
          href="https://cdn.sparkfun.com/assets/learn_tutorials/8/4/4/CH341SER_MAC.ZIP"
          className="mb-8 underline mx-10"
        >
          CH340 Driver (Download if Arduino fails to upload)
        </Link>
        <Link
          href="https://support.arduino.cc/hc/en-us/articles/4733418441116-Upload-a-sketch-in-Arduino-IDE"
          className="mb-8 underline mr-10"
        >
          Uploading Code to Arduino Tutorial
        </Link>
      </UI.HStack>

      <h1 className="text-3xl font-bold">Lesson PDF</h1>

      <div
        ref={setContainerRef}
        className="w-full p-4"
        style={{
          height: numPages ? `${numPages * containerWidth! * pageAspectRatio}px` : 'auto',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        <Document file={file} onLoadSuccess={onDocumentLoadSuccess} options={options}>
          {Array.from(new Array(numPages), (_el, index) => (
            <Page
              key={`page_${index + 1}`}
              pageNumber={index + 1}
              width={containerWidth}
              onRenderSuccess={onPageRenderSuccess}
            />
          ))}
        </Document>
      </div>
    </UI.BodyContainer>
  );
}
