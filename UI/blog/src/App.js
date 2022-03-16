import './App.css';
import './post.css'
import useQuery from './hooks/useQuery';
import Posts from './screen/Posts';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux'
import Button from '@material-ui/core/Button';
import { POSTS, USERS } from './graphQlConstant'
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid'

function App() {
  const { getData: getPostData, loading, error, data } = useQuery(POSTS);
  const { getData: getUserData, data: userData } = useQuery(USERS);
  const dispatch = useDispatch();
  const [showPost, setshowPost] = useState(false)


  useEffect(() => {
    dispatch({ type: 'UPDATE_POST', payload: data });
  }, [data])

  useEffect(() => {
    dispatch({ type: 'UPDATE_USER', payload: userData });
  }, [userData])

  const init = () => {
    getPostData();
    getUserData();
    setshowPost(true)
  }

  if (loading) return <Grid><CircularProgress /></Grid>
  if (error) return <>error</>
  return (
    <div style={{ padding: 30 }} className="postApp">
      {
        !showPost && <Button onClick={() => init()} variant="contained" color="primary">CLICK TO LOAD</Button>
      }
      {
        showPost && <Posts></Posts>
      }
    </div>
  );
}

export default App;
