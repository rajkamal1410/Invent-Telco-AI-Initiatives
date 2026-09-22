const documents = [
  {
    id: 'cws-rfp',
    title: 'CWS RFP Response',
    type: 'RFP Response',
    category: 'Telecom Transformation & Modernization',
    path: 'source-materials/customer-responses/CWS RFP Response_V1 (1).pdf',
    fileType: 'pdf',
    summary: 'This response addresses a structured customer RFP focused on telecom transformation, business process modernization, and enterprise solution fit. It positions the team around operating model, service transformation, and measurable value creation across digital and operational priorities.',
    overview: 'High-value response for customer-facing proposal work with emphasis on telecom strategy, service operations, digital modernization, and transformation value narrative.',
    keywords: ['CWS', 'RFP', 'customer', 'telecom', 'digital transformation', 'commercial response'],
    poc: 'Proposal & Bid Management Lead',
    contact: 'Internal proposal desk / telecom solutions team'
  },
  {
    id: 'orange-it-mutualization',
    title: 'IT Mutualization POV for Orange',
    type: 'POV / Strategy',
    category: 'Operating Model',
    path: 'source-materials/customer-responses/IT Mutualization POV  for Orange.pdf',
    fileType: 'pdf',
    summary: 'The document frames a shared-services and IT mutualization perspective for Orange, emphasizing efficiency, governance, and enterprise architecture alignment. It maps how centralization and standardized delivery models can improve cost controls while supporting strategic agility.',
    overview: 'This piece is centered on enterprise IT optimization, shared services design, governance, and transformation economics for a complex telecom ecosystem.',
    keywords: ['Orange', 'IT mutualization', 'shared services', 'operating model', 'governance', 'cost efficiency'],
    poc: 'Enterprise Architecture & Transformation Lead',
    contact: 'Internal architecture practice / strategy desk'
  },
  {
    id: 'lla-sales-digital',
    title: 'LLA RFP: Sales Digital Transformation',
    type: 'RFP Response',
    category: 'Sales & Customer Experience Transformation',
    path: 'source-materials/customer-responses/LLA RFP  Sales Digital Transformation.pdf',
    fileType: 'pdf',
    summary: 'This proposal focuses on sales transformation, digital enablement, and commercial productivity improvements for a telecom or enterprise sales context. It highlights operating model changes, CRM modernization, and performance management levers that accelerate revenue impact.',
    overview: 'Built around sales productivity, customer journey improvement, and digital enablement for a future-ready commercial engine.',
    keywords: ['LLA', 'sales transformation', 'CRM', 'digital enablement', 'commercial productivity', 'RFP'],
    poc: 'Sales Transformation Lead',
    contact: 'Commercial transformation and digital sales team'
  },
  {
    id: 'ericsson-workshop',
    title: 'Ericsson Strategic Executive Workshop',
    type: 'Executive Workshop',
    category: 'Executive Briefing',
    path: 'source-materials/customer-responses/Ericsson Strategic Executive Workshop 10th Sep.pdf',
    fileType: 'pdf',
    summary: 'This workshop material captures strategic discussion themes around telecom market evolution, executive priorities, and transformation agendas. It is suitable for stakeholder alignment, strategic planning, and executive-level decision discussions.',
    overview: 'A leadership workshop deck designed to align stakeholders on strategy, market shifts, and business priorities in a complex telecom environment.',
    keywords: ['Ericsson', 'executive workshop', 'strategy', 'leadership', 'telecom trends', 'market outlook'],
    poc: 'Executive Engagement Lead',
    contact: 'Strategic accounts and executive advisory team'
  },
  {
    id: 'maxis-rfi',
    title: 'Maxis RFI Final',
    type: 'RFI Response',
    category: 'Customer Discovery & Capability Fit',
    path: 'source-materials/customer-responses/Maxis RFI_final.pptx',
    fileType: 'pptx',
    summary: 'This RFI response captures discovery-oriented answers for Maxis, covering strategic priorities, use cases, capability fit, and implementation considerations. It is framed to help the customer assess solution readiness and partnership fit.',
    overview: 'An RFI response deck that focuses on customer discovery, capability positioning, and readiness discussion rather than a full commercial bid.',
    keywords: ['Maxis', 'RFI', 'discovery', 'capability fit', 'telecom', 'partnership'],
    poc: 'Customer Engagement Manager',
    contact: 'Account team / solution lead'
  },
  {
    id: 'stc-response',
    title: 'stc Response',
    type: 'RFP Response',
    category: 'Telecom Modernization & Architecture',
    path: 'source-materials/customer-responses/specialized by stc_Response_02042026_vf.pptx',
    fileType: 'pptx',
    summary: 'The stc response outlines solution coverage, operational scope, and proposed telecom modernization themes aligned to the customer context. It emphasizes practicality, problem framing, and value-focused architectural positioning.',
    overview: 'A specialized proposal deck tailored to a telecom operator context with solution framing and transformation priorities.',
    keywords: ['stc', 'specialized response', 'telecom', 'solution', 'RFP', 'modernization'],
    poc: 'Telecom Solutions Lead',
    contact: 'Regional telecom solution team'
  },
  {
    id: 'tff-technical',
    title: 'TFF Technical Response',
    type: 'Technical Response',
    category: 'Technical Architecture & Implementation',
    path: 'source-materials/customer-responses/2026.06.02 TFF Technical Response.docx',
    fileType: 'docx',
    summary: 'This technical response delivers a direct answer to a technical requirement set, likely centered on architecture, implementation, and solution feasibility. It is structured to support proposal quality and engineering credibility for the customer evaluation.',
    overview: 'A technical solution document focused on engineering fit, architecture logic, and implementation confidence for a telecom or enterprise customer brief.',
    keywords: ['TFF', 'technical response', 'architecture', 'implementation', 'solution feasibility', 'engineering'],
    poc: 'Technical Solutions Architect',
    contact: 'Engineering and solution architecture practice'
  },
  {
    id: 'invent-tmt',
    title: 'Invent India TMT Monthly Update',
    type: 'Presentation',
    category: 'Performance Dashboard',
    path: 'source-materials/202607_Invent India Telco Media & Tech July 2026 Updates.pptx',
    fileType: 'pptx',
    summary: 'This deck summarizes monthly TMT performance across bookings, pipeline, revenue, and account coverage, with a focus on market priorities and action points. It highlights the areas needing closure acceleration, resource deployment, and pipeline health management.',
    overview: 'The presentation combines leadership dashboard analytics, segment performance, and operational actions for telecom media and tech growth tracking.',
    keywords: ['TMT', 'July 2026', 'booking', 'pipeline', 'ARVE', 'inter CM', 'accounts', 'performance dashboard'],
    poc: 'TMT Practice Lead',
    contact: 'Telecom Media & Tech performance team'
  },
  {
    id: 'rakuten-data-monetization',
    title: 'Rakuten Mobile Data Monetization Use Cases',
    type: 'Use Case Deck',
    category: 'Data Monetization',
    path: 'source-materials/Rakuten Mobile - Telco Data Monetization use cases (1).pptx',
    fileType: 'pptx',
    summary: 'This deck covers monetization opportunities using telecom data, customer insights, and analytics-driven use cases such as productization and platform-enabled value creation. It frames the practical business scenarios behind data-led monetization and ecosystem leverage.',
    overview: 'A strategic use-case deck on telco data monetization, analytics value, and productization for next-generation telecom business models.',
    keywords: ['Rakuten', 'data monetization', 'telecom data', 'use cases', 'analytics', 'platform', 'AI'],
    poc: 'Data Monetization & Analytics Lead',
    contact: 'Telco data and monetization practice'
  },
  {
    id: 'tmt-newsletter',
    title: 'TMT July 2026 Newsletter',
    type: 'Newsletter',
    category: 'Executive Summary',
    path: 'source-materials/TMT_July_2026_Newsletter.pdf',
    fileType: 'pdf',
    summary: 'The newsletter condenses the key monthly updates, highlights, and executive actions from the TMT performance review into a briefing format. It is useful for quick stakeholder communication and summary sharing.',
    overview: 'An executive-ready summary that captures progress trends, KPI signals, market focus areas, and the actions needed to improve pipeline and delivery health.',
    keywords: ['newsletter', 'TMT', 'monthly update', 'summary', 'pipeline', 'performance'],
    poc: 'Knowledge Management Lead',
    contact: 'Internal communications / insight desk'
  }
];

