// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-主页",
    title: "主页",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-博客文章",
          title: "博客文章",
          description: "个人学术博客空间",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-科研成果",
          title: "科研成果",
          description: "科研成果以最近时间排序，由jekyll-scholar生成。",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-课题项目",
          title: "课题项目",
          description: "系统性、综合性研究课题方向的集合",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-教研服务",
          title: "教研服务",
          description: "课程教学、讲座、同行评议及编辑服务",
          section: "Navigation",
          handler: () => {
            window.location.href = "/services/";
          },
        },{id: "dropdown-新闻列表",
              title: "新闻列表",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-相关链接",
              title: "相关链接",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "dropdown-代码仓库",
              title: "代码仓库",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "";
              },
            },{id: "post-archive-tricks-to-keep-all-files-the-same-amp-synced-across-your-devices-文件管理强迫症福音",
      
        title: "[Archive] Tricks to keep all files the same &amp; synced across your devices...",
      
      description: "experience sharing and personal notes",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2025/blog-post-PC-trick01/";
        
      },
    },{id: "post-news-epfl-news-effiencient-epsilon-near-zero-intracavity-dual-range-frequency-shift",
      
        title: '[News] EPFL News: Effiencient epsilon-near-zero intracavity dual-range frequency shift <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "EPFL News Report",
      section: "Posts",
      handler: () => {
        
          window.open("https://actu.epfl.ch/news/effiencient-epsilon-near-zero-intracavity-dual-r-2/", "_blank");
        
      },
    },{id: "post-a-post-with-image-galleries",
      
        title: "a post with image galleries",
      
      description: "this is what included image galleries could look like",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/photo-gallery/";
        
      },
    },{id: "post-conference-ipc-versatile-and-efficient-dual-range-frequency-shifts-by-intracavity-epsilon-near-zero-nanolayers",
      
        title: "[Conference] IPC: Versatile and Efficient Dual-Range Frequency Shifts by Intracavity Epsilon-Near-Zero Nanolayers",
      
      description: "conference presentation at Rome, Italy",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/conf-IPC/";
        
      },
    },{id: "post-archive-run-linux-desktop-on-android-tablets",
      
        title: '[Archive] Run Linux Desktop on Android Tablets <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "a personal note on running Linux dektop on Android",
      section: "Posts",
      handler: () => {
        
          window.open("https://github.com/TerenceWSK/Android-Termux-Subsystem-for-Linux/tree/main", "_blank");
        
      },
    },{id: "post-pob-seminar-enhancement-of-linear-and-nonlinear-thermo-optic-effects-by-epsilon-near-zero-conditions",
      
        title: '[POB Seminar] Enhancement of linear and nonlinear thermo-optic effects by epsilon-near-zero conditions <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "EPFL Photonics Chapter event",
      section: "Posts",
      handler: () => {
        
          window.open("https://memento.epfl.ch/event/pob-seminar-enhancement-of-linear-and-nonlinear-th/", "_blank");
        
      },
    },{id: "post-academic-tool-quickphotonics-project",
      
        title: "[Academic Tool] QUICKphotonics Project",
      
      description: "an Excel and MATLAB-based academic tool for unit conversions in photonics",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/dev-QUICKphotonics/";
        
      },
    },{id: "post-invited-talk-extra-and-intra-cavity-manipulation-of-ultrashort-optical-pulses-on-integrated-and-nano-photonic-platforms",
      
        title: "[Invited Talk] Extra- and intra-cavity manipulation of ultrashort optical pulses on integrated- and...",
      
      description: "an invited talk on extra- and intra-cavity pulse manipulation",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/invited-PKU/";
        
      },
    },{id: "post-conference-piers-epsilon-near-zero-enhancement-of-linear-and-nonlinear-thermo-optic-effects",
      
        title: "[Conference] PIERS: Epsilon-near-zero Enhancement of Linear and Nonlinear Thermo-optic Effects",
      
      description: "conference presentation at Chengdu, Sichuan, China",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/conf-PIERS/";
        
      },
    },{id: "post-光学前沿评论-热光介电常数近零效应",
      
        title: '[光学前沿评论] 热光介电常数近零效应 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "微信公众号推送",
      section: "Posts",
      handler: () => {
        
          window.open("https://mp.weixin.qq.com/s/JNNqS0skF1zTUaG5XaYGqg", "_blank");
        
      },
    },{id: "post-blog-blog-post-in-spring-nature-research-communities-following-publication-in-nature-communications",
      
        title: "[Blog] Blog post in Spring-Nature Research Communities following publication in Nature Communications",
      
      description: "behind the paper series",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2024/blog-post/";
        
      },
    },{id: "post-新闻稿-信息工程学院李倩课题组与合作者在近零介电常数条件下热光效应增强方面取得研究突破",
      
        title: '[新闻稿] 信息工程学院李倩课题组与合作者在近零介电常数条件下热光效应增强方面取得研究突破 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "学院网站新闻稿",
      section: "Posts",
      handler: () => {
        
          window.open("https://news.pkusz.edu.cn/info/1003/8146.htm", "_blank");
        
      },
    },{id: "post-新闻稿-nat-commun-信息工程学院李倩课题组与合作者在近零介电常数条件下热光效应增强方面取得研究突破",
      
        title: '[新闻稿] Nat. Commun.| 信息工程学院李倩课题组与合作者在近零介电常数条件下热光效应增强方面取得研究突破 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "学院网站新闻稿",
      section: "Posts",
      handler: () => {
        
          window.open("https://www.ece.pku.edu.cn/info/1007/2725.htm", "_blank");
        
      },
    },{id: "post-towards-photonic-on-chip-integration-strong-linear-and-nonlinear-thermo-optic-effects-enhanced-by-near-zero-permittivity-on-a-nanolayer",
      
        title: 'Towards photonic on-chip integration: Strong linear and nonlinear thermo-optic effects enhanced by near-zero... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "behind the paper posts at Springer-Nature Research Community",
      section: "Posts",
      handler: () => {
        
          window.open("https://communities.springernature.com/posts/towards-photonic-on-chip-integration-strong-linear-and-nonlinear-thermo-optic-effects-enhanced-by-near-zero-permittivity-on-a-nanolayer", "_blank");
        
      },
    },{id: "post-invited-talk-enhancement-of-linear-and-nonlinear-thermo-optic-effects-by-epsilon-near-zero-conditions",
      
        title: "[Invited Talk] Enhancement of linear and nonlinear thermo-optic effects by epsilon-near-zero conditions",
      
      description: "an invited talk on epsilon-near-zero photonics",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/invited-SIOM/";
        
      },
    },{id: "post-invited-talk-light-matter-interactions-novel-technologies-for-extra-and-intra-cavity-manipulations-of-ultrafast-optical-pulses-in-integrated-photonic-chips-and-nanophotonic-thin-film-devices",
      
        title: "[Invited Talk] Light-matter interactions: Novel technologies for extra- and intra-cavity manipulations of ultrafast...",
      
      description: "an invited talk on extra- and intra-cavity pulse manipulation",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/invited-ETHZ/";
        
      },
    },{id: "post-光学前沿评论-腔内近零介电常数效应光纤激光器中类超导量子干涉仪行为的观察",
      
        title: '[光学前沿评论] 腔内近零介电常数效应光纤激光器中类超导量子干涉仪行为的观察 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "微信公众号推送",
      section: "Posts",
      handler: () => {
        
          window.open("https://mp.weixin.qq.com/s/4pYgeCCHyVhg7pzyQyMSsQ", "_blank");
        
      },
    },{id: "post-archive-mendeley-desktop",
      
        title: "[Archive] Mendeley Desktop",
      
      description: "an archive of the deprecated Mendely Desktop",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2023/Mendeley-Desktop/";
        
      },
    },{id: "post-新闻稿-北京大学李倩课题组-清华大学付红岩课题组-lpr-近零介电常数光纤激光器的类-超导量子干涉仪行为",
      
        title: '[新闻稿] 北京大学李倩课题组、清华大学付红岩课题组 LPR ：近零介电常数光纤激光器的类﹣超导量子干涉仪行为 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "学院网站新闻稿",
      section: "Posts",
      handler: () => {
        
          window.open("https://web.pkusz.edu.cn/lnfo/%e5%8c%97%e4%ba%ac%e5%a4%a7%e5%ad%a6%e6%9d%8e%e5%80%a9%e8%af%be%e9%a2%98%e7%bb%84%e3%80%81%e6%b8%85%e5%8d%8e%e5%a4%a7%e5%ad%a6%e4%bb%98%e7%ba%a2%e5%b2%a9%e8%af%be%e9%a2%98%e7%bb%84-lpr-%ef%bc%9a/", "_blank");
        
      },
    },{id: "post-conference-cleo-demonstration-of-temporal-talbot-effect-of-dark-pulse-trains",
      
        title: "[Conference] CLEO: Demonstration of Temporal Talbot Effect of Dark Pulse Trains",
      
      description: "conference presentation at San Jose, California, United States",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2022/conf-CLEO/";
        
      },
    },{id: "post-milestone-a-cross-disciplinary-experiment",
      
        title: "[Milestone] A cross-disciplinary experiment",
      
      description: "one of my personal favourite: a cross-disciplinary experiment",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2021/ENZ-SCF/";
        
      },
    },{id: "post-conference-icait-high-order-harmonic-generations-in-epsilon-near-zero-aluminum-doped-zinc-oxide-nanopyramid-array",
      
        title: "[Conference] ICAIT: High-Order Harmonic Generations in Epsilon-Near-Zero Aluminum-Doped Zinc Oxide Nanopyramid Array",
      
      description: "conference presentation at ICAIT, Macau SAR, China",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/conf-ICAIT/";
        
      },
    },{id: "post-conference-cleo-pr-precise-tuning-of-epsilon-near-zero-properties-in-indium-tin-oxide-nanolayer-by-supercritical-carbon-dioxide",
      
        title: "[Conference] CLEO-PR: Precise Tuning of Epsilon-Near-Zero Properties in Indium Tin Oxide Nanolayer by...",
      
      description: "conference presentation at CLEO-PR, Sydney, NSW, Australia",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2020/conf-CLEO-PR/";
        
      },
    },{id: "post-academic-tool-ssprop-nfol-project",
      
        title: "[Academic Tool] SSPROP-NFOL Project",
      
      description: "a MATLAB-based academic tool for split-step Fourier transform simulations in photonics",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2018/dev-SSPROP-NFOL-post/";
        
      },
    },{id: "post-invited-talk-science-literacy-experiences-in-scientific-research-and-literature-search",
      
        title: "[Invited Talk] Science Literacy: Experiences in scientific research and literature search",
      
      description: "an invited talk on science literacy",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/invited-SCNU2/";
        
      },
    },{id: "post-milestone-genesis-of-my-research-career",
      
        title: "[Milestone] Genesis of my research career",
      
      description: "my first scientific research paper",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/first-paper/";
        
      },
    },{id: "post-invited-talk-science-literacy-fundamentals-and-basics-in-natural-science-research",
      
        title: "[Invited Talk] Science Literacy: Fundamentals and basics in natural science research",
      
      description: "an invited talk on science literacy",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2017/invited-SCNU1/";
        
      },
    },{id: "post-archive-my-android-development",
      
        title: "[Archive] My Android development",
      
      description: "this is a post dedicated to my discontinued Android development projects",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/blog/2015/android-archive/";
        
      },
    },{id: "news-第十四届挑战杯广东大学生课外学术科研作品竞赛二等奖",
          title: '第十四届挑战杯广东大学生课外学术科研作品竞赛二等奖',
          description: "",
          section: "News",},{id: "news-刘颂豪院士科技创新奖特等奖2项-二等奖1项-三等奖1项",
          title: '刘颂豪院士科技创新奖特等奖2项、二等奖1项、三等奖1项',
          description: "",
          section: "News",},{id: "news-国家奖学金",
          title: '国家奖学金',
          description: "",
          section: "News",},{id: "news-第二十八届北京大学挑战杯五四青年科学奖竞赛一等奖",
          title: '第二十八届北京大学挑战杯五四青年科学奖竞赛一等奖',
          description: "",
          section: "News",},{id: "news-国家奖学金",
          title: '国家奖学金',
          description: "",
          section: "News",},{id: "news-最佳演讲奖-icait-2020会议-澳门特别行政区",
          title: '最佳演讲奖， ICAIT 2020会议，澳门特别行政区',
          description: "",
          section: "News",},{id: "news-激光与光子学评论-近零介电常数光纤激光器的类-超导量子干涉仪行为-实验室网站新闻",
          title: '《激光与光子学评论》：近零介电常数光纤激光器的类-超导量子干涉仪行为 实验室网站新闻',
          description: "",
          section: "News",},{id: "news-自然-通讯-近零介电常数条件下热光效应增强方面取得研究突破-北京大学深圳研究生院新闻稿-北京大学信息工程学院新闻稿-施普林格-自然研究社区博客",
          title: '《自然·通讯》：近零介电常数条件下热光效应增强方面取得研究突破 北京大学深圳研究生院新闻稿 北京大学信息工程学院新闻稿 施普林格-自然研究社区博客',
          description: "",
          section: "News",},{id: "news-最佳学生论文奖一等奖-大会仅5位-piers-2024会议-四川成都",
          title: '最佳学生论文奖一等奖（大会仅5位），PIERS 2024会议，四川成都',
          description: "",
          section: "News",},{id: "news-2023年度国家优秀自费留学生奖学金-瑞士馆区仅17名获奖者",
          title: '2023年度国家优秀自费留学生奖学金（瑞士馆区仅17名获奖者）',
          description: "",
          section: "News",},{id: "news-acs光子学-腔内近零介电常数双程频移存算一体激光系统取得研究突破-瑞士洛桑联邦理工大学-epfl-新闻稿-期刊封面文章",
          title: '《ACS光子学》：腔内近零介电常数双程频移存算一体激光系统取得研究突破 瑞士洛桑联邦理工大学（EPFL）新闻稿, 期刊封面文章',
          description: "",
          section: "News",},{id: "projects-ai-辅助光子学及面向ai应用的光子学",
          title: 'AI 辅助光子学及面向AI应用的光子学',
          description: "算法驱动的优化与设计",
          section: "Projects",handler: () => {
              window.location.href = "/projects/proj_ai_photonics/";
            },},{id: "projects-近零折射率非线性光学-微纳光器件与片上集成",
          title: '近零折射率非线性光学、微纳光器件与片上集成',
          description: "探索微纳、非线性与集成光学的边界",
          section: "Projects",handler: () => {
              window.location.href = "/projects/proj_enz_photonics/";
            },},{id: "projects-新型集成光子纳米器件-芯片和光路",
          title: '新型集成光子纳米器件、芯片和光路',
          description: "指尖尺度的非传统光与物质相互作用",
          section: "Projects",handler: () => {
              window.location.href = "/projects/proj_integrated_optics/";
            },},{id: "projects-非厄米拓扑互联光路光网络",
          title: '非厄米拓扑互联光路光网络',
          description: "来自量子力学的启示",
          section: "Projects",handler: () => {
              window.location.href = "/projects/proj_pt_topo/";
            },},{id: "projects-无源辐射冷却光子结构设计",
          title: '无源辐射冷却光子结构设计',
          description: "用于能源和可持续性的纳米光子设计",
          section: "Projects",handler: () => {
              window.location.href = "/projects/proj_radiative_cooling/";
            },},{id: "projects-非线性光纤中的频谱和脉冲压缩",
          title: '非线性光纤中的频谱和脉冲压缩',
          description: "更短、更快、更亮、更强",
          section: "Projects",handler: () => {
              window.location.href = "/projects/proj_spctral_compression/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
