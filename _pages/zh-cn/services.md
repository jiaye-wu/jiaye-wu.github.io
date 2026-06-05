---
page_id: services
layout: page
permalink: /services/
title: 教研服务
description: <a href='/services/#教学课程'>课程教学</a>、<a href='/services/#受邀讲座'>受邀讲座</a>、<a href='/services/#编辑服务'>编辑服务</a>、<a href='/services/#学术兼职'>学术兼职</a>、<a href='/services/#同行评议'>同行评议</a>
nav: true
nav_order: 4
---

## **教学课程**

<br>

<h3 style="color: #660974;" id="cityu-dg"><a href="https://www.cityu-dg.edu.cn/zh/home.html"><img src="/assets/img/university_logos/CityUHK-DG.png" style="height: 2em; "></a></h3>

<!-- abc -->
{% include info_card_service.liquid 
   name="课程待分配，占位标签" 
   subtitle="教师（时间待定）" 
   badge="abc" 
   description1="X 学分硕士课程。任课：吴嘉野 助理教授"
   description2=""
%}

<br>

<h3 style="color: #ff0000;" id="epfl"><a href="https://www.epfl.ch/"><img src="/assets/img/university_logos/EPFL-long.png" style="height: 1.5em; "></a></h3>

<!-- EE-440 -->
{% capture EE440_coursebook %}
[课程介绍](https://edu.epfl.ch/coursebook/en/photonic-systems-and-technology-EE-440)
{% endcapture %}

{% include info_card_service.liquid 
   name="光子学系统与技术" 
   subtitle="教学助理（2022 及 2024 春学期）" 
   badge="EE-440" 
   description1="4 ECTS 学分硕士课程。任课：Camille-Sophie Brès 副教授"
   description2=EE440_coursebook
%}

<!-- BIOENG-445 -->
{% capture BIOENG445_coursebook %}
[课程介绍](https://edu.epfl.ch/coursebook/en/biomedical-optics-BIOENG-445)
{% endcapture %}

{% include info_card_service.liquid 
   name="生物医学光学" 
   subtitle="教学助理（2022 及 2023 秋学期）" 
   badge="BIOENG-445" 
   description1="3 ECTS 学分硕士课程。任课：Georges Wagnières 博士"
   description2=BIOENG445_coursebook
%}

<br>

<h3 style="color: #94070a;" id="pku"><a href="https://www.pku.edu.cn/"><img src="/assets/img/university_logos/PKU.png" style="height: 2em; "></a></h3>

<!-- 04711202 -->
{% include info_card_service.liquid 
   name="光纤通信" 
   subtitle="教学助理（2019 春学期）" 
   badge="04711202" 
   description1="3 学分硕士课程。任课：李倩 副教授"
   description2=""
%}

<!-- 04711182 -->
{% include info_card_service.liquid 
   name="光电子学" 
   subtitle="教学助理（2018 秋学期）" 
   badge="04711182" 
   description1="3 学分硕士课程。任课：李倩 副教授"
   description2=""
%}

<br>

<h3 style="color: #124168;" id="scnu"><a href="https://www.scnu.edu.cn/"><img src="/assets/img/university_logos/SCNU.png" style="height: 2em; "></a></h3>

<!-- 41E42780 -->
{% include info_card_service.liquid 
   name="高级英语" 
   subtitle="教学助理（2015 春学期）" 
   badge="41E42780" 
   description1="2 学分本科课程。任课：George Mckibbens 老师"
   description2=""
%}

<br>

## **受邀讲座**

### 科研院校

{% capture talk_ethz %}
- [2023年11月19日：光与物质相互作用：集成光芯片与微纳薄膜器件中超快光脉冲串的腔外腔内操控新技术](/blog/2023/invited-ETHZ/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="瑞士苏黎世联邦理工大学（ETH Zürich）" 
   role="受邀研讨会" 
   badge="ETHZ" 
   image="/assets/img/university_logos/ETHZ.png"
   description=talk_ethz
%}

{% capture talk_epfl %}
- [2025年04月10日：_Nanophotonic-enabled extra- and intra-cavity manipulation of ultrafast optical pulse trains_](/blog/2025/news-EPFL-Public-Defence/)
- [2024年09月11日：_Enhancement of linear and nonlinear thermo-optic effects by epsilon-near-zero conditions_](/blog/2024/invited-EPFL/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="瑞士洛桑联邦理工大学（EPFL）" 
   role="受邀研讨会" 
   badge="EPFL" 
   image="/assets/img/university_logos/EPFL-H.png"
   description=talk_epfl
%}

{% capture talk_tsinghua %}
- [2026年04月10日：新型时域泰伯效应及其片上集成](/blog/2026/invited-THU/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="清华大学" 
   role="受邀研讨会" 
   badge="THU" 
   image="/assets/img/university_logos/THU-Alt.png"
   description=talk_tsinghua
%}

{% capture talk_pku %}
- [2024年05月07日：基于集成光芯片和微纳光器件平台的超快光脉冲腔外腔内操控](/blog/2024/invited-PKU/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="北京大学" 
   role="受邀研讨会" 
   badge="PKU" 
   image="/assets/img/university_logos/PKU.png"
   description=talk_pku
%}

{% capture talk_hkustgz %}
- [2025年08月12日： _Epsilon-Near-Zero Photonics: Crossroad of Multidisciplinary Research_](/blog/2025/invited-HKUSTGZ-AMAT/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="香港科技大学（广州）" 
   role="受邀研讨会" 
   badge="HKUST-GZ" 
   image="/assets/img/university_logos/HKUST-GZ.png"
   description=talk_hkustgz
%}

{% capture talk_siom %}
- [2023年12月26日：近零介电常数条件下的线性与非线性热光效应增强](/blog/2023/invited-SIOM/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="中国科学院上海光学精密机械研究所" 
   role="受邀研讨会" 
   badge="CAS-SIOM" 
   image="/assets/img/university_logos/CAS.png"
   description=talk_siom
%}

{% capture talk_scnu %}
- [2017年10月11日：科学素养：科研学习经验分享与SCI文献检索](/blog/2017/invited-SCNU2/)
- [2017年03月21日：科学素养：自然科学类科研基础知识](/blog/2017/invited-SCNU1/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="华南师范大学" 
   role="受邀讲座" 
   badge="SCNU" 
   image="/assets/img/university_logos/SCNU.png"
   description=talk_scnu
%}

<br>

### 学术会议

{% capture talk_piers %}
- [2026年7月28日： _Ultrafast Thermo-optic Nonlinearity in Time-varying Epsilon-Near-Zero Interfaces_, PIERS 2026, 中国 苏州](/blog/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="PhotonIcs and Electromagnetics Research Symposium / Progress In Electromagnetics Research Symposium (PIERS)" 
   role="邀请报告" 
   badge="PIERS" 
   image="/assets/img/publication_preview/PIERS.png"
   description=talk_piers
%}

<br>

## **编辑服务**

<br>

## **学术兼职**

<h3 style="color: #000000;" id="optica"><a href="https://www.optica.org/membership/"><img src="/assets/img/society_logos/OPTICA.png" style="height: 1.8em; "></a></h3>

<!--OPTICA-->
{% capture OPTICAL %}
**主席**，OPTICA北京大学深圳研究生院学生分会<br>
**副主席**，OPTICA北京大学深圳研究生院学生分会<br>
**秘书长**，OPTICA北京大学深圳研究生院学生分会<br>
**分会成员**，瑞士洛桑联邦理工大学光子学分会（EPC）<br>
**分会成员**，OPTICA北京大学深圳研究生院学生分会<br>
**分会成员**，OSA华南师范大学学生分会<br>
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
   name="OPTICA（原美国光学学会）" 
   subtitle="青年会员" 
   badge="OPTICA" 
   description1=OPTICAL
   description2=OPTICAR
%}

<br>

<h3 style="color: #031752;" id="ips"><a href="https://ieeephotonics.org/"><img src="/assets/img/society_logos/IPS.png" style="height: 2.2em; "></a></h3>

<!--IPS-->
{% capture IPSL %}
**主席（创始）**，IEEE光子学会北京大学深圳研究生院学生分会<br>
**分会成员**，IEEE光子学会北京大学深圳研究生院学生分会<br>
{% endcapture %}

{% capture IPSR %}
2019-2021<br>
2019-2021<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="电气电子工程师协会光子学会" 
   subtitle="会员" 
   badge="IPS" 
   description1=IPSL
   description2=IPSR
%}

