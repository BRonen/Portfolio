import { ResumeHeader } from "./ResumeHeader";
import { ResumeDescription } from "./ResumeDescription";
import { ResumeEducation } from "./ResumeEducation";
import { ResumeExperience } from "./ResumeExperience";
import { ResumeLanguages } from "./ResumeLanguages";
import { ResumeSkills } from "./ResumeSkills";

export const Resume: React.FC = () => {
  return (
    <div className="md:px-40">
      <div className="flex flex-col md:flex-row justify-between gap-10 py-10 px-20">
        <aside className="flex flex-col gap-5">
          <ResumeHeader />
          {/* <ResumeEducation /> */}
          <ResumeSkills />
          <ResumeLanguages />
        </aside>
        <aside className="md:max-w-[55vw]">
          <ResumeDescription />
          <ResumeExperience />
        </aside>
      </div>
    </div>
  );
};
