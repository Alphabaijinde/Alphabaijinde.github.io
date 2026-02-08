import React from 'react';
import Link from 'next/link';

const Home = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: 48 }}>
            <section
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: 32,
                    alignItems: 'center',
                }}
            >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
                    <span
                        style={{
                            textTransform: 'uppercase',
                            fontSize: 12,
                            letterSpacing: 2,
                            color: '#94a3b8',
                        }}
                    >
                        Robotics & Intelligent Systems
                    </span>
                    <h1 style={{ fontSize: 42, margin: 0, color: '#f8fafc' }}>
                        构建高保真仿真与自主系统的研究与工程空间
                    </h1>
                    <p style={{ fontSize: 16, lineHeight: 1.8, color: '#cbd5f5' }}>
                        这里展示我在机器人仿真、自动驾驶与多引擎协同方面的持续探索，
                        以及面向研究与落地的工程实践。
                    </p>
                    <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                        <Link
                            href="/projects"
                            style={{
                                background: '#38bdf8',
                                color: '#0f172a',
                                padding: '10px 18px',
                                borderRadius: 999,
                                textDecoration: 'none',
                                fontWeight: 600,
                            }}
                        >
                            查看项目
                        </Link>
                        <a
                            href="https://github.com/Alphabaijinde"
                            style={{
                                border: '1px solid rgba(148, 163, 184, 0.4)',
                                color: '#e2e8f0',
                                padding: '10px 18px',
                                borderRadius: 999,
                                textDecoration: 'none',
                            }}
                        >
                            访问 GitHub
                        </a>
                    </div>
                </div>
                <div
                    style={{
                        background: 'linear-gradient(140deg, rgba(56, 189, 248, 0.2), rgba(14, 116, 144, 0.6))',
                        padding: 24,
                        borderRadius: 24,
                        border: '1px solid rgba(148, 163, 184, 0.2)',
                    }}
                >
                    <h2 style={{ fontSize: 20, marginTop: 0 }}>焦点方向</h2>
                    <ul style={{ margin: 0, paddingLeft: 18, color: '#dbeafe', lineHeight: 1.9 }}>
                        <li>多引擎仿真融合：MuJoCo + Unreal Engine 5 + CARLA</li>
                        <li>自动驾驶场景构建与可控训练环境</li>
                        <li>高保真交互与评估流程的系统化</li>
                    </ul>
                </div>
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
                        title: 'MATRiX',
                        desc: '融合多引擎的高保真仿真平台，服务于机器人研究与验证。',
                    },
                    {
                        title: 'SpecBmad',
                        desc: '面向真实场景的行为建模与数据驱动评估。',
                    },
                    {
                        title: 'RoadRunner',
                        desc: '自动驾驶场景生成与道路拓扑模拟的实验项目。',
                    },
                ].map((item) => (
                    <div
                        key={item.title}
                        style={{
                            padding: 20,
                            borderRadius: 20,
                            background: 'rgba(15, 23, 42, 0.8)',
                            border: '1px solid rgba(148, 163, 184, 0.2)',
                        }}
                    >
                        <h3 style={{ marginTop: 0 }}>{item.title}</h3>
                        <p style={{ margin: 0, color: '#cbd5f5', lineHeight: 1.6 }}>
                            {item.desc}
                        </p>
                    </div>
                ))}
            </section>

            <section
                style={{
                    padding: 24,
                    borderRadius: 20,
                    background: 'rgba(30, 41, 59, 0.6)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                }}
            >
                <h2 style={{ marginTop: 0 }}>最新动态</h2>
                <div style={{ display: 'grid', gap: 12, color: '#cbd5f5', lineHeight: 1.7 }}>
                    <div>持续打磨仿真平台的模块化架构与性能优化。</div>
                    <div>聚焦高保真交互与自动驾驶数据闭环。</div>
                    <div>开放更多实验成果与工程实践记录。</div>
                </div>
            </section>
        </div>
    );
};

export default Home;