<br>

<h3 style="color: #ff7547;" id="elsevierap"><a href="https://www.elsevier.com/"><img src="/assets/img/society_logos/Elsevier.png" style="height: 2em; "></a></h3>

<!--Elsevier-->
{% capture ELSL %}
**成员**，爱思唯尔顾问委员会<br>
{% endcapture %}

{% capture ELSR %}
2022-至今<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="爱思唯尔顾问委员会" 
   subtitle="成员" 
   badge="Elsevier" 
   description1=ELSL
   description2=ELSR
%}

<br>

<h3 style="color: #ff0000;" id="edpo"><a href="https://www.epfl.ch/education/phd/edpo-photonics/"><img src="/assets/img/university_logos/EPFL-long.png" style="height: 1.5em; "></a></h3>

<!--EDPO-->
{% capture EDPOL %}
**成员**，瑞士洛桑联邦理工大学EDPO光子学专业委员会<br>
**博士代表**，瑞士洛桑联邦理工大学EDPO光子学专业<br>
{% endcapture %}

{% capture EDPOR %}
2023-2025<br>
2023-2025<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="瑞士洛桑联邦理工大学光子学博士课程项目（EDPO）" 
   subtitle="成员" 
   badge="EPFL EDPO" 
   description1=EDPOL
   description2=EDPOR
