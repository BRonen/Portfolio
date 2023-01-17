export const ResumeExperience: React.FC = () => (
  <section className="flex flex-col gap-3">
    <h1 className="font-mono text-2xl">PROFESSIONAL EXPERIENCE</h1>

    <hr />

    <div className="flex flex-col gap-10">
      <div className="flex flex-col">
        <span className="font-bold text-lg">Front-end Developer</span>
        <i>Viddy :: Sales Delivery System</i>
        <span className="font-semibold text-sm">October 2022 - Present</span>
        <ul className="list-disc list-inside">
          <li>
            Creating and fixing react applications using Redux, Redux-saga, SASS
            and a lot of front-end techs.
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <span className="font-bold text-lg">Software Developer</span>
        <i>QG Security ® | Security & Intelligence</i>
        <span className="font-semibold text-sm">March 2022 - Present</span>
        <ul className="list-disc list-inside">
          <li>Back-end development with Node.js;</li>

          <li>
            Python development with chat bots doing webhooks using flask,
            WebScrapping Twitter with selenium and a lot of unit tests;
          </li>

          <li>
            Front-end development with React.js and Vue.js using Typescript,
            Bootstrap and google maps api;
          </li>
        </ul>
      </div>

      <div className="flex flex-col">
        <span className="font-bold text-lg">Freelance Software Developer</span>
        <span className="font-semibold text-sm">October 2021</span>
        <ul className="list-disc list-inside">
          <li>
            Web system development coded with JavaScript using Node.js, express,
            mongoDB and EJS to solve a delivery management problem.
          </li>
          <span className="font-semibold text-sm">May 2021</span>
          <li>
            Desktop program development with Python3 using PySimpleGUI
            (TKinter), SQLite3 and fetching data from external web APIs;
          </li>
        </ul>
      </div>
    </div>
  </section>
);
