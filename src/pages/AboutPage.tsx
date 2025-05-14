import { AboutContent } from "@components/AboutContent";
import { Welcome } from "@components/Welcome";

export const AboutPage = () => {
  return (
    <main>
      <Welcome heading='About me' text='Some personal information' />
      <AboutContent />
    </main>
  );
}
