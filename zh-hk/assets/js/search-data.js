
const currentUrl = window.location.href;
const siteUrl = "https://jiaye-wu.github.io"; 
let updatedUrl = currentUrl.replace("https://jiaye-wu.github.io", "");
if (currentUrl.length == updatedUrl.length && currentUrl.startsWith("http://127.0.0.1")) {
  const otherSiteUrl = siteUrl.replace("localhost", "127.0.0.1");
  updatedUrl = currentUrl.replace(otherSiteUrl + "", "");
}
if ("zh-hk".length > 0) {
  updatedUrl = updatedUrl.replace("/zh-hk", "");
}
// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-主頁",
    title: "主頁",
    section: "導航菜單",
    handler: () => {
      window.location.href = "/zh-hk/";
    },
  },{id: "nav-博客文章",
          title: "博客文章",
          description: "個人學術博客空間",
          section: "導航菜單",
          handler: () => {
            window.location.href = "/zh-hk/blog/";
          },
        },{id: "nav-科研成果",
          title: "科研成果",
          description: "科研成果以最近時間排序。列表由jekyll-scholar生成。",
          section: "導航菜單",
          handler: () => {
            window.location.href = "/zh-hk/publications/";
          },
        },{id: "nav-課題項目",
          title: "課題項目",
          description: "系統性、綜合性研究課題方向的集合",
          section: "導航菜單",
          handler: () => {
            window.location.href = "/zh-hk/projects/";
          },
        },{id: "nav-教研服務",
          title: "教研服務",
          description: "課程教學、講座、同行評議及編輯服務",
          section: "導航菜單",
          handler: () => {
            window.location.href = "/zh-hk/services/";
          },
        },{id: "dropdown-新聞列表",
              title: "新聞列表",
              description: "",
              section: "更多",
              handler: () => {
                window.location.href = "/zh-hk/news/";
              },
            },{id: "dropdown-相關鏈接",
              title: "相關鏈接",
              description: "",
              section: "更多",
              handler: () => {
                window.location.href = "/zh-hk/links/";
              },
            },{id: "dropdown-代碼倉庫",
              title: "代碼倉庫",
              description: "",
              section: "更多",
              handler: () => {
                window.location.href = "/zh-hk/repositories/";
              },
            },{id: "post-學術會議報告-acp-real-time-observation-of-ultrafast-thermo-optic-nonlinearity-in-time-varying-effective-epsilon-near-zero-media",
        
          title: "[學術會議報告] ACP: Real-Time Observation of Ultrafast Thermo-Optic Nonlinearity in Time-Varying Effective Epsilon-Near-Zero Media...",
        
        description: "在中國江蘇省蘇州市舉辦的ACP會議上作學術報告",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2025/conf-ACP/";
          
        },
      },{id: "post-邀請研討會-advances-in-fibre-based-amp-integrated-photonic-systems",
        
          title: '[邀請研討會] Advances in fibre-based &amp; integrated photonic systems <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "研討會邀請人：吳嘉野 博士；歡迎清華大學SIGS代表團訪問瑞士洛桑聯邦理工大學",
        section: "博文",
        handler: () => {
          
            window.open("https://memento.epfl.ch/event/advances-in-fibre-based-integrated-photonic-system/", "_blank");
          
        },
      },{id: "post-受邀研討會-epsilon-near-zero-photonics-crossroad-of-multidisciplinary-research",
        
          title: '[受邀研討會] Epsilon-Near-Zero Photonics: Crossroad of Multidisciplinary Research <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "受邀於香港科技大學（廣州）作研討會學術報告",
        section: "博文",
        handler: () => {
          
            window.open("https://mp.weixin.qq.com/s/fww4ghSyg3XZPu7PH-QjMA", "_blank");
          
        },
      },{id: "post-瑞士洛桑聯邦理工大學活動-nanophotonic-enabled-extra-and-intra-cavity-manipulation-of-ultrafast-optical-pulse-trains",
        
          title: '[瑞士洛桑聯邦理工大學活動] Nanophotonic-enabled extra- and intra-cavity manipulation of ultrafast optical pulse trains <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "公開答辯活動",
        section: "博文",
        handler: () => {
          
            window.open("https://memento.epfl.ch/event/nanophotonic-enabled-extra-and-intra-cavity-mani-2/", "_blank");
          
        },
      },{id: "post-期刊封面-acs光子學-intracavity-epsilon-near-zero-dual-range-frequency-switch",
        
          title: "[期刊封面] ACS光子學：Intracavity Epsilon-Near-Zero Dual-Range Frequency Switch",
        
        description: "Featured Journal Cover",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2025/cover-ACSP-cover/";
          
        },
      },{id: "post-檔案-文件管理強迫症福音",
        
          title: "[檔案] 文件管理強迫症福音",
        
        description: "經驗分享和個人筆記",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2025/blog-post-PC-trick01/";
          
        },
      },{id: "post-新聞稿-epfl-news-effiencient-epsilon-near-zero-intracavity-dual-range-frequency-shift",
        
          title: '[新聞稿] EPFL News: Effiencient epsilon-near-zero intracavity dual-range frequency shift <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "瑞士洛桑聯邦理工大學新聞稿",
        section: "博文",
        handler: () => {
          
            window.open("https://actu.epfl.ch/news/effiencient-epsilon-near-zero-intracavity-dual-r-2/", "_blank");
          
        },
      },{id: "post-學術會議報告-ipc-versatile-and-efficient-dual-range-frequency-shifts-by-intracavity-epsilon-near-zero-nanolayers",
        
          title: "[學術會議報告] IPC: Versatile and Efficient Dual-Range Frequency Shifts by Intracavity Epsilon-Near-Zero Nanolayers",
        
        description: "在意大利羅馬舉辦的IPC會議上作學術報告",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2024/conf-IPC/";
          
        },
      },{id: "post-檔案-在android平板電腦上運行linux桌面發行版",
        
          title: "[檔案] 在Android平板電腦上運行Linux桌面發行版",
        
        description: "在Android上運行Linux桌面的個人筆記",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2024/blog-Linux-on-Android/";
          
        },
      },{id: "post-pob-研討會-受邀報告-enhancement-of-linear-and-nonlinear-thermo-optic-effects-by-epsilon-near-zero-conditions",
        
          title: '[POB 研討會：受邀報告] Enhancement of linear and nonlinear thermo-optic effects by epsilon-near-zero conditions <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "瑞士洛桑聯邦理工大學光子學分會活動",
        section: "博文",
        handler: () => {
          
            window.open("https://memento.epfl.ch/event/pob-seminar-enhancement-of-linear-and-nonlinear-th/", "_blank");
          
        },
      },{id: "post-學術工具-quickphotonics項目",
        
          title: "[學術工具] QUICKphotonics項目",
        
        description: "基於Excel和MATLAB的光子學單位換算工具",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2024/dev-QUICKphotonics/";
          
        },
      },{id: "post-受邀講座-基於集成光芯片和微納光器件平臺的超快光脈衝腔外腔內操控",
        
          title: "[受邀講座] 基於集成光芯片和微納光器件平臺的超快光脈衝腔外腔內操控",
        
        description: "腔外與腔內脈衝操控系列受邀講座",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2024/invited-PKU/";
          
        },
      },{id: "post-學術會議報告-piers-epsilon-near-zero-enhancement-of-linear-and-nonlinear-thermo-optic-effects",
        
          title: "[學術會議報告] PIERS: Epsilon-near-zero Enhancement of Linear and Nonlinear Thermo-optic Effects",
        
        description: "在中國四川省成都市舉辦的PIERS會議上作學術報告",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2024/conf-PIERS/";
          
        },
      },{id: "post-光學前沿評論-熱光介電常數近零效應",
        
          title: '[光學前沿評論] 熱光介電常數近零效應 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "微信公眾號推送",
        section: "博文",
        handler: () => {
          
            window.open("https://mp.weixin.qq.com/s/JNNqS0skF1zTUaG5XaYGqg", "_blank");
          
        },
      },{id: "post-博客文章-施普林格-自然科研社區有關近期本人團隊-自然-通訊-研究的博客文章報道",
        
          title: "[博客文章] 施普林格·自然科研社區有關近期本人團隊《自然·通訊》研究的博客文章報道",
        
        description: "behind the paper series",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2024/blog-post/";
          
        },
      },{id: "post-新聞稿-信息工程學院李倩課題組與合作者在近零介電常數條件下熱光效應增強方面取得研究突破",
        
          title: '[新聞稿] 信息工程學院李倩課題組與合作者在近零介電常數條件下熱光效應增強方面取得研究突破 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "學院網站新聞稿",
        section: "博文",
        handler: () => {
          
            window.open("https://news.pkusz.edu.cn/info/1003/8146.htm", "_blank");
          
        },
      },{id: "post-新聞稿-nat-commun-信息工程學院李倩課題組與合作者在近零介電常數條件下熱光效應增強方面取得研究突破",
        
          title: '[新聞稿] Nat. Commun.| 信息工程學院李倩課題組與合作者在近零介電常數條件下熱光效應增強方面取得研究突破 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "學院網站新聞稿",
        section: "博文",
        handler: () => {
          
            window.open("https://www.ece.pku.edu.cn/info/1007/2725.htm", "_blank");
          
        },
      },{id: "post-博客文章轉載-towards-photonic-on-chip-integration-strong-linear-and-nonlinear-thermo-optic-effects-enhanced-by-near-zero-permittivity-on-a-nanolayer",
        
          title: '[博客文章轉載] Towards photonic on-chip integration: Strong linear and nonlinear thermo-optic effects enhanced by... <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "施普林格-自然研究社區《論文背後的故事》系列博客文章",
        section: "博文",
        handler: () => {
          
            window.open("https://communities.springernature.com/posts/towards-photonic-on-chip-integration-strong-linear-and-nonlinear-thermo-optic-effects-enhanced-by-near-zero-permittivity-on-a-nanolayer", "_blank");
          
        },
      },{id: "post-受邀講座-近零介電常數條件下的線性與非線性熱光效應增強",
        
          title: "[受邀講座] 近零介電常數條件下的線性與非線性熱光效應增強",
        
        description: "近零介電常數光子學系列受邀講座",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2023/invited-SIOM/";
          
        },
      },{id: "post-受邀講座-光與物質相互作用-集成光芯片與微納薄膜器件中超快光脈衝串的腔外腔內操控新技術",
        
          title: "[受邀講座] 光與物質相互作用：集成光芯片與微納薄膜器件中超快光脈衝串的腔外腔內操控新技術",
        
        description: "腔外與腔內脈衝操控系列受邀講座",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2023/invited-ETHZ/";
          
        },
      },{id: "post-光學前沿評論-腔內近零介電常數效應光纖激光器中類超導量子干涉儀行為的觀察",
        
          title: '[光學前沿評論] 腔內近零介電常數效應光纖激光器中類超導量子干涉儀行為的觀察 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "微信公眾號推送",
        section: "博文",
        handler: () => {
          
            window.open("https://mp.weixin.qq.com/s/4pYgeCCHyVhg7pzyQyMSsQ", "_blank");
          
        },
      },{id: "post-檔案-mendeley-desktop收藏",
        
          title: "[檔案] Mendeley Desktop收藏",
        
        description: "已停止更新的Mendely Desktop文獻管理軟件收藏檔案",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2023/Mendeley-Desktop/";
          
        },
      },{id: "post-新聞稿-北京大學李倩課題組-清華大學付紅巖課題組-lpr-近零介電常數光纖激光器的類-超導量子干涉儀行為",
        
          title: '[新聞稿] 北京大學李倩課題組、清華大學付紅巖課題組 LPR ：近零介電常數光纖激光器的類﹣超導量子干涉儀行為 <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "學院網站新聞稿",
        section: "博文",
        handler: () => {
          
            window.open("https://web.pkusz.edu.cn/lnfo/%e5%8c%97%e4%ba%ac%e5%a4%a7%e5%ad%a6%e6%9d%8e%e5%80%a9%e8%af%be%e9%a2%98%e7%bb%84%e3%80%81%e6%b8%85%e5%8d%8e%e5%a4%a7%e5%ad%a6%e4%bb%98%e7%ba%a2%e5%b2%a9%e8%af%be%e9%a2%98%e7%bb%84-lpr-%ef%bc%9a/", "_blank");
          
        },
      },{id: "post-學術會議報告-cleo-demonstration-of-temporal-talbot-effect-of-dark-pulse-trains",
        
          title: "[學術會議報告] CLEO: Demonstration of Temporal Talbot Effect of Dark Pulse Trains",
        
        description: "在美國加利福尼亞聖何塞舉辦的CLEO會議上作學術報告",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2022/conf-CLEO/";
          
        },
      },{id: "post-里程碑-一項交叉學科研究",
        
          title: "[里程碑] 一項交叉學科研究",
        
        description: "個人最喜愛的研究之一：一項交叉學科實驗",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2021/ENZ-SCF/";
          
        },
      },{id: "post-學術會議報告-icait-high-order-harmonic-generations-in-epsilon-near-zero-aluminum-doped-zinc-oxide-nanopyramid-array",
        
          title: "[學術會議報告] ICAIT: High-Order Harmonic Generations in Epsilon-Near-Zero Aluminum-Doped Zinc Oxide Nanopyramid Array",
        
        description: "在中國澳門特別行政區舉辦的ICAIT會議上作學術報告",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2020/conf-ICAIT/";
          
        },
      },{id: "post-學術會議報告-cleo-pr-precise-tuning-of-epsilon-near-zero-properties-in-indium-tin-oxide-nanolayer-by-supercritical-carbon-dioxide",
        
          title: "[學術會議報告] CLEO-PR: Precise Tuning of Epsilon-Near-Zero Properties in Indium Tin Oxide Nanolayer by...",
        
        description: "在澳大利亞悉尼舉辦的CLEO-PR會議上作學術報告",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2020/conf-CLEO-PR/";
          
        },
      },{id: "post-學術工具-ssprop-nfol項目",
        
          title: "[學術工具] SSPROP-NFOL項目",
        
        description: "基於MATLAB的光學分步傅里葉變換仿真學術工具",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2018/dev-SSPROP-NFOL-post/";
          
        },
      },{id: "post-受邀講座-科學素養-科研學習經驗分享與sci文獻檢索",
        
          title: "[受邀講座] 科學素養：科研學習經驗分享與SCI文獻檢索",
        
        description: "科學素養系列受邀講座",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2017/invited-SCNU2/";
          
        },
      },{id: "post-里程碑-我科研之路的開端",
        
          title: "[里程碑] 我科研之路的開端",
        
        description: "我的第一項研究",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2017/first-paper/";
          
        },
      },{id: "post-受邀講座-科學素養-自然科學類科研基礎知識",
        
          title: "[受邀講座] 科學素養：自然科學類科研基礎知識",
        
        description: "科學素養系列受邀講座",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2017/invited-SCNU1/";
          
        },
      },{id: "post-檔案-過往android開發歸檔",
        
          title: "[檔案] 過往Android開發歸檔",
        
        description: "此帖紀念過往的Android開發項目",
        section: "博文",
        handler: () => {
          
            window.location.href = "/zh-hk/blog/2015/android-archive/";
          
        },
      },{id: "news-第十四屆挑戰杯廣東大學生課外學術科研作品競賽二等獎",
          title: '第十四屆挑戰杯廣東大學生課外學術科研作品競賽二等獎',
          description: "",
          section: "新聞",},{id: "news-劉頌豪院士科技創新獎特等獎2項-二等獎1項-三等獎1項",
          title: '劉頌豪院士科技創新獎特等獎2項、二等獎1項、三等獎1項',
          description: "",
          section: "新聞",},{id: "news-國家獎學金",
          title: '國家獎學金',
          description: "",
          section: "新聞",},{id: "news-第二十八屆北京大學挑戰杯五四青年科學獎競賽一等獎",
          title: '第二十八屆北京大學挑戰杯五四青年科學獎競賽一等獎',
          description: "",
          section: "新聞",},{id: "news-國家獎學金",
          title: '國家獎學金',
          description: "",
          section: "新聞",},{id: "news-最佳演講獎-icait-2020會議-澳門特別行政區",
          title: '最佳演講獎， ICAIT 2020會議，澳門特別行政區',
          description: "",
          section: "新聞",},{id: "news-激光與光子學評論-近零介電常數光纖激光器的類-超導量子干涉儀行為-實驗室網站新聞",
          title: '《激光與光子學評論》：近零介電常數光纖激光器的類-超導量子干涉儀行為   實驗室網站新聞',
          description: "",
          section: "新聞",},{id: "news-自然-通訊-近零介電常數條件下熱光效應增強方面取得研究突破-北京大學深圳研究生院新聞稿-北京大學信息工程學院新聞稿-施普林格-自然研究社區博客",
          title: '《自然·通訊》：近零介電常數條件下熱光效應增強方面取得研究突破   北京大學深圳研究生院新聞稿   北京大學信息工程學院新聞稿  施普林格-自然研究社區博客',
          description: "",
          section: "新聞",},{id: "news-最佳學生論文獎一等獎-大會僅5位-piers-2024會議-四川成都",
          title: '最佳學生論文獎一等獎（大會僅5位），PIERS 2024會議，四川成都',
          description: "",
          section: "新聞",},{id: "news-2023年度國家優秀自費留學生獎學金-瑞士館區僅17名獲獎者",
          title: '2023年度國家優秀自費留學生獎學金（瑞士館區僅17名獲獎者）',
          description: "",
          section: "新聞",},{id: "news-acs光子學-腔內近零介電常數雙程頻移存算一體激光系統取得研究突破-瑞士洛桑聯邦理工大學-epfl-新聞稿-期刊封面文章",
          title: '《ACS光子學》：腔內近零介電常數雙程頻移存算一體激光系統取得研究突破   瑞士洛桑聯邦理工大學（EPFL）新聞稿   期刊封面文章',
          description: "",
          section: "新聞",},{id: "projects-ai-輔助光子學及面向ai應用的光子學",
          title: 'AI 輔助光子學及面向AI應用的光子學',
          description: "算法驅動的優化與設計",
          section: "課題",handler: () => {
              window.location.href = "/zh-hk/projects/zh-hk/proj_ai_photonics/";
            },},{id: "projects-近零折射率非線性光學-微納光器件與片上集成",
          title: '近零折射率非線性光學、微納光器件與片上集成',
          description: "探索微納、非線性與集成光學的邊界",
          section: "課題",handler: () => {
              window.location.href = "/zh-hk/projects/zh-hk/proj_enz_photonics/";
            },},{id: "projects-新型集成光子納米器件-芯片和光路",
          title: '新型集成光子納米器件、芯片和光路',
          description: "指尖尺度的非傳統光與物質相互作用",
          section: "課題",handler: () => {
              window.location.href = "/zh-hk/projects/zh-hk/proj_integrated_optics/";
            },},{id: "projects-非厄米拓撲互聯光路光網絡",
          title: '非厄米拓撲互聯光路光網絡',
          description: "來自量子力學的啟示",
          section: "課題",handler: () => {
              window.location.href = "/zh-hk/projects/zh-hk/proj_pt_topo/";
            },},{id: "projects-無源輻射冷卻光子結構設計",
          title: '無源輻射冷卻光子結構設計',
          description: "用於能源和可持續性的納米光子設計",
          section: "課題",handler: () => {
              window.location.href = "/zh-hk/projects/zh-hk/proj_radiative_cooling/";
            },},{id: "projects-非線性光纖中的頻譜和脈衝壓縮",
          title: '非線性光纖中的頻譜和脈衝壓縮',
          description: "更短、更快、更亮、更強",
          section: "課題",handler: () => {
              window.location.href = "/zh-hk/projects/zh-hk/proj_spctral_compression/";
            },},{
        id: 'social-email',
        title: '發郵件',
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
          section: '語言',
          handler: () => {
            window.location.href = "" + updatedUrl;
          },
        },{
          id: 'lang-zh-cn',
          title: 'zh-cn',
          section: '語言',
          handler: () => {
            window.location.href = "/zh-cn" + updatedUrl;
          },
        },{
      id: 'light-theme',
      title: '切換到亮色主題',
      description: '切換本站為亮色主題',
      section: '主題',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: '切換到暗色主題',
      description: '切換本站為暗色主題',
      section: '主題',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: '切換默認主題',
      description: '切換本站為默認主題',
      section: '主題',
      handler: () => {
        setThemeSetting("system");
      },
    },];
