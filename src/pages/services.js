import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import Seo from "../components/seo";

export default function Services() {
  return (
    <Layout>
      <Seo title="Projects" />
      <div className="p-12" id="more">
        <h2 className="text-2xl md:text-4xl max-w-2xl mx-auto text-center text-gray-900 leading-normal mb-12">
          Services
        </h2>

        <p className="text-sm md:text-base leading-normal max-w-xl text-center mx-auto text-gray-800 mb-8">
          Dico modus appellantur eum at, atqui dicunt ut sea, debet congue
          munere ne usu. Error laudem quaestio te eum, ad cum nihil corrumpit
          adolescens, no eirmod mediocrem expetenda quo. In per solet iuvaret.
          Id audire commune cotidieque mei. Quo diceret patrioque ut, ex his
          animal forensibus maiestatis. No iisque maiorum invenire his, eos ex
          omnis facer delicata.
        </p>

        <p className="text-sm md:text-base leading-normal max-w-xl text-center mx-auto text-gray-800">
          Ad sed liber nihil, pri liber omnium principes id, at est argumentum
          constituam temporibus. Solum munere per ad. Rationibus repudiandae nec
          in. Quo eu verear suscipit abhorreant. Dicam fastidii nam eu, quo
          recusabo periculis dissentiunt id.
        </p>
      </div>
    </Layout>
  );
}
