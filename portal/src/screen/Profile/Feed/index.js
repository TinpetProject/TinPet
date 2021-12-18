import React from 'react'
import { Posts } from "../dummyData"
import Post from '../Post'
import { FeedWrapper } from "./style"

export default function Feed() {
    return (
        <div>
            <FeedWrapper>
                {Posts.map((p) => (
                    <Post key={p.id} post={p} />
                ))}
            </FeedWrapper>
        </div>
    )
}
