import { Globe } from 'lucide-react';
import { useState } from 'react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';
import { X, ChevronDown, Menu } from 'lucide-react';

export default function App() {
  const [language, setLanguage] = useState<'en' | 'zh'>('zh');
  const [selectedProject, setSelectedProject] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  
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
        product7: 'Unity woven coffee table',
        product8: 'The Mist',
        product9: 'CU',
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
        product7: '织合',
        product8: '雾',
        product9: '如果',
      },
      contact: {
        title: '联系',
        instagram: 'Instagram',
        linkedin: 'LinkedIn',
      },
    },
  };

  const t = content[language];

  // Close modal with animation
  const handleCloseModal = () => {
    setIsClosing(true);
    setTimeout(() => {
      setSelectedProject(null);
      setIsClosing(false);
    }, 200); // Match the animation duration
  };

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
      image3: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/Screenshot%202026-04-12%20at%2000.18.21.png',
      descriptionEN: 'The Echo is a sofa side mood lamp that integrates the traditional Chinese palace light, simplifying its decorative base into a form that echoes the light bulb, and freestanding by the base.',
      descriptionZH: 'The Echo 是一款沙发边灯，融合了中国传统宫灯的元素。它将宫灯装饰性的底座简化为与灯泡呼应的造型，并通过交叉底座实现独立站立,它使用CNC切割技术, 被设计为可在本地制造。回应了当代设计中装饰性元素与功能需求之间的张力并探索传统物件如何在现代灯具设计中被重新诠释。',
    },
    product2: {
      image: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/IMG_1302.jpg',
      descriptionEN: 'The design was inspired by oracle bone inscriptions, an early form of Chinese script. The character is 水, it means \"water\". It has the meaning of wealth and luck in Chinese. The product has 5 parts: the four smaller components serve as chopsticks holders, while the \"S\" shaped centerpiece acts as a holder for additional cutlery. CHOP CHOP aims to facilitate sharing and cultural expression.',
      descriptionZH: '该设计灵感来源于甲骨文——一种早期的中国文字。所使用的文字是\"水\",在中国文化中，它具有财富和幸运的寓意。CHOP CHOP 由五个部分组成：四个较短的部件用作筷架，而中间"S"形的体则作为额外餐具的支架。旨在促进分享与文化表达。',
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
      descriptionEN: 'Stoneware jewelry tray, T.Z stands for the initials of the user\'s name.',
      descriptionZH: '炻器首饰托盘, T.Z是用户姓名首字母缩写',
    },
    product7: {
      image: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/U4table.jpg',
      descriptionEN: 'The Unity Woven Coffee Table merges Asian and European cultural influences, incorporating Asian weaving techniques into a European antique furniture context. The piece is constructed using a reclaimed tabletop and steel tubing, transforming discarded materials into a high-end piece of furniture.',
      descriptionZH: '织合茶几融合了亚洲与欧洲的文化元素，将亚洲传统的编织工艺融入欧洲古典家具语境之中。整体采用废弃的桌面与钢管材料，通过再设计与重构，将原本被丢弃的材料转化为具有高级质感的家具作品。',
    },
    product8: {
      image: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/U4%20wearable%20hero%20image.jpg',
      descriptionEN: 'The Mist work with a pair device which place on the wrist. When the heart rate is higher than usual, the pair device will detect it and send the information to the scents device. The scent could be changed by using the APP. The aim is to calm people down when they have a high heart rate.',
      descriptionZH: '“雾”装置与一款佩戴于手腕的设备联动使用。当用户心率高于日常水平时，佩戴设备会进行检测，并将数据传输至香氛装置。“雾”可根据APP进行气味调节，其设计旨在在用户心率升高时，通过气味干预帮助其放松与平静。',
    },
    product9: {
      image: 'https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/cu%E5%B0%81%E9%9D%A2.jpg',
      descriptionEN: 'What if we shared our living spaces with pets? What if furniture could be freely assembled while also providing dedicated spaces for pets? When purchasing new furniture, we rarely consider the needs of pets. CU offers U shape base modules and connectors, allowing users to assemble furniture into different configurations to support co-living with pets.',
      descriptionZH: '如果我们与宠物共享生活空间，会发生什么？如果家具不仅可以自由组合，同时也能为宠物提供专属空间，又会怎样？在购买家具时，我们往往很少考虑宠物的需求。CU 提供 U 形基础模块与连接件，使用户能够根据需要自由组合成不同形态的家具，以满足人与宠物共同生活的需求。',
    },
  };

  return (
    <div className="min-h-screen bg-[#EFE5D5]">
      {/* Top Language Bar */}
      <div className="bg-[#F8F8F5] border-b border-[#5A4A3A]/10 fixed top-0 left-0 right-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-2 flex items-center justify-end gap-2 sm:gap-3">
          <Globe className="w-3 h-3 sm:w-4 sm:h-4 text-[#5A4A3A]" />
          <button 
            onClick={() => setLanguage('en')}
            className={`text-xs sm:text-sm hover:opacity-70 ${language === 'en' ? 'text-[#5A4A3A] font-medium' : 'text-[#5A4A3A]/60'}`}
          >
            ENGLISH
          </button>
          <span className="text-[#5A4A3A] text-xs sm:text-sm">|</span>
          <button 
            onClick={() => setLanguage('zh')}
            className={`text-xs sm:text-sm hover:opacity-70 ${language === 'zh' ? 'text-[#5A4A3A] font-medium' : 'text-[#5A4A3A]/60'}`}
          >
            中文
          </button>
        </div>
      </div>

      {/* Header */}
      <header className="px-4 sm:px-8 py-4 sm:py-6 fixed top-8 sm:top-10 left-0 right-0 z-40 bg-[#EFE5D5]">
        <nav className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="text-xl sm:text-2xl text-[#5A4A3A] font-bold">{t.logo}</div>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex gap-8 text-[#5A4A3A] text-sm">
            <li className="cursor-pointer hover:opacity-70" onClick={() => scrollToSection('hero')}>{t.nav.about}</li>
            <li className="cursor-pointer hover:opacity-70" onClick={() => scrollToSection('products')}>{t.nav.works}</li>
            <li className="cursor-pointer hover:opacity-70" onClick={() => scrollToSection('contact')}>{t.nav.contact}</li>
          </ul>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-[#5A4A3A] p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-5 h-5" />
          </button>
        </nav>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-[#F8F8F5] border-b border-[#5A4A3A]/10 animate-fadeIn">
            <ul className="flex flex-col text-[#5A4A3A] text-sm">
              <li 
                className="cursor-pointer hover:bg-[#EFE5D5] px-4 sm:px-8 py-3 border-b border-[#5A4A3A]/5" 
                onClick={() => {
                  scrollToSection('hero');
                  setMobileMenuOpen(false);
                }}
              >
                {t.nav.about}
              </li>
              <li 
                className="cursor-pointer hover:bg-[#EFE5D5] px-4 sm:px-8 py-3 border-b border-[#5A4A3A]/5" 
                onClick={() => {
                  scrollToSection('products');
                  setMobileMenuOpen(false);
                }}
              >
                {t.nav.works}
              </li>
              <li 
                className="cursor-pointer hover:bg-[#EFE5D5] px-4 sm:px-8 py-3" 
                onClick={() => {
                  scrollToSection('contact');
                  setMobileMenuOpen(false);
                }}
              >
                {t.nav.contact}
              </li>
            </ul>
          </div>
        )}
      </header>

      {/* Hero Section - Full Screen */}
      <section className="min-h-screen bg-[#EFE5D5] flex flex-col items-center justify-center pt-24 sm:pt-24 px-4 sm:px-0 relative" id="hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-12 items-center">
            <div>
              <h1 className="mb-4 sm:mb-6 text-[#5A4A3A] text-3xl sm:text-4xl md:text-[64px] text-center animate-float leading-tight">
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
              <p className="text-[#5A4A3A] leading-relaxed whitespace-pre-line text-center text-sm sm:text-base">
                {t.hero.description}
              </p>
            </div>
            <ImageWithFallback 
              src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/IMG_1039%202.JPG"
              alt="Hero image"
              className="w-full aspect-[4/3] rounded-lg object-cover order-first md:order-last"
            />
          </div>
        </div>
        
        {/* Explore More Section */}
        <div 
          className="absolute bottom-2 sm:bottom-2 left-1/2 transform -translate-x-1/2 flex flex-col items-center cursor-pointer"
          onClick={() => scrollToSection('products')}
        >
          <span className="text-[#5A4A3A] text-xs sm:text-sm mb-2 animate-pulse">
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
          <ChevronDown className="w-5 h-5 sm:w-6 sm:h-6 text-[#5A4A3A] animate-bounce" />
        </div>
      </section>

      {/* Products Section - Full Screen */}
      <section className="min-h-screen bg-[#fef6e9] flex items-center justify-center" id="products">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 w-full py-12 sm:py-16">
          <h2 className="text-2xl sm:text-3xl text-center mb-8 sm:mb-12 text-[#5A4A3A] animate-float">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            {/* Product 1 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product1')}>
              <ImageWithFallback 
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/IMG_3755.jpg"
                alt="The Echo"
                className="w-full aspect-[3/4] rounded-lg object-cover object-[50%_35%] mb-3 sm:mb-4"
              />
              <p className="text-[#5A4A3A] text-sm sm:text-base">{t.products.product1}</p>
            </div>
            {/* Product 2 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product2')}>
              <ImageWithFallback 
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/IMG_1302.jpg"
                alt="CHOP CHOP"
                className="w-full aspect-[3/4] rounded-lg object-cover object-center mb-3 sm:mb-4"
              />
              <p className="text-[#5A4A3A] text-sm sm:text-base">{t.products.product2}</p>
            </div>
            {/* Product 3 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product3')}>
              <ImageWithFallback 
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/reframe%E5%B0%81%E9%9D%A2%E5%9B%BE.JPG"
                alt="ReFrame"
                className="w-full aspect-[3/4] rounded-lg object-cover object-center mb-3 sm:mb-4"
              />
              <p className="text-[#5A4A3A] text-sm sm:text-base">{t.products.product3}</p>
            </div>
            {/* Product 4 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product4')}>
              <ImageWithFallback
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/IMG_2820.jpg"
                alt="That Pineapple Cabinet"
                className="w-full aspect-[3/4] rounded-lg object-cover object-center mb-3 sm:mb-4"
              />
              <p className="text-[#5A4A3A] text-sm sm:text-base">{t.products.product4}</p>
            </div>
            {/* Product 5 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product5')}>
              <ImageWithFallback
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/%E5%B0%8F%E7%8B%97totopoly.jpg"
                alt="Project 5"
                className="w-full aspect-[3/4] rounded-lg object-cover object-center mb-3 sm:mb-4"
              />
              <p className="text-[#5A4A3A] text-sm sm:text-base">{t.products.product5}</p>
            </div>
            {/* Product 6 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product6')}>
              <ImageWithFallback
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/%E9%A6%96%E9%A5%B0%E7%9B%98.jpg"
                alt="Project 6"
                className="w-full aspect-[3/4] rounded-lg object-cover object-center mb-3 sm:mb-4"
              />
              <p className="text-[#5A4A3A] text-sm sm:text-base">{t.products.product6}</p>
            </div>
            {/* Product 7 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product7')}>
              <ImageWithFallback
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/U4table.jpg"
                alt="Project 7"
                className="w-full aspect-[3/4] rounded-lg object-cover object-center mb-3 sm:mb-4"
              />
              <p className="text-[#5A4A3A] text-sm sm:text-base">{t.products.product7}</p>
            </div>
            {/* Product 8 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product8')}>
              <ImageWithFallback
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/U4%20wearable%20hero%20image.jpg"
                alt="Project 8"
                className="w-full aspect-[3/4] rounded-lg object-cover object-center mb-3 sm:mb-4"
              />
              <p className="text-[#5A4A3A] text-sm sm:text-base">{t.products.product8}</p>
            </div>
            {/* Product 9 */}
            <div className="text-center cursor-pointer hover:opacity-80 transition-opacity" onClick={() => setSelectedProject('product9')}>
              <ImageWithFallback
                src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/cu%E5%B0%81%E9%9D%A2.jpg"
                alt="Project 9"
                className="w-full aspect-[3/4] rounded-lg object-cover object-center mb-3 sm:mb-4"
              />
              <p className="text-[#5A4A3A] text-sm sm:text-base">{t.products.product9}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="min-h-screen bg-[#EFE5D5] flex items-center justify-center px-4 sm:px-0" id="contact">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl mb-8 sm:mb-12 text-[#5A4A3A] animate-float">
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
              <p className="text-[#5A4A3A] mb-2 text-base sm:text-lg">{t.contact.instagram}</p>
              <a 
                href="https://www.instagram.com/asap_0_10?igsh=czN2ZGYyem04Z3ls&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5A4A3A]/60 text-sm sm:text-base hover:text-[#5A4A3A] hover:underline transition-all"
              >
                @asap_0_10
              </a>
            </div>
            <div>
              <p className="text-[#5A4A3A] mb-2 text-base sm:text-lg">{t.contact.linkedin}</p>
              <a 
                href="https://www.linkedin.com/in/anning-qi-621650397?utm_source=share&utm_content=profile&utm_medium=member_ios"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#5A4A3A]/60 text-sm sm:text-base hover:text-[#5A4A3A] hover:underline transition-all"
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
          className={`fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
          onClick={() => handleCloseModal()}
        >
          {/* Close Button - Fixed to viewport */}
          <button
            onClick={() => handleCloseModal()}
            className="fixed top-4 right-4 sm:top-12 sm:right-12 text-[#5A4A3A] hover:opacity-70 z-[60] bg-[#F8F8F5] rounded-full p-2 shadow-lg"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <div 
            className={`bg-[#F8F8F5] rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto relative my-auto ${isClosing ? 'animate-scaleOut' : 'animate-scaleIn'}`}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Content */}
            <div className="p-4 sm:p-8">
              {/* Large Image */}
              {projectDetails[selectedProject as keyof typeof projectDetails].image ? (
                <ImageWithFallback
                  src={projectDetails[selectedProject as keyof typeof projectDetails].image}
                  alt={t.products[selectedProject as keyof typeof t.products]}
                  className="w-full aspect-[4/3] object-cover rounded-lg mb-4 sm:mb-6"
                />
              ) : (
                <div className="w-full aspect-[4/3] bg-gray-300 rounded-lg mb-4 sm:mb-6"></div>
              )}

              {/* Collaboration note - only for product7 */}
              {selectedProject === 'product7' && (
                <p className="text-[#5A4A3A]/50 text-xs sm:text-sm mb-4 sm:mb-6 text-left">
                  {language === 'en' 
                    ? 'group project with Yuan Wang, Anastasiia Smolianinova, Alicia Browett.'
                    : '与Yuan Wang, Anastasiia Smolianinova, Alicia Browett的合作项目'
                  }
                </p>
              )}

              {/* Collaboration note - only for product8 */}
              {selectedProject === 'product8' && (
                <p className="text-[#5A4A3A]/50 text-xs sm:text-sm mb-4 sm:mb-6 text-left">
                  {language === 'en' 
                    ? 'Group work with Anastasiia Smolianinova'
                    : '合作者: Anastasiia Smolianinova'
                  }
                </p>
              )}

              {/* Project Title */}
              <h3 className="text-2xl sm:text-3xl mb-3 sm:mb-4 text-[#5A4A3A]">
                {t.products[selectedProject as keyof typeof t.products]}
              </h3>

              {/* Partner info - only for product7 */}
              {selectedProject === 'product7' && (
                <p className="text-lg sm:text-xl text-[#5A4A3A] mb-3 sm:mb-4">
                  {language === 'en' ? 'Partner: AGC' : '合作公司: AGC'}
                </p>
              )}

              {/* Project Description */}
              <div className="text-[#5A4A3A] leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                <p>
                  {language === 'en' 
                    ? projectDetails[selectedProject as keyof typeof projectDetails].descriptionEN
                    : projectDetails[selectedProject as keyof typeof projectDetails].descriptionZH
                  }
                </p>
              </div>

              {/* Additional images for product7 */}
              {selectedProject === 'product7' && (
                <>
                  <ImageWithFallback
                    src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/WhatsApp%20Image%202024-05-24%20at%2015.14.18.jpeg"
                    alt="Unity woven coffee table - Detail 1"
                    className="w-full aspect-[4/3] object-cover rounded-lg mb-4 sm:mb-6"
                  />
                  <ImageWithFallback
                    src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/WhatsApp%20Image%202024-05-24%20at%2015.14.20.jpeg"
                    alt="Unity woven coffee table - Detail 2"
                    className="w-full aspect-[4/3] object-cover rounded-lg mb-4 sm:mb-6"
                  />
                </>
              )}

              {/* Additional images for product8 */}
              {selectedProject === 'product8' && (
                <>
                  <div className="w-full aspect-[4/3] rounded-lg mb-4 sm:mb-6 overflow-hidden">
                    <ImageWithFallback
                      src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/U4%20device%E6%B8%B2%E6%9F%93.jpg"
                      alt="The Mist - Device Detail"
                      className="w-full h-full object-cover scale-[2]"
                      style={{ objectFit: 'cover', objectPosition: 'center' }}
                    />
                  </div>
                  <ImageWithFallback
                    src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/U4%20wearble%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97.png"
                    alt="The Mist - Usage Guide"
                    className="w-full rounded-lg mb-4 sm:mb-6 object-contain bg-[#F8F8F5]"
                  />
                </>
              )}

              {/* Additional images for product2 (CHOP CHOP) */}
              {selectedProject === 'product2' && (
                <>
                  {/* Two images side by side */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <ImageWithFallback
                      src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/%E7%AD%B7%E5%AD%90%E6%88%90%E5%93%811.png"
                      alt="CHOP CHOP - Detail 1"
                      className="w-full aspect-[3/4] object-cover object-center rounded-lg bg-[#F8F8F5]"
                    />
                    <ImageWithFallback
                      src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/%E7%AD%B7%E5%AD%90%E6%88%90%E5%93%812.png"
                      alt="CHOP CHOP - Detail 2"
                      className="w-full aspect-[3/4] object-cover object-center rounded-lg bg-[#F8F8F5]"
                    />
                  </div>
                  {/* Packaging box - slightly zoomed */}
                  <div className="w-full aspect-[4/3] rounded-lg mb-4 sm:mb-6 overflow-hidden bg-[#F8F8F5] flex items-center justify-center">
                    <ImageWithFallback
                      src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/%E7%AD%B7%E5%AD%90%E6%A0%B7%E6%9C%BA%20copy.png"
                      alt="CHOP CHOP - Packaging"
                      className="w-full h-full object-contain scale-[1.5]"
                    />
                  </div>
                </>
              )}

              {/* Second Image (only for products that have image2) */}
              {projectDetails[selectedProject as keyof typeof projectDetails].image2 && (
                <>
                  {/* Special layout for product1 - two images side by side before the main image2 */}
                  {selectedProject === 'product1' && (
                    <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-3 sm:mb-4">
                      <ImageWithFallback
                        src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/tala%203.JPG"
                        alt="The Echo - Detail 1"
                        className="w-full aspect-[3/4] object-cover object-center rounded-lg bg-[#F8F8F5]"
                      />
                      <ImageWithFallback
                        src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/tala4.jpg"
                        alt="The Echo - Detail 2"
                        className="w-full aspect-[3/4] object-cover object-center rounded-lg bg-[#F8F8F5]"
                      />
                    </div>
                  )}
                  
                  <ImageWithFallback
                    src={projectDetails[selectedProject as keyof typeof projectDetails].image2}
                    alt={`${t.products[selectedProject as keyof typeof t.products]} - Additional`}
                    className={`w-full rounded-lg mb-2 sm:mb-3 bg-[#F8F8F5] ${
                      selectedProject === 'product1' 
                        ? 'aspect-[4/3] object-cover' 
                        : selectedProject === 'product4'
                        ? 'aspect-[4/3] object-cover object-bottom'
                        : 'aspect-[16/9] object-contain object-top'
                    }`}
                  />
                  {/* Image caption */}
                  <p className="text-[#5A4A3A]/60 text-xs sm:text-sm mb-4 sm:mb-6 text-center">
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
                    <>
                      <p className="text-[#5A4A3A] leading-relaxed text-sm sm:text-base mb-4 sm:mb-6">
                        {language === 'en'
                          ? 'The piece is designed to be locally manufactured. It addresses the tension between decorative elements and functional requirements in contemporary design and explores how traditional objects can be reinterpreted in modern lighting.'
                          : '它使用CNC切割技术, 被设计为可在本地制造。回应了当代设计中装饰性元素与功能需求之间的张力并探索传统物件如何在现代灯具设计中被重新诠释。'
                        }
                      </p>
                      <ImageWithFallback
                        src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/tala%201.jpg"
                        alt="The Echo - Final Image"
                        className="w-full aspect-[4/3] object-cover rounded-lg mb-4 sm:mb-6"
                      />
                    </>
                  )}
                </>
              )}

              {/* Third Image (only for product4) */}
              {selectedProject === 'product4' && projectDetails[selectedProject as keyof typeof projectDetails].image3 && (
                <>
                  <ImageWithFallback
                    src={projectDetails[selectedProject as keyof typeof projectDetails].image3!}
                    alt={`${t.products[selectedProject as keyof typeof t.products]} - Visualization`}
                    className="w-full aspect-[4/3] object-cover rounded-lg mb-2 sm:mb-3 bg-[#F8F8F5]"
                  />
                  {/* Image caption for visualization */}
                  <p className="text-[#5A4A3A]/40 text-xs sm:text-sm mb-4 sm:mb-6 text-center">
                    {language === 'en' 
                      ? 'Visualization of the final outcome'
                      : '最终效果的可视化呈现'
                    }
                  </p>
                </>
              )}

              {/* Additional images for product9 (CU) */}
              {selectedProject === 'product9' && (
                <>
                  <ImageWithFallback
                    src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/Cu1.jpg"
                    alt="CU - Detail 1"
                    className="w-full aspect-[4/3] object-cover rounded-lg mb-4 sm:mb-6"
                  />
                  <ImageWithFallback
                    src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/cu2.jpg"
                    alt="CU - Detail 2"
                    className="w-full aspect-[4/3] object-cover rounded-lg mb-4 sm:mb-6"
                  />
                  <ImageWithFallback
                    src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/cu3.jpg"
                    alt="CU - Detail 3"
                    className="w-full aspect-[4/3] object-cover rounded-lg mb-4 sm:mb-6"
                  />
                  <ImageWithFallback
                    src="https://pub-43bd14b51b6f4569a7a1b41d2b455df5.r2.dev/cu4.jpg"
                    alt="CU - Detail 4"
                    className="w-full aspect-[4/3] object-cover rounded-lg mb-4 sm:mb-6"
                  />
                </>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
