---
page_id: services
layout: page
permalink: /services/
title: services
description: <a href='/services/#teaching'>courses, lectures</a>, <a href='/services/#peer-review'>peer reviews</a>, and editorial services.
nav: true
nav_order: 4
---

## teaching

<br>

<h3 style="color: #660974;" id="tsinghua"><a href="https://sigs.tsinghua.edu.cn/en/"><img src="/assets/img/university_logos/THU-SIGS.png" style="height: 2em; "></a></h3>

<!-- xyz -->
{% include info_card_service.liquid 
   name="Course to be assigned, place holder" 
   subtitle="Teacher (TBD)" 
   badge="xyz" 
   description1="X Credits Master's level. Course taught by Assist. Prof. Jiaye Wu"
   description2=""
%}

<br>

<h3 style="color: #9f0d44;" id="cityu-dg"><a href="https://www.cityu-dg.edu.cn/en/home.html"><img src="/assets/img/university_logos/CityUHK-DG.png" style="height: 2em; "></a></h3>

<!-- abc -->
{% include info_card_service.liquid 
   name="Course to be assigned, place holder" 
   subtitle="Teacher (TBD)" 
   badge="abc" 
   description1="X Credits Master's level. Course taught by Asst. Prof. Jiaye Wu"
   description2=""
%}

<br>

<h3 style="color: #ff0000;" id="epfl"><a href="https://www.epfl.ch/"><img src="/assets/img/university_logos/EPFL-long.png" style="height: 1.5em; "></a></h3>

<!-- EE-440 -->
{% capture EE440_coursebook %}
[Coursebook](https://edu.epfl.ch/coursebook/en/photonic-systems-and-technology-EE-440)
{% endcapture %}

{% include info_card_service.liquid 
   name="Photonic Systems & Technology" 
   subtitle="Teaching Assistant (Spring 2022 & Spring 2024)" 
   badge="EE-440" 
   description1="4 ECTS Master's level. Course taught by Assoc. Prof. Camille-Sophie Brès"
   description2=EE440_coursebook
%}

<!-- BIOENG-445 -->
{% capture BIOENG445_coursebook %}
[Coursebook](https://edu.epfl.ch/coursebook/en/biomedical-optics-BIOENG-445)
{% endcapture %}

{% include info_card_service.liquid 
   name="Biomedical Optics" 
   subtitle="Teaching Assistant (Autumn 2022 & Autumn 2023)" 
   badge="BIOENG-445" 
   description1="3 ECTS Master's level. Course taught by Dr. Georges Wagnières"
   description2=BIOENG445_coursebook
%}

<br>

<h3 style="color: #94070a;" id="pku"><a href="https://www.pku.edu.cn/"><img src="/assets/img/university_logos/PKU.png" style="height: 2em; "></a></h3>

<!-- 04711202 -->
{% include info_card_service.liquid 
   name="Optical Fiber Communications" 
   subtitle="Teaching Assistant (Spring 2019)" 
   badge="04711202" 
   description1="3 Credits Master's level. Course taught by Assoc. Prof. Qian Li"
   description2=""
%}

<!-- 04711182 -->
{% include info_card_service.liquid 
   name="Photonics" 
   subtitle="Teaching Assistant (Autumn 2018)" 
   badge="04711182" 
   description1="3 Credits Master's level. Course taught by Assoc. Prof. Qian Li"
   description2=""
%}

<br>

<h3 style="color: #124168;" id="scnu"><a href="https://www.scnu.edu.cn/"><img src="/assets/img/university_logos/SCNU.png" style="height: 2em; "></a></h3>

<!-- 41E42780 -->
{% include info_card_service.liquid 
   name="Advanced English" 
   subtitle="Teaching Assistant (Spring 2015)" 
   badge="41E42780" 
   description1="2 Credits Bachelor's level. Course taught by Mr. George Mckibbens"
   description2=""
%}

<br>

## peer review

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
   name="Springer-Nature" 
   subtitle="Peer Reviewer" 
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
   name="The International Society for Optics and Photonics x Chinese Laser Press" 
   subtitle="Peer Reviewer" 
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
   name="Wiley-VCH" 
   subtitle="Peer Reviewer" 
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
   name="American Chemical Society" 
   subtitle="Peer Reviewer" 
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
   name="Optica Publishing Group" 
   subtitle="Peer Reviewer" 
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
   name="Institute of Physics" 
   subtitle="Peer Reviewer" 
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
   name="Elsevier BV" 
   subtitle="Peer Reviewer" 
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
   name="American Institute of Physics" 
   subtitle="Peer Reviewer" 
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
   name="Chinese Physical Society" 
   subtitle="Peer Reviewer" 
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
   name="Multidisciplinary Digital Publishing Institute" 
   subtitle="Peer Reviewer" 
   badge="MDPI" 
   description1=MDPIL
   description2=MDPIR
%}

<!-- Separation before Giscus comments -->
<br>
