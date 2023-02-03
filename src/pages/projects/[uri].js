import Head from "next/head";
import Link from "next/link";
import Banner from "@/components/global/Banner";
import Header from "@/components/global/Header";

import client from "@/lib/apollo";
import { gql } from "@apollo/client";
import Footer from "@/components/global/Footer";
import Hero from "@/components/project/Hero";
import Overview from "@/components/project/Overview";
import ProjectDetails from "@/components/project/ProjectDetails";

export default function Project({ project }) {
  return (
    <>
      <Head>
        <title>{project.title} - Mark Bedner</title>
        <meta name="description" content={`Read more about ${project.title}`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Banner />
      <Header />
      <main>
        <Hero
          heading={project.title}
          subheading={project.project.company.companyName}
        />
        <Overview intro={project.project.introduction} />
        <ProjectDetails
          challenge={project.project.problem.problemText}
          approach={project.project.solution.solutionText}
          outcome={project.project.outcome.outcomeText}
        />
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
          company {
            companyName
          }
          cta {
            bodyText
            heading
          }
          outcome {
            outcomeImage {
              sourceUrl
            }
            outcomeText
          }
          problem {
            problemText
            problemImage {
              sourceUrl
            }
          }
          solution {
            solutionText
            solutionImage {
              sourceUrl
            }
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
