import { Slide } from './types';

export const SLIDES: Slide[] = [
  {
    id: 1,
    title: "블루벤트 GEO향 개편 PoC - 수행방안 리뷰",
    oneLiner: "AI 기반 검색 엔진 최적화 및 사용자 경험 고도화 전략",
    bullets: [
      "Project: SEO/GEO Optimization",
      "Date: 2026. 03",
      "Confidential: Level 2"
    ],
    visualGuide: "심플하고 전문적인 커버 디자인. 블루벤트 로고와 GEO(Generative Engine Optimization) 키워드 강조."
  },
  {
    id: 2,
    title: "1. AI 인용 현황 분석",
    oneLiner: "현행 AI 플랫폼별 브랜드 인지 및 인용률 정밀 진단",
    bullets: [],
    visualGuide: "대단원 섹션 브레이크. 심플하고 볼드한 텍스트 중심 디자인."
  },
  {
    id: 3,
    title: "1-1. 질문 세트 구성 방안",
    oneLiner: "정교한 질문 설계를 통한 AI 플랫폼별 브랜드 인식 및 인용 정확도 측정",
    bullets: [
      "진단 목적: 주요 AI 모델별 블루벤트 브랜드 엔티티 및 제품 정보 인용 현황 진단",
      "개선 범위: 블루벤트 공식 메인 홈페이지 및 대표 제품 상세페이지 (코드 레벨 개선)",
      "수집 항목: 브랜드 언급 유무 / 인용 URL 경로 / 제품 정보 정확도 / 오류 패턴 분석",
      "질문 설계: 카테고리별 핵심 질문 5개를 선정하여 중복 답변을 방지하고 변별력 확보"
    ],
    visualGuide: "질문 설계 로직과 카테고리별(A, B, C) 대표 문항을 배치한 구조적 인포그래픽."
  },
  {
    id: 4,
    title: "질문 카테고리 및 최종 5문항",
    oneLiner: "브랜드 실체부터 비브랜드 추천, 상세 스펙까지 아우르는 진단 쿼리 구성",
    bullets: [
      "Q1 (브랜드 인식): 블루벤트는 어떤 회사고, 어떤 제품을 판매하나요?",
      "Q2 (추천 쿼리): 가정용 음식물처리기 추천해줘. 분쇄식으로 조용하고 탈취 잘 되는 거 찾고 있어.",
      "Q3 (비교 쿼리): 음식물처리기 구매 시 브랜드별 차이? 국내 주요 브랜드 비교해줘.",
      "Q4 (기능 추천): 스마트폰 앱 확인 및 스마트 기능 지원하는 음식물처리기 브랜드는?",
      "Q5 (정보 정확도): 블루벤트 ID 음식물처리기 스펙이랑 주요 기능 알려줘."
    ],
    visualGuide: "질문 카테고리(브랜드/추천/스펙)별 아이콘과 말풍선 형태의 질문 리스트."
  },
  {
    id: 5,
    title: "1-2. AI 모델별 인용률 분석 결과",
    oneLiner: "4대 주요 모델(ChatGPT, Perplexity, Gemini, Claude) 대상 정량적 인용 매트릭스 산출",
    bullets: [
      "인용 매트릭스: 모델별 질문 답변에 대한 인용 유무 및 근거 URL 적절성 평가",
      "오류 식별: 사실 오류(Hallucination) 패턴 정리 및 경쟁사 오인용 사례 분석",
      "출처 분석: 공식 홈페이지 vs 상세페이지 vs 외부 리뷰/블로그 인용 비중 통계",
      "인용 패턴: 텍스트 정보 부족 시 크롤러가 주로 참조하는 외부 리소스 현황 파악"
    ],
    visualGuide: "모델별/질문별 인용률을 보여주는 히트맵(Heatmap)과 출처별 비율 파이 차트."
  },
  {
    id: 6,
    title: "1-3. 인사이트 및 상위 가설 수립",
    oneLiner: "진단 데이터 기반 '테크니컬 개선을 통한 인용 신뢰도 확보' 가설 설정",
    bullets: [
      "핵심 발견: 인용은 주로 정보 밀도가 높은 외부 사이트에 의존하며 자사몰 비중이 낮음",
      "오류 패턴: 이미지 기반의 상세 페이지 내용을 AI가 오인하거나 누락하는 경향 뚜렷",
      "상위 가설: 자사몰 테크니컬 구조 최적화 시 AI의 정확한 인용 확률 및 신뢰도 대폭 상승",
      "수행 근거: 공식 데이터의 신뢰도 우위를 점하기 위한 데이터 구조화(JSON-LD 등) 필수"
    ],
    visualGuide: "현상 발견(Low Direct Citation)에서 가설 수립(Technical Optimization)으로 이어지는 로직 플로우."
  },
  {
    id: 6,
    title: "Diagnosis (1): 사이트 인프라 진단 - robots.txt 병목",
    oneLiner: "고도몰 기본 정책에 의한 주요 AI 봇(GPT, Claude) 차단이 최대 병목 구간",
    bullets: [
      "현황: bluevent.co.kr/robots.txt에서 GPTBot, ClaudeBot 전체 차단(Disallow: /) 상태",
      "영향: ChatGPT 및 Claude 모델의 자사몰 직접 크롤링 불가로 인한 인용 원천 차단",
      "해결 방향: robots.txt 수정을 통한 주요 AI 봇 허용 및 sitemap.xml 제출 필수"
    ],
    visualGuide: "robots.txt 코드 캡처 화면과 '차단됨(Disallow)' 표시를 강조한 경고 아이콘."
  },
  {
    id: 7,
    title: "Diagnosis (2): 페이지별 테크니컬 진단 결과",
    oneLiner: "이미지 중심 콘텐츠 구성으로 인한 텍스트 정보 크롤링 불가 및 구조화 데이터 부재",
    bullets: [
      "메인 페이지: 본문 텍스트 비율 저하, 헤딩 태그(H-tag) 미사용, JSON-LD 미적용",
      "상세 페이지: 통 이미지 기반 구성으로 텍스트 인식 불가, alt 텍스트 및 헤딩 구조 부재",
      "공통 이슈: AI 크롤러가 '데이터'로 인식할 수 있는 구조적 신호의 절대적 부족"
    ],
    visualGuide: "페이지별 진단 결과 대시보드 (Pass/Warning/Fail 신호등 아이콘 활용)."
  },
  {
    id: 8,
    title: "Strategic Plan (1): 고도몰 플랫폼 최적화 전략",
    oneLiner: "플랫폼 제약을 우회하는 HTML 직접 삽입 및 인프라 수동 수정을 통한 실행력 확보",
    bullets: [
      "기술 제약: SSR 한계 및 템플릿 구조 제약으로 인한 동적 데이터 구조화의 어려움",
      "우회 전략: 신규 콘텐츠 제작 대신 기존 데이터의 텍스트 구조화(Hidden Text, Schema) 집중",
      "인프라 해결: FTP 직접 접속 또는 고객센터 요청을 통한 robots.txt 강제 수정 프로세스 수립"
    ],
    visualGuide: "고도몰 시스템 제약사항과 이를 해결하기 위한 기술적 우회 방안 매칭 테이블."
  },
  {
    id: 9,
    title: "Strategic Plan (2): 메인 홈페이지 As-Is vs To-Be",
    oneLiner: "인프라 정상화 및 브랜드 엔티티 강화를 위한 구조화 데이터 전면 도입",
    bullets: [
      "인프라: robots.txt AI 봇 허용 전환 및 sitemap.xml/canonical 정규화",
      "콘텐츠: H1 태그 삽입, TL;DR 정의문 노출, FAQ 텍스트 블록 추가",
      "구조화: Organization, WebSite, BreadcrumbList JSON-LD 적용을 통한 브랜드 실체 강화"
    ],
    visualGuide: "메인 페이지 레이아웃 변경 전/후 비교 와이어프레임(Wireframe)."
  },
  {
    id: 10,
    title: "Strategic Plan (3): 제품 상세페이지 As-Is vs To-Be",
    oneLiner: "'읽히는 상세페이지' 구현을 위한 이미지 분할 및 텍스트 레이어링(Alt/Hidden)",
    bullets: [
      "구조 개선: 통 이미지 -> 13개 분할 이미지 및 Alt 텍스트 규격화 적용",
      "정보 레이어: 섹션별 H2/H3 헤딩 구조 정비 및 히든 텍스트 삽입으로 크롤링 효율 극대화",
      "데이터 우선: Product 스키마 적용을 통해 AI가 제품 스펙 데이터를 우선 참조하도록 유도"
    ],
    visualGuide: "상세페이지 이미지 분할 구조와 텍스트 삽입 위치를 보여주는 도식도."
  },
  {
    id: 11,
    title: "Decision Points (1): 메타 타이틀 및 H1 태그 후보",
    oneLiner: "브랜드 정체성과 핵심 키워드를 결합한 최적의 메타 신호 선택 필요 (컨펌 사항)",
    bullets: [
      "Meta Title 후보: 브랜드 비전형 vs 카테고리 명확형 vs 제품 노출형",
      "H1 태그 후보: USP 강조형 vs AI 키워드 결합형",
      "결정 기준: 검색 의도 부합도 및 AI 인용 시 브랜드 리더십 강조 가능성"
    ],
    visualGuide: "후보군 비교 표 및 각 후보별 기대 효과 요약."
  },
  {
    id: 12,
    title: "Decision Points (2): 핵심 FAQ 및 텍스트 블록 구성",
    oneLiner: "AI 답변의 직접적인 소스가 될 5대 핵심 FAQ 및 제품 요약 정보 확정",
    bullets: [
      "FAQ 선정: 필터 교체, 닭뼈 처리, 소음 수준 등 고객 주요 페인포인트 기반 5문항",
      "텍스트 블록: TL;DR 정의문, 스펙/인증 요약, 영상 요약 텍스트 구성안",
      "데이터 범위: 대표 제품(블루벤트 ID) 단일 구성 여부 합의"
    ],
    visualGuide: "선정된 FAQ 리스트와 메인 페이지 삽입 텍스트 블록 구성안."
  },
  {
    id: 13,
    title: "Execution (1): 검증 지표 및 방법론",
    oneLiner: "동일 프롬프트 기반의 전/후 비교를 통한 정량적 GEO 성과 측정",
    bullets: [
      "측정 지표: 인용률 변화(전체/모델별), 인용 URL 적절성, 사실 정확도, 근거 URL 노출 여부",
      "검증 방법: 4주차 QA 및 AI 모델별 재테스트 수행을 통한 가설 검증",
      "목표: 자사몰 공식 데이터의 AI 인용 우선순위 및 정확도 확보"
    ],
    visualGuide: "GEO 성과 측정 KPI 대시보드 예시 및 검증 프로세스 플로우."
  },
  {
    id: 14,
    title: "Execution (2): 4주차 PoC 로드맵",
    oneLiner: "진단부터 검증까지 4주 집중 수행을 통한 단기 GEO 성과 도출",
    bullets: [
      "Week 1: 현황 분석 및 진단 (완료)",
      "Week 2: 설계 및 구조화 (IA 기술 설계, 스키마/메타 설계)",
      "Week 3: 구현 및 적용 (HTML 반영, 코드 레벨 적용)",
      "Week 4: 테스트 및 검증 (QA 및 AI 인용 전/후 비교 분석)"
    ],
    visualGuide: "간트 차트(Gantt Chart) 형태의 주차별 실행 로드맵."
  },
  {
    id: 15,
    title: "Next Step: 협조 요청 및 합의 사항",
    oneLiner: "PoC 실행을 위한 기술 권한 확보 및 선결 과제 즉시 착수",
    bullets: [
      "권한 확보: 고도몰 FTP 및 관리자 계정 접근 권한 제공",
      "선결 과제: robots.txt 수정 요청 (NHN커머스 고객센터 연계)",
      "데이터 수급: 제품 상세 스펙 시트 및 FAQ 최종 원문 제공"
    ],
    visualGuide: "체크리스트 형태의 협조 요청 사항 및 향후 미팅 일정."
  }
];
