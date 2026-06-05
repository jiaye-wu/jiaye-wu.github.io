---
page_id: services
layout: page
permalink: /services/
title: services
description: <a href='/services/#teaching'>courses</a>, <a href='/services/#invited-lectures'>lectures</a>, <a href='/services/#editorial-services'>editorial services</a>, <a href='/services/#professional-activities'>professional activities</a>, and <a href='/services/#peer-review'>peer reviews</a>.
nav: true
nav_order: 4
---

## teaching

<br>

<h3 style="color: #660974;" id="tsinghua"><a href="https://sigs.tsinghua.edu.cn/en/"><img src="/assets/img/university_logos/THU-SIGS.png" class="logo-light" style="height: 2em;"><img src="/assets/img/university_logos/THU-SIGS-white.png" class="logo-dark" style="height: 2em;"></a></h3>

<!-- xyz -->
{% include info_card_service.liquid 
   name="Course to be assigned, place holder" 
   subtitle="Teacher (TBD)" 
   badge="xyz" 
   description1="X Credits Master's level. Course taught by Asst. Prof. Jiaye Wu"
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

## invited lectures

### universities & institutes

{% capture talk_ethz %}
- [Nov. 19th, 2023: _Light-matter interactions: Novel technologies for extra- and intra-cavity manipulations of ultrafast optical pulses in integrated photonic chips and nanophotonic thin film devices_](/blog/2023/invited-ETHZ/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="Eidgenössische Technische Hochschule Zürich (ETH Zürich)" 
   role="Invited Seminar" 
   badge="ETHZ" 
   image="/assets/img/university_logos/ETHZ.png"
   description=talk_ethz
%}

{% capture talk_epfl %}
- [Apr. 10th, 2025: _Nanophotonic-enabled extra- and intra-cavity manipulation of ultrafast optical pulse trains_](/blog/2025/news-EPFL-Public-Defence/)
- [Sep. 11th, 2024: _Enhancement of linear and nonlinear thermo-optic effects by epsilon-near-zero conditions_](/blog/2024/invited-EPFL/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="École Polytechnique Fédérale de Lausanne (EPFL)" 
   role="Invited Seminar" 
   badge="EPFL" 
   image="/assets/img/university_logos/EPFL-H.png"
   description=talk_epfl
%}

{% capture talk_tsinghua %}
- [Apr. 10th, 2026: _Novel temporal Talbot effects and their on-chip integration_](/blog/2026/invited-THU/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="Tsinghua University" 
   role="Invited Seminar" 
   badge="THU" 
   image="/assets/img/university_logos/THU-Alt.png"
   description=talk_tsinghua
%}

{% capture talk_pku %}
- [May 7th, 2024: _Extra- and intra-cavity manipulation of ultrashort optical pulses on integrated- and nano-photonic platforms_](/blog/2024/invited-PKU/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="Peking University" 
   role="Invited Seminar" 
   badge="PKU" 
   image="/assets/img/university_logos/PKU.png"
   description=talk_pku
%}

{% capture talk_hkustgz %}
- [Aug. 12th, 2025: _Epsilon-Near-Zero Photonics: Crossroad of Multidisciplinary Research_](/blog/2025/invited-HKUSTGZ-AMAT/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="Hong Kong University of Science and Technology (Guangzhou)" 
   role="Invited Seminar" 
   badge="HKUST-GZ" 
   image="/assets/img/university_logos/HKUST-GZ.png"
   description=talk_hkustgz
%}

{% capture talk_siom %}
- [Dec. 26th, 2023: _Enhancement of linear and nonlinear thermo-optic effects by epsilon-near-zero conditions_](/blog/2023/invited-SIOM/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="Shanghai Institute of Optics and Fine Machines (SIOM), Chinese Academy of Sciences (CAS)" 
   role="Invited Seminar" 
   badge="CAS-SIOM" 
   image="/assets/img/university_logos/CAS.png"
   description=talk_siom
%}

{% capture talk_scnu %}
- [Oct. 11th, 2017: _Science Literacy: Experiences in scientific research and literature search_](/blog/2017/invited-SCNU2/)
- [Mar. 21st, 2017: _Science Literacy: Fundamentals and basics in natural science research_](/blog/2017/invited-SCNU1/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="South China Normal University" 
   role="Invited Lectures" 
   badge="SCNU" 
   image="/assets/img/university_logos/SCNU.png"
   description=talk_scnu
%}

<br>

### conferences

{% capture talk_piers %}
- [Jul. 28th, 2026: _Ultrafast Thermo-optic Nonlinearity in Time-varying Epsilon-Near-Zero Interfaces_, PIERS 2026, Suzhou, China](/blog/)
{% endcapture %}

{% include info_card_invited_talks.liquid 
   name="PhotonIcs and Electromagnetics Research Symposium / Progress In Electromagnetics Research Symposium (PIERS)" 
   role="Invited Talks" 
   badge="PIERS" 
   image="/assets/img/publication_preview/PIERS.png"
   description=talk_piers
%}

<br>

## editorial services

<br>

## professional activities

<h3 style="color: #000000;" id="optica"><a href="https://www.optica.org/membership/"><img src="/assets/img/society_logos/OPTICA.png" style="height: 1.8em; "></a></h3>

<!--OPTICA-->
{% capture OPTICAL %}
**President**, OPTICA Peking University PKUSZ Student Chapter<br>
**Vice President,** OPTICA Peking University PKUSZ Student Chapter<br>
**Secretary**, OPTICA Peking University PKUSZ Student Chapter<br>
**Chapter Member**, EPFL Photonics Chapter (EPC)<br>
**Chapter Member**, OPTICA Peking University PKUSZ Student Chapter<br>
**Chapter Member**, OSA South China Normal University Student Chapter<br>
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
   name="OPTICA" 
   subtitle="Early-Career Member" 
   badge="OPTICA" 
   description1=OPTICAL
   description2=OPTICAR
%}

