import { AppRouter } from "@app/AppRouter";
import { queryClient } from "@app/query-client";
import { QueryClientProvider } from "@tanstack/react-query";


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AppRouter />
    </QueryClientProvider>
  );
}

export default App;
