import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import '../footer/footer.css';


const Footer = (props) => {

    const [ScrollY, setScrollY] = useState(0);
    const [BtnStatus, setBtnStatus] = useState(false);
    
    const handleFollow = () => {
        setScrollY(window.pageYOffset);
        if(ScrollY > 200){
            setBtnStatus(true);
        }else{
            setBtnStatus(false);
        }
    }

    const handleTop = () => {
        window.scrollTo({
            top:0,
            behavior: "smooth"
        });
        setScrollY(0);
        setBtnStatus(false);
    }

    useEffect(() => {
        const watch = () => {
            window.addEventListener('scroll', handleFollow);
        }
        watch();
        return () => {
            window.removeEventListener('scroll', handleFollow);
        }
    })

    return(
        <>
            <div className="footer">
                <p>본사·연구소 : 대전 유성구 유성대로 1646, 한남대학교 대덕캠퍼스 신기술창업집적지역 1동 203호 사업소 : 경기도 안양시 동안구 벌말로 123(관양동) 605호</p>
                <p className="num">사업자등록번호 : 582-86-01465 Tel : 02-400-0078 Fax : 031-383-3322</p>
                <p className="reserved">COPYRIGHT© 2019 SYSNER CO., LTD. ALL RIGHT RESERVED
                <div>
                <span className="user_info">개인정보 처리방침&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span><span>이메일무단수집거부</span></div>
                </p>
            </div>
            <div className="wrap">
                <button className={BtnStatus ? "topBtn active" : "topBtn"} onClick={handleTop}>Top</button>
            </div>
        </>
    )
};

export default Footer;