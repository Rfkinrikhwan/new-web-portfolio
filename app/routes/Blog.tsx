import { Link, type MetaFunction } from "@remix-run/react"
import LiquidGlass from "~/components/custom/LiquidGlass";
import { useTheme } from "~/components/theme-provider";

export const meta: MetaFunction = () => {
  return [
    { title: "Blog | Rifki Nur Ikhwan" },
    { name: "description", content: "Explore the blog of Rifki Nur Ikhwan. Articles on web development, IoT tutorials, ESP32 projects, and insights into software engineering best practices." },
  ]
}

export default function BlogList() {
  const { resolvedTheme } = useTheme();

  const blogPosts = [
    {
      id: 1,
      title:
        "Remote Control of Lights Using ESP32 and Firebase Realtime Database Combined with a Sound Sensor",
      date: "May 20, 2025",
      description:
        "Complete documentation about IoT project to control lights remotely using ESP32, Firebase Realtime Database, and sound sensor as an alternative control when offline.",
      tags: ["IoT", "ESP32", "Firebase", "Arduino"],
      slug: "kendali-lampu-jarak-jauh-esp32-firebase",
      image: "https://assets.rfkinrikhwan.my.id/thumbnails/IOT_ESP32_FIREBASE.webp",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-0 py-10 md:py-14 mb-36">
      <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-3">My Blog</h1>

      <div className="flex items-center gap-5 mt-2 text-gray-500">
        <div className="flex items-center gap-2">
          <p>Thoughts and Insights</p>
        </div>
      </div>

      <p className="mt-2 leading-8">
        Welcome to my blog where I share my experiences, insights, and tutorials about frontend development, web
        technologies, and software engineering best practices.
      </p>

      <div className="border my-4 border-dashed" />

      {/* Blog List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        {blogPosts.map((post) => (
          <article key={post.id} className="group">
            <Link
              to={`/blog/${post.slug}`}
              className="block outline-none"
              aria-label={`Read full article: ${post.title}`}
            >
              <LiquidGlass className="rounded-2xl !w-full" depth={6} strength={0} blur={12}>
                <div className={`absolute inset-0 pointer-events-none rounded-2xl border ${resolvedTheme === 'dark' ? 'border-white/10 bg-white/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]' : 'border-black/5 bg-black/5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.8)]'}`} />
                <div className="z-10 relative flex flex-col space-y-4 p-4 w-full text-left">
                  <div className="aspect-video relative rounded-lg overflow-hidden">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      width="400"
                      height="225"
                      className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex flex-col space-y-2">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span>{post.date}</span>
                      <div className="w-[5px] h-[5px] bg-gray-400 rounded-full" />
                      <div className="flex flex-wrap gap-2">
                        {post.tags.map((tag, index) => (
                          <span key={index} className="text-gray-500">
                            {tag}
                            {index < post.tags.length - 1 ? "," : ""}
                          </span>
                        ))}
                      </div>
                    </div>

                    <h2 className="text-xl font-semibold group-hover:opacity-80 transition-opacity">{post.title}</h2>

                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{post.description}</p>

                    <div className="pt-2">
                      <span className="text-sm font-medium group-hover:underline">Read more →</span>
                    </div>
                  </div>
                </div>
              </LiquidGlass>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
