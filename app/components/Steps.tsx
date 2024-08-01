import Image from "next/image";
import Copy from "../../../public/copy_url.jpg";

export default function Steps({ content }: any) {
  const pMargin = "w-4/5 md:w-4/5 sm:w-4/5 xs:w-4/5 xxs:5/5";

  return (
    <section className="flex flex-col gap-10 justify-around text-center mt-[6vh]">
      <div className="flex flex-col items-center">
        <h2 className="text-success">{content.steps.one.title}</h2>
        <p className={`${pMargin}`}>{content.steps.one.description}</p>
        <div className="w-[70%] mx-auto my-50 bg-black sm:mt-4">
          {/* <Image
            src={Copy}
            layout="responsive"
            alt=""
            quality={50}
            loading="lazy"
            className="shadow-lg"
          /> */}
        </div>
      </div>

      <div className="flex flex-col items-center">
        <h2 className="text-success">{content.steps.two.title}</h2>
        <p className={`${pMargin}`}>{content.steps.two.description}</p>
        <div className="w-[70%] mx-auto my-50 bg-black sm:mt-4">
          {/* <Image
            src={Copy}
            layout="responsive"
            alt=""
            quality={50}
            loading="lazy"
            className="shadow-lg"
          /> */}
        </div>
      </div>

      <div className="mb-[60px] flex flex-col items-center">
        <h2 className="text-success">{content.steps.three.title}</h2>
        <p className={`${pMargin}`}>{content.steps.three.description}</p>
        <div className="w-[70%] mx-auto my-50 bg-black sm:mt-4">
          {/* <Image
            src={Copy}
            layout="responsive"
            alt=""
            quality={50}
            loading="lazy"
            className="shadow-lg"
          /> */}
        </div>
      </div>
    </section>
  );
}
