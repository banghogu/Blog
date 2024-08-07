import { useEffect, useRef, useState } from 'react';

export const useHeadingsObserver = (query: string) => {
  const observer = useRef<IntersectionObserver>();
  const [activeIdList, setActiveIdList] = useState<string[]>([]);
  const [tempId, setTempId] = useState('');

  useEffect(() => {
    const scrollMarginOption = { rootMargin: '-32px' };

    const handleObserver: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const targetId = `#${entry.target.id}`;
        if (entry.isIntersecting) {
          setActiveIdList((prev) => [...prev, targetId]);
          setTempId('');
        } else {
          setActiveIdList((prev) => {
            if (prev.length === 1) setTempId(targetId);
            return prev.filter((elem) => elem !== targetId);
          });
        }
      });
    };

    observer.current = new IntersectionObserver(handleObserver, scrollMarginOption);

    const elements = document.querySelectorAll(query);
    elements.forEach((elem) => observer.current?.observe(elem));

    // Cleanup function to disconnect observer on component unmount
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [query]);

  return [...activeIdList, tempId];
};
