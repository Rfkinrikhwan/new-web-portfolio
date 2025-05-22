import { ArrowLeft } from "lucide-react"
import { Link, type MetaFunction } from "@remix-run/react"

export const meta: MetaFunction = () => {
  return [
    { title: "My Blog" },
    { name: "description", content: "Read my latest blog posts about web development, IoT, and more." },
  ]
}

export default function BlogList() {
  // Sample blog data - replace with your actual blog posts later
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
      image: "/Thumbnail/IOT_ESP32_FIREBASE.png",
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-0 py-10 md:py-14 mb-36">
      <h1 className="text-3xl sm:text-3xl md:text-4xl font-bold mb-3 text-[#333]">My Blog</h1>

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
            <Link to={`/blog/${post.slug}`} className="block">
              <div className="flex flex-col space-y-4">
                <div className="aspect-video relative rounded-lg overflow-hidden">
                  <img
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
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

                  <h2 className="text-xl font-semibold group-hover:text-gray-700 transition-colors">{post.title}</h2>

                  <p className="text-gray-600 leading-relaxed">{post.description}</p>

                  <div className="pt-2">
                    <span className="text-sm font-medium group-hover:underline">Read more →</span>
                  </div>
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  )
}
