import React, { useState } from 'react';
import FadeInWhenVisible from '../FadeAnimation/FadeInWhenVisible';

import lanceThumb from '../../assets/images/hero1-1.png'; // Ảnh nhỏ
import lanceMain from '../../assets/images/hero1.png';   // Ảnh nền
import lanceMainGif from '../../assets/images/gif_hero1.gif';   // Ảnh nền
import hero2Thumb from '../../assets/images/hero2-2.png';
import hero2Main from '../../assets/images/hero2.png';
import hero2MainGif from '../../assets/images/gif_hero2.gif';
import hero3Thumb from '../../assets/images/hero3-3.png';
import hero3Main from '../../assets/images/hero3.png';
import hero3MainGif from '../../assets/images/gif_hero3.gif';
import hero4Thumb from '../../assets/images/hero4-4.png';
import hero4Main from '../../assets/images/hero4.png';
import hero4MainGif from '../../assets/images/gif_hero4.gif';
import hero5Thumb from '../../assets/images/hero5-5.png';
import hero5Main from '../../assets/images/hero5.png';
import hero5MainGif from '../../assets/images/gif_hero5.gif';
import hero6Thumb from '../../assets/images/hero6-6.png';
import hero6Main from '../../assets/images/hero6.png';
import hero6MainGif from '../../assets/images/gif_hero6.gif';
// ... (Import 4 anh hùng còn lại)
// ------------------------------------------


// --- 1. ĐÂY LÀ "OBJECT" DỮ LIỆU FAKE CỦA BẠN ---
const characterData = [
    {
        id: 1,
        name: "Lance",
        nameTag: "Lance",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
        thumbnailIcon: lanceThumb, // Ảnh nhỏ
        mainImage: lanceMain,
        gifHero: lanceMainGif
    },
    {
        id: 2,
        name: "Wolf", // Tên ví dụ
        nameTag: "Wolf",
        description: "This is the Wolf hero. A different description. Fast, fierce, and loyal. Uses dual daggers to strike from the shadows.",
        thumbnailIcon: hero2Thumb,
        mainImage: hero2Main,
        gifHero: hero2MainGif
    },
    {
        id: 3,
        name: "Mage",
        nameTag: "Mage",
        description: "The Mage commands powerful arcane magic, controlling the battlefield with fire and ice. Very high damage, but low health.",
        thumbnailIcon: hero3Thumb, // (Dùng tạm ảnh)
        mainImage: hero3Main,
        gifHero: hero3MainGif
    },
    {
        id: 4,
        name: "Hamer",
        nameTag: "Hamer",
        description: "The Mage commands powerful arcane magic, controlling the battlefield with fire and ice. Very high damage, but low health.",
        thumbnailIcon: hero4Thumb, // (Dùng tạm ảnh)
        mainImage: hero4Main,
        gifHero: hero4MainGif
    },
    {
        id: 5,
        name: "Crossbow",
        nameTag: "Crossbow",
        description: "The Mage commands powerful arcane magic, controlling the battlefield with fire and ice. Very high damage, but low health.",
        thumbnailIcon: hero5Thumb, // (Dùng tạm ảnh)
        mainImage: hero5Main,
        gifHero: hero5MainGif
    },
    {
        id: 6,
        name: "Wukong",
        nameTag: "Wukong",
        description: "The Mage commands powerful arcane magic, controlling the battlefield with fire and ice. Very high damage, but low health.",
        thumbnailIcon: hero6Thumb, // (Dùng tạm ảnh)
        mainImage: hero6Main,
        gifHero: hero6MainGif
    },
    // (Thêm 3 anh hùng còn lại vào đây)
];
// ----------------------------------------


function ContentHome4() {
    // 2. Dùng useState để lưu ID của anh hùng đang được chọn
    const [selectedHeroId, setSelectedHeroId] = useState(1); // Mặc định là 1 (Lance)

    // 3. Tìm toàn bộ thông tin của anh hùng đang được chọn
    const selectedHero = characterData.find(hero => hero.id === selectedHeroId);

    // Xử lý nếu không tìm thấy (mặc dù sẽ không xảy ra)
    if (!selectedHero) {
        return <div>Error: Hero not found.</div>;
    }
    const className = "gif-hero" + selectedHeroId;
    return (
        <div className="character-container" style={{
            overflowX: 'hidden', overflowY: 'hidden'
        }} >

          
            <div
                className="character-background"
                style={{ backgroundImage: `url(${selectedHero.mainImage})` }}
            />
           
            <div className="character-overlay" />


            <div className="character-content-wrapper">
                <div className="character-content">
                <FadeInWhenVisible>
                    <h2 className="main-title">         Characters</h2>
                </FadeInWhenVisible>
                    <div className="hero-info">
                        <FadeInWhenVisible>

                        <span className="hero-name-tag">       {selectedHero.nameTag}</span>
                            <p className="hero-description">           {selectedHero.description}</p>
                        </FadeInWhenVisible>
                        <h3 className="hero-name-large">           {selectedHero.name.toUpperCase()}</h3>

                        <div className="hero-gif-wrapper">

                                <img src={selectedHero.gifHero} alt={selectedHero.name} className={className} />

                        </div>
                    </div>
            </div>
            <FadeInWhenVisible direction="fadeInDown">

                <div className="character-selector">
                    {characterData.map((hero) => (
                        <div
                            key={hero.id}
                            className={`selector-card ${hero.id === selectedHeroId ? 'active' : ''}`}
                            onClick={() => setSelectedHeroId(hero.id)}
                        >
                            <div className="selector-frame"></div>

                            <div className="diamond-helper"></div>
                            <div className="selector-bg">
                                


                                    <img src={hero.thumbnailIcon} alt={hero.name} />
                            </div>
                        </div>
                    ))}
                    </div>
                </FadeInWhenVisible>

            </div>

           
        </div>
    );
}

export default ContentHome4;