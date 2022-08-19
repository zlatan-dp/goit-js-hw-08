const e=document.querySelector(".feedback-form");e.addEventListener("input",(function(e){e.preventDefault(),t[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(t))})),function(){const t=JSON.parse(localStorage.getItem("feedback-form-state"));t&&(e.email.value=t.email,e.message.value=t.message)}();const t={};
//# sourceMappingURL=03-feedback.671ea22e.js.map