%}

<br>

<h3 style="color: #a31953;" id="piersconf"><a href="https://piers.org/"><img src="/assets/img/publication_preview/PIERS.png" style="height: 2.2em; "></a></h3>

<!--PIERS-->
{% capture PIERSL %}
**分论坛主席**：[_Near-Zero-Index Photonics: Physics, Devices, and Applications_](https://suzhou2026.piers.org/session.html?sid=S199)<br>
**分论坛组织者**：[_Near-Zero-Index Photonics: Physics, Devices, and Applications_](https://suzhou2026.piers.org/session.html?sid=S199)<br>
{% endcapture %}

{% capture PIERSR %}
2026.07<br>
2026.07<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="PhotonIcs and Electromagnetics Research Symposium / Progress In Electromagnetics Research Symposium (PIERS)" 
   subtitle="学术会议" 
   badge="PIERS" 
   description1=PIERSL
   description2=PIERSR
%}

<br>

## **同行评议**

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
   subtitle="审稿人" 
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
   name="SPIE国际光学工程学会 x 中国激光杂志社" 
   subtitle="审稿人" 
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
   subtitle="审稿人" 
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
   name="美国化学学会" 
   subtitle="审稿人" 
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
   name="Optica出版集团（原美国光学学会OSA）" 
   subtitle="审稿人" 
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
   name="英国物理学会" 
   subtitle="审稿人" 
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
   name="爱思唯尔" 
   subtitle="审稿人" 
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
   name="美国物理学会" 
   subtitle="审稿人" 
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
   name="中国物理学会" 
   subtitle="审稿人" 
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
   subtitle="审稿人" 
   badge="MDPI" 
   description1=MDPIL
   description2=MDPIR
%}

<!-- Separation before Giscus comments -->
<br>
