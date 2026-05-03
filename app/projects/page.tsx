import React from 'react';

const projects = [
    {
        name: 'xhs-obsidian-pipeline',
        desc: '将小红书链接转成图谱友好的 Obsidian 卡片，自动沉淀图片、热评和深度笔记。适合作为知识自动化产品化入口。',
        href: 'https://github.com/Alphabaijinde/xhs-obsidian-pipeline',
        proof: '22+ stars',
        tags: ['Python', 'Obsidian', 'Knowledge automation'],
    },
    {
        name: 'Simulation workflow stack',
        desc: '围绕 MuJoCo、Unreal Engine 5、CARLA、SUMO、OpenDRIVE 和 OpenSCENARIO 的长期仿真工作流沉淀。',
        href: 'https://github.com/Alphabaijinde/matrix',
        proof: 'Robotics / autonomous systems',
        tags: ['MATRiX', 'CARLA', 'SUMO'],
    },
    {
        name: 'odrview',
        desc: '复现 OpenDRIVE viewer，用于道路拓扑查看、地图调试和仿真前处理。',
        href: 'https://github.com/Alphabaijinde/odrview',
        proof: '7+ stars',
        tags: ['C++', 'OpenDRIVE', 'Road topology'],
    },
    {
        name: 'openclaw-opencode-bridge',
        desc: 'OpenAI-compatible bridge，让 OpenClaw 接入本地 opencode 和更灵活的模型调用路径。',
        href: 'https://github.com/Alphabaijinde/openclaw-opencode-bridge',
        proof: '2+ stars',
        tags: ['JavaScript', 'AI agents', 'Local bridge'],
    },
    {
        name: 'imperial-system',
        desc: 'AI 皇帝决策模拟，探索性格、情绪、朝代制度和多智能体行为建模。',
        href: 'https://github.com/Alphabaijinde/imperial-system',
        proof: 'Prototype',
        tags: ['TypeScript', 'Multi-agent', 'Simulation'],
    },
    {
        name: 'github-trending-ai',
        desc: '围绕 AI 方向 GitHub 趋势和仓库信号的轻量跟踪工具，适合扩展成选题和投研辅助流。',
        href: 'https://github.com/Alphabaijinde/github-trending-ai',
        proof: 'Research utility',
        tags: ['Shell', 'Repository intelligence'],
    },
];

const ProjectsPage = () => {
    return (
        <>
            <section className="page-hero">
                <div className="section__inner">
                    <p className="eyebrow">Projects</p>
                    <h1 className="page-title">能被理解、复用和转化的项目</h1>
                    <p className="page-intro">
                        这里不只列代码仓库，而是把项目放进明确的应用场景：机器人仿真、
                        AI Agent、本地自动化和知识资产沉淀。
                    </p>
                </div>
            </section>

            <section className="page-section">
                <div className="section__inner">
                    <div className="grid grid--3">
                        {projects.map((project) => (
                            <article className="card card--strong" key={project.name}>
                                <p className="eyebrow">{project.proof}</p>
                                <h2>{project.name}</h2>
                                <p>{project.desc}</p>
                                <div className="tag-row">
                                    {project.tags.map((tag) => (
                                        <span className="tag" key={tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                                <a className="card-link" href={project.href}>
                                    View repository
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProjectsPage;
