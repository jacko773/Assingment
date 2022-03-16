import React from 'react'
import { useSelector } from 'react-redux'
import Post from '../component/Post';
import Grid from '@material-ui/core/Grid'
import NonDeletedPostWidget from '../component/NonDeletedPostWidget';

const JoinPostAndUser = (posts, users) => {
  return posts?.map(data => {
    let userData = users?.filter(user => user.id === data.userId)[0];
    return { ...data, name: userData?.name, company_name: userData?.companyName }
  })
}

const Posts = () => {
  const postData = useSelector(state => JoinPostAndUser(state.posts?.post, state.users?.user))
  return (
    <>
      <NonDeletedPostWidget></NonDeletedPostWidget>
      <Grid style={{ paddingTop: 30 }}>
        {
          postData?.map(data => <Post post={data} key={data.id}></Post>)
        }
      </Grid>
      <NonDeletedPostWidget></NonDeletedPostWidget>
    </>
  )
}

export default Posts