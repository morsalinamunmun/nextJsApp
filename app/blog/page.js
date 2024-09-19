import Link from "next/link";

export default function Blog() {
  const blogs = [
    {
      id: 1,
      title: 'blog 1',
    },
    {
      id: 2,
      title: 'blog 2',
    }
  ]
    return (
      <main className="mt-10">
        <div>
          Blog page 
        </div>
        <ul>
          {
            blogs.map(blog=>
              <li key={blog.id}><Link  href={`/blog/${blog.id}`}>{blog.title}</Link></li>
            )
          }
        </ul>
      </main>
    );
  }