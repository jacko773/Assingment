import React, { useEffect } from 'react'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { useDispatch } from 'react-redux'
import { useMutation } from '@apollo/client';
import { DELETE_POST } from '../graphQlConstant'
import WarningIcon from '@material-ui/icons/Warning';
import moment from 'moment'
const Post = ({ post }) => {
    const dispatch = useDispatch();
    const [deletePost, { data, error }] = useMutation(DELETE_POST);
    useEffect(() => {
        if (!!error) {
            dispatch({ type: 'DELETE_POST', payload: { id: post.id, deleted: false } })
        } else if (!!data) {
            dispatch({ type: 'DELETE_POST', payload: data.deletePost })
        }

    }, [data, error])

    return (
        <Paper  square style={{ padding: 20 }} className={post.deleted ? 'post deletedPost' : 'post'}>
            <Grid container>
                <Grid item xs={12}>
                    <b>{post.title}</b>
                </Grid>
                <Grid item xs={12}>
                    <small>Time to read : {post.body.length}</small>
                </Grid>
                <Grid item xs={12}>
                    <p>{post.body}</p>
                </Grid>
                <Grid item xs={12}>
                    <small>Author : {post.name ? post.name : '-'} ({post.company_name ? post.company_name : '-'})</small>
                </Grid>
                <Grid item xs={6}>
                    <small>date : {post.date ? moment(post.date).format('YYYY-MM-DD') : '-'}</small>
                </Grid>
                <Grid item xs={6} >
                    <div style={{ float: 'right' }}>
                        {
                            post.deleted === false && <span style={{ verticalAlign: 'middle' }}><WarningIcon /></span>
                        }
                        {
                            !post.deleted && <Link onClick={() => deletePost({ variables: { id: post.id } })} style={{ textDecoration: 'none', cursor: 'pointer' }}>mark as read</Link>
                        }
                        {
                            post.deleted === false && <span style={{ color: 'red', paddingLeft: 5 }}>failed try again</span>
                        }
                    </div>
                </Grid>
            </Grid>
        </Paper >
    )
}

export default Post