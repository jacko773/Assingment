import React from 'react'
import { useSelector } from 'react-redux'
const NonDeletedPostWidget = () => {
    const totaPost = useSelector(state => state.totalPost);
    const remainingPost = useSelector(state => state.remainingPost);
    return (
        <div style={{ float: 'right' }}>Total {remainingPost} of  {totaPost}</div>
    )
}

export default NonDeletedPostWidget