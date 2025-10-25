import React, { useState, useEffect, useRef } from 'react';
import './layout.scss';
// === SỬA 1: Import NavLink thay vì Link ===
import { Outlet, NavLink } from "react-router-dom";
import { Layout, Drawer } from 'antd';
import {
    FacebookFilled,
    YoutubeFilled,
    LinkedinFilled,
    TwitterOutlined,
    MenuOutlined
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

function MainLayout() {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isHeaderHidden, setIsHeaderHidden] = useState(false);
    const lastScrollTop = useRef(0);

    const showDrawer = () => {
        setIsMobileMenuOpen(true);
    };

    const onCloseDrawer = () => {
        setIsMobileMenuOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const headerHeight = 80;

            if (currentScrollTop > lastScrollTop.current && currentScrollTop > headerHeight) {
                setIsHeaderHidden(true);
            } else {
                setIsHeaderHidden(false);
            }
            lastScrollTop.current = currentScrollTop <= 0 ? 0 : currentScrollTop;
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

   
    const getNavLinkClass = ({ isActive }) => {
        return isActive ? 'nav-link active' : 'nav-link';
    };

    
    const navItems = (
        <>
            <NavLink to="/" className={getNavLinkClass} end>Home</NavLink>

            <NavLink to="/introduction" className={getNavLinkClass}>Introduction</NavLink>
            <NavLink to="/Overview" className={getNavLinkClass}>Overview</NavLink>
            <NavLink to="/news" className={getNavLinkClass}>News</NavLink>
            <NavLink to="/character" className={getNavLinkClass}>Character</NavLink>
        </>
    );

    return (
        <Layout className="layout-container">
            <Header className={`layout-header ${isHeaderHidden ? 'hidden' : ''}`}>
                <div className="logo">
                    <span>Shadow Warriors :</span>
                    <h1>MONSTER SLAYER</h1>
                </div>

                {/* === SỬA 3: Dùng NavLink và ẩn trên di động === */}
                <div className="nav-links desktop-nav">
                    {navItems}
                </div>

                <div className="button-download desktop-download">
                    <button>Download</button>
                </div>

                {/* Icon này CHỈ HIỆN trên di động */}
                <MenuOutlined className="mobile-menu-icon" onClick={showDrawer} />
            </Header>

            {/* --- DRAWER (MENU DI ĐỘNG) --- */}
            <Drawer
                title="Navigation"
                placement="right"
                onClose={onCloseDrawer}
                open={isMobileMenuOpen}
                className="mobile-nav-drawer"
            >
                {/* === SỬA 4: Dùng NavLink và thêm onClick={onCloseDrawer} === */}
                <div className="mobile-nav-links" onClick={onCloseDrawer}>
                    {/* Bọc các link trong 1 div có onClick={onCloseDrawer}
                      sẽ tự động đóng menu khi bấm vào bất kỳ link nào
                    */}
                    {navItems}
                    <button>Download</button>
                </div>
            </Drawer>

            <Content className="layout-main">
                <Outlet />
            </Content>

            <Footer className="layout-footer">

                {/* (Nội dung Footer giữ nguyên) */}

                <div className="footer-top-bar"></div>

                <div className="footer-content">

                    <div className="footer-socials">

                        <a href="https://x.com" target="_blank" rel="noopener noreferrer"><TwitterOutlined /></a>

                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FacebookFilled /></a>

                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer"><YoutubeFilled /></a>

                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><LinkedinFilled /></a>

                    </div>

                    <div className="footer-logos">

                        <span className="ebiz-logo">EBIZWORLD.</span>

                        <div className="game-logo">

                            <span>Shadow Warriors:</span>

                            <span>MONSTER SLAYER</span>

                        </div>

                    </div>

                    <p className="footer-copyright">

                        © 2020-2024 Ebizworld, Inc. EBIZWORLD, SHADOW WARRIOR and any associated logos are

                        trademarks, service marks, and/or registered trademarks of EbizWorld, Inc.

                    </p>

                    <div className="footer-legal">

                        <a href="#privacy">PRIVACY NOTICE</a>

                        <a href="#terms">TERMS OF SERVICE</a>

                        <a href="#cookies">COOKIES PREFERENCES</a>

                    </div>

                    <div className="footer-stores">

                        <a href="#googleplay" target="_blank" rel="noopener noreferrer">

                            <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" alt="Get it on Google Play" />

                        </a>

                        <a href="#appstore" target="_blank" rel="noopener noreferrer">

                            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="Download on the App Store" />

                        </a>

                    </div>

                </div>

            </Footer>
        </Layout>
    );
}

export default MainLayout;