const newUploadDocuments = [
  ['c-and-w-panama-rfp', 'C&W Panama RFP - IT Strategic Assessment', 'RFP Response', 'IT Strategy & Assessment', 'OneDrive_2026-09-22 (1)/March Uploads/C&W Panana RFP - IT Strategic Assessment Final  06Sep25.pptx', ['C&W Panama', 'IT strategic assessment', 'RFP', 'telecom', 'IT strategy']],
  ['stc-ebu-process', 'stc eBU Process Implementation & Quality Assurance Approach', 'Proposal', 'eBU Process & Quality Assurance', 'OneDrive_2026-09-22 (1)/March Uploads/stc eBU_Process Implementation & Quality Assurance Approach_V0.1.pptx', ['stc', 'eBU', 'process implementation', 'quality assurance', 'telecom']],
  ['tnb-allo-proposal', 'TNB Allo Consulting Proposal', 'Proposal', 'Consulting & Telecom Strategy', 'OneDrive_2026-09-22 (1)/March Uploads/TNB - Allo Consulting Proposal_Ver3.0_080623.pptx', ['TNB', 'Allo', 'consulting proposal', 'telecom', 'strategy']],
  ['blablacar-india', 'BlaBlaCar Indian Market Analysis Proposal', 'Proposal', 'Market Strategy & Growth', 'OneDrive_2026-09-22 (2)/Selected-Not uploaded(for march)/20230922_BlaBlaCar Indian market analysis_Proposal CGI FV (1).pptx', ['BlaBlaCar', 'India market', 'market analysis', 'proposal', 'strategy']],
  ['bics-data-monetization', 'BICS Data Monetization Proposal Response', 'Proposal Response', 'Data Monetization & Analytics', 'OneDrive_2026-09-22 (2)/Selected-Not uploaded(for march)/BICS Data Monetization_SRG Proposal Response.pptx', ['BICS', 'data monetization', 'proposal response', 'analytics', 'telecom']],
  ['indus-sustainability', 'Indus Towers Sustainability Upskilling Deck', 'Presentation', 'Sustainability', 'OneDrive_2026-09-22 (2)/Selected-Not uploaded(for march)/Indus Towers_Sustainability Upskilling Deck updated V3.1.pptx', ['Indus Towers', 'sustainability', 'upskilling', 'telecom', 'ESG']],
  ['orange-newco-cpq', 'Orange Project Newco CPQ', 'Proposal', 'CPQ & Commercial Transformation', 'OneDrive_2026-09-22 (2)/Selected-Not uploaded(for march)/Orange Project Newco CPQ.pptx', ['Orange', 'Newco', 'CPQ', 'commercial transformation', 'sales']],
  ['daily-thanthi-product', 'Daily Thanthi Product Strategy Proposal', 'Proposal', 'Product Strategy & Growth', 'OneDrive_2026-09-22 (2)/Selected-Not uploaded(for march)/Proposal_Product strategy_Daily Thanthi.pptx', ['Daily Thanthi', 'product strategy', 'proposal', 'media', 'growth']],
  ['capgemini-pmi', 'Capgemini RFS Response - Pre-PMI IT Stream', 'RFS Response', 'IT Transformation & PMI', 'OneDrive_2026-09-22 (2)/Selected-Not uploaded(for march)/RFS Response_Pre-PMI_IT Stream_Capgemini.pptx', ['Capgemini', 'RFS', 'Pre-PMI', 'IT stream', 'transformation']],
  ['data-landscape-linear-tv', 'Data Landscape Strategy for Linear TV', 'Strategy', 'Data Strategy', 'OneDrive_2026-09-22/April uploads/202602_Data Landscape Strategy for Linear TV_v0.1.pptx', ['data landscape', 'linear TV', 'data strategy', 'media', 'analytics']],
  ['lla-ai-use-case', 'LLA AI Use Case Project RFP', 'RFP Response', 'AI Use Cases & Telecom Transformation', 'OneDrive_2026-09-22/April uploads/202604_LLA_AI Use Case Project_RFP_v1.0_DRAFT.pptx', ['LLA', 'AI', 'use cases', 'RFP', 'telecom']],
  ['liberty-networks', 'Liberty Networks Proposal', 'Proposal', 'Network Transformation & Telecom', 'OneDrive_2026-09-22/April uploads/Liberty Networks 0.2.pptx', ['Liberty Networks', 'proposal', 'telecom', 'network', 'transformation']],
  ['mnp-readiness', 'TMT Proposal - MNP Readiness Assessment Approach', 'Proposal', 'MNP Readiness & Network Transformation', 'OneDrive_2_22-9-2026/#1 TMT Proposal_MNP Readiness Assessment Approach​.pptx', ['TMT', 'MNP', 'readiness assessment', 'network', 'proposal']],
  ['business-product-strategy', 'TMT Proposal - Business and Product Strategy', 'Proposal', 'Product & Business Strategy', 'OneDrive_2_22-9-2026/#2 TMT Proposal_Business and Product Strategy.pptx', ['TMT', 'business strategy', 'product strategy', 'telecom', 'proposal']],
  ['architecture-coe', 'TMT Proposal - Architecture CoE', 'Proposal', 'Enterprise Architecture & CoE', 'OneDrive_2_22-9-2026/#3 TMT Proposal_Architecture CoE.pptx', ['TMT', 'architecture CoE', 'enterprise architecture', 'telecom', 'proposal']],
  ['mobile-access-engineering', 'TMT Proposal - Mobile Access Engineering Cost Transformation', 'Proposal', 'Mobile Access Engineering & Cost Transformation', 'OneDrive_2_22-9-2026/#4 TMT Proposal_Mobile Access Engineering Cost Transformation Programme Support.pptx', ['TMT', 'mobile access', 'engineering', 'cost transformation', 'telecom']],
  ['nbn-process-simplification', 'TMT Proposal - Capgemini nbn Process Simplification', 'Proposal', 'Process Simplification & Automation', 'OneDrive_2_22-9-2026/#5 TMT Proposal_Capgemini nbn Process Simplification.pptx', ['TMT', 'Capgemini', 'nbn', 'process simplification', 'telecom']]
].map(([id, title, type, category, path, keywords]) => ({
  id,
  title,
  type,
  category,
  path: `source-materials/new-uploads/${path}`,
  fileType: 'pptx',
  summary: `${title} is an added library presentation covering ${keywords.slice(0, 3).join(', ')}. It is available as a searchable reference for proposal development, customer discussions, and strategic response planning.`,
  overview: `Newly added material focused on the solution area ${category.toLowerCase()} and related telecom or enterprise transformation priorities.`,
  keywords,
  poc: 'Relevant account, proposal, or solution lead',
  contact: 'Contact the owning account team or practice lead'
}));

