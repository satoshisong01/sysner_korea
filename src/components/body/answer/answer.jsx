import React from 'react';
import '../answer/answer.css';
import answerbg from './img/mc2_bg.jpeg'

const Answer = (props) => {
    return(
        <>
            <div className="page_body_answer">
                <img className="titleimg" src={answerbg} alt=""/>
                <div className="answer_item">
                    <p className="answer_comment">
                        <span className="answer_span">궁금하신 사항이 있으신가요?</span>
                        <br/>
                        궁금한 사항이 있으시면 언제든지 문의 부탁드립니다.
                        <br/>
                        ㈜시스너는 언제나 고객님의 목소리에 귀를 기울이고 있습니다.
                    </p>
                    <a href="https://www.naver.com/" className="link_Atag">네이버가기</a>
                </div>
            </div>
        </>
    )
};

export default Answer;