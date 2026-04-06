import { Globe } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { X, ChevronDown } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  
  const content = {
    en: {
      logo: 'ANQ',
      nav: {
        about: 'ABOUT',
        works: 'PROJECTS',
        contact: 'CONTACT',
      },
      hero: {
        title: 'ANNINNNNG',
        description: 'is a designer specializing in product, furniture and interactive design. She believes that design is not only about form and aesthetics, but also a dialogue with users, culture, and the environment. She aims to create everyday objects that spark curiosity and encourage user engagement. Her work includes products and furniture, often drawing inspiration from traditional cultural elements while combining modern functionality and usability. Each piece seeks to balance aesthetics and practicality, allowing users to experience cultural stories and emotional connections through interaction.',
        explore: 'EXPLORE MORE...',
      },
      products: {
        title: 'PROJECTS',
        product1: 'The Echo',
        product2: 'CHOP CHOP',
        product3: 'ReFrame',
        product4: 'That Pineapple Cabinet',
        product5: 'Doggypoly',
        product6: 'The T.Z',
      },
      contact: {
        title: 'CONTACT',
        instagram: 'Instagram',
        linkedin: 'LinkedIn',
      },
    },
    zh: {
      logo: 'ANQ',
      nav: {
        about: '关于',
        works: '作品',
        contact: '联系',
      },
      hero: {
        title: 'ANNINNNNG',
        description: '是一名专注于家具, 产品与互动设计的设计师。她相信设计不仅是形式和美感的呈现，更是一种与使用者、文化和环境的对话。她希望让日常生活中的物件能够激发好奇心和参与感。她的作品涵盖产品和家具，常从传统文化元素中寻找灵感,同时结合现代功能性和可用性。每件作品都尝试在美学与实用性之间找到平衡，让使用者在使用的同时感受到文化故事与情感连接。',
        explore: '探索由此开始',
      },
      products: {
        title: '作品',
        product1: '回声',
        product2: 'CHOP CHOP',
        product3: '重塑',
        product4: '那个菠萝柜子',
        product5: '赛狗',
        product6: 'The T.Z',
      },
      contact: {
        title: '联系',
        instagram: 'Instagram',
        linkedin: 'LinkedIn',
      },
    },
  };

  const t = content[language];

  // Scroll to section function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Project details data
  const projectDetails: {
    [key: string]: {
      image: string;
      image2?: string;
      image3?: string;
      descriptionEN: string;
      descriptionZH: string;
    };
  } = {
    product1: {
      image: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/IMG_3755.jpg',
      image2: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/knotting%20%E7%BB%86%E8%8A%82.JPG',
      descriptionEN: 'The Echo is a sofa side mood lamp that integrates the traditional Chinese palace light, simplifying its decorative base into a form that echoes the light bulb, and freestanding by the base.',
      descriptionZH: 'The Echo 是一款沙发边灯，融合了中国传统宫灯的元素。它将宫灯装饰性的底座简化为与灯泡呼应的造型，并通过交叉底座实现独立站立',
    },
    product2: {
      image: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/IMG_1302.jpg',
      image2: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/jig.JPG',
      descriptionEN: 'The design was inspired by oracle bone inscriptions, an early form of Chinese script. The character is 水, it means \"water\". It has the meaning of wealth and luck in Chinese. The product has 5 parts: the four smaller components serve as chopsticks holders, while the \"S\" shaped centerpiece acts as a holder for additional cutlery. CHOP CHOP aims to facilitate sharing and cultural expression.',
      descriptionZH: '该设计灵感来源于甲骨文——一种早期的中国文字。所使用的文字是\"水\",在中国文化中，它具有财富和幸运的寓意。CHOP CHOP 由五个部分组成：四个较短的部件用作筷架，而中间“S”形的体则作为额外餐具的支架。旨在促进分享与文化表达。',
    },
    product3: {
      image: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/reframe%E5%B0%81%E9%9D%A2%E5%9B%BE.JPG',
      image2: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/reframe%E6%8B%BC%E5%9B%BE.JPG',
      descriptionEN: 'A DIY kit contains wooden sticks and joints that allow users to freely combine them with old furniture, rebuilding new pieces that are both functional and aesthetic, reducing waste and saving space.',
      descriptionZH: '重塑是一个DIY套件,包含木方和连接件，允许用户将其与旧家具自由组合，重新搭建出兼具功能性与美感的新家具，从而减少浪费并节省空间。',
    },
    product4: {
      image: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/IMG_2820.jpg',
      image2: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/stockwell%E7%BB%86%E8%8A%82.jpg',
      image3: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/%E5%BC%80%E9%97%A8%E6%9F%9C%E5%AD%902%E4%BE%A7%E9%9D%A2%E5%85%A8%E5%9B%BE%E6%A1%88.jpg',
      descriptionEN: 'A multifunctional cabinet for the sewing group at Stockwell Park Community Centre, combining storage and display. The design draws inspiration from Stockwell\'s link to the first imported pineapple in the UK, incorporating residents\' pineapple drawings and chunk-like forms.',
      descriptionZH: '一款为 Stockwell Park Community Centre 缝纫小组设计的多功能柜体，结合了储物与展示功能。设计灵感来源于 Stockwell 与英国第一颗进口菠萝之间的联系，并融入了居民绘制的菠萝图案以及块状的造型。',
    },
    product5: {
      image: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/%E5%B0%8F%E7%8B%97totopoly.jpg',
      descriptionEN: 'Ramp walker(dog version)\n\nThe color was inspired by the totopoly. A racing game for kids between 5-10. It is driven by gravity to walk,so kids could feel the excitement of competition while learning about how it works.',
      descriptionZH: '颜色灵感来源于 Totopoly，一款适合 5–10 岁儿童的竞速游戏。它通过重力驱动前进，让孩子们在感受比赛刺激的同时，也能了解它的运作原理。',
    },
    product6: {
      image: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/%E9%A6%96%E9%A5%B0%E7%9B%98.jpg',
      descriptionEN: 'Stoneware jewelry tray, T.Z stands for the initials of the user’s name.',
      descriptionZH: '炻器首饰托盘, T.Z是用户姓名首字母缩写',
    },
  };

  return (
    <div className="min-h-screen bg-[#EFE5D5]">
      {/* Top Language Bar */}
      <div className="bg-[#F8F8F5] border-b border-[#5A4A3A]/10 fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-8 py-2 flex items-center justify-end gap-3">
          <Globe className="w-4 h-4 text-[#5A4A3A]" />
          <button 
            onClick={() => setLanguage('en')}
            className={`text-sm hover:opacity-70 ${language === 'en' ? 'text-[#5A4A3A] font-medium' : 'text-[#5A4A3A]/60'}`}
          >
            ENGLISH
          </button>
          <span className="text-[#5A4A3A] text-sm">|</span>
          <button 
            onClick={() => setLanguage('zh')}
            className={`text-sm hover:opacity-70 ${language === 'zh' ? 'text-[#5A4A3A] font-medium' : 'text-[#5A4A3A]/60'}`}
          >
            中文
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="px-8 py-6 fixed top-10 left-0 right-0 z-40 bg-[#EFE5D5]">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-2xl text-[#5A4A3A] font-bold">{t.logo}</div>
          <ul className="flex gap-8 text-[#5A4A3A] text-sm">
            <li className="cursor-pointer hover:opacity-70" onClick={() => scrollToSection('hero')}>{t.nav.about}</li>
            <li className="cursor-pointer hover:opacity-70" onClick={() => scrollToSection('products')}>{t.nav.works}</li>
            <li className="cursor-pointer hover:opacity-70" onClick={() => scrollToSection('contact')}>{t.nav.contact}</li>
          </ul>
        </nav>
      </header>

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen bg-[#EFE5D5] flex flex-col items-center justify-center pt-24 relative" id="hero">
        <div className="max-w-7xl mx-auto px-8 w-full">
          <div className="grid grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="mb-6 text-[#5A4A3A] text-[64px] text-center animate-float">
                {t.hero.title.split('').map((letter, index) => (
                  <span 
                    key={index}
                    className="inline-block animate-wiggle"
                    style={{ 
                      animationDelay: `${index * 0.25}s`,
                      marginLeft: index === 0 ? '0' : '-0.05em'
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </h1>
              <p className="text-[#5A4A3A] leading-relaxed whitespace-pre-line text-center">
                {t.hero.description}
              </p>
            </div>
            <ImageWithFallback 
              src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/IMG_1039%202.JPG"
              alt="Hero image"
              className="w-full aspect-[4/3] rounded-lg object-cover"
            />
          </div>
        </div>
        
        {/* Explore More Section */}
        <div 
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection('products')}
        >
          <span className="text-[#5A4A3A] text-sm mb-2 animate-pulse">
            {t.hero.explore.split('').map((letter, index) => (
              <span 
                key={index}
                className="inline-block animate-wiggle"
                style={{ 
                  animationDelay: `${index * 0.15}s`,
                  marginLeft: letter === ' ' ? '0.3em' : '0'
                }}
              >
                {letter}
              </span>
            ))}
          </span>
          <ChevronDown className="w-6 h-6 text-[#5A4A3A] animate-bounce" />
        </div>
      </section>

      {/* Products Section - Full Screen */}
      <section className="min-h-screen bg-[#fef6e9] flex items-center justify-center" id="products">
        <div className="max-w-7xl mx-auto px-8 w-full py-16">
          <h2 className="text-3xl text-center mb-12 text-[#5A4A3A] animate-float">
            {t.products.title.split('').map((letter, index) => (
              <span 
                key={index}
                className="inline-block animate-wiggle"
                style={{ 
                  animationDelay: `${index * 0.25}s`,
                  marginLeft: index === 0 ? '0' : '-0.05em'
                }}
              >
                {letter}
              </span>
            ))}
          </h2>
          <div className="grid grid-cols-3 gap-8 mb-8">
            {/* Product 1 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product1')}>
              <ImageWithFallback 
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/IMG_3755.jpg"
                alt="The Echo"
                className="w-full aspect-[3/4] rounded-lg object-cover object-center mb-4"
              />
              <p className="text-[#5A4A3A]">{t.products.product1}</p>
            </div>
            {/* Product 2 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product2')}>
              <ImageWithFallback 
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/IMG_1302.jpg"
                alt="CHOP CHOP"
                className="w-full aspect-[3/4] rounded-lg object-cover object-center mb-4"
              />
              <p className="text-[#5A4A3A]">{t.products.product2}</p>
            </div>
            {/* Product 3 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product3')}>
              <ImageWithFallback 
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/reframe%E5%B0%81%E9%9D%A2%E5%9B%BE.JPG"
                alt="ReFrame"
                className="w-full aspect-[3/4] rounded-lg object-cover object-center mb-4"
              />
              <p className="text-[#5A4A3A]">{t.products.product3}</p>
            </div>
          </div>
          {/* Additional Products Row */}
          <div className="grid grid-cols-3 gap-8">
            {/* Product 4 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product4')}>
              <ImageWithFallback
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/IMG_2820.jpg"
                alt="That Pineapple Cabinet"
                className="w-full aspect-[3/4] rounded-lg object-cover object-center mb-4"
              />
              <p className="text-[#5A4A3A]">{t.products.product4}</p>
            </div>
            {/* Product 5 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product5')}>
              <ImageWithFallback
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/%E5%B0%8F%E7%8B%97totopoly.jpg"
                alt="Project 5"
                className="w-full aspect-[3/4] rounded-lg object-cover object-center mb-4"
              />
              <p className="text-[#5A4A3A]">{t.products.product5}</p>
            </div>
            {/* Product 6 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product6')}>
              <ImageWithFallback
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/%E9%A6%96%E9%A5%B0%E7%9B%98.jpg"
                alt="Project 6"
                className="w-full aspect-[3/4] rounded-lg object-cover object-center mb-4"
              />
              <p className="text-[#5A4A3A]">{t.products.product6}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen bg-[#EFE5D5] flex items-center justify-center" id="contact">
        <div className="max-w-7xl mx-auto px-8 text-center">
          <h2 className="text-3xl mb-12 text-[#5A4A3A] animate-float">
            {t.contact.title.split('').map((letter, index) => (
              <span 
                key={index}
                className="inline-block animate-wiggle"
                style={{ 
                  animationDelay: `${index * 0.25}s`,
                  marginLeft: index === 0 ? '0' : '-0.05em'
                }}
              >
                {letter}
              </span>
            ))}
          </h2>
          <div className="flex flex-col gap-6 items-center">
            <div>
              <p className="text-[#5A4A3A] mb-2 text-lg">{t.contact.instagram}</p>
              <a 
                href="https://www.instagram.com/asap_0_10?igsh=czN2ZGYyem04Z3ls&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5A4A3A]/60 text-base hover:text-[#5A4A3A] hover:underline transition-all"
              >
                @asap_0_10
              </a>
            </div>
            <div>
              <p className="text-[#5A4A3A] mb-2 text-lg">{t.contact.linkedin}</p>
              <a 
                href="https://www.linkedin.com/in/anning-qi-621650397?utm_source=share&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5A4A3A]/60 text-base hover:text-[#5A4A3A] hover:underline transition-all"
              >
                Anning Qi
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-8 animate-fadeIn"
          onClick={() => setSelectedProject(null)}
        >
          {/* Close Button - Fixed to viewport */}
          <button
            onClick={() => setSelectedProject(null)}
            className="fixed top-12 right-12 text-[#5A4A3A] hover:opacity-70 z-[60] bg-[#F8F8F5] rounded-full p-2 shadow-lg"
          >
            <X className="w-6 h-6" />
          </button>

          <div 
            className="bg-[#F8F8F5] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Content */}
            <div className="p-8">
              {/* Large Image */}
              {projectDetails[selectedProject as keyof typeof projectDetails].image ? (
                <ImageWithFallback
                  src={projectDetails[selectedProject as keyof typeof projectDetails].image}
                  alt={t.products[selectedProject as keyof typeof t.products]}
                  className="w-full aspect-[4/3] object-cover rounded-lg mb-6"
                />
              ) : (
                <div className="w-full aspect-[4/3] bg-gray-300 rounded-lg mb-6"></div>
              )}

              {/* Project Title */}
              <h3 className="text-3xl mb-4 text-[#5A4A3A]">
                {t.products[selectedProject as keyof typeof t.products]}
              </h3>

              {/* Project Description */}
              <div className="text-[#5A4A3A] leading-relaxed mb-6">
                <p>
                  {language === 'en' 
                    ? projectDetails[selectedProject as keyof typeof projectDetails].descriptionEN
                    : projectDetails[selectedProject as keyof typeof projectDetails].descriptionZH
                  }
                </p>
              </div>

              {/* Second Image (only for products that have image2) */}
              {projectDetails[selectedProject as keyof typeof projectDetails].image2 && (
                <>
                  <ImageWithFallback
                    src={projectDetails[selectedProject as keyof typeof projectDetails].image2}
                    alt={`${t.products[selectedProject as keyof typeof t.products]} - Additional`}
                    className={`w-full rounded-lg mb-3 bg-[#F8F8F5] ${
                      selectedProject === 'product3' 
                        ? 'aspect-[4/3] object-cover' 
                        : selectedProject === 'product4'
                        ? 'aspect-[4/3] object-cover object-bottom'
                        : 'aspect-[16/9] object-contain object-top'
                    }`}
                  />
                  {/* Image caption */}
                  <p className="text-[#5A4A3A]/60 text-sm mb-6 text-center">
                    {selectedProject === 'product1' ? (
                      language === 'en' 
                        ? 'Using traditional knotting techniques to secure the cable.'
                        : '用传统平结固定电线'
                    ) : selectedProject === 'product2' ? (
                      language === 'en'
                        ? 'The chopsticks are bent into an elegant "S" shape using steam bending technique.'
                        : '筷子通过蒸汽弯曲技术被弯成优雅的"S"形。'
                    ) : ''}
                  </p>
                  {/* Additional description - only for product1 */}
                  {selectedProject === 'product1' && (
                    <p className="text-[#5A4A3A] leading-relaxed">
                      {language === 'en'
                        ? 'The piece is designed to be locally manufactured. It addresses the tension between decorative elements and functional requirements in contemporary design and explores how traditional objects can be reinterpreted in modern lighting.'
                        : '它使用CNC切割技术, 被设计为可在本地制造。回应了当代设计中装饰性元素与功能需求之间的张力并探索传统物件如何在现代灯具设计中被重新诠释。'
                      }
                    </p>
                  )}
                </>
              )}

              {/* Third Image (only for product4) */}
              {selectedProject === 'product4' && projectDetails[selectedProject as keyof typeof projectDetails].image3 && (
                <>
                  <ImageWithFallback
                    src={projectDetails[selectedProject as keyof typeof projectDetails].image3!}
                    alt={`${t.products[selectedProject as keyof typeof t.products]} - Visualization`}
                    className="w-full aspect-[4/3] object-cover rounded-lg mb-3 bg-[#F8F8F5]"
                  />
                  {/* Image caption for visualization */}
                  <p className="text-[#5A4A3A]/40 text-sm mb-6 text-center">
                    {language === 'en' 
                      ? 'Visualization of the final outcome'
                      : '最终效果的可视化呈现'
                    }
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}