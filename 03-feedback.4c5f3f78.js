!function(){var e,a=document.querySelector(".feedback-form"),t="feedback-form-state";a.addEventListener("input",(function(e){e.preventDefault(),r[e.target.name]=e.target.value,localStorage.setItem(t,JSON.stringify(r))})),(e=JSON.parse(localStorage.getItem(t)))&&(a.email.value=e.email,a.message.value=e.message);var r={}}();
//# sourceMappingURL=03-feedback.4c5f3f78.js.map
