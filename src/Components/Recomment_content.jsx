import React from 'react'
import Recommend_card from './Recommend_card'

function Recomment_content() {
return (
    <div className='text-white p-5 pt-0  text-[1.15rem] mt-0 md:text-[2rem]'>
        <h3 className = "font-bold">Recommended</h3>
        <div className = "grid grid-rows-2 grid-flow-col gap-1 mt-2">
        <Recommend_card
            image= "https://billboardvn.vn/wp-content/uploads/2019/02/NHOMNHACVPOP-OP2.jpg"
            name= "Top VPop playlist music"
        />
        <Recommend_card
            image= "https://i.ytimg.com/vi/pTVkxR_67-A/maxresdefault.jpg"
            name= "The Mask Singer Playlist"
        />
        <Recommend_card
            image= "https://loanhapkhau.net/wp-content/uploads/2022/10/nhac-lofi-la-gi.jpg"
            name= "1990s Lofi music"
        />
         <Recommend_card
            image= "https://i.ytimg.com/vi/nTLpGRCV22Y/maxresdefault.jpg"
            name= "Motivational music for morning"
        />
        </div>
    </div>
)
}

export default Recomment_content