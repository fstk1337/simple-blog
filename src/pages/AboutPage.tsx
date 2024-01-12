import { AboutContent } from "@components/AboutContent";
import { Welcome } from "@components/Welcome";

export const AboutPage = () => {
  return (
    <main>
      <Welcome heading='About us' text='More about us!' />
      <AboutContent />
    </main>
  );
}
