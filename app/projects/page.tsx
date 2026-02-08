import React from 'react';

const ProjectsPage = () => {
    return (
        <div style={{ display: 'grid', gap: 24 }}>
            <header style={{ display: 'grid', gap: 8 }}>
                <h1 style={{ margin: 0 }}>项目展示</h1>
                <p style={{ margin: 0, color: '#cbd5f5', lineHeight: 1.7 }}>
                    聚焦仿真平台、场景构建与自动驾驶实验的关键项目。
                </p>
            </header>

            <section
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: 16,
                }}
            >
                {[
                    {
                        name: 'MATRiX',
                        desc: '高保真仿真平台，融合 MuJoCo、Unreal Engine 5 与 CARLA，服务机器人研究。',
                        tags: ['仿真平台', '多引擎融合', '高保真交互'],
                    },
                    {
                        name: 'SpecBmad',
                        desc: '面向真实场景的行为建模与评估流程，支持数据闭环。',
                        tags: ['行为建模', '评估流程', '数据闭环'],
                    },
                    {
                        name: 'RoadRunner',
                        desc: '自动驾驶场景生成与道路拓扑模拟的实验项目。',
                        tags: ['自动驾驶', '场景生成', '道路拓扑'],
                    },
                ].map((project) => (
                    <article
                        key={project.name}
                        style={{
                            padding: 20,
                            borderRadius: 18,
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid rgba(148, 163, 184, 0.2)',
                            display: 'grid',
                            gap: 12,
                        }}
                    >
                        <div>
                            <h2 style={{ margin: 0 }}>{project.name}</h2>
                            <p style={{ margin: '8px 0 0', color: '#cbd5f5', lineHeight: 1.7 }}>
                                {project.desc}
                            </p>
                        </div>
                        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                            {project.tags.map((tag) => (
                                <span
                                    key={tag}
                                    style={{
                                        fontSize: 12,
                                        padding: '4px 10px',
                                        borderRadius: 999,
                                        background: 'rgba(56, 189, 248, 0.16)',
                                        color: '#bae6fd',
                                    }}
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </article>
                ))}
            </section>

            <section
                style={{
                    padding: 20,
                    borderRadius: 16,
                    background: 'rgba(30, 41, 59, 0.6)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                    display: 'flex',
                    flexWrap: 'wrap',
                    gap: 12,
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}
            >
                <div style={{ color: '#cbd5f5' }}>更多项目与代码请访问 GitHub。</div>
                <a
                    href="https://github.com/Alphabaijinde"
                    style={{
                        color: '#0f172a',
                        background: '#38bdf8',
                        textDecoration: 'none',
                        padding: '8px 16px',
                        borderRadius: 999,
                        fontWeight: 600,
                    }}
                >
                    前往 GitHub
                </a>
            </section>
        </div>
    );
};

export default ProjectsPage;
