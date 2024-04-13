import { Link } from "react-router-dom";
import SmallCard from "../Technologies/SmallCard";

const Technologies = () => {
  const Languages = [
    {
      id: 0,
      url: "/static/images/technologiesIcons/c.png",
      title: "C",
      alt: "C",
    },
    {
      id: 1,
      url: "/static/images/technologiesIcons/c++.png",
      title: "C++",
      alt: "C++",
    },
    {
      id: 2,
      url: "/static/images/technologiesIcons/java.png",
      title: "Java",
      alt: "Java",
    },
    {
      id: 3,
      url: "/static/images/technologiesIcons/python.png",
      title: "Phyton",
      alt: "Phyton",
    },
    {
      id: 4,
      url: "/static/images/technologiesIcons/c-sharp.png",
      title: "C#",
      alt: "C#",
    },
    {
      id: 5,
      url: "/static/images/technologiesIcons/ruby.png",
      title: "Ruby",
      alt: "Ruby",
    },
    {
      id: 6,
      url: "/static/images/technologiesIcons/apple.png",
      title: "Objective C",
      alt: "Objective C",
    },
  ];

  const WebDevelopment = [
    {
      id: 0,
      url: "/static/images/technologiesIcons/js.png",
      title: "JavaScript",
      alt: "JavaScript",
    },
    {
      id: 1,
      url: "/static/images/technologiesIcons/html-5.png",
      title: "HTML",
      alt: "HTML",
    },
    {
      id: 2,
      url: "/static/images/technologiesIcons/css-3.png",
      title: "CSS",
      alt: "CSS",
    },
    {
      id: 3,
      url: "/static/images/technologiesIcons/php.png",
      title: "PHP",
      alt: "PHP",
    },
    {
      id: 4,
      url: "/static/images/technologiesIcons/Nodejs.svg",
      title: "Node.js",
      alt: "Node.js",
    },
    {
      id: 5,
      url: "/static/images/technologiesIcons/react.png",
      title: "React.js",
      alt: "React.js",
    },
    {
      id: 6,
      url: "/static/images/technologiesIcons/AngularJS.svg",
      title: "Angular",
      alt: "Angular",
    },
    {
      id: 7,
      url: "/static/images/technologiesIcons/vue-icon.webp",
      title: "Vue.js",
      alt: "Vue.js",
    },
    {
      id: 8,
      url: "/static/images/technologiesIcons/bootstrap.png",
      title: "Bootstrap",
      alt: "Bootstrap",
    },
    {
      id: 9,
      url: "/static/images/technologiesIcons/Tailwind_CSS.png",
      title: "Tailwind CSS",
      alt: "Tailwind CSS",
    },
  ];

  const MobileApp = [
    {
      id: 0,
      url: "/static/images/technologiesIcons/android.png",
      title: "Android (Java/Kotlin)",
      alt: "Android (Java/Kotlin)",
    },
    {
      id: 1,
      url: "/static/images/technologiesIcons/apple-logo.png",
      title: "iOS (Swift/Objective C)",
      alt: "iOS (Swift/Objective C)",
    },
  ];

  const DBMS = [
    {
      id: 0,
      url: "/static/images/technologiesIcons/mysql.png",
      title: "MySQL",
      alt: "MySQL",
    },
    {
      id: 1,
      url: "/static/images/technologiesIcons/Postgresql.png",
      title: "PostgreSQL",
      alt: "PostgreSQL",
    },
    {
      id: 2,
      url: "/static/images/technologiesIcons/mongoDB.png",
      title: "MongoDB",
      alt: "MongoDB",
    },
    {
      id: 3,
      url: "/static/images/technologiesIcons/sqlServer.png",
      title: "SQL Server",
      alt: "Microsoft SQL Server",
    },
    {
      id: 4,
      url: "/static/images/technologiesIcons/Oracle.png",
      title: "Oracle",
      alt: "Oracle",
    },
  ];

  const Frameworks = [
    {
      id: 0,
      url: "/static/images/technologiesIcons/django.png",
      title: "Django",
      alt: "Django (Python)",
    },
    {
      id: 1,
      url: "/static/images/technologiesIcons/flask-flask.webp",
      title: "Flask",
      alt: "Flask (Python)",
    },
    {
      id: 2,
      url: "/static/images/technologiesIcons/rubyonRails.png",
      title: "Ruby on Rails",
      alt: "Ruby on Rails (Ruby)",
    },
    {
      id: 3,
      url: "/static/images/technologiesIcons/springJava.png",
      title: "Spring",
      alt: "Spring (Java)",
    },
    {
      id: 4,
      url: "/static/images/technologiesIcons/Laravel.svg",
      title: "Laravel",
      alt: "Laravel (PHP)",
    },
    {
      id: 5,
      url: "/static/images/technologiesIcons/asp-net1.png",
      title: "ASP.NET",
      alt: "ASP.NET",
    },
    {
      id: 6,
      url: "/static/images/technologiesIcons/expressjs.webp",
      title: "Express.js",
      alt: "Express.js (JavaScript - Node.js)",
    },
  ];

  const CloudComputing = [
    {
      id: 0,
      url: "/static/images/technologiesIcons/aws.png",
      title: "Amazon Web Services (AWS)",
      alt: "Amazon Web Services (AWS)",
    },
    {
      id: 1,
      url: "/static/images/technologiesIcons/Azure.png",
      title: "Microsoft Azure",
      alt: "Microsoft Azure",
    },
    {
      id: 2,
      url: "/static/images/technologiesIcons/google-cloud.png",
      title: "Google Cloud Platform (GCP)",
      alt: "Google Cloud Platform (GCP)",
    },
  ];

  const BigData = [
    {
      id: 0,
      url: "/static/images/technologiesIcons/hadoop-logo.jpg",
      title: "Hadoop",
      alt: "Hadoop",
    },
    {
      id: 1,
      url: "/static/images/technologiesIcons/Spark.png",
      title: "Apache Spark",
      alt: "Apache Spark",
    },
    {
      id: 2,
      url: "/static/images/technologiesIcons/Apache_Flink.png",
      title: "Apache Flink",
      alt: "Apache Flink",
    },
    {
      id: 3,
      url: "/static/images/technologiesIcons/Tableau.png",
      title: "Tableau",
      alt: "Tableau",
    },
    {
      id: 4,
      url: "/static/images/technologiesIcons/powerbi.jpg",
      title: "Power BI",
      alt: "Power BI",
    },
  ];

  const AI = [
    {
      id: 0,
      url: "/static/images/technologiesIcons/TensorFlow.png",
      title: "TensorFlow",
      alt: "TensorFlow",
    },
    {
      id: 1,
      url: "/static/images/technologiesIcons/PyTorch.png",
      title: "PyTorch",
      alt: "PyTorch",
    },
    {
      id: 2,
      url: "/static/images/technologiesIcons/Scikit_learn.png",
      title: "scikit-learn",
      alt: "scikit-learn",
    },
    {
      id: 3,
      url: "/static/images/technologiesIcons/opencv.png",
      title: "OpenCV",
      alt: "OpenCV",
    },
  ];

  const DevOps = [
    {
      id: 0,
      url: "/static/images/technologiesIcons/Docker.png",
      title: "Docker",
      alt: "Docker",
    },
    {
      id: 1,
      url: "/static/images/technologiesIcons/Kubernetes.svg",
      title: "Kubernetes",
      alt: "Kubernetes",
    },
    {
      id: 2,
      url: "/static/images/technologiesIcons/Jenkins.png",
      title: "Jenkins",
      alt: "Jenkins",
    },
    {
      id: 3,
      url: "/static/images/technologiesIcons/Ansible.svg",
      title: "Ansible",
      alt: "Ansible",
    },
  ];

  const VersionControl = [
    {
      id: 0,
      url: "/static/images/technologiesIcons/git.png",
      title: "Git",
      alt: "Git",
    },
    {
      id: 1,
      url: "/static/images/technologiesIcons/Apache_Subversion.png",
      title: "SVN",
      alt: "SVN",
    },
  ];

  return (
    <>
    <section className="pb-36 bg-gray-50 mt-16"
         style={{
          backgroundImage: 'linear-gradient(to right, rgba(255, 255, 255, 0.5), rgba(254, 255, 255, 0.8)), url("/static/images/bg.png")',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100%',
        }}>
         
        <div className="text-md w-9/12 m-auto pt-4 flex items-center ">
          <span>
            <Link to="/" className="hover:text-blue-700" title="Home">
              Home{" "}
            </Link>
          </span>
          <span className="px-2">
            <svg
              className=" h-2 w-2 text-gray-800 display-inline"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 8 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1"
              />
            </svg>
          </span>
          <span className="text-blue-700">Technologies</span>
        </div>
        <div className="text-center w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center pt-24">
          <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-6xl pb-8">
            <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
              Technologies
            </span>
          </h1>
          <p className="flex px-5 mb-8 text-lg text-justify text-gray-900 md:text-xl lg:px-24 mt-8 ">
            We have a team of over 120 software engineers skilled in various
            languages like C++, Java, C#, RoR, Python, Objective C, JavaScript,
            and more. They have experience with different platforms, IDEs, APIs,
            databases, and frameworks.
          </p>
          <p className="flex px-5 mb-8 text-lg text-justify text-gray-900 md:text-xl lg:px-24 mt-8 pb-8">
            This diverse technical knowledge is uncommon for a mid-sized
            software development partner. Our teams stay updated on the newest
            technologies, including AI, Machine Learning, Big Data, DevOps, and
            Cloud. We also keep abreast of the latest software languages and
            development methods through continuous learning.
          </p>
        </div>
      </section>

      <section>
        <div className="container mx-auto  md:w-9/12 gap-5 py-28 ">
          <div className=" mx-auto text-center">
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-4xl mb-20">
              <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
                Programming Languages
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              {Languages.map((languages) => (
                <SmallCard
                  key={languages.id}
                  id={languages.id}
                  title={languages.title}
                  url={languages.url}
                  alt={languages.alt}
                />
              ))}
            </div>
          </div>
        </div>
        <div className="bg-gray-50 ">
          <div className=" mx-auto text-center container md:w-9/12 gap-5 py-28">
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-4xl mb-20">
              <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
                Web Development
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              {WebDevelopment.map((web) => (
                <SmallCard
                  key={web.id}
                  id={web.id}
                  title={web.title}
                  url={web.url}
                  alt={web.alt}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto  md:w-9/12 gap-5 py-28 ">
          <div className=" mx-auto text-center">
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-4xl mb-20">
              <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
                Mobile App Development
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              {MobileApp.map((app) => (
                <SmallCard
                  key={app.id}
                  id={app.id}
                  title={app.title}
                  url={app.url}
                  alt={app.alt}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 ">
          <div className=" mx-auto text-center container md:w-9/12 gap-5 py-28">
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-4xl mb-20">
              <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
                Database Management Systems (DBMS)
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              {DBMS.map((db) => (
                <SmallCard
                  key={db.id}
                  id={db.id}
                  title={db.title}
                  url={db.url}
                  alt={db.alt}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto  md:w-9/12 gap-5 py-28 ">
          <div className=" mx-auto text-center">
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-4xl mb-20">
              <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
                Frameworks
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              {Frameworks.map((framework) => (
                <SmallCard
                  key={framework.id}
                  id={framework.id}
                  title={framework.title}
                  url={framework.url}
                  alt={framework.alt}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 ">
          <div className=" mx-auto text-center container md:w-9/12 gap-5 py-28">
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-4xl mb-20">
              <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
                Cloud Computing
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              {CloudComputing.map((cloud) => (
                <SmallCard
                  key={cloud.id}
                  id={cloud.id}
                  title={cloud.title}
                  url={cloud.url}
                  alt={cloud.alt}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto  md:w-9/12 gap-5 py-28 ">
          <div className=" mx-auto text-center">
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-4xl mb-20">
              <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
                Big Data and Analytics
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              {BigData.map((data) => (
                <SmallCard
                  key={data.id}
                  id={data.id}
                  title={data.title}
                  url={data.url}
                  alt={data.alt}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 ">
          <div className=" mx-auto text-center container md:w-9/12 gap-5 py-28">
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-4xl mb-20">
              <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
                Artificial Intelligence (AI) and Machine Learning (ML)
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              {AI.map((ai) => (
                <SmallCard
                  key={ai.id}
                  id={ai.id}
                  title={ai.title}
                  url={ai.url}
                  alt={ai.alt}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto  md:w-9/12 gap-5 py-28 ">
          <div className=" mx-auto text-center">
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-4xl mb-20">
              <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
                DevOps
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              {DevOps.map((dev) => (
                <SmallCard
                  key={dev.id}
                  id={dev.id}
                  title={dev.title}
                  url={dev.url}
                  alt={dev.alt}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="bg-gray-50 ">
          <div className=" mx-auto text-center container md:w-9/12 gap-5 py-28">
            <h1 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-4xl mb-20">
              <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
                Version Control
              </span>
            </h1>
            <div className="flex flex-wrap justify-center gap-8">
              {VersionControl.map((vc) => (
                <SmallCard
                  key={vc.id}
                  id={vc.id}
                  title={vc.title}
                  url={vc.url}
                  alt={vc.alt}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Technologies;