documents.push(...newUploadDocuments);

const capabilityDocuments = [
  {
    id: 'ai-operating-models',
    title: 'Operating Models in the Era of AI: G2M Deck',
    type: 'POV / Strategy',
    category: 'AI Operating Models',
    path: 'source-materials/org-capabilities/Operating Models in the Era of AI_G2M Deck_2026 2.pptx',
    fileType: 'pptx',
    summary: 'This deck explores how AI is changing operating models, go-to-market motions, and organizational design. It provides a reusable point of view for conversations about AI-enabled growth, transformation, and capability evolution.',
    overview: 'A strategic capability reference for AI-era operating model and go-to-market transformation discussions.',
    keywords: ['AI', 'operating models', 'G2M', 'go-to-market', 'organization design', 'transformation'],
    poc: 'AI Transformation Practice Lead',
    contact: 'AI and operating model capability team'
  }
];

documents.push(...capabilityDocuments);

const libraryAreas = [
  {
    title: 'RFP and proposal responses',
    description: 'Customer response libraries, commercial bids, and structured solution narratives.'
  },
  {
    title: 'Operating model and transformation',
    description: 'IT mutualization, governance, shared services, and enterprise value modernization.'
  },
  {
    title: 'Sales and digital enablement',
    description: 'Sales transformation, CRM enablement, and digital productivity plays.'
  },
  {
    title: 'Executive briefings and workshops',
    description: 'Leadership reviews, strategic discussions, and senior stakeholder alignment decks.'
  },
  {
    title: 'Performance and pipeline dashboards',
    description: 'Booking trends, TMT KPIs, account coverage, and operational health views.'
  },
  {
    title: 'Data monetization and use cases',
    description: 'Telco data opportunity framing, analytical business cases, and monetization principles.'
  }
];

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const resultCount = document.getElementById('resultCount');
const areaList = document.getElementById('areaList');
const suggestedTags = document.getElementById('suggestedTags');
const totalDocs = document.getElementById('totalDocs');
const totalCategories = document.getElementById('totalCategories');
const clearBtn = document.getElementById('clearBtn');
const searchBtn = document.getElementById('searchBtn');
const typeFilter = document.getElementById('typeFilter');
const sortSelect = document.getElementById('sortSelect');
const favoritesBtn = document.getElementById('favoritesBtn');
const favoritesCount = document.getElementById('favoritesCount');
const resetViewBtn = document.getElementById('resetViewBtn');
const detailModal = document.getElementById('detailModal');
const modalClose = document.getElementById('modalClose');
const modalTitle = document.getElementById('modalTitle');
const modalType = document.getElementById('modalType');
const modalSummary = document.getElementById('modalSummary');
const modalMeta = document.getElementById('modalMeta');
const modalOpen = document.getElementById('modalOpen');
const modalPdf = document.getElementById('modalPdf');
const modalShare = document.getElementById('modalShare');
const toast = document.getElementById('toast');
const toolTabs = document.querySelectorAll('.tool-tab');
const toolPanels = document.querySelectorAll('.tool-panel');
const slideSearchInput = document.getElementById('slideSearchInput');
const slideSearchBtn = document.getElementById('slideSearchBtn');
const slideResults = document.getElementById('slideResults');
const docFinderInput = document.getElementById('docFinderInput');
const docFinderBtn = document.getElementById('docFinderBtn');
const docFinderResults = document.getElementById('docFinderResults');
const uploadInput = document.getElementById('uploadInput');
const uploadBrowseBtn = document.getElementById('uploadBrowseBtn');
const uploadList = document.getElementById('uploadList');
const uploadStatus = document.getElementById('uploadStatus');
let selectedDocument = null;
let showingFavorites = false;
const favoriteIds = new Set(JSON.parse(localStorage.getItem('knowledge-library-favorites') || '[]'));
const uploadedReferences = JSON.parse(localStorage.getItem('knowledge-library-uploads') || '[]');
const uploadedDocuments = [];

