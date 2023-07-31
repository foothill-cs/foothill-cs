import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaMailBulk, FaVoicemail, FaDiscord } from 'react-icons/fa';
import Styles from './SocialsBar.module.css';

const ICON_SIZE = 36;
function SocialsBar() {
  return (
    <section className={Styles.socialsBar}>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        rel="noreferrer"
      >
        <FaInstagram className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a href="mailto:foothillcompsciclub@gmail.com" target="_blank" rel="noreferrer">
        <FaMailBulk className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
      <a
        href="https://discord.gg/cVb9Tem2ms"
        target="_blank"
        rel="noreferrer"
      >
        <FaDiscord className={Styles.socialsBarIcons} size={ICON_SIZE} />
      </a>
    </section>
  );
}

export default SocialsBar;
