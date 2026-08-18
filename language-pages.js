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
    ['All Projects', '전체 프로젝트'],
    ['Topics', '주제'],
    ['Choosing a Korean emotion model', '한국어 감정 모델 선택 과정'],
    ['Embedded communication on Raspberry Pi', 'Raspberry Pi 임베디드 통신'],
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
        'MLOps case study for real-time Etch-process defect prediction and retraining.',
        '실시간 식각 공정 결함 예측과 재학습을 다룬 MLOps 프로젝트입니다.'
      ],
      content: [
        ['.project-hero .eyebrow', 'Project 01', '프로젝트 01'],
        ['.project-hero h1', 'Active Manufacturing AI Platform', '능동형 제조 AI 플랫폼'],
        ['.project-hero .lead',
          'A semiconductor manufacturing MLOps platform for real-time Etch-process defect prediction, built around Kafka FDC ingestion, Step-Window features, LightGBM ensembles, SHAP attribution, and continuous retraining.',
          'Kafka FDC 수집, Step-Window 특성, LightGBM 앙상블, SHAP 기여도 분석, 지속 재학습을 중심으로 구축한 실시간 식각 공정 결함 예측용 반도체 제조 MLOps 플랫폼입니다.'],
        ['.project-meta .meta-item:nth-child(1) strong', 'MLOps Engineer', 'MLOps 엔지니어'],
        ['.project-meta .meta-item:nth-child(2) strong', 'Jun-Aug 2026', '2026년 6월-8월'],
        ['.project-meta .meta-item:nth-child(4) strong', '11,939 wafers / 123K rows', '웨이퍼 11,939장 / 12.3만 행'],
        ['#overview p',
          'Team AITCH is building an active manufacturing AI platform for SK Hynix / ASAC / T Academy. Khloe owns Pipeline A, the real-time inference and retraining path for Etch-process defect prediction.',
          'AITCH 팀은 SK하이닉스 / ASAC / T Academy를 위한 능동형 제조 AI 플랫폼을 구축하고 있습니다. 김민지는 식각 공정 결함 예측의 실시간 추론 및 재학습 경로인 파이프라인 A를 담당했습니다.'],
        ['#problem p',
          'Initial evaluation showed abnormally high R2 because random cross-validation leaked future process regimes into training. The platform needed a benchmark that reflected how models behave across real production drift.',
          '초기 평가에서는 무작위 교차 검증 과정에서 미래 공정 구간이 학습 데이터에 유입되어 R2가 비정상적으로 높게 나타났습니다. 실제 생산 환경의 변화 속에서 모델이 어떻게 동작하는지를 반영하는 벤치마크가 필요했습니다.'],
        ['#solution p',
          'Khloe redesigned evaluation around time-based regime holdout, then built a pipeline for Kafka-based FDC trace ingestion, Step-Window feature engineering, LightGBM ensemble modeling, SHAP Top-3 attribution, and MLflow model versioning.',
          '김민지는 시간 기반 구간 홀드아웃을 중심으로 평가 체계를 재설계하고, Kafka 기반 FDC 트레이스 수집, Step-Window 특성 공학, LightGBM 앙상블 모델링, SHAP 상위 3개 기여도 분석, MLflow 모델 버전 관리를 포함한 파이프라인을 구축했습니다.'],
        ['#results li:nth-child(1)',
          "Established regime-holdout evaluation as the team's standard performance benchmark.",
          '구간 홀드아웃 평가를 팀의 표준 성능 벤치마크로 정립했습니다.'],
        ['#results li:nth-child(2)',
          'Designed Model R2R for bounded residual-bias correction using delayed ground-truth labels.',
          '지연된 정답 레이블을 활용해 제한된 범위에서 잔차 편향을 보정하는 Model R2R을 설계했습니다.'],
        ['#results li:nth-child(3)',
          'Specified a continuous training loop with maintenance-cycle triggers and champion-challenger promotion gates.',
          '유지보수 주기 트리거와 챔피언-챌린저 승격 기준을 포함한 지속 학습 루프를 설계했습니다.'],
        ['#links p',
          'Project artifacts can be added here when the repository, report, or slides are ready to publish.',
          '저장소, 보고서 또는 발표 자료의 공개 준비가 완료되면 프로젝트 산출물을 이곳에 추가할 예정입니다.']
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
