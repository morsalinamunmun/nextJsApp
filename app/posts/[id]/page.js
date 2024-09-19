import getPost from "@/lib/getPost";

export default async function PostPage({params}){
    const {id} = {params};
    const post = await getPost(id);
    console.log(post);
    return(
        <div>
            {/* <h1>page Post:{id}</h1> */}
            <h2>{post?.title}</h2>
            <p>{post?.body}</p>
        </div>
    )
}