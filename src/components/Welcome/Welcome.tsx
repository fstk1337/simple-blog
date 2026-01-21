import { FC } from 'react';

import { Container } from '@layout/Container';
import { WelcomeProps } from './WelcomeProps';

import style from './Welcome.module.scss';

export const Welcome:FC<WelcomeProps> = ({ heading, text, isShort }) => {
  return (
    <section className={style.aboutWelcome}>
      <div className={isShort? [style.welcomeBack, style.short].join(" ") : style.welcomeBack}>
        <Container>
          <div className={style.content}>
            <h2 className={style.welcomeHeading}>{heading}</h2>
            <span className={style.welcomeText}>{text}</span>
          </div>
        </Container>
      </div>
    </section>
  );
}
