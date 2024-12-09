import type { MetaFunction } from "@remix-run/node";
import { Button } from "~/components/ui/button";

export const meta: MetaFunction = () => {
  return [
    { title: "Rifki Nur Ikhwan" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="py-14">
      <h1 className="text-3xl font-bold">Hi I'am Rifki Nur Ikhwan</h1>

      <div className="flex items-center gap-5 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-black rounded-full" />
          <p>Remote Worker</p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-2 h-2 bg-black rounded-full" />
          <p>Based in Medan</p>
        </div>
      </div>

      <p className="mt-4 leading-8">
        Passionate and seasoned Software Engineer with a strong focus on frontend development.
        Proficient in TypeScript and well-versed in all aspects of web technologies. Collaborative
        team player dedicated to delivering efficient, scalable, and visually appealing web applications.
      </p>

      <div className="border my-4" />
    </div>
  );
}