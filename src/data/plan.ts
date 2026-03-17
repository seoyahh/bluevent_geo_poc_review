import { Slide } from '../types';

export const PLAN_SLIDES: Slide[] = [
  {
    id: 12,
    title: "3. PoC 수행방안",
    oneLiner: "기술적 개선과 성과 입증을 위한 <strong>단계별 실행 로드맵</strong> 상세 전략",
    bullets: [],
    visualGuide: "마지막 섹션 브레이크. 실행력과 성과 중심의 다이나믹한 디자인."
  },
  {
    id: 13,
    title: "3-0. 고도몰 플랫폼 특성을 고려한 개선 전략",
    oneLiner: "",
    bullets: [
      "ACTION:<span class='text-[#FF4040]'>robots.txt AI봇 허용</span>|FTP 직접 수정 또는 NHN커머스 고객센터 요청|블루벤트 개발팀|업데이트 시 덮어쓰기 가능 &rarr; 주 1회 모니터링",
      "ACTION:Sitemap.xml 확인/생성|고도몰 관리자 확인 &rarr; 미존재 시 수동 생성 + Search Console 제출|이트라이브|페이지 수 변동 시 갱신 필요",
      "ALERT:⚠ 위 2가지 미완료 시 &rarr; 아래 3-1/3-2 최적화 효과를 정상 측정할 수 없음",
      "CONSTR:SSR 한계 &rarr; 서버 사이드 렌더링 제어 불가|HTML 내 직접 텍스트/데이터 삽입 방식으로 구현",
      "CONSTR:템플릿 구조 제약|변경 가능 영역(상품 상세 설명, 머리말/꼬리말) vs 불가 영역 구분",
      "CONSTR:치환코드 활용 범위 한정|자유 입력 가능 영역(상품 설명, 추가 HTML)을 최대한 활용"
    ],
    visualGuide: "플랫폼 제약사항과 필수 조치를 테이블로 대비한 형태"
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
    oneLiner: "테크니컬 GEO 개선 및 <strong>텍스트 레이어 확보</strong> 전략",
    bullets: [
      "ASIDE_TITLE:본 PoC 범위에서는 상세페이지 이미지 ‘순서 재배치’는 제외하고, GEO 개선에 집중합니다.",
      "ASIDE_BULLET:<strong>AI 인용/정확도 개선의 핵심 레버</strong>는 이미지 위치보다 ‘텍스트로 읽히는 구조’(alt, hidden text, H1~H3)입니다.",
      "ASIDE_BULLET:<strong>alt 텍스트 품질이 확보</strong>되면 이미지 위치와 상관없이 크롤러의 정보 인식률이 대폭 상승합니다.",
      "ASIDE_BULLET:순서 재배치는 검증보다 <strong>UX/CRO 성격이 강해</strong> 이번 PoC 기술 검증 항목과는 분리합니다.",
      "ASIDE_BULLET:PoC 우선순위는 <strong>① 이미지 Alt 텍스트 전면 적용 → ② 섹션별 헤딩 구조 정비 및 데이터 구조화</strong> 순입니다.",
      "COMPARE:① 메타 태그|(점검 필요)|Meta Title·Desc·OG·Canonical 정규화",
      "COMPARE:② Alt 텍스트|없음 / '.' 등 비규격|\"블루벤트 ID [기능명] — [설명]\" 규격",
      "COMPARE:② 시맨틱 텍스트|없음|이미지 아래 H2/H3/p 텍스트 블록 삽입<br/>(시각적 노출 또는 sr-only, 클로킹 금지 준수)"
    ],
    visualGuide: "상세 페이지의 테크니컬 개선 핵심 포인트(Aside)와 4대 실행 항목(Grid)을 결합한 정보 중심 레이아웃."
  },
  {
    id: 18,
    title: "3-3. 검증 계획 — 프로토콜 · KPI",
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
