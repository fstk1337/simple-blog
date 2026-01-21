import { LoginContent } from "@components/LoginContent";
import { Welcome } from "@components/Welcome";

export const LoginPage = () => {
  return (
    <main>
      <Welcome heading='Admin login' text='Proceed to create and edit posts' isShort={true} />
      <LoginContent />
    </main>
  );
}
