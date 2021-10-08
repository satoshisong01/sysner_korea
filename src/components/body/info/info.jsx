import React from 'react';
import '../info/info.css';
import titleImg1 from './img/main_visual_01.jpeg';
import mouseScroll from './img/mv_scroll.png';

const Info = (props) => {
    return(
        <>
            <div className="page_body_info">
                <img className="titleimg" src={titleImg1} alt=""/>
                <p className="title_comment">SMB Intelligent Smart Factory
                    <br/>
                    Platform Leader <span className="sysner_span">SYSNER</span>
                </p>
                <p className="mini_title_comment">중소·중견 제조기업에 최적화된,
                    <span className="mini_span">인텔리전트 스마트팩토리</span> 솔루션을 공급하겠습니다!
                </p>
                <a href="https://www.naver.com/" className="link_Atag">네이버가기</a>
            </div>
                <img className="mouse" src={mouseScroll} alt=""/>
        </>
    )
}

export default Info;