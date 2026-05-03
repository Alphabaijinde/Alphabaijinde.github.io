import React from 'react';

const AboutPage = () => {
    return (
        <>
            <section className="page-hero">
                <div className="section__inner">
                    <p className="eyebrow">About</p>
                    <h1 className="page-title">从仿真系统到 AI Agent 工作流</h1>
                    <p className="page-intro">
                        我关注的是把复杂系统拆成可复现、可验证、可持续迭代的工程模块。
                        机器人仿真、自动驾驶场景、知识自动化和本地 Agent 工具链，是我目前最主要的积累方向。
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="section__inner">
                    <div className="grid grid--3">
                        <article className="card">
                            <h2>研究方向</h2>
                            <ul className="service-list">
                                <li>多引擎仿真融合</li>
                                <li>自动驾驶场景构建</li>
                                <li>高保真交互与评估闭环</li>
                            </ul>
                        </article>
                        <article className="card">
                            <h2>工程能力</h2>
                            <ul className="service-list">
                                <li>TypeScript / Python / C++</li>
                                <li>Docker / GitHub Actions / 本地工具链</li>
                                <li>从原型到文档和演示页面的包装</li>
                            </ul>
                        </article>
                        <article className="card">
                            <h2>合作方式</h2>
                            <ul className="service-list">
                                <li>轻量技术咨询</li>
                                <li>项目共创和原型交付</li>
                                <li>README / 文档 / case study 打磨</li>
                            </ul>
                        </article>
                    </div>
                </div>
            </section>

            <section className="section section--band">
                <div className="section__inner">
                    <div className="section-header">
                        <h2>当前定位</h2>
                        <p>
                            更适合我的个人品牌不是“什么都做”，而是围绕仿真系统、AI Agent 和知识自动化形成一个清晰的交叉点。
                            这个交叉点可以同时服务开源影响力、咨询合作、内容输出和工具产品化。
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default AboutPage;
