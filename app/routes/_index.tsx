import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Rifki Nur Ikhwan" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="container mx-auto px-4 sm:px-0 py-10 md:py-14">
      <h1 className="text-3xl font-bold">Hi I'am Rifki</h1>

      <div className="flex items-center gap-5 mt-2 text-gray-500">
        <div className="flex items-center gap-2">
          <div className="w-[5px] h-[5px] bg-gray-400 rounded-full" />
          <p>Web Developer</p>
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

      <h1 className="text-xl font-bold">Cerficates</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3">
        <div className="border rounded-md z-10">
          <img src="/certificates/sertifikat_1.png" className="w-full rounded-md" alt="" />
        </div>
        <div className="border rounded-md z-10">
          <img src="/certificates/sertifikat_2.png" className="w-full rounded-md" alt="" />
        </div>
        <div className="border rounded-md z-10">
          <img src="/certificates/sertifikat_3.png" className="w-full rounded-md" alt="" />
        </div>
        <div className="border rounded-md z-10">
          <img src="/certificates/sertifikat_4.png" className="w-full rounded-md" alt="" />
        </div>
        <div className="border rounded-md z-10">
          <img src="/certificates/sertifikat_5.png" className="w-full rounded-md" alt="" />
        </div>
      </div>

      <div className="border my-4" />
    </div>
  );
}