function renderAreaList() {
  areaList.innerHTML = libraryAreas.map(area => `
    <li>
      <strong>${area.title}</strong>
      <span>${area.description}</span>
    </li>
  `).join('');
}

function renderSuggestedTags() {
  const tags = ['RFP', 'Orange', 'Maxis', 'AI', 'TMT', 'sales transformation', 'data monetization', 'digital transformation'];
  suggestedTags.innerHTML = tags.map(tag => `<button class="tag" type="button">${tag}</button>`).join('');

  suggestedTags.querySelectorAll('.tag').forEach((tag) => {
    tag.addEventListener('click', () => {
      searchInput.value = tag.textContent.trim();
      runSearch();
    });
  });
}

function renderTypeFilter() {
  [...new Set(documents.map((doc) => doc.type))].sort().forEach((type) => {
    const option = document.createElement('option');
    option.value = type;
    option.textContent = type;
    typeFilter.appendChild(option);
  });
}

function categorizeUpload(fileName) {
  const name = normalize(fileName);
  if (/rfp|rfi|rfs|response|proposal/.test(name)) return 'Proposal & Response Solution';
  if (/ai|genai|machine learning|ml/.test(name)) return 'AI & Data Solutions';
  if (/data|analytics|monetization|insight/.test(name)) return 'Data, Analytics & Monetization';
  if (/sales|crm|cpq|commercial|customer/.test(name)) return 'Sales & Customer Transformation';
  if (/network|telecom|mobile|oss|bss/.test(name)) return 'Telecom & Network Transformation';
  if (/architecture|technical|engineering|technology/.test(name)) return 'Architecture & Technology';
  if (/process|operating|operation|transformation/.test(name)) return 'Operating Model & Process Transformation';
  return 'General Business Transformation';
}

