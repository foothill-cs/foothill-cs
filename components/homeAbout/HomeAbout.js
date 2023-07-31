import Link from 'next/link';
import { useEffect, useRef } from 'react';
import Button from '../button/Button';
import BottomGlitter from '../StyledText/BottomGlitter';

function HomeAbout() {
  const ref = useRef();

  useEffect(() => {
    const handleScroll = () => {
      if (ref.current) {
        if (window.innerHeight + 100 > ref.current.getBoundingClientRect().y) {
          ref.current.classList.add('active');
        } else {
          ref.current.classList.remove('active');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <section
      ref={ref}
      className="container-70 my-16 py-16 fadeonscroll sm:transform-none sm:opacity-100"
    >
      <BottomGlitter text="About Foothill CS" />
      <div className="my-6 py-2">
        <p className="text-xl w-10/12 md:w-full md:text-lg sm:text-base">
          We are the Foothill High School Computer Science Club -- a 501c3 and group of students interested in learning about CS while 
          fostering a creative and inclusive environment. In this club, we try to explore the numerous applications of computer science, 
          and focus on providing the resources for even the least experienced students. Our only requirement is an interest in CS and being 
          a current Foothill High School student. We are always looking for new members, so if you are interested, please join us!
        </p>
      </div>
      <Link href="/about">
        <a className="flex w-[fit-content] rounded-full">
          <Button>
            <span className="z-50 block">View More</span>
          </Button>
        </a>
      </Link>
    </section>
  );
}

export default HomeAbout;
