// عدّلي هذا البريد قبل النشر.
const contactEmail = 'your-email@example.com';
// أضيفي إنجازاتك هنا. الصورة اختيارية: ضعي ملف الصورة في assets/ ثم اكتبي المسار مثل assets/project-1.jpg
const projects = [
  {
    "title": "إدارة بيانات الطالبات",
    "category": "نظام نور",
    "description": "تحديث بيانات الطالبات وأولياء الأمور وأرقام التواصل وربط حساباتهم ومتابعة تسكين الطالبات.",
    "details": "مراجعة طلبات تعديل الأسماء وأرقام الجوال، وتوزيع الطالبات المنقولات على الفصول وفق توجيه إدارة المدرسة.",
    "symbol": "✦",
    "a": "#a47ac3",
    "b": "#efc4df",
    "image": "",
    "evidence": ""
  },
  {
    "title": "متابعة الحضور والغياب",
    "category": "نظام نور",
    "description": "متابعة إدخال الغياب اليومي ومطابقته مع السجلات وإصدار الكشوف الشهرية.",
    "details": "حصر الطالبات المنضبطات وكثيرات الغياب ومتابعة طلبات تصحيح الغياب بالمستندات.",
    "symbol": "✦",
    "a": "#a47ac3",
    "b": "#efc4df",
    "image": "",
    "evidence": ""
  },
  {
    "title": "متابعة رصد الدرجات",
    "category": "نظام نور",
    "description": "متابعة اكتمال رصد درجات الفترات والاختبارات النهائية.",
    "details": "متابعة الدرجات غير المكتملة ودرجات الطالبات الغائبات والتنسيق لمعالجة الملاحظات.",
    "symbol": "✦",
    "a": "#a47ac3",
    "b": "#efc4df",
    "image": "",
    "evidence": ""
  },
  {
    "title": "الاختبارات وأرقام الجلوس",
    "category": "نظام نور",
    "description": "إعداد لجان الاختبارات وأرقام الجلوس وكشوف المناداة.",
    "details": "توزيع الطالبات على اللجان ونشر أرقام الجلوس وطباعة كشوف التوقيع اليومي.",
    "symbol": "✦",
    "a": "#a47ac3",
    "b": "#efc4df",
    "image": "",
    "evidence": ""
  },
  {
    "title": "الدعم الفني لنظام نور",
    "category": "نظام نور",
    "description": "رفع البلاغات التقنية ومتابعة حالتها مع الدعم الفني.",
    "details": "أربعة بلاغات موثقة في الكشف: بلاغان مغلقان وبلاغان مفتوحان وقت التوثيق.",
    "symbol": "✦",
    "a": "#a47ac3",
    "b": "#efc4df",
    "image": "",
    "evidence": ""
  },
  {
    "title": "الطالبات المنقولات إلى المدرسة",
    "category": "القبول والتسجيل",
    "description": "إتمام إجراءات نقل 126 طالبة إلى المدرسة.",
    "details": "70 طالبة في الرابع و16 في الخامس و40 في السادس، خلال الفترة الموثقة بالتقرير.",
    "symbol": "✦",
    "a": "#8e7ac7",
    "b": "#d9b5e7",
    "image": "",
    "evidence": ""
  },
  {
    "title": "الطالبات المنقولات من المدرسة",
    "category": "القبول والتسجيل",
    "description": "متابعة نقل 31 طالبة إلى مدارس أخرى.",
    "details": "9 طالبات في الرابع و14 في الخامس و8 في السادس، خلال الفترة الموثقة بالتقرير.",
    "symbol": "✦",
    "a": "#8e7ac7",
    "b": "#d9b5e7",
    "image": "",
    "evidence": ""
  },
  {
    "title": "معادلة شهادة طالبة",
    "category": "القبول والتسجيل",
    "description": "معادلة شهادة طالبة درست خارج المملكة وتسجيلها في نظام نور.",
    "details": "تحديد الصف المناسب بعد معادلة الشهادة؛ هذه الحالة مستقلة عن عدد المنقولات إلى المدرسة.",
    "symbol": "✦",
    "a": "#8e7ac7",
    "b": "#d9b5e7",
    "image": "",
    "evidence": ""
  },
  {
    "title": "الانضباط الوظيفي",
    "category": "الانضباط المدرسي",
    "description": "توثيق الالتزام الوظيفي والمحافظة على أرصدة الإجازات خلال السنوات الأربع الأخيرة.",
    "details": "إرفاق سجل الإجازات الرسمي بعد إخفاء البيانات الشخصية؛ يثبت الأرصدة الظاهرة فيه.",
    "symbol": "✦",
    "a": "#c09bdf",
    "b": "#f1d0e9",
    "image": "",
    "evidence": ""
  },
  {
    "title": "متابعة إجازات الموظفات",
    "category": "نظام فارس",
    "description": "مراجعة ومتابعة أكثر من 600 طلب إجازة.",
    "details": "التحقق من التواريخ والمستندات واستيفاء الطلبات قبل اعتمادها وفق الصلاحيات.",
    "symbol": "✦",
    "a": "#a18ac9",
    "b": "#ead1f0",
    "image": "",
    "evidence": ""
  },
  {
    "title": "أهداف الإداريات",
    "category": "نظام فارس",
    "description": "إدخال الأهداف الوظيفية للإداريات ومتابعة اعتمادها.",
    "details": "مراجعة صحة البيانات وحالة الاعتماد في نظام فارس.",
    "symbol": "✦",
    "a": "#a18ac9",
    "b": "#ead1f0",
    "image": "",
    "evidence": ""
  },
  {
    "title": "النمو المهني للمعلمات",
    "category": "نظام فارس",
    "description": "متابعة اعتماد أنشطة النمو المهني لنحو 20 معلمة أو أكثر.",
    "details": "مراجعة الشواهد والساعات والبيانات؛ العدد تقديري.",
    "symbol": "✦",
    "a": "#a18ac9",
    "b": "#ead1f0",
    "image": "",
    "evidence": ""
  },
  {
    "title": "تحليل نتائج الاختبارات",
    "category": "التقارير والإحصائيات",
    "description": "تحليل نتائج الاختبارات الفترية والنهائية للصفوف العليا.",
    "details": "تصنيف مستويات الأداء وإعداد الجداول والرسوم البيانية الداعمة لخطط التحسين.",
    "symbol": "✦",
    "a": "#a69bdc",
    "b": "#dfc9ef",
    "image": "",
    "evidence": ""
  },
  {
    "title": "تحليل الغياب الشهري والفصلي",
    "category": "التقارير والإحصائيات",
    "description": "تحليل مؤشرات الغياب على مستوى الفصول والصفوف.",
    "details": "إعداد كشوف الغياب المتكرر والتقارير الدورية للمتابعة.",
    "symbol": "✦",
    "a": "#a69bdc",
    "b": "#dfc9ef",
    "image": "",
    "evidence": ""
  },
  {
    "title": "التقارير والإحصاءات المدرسية",
    "category": "التقارير والإحصائيات",
    "description": "إعداد تقارير وإحصائيات للمديرة والوكيلات والجهات المختصة.",
    "details": "استخراج كشوف الطالبات والبيانات والتقارير المطلوبة بعد مراجعتها.",
    "symbol": "✦",
    "a": "#a69bdc",
    "b": "#dfc9ef",
    "image": "",
    "evidence": ""
  },
  {
    "title": "مبادرة Excel لنتائج نافس",
    "category": "المبادرات والتطوير المهني",
    "description": "تصميم ملف Excel لرصد وتحليل نتائج اختبارات نافس.",
    "details": "تنظيم النتائج وإظهار مؤشرات الأداء؛ مدعومة بشهادة شكر من إدارة المدرسة.",
    "symbol": "✦",
    "a": "#d78cb5",
    "b": "#f3c6e0",
    "image": "",
    "evidence": ""
  },
  {
    "title": "تدريب المعلمات على التصحيح الآلي",
    "category": "المبادرات والتطوير المهني",
    "description": "تنفيذ تدريب على استخدام التصحيح الآلي للاختبارات.",
    "details": "برنامج تدريبي موثق لمدة 12 ساعة شمل قوالب التصحيح ومراجعة النتائج.",
    "symbol": "✦",
    "a": "#d78cb5",
    "b": "#f3c6e0",
    "image": "",
    "evidence": ""
  },
  {
    "title": "تدريب طالبة جامعية",
    "category": "المبادرات والتطوير المهني",
    "description": "تدريب طالبة جامعية على الأعمال الإدارية لمدة 60 ساعة.",
    "details": "تعريف المتدربة بالمهام الإدارية والتطبيقات العملية ضمن بيئة المدرسة.",
    "symbol": "✦",
    "a": "#d78cb5",
    "b": "#f3c6e0",
    "image": "",
    "evidence": ""
  },
  {
    "title": "الدورات وورش العمل 2026",
    "category": "المبادرات والتطوير المهني",
    "description": "المشاركة في برامج تطوير مهني خلال عام 2026م.",
    "details": "تُرفق شهادات الدورات المؤرخة بعام 2026م بعد تدقيق بياناتها.",
    "symbol": "✦",
    "a": "#d78cb5",
    "b": "#f3c6e0",
    "image": "",
    "evidence": ""
  },
  {
    "title": "شكر وتقدير – مبادرة Excel",
    "category": "الشهادات والتكريمات",
    "description": "شهادة تقدير لإعداد ملف تحليل نتائج نافس.",
    "details": "شهادة صادرة عن إدارة المدرسة بتاريخ 06/04/1448هـ.",
    "symbol": "✦",
    "a": "#ba8dcf",
    "b": "#f3cde3",
    "image": "",
    "evidence": ""
  },
  {
    "title": "شكر – تقارير الاختبار المركزي",
    "category": "الشهادات والتكريمات",
    "description": "خطاب شكر على رفع تقارير الاختبار المركزي للصف السادس.",
    "details": "صادر عن إدارة تقويم الأداء المعرفي والمهاري بتعليم جدة.",
    "symbol": "✦",
    "a": "#ba8dcf",
    "b": "#f3cde3",
    "image": "",
    "evidence": ""
  },
  {
    "title": "شهادة المشاركة في المعرفة الإحصائية",
    "category": "الشهادات والتكريمات",
    "description": "شهادة مشاركة من الهيئة العامة للإحصاء.",
    "details": "مشاركة في مسابقة المعرفة الإحصائية.",
    "symbol": "✦",
    "a": "#ba8dcf",
    "b": "#f3cde3",
    "image": "",
    "evidence": ""
  }
];
const grid=document.getElementById('projectGrid');const dialog=document.getElementById('projectDialog');
function render(filter='الكل'){grid.replaceChildren();let matches=projects.filter(p=>filter==='الكل'||p.category===filter);document.getElementById('empty').hidden=matches.length>0;matches.forEach(p=>{const article=document.createElement('article');article.className='project';const media=document.createElement('div');media.className='project-media';media.style.setProperty('--a',p.a);media.style.setProperty('--b',p.b);if(p.image){const img=document.createElement('img');img.src=p.image;img.alt=p.title;img.style.cssText='width:100%;height:100%;object-fit:cover';media.append(img)}else{const symbol=document.createElement('span');symbol.textContent=p.symbol;media.append(symbol)}const body=document.createElement('div');body.className='project-body';const tag=document.createElement('span');tag.className='tag';tag.textContent=p.category;const title=document.createElement('h3');title.textContent=p.title;const desc=document.createElement('p');desc.textContent=p.description;const btn=document.createElement('button');btn.textContent='عرض التفاصيل ←';btn.addEventListener('click',()=>{const box=document.getElementById('dialogBody');box.replaceChildren();const h=document.createElement('h2');h.textContent=p.title;const d=document.createElement('p');d.textContent=p.details;box.append(h,d);if(p.image){const img=document.createElement('img');img.src=p.image;img.alt='شاهد: '+p.title;img.className='evidence-image';img.loading='lazy';box.append(img)}if(p.evidence){const link=document.createElement('a');link.href=p.evidence;link.target='_blank';link.rel='noopener noreferrer';link.className='evidence-link';link.textContent='فتح ملف الشاهد PDF ↗';box.append(link)}else{const note=document.createElement('p');note.className='evidence-note';note.textContent='لم يُرفق شاهد منشور لهذا الإنجاز بعد. أضيفي صورة أو ملف PDF بعد مراجعة الخصوصية.';box.append(note)}dialog.showModal()});body.append(tag,title,desc,btn);article.append(media,body);grid.append(article)})}
render();document.querySelectorAll('[data-filter]').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-pressed','false')});btn.classList.add('active');btn.setAttribute('aria-pressed','true');render(btn.dataset.filter)}));
document.getElementById('closeDialog').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});document.getElementById('year').textContent=new Date().getFullYear();const menu=document.getElementById('menuBtn');const nav=document.getElementById('navLinks');menu.addEventListener('click',()=>{const opened=nav.classList.toggle('open');menu.setAttribute('aria-expanded',String(opened))});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menu.setAttribute('aria-expanded','false')}));document.getElementById('emailLink').href='mailto:'+encodeURIComponent(contactEmail)+'?subject='+encodeURIComponent('تواصل من موقع معرض إنجاز شريفة للأعمال الإدارية');
