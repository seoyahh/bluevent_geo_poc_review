import { Slide } from '../types';

export const DIAGNOSIS_SLIDES: Slide[] = [
  {
    id: 6,
    title: "2. 테크니컬 GEO 진단 결과",
    oneLiner: "자사몰 <strong>인프라 및 페이지별</strong> 검색 환경 정밀 진단 데이터",
    bullets: [],
    visualGuide: "두 번째 섹션 브레이크. 기술적 진단 키워드 중심의 시각화."
  },
  {
    id: 7,
    title: "2-1. 진단 방법론 및 도메인 인프라 진단",
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
    ],
    visualGuide: "과제 도출 매트릭스 및 가설 수립 플로우차트."
  },
  {
    id: 115,
    title: "2-5. 검증 가능 여부 및 PoC 적용 범위",
    oneLiner: "설정된 가설의 <strong>우선순위 및 핵심 검증 지표</strong> 정의",
    bullets: [
      "VERIFY:사전 조건|도메인|AI봇 접근 가능 여부|필수|0순위",
      "VERIFY:가설 A|상세페이지|Q5 인용률, 스펙 정확도|높음|1순위",
      "VERIFY:가설 B|메인페이지|Q1 인용률, 공식 URL 비율|높음|1순위",
      "VERIFY:가설 C|메인|Q2·Q3 노출, 경쟁사 순위|중간|2순위"
    ],
    visualGuide: "가설별 검증 우선순위 지정 및 범위 정의 매트릭스."
  }
];
