
import { Link } from "react-router-dom";

// const customStyles = {
//   content: {
//     backgroundColor: "white",
//     width: 400,
//   },
// };
const Portfolio = () => {
  const ProjectsArray = [
    {
      id: 0,
      imageURL: "/static/images/projects/logoSixdor.jpg",
      title: "Sixdor™",
      subTitle: "Logo Design",
    },
    {
      id: 1,
      imageURL: "/static/images/projects/Zotxu.jpg",
      title: "Zotxu - Brand Identity",
      subTitle: "Brand Identity",
    },
    {
      id: 2,
      imageURL: "/static/images/projects/Pixto.jpg",
      title: "Pixto™",
      subTitle: "Logo & Brand identitiy",
    },
    // {
    //   id: 3,
    //   imageURL: "../../assets/1/front.png",
    //   title: "Enmarco",
    //   subTitle: "Web",
    // },
    // {
    //   id: 4,
    //   imageURL: "../../assets/2/1.png",
    //   title: "FLYAWAY HUB",
    //   subTitle: "MIS",
    // },
    // {
    //   id: 5,
    //   imageURL: "../../assets/3/gdpr.png",
    //   title: "GDPR",
    //   subTitle: "Web",
    // },
  ];
  return (
    <>
      <section className="pb-12">
        <div className="text-center w-full mx-auto md:w-11/12 xl:w-9/12 md:text-center pt-24">
          <h1 className="font-bold text-2xl leading-[1.1]  md:text-3xl pb-16">
            <span className="block w-full py-2 text-gray-900 bg-clip-text leading-12 lg:inline">
              Our Resent Projects
            </span>
          </h1>
        </div>

        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3  md:w-10/12 gap-10 pb-24 ">
          {ProjectsArray.map((project) => {
            return (
              <PortfolioCard
                id={project.id}
                ImageHref={project.imageURL}
                title={project.title}
                category={project.subTitle}
                buttonHref="/content-not-found"
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Portfolio;

const PortfolioCard = ({ category, ImageHref, title, buttonHref }) => {
  return (
    <>
      <Link
        to={buttonHref}
        className="font-medium text-gray-900 m-auto hover:underline"
      >
        <div className="p-6 m-auto w-10/12 md:w-full rounded-lg shadow-md hover:shadow-lg bg-gray-50">
          <img className="w-full rounded-lg shadow-lg" src={ImageHref} alt="" />
          <h1 className="text-xl text-gray-900 pt-2 font-bold">{title}</h1>
          <h4 className="text-md text-gray-600 font-semibold">{category}</h4>
        </div>
      </Link>
    </>
  );
};
