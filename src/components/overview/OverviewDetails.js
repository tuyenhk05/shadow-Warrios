// src/components/PostDetail.js
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './overview.scss'; // File CSS chúng ta sẽ tạo ở bước 2
import newsImage1 from '../../assets/images/new1.png'; // (Ảnh fake 1)
import newsImage2 from '../../assets/images/new2.png';  // (Ảnh fake 2)
import eventImage1 from '../../assets/images/event1.png'; // (Ảnh fake 3)
import eventImage2 from '../../assets/images/event2.png'; // (Ảnh fake 3)
import button from '../../assets/images/Next Button.svg';
import FadeInWhenVisible from '../FadeAnimation/FadeInWhenVisible';

// Giả lập dữ liệu fetch từ API
const data = [
    { id: 1, title: 'New events: Lorem ipsum dolor sit amet...', date: '10/02/2024', thumb: newsImage1 },
    { id: 2, title: 'New events: Consectetur adipiscing elit...', date: '09/02/2024', thumb: newsImage2 },
    { id: 3, title: 'New events: Sed do eiusmod tempor...', date: '08/02/2024', thumb: eventImage1 },
    { id: 4, title: 'New events: Sed do eiusmod tempor...', date: '08/02/2024', thumb: eventImage2 },
];

const fakeApi = {
    getPostById: (id) => {
        const post=data.find(post => post.id === parseInt(id));
        return post ? Promise.resolve({
            ...post,
            content: 'This is the detailed content of the post. '.repeat(20),
            imageUrl: post.thumb
        }) : Promise.resolve(null);



    },
    getLatestNews: () => {
        return data;
    }
};

function OverviewDetail() {
    const { idnew } = useParams(); // Lấy 'id' từ URL
    const [post, setPost] = useState(null);
    const [latestNews, setLatestNews] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        // Gọi API để lấy nội dung bài viết
        fakeApi.getPostById(idnew).then(data => {
            setPost(data);
            setLoading(false);
        });

        // Gọi API để lấy tin tức mới nhất
        setLatestNews(fakeApi.getLatestNews());
    }, [idnew]); // Phụ thuộc vào [id], component sẽ render lại nếu id thay đổi

    if (loading) {
        return <div className="loading">Loading...</div>;
    }

    if (!post) {
        return <div className="loading" style={{paddingTop:100} }>Post not found.</div>;
    }

    const currentId = parseInt(idnew);
 
    return (
        <div className="page-wrapper" style={{
            overflowX: 'hidden', overflowY: 'hidden'
        }} >
        <FadeInWhenVisible>
            <div className="container">
                {/* === KHU VỰC NỘI DUNG CHÍNH === */}
                <main className="main-content">
                    <article>
                        <h1>{post.title}</h1>
                        <p className="post-date">{post.date}</p>
                        <img src={post.imageUrl} alt={post.title} className="main-image" />
                        <div className="post-body">
                            <p>{post.content}</p>
                            <p>{post.content}</p> {/* Thêm 1 đoạn nữa cho dài */}
                        </div>
                    </article>

                    {/* Nút điều hướng (Như 2 mũi tên trong hình) */}
                    <nav className="post-navigation">
                        {
                            currentId > 1 && (
                        <Link to={`/Overview/${currentId - 1}`} className="nav-arrow prev">
                                    <img src={button} alt="Previous" /> 
                                </Link>
                            )
                        }
                        {
                            currentId < data.length && (
                                <Link to={`/Overview/${currentId + 1}`} className="nav-arrow next">
                                    <img src={button} alt="Previous" /> 
                            </Link>
                            )
                        }
                    </nav>

                       
                       
                </main>

                {/* === KHU VỰC SIDEBAR === */}
                <aside className="sidebar">
                    <h2>Latest News</h2>
                    <ul className="news-list">
                        {latestNews.map(news => (
                            <li key={news.id} className="news-item">
                                <Link to={`/Overview/${news.id}`}>
                                    <img src={news.thumb} alt={news.title} className="news-thumb" />
                                    <div className="news-info">
                                        <h3>{news.title}</h3>
                                        <p className="news-date">{news.date}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </aside>
            </div>

            </FadeInWhenVisible>
        </div>
    );
}

export default OverviewDetail;