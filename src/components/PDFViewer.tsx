'use client';

import { useCallback, useMemo, useState } from 'react';
import { useResizeObserver } from '@wojtekmaj/react-hooks';
import { pdfjs, Document, Page } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import 'react-pdf/dist/esm/Page/TextLayer.css';
import type { PDFDocumentProxy } from 'pdfjs-dist/types/src/display/api';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

const resizeObserverOptions = {};

interface PDFViewerProps {
  file: string;
}

export const PDFViewer: React.FC<PDFViewerProps> = ({ file }) => {
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
  );
};

export default PDFViewer;