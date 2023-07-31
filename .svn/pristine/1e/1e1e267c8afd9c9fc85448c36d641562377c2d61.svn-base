import Head from 'next/head';
import BottomGlitter from '@/components/StyledText/BottomGlitter';
import Screen from '../components/screen/Screen';
import TeamCard from '../components/teams/TeamCard';
import Styles from '../components/teams/Team.module.css';
import { TeamData2k19 } from '../lib/data/TeamData';

function Teams() {
  return (
    <Screen>
      <Head>
        <title>Our Officers</title>
        <meta
          name="description"
          content="Team of Foothill CS"
        />
        <meta
          name="keywords"
          content="HTML, CSS, JavaScript, ReactJS, NextJS, TailwindCSS, HnCC, Team of HnCC, Hackathon & Coding Club, BIT Sindri, Dhanbad"
        />
      </Head>
      <section className="mt-16 mb-12 container-70">
        <div className="my-16 w-full text-center">
          <BottomGlitter text="Our Officers" />
        </div>
        <h2 className={Styles.postHead}>Officers</h2>
        <div className={Styles.cardContainer}>
          {TeamData2k19.slice(0, 5).map((item, index) => {
            return (
              <TeamCard
                key={`${String(index)}-team`}
                name={item.name}
                title={item.title}
                imageSrc={`/teams/2k19/${item.imageSrc}.png`}
                lazyImageSrc={`/teams/2k19/lazy/${item.imageSrc}-min.jpg`}
                socials={item.socials}
              />
            );
          })}
        </div>        
      </section>
    </Screen>
  );
}

export default Teams;
