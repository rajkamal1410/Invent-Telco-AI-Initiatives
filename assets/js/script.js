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
    id: 'rakuten-data-monetization',
    title: 'Rakuten Mobile Data Monetization Use Cases',
    type: 'Use Case Deck',
    category: 'AI, Data Monetization & Telco Intelligence',
    path: 'source-materials/Rakuten Mobile - Telco Data Monetization use cases (1).pptx',
    fileType: 'pptx',
    summary: 'This deck translates telco data into commercially relevant use cases across identity, fraud prevention, enterprise intelligence, and ecosystem-driven product design. It brings in the strategic lens of AI, first-party data, and ecosystem value creation, making it especially relevant to the emerging telco monetization agenda.',
    overview: 'A strategic use-case deck on AI-enabled telco data monetization, analytics value, ecosystem leverage, and productization for next-generation telecom business models.',
    keywords: ['Rakuten', 'data monetization', 'telecom data', 'use cases', 'analytics', 'platform', 'AI', 'network APIs', 'identity', 'fraud prevention'],
    poc: 'Data Monetization & Analytics Lead',
    contact: 'Telco data and monetization practice'
  }
];

const newUploadDocuments = [
  ['c-and-w-panama-rfp', 'C&W Panama RFP - IT Strategic Assessment', 'RFP Response', 'IT Strategy & Assessment', 'customer-responses/C&W Panana RFP - IT Strategic Assessment Final  06Sep25.pptx', ['C&W Panama', 'IT strategic assessment', 'RFP', 'telecom', 'IT strategy']],
  ['stc-ebu-process', 'stc eBU Process Implementation & Quality Assurance Approach', 'Proposal', 'eBU Process & Quality Assurance', 'proposals/stc eBU_Process Implementation & Quality Assurance Approach_V0.1.pptx', ['stc', 'eBU', 'process implementation', 'quality assurance', 'telecom']],
  ['tnb-allo-proposal', 'TNB Allo Consulting Proposal', 'Proposal', 'Consulting & Telecom Strategy', 'proposals/TNB - Allo Consulting Proposal_Ver3.0_080623.pptx', ['TNB', 'Allo', 'consulting proposal', 'telecom', 'strategy']],
  ['blablacar-india', 'BlaBlaCar Indian Market Analysis Proposal', 'Proposal', 'Market Strategy & Growth', 'proposals/20230922_BlaBlaCar Indian market analysis_Proposal CGI FV (1).pptx', ['BlaBlaCar', 'India market', 'market analysis', 'proposal', 'strategy']],
  ['bics-data-monetization', 'BICS Data Monetization Proposal Response', 'Proposal Response', 'Data Monetization & Analytics', 'customer-responses/BICS Data Monetization_SRG Proposal Response.pptx', ['BICS', 'data monetization', 'proposal response', 'analytics', 'telecom']],
  ['indus-sustainability', 'Indus Towers Sustainability Upskilling Deck', 'Presentation', 'Sustainability', 'presentations/Indus Towers_Sustainability Upskilling Deck updated V3.1.pptx', ['Indus Towers', 'sustainability', 'upskilling', 'telecom', 'ESG']],
  ['orange-newco-cpq', 'Orange Project Newco CPQ', 'Proposal', 'CPQ & Commercial Transformation', 'proposals/Orange Project Newco CPQ.pptx', ['Orange', 'Newco', 'CPQ', 'commercial transformation', 'sales']],
  ['daily-thanthi-product', 'Daily Thanthi Product Strategy Proposal', 'Proposal', 'Product Strategy & Growth', 'proposals/Proposal_Product strategy_Daily Thanthi.pptx', ['Daily Thanthi', 'product strategy', 'proposal', 'media', 'growth']],
  ['capgemini-pmi', 'Capgemini RFS Response - Pre-PMI IT Stream', 'RFS Response', 'IT Transformation & PMI', 'customer-responses/RFS Response_Pre-PMI_IT Stream_Capgemini.pptx', ['Capgemini', 'RFS', 'Pre-PMI', 'IT stream', 'transformation']],
  ['data-landscape-linear-tv', 'Data Landscape Strategy for Linear TV', 'Strategy', 'Data Strategy', 'strategy/202602_Data Landscape Strategy for Linear TV_v0.1.pptx', ['data landscape', 'linear TV', 'data strategy', 'media', 'analytics']],
  ['lla-ai-use-case', 'LLA AI Use Case Project RFP', 'RFP Response', 'AI Use Cases & Telecom Transformation', 'customer-responses/202604_LLA_AI Use Case Project_RFP_v1.0_DRAFT.pptx', ['LLA', 'AI', 'use cases', 'RFP', 'telecom']],
  ['liberty-networks', 'Liberty Networks Proposal', 'Proposal', 'Network Transformation & Telecom', 'proposals/Liberty Networks 0.2.pptx', ['Liberty Networks', 'proposal', 'telecom', 'network', 'transformation']],
  ['mnp-readiness', 'TMT Proposal - MNP Readiness Assessment Approach', 'Proposal', 'MNP Readiness & Network Transformation', 'proposals/#1 TMT Proposal_MNP Readiness Assessment Approach​.pptx', ['TMT', 'MNP', 'readiness assessment', 'network', 'proposal']],
  ['business-product-strategy', 'TMT Proposal - Business and Product Strategy', 'Proposal', 'Product & Business Strategy', 'proposals/#2 TMT Proposal_Business and Product Strategy.pptx', ['TMT', 'business strategy', 'product strategy', 'telecom', 'proposal']],
  ['architecture-coe', 'TMT Proposal - Architecture CoE', 'Proposal', 'Enterprise Architecture & CoE', 'proposals/#3 TMT Proposal_Architecture CoE.pptx', ['TMT', 'architecture CoE', 'enterprise architecture', 'telecom', 'proposal']],
  ['mobile-access-engineering', 'TMT Proposal - Mobile Access Engineering Cost Transformation', 'Proposal', 'Mobile Access Engineering & Cost Transformation', 'proposals/#4 TMT Proposal_Mobile Access Engineering Cost Transformation Programme Support.pptx', ['TMT', 'mobile access', 'engineering', 'cost transformation', 'telecom']],
  ['nbn-process-simplification', 'TMT Proposal - Capgemini nbn Process Simplification', 'Proposal', 'Process Simplification & Automation', 'proposals/#5 TMT Proposal_Capgemini nbn Process Simplification.pptx', ['TMT', 'Capgemini', 'nbn', 'process simplification', 'telecom']]
].map(([id, title, type, category, path, keywords]) => ({
  id,
  title,
  type,
  category,
  path: `source-materials/${path}`,
  fileType: 'pptx',
  summary: `${title} is an added library presentation covering ${keywords.slice(0, 3).join(', ')}. It is available as a searchable reference for proposal development, customer discussions, and strategic response planning.`,
  overview: `Newly added material focused on the solution area ${category.toLowerCase()} and related telecom or enterprise transformation priorities.`,
  keywords,
  poc: 'Relevant account, proposal, or solution lead',
  contact: 'Contact the owning account team or practice lead'
}));