async function hashFile(file) {
  try {
    const buffer = await file.arrayBuffer();
    const digest = await crypto.subtle.digest('SHA-256', buffer);
    return [...new Uint8Array(digest)].map((byte) => byte.toString(16).padStart(2, '0')).join('');
  } catch {
    return `${normalize(file.name)}-${file.size}-${file.lastModified}`;
  }
}

function isDuplicateUpload(file, hash) {
  const normalizedName = normalize(file.name);
  const knownNames = documents.map((doc) => normalize(doc.title + ' ' + doc.path));
  return uploadedReferences.some((item) => item.hash === hash || normalize(item.name) === normalizedName) || knownNames.some((name) => name.includes(normalizedName) || normalizedName.includes(name));
}

function addUploadedTypeFilter() {
  if ([...typeFilter.options].some((option) => option.value === 'Uploaded Document')) return;
  const option = document.createElement('option');
  option.value = 'Uploaded Document';
  option.textContent = 'Uploaded Document';
  typeFilter.appendChild(option);
}

function searchableText(doc) {
  return [doc.title, doc.type, doc.category, doc.summary, doc.overview, doc.keywords.join(' '), doc.poc, doc.contact].join(' ').toLowerCase();
}

function findDocuments(query, types = []) {
  const normalizedQuery = normalize(query);
  return documents.filter((doc) => (!normalizedQuery || searchableText(doc).includes(normalizedQuery)) && (!types.length || types.includes(doc.fileType)));
}

function getMatchedKeyword(doc, query) {
  const normalizedQuery = normalize(query);
  if (!normalizedQuery) return doc.keywords[0] || doc.category;
  return [doc.title, doc.category, ...doc.keywords].find((value) => normalize(value).includes(normalizedQuery)) || query;
}

function getSlideReference(doc, query) {
  const keywordIndex = Math.max(0, doc.keywords.findIndex((keyword) => normalize(keyword).includes(normalize(query))));
  return String(keywordIndex + 1).padStart(2, '0');
}

function renderToolResults(container, items, emptyMessage) {
  container.innerHTML = items.length ? items.slice(0, 8).map((doc) => `
    <article class="tool-result"><div><strong>${doc.title}</strong><span>${doc.type} · ${doc.category}</span></div><button class="text-btn" type="button" data-tool-doc="${doc.id}">Open</button></article>
  `).join('') : `<div class="tool-empty">${emptyMessage}</div>`;
  container.querySelectorAll('[data-tool-doc]').forEach((button) => button.addEventListener('click', () => openDocument(documents.find((doc) => doc.id === button.dataset.toolDoc))));
}

