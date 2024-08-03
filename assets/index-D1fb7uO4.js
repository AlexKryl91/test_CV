(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))t(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const p of o.addedNodes)p.tagName==="LINK"&&p.rel==="modulepreload"&&t(p)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const f="/test_CV/img/photo_sample.png",a="/test_CV/img/pencil.svg",b="/test_CV/img/heart.svg",v=({caption:e,list:i},n)=>`
        <section class="container education">
        <img class="edit-icon" src="${n}" alt="Edit icon">
          <h4 class="editable">${e}</h4>
          <ul class="education__list">
          ${i.map((t,s)=>`
            <li class="education__list__item">
              ${s===0?`<img class="like" src="${b}" alt="Like icon">`:""}
              <h5 class="editable edu-period"><time datetime="${t.period.start}">${t.period.start}</time>${t.period.end?` - <time datetime="${t.period.end}">${t.period.end}</time>
              `:""}</h5>
              <h5 class="editable">${t.speciality}</h5>
              <span class="editable tags"
                >${t.skills.map(o=>`#${o}`).join(" ")}</span
              >
              <p class="editable institute">${t.institution}</p>
            </li>
            `).join("")}
          </ul>
        </section> 
    `,$=({caption:e,list:i},n)=>`
          <section class="container experience">
          <img class="edit-icon" src="${n}" alt="Edit icon">
          <h4 class="editable">${e}</h4>
          <ul class="experience__list">
          ${i.map((t,s)=>`
            <li class="experience__list__item">
              ${s===0?'<div class="editable recent-label">most recent</div>':""}
              <p class="editable work-period">
                ${t.period}
              </p>
              <div class="description">
                <div class="job">
                  <h5 class="editable">${t.position}</h5>
                  <p class="editable company">${t.company}${t.jobNote?`&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${t.jobNote}`:""}</p>
                </div>
                <ul class="functions-list">
            ${t.functions.map(o=>`
                <li class="editable">
            ${o}
                  </li>`).join("")}
                </ul>
              </div>
            </li>
            `).join("")}
                      
          </ul>
        </section>
  `,y="/test_CV/pdf/test_cv.pdf",_=()=>`
    <header class="header">
      <button class="btn cancel-btn hidden" type="button">Cancel</button>
      <div class="btn-wrapper">
        <button class="btn edit-btn" type="button">Edit</button>
        <button class="btn save-btn hidden" type="button">Save</button>
      </div>
      <a href="${y}" download><div class="btn download-btn">Download PDF</div></a>
    </header>
  `,w=({caption:e,list:i},n)=>`
          <section class="container interests">
            <img class="edit-icon" src="${n}" alt="Edit icon">
            <h4 class="editable">${e}</h4>
            <ul class="interests__list">
            ${i.map(t=>`
                <li class="editable interests__list__item">${t}</li>
                `).join("")}
            </ul>
          </section>
  `,L=({greetings:e,name:i,profession:n},t)=>`
        <section class="container introduction">
          <img class="edit-icon" src="${t}" alt="Edit icon">
          <h5 class="editable">${e}</h5>
          <div>
            <h2 class="editable">${i}</h2>
            <h3 class="editable">${n}</h3>
          </div>
        </section>
`,k=({caption:e,list:i},n)=>{const t={25:"level-25",50:"level-50",75:"level-75",100:"level-100"};return`
        <section class="container languages">
        <img class="edit-icon" src="${n}" alt="Edit icon">
          <h4 class="editable">${e}</h4>
          <ul class="languages__list">
          ${i.map(s=>`
            <li>
              <h5 class="editable lang-name">${s.language}</h5>
              <div class="progress-bar">
                <div class="progress-bar__fill ${t[s.level]}"></div>
              </div>
            </li>
            `).join("")}
          </ul>
        </section>
  `},C=({caption:e,eMail:i},n)=>`
  <section class="container container_dark links">
  <img class="edit-icon" src="${n}" alt="Edit icon">
            <h4 class="editable">${e}</h4>
            <a class="editable" href="mailto: ${i}"
              >${i}</a
            >
          </section>
`,E=({caption:e,groups:i},n)=>`
      <section class="container tools">
      <img class="edit-icon" src="${n}" alt="Edit icon">
            <h4 class="editable">${e}</h4>
            <ul class="tools__list">
            ${i.map(t=>`
                <li class="tools__list__item">
                  <div class="editable group-caption">${t.caption}</div>
                  ${t.icons.map(s=>`
                    <a href="${s.ref}" target="_blank">
                      <img class="tools-img" src="${s.path}" alt="Tool icon">
                    </a>
                    `).join("")}
                </li>
                `).join("")}
            </ul>
          </section>
      `,S="/test_CV/img/figma.svg",j="/test_CV/img/photoshop.svg",V="/test_CV/img/illustrator.svg",P="/test_CV/img/premiere.svg",I="/test_CV/img/notion.svg",N="/test_CV/img/google_meet.svg",x="/test_CV/img/zapier.svg",D="/test_CV/img/webflow.svg",U="/test_CV/img/framer.svg",M="/test_CV/img/wordpress.svg",O="/test_CV/img/chat_gpt.svg",F="/test_CV/img/copilot.svg",T="/test_CV/img/midjourney.svg",q=[{caption:"design",icons:[{path:S,ref:"https://www.figma.com/"},{path:j,ref:"https://www.adobe.com/ru/products/photoshop.html"},{path:V,ref:"https://www.adobe.com/"},{path:P,ref:"https://www.adobe.com/"},{path:I,ref:"https://www.notion.so/"},{path:N,ref:"https://meet.google.com/landing"}]},{caption:"no-code",icons:[{path:x,ref:"https://zapier.com/"},{path:D,ref:"https://webflow.com/"},{path:U,ref:"https://www.framer.com/"},{path:M,ref:"https://wordpress.com/"}]},{caption:"artificial intelligence",icons:[{path:O,ref:"https://chatgpt.com/"},{path:F,ref:"https://copilot.microsoft.com/"},{path:T,ref:"https://www.midjourney.com/home"}]}],c={introduction:{greetings:"Hello 👋🏻 I’m",name:"Karthik SR",profession:"UX/UI Designer"},languages:{caption:"Languages",list:[{language:"English",level:100},{language:"Malayalam",level:100},{language:"Hindi",level:75}]},experience:{caption:"Experience",list:[{period:"Jun. 2023 - Present",position:"Marketing Manager",company:"Pankayam",jobNote:"Full-time",functions:["Strategy development and planning of campaigns that promote the business and generate genuine traffic","SEO Content Creation for Blogs, Website, Social media"]},{period:"2017 - Present",position:"Graphic / Web designer",company:"Freelance",jobNote:"",functions:["Development of internal projects from scratch, product design of brands","Landing page, webapps and hybrid apps","Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary."]},{period:"Sep. 2021 - Jun. 2023",position:"Legal Assistant",company:"Law Firm",jobNote:"Intern",functions:["Provide administrative support to lawyer and enhance office effectiveness","Handle communication with clients, witnesses etc.","Repare case briefs and summarize depositions, interrogatories and testimony"]}]},tools:{caption:"Tools",groups:q},education:{caption:"Education",list:[{period:{start:"2023",end:""},speciality:"UI/UX",skills:["UX","UI","research","DesignSysytem","Ui","wireframing","figma","Ux"],institution:"Coursera",like:!0},{period:{start:"2017",end:"2022"},speciality:"Law",skills:["law","legalStudies","contracts","internationalLaws"],institution:"University of Kerala",like:!1},{period:{start:"2017",end:""},speciality:"Graphic design",skills:["branding","web","illustration","adobe"],institution:"Coursrea",like:!1}]},interests:{caption:"Interests",list:["branding","design","photography","artifical intelligence","illustration","typography","social networks","research","dron pilot","games"]},links:{caption:"Let´s chat! I´m ready to work on excinting projects",eMail:"srkarthik.designscape@gmail.com"}};function A(e){const i=e.currentTarget,n=document.createElement("span"),t=Math.min(i.clientWidth,i.clientHeight),s=t/2;n.style.width=n.style.height=`${t}px`,n.style.left=`${e.clientX-i.offsetLeft-s}px`,n.style.top=`${e.clientY-i.offsetTop-s}px`,n.classList.add("ripple");const o=i.getElementsByClassName("ripple")[0];o&&o.remove(),i.appendChild(n)}let u=`
    ${_()}
    <main class="main">
      <h1 class="visually-hidden">UX/UI Desinger CV Webpage</h1>
      <div class="top-block">
        <img class="photo" src="${f}" alt="My Photo" />
        ${L(c.introduction,a)}
        ${k(c.languages,a)}
      </div>
      <div class="middle-block">
        ${$(c.experience,a)}
        ${E(c.tools,a)}
      </div>
      <div class="bottom-block">
        ${v(c.education,a)}
        <div class="wrapper">
        ${w(c.interests,a)}
        ${C(c.links,a)}
        </div>
      </div>
    </main>
`;localStorage.getItem("_cvData")&&(u=JSON.parse(localStorage.getItem("_cvData")));const m=document.querySelector("#app");m.innerHTML=u;const g=document.querySelectorAll(".container");for(const e of g)e.addEventListener("click",A);const l=document.querySelector(".edit-btn"),r=document.querySelector(".save-btn"),d=document.querySelector(".cancel-btn"),h=document.querySelectorAll(".editable");l.addEventListener("click",()=>{r.classList.toggle("hidden"),l.classList.toggle("hidden"),d.classList.toggle("hidden");for(const e of g)e.classList.add("container_active");for(const e of h)e.setAttribute("contenteditable",!0)});r.addEventListener("click",()=>{r.classList.toggle("hidden"),l.classList.toggle("hidden"),d.classList.toggle("hidden");for(const e of g)e.classList.remove("container_active");for(const e of h)e.setAttribute("contenteditable",!1);localStorage.setItem("_cvData",JSON.stringify(m.innerHTML))});d.addEventListener("click",()=>{r.classList.toggle("hidden"),l.classList.toggle("hidden"),d.classList.toggle("hidden"),window.location.reload()});document.addEventListener("keyup",e=>{e.key==="Escape"&&l.className.split(" ").includes("hidden")&&(r.classList.toggle("hidden"),l.classList.toggle("hidden"),d.classList.toggle("hidden"),window.location.reload())});
