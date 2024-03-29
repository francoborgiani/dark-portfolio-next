import { useContext } from "react";
import Head from "next/head";
import ThemeContext from "../../context/ThemeContext";
import { AiOutlineArrowDown } from "react-icons/ai";
import SocialMediaNavbar from "../../components/SocialMediaNavbar";
import Section from "../../components/Section";
import Footer from "../../components/Footer";
import Button from "../../components/Button";

const About = () => {
  const { darkmode } = useContext(ThemeContext);
  return (
    <div className="w-full h-full max-w-6xl mx-auto text-2xl text-center text-pink-100 md:px-8">
      <Head>
        <meta
          name="description"
          content="I am Franco Borgiani. I'm Data Engineer, I love Software Development and coding best practices"
        />
        <title>About | Franco Borgiani Data Engineer</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="robots" content="index, follow" />
        <link
          rel="icon"
          type="favicon"
          href="https://franborgiani.com/favicon-32x32.png"
          sizes="16x16"
        ></link>
      </Head>
      <Section>
        <div className="flex flex-col align-items-center">
          <a href="#bottom">
            <h1
              className={`max-w-6xl md:text-4xl  ${
                darkmode ? "text-white" : "text-black"
              }`}
            >
              I'm studying for get my Bachelor's Degree in IT, I'm a Data Engineer, and an ex Fullstack Developer. I love coding and making scalable software.
            </h1>
          </a>
          <a
            href="#bottom"
            className={`w-10 mx-auto ${
              darkmode ? "text-blue-500" : "text-purple-700"
            }`}
          >
            <AiOutlineArrowDown className="w-10 h-10 mt-2 text-center" />
          </a>
        </div>
      </Section>
      <Section>
        <h1
          className={`max-w-6xl md:text-4xl  ${
            darkmode ? "text-white" : "text-black"
          }`}
        >
          If you want to know more about myself you can follow me on...
        </h1>
        <SocialMediaNavbar darkmode={darkmode} />
        <Button content={"See my projects"} route={"/projects"} darkmode={darkmode}/>
      </Section>
      <Footer darkmode={darkmode} />
    </div>
  );
};

const getStaticProps = () => {
  return {
    props: {

    }
  }
}

export default About;
