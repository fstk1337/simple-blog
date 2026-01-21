import { Container } from '@layout/Container';

import style from './LoginContent.module.scss';
import { useNavigate } from 'react-router-dom';

export const LoginContent = () => {
  const navigate = useNavigate();

  return (
    <section className={style.loginContent}>
      <Container>
        <div className={style.content}>
          <div className={style.main}>
            <form>
              <label>Login
                <input type="text" name="login" />
              </label>
              <label>Password
                <input type="password" name="password" />
              </label>
              <input type="button" value="Login" onClick={() => navigate("/admin")} />
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
};
