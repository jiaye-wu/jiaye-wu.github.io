
const currentUrl = window.location.href;
const siteUrl = "https://jiaye-wu.github.io"; 
let updatedUrl = currentUrl.replace("https://jiaye-wu.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("zh-cn".length > 0) {
  updatedUrl = updatedUrl.replace("/zh-cn", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-主页",
    title: "主页",
    section: "导航菜单",
    handler: () => {
      window.location.href = "/zh-cn/";
    },
  },{id: "nav-博客文章",
          title: "博客文章",
          description: "个人学术博客空间",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/blog/";
          },
        },{id: "nav-科研成果",
          title: "科研成果",
          description: "科研成果以最近时间排序。列表由jekyll-scholar生成。",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/publications/";
          },
        },{id: "nav-课题项目",
          title: "课题项目",
          description: "系统性、综合性研究课题方向的集合",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/projects/";
          },
        },{id: "nav-教研服务",
          title: "教研服务",
          description: "课程教学、讲座、同行评议及编辑服务",
          section: "导航菜单",
          handler: () => {
            window.location.href = "/zh-cn/services/";
          },
        },{id: "dropdown-新闻列表",
              title: "新闻列表",
              description: "",
              section: "更多",
              handler: () => {
                window.location.href = "/zh-cn";
              },
            },{id: "dropdown-相关链接",
              title: "相关链接",
              description: "",
              section: "更多",
              handler: () => {
                window.location.href = "/zh-cn";
              },
            },{id: "dropdown-代码仓库",
              title: "代码仓库",
              description: "",
              section: "更多",
              handler: () => {
                window.location.href = "/zh-cn";
              },
            },{id: "post-epfl-event-nanophotonic-enabled-extra-and-intra-cavity-manipulation-of-ultrafast-optical-pulse-trains",
      
        title: '[EPFL Event] Nanophotonic-enabled extra- and intra-cavity manipulation of ultrafast optical pulse trains <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "Public Defence Event",
      section: "博文",
      handler: () => {
        
          window.open("https://memento.epfl.ch/event/nanophotonic-enabled-extra-and-intra-cavity-mani-2/", "_blank");
        
      },
    },{id: "post-期刊封面-acs光子学-intracavity-epsilon-near-zero-dual-range-frequency-switch",
      
        title: "[期刊封面] ACS光子学：Intracavity Epsilon-Near-Zero Dual-Range Frequency Switch",
      
      description: "Featured Journal Cover",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2025/cover-ACSP-cover/";
        
      },
    },{id: "post-档案-文件管理强迫症福音",
      
        title: "[档案] 文件管理强迫症福音",
      
      description: "经验分享和个人笔记",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2025/blog-post-PC-trick01/";
        
      },
    },{id: "post-news-epfl-news-effiencient-epsilon-near-zero-intracavity-dual-range-frequency-shift",
      
        title: '[News] EPFL News: Effiencient epsilon-near-zero intracavity dual-range frequency shift <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "EPFL News Report",
      section: "博文",
      handler: () => {
        
          window.open("https://actu.epfl.ch/news/effiencient-epsilon-near-zero-intracavity-dual-r-2/", "_blank");
        
      },
    },{id: "post-学术会议报告-ipc-versatile-and-efficient-dual-range-frequency-shifts-by-intracavity-epsilon-near-zero-nanolayers",
      
        title: "[学术会议报告] IPC: Versatile and Efficient Dual-Range Frequency Shifts by Intracavity Epsilon-Near-Zero Nanolayers",
      
      description: "在意大利罗马举办的IPC会议上作学术报告",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2024/conf-IPC/";
        
      },
    },{id: "post-档案-在android平板电脑上运行linux桌面发行版",
      
        title: "[档案] 在Android平板电脑上运行Linux桌面发行版",
      
      description: "在Android上运行Linux桌面的个人笔记",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2024/blog-Linux-on-Android/";
        
      },
    },{id: "post-pob-seminar-enhancement-of-linear-and-nonlinear-thermo-optic-effects-by-epsilon-near-zero-conditions",
      
        title: '[POB Seminar] Enhancement of linear and nonlinear thermo-optic effects by epsilon-near-zero conditions <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "EPFL Photonics Chapter event",
      section: "博文",
      handler: () => {
        
          window.open("https://memento.epfl.ch/event/pob-seminar-enhancement-of-linear-and-nonlinear-th/", "_blank");
        
      },
    },{id: "post-学术工具-quickphotonics项目",
      
        title: "[学术工具] QUICKphotonics项目",
      
      description: "基于Excel和MATLAB的光子学单位换算工具",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2024/dev-QUICKphotonics/";
        
      },
    },{id: "post-受邀讲座-基于集成光芯片和微纳光器件平台的超快光脉冲腔外腔内操控",
      
        title: "[受邀讲座] 基于集成光芯片和微纳光器件平台的超快光脉冲腔外腔内操控",
      
      description: "腔外与腔内脉冲操控系列受邀讲座",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2024/invited-PKU/";
        
      },
    },{id: "post-学术会议报告-piers-epsilon-near-zero-enhancement-of-linear-and-nonlinear-thermo-optic-effects",
      
        title: "[学术会议报告] PIERS: Epsilon-near-zero Enhancement of Linear and Nonlinear Thermo-optic Effects",
      
      description: "在中国四川省成都市举办的PIERS会议上作学术报告",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2024/conf-PIERS/";
        
      },
    },{id: "post-光学前沿评论-热光介电常数近零效应",
      
        title: '[光学前沿评论] 热光介电常数近零效应 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "微信公众号推送",
      section: "博文",
      handler: () => {
        
          window.open("https://mp.weixin.qq.com/s/JNNqS0skF1zTUaG5XaYGqg", "_blank");
        
      },
    },{id: "post-博客文章-施普林格-自然科研社区有关近期本人团队-自然-通讯-研究的博客文章报道",
      
        title: "[博客文章] 施普林格·自然科研社区有关近期本人团队《自然·通讯》研究的博客文章报道",
      
      description: "behind the paper series",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2024/blog-post/";
        
      },
    },{id: "post-新闻稿-信息工程学院李倩课题组与合作者在近零介电常数条件下热光效应增强方面取得研究突破",
      
        title: '[新闻稿] 信息工程学院李倩课题组与合作者在近零介电常数条件下热光效应增强方面取得研究突破 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "学院网站新闻稿",
      section: "博文",
      handler: () => {
        
          window.open("https://news.pkusz.edu.cn/info/1003/8146.htm", "_blank");
        
      },
    },{id: "post-新闻稿-nat-commun-信息工程学院李倩课题组与合作者在近零介电常数条件下热光效应增强方面取得研究突破",
      
        title: '[新闻稿] Nat. Commun.| 信息工程学院李倩课题组与合作者在近零介电常数条件下热光效应增强方面取得研究突破 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "学院网站新闻稿",
      section: "博文",
      handler: () => {
        
          window.open("https://www.ece.pku.edu.cn/info/1007/2725.htm", "_blank");
        
      },
    },{id: "post-towards-photonic-on-chip-integration-strong-linear-and-nonlinear-thermo-optic-effects-enhanced-by-near-zero-permittivity-on-a-nanolayer",
      
        title: 'Towards photonic on-chip integration: Strong linear and nonlinear thermo-optic effects enhanced by near-zero... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "behind the paper posts at Springer-Nature Research Community",
      section: "博文",
      handler: () => {
        
          window.open("https://communities.springernature.com/posts/towards-photonic-on-chip-integration-strong-linear-and-nonlinear-thermo-optic-effects-enhanced-by-near-zero-permittivity-on-a-nanolayer", "_blank");
        
      },
    },{id: "post-受邀讲座-近零介电常数条件下的线性与非线性热光效应增强",
      
        title: "[受邀讲座] 近零介电常数条件下的线性与非线性热光效应增强",
      
      description: "近零介电常数光子学系列受邀讲座",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2023/invited-SIOM/";
        
      },
    },{id: "post-受邀讲座-光与物质相互作用-集成光芯片与微纳薄膜器件中超快光脉冲串的腔外腔内操控新技术",
      
        title: "[受邀讲座] 光与物质相互作用：集成光芯片与微纳薄膜器件中超快光脉冲串的腔外腔内操控新技术",
      
      description: "腔外与腔内脉冲操控系列受邀讲座",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2023/invited-ETHZ/";
        
      },
    },{id: "post-光学前沿评论-腔内近零介电常数效应光纤激光器中类超导量子干涉仪行为的观察",
      
        title: '[光学前沿评论] 腔内近零介电常数效应光纤激光器中类超导量子干涉仪行为的观察 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "微信公众号推送",
      section: "博文",
      handler: () => {
        
          window.open("https://mp.weixin.qq.com/s/4pYgeCCHyVhg7pzyQyMSsQ", "_blank");
        
      },
    },{id: "post-档案-mendeley-desktop收藏",
      
        title: "[档案] Mendeley Desktop收藏",
      
      description: "已停止更新的Mendely Desktop文献管理软件收藏档案",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2023/Mendeley-Desktop/";
        
      },
    },{id: "post-新闻稿-北京大学李倩课题组-清华大学付红岩课题组-lpr-近零介电常数光纤激光器的类-超导量子干涉仪行为",
      
        title: '[新闻稿] 北京大学李倩课题组、清华大学付红岩课题组 LPR ：近零介电常数光纤激光器的类﹣超导量子干涉仪行为 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
      
      description: "学院网站新闻稿",
      section: "博文",
      handler: () => {
        
          window.open("https://web.pkusz.edu.cn/lnfo/%e5%8c%97%e4%ba%ac%e5%a4%a7%e5%ad%a6%e6%9d%8e%e5%80%a9%e8%af%be%e9%a2%98%e7%bb%84%e3%80%81%e6%b8%85%e5%8d%8e%e5%a4%a7%e5%ad%a6%e4%bb%98%e7%ba%a2%e5%b2%a9%e8%af%be%e9%a2%98%e7%bb%84-lpr-%ef%bc%9a/", "_blank");
        
      },
    },{id: "post-学术会议报告-cleo-demonstration-of-temporal-talbot-effect-of-dark-pulse-trains",
      
        title: "[学术会议报告] CLEO: Demonstration of Temporal Talbot Effect of Dark Pulse Trains",
      
      description: "在美国加利福尼亚圣何塞举办的CLEO会议上作学术报告",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2022/conf-CLEO/";
        
      },
    },{id: "post-里程碑-一项交叉学科研究",
      
        title: "[里程碑] 一项交叉学科研究",
      
      description: "个人最喜爱的研究之一：一项交叉学科实验",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2021/ENZ-SCF/";
        
      },
    },{id: "post-学术会议报告-icait-high-order-harmonic-generations-in-epsilon-near-zero-aluminum-doped-zinc-oxide-nanopyramid-array",
      
        title: "[学术会议报告] ICAIT: High-Order Harmonic Generations in Epsilon-Near-Zero Aluminum-Doped Zinc Oxide Nanopyramid Array",
      
      description: "在中国澳门特别行政区举办的ICAIT会议上作学术报告",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2020/conf-ICAIT/";
        
      },
    },{id: "post-学术会议报告-cleo-pr-precise-tuning-of-epsilon-near-zero-properties-in-indium-tin-oxide-nanolayer-by-supercritical-carbon-dioxide",
      
        title: "[学术会议报告] CLEO-PR: Precise Tuning of Epsilon-Near-Zero Properties in Indium Tin Oxide Nanolayer by...",
      
      description: "在澳大利亚悉尼举办的CLEO-PR会议上作学术报告",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2020/conf-CLEO-PR/";
        
      },
    },{id: "post-学术工具-ssprop-nfol项目",
      
        title: "[学术工具] SSPROP-NFOL项目",
      
      description: "基于MATLAB的光学分步傅里叶变换仿真学术工具",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2018/dev-SSPROP-NFOL-post/";
        
      },
    },{id: "post-受邀讲座-科学素养-科研学习经验分享与sci文献检索",
      
        title: "[受邀讲座] 科学素养：科研学习经验分享与SCI文献检索",
      
      description: "科学素养系列受邀讲座",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2017/invited-SCNU2/";
        
      },
    },{id: "post-里程碑-我科研之路的开端",
      
        title: "[里程碑] 我科研之路的开端",
      
      description: "我的第一项研究",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2017/first-paper/";
        
      },
    },{id: "post-受邀讲座-科学素养-自然科学类科研基础知识",
      
        title: "[受邀讲座] 科学素养：自然科学类科研基础知识",
      
      description: "科学素养系列受邀讲座",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2017/invited-SCNU1/";
        
      },
    },{id: "post-档案-过往android开发归档",
      
        title: "[档案] 过往Android开发归档",
      
      description: "此帖纪念过往的Android开发项目",
      section: "博文",
      handler: () => {
        
          window.location.href = "/zh-cn/blog/2015/android-archive/";
        
      },
    },{id: "news-第十四届挑战杯广东大学生课外学术科研作品竞赛二等奖",
          title: '第十四届挑战杯广东大学生课外学术科研作品竞赛二等奖',
          description: "",
          section: "新闻",},{id: "news-刘颂豪院士科技创新奖特等奖2项-二等奖1项-三等奖1项",
          title: '刘颂豪院士科技创新奖特等奖2项、二等奖1项、三等奖1项',
          description: "",
          section: "新闻",},{id: "news-国家奖学金",
          title: '国家奖学金',
          description: "",
          section: "新闻",},{id: "news-第二十八届北京大学挑战杯五四青年科学奖竞赛一等奖",
          title: '第二十八届北京大学挑战杯五四青年科学奖竞赛一等奖',
          description: "",
          section: "新闻",},{id: "news-国家奖学金",
          title: '国家奖学金',
          description: "",
          section: "新闻",},{id: "news-最佳演讲奖-icait-2020会议-澳门特别行政区",
          title: '最佳演讲奖， ICAIT 2020会议，澳门特别行政区',
          description: "",
          section: "新闻",},{id: "news-激光与光子学评论-近零介电常数光纤激光器的类-超导量子干涉仪行为-实验室网站新闻",
          title: '《激光与光子学评论》：近零介电常数光纤激光器的类-超导量子干涉仪行为 实验室网站新闻',
          description: "",
          section: "新闻",},{id: "news-自然-通讯-近零介电常数条件下热光效应增强方面取得研究突破-北京大学深圳研究生院新闻稿-北京大学信息工程学院新闻稿-施普林格-自然研究社区博客",
          title: '《自然·通讯》：近零介电常数条件下热光效应增强方面取得研究突破 北京大学深圳研究生院新闻稿 北京大学信息工程学院新闻稿 施普林格-自然研究社区博客',
          description: "",
          section: "新闻",},{id: "news-最佳学生论文奖一等奖-大会仅5位-piers-2024会议-四川成都",
          title: '最佳学生论文奖一等奖（大会仅5位），PIERS 2024会议，四川成都',
          description: "",
          section: "新闻",},{id: "news-2023年度国家优秀自费留学生奖学金-瑞士馆区仅17名获奖者",
          title: '2023年度国家优秀自费留学生奖学金（瑞士馆区仅17名获奖者）',
          description: "",
          section: "新闻",},{id: "news-acs光子学-腔内近零介电常数双程频移存算一体激光系统取得研究突破-瑞士洛桑联邦理工大学-epfl-新闻稿-期刊封面文章",
          title: '《ACS光子学》：腔内近零介电常数双程频移存算一体激光系统取得研究突破 瑞士洛桑联邦理工大学（EPFL）新闻稿, 期刊封面文章',
          description: "",
          section: "新闻",},{id: "projects-ai-辅助光子学及面向ai应用的光子学",
          title: 'AI 辅助光子学及面向AI应用的光子学',
          description: "算法驱动的优化与设计",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/proj_ai_photonics/";
            },},{id: "projects-近零折射率非线性光学-微纳光器件与片上集成",
          title: '近零折射率非线性光学、微纳光器件与片上集成',
          description: "探索微纳、非线性与集成光学的边界",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/proj_enz_photonics/";
            },},{id: "projects-新型集成光子纳米器件-芯片和光路",
          title: '新型集成光子纳米器件、芯片和光路',
          description: "指尖尺度的非传统光与物质相互作用",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/proj_integrated_optics/";
            },},{id: "projects-非厄米拓扑互联光路光网络",
          title: '非厄米拓扑互联光路光网络',
          description: "来自量子力学的启示",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/proj_pt_topo/";
            },},{id: "projects-无源辐射冷却光子结构设计",
          title: '无源辐射冷却光子结构设计',
          description: "用于能源和可持续性的纳米光子设计",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/proj_radiative_cooling/";
            },},{id: "projects-非线性光纤中的频谱和脉冲压缩",
          title: '非线性光纤中的频谱和脉冲压缩',
          description: "更短、更快、更亮、更强",
          section: "课题",handler: () => {
              window.location.href = "/zh-cn/projects/proj_spctral_compression/";
            },},{
        id: 'social-email',
        title: '发邮件',
        section: '社交',
        handler: () => {
          window.open("mailto:%6A%69%61%79%65.%77%75@%65%70%66%6C.%63%68", "_blank");
        },
      },{
        id: 'social-facebook',
        title: 'Facebook',
        section: '社交',
        handler: () => {
          window.open("https://facebook.com/terence.jiaye.wu", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: '社交',
        handler: () => {
          window.open("https://github.com/jiaye-wu", "_blank");
        },
      },{
        id: 'social-ieee',
        title: 'IEEE Xplore',
        section: '社交',
        handler: () => {
          window.open("https://ieeexplore.ieee.org/author/37087502244/", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: '社交',
        handler: () => {
          window.open("https://www.linkedin.com/in/jiayewu", "_blank");
        },
      },{
        id: 'social-orcid',
        title: 'ORCID',
        section: '社交',
        handler: () => {
          window.open("https://orcid.org/0000-0002-0650-1274", "_blank");
        },
      },{
        id: 'social-publons',
        title: 'Publons',
        section: '社交',
        handler: () => {
          window.open("https://publons.com/a/O-4210-2018/", "_blank");
        },
      },{
        id: 'social-researchgate',
        title: 'ResearchGate',
        section: '社交',
        handler: () => {
          window.open("https://www.researchgate.net/profile/Jiaye_Wu/", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: '社交',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: '社交',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=D2n8tswAAAAJ", "_blank");
        },
      },{
        id: 'social-scopus',
        title: 'Scopus',
        section: '社交',
        handler: () => {
          window.open("https://www.scopus.com/authid/detail.uri?authorId=57196026613", "_blank");
        },
      },{
        id: 'social-work',
        title: 'Work',
        section: '社交',
        handler: () => {
          window.open("https://people.epfl.ch/jiaye.wu?lang=en", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: '社交',
        handler: () => {
          window.open("https://twitter.com/jywu_photonics", "_blank");
        },
      },{
        id: 'social-zotero',
        title: 'Zotero',
        section: '社交',
        handler: () => {
          window.open("https://www.zotero.org/jiayewu", "_blank");
        },
      },{
          id: 'lang-en-us',
          title: 'en-us',
          section: '语言',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '切换到亮色主题',
      description: '切换本站为亮色主题',
      section: '主题',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '切换到暗色主题',
      description: '切换本站为暗色主题',
      section: '主题',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '切换默认主题',
      description: '切换本站为默认主题',
      section: '主题',
      handler: () => {
        setThemeSetting("system");
      },
    },];
