import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Styles from './association.module.css';
import BottomGlitter from '../StyledText/BottomGlitter';

function Associations() {
  return (
    <section className="container-70">
      <div className="my-12 mb-16 sm:my-6 sm:mb-10">
        <BottomGlitter text="Our Associations" />
      </div>
      <div className={Styles.associationContainer}>
        <div className={Styles.associationMenuContainer}>
          <div className={Styles.associationMenu}>
            <div className={Styles.associationMenuItem}>
              <a href="#?">
                <Image
                  className={Styles.associationImage}
                  height="100%"
                  width="100%"
                  src="/sponsors/placeholderlogo.png"
                />
              </a>
            </div>
            <div className={Styles.associationMenuItem}>
              <a href="#?">
                <Image
                  className={Styles.associationImage}
                  height="100%"
                  width="100%"
                  src="/sponsors/placeholderlogo.png"
                />
              </a>
            </div>
            <div className={Styles.associationMenuItem}>
              <a href="#?">
                <Image
                  className={Styles.associationImage}
                  height="100%"
                  width="100%"
                  src="/sponsors/placeholderlogo.png"
                />
              </a>
            </div>
          </div>
        </div>
        <div className={Styles.associationContentContainer}>
          <Content id="?">
            <h2>Foothill Club 1</h2>
            <p>
              I love foothill clubs
            </p>
          </Content>
          <Content id="?">
            <h2>Club 2</h2>
            <p>
              They are SOOO FUN!
            </p>
          </Content>
          <Content id="?">
            <h2>Club 3</h2>
            <p>
              club club club club
            </p>
          </Content>
        </div>
      </div>
    </section>
  );
}

export default Associations;

function Content({ id = '', className = '', children }) {
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
    <div
      ref={ref}
      id={id}
      className={`${Styles.associationContent} fadeonscroll ${className}`}
    >
      {children}
    </div>
  );
}
