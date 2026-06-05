---
page_id: services
layout: page
permalink: /services/
title: 教研服務
description: <a href='/services/#教學課程'>課程教學</a>、<a href='/services/#受邀講座'>受邀講座</a>、<a href='/services/#編輯服務'>編輯服務</a>、<a href='/services/#學術兼職'>學術兼職</a>、<a href='/services/#同行評議'>同行評議</a>
nav: true
nav_order: 4
---

## 教學課程

<br>

<h3 style="color: #660974;" id="cityu-dg"><a href="https://www.cityu-dg.edu.cn/zh/home.html"><img src="/assets/img/university_logos/CityUHK-DG.png" style="height: 2em; "></a></h3>

<!-- abc -->
{% include info_card_service.liquid 
   name="課程待分配，佔位標籤" 
   subtitle="教師（時間待定）" 
   badge="abc" 
   description1="X 學分碩士課程。任課：吳嘉野 助理教授"
   description2=""
%}

<br>

<h3 style="color: #ff0000;" id="epfl"><a href="https://www.epfl.ch/"><img src="/assets/img/university_logos/EPFL-long.png" style="height: 1.5em; "></a></h3>

<!-- EE-440 -->
{% capture EE440_coursebook %}
[課程介紹](https://edu.epfl.ch/coursebook/en/photonic-systems-and-technology-EE-440)
{% endcapture %}

{% include info_card_service.liquid 
   name="光子學系統與技術" 
   subtitle="教學助理（2022 及 2024 春學期）" 
   badge="EE-440" 
   description1="4 ECTS 學分碩士課程。任課：Camille-Sophie Brès 副教授"
   description2=EE440_coursebook
%}

<!-- BIOENG-445 -->
{% capture BIOENG445_coursebook %}
[課程介紹](https://edu.epfl.ch/coursebook/en/biomedical-optics-BIOENG-445)
{% endcapture %}

{% include info_card_service.liquid 
   name="生物醫學光學" 
   subtitle="教學助理（2022 及 2023 秋學期）" 
   badge="BIOENG-445" 
   description1="3 ECTS 學分碩士課程。任課：Georges Wagnières 博士"
   description2=BIOENG445_coursebook
%}

<br>

<h3 style="color: #94070a;" id="pku"><a href="https://www.pku.edu.cn/"><img src="/assets/img/university_logos/PKU.png" style="height: 2em; "></a></h3>

<!-- 04711202 -->
{% include info_card_service.liquid 
   name="光纖通信" 
   subtitle="教學助理（2019 春學期）" 
   badge="04711202" 
   description1="3 學分碩士課程。任課：李倩 副教授"
   description2=""
%}

<!-- 04711182 -->
{% include info_card_service.liquid 
   name="光電子學" 
   subtitle="教學助理（2018 秋學期）" 
   badge="04711182" 
   description1="3 學分碩士課程。任課：李倩 副教授"
   description2=""
%}

<br>

<h3 style="color: #124168;" id="scnu"><a href="https://www.scnu.edu.cn/"><img src="/assets/img/university_logos/SCNU.png" style="height: 2em; "></a></h3>

<!-- 41E42780 -->
{% include info_card_service.liquid 
   name="高級英語" 
   subtitle="教學助理（2015 春學期）" 
   badge="41E42780" 
   description1="2 學分本科課程。任課：George Mckibbens 老師"
   description2=""
%}

<br>

## 受邀講座

### 科研院校

{% capture talk_ethz %}
- [2023年11月19日：光與物質相互作用：集成光芯片與微納薄膜器件中超快光脈衝串的腔外腔內操控新技術](/blog/2023/invited-ETHZ/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="瑞士蘇黎世聯邦理工大學（ETH Zürich）" 
   role="受邀研討會" 
   badge="ETHZ" 
   image="/assets/img/university_logos/ETHZ.png"
   description=talk_ethz
%}

{% capture talk_epfl %}
- [2025年04月10日：_Nanophotonic-enabled extra- and intra-cavity manipulation of ultrafast optical pulse trains_](/blog/2025/news-EPFL-Public-Defence/)
- [2024年09月11日：_Enhancement of linear and nonlinear thermo-optic effects by epsilon-near-zero conditions_](/blog/2024/invited-EPFL/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="瑞士洛桑聯邦理工大學（EPFL）" 
   role="受邀研討會" 
   badge="EPFL" 
   image="/assets/img/university_logos/EPFL-H.png"
   description=talk_epfl
%}

{% capture talk_tsinghua %}
- [2026年04月10日：新型時域泰伯效應及其片上集成](/blog/2026/invited-THU/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="清華大學" 
   role="受邀研討會" 
   badge="THU" 
   image="/assets/img/university_logos/THU-Alt.png"
   description=talk_tsinghua
%}

{% capture talk_pku %}
- [2024年05月07日：基於集成光芯片和微納光器件平臺的超快光脈衝腔外腔內操控](/blog/2024/invited-PKU/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="北京大學" 
   role="受邀研討會" 
   badge="PKU" 
   image="/assets/img/university_logos/PKU.png"
   description=talk_pku
%}

{% capture talk_hkustgz %}
- [2025年08月12日： _Epsilon-Near-Zero Photonics: Crossroad of Multidisciplinary Research_](/blog/2025/invited-HKUSTGZ-AMAT/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="香港科技大學（廣州）" 
   role="受邀研討會" 
   badge="HKUST-GZ" 
   image="/assets/img/university_logos/HKUST-GZ.png"
   description=talk_hkustgz
%}

{% capture talk_siom %}
- [2023年12月26日：近零介電常數條件下的線性與非線性熱光效應增強](/blog/2023/invited-SIOM/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="中國科學院上海光學精密機械研究所" 
   role="受邀研討會" 
   badge="CAS-SIOM" 
   image="/assets/img/university_logos/CAS.png"
   description=talk_siom
%}

{% capture talk_scnu %}
- [2017年10月11日：科學素養：科研學習經驗分享與SCI文獻檢索](/blog/2017/invited-SCNU2/)
- [2017年03月21日：科學素養：自然科學類科研基礎知識](/blog/2017/invited-SCNU1/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="華南師範大學" 
   role="受邀講座" 
   badge="SCNU" 
   image="/assets/img/university_logos/SCNU.png"
   description=talk_scnu
%}

<br>

### 學術會議

{% capture talk_piers %}
- [2026年7月28日： _Ultrafast Thermo-optic Nonlinearity in Time-varying Epsilon-Near-Zero Interfaces_, PIERS 2026, 中國 蘇州](/blog/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="PhotonIcs and Electromagnetics Research Symposium / Progress In Electromagnetics Research Symposium (PIERS)" 
   role="邀請報告" 
   badge="PIERS" 
   image="/assets/img/publication_preview/PIERS.png"
   description=talk_piers
%}

<br>

## 編輯服務

<br>

## 學術兼職

<h3 style="color: #000000;" id="optica"><a href="https://www.optica.org/membership/"><img src="/assets/img/society_logos/OPTICA.png" style="height: 1.8em; "></a></h3>

<!--OPTICA-->
{% capture OPTICAL %}
**主席**，OPTICA北京大學深圳研究生院學生分會<br>
**副主席**，OPTICA北京大學深圳研究生院學生分會<br>
**秘書長**，OPTICA北京大學深圳研究生院學生分會<br>
**分會成員**，瑞士洛桑聯邦理工大學光子學分會（EPC）<br>
**分會成員**，OPTICA北京大學深圳研究生院學生分會<br>
**分會成員**，OSA華南師範大學學生分會<br>
{% endcapture %}

{% capture OPTICAR %}
2019-2020<br>
2020-2021<br>
2018-2019<br>
2021-2026<br>
2018-2021<br>
2017-2018<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="OPTICA（原美國光學學會）" 
   subtitle="青年會員" 
   badge="OPTICA" 
   description1=OPTICAL
   description2=OPTICAR
%}

<br>

<h3 style="color: #031752;" id="ips"><a href="https://ieeephotonics.org/"><img src="/assets/img/society_logos/IPS.png" style="height: 2.2em; "></a></h3>

<!--IPS-->
{% capture IPSL %}
**主席（創始）**，IEEE光子學會北京大學深圳研究生院學生分會<br>
**分會成員**，IEEE光子學會北京大學深圳研究生院學生分會<br>
{% endcapture %}

{% capture IPSR %}
2019-2021<br>
2019-2021<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="電氣電子工程師協會光子學會" 
   subtitle="會員" 
   badge="IPS" 
   description1=IPSL
   description2=IPSR
%}

