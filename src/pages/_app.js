import { ChakraProvider } from "@chakra-ui/react";
import PageLayout from "@/components/PageLayout";

function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <PageLayout>
        <Component {...pageProps} />
      </PageLayout>
    </ChakraProvider>
  );
}

export default App;
