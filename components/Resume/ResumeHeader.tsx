import Image from "next/image";

export const ResumeHeader: React.FC = () => (
  <section className="flex flex-col lg:flex-row justify-between items-center mb-5">
    {/*     
    <div className="hidden lg:block relative aspect-square h-full shadow-xl">
      <Image
        className="rounded"
        src="https://github.com/bronen.png"
        alt="Picture of me on github "
        fill
        sizes="100vw"
      />
    </div> 
    */}

    <div className="flex flex-col text-center lg:text-left">
      <p>Brazil</p>
      <p>Rio de Janeiro, RJ</p>
      <hr className="my-1" />
      <ul>
        <li>
          <a className="hover:underline" href="tel:5521964408880">
            +55 (21) 96440-8880
          </a>
        </li>
        <li>
          <a className="hover:underline" href="mailto:brennopereira6@gmail.com">
            brennopereira6@gmail.com
          </a>
          <li></li>
          <a className="hover:underline" href="https://github.com/bronen">
            github.com/bronen
          </a>
        </li>
        <li>
          <a className="hover:underline" href="https://linktr.ee/brennokkkk">
            @brennokkkk
          </a>
        </li>
      </ul>
    </div>
  </section>
);
