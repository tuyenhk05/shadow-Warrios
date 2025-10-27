import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
// --- BẠN CẦN THAY THẾ CÁC ĐƯỜNG DẪN NÀY ---
// Import ảnh cho tin tức và sự kiện
import newsImage1 from '../../assets/images/new1.png'; // (Ảnh fake 1)
import newsImage2 from '../../assets/images/new2.png';  // (Ảnh fake 2)
import eventImage1 from '../../assets/images/event1.png'; // (Ảnh fake 3)
import eventImage2 from '../../assets/images/event2.png'; // (Ảnh fake 3)
import scrollIcon from '../../assets/images/Next Button.svg'; // (Icon trang trí)
import FadeInWhenVisible from '../FadeAnimation/FadeInWhenVisible';

// ------------------------------------------

// --- DỮ LIỆU FAKE CHO NEWS ---
const fakeNewsData = [
    {
        id: 1,
        imageUrl: newsImage1,
        date: '01/01/2024',
        description: 'New update: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...'
    },
    {
        id: 2,
        imageUrl: newsImage2,
        date: '01/01/2024',
        description: 'New update: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...'
    }
];

// --- DỮ LIỆU FAKE CHO EVENTS ---
const fakeEventsData = [
    {
        id: 3,
        imageUrl: eventImage1,
        date: '15/10/2025',
        description: 'Upcoming Event: Join the Monster Slayer tournament and win exclusive rewards. Register now!'
    }
     ,{
         id: 4,
         imageUrl: eventImage2, // Dùng tạm
         date: '25/10/2025',
         description: 'Another event coming soon. Stay tuned for more details on our social media channels.'
     }
];

function ContentHome3() {
    // State để theo dõi tab (mặc định là 'news')
    const [activeTab, setActiveTab] = useState('news');
    const navigate = useNavigate();
    // Hàm render nội dung thẻ (để tránh lặp code)
    const renderCard = (item) => (
        <div className="news-card" key={item.id} onClick={()=>navigate(`/Overview/${item.id}`)}>
            {/* Lớp bên trong để tạo nền tối (lớp ngoài là viền) */}
            <div className="card-inner">
                <img
                    src={item.imageUrl}
                    alt="News or Event"
                    className="card-image"
                />
                <div className="card-body">
                    <span className="card-date">{item.date}</span>
                    <p className="card-description">{item.description}</p>
                </div>
            </div>
        </div>
    );

    return (
        <div className="news-events-container" style={{ overflowX: 'hidden', overflowY: 'hidden', position: "relative" }}>
            {/* Tiêu đề chính */}
            <FadeInWhenVisible>
            <h2 className="section-title">NEWS - EVENTS</h2>
            </FadeInWhenVisible>
            <div className="news-events-layout">
                
                {/* 1. Sidebar */}
                <aside className="news-sidebar">
                    <div
                        // Class 'active' được thêm tự động
                        className={`sidebar-tab ${activeTab === 'events' ? 'active' : ''}`}
                        // Thêm onClick để chuyển tab
                        onClick={() => setActiveTab('events')}
                    >                    <FadeInWhenVisible direction="slideFromLeft">

                            <span>EVENTS</span>
                        </FadeInWhenVisible>

                    </div>
                    <div
                        className={`sidebar-tab ${activeTab === 'news' ? 'active' : ''}`}
                        onClick={() => setActiveTab('news')}
                    >
                                                <FadeInWhenVisible direction="slideFromLeft">

                            <span>NEWS</span>
                        </FadeInWhenVisible>

                        </div>

                </aside>
                <FadeInWhenVisible direction="slideFromLeft">

                {/* 2. Nội dung tin tức */}
                <main className="news-content">

                    {/* Render có điều kiện: Chỉ hiển thị nếu activeTab là 'news' */}
                    {activeTab === 'news' && fakeNewsData.map(renderCard)}

                    {/* Render có điều kiện: Chỉ hiển thị nếu activeTab là 'events' */}
                    {activeTab === 'events' && fakeEventsData.map(renderCard)}

                </main>
                </FadeInWhenVisible>

                {/* 3. Icon trang trí */}
                <div className="decoration-icon">
                    <FadeInWhenVisible direction="slideFromRight">

                        <img src={scrollIcon} alt="Decoration" />
                    </FadeInWhenVisible>

                    </div>
                
            </div>
            <span className="banner">Shadow Warriors :
                MONSTER SLAYER</span>
        </div>
    );
}

export default ContentHome3;