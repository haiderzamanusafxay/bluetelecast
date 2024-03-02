import React from "react";
import image from "../../assets/1/1.png";
const Services = () => {
  return (
    <>
      <section
        id="services"
        className="container mx-auto  space-y-1  py-8  lg:py-20 w-full"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col py-5 items-center space-y-4 text-center">
          <h2 className="font-bold text-4xl leading-[1.1] sm:text-3xl md:text-6xl">
            <span className="block w-full py-2 text-transparent bg-clip-text leading-12 bg-gradient-to-r from-green-400 to-purple-500 lg:inline">
              Services
            </span>
          </h2>

          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7"></p>
        </div>

        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[80rem] md:grid-cols-3">
          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <img
                src={"https://cdn-icons-png.flaticon.com/512/9414/9414296.png"}
                width={50}
                height={50}
                alt="web dev icon"
              />

              <div className="space-y-2">
                <h3 className="font-bold">Web Development</h3>
                <p className="text-sm text-muted-foreground">
                  Discover the art and science of online presence with
                  Bluetelecast's web design and development services.
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2752/2752457.png"
                alt=""
                width={50}
                height={50}
              />
              <div className="space-y-2">
                <h3 className="font-bold">Software Design</h3>
                <p className="text-sm">
                  Empower your business with our custom software solutions. We
                  specialize in optimizing your operations with intuitive and
                  efficient software design
                </p>
              </div>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg border bg-white select-none hover:shadow hover:shadow-teal-200 p-2">
            <div className="flex h-[180px] flex-col justify-between rounded-md p-6">
              <img
                src="https://developer.android.com/static/guide/practices/ui_guidelines/images/adaptive-icon-mask-applied.png"
                width={50}
                height={50}
                alt=""
              />
              <div className="space-y-2">
                <h3 className="font-bold">Android Apps</h3>
                <p className="text-sm text-muted-foreground">
                  Enter the world of Android seamlessly with Bluetelecast’s
                  expertly crafted apps.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
