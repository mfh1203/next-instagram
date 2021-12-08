import Post from "./Post"

function Posts() {
    const posts=[
        {
            id:"123",
            username: "sssangha",
            userImg:"https://links.papareact.com/3ke",
            img:"https://links.papareact.com/3ke",
            caption:"hit the like button"
        },
        {
            id:"123",
            username: "sssangha",
            userImg:"https://links.papareact.com/3ke",
            img:"https://links.papareact.com/3ke",
            caption:"hit the like button"
        }
    ]

    return (
        <div>
            {posts.map((post)=>(
                <Post key={post.id} id={post.id}
                username={post.username}
                userImg={post.userImg}
                img={post.img}
                caption={post.caption}
                />
            ))}
        </div>
    )
}

export default Posts