function searchSlides() {
  const query = slideSearchInput.value.trim();
  const matches = findDocuments(query);
  if (!matches.length) {
    slideResults.innerHTML = `<div class="tool-empty">No library matches yet. Try AI, strategy, architecture, Orange, RFP, or data monetization.</div>`;
    return;
  }

  slideResults.innerHTML = matches.slice(0, 12).map((doc) => {
    const keyword = getMatchedKeyword(doc, query);
    const slideReference = getSlideReference(doc, query);
    return `
      <article class="slide-result" data-tool-doc="${doc.id}" tabindex="0" role="button" aria-label="Open ${doc.title}">
        <div class="slide-snapshot">
          <div class="snapshot-topline"><span>INVENT INDIA TMT LIBRARY</span><span>SLIDE ${slideReference}</span></div>
          <div class="snapshot-rule"></div>
          <div class="snapshot-kicker">${doc.type}</div>
          <strong>${doc.title}</strong>
          <p>${doc.summary}</p>
          <div class="snapshot-keyword">MATCH · ${keyword}</div>
        </div>
        <div class="slide-result-info"><strong>${doc.title}</strong><span>${doc.category} · ${doc.fileType.toUpperCase()}</span><button class="text-btn" type="button">Open complete file &rarr;</button></div>
      </article>
    `;
  }).join('');

  slideResults.querySelectorAll('[data-tool-doc]').forEach((preview) => {
    const open = () => openDocument(documents.find((doc) => doc.id === preview.dataset.toolDoc));
    preview.addEventListener('click', open);
    preview.addEventListener('keydown', (event) => {
      if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); open(); }
    });
  });
}

function searchDocs() {
  renderToolResults(docFinderResults, findDocuments(docFinderInput.value), 'No document matches yet. Try a customer, proposal, or capability keyword.');
}

function activateTool(tool) {
  toolTabs.forEach((tab) => {
    const active = tab.dataset.tool === tool;
    tab.classList.toggle('is-active', active);
    tab.setAttribute('aria-selected', String(active));
  });
  toolPanels.forEach((panel) => {
    panel.hidden = panel.dataset.panel !== tool;
    panel.classList.toggle('is-active', panel.dataset.panel === tool);
  });
}

function updateFavoritesCount() {
  favoritesCount.textContent = favoriteIds.size;
  favoritesBtn.classList.toggle('is-active', showingFavorites);
  favoritesBtn.setAttribute('aria-pressed', String(showingFavorites));
}

function normalize(value) {
  return String(value || '').toLowerCase();
}

function documentUrl(path) {
  return path.split('/').map((part) => encodeURIComponent(part)).join('/');
}

function runSearch() {
  const query = normalize(searchInput.value.trim());
  let filtered = !query
    ? documents
    : documents.filter((doc) => {
        const haystack = [
          doc.title,
          doc.type,
          doc.category,
          doc.summary,
          doc.overview,
          doc.keywords.join(' '),
          doc.poc,
          doc.contact
        ].join(' ').toLowerCase();

        return haystack.includes(query);
      });

  if (typeFilter.value !== 'all') filtered = filtered.filter((doc) => doc.type === typeFilter.value);
  if (showingFavorites) filtered = filtered.filter((doc) => favoriteIds.has(doc.id));
  if (sortSelect.value === 'title') filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sortSelect.value === 'category') filtered.sort((a, b) => a.category.localeCompare(b.category));

  renderResults(filtered);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add('is-visible');
  window.clearTimeout(showToast.timeout);
  showToast.timeout = window.setTimeout(() => toast.classList.remove('is-visible'), 2400);
}

function openDetails(doc) {
  selectedDocument = doc;
  modalTitle.textContent = doc.title;
  modalType.textContent = `${doc.type} / ${doc.category}`;
  modalSummary.textContent = `${doc.summary} ${doc.overview}`;
  modalMeta.innerHTML = `<strong>Point of contact</strong><span>${doc.poc}<br>${doc.contact}</span><strong>Keywords</strong><span>${doc.keywords.join(' · ')}</span>`;
  detailModal.hidden = false;
  document.body.classList.add('modal-open');
}

function closeDetails() {
  detailModal.hidden = true;
  document.body.classList.remove('modal-open');
  selectedDocument = null;
}

function toggleFavorite(docId) {
  if (favoriteIds.has(docId)) favoriteIds.delete(docId);
  else favoriteIds.add(docId);
  localStorage.setItem('knowledge-library-favorites', JSON.stringify([...favoriteIds]));
  updateFavoritesCount();
  runSearch();
}

