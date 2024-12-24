import "../styles/globals.css";

import Layout from "../components/Layout";
import { motion } from "framer-motion";
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <motion.div>
        <Component {...pageProps} />
      </motion.div>
    </Layout>
  );
}

export default MyApp;
