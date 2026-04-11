window.addEventListener('scroll',()=>{
  document.getElementById('mainNav').classList.toggle('scrolled',window.scrollY>40);
},{passive:true});

function toggleMobileNav(){
  document.getElementById('mobileNav').classList.toggle('open');
}

const io = new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target)}});
},{threshold:0.1,rootMargin:'0px 0px -40px 0px'});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

function switchTab(id, btn){
  document.querySelectorAll('.form-tab').forEach(t=>{t.classList.remove('active');t.setAttribute('aria-selected','false')});
  document.querySelectorAll('.form-panel').forEach(p=>p.classList.remove('active'));
  btn.classList.add('active');
  btn.setAttribute('aria-selected','true');
  document.getElementById('panel-'+id).classList.add('active');
  document.getElementById('successScreen').classList.remove('visible');
  document.getElementById('successScreen').style.display='none';
}

function updateCharCount(el, countId){
  document.getElementById(countId).textContent = el.value.length;
}

function validateField(groupId, inputEl, condition, errMsg){
  const group = document.getElementById(groupId);
  if(!group) return true;
  const errEl = group.querySelector('.err-msg');
  if(!condition(inputEl.value)){
    group.classList.add('has-error');
    if(errEl && errMsg) errEl.textContent = errMsg;
    return false;
  }
  group.classList.remove('has-error');
  return true;
}

function handleSubmit(e, formId){
  e.preventDefault();
  let valid = true;

  if(formId==='general'){
    valid &= validateField('fg-gen-fname', document.getElementById('gen-fname'), v=>v.trim().length>0, 'Please enter your first name');
    valid &= validateField('fg-gen-lname', document.getElementById('gen-lname'), v=>v.trim().length>0, 'Please enter your last name');
    valid &= validateField('fg-gen-email', document.getElementById('gen-email'), v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Please enter a valid email address');
    valid &= validateField('fg-gen-subject', document.getElementById('gen-subject'), v=>v!=='', 'Please select a subject');
    valid &= validateField('fg-gen-msg', document.getElementById('gen-msg'), v=>v.trim().length>=10, 'Please enter at least 10 characters');
  }
  else if(formId==='order'){
    valid &= validateField('fg-ord-name', document.getElementById('ord-name'), v=>v.trim().length>0, 'Please enter your name');
    valid &= validateField('fg-ord-email', document.getElementById('ord-email'), v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Please enter a valid email');
    valid &= validateField('fg-ord-ref', document.getElementById('ord-ref'), v=>v.trim().length>0, 'Please enter your order reference');
    valid &= validateField('fg-ord-detail', document.getElementById('ord-detail'), v=>v.trim().length>=10, 'Please describe the issue');
  }
  else if(formId==='wholesale'){
    valid &= validateField('fg-ws-name', document.getElementById('ws-name'), v=>v.trim().length>0, 'Please enter your name');
    valid &= validateField('fg-ws-email', document.getElementById('ws-email'), v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Please enter a valid email');
    valid &= validateField('fg-ws-biz', document.getElementById('ws-biz'), v=>v.trim().length>0, 'Please enter your business name');
  }
  else if(formId==='media'){
    valid &= validateField('fg-med-name', document.getElementById('med-name'), v=>v.trim().length>0, 'Please enter your name');
    valid &= validateField('fg-med-email', document.getElementById('med-email'), v=>/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), 'Please enter a valid email');
    valid &= validateField('fg-med-outlet', document.getElementById('med-outlet'), v=>v.trim().length>0, 'Please enter your publication or platform');
    valid &= validateField('fg-med-brief', document.getElementById('med-brief'), v=>v.trim().length>=10, 'Please provide a brief description');
  }

  if(!valid){
    const firstErr = document.querySelector(`#panel-${formId} .has-error`);
    if(firstErr) firstErr.scrollIntoView({behavior:'smooth',block:'center'});
    return;
  }

  const btn = document.getElementById('sbtn-'+formId);
  btn.classList.add('loading');
  btn.disabled = true;

  setTimeout(()=>{
    btn.classList.remove('loading');
    btn.disabled = false;
    showSuccess(formId);
  }, 1800);
}

function showSuccess(formId){
  document.getElementById('panel-'+formId).style.display='none';
  const ref = 'TMJ-' + Date.now().toString().slice(-6);
  document.getElementById('successRef').textContent = 'Reference: #' + ref;
  const ss = document.getElementById('successScreen');
  ss.style.display='flex';
  ss.classList.add('visible');
}

function resetForm(){
  document.querySelectorAll('.form-panel').forEach(p=>{p.style.display='';p.classList.remove('active')});
  document.getElementById('panel-general').classList.add('active');
  document.getElementById('successScreen').classList.remove('visible');
  document.getElementById('successScreen').style.display='none';
  document.querySelectorAll('.form-tab').forEach((t,i)=>{
    t.classList.toggle('active',i===0);
    t.setAttribute('aria-selected',i===0?'true':'false');
  });
  document.querySelectorAll('form input, form select, form textarea').forEach(el=>{
    if(el.type!=='submit') el.value='';
  });
  document.querySelectorAll('.has-error').forEach(el=>el.classList.remove('has-error'));
  document.querySelectorAll('[id$="-count"]').forEach(el=>el.textContent='0');
}

document.querySelectorAll('.submit-btn').forEach(btn=>{
  btn.addEventListener('click', e=>{
    const r = document.createElement('span');
    r.className = 'btn-ripple';
    const size = Math.max(btn.offsetWidth, btn.offsetHeight) * 2;
    r.style.cssText = `width:${size}px;height:${size}px;left:${e.offsetX - size/2}px;top:${e.offsetY - size/2}px`;
    btn.appendChild(r);
    setTimeout(()=>r.remove(), 700);
  });
});

document.querySelectorAll('form input[type=email]').forEach(el=>{
  el.addEventListener('blur',()=>{
    const g = el.closest('.field-group');
    if(!g) return;
    const valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(el.value);
    if(el.value && !valid) g.classList.add('has-error');
    else if(valid) g.classList.remove('has-error');
  });
});

function toggleFaq(questionEl){
  const item = questionEl.parentElement;
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i=>{
    i.classList.remove('open');
    i.querySelector('.faq-question').setAttribute('aria-expanded','false');
  });
  if(!isOpen){
    item.classList.add('open');
    questionEl.setAttribute('aria-expanded','true');
  }
}

function dragOver(e){
  e.preventDefault();
  document.getElementById('fileDrop').classList.add('drag-over');
}
function dragLeave(e){
  document.getElementById('fileDrop').classList.remove('drag-over');
}
function dropFile(e){
  e.preventDefault();
  document.getElementById('fileDrop').classList.remove('drag-over');
  const file = e.dataTransfer.files[0];
  if(file) displayFileName(file.name);
}
function handleFileSelect(input){
  if(input.files[0]) displayFileName(input.files[0].name);
}
function displayFileName(name){
  const d = document.getElementById('fileNameDisplay');
  d.textContent = '📎 ' + name;
  d.style.display='block';
}

document.addEventListener('keydown',e=>{
  if(e.key==='Escape') document.getElementById('mobileNav').classList.remove('open');
});
