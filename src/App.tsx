import { AppRouter } from "@app/AppRouter";
import { queryClient } from "@app/query-client";
import { QueryClientProvider } from "@tanstack/react-query";
import { RouterProvider } from "react-router-dom";


const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={AppRouter()} future={{ v7_startTransition: true }} />
    </QueryClientProvider>
  );
}

export default App;
