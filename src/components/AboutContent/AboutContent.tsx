import { Container } from '@layout/Container';

import aboutImg from '@images/about-us.jpg';
import style from './AboutContent.module.scss';
import { socials } from '@constants/socials';

export const AboutContent = () => {
  return (
    <section className={style.aboutContent}>
      <Container>
        <div className={style.content}>
          <div className={style.main}>
            <div className={style.aboutImg}>
              <img src={aboutImg} alt='about' />
            </div>
            <div className={style.aboutText}>
              <p>Please tell your friends about TemplateMo website. Thank you. You can browse through different categories of templates such as business, portfolio, restaurant, etc. Pellentesque quis luctus libero. Maecenas pretium molestie erat, ac tincidunt leo gravida ac. Cras ullamcorper eu ipsum eu sollicitudin. Fusce vitae commodo turpis. Integer ullamcorper purus nec justo mollis fermentum. Nunc imperdiet erat nec lacinia laoreet.</p>
              <p>Maecenas faucibus ullamcorper felis vitae finibus. Nullam at quam ut lacus aliquam tempor vel sed ipsum. Donec pellentesque tincidunt imperdiet. Mauris sit amet justo vulputate, cursus massa congue, vestibulum odio. Aenean elit nunc, gravida in erat sit amet, feugiat viverra leo. Phasellus interdum, diam commodo egestas rhoncus, turpis nisi consectetur nibh, in vehicula eros orci vel neque.</p>
            </div>
          </div>
          <div className={style.aboutSocials}>
            <ul className={style.socialList}>
              {socials.map(social =>
                <li key={social.id} className={style.socialItem}>
                  <a href={social.href} target='_blank' rel='noreferrer'>
                    <div className={style.socialIcon}>
                      <img src={social.icon} alt={social.name} />
                    </div>
                  </a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
