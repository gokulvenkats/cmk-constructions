import "../styles/globals.css";
import Layout from "../components/layout";

function MyApp({ Component, pageProps }) {
  return (
    <body class="bg-white font-sans">
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </body>
  );
}

export default MyApp;
