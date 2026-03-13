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
      "<strong>robots.txt 차단 이슈</strong>: 고도몰 기본 정책에 의해 <strong>ClaudeBot, GPTBot이 전면 차단(Disallow: /)</strong>된 상태 확인",
      "<strong>AI 봇별 영향도</strong>: Perplexity/Gemini는 허용되나, <strong>ChatGPT/Claude는 사이트 직접 크롤링이 불가능</strong>하여 PoC 검증 불가",
      "<strong>Sitemap.xml 상태</strong>: 페이지 갱신 정보 누락 및 AI 봇 대상의 별도 사이트맵 경로 제공 미비",
      "<strong>Canonical 정책</strong>: 중복 페이지 처리 로직 미흡으로 인한 AI 엔티티 인식 분산 위험 식별"
    ],
    visualGuide: "인프라 차단 이슈(Red Signal)가 페이지별 개선 효과를 저해하는 로직 도식화."
  },
  {
    id: 9,
    title: "2-2. 메인 홈페이지 진단 결과",
    oneLiner: "브랜드 인식의 핵심인 <strong>메인 페이지 테크니컬 요소</strong> 심층 분석",
    bullets: [
      "Title & Meta: 브랜드 정체성 전달을 위한 <strong>메타 태그 최적화</strong> 수준",
      "Heading Level: <strong>H1 태그 부재</strong> 및 의미론적 위계 불일치 식별",
      "Content Density: <strong>이미지 비중</strong> 대비 AI 인식 가용 텍스트량 분석",
      "Entity Signal: <strong>Organization/WebSite</strong> 구조화 데이터 적용 여부"
    ],
    visualGuide: "메인 페이지의 가독성 및 데이터 구조화 수준을 보여주는 스코어링 차트."
  },
  {
    id: 10,
    title: "2-3. 제품 상세페이지(블루벤트 ID) 진단 결과",
    oneLiner: "제품 정보 정확도를 결정하는 <strong>데이터 추출 효율성</strong> 진단",
    bullets: [
      "통 이미지 구조: 단일 파일 구성으로 인한 <strong>텍스트 데이터 추출 불가</strong>",
      "Alt Tags: 제품 핵심 스펙에 대한 <strong>대체 텍스트 제공 부재</strong>",
      "Structured Data: <strong>Product 스키마 미적용</strong>으로 인한 인용 소스 실종",
      "Technical Debt: 플랫폼 제약에 따른 <strong>스크립트 삽입 한계점</strong>"
    ],
    visualGuide: "상세 페이지의 데이터 추출 방해 요소(이미지 덩어리 등) 시각화."
  },
  {
    id: 11,
    title: "2-4. 진단 결과 종합 → 가설 구체화",
    oneLiner: "진단 기반 핵심 문제 정의 및 <strong>PoC 수행을 위한 실행 가설</strong> 확정",
    bullets: [
      "문제 정의: <strong>'인프라 차단'</strong> 및 <strong>'데이터 구조 결핍'</strong>에 따른 신뢰도 저하",
      "실행 가설: <strong>시맨틱 구조화 적용</strong> 시 직접 인용률 30% 이상 향상",
      "우선 지점: 브랜드 엔티티 강화 및 <strong>상세 페이지 데이터 레이어</strong> 구축",
      "검증 설계: 기술 개선 전/후의 <strong>AI 답변 정확도 변화</strong> 측정"
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
      "플랫폼 제약: FTP 접근 및 DB 커스텀 불가능한 <strong>표준형 모델의 한계</strong>",
      "전략적 우회: <strong>스크립트 매니저</strong>를 활용한 클라이언트 사이드 데이터 삽입",
      "수동 가공: AI봇을 위한 별도 텍스트 레이어 삽입 및 시맨틱 보정",
      "협업 구조: 플랫폼사 지원 범위 외의 <strong>기술적 가용 범위</strong> 확정"
    ],
    visualGuide: "플랫폼 제약사항과 기술적 돌파구를 매칭한 솔루션 맵."
  },
  {
    id: 14,
    title: "3-1. 메인 홈페이지 — As-Is & To-Be",
    oneLiner: "브랜드 실체 강화를 위한 <strong>인프라 정상화 및 시맨틱 보정</strong>",
    bullets: [
      "As-Is: AI 봇 차단 상태, 이미지 중심, 의미론적 정보 부재",
      "To-Be 1: <strong>robots.txt 수정</strong> 및 sitemap 자동 생성/제출 최적화",
      "To-Be 2: <strong>TL;DR(요약문) 삽입</strong> 및 핵심 FAQ 텍스트 레이어 추가",
      "To-Be 3: <strong>JSON-LD 브랜드 구조화 데이터</strong> 전면 적용"
    ],
    visualGuide: "메인 페이지의 시각적/기술적 변화를 비교한 전/후 레이아웃 도식."
  },
  {
    id: 15,
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
    id: 16,
    title: "3-3. 검증 계획 및 성과 측정",
    oneLiner: "<strong>수행계획서 4단계</strong> 연계를 통한 PoC 성과 리포팅 및 기술 검증",
    bullets: [
      "지표 측정: 개선 전/후 <strong>동일 프롬프트 답변 데이터</strong> 비교 분석",
      "인용 추적: 답변 내 <strong>자사몰 링크 포함 비중</strong> 및 정확도 측정",
      "QA 프로세스: 기술 적용 후 <strong>봇 크롤링 성공 여부</strong> 최종 점검",
      "Next Action: 측정 결과 기반의 <strong>상용 레벨 확산 가이드라인</strong> 도출"
    ],
    visualGuide: "검증 단계별 타임라인 및 KPI 달성 평가 보드."
  }
];