function openDocument(doc) {
  const url = doc.path.startsWith('http') ? doc.path : documentUrl(doc.path);
  window.open(url, '_blank', 'noopener,noreferrer');
}

function downloadPdfBrief(doc) {
  const pdfTarget = doc.fileType === 'pdf' ? doc.path : null;

  if (pdfTarget) {
    const link = document.createElement('a');
    link.href = documentUrl(pdfTarget);
    link.download = `${doc.title}.pdf`;
    document.body.appendChild(link);
    link.click();
    link.remove();
    return;
  }

  const printWindow = window.open('', '_blank', 'width=900,height=700');
  const html = `
    <html>
      <head>
        <title>${doc.title} — PDF brief</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 32px; color: #172033; }
          h1 { margin-bottom: 6px; }
          .meta { color: #5d6b82; margin-bottom: 18px; }
          p { line-height: 1.7; }
          .tag { display: inline-block; background: #eef4ff; color: #234fd6; padding: 6px 10px; margin: 2px 8px 2px 0; border-radius: 999px; font-size: 12px; }
          .box { border: 1px solid #dfe8f4; border-radius: 12px; padding: 16px; margin-top: 18px; }
        </style>
      </head>
      <body>
        <h1>${doc.title}</h1>
        <div class="meta">${doc.type} • ${doc.category}</div>
        <p>${doc.summary}</p>
        <div class="box">
          <strong>Point of contact</strong>
          <p>${doc.poc}<br>${doc.contact}</p>
        </div>
        <div class="box">
          <strong>Keywords</strong><br>
          ${doc.keywords.map((k) => `<span class="tag">${k}</span>`).join('')}
        </div>
      </body>
    </html>
  `;

  printWindow.document.write(html);
  printWindow.document.close();
  printWindow.focus();
  printWindow.print();
}

function renderResults(items) {
  if (!items.length) {
    resultsContainer.innerHTML = `
      <div class="empty-state">
        <h3>No matching documents found</h3>
        <p>Try another keyword such as CWS, Orange, RFP, AI, TMT, sales transformation, or Maxis.</p>
      </div>
    `;
    resultCount.textContent = '0 matches';
    return;
  }

  resultsContainer.innerHTML = items.map((doc) => `
    <article class="result-card">
      <div class="result-top">
        <h4>${doc.title}</h4>
        <div class="result-actions"><span class="badge">${doc.type}</span><button class="favorite-btn ${favoriteIds.has(doc.id) ? 'is-favorite' : ''}" type="button" data-action="favorite" data-id="${doc.id}" aria-label="Save ${doc.title}">${favoriteIds.has(doc.id) ? '★' : '☆'}</button></div>
      </div>

      <p>${doc.summary}</p>

      <div class="meta-row">
        <div class="meta-block">
          <span class="meta-label">Solution focus</span>
          <div class="meta-value">${doc.category}</div>
        </div>
        <div class="meta-block">
          <span class="meta-label">Point of contact</span>
          <div class="meta-value">${doc.poc}<br>${doc.contact}</div>
        </div>
      </div>

      <ul class="keywords">
        ${doc.keywords.map((keyword) => `<li>${keyword}</li>`).join('')}
      </ul>

      <div class="actions-row">
        <button class="secondary-btn" type="button" data-action="details" data-id="${doc.id}">View details</button>
        <button class="secondary-btn" type="button" data-action="open" data-id="${doc.id}">Open source</button>
        <button class="link-btn" type="button" data-action="pdf" data-id="${doc.id}">Download PDF</button>
      </div>
    </article>
  `).join('');

  resultCount.textContent = `${items.length} match${items.length === 1 ? '' : 'es'}`;

  resultsContainer.querySelectorAll('[data-action="open"]').forEach((button) => {
    button.addEventListener('click', () => {
      const doc = documents.find((item) => item.id === button.dataset.id);
      if (doc) openDocument(doc);
    });
  });

  resultsContainer.querySelectorAll('[data-action="details"]').forEach((button) => {
    button.addEventListener('click', () => openDetails(documents.find((item) => item.id === button.dataset.id)));
  });

  resultsContainer.querySelectorAll('[data-action="favorite"]').forEach((button) => {
    button.addEventListener('click', () => toggleFavorite(button.dataset.id));
  });

  resultsContainer.querySelectorAll('[data-action="pdf"]').forEach((button) => {
    button.addEventListener('click', () => {
      const doc = documents.find((item) => item.id === button.dataset.id);
      if (doc) downloadPdfBrief(doc);
    });
  });
}

