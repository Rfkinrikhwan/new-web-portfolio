import { MetaFunction, useNavigate } from "@remix-run/react";
import { Download, Mail } from "lucide-react";


export const meta: MetaFunction = () => {
  return [
    { title: "Rifki Nur Ikhwan" },
    { name: "description", content: "Welcome to my portfolio" },
  ];
};

export default function Index() {
  const navigate = useNavigate();

  return (
    <div className="container mx-auto px-4 sm:px-0 py-10 md:py-14">
      <h1 className="text-3xl font-bold">Hi I'am Rifki</h1>

      <div className="flex items-center gap-5 mt-2 text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-[5px] h-[5px] bg-gray-400 rounded-full" />
          <p>Frontend Development</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-[5px] h-[5px] bg-gray-400 rounded-full" />
          <p>Based in Medan</p>
        </div>
      </div>

      <p className="mt-2 leading-8">
        Passionate and seasoned Software Engineer with a strong focus on frontend development.
        Proficient in TypeScript and well-versed in all aspects of web technologies. Collaborative
        team player dedicated to delivering efficient, scalable, and visually appealing web applications.
      </p>

      <div className="border my-4 border-dashed" />

      {/* CTA Buttons */}
      <div className="flex flex-wrap gap-4">
        <button className="z-50 inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-md hover:opacity-90 transition-opacity">
          <Download size={20} />
          Download CV
        </button>

        <button onClick={() => navigate('/contact')} className="z-50 cursor-pointer inline-flex items-center gap-2 px-4 py-2 border border-foreground rounded-md hover:bg-foreground hover:text-background transition-colors">
          <Mail size={20} />
          Contact Me
        </button>
      </div>


      <div className="border my-4" />
    </div>
  );
}