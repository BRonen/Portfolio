import { ResumeHeader } from "./ResumeHeader";
import { ResumeDescription } from "./ResumeDescription";
import { ResumeEducation } from "./ResumeEducation";
import { ResumeExperience } from "./ResumeExperience";
import { ResumeLanguages } from "./ResumeLanguages";
import { ResumeSkills } from "./ResumeSkills";

export const Resume: React.FC = () => {
  return (
    <div className="md:px-40">
      <div className="flex flex-col md:flex-row justify-between gap-10 my-5 mx-20 md:mx-0">
        <aside className="md:max-w-[60%]">
          <ResumeHeader />
          <ResumeDescription />
          <ResumeExperience />
        </aside>
        <aside className="flex flex-col gap-5">
          <ResumeEducation />
          <ResumeSkills />
          <ResumeLanguages />
        </aside>
      </div>
    </div>
  );
};
