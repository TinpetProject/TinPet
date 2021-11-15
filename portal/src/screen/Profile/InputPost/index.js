import React from 'react'
import {
    InputPostWrapper, 
    InputPostContent, 
    Img, 
    InputFieldText,
    InputPostAdd,
    InputAdd,
    IconInput,
    ButtonInput,
    InputPostButton
} from './style'
import PermMediaIcon from '@mui/icons-material/PermMedia';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
const addmore = [
    {
        icon: <PermMediaIcon/>,
        button: "Pictures or Videos",
    },
    {
        icon: <LoyaltyIcon/>,
        button: "Tag",
    },
];

export default function InputPost() {
    return (
        <div>  
            <InputPostWrapper>
                <InputPostContent>
                    <Img src="https://s3-alpha-sig.figma.com/img/6358/535a/3fc8f65da1bfd8bb935bb44d815706fc?Expires=1636934400&Signature=TE9oygFGVokEHNkJZ9zzSAmUL5yHlQMrQemJZqFa5wK5DNplf~PyW3Dd1pZCFwJBiAL6WrM-QB8oLC6powDpUNkU7DQIEwJ9LMbKurNes8UGq4CxUe~chS37pux05yy7jQjGIpimV59BI8SU9sBGdi6BLzOIVvUMJ6p-Dic2wdZD~cVDgbTTAhdXMH5z4IfxNw-XPiW8LBus5Yzf5A50LlfU7xgD-~5dnWEPBVD-2lfxf1kdQlTaWwvmReB1GteIleuKVGWdjATtDBDS-j82jYJESjvf4aE-C~1wh8~RdTlDcNVRu~udrTlnyyAHnWEAjCy1Mg39v9IY~VKGlOvUjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
                    <InputFieldText 
                        placeholder="How is your pet today?"
                        inputProps={{ "aria-label": "Post" }}
                    />
                </InputPostContent>
                
                <InputPostAdd>
                    {addmore?.map((btn) =>(
                        <InputAdd>
                            <IconInput>{btn.icon}</IconInput>
                            <ButtonInput>{btn.button}</ButtonInput>
                        </InputAdd>
                    ))}
                </InputPostAdd>

                <InputPostButton>Post</InputPostButton>
            </InputPostWrapper>
        </div>
    )
    
}