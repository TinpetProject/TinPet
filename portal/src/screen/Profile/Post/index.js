import React from 'react'
import {
    PostWrapper, 
    PostTop, 
    Setting,
    PostCenter,
    PostBottom,
    PostBottomLeft,
    PostBottomRight,
    Avatar
} from './style';

export default function Post() {
  return (
    <div>  
      <PostWrapper>  
        <PostTop>
        <Avatar src="https://s3-alpha-sig.figma.com/img/6358/535a/3fc8f65da1bfd8bb935bb44d815706fc?Expires=1636934400&Signature=TE9oygFGVokEHNkJZ9zzSAmUL5yHlQMrQemJZqFa5wK5DNplf~PyW3Dd1pZCFwJBiAL6WrM-QB8oLC6powDpUNkU7DQIEwJ9LMbKurNes8UGq4CxUe~chS37pux05yy7jQjGIpimV59BI8SU9sBGdi6BLzOIVvUMJ6p-Dic2wdZD~cVDgbTTAhdXMH5z4IfxNw-XPiW8LBus5Yzf5A50LlfU7xgD-~5dnWEPBVD-2lfxf1kdQlTaWwvmReB1GteIleuKVGWdjATtDBDS-j82jYJESjvf4aE-C~1wh8~RdTlDcNVRu~udrTlnyyAHnWEAjCy1Mg39v9IY~VKGlOvUjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
          <Setting></Setting>
        </PostTop>
        <PostCenter>
          <span className="postText"></span>
          <img className="postImg" src="" alt="" />
        </PostCenter>
        <PostBottom>
          <PostBottomLeft>
            <img className="likeIcon" src="" onClick alt="" />      
            <span className="postLikeCounter"> people like it</span>
          </PostBottomLeft>
          <PostBottomRight>
            <span className="postCommentText">comments</span>
          </PostBottomRight>
        </PostBottom>
      </PostWrapper>
    </div>
  )
}
