(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))e(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&e(d)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function e(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();const b="/test_CV/img/photo_sample.png",l="/test_CV/img/pencil.svg",v="/test_CV/img/heart.svg",w=({caption:i,list:t},n)=>`
        <section class="container education">
        <img class="edit-icon" src="${n}" alt="Edit icon">
          <h4 class="editable">${i}</h4>
          <ul class="education__list">
          ${t.map((e,s)=>`
            <li class="education__list__item">
              ${s===0?`<img class="like" src="${v}" alt="Like icon">`:""}
              <h5 class="editable edu-period"><time datetime="${e.period.start}">${e.period.start}</time>${e.period.end?` - <time datetime="${e.period.end}">${e.period.end}</time>
              `:""}</h5>
              <h5 class="editable">${e.speciality}</h5>
              <span class="editable tags"
                >${e.skills.map(o=>`#${o}`).join(" ")}</span
              >
              <p class="editable institute">${e.institution}</p>
            </li>
            `).join("")}
          </ul>
        </section> 
    `,y=({caption:i,list:t},n)=>`
          <section class="container experience">
          <img class="edit-icon" src="${n}" alt="Edit icon">
          <h4 class="editable">${i}</h4>
          <ul class="experience__list">
          ${t.map((e,s)=>`
            <li class="experience__list__item">
              ${s===0?'<div class="editable recent-label">most recent</div>':""}
              <p class="editable work-period">
                ${e.period}
              </p>
              <div class="description">
                <div class="job">
                  <h5 class="editable">${e.position}</h5>
                  <p class="editable company">${e.company}${e.jobNote?`&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${e.jobNote}`:""}</p>
                </div>
                <ul class="functions-list">
            ${e.functions.map(o=>`
                <li class="editable">
            ${o}
                  </li>`).join("")}
                </ul>
              </div>
            </li>
            `).join("")}
                      
          </ul>
        </section>
  `,$=()=>`
    <header class="header">
      <button class="btn cancel-btn hidden" type="button">Cancel</button>
      <div class="btn-wrapper">
        <button class="btn edit-btn" type="button">Edit</button>
        <button class="btn save-btn hidden" type="button">Save</button>
      </div>
      <button id="download" class="btn download-btn" type="button">Download PDF</button>
    </header>
  `,_=({caption:i,list:t},n)=>`
          <section class="container interests">
            <img class="edit-icon" src="${n}" alt="Edit icon">
            <h4 class="editable">${i}</h4>
            <ul class="interests__list">
            ${t.map(e=>`
                <li class="editable interests__list__item">${e}</li>
                `).join("")}
            </ul>
          </section>
  `,C=({greetings:i,name:t,profession:n},e)=>`
        <section class="container introduction">
          <img class="edit-icon" src="${e}" alt="Edit icon">
          <h5 class="editable">${i}</h5>
          <div>
            <h2 class="editable">${t}</h2>
            <h3 class="editable">${n}</h3>
          </div>
        </section>
`,k=({caption:i,list:t},n)=>{const e={25:"level-25",50:"level-50",75:"level-75",100:"level-100"};return`
        <section class="container languages">
        <img class="edit-icon" src="${n}" alt="Edit icon">
          <h4 class="editable">${i}</h4>
          <ul class="languages__list">
          ${t.map(s=>`
            <li>
              <h5 class="editable lang-name">${s.language}</h5>
              <div class="progress-bar">
                <div class="progress-bar__fill ${e[s.level]}"></div>
              </div>
            </li>
            `).join("")}
          </ul>
        </section>
  `},L=({caption:i,eMail:t},n)=>`
  <section class="container container_dark links">
  <img class="edit-icon" src="${n}" alt="Edit icon">
            <h4 class="editable">${i}</h4>
            <a class="editable" href="mailto: ${t}"
              >${t}</a
            >
          </section>
`,E=({caption:i,groups:t},n)=>`
      <section class="container tools">
      <img class="edit-icon" src="${n}" alt="Edit icon">
            <h4 class="editable">${i}</h4>
            <ul class="tools__list">
            ${t.map(e=>`
                <li class="tools__list__item">
                  <div class="editable group-caption">${e.caption}</div>
                  ${e.icons.map(s=>`
                    <a href="${s.ref}" target="_blank">
                      <img class="tools-img" src="${s.path}" alt="Tool icon">
                    </a>
                    `).join("")}
                </li>
                `).join("")}
            </ul>
          </section>
      `,j="/test_CV/img/figma.svg",V="/test_CV/img/photoshop.svg",S="/test_CV/img/illustrator.svg",I="/test_CV/img/premiere.svg",P="/test_CV/img/notion.svg",x="/test_CV/img/google_meet.svg",N="/test_CV/img/zapier.svg",W="/test_CV/img/webflow.svg",U="/test_CV/img/framer.svg",D="/test_CV/img/wordpress.svg",H="/test_CV/img/chat_gpt.svg",F="/test_CV/img/copilot.svg",O="/test_CV/img/midjourney.svg",T=[{caption:"design",icons:[{path:j,ref:"https://www.figma.com/"},{path:V,ref:"https://www.adobe.com/ru/products/photoshop.html"},{path:S,ref:"https://www.adobe.com/"},{path:I,ref:"https://www.adobe.com/"},{path:P,ref:"https://www.notion.so/"},{path:x,ref:"https://meet.google.com/landing"}]},{caption:"no-code",icons:[{path:N,ref:"https://zapier.com/"},{path:W,ref:"https://webflow.com/"},{path:U,ref:"https://www.framer.com/"},{path:D,ref:"https://wordpress.com/"}]},{caption:"artificial intelligence",icons:[{path:H,ref:"https://chatgpt.com/"},{path:F,ref:"https://copilot.microsoft.com/"},{path:O,ref:"https://www.midjourney.com/home"}]}],c={introduction:{greetings:"Hello 👋🏻 I’m",name:"Karthik SR",profession:"UX/UI Designer"},languages:{caption:"Languages",list:[{language:"English",level:100},{language:"Malayalam",level:100},{language:"Hindi",level:75}]},experience:{caption:"Experience",list:[{period:"Jun. 2023 - Present",position:"Marketing Manager",company:"Pankayam",jobNote:"Full-time",functions:["Strategy development and planning of campaigns that promote the business and generate genuine traffic","SEO Content Creation for Blogs, Website, Social media"]},{period:"2017 - Present",position:"Graphic / Web designer",company:"Freelance",jobNote:"",functions:["Development of internal projects from scratch, product design of brands","Landing page, webapps and hybrid apps","Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary."]},{period:"Sep. 2021 - Jun. 2023",position:"Legal Assistant",company:"Law Firm",jobNote:"Intern",functions:["Provide administrative support to lawyer and enhance office effectiveness","Handle communication with clients, witnesses etc.","Repare case briefs and summarize depositions, interrogatories and testimony"]}]},tools:{caption:"Tools",groups:T},education:{caption:"Education",list:[{period:{start:"2023",end:""},speciality:"UI/UX",skills:["UX","UI","research","DesignSysytem","Ui","wireframing","figma","Ux"],institution:"Coursera",like:!0},{period:{start:"2017",end:"2022"},speciality:"Law",skills:["law","legalStudies","contracts","internationalLaws"],institution:"University of Kerala",like:!1},{period:{start:"2017",end:""},speciality:"Graphic design",skills:["branding","web","illustration","adobe"],institution:"Coursrea",like:!1}]},interests:{caption:"Interests",list:["branding","design","photography","artifical intelligence","illustration","typography","social networks","research","dron pilot","games"]},links:{caption:"Let´s chat! I´m ready to work on excinting projects",eMail:"srkarthik.designscape@gmail.com"}};function B(i){const t=i.currentTarget,n=document.createElement("span"),e=Math.min(t.clientWidth,t.clientHeight),s=e/2;n.style.width=n.style.height=`${e}px`,n.style.left=`${i.clientX-t.offsetLeft-s}px`,n.style.top=`${i.clientY-t.offsetTop-s}px`,n.classList.add("ripple");const o=t.getElementsByClassName("ripple")[0];o&&o.remove(),t.appendChild(n)}let g=`
    ${$()}
    <main id="cv-body" class="main">
      <h1 class="visually-hidden">UX/UI Desinger CV Webpage</h1>
      <div class="top-block">
        <img class="photo" src="${b}" alt="My Photo" />
        ${C(c.introduction,l)}
        ${k(c.languages,l)}
      </div>
      <div class="middle-block">
        ${y(c.experience,l)}
        ${E(c.tools,l)}
      </div>
      <div class="bottom-block">
        ${w(c.education,l)}
        <div class="wrapper">
        ${_(c.interests,l)}
        ${L(c.links,l)}
        </div>
      </div>
    </main>
`;sessionStorage.getItem("_cvData")&&(g=JSON.parse(sessionStorage.getItem("_cvData")));const u=document.querySelector("#app");u.innerHTML=g;const m=document.querySelectorAll(".container");for(const i of m)i.addEventListener("click",B);const p=document.querySelector(".edit-btn"),h=document.querySelector(".save-btn"),f=document.querySelector(".cancel-btn"),M=document.querySelectorAll(".editable");function r(i){h.classList.toggle("hidden"),p.classList.toggle("hidden"),f.classList.toggle("hidden");for(const t of m)t.classList.toggle("container_active");for(const t of M)t.setAttribute("contenteditable",i)}p.addEventListener("click",()=>{r(!0)});h.addEventListener("click",()=>{r(!1),sessionStorage.setItem("_cvData",JSON.stringify(u.innerHTML))});f.addEventListener("click",()=>{r(!1),setTimeout(()=>window.location.reload(),200)});document.addEventListener("keyup",i=>{i.key==="Escape"&&p.className.split(" ").includes("hidden")&&(r(!1),setTimeout(()=>window.location.reload(),200))});const q=document.getElementById("download"),a=document.getElementById("cv-body");q.addEventListener("click",()=>{console.log("window width",window.innerWidth,"window height",window.innerHeight),console.log("CV body width",a.clientWidth,"CV body height",a.clientHeight);let i={};window.innerWidth<=612?i={margin:0,filename:"test_CV.pdf",image:{type:"jpeg",quality:1},html2canvas:{scale:2,width:window.innerWidth,height:window.innerHeight},jsPDF:{unit:"px",hotfixes:["px_scaling"],format:[a.clientWidth,a.clientHeight],orientation:"portrait",putOnlyUsedFonts:!0}}:i={margin:0,filename:"test_CV.pdf",image:{type:"jpeg",quality:1},html2canvas:{scale:2,width:a.clientWidth,height:a.clientHeight,x:(window.innerWidth-a.clientWidth)/2},jsPDF:{unit:"mm",format:[210,300],orientation:"portrait",putOnlyUsedFonts:!0}},html2pdf().set(i).from(a).save()});
