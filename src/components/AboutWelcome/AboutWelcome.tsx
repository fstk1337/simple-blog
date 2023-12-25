import { Container } from '@layout/Container';
import style from './AboutWelcome.module.scss';

export const AboutWelcome = () => {
  return (
    <section className={style.aboutWelcome}>
      <div className={style.welcomeBack}>
        <Container>
          <div className={style.content}>
            <h2 className={style.welcomeHeading}>About us</h2>
            <span className={style.welcomeText}>More about us!</span>
          </div>
        </Container>
      </div>
    </section>
  );
}
