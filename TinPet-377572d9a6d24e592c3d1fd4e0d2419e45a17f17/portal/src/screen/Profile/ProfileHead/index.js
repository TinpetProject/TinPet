import React from "react";
import {
  HeadWrapper,
  Wallpaper,
  Avatar,
  Name,
  HeadBar,
  Button
} from "./style";


const User = [
  {
    UserName: "Corgi",
  },
];
const headbar = [
  {
    button: "Profile",
  },
  {
    button: "Followers",
  },
  {
    button: "Detail info",
  },
  {
    button: "Photos",
  },
  {
    button: "Video",
  }
]

export default function ProfileHead() {
  return (
    <div>
      <HeadWrapper>
        <Wallpaper src="https://s3-alpha-sig.figma.com/img/9c85/b9fe/83747b01895de1e0424d1cdae56d1a2d?Expires=1636934400&Signature=LGCHE4aQett7H7-aQkhE6DALcfhU2aBrQiyBVi4DvT1c7AT6Dw8l3r5Ek170QyKKJCfGk2hYl2ItdzQniMyx-HzMBJBeB2aWOaSU7QADOblIvufqItIVUzUrtHW7kDM7HiG4JBspTRwmM6SH1P76Ya3ggQggiXp4wi10LMys2Qv6UCZjzcNeATco5m3VdLs-lj4~pFpS2U3yX2aV1RnltlDn5dI0kXFKwvkwlSbKzI0wTqnNH~dp7u7NJuXM2bQIrSYapEKO69ul3mMcah3epsS4f7lqArFXks58QTSGkKzNRw1WW-ucktNiFh~Gc6o7dW1ztyv8rkBoZ8ANylpPYA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
        <HeadBar> 
        {headbar?.map((btn) =>(
          <Button>{btn.button}</Button>
          ))}
        </HeadBar>
        {User?.map((user) =>(
          <Name>{user.UserName}</Name>
        ))}
        <Avatar src="https://s3-alpha-sig.figma.com/img/6358/535a/3fc8f65da1bfd8bb935bb44d815706fc?Expires=1636934400&Signature=TE9oygFGVokEHNkJZ9zzSAmUL5yHlQMrQemJZqFa5wK5DNplf~PyW3Dd1pZCFwJBiAL6WrM-QB8oLC6powDpUNkU7DQIEwJ9LMbKurNes8UGq4CxUe~chS37pux05yy7jQjGIpimV59BI8SU9sBGdi6BLzOIVvUMJ6p-Dic2wdZD~cVDgbTTAhdXMH5z4IfxNw-XPiW8LBus5Yzf5A50LlfU7xgD-~5dnWEPBVD-2lfxf1kdQlTaWwvmReB1GteIleuKVGWdjATtDBDS-j82jYJESjvf4aE-C~1wh8~RdTlDcNVRu~udrTlnyyAHnWEAjCy1Mg39v9IY~VKGlOvUjg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"/>
        
        
      </HeadWrapper>
    </div>
  );
};

