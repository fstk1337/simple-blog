import { AdminContent } from "@components/AdminContent";
import { Welcome } from "@components/Welcome";

export const AdminPage = () => {
  return (
    <main>
      <Welcome heading='You are admin' text='Check and edit all posts here' isShort={true} />
      <AdminContent />
    </main>
  );
}
