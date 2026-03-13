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
      "SUMMARY:<strong>개선 범위</strong>|메인페이지 + 제품 상세페이지 (코드 수정 수준)",
      "SUMMARY:<strong>수집 항목</strong>|① 블루벤트 언급 유무 ② 인용 URL ③ 제품명·스펙 정확도 ④ 오류/누락 내용",
      "QUESTION:브랜드 인식|블루벤트는 어떤 회사고, 어떤 제품을 판매하나요?",
      "QUESTION:카테고리 추천|가정용 음식물처리기 추천해줘. 분쇄식으로 조용하고 탈취 잘 되는 거 찾고 있어.",
      "QUESTION:카테고리 추천|음식물처리기 구매할 때 브랜드별로 어떤 차이가 있나요? 국내 주요 브랜드 비교해줘.",
      "QUESTION:카테고리 추천|음식물 처리기 필터 교체 주기를 스마트폰 앱으로 확인하고 기기를 원격 제어할 수 있는 제품 브랜드는 어디야?",
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
    title: "1-2. AI 모델별 인용률 분석 결과",
    oneLiner: "4대 주요 모델 대상 <strong>정량적 인용 매트릭스</strong> 산출 결과",
    bullets: [
      "인용 매트릭스: 모델별 답변에 대한 <strong>인용 유무</strong> 및 근거 URL 적절성 평가",
      "오류 식별: <strong>Hallucination(사실 오류)</strong> 패턴 정리 및 경쟁사 오인용 사례",
      "출처 분석: 공식 홈페이지 vs 상세페이지 vs <strong>외부 리소스</strong> 인용 비중 통계",
      "인용 패턴: 텍스트 정보 부족 시 크롤러가 참조하는 <strong>외부 소스 현황</strong> 파악"
    ],
    visualGuide: "모델별/질문별 인용률을 보여주는 히트맵(Heatmap)과 출처별 비율 파이 차트."
  },
  {
    id: 5,
    title: "1-3. 인사이트 도출 — 가설 설정의 배경",
    oneLiner: "진단 데이터 기반 <strong>'테크니컬 개선을 통한 인용 신뢰도 확보'</strong> 가설 설정",
    bullets: [
      "핵심 발견: 인용은 주로 정보 밀도가 높은 <strong>외부 사이트</strong>에 의존함",
      "오류 패턴: <strong>이미지 기반 콘텐츠</strong>를 AI가 오인하거나 누락하는 경향 뚜렷",
      "상위 가설: 자사몰 테크니컬 최적화 시 <strong>인용 확률 및 신뢰도</strong> 대폭 상승",
      "수행 근거: 공식 데이터 우위를 점하기 위한 <strong>구조화 데이터(JSON-LD)</strong> 필수"
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
    title: "2-1. 진단 방법론",
    oneLiner: "<strong>데이터 기반 정밀 진단</strong>을 위한 이트라이브 고유 방법론 적용",
    bullets: [
      "PILLAR:이트라이브 내부 진단 도구|AI 봇의 사이트 구조 해석 안정성과 개별 요소별 데이터 추출 정합성을 수치화하여, 검색 엔진 및 생성형 AI의 크롤링 가용성을 객관적으로 평가합니다.",
      "PILLAR:수행계획서 1-2 기준 점검 항목|인덱싱 가능성: robots.txt, sitemap, canonical 정책 등 AI 봇의 접근성 전수 조사",
      "PILLAR:수행계획서 1-2 기준 점검 항목|사이트 구조: SSR 기술적 한계, 템플릿 반복 영역, 본문 비항목 비중 분석",
      "PILLAR:수행계획서 1-2 기준 점검 항목|헤딩 구조 & 링크: 시맨틱 헤딩(H1-H6) 위계 및 내부 링크 품질 검토",
      "PILLAR:수행계획서 1-2 기준 점검 항목|구조화 데이터: Schema.org 기반 JSON-LD 유무 및 마크업 정합성 진단"
    ],
    visualGuide: "이트라이브만의 진단 로직이 담긴 다이아몬드 모델 프레임워크."
  },
  {
    id: 8,
    title: "2-1-b. 사이트 인프라 진단 결과",
    oneLiner: "도메인 루트의 <strong>robots.txt 크리티컬 이슈</strong> 및 인프라 설정 진단",
    bullets: [
      "INFAR:ROBOTS|<strong>robots.txt 진단 결과</strong>: `bluevent.co.kr` 도메인 루트의 단일 파일이 사이트 전체에 적용 중",
      "INFAR:ROBOTS|<strong>크리티컬 이슈</strong>: 고도몰 기본 정책에 의해 <strong>ClaudeBot & GPTBot 전면 차단(Disallow: /)</strong> 상태",
      "INFAR:ROBOTS|<strong>AI 봇 영향도</strong>: ChatGPT와 Claude는 블루벤트 사이트 직접 크롤링 불가 (Perplexity/Gemini는 허용)",
      "INFAR:ROBOTS|<strong>검색 봇 상태</strong>: Google/Naver 등 주요 엔진은 관리자 영역만 부분 차단 중",
      "INFAR:CONCLUSION|<strong>결론</strong>: 인프라 이슈 해결 전까지는 Claude/ChatGPT 대상의 기술 개선 효과 검증이 불가능함",
      "INFAR:SITEMAP|<strong>Sitemap.xml 존재 여부</strong>: 사이트맵 경로 확인 및 AI 봇 인식 가용성 점검 필요 (이슈 요약 삽입 예정)",
      "INFAR:CANONICAL|<strong>Canonical 정책</strong>: 중복 페이지 처리 로직 및 대표 URL 엔티티 선언 상태 (이슈 요약 삽입 예정)"
    ],
    visualGuide: "인프라 차단 이슈(Red Signal)가 페이지별 개선 효과를 저해하는 로직 도식화."
  },
  {
    id: 9,
    title: "2-2. 메인 홈페이지 진단 결과",
    oneLiner: "브랜드 인식의 핵심인 <strong>메인 페이지 테크니컬 요소</strong> 심층 분석",
    bullets: [
      "SCORE:Title & Meta|<strong>Warning</strong>|기본 정보인 제목과 설명은 존재하나 브랜드 키워드 최적화 부족",
      "SCORE:Heading Level|<strong>Fail</strong>|H1 태그가 존재하지 않으며 논리적 위계 구조 전무",
      "SCORE:Content Ratio|<strong>Fail</strong>|이미지 비중 90% 이상으로 AI 인식 가능 텍스트 극소량",
      "SCORE:Structured Data|<strong>Fail</strong>|JSON-LD(Organization/WebSite) 등 검색 기여 데이터 미적용",
      "ISSUE:요약|본문 텍스트 비율이 극히 낮고 시맨틱 태그 구조가 없어 AI의 의미론적 분석이 불가능한 상태"
    ],
    visualGuide: "항목별 Pass/Fail 스코어 카드 및 검색 가용성 정밀 분석 그래프."
  },
  {
    id: 10,
    title: "2-3. 제품 상세페이지(블루벤트 ID) 진단 결과",
    oneLiner: "제품 정보 정확도를 결정하는 <strong>데이터 추출 효율성</strong> 정밀 진단",
    bullets: [
      "SCORE:Image Structure|<strong>Fail</strong>|상세페이지 전체가 통 이미지로 구성되어 텍스트 데이터 추출 불가",
      "SCORE:Alt Metadata|<strong>Fail</strong>|핵심 제품 스펙에 대한 대체 텍스트(alt) 지원 전무",
      "SCORE:Heading Hierarchy|<strong>Fail</strong>|제품명, 스펙 표 등 주요 정보를 구분하는 헤딩 구조 실종",
      "SCORE:Schema Product|<strong>Fail</strong>|Product/Offer 구조화 데이터 부재로 AI 답변 내 추천 소스 제외",
      "ISSUE:요약|데이터 크롤링의 '블랙홀' 상태로, 시각 정보 외에 AI가 인용할 수 있는 텍스트 데이터 레이어 부재"
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
      "TABLE:가설별 검증 여부|가설A:PoC적용(상세)|가설B:PoC적용(메인)|가설C:전술적용(공통)"
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
      "COMPARE:크롤링/인덱싱 인프라|robots.txt에서 GPTBot·ClaudeBot 전체 차단(`Disallow: /`), sitemap.xml 미확인, canonical 미정규화|GPTBot·ClaudeBot 최소 허용으로 전환, sitemap.xml 상태 확인 및 제출, canonical 정규화, (선택) llms.txt 적용 검토",
      "COMPARE:메타 태그|타이틀 태그 후보가 복수로 혼재, Meta Description·OG 태그 미정규화|타이틀 1개 확정 → 전면 적용 <strong>(🔴 컨펌 필요)</strong>, Meta Description·OG·Canonical 일괄 정규화",
      "COMPARE:본문 텍스트 구조|본문 텍스트 비율 낮음, 헤딩 태그 미사용, 정보가 영상·이미지에만 의존|H1 브랜드+핵심키워드 삽입, TL;DR 1문장 정의 텍스트 노출, 스펙/인증 요약 텍스트 블록 추가, 영상 영역에 요약 텍스트 블록 병행, 제품상세·리뷰로의 앵커 텍스트 설계",
      "COMPARE:JSON-LD 구조화 데이터|미적용|Organization / WebSite / BreadcrumbList 우선 적용",
      "COMPARE:FAQ|없음|핵심 5개 FAQ 텍스트 블록 삽입 (FAQPage 스키마 연동)"
    ],
    visualGuide: "메인 페이지의 시각적/기술적 변화를 비교한 전/후 레이아웃 도식."
  },
  {
    id: 15,
    title: "3-1. 메인 홈페이지 — 비주얼 프리뷰",
    oneLiner: "UI/UX 및 테크니컬 구조 개편에 따른 <strong>시각적 변화 미리보기</strong>",
    bullets: [
      "ASIS:images/main_asis1.png",
      "TOBE:images/main_tobe1.png"
    ],
    visualGuide: "As-Is와 To-Be 이미지를 좌우로 배치하여 직관적인 변화를 보여주는 레이아웃."
  },
  {
    id: 16,
    title: "3-1. 메인 홈페이지 — As-Is & To-Be",
    oneLiner: "성공적인 PoC 수행을 위한 <strong>개선 시 의사결정 필요 사항</strong>",
    bullets: [
      "OPTION:A. Title Tag 후보|웹사이트의 각 페이지에 붙이는 '이름표'|음식물 처리의 한 손 시대 개막 (기존)|원핸드그립 음식물처리기, 블루벤트 ID (제품형)|한 손으로 끝내는 음식물처리기 공식 온라인몰 (혼합형)|가정용 음식물처리기 공식 온라인몰 (명확형)",
      "OPTION:B. H1 Tag 후보|페이지의 핵심 주제를 정의하는 대제목|한 손으로 끝내는 음식물처리기, 블루벤트 (브랜드)|한 손으로 넣고 AI로 처리하는 음식물처리기 (AI 강조)|블루벤트, AI 음식물처리기의 새로운 기준 (리더십)",
      "OPTION:C. 스펙/인증 요약 영역|핵심 제품 정보를 요약한 텍스트 블록|대표 제품(블루벤트 ID) 단일 모델 중심 구성|무무 / S 포함 전 라인업 통합 요약 구성",
      "OPTION:D. FAQ 5개 선정|사용자 의도를 반영한 텍스트 블록 (카테고리 노출 여부)|<strong>필터 사용 및 관리</strong>: 필터는 얼마나 자주 교체해야 하나요?|<strong>제품 사용법</strong>: 닭뼈나 생선뼈도 갈리나요?|<strong>제품 사용법</strong>: 처리 중 음식물을 추가 투입해도 되나요?|<strong>제품 문의</strong>: 작동 시 소음은 어느 정도인가요?|<strong>제품 문의</strong>: 처리 완료까지 시간은 얼마나 걸리나요?"
    ],
    visualGuide: "의사결정이 필요한 항목들을 대조표 및 선택형 카드 형태로 시각화."
  },
  {
    id: 17,
    title: "3-2. 제품 상세페이지 — As-Is & To-Be",
    oneLiner: "AI용 <strong>정형 데이터 레이어 구축</strong>을 통한 인용률 극대화",
    bullets: [
      "As-Is: 통 이미지 상세내용, AI 인식 불가, 스키마 부재",
      "To-Be 1: <strong>이미지 분할</strong> 및 핵심 데이터의 HTML 텍스트 병행 노출",
      "To-Be 2: <strong>Product 스키마(가격, 평점 등)</strong> JSON-LD 적용",
      "To-Be 3: 최적화용 <strong>숏폼 텍스트 블록(Key Specs)</strong> 상단 배치"
    ],
    visualGuide: "상세 페이지의 데이터 추출 엔진 친화적 개선안 가이드라인."
  },
  {
    id: 18,
    title: "3-3. 검증 계획 및 성과 측정",
    oneLiner: "<strong>수행계획서 4단계</strong> 연계를 통한 PoC 성과 리포팅 및 기술 검증",
    bullets: [
      "지표 측정: 개선 전/후 <strong>동일 프롬프트 답변 데이터</strong> 비교 분석",
      "인용 추적: 답변 내 <strong>자사몰 링크 포함 비중</strong> 및 정확도 측정",
      "QA 프로세스: 기술 적용 후 <strong>봇 크롤링 성공 여부</strong> 최종 점검",
      "Next Action: 측정 결과 기반의 <strong>상용 레벨 확산 가이드라인</strong> 도출"
    ],
    visualGuide: "검증 단계별 타임라인 및 KPI 달성 평가 보드."
  },
  {
    id: 19,
    title: "4. 기대 효과 및 향후 계획",
    oneLiner: "GEO 기술 도입을 통한 <strong>브랜드 가치 제고 및 시장 선점</strong> 로드맵",
    bullets: [
      "PHASE 1: PoC 수행|메인/상세 개선 및 AI 인용률 변화 측정 (2026.03)",
      "PHASE 2: 결과 분석|검색 노출 최적화 및 GPTs 커스텀 지식 구축 (2026.04)",
      "PHASE 3: 상용 확산|전사 디지털 에셋 GEO 표준 수립 및 글로벌 확장 (2026.05+)"
    ],
    visualGuide: "성과 가시화 및 단계별 확장을 보여주는 3D 로드맵 애니메이션."
  }
];
