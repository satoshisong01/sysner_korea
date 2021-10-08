import React from 'react';
import '../solution/solution.css'
import logoImg1 from './img/1-1.png';
import iconImg1 from './img/1-2.png';
import logoImg2 from './img/2-1.png';
import iconImg2 from './img/2-2.png';
import logoImg3 from './img/3-1.png';
import iconImg3 from './img/3-2.png';
import logoImg4 from './img/4-1.png';
import iconImg4 from './img/4-2.png';
import logoImg5 from './img/5-1.png';
import iconImg5 from './img/5-2.png';


const Solution = (props) => {
    return (
        <>
            <h1 className="text_title">솔루션</h1>
            <p className="text_mini_title">㈜시스너의 다양한 솔루션을 소개합니다.</p>
            <div className="main_solution">
                    <div className="mini_solution">
                        <img className="solution_logoimg" src={logoImg1} alt=""/>
                        <img className="iconimg" src={iconImg1} alt=""/>
                        <h3>MES</h3>
                        <p>Manufacturing Execution System</p>
                    </div>
                    <div className="mini_solution bg2">
                        <img className="solution_logoimg" src={logoImg2} alt=""/>
                        <img className="iconimg" src={iconImg2} alt=""/>
                        <h3>MES</h3>
                        <p>Manufacturing Execution System</p>
                    </div>
                    <div className="mini_solution bg3">
                        <img className="solution_logoimg" src={logoImg3} alt=""/>
                        <img className="iconimg" src={iconImg3} alt=""/>
                        <h3>MES</h3>
                        <p>Manufacturing Execution System</p>
                    </div>
                    <div className="mini_solution bg4">
                        <img className="solution_logoimg" src={logoImg4} alt=""/>
                        <img className="iconimg" src={iconImg4} alt=""/>
                        <h3>MES</h3>
                        <p>Manufacturing Execution System</p>
                    </div>
                    <div className="mini_solution bg5">
                        <img className="solution_logoimg" src={logoImg5} alt=""/>
                        <img className="iconimg" src={iconImg5} alt=""/>
                        <h3>MES</h3>
                        <p>Manufacturing Execution System</p>
                    </div>
            </div>
        </>
    )
}

export default Solution;