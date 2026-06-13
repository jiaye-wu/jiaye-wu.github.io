## 現有成員

<br>

### 博士後研究員

{% include info_card_member.liquid 
   name="Jane Doe" 
   role="博士後研究員" 
   badge="2026 博後" 
   image="/assets/img/members/user-girl.png" 
   description="**研究方向：** 光學。" 
%}

<br>

### 博士研究生

{% include info_card_member.liquid 
   name="John Doe" 
   role="博士研究生" 
   badge="2026級博士" 
   image="/assets/img/members/user-boy.png" 
   description="**研究方向：** 光學。" 
%}

<br>

### 碩士研究生

{% include info_card_member.liquid 
   name="Jane Doe" 
   role="碩士研究生" 
   badge="2026級碩士" 
   image="/assets/img/members/user-girl.png" 
   description="**研究方向：** 光學。" 
%}

---

## 出站博後與畢業生

<br>

### 博士畢業生

{% capture card_desc_JD1 %}
**研究方向：** 光學。

**畢業去向：** 名校 研究員。
{% endcapture %}

{% include info_card_member.liquid 
   name="John Doe" 
   role="博士畢業生" 
   badge="2026-2030 博士" 
   image="/assets/img/members/user-boy.png"
   description=card_desc_JD1
%}

<br>

### 碩士畢業生

<div class="card mt-3">
  <div class="p-3">
    <div class="row">
      <div class="col-sm-10">
        <h5 id="labmember" class="card-title"><strong>Jane Doe</strong></h5>
        <h6 class="card-subtitle font-italic">碩士畢業生</h6>
      </div>
      <div class="col-sm-2 text-sm-right">
        <span class="badge">
          2026-2029 碩士
        </span>
      </div>
    </div>
    <ul class="card-text font-weight-light list-group list-group-flush">
      <li class="list-group-item">
        <div class="row">
          <div class="col-sm-10">
            <p><strong>研究方向：</strong> 光學。</p>
            <p><strong>畢業去向：</strong> 大廠 員工。</p>
          </div>
          <div class="col-sm-2">
            <img src="/assets/img/members/user-girl.png" style="width: auto; height: 150px; object-fit: cover;">
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
