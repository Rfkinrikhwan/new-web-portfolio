import { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
    return [
        { title: "Project | Rifki" },
        { name: "description", content: "Welcome to Remix!" },
    ];
};

export default function ArticlePage() {
    return (
        <div className="py-14">
            <h1 className="text-3xl font-bold">Project</h1>

            <p className="mt-3 leading-8">
                You can see the projects I've made here.
            </p>

            <div className="border my-4 border-dashed" />

            <div className="grid grid-cols-2 gap-5">
                <div className="border rounded-xl h-52"></div>
                <div className="border rounded-xl h-52"></div>
                <div className="border rounded-xl h-52"></div>
                <div className="border rounded-xl h-52"></div>
            </div>

            <div className="border my-4" />
        </div>
    );
}