<br>

<h3 style="color: #ff7547;" id="elsevierap"><a href="https://www.elsevier.com/"><img src="/assets/img/society_logos/Elsevier.png" style="height: 2em; "></a></h3>

<!--Elsevier-->
{% capture ELSL %}
**成員**，愛思唯爾顧問委員會<br>
{% endcapture %}

{% capture ELSR %}
2022-至今<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="愛思唯爾顧問委員會" 
   subtitle="成員" 
   badge="Elsevier" 
   description1=ELSL
   description2=ELSR
%}

<br>

<h3 style="color: #ff0000;" id="edpo"><a href="https://www.epfl.ch/education/phd/edpo-photonics/"><img src="/assets/img/university_logos/EPFL-long.png" style="height: 1.5em; "></a></h3>

<!--EDPO-->
{% capture EDPOL %}
**成員**，瑞士洛桑聯邦理工大學EDPO光子學專業委員會<br>
**博士代表**，瑞士洛桑聯邦理工大學EDPO光子學專業<br>
{% endcapture %}

{% capture EDPOR %}
2023-2025<br>
2023-2025<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="瑞士洛桑聯邦理工大學光子學博士課程項目（EDPO）" 
   subtitle="成員" 
   badge="EPFL EDPO" 
   description1=EDPOL
   description2=EDPOR