<br>

<h3 style="color: #031752;" id="ips"><a href="https://ieeephotonics.org/"><img src="/assets/img/society_logos/IPS.png" style="height: 2.2em; "></a></h3>

<!--IPS-->
{% capture IPSL %}
**President (Founding)**, IEEE Photonics Society Peking University PKUSZ Student Branch Chapter<br>
**Chapter Member**, IEEE Photonics Society Peking University PKUSZ Student Branch Chapter<br>
{% endcapture %}

{% capture IPSR %}
2019-2021<br>
2019-2021<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="IEEE Photonics Society" 
   subtitle="Member" 
   badge="IPS" 
   description1=IPSL
   description2=IPSR
%}

<br>

<h3 style="color: #ff7547;" id="elsevierap"><a href="https://www.elsevier.com/"><img src="/assets/img/society_logos/Elsevier.png" style="height: 2em; "></a></h3>

<!--Elsevier-->
{% capture ELSL %}
**Member**, Elsevier Advisory Panel<br>
{% endcapture %}

{% capture ELSR %}
2022-Present<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="Elsevier Advisory Panel" 
   subtitle="Member" 
   badge="Elsevier" 
   description1=ELSL
   description2=ELSR
%}

<br>

<h3 style="color: #ff0000;" id="edpo"><a href="https://www.epfl.ch/education/phd/edpo-photonics/"><img src="/assets/img/university_logos/EPFL-long.png" style="height: 1.5em; "></a></h3>

<!--EDPO-->
{% capture EDPOL %}
**Member**, EPFL EDPO Commission<br>
**PhD Representative**, EPFL EDPO Programme<br>
{% endcapture %}

{% capture EDPOR %}
2023-2025<br>
2023-2025<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="EPFL Doctoral Programme in Photonics (EDPO)" 
   subtitle="Member" 
   badge="EPFL EDPO" 
   description1=EDPOL
   description2=EDPOR
%}

<br>

<h3 style="color: #a31953;" id="piersconf"><a href="https://piers.org/"><img src="/assets/img/publication_preview/PIERS.png" style="height: 2.2em; "></a></h3>

<!--PIERS-->
{% capture PIERSL %}
**Session Chair**, [_Near-Zero-Index Photonics: Physics, Devices, and Applications_](https://suzhou2026.piers.org/session.html?sid=S199)<br>
**Session Organizer**, [_Near-Zero-Index Photonics: Physics, Devices, and Applications_](https://suzhou2026.piers.org/session.html?sid=S199)<br>
{% endcapture %}

{% capture PIERSR %}
2026.07<br>
2026.07<br>
{% endcapture %}

{% include info_card_service.liquid 
   name="PhotonIcs and Electromagnetics Research Symposium / Progress In Electromagnetics Research Symposium (PIERS)" 
   subtitle="Academic Conference" 
   badge="PIERS" 
   description1=PIERSL
   description2=PIERSR
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
