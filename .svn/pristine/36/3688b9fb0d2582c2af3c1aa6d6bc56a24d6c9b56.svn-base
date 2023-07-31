import { useEffect, useRef } from 'react';
import Styles from './tech-stack.module.css';

function TechStack() {
  return (
    <section className={`${Styles.techStack}`}>
      <div className="container-70">
        <Design />
        <Development />
        <Code />
      </div>
    </section>
  );
}

export default TechStack;

function Design() {
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
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>Hackathons.</h2>
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          We plan on attending and hosting a number of hackathons throughout
          the year. 
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>Text Text</h2>
            <p>
              text text
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Text text</h2>
            <p>
              text Text
            </p>
          </div>
          <div className={Styles.content}>
          </div>
          <div className={Styles.content}>
          </div>
        </div>
      </div>
    </div>
  );
}

function Development() {
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
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>Competitions.</h2>
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
        Foothill CS intends to compete and distribute resources to help members 
        compete in USACO, Codeforces, the Congressional App Challenge, and more. 
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>Text text</h2>
            <p>
              Text text
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Text Text</h2>
            <p>
              Text text
            </p>
          </div>
          <div className={Styles.content}>
          </div>
          <div className={Styles.content}>
          </div>
        </div>
      </div>
    </div>
  );
}

function Code() {
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
    <div ref={ref} className={`${Styles.row} mt-40 fadeonscroll sm:mt-4`}>
      <div className={`${Styles.col} ${Styles.col40}`}>
        <h2 className={Styles.header}>Workshops.</h2>
      </div>
      <div className={`${Styles.col} ${Styles.col60}`}>
        <div className={Styles.headDescription}>
          Every meeting, Foothill CS intends to host a workshop 
          or keynote to help our members understand and develop using
          various technologies.
        </div>
        <div className={Styles.contentContainer}>
          <div className={Styles.content}>
            <h2>Text text</h2>
            <p>
              Text text
            </p>
          </div>
          <div className={Styles.content}>
            <h2>Text text</h2>
            <p>
              Text text
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
