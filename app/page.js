import type { Metadata } from 'next';
import SkillsCard from "@/component/SkillCard";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: 'Full-Stack Developer | WordPress & MERN Stack Expert',
  description: 'I’m a Full-Stack Developer with 3+ years of experience in WordPress performance tuning, WooCommerce, and MERN stack development. Skilled in backend logic, API development, JWT auth, and modern front-end using React and Next.js.',
  keywords: [
    'Full-Stack Developer',
    'WordPress Performance',
    'MERN Stack',
    'React',
    'Next.js',
    'Node.js',
    'WooCommerce',
    'API Development',
    'JWT Authentication',
    'Web Developer Portfolio',
  ],
  authors: [{ name: 'Sanjib Mondal', url: 'https://s4nj18.github.io/my-portfolio/' }],
  openGraph: {
    title: 'Full-Stack Developer Portfolio | WordPress & MERN Stack Expert',
    description:
      'Explore my portfolio showcasing WordPress performance optimization, full-stack development with MERN, and secure, scalable web solutions.',
    url: 'https://s4nj18.github.io/my-portfolio/',
    siteName: 'Sanjib Portfolio',
    images: [
      {
        url: '/my-portfolio/Developer.jpeg',
        width: 1200,
        height: 630,
        alt: 'Portfolio Preview',
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Full-Stack Developer Portfolio | WordPress & MERN Expert',
    description:
      'Custom themes, WooCommerce, MERN stack, API integration, performance debugging & more.',
    images: ['/my-portfolio/Developer.jpeg'],
  },
  metadataBase: new URL('https://s4nj18.github.io/my-portfolio/'),
};


const Home = () => {
  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="max-w-[1200px] mx-auto">
        <div className="home-main py-12 justify-between gap-8">
          {/* Hero Section */}

          <div className="home-hero flex flex-col md:flex-row items-center justify-between gap-8">
            {/* Left Section */}
            <div className="md:w-2/2">
              <div className="flex flex-col gap-6 items-start relative">
                <div className="flex flex-col gap-4 items-start relative">
                  <div className="flex flex-col gap-0 items-start relative">
                    <h1 className="text-7xl leading-[84px] text-[#132238]">
                      <span className="text-[#132238] text-7xl font-semibold">
                        Hello, I’m Sanjib Mondal
                      </span>
                    </h1>
                  </div>
                </div>
                <p className="text-lg leading-6">
                  <span className="text-[#132238] text-lg font-normal">
                    I’m a Full-Stack Developer
                  </span>
                  <span className="text-[#556070] text-lg font-normal">
                    {" "}
                    from Kolkata, India. I am passionate about crafting
                    beautiful, responsive, and user-centric web applications. I
                    blend clean, scalable code with thoughtful design to create
                    meaningful digital experiences. I’m always excited to
                    contribute my skills to forward-thinking teams and grow
                    through collaboration.
                  </span>
                </p>

                <button className="rounded px-6 py-3 flex gap-3 justify-center items-center relative bg-[#a53dff]">
                  <p className="text-base leading-6 text-white">
                    <span className="text-white text-base font-semibold">
                      Say Hello!
                    </span>
                  </p>
                </button>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-5 p-6 bg-[#f3e9ff] border border-purple-200 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
                {/* Card Item 1 */}
                <div className="flex-1 text-center sm:text-center">
                  <h2 className="text-4xl font-bold text-[#424e60]">3+ Y.</h2>
                  <p className="text-[#697484] text-base mt-1">Experience</p>
                </div>

                {/* Divider (optional) */}
                <div className="hidden sm:block w-px bg-purple-300"></div>

                {/* Card Item 2 */}
                <div className="flex-1 text-center sm:text-center">
                  <h2 className="text-4xl font-bold text-[#424e60]">10+</h2>
                  <p className="text-[#697484] text-base mt-1">
                    Project Completed
                  </p>
                </div>

                {/* Divider (optional) */}
                <div className="hidden sm:block w-px bg-purple-300"></div>

                {/* Card Item 3 */}
                <div className="flex-1 text-center sm:text-center">
                  <h2 className="text-4xl font-bold text-[#424e60]">15+</h2>
                  <p className="text-[#697484] text-base mt-1">Happy Client</p>
                </div>
              </div>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2">
              {/* You can add an image or illustration here */}

              <Image
                src="/my-portfolio/Developer.jpeg"
                alt="Sanjib Mondal"
                width={400}
                height={400}
                className="object-cover rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* CV DOWNLOAD Section */}

          <div
            id="about"
            className="mt-8 shadow-[0px_36px_105px_0px_rgba(0.16862745583057404,0.21960780024528503,0.2980392277240753,0.10)] rounded-2xl p-10 flex flex-col md:flex-row gap-[30px] justify-center items-center relative bg-white">
            <div className="md:w-2/2 px-4 py-10">
              <div className="flex flex-col gap-1 items-start relative">
                <h1 className="text-[38px] leading-[50px] text-[#132238]">
                  <span className="text-[#132238] text-[38px] font-semibold">
                    About Me
                  </span>
                </h1>
                <div className="flex flex-col gap-4 items-start relative">
                  <p className="text-lg leading-6 text-[#556070]">
                    <span className="text-[#556070] text-lg font-normal">
                      I’m a passionate Full-Stack Developer with over 3 years of experience, specializing in WordPress performance, backend logic, and modern web technologies. I began my career as a WordPress Developer & Designer, working hands-on with custom themes, WooCommerce integrations, Elementor, and deep performance tuning, including query optimization, caching strategies, and resolving slow site issues.
                    </span>
                  </p>
                  <p className="text-lg leading-6 text-[#556070]">
                    <span className="text-[#556070] text-lg font-normal">
                      Alongside my WordPress responsibilities, I’ve also been managing a full-stack internal project using the MERN stack (MongoDB, Express.js, React/Next.js, Node.js) for over 8 months. In this role, I’ve built RESTful APIs, implemented JWT authentication, and handled backend logic while developing responsive, API-connected interfaces using React and Next.js with EJS templating.
                    </span>
                  </p>
                  <p className="text-lg leading-6 text-[#556070]">
                    <span className="text-[#556070] text-lg font-normal">
Whether debugging performance issues using tools like Grafana and browser DevTools, or analyzing WordPress security concerns, I’m always eager to dig deeper, learn continuously, and solve real-world problems with clean, efficient code.
                    </span>
                  </p>
                </div>

                {/* add social media link here with icon with hover effect and animation

                linkdln, Github, facebook  */}

                {/* Social media links with icons */}
                <div className="flex gap-4 mt-2">
                  <div className="bg-white w-full h-auto py-8 flex items-center justify-center gap-4 flex-wrap">
                    {/* <!-- Linkedin --> */}
                    <Link href={"https://www.linkedin.com/in/sanjib-mondal-031995223/"} target="_blank"
                      type="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      className="mb-2 inline-block rounded bg-[#0077b5] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                      <span className="[&>svg]:h-4 [&>svg]:w-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 448 512">
                          <path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                      </span>
                    </Link>

                    {/* Github */}
                    <Link href={"https://github.com/S4NJ18"} target="_blank"
                      type="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      className="mb-2 inline-block rounded bg-[#333] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                      <span className="[&>svg]:h-4 [&>svg]:w-4">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 496 512">
                          <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
                        </svg>
                      </span>
                    </Link>

                    <Link href={"mailto:sanjib90511@gmail.com"}
                      type="button"
                      data-twe-ripple-init
                      data-twe-ripple-color="light"
                      className="mb-2 inline-block rounded bg-[#ffff] px-6 py-2.5 text-xs font-medium uppercase leading-normal text-white shadow-md transition duration-150 ease-in-out hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg">
                      <span className="[&>svg]:h-5 [&>svg]:w-5">
                        <svg
                          className="rounded-md transition-all duration-300 group-hover:scale-110"
                          width="28"
                          height="28"
                          viewBox="0 0 72 72"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M13.0065 56.1236H21.4893V35.5227L9.37109 26.4341V52.4881C9.37109 54.4997 11.001 56.1236 13.0065 56.1236Z"
                            fill="#4285F4"
                          />
                          <path
                            d="M50.5732 56.1236H59.056C61.0676 56.1236 62.6914 54.4937 62.6914 52.4881V26.4341L50.5732 35.5227"
                            fill="#34A853"
                          />
                          <path
                            d="M50.5732 19.7693V35.5229L62.6914 26.4343V21.587C62.6914 17.0912 57.5594 14.5282 53.9663 17.2245"
                            fill="#FBBC04"
                          />
                          <path
                            d="M21.4893 35.5227V19.769L36.0311 30.6754L50.5729 19.769V35.5227L36.0311 46.429"
                            fill="#EA4335"
                          />
                          <path
                            d="M9.37109 21.587V26.4343L21.4893 35.5229V19.7693L18.0962 17.2245C14.4971 14.5282 9.37109 17.0912 9.37109 21.587Z"
                            fill="#C5221F"
                          />
                        </svg>
                      </span>
                    </Link>
                  </div>
                </div>

                <div className="flex gap-4 items-start relative">
                  <button className="rounded px-6 py-3 flex gap-3 justify-center items-center relative bg-[#a53dff]">
                    <Link
                      href="https://github.com/S4NJ18"
                      target="_blank"
                      className="text-base leading-6 text-white">
                      <span className="text-white text-base font-semibold">
                        My Project
                      </span>
                    </Link>
                  </button>
                  <button className="rounded border border-[#a53dff] px-6 py-3 flex gap-3 justify-center items-center relative bg-white">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M21 14C20.7348 14 20.4804 14.1054 20.2929 14.2929C20.1054 14.4804 20 14.7348 20 15V19C20 19.2652 19.8946 19.5196 19.7071 19.7071C19.5196 19.8946 19.2652 20 19 20H5C4.73478 20 4.48043 19.8946 4.29289 19.7071C4.10536 19.5196 4 19.2652 4 19V15C4 14.7348 3.89464 14.4804 3.70711 14.2929C3.51957 14.1054 3.26522 14 3 14C2.73478 14 2.48043 14.1054 2.29289 14.2929C2.10536 14.4804 2 14.7348 2 15V19C2 19.7956 2.31607 20.5587 2.87868 21.1213C3.44129 21.6839 4.20435 22 5 22H19C19.7956 22 20.5587 21.6839 21.1213 21.1213C21.6839 20.5587 22 19.7956 22 19V15C22 14.7348 21.8946 14.4804 21.7071 14.2929C21.5196 14.1054 21.2652 14 21 14ZM11.29 15.71C11.3851 15.801 11.4972 15.8724 11.62 15.92C11.7397 15.9729 11.8691 16.0002 12 16.0002C12.1309 16.0002 12.2603 15.9729 12.38 15.92C12.5028 15.8724 12.6149 15.801 12.71 15.71L16.71 11.71C16.8983 11.5217 17.0041 11.2663 17.0041 11C17.0041 10.7337 16.8983 10.4783 16.71 10.29C16.5217 10.1017 16.2663 9.99591 16 9.99591C15.7337 9.99591 15.4783 10.1017 15.29 10.29L13 12.59V3C13 2.73478 12.8946 2.48043 12.7071 2.29289C12.5196 2.10536 12.2652 2 12 2C11.7348 2 11.4804 2.10536 11.2929 2.29289C11.1054 2.48043 11 2.73478 11 3V12.59L8.71 10.29C8.61676 10.1968 8.50607 10.1228 8.38425 10.0723C8.26243 10.0219 8.13186 9.99591 8 9.99591C7.86814 9.99591 7.73757 10.0219 7.61575 10.0723C7.49393 10.1228 7.38324 10.1968 7.29 10.29C7.19676 10.3832 7.1228 10.4939 7.07234 10.6158C7.02188 10.7376 6.99591 10.8681 6.99591 11C6.99591 11.1319 7.02188 11.2624 7.07234 11.3842C7.1228 11.5061 7.19676 11.6168 7.29 11.71L11.29 15.71Z"
                        fill="#A53DFF"
                      />
                    </svg>
                    <Link
                      href={
                        "https://drive.google.com/file/d/1jtM57QsV93N2cIDwrN9QVP6MxicvfrL1/view?usp=sharing"
                      }
                      className="text-base leading-6 text-[#a53dff]">
                      <span className="text-[#a53dff] text-base font-semibold">
                        Download CV
                      </span>
                    </Link>
                  </button>
                </div>
              </div>
            </div>

            <SkillsCard />
          </div>

          {/* PortFolio Section */}

          <div
            id="portfolio"
            className="py-[50px] flex flex-col gap-[50px] justify-end items-center relative">
            <div className="flex flex-col gap-[70px] items-center relative">
              <div className="flex flex-col justify-between items-center text-center relative space-y-3 max-w-full mx-auto">
                <h1 className="text-5xl leading-[56px] text-[#132238] font-semibold">
                  Portfolio
                </h1>
                <p className="text-lg leading-6 text-center text-[#87909d] font-normal">
                  I’ve worked on a range of full-stack projects—from clean and
                  responsive interfaces to robust backend systems. Each project
                  reflects my passion for clean code, modern design, and
                  delivering real value to users.
                </p>
                <p className="text-base leading-6 text-center text-[#87909d] font-normal">
                  From React and Node.js to WordPress and custom JavaScript
                  features, my portfolio highlights my journey as a problem
                  solver and creator.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="transition-transform duration-300 hover:scale-105 hover:shadow-xl shadow-md rounded-lg border border-[#e6e8eb] pt-0 pb-8 flex flex-col gap-8 justify-center items-center bg-white">
                  <img
                    src="headless-wp-nextjs.PNG"
                    alt="Card image"
                    className="rounded-t-lg w-full h-[248px] object-cover"
                  />
                  <div className="flex flex-col gap-5 items-start px-4">
                    <div className="flex flex-col gap-3 items-start">
                      <div className="flex flex-col gap-1 items-start">
                        <small className="text-xs text-[#87909d] font-medium">
                          UI-UX DESIGN
                        </small>
                        <p className="text-lg text-[#132238] font-semibold">
                          Wordpress Headless ( NextJS, TailwindCSS)
                        </p>
                      </div>
                      <small className="text-sm text-[#556070] font-normal">
                        I craft fast, responsive web interfaces using WordPress
                        as a headless CMS with Next.js and Tailwind CSS.
                        Combining design freedom with powerful content
                        management.
                      </small>
                    </div>
                    <Link href={"https://headless-wp-next-js-app.vercel.app/"} target="_blank" 
                          className="rounded border border-[#a53dff] px-6 py-3 flex gap-3 items-center bg-white">
                      <p className="text-base text-[#a53dff] font-semibold">
                        See Preview
                      </p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.92 11.6202C17.8724 11.4974 17.801 11.3853 17.71 11.2902L12.71 6.29019C12.6168 6.19695 12.5061 6.12299 12.3842 6.07253C12.2624 6.02207 12.1319 5.99609 12 5.99609C11.7337 5.99609 11.4783 6.10188 11.29 6.29019C11.1968 6.38342 11.1228 6.49411 11.0723 6.61594C11.0219 6.73776 10.9959 6.86833 10.9959 7.00019C10.9959 7.26649 11.1017 7.52188 11.29 7.71019L14.59 11.0002H7C6.73478 11.0002 6.48043 11.1055 6.29289 11.2931C6.10536 11.4806 6 11.735 6 12.0002C6 12.2654 6.10536 12.5198 6.29289 12.7073C6.48043 12.8948 6.73478 13.0002 7 13.0002H14.59L11.29 16.2902C11.1963 16.3831 11.1219 16.4937 11.0711 16.6156C11.0203 16.7375 10.9942 16.8682 10.9942 17.0002C10.9942 17.1322 11.0203 17.2629 11.0711 17.3848C11.1219 17.5066 11.1963 17.6172 11.29 17.7102C11.383 17.8039 11.4936 17.8783 11.6154 17.9291C11.7373 17.9798 11.868 18.006 12 18.006C12.132 18.006 12.2627 17.9798 12.3846 17.9291C12.5064 17.8783 12.617 17.8039 12.71 17.7102L17.71 12.7102C17.801 12.6151 17.8724 12.5029 17.92 12.3802C18.02 12.1367 18.02 11.8636 17.92 11.6202Z"
                          fill="#A53DFF"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="transition-transform duration-300 hover:scale-105 hover:shadow-xl shadow-md rounded-lg border border-[#e6e8eb] pt-0 pb-8 flex flex-col gap-8 justify-center items-center bg-white">
                  <img
                    src="NodeJS Project.PNG"
                    alt="Card image"
                    className="rounded-t-lg w-full h-[248px] object-cover"
                  />
                  <div className="flex flex-col gap-5 items-start px-4">
                    <div className="flex flex-col gap-3 items-start">
                      <div className="flex flex-col gap-1 items-start">
                        <small className="text-xs text-[#87909d] font-medium">
                          Full Stack Development
                        </small>
                        <p className="text-lg text-[#132238] font-semibold">
                          Node.js Blog Backend & Frontend Project
                        </p>
                      </div>
                      <small className="text-sm text-[#556070] font-normal">
                        A feature-rich backend blog system built with Node.js,
                        Express, and MongoDB. It includes secure JWT
                        authentication, session handling with access/refresh
                        tokens, file uploads via Multer, and clean EJS views.
                        Full CRUD operations for users and blog posts are
                        implemented following best practices in structure and
                        security.
                      </small>
                    </div>
                    <Link
                      className="rounded border border-[#a53dff] px-6 py-3 flex gap-3 items-center bg-white"
                      href={"https://github.com/S4NJ18/NodeJSBlog"}
                      target="_blank">
                      <p className="text-base text-[#a53dff] font-semibold">
                        Open Project
                      </p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.92 11.6202C17.8724 11.4974 17.801 11.3853 17.71 11.2902L12.71 6.29019C12.6168 6.19695 12.5061 6.12299 12.3842 6.07253C12.2624 6.02207 12.1319 5.99609 12 5.99609C11.7337 5.99609 11.4783 6.10188 11.29 6.29019C11.1968 6.38342 11.1228 6.49411 11.0723 6.61594C11.0219 6.73776 10.9959 6.86833 10.9959 7.00019C10.9959 7.26649 11.1017 7.52188 11.29 7.71019L14.59 11.0002H7C6.73478 11.0002 6.48043 11.1055 6.29289 11.2931C6.10536 11.4806 6 11.735 6 12.0002C6 12.2654 6.10536 12.5198 6.29289 12.7073C6.48043 12.8948 6.73478 13.0002 7 13.0002H14.59L11.29 16.2902C11.1963 16.3831 11.1219 16.4937 11.0711 16.6156C11.0203 16.7375 10.9942 16.8682 10.9942 17.0002C10.9942 17.1322 11.0203 17.2629 11.0711 17.3848C11.1219 17.5066 11.1963 17.6172 11.29 17.7102C11.383 17.8039 11.4936 17.8783 11.6154 17.9291C11.7373 17.9798 11.868 18.006 12 18.006C12.132 18.006 12.2627 17.9798 12.3846 17.9291C12.5064 17.8783 12.617 17.8039 12.71 17.7102L17.71 12.7102C17.801 12.6151 17.8724 12.5029 17.92 12.3802C18.02 12.1367 18.02 11.8636 17.92 11.6202Z"
                          fill="#A53DFF"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="transition-transform duration-300 hover:scale-105 hover:shadow-xl shadow-md rounded-lg border border-[#e6e8eb] pt-0 pb-8 flex flex-col gap-8 justify-center items-center bg-white">
                  <img
                    src="/my-portfolio/Ultimate Toggle plugins.jpeg"
                    alt="Card image"
                    className="rounded-t-lg w-full h-[248px] object-cover"
                  />
                  <div className="flex flex-col gap-5 items-start px-4">
                    <div className="flex flex-col gap-3 items-start">
                      <div className="flex flex-col gap-1 items-start">
                        <small className="text-xs text-[#87909d] font-medium">
                          WordPress Plugin
                        </small>
                        <p className="text-lg text-[#132238] font-semibold">
                          Ultra Toggle / FAQ Plugin
                        </p>
                      </div>
                      <small className="text-sm text-[#556070] font-normal">
                        A stylish, collapsible FAQ plugin for WordPress with
                        shortcode support, customization options. Developed with
                        simplicity and flexibility in mind.
                      </small>
                    </div>
                    <Link
                      href={
                        "https://github.com/S4NJ18/WP-Plugins-Ultra-Toggle-FAQ-Plugin"
                      }
                      target="_blank"
                      className="rounded border border-[#a53dff] px-6 py-3 flex gap-3 items-center bg-white">
                      <p className="text-base text-[#a53dff] font-semibold">
                        Open Project
                      </p>
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M17.92 11.6202C17.8724 11.4974 17.801 11.3853 17.71 11.2902L12.71 6.29019C12.6168 6.19695 12.5061 6.12299 12.3842 6.07253C12.2624 6.02207 12.1319 5.99609 12 5.99609C11.7337 5.99609 11.4783 6.10188 11.29 6.29019C11.1968 6.38342 11.1228 6.49411 11.0723 6.61594C11.0219 6.73776 10.9959 6.86833 10.9959 7.00019C10.9959 7.26649 11.1017 7.52188 11.29 7.71019L14.59 11.0002H7C6.73478 11.0002 6.48043 11.1055 6.29289 11.2931C6.10536 11.4806 6 11.735 6 12.0002C6 12.2654 6.10536 12.5198 6.29289 12.7073C6.48043 12.8948 6.73478 13.0002 7 13.0002H14.59L11.29 16.2902C11.1963 16.3831 11.1219 16.4937 11.0711 16.6156C11.0203 16.7375 10.9942 16.8682 10.9942 17.0002C10.9942 17.1322 11.0203 17.2629 11.0711 17.3848C11.1219 17.5066 11.1963 17.6172 11.29 17.7102C11.383 17.8039 11.4936 17.8783 11.6154 17.9291C11.7373 17.9798 11.868 18.006 12 18.006C12.132 18.006 12.2627 17.9798 12.3846 17.9291C12.5064 17.8783 12.617 17.8039 12.71 17.7102L17.71 12.7102C17.801 12.6151 17.8724 12.5029 17.92 12.3802C18.02 12.1367 18.02 11.8636 17.92 11.6202Z"
                          fill="#A53DFF"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            {/* <button className=" rounded px-6 py-3 flex gap-3 items-center bg-[#a53dff] hover:bg-[#8a1bd9] transition-colors duration-300">
              <p className="text-base text-white font-semibold">More Project</p>
            </button> */}
          </div>

          {/* Let's Work Together */}

          <div className=" shadow-[0px_36px_105px_0px_rgba(0.16862745583057404,0.21960780024528503,0.2980392277240753,0.10)] rounded-2xl py-[50px] flex flex-col gap-[20px] justify-end items-center relative w-full bg-[#132238]">
            <h1 className="text-5xl leading-[56px] text-center text-white">
              <span className="text-white text-5xl font-semibold">
                Do you have Project Idia? Let’s discuss your project!
              </span>
            </h1>
            <p className="text-lg leading-6 pl-20 pr-20 text-center text-[#a5acb5]">
              <span className="text-[#a5acb5] text-lg font-normal">
                I’m always open to exciting collaborations and creative
                challenges. Whether you’re starting from scratch or improving an
                existing product, I’d love to hear more about it.
              </span>
            </p>
            <button className="rounded px-6 py-3 flex gap-3 justify-center items-center relative bg-[#a53dff]">
              <p className="text-base leading-6 text-white">
                <span className="text-white text-base font-semibold">
                  Let’s work Together
                </span>
              </p>
              <svg
                width="25"
                height="24"
                viewBox="0 0 25 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18.42 11.6202C18.3724 11.4974 18.301 11.3853 18.21 11.2902L13.21 6.29019C13.1168 6.19695 13.0061 6.12299 12.8842 6.07253C12.7624 6.02207 12.6319 5.99609 12.5 5.99609C12.2337 5.99609 11.9783 6.10188 11.79 6.29019C11.6968 6.38342 11.6228 6.49411 11.5723 6.61594C11.5219 6.73776 11.4959 6.86833 11.4959 7.00019C11.4959 7.26649 11.6017 7.52188 11.79 7.71019L15.09 11.0002H7.5C7.23478 11.0002 6.98043 11.1055 6.79289 11.2931C6.60536 11.4806 6.5 11.735 6.5 12.0002C6.5 12.2654 6.60536 12.5198 6.79289 12.7073C6.98043 12.8948 7.23478 13.0002 7.5 13.0002H15.09L11.79 16.2902C11.6963 16.3831 11.6219 16.4937 11.5711 16.6156C11.5203 16.7375 11.4942 16.8682 11.4942 17.0002C11.4942 17.1322 11.5203 17.2629 11.5711 17.3848C11.6219 17.5066 11.6963 17.6172 11.79 17.7102C11.883 17.8039 11.9936 17.8783 12.1154 17.9291C12.2373 17.9798 12.368 18.006 12.5 18.006C12.632 18.006 12.7627 17.9798 12.8846 17.9291C13.0064 17.8783 13.117 17.8039 13.21 17.7102L18.21 12.7102C18.301 12.6151 18.3724 12.5029 18.42 12.3802C18.52 12.1367 18.52 11.8636 18.42 11.6202Z"
                  fill="white"
                />
              </svg>
            </button>
          </div>

          {/* Eduaction */}
        </div>
      </div>
    </div>
  );
};

export default Home;
