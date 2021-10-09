import React from "react"

const posts = [
  {
    title: "Boost your conversion rate",
    href: "#",
    category: { name: "Article", href: "#" },
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    date: "Mar 16, 2020",
    datetime: "2020-03-16",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80",
    readingTime: "6 min",
    author: {
      name: "Roel Aufderehar",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
]

export const Card = () => {
  return (
    <div className="mt-12 max-w-xs mx-auto">
      {posts.map(post => (
        <div key={post.title} className="flex flex-col overflow-hidden">
          <div className="flex-shrink-0">
            {/* <img
              className="h-48 w-full object-cover"
              src={post.imageUrl}
              alt=""
            /> */}
          </div>
          <div className="flex-1 rounded-md bg-blueGray-800 p-6 flex flex-col justify-between">
            <div className="flex-1">
              <p className="text-sm font-medium text-white">
                <a href={post.category.href} className="hover:underline">
                  {post.category.name}
                </a>
              </p>
              <a href={post.href} className="block mt-2">
                {/* <p className="text-xl font-semibold text-white">{post.title}</p> */}
                <p className="mt-3 text-base text-gray-300">
                  {post.description}
                </p>
              </a>
            </div>
            <div className="mt-6 flex items-center">
              <div className="flex-shrink-0">
                <a href={post.author.href}>
                  <span className="sr-only">{post.author.name}</span>
                  <img
                    className="h-10 w-10 rounded-full"
                    src={post.author.imageUrl}
                    alt=""
                  />
                </a>
              </div>
              <div className="ml-3">
                <p className="text-sm font-medium text-gray-100">
                  <a href={post.author.href} className="hover:underline">
                    {post.author.name}
                  </a>
                </p>
                <div className="flex space-x-1 text-sm text-gray-300">
                  <time dateTime={post.datetime}>{post.date}</time>
                  <span aria-hidden="true">&middot;</span>
                  <span>{post.readingTime} read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
