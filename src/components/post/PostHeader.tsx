'use client';
import { Post } from '@/models/post';
import { getTag } from '@/utils/getTag';
import { useSelectedLayoutSegments } from 'next/navigation';
import { useEffect, useState } from 'react';
import ToTop from '../ToTop';
import Progressbar from '../Progressbar';
import { parseContent } from '@/utils/parseContent';
import Sidebar from './Sidebar';
import { format, parseISO } from 'date-fns';

interface PostHeaderType {
  posts: Post[];
}

const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

export function PostHeader({ posts }: PostHeaderType) {
  const [showToTop, setShowToTop] = useState(false);
  const segments = useSelectedLayoutSegments(); // think/why-i-use-next 으로 왔을 때 ["think" , "why-i-use-next"] 형식
  const post = posts.find((post) => post.id === segments[segments.length - 1]); //해당 글 가져오기 받은 post는 배열이라서 find씀

  if (post == null) return <></>;

  const parsedContent = parseContent(post.content);

  const formattedDate = format(new Date(post.date), 'yyyy.MM.dd');
  console.log(formattedDate);

  useEffect(() => {
    const handleScroll = debounce(() => {
      if (window.pageYOffset > 1500) {
        setShowToTop(true);
      } else {
        setShowToTop(false);
      }
    }, 200); // 200ms 간격으로 스크롤 이벤트를 실행

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <div className="pt-3 pb-8 flex flex-col items-center gap-1">
        <div
          className="text-[17px] max-w-max flex items-center py-1 px-2 bg-gray-200 font-naverBold rounded-md mb-2 dark:text-white dark:bg-gray-800"
          suppressHydrationWarning={true}
        >
          {getTag(post.tag)}
        </div>
        <h1 className=" text-[30px] font-naverBold dark:text-gray-100">{post.title}</h1>
        <p className=" font-naverSemi text-[16px] mt-2"># {post.subTitle}</p>
        <p className="mt-1 font-naverSemi text-gray-500 ">{formattedDate}</p>
      </div>
      {showToTop && <ToTop postId={post.id} />}
      <Sidebar parsedContent={parsedContent} post={post} />
      <Progressbar />
    </>
  );
}
