import { useEffect, useState } from 'react'
import './css/bootstrap.min.css'
import avata from './src/avata.jpg'
// Left
import Avata from './section/Left/Avata'
import InfoMe from './section/Left/InfoMe'
import Skills from './section/Left/Skills'
import OrContact from './section/Left/OrContact'
//Right
import Info from './section/Right/Info'
import Target from './section/Right/Target'
import Education from './section/Right/Education'
import Exp from './section/Right/Exp'
import Extra_skill from './section/Right/Extra_skill'
//Extra View
function App({data}){
    return (
        <main className="main">
            <div className="container">
                <div className="row">
                    <div className="left col-lg-4">
                        {/* Chèn hình ảnh ở đầu tiên  */}
                        {/* Bên trái gồm thông tin cá nhân và ghi chú trình độ */}
                        <Avata avata={avata}/>
                        {/* Hiển thị phần nội dung */}
                        <div className='btm'>
                            <Info data={data}/>
                            <InfoMe data={data} />
                            <div>
                                <Skills data ={data} />
                                <OrContact data ={data}/>
                            </div>
                        </div>
                    </div>
                    <div className="right col-lg-8">
                        {/* Chèn tiếp theo phần nội dung nha */}
                        {/* Bên phải là các nội dung như mục tiêu học vấn, kinh nghiệm và kĩ năng */}
                        <Info data={data}/>
                        <div className='btm'>
                            <Target data={data} />
                            <Education data={data} />
                            <Exp data={data} />
                            <Extra_skill data={data}/>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default App