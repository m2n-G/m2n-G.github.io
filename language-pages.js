(() => {
  const STORAGE_KEY = 'portfolio-language';
  const pageName = window.location.pathname.split('/').pop() || 'index.html';

  const commonText = new Map([
    ['Khloe Kim', '김민지'],
    ['Home', '홈'],
    ['Resume', '이력서'],
    ['Project', '프로젝트'],
    ['Learning History', '학습 기록'],
    ['Contact', '연락하기'],
    ['Project Index', '프로젝트 목록'],
    ['Projects', '프로젝트'],
    ['Open detail', '상세 보기'],
    ['Role', '역할'],
    ['Timeline', '기간'],
    ['Team', '팀'],
    ['Stack', '기술 스택'],
    ['Dataset', '데이터셋'],
    ['Focus', '핵심 분야'],
    ['Outcome', '성과'],
    ['Overview', '개요'],
    ['Problem', '문제'],
    ['Solution', '해결 방법'],
    ['Results', '성과'],
    ['Links', '링크'],
    ['Sections', '목차'],
    ['Architecture', '아키텍처'],
    ['Evaluation Integrity', '평가 신뢰성'],
    ['Inference Pipeline', '추론 파이프라인'],
    ['Continuous Training', '지속 학습'],
    ['Anomaly Detection', '이상 탐지'],
    ['All Projects', '전체 프로젝트'],
    ['Topics', '주제'],
    ['Choosing a Korean emotion model', '한국어 감정 모델 선택 과정'],
    ['Embedded communication on Raspberry Pi', 'Raspberry Pi 임베디드 통신'],
    ['Predicting wafer defects without fooling myself', '데이터에 속지 않는 웨이퍼 결함 예측'],
    ['An autoencoder for the defects SPC misses', 'SPC가 놓치는 결함을 잡는 오토인코더'],
    ['Read the log ->', '기록 읽기 →'],
    ['Read ->', '읽기 →'],
    ['Model', '모델'],
    ['Accuracy', '정확도'],
    ['Weighted-F1', '가중 F1'],
    ['Part 1 쨌 Hardware', '파트 1 · 하드웨어'],
    ['Part 2 쨌 Deep Learning', '파트 2 · 딥러닝'],
    ['Part 1 · Hardware', '파트 1 · 하드웨어'],
    ['Part 2 · Deep Learning', '파트 2 · 딥러닝']
  ]);

  const pages = {
    'project.html': {
      title: ['Projects | Khloe Minji Kim', '프로젝트 | 김민지'],
      description: [
        "Project index for Khloe Kim's MLOps, RAG, embedded AI, and analytics automation work.",
        '김민지의 MLOps, RAG, 임베디드 AI 및 분석 자동화 프로젝트 목록입니다.'
      ],
      content: [
        ['.project-hero .lead',
          'Selected work across manufacturing prediction pipelines, RAG-based legal agents, embedded AI systems, and operational automation.',
          '제조 예측 파이프라인, RAG 기반 법률 에이전트, 임베디드 AI 시스템, 운영 자동화 분야의 주요 작업을 소개합니다.'],
        ['.project-list-card:nth-child(1) h2', 'Active Manufacturing AI Platform', '능동형 제조 AI 플랫폼'],
        ['.project-list-card:nth-child(1) p',
          'Real-time Etch-process defect prediction with Kafka ingestion, LightGBM ensembles, SHAP attribution, and MLflow-based retraining.',
          'Kafka 수집, LightGBM 앙상블, SHAP 기여도 분석, MLflow 기반 재학습을 결합한 실시간 식각 공정 결함 예측 프로젝트입니다.'],
        ['.project-list-card:nth-child(2) h2', 'Youth Life Legal Consultation AI', '청년 생활 법률 상담 AI'],
        ['.project-list-card:nth-child(2) p',
          'RAG-based multi-agent system that routes youth legal questions and grounds labor-domain answers in Korean statute retrieval.',
          '청년 생활 법률 질문을 분류하고 국내 법령 검색을 바탕으로 노동 분야 답변을 생성하는 RAG 기반 멀티 에이전트 시스템입니다.'],
        ['.project-list-card:nth-child(3) h2', 'Chicky, Emotion-Aware AI Doll', 'Chicky, 감정 인식 AI 인형'],
        ['.project-list-card:nth-child(3) p',
          "Capstone companion doll that classifies children's emotions from dialogue and recommends emotion-matched audiobooks.",
          '대화에서 아동의 감정을 분류하고 감정에 맞는 오디오북을 추천하는 캡스톤 AI 반려 인형입니다.'],
        ['.project-list-card:nth-child(4) h2', 'OCR Ledger Automation', 'OCR 장부 자동화'],
        ['.project-list-card:nth-child(4) p',
          'Accounting workflow automation that converted bank statement screenshots into ledger entries and reduced preparation time.',
          '은행 거래 내역 스크린샷을 장부 항목으로 변환해 회계 자료 준비 시간을 줄인 업무 자동화 프로젝트입니다.']
      ],
      attributes: [['.project-list', 'aria-label', 'Project pages', '프로젝트 페이지']]
    },

    'project-01.html': {
      title: ['Active Manufacturing AI Platform | Khloe Minji Kim', '능동형 제조 AI 플랫폼 | 김민지'],
      description: [
        'Part A of AITCH: a real-time Etch-process defect-prediction pipeline with Kafka inference, SHAP attribution, autoencoder anomaly detection, and champion-challenger retraining.',
        'AITCH의 파트 A — Kafka 추론, SHAP 기여도 분석, 오토인코더 이상 탐지, 챔피언-챌린저 재학습을 갖춘 실시간 식각 공정 결함 예측 파이프라인입니다.'
      ],
      content: [
        ['.project-hero .eyebrow', 'Project 01', '프로젝트 01'],
        ['.project-hero h1', 'Active Manufacturing AI Platform', '능동형 제조 AI 플랫폼'],
        ['.project-hero .lead',
          'The Part-A build of Team AITCH: a real-time pipeline that scores every wafer for Etch-process defects from Kafka FDC traces, explains each score with SHAP, flags hidden anomalies with an autoencoder, and keeps itself trustworthy through leak-free evaluation and champion-challenger retraining.',
          'AITCH 팀의 A파트 구현입니다. Kafka FDC 트레이스로 모든 웨이퍼의 식각 공정 결함을 실시간으로 예측하고, 각 예측을 SHAP으로 설명하며, 오토인코더로 숨은 이상을 탐지하고, 누수 없는 평가와 챔피언-챌린저 재학습으로 신뢰성을 유지하는 파이프라인입니다.'],
        ['.project-meta .meta-item:nth-child(1) strong', 'ML / MLOps Engineer', 'ML / MLOps 엔지니어'],
        ['.project-meta .meta-item:nth-child(2) strong', 'Jun–Aug 2026', '2026년 6월–8월'],
        ['.project-meta .meta-item:nth-child(4) strong', '11,939 wafers / 123K rows', '웨이퍼 11,939장 / 12.3만 행'],
        ['#overview > p:nth-of-type(1)',
          "AITCH (AI + Etch) is a Human-in-the-Loop AI platform for semiconductor Etch-process monitoring, built by a four-person team during an SK-affiliated data engineering program. It predicts wafer-level defect counts from FDC sensor traces in real time, explains why, and routes every corrective action through an engineer's approval rather than acting on its own.",
          'AITCH(AI + Etch)는 반도체 식각 공정 모니터링을 위한 Human-in-the-Loop AI 플랫폼으로, SK 계열 데이터 엔지니어링 과정에서 4인 팀이 구축했습니다. FDC 센서 트레이스로부터 웨이퍼 단위 결함 수를 실시간으로 예측하고 그 근거를 설명하며, 모든 보정 조치를 AI가 단독으로 실행하지 않고 엔지니어의 승인을 거치도록 연결합니다.'],
        ['#overview > p:nth-of-type(2)',
          'I owned <strong>Part A</strong>: the prediction pipeline and the three model-update loops behind it. My scope ran from the model itself to everything that keeps it honest in production — real-time inference, SHAP attribution, autoencoder anomaly detection, a bounded run-to-run bias correction, and automated retraining gates. The thread running through all of it is <strong>evaluation integrity</strong>: making the numbers truthful before making them better.',
          '저는 <strong>파트 A</strong>, 즉 예측 파이프라인과 그 뒤의 세 가지 모델 갱신 루프를 담당했습니다. 담당 범위는 모델 자체부터 운영 환경에서 모델을 신뢰할 수 있게 유지하는 모든 요소까지 이어집니다 — 실시간 추론, SHAP 기여도 분석, 오토인코더 이상 탐지, 제한된 범위의 run-to-run 편향 보정, 자동 재학습 게이트입니다. 이 모든 작업을 관통하는 핵심은 <strong>평가 신뢰성</strong>, 즉 수치를 좋게 만들기 전에 먼저 정직하게 만드는 것입니다.'],
        ['#architecture > p',
          'Part A sits at two points in the platform: the inference stage that turns raw sensor traces into an explained prediction, and the retraining stage that consumes delayed ground-truth labels to keep the model current. Everything between them flows through Kafka topics and a single engineer approval gate.',
          '파트 A는 플랫폼의 두 지점에 위치합니다. 원시 센서 트레이스를 근거가 담긴 예측으로 바꾸는 추론 단계와, 지연되어 도착하는 실측 레이블을 받아 모델을 최신 상태로 유지하는 재학습 단계입니다. 그 사이의 모든 흐름은 Kafka 토픽과 단일 엔지니어 승인 게이트를 거칩니다.'],
        ['#architecture .arch-block',
          `[Simulator]  FDC trace replay · 4 virtual chambers
     |  fdc.raw   (Kafka · 3s sensor rows)
     v
[A · Inference]  per-wafer buffer -> lean-85 XGBoost      &lt;-- my part
     |             + SHAP Top-3 + autoencoder anomaly / drift
     |  fdc.prediction
     v
[B · Smart SPC]  Nelson rules + TTTM  ->  fdc.alert
     v
[C · RAG Agent]  3 option reports -> supervisor verdict
     v
[Approval Gate]  approve / edit / reject / escalate  (LangGraph)
     |  fdc.correction
     v
[A · Model R2R + CT]  bias correction + champion-challenger retrain   &lt;-- my part
     ^
     |  fdc.actual   (ground-truth labels, delayed)`,
          `[시뮬레이터]  FDC 트레이스 리플레이 · 가상 챔버 4대
     |  fdc.raw   (Kafka · 3초 센서 행)
     v
[A · 추론]  웨이퍼별 버퍼 -> lean-85 XGBoost      &lt;-- 담당
     |         + SHAP Top-3 + 오토인코더 이상 / 드리프트
     |  fdc.prediction
     v
[B · Smart SPC]  Nelson 규칙 + TTTM  ->  fdc.alert
     v
[C · RAG Agent]  옵션 리포트 3종 -> 슈퍼바이저 판정
     v
[승인 게이트]  승인 / 수정 / 반려 / 에스컬레이션  (LangGraph)
     |  fdc.correction
     v
[A · Model R2R + CT]  편향 보정 + 챔피언-챌린저 재학습   &lt;-- 담당
     ^
     |  fdc.actual   (실측 레이블, 지연 도착)`],
        ['#integrity .part-label', 'Focus · Evaluation Integrity', '핵심 · 평가 신뢰성'],
        ['#integrity > p:nth-of-type(2)',
          "The first models looked excellent — a cross-validated RMSE around 33. They were also wrong. Random splits and lot-level aggregate features let each wafer's own outcome leak back into its inputs, so the score was measuring memorization, not prediction.",
          '초기 모델은 훌륭해 보였습니다 — 교차 검증 RMSE가 약 33이었습니다. 그리고 그것은 틀린 값이었습니다. 무작위 분할과 로트 단위 집계 특성 탓에 각 웨이퍼 자신의 결과가 입력에 되유입되어, 이 점수는 예측이 아니라 암기를 측정하고 있었습니다.'],
        ['#integrity > p:nth-of-type(3)',
          'I rebuilt the evaluation from the ground up: split by wafer ID so no wafer sits on both sides, drop the target-derived fail-bit count from the features, and remove the lot aggregates. On a leak-free, step-window feature set the honest same-era RMSE was about 76 — more than double, and finally real.',
          '저는 평가 체계를 처음부터 다시 세웠습니다. 같은 웨이퍼가 양쪽에 놓이지 않도록 웨이퍼 ID로 분할하고, 타깃에서 파생된 fail-bit 수를 특성에서 제거하며, 로트 집계를 걷어냈습니다. 누수가 제거된 스텝-윈도우 특성에서 정직한 동일 시기 RMSE는 약 76으로, 두 배 이상 높아졌지만 비로소 실제 값이 되었습니다.'],
        ['#integrity > p:nth-of-type(4)',
          'Then I moved to a time-ordered walk-forward that trains on the past and tests on the future, mirroring how the equipment drifts through maintenance cycles. That is the number I trust: pooled RMSE 99.84 at R² 0.855 with retraining, against roughly 255 for a model frozen in time — the gap that justifies every retraining loop below.',
          '그다음에는 과거로 학습하고 미래로 평가하는 시간순 워크포워드 방식으로 옮겨, 장비가 정비 주기를 거치며 변화하는 양상을 그대로 반영했습니다. 제가 신뢰하는 값은 이것입니다. 재학습을 포함해 통합 RMSE 99.84, R² 0.855이며, 시간에 고정된 모델의 약 255와 대비됩니다 — 아래의 모든 재학습 루프를 정당화하는 격차입니다.'],
        ['#integrity .metric-card:nth-child(1) span', 'Random CV · leaky', '무작위 CV · 누수'],
        ['#integrity .metric-card:nth-child(2) span', 'Leak-free · same-era', '누수 제거 · 동일 시기'],
        ['#integrity .metric-card:nth-child(3) span', 'Walk-forward · honest', '워크포워드 · 정직한 값'],
        ['#inference .part-label', 'Pipeline · Real-Time Inference', '파이프라인 · 실시간 추론'],
        ['#inference > p:nth-of-type(2)',
          'The serving path reads raw FDC rows from Kafka, buffers them per wafer, and flushes a wafer the instant the next one enters the chamber — or after 15 seconds of silence. Each finished wafer is scored and published to one <code>fdc.prediction</code> topic that the SPC engine, dashboard, and database all consume.',
          '서빙 경로는 Kafka에서 원시 FDC 행을 읽어 웨이퍼별로 버퍼링하고, 같은 챔버에 다음 웨이퍼가 들어오는 순간 — 또는 15초간 신호가 없으면 — 해당 웨이퍼를 플러시합니다. 완료된 각 웨이퍼는 점수가 매겨져 SPC 엔진, 대시보드, 데이터베이스가 모두 구독하는 단일 <code>fdc.prediction</code> 토픽으로 발행됩니다.'],
        ['#inference > p:nth-of-type(3)',
          'The deployed predictor is a single frozen gradient-boosted model — "lean-85", 85 features distilled from 24 sensors and maintenance-regime signals. Every prediction ships with its SHAP Top-3 attribution in a contract-guaranteed order, so downstream services get the three sensors that moved each score without recomputing anything, while an autoencoder scores the same wafer for anomaly and drift on a parallel channel.',
          '배포된 예측기는 하나의 고정된 그래디언트 부스팅 모델입니다 — 24개 센서와 정비 구간 신호에서 추린 85개 특성의 "lean-85"입니다. 모든 예측에는 계약으로 순서가 보장된 SHAP Top-3 기여도가 함께 실려, 하위 서비스가 각 점수를 움직인 상위 3개 센서를 재계산 없이 곧바로 얻습니다. 동시에 오토인코더가 같은 웨이퍼의 이상과 드리프트를 병렬 채널에서 점수화합니다.'],
        ['#retraining .part-label', 'Reliability · Continuous Training', '신뢰성 · 지속 학습'],
        ['#retraining > p:nth-of-type(2)',
          'Ground-truth defect counts arrive long after a wafer is processed, so the freshest drift is something no model has yet trained on. <strong>Model R2R</strong> closes that gap with a bounded run-to-run correction: it tracks the rolling residual between predictions and delayed actuals and shifts the output by a clamped offset — never more than one training-RMSE — logging every decision before it applies and resetting after a major maintenance event. After a regime shift it cut the mean residual from about 513 to 85.',
          '실측 결함 수는 웨이퍼 처리 이후 한참 뒤에 도착하므로, 가장 최근의 드리프트는 아직 어떤 모델도 학습하지 못한 영역입니다. <strong>Model R2R</strong>은 제한된 run-to-run 보정으로 이 간극을 메웁니다. 예측과 지연된 실측 사이의 이동 잔차를 추적해, 출력을 학습 RMSE의 1배를 넘지 않는 제한된 오프셋만큼 이동시키고, 적용 전에 모든 결정을 기록하며, 주요 정비 이벤트 이후 초기화합니다. 구간 전환 이후 평균 잔차를 약 513에서 85로 줄였습니다.'],
        ['#retraining > p:nth-of-type(3)',
          "Two retraining loops keep the models current. The predictor retrains daily on a sliding window and promotes a challenger only when it beats the champion by at least 3% on a shared holdout; across a year-long backtest, daily retraining held RMSE near 55 (R² 0.956) where a frozen model drifted to 334. The autoencoder retrains behind a 19-check deploy gate — bundle completeness, a false-alarm budget, and synthetic-probe recall — backed by 103 unit tests and a three-valued pass / fail / can't-score verdict, so a model that merely fails to score is never mistaken for one that passed.",
          '두 개의 재학습 루프가 모델을 최신으로 유지합니다. 예측기는 슬라이딩 윈도우로 매일 재학습하며, 공용 홀드아웃에서 챔피언을 3% 이상 앞설 때만 챌린저를 승격합니다. 1년치 백테스트에서 매일 재학습은 RMSE를 약 55(R² 0.956)로 유지한 반면, 고정 모델은 334까지 벌어졌습니다. 오토인코더는 19개 항목의 배포 게이트 — 번들 완전성, 오경보 예산, 합성 프로브 재현율 — 뒤에서 재학습하며, 103개의 단위 테스트와 통과 / 실패 / 채점 불가의 3값 판정으로 뒷받침됩니다. 덕분에 단지 채점에 실패한 모델이 통과한 모델로 오인되는 일이 없습니다.'],
        ['#retraining .metric-card:nth-child(1) span', 'Post-shift residual · Model R2R', '전환 후 잔차 · Model R2R'],
        ['#retraining .metric-card:nth-child(2) span', 'Backtest RMSE · frozen to daily', '백테스트 RMSE · 고정→매일'],
        ['#retraining .metric-card:nth-child(3) span', 'Deploy-gate checks / unit tests', '배포 게이트 항목 / 단위 테스트'],
        ['#anomaly .part-label', 'Detection · Autoencoder', '탐지 · 오토인코더'],
        ['#anomaly > p:nth-of-type(2)',
          'Some defects stay inside every control limit, so statistical process rules never fire on them. A residual autoencoder catches these by learning the sensor signature of a healthy wafer and scoring how far each new wafer departs from it. On 0.5σ micro-defect injections it recalled 99.9% of faults where PCA reached only 38.9%, at a validation false-alarm rate near 1.5%.',
          '어떤 결함은 모든 관리 한계 안에 머물러 통계적 공정 규칙이 결코 반응하지 않습니다. 잔차 오토인코더는 정상 웨이퍼의 센서 시그니처를 학습하고 새 웨이퍼가 거기서 얼마나 벗어나는지 점수화해 이러한 결함을 잡아냅니다. 0.5σ 미세 결함 주입에서 PCA가 38.9%에 그친 반면 결함의 99.9%를 검출했으며, 검증 오경보율은 약 1.5%였습니다.'],
        ['#anomaly > p:nth-of-type(3)',
          'One design choice keeps it honest: the autoencoder sees only the 83 physical-sensor features, not the maintenance-regime signals the predictor uses. Those signals would quietly tell the model where anomalies live — flagging 100% of wafers but detecting only 31% of real faults in the ablation. The model stays tiny: 71&nbsp;KB and 3.18&nbsp;ms per wafer.',
          '한 가지 설계 선택이 이 모델을 정직하게 유지합니다. 오토인코더는 예측기가 쓰는 정비 구간 신호가 아니라 오직 83개의 물리 센서 특성만 봅니다. 그 신호를 함께 넣으면 모델에게 이상이 어디 있는지를 은근히 알려주는 셈이어서, 애블레이션에서 웨이퍼의 100%를 표시하지만 실제 결함은 31%만 검출했습니다. 모델은 71&nbsp;KB, 웨이퍼당 3.18&nbsp;ms로 매우 작게 유지됩니다.'],
        ['#results li:nth-child(1)',
          "Exposed evaluation leakage that made RMSE look artificially low (~33 vs an honest ~76), then rebuilt the benchmark around wafer-ID group splits and a time-axis walk-forward as the team's standard.",
          '평가 누수로 RMSE가 실제보다 낮게(정직한 약 76 대비 약 33) 보이던 문제를 드러내고, 웨이퍼 ID 그룹 분할과 시간축 워크포워드를 팀 표준 벤치마크로 재구축했습니다.'],
        ['#results li:nth-child(2)',
          'Built the real-time inference pipeline on Kafka — per-wafer buffering, lean-85 prediction, contract-ordered SHAP Top-3, and autoencoder anomaly / drift on a single prediction topic.',
          'Kafka 기반 실시간 추론 파이프라인을 구축했습니다 — 웨이퍼별 버퍼링, lean-85 예측, 계약 순서가 보장된 SHAP Top-3, 단일 예측 토픽에서의 오토인코더 이상 / 드리프트를 포함합니다.'],
        ['#results li:nth-child(3)',
          'Designed Model R2R, a bounded run-to-run bias correction that cut post-maintenance residual by ~83% between retrains without touching the equipment.',
          '장비를 건드리지 않고 재학습 사이의 정비 후 잔차를 약 83% 줄이는 제한된 run-to-run 편향 보정 Model R2R을 설계했습니다.'],
        ['#results li:nth-child(4)',
          'Shipped two retraining loops with champion-challenger gates: daily predictor retraining (backtest RMSE 334 → 55) and an autoencoder deploy gate of 19 checks and 103 unit tests.',
          '챔피언-챌린저 게이트를 갖춘 두 개의 재학습 루프를 구현했습니다. 매일 예측기 재학습(백테스트 RMSE 334 → 55)과 19개 항목·103개 단위 테스트의 오토인코더 배포 게이트입니다.'],
        ['#results li:nth-child(5)',
          'Reached 99.9% recall on 0.5σ micro-defects with an 83-feature autoencoder, versus 38.9% for PCA, at ~1.5% false alarms.',
          '83개 특성 오토인코더로 0.5σ 미세 결함에서 PCA의 38.9% 대비 99.9% 재현율을 오경보 약 1.5%로 달성했습니다.'],
        ['#learning h2', 'Deep Dives in Learning History', '학습 기록 상세 보기'],
        ['#learning > p',
          'The full experiment logs — every version, dead end, and honest number — live in Learning History, so this case study stays focused on the outcome.',
          '모든 실험 로그 — 모든 버전, 막다른 길, 정직한 수치 — 는 학습 기록에 정리되어 있어, 이 사례 연구는 결과에 집중합니다.'],
        ['#learning .learn-link:nth-child(1) strong', 'Predicting wafer defects without fooling myself', '데이터에 속지 않는 웨이퍼 결함 예측'],
        ['#learning .learn-link:nth-child(1) p',
          'Lot leakage behind a clean CV score, why richer features made it worse, and retraining a drifting process.',
          '깔끔한 CV 점수 뒤의 로트 누수, 더 많은 특성이 성능을 악화시킨 이유, 변화하는 공정의 재학습을 다룹니다.'],
        ['#learning .learn-link:nth-child(2) strong', 'An autoencoder for the defects SPC misses', 'SPC가 놓치는 결함을 잡는 오토인코더'],
        ['#learning .learn-link:nth-child(2) p',
          'A level-axis model over a sequence one, rejecting a passing-but-artifact model, and the 83-vs-85 feature-leakage experiment.',
          '시퀀스 모델 대신 레벨축 모델, 통과했지만 허상인 모델의 기각, 83 대 85 피처 누수 실험을 다룹니다.'],
        ['#links > p',
          'The full team repository is public; Part A lives under <code>src/agent_a_mlops</code>.',
          '전체 팀 저장소는 공개되어 있으며, 파트 A는 <code>src/agent_a_mlops</code>에 있습니다.'],
        ['#links .learn-link strong', 'AITCH on GitHub', 'GitHub의 AITCH'],
        ['#links .learn-link p',
          'Team monorepo — my work covers inference, Model R2R, the continuous-training loops, and the autoencoder.',
          '팀 모노레포 — 추론, Model R2R, 지속 학습 루프, 오토인코더를 담당했습니다.'],
        ['#links .learn-link .arrow', 'Open ->', '열기 →']
      ]
    },

    'project-02.html': {
      title: ['Youth Life Legal Consultation AI | Khloe Minji Kim', '청년 생활 법률 상담 AI | 김민지'],
      description: [
        'RAG-based multi-agent legal consultation project for youth-life questions.',
        '청년 생활 법률 질문을 위한 RAG 기반 멀티 에이전트 상담 프로젝트입니다.'
      ],
      content: [
        ['.project-hero .eyebrow', 'Project 02', '프로젝트 02'],
        ['.project-hero h1', 'Youth Life Legal Consultation AI', '청년 생활 법률 상담 AI'],
        ['.project-hero .lead',
          'A RAG-based multi-agent system for youth legal consultation, routing questions across labor, housing, consumer, and finance domains while grounding labor answers in Korean statute retrieval.',
          '노동·주거·소비자·금융 분야의 청년 법률 상담 질문을 분류하고, 국내 법령 검색을 근거로 노동 분야 답변을 생성하는 RAG 기반 멀티 에이전트 시스템입니다.'],
        ['.project-meta .meta-item:nth-child(1) strong', 'MLOps Engineer', 'MLOps 엔지니어'],
        ['.project-meta .meta-item:nth-child(2) strong', 'Jun 2026', '2026년 6월'],
        ['.project-meta .meta-item:nth-child(4) strong', '93% in-scope accuracy', '범위 내 정확도 93%'],
        ['#overview p',
          'This SK Planet T Academy data engineering project explored how a legal assistant can answer practical youth-life questions while staying grounded in known sources and declining unsupported requests.',
          'SK Planet T Academy 데이터 엔지니어링 프로젝트로, 법률 상담 AI가 알려진 근거를 바탕으로 실생활 청년 문제에 답하고 지원할 수 없는 요청은 명확히 거절하는 방법을 탐구했습니다.'],
        ['#problem p',
          'Legal questions are often colloquial, cross-domain, and sensitive. The system needed domain routing, statute retrieval, hallucination controls, and an honest-decline path for out-of-scope questions.',
          '법률 질문은 구어체로 표현되고 여러 분야에 걸치며 민감한 경우가 많습니다. 이에 분야 라우팅, 법령 검색, 환각 제어, 범위 밖 질문을 정직하게 거절하는 경로가 필요했습니다.'],
        ['#solution p',
          'Khloe built the Supervisor routing layer in LangGraph and owned the labor-domain RAG agent. The labor agent indexed 166 statute articles from the Korean Labor Standards Act and Minimum Wage Act, using hybrid BM25 plus embedding retrieval for colloquial-to-legal term expansion.',
          '김민지는 LangGraph의 Supervisor 라우팅 계층과 노동 분야 RAG 에이전트를 구축했습니다. 노동 에이전트는 근로기준법과 최저임금법의 166개 조항을 색인하고, BM25와 임베딩을 결합한 하이브리드 검색으로 구어체 표현을 법률 용어로 확장했습니다.'],
        ['#results li:nth-child(1)',
          'Reached a 77% verification pass rate across 121 live consultations.',
          '121건의 실제 상담에서 검증 통과율 77%를 달성했습니다.'],
        ['#results li:nth-child(2)',
          'Reached 93% in-scope response accuracy with grounding checks and forced disclaimers.',
          '근거 확인과 필수 고지 문구를 적용해 범위 내 응답 정확도 93%를 달성했습니다.'],
        ['#results li:nth-child(3)',
          'Prevented invented contact data through hardcoded lookup for phone numbers and institutional contacts.',
          '전화번호와 기관 연락처를 고정된 조회 데이터로 제공해 존재하지 않는 연락처가 생성되는 문제를 방지했습니다.'],
        ['#links p',
          'Project artifacts can be added here when the repository, report, or demo is ready to publish.',
          '저장소, 보고서 또는 데모의 공개 준비가 완료되면 프로젝트 산출물을 이곳에 추가할 예정입니다.']
      ]
    },

    'project-04.html': {
      title: ['OCR Ledger Automation | Khloe Minji Kim', 'OCR 장부 자동화 | 김민지'],
      description: [
        'OCR workflow automation case study for student council accounting.',
        '학생회 회계 업무를 위한 OCR 워크플로 자동화 프로젝트입니다.'
      ],
      content: [
        ['.project-hero .eyebrow', 'Project 04', '프로젝트 04'],
        ['.project-hero h1', 'OCR Ledger Automation', 'OCR 장부 자동화'],
        ['.project-hero .lead',
          'An accounting workflow automation that converted bank statement screenshots into structured ledger entries, reducing manual preparation and audit verification time for student council operations.',
          '은행 거래 내역 스크린샷을 구조화된 장부 항목으로 변환해 학생회 회계 자료 준비와 감사 검증 시간을 줄인 업무 자동화 프로젝트입니다.'],
        ['.project-meta .meta-item:nth-child(1) strong', 'Director of Accounting', '회계국장'],
        ['.project-meta .meta-item:nth-child(3) strong', 'OCR, workflow automation', 'OCR, 업무 자동화'],
        ['.project-meta .meta-item:nth-child(4) strong', '3 days to 1.5 days', '3일 → 1.5일'],
        ['#overview p',
          'As Director of Accounting for the University Student Council, Khloe managed budgets and administrative workflows across three years while moving manual records into more structured digital tracking.',
          '김민지는 대학교 학생회 회계국장으로 3년간 예산과 행정 업무를 관리하며 수기 기록을 구조화된 디지털 추적 방식으로 전환했습니다.'],
        ['#problem p',
          'Ledger preparation and audit verification depended on repetitive manual transcription from bank statement screenshots, creating long turnaround times and avoidable review overhead.',
          '장부 작성과 감사 검증이 은행 거래 내역 스크린샷의 반복적인 수기 입력에 의존해 처리 시간이 길어지고 불필요한 검토 부담이 발생했습니다.'],
        ['#solution p',
          'Khloe designed and deployed an OCR-based automation pipeline that parsed statement screenshots and converted them into structured ledger entries for downstream review.',
          '김민지는 거래 내역 스크린샷을 분석해 검토 가능한 구조화 장부 항목으로 변환하는 OCR 기반 자동화 파이프라인을 설계하고 적용했습니다.'],
        ['#results li:nth-child(1)', 'Reduced ledger preparation from 3 days to 1.5 days.', '장부 준비 시간을 3일에서 1.5일로 단축했습니다.'],
        ['#results li:nth-child(2)', 'Reduced audit verification from 5 days to 2 days.', '감사 검증 시간을 5일에서 2일로 단축했습니다.'],
        ['#results li:nth-child(3)',
          'Introduced a reusable digital workflow for recurring student council accounting work.',
          '반복되는 학생회 회계 업무에 재사용 가능한 디지털 워크플로를 도입했습니다.'],
        ['#links p',
          'Internal workflow details can be summarized further when shareable screenshots or diagrams are available.',
          '공유 가능한 스크린샷이나 다이어그램이 준비되면 내부 워크플로의 세부 내용을 추가할 예정입니다.']
      ]
    },

    'learning-history.html': {
      title: ['Khloe Minji Kim', '학습 기록 | 김민지'],
      description: [
        "Learning history and working logs for Khloe Kim's data analytics and pipeline portfolio.",
        '김민지의 데이터 분석 및 파이프라인 포트폴리오 학습 기록입니다.'
      ],
      content: [
        ['.page-head p',
          'A compact index of the systems, methods, and domains behind the portfolio.',
          '포트폴리오를 구성하는 시스템, 방법론, 도메인의 학습 기록을 한곳에 정리했습니다.'],
        ['#aitch-model h2', 'Predicting wafer defects without fooling myself', '데이터에 속지 않는 웨이퍼 결함 예측'],
        ['#aitch-model p',
          'The Part-A predictor of AITCH: how a spotless cross-validation score turned out to be lot leakage, why richer features made it worse, and why a drifting process had to be retrained rather than re-engineered.',
          'AITCH의 파트 A 예측기: 완벽해 보이던 교차 검증 점수가 어떻게 로트 누수로 드러났는지, 더 많은 특성이 왜 오히려 성능을 악화시켰는지, 변화하는 공정을 재설계가 아니라 재학습해야 했던 이유를 다룹니다.'],
        ['#aitch-ae h2', 'An autoencoder for the defects SPC misses', 'SPC가 놓치는 결함을 잡는 오토인코더'],
        ['#aitch-ae p',
          'The Part-A anomaly detector of AITCH: choosing a level-axis model over a sequence one, rejecting my own passing model as a numerical artifact, and the 83-vs-85 feature experiment that proved regime features leak the answer.',
          'AITCH의 파트 A 이상 탐지기: 시퀀스 모델 대신 레벨축 모델을 택하고, 통과한 제 모델을 수치적 허상으로 기각하며, 구간 특성이 정답을 흘린다는 것을 입증한 83 대 85 피처 실험을 다룹니다.'],
        ['#chicky-dl h2', 'Choosing a Korean emotion model', '한국어 감정 모델 선택 과정'],
        ['#chicky-dl p',
          'The deep learning part of Chicky: catching data leakage, rebuilding a group-aware split, comparing KLUE-RoBERTa, KoBERT, and KcELECTRA, and tuning focal loss to 93.54% macro-F1.',
          'Chicky의 딥러닝 과정: 데이터 누수를 발견하고 그룹 인식 분할을 재구축한 뒤 KLUE-RoBERTa, KoBERT, KcELECTRA를 비교하고 focal loss를 조정해 macro-F1 93.54%를 달성했습니다.'],
        ['#chicky-hw h2', 'Embedded communication on Raspberry Pi', 'Raspberry Pi 임베디드 통신'],
        ['#chicky-hw p',
          'The hardware part of Chicky: voice and video over WiFi, dual-mode local socket and remote polling to survive NAT and firewalls, and mDNS device discovery.',
          'Chicky의 하드웨어 과정: WiFi 기반 음성·영상 전송, NAT와 방화벽 환경을 고려한 로컬 소켓 및 원격 폴링 이중 모드, mDNS 기기 검색을 구현했습니다.']
      ]
    },

    'emotion-model-selection.html': {
      title: ['Choosing a Korean Emotion Model | Khloe Minji Kim', '한국어 감정 모델 선택 | 김민지'],
      description: [
        'Learning log: how I chose a Korean emotion classifier for Chicky, from data leakage and group-aware splits to focal loss and the KLUE-RoBERTa comparison.',
        '데이터 누수와 그룹 인식 분할부터 focal loss, KLUE-RoBERTa 비교까지 Chicky의 한국어 감정 분류 모델 선택 과정을 정리한 기록입니다.'
      ],
      content: [
        ['.crumb', '<a href="learning-history.html">Learning History</a> / Emotion Model Selection', '<a href="learning-history.html">학습 기록</a> / 감정 모델 선택'],
        ['.post-head h1', 'Choosing a Korean Emotion Model', '한국어 감정 모델 선택 과정'],
        ['.standfirst',
          "The deep learning study behind Chicky's emotion classifier: how a data-leakage bug changed the whole comparison, and why KLUE-RoBERTa with focal loss became the final model.",
          'Chicky 감정 분류기의 딥러닝 연구 기록입니다. 데이터 누수 오류가 모델 비교 결과를 어떻게 바꾸었는지, 그리고 focal loss를 적용한 KLUE-RoBERTa를 최종 모델로 선택한 이유를 설명합니다.'],
        ['article section:nth-child(1) h2', 'The task', '과제'],
        ['article section:nth-child(1) p',
          "Chicky needed to read a child's dialogue and label each sentence with one of seven emotions: <code>fear</code>, <code>surprise</code>, <code>angry</code>, <code>sadness</code>, <code>neutral</code>, <code>happiness</code>, and <code>disgust</code>. Those sentence labels are aggregated into a dominant emotion and a distribution, which feed the parenting report and a bedtime book theme. So the model had to be reliable per sentence, not just on average.",
          'Chicky는 아동의 대화를 읽고 각 문장을 <code>두려움</code>, <code>놀람</code>, <code>분노</code>, <code>슬픔</code>, <code>중립</code>, <code>행복</code>, <code>혐오</code>의 일곱 감정 중 하나로 분류해야 했습니다. 문장별 결과는 주요 감정과 분포로 집계되어 양육 리포트와 취침 전 도서 주제에 활용됩니다. 따라서 평균 성능뿐 아니라 각 문장에 대해 신뢰할 수 있어야 했습니다.'],
        ['article section:nth-child(2) h2', 'The bug that mattered more than the model', '모델보다 중요했던 데이터 오류'],
        ['article section:nth-child(2) > p:nth-of-type(1)',
          'My first runs looked great, and that was the warning sign. The dataset contained duplicate utterances, and a naive random split let the same sentence land in both train and test. The model was partly memorizing, so the reported score was inflated by leakage rather than earned by generalization.',
          '첫 실험 결과는 매우 좋았지만, 오히려 그것이 경고 신호였습니다. 데이터셋에 중복 발화가 포함되어 있었고 단순 무작위 분할 때문에 같은 문장이 학습과 테스트 양쪽에 들어갔습니다. 모델이 일부 문장을 암기하면서 일반화 성능이 아닌 데이터 누수로 점수가 부풀려졌습니다.'],
        ['article section:nth-child(2) .callout p',
          '<strong>Fix:</strong> I switched to a <strong>group-aware split</strong> where every copy of an utterance is forced onto one side only, then re-ran every experiment on that leak-free split. From that point, all numbers describe unseen sentences.',
          '<strong>해결:</strong> 동일 발화의 모든 사본이 반드시 한쪽 데이터에만 들어가도록 <strong>그룹 인식 분할</strong>로 변경하고, 누수가 제거된 분할에서 모든 실험을 다시 수행했습니다. 이후의 모든 수치는 학습에서 보지 못한 문장에 대한 결과입니다.'],
        ['article section:nth-child(2) > p:nth-of-type(2)',
          'This was the most useful lesson of the project: an honest split changed the ranking and the absolute scores more than any hyperparameter I touched. I now check for group leakage before trusting any first result.',
          '이 프로젝트에서 가장 중요한 교훈은 정직한 데이터 분할이 어떤 하이퍼파라미터보다 모델 순위와 절대 점수를 크게 바꾼다는 점이었습니다. 이제 첫 결과를 신뢰하기 전에 그룹 누수부터 확인합니다.'],
        ['article section:nth-child(3) h2', 'Comparing three Korean models', '한국어 모델 3종 비교'],
        ['article section:nth-child(3) > p:nth-of-type(1)',
          'On the leak-free split I benchmarked three pretrained Korean encoders under identical settings (<code>max_len=64</code>, <code>batch=64</code>, <code>lr=5e-5</code>, 5 epochs, fixed seed). KLUE-RoBERTa led on every metric.',
          '누수가 제거된 데이터에서 세 가지 한국어 사전 학습 인코더를 동일한 조건(<code>max_len=64</code>, <code>batch=64</code>, <code>lr=5e-5</code>, 5 epochs, 고정 seed)으로 비교했습니다. 모든 지표에서 KLUE-RoBERTa가 가장 높은 성능을 보였습니다.'],
        ['article section:nth-child(3) > p:nth-of-type(2)',
          'The initial plan (from the proposal) had been KoBERT, but the honest comparison made KLUE-RoBERTa the clear pick.',
          '제안 단계에서는 KoBERT를 사용할 계획이었지만, 공정한 비교 결과 KLUE-RoBERTa가 명확한 최종 선택이 되었습니다.'],
        ['article section:nth-child(4) h2', 'Handling class imbalance with focal loss', 'Focal loss로 클래스 불균형 처리'],
        ['article section:nth-child(4) > p:nth-of-type(1)',
          'The seven emotions were not evenly represented, so I trained with <strong>focal loss plus class weighting</strong> to stop the majority classes from dominating. I also ran a class-weighted cross-entropy variant to check the choice: KLUE-RoBERTa stayed first under both losses (<code>0.9354</code> focal vs <code>0.9340</code> class-weight), a gap small enough to be noise. I shipped the focal-loss model.',
          '일곱 감정의 데이터 비율이 균등하지 않아 다수 클래스가 학습을 지배하지 않도록 <strong>focal loss와 클래스 가중치</strong>를 함께 적용했습니다. 선택을 검증하기 위해 클래스 가중 교차 엔트로피도 실험했으며, 두 손실 함수 모두에서 KLUE-RoBERTa가 1위를 유지했습니다(<code>0.9354</code> focal 대 <code>0.9340</code> class-weight). 차이가 오차 범위에 가까웠고 최종적으로 focal-loss 모델을 적용했습니다.'],
        ['article section:nth-child(4) h3', 'Where it still struggles', '여전히 어려운 부분'],
        ['article section:nth-child(4) > p:nth-of-type(2)',
          'Per-emotion F1 was lowest on <code>angry</code> (0.905). Looking at errors, the ceiling comes from genuine semantic overlap between <code>angry</code>, <code>disgust</code>, and <code>sadness</code> in short child utterances, not from the model architecture.',
          '감정별 F1은 <code>분노</code>에서 가장 낮은 0.905였습니다. 오류를 분석한 결과, 모델 구조보다 짧은 아동 발화에서 <code>분노</code>, <code>혐오</code>, <code>슬픔</code>의 의미가 실제로 겹치는 점이 성능의 한계로 나타났습니다.'],
        ['article section:nth-child(5) h2', 'Serving', '서비스 적용'],
        ['article section:nth-child(5) p',
          'The final classifier is served behind a Flask app the backend calls: <code>/predict</code> returns the emotion scores for a batch of sentences, and <code>/report</code> adds the dominant emotion, distribution, and book theme used by the app. The trained weights ship with the service so it can serve immediately.',
          '최종 분류기는 백엔드가 호출하는 Flask 앱으로 제공합니다. <code>/predict</code>는 문장 묶음의 감정 점수를 반환하고, <code>/report</code>는 앱에서 사용하는 주요 감정, 분포, 도서 주제를 추가합니다. 학습된 가중치를 서비스와 함께 배포해 즉시 추론할 수 있습니다.'],
        ['article section:nth-child(6) h2', 'What I took away', '배운 점'],
        ['article section:nth-child(6) li:nth-child(1)',
          'Validate the split before celebrating a score. Group-aware splitting is non-negotiable when a dataset has duplicates.',
          '점수를 평가하기 전에 데이터 분할부터 검증해야 합니다. 중복 데이터가 있다면 그룹 인식 분할은 필수입니다.'],
        ['article section:nth-child(6) li:nth-child(2)',
          'A fair, identical-settings comparison is worth more than tuning one favored model.',
          '동일한 조건에서 공정하게 비교하는 것이 선호 모델 하나를 튜닝하는 것보다 중요합니다.'],
        ['article section:nth-child(6) li:nth-child(3)',
          'Report per-class metrics; an average can hide the class that actually matters.',
          '클래스별 지표를 보고해야 합니다. 평균은 실제로 중요한 클래스의 문제를 가릴 수 있습니다.'],
        ['.backlink', '&lt;- Back to the Chicky case study', '← Chicky 사례 연구로 돌아가기']
      ]
    },

    'raspberry-pi-embedded.html': {
      title: ['Embedded Communication on Raspberry Pi | Khloe Minji Kim', 'Raspberry Pi 임베디드 통신 | 김민지'],
      description: [
        "Learning log: building Chicky's on-device Raspberry Pi software, with dual-mode local socket and remote polling communication, mDNS discovery, and Picamera2 MJPEG streaming.",
        '로컬 소켓·원격 폴링 이중 통신, mDNS 검색, Picamera2 MJPEG 스트리밍을 적용한 Chicky의 Raspberry Pi 소프트웨어 개발 기록입니다.'
      ],
      content: [
        ['.crumb', '<a href="learning-history.html">Learning History</a> / Raspberry Pi Embedded Communication', '<a href="learning-history.html">학습 기록</a> / Raspberry Pi 임베디드 통신'],
        ['.post-head h1', 'Embedded Communication on Raspberry Pi', 'Raspberry Pi 임베디드 통신'],
        ['.standfirst',
          'The hardware study behind Chicky: how the doll sees, hears, and speaks over WiFi, and how a dual communication mode kept it working both on a home network and behind a firewall.',
          'Chicky의 하드웨어 학습 기록입니다. 인형이 WiFi로 보고 듣고 말하는 방식과, 이중 통신 모드로 가정 네트워크와 방화벽 뒤에서도 작동하도록 만든 과정을 설명합니다.'],
        ['article section:nth-child(1) h2', 'The device', '기기 구성'],
        ['article section:nth-child(1) p',
          "Chicky runs on a Raspberry Pi inside the doll, with a camera module, a USB microphone, and a small speaker. My job was the on-device software: capture the child's voice, generate and play back a reply, and stream live video to the parent's app. The constraint that shaped everything was that the doll had to be a standalone toy a child can carry, so every channel runs over <strong>WiFi with no wired connection</strong>.",
          'Chicky는 인형 내부의 Raspberry Pi, 카메라 모듈, USB 마이크, 소형 스피커로 작동합니다. 저는 아동의 음성을 수집하고 답변을 생성·재생하며 부모 앱으로 실시간 영상을 전송하는 온디바이스 소프트웨어를 담당했습니다. 아동이 들고 다닐 수 있는 독립형 장난감이어야 했기 때문에 모든 채널을 <strong>유선 연결 없는 WiFi</strong>로 구성했습니다.'],
        ['article section:nth-child(2) h2', 'Voice pipeline', '음성 파이프라인'],
        ['article section:nth-child(2) p',
          'A wake-word (<code>chi</code>) starts a conversation and plays a short greeting. From there the doll captures speech, sends it to <strong>Azure Speech-to-Text</strong>, generates a reply with the <strong>OpenAI GPT-3.5 Turbo</strong> API, strips emoji and other non-spoken characters, and posts the exchange to the backend, which returns synthesized audio for the doll to play. I serialized playback so overlapping audio jobs never talk over each other.',
          '호출어(<code>chi</code>)가 대화를 시작하고 짧은 인사말을 재생합니다. 이후 인형이 음성을 수집해 <strong>Azure Speech-to-Text</strong>로 전송하고, <strong>OpenAI GPT-3.5 Turbo</strong> API로 답변을 생성한 뒤 이모지와 발음되지 않는 문자를 제거합니다. 대화 내용을 백엔드에 보내면 인형이 재생할 합성 음성이 반환됩니다. 여러 오디오 작업이 겹쳐 재생되지 않도록 재생 경로를 직렬화했습니다.'],
        ['article section:nth-child(3) h2', 'Live video', '실시간 영상'],
        ['article section:nth-child(3) p',
          'Monitoring uses <strong>Picamera2</strong> to serve an <strong>MJPEG HTTP</strong> stream. The parent app turns it on and off through a WebSocket command channel, so the camera only runs when a parent is actually watching rather than streaming continuously.',
          '모니터링은 <strong>Picamera2</strong>로 <strong>MJPEG HTTP</strong> 스트림을 제공합니다. 부모 앱이 WebSocket 명령 채널로 카메라를 켜고 끌 수 있어 계속 영상을 전송하지 않고 부모가 실제로 시청할 때만 카메라가 작동합니다.'],
        ['article section:nth-child(4) h2', 'The interesting part: two communication modes', '핵심 설계: 두 가지 통신 모드'],
        ['article section:nth-child(4) > p:nth-of-type(1)',
          'A doll on a real home network is not always reachable from the outside. Home routers use NAT and firewalls that block inbound connections, so a design that assumes the app can always dial the doll directly will fail in many houses. I built two modes so the same device works either way.',
          '실제 가정 네트워크의 인형은 외부에서 항상 직접 접근할 수 없습니다. 가정용 라우터의 NAT와 방화벽이 인바운드 연결을 차단하므로 앱이 언제나 인형에 직접 연결할 수 있다고 가정한 설계는 많은 환경에서 실패합니다. 동일한 기기가 두 상황 모두에서 작동하도록 두 가지 모드를 구축했습니다.'],
        ['article section:nth-child(4) .arch-block',
          `Local-socket mode
  doll opens TCP + WebSocket + HTTP servers
  app / backend connect directly on the same WiFi
  mDNS advertises the doll -> app finds it with no hard-coded IP

Remote-polling mode  (CHICKY_COMMUNICATION_MODE=remote)
  doll polls the backend API on a schedule
  doll makes the outbound request -> no inbound port needed
  works behind NAT / firewall`,
          `로컬 소켓 모드
  인형이 TCP + WebSocket + HTTP 서버 실행
  앱 / 백엔드가 동일한 WiFi에서 직접 연결
  mDNS로 인형을 알림 → 고정 IP 없이 앱이 자동 검색

원격 폴링 모드  (CHICKY_COMMUNICATION_MODE=remote)
  인형이 일정에 따라 백엔드 API 폴링
  인형이 아웃바운드 요청 → 인바운드 포트 불필요
  NAT / 방화벽 환경에서도 작동`],
        ['article section:nth-child(4) h3:nth-of-type(1)', 'Local-socket mode', '로컬 소켓 모드'],
        ['article section:nth-child(4) > p:nth-of-type(2)',
          'On the same network the doll hosts its own TCP server for audio, a WebSocket server for camera control, and an HTTP endpoint for the stream. To avoid hard-coding an IP that changes every time the doll joins a network, I added <strong>mDNS (Zeroconf) advertising</strong> so the app discovers the doll by service name automatically.',
          '동일한 네트워크에서 인형은 오디오용 TCP 서버, 카메라 제어용 WebSocket 서버, 스트림용 HTTP 엔드포인트를 직접 실행합니다. 네트워크에 연결할 때마다 바뀌는 IP를 고정하지 않도록 <strong>mDNS(Zeroconf) 광고</strong>를 추가해 앱이 서비스 이름으로 인형을 자동 검색하도록 했습니다.'],
        ['article section:nth-child(4) h3:nth-of-type(2)', 'Remote-polling mode', '원격 폴링 모드'],
        ['article section:nth-child(4) > p:nth-of-type(3)',
          'When direct access is blocked, the doll flips to polling the backend API itself. Because the doll always initiates the request, no inbound port has to be opened on the home router. Audio jobs are downloaded, played, and reported back as status, and camera frames are captured and uploaded on the same outbound path.',
          '직접 접근이 차단되면 인형이 백엔드 API를 직접 폴링합니다. 인형이 항상 요청을 시작하므로 가정용 라우터에서 인바운드 포트를 열 필요가 없습니다. 오디오 작업을 내려받아 재생하고 상태를 보고하며, 카메라 프레임도 동일한 아웃바운드 경로로 캡처·업로드합니다.'],
        ['article section:nth-child(4) .callout p',
          '<strong>Lesson:</strong> the presentation diagram drew communication as a single arrow. The real constraint was reachability, and designing for the outbound-only case is what made the doll actually usable in homes, not just on my desk.',
          '<strong>교훈:</strong> 발표 다이어그램에서는 통신을 하나의 화살표로 표현했지만 실제 제약은 네트워크 접근성이었습니다. 아웃바운드 전용 상황까지 설계했기 때문에 책상 위 데모를 넘어 실제 가정에서도 인형을 사용할 수 있었습니다.'],
        ['article section:nth-child(5) h2', 'Structuring the code', '코드 구조화'],
        ['article section:nth-child(5) p',
          'Every module reads one shared <code>config.py</code> for ports, paths, and environment variables, which kept local and remote modes from drifting apart. A single entry point can run local and remote in parallel (auto mode), so the doll receives commands no matter where the request comes from, and a playback serializer prevents the two paths from double-playing the same audio.',
          '모든 모듈이 포트, 경로, 환경 변수를 하나의 공통 <code>config.py</code>에서 읽도록 해 로컬·원격 모드의 설정이 어긋나지 않게 했습니다. 단일 진입점에서 로컬과 원격을 병렬로 실행하는 자동 모드를 제공해 요청 경로와 관계없이 명령을 받을 수 있으며, 재생 직렬화로 두 경로가 같은 오디오를 중복 재생하지 않도록 했습니다.'],
        ['article section:nth-child(6) h2', 'What I took away', '배운 점'],
        ['article section:nth-child(6) li:nth-child(1)',
          'Network reachability is a design input, not an afterthought; NAT and firewalls decide which architectures are even possible.',
          '네트워크 접근성은 사후 고려 사항이 아닌 설계 입력값입니다. NAT와 방화벽이 가능한 아키텍처를 결정합니다.'],
        ['article section:nth-child(6) li:nth-child(2)',
          'Outbound polling is a simple, robust fallback when you cannot open inbound ports.',
          '인바운드 포트를 열 수 없을 때 아웃바운드 폴링은 단순하고 안정적인 대안입니다.'],
        ['article section:nth-child(6) li:nth-child(3)',
          'Service discovery (mDNS) removes a whole class of "it works on my network" bugs.',
          '서비스 검색(mDNS)은 특정 네트워크에서만 작동하는 유형의 문제를 제거합니다.'],
        ['article section:nth-child(6) li:nth-child(4)',
          'One shared config and a serialized playback path prevent subtle races when two modes run at once.',
          '공통 설정과 직렬화된 재생 경로는 두 모드가 동시에 작동할 때 발생하는 미묘한 경쟁 상태를 방지합니다.'],
        ['.backlink', '&lt;- Back to the Chicky case study', '← Chicky 사례 연구로 돌아가기']
      ]
    }
  };

  pages['project-03.html'] = {
    title: ['Chicky Emotion-Aware AI Doll | Khloe Minji Kim', 'Chicky 감정 인식 AI 인형 | 김민지'],
    description: [
      'Capstone case study for Chicky, an emotion-aware AI companion doll: a single project spanning Raspberry Pi embedded hardware and a Korean-NLP deep learning emotion classifier.',
      'Raspberry Pi 임베디드 하드웨어와 한국어 NLP 감정 분류 모델을 결합한 감정 인식 AI 반려 인형 Chicky의 캡스톤 프로젝트입니다.'
    ],
    content: [
      ['.project-hero .eyebrow', 'Project 03', '프로젝트 03'],
      ['.project-hero h1', 'Chicky, Emotion-Aware AI Doll', 'Chicky, 감정 인식 AI 인형'],
      ['.project-hero .lead',
        "A single capstone project in which I owned two very different technical parts end to end: the Raspberry Pi embedded hardware that lets the doll see, hear, and speak, and the Korean-NLP deep learning model that reads a child's emotions from dialogue. This page keeps them under one story because they were built to work as one device.",
        '하나의 캡스톤 프로젝트에서 서로 다른 두 기술 영역을 처음부터 끝까지 담당했습니다. 인형이 보고 듣고 말할 수 있게 하는 Raspberry Pi 임베디드 하드웨어와, 대화에서 아동의 감정을 읽는 한국어 NLP 딥러닝 모델입니다. 두 영역이 하나의 기기로 작동하도록 만들어졌기에 이 페이지에서 하나의 이야기로 소개합니다.'],
      ['.project-meta .meta-item:nth-child(1) strong', 'Hardware &amp; Deep Learning', '하드웨어 및 딥러닝'],
      ['.project-meta .meta-item:nth-child(2) strong', '4 people, capstone', '4인 캡스톤'],
      ['#overview > p:nth-of-type(1)',
        "Chicky is an AI companion doll for children of dual-income families. It talks with the child, streams live video to a parent's app, and analyzes the child's emotions from the conversation to return a parenting report and an emotion-matched bedtime audiobook. It was a four-person capstone project; the application and the communication server were owned by teammates.",
        'Chicky는 맞벌이 가정 아동을 위한 AI 반려 인형입니다. 아동과 대화하고 부모 앱으로 실시간 영상을 전송하며, 대화에서 아동의 감정을 분석해 양육 리포트와 감정에 맞는 취침 전 오디오북을 제공합니다. 4인 캡스톤 프로젝트로 앱과 통신 서버는 팀원이 담당했습니다.'],
      ['#overview > p:nth-of-type(2)',
        'My scope was the two parts furthest apart on the stack: the <strong>hardware</strong> running inside the doll on a Raspberry Pi, and the <strong>deep learning</strong> emotion classifier served to the backend. The sections below are split accordingly, but the architecture diagram shows why they belong to one system.',
        '저는 기술 스택에서 가장 멀리 떨어진 두 영역, 즉 Raspberry Pi에서 실행되는 인형 내부 <strong>하드웨어</strong>와 백엔드에 제공되는 <strong>딥러닝</strong> 감정 분류기를 담당했습니다. 아래에서는 두 영역을 나누어 설명하지만 아키텍처 다이어그램을 통해 하나의 시스템으로 연결되는 방식을 확인할 수 있습니다.'],
      ['#architecture h2', 'Integrated Architecture', '통합 아키텍처'],
      ['#architecture > p',
        'Both of my parts plug into the same flow: the doll captures speech and video, the backend brokers data, and the emotion service turns dialogue into a report. Everything the doll does runs over WiFi, so it works as a standalone device a child can carry.',
        '제가 담당한 두 영역은 하나의 흐름에 연결됩니다. 인형이 음성과 영상을 수집하고 백엔드가 데이터를 중계하며 감정 서비스가 대화를 리포트로 변환합니다. 모든 기능이 WiFi로 작동해 아동이 들고 다닐 수 있는 독립형 기기로 사용할 수 있습니다.'],
      ['#architecture .arch-block',
        `[Parent App]  React Native / Expo
    |  REST (JSON)
    v
[Back]  Spring Boot 3.1 (Java 17) ---- MySQL
    |
    +-- TCP (audio) ==(WiFi)==> [HW] Raspberry Pi        &lt;-- my part
    |                            Picamera2 -> MJPEG stream
    |                            Azure STT, OpenAI GPT-3.5
    |
    +-- HTTP /predict, /report --> [DL] Flask serving    &lt;-- my part
                                    KLUE-RoBERTa (7 emotions)
                                    -> dominant emotion -> book_theme`,
        `[부모 앱]  React Native / Expo
    |  REST (JSON)
    v
[백엔드]  Spring Boot 3.1 (Java 17) ---- MySQL
    |
    +-- TCP (오디오) ==(WiFi)==> [HW] Raspberry Pi       &lt;-- 담당
    |                              Picamera2 -> MJPEG 스트림
    |                              Azure STT, OpenAI GPT-3.5
    |
    +-- HTTP /predict, /report --> [DL] Flask 서비스     &lt;-- 담당
                                     KLUE-RoBERTa (7개 감정)
                                     -> 주요 감정 -> book_theme`],
      ['#hardware .part-label', 'Part 1 · Hardware', '파트 1 · 하드웨어'],
      ['#hardware h2', 'Raspberry Pi Embedded Device', 'Raspberry Pi 임베디드 기기'],
      ['#hardware > p:nth-of-type(2)',
        "The doll runs on a Raspberry Pi with a camera module, USB microphone, and speaker. I built the on-device software that handles the child's voice, live video, and the doll's spoken replies, all over WiFi with no wired connection.",
        '인형은 카메라 모듈, USB 마이크, 스피커가 연결된 Raspberry Pi로 작동합니다. 아동의 음성, 실시간 영상, 인형의 음성 답변을 유선 연결 없이 모두 WiFi로 처리하는 온디바이스 소프트웨어를 구축했습니다.'],
      ['#hardware > p:nth-of-type(3)',
        'Speech capture uses Azure Speech-to-Text, replies are generated with the OpenAI GPT-3.5 Turbo API, and a wake-word ("chi") starts each conversation. Live monitoring streams the camera over MJPEG HTTP, toggled by the parent app through a WebSocket command channel.',
        '음성 인식에는 Azure Speech-to-Text를 사용하고 OpenAI GPT-3.5 Turbo API로 답변을 생성하며, 호출어("chi")로 대화를 시작합니다. 실시간 모니터링은 MJPEG HTTP로 카메라 영상을 전송하고 부모 앱이 WebSocket 명령 채널로 켜고 끕니다.'],
      ['#hardware > p:nth-of-type(4)',
        'The part I am most proud of is the <strong>dual communication mode</strong>. In local-socket mode the doll opens TCP and WebSocket servers that the app and backend reach directly on the same network, with mDNS advertising so the app discovers the doll without a hard-coded IP. In remote-polling mode the doll instead polls the backend API on a schedule, so it keeps working behind NAT and firewalls where inbound connections are blocked.',
        '가장 공들인 부분은 <strong>이중 통신 모드</strong>입니다. 로컬 소켓 모드에서는 인형이 TCP와 WebSocket 서버를 열어 같은 네트워크의 앱과 백엔드가 직접 접근하며, mDNS 광고를 통해 고정 IP 없이 인형을 검색합니다. 원격 폴링 모드에서는 인형이 일정에 따라 백엔드 API를 직접 폴링하므로 인바운드 연결이 차단된 NAT와 방화벽 환경에서도 작동합니다.'],
      ['#deep-learning .part-label', 'Part 2 · Deep Learning', '파트 2 · 딥러닝'],
      ['#deep-learning h2', 'Korean Emotion Classifier', '한국어 감정 분류기'],
      ['#deep-learning > p:nth-of-type(2)',
        "The emotion model reads the child's dialogue and classifies each sentence into one of seven emotions: fear, surprise, angry, sadness, neutral, happiness, and disgust. Sentence-level predictions are aggregated into a dominant emotion and a distribution, which drive the parenting report and a bedtime book theme.",
        '감정 모델은 아동의 대화를 읽고 각 문장을 두려움, 놀람, 분노, 슬픔, 중립, 행복, 혐오의 일곱 감정 중 하나로 분류합니다. 문장별 예측은 주요 감정과 분포로 집계되어 양육 리포트와 취침 전 도서 주제에 활용됩니다.'],
      ['#deep-learning > p:nth-of-type(3)',
        'I benchmarked three Korean language models under identical settings and chose KLUE-RoBERTa. The most important finding was a data-quality problem, not a modeling trick: the naive split leaked duplicate utterances across train and test, inflating scores. I rebuilt the split to be group-aware so no utterance appears on both sides, then re-ran every comparison on that leak-free split. Focal loss with class weighting handled the imbalance, and the final model reached a macro-F1 of 0.9354.',
        '세 가지 한국어 언어 모델을 동일한 조건으로 비교해 KLUE-RoBERTa를 선택했습니다. 가장 중요한 발견은 모델링 기법이 아니라 데이터 품질 문제였습니다. 단순 분할에서 중복 발화가 학습과 테스트 양쪽에 유입되어 점수가 부풀려졌습니다. 동일 발화가 양쪽에 나타나지 않도록 그룹 인식 분할로 재구축하고 누수가 제거된 데이터에서 모든 비교를 다시 수행했습니다. 클래스 가중치를 적용한 focal loss로 불균형을 처리해 최종 macro-F1 0.9354를 달성했습니다.'],
      ['#deep-learning .metric-card:nth-child(1) span', 'Final macro-F1', '최종 macro-F1'],
      ['#deep-learning .metric-card:nth-child(2) span', 'Emotion classes', '감정 클래스'],
      ['#deep-learning .metric-card:nth-child(3) span', 'Leaked utterances', '누수 발화 수'],
      ['#deep-learning .data-table th:nth-child(1)', 'Model (leak-free split)', '모델(누수 제거 분할)'],
      ['#deep-learning > p:nth-of-type(4)',
        'The classifier is served behind a Flask service exposing <code>/predict</code> for the backend contract and <code>/report</code> for the app-facing report with dominant emotion and book theme.',
        '분류기는 Flask 서비스로 제공되며 백엔드 연동용 <code>/predict</code>와 주요 감정 및 도서 주제를 포함한 앱 리포트용 <code>/report</code>를 노출합니다.'],
      ['#results li:nth-child(1)',
        'Delivered a working doll that streams live video and holds spoken conversations entirely over WiFi, in both local-socket and remote-polling modes.',
        '로컬 소켓과 원격 폴링 모드 모두에서 WiFi만으로 실시간 영상을 전송하고 음성 대화를 수행하는 인형을 구현했습니다.'],
      ['#results li:nth-child(2)',
        'Caught and removed duplicate-utterance leakage in the emotion dataset, then re-validated all model comparisons on a group-aware split.',
        '감정 데이터셋의 중복 발화 누수를 발견해 제거하고, 그룹 인식 분할에서 모든 모델 비교를 다시 검증했습니다.'],
      ['#results li:nth-child(3)',
        'Selected KLUE-RoBERTa as the final leak-free classifier at 93.54% macro-F1 across seven emotion classes.',
        '일곱 감정 클래스에서 macro-F1 93.54%를 기록한 KLUE-RoBERTa를 최종 누수 제거 분류기로 선택했습니다.'],
      ['#results li:nth-child(4)',
        'Connected both parts to the shared backend through documented API contracts, so hardware and model integrate as one device.',
        '문서화된 API 계약으로 두 영역을 공통 백엔드에 연결해 하드웨어와 모델이 하나의 기기로 통합되도록 했습니다.'],
      ['#learning h2', 'Deep Dives in Learning History', '학습 기록 상세 보기'],
      ['#learning > p',
        'The step-by-step study notes and troubleshooting for each technology live in Learning History, so this case study stays focused on the product.',
        '이 사례 연구는 제품에 집중하고, 각 기술의 단계별 학습 내용과 문제 해결 기록은 학습 기록 페이지에 정리했습니다.'],
      ['#learning .learn-link:nth-child(1) strong', 'Choosing a Korean emotion model', '한국어 감정 모델 선택 과정'],
      ['#learning .learn-link:nth-child(1) p',
        'Data leakage, group-aware splits, focal loss, and the KLUE-RoBERTa vs KoBERT vs KcELECTRA comparison.',
        '데이터 누수, 그룹 인식 분할, focal loss, KLUE-RoBERTa·KoBERT·KcELECTRA 비교 기록입니다.'],
      ['#learning .learn-link:nth-child(2) strong', 'Embedded communication on Raspberry Pi', 'Raspberry Pi 임베디드 통신'],
      ['#learning .learn-link:nth-child(2) p',
        'Dual-mode local socket and remote polling, mDNS discovery, and Picamera2 MJPEG streaming.',
        '로컬 소켓·원격 폴링 이중 모드, mDNS 검색, Picamera2 MJPEG 스트리밍 기록입니다.']
    ]
  };

  pages['wafer-defect-modeling.html'] = {
    title: ['Predicting Wafer Defects Without Fooling Myself | Khloe Minji Kim', '데이터에 속지 않는 웨이퍼 결함 예측 | 김민지'],
    description: [
      'Learning log: building the AITCH wafer-defect predictor (lean-85) — how a spotless cross-validation score turned out to be lot leakage, why richer features made it worse, and why retraining beat feature engineering.',
      '완벽해 보이던 교차 검증 점수가 로트 누수였음을 밝히고, 더 많은 특성이 오히려 성능을 악화시킨 이유와 특성 공학보다 재학습이 나았던 이유를 다룬 AITCH 웨이퍼 결함 예측기(lean-85) 개발 기록입니다.'
    ],
    content: [
      ['.crumb', '<a href="learning-history.html">Learning History</a> / Wafer Defect Modeling', '<a href="learning-history.html">학습 기록</a> / 웨이퍼 결함 모델링'],
      ['.post-head h1', 'Predicting Wafer Defects Without Fooling Myself', '데이터에 속지 않는 웨이퍼 결함 예측'],
      ['.standfirst',
        "The modeling study behind AITCH's Part A predictor: how a spotless-looking cross-validation score turned out to be lot leakage, why richer features made it worse, and why the honest answer to a drifting process was retraining, not feature engineering.",
        'AITCH 파트 A 예측기의 모델링 연구 기록입니다. 완벽해 보이던 교차 검증 점수가 어떻게 로트 누수로 드러났는지, 더 많은 특성이 왜 오히려 성능을 악화시켰는지, 그리고 변화하는 공정에 대한 정직한 답이 특성 공학이 아니라 재학습이었던 이유를 설명합니다.'],
      ['article section:nth-child(1) h2', 'The task', '과제'],
      ['article section:nth-child(1) > p:nth-of-type(1)',
        'Every wafer leaving an Etch step carries a defect count — <code>C65</code>, the number of failing bits. My job was to predict it from the FDC sensor trace: temperature, pressure, gas flow, RF power, and dozens more, logged as the wafer moves through each step. One wafer is about ten sensor rows that collapse to a single number, so it is one prediction per wafer, scored on RMSE.',
        '식각 스텝을 거친 모든 웨이퍼에는 결함 수 <code>C65</code>, 즉 불량 비트 수가 기록됩니다. 제 과제는 이를 FDC 센서 트레이스 — 온도, 압력, 가스 유량, RF 전력 등 수십 개 — 로부터 예측하는 것이었습니다. 이 값들은 웨이퍼가 각 스텝을 지날 때 기록됩니다. 웨이퍼 한 장은 약 열 개의 센서 행이 하나의 숫자로 집계되므로, 웨이퍼당 한 번 예측하고 RMSE로 평가합니다.'],
      ['article section:nth-child(1) > p:nth-of-type(2)',
        'The dataset looked easy — <strong>11,939 wafers</strong>, 123K rows, no missing values, train and test drawn from the same distribution. The strongest single signal was temperature (<code>C17</code>, correlation &minus;0.80). What made it genuinely hard was hidden underneath: the process drifts through preventive-maintenance cycles, and some sensor-to-defect relationships actually flip sign over time. A model that looks great today can quietly rot.',
        '데이터셋은 쉬워 보였습니다 — <strong>웨이퍼 11,939장</strong>, 12.3만 행, 결측치 없음, 학습과 테스트가 동일한 분포에서 추출되었습니다. 가장 강한 단일 신호는 온도(<code>C17</code>, 상관계수 &minus;0.80)였습니다. 진짜 어려움은 그 아래 숨어 있었습니다. 공정은 예방 정비 주기를 따라 변화하고, 일부 센서-결함 관계는 시간이 지나면서 부호가 뒤집힙니다. 오늘 훌륭해 보이는 모델이 조용히 썩을 수 있습니다.'],
      ['article section:nth-child(2) h2', 'A perfect score that was a lie', '거짓이었던 완벽한 점수'],
      ['article section:nth-child(2) > p:nth-of-type(1)',
        "My cross-validation split by wafer, and I had already excluded the lot ID from the features. That looks correct. It was not. Nearly every validation wafer had a sibling from the same lot sitting in the training fold — and a lot is a single batch processed within about twenty minutes, whose wafers share almost the same defect count. Through ordinary sensor similarity, the model was reading a wafer's answer off its lot-mates. Textbook indirect leakage, hiding behind a split that passed a glance.",
        '제 교차 검증은 웨이퍼 단위로 분할했고, 특성에서 로트 ID는 이미 제외한 상태였습니다. 올바라 보입니다. 하지만 아니었습니다. 거의 모든 검증 웨이퍼가 같은 로트의 형제 웨이퍼를 학습 폴드에 두고 있었고, 로트는 약 20분 안에 처리되는 하나의 배치라 그 안의 웨이퍼들은 결함 수가 거의 같습니다. 평범한 센서 유사도를 통해 모델은 같은 로트 웨이퍼로부터 정답을 읽고 있었습니다. 얼핏 보면 통과하는 분할 뒤에 숨은 전형적인 간접 누수였습니다.'],
      ['article section:nth-child(2) .callout p',
        '<strong>The test:</strong> hold the features and the model fixed, and change only the cross-validation grouping — from wafer to <strong>lot</strong>. Nothing about the model changed, only the honesty of the split. RMSE moved from <strong>62.6 to 70.4</strong>. On a richer 192-feature model the gap was worse, 50.0 to 72.1. On the version I had loaded with lot-aggregate features to chase the leaderboard, it blew from <strong>44.6 to 122.9</strong>.',
        '<strong>실험:</strong> 특성과 모델은 고정한 채 교차 검증 그룹 기준만 웨이퍼에서 <strong>로트</strong>로 바꿉니다. 모델은 전혀 바뀌지 않았고 분할의 정직성만 달라졌습니다. RMSE는 <strong>62.6에서 70.4</strong>로 이동했습니다. 특성이 더 많은 192개 특성 모델에서는 격차가 더 커져 50.0에서 72.1이 되었고, 리더보드를 노리고 로트 집계 특성을 넣은 버전에서는 <strong>44.6에서 122.9</strong>로 폭발했습니다.'],
      ['article section:nth-child(2) > p:nth-of-type(2)',
        'The lot-aggregate features were the smoking gun. A genuinely useful feature cannot flip sign across splits; a leak can. Those features <em>helped</em> the random split by 33 points and <em>hurt</em> the honest one by 43. That is not signal — it is a fingerprint. And the ranking inverted: the model that won on the leaky split was the worst on the honest one, while the model that looked worst turned out best. Had I chosen by the wrong axis, I would have shipped the wrong model with full confidence.',
        '로트 집계 특성이 결정적 증거였습니다. 진짜 유용한 특성은 분할에 따라 부호가 뒤집힐 수 없지만 누수는 그럴 수 있습니다. 그 특성들은 무작위 분할을 33점 <em>개선</em>했고 정직한 분할을 43점 <em>악화</em>시켰습니다. 이는 신호가 아니라 지문입니다. 그리고 순위가 뒤집혔습니다. 누수 분할에서 이긴 모델이 정직한 분할에서는 최악이었고, 최악으로 보이던 모델이 최고였습니다. 잘못된 축으로 골랐다면 완전한 확신을 갖고 잘못된 모델을 배포했을 것입니다.'],
      ['article section:nth-child(3) h2', 'Why more features made it worse', '더 많은 특성이 오히려 나빴던 이유'],
      ['article section:nth-child(3) > p:nth-of-type(1)',
        "Once I lined the versions up on both axes, the pattern was impossible to miss: the optimism bias grew with feature richness. The fancier the feature set, the more of the model's capacity went into memorizing which lot a wafer came from, and the less of the leaky-split gain survived contact with a genuinely new lot.",
        '버전들을 두 축에 나란히 놓자 패턴이 분명해졌습니다. 낙관 편향이 특성 풍부함에 비례해 커졌습니다. 특성 세트가 화려할수록 모델 용량이 웨이퍼가 어느 로트에서 왔는지 암기하는 데 더 많이 쓰였고, 누수 분할에서 얻은 이득은 진짜 새로운 로트를 만나면 그만큼 덜 남았습니다.'],
      ['article section:nth-child(3) .data-table th:nth-child(2)', 'Wafer-CV (leaky)', '웨이퍼 CV (누수)'],
      ['article section:nth-child(3) .data-table th:nth-child(3)', 'Lot-CV (honest)', '로트 CV (정직)'],
      ['article section:nth-child(3) .data-table th:nth-child(4)', 'Optimism gap', '낙관 격차'],
      ['article section:nth-child(3) .data-table tbody tr:nth-child(1) td:nth-child(1)', '<strong>v5 (baseline)</strong>', '<strong>v5 (베이스라인)</strong>'],
      ['article section:nth-child(3) .data-table tbody tr:nth-child(2) td:nth-child(1)', 'v12 (192 features)', 'v12 (특성 192개)'],
      ['article section:nth-child(3) .data-table tbody tr:nth-child(3) td:nth-child(1)', 'v9 (lot aggregates)', 'v9 (로트 집계)'],
      ['article section:nth-child(3) > p:nth-of-type(2)',
        'So I stopped optimizing the leaderboard and started optimizing the honest lot-held-out axis. I also froze the cross-validation folds into a fixed split, because the default shuffling drifted by ±0.3 RMSE between machines — enough, at these margins, to flip which model "won".',
        '그래서 리더보드 대신 정직한 로트 홀드아웃 축을 최적화하기 시작했습니다. 또한 기본 셔플이 머신마다 RMSE를 ±0.3씩 흔들어 — 이 정도 여유에서는 어느 모델이 "이겼는지"를 뒤집기에 충분했기에 — 교차 검증 폴드를 고정 분할로 동결했습니다.'],
      ['article section:nth-child(4) h2', 'The one lever that actually worked', '실제로 통한 단 하나의 레버'],
      ['article section:nth-child(4) > p:nth-of-type(1)',
        'On the honest axis, the tabular models ceilinged around RMSE 60 no matter what I threw at them: 800-plus engineered features, Optuna tuning, even a 1D-CNN over the raw sequence, which lost outright. The lever that finally broke the ceiling was not a model — it was a domain concept.',
        '정직한 축에서 테이블형 모델은 무엇을 넣든 RMSE 60 부근에서 천장에 부딪혔습니다. 800개가 넘는 엔지니어링 특성, Optuna 튜닝, 심지어 원시 시퀀스에 대한 1D-CNN까지 시도했지만 완패했습니다. 마침내 천장을 깬 레버는 모델이 아니라 도메인 개념이었습니다.'],
      ['article section:nth-child(4) > p:nth-of-type(2)',
        'Porting a small set of preventive-maintenance features — days since the last regime-shifting maintenance, and a high/low regime flag — dropped wafer-CV RMSE from about 60 to <strong>38</strong>. Ten physics-aware features beat eight hundred statistical ones.',
        '예방 정비 특성 몇 개 — 마지막으로 공정을 바꾼 정비 이후 경과 일수, 고/저 구간 플래그 — 를 이식하자 웨이퍼 CV RMSE가 약 60에서 <strong>38</strong>로 떨어졌습니다. 물리를 반영한 특성 열 개가 통계 특성 팔백 개를 이겼습니다.'],
      ['article section:nth-child(4) .callout p',
        `<strong>The regime concept:</strong> one maintenance event in the record split the whole campaign in two — mean defect count jumped from <strong>638 to 1124</strong> overnight. What flips a regime is the maintenance <em>verdict</em> (did it actually shift the process?), not its <em>type</em>: roughly 70% of "major" maintenances turn out quiet, so a naive "major &rarr; reset" rule would invent defect spikes that never happened. And the verdict can't be read from the defect count itself — that would be target leakage — so it had to be inferred from the equipment counter and production gaps.`,
        `<strong>구간 개념:</strong> 기록에 남은 정비 한 건이 전체 캠페인을 둘로 갈랐습니다 — 평균 결함 수가 하룻밤 사이 <strong>638에서 1124</strong>로 뛰었습니다. 구간을 뒤집는 것은 정비의 <em>판정</em>(실제로 공정을 바꿨는가?)이지 <em>유형</em>이 아닙니다. "major" 정비의 약 70%는 실제로는 조용하므로, 단순한 "major &rarr; 리셋" 규칙은 일어나지 않은 결함 급증을 만들어냅니다. 그리고 판정은 결함 수 자체에서 읽을 수 없습니다 — 그것은 타깃 누수이기 때문입니다 — 따라서 장비 카운터와 생산 공백으로부터 추론해야 했습니다.`],
      ['article section:nth-child(5) h2', 'Knowing when to stop', '멈춰야 할 때를 아는 것'],
      ['article section:nth-child(5) > p:nth-of-type(1)',
        'Even the honest lot-held-out number is backward-looking. The real test is time: train on the past, predict the future. There a model frozen in time degraded to RMSE <strong>255</strong> as the process drifted away from it, while retraining on a rolling window held it near <strong>98</strong>. Retraining recovered two and a half times the accuracy.',
        '정직한 로트 홀드아웃 수치조차 과거를 바라봅니다. 진짜 시험은 시간입니다. 과거로 학습하고 미래를 예측하는 것입니다. 거기서 시간에 고정된 모델은 공정이 멀어지면서 RMSE <strong>255</strong>로 악화된 반면, 롤링 윈도우로 재학습하면 <strong>98</strong> 부근을 유지했습니다. 재학습은 정확도를 두 배 반 회복시켰습니다.'],
      ['article section:nth-child(5) .data-table th:nth-child(1)', 'Strategy (time-axis, walk-forward)', '전략 (시간축, 워크포워드)'],
      ['article section:nth-child(5) .data-table th:nth-child(2)', 'Pooled RMSE', '통합 RMSE'],
      ['article section:nth-child(5) .data-table tbody tr:nth-child(1) td:nth-child(1)', 'No retraining (frozen model)', '재학습 없음 (고정 모델)'],
      ['article section:nth-child(5) .data-table tbody tr:nth-child(2) td:nth-child(1)', 'Weekly retrain &middot; lean-85', '주간 재학습 &middot; lean-85'],
      ['article section:nth-child(5) .data-table tbody tr:nth-child(3) td:nth-child(1)', 'Weekly retrain &middot; regime features only', '주간 재학습 &middot; 구간 특성만'],
      ['article section:nth-child(5) > p:nth-of-type(2)',
        'I spent one last lever trying to beat retraining — transforming every sensor into its drift-free component so a static model could survive. All six variants got <em>worse</em>. That was the answer, not a failure: strip the level shift out of these sensors and there is nothing predictive left. Because I had pre-registered the stop criteria and capped how many times I could peek at the time-split, I could report "feature engineering cannot stabilize this process; it must be retrained" as a finding rather than a defeat.',
        '재학습을 이기려 마지막 레버를 하나 더 썼습니다 — 정적 모델이 버틸 수 있도록 모든 센서를 드리프트가 제거된 성분으로 변환했습니다. 여섯 변형 모두 <em>더 나빠졌습니다</em>. 그것은 실패가 아니라 답이었습니다. 이 센서들에서 레벨 변화를 빼면 예측할 것이 남지 않습니다. 중단 기준을 사전 등록하고 시간 분할을 들여다보는 횟수를 제한해 두었기에, "특성 공학으로는 이 공정을 안정화할 수 없으며 재학습해야 한다"를 패배가 아닌 발견으로 보고할 수 있었습니다.'],
      ['article section:nth-child(6) h2', 'What shipped: lean-85', '배포된 것: lean-85'],
      ['article section:nth-child(6) > p:nth-of-type(1)',
        'The model that went into the platform is a single <strong>XGBoost</strong> on <strong>85 features</strong>, selected from a 655-feature pool by a genetic-algorithm search and then trimmed of 14 time-unstable features, keeping five essential sensors as physical anchors. XGBoost won the final showdown not because it scored best on the leaky axis — it scored worst — but because it had the smallest gap between the leaky and honest axes, which is to say it was the most robust to lots it had never seen.',
        '플랫폼에 들어간 모델은 <strong>85개 특성</strong>을 쓰는 단일 <strong>XGBoost</strong>입니다. 655개 특성 풀에서 유전 알고리즘 탐색으로 선택한 뒤 시간에 불안정한 14개 특성을 덜어내고, 다섯 개의 핵심 센서를 물리적 앵커로 남겼습니다. XGBoost가 최종 대결에서 이긴 이유는 누수 축에서 가장 잘해서가 — 오히려 가장 못했습니다 — 아니라, 누수 축과 정직한 축 사이 격차가 가장 작았기 때문입니다. 즉 한 번도 본 적 없는 로트에 가장 강건했습니다.'],
      ['article section:nth-child(6) > p:nth-of-type(2)',
        'Its honest, operational number is RMSE <strong>99.84</strong> at R&sup2; <strong>0.855</strong> with retraining. I pinned that as the only figure to quote to stakeholders, and kept the leaderboard-style scores (which reached the low 30s with lot leakage, the low 70s once cleaned) clearly labeled as what they were: same-era numbers that never see a new lot.',
        '이 모델의 정직한 운영 수치는 재학습을 포함해 RMSE <strong>99.84</strong>, R&sup2; <strong>0.855</strong>입니다. 저는 이 값을 이해관계자에게 제시할 유일한 수치로 고정하고, 리더보드식 점수(로트 누수가 있을 때 30점대 초반, 정리 후 70점대 초반)는 있는 그대로 — 새로운 로트를 결코 보지 않는 동일 시기 수치 — 라고 명확히 표기했습니다.'],
      ['article section:nth-child(7) h2', 'What I took away', '배운 점'],
      ['article section:nth-child(7) li:nth-child(1)',
        'Excluding an ID column is not the same as removing leakage. Group siblings leak the answer through similarity — test it by swapping only the grouping key.',
        'ID 열을 제외하는 것과 누수를 제거하는 것은 다릅니다. 그룹 형제는 유사도를 통해 정답을 흘리므로, 그룹 기준만 바꿔 시험하세요.'],
      ['article section:nth-child(7) li:nth-child(2)',
        'Optimism bias grows with feature richness. The richer the features, the more they memorize instead of generalize.',
        '낙관 편향은 특성 풍부함에 비례해 커집니다. 특성이 많을수록 일반화가 아니라 암기를 더 합니다.'],
      ['article section:nth-child(7) li:nth-child(3)',
        'The evaluation axis can invert your model ranking, so choose the axis before you choose the model.',
        '평가 축은 모델 순위를 뒤집을 수 있으므로, 모델보다 축을 먼저 선택하세요.'],
      ['article section:nth-child(7) li:nth-child(4)',
        'A leak flips sign across splits; a real feature does not. It is the cleanest leakage test I know.',
        '누수는 분할에 따라 부호가 뒤집히지만 진짜 특성은 그렇지 않습니다. 제가 아는 가장 깔끔한 누수 검사입니다.'],
      ['article section:nth-child(7) li:nth-child(5)',
        'When a process genuinely drifts, retraining beats any feature engineering — and pre-registered stop criteria let you call that a result.',
        '공정이 실제로 변화할 때는 재학습이 어떤 특성 공학보다 낫습니다 — 그리고 사전 등록된 중단 기준이 그것을 결과라고 말할 수 있게 해줍니다.'],
      ['.backlink', '&lt;- Back to the AITCH case study', '← AITCH 사례 연구로 돌아가기']
    ]
  };

  pages['autoencoder-anomaly-detection.html'] = {
    title: ['An Autoencoder for the Defects SPC Misses | Khloe Minji Kim', 'SPC가 놓치는 결함을 잡는 오토인코더 | 김민지'],
    description: [
      'Learning log: building the AITCH anomaly-detection autoencoder — a level-axis model over a sequence one, rejecting a passing-but-artifact model, and the 83-vs-85 feature-leakage experiment.',
      '시퀀스 모델 대신 레벨축 모델을 택하고, 통과했지만 허상인 모델을 기각하며, 83 대 85 피처 누수 실험을 진행한 AITCH 이상 탐지 오토인코더 개발 기록입니다.'
    ],
    content: [
      ['.crumb', '<a href="learning-history.html">Learning History</a> / Autoencoder Anomaly Detection', '<a href="learning-history.html">학습 기록</a> / 오토인코더 이상 탐지'],
      ['.post-head h1', 'An Autoencoder for the Defects SPC Misses', 'SPC가 놓치는 결함을 잡는 오토인코더'],
      ['.standfirst',
        "The anomaly-detection study behind AITCH's Part A: why a level-axis autoencoder beat a sequence model, how I rejected my own passing model as a numerical artifact, and why the feature set the predictor loved would have quietly broken detection.",
        'AITCH 파트 A의 이상 탐지 연구 기록입니다. 레벨축 오토인코더가 시퀀스 모델을 이긴 이유, 통과한 제 모델을 수치적 허상으로 판단해 기각한 과정, 그리고 예측기가 선호한 특성 세트가 어떻게 탐지를 조용히 망가뜨렸을지를 설명합니다.'],
      ['article section:nth-child(1) h2', 'Why an autoencoder', '왜 오토인코더인가'],
      ['article section:nth-child(1) > p:nth-of-type(1)',
        'AITCH already had statistical process control watching each sensor against its limits. But two kinds of trouble slip past that net. A micro-defect can leave every single channel inside its control limit while quietly breaking the <em>relationship</em> between channels. And after a preventive-maintenance (PM) reset, the whole chamber drifts to a new normal that per-channel rules read as fine. Both live in the joint, multivariate structure of a wafer\'s sensor trace — exactly what a single-variable rule cannot see.',
        'AITCH에는 이미 각 센서를 관리 한계와 대조해 감시하는 통계적 공정 관리가 있었습니다. 하지만 두 종류의 문제가 그 그물을 빠져나갑니다. 미세 결함은 모든 채널을 관리 한계 안에 둔 채 채널 사이의 <em>관계</em>만 조용히 무너뜨릴 수 있습니다. 그리고 예방 정비(PM) 리셋 이후에는 챔버 전체가 새로운 정상 상태로 이동하는데, 채널별 규칙은 이를 정상으로 읽습니다. 두 문제 모두 웨이퍼 센서 트레이스의 결합된 다변량 구조 안에 있습니다 — 바로 단변량 규칙이 볼 수 없는 것입니다.'],
      ['article section:nth-child(1) > p:nth-of-type(2)',
        "So Part A added an autoencoder: train it only on healthy wafers until it can reconstruct their sensor signature, then score how far each new wafer's reconstruction misses. It emits two numbers — an <code>ae_score</code> for acute, spike-like faults and an EWMA-smoothed <code>ae_drift_score</code> for slow sub-&sigma; drift — and it raises no alarms of its own. Both feed a Context Score owned by the SPC module, which decides what actually fires. The autoencoder's job is to see, not to shout.",
        '그래서 파트 A는 오토인코더를 추가했습니다. 정상 웨이퍼만으로 학습해 센서 시그니처를 재구성할 수 있게 한 뒤, 새 웨이퍼의 재구성이 얼마나 어긋나는지 점수화합니다. 두 개의 숫자를 냅니다 — 급성 스파이크성 결함을 위한 <code>ae_score</code>와 느린 서브-&sigma; 드리프트를 위한 EWMA 평활 <code>ae_drift_score</code> — 그리고 스스로는 경보를 내지 않습니다. 둘 다 SPC 모듈이 소유한 Context Score로 들어가고, 무엇을 발령할지는 그쪽이 결정합니다. 오토인코더의 일은 보는 것이지 외치는 것이 아닙니다.'],
      ['article section:nth-child(2) h2', "Choosing the architecture: measure, don't follow fashion", '아키텍처 선택: 유행이 아니라 측정으로'],
      ['article section:nth-child(2) > p:nth-of-type(1)',
        'The reflex choice for sensor traces is a sequence model — a 1D-CNN or LSTM autoencoder. I checked that reflex against the data before committing. Each wafer is only 9&ndash;14 rows at three-second sampling, and the settle window I cared about (Step 4) was just <strong>two rows</strong> long at the median, three at most. A convolution kernel of three is wider than the sequence it is supposed to slide over.',
        '센서 트레이스에 대한 반사적 선택은 시퀀스 모델 — 1D-CNN이나 LSTM 오토인코더 — 입니다. 저는 확정 전에 그 반사를 데이터와 대조했습니다. 웨이퍼 한 장은 3초 샘플링에서 9&ndash;14행에 불과하고, 제가 관심 있던 정착 구간(스텝 4)은 중앙값 기준 <strong>단 두 행</strong>, 최대 세 행이었습니다. 커널 크기 3의 합성곱은 훑어야 할 시퀀스보다 넓습니다.'],
      ['article section:nth-child(2) .callout p',
        '<strong>The signal was a level shift, not a shape.</strong> The fault I needed to catch was Step-4 settle at <code>C17</code> dropping &minus;3.30&sigma; and <code>C12</code> rising +4.14&sigma; — a change of level, not of waveform. Level shifts are exactly what mean / std / min / max aggregates capture, so I built an aggregate MLP autoencoder, <code>83 &rarr; 64 &rarr; 32 &rarr; 16 &rarr; 32 &rarr; 64 &rarr; 83</code>, and shelved the sequence model with a written condition for reopening it: faster sampling, or a proven shape-only miss.',
        '<strong>신호는 파형이 아니라 레벨 변화였습니다.</strong> 제가 잡아야 할 결함은 스텝 4 정착 구간에서 <code>C17</code>이 &minus;3.30&sigma; 하락하고 <code>C12</code>가 +4.14&sigma; 상승하는 것 — 파형이 아니라 레벨의 변화 — 이었습니다. 레벨 변화는 바로 평균 / 표준편차 / 최소 / 최대 집계가 포착하는 것이므로, 저는 집계형 MLP 오토인코더 <code>83 &rarr; 64 &rarr; 32 &rarr; 16 &rarr; 32 &rarr; 64 &rarr; 83</code>을 만들고, 재검토 조건 — 더 빠른 샘플링 또는 파형만의 누락이 입증될 경우 — 을 명시한 채 시퀀스 모델을 보류했습니다.'],
      ['article section:nth-child(2) > p:nth-of-type(2)',
        "Synthesizing more mock wafers would not have rescued a sequence model. Mock data adds sample count, not time-axis resolution, and it teaches the <em>simulator's</em> idea of normal — which transfers to a real fab as zero.",
        '가짜 웨이퍼를 더 합성해도 시퀀스 모델을 구제하지 못했을 것입니다. 모의 데이터는 표본 수를 늘릴 뿐 시간축 해상도를 늘리지 않으며, <em>시뮬레이터의</em> 정상 개념을 가르치는데 — 이는 실제 팹으로는 0으로 전이됩니다.'],
      ['article section:nth-child(3) h2', 'Rejecting my own passing model', '통과한 내 모델을 기각하다'],
      ['article section:nth-child(3) > p:nth-of-type(1)',
        'The scoring function went through three revisions, and the middle one taught me the most. Revision 2 used a full residual-covariance Mahalanobis distance and passed every gate — regime-onset AUROC 0.991, sub-&sigma; recall 1.000. I almost shipped it.',
        '점수 함수는 세 번의 개정을 거쳤고, 그중 두 번째가 가장 많은 것을 가르쳤습니다. 개정 2는 전체 잔차 공분산 마할라노비스 거리를 사용해 모든 게이트를 통과했습니다 — 구간 시작 AUROC 0.991, 서브-&sigma; 재현율 1.000. 하마터면 배포할 뻔했습니다.'],
      ['article section:nth-child(3) .callout p',
        `<strong>A conditioning check stopped me.</strong> The residual covariance had a condition number of <strong>8.9&times;10&#8309;</strong> and an effective dimension of <strong>6 out of 83</strong> — a single transient feature, <code>C27</code>, owned 97.8% of the variance. The "detection" was a numerical artifact. Re-scored with a covariance-free diagonal metric, it collapsed straight back to the failing revision's level.`,
        `<strong>조건수 점검이 저를 멈춰 세웠습니다.</strong> 잔차 공분산의 조건수는 <strong>8.9&times;10&#8309;</strong>, 유효 차원은 <strong>83 중 6</strong>이었습니다 — 단일 과도 특성 <code>C27</code>이 분산의 97.8%를 차지했습니다. 그 "탐지"는 수치적 허상이었습니다. 공분산을 쓰지 않는 대각 지표로 다시 점수화하자 곧바로 실패한 개정의 수준으로 무너졌습니다.`],
      ['article section:nth-child(3) > p:nth-of-type(2)',
        'Revision 3 fixed the cause, not the symptom: a QuantileTransformer on the inputs and a condition-number cap on the covariance. This time the honesty check held — the covariance-free score <em>independently</em> rose from 0.063 to <strong>0.867</strong>, and the share of variance owned by the top component fell from 97.8% to 56.4%. From then on, "does the naive baseline rise too?" became a permanent step in every evaluation.',
        '개정 3은 증상이 아니라 원인을 고쳤습니다. 입력에 QuantileTransformer를 적용하고 공분산에 조건수 상한을 두었습니다. 이번에는 정직성 점검이 유지되었습니다 — 공분산을 쓰지 않는 점수가 <em>독립적으로</em> 0.063에서 <strong>0.867</strong>로 올랐고, 최상위 성분이 차지하는 분산 비율이 97.8%에서 56.4%로 떨어졌습니다. 그 뒤로 "순진한 베이스라인도 함께 오르는가?"가 모든 평가의 상시 단계가 되었습니다.'],
      ['article section:nth-child(4) h2', 'The 83-vs-85 feature experiment', '83 대 85 피처 실험'],
      ['article section:nth-child(4) > p:nth-of-type(1)',
        'The wafer-defect predictor next to me used an 85-feature set ("lean-85"). A reviewer asked the obvious question: why does the autoencoder use only 83, and is there any cost to just using 85? I answered with a controlled experiment instead of an opinion.',
        '옆에 있던 웨이퍼 결함 예측기는 85개 특성 세트("lean-85")를 썼습니다. 한 리뷰어가 당연한 질문을 했습니다. 왜 오토인코더는 83개만 쓰며, 그냥 85개를 쓰면 어떤 대가가 있는가? 저는 의견이 아니라 통제된 실험으로 답했습니다.'],
      ['article section:nth-child(4) > p:nth-of-type(2)',
        'I ran a four-arm contrast — same split, same architecture, input as the only variable — under a deliberate order of judgment: operational eligibility first, validity (is it cheating?) second, and raw performance only third. The eight extra features are time- and maintenance-regime signals: <code>days_since_last_pm</code>, <code>is_high_regime</code>, <code>hour</code>, and the like.',
        '동일한 분할, 동일한 아키텍처, 입력만을 유일한 변수로 둔 4-arm 대조 실험을 진행했습니다 — 판단 순서는 의도적으로 운영 적격성 먼저, 타당성(부정행위인가?) 다음, 순수 성능은 세 번째였습니다. 추가된 여덟 개 특성은 시간·정비 구간 신호입니다: <code>days_since_last_pm</code>, <code>is_high_regime</code>, <code>hour</code> 등입니다.'],
      ['article section:nth-child(4) .callout p',
        '<strong>Those features hand the detector its answer.</strong> For the <em>predictor</em> they are gold — they stand in for the defect count. Fed to the <em>anomaly detector</em>, they describe the very regime shift it is supposed to discover. The 85-feature model scored a perfect 1.000 AUROC at the regime boundary, but a counterfactual showed 95.9% of that came from the meta features alone, and fixing them collapsed it to 0.650. On genuinely injected sensor defects, 85 features recalled only <strong>30.7%</strong> where 83 caught <strong>99.9%</strong>.',
        '<strong>그 특성들은 탐지기에 정답을 쥐여줍니다.</strong> <em>예측기</em>에게 그것들은 금과 같습니다 — 결함 수를 대신하기 때문입니다. <em>이상 탐지기</em>에 넣으면 탐지기가 발견해야 할 바로 그 구간 변화를 설명해 버립니다. 85개 특성 모델은 구간 경계에서 완벽한 1.000 AUROC를 기록했지만, 반사실 분석 결과 그중 95.9%가 메타 특성만으로 나온 것이었고, 그 특성들을 고정하자 0.650으로 붕괴했습니다. 실제로 주입한 센서 결함에서는 85개 특성이 <strong>30.7%</strong>만 검출한 반면 83개는 <strong>99.9%</strong>를 잡았습니다.'],
      ['article section:nth-child(4) .data-table th:nth-child(1)', 'Feature set', '특성 세트'],
      ['article section:nth-child(4) .data-table th:nth-child(2)', 'Real-defect recall @0.5&sigma;', '실결함 재현율 @0.5&sigma;'],
      ['article section:nth-child(4) .data-table th:nth-child(3)', 'Regime AUROC', '구간 AUROC'],
      ['article section:nth-child(4) .data-table th:nth-child(4)', 'Meta-feature share', '메타 특성 비중'],
      ['article section:nth-child(4) .data-table tbody tr:nth-child(1) td:nth-child(1)', '<strong>83 (chosen)</strong>', '<strong>83 (선택)</strong>'],
      ['article section:nth-child(4) .data-table tbody tr:nth-child(2) td:nth-child(1)', '85 "as-is"', '85 "그대로"'],
      ['article section:nth-child(4) .data-table tbody tr:nth-child(2) td:nth-child(3)', '1.000 (leaked)', '1.000 (누수)'],
      ['article section:nth-child(4) > p:nth-of-type(3)',
        'Five of the 85 features were even constant on the training set, so "use 85 as-is" was not only leaky — it was not well-posed. I kept 83. One of my four pre-registered predictions turned out wrong: the validation false-alarm rate did not rise as I had guessed. I recorded the miss rather than quietly dropping it.',
        '심지어 85개 중 다섯 개 특성은 학습 세트에서 상수였습니다. 그래서 "85개를 그대로 쓰기"는 누수일 뿐 아니라 — 애초에 성립하지 않았습니다. 저는 83개를 유지했습니다. 사전 등록한 네 개 예측 중 하나는 틀렸습니다. 검증 오경보율이 제 추측처럼 오르지 않았습니다. 저는 그 빗나감을 조용히 버리지 않고 기록했습니다.'],
      ['article section:nth-child(5) h2', 'What the detector actually catches', '탐지기가 실제로 잡는 것'],
      ['article section:nth-child(5) > p:nth-of-type(1)',
        'On the leak-free 83-feature model, the numbers held up against the baselines and, more importantly, over time.',
        '누수가 없는 83개 특성 모델에서 수치는 베이스라인과 비교해, 그리고 더 중요하게는 시간에 걸쳐 유지되었습니다.'],
      ['article section:nth-child(5) .data-table th:nth-child(1)', 'Method', '방법'],
      ['article section:nth-child(5) .data-table th:nth-child(2)', 'Recall @0.5&sigma;', '재현율 @0.5&sigma;'],
      ['article section:nth-child(5) .data-table th:nth-child(3)', 'Regime-onset AUROC', '구간 시작 AUROC'],
      ['article section:nth-child(5) > p:nth-of-type(2)',
        'The false-alarm rate was 1.53% on validation and — the test I trust most — 1.45% on a three-month stretch of 21,436 wafers pulled five months after training, across three PM events. The model did not just pass once; it stayed calibrated. It is also small: a 71&nbsp;KB checkpoint scoring a wafer in 3.18&nbsp;ms.',
        '오경보율은 검증에서 1.53%였고 — 제가 가장 신뢰하는 시험으로 — 학습 5개월 뒤에 뽑은 3개월치 21,436장 웨이퍼에서 세 번의 PM을 거치며 1.45%였습니다. 이 모델은 한 번만 통과한 것이 아니라 계속 보정을 유지했습니다. 크기도 작습니다. 71&nbsp;KB 체크포인트가 웨이퍼 한 장을 3.18&nbsp;ms에 점수화합니다.'],
      ['article section:nth-child(6) h2', 'Measuring my own blind spots', '내 사각지대를 측정하기'],
      ['article section:nth-child(6) > p:nth-of-type(1)',
        'An autoencoder can only see inside the 83 dimensions I gave it. Anything outside them is not a hard case — it is permanent blindness. So the final phase was not about raising a score; it was about mapping what the model <em>could not</em> see.',
        '오토인코더는 제가 준 83개 차원 안에서만 볼 수 있습니다. 그 바깥의 것은 어려운 사례가 아니라 — 영구적인 실명입니다. 그래서 마지막 단계는 점수를 올리는 것이 아니라 모델이 <em>볼 수 없는</em> 것을 지도로 그리는 일이었습니다.'],
      ['article section:nth-child(6) > p:nth-of-type(2)',
        "I built a 733-feature probe set (662 of them outside the model's 83) and a set of out-of-distribution positive controls — and caught a bug in my own probe before trusting a single conclusion from it. I mapped ten Etch failure modes into a coverage matrix, marking which the autoencoder covers, which need another detector, and which are not in the collected data at all. When two independent methods converged on the same out-of-83 feature, I checked it from six angles rather than assume a gap, and confirmed it was harmless quantization noise. The deliverable was an honest five-item residual-risk register — a managed list of what to watch, not a certificate that nothing was missed.",
        '733개 특성 프로브 세트(그중 662개는 모델의 83개 바깥)와 분포 밖 양성 대조군을 만들었고 — 그 프로브에서 어떤 결론이든 신뢰하기 전에 제 프로브의 버그를 먼저 잡았습니다. 열 개의 식각 고장 모드를 커버리지 매트릭스로 정리해 오토인코더가 무엇을 담당하는지, 무엇이 다른 탐지기를 필요로 하는지, 무엇이 아예 수집 데이터에 없는지를 표시했습니다. 두 독립적 방법이 83개 바깥의 같은 특성으로 수렴했을 때, 저는 격차라고 단정하지 않고 여섯 각도에서 점검해 그것이 무해한 양자화 잡음임을 확인했습니다. 산출물은 정직한 다섯 항목의 잔여 리스크 등록부였습니다 — 무엇을 지켜볼지에 대한 관리 목록이지, 아무것도 놓치지 않았다는 증서가 아닙니다.'],
      ['article section:nth-child(7) h2', 'What I took away', '배운 점'],
      ['article section:nth-child(7) li:nth-child(1)',
        'Check the data before choosing the architecture. The fashionable sequence model was wrong for two-row settle windows; the plain aggregate model was right.',
        '아키텍처를 고르기 전에 데이터를 확인하세요. 유행하는 시퀀스 모델은 두 행짜리 정착 구간에 틀렸고, 평범한 집계 모델이 옳았습니다.'],
      ['article section:nth-child(7) li:nth-child(2)',
        'Be willing to reject your own passing model. A gate that passes for the wrong reason is worse than one that honestly fails.',
        '자신의 통과한 모델을 기꺼이 기각하세요. 잘못된 이유로 통과한 게이트는 정직하게 실패한 게이트보다 나쁩니다.'],
      ['article section:nth-child(7) li:nth-child(3)',
        'Separate apparent detection from real detection. A leaked 1.000 AUROC should never beat an earned 0.999 recall.',
        '겉보기 탐지와 실제 탐지를 구분하세요. 누수된 1.000 AUROC가 정당하게 얻은 0.999 재현율을 이겨서는 안 됩니다.'],
      ['article section:nth-child(7) li:nth-child(4)',
        'Map the blind spots on purpose. For a model that only sees its own features, omission is the real risk, so I measured it.',
        '사각지대를 의도적으로 지도화하세요. 자신의 특성만 보는 모델에게 누락이 진짜 위험이므로, 저는 그것을 측정했습니다.'],
      ['article section:nth-child(7) li:nth-child(5)',
        'Publish the misses. Pre-registered predictions that turned out wrong stay in the record.',
        '빗나감을 공개하세요. 틀린 것으로 드러난 사전 등록 예측도 기록에 남깁니다.'],
      ['.backlink', '&lt;- Back to the AITCH case study', '← AITCH 사례 연구로 돌아가기']
    ]
  };

  const page = pages[pageName] || null;

  function createLanguageSwitch() {
    const navInner = document.querySelector('nav .nav-inner');
    if (!navInner) return null;

    const button = document.createElement('button');
    button.className = 'site-language-switch';
    button.type = 'button';
    button.setAttribute('role', 'switch');
    button.setAttribute('aria-checked', 'false');
    button.setAttribute('aria-label', 'Switch to Korean');
    button.innerHTML = '<span class="site-language-track" aria-hidden="true"><span class="site-language-option site-language-option-kr">KR</span><span class="site-language-option site-language-option-en">EN</span><span class="site-language-thumb"></span></span>';
    navInner.appendChild(button);
    return button;
  }

  function preserveWhitespace(original, replacement) {
    const leading = original.match(/^\s*/)?.[0] || '';
    const trailing = original.match(/\s*$/)?.[0] || '';
    return leading + replacement + trailing;
  }

  function collectCommonTextNodes() {
    const nodes = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent || parent.closest('script,style')) return NodeFilter.FILTER_REJECT;
        const english = node.nodeValue.trim();
        return commonText.has(english) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_REJECT;
      }
    });
    let node;
    while ((node = walker.nextNode())) {
      nodes.push({ node, english: node.nodeValue.trim(), original: node.nodeValue });
    }
    return nodes;
  }

  const switchButton = createLanguageSwitch();
  const commonNodes = collectCommonTextNodes();

  function applyLanguage(language) {
    const isKorean = language === 'ko';
    document.documentElement.lang = isKorean ? 'ko' : 'en';

    if (page) {
      document.title = page.title[isKorean ? 1 : 0];
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription && page.description) {
        metaDescription.setAttribute('content', page.description[isKorean ? 1 : 0]);
      }

      (page.content || []).forEach(([selector, english, korean]) => {
        document.querySelectorAll(selector).forEach(element => {
          element.innerHTML = isKorean ? korean : english;
        });
      });

      (page.attributes || []).forEach(([selector, attribute, english, korean]) => {
        document.querySelectorAll(selector).forEach(element => {
          element.setAttribute(attribute, isKorean ? korean : english);
        });
      });
    }

    commonNodes.forEach(({ node, english, original }) => {
      if (!node.isConnected) return;
      node.nodeValue = preserveWhitespace(original, isKorean ? commonText.get(english) : english);
    });

    if (switchButton) {
      switchButton.classList.toggle('is-korean', isKorean);
      switchButton.setAttribute('aria-checked', String(isKorean));
      switchButton.setAttribute('aria-label', isKorean ? '영어로 전환' : 'Switch to Korean');
    }

    try {
      localStorage.setItem(STORAGE_KEY, language);
    } catch (error) {}
  }

  let savedLanguage = 'en';
  try {
    savedLanguage = localStorage.getItem(STORAGE_KEY) || 'en';
  } catch (error) {}

  applyLanguage(savedLanguage === 'ko' ? 'ko' : 'en');
  switchButton?.addEventListener('click', () => {
    applyLanguage(switchButton.getAttribute('aria-checked') === 'true' ? 'en' : 'ko');
  });
})();
