const Testimonials = () => {
  return (
    <>
      <div className="relative font-inter antialiased">

<main className="relative min-h-screen flex flex-col justify-center bg-slate-50 overflow-hidden">
    <div className="w-full max-w-6xl mx-auto px-4 md:px-6 py-24">
        <div className="flex justify-center">

            <div className="w-full max-w-3xl mx-auto text-center" x-data="slider">
                <div className="relative h-32">
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[480px] h-[480px] pointer-events-none before:absolute before:inset-0 before:bg-gradient-to-b before:from-indigo-500/25 before:via-indigo-500/5 before:via-25% before:to-indigo-500/0 before:to-75% before:rounded-full before:-z-10">
                        <div className="h-32 [mask-image:_linear-gradient(0deg,transparent,theme(colors.white)_20%,theme(colors.white))]">
                            <template x-for="(testimonial, index) in testimonials" key="index">
                                <div
                                    x-show="active === index"
                                    className="absolute inset-0 -z-10"
                                    x-transition:enter="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700 order-first"
                                    x-transition:enter-start="opacity-0 -rotate-[60deg]"
                                    x-transition:enter-end="opacity-100 rotate-0"
                                    x-transition:leave="transition ease-[cubic-bezier(0.68,-0.3,0.32,1)] duration-700"
                                    x-transition:leave-start="opacity-100 rotate-0"
                                    x-transition:leave-end="opacity-0 rotate-[60deg]"
                                >
                                    <img className="relative top-11 left-1/2 -translate-x-1/2 rounded-full" src="testimonial.img" width="56" height="56" alt="testimonial.name">
                                </div>
                            </template>
                        </div>
                    </div>
                </div>
                <div className="mb-9">
                    <div className="relative flex flex-col transition-all duration-150 delay-300 ease-in-out" x-ref="testimonials">
                        <template x-for="(testimonial, index) in testimonials" key="index">
                            <div
                                x-show="active === index"
                                x-transition:enter="transition ease-in-out duration-500 delay-200 order-first"
                                x-transition:enter-start="opacity-0 -translate-x-4"
                                x-transition:enter-end="opacity-100 translate-x-0"
                                x-transition:leave="transition ease-out duration-300 delay-300 absolute"
                                x-transition:leave-start="opacity-100 translate-x-0"
                                x-transition:leave-end="opacity-0 translate-x-4"
                            >
                                <div className="text-2xl font-bold text-slate-900 before:content-['\201C'] after:content-['\201D']" x-text="testimonial.quote"></div>
                            </div>
                        </template>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center -m-1.5">
                    <template x-for="(testimonial, index) in testimonials" key="index">
                        <button
                            className="inline-flex justify-center whitespace-nowrap rounded-full px-3 py-1.5 m-1.5 text-xs shadow-sm focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150"
                            className="active === index ? 'bg-indigo-500 text-white shadow-indigo-950/10' : 'bg-white hover:bg-indigo-100 text-slate-900'"
                            onClick="active = index; stopAutorotate();"
                        >
                            <span x-text="testimonial.name"></span> <span className="active === index ? 'text-indigo-200' : 'text-slate-300'">-</span> <span x-text="testimonial.role"></span>
                        </button>
                    </template>
                </div>
            </div>
           
    </>
  );
};

export default Testimonials;
