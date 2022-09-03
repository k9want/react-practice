import React from 'react'
import Comment from './Comment'

const comments = [
  {
    name: 'A',
    comment: '안녕하세요',
  },
  {
    name: 'B',
    comment: '반가워요',
  },
  {
    name: 'C',
    comment: '리액트 공부하는 중',
  },
]

function CommentList() {
  return (
    <div>
      {comments.map((comment) => {
        return <Comment name={comment.name} comment={comment.comment} />
      })}
    </div>
  )
}

export default CommentList