%}

<br>

<h3 style="color: #a31953;" id="piersconf"><a href="https://piers.org/"><img src="/assets/img/publication_preview/PIERS.png" style="height: 2.2em; "></a></h3>

<!--PIERS-->
{% capture PIERSL %}
**分論壇主席**：[_Near-Zero-Index Photonics: Physics, Devices, and Applications_](https://suzhou2026.piers.org/session.html?sid=S199)<br>
**分論壇組織者**：[_Near-Zero-Index Photonics: Physics, Devices, and Applications_](https://suzhou2026.piers.org/session.html?sid=S199)<br>
{% endcapture %}

{% capture PIERSR %}
2026.07<br>
2026.07<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="PhotonIcs and Electromagnetics Research Symposium / Progress In Electromagnetics Research Symposium (PIERS)" 
   subtitle="學術會議" 
   badge="PIERS" 
   description1=PIERSL
   description2=PIERSR
%}

<br>

## 同行評議

<!--Springer-Nature -->
{% capture SNL %}
_Nature (co-review)_<br>
_Nature Nanotechnology_ (co-review)<br>
_Nature Communications_ (co-review)<br>
_Light: Science & Applications_ (co-review)<br>
_Communications Physics_<br>
_Optical and Quantum Electronics_<br>
_Scientific Reports_<br>
{% endcapture %}

{% capture SNR %}
Nature<br>
Nat. Nanotechnol.<br>
Nat. Commun.<br>
Light Sci. Appl.<br>
Commun. Phys.<br>
Opt. Quantum Electron.<br>
Sci. Rep.<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="施普林格-自然" 
   subtitle="審稿人" 
   badge="Springer-Nature" 
   description1=SNL
   description2=SNR
%}

<!--SPIE -->
{% capture SPIEL %}
_Advanced Photonics_<br>
_Advanced Photonics Nexus_<br>
{% endcapture %}

