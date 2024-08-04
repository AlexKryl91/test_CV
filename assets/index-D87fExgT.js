(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&s(d)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();const y="/test_CV/img/figma.svg",w="/test_CV/img/photoshop.svg",$="/test_CV/img/illustrator.svg",_="/test_CV/img/premiere.svg",L="/test_CV/img/notion.svg",k="/test_CV/img/google_meet.svg",C="/test_CV/img/zapier.svg",E="/test_CV/img/webflow.svg",S="/test_CV/img/framer.svg",j="/test_CV/img/wordpress.svg",I="/test_CV/img/chat_gpt.svg",P="/test_CV/img/copilot.svg",V="/test_CV/img/midjourney.svg",x=[{caption:"design",icons:[{path:y,ref:"https://www.figma.com/"},{path:w,ref:"https://www.adobe.com/ru/products/photoshop.html"},{path:$,ref:"https://www.adobe.com/"},{path:_,ref:"https://www.adobe.com/"},{path:L,ref:"https://www.notion.so/"},{path:k,ref:"https://meet.google.com/landing"}]},{caption:"no-code",icons:[{path:C,ref:"https://zapier.com/"},{path:E,ref:"https://webflow.com/"},{path:S,ref:"https://www.framer.com/"},{path:j,ref:"https://wordpress.com/"}]},{caption:"artificial intelligence",icons:[{path:I,ref:"https://chatgpt.com/"},{path:P,ref:"https://copilot.microsoft.com/"},{path:V,ref:"https://www.midjourney.com/home"}]}],a={introduction:{greetings:"Hello 👋🏻 I’m",name:"Karthik SR",profession:"UX/UI Designer"},languages:{caption:"Languages",list:[{language:"English",level:100},{language:"Malayalam",level:100},{language:"Hindi",level:75}]},experience:{caption:"Experience",list:[{period:"Jun. 2023 - Present",position:"Marketing Manager",company:"Pankayam",jobNote:"Full-time",functions:["Strategy development and planning of campaigns that promote the business and generate genuine traffic","SEO Content Creation for Blogs, Website, Social media"]},{period:"2017 - Present",position:"Graphic / Web designer",company:"Freelance",jobNote:"",functions:["Development of internal projects from scratch, product design of brands","Landing page, webapps and hybrid apps","Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary."]},{period:"Sep. 2021 - Jun. 2023",position:"Legal Assistant",company:"Law Firm",jobNote:"Intern",functions:["Provide administrative support to lawyer and enhance office effectiveness","Handle communication with clients, witnesses etc.","Repare case briefs and summarize depositions, interrogatories and testimony"]}]},tools:{caption:"Tools",groups:x},education:{caption:"Education",list:[{period:{start:"2023",end:""},speciality:"UI/UX",skills:["UX","UI","research","DesignSysytem","Ui","wireframing","figma","Ux"],institution:"Coursera",like:!0},{period:{start:"2017",end:"2022"},speciality:"Law",skills:["law","legalStudies","contracts","internationalLaws"],institution:"University of Kerala",like:!1},{period:{start:"2017",end:""},speciality:"Graphic design",skills:["branding","web","illustration","adobe"],institution:"Coursrea",like:!1}]},interests:{caption:"Interests",list:["branding","design","photography","artifical intelligence","illustration","typography","social networks","research","dron pilot","games"]},links:{caption:"Let´s chat! I´m ready to work on excinting projects",eMail:"srkarthik.designscape@gmail.com"}},D="/test_CV/img/photo_sample.png",c="/test_CV/img/pencil.svg",q="/test_CV/img/heart.svg",M=({caption:e,list:t},n)=>`
        <section class="container education">
        <img class="edit-icon" src="${n}" alt="Edit icon">
          <h4 class="editable">${e}</h4>
          <ul class="education__list">
          ${t.map((s,i)=>`
            <li class="education__list__item">
              ${i===0?`<img class="like" src="${q}" alt="Like icon">`:""}
              <h5 class="editable edu-period"><time datetime="${s.period.start}">${s.period.start}</time>${s.period.end?` - <time datetime="${s.period.end}">${s.period.end}</time>
              `:""}</h5>
              <h5 class="editable">${s.speciality}</h5>
              <span class="editable tags"
                >${s.skills.map(o=>`#${o}`).join(" ")}</span
              >
              <p class="editable institute">${s.institution}</p>
            </li>
            `).join("")}
          </ul>
        </section> 
    `,N=({caption:e,list:t},n)=>`
          <section class="container experience">
          <img class="edit-icon" src="${n}" alt="Edit icon">
          <h4 class="editable">${e}</h4>
          <ul class="experience__list">
          ${t.map((s,i)=>`
            <li class="experience__list__item">
              ${i===0?'<div class="editable recent-label">most recent</div>':""}
              <p class="editable work-period">
                ${s.period}
              </p>
              <div class="description">
                <div class="job">
                  <h5 class="editable">${s.position}</h5>
                  <p class="editable company">${s.company}${s.jobNote?`&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${s.jobNote}`:""}</p>
                </div>
                <ul class="functions-list">
            ${s.functions.map(o=>`
                <li class="editable">
            ${o}
                  </li>`).join("")}
                </ul>
              </div>
            </li>
            `).join("")}
                      
          </ul>
        </section>
  `,T=()=>`
    <header class="header">
      <button class="btn cancel-btn hidden" type="button">Cancel</button>
      <div class="btn-wrapper">
        <button class="btn edit-btn" type="button">Edit</button>
        <button class="btn save-btn hidden" type="button">Save</button>
      </div>
      <button id="download" class="btn download-btn" type="button">Download PDF</button>
    </header>
  `,O=({caption:e,list:t},n)=>`
          <section class="container interests">
            <img class="edit-icon" src="${n}" alt="Edit icon">
            <h4 class="editable">${e}</h4>
            <ul class="interests__list">
            ${t.map(s=>`
                <li class="editable interests__list__item">${s}</li>
                `).join("")}
            </ul>
          </section>
  `,U=({greetings:e,name:t,profession:n},s)=>`
        <section class="container introduction">
          <img class="edit-icon" src="${s}" alt="Edit icon">
          <h5 class="editable">${e}</h5>
          <div>
            <h2 class="editable">${t}</h2>
            <h3 class="editable">${n}</h3>
          </div>
        </section>
`,B=({caption:e,list:t},n)=>{const s={25:"level-25",50:"level-50",75:"level-75",100:"level-100"};return`
        <section class="container languages">
        <img class="edit-icon" src="${n}" alt="Edit icon">
          <h4 class="editable">${e}</h4>
          <ul class="languages__list">
          ${t.map(i=>`
            <li>
              <h5 class="editable lang-name">${i.language}</h5>
              <div class="progress-bar">
                <div class="progress-bar__fill ${s[i.level]}"></div>
              </div>
            </li>
            `).join("")}
          </ul>
        </section>
  `},F=({caption:e,eMail:t},n)=>`
  <section class="container container_dark links">
  <img class="edit-icon" src="${n}" alt="Edit icon">
            <h4 class="editable">${e}</h4>
            <a class="editable" href="mailto: ${t}"
              >${t}</a
            >
          </section>
`,W=({caption:e,groups:t},n)=>`
      <section class="container tools">
      <img class="edit-icon" src="${n}" alt="Edit icon">
            <h4 class="editable">${e}</h4>
            <ul class="tools__list">
            ${t.map(s=>`
                <li class="tools__list__item">
                  <div class="editable group-caption">${s.caption}</div>
                  ${s.icons.map(i=>`
                    <a href="${i.ref}" target="_blank">
                      <img class="tools-img" src="${i.path}" alt="Tool icon">
                    </a>
                    `).join("")}
                </li>
                `).join("")}
            </ul>
          </section>
      `;function H(e){const t=e.currentTarget,n=document.createElement("span"),s=Math.min(t.clientWidth,t.clientHeight),i=s/2;n.style.width=n.style.height=`${s}px`,n.style.left=`${e.clientX-t.offsetLeft-i}px`,n.style.top=`${e.clientY-t.offsetTop-i}px`,n.classList.add("ripple"),t.appendChild(n),setTimeout(()=>t.querySelector(".ripple").remove(),600)}function g(e){const t={margin:0,filename:"test_CV.pdf",image:{type:"jpeg",quality:1},html2canvas:{scale:2,width:e.clientWidth,height:e.clientHeight,x:(window.innerWidth-e.clientWidth)/2},jsPDF:{unit:"px",hotfixes:["px_scaling"],format:[e.clientWidth,e.clientHeight],orientation:"portrait",putOnlyUsedFonts:!0}};html2pdf().set(t).from(e).save()}JSON.parse(localStorage.getItem("_cvData"));const A=()=>`
    <dialog class="popup" role="dialog" aria-label="Edit information">
      <div class="popup-container">
        <p class="question">Do you want to save changes and create PDF file?</p>       
        <button type="button" class="yes-btn">Yes</button>
        <button type="button" class="no-btn">No</button>
      </div>
    </dialog>
`;let m=`
    ${T()}
    <main id="cv-body" class="main">
      <h1 class="visually-hidden">UX/UI Desinger CV Webpage</h1>
      <div class="top-block">
        <img class="photo" src="${D}" alt="My Photo" />
        ${U(a.introduction,c)}
        ${B(a.languages,c)}
      </div>
      <div class="middle-block">
        ${N(a.experience,c)}
        ${W(a.tools,c)}
      </div>
      <div class="bottom-block">
        ${M(a.education,c)}
        <div class="wrapper">
        ${O(a.interests,c)}
        ${F(a.links,c)}
        </div>
      </div>
    </main>
    ${A()}
`;sessionStorage.getItem("_cvData")&&(m=JSON.parse(sessionStorage.getItem("_cvData")));const p=document.querySelector("#app");p.innerHTML=m;const h=document.querySelectorAll(".container");for(const e of h)e.addEventListener("click",H);const r=document.querySelector(".edit-btn"),f=document.querySelector(".save-btn"),b=document.querySelector(".cancel-btn"),J=document.querySelectorAll(".editable");function l(e){f.classList.toggle("hidden"),r.classList.toggle("hidden"),b.classList.toggle("hidden");for(const t of h)t.classList.toggle("container_active");for(const t of J)t.setAttribute("contenteditable",e)}r.addEventListener("click",()=>{l(!0)});f.addEventListener("click",()=>{l(!1),sessionStorage.setItem("_cvData",JSON.stringify(p.innerHTML))});b.addEventListener("click",()=>{l(!1),setTimeout(()=>window.location.reload(),200)});document.addEventListener("keyup",e=>{e.key==="Escape"&&r.className.split(" ").includes("hidden")&&(l(!1),setTimeout(()=>window.location.reload(),200))});const G=document.getElementById("download"),v=document.getElementById("cv-body"),u=document.querySelector(".popup"),X=document.querySelector(".yes-btn"),z=document.querySelector(".no-btn");G.addEventListener("click",()=>{r.className.split(" ").includes("hidden")?u.showModal():g(v)});X.addEventListener("click",()=>{u.close(),l(!1),sessionStorage.setItem("_cvData",JSON.stringify(p.innerHTML)),g(v)});z.addEventListener("click",()=>{u.close()});
