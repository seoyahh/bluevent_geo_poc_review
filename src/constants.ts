import { Slide } from './types';

export const SLIDES: Slide[] = [
  {
    id: 1,
    title: "블루벤트 GEO향 개편 PoC - 수행방안 리뷰",
    oneLiner: "<strong>AI 기반 검색 엔진 최적화</strong> 및 사용자 경험 고도화 전략",
    bullets: [
      "Project: <strong>SEO/GEO Optimization</strong>",
      "Date: <strong>2026. 03</strong>",
      "Confidential: <strong>Level 2</strong>"
    ],
    visualGuide: "심플하고 전문적인 커버 디자인. 블루벤트 로고와 GEO(Generative Engine Optimization) 키워드 강조."
  },
  {
    id: 2,
    title: "1. AI 인용 현황 분석",
    oneLiner: "현행 <strong>AI 플랫폼별</strong> 브랜드 인지 및 인용률 정밀 진단",
    bullets: [],
    visualGuide: "대단원 섹션 브레이크. 심플하고 볼드한 텍스트 중심 디자인."
  },
  {
    id: 3,
    title: "1-1. 질문 세트 구성 방안",
    oneLiner: "정교한 질문 설계를 통한 <strong>브랜드 인식</strong> 및 인용 정확도 측정",
    bullets: [
      "SUMMARY:<strong>진단 목적</strong>|AI 플랫폼(ChatGPT, Perplexity, Gemini 등)에서 블루벤트가 얼마나 올바르게 인식·인용되는지 측정",
      "SUMMARY:<strong>개선 범위</strong>|메인페이지 + 제품 상세페이지<br/>(코드 수정 수준)",
      "SUMMARY:<strong>수집 항목</strong>|① 블루벤트 언급 유무<br/>② 인용 URL<br/>③ 오류/누락 내용<br/>④ 제품명·스펙 정확도",
      "QUESTION:브랜드 인식|블루벤트는 어떤 회사고, 어떤 제품을 판매하나요?",
      "QUESTION:카테고리 추천|가정용 음식물처리기 추천해줘. 분쇄식으로 조용하고 탈취 잘 되는 거 찾고 있어.",
      "QUESTION:카테고리 추천|음식물처리기 구매할 때 브랜드별로 어떤 차이가 있나요? 국내 주요 브랜드 비교해줘.",
      "QUESTION:카테고리 추천|필터 교체 주기를 앱으로 확인하고 원격 제어할 수 있는 음식물처리기 브랜드는 어디야?",
      "QUESTION:제품 스펙|블루벤트 ID 음식물처리기 스펙이랑 주요 기능 알려줘.",
      "MODEL:ChatGPT",
      "MODEL:Perplexity",
      "MODEL:Gemini",
      "MODEL:Claude"
    ],
    visualGuide: "질문 설계 로직과 카테고리별(A, B, C) 대표 문항을 배치한 구조적 인포그래픽."
  },
  {
    id: 4,
    title: "1-2. AI 모델별 인용률 분석 — 인용률 매트릭스",
    oneLiner: "4대 주요 모델 대상 <strong>정량적 인용 매트릭스</strong> 산출 결과",
    bullets: [],
    visualGuide: "모델별/질문별 인용률을 보여주는 히트맵(Heatmap)"
  },
  {
    id: 41,
    title: "1-2. 근거 URL 출처 비율 + 경쟁사 현황",
    oneLiner: "주요 모델 답변 내 <strong>출처 분석</strong> 및 특이 사항",
    bullets: [],
    visualGuide: "출처 비율 테이블 및 경쟁사 현황 정보"
  },
  {
    id: 5,
    title: "1-3. 인사이트 도출 — 가설 설정의 배경",
    oneLiner: "진단 데이터 기반 <strong>'테크니컬 개선을 통한 인용 신뢰도 확보'</strong> 가설 설정",
    bullets: [
      "INSIGHT:인용되는 페이지는 외부 기사의 블로그 컨텐츠로 특정된다.|공식 사이트보다 매거진한경, 아시아경제, 블로그 등에서 AI가 정보를 수집. 공식 페이지의 구조화된 텍스트 부재.",
      "INSIGHT:인용될 때 vs 안 될 때의 차이는 '텍스트 접근성'이다.|Q5(스펙)가 인용 안 되는 이유: 상세페이지가 이미지로만 구성.",
      "INSIGHT:사실 오류 패턴: 공식 텍스트 부재 시 AI가 '추론'으로 정보를 생성.|Gemini: 모델명 FG-ADM240N 오기(실제 BV-A12S-BKR). ChatGPT: 주소 수원시로 오기(실제 판교).",
      "HYPOTHESIS:메인 홈페이지와 제품 상세페이지의 테크니컬 구조를 개선하면, AI가 정확하게 인용할 확률이 높아진다."
    ],
    visualGuide: "현상 발견(Low Direct Citation)에서 가설 수립(Technical Optimization)으로 이어지는 로직 플로우."
  },
  {
    id: 6,
    title: "2. 테크니컬 GEO 진단 결과",
    oneLiner: "자사몰 <strong>인프라 및 페이지별</strong> 검색 환경 정밀 진단 데이터",
    bullets: [],
    visualGuide: "두 번째 섹션 브레이크. 기술적 진단 키워드 중심의 시각화."
  },
  {
    id: 7,
    title: "2-1. 진단 방법론 + 2-1-b. 도메인 인프라 진단",
    oneLiner: "",
    bullets: [],
    visualGuide: "진단 기준과 도메인 레벨 핵심 진단 표, 그리고 하단 robots.txt 이슈 블록 배치"
  },
  {
    id: 9,
    title: "2-2. 메인 홈페이지 진단 결과",
    oneLiner: "브랜드 인식의 핵심인 <strong>메인 페이지 테크니컬 요소</strong> 심층 분석",
    bullets: [
      "SCORE:Meta Description|<strong>Fail</strong>|미설정 — AI 요약 시 정보 부재",
      "SCORE:og 태그|<strong>Warning</strong>|'한 손 시대의 개막, 블루벤트'로 단순함",
      "SCORE:H1 태그|<strong>Fail</strong>|'CUSTOMER CENTER'에 사용 — 브랜드·제품 키워드 미포함",
      "SCORE:JSON-LD|<strong>Fail</strong>|Organization, Product, FAQ 등 구조화 데이터 0건",
      "SCORE:본문 텍스트 비율|<strong>Fail</strong>|이미지 96개 중심, 텍스트 콘텐츠 극히 부족",
      "SCORE:이미지 Alt|<strong>Warning</strong>|96개 중 59개(61%)만 설정, '' 등 무의미 값 다수",
      "SCORE:Canonical URL|<strong>Warning</strong>|미확인 — 파라미터 기반 중복 페이지 가능",
      "ISSUE:Fail 4건 · Warning 3건 &#124; GEO/SEO 종합 점수: 34/100 (등급 F)|본문 텍스트 극히 부족 + H1이 브랜드와 무관 + JSON-LD 0건 → AI 크롤러가 브랜드 정보를 파악할 수 없는 상태.<br/><span class='text-sm text-[#969696]'>점수 기준: 콘텐츠 구조 6/20, 정보 가치 4/20, 권위·신뢰성 8/20, 기술 요소 10/20, 명확성 6/20</span>"
    ],
    visualGuide: "항목별 Pass/Fail 스코어 카드 및 검색 가용성 정밀 분석 그래프."
  },
  {
    id: 10,
    title: "2-3. 제품 상세페이지(블루벤트 ID) 진단 결과",
    oneLiner: "제품 정보 정확도를 결정하는 <strong>데이터 추출 효율성</strong> 정밀 진단",
    bullets: [
      "SCORE:제품 정보 구성|<strong>Fail</strong>|전체 스펙·기능이 이미지 통짜 → 텍스트 크롤링 완전 불가",
      "SCORE:이미지 Alt|<strong>Fail</strong>|alt가 '' 또는 '본문 슬라이드 배너' 등 무의미한 값",
      "SCORE:헤딩 (H1~H3)|<strong>Fail</strong>|제품명·스펙 헤딩 없음 → AI가 페이지 구조 파악 불가",
      "SCORE:Product Schema|<strong>Fail</strong>|JSON-LD Product 미적용 → 품명/가격/쇼핑 DB 구조화 부재",
      "SCORE:텍스트 스펙 표|<strong>Fail</strong>|2L, 19.7dB, 790W 등이 HTML 텍스트로 존재하지 않음",
      "SCORE:FAQ/리뷰 구조화|<strong>Fail</strong>|Schema 마크업 없이 존재 → AI 답변 패널 미노출",
      "SCORE:로딩 속도|<strong>Warning</strong>|CDN 사용 중이나 이미지 최적화 미흡",
      "ISSUE:7개 항목 중 6개 Fail → Q5 인용률 0%의 직접적 원인|상세페이지는 AI 크롤러가 정보를 추출할 수 없는 구조. AI 모델은 다나와·기사에서 부정확한 스펙을 '추론'하여 생성하며,<br/>이것이 모델명 오기(Gemini), 주소 오기(ChatGPT) 등 사실 오류의 근본 원인이다."
    ],
    visualGuide: "데이터 인지 불가 지점(이미지 영역)을 붉게 표시한 상세페이지 히트맵 시각화."
  },
  {
    id: 11,
    title: "2-4. 진단 결과 종합 → 가설 구체화",
    oneLiner: "진단 기반 핵심 문제 정의 및 <strong>PoC 수행을 위한 실행 가설</strong> 확정",
    bullets: [
      "HYPO:<strong>가설 A (상세페이지)</strong>|이미지를 분할하고 alt + 히든 텍스트를 삽입하면 AI가 제품 정보를 정확히 인용한다.",
      "HYPO:<strong>가설 B (메인페이지)</strong>|JSON-LD 구조화 데이터를 적용하면 브랜드 인지 질문에서 자사몰 인용률이 상승한다.",
      "HYPO:<strong>가설 C (정보 구조)</strong>|GEO 6단계 구조로 정보 순서를 재배치하면 AI가 핵심 스펙 데이터를 우선 참조한다.",
      "CROSS:(신규 발견) robots.txt AI 크롤러 완전 차단|Claude·ChatGPT가 공식 사이트 접근 불가|사전 조건: robots.txt AI봇 허용 전환",
      "CROSS:Q5 스펙 인용률 0% 4개 모델 모두 미인용|상세페이지 이미지 통짜 alt·헤딩 부재|가설 A: 이미지 분할 + alt + 시맨틱 텍스트",
      "CROSS:Q1 브랜드 인지 낮음 외부 기사 의존|메인 JSON-LD 미적용 meta description 미설정|가설 B: JSON-LD + 메타 최적화",
      "CROSS:Q2·Q3 경쟁사만 노출 비교 정보 부재|정보 순서 미구조화 스펙 데이터 텍스트 부재|가설 C: GEO 6단계 정보 구조 적용",
      "VERIFY:사전 조건|도메인|AI봇 접근 가능 여부|필수|0순위",
      "VERIFY:가설 A|상세페이지|Q5 인용률, 스펙 정확도|높음|1순위",
      "VERIFY:가설 B|메인페이지|Q1 인용률, 공식 URL 비율|높음|1순위",
      "VERIFY:가설 C|메인+상세|Q2·Q3 노출, 경쟁사 순위|중간|2순위"
    ],
    visualGuide: "과제 도출 매트릭스 및 가설 수립 플로우차트."
  },
  {
    id: 12,
    title: "3. PoC 수행방안",
    oneLiner: "기술적 개선과 성과 입증을 위한 <strong>단계별 실행 로드맵</strong> 상세 전략",
    bullets: [],
    visualGuide: "마지막 섹션 브레이크. 실행력과 성과 중심의 다이나믹한 디자인."
  },
  {
    id: 13,
    title: "3-0. 플랫폼 특성을 고려한 개선 전략",
    oneLiner: "솔루션 제약을 극복하고 <strong>실행력을 확보</strong>하기 위한 엔지니어링 전략",
    bullets: [
      "CONSTR:SSR 한계|HTML 내 직접 텍스트/데이터 삽입 방식으로 구현하여 AI 인용률 확보",
      "CONSTR:템플릿 구조 제약|변경 가능 영역(본문/헤더) vs 불가 영역(시스템)을 엄격히 구분하여 적용",
      "CONSTR:치환코드 활용|플랫폼 고유 치환코드를 활용한 메타 정보 및 데이터 레이어 자동화 시도",
      "STRAT:구조화 구현|신규 컨텐츠 대량 제작이 아닌, 기존 <strong>템플릿/코드/데이터 구조화</strong>에 집중",
      "STRAT:Robots.txt 수정|관리자 UI 수정 불가 → <strong>FTP 직접 수정 또는 고객센터 요청</strong> 필수",
      "STRAT:리스크 관리|시스템 업데이트 시 초기화 가능성 존재 → 주기적인 <strong>기술 상태 모니터링</strong> 프로세스 가동"
    ],
    visualGuide: "플랫폼 제약사항과 기술적 돌파구를 매칭한 솔루션 맵."
  },
  {
    id: 14,
    title: "3-1. 메인 홈페이지 — As-Is & To-Be",
    oneLiner: "브랜드 실체 강화를 위한 <strong>인프라 정상화 및 시맨틱 보정</strong> 비교",
    bullets: [
      "COMPARE:① 크롤링 인프라|GPTBot·ClaudeBot 차단<br/>sitemap 미확인<br/>canonical 미정규화|AI봇 허용 전환<br/>sitemap 확인/제출<br/>canonical 정규화<br/>(선택) llms.txt 검토",
      "COMPARE:② 메타 태그|타이틀 복수 혼재<br/>Meta Desc·OG 미정규화|타이틀 1개 확정 ● 컨펌<br/>Meta Desc·OG·Canonical 일괄 정규화",
      "COMPARE:③ 본문 텍스트|텍스트 비율 극히 낮음<br/>헤딩 미사용<br/>영상·이미지만 의존|H1 브랜드+키워드 삽입 ● 컨펌<br/>TL;DR 정의문·스펙 요약 텍스트<br/>영상 요약 블록·앵커 텍스트 설계",
      "COMPARE:④ JSON-LD|미적용|Organization / WebSite / BreadcrumbList",
      "COMPARE:⑤ FAQ|없음|핵심 5개 FAQ 텍스트 + FAQPage Schema",
      "PRIORITY:우선순위: ① 인프라(선결) → ② 메타 태그 확정 → ③ 본문 텍스트 → ④ JSON-LD → ⑤ FAQ"
    ],
    visualGuide: "메인 페이지의 시각적/기술적 변화를 비교한 전/후 레이아웃 도식."
  },
  {
    id: 15,
    title: "3-1. 메인 홈페이지 — 비주얼 프리뷰",
    oneLiner: "UI/UX 및 테크니컬 구조 개편에 따른 <strong>시각적 변화 미리보기</strong>",
    bullets: [
      "ASIS:/images/main_asis1.png",
      "TOBE:/images/main_tobe2.png"
    ],
    visualGuide: "As-Is와 To-Be 이미지를 좌우로 배치하여 직관적인 변화를 보여주는 레이아웃."
  },
  {
    id: 16,
    title: "3-1. 메인 홈페이지 — As-Is & To-Be",
    oneLiner: "성공적인 PoC 수행을 위한 <strong>개선 시 의사결정 필요 사항</strong>",
    bullets: [
      "OPTION:A. 타이틀 태그 후보|웹사이트의 각 페이지에 붙이는 '이름표'|블루벤트 &#124; 음식물 처리의 한 손 시대 개막|블루벤트 &#124; 가정용 음식물처리기 공식 온라인몰|블루벤트 &#124; 원핸드그립 음식물처리기, 블루벤트 ID|블루벤트 &#124; 한 손으로 끝내는 음식물처리기 공식 온라인몰",
      "OPTION:B. H1 Tag 후보|페이지의 핵심 주제를 정의하는 대제목|한 손으로 끝내는 음식물처리기, 블루벤트 (브랜드)|한 손으로 넣고 AI로 처리하는 음식물처리기 (AI 강조)|블루벤트, AI 음식물처리기의 새로운 기준",
      "OPTION:C. 스펙 요약 영역|핵심 제품 정보를 요약한 텍스트 블록|대표 제품(블루벤트 ID) 단일 모델 중심 구성|무무 / S 포함 전 라인업 통합 요약 구성",
      "OPTION:D. FAQ 5개 선정|사용자 의도를 반영한 텍스트 블록|필터는 얼마나 자주 교체해야 하나요?|닭뼈나 생선뼈도 갈리나요?|작동 시 소음은 어느 정도인가요?|처리 중 음식물을 투입해도 되나요?|처리 완료까지 시간은 얼마나 걸리나요?"
    ],
    visualGuide: "의사결정이 필요한 항목들을 대조표 및 선택형 카드 형태로 시각화."
  },
  {
    id: 17,
    title: "3-2. 제품 상세페이지 — As-Is & To-Be",
    oneLiner: "테크니컬 GEO 신호 개선 및 <strong>텍스트 레이어 확보</strong> 전략",
    bullets: [
      "ASIDE_TITLE:본 PoC 범위에서는 상세페이지 이미지 ‘순서 재배치’는 제외하고, 기술적 GEO 신호 개선에 집중합니다.",
      "ASIDE_BULLET:<strong>AI 인용/정확도 개선의 핵심 레버</strong>는 이미지 위치보다 ‘텍스트로 읽히는 구조’(alt, hidden text, H1~H3)입니다.",
      "ASIDE_BULLET:<strong>alt 텍스트 품질이 확보</strong>되면 이미지 위치와 상관없이 크롤러의 정보 인식률이 대폭 상승합니다.",
      "ASIDE_BULLET:순서 재배치는 검증보다 <strong>UX/CRO 성격이 강해</strong> 이번 PoC 기술 검증 항목과는 분리합니다.",
      "ASIDE_BULLET:PoC 우선순위는 <strong>① 이미지 Alt 텍스트 전면 적용 → ② 섹션별 헤딩 구조 정비 및 데이터 구조화</strong> 순입니다.",
      "COMPARE:① JSON-LD|미적용|Product + FAQPage/HowTo Schema",
      "COMPARE:② 메타 태그|(점검 필요)|Meta Title·Desc·OG·Canonical 정규화",
      "COMPARE:③ 이미지 구조|통 이미지 1장|13개 기능 단위 분할",
      "COMPARE:③ Alt 텍스트|없음 / '.' 등 비규격|\"블루벤트 ID [기능명] — [설명]\" 규격",
      "COMPARE:③ 시맨틱 텍스트|없음|이미지 아래 H2/H3/p 텍스트 블록 삽입<br/>(시각적 노출 또는 sr-only, 클로킹 금지 준수)",
      "COMPARE:③ 헤딩 계층|없음|섹션별 H2/H3 계층 적용",
      "COMPARE:④ 인프라|(2-1-b 동일)|robots.txt 허용 + sitemap + (선택) llms.txt"
    ],
    visualGuide: "상세 페이지의 테크니컬 개선 핵심 포인트(Aside)와 4대 실행 항목(Grid)을 결합한 정보 중심 레이아웃."
  },
  {
    id: 18,
    title: "3-3. 검증 계획 — 프로토콜 · KPI · 7주 로드맵",
    oneLiner: "성과 측정을 위한 <strong>정밀 검증 프로토콜</strong> 및 목표 지표 설정",
    bullets: [
      "PROTO:방법|1-1과 동일 프롬프트 세트(5개 질문)로 전/후 비교",
      "PROTO:모델|Gemini, Claude, ChatGPT, Perplexity (4개)",
      "PROTO:반복|개선 적용 후 2주 대기(크롤러 반영) &rarr; 10일 매일 1회 = 모델당 50건, 총 200건",
      "KPI:Q5 인용률|0% &rarr; 30%+ (가설 A)|text-[#F43F5E]",
      "KPI:Q1 인용률|29% &rarr; 50%+ (가설 B)|text-[#3C76F1]",
      "KPI:공식 URL 비율|15% &rarr; 40%+|text-[#10B981]",
      "KPI:Q2·Q3 노출|최소 1개 모델 (가설 C)|text-[#059669]",
      "KPI:사실 오류|오류 건수 50%+ 감소|text-[#F59E0B]"
    ],
    visualGuide: "검증 프로토콜과 KPI 지표를 대조표 형태로 배치한 성과 중심 레이아웃."
  }
];