toolTabs.forEach((tab) => tab.addEventListener('click', () => activateTool(tab.dataset.tool)));
slideSearchBtn.addEventListener('click', searchSlides);
slideSearchInput.addEventListener('keydown', (event) => { if (event.key === 'Enter') searchSlides(); });
docFinderBtn.addEventListener('click', searchDocs);
docFinderInput.addEventListener('keydown', (event) => { if (event.key === 'Enter') searchDocs(); });
uploadBrowseBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (typeof uploadInput.showPicker === 'function') uploadInput.showPicker();
  else uploadInput.click();
});
uploadInput.addEventListener('change', async () => {
  const files = [...uploadInput.files];
  if (!files.length) return;
  uploadStatus.className = 'upload-status';
  uploadStatus.textContent = 'Checking files and categorizing solution focus...';
  let added = 0;
  const errors = [];

  for (const file of files) {
    const hash = await hashFile(file);
    if (isDuplicateUpload(file, hash)) {
      errors.push(`${file.name}: already in the library`);
      continue;
    }

    const objectUrl = URL.createObjectURL(file);
    const category = categorizeUpload(file.name);
    const record = {
      id: `upload-${hash.slice(0, 12)}`,
      title: file.name.replace(/\.[^/.]+$/, ''),
      type: 'Uploaded Document',
      category,
      path: objectUrl,
      fileType: file.name.split('.').pop().toLowerCase(),
      summary: `User-uploaded reference categorized under ${category}. The file is available for this browser session and searchable across its filename and solution focus.`,
      overview: `Uploaded document with automatically assigned solution focus: ${category}.`,
      keywords: [category, file.name.replace(/\.[^/.]+$/, '')],
      poc: 'User-uploaded library reference',
      contact: 'Review the source document for contact details'
    };

    documents.push(record);
    uploadedDocuments.push(record);
    uploadedReferences.unshift({ name: file.name, size: file.size, hash, created: new Date().toLocaleDateString(), id: record.id });
    added += 1;
  }

  localStorage.setItem('knowledge-library-uploads', JSON.stringify(uploadedReferences));
  if (added) {
    addUploadedTypeFilter();
    totalDocs.textContent = documents.length;
    renderUploads();
    runSearch();
  }
  uploadStatus.className = errors.length ? 'upload-status has-error' : 'upload-status has-success';
  uploadStatus.innerHTML = `${added ? `<strong>${added} file${added === 1 ? '' : 's'} added to the library.</strong>` : ''}${errors.length ? `<span>${errors.join('<br>')}</span>` : ''}`;
  showToast(errors.length ? 'Upload completed with duplicate warnings' : `${added} document${added === 1 ? '' : 's'} added to the library`);
  uploadInput.value = '';
});

function renderUploads() {
  uploadList.innerHTML = uploadedReferences.length ? uploadedReferences.slice(0, 12).map((file) => `<article class="project-item"><strong>${file.name}</strong><span>${Math.ceil(file.size / 1024)} KB · added ${file.created}</span></article>`).join('') : '<div class="tool-empty">Uploaded file references will appear here for this browser session.</div>';
}

searchBtn.addEventListener('click', runSearch);
searchInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') runSearch();
});
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  runSearch();
  searchInput.focus();
});
typeFilter.addEventListener('change', runSearch);
sortSelect.addEventListener('change', runSearch);
favoritesBtn.addEventListener('click', () => {
  showingFavorites = !showingFavorites;
  updateFavoritesCount();
  runSearch();
});
resetViewBtn.addEventListener('click', () => {
  searchInput.value = '';
  typeFilter.value = 'all';
  sortSelect.value = 'relevance';
  showingFavorites = false;
  updateFavoritesCount();
  runSearch();
});
modalClose.addEventListener('click', closeDetails);
detailModal.addEventListener('click', (event) => {
  if (event.target === detailModal) closeDetails();
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && !detailModal.hidden) closeDetails();
});
modalOpen.addEventListener('click', () => selectedDocument && openDocument(selectedDocument));
modalPdf.addEventListener('click', () => selectedDocument && downloadPdfBrief(selectedDocument));
modalShare.addEventListener('click', async () => {
  if (!selectedDocument) return;
  const shareUrl = `${window.location.href.split('#')[0]}#${selectedDocument.id}`;
  try {
    await navigator.clipboard.writeText(shareUrl);
    showToast('Document link copied');
  } catch {
    showToast('Copy unavailable in this browser');
  }
});

renderAreaList();
renderTypeFilter();
renderSuggestedTags();
updateFavoritesCount();
searchSlides();
searchDocs();
renderUploads();
totalDocs.textContent = documents.length;
totalCategories.textContent = libraryAreas.length;
runSearch();
