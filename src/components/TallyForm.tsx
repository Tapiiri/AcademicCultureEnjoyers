'use client';

import { useEffect } from 'react';

export default function TallyForm({
  formId,
  height = 800,
}: {
  formId: string;
  height?: number;
}) {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://tally.so/widgets/embed.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <iframe
      data-tally-src={`https://tally.so/r/${formId}?transparentBackground=1&hideTitle=1`}
      width="100%"
      height={height}
      frameBorder="0"
      marginHeight={0}
      marginWidth={0}
      title="Tally form"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
