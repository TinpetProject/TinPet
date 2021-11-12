import React from 'react'
import {
    PostWrapper, 
      PostTop, Avatar, Username, Time, Setting,
      PostCenter, Text, Img,
      PostBottom,
        PostBottomLeft, PostLikeCounter,
        PostBottomRight, PostLike, PostComment
} from './style';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import LanguageIcon from '@mui/icons-material/Language';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
export default function Post() {
  return (
    <div>  
      <PostWrapper>  
        <PostTop>
          <Avatar src="https://s3-alpha-sig.figma.com/img/6358/535a/3fc8f65da1bfd8bb935bb44d815706fc?Expires=1636934400&Signature=TE9oygFGVokEHNkJZ9zzSAmUL5yHlQMrQemJZqFa5wK5DNplf~PyW3Dd1pZCFwJBiAL6WrM-QB8oLC6powDpUNkU7DQIEwJ9LMbKurNes8UGq4CxUe~chS37pux05yy7jQjGIpimV59BI8SU9sBGdi6BLzOIVvUMJ6p-Dic2wdZD~cVDgbTTAhdXMH5z4IfxNw-XPiW8LBus5Yzf5A50LlfU7xgD-~5dnWEPBVD-2lfxf1kdQlTaWwvmReB1GteIleuKVGWdjATtDBDS-j82jYJESjvf4aE-C~1wh8~RdTlDcNVRu~udrTlnyyAHnWEAjCy1Mg39v9IY~VKGlOvUjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
          <Username>Corgi</Username>
          <Time>Yesterday at 16:03 <LanguageIcon fontSize="small"/></Time>
          <Setting><MoreHorizIcon fontSize="large"/></Setting>
        </PostTop>
        <PostCenter>
          <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam orci sed egestas et id non gravida sed. Aliquet feugiat morbi integer faucibus. Leo id libero nunc laoreet dolor quis urna dui. Facilisis augue facilisi consectetur scelerisque ultrices viverra risus.</Text>
          <Img src="https://s3-alpha-sig.figma.com/img/193b/c926/92530e3f8ca73051aab3ff29d13f80be?Expires=1637539200&Signature=ZtihI5LpRPwUnWBF7S8ESwlHX9cCJlDDVNpqXgO9auvGwpffKMbjrAI3JDGtuYnIiaB2MjjCMORnJ3d5DneK1GhdPYLcPwPgy2qx8ptVJrzGLlkTy~-jXcy0F1dVnjemGSWV1jw9hQC2EEc9OwSYSyPXWLDTJUK8ZTkjkzThkIUUpBTioxxcyGXIkMyE8g62kx~pBHbMBYUyGiOfI2wE02PyQBM73FJQdHbHtQKa8QK6wDGnEEoBaqOaByiQ8R67PVIx5384wMlojme8iDFyXQJU-Lg9pAQv1yPi462D0eC~JOmaMcoQFdhID7ohlbakio8pQBSwnJzZO2byPPbGfA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
        </PostCenter>
        <PostBottom>
          <PostBottomLeft>
            <PostLikeCounter>You and 10 people like it</PostLikeCounter>
          </PostBottomLeft>
          <PostBottomRight>
          <PostComment><CommentIcon sx={{marginRight:1}}/>Comments</PostComment>
            <PostLike><ThumbUpIcon sx={{marginRight:1}}/>Like</PostLike>
          </PostBottomRight>
        </PostBottom>
      </PostWrapper>
    </div>
  )
}
