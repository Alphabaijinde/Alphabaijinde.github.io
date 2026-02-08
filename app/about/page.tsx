import React from 'react';

const AboutPage = () => {
    return (
        <div style={{ display: 'grid', gap: 32 }}>
            <section style={{ display: 'grid', gap: 16 }}>
                <h1 style={{ margin: 0 }}>关于我</h1>
                <p style={{ margin: 0, color: '#cbd5f5', lineHeight: 1.8 }}>
                    我专注于机器人仿真、自动驾驶场景构建与高保真交互系统，致力于把研究
                    原型转化为可持续迭代的工程平台。
                </p>
            </section>

            <section
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                    gap: 16,
                }}
            >
                {[
                    {
                        title: '研究方向',
                        items: ['多引擎仿真融合', '高保真交互评估', '自动驾驶实验平台'],
                    },
                    {
                        title: '工程能力',
                        items: ['系统架构设计', '场景流程自动化', '数据闭环与可视化'],
                    },
                    {
                        title: '合作方式',
                        items: ['研究合作', '平台共建', '工程咨询'],
                    },
                ].map((block) => (
                    <div
                        key={block.title}
                        style={{
                            padding: 20,
                            borderRadius: 18,
                            background: 'rgba(15, 23, 42, 0.7)',
                            border: '1px solid rgba(148, 163, 184, 0.2)',
                        }}
                    >
                        <h3 style={{ marginTop: 0 }}>{block.title}</h3>
                        <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.9, color: '#cbd5f5' }}>
                            {block.items.map((item) => (
                                <li key={item}>{item}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </section>

            <section
                style={{
                    padding: 24,
                    borderRadius: 18,
                    background: 'rgba(30, 41, 59, 0.6)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                }}
            >
                <h2 style={{ marginTop: 0 }}>合作理念</h2>
                <p style={{ margin: 0, color: '#cbd5f5', lineHeight: 1.8 }}>
                    用清晰的问题定义与可复用的工程模块推进研究落地，关注长期可维护性与迭代效率。
                </p>
            </section>
        </div>
    );
};

export default AboutPage;
