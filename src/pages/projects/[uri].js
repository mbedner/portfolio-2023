import Head from "next/head";
import Link from "next/link";
import Banner from "@/components/global/Banner";
import Header from "@/components/global/Header";

import client from "@/lib/apollo";
import { gql } from "@apollo/client";
import Footer from "@/components/global/Footer";

export default function Project({ project }) {
  return (
    <>
      <Head>
        <title>{project.title}</title>
        <meta name="description" content={`Read more about ${project.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Header />
      <main>
        <h1>{project.title}</h1>
      </main>
      <Footer
        heading={project.project.cta.heading}
        bodyText={project.project.cta.bodyText}
      />
    </>
  );
}

export async function getStaticProps({ params }) {
  const GET_PROJECT_BY_URI = gql`
    query GetProjectByURI($id: ID!) {
      project(id: $id, idType: URI) {
        uri
        title
        project {
          introduction
          cta {
            bodyText
            heading
          }
        }
      }
    }
  `;

  const response = await client.query({
    query: GET_PROJECT_BY_URI,
    variables: {
      id: params.uri,
    },
  });

  const project = response?.data?.project;
  return {
    props: {
      project,
    },
  };
}

export async function getStaticPaths() {
  const paths = ["/projects/product-customizer"];
  return {
    paths,
    fallback: "blocking",
  };
}
