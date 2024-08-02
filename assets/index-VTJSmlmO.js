(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const o of t)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function e(t){const o={};return t.integrity&&(o.integrity=t.integrity),t.referrerPolicy&&(o.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?o.credentials="include":t.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(t){if(t.ep)return;t.ep=!0;const o=e(t);fetch(t.href,o)}})();const c=({caption:i,list:s})=>`
        <section class="container education">
          <h4>${i}</h4>
          <ul class="education__list">
          ${s.map(e=>`
            <li class="education__list__item">
              <h5 class="edu-period"><time datetime="${e.period.start}">${e.period.start}</time>${e.period.end?` - <time datetime="${e.period.end}">${e.period.end}</time>
              `:""}</h5>
              <h5>${e.speciality}</h5>
              <span class="tags"
                >${e.skills.map(n=>`#${n}`).join(" ")}</span
              >
              <p class="institute">${e.institution}</p>
            </li>
            `).join("")}
          </ul>
        </section> 
    `,l=({caption:i,list:s})=>`
          <section class="container experience">
          <h4>${i}</h4>
          <ul class="experience__list">
          ${s.map((e,n)=>`
            <li class="experience__list__item">
              ${n===0?'<div class="recent-label">most recent</div>':""}
              <p class="work-period">
                ${e.period}
              </p>
              <div class="description">
                <div class="job">
                  <h5>${e.position}</h5>
                  <p class="company">${e.company}${e.jobNote?`&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;${e.jobNote}`:""}</p>
                </div>
                <ul class="functions-list">
            ${e.functions.map(t=>`
                <li>
            ${t}
                  </li>`).join("")}
                </ul>
              </div>
            </li>
            `).join("")}
                      
          </ul>
        </section>
  `,p=()=>`
    <header class="header">
      <button class="download-btn" type="button">Download PDF</button>
    </header>
  `,d=({caption:i,list:s})=>`
  <section class="container interests">
            <h4>${i}</h4>
            <ul class="interests__list">
            ${s.map(e=>`
                <li class="interests__list__item">${e}</li>
                `).join("")}
            </ul>
          </section>
  `,g=({greetings:i,name:s,profession:e})=>`
        <section class="container introduction">
          <h5>${i}</h5>
          <div>
            <h2>${s}</h2>
            <h3>${e}</h3>
          </div>
        </section>
`,u=({caption:i,list:s})=>`
        <section class="container languages">
          <h4>${i}</h4>
          <ul class="languages__list">
          ${s.map(e=>`
            <li>
              <h5 class="lang-name">${e.language}</h5>
              <div class="progress-bar">
                <div class="progress-bar__fill"></div>
              </div>
            </li>
            `).join("")}
          </ul>
        </section>
  `,m=({caption:i,eMail:s})=>`
  <section class="container-dark links">
            <h4>${i}</h4>
            <a href="mailto: ${s}"
              >${s}</a
            >
          </section>
`,h="/test_CV/img/figma.svg",f="/test_CV/img/photoshop.svg",v="/test_CV/img/illustrator.svg",w="/test_CV/img/premiere.svg",$="/test_CV/img/notion.svg",b="/test_CV/img/google_meet.svg",_="/test_CV/img/zapier.svg",y="/test_CV/img/webflow.svg",C="/test_CV/img/framer.svg",k="/test_CV/img/wordpress.svg",j="/test_CV/img/chat_gpt.svg",L="/test_CV/img/copilot.svg",P="/test_CV/img/midjourney.svg",V=[{caption:"design",icons:[{svg:h,ref:"https://www.figma.com/"},{svg:f,ref:"https://www.adobe.com/ru/products/photoshop.html"},{svg:v,ref:"https://www.adobe.com/"},{svg:w,ref:"https://www.adobe.com/"},{svg:$,ref:"https://www.notion.so/"},{svg:b,ref:"https://meet.google.com/landing"}]},{caption:"no-code",icons:[{svg:_,ref:"https://zapier.com/"},{svg:y,ref:"https://webflow.com/"},{svg:C,ref:"https://www.framer.com/"},{svg:k,ref:"https://wordpress.com/"}]},{caption:"artificial intelligence",icons:[{svg:j,ref:"https://chatgpt.com/"},{svg:L,ref:"https://copilot.microsoft.com/"},{svg:P,ref:"https://www.midjourney.com/home"}]}],I=({caption:i,groups:s})=>(console.log(i,s),`
      <section class="container tools">
            <h4>${i}</h4>
            <ul class="tools__list">
            ${s.map(e=>`
                <li class="tools__list__item">
                  <div class="group-caption">${e.caption}</div>
                  ${e.icons.map(n=>`
                    <a href="${n.ref}" target="_blank">
                      <img class="tools-img" src="${n.svg}">
                    </a>
                    `).join("")}
                </li>
                `).join("")}
            </ul>
          </section>
      `),a={intro:{greetings:"Hello 👋🏻 I’m",name:"Karthik SR",profession:"UX/UI Designer"},languages:{caption:"Languages",list:[{language:"English",level:4},{language:"Malayalam",level:4},{language:"Hindi",level:3}]},experience:{caption:"Experience",list:[{period:"Jun. 2023 - Present",position:"Marketing Manager",company:"Pankayam",jobNote:"Full-time",functions:["Strategy development and planning of campaigns that promote the business and generate genuine traffic","SEO Content Creation for Blogs, Website, Social media"]},{period:"2017 - Present",position:"Graphic / Web designer",company:"Freelance",jobNote:"",functions:["Development of internal projects from scratch, product design of brands","Landing page, webapps and hybrid apps","Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary."]},{period:"Sep. 2021 - Jun. 2023",position:"Legal Assistant",company:"Law Firm",jobNote:"Intern",functions:["Provide administrative support to lawyer and enhance office effectiveness","Handle communication with clients, witnesses etc.","Repare case briefs and summarize depositions, interrogatories and testimony"]}]},tools:{caption:"Tools",groups:V},education:{caption:"Education",list:[{period:{start:"2023",end:""},speciality:"UI/UX",skills:["UX","UI","research","DesignSysytem","Ui","wireframing","figma","Ux"],institution:"Coursera",like:!0},{period:{start:"2017",end:"2022"},speciality:"Law",skills:["law","legalStudies","contracts","internationalLaws"],institution:"University of Kerala",like:!1},{period:{start:"2017",end:""},speciality:"Graphic design",skills:["branding","web","illustration","adobe"],institution:"Coursrea",like:!1}]},interests:{caption:"Interests",list:["branding","design","photography","artifical intelligence","illustration","typography","social networks","research","dron pilot","games"]},links:{caption:"Let´s chat! I´m ready to work on excinting projects",eMail:"srkarthik.designscape@gmail.com"}};document.querySelector("#app").innerHTML=`
    ${p()}
    <main class="main">
      <h1 class="visually-hidden">UX/UI Desinger CV Webpage</h1>
      <div class="top-block">
        <img class="photo" src="/img/photo_sample.png" alt="My Photo" />
        ${g(a.intro)}
        ${u(a.languages)}
      </div>
      <div class="middle-block">
        ${l(a.experience)}
        ${I(a.tools)}
      </div>
      <div class="bottom-block">
        ${c(a.education)}
        <div class="wrapper">
        ${d(a.interests)}
        ${m(a.links)}
        </div>
      </div>
    </main>
`;
