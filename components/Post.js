"use client"
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Post() {
    const params = useParams();
    const id = params.id;

    const [post, setPost] = useState(null);

    useEffect(() => {
    const id = params.id;

        fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts`)
            .then(res => res.json())
            .then(res => {
            const matchedPost = res.find(post => post.id === id);
            if (matchedPost) {
                setPost(matchedPost);
            } else {
                console.error("No post found with ID:", id);
            }
            })
            .catch(err => {
            console.error("Fetch error:", err);
            });
        }, []);

    return (
        <>
            <title>Blog | Post</title>
            {post && (
                <main className="container mx-auto px-4 py-6">
                    <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
                    <p className="text-gray-500">{post.created_at_formatted}</p>
                    <img
                        src={post.image}
                        alt="Post Image"
                        className="my-4"
                    />
                    <p>{post.description}</p>
                </main>
            )}
        </>
    );
}
