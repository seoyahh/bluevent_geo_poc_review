import { Slide } from '../types';

export const ANALYSIS_SLIDES: Slide[] = [
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
      "SUMMARY:<strong>진단 목적</strong>|AI 플랫폼(ChatGPT, Perplexity, Gemini 등)에서<br> 블루벤트가 얼마나 올바르게 인식·인용되는지 측정",
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
    title: "1-2. AI 모델별 인용률 분석 결과",
    oneLiner: "4대 주요 모델 대상 <strong>정량적 인용 매트릭스</strong> 산출 결과",
    bullets: [],
    visualGuide: "모델별/질문별 인용률을 보여주는 히트맵(Heatmap)"
  },
  {
    id: 41,
    title: "1-3. 경쟁사 언급 현황",
    oneLiner: "주요 모델 내 <strong>블루벤트 누락 및 경쟁사 반복 노출</strong> 원인 분석",
    bullets: [],
    visualGuide: "경쟁사 목록 및 GEO 인프라 비교 테이블"
  },
  {
    id: 5,
    title: "1-4. 인사이트 도출 — 가설 설정의 배경",
    oneLiner: "진단 데이터 기반 <strong>'테크니컬 개선을 통한 인용 신뢰도 확보'</strong> 가설 설정",
    bullets: [
      "INSIGHT:인용되는 페이지는 외부 기사의 블로그 컨텐츠로 특정된다.|공식 사이트보다 매거진한경, 아시아경제, 블로그 등에서 AI가 정보를 수집. 공식 페이지의 구조화된 텍스트 부재.",
      "INSIGHT:인용될 때 vs 안 될 때의 차이는 '텍스트 접근성'이다.|Q5(스펙)가 인용 안 되는 이유: 상세페이지가 이미지로만 구성.",
      "INSIGHT:사실 오류 패턴: 공식 텍스트 부재 시 AI가 '추론'으로 정보를 생성.|Gemini: 모델명 FG-ADM240N 오기(실제 BV-A12S-BKR). ChatGPT: 주소 수원시로 오기(실제 판교).",
      "HYPOTHESIS:메인 홈페이지와 제품 상세페이지의 테크니컬 구조를 개선하면, AI가 정확하게 인용할 확률이 높아진다."
    ],
    visualGuide: "현상 발견(Low Direct Citation)에서 가설 수립(Technical Optimization)으로 이어지는 로직 플로우."
  }
];
