import { HomeContent } from "@components/HomeContent";
import { Welcome } from "@components/Welcome";

export const HomePage = () => {
  return (
    <main>
      <Welcome heading='Just a space' text='Not a special stuff here' />
      <HomeContent />
    </main>
  );
}
