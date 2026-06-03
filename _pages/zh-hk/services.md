---
page_id: services
layout: page
permalink: /services/
title: 教研服務
description: <a href='/services/#教學課程'>課程教學、講座</a>、<a href='/services/#同行評議'>同行評議</a>及編輯服務
nav: true
nav_order: 4
---

## 教學課程

<br>

<h3 style="color: #660974;" id="tsinghua"><a href="https://sigs.tsinghua.edu.cn/"><img src="/assets/img/university_logos/THU-SIGS.png" class="logo-light" style="height: 2em;"><img src="/assets/img/university_logos/THU-SIGS-white.png" class="logo-dark" style="height: 2em;"></a></h3>

<!-- xyz -->
{% include info_card_service.liquid 
   name="課程待分配，佔位標籤" 
   subtitle="教師（時間待定）" 
   badge="xyz" 
   description1="X 學分碩士課程。任課：吳嘉野 助理教授"
   description2=""
%}

<br>

<h3 style="color: #9f0d44;" id="cityu-dg"><a href="https://www.cityu-dg.edu.cn/zh/home.html"><img src="/assets/img/university_logos/CityUHK-DG.png" style="height: 2em; "></a></h3>

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
