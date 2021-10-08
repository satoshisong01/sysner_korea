import React from 'react';
import '../signup/signup.css';

const Signup = (props) => {
    return(
            <>
                <div className="container">
                    <div className="signup">
                        <p className="signup_title">시스너 코리아</p>
                        <div className="input_total">
                            <h3 className="signup_new">회원가입</h3>
                            <h2 className="input_box_text">이메일</h2>
                            <input className="input_box" placeholder="이메일" type="email"/>
                            <h2 className="input_box_text">아이디</h2>
                            <input className="input_box" placeholder="아이디" type="text"/>
                            <h2 className="input_box_text">비밀번호</h2>
                            <input className="input_box" placeholder="비밀번호" type="password"/>
                            <h2 className="input_box_text">비밀번호 확인</h2>
                            <input className="input_box" placeholder="비밀번호 확인" type="password"/>
                        </div>
                            <button className="sign_btn">회원가입</button>
                    </div>
                </div>
            </>
    )
}

export default Signup;