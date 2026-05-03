import React from 'react';
import Link from 'next/link';

const featuredProjects = [
    {
        title: 'Simulation workflow stack',
        desc: '围绕 MuJoCo、Unreal Engine 5、CARLA、SUMO、OpenDRIVE / OpenSCENARIO，搭建可复用的机器人与自动驾驶仿真工作流。',
        href: '/projects',
        tags: ['Robotics', 'CARLA', 'OpenDRIVE'],
    },
    {
        title: 'xhs-obsidian-pipeline',
        desc: '把小红书链接沉淀成带图片、热评和深度笔记的 Obsidian 知识卡片，面向个人知识自动化和内容资产复用。',
        href: 'https://github.com/Alphabaijinde/xhs-obsidian-pipeline',
        tags: ['Knowledge automation', 'Python', 'Obsidian'],
    },
    {
        title: 'OpenClaw local bridges',
        desc: '面向本地 AI Agent、OpenAI-compatible API、opencode 和个人自动化场景的桥接实验。',
        href: 'https://github.com/Alphabaijinde/openclaw-opencode-bridge',
        tags: ['AI agents', 'Local tooling', 'JavaScript'],
    },
];

const services = [
    {
        title: '机器人仿真工作流咨询',
        desc: '帮研究团队或个人项目梳理仿真栈、场景数据、评估闭环和可复现实验流程。',
        items: ['仿真平台架构评审', '场景生成与地图工具链', '实验复现和工程化落地'],
    },
    {
        title: 'AI Agent 自动化系统',
        desc: '把重复的信息处理、代码辅助和本地工具串联成稳定可维护的 Agent 工作流。',
        items: ['本地模型/API 桥接', '知识库与任务流自动化', '工具调用和日志追踪'],
    },
    {
        title: '技术内容与案例共创',
        desc: '把工程实践整理成可传播的文章、演示和开源项目，服务个人品牌和产品增长。',
        items: ['项目 README 和文档重构', '技术文章选题与结构', 'Demo / case study 包装'],
    },
];

const writingTopics = [
    'MuJoCo + Unreal + CARLA 多引擎仿真的工程边界',
    'OpenDRIVE / OpenSCENARIO 在自动驾驶实验中的使用笔记',
    '把小红书内容沉淀成 Obsidian 知识资产的自动化流程',
    'OpenAI-compatible bridge 如何服务本地 AI Agent 工作流',
];

const Home = () => {
    return (
        <>
            <section className="hero" aria-label="Robotics simulation portfolio hero">
                <div className="hero__content">
                    <div className="hero__copy">
                        <p className="eyebrow">Robotics simulation / AI agents / knowledge automation</p>
                        <h1>Alphabaijinde</h1>
                        <p className="hero__lead">
                            我构建机器人仿真工作流、本地 AI Agent 工具链和个人知识自动化系统，
                            把研究原型变成可复用、可展示、可合作的工程资产。
                        </p>
                        <div className="hero__actions">
                            <a className="button button--primary" href="mailto:baijindegus@gmail.com">
                                合作咨询
                            </a>
                            <Link className="button button--secondary" href="/projects">
                                查看案例
                            </Link>
                            <a className="button button--secondary" href="https://github.com/Alphabaijinde">
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div className="hero__metrics" aria-label="Profile highlights">
                        <div className="metric">
                            <strong>22+</strong>
                            <span>xhs-obsidian-pipeline stars</span>
                        </div>
                        <div className="metric">
                            <strong>3</strong>
                            <span>变现方向: 仿真、Agent、知识自动化</span>
                        </div>
                        <div className="metric">
                            <strong>6+</strong>
                            <span>长期关注的仿真与场景工具链</span>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section section--compact">
                <div className="section__inner">
                    <div className="quote-band">
                        <p>
                            从仓库到影响力，关键是让别人快速理解你能解决什么问题、已经做过什么、
                            以及如何与你合作。
                        </p>
                        <a className="button button--primary" href="mailto:baijindegus@gmail.com">
                            发起合作
                        </a>
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="section__inner">
                    <div className="section-header">
                        <h2>Featured case studies</h2>
                        <p>
                            主页优先展示能形成信任和转化的项目：技术栈清晰、使用场景明确、
                            后续可以扩展为文章、服务或产品。
                        </p>
                    </div>
                    <div className="grid grid--3">
                        {featuredProjects.map((project) => (
                            <article className="card card--strong" key={project.title}>
                                <h3>{project.title}</h3>
                                <p>{project.desc}</p>
                                <div className="tag-row">
                                    {project.tags.map((tag) => (
                                        <span className="tag" key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <Link className="card-link" href={project.href}>
                                    Read case
                                </Link>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--band">
                <div className="section__inner">
                    <div className="section-header">
                        <h2>Work with me</h2>
                        <p>
                            现阶段最适合承接的是轻咨询、项目共创和小型工程自动化交付。
                            交付物应该具体：架构图、代码原型、文档、自动化脚本和演示页面。
                        </p>
                    </div>
                    <div className="grid grid--3">
                        {services.map((service) => (
                            <article className="card" key={service.title}>
                                <h3>{service.title}</h3>
                                <p>{service.desc}</p>
                                <ul className="service-list">
                                    {service.items.map((item) => (
                                        <li key={item}>{item}</li>
                                    ))}
                                </ul>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section">
                <div className="section__inner">
                    <div className="section-header">
                        <h2>Writing roadmap</h2>
                        <p>
                            影响力来自持续输出。下面这些选题可以直接变成博客、GitHub Discussion、
                            README 深度章节或社交平台长文。
                        </p>
                    </div>
                    <div className="grid grid--2">
                        {writingTopics.map((topic) => (
                            <article className="card" key={topic}>
                                <h3>{topic}</h3>
                                <p>
                                    结构建议：问题背景、踩坑记录、架构选择、可复现实验、下一步合作入口。
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="section section--band">
                <div className="section__inner contact-panel">
                    <div>
                        <p className="eyebrow">Contact</p>
                        <h2 className="page-title">把想法变成可展示的工程资产</h2>
                        <p className="page-intro">
                            适合联系我的需求：仿真平台搭建、自动驾驶/机器人场景工作流、
                            本地 AI Agent 自动化、个人知识系统和项目包装。
                        </p>
                    </div>
                    <div className="card card--strong">
                        <h3>合作前可以直接发这些信息</h3>
                        <ul className="service-list">
                            <li>你现在的目标和截止时间</li>
                            <li>已有代码、数据、文档或 demo 链接</li>
                            <li>希望交付的形式：咨询、原型、文档、自动化脚本</li>
                        </ul>
                        <a className="card-link" href="mailto:baijindegus@gmail.com">
                            baijindegus@gmail.com
                        </a>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
