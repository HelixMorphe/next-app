import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Layout from "../components/layout";

export default function Home({ posts }) {
  return (
    <Layout>
      <h2 className="title">Home</h2>
    </Layout>
  );
}

/* export async function getStaticProps() {
  const res = await fetch("http://localhost:1337/posts");
  const posts = await res.json();
  console.log(posts);
  return {
    props: { posts },
  };


       {/*    {posts &&
          posts.map((post) => (
            <div key={post.id}>
              <h2>{post.Title}</h2>
              <p>{post.Description}</p>
              <Image
                src={`http://localhost:1337${post.cover.url}`}
                alt="image"
                width="500px"
                height="300px"
              ></Image>
            </div>
          ))} 


} */
