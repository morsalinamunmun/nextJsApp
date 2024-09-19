import getAllPosts from "@/lib/getAllPosts"
import Link from "next/link";

export default async function posts(){
    const posts = await getAllPosts();
    // console.log(posts);
    return(
        <div>
            <h1>All post</h1>
            <ul>
               {posts.map(post=>
                <li key={post.id}><Link href={`/posts/${post.id}`}>{post.title}</Link></li>
               )}
            </ul>
        </div>
    )
}