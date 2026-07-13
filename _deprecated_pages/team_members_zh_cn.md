## 现有成员

<br>

### 博士后研究员

{% include info_card_member.liquid 
   name="Jane Doe" 
   role="博士后研究员" 
   badge="2026 博后" 
   image="/assets/img/members/user-girl.png" 
   description="**研究方向：** 光学。" 
%}

<br>

### 博士研究生

{% include info_card_member.liquid 
   name="John Doe" 
   role="博士研究生" 
   badge="2026级博士" 
   image="/assets/img/members/user-boy.png" 
   description="**研究方向：** 光学。" 
%}

<br>

### 硕士研究生

{% include info_card_member.liquid 
   name="Jane Doe" 
   role="硕士研究生" 
   badge="2026级硕士" 
   image="/assets/img/members/user-girl.png" 
   description="**研究方向：** 光学。" 
%}

---

## 出站博后与毕业生

<br>

### 博士毕业生

{% capture card_desc_JD1 %}
**研究方向：** 光学。

**毕业去向：** 名校 研究员。
{% endcapture %}

{% include info_card_member.liquid 
   name="John Doe" 
   role="博士毕业生" 
   badge="2026-2030 博士" 
   image="/assets/img/members/user-boy.png"
   description=card_desc_JD1
%}

<br>

### 硕士毕业生

<div class="card mt-3">
  <div class="p-3">
    <div class="row">
      <div class="col-sm-10">
        <h5 id="labmember" class="card-title"><strong>Jane Doe</strong></h5>
        <h6 class="card-subtitle font-italic">硕士毕业生</h6>
      </div>
      <div class="col-sm-2 text-sm-right">
        <span class="badge">
          2026-2029 硕士
        </span>
      </div>
    </div>
    <ul class="card-text font-weight-light list-group list-group-flush">
      <li class="list-group-item">
        <div class="row">
          <div class="col-sm-10">
            <p><strong>研究方向：</strong> 光学。</p>
            <p><strong>毕业去向：</strong> 大厂 员工。</p>
          </div>
          <div class="col-sm-2">
            <img src="/assets/img/members/user-girl.png" style="width: auto; height: 150px; object-fit: cover;">
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
