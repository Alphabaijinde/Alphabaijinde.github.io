import React from 'react';

const ContactPage = () => {
    return (
        <div style={{ display: 'grid', gap: 24 }}>
            <header style={{ display: 'grid', gap: 8 }}>
                <h1 style={{ margin: 0 }}>联系我</h1>
                <p style={{ margin: 0, color: '#cbd5f5', lineHeight: 1.7 }}>
                    无论是研究合作、平台共建还是技术交流，都欢迎联系。
                </p>
            </header>

            <section
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
                    gap: 16,
                }}
            >
                <div
                    style={{
                        padding: 20,
                        borderRadius: 16,
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(148, 163, 184, 0.2)',
                    }}
                >
                    <h3 style={{ marginTop: 0 }}>GitHub</h3>
                    <a
                        href="https://github.com/Alphabaijinde"
                        style={{ color: '#38bdf8', textDecoration: 'none' }}
                    >
                        github.com/Alphabaijinde
                    </a>
                </div>
                <div
                    style={{
                        padding: 20,
                        borderRadius: 16,
                        background: 'rgba(15, 23, 42, 0.8)',
                        border: '1px solid rgba(148, 163, 184, 0.2)',
                    }}
                >
                    <h3 style={{ marginTop: 0 }}>协作方向</h3>
                    <p style={{ margin: 0, color: '#cbd5f5', lineHeight: 1.7 }}>
                        仿真平台共建、自动驾驶场景生成、研究平台工程化。
                    </p>
                </div>
            </section>

            <form
                style={{
                    display: 'grid',
                    gap: 12,
                    padding: 20,
                    borderRadius: 16,
                    background: 'rgba(30, 41, 59, 0.6)',
                    border: '1px solid rgba(148, 163, 184, 0.2)',
                }}
            >
                <label style={{ display: 'grid', gap: 6 }}>
                    <span>姓名</span>
                    <input
                        type="text"
                        name="name"
                        required
                        style={{
                            padding: '10px 12px',
                            borderRadius: 10,
                            border: '1px solid rgba(148, 163, 184, 0.3)',
                            background: 'rgba(15, 23, 42, 0.9)',
                            color: '#e2e8f0',
                        }}
                    />
                </label>
                <label style={{ display: 'grid', gap: 6 }}>
                    <span>邮箱</span>
                    <input
                        type="email"
                        name="email"
                        required
                        style={{
                            padding: '10px 12px',
                            borderRadius: 10,
                            border: '1px solid rgba(148, 163, 184, 0.3)',
                            background: 'rgba(15, 23, 42, 0.9)',
                            color: '#e2e8f0',
                        }}
                    />
                </label>
                <label style={{ display: 'grid', gap: 6 }}>
                    <span>需求描述</span>
                    <textarea
                        name="message"
                        required
                        rows={5}
                        style={{
                            padding: '10px 12px',
                            borderRadius: 10,
                            border: '1px solid rgba(148, 163, 184, 0.3)',
                            background: 'rgba(15, 23, 42, 0.9)',
                            color: '#e2e8f0',
                        }}
                    />
                </label>
                <button
                    type="submit"
                    style={{
                        marginTop: 8,
                        background: '#38bdf8',
                        color: '#0f172a',
                        padding: '10px 18px',
                        borderRadius: 999,
                        border: 'none',
                        fontWeight: 600,
                        cursor: 'pointer',
                    }}
                >
                    发送信息
                </button>
            </form>
        </div>
    );
};

export default ContactPage;
