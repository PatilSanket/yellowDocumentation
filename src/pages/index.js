import React from "react";
import classnames from "classnames";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";
import Footer from "../core/Footer";
import styles from "./styles.module.css";
import StillNotFind from "../components/StillNotFind";
import Header from "../components/Header";
import TopicCard from "../components/TopicCard";
import Community from "../components/Community";
import QuickReads from "../components/QuickReads";
import { topics } from "../constants";

const features = [
  {
    title: <>Getting Started</>,
    imageUrl: "img/getting-started.svg",
    description: (
      <>
        A step-by-step guide to setup Axioms according to your authentication
        and access-control requirements.
      </>
    ),
    pageUrl: "docs/getting-started/index",
  },
  {
    title: <>SDKs & Samples</>,
    imageUrl: "img/sdks-samples.svg",
    description: (
      <>
        Use our languages and framework specific SDKs and samples to integrate
        Axioms with your apps and services.
      </>
    ),
    pageUrl: "docs/sdks-samples/index",
  },
  {
    title: <>OpenID & OAuth 2</>,
    imageUrl: "img/standard-compliance.svg",
    description: (
      <>
        Deep-dive into all OpenID Connect (OIDC) and OAuth 2 compliant platform
        features using our advanced guides.
      </>
    ),
    pageUrl: "docs/openid-connect/index",
  },
];

function Feature({ imageUrl, title, description, pageUrl }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={classnames("col col--4", styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2>{title}</h2>
      <p>{description}</p>
      <p className="learn-more">
        <a href={pageUrl}>Learn more →</a>
      </p>
    </div>
  );
}

const iframe =
  '<iframe src="https://d3metalab.substack.com/embed" width="480" height="320" style="border:1px solid #EEE; background:white;" frameborder="0" scrolling="no"></iframe>';

function Iframe(props) {
  return (
    <div
      dangerouslySetInnerHTML={{ __html: props.iframe ? props.iframe : "" }}
    />
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  return (
    <Layout
      title="Home"
      description="Add strong authentication, fine-grained authorization in your apps, devices, and APIs."
    >
      <main className={styles.main_wrapper}>
        {/* <div className={styles.buttons}>
            <Link
              className={classnames(
                "button cta-btn button--outline button--primary button--lg",
                styles.getStarted
              )}
              to={"https://cloud.yellowmessenger.com"}
            >
              <i className="feather icon-arrow-right"></i> Get started for free
            </Link>
            <Link
              className={classnames(
                "button cta-btn button--outline button--success button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/cookbooks")}
            >
              <i className="feather icon-github"></i> Explore Cookbooks
            </Link>
          </div> */}
        <Header />
        <section className={styles.section_container}>
          <div className={styles.contents}>
            <div className={styles.details}>
              {topics.map((topic, index) => (
                <TopicCard
                  key={index}
                  title={topic.title}
                  description={topic.description}
                  icon={topic.icon}
                  url={topic.url}
                />
              ))}
            </div>
          </div>
        </section>
        <StillNotFind />
      </main>
      <Footer />
    </Layout>
  );
}

export default Home;