documents.push(...newUploadDocuments);

const searchInput = document.getElementById('searchInput');
const resultsContainer = document.getElementById('resultsContainer');
const resultCount = document.getElementById('resultCount');
const suggestedTags = document.getElementById('suggestedTags');
const themeSearchInput = document.getElementById('themeSearchInput');
const themeList = document.getElementById('themeList');
const totalDocs = document.getElementById('totalDocs');
const totalCategories = document.getElementById('totalCategories');
const clearBtn = document.getElementById('clearBtn');
const docSearchForm = document.getElementById('docSearchForm');
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
const uploadInput = document.getElementById('uploadInput');
const uploadList = document.getElementById('uploadList');
const uploadStatus = document.getElementById('uploadStatus');
const assistantForm = document.getElementById('assistantForm');
const assistantQuestion = document.getElementById('assistantQuestion');
const assistantMode = document.getElementById('assistantMode');
const assistantResponse = document.getElementById('assistantResponse');
const assistantSourceOptions = document.querySelectorAll('.source-option');
const assistantSuggestions = document.querySelectorAll('.prompt-suggestion');
let assistantSource = 'internal';
let lastAssistantExport = null;
let selectedDocument = null;
let showingFavorites = false;
let activeTheme = '';
const favoriteIds = new Set(JSON.parse(localStorage.getItem('knowledge-library-favorites') || '[]'));
const uploadedReferences = JSON.parse(localStorage.getItem('knowledge-library-uploads') || '[]');
let uploadsDatabasePromise = null;