{% capture SPIER %}
Adv. Photonics<br>
Adv. Photonics Nexus<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="SPIE國際光學工程學會 x 中國激光雜誌社" 
   subtitle="審稿人" 
   badge="SPIE x CLP" 
   description1=SPIEL
   description2=SPIER
%}

<!--Wiley -->
{% capture WL %}
_Advanced Functional Materials_<br>
_Laser & Photonics Reviews_<br>
_Advanced Photonics Research_<br>
_Annalen der Physik_<br>
{% endcapture %}

{% capture WR %}
Adv. Funct. Mater.<br>
Laser Photon. Rev.<br>
Adv. Photonics Res.<br>
Ann. Phys.-Berlin<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="Wiley威立" 
   subtitle="審稿人" 
   badge="Wiley" 
   description1=WL
   description2=WR
%}

<!--ACS -->
{% capture ACSL %}
_ACS Photonics_<br>
{% endcapture %}

{% capture ACSR %}
ACS Photonics<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="美國化學學會" 
   subtitle="審稿人" 
   badge="ACS" 
   description1=ACSL
   description2=ACSR
%}

<!--Optica Publishing Group -->
{% capture OSAL %}
_Optics Letters_<br>
_Optics Express_<br>
_Optical Materials Express_<br>
_Journal of the Optical Society of America B_<br>
_Applied Optics_<br>
_OSA Continuum (Optics Continuum)_<br>
{% endcapture %}

{% capture OSAR %}
Opt. Lett.<br>
Opt. Express<br>
Opt. Mater. Express<br>
J. Opt. Soc. Am. B<br>
Appl. Opt.<br>
OSA Contin. (Opt. Contin.)<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="Optica出版集團（原美國光學學會OSA）" 
   subtitle="審稿人" 
   badge="OPTICA" 
   description1=OSAL
   description2=OSAR
%}

<!--Institute of Physics -->
{% capture IOPL %}
_Journal of Physics: Photonics_<br>
_Journal of Optics_<br>
_Physica Scripta_<br>
{% endcapture %}

{% capture IOPR %}
J. Phys. Photonics<br>
J. Opt.<br>
Phys. Scr.<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="英國物理學會" 
   subtitle="審稿人" 
   badge="IOP" 
   description1=IOPL
   description2=IOPR
%}

<!--Elsevier -->
{% capture EL %}
_Optics & Laser Technology_<br>
_Results in Physics_<br>
_Surface & Coatings Technology_<br>
_Thin Solid Films_<br>
_Chinese Journal of Physics_<br>
_Optics Communications_<br>
{% endcapture %}

{% capture ER %}
Opt. Laser Technol.<br>
Results Phys.<br>
Surf. Coat. Technol.<br>
Thin Solid Films<br>
Chin. J. Phys.<br>
Opt. Commun.<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="愛思唯爾" 
   subtitle="審稿人" 
   badge="Elsevier" 
   description1=EL
   description2=ER
%}

<!--American Institute of Physics -->
{% capture AIPL %}
_Applied Physics Letters_<br>
{% endcapture %}

{% capture AIPR %}
Appl. Phys. Lett.<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="美國物理學會" 
   subtitle="審稿人" 
   badge="AIP" 
   description1=AIPL
   description2=AIPR
%}

<!--Chinese Physical Society -->
{% capture CPSL %}
_Acta Physica Sinica_<br>
{% endcapture %}

{% capture CPSR %}
Acta. Phys. Sin.<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="中國物理學會" 
   subtitle="審稿人" 
   badge="CPS" 
   description1=CPSL
   description2=CPSR
%}

<!--Multidisciplinary Digital Publishing Institute -->
{% capture MDPIL %}
_Sensors_<br>
{% endcapture %}

{% capture MDPIR %}
Sensors<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="曼迪匹艾" 
   subtitle="審稿人" 
   badge="MDPI" 
   description1=MDPIL
   description2=MDPIR
%}

<!-- Separation before Giscus comments -->
<br>
