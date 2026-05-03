import React from 'react';

const ContactPage = () => {
    return (
        <>
            <section className="page-hero">
                <div className="section__inner">
                    <p className="eyebrow">Contact</p>
                    <h1 className="page-title">聊一个具体问题</h1>
                    <p className="page-intro">
                        最适合联系我的方向：机器人/自动驾驶仿真工作流、本地 AI Agent 自动化、
                        Obsidian 知识系统、开源项目包装和技术内容共创。
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="section__inner contact-panel">
                    <article className="card card--strong">
                        <h2>直接联系</h2>
                        <p>
                            邮件里写清楚目标、现状、已有材料和希望的交付方式，可以更快判断是否适合合作。
                        </p>
                        <div className="contact-list">
                            <div className="contact-item">
                                <span>Email</span>
                                <a href="mailto:baijindegus@gmail.com">baijindegus@gmail.com</a>
                            </div>
                            <div className="contact-item">
                                <span>GitHub</span>
                                <a href="https://github.com/Alphabaijinde">github.com/Alphabaijinde</a>
                            </div>
                        </div>
                        <a className="card-link" href="mailto:baijindegus@gmail.com">
                            Send email
                        </a>
                    </article>

                    <article className="card">
                        <h2>邮件模板</h2>
                        <ul className="service-list">
                            <li>背景：你在做什么项目，卡在哪里</li>
                            <li>目标：希望解决什么问题，什么时候需要结果</li>
                            <li>材料：代码、文档、数据、截图、demo 或已有方案</li>
                            <li>交付：咨询建议、架构评审、原型代码、文档或自动化脚本</li>
                        </ul>
                    </article>
                </div>
            </section>
        </>
    );
};

export default ContactPage;