function openUploadsDatabase() {
  if (!('indexedDB' in window)) return Promise.reject(new Error('Browser file storage is unavailable.'));
  if (uploadsDatabasePromise) return uploadsDatabasePromise;

  uploadsDatabasePromise = new Promise((resolve, reject) => {
    const request = indexedDB.open('invent-tmt-library', 1);
    request.onupgradeneeded = () => {
      if (!request.result.objectStoreNames.contains('uploadedFiles')) {
        request.result.createObjectStore('uploadedFiles', { keyPath: 'id' });
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => {
      uploadsDatabasePromise = null;
      reject(request.error || new Error('Unable to open browser file storage.'));
    };
    request.onblocked = () => {
      uploadsDatabasePromise = null;
      reject(new Error('Browser file storage is blocked by another open library tab.'));
    };
  });
  return uploadsDatabasePromise;
}

async function saveUploadedFile(record, file, hash, created) {
  const database = await openUploadsDatabase();
  const { path, ...metadata } = record;
  return new Promise((resolve, reject) => {
    const transaction = database.transaction('uploadedFiles', 'readwrite');
    transaction.objectStore('uploadedFiles').put({
      ...metadata,
      hash,
      name: file.name,
      size: file.size,
      created,
      file
    });
    transaction.oncomplete = () => resolve();
    transaction.onerror = () => reject(transaction.error || new Error('Unable to save the uploaded file.'));
    transaction.onabort = () => reject(transaction.error || new Error('Saving the uploaded file was interrupted.'));
  });
}

async function loadUploadedFiles() {
  const database = await openUploadsDatabase();
  return new Promise((resolve, reject) => {
    const transaction = database.transaction('uploadedFiles', 'readonly');
    const request = transaction.objectStore('uploadedFiles').getAll();
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error || new Error('Unable to read saved library files.'));
  });
}

async function restoreUploadedFiles() {
  const storedFiles = await loadUploadedFiles();
  uploadedReferences.splice(0, uploadedReferences.length);

  for (const stored of storedFiles.sort((a, b) => a.addedAt - b.addedAt)) {
    if (documents.some((doc) => doc.id === stored.id)) continue;
    const { file, ...metadata } = stored;
    const enrichment = await buildUploadMetadata(file);
    const themes = stored.themes?.length ? stored.themes : enrichment.themes;
    const record = {
      ...metadata,
      ...enrichment,
      themes,
      category: themes[0] || enrichment.category,
      id: stored.id,
      name: stored.name,
      size: stored.size,
      hash: stored.hash,
      created: stored.created,
      addedAt: stored.addedAt,
      type: 'Uploaded Document',
      path: URL.createObjectURL(file)
    };
    documents.unshift(record);
    uploadedReferences.push({
      id: record.id,
      hash: record.hash,
      name: record.name,
      size: record.size,
      created: record.created
    });
    await saveUploadedFile(record, file, record.hash, record.created);
  }

  try {
    localStorage.setItem('knowledge-library-uploads', JSON.stringify(uploadedReferences));
  } catch (error) {
    console.error('Unable to save uploaded file references in browser storage.', error);
  }
}

function renderSuggestedTags() {
  const tags = ['RFP', 'Orange', 'Maxis', 'AI', 'TMT', 'AI copilot', 'knowledge synthesis', 'analogue search', 'sales transformation', 'data monetization', 'digital transformation', 'governance'];
  suggestedTags.innerHTML = tags.map(tag => `<button class="tag" type="button">${tag}</button>`).join('');

  suggestedTags.querySelectorAll('.tag').forEach((tag) => {
    tag.addEventListener('click', () => {
      searchInput.value = tag.textContent.trim();
      activeTheme = '';
      updateThemeSelection();
      activateTool('docs');
      runSearch();
    });
  });
}

function renderThemeList() {
  const query = normalize(themeSearchInput.value.trim());
  const categoryCounts = new Map();
  documents.forEach((doc) => {
    const categories = doc.themes?.length ? doc.themes : [doc.category];
    [...new Set(categories)].forEach((category) => categoryCounts.set(category, (categoryCounts.get(category) || 0) + 1));
  });
  const categories = [...categoryCounts.entries()]
    .filter(([category]) => normalize(category).includes(query) || category === activeTheme)
    .sort(([a], [b]) => a.localeCompare(b));

  themeList.innerHTML = `
    <button class="theme-card ${activeTheme ? '' : 'is-selected'}" type="button" data-theme="" aria-pressed="${String(!activeTheme)}">
      <strong>All themes</strong><span>${documents.length} documents</span>
    </button>
    ${categories.length ? categories.map(([category, count]) => `
      <button class="theme-card ${activeTheme === category ? 'is-selected' : ''}" type="button" data-theme="${escapeHtml(category)}" aria-pressed="${String(activeTheme === category)}">
        <strong>${escapeHtml(category)}</strong><span>${count} document${count === 1 ? '' : 's'}</span>
      </button>
    `).join('') : '<p class="theme-empty">No themes match your search.</p>'}
  `;

  themeList.querySelectorAll('[data-theme]').forEach((button) => {
    button.addEventListener('click', () => {
      activeTheme = button.dataset.theme;
      updateThemeSelection();
      runSearch();
    });
  });
}

function updateThemeSelection() {
  themeList.querySelectorAll('[data-theme]').forEach((button) => {
    const selected = button.dataset.theme === activeTheme;
    button.classList.toggle('is-selected', selected);
    button.setAttribute('aria-pressed', String(selected));
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

const uploadTopicRules = [
  { category: 'Proposal & Response Solution', terms: ['rfp', 'rfi', 'rfs', 'proposal', 'tender', 'bid response', 'commercial response'] },
  { category: 'AI & Data Solutions', terms: ['artificial intelligence', 'generative ai', 'genai', 'machine learning', 'large language model', 'llm', 'copilot', 'automation'] },
  { category: 'Data, Analytics & Monetization', terms: ['data monetization', 'monetization', 'analytics', 'data product', 'data products', 'customer insights', 'business intelligence'] },
  { category: 'Sales & Customer Transformation', terms: ['sales transformation', 'sales', 'crm', 'cpq', 'customer experience', 'customer journey', 'commercial productivity'] },
  { category: 'Telecom & Network Transformation', terms: ['telecom', 'telecommunications', 'telco', 'network', '5g', 'mobile access', 'oss', 'bss', 'mnp', 'radio access'] },
  { category: 'Architecture & Technology', terms: ['architecture', 'technology', 'engineering', 'cloud', 'platform', 'integration', 'technical'] },
  { category: 'Operating Model & Process Transformation', terms: ['operating model', 'operating models', 'process transformation', 'process simplification', 'mutualization', 'shared services', 'governance', 'operational excellence'] },
  { category: 'Market Strategy & Growth', terms: ['market analysis', 'market strategy', 'market entry', 'growth strategy', 'go to market', 'g2m'] },
  { category: 'Product Strategy & Growth', terms: ['product strategy', 'product management', 'product development', 'product growth'] },
  { category: 'Data Strategy', terms: ['data strategy', 'data landscape', 'data governance', 'data architecture'] },
  { category: 'Sustainability', terms: ['sustainability', 'esg', 'environmental', 'carbon', 'climate'] },
  { category: 'Executive Briefing', terms: ['executive briefing', 'executive workshop', 'leadership', 'board', 'strategic workshop'] }
];

const uploadKeywordStopWords = new Set([
  'about', 'after', 'also', 'approach', 'based', 'business', 'capgemini', 'customer', 'document',
  'draft', 'final', 'from', 'into', 'overview', 'project', 'support', 'the', 'their', 'this',
  'through', 'using', 'version', 'with'
]);

function normalizedWords(value) {
  return ` ${normalize(value).replace(/[^a-z0-9]+/g, ' ').trim()} `;
}

function containsUploadTerm(text, term) {
  return text.includes(normalizedWords(term));
}

async function buildUploadMetadata(file) {
  const fileTitle = file.name.replace(/\.[^/.]+$/, '');
  let documentText = '';
  if (file.name.toLowerCase().endsWith('.txt')) {
    documentText = (await file.slice(0, 300000).text()).replace(/\0/g, ' ');
  }

  const indexedText = [fileTitle, documentText].filter(Boolean).join('\n').slice(0, 300000);
  const normalizedSource = normalizedWords(indexedText);
  const matchedTerms = [];
  const rankedThemes = uploadTopicRules.map((rule) => {
    const hits = rule.terms.filter((term) => containsUploadTerm(normalizedSource, term));
    matchedTerms.push(...hits);
    return { category: rule.category, score: hits.length };
  }).filter((theme) => theme.score > 0).sort((a, b) => b.score - a.score);

  const categories = rankedThemes.length
    ? rankedThemes.filter((theme) => theme.score >= Math.max(1, rankedThemes[0].score * 0.4)).slice(0, 4).map((theme) => theme.category)
    : [categorizeUpload(fileTitle)];
  const category = categories[0];
  const termCounts = new Map();
  normalizedSource.match(/[a-z0-9]+/g)?.forEach((word) => {
    if (word.length < 3 || /^\d+$/.test(word) || uploadKeywordStopWords.has(word)) return;
    termCounts.set(word, (termCounts.get(word) || 0) + 1);
  });
  const frequentTerms = [...termCounts.entries()].sort((a, b) => b[1] - a[1]).map(([word]) => word);
  const keywordCandidates = [...matchedTerms, ...frequentTerms];
  const keywords = [...new Set(keywordCandidates.map((term) => term.trim()).filter(Boolean))].slice(0, 14);

  return {
    category,
    themes: categories,
    keywords: keywords.length ? keywords : [fileTitle],
    indexText: documentText
  };
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
  const normalizedName = normalize(file.name).trim();
  const normalizedTitle = normalize(file.name.replace(/\.[^/.]+$/, '')).trim();
  const matchesLibraryName = documents.some((doc) => {
    const sourceName = normalize(doc.path.split(/[\\/]/).pop() || '').replace(/\.[^/.]+$/, '').trim();
    return normalize(doc.title).trim() === normalizedTitle || sourceName === normalizedTitle;
  });
  return uploadedReferences.some((item) => item.hash === hash || normalize(item.name).trim() === normalizedName) || matchesLibraryName;
}

function addUploadedTypeFilter() {
  if (![...typeFilter.options].some((option) => option.value === 'Uploaded Document')) {
    const option = document.createElement('option');
    option.value = 'Uploaded Document';
    option.textContent = 'Uploaded Document';
    typeFilter.appendChild(option);
  }
  renderThemeList();
}

function searchableText(doc) {
  return [doc.title, doc.type, doc.category, doc.themes?.join(' '), doc.summary, doc.overview, doc.keywords.join(' '), doc.indexText, doc.poc, doc.contact].join(' ').toLowerCase();
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;'
  })[character]);
}

function rankDocuments(query) {
  const stopWords = new Set(['about', 'and', 'are', 'can', 'could', 'for', 'from', 'help', 'how', 'i', 'in', 'is', 'it', 'me', 'of', 'on', 'or', 'our', 'please', 'the', 'this', 'to', 'we', 'what', 'with', 'you']);
  const normalizedQuery = normalize(query).trim();
  const terms = [...new Set(normalizedQuery.match(/[a-z0-9]+/g) || [])].filter((term) => term.length > 1 && !stopWords.has(term));
  if (!terms.length) return [];

  return documents.map((doc) => {
    const title = normalize(doc.title);
    const category = normalize(doc.category);
    const keywords = normalize(doc.keywords.join(' '));
    const content = normalize(doc.indexText);
    const details = normalize([doc.type, doc.summary, doc.overview, doc.poc, doc.contact].join(' '));
    let score = 0;
    let matchedTerms = 0;

    terms.forEach((term) => {
      const strongMatch = title.includes(term) || keywords.includes(term) || category.includes(term);
      if (title.includes(term)) score += 8;
      if (keywords.includes(term)) score += 5;
      if (category.includes(term)) score += 3;
      if (content.includes(term)) score += 2;
      if (details.includes(term)) score += 1;
      if (strongMatch) matchedTerms += 1;
    });

    if (normalizedQuery.length > 3 && searchableText(doc).includes(normalizedQuery)) score += 6;
    return { doc, score, matchedTerms, totalTerms: terms.length };
  }).filter((result) => result.score > 0).sort((a, b) => b.score - a.score);
}

function findDocuments(query, types = []) {
  if (!normalize(query).trim()) return documents.filter((doc) => !types.length || types.includes(doc.fileType));
  return rankDocuments(query).map(({ doc }) => doc).filter((doc) => !types.length || types.includes(doc.fileType));
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

function renderAssistantResponse(question, mode) {
  if (assistantSource === 'external') {
    assistantResponse.innerHTML = `
      <div class="assistant-message">
        <p class="section-label">External search is not connected</p>
        <h3>No public web results are available in this demo.</h3>
        <p>Connect an approved search provider to enable industry research and public reports. Internal catalog results remain separate from external information.</p>
      </div>
    `;
    assistantResponse.hidden = false;
    lastAssistantExport = null;
    return;
  }

  const ranked = rankDocuments(question).filter(({ score }) => score >= 2).slice(0, 6);
  if (!ranked.length) {
    assistantResponse.innerHTML = `
      <div class="assistant-message">
        <p class="section-label">Internal catalog</p>
        <h3>No matching catalog descriptions found.</h3>
        <p>Try a topic or phrase such as AI, architecture, Orange, RFP, sales transformation, or data monetization. This prototype does not search document contents.</p>
      </div>
    `;
    assistantResponse.hidden = false;
    lastAssistantExport = null;
    return;
  }

  const sources = ranked.slice(0, 3);
  const primary = sources[0].doc;
  const matchPercent = (matchedTerms, totalTerms) => Math.round((matchedTerms / totalTerms) * 100);
  const citationMarkup = sources.map(({ doc, matchedTerms, totalTerms }, index) => `
    <article class="assistant-source" id="assistant-source-${index + 1}">
      <div class="source-title">
        <span class="citation-number">[${index + 1}]</span>
        <a href="${escapeHtml(sourceUrl(doc))}" target="_blank" rel="noopener noreferrer">${escapeHtml(doc.title)}</a>
        <button type="button" class="text-btn" data-assistant-details="${escapeHtml(doc.id)}">Preview</button>
      </div>
      <p>${escapeHtml(doc.summary)}</p>
      <span class="match-indicator">Metadata term coverage · ${matchPercent(matchedTerms, totalTerms)}% <small>(heuristic, not model confidence)</small></span>
    </article>
  `).join('');

  const summaries = sources.map(({ doc }, index) => `
    <li>${escapeHtml(doc.summary)} <a href="#assistant-source-${index + 1}" aria-label="View citation ${index + 1}">[${index + 1}]</a></li>
  `).join('');
  const modeContent = {
    answer: `
      <p>Based on ${sources.length} matching catalog description${sources.length === 1 ? '' : 's'}, the strongest starting point is <strong>${escapeHtml(primary.title)}</strong>. These records suggest the following reusable evidence; open each original source to validate its details.</p>
      <ul class="assistant-evidence">${summaries}</ul>
    `,
    challenge: `
      <p>Use <strong>${escapeHtml(primary.title)}</strong> as a starting point, not proof that the approach will transfer unchanged.</p>
      <ul class="assistant-evidence">
        <li>Which customer-specific assumptions are supported by the source, and which still need validation?</li>
        <li>What counter-evidence, delivery constraints, or risk controls could change the recommendation?</li>
        <li>Are the cited examples comparable in market, operating model, and intended outcome?</li>
      </ul>
    `,
    meeting: `
      <p>Use these catalog records to prepare a source-led discussion. Confirm evidence and applicability in the original files before the meeting.</p>
      <ul class="assistant-evidence">
        <li><strong>Talking point:</strong> Start with the problem framing in ${escapeHtml(primary.title)}.</li>
        <li><strong>Likely question:</strong> Which outcomes, assumptions, and dependencies are evidenced versus proposed?</li>
        <li><strong>Discussion risk:</strong> The catalog contains summaries, not extracted slide-level or document-level evidence.</li>
        <li><strong>Follow-up:</strong> Validate the relevant source with its listed owner or account team.</li>
      </ul>
    `,
    learn: `
      <p>Start with <strong>${escapeHtml(primary.title)}</strong>, then work through the evidence in stages:</p>
      <ol class="assistant-evidence">
        <li><strong>Orientation:</strong> Read the source summary and identify its problem context.</li>
        <li><strong>Explore:</strong> Compare the other cited records for shared themes and differences.</li>
        <li><strong>Apply:</strong> Open the source files and test which concepts fit your own situation.</li>
      </ol>
    `
  }[mode];

  const relatedAssets = ranked.slice(3).filter(({ doc }) => doc.category === primary.category || doc.keywords.some((keyword) => primary.keywords.includes(keyword))).slice(0, 2);
  const relatedMarkup = relatedAssets.length ? `
    <section class="assistant-subsection">
      <h4>Related assets</h4>
      ${relatedAssets.map(({ doc }) => `<a class="related-asset" href="${escapeHtml(sourceUrl(doc))}" target="_blank" rel="noopener noreferrer"><strong>${escapeHtml(doc.title)}</strong><span>${escapeHtml(doc.type)} · ${escapeHtml(doc.category)}</span></a>`).join('')}
    </section>
  ` : '';
  const expertMarkup = [...new Map(sources.map(({ doc }) => [doc.poc, doc])).values()].map((doc) => `
    <article class="expert-card">
      <strong>${escapeHtml(doc.poc)}</strong>
      <span>Related catalog item: ${escapeHtml(doc.title)}</span>
      <span>Contact: ${escapeHtml(doc.contact)}</span>
      <span>Location: not listed in library metadata</span>
    </article>
  `).join('');

  const responseBody = `
    <p class="section-label">Internal catalog · metadata-based response</p>
    <h3>${escapeHtml({
      answer: 'Research starting point',
      challenge: 'Assumptions to test',
      meeting: 'Meeting preparation',
      learn: 'A learning path'
    }[mode])}</h3>
    ${modeContent}
    <p class="assistant-question"><strong>Your question:</strong> ${escapeHtml(question)}</p>
    <section class="assistant-subsection">
      <h4>Sources and previews</h4>
      ${citationMarkup}
    </section>
    <section class="assistant-subsection">
      <h4>Relevant expert roles</h4>
      <p class="metadata-note">Role and channel are taken from catalog metadata; named people and locations are not indexed.</p>
      <div class="expert-grid">${expertMarkup}</div>
    </section>
    ${relatedMarkup}
    <p class="analogue-note">Cross-industry analogues need a broader, curated dataset; this TMT catalog does not infer them.</p>
    <div class="assistant-actions">
      <span>Was this useful?</span>
      <button type="button" class="feedback-btn" data-feedback="helpful">Helpful</button>
      <button type="button" class="feedback-btn" data-feedback="not-helpful">Not helpful</button>
      <button type="button" class="feedback-btn export-btn" id="assistantExport">Export Word brief</button>
    </div>
    <p class="response-disclaimer">Prototype only: matches and summaries are generated from catalog metadata, not document contents. No access-control check is performed. Validate source access and content before reuse.</p>
  `;

  assistantResponse.innerHTML = `<div class="assistant-message">${responseBody}</div>`;
  assistantResponse.hidden = false;
  lastAssistantExport = {
    title: `TMT Library brief - ${primary.title}`,
    html: `<h1>${escapeHtml(primary.title)}</h1><p>${escapeHtml(question)}</p>${modeContent}<h2>Sources</h2>${citationMarkup}<p>Prototype metadata response. Validate sources and permissions before reuse.</p>`
  };

  assistantResponse.querySelectorAll('[data-assistant-details]').forEach((button) => {
    button.addEventListener('click', () => {
      const doc = documents.find((item) => item.id === button.dataset.assistantDetails);
      if (doc) openDetails(doc);
    });
  });
  assistantResponse.querySelectorAll('[data-feedback]').forEach((button) => {
    button.addEventListener('click', () => {
      const feedback = JSON.parse(localStorage.getItem('knowledge-library-feedback') || '{"helpful":0,"not-helpful":0}');
      feedback[button.dataset.feedback] = (feedback[button.dataset.feedback] || 0) + 1;
      localStorage.setItem('knowledge-library-feedback', JSON.stringify(feedback));
      button.parentElement.querySelectorAll('[data-feedback]').forEach((choice) => {
        choice.disabled = true;
        choice.classList.toggle('is-selected', choice === button);
      });
      showToast('Feedback saved in this browser');
    });
  });
  const exportButton = document.getElementById('assistantExport');
  exportButton.addEventListener('click', exportAssistantBrief);
}

function exportAssistantBrief() {
  if (!lastAssistantExport) return;
  const html = `<!doctype html><html><head><meta charset="utf-8"><title>${escapeHtml(lastAssistantExport.title)}</title></head><body>${lastAssistantExport.html}</body></html>`;
  const url = URL.createObjectURL(new Blob([html], { type: 'application/msword' }));
  const link = document.createElement('a');
  link.href = url;
  link.download = `${lastAssistantExport.title.replace(/[\\/:*?"<>|]/g, '-')}.doc`;
  document.body.appendChild(link);
  link.click();
  link.remove();
  window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  showToast('Word-compatible brief export started');
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

function sourceUrl(doc) {
  return /^(https?:|blob:)/i.test(doc.path) ? doc.path : documentUrl(doc.path);
}

function runSearch() {
  const query = searchInput.value.trim();
  let filtered = query ? rankDocuments(query).map(({ doc }) => doc) : [...documents];

  if (activeTheme) filtered = filtered.filter((doc) => (doc.themes?.length ? doc.themes : [doc.category]).includes(activeTheme));
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
  modalMeta.replaceChildren();
  [
    ['Point of contact', `${doc.poc} · ${doc.contact}`],
    ['Themes', (doc.themes?.length ? doc.themes : [doc.category]).join(' · ')],
    ['Keywords', doc.keywords.join(' · ')]
  ].forEach(([label, value]) => {
    const heading = document.createElement('strong');
    heading.textContent = label;
    const detail = document.createElement('span');
    detail.textContent = value;
    modalMeta.append(heading, detail);
  });
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
  window.open(sourceUrl(doc), '_blank', 'noopener,noreferrer');
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
        <h4>${escapeHtml(doc.title)}</h4>
        <div class="result-actions"><span class="badge">${escapeHtml(doc.type)}</span><button class="favorite-btn ${favoriteIds.has(doc.id) ? 'is-favorite' : ''}" type="button" data-action="favorite" data-id="${escapeHtml(doc.id)}" aria-label="Save ${escapeHtml(doc.title)}">${favoriteIds.has(doc.id) ? '★' : '☆'}</button></div>
      </div>

      <p>${escapeHtml(doc.summary)}</p>

      <div class="meta-row">
        <div class="meta-block">
          <span class="meta-label">Themes</span>
          <div class="meta-value">${escapeHtml((doc.themes?.length ? doc.themes : [doc.category]).join(' · '))}</div>
        </div>
        <div class="meta-block">
          <span class="meta-label">Point of contact</span>
          <div class="meta-value">${escapeHtml(doc.poc)}<br>${escapeHtml(doc.contact)}</div>
        </div>
      </div>

      <ul class="keywords">
        ${doc.keywords.map((keyword) => `<li>${escapeHtml(keyword)}</li>`).join('')}
      </ul>

      <div class="actions-row">
        <button class="secondary-btn" type="button" data-action="details" data-id="${escapeHtml(doc.id)}">View details</button>
        <button class="secondary-btn" type="button" data-action="open" data-id="${escapeHtml(doc.id)}">Open source</button>
        <button class="link-btn" type="button" data-action="pdf" data-id="${escapeHtml(doc.id)}">Download PDF</button>
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
document.querySelector('[data-open-tool="themes"]').addEventListener('click', (event) => {
  event.preventDefault();
  activateTool('themes');
  document.getElementById('knowledge-tools').scrollIntoView({ behavior: 'smooth' });
});
assistantSourceOptions.forEach((option) => option.addEventListener('click', () => {
  assistantSource = option.dataset.source;
  assistantSourceOptions.forEach((item) => {
    const active = item === option;
    item.classList.toggle('is-active', active);
    item.setAttribute('aria-pressed', String(active));
  });
}));
assistantForm.addEventListener('submit', (event) => {
  event.preventDefault();
  renderAssistantResponse(assistantQuestion.value.trim(), assistantMode.value);
});
assistantSuggestions.forEach((suggestion) => suggestion.addEventListener('click', () => {
  assistantQuestion.value = suggestion.textContent.trim();
  assistantQuestion.focus();
  renderAssistantResponse(assistantQuestion.value, assistantMode.value);
}));
slideSearchBtn.addEventListener('click', searchSlides);
slideSearchInput.addEventListener('keydown', (event) => { if (event.key === 'Enter') searchSlides(); });
uploadInput.addEventListener('change', async () => {
  const files = [...uploadInput.files];
  if (!files.length) return;
  uploadStatus.className = 'upload-status';
  uploadStatus.textContent = 'Checking files and categorizing solution focus...';
  let added = 0;
  const errors = [];
  const supportedExtensions = new Set(['pdf', 'pptx', 'ppt', 'docx', 'xlsx', 'txt']);

  for (const file of files) {
    const extension = file.name.split('.').pop().toLowerCase();
    if (!supportedExtensions.has(extension)) {
      errors.push(`${file.name}: unsupported file type`);
      continue;
    }

    const hash = await hashFile(file);
    if (isDuplicateUpload(file, hash)) {
      errors.push(`Document "${file.name}" is already uploaded in the library.`);
      continue;
    }

    let enrichment;
    try {
      enrichment = await buildUploadMetadata(file);
    } catch (error) {
      console.error(`Unable to index ${file.name}.`, error);
      errors.push(`${file.name}: unable to extract upload metadata (${error.message})`);
      continue;
    }
    const created = new Date().toLocaleDateString();
    const title = file.name.replace(/\.[^/.]+$/, '');
    const id = `upload-${hash}`;
    const record = {
      id,
      title,
      addedAt: Date.now(),
      type: 'Uploaded Document',
      ...enrichment,
      path: '',
      fileType: extension,
      summary: `Uploaded reference indexed from its filename${enrichment.indexText ? ' and readable text' : ''}. Themes: ${enrichment.themes.join(', ')}. Keywords: ${enrichment.keywords.join(', ')}.`,
      overview: 'Automatically generated library metadata; review the original document to validate its content and relevance.',
      poc: 'User-uploaded library reference',
      contact: 'Review the source document for contact details'
    };

    try {
      await saveUploadedFile(record, file, hash, created);
      record.path = URL.createObjectURL(file);
      documents.unshift(record);
      uploadedReferences.unshift({ name: file.name, size: file.size, hash, created, id: record.id });
    } catch (error) {
      console.error(`Unable to add ${file.name} to the local library.`, error);
      errors.push(`${file.name}: could not be saved to the browser library (${error.message})`);
      continue;
    }
    added += 1;
  }

  try {
    localStorage.setItem('knowledge-library-uploads', JSON.stringify(uploadedReferences));
  } catch (error) {
    console.error('Unable to save uploaded document references in this browser.', error);
    errors.push('Files are available this session, but their references could not be saved in browser storage.');
  }
  if (added) {
    addUploadedTypeFilter();
    totalDocs.textContent = documents.length;
    totalCategories.textContent = new Set(documents.map((doc) => doc.category)).size;
    searchInput.value = '';
    typeFilter.value = 'all';
    activeTheme = '';
    showingFavorites = false;
    updateThemeSelection();
    updateFavoritesCount();
    renderThemeList();
    renderUploads();
    runSearch();
  }
  uploadStatus.className = errors.length ? 'upload-status has-error' : 'upload-status has-success';
  const messages = [];
  if (added) messages.push(`${added} file${added === 1 ? '' : 's'} added to the library and saved in this browser.`);
  if (errors.length) messages.push(errors.join(' '));
  uploadStatus.textContent = messages.join(' ');
  showToast(errors.length ? 'Upload completed with warnings' : `${added} document${added === 1 ? '' : 's'} added to the library`);
  uploadInput.value = '';
});

function renderUploads() {
  uploadList.replaceChildren();
  if (!uploadedReferences.length) {
    uploadList.textContent = 'Uploaded file references will appear here for this browser session.';
    uploadList.classList.add('tool-empty');
    return;
  }

  uploadList.classList.remove('tool-empty');
  uploadedReferences.slice(0, 12).forEach((file) => {
    const item = document.createElement('article');
    item.className = 'project-item';
    const name = document.createElement('strong');
    name.textContent = file.name;
    const metadata = document.createElement('span');
    metadata.textContent = `${Math.ceil(file.size / 1024)} KB · added ${file.created}`;
    item.append(name, metadata);
    uploadList.append(item);
  });
}

docSearchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  activeTheme = '';
  updateThemeSelection();
  runSearch();
});
clearBtn.addEventListener('click', () => {
  searchInput.value = '';
  activeTheme = '';
  updateThemeSelection();
  runSearch();
  searchInput.focus();
});
typeFilter.addEventListener('change', runSearch);
sortSelect.addEventListener('change', runSearch);
themeSearchInput.addEventListener('input', renderThemeList);
favoritesBtn.addEventListener('click', () => {
  showingFavorites = !showingFavorites;
  updateFavoritesCount();
  runSearch();
});
resetViewBtn.addEventListener('click', () => {
  searchInput.value = '';
  typeFilter.value = 'all';
  sortSelect.value = 'relevance';
  themeSearchInput.value = '';
  activeTheme = '';
  showingFavorites = false;
  renderThemeList();
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

async function initializeLibrary() {
  renderTypeFilter();
  renderSuggestedTags();
  renderThemeList();
  updateFavoritesCount();
  searchSlides();
  renderUploads();
  totalDocs.textContent = documents.length;
  totalCategories.textContent = new Set(documents.map((doc) => doc.category)).size;
  runSearch();

  try {
    await restoreUploadedFiles();
    if (uploadedReferences.length) addUploadedTypeFilter();
    renderThemeList();
    renderUploads();
    totalDocs.textContent = documents.length;
    totalCategories.textContent = new Set(documents.map((doc) => doc.category)).size;
    runSearch();
  } catch (error) {
    console.error('Unable to restore saved files to the library.', error);
    uploadStatus.className = 'upload-status has-error';
    uploadStatus.textContent = `Saved uploads could not be loaded from this browser: ${error.message}`;
  }
}

initializeLibrary();
