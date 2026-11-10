/**
 * NEW QUESTIONS - CHAPTER 1 (28 câu mới: 5 Part 2, 3 Part 3, 10 Part 5, 3 Part 6, 7 Part 7)
 * Chủ đề: Ca trực nửa đêm, Nhận diện Phishing, Cấu hình Tường lửa & Kiểm toán an ninh
 */
module.exports = [
  // ==========================================
  // PART 2 (5 CÂU Q&A LISTENING)
  // ==========================================
  {
    id: "c1-25",
    chapter: 1,
    part: 2,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave asks through the SOC intercom headset about the phishing report timeline.",
    dialogue_vi: "Dave hỏi qua tai nghe bộ đàm SOC về thời hạn nộp báo cáo vụ tấn công phishing.",
    situation_vi: "00:25 - Dave kiểm tra tiến độ tổng hợp danh sách nhân viên đã bấm vào liên kết phishing.",
    stem: "Who is responsible for compiling the phishing incident report?",
    audioText: "Who is responsible for compiling the phishing incident report?",
    choices: [
      "Sarah will handle that assignment before sunrise.",
      "Yes, the incident was very alarming.",
      "To report any suspicious incoming phone calls."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi bắt đầu bằng 'Who' (Ai chịu trách nhiệm) -> (A) 'Sarah will handle that assignment...' (Sarah sẽ xử lý nhiệm vụ đó trước khi mặt trời mọc) trả lời trực tiếp cho người thực hiện.",
    trap: "Bẫy Yes/No ở (B) (câu hỏi Wh- không bao giờ trả lời bằng Yes/No) và bẫy lặp từ 'report' ở (C) với câu trả lời dạng 'To V' (trả lời cho Why).",
    examTip: "Câu hỏi Who thường có câu trả lời là tên người, chức vụ, bộ phận hoặc đại từ chỉ người.",
    tags: { part: "Part 2", category: "Listening", topic: "Incident Response", difficulty: "Easy" },
    vocab: [
      { word: "compile", ipa: "/kəmˈpaɪl/", pos: "v", meaning: "biên soạn, tổng hợp tài liệu" },
      { word: "assignment", ipa: "/əˈsaɪn.mənt/", pos: "n", meaning: "nhiệm vụ được giao" }
    ]
  },
  {
    id: "c1-26",
    chapter: 1,
    part: 2,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave checks the location of the backup firewall hardware keys.",
    dialogue_vi: "Dave hỏi vị trí cất giữ khóa bảo mật phần cứng của tường lửa dự phòng.",
    situation_vi: "00:35 - Cần cấp quyền cấu hình khẩn cấp cho tường lửa FortiGate.",
    stem: "Where did you store the spare authentication tokens?",
    audioText: "Where did you store the spare authentication tokens?",
    choices: [
      "In the locked metal cabinet beside server rack B.",
      "Tokens are used for two-factor authentication.",
      "No, we haven't received them yet."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi 'Where' (Ở đâu) -> (A) 'In the locked metal cabinet...' (Trong tủ kim loại khóa cạnh giá máy chủ B) chỉ rõ vị trí địa điểm.",
    trap: "Bẫy định nghĩa giải thích ở (B) và bẫy Yes/No ở (C) đối với câu hỏi Where.",
    examTip: "Câu hỏi 'Where' luôn ưu tiên tìm câu trả lời có giới từ chỉ vị trí (in, on, at, under, next to, beside).",
    tags: { part: "Part 2", category: "Listening", topic: "Authentication", difficulty: "Easy" },
    vocab: [
      { word: "spare", ipa: "/speər/", pos: "adj", meaning: "dự phòng, để dành" },
      { word: "cabinet", ipa: "/ˈkæb.ɪ.nət/", pos: "n", meaning: "tủ đựng hồ sơ/thiết bị" }
    ]
  },
  {
    id: "c1-27",
    chapter: 1,
    part: 2,
    speaker: "Sarah (Forensics)",
    dialogue_en: "Sarah asks why the proxy server bandwidth dropped suddenly.",
    dialogue_vi: "Sarah hỏi lý do băng thông máy chủ proxy tụt giảm đột ngột.",
    situation_vi: "00:50 - Lưu lượng mạng nội bộ có dấu hiệu nghẽn bất thường.",
    stem: "Why did the proxy server shut down unexpectedly at midnight?",
    audioText: "Why did the proxy server shut down unexpectedly at midnight?",
    choices: [
      "Because an automated memory leak triggered a fail-safe restart.",
      "Yes, it was scheduled for tomorrow afternoon.",
      "Around fifteen hundred megabytes per second."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi 'Why' (Tại sao) -> (A) 'Because an automated memory leak...' giải thích nguyên nhân trực tiếp bằng liên từ 'Because'.",
    trap: "Bẫy Yes/No ở (B) và bẫy trả lời cho câu hỏi How much / speed ở (C).",
    examTip: "Câu hỏi 'Why' thường trả lời bằng Because, Due to, As, Since, hoặc cụm To + V (mục đích).",
    tags: { part: "Part 2", category: "Listening", topic: "Server Health", difficulty: "Medium" },
    vocab: [
      { word: "proxy", ipa: "/ˈprɒk.si/", pos: "n", meaning: "máy chủ ủy quyền" },
      { word: "fail-safe", ipa: "/ˈfeɪl.seɪf/", pos: "adj", meaning: "chế độ tự ngắt an toàn" }
    ]
  },
  {
    id: "c1-28",
    chapter: 1,
    part: 2,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave offers a choice between two actions regarding the suspicious IP.",
    dialogue_vi: "Dave đưa ra câu hỏi lựa chọn giữa chặn IP hay theo dõi thêm.",
    situation_vi: "01:05 - Cân nhắc giữa việc lập tức cách ly IP hay để hệ thống bẫy (honeypot) quan sát.",
    stem: "Should we blacklist this suspicious IP immediately or monitor its packets for twenty minutes?",
    audioText: "Should we blacklist this suspicious IP immediately or monitor its packets for twenty minutes?",
    choices: [
      "Let's trace its origin for a short while before blocking it.",
      "Yes, I think it is an IP address.",
      "The black list is located in the top drawer."
    ],
    answer: 0,
    explanation_vi: "Đây là câu hỏi lựa chọn (Alternative question với 'or'). Đáp án (A) 'Let's trace its origin...' chọn phương án theo dõi trước.",
    trap: "Bẫy trả lời Yes/No ở (B) (câu hỏi lựa chọn A or B TUYỆT ĐỐI không trả lời Yes/No) và bẫy lặp từ 'black list' ở (C).",
    examTip: "Câu hỏi chứa 'A or B' không chọn đáp án có Yes/No. Câu trả lời thường chọn 1 trong 2, hoặc chọn cả hai (either/both), hoặc bác bỏ cả hai (neither).",
    tags: { part: "Part 2", category: "Listening", topic: "Decision Making", difficulty: "Medium" },
    vocab: [
      { word: "blacklist", ipa: "/ˈblæk.lɪst/", pos: "v", meaning: "đưa vào danh sách đen ngăn chặn" },
      { word: "trace", ipa: "/treɪs/", pos: "v", meaning: "truy vết, lần theo dấu vết" }
    ]
  },
  {
    id: "c1-29",
    chapter: 1,
    part: 2,
    speaker: "Sarah (Forensics)",
    dialogue_en: "Sarah makes a statement about the upcoming cybersecurity compliance audit.",
    dialogue_vi: "Sarah đưa ra câu trần thuật về đợt kiểm toán an ninh sắp tới của ngân hàng.",
    situation_vi: "01:15 - Sarah nhắc bạn về việc chuẩn bị bằng chứng log trước thanh tra.",
    stem: "The external audit team is arriving earlier than anticipated tomorrow morning.",
    audioText: "The external audit team is arriving earlier than anticipated tomorrow morning.",
    choices: [
      "In that case, I will organize the access logs right now.",
      "No, the flight has not landed yet.",
      "He arrived at the conference on Wednesday."
    ],
    answer: 0,
    explanation_vi: "Câu đề bài là câu trần thuật (Statement) thông báo thông tin -> (A) 'In that case, I will organize the access logs right now' (Trong trường hợp đó, tôi sẽ sắp xếp log truy cập ngay bây giờ) là phản hồi tự nhiên và có tính hợp tác giải quyết vấn đề.",
    trap: "Bẫy lặp thì quá khứ không liên quan 'arrived' ở (C) và bẫy suy diễn sai về chuyến bay ở (B).",
    examTip: "Đối với câu trần thuật trong Part 2, câu trả lời đúng thường thể hiện sự đồng tình, đưa ra giải pháp tiếp nối hoặc ngạc nhiên.",
    tags: { part: "Part 2", category: "Listening", topic: "Audit", difficulty: "Hard" },
    vocab: [
      { word: "anticipated", ipa: "/ænˈtɪs.ɪ.peɪ.tɪd/", pos: "adj", meaning: "được dự tính trước" },
      { word: "organize", ipa: "/ˈɔː.ɡən.aɪz/", pos: "v", meaning: "sắp xếp, tổ chức" }
    ]
  },

  // ==========================================
  // PART 3 (HỘI THOẠI 3 CÂU - CONVERSATION 1)
  // ==========================================
  {
    id: "c1-30",
    chapter: 1,
    part: 3,
    speaker: "Dave & Sarah",
    dialogue_en: "Dave: Sarah, did you review the spam quarantine log from the wealth management division?\nSarah: Yes, I noticed eight executives received an invitation to verify their corporate credit cards on an external domain.\nDave: That is definitely a spear-phishing attack. We need to notify IT Helpdesk to reset those eight accounts immediately.",
    dialogue_vi: "Dave: Sarah, em đã kiểm tra nhật ký cách ly thư rác từ khối quản lý tài sản chưa?\nSarah: Rồi anh, em thấy có 8 giám đốc nhận được email mời xác thực thẻ tín dụng doanh nghiệp trên một tên miền ngoài.\nDave: Chắc chắn là tấn công Spear-Phishing rồi. Chúng ta phải báo bộ phận Helpdesk đổi mật khẩu 8 tài khoản đó ngay.",
    situation_vi: "01:25 - Hội thoại giữa Dave và Sarah về chiến dịch lừa đảo nhắm vào khối khách hàng VIP.",
    stem: "What are the speakers mainly discussing?",
    audioText: "What are the speakers mainly discussing?",
    choices: [
      "A deceptive email campaign targeting senior managers.",
      "The installation of new office credit card machines.",
      "Plans to relocate the bank's wealth management headquarters.",
      "A software demonstration presented by external consultants."
    ],
    answer: 0,
    explanation_vi: "Cả đoạn hội thoại bàn về 'spam quarantine log', 'eight executives received an invitation to verify corporate credit cards on an external domain' -> Đây là chiến dịch email giả mạo nhắm vào các giám đốc (deceptive email campaign targeting senior managers).",
    trap: "Bẫy lặp từ 'credit card' ở (B) và 'wealth management' ở (C) nhưng sai lệch ngữ cảnh.",
    examTip: "Câu hỏi về chủ đề chính (Main topic/discussing) luôn nằm ở 1-2 câu đầu tiên của đoạn thoại.",
    tags: { part: "Part 3", category: "Listening", topic: "Main Idea", difficulty: "Medium" },
    vocab: [
      { word: "deceptive", ipa: "/dɪˈsep.tɪv/", pos: "adj", meaning: "lừa dối, mang tính đánh lừa" },
      { word: "executive", ipa: "/ɪɡˈzek.jə.tɪv/", pos: "n", meaning: "cán bộ quản lý cấp cao" }
    ]
  },
  {
    id: "c1-31",
    chapter: 1,
    part: 3,
    speaker: "Dave & Sarah",
    dialogue_en: "(Continuing Conversation 1)",
    dialogue_vi: "(Tiếp tục Hội thoại 1)",
    situation_vi: "Tìm hiểu chi tiết về số lượng người dùng bị ảnh hưởng trong vụ việc.",
    stem: "According to Sarah, what did several employees receive?",
    audioText: "According to Sarah, what did several employees receive?",
    choices: [
      "An unexpected request to validate corporate card details.",
      "A discount voucher for online accounting software.",
      "An official notice announcing executive promotions.",
      "A confirmation receipt for an international wire transfer."
    ],
    answer: 0,
    explanation_vi: "Sarah nói rõ: 'eight executives received an invitation to verify their corporate credit cards on an external domain' -> tương đương với 'An unexpected request to validate corporate card details'.",
    trap: "Bẫy chuyển khoản quốc tế ở (D) hoặc thông báo thăng chức ở (C).",
    examTip: "Kỹ năng Paraphrasing trong TOEIC: 'invitation to verify' được diễn đạt lại thành 'request to validate'.",
    tags: { part: "Part 3", category: "Listening", topic: "Detail", difficulty: "Medium" },
    vocab: [
      { word: "validate", ipa: "/ˈvæl.ɪ.deɪt/", pos: "v", meaning: "xác minh tính hợp lệ" },
      { word: "invitation", ipa: "/ˌɪn.vɪˈteɪ.ʃən/", pos: "n", meaning: "lời mời, thông điệp mời gọi" }
    ]
  },
  {
    id: "c1-32",
    chapter: 1,
    part: 3,
    speaker: "Dave & Sarah",
    dialogue_en: "(Continuing Conversation 1)",
    dialogue_vi: "(Tiếp tục Hội thoại 1)",
    situation_vi: "Hành động khắc phục tiếp theo mà Dave chỉ đạo.",
    stem: "What action does Dave recommend taking immediately?",
    audioText: "What action does Dave recommend taking immediately?",
    choices: [
      "Instructing the helpdesk to reset compromised credentials.",
      "Purchasing additional firewall licenses from the vendor.",
      "Suspending all corporate credit card transactions permanently.",
      "Scheduling an emergency press conference with news reporters."
    ],
    answer: 0,
    explanation_vi: "Dave kết luận: 'We need to notify IT Helpdesk to reset those eight accounts immediately' -> tương đương 'Instructing the helpdesk to reset compromised credentials'.",
    trap: "Bẫy cực đoan 'permanently' ở (C) và bẫy họp báo báo chí ở (D).",
    examTip: "Câu hỏi cuối của Part 3 thường hỏi về hành động tiếp theo (What will the speakers do next / recommend). Lắng nghe kỹ lời thoại của người nói cuối cùng.",
    tags: { part: "Part 3", category: "Listening", topic: "Next Action", difficulty: "Medium" },
    vocab: [
      { word: "compromised", ipa: "/ˈkɒm.prə.maɪzd/", pos: "adj", meaning: "đã bị lộ, bị xâm phạm" },
      { word: "credential", ipa: "/krɪˈden.ʃəl/", pos: "n", meaning: "thông tin đăng nhập" }
    ]
  },

  // ==========================================
  // PART 5 (10 CÂU GRAMMAR & VOCABULARY)
  // ==========================================
  {
    id: "c1-33",
    chapter: 1,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave checks the server room temperature regulations.",
    dialogue_vi: "Dave nhắc nhở về quy định giám sát nhiệt độ phòng máy chủ.",
    situation_vi: "Chủ điểm: Cặp liên từ chỉ nguyên nhân (Because of / Due to + Cụm danh từ).",
    stem: "The primary firewall cluster was relocated to Server Room C _______ recent overheating issues in the basement.",
    choices: ["because of", "although", "even if", "in spite"],
    answer: 0,
    explanation_vi: "Đằng sau chỗ trống là một cụm danh từ 'recent overheating issues...' (các sự cố quá nhiệt gần đây), không phải mệnh đề có động từ chia thì. Cần một giới từ chỉ nguyên nhân -> chọn 'because of' (bởi vì).",
    trap: "Bẫy liên từ 'although' (cần đi với mệnh đề S + V) và bẫy thiếu 'of' của 'in spite' (phải là in spite of).",
    examTip: "Quy tắc ngữ pháp: [Because / Although + Mệnh đề S + V] đối lập với [Because of / Despite / In spite of + Cụm danh từ / V-ing].",
    tags: { part: "Part 5", category: "Grammar", topic: "Conjunctions", difficulty: "Easy" },
    vocab: [
      { word: "cluster", ipa: "/ˈklʌs.tər/", pos: "n", meaning: "cụm máy chủ liên kết" },
      { word: "overheating", ipa: "/ˌəʊ.vəˈhiː.tɪŋ/", pos: "n", meaning: "hiện tượng quá nhiệt" }
    ]
  },
  {
    id: "c1-34",
    chapter: 1,
    part: 5,
    speaker: "Sarah (Forensics)",
    dialogue_en: "Sarah discusses employee compliance with workstation safety rules.",
    dialogue_vi: "Sarah nhấn mạnh việc tuân thủ quy tắc khóa máy trạm khi rời bàn.",
    situation_vi: "Chủ điểm: Từ loại - Chọn Phó từ (Adverb) bổ nghĩa cho động từ thường.",
    stem: "Employees must _______ lock their computer screens whenever leaving their desks unattended.",
    choices: ["consistently", "consistent", "consistency", "consisting"],
    answer: 0,
    explanation_vi: "Đứng giữa trợ động từ khuyết thiếu 'must' và động từ chính 'lock' cần một phó từ (adverb) đuôi -ly để bổ nghĩa cho hành động -> chọn 'consistently' (phải luôn luôn/nhất quán khóa màn hình).",
    trap: "Bẫy tính từ 'consistent' hoặc danh từ 'consistency'.",
    examTip: "Vị trí vàng của Trạng từ: [Modal Verb + Trạng từ + Động từ nguyên thể]. Ví dụ: must strictly follow, will promptly reply, must consistently lock.",
    tags: { part: "Part 5", category: "Grammar", topic: "Word Form", difficulty: "Easy" },
    vocab: [
      { word: "consistently", ipa: "/kənˈsɪs.tənt.li/", pos: "adv", meaning: "nhất quán, trước sau như một" },
      { word: "unattended", ipa: "/ˌʌn.əˈten.dɪd/", pos: "adj", meaning: "không có người trông coi" }
    ]
  },
  {
    id: "c1-35",
    chapter: 1,
    part: 5,
    speaker: "Helen Kang (CISO)",
    dialogue_en: "CISO Helen Kang issues a policy directive regarding external vendors.",
    dialogue_vi: "Giám đốc Helen Kang ban hành chỉ thị rà soát các nhà cung ứng bên ngoài.",
    situation_vi: "Chủ điểm: Từ vựng - Chọn tính từ phù hợp ngữ cảnh an toàn tài chính.",
    stem: "NovaBank requires all third-party software vendors to maintain _______ security safeguards against data theft.",
    choices: ["stringent", "reluctant", "fragile", "hesitant"],
    answer: 0,
    explanation_vi: "Cần một tính từ bổ nghĩa cho 'security safeguards' (các biện pháp bảo vệ an ninh). 'Stringent' nghĩa là nghiêm ngặt, khắt khe -> 'stringent security safeguards' là cụm kết hợp từ (collocation) tự nhiên chuẩn mực.",
    trap: "Các từ mang nghĩa tiêu cực không hợp logic: 'reluctant' (miễn cưỡng), 'fragile' (mong manh, dễ vỡ), 'hesitant' (do dự).",
    examTip: "Collocation hay gặp trong TOEIC: stringent standards / regulations / safeguards (các tiêu chuẩn / quy định / biện pháp bảo vệ nghiêm ngặt).",
    tags: { part: "Part 5", category: "Vocabulary", topic: "Collocation", difficulty: "Medium" },
    vocab: [
      { word: "stringent", ipa: "/ˈstrɪn.dʒənt/", pos: "adj", meaning: "nghiêm ngặt, khắt khe" },
      { word: "safeguard", ipa: "/ˈseɪf.ɡɑːd/", pos: "n", meaning: "biện pháp che chắn bảo vệ" }
    ]
  },
  {
    id: "c1-36",
    chapter: 1,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave reviews the SIEM threat intelligence log entries.",
    dialogue_vi: "Dave kiểm tra các bản ghi nhật ký cảnh báo nguy cơ trên hệ thống SIEM.",
    situation_vi: "Chủ điểm: Thể bị động (Passive Voice) của thì Hiện tại Hoàn thành.",
    stem: "More than five hundred unauthorized login attempts _______ by the perimeter firewall since midnight.",
    choices: ["have been intercepted", "have intercepted", "intercepting", "are intercepting"],
    answer: 0,
    explanation_vi: "Chủ ngữ là vật 'More than five hundred unauthorized login attempts' (Hơn 500 nỗ lực đăng nhập trái phép), đi với tác nhân 'by the perimeter firewall' -> Cần dùng thể bị động (Passive Voice). Có mốc thời gian 'since midnight' -> thì Hiện tại hoàn thành bị động: [have/has been + V3/ed] -> chọn 'have been intercepted'.",
    trap: "Bẫy thể chủ động 'have intercepted' (nhầm lẫn giữa chủ ngữ gây ra hành động và chịu tác động).",
    examTip: "Dấu hiệu nhận biết: Có 'since + mốc thời gian' chia Hiện tại Hoàn thành. Chủ ngữ là vật + 'by...' -> ưu tiên chọn thể bị động (be + V3/ed).",
    tags: { part: "Part 5", category: "Grammar", topic: "Passive Voice", difficulty: "Medium" },
    vocab: [
      { word: "unauthorized", ipa: "/ʌnˈɔː.θər.aɪzd/", pos: "adj", meaning: "trái phép, chưa được cấp quyền" },
      { word: "intercept", ipa: "/ˌɪn.təˈsept/", pos: "v", meaning: "đánh chặn, ngăn chặn giữa đường" }
    ]
  },
  {
    id: "c1-37",
    chapter: 1,
    part: 5,
    speaker: "Sarah (Forensics)",
    dialogue_en: "Sarah explains why emergency measures were executed.",
    dialogue_vi: "Sarah giải thích lý do thực hiện biện pháp ứng cứu khẩn cấp.",
    situation_vi: "Chủ điểm: Cụm giới từ chỉ mục đích (In order to + Động từ nguyên thể).",
    stem: "The network engineering team disabled remote desktop access _______ prevent further malicious propagation.",
    choices: ["in order to", "as well as", "so that", "in case of"],
    answer: 0,
    explanation_vi: "Phía sau là động từ nguyên thể 'prevent' (ngăn chặn). Cụm 'in order to + V-bare' dùng để chỉ mục đích (để làm gì) -> chọn 'in order to'.",
    trap: "Bẫy 'so that' (cần đi với mệnh đề S + V, ví dụ: so that they could prevent) và 'in case of' (đi với cụm danh từ).",
    examTip: "Phân biệt chỉ mục đích: [in order to / so as to + V-bare] >< [so that / in order that + S + can/could/will + V].",
    tags: { part: "Part 5", category: "Grammar", topic: "Purpose Clause", difficulty: "Easy" },
    vocab: [
      { word: "propagation", ipa: "/ˌprɒp.əˈɡeɪ.ʃən/", pos: "n", meaning: "sự lan truyền, phát tán" },
      { word: "malicious", ipa: "/məˈlɪʃ.əs/", pos: "adj", meaning: "hiểm độc, có ác ý" }
    ]
  },
  {
    id: "c1-38",
    chapter: 1,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave comments on the clarity of the new incident reporting handbook.",
    dialogue_vi: "Dave đánh giá tài liệu hướng dẫn báo cáo sự cố an ninh mới.",
    situation_vi: "Chủ điểm: Tính từ so sánh hơn (Comparative Adjectives) với phó từ bổ trợ.",
    stem: "The revised incident management manual is considerably _______ than the previous version published last year.",
    choices: ["more comprehensive", "comprehensively", "comprehensiveness", "most comprehensive"],
    answer: 0,
    explanation_vi: "Có từ 'than' ở phía sau cho thấy đây là cấu trúc so sánh hơn. Tính từ dài 'comprehensive' đi với 'more'. 'Considerably' là phó từ chỉ mức độ nhấn mạnh cho so sánh hơn -> chọn 'more comprehensive'.",
    trap: "Bẫy dạng so sánh nhất 'most comprehensive' hoặc phó từ 'comprehensively'.",
    examTip: "Các phó từ chuyên dùng nhấn mạnh cho so sánh hơn trong TOEIC: much, far, significantly, considerably, substantially + [Hình thức so sánh hơn].",
    tags: { part: "Part 5", category: "Grammar", topic: "Comparison", difficulty: "Medium" },
    vocab: [
      { word: "considerably", ipa: "/kənˈsɪd.ər.ə.bli/", pos: "adv", meaning: "đáng kể, nhiều" },
      { word: "comprehensive", ipa: "/ˌkɒm.prɪˈhen.sɪv/", pos: "adj", meaning: "toàn diện, bao quát" }
    ]
  },
  {
    id: "c1-39",
    chapter: 1,
    part: 5,
    speaker: "Helen Kang (CISO)",
    dialogue_en: "Helen Kang specifies which employee group must attend the seminar.",
    dialogue_vi: "CISO Helen Kang nêu rõ đối tượng nhân viên đủ điều kiện tham dự hội thảo.",
    situation_vi: "Chủ điểm: Cấu trúc đi kèm giới từ (Eligible for + Danh từ).",
    stem: "Only analysts who have completed their probationary period are _______ for the advanced ethical hacking workshop.",
    choices: ["eligible", "capable", "reluctant", "probable"],
    answer: 0,
    explanation_vi: "Cấu trúc thông dụng: 'to be eligible for something' (đủ tư cách / đủ điều kiện để nhận hoặc tham gia cái gì) -> chọn 'eligible'.",
    trap: "Bẫy từ 'capable' (thường đi với giới từ 'of': capable of doing sth).",
    examTip: "Cụm tính từ + giới từ quen thuộc trong TOEIC: eligible for N / eligible to V (đủ điều kiện), capable of V-ing (có năng lực), responsible for (chịu trách nhiệm).",
    tags: { part: "Part 5", category: "Grammar", topic: "Prepositional Idioms", difficulty: "Medium" },
    vocab: [
      { word: "probationary", ipa: "/prəˈbeɪ.ʃən.ər.i/", pos: "adj", meaning: "thời gian thử việc" },
      { word: "eligible", ipa: "/ˈel.ɪ.dʒə.bəl/", pos: "adj", meaning: "đủ điều kiện, xứng đáng" }
    ]
  },
  {
    id: "c1-40",
    chapter: 1,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave advises on how to handle confidential customer audit findings.",
    dialogue_vi: "Dave lưu ý về tính bảo mật của báo cáo kiểm toán khách hàng.",
    situation_vi: "Chủ điểm: Đại từ phản thân (Reflexive Pronouns) dùng để nhấn mạnh.",
    stem: "The CISO _______ signed the emergency executive order authorizing server isolation.",
    choices: ["herself", "her", "she", "hers"],
    answer: 0,
    explanation_vi: "Câu đã có đầy đủ chủ ngữ 'The CISO' và động từ chính 'signed'. Chỗ trống đứng ngay sau chủ ngữ dùng để nhấn mạnh chính chủ thể đã tự tay thực hiện hành động -> chọn đại từ phản thân 'herself'.",
    trap: "Bẫy đại từ tân ngữ 'her' hoặc đại từ sở hữu 'hers'.",
    examTip: "Đại từ phản thân đứng ngay sau Chủ ngữ hoặc ở cuối câu đóng vai trò nhấn mạnh: 'S + [myself/himself/herself] + V' mang nghĩa 'chính ai đó tự làm việc gì'.",
    tags: { part: "Part 5", category: "Grammar", topic: "Pronouns", difficulty: "Easy" },
    vocab: [
      { word: "executive order", ipa: "/ɪɡˈzek.jə.tɪv ˈɔː.dər/", pos: "n", meaning: "lệnh điều hành khẩn cấp" },
      { word: "isolation", ipa: "/ˌaɪ.səˈleɪ.ʃən/", pos: "n", meaning: "sự cách ly cô lập mạng" }
    ]
  },
  {
    id: "c1-41",
    chapter: 1,
    part: 5,
    speaker: "Sarah (Forensics)",
    dialogue_en: "Sarah discusses the necessity of having redundant electrical generators.",
    dialogue_vi: "Sarah nói về tầm quan trọng của hệ thống phát điện dự phòng cho máy chủ.",
    situation_vi: "Chủ điểm: Từ vựng - Chọn danh từ phù hợp nghĩa trong kinh doanh & CNTT.",
    stem: "NovaBank established a comprehensive _______ plan to maintain data integrity during major power disruptions.",
    choices: ["contingency", "advertisement", "hesitation", "subscription"],
    answer: 0,
    explanation_vi: "Cụm danh từ 'contingency plan' là thuật ngữ quen thuộc chỉ 'kế hoạch dự phòng / phương án ứng phó biến cố khẩn cấp' -> chọn 'contingency'.",
    trap: "Các từ không ăn nhập ngữ cảnh kỹ thuật: 'advertisement' (quảng cáo), 'hesitation' (sự ngập ngừng), 'subscription' (đăng ký theo kỳ).",
    examTip: "Collocation kinh điển TOEIC Part 5 & 7: contingency plan (kế hoạch dự phòng), business continuity plan (kế hoạch duy trì kinh doanh liên tục).",
    tags: { part: "Part 5", category: "Vocabulary", topic: "Business Terms", difficulty: "Medium" },
    vocab: [
      { word: "contingency", ipa: "/kənˈtɪn.dʒən.si/", pos: "n", meaning: "kế hoạch dự phòng rủi ro" },
      { word: "disruption", ipa: "/dɪsˈrʌp.ʃən/", pos: "n", meaning: "sự gián đoạn hoạt động" }
    ]
  },
  {
    id: "c1-42",
    chapter: 1,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave orders the prompt notification of branch managers.",
    dialogue_vi: "Dave yêu cầu thông báo khẩn cho các giám đốc chi nhánh ngân hàng.",
    situation_vi: "Chủ điểm: Thể Giả định thức (Subjunctive Mood) với động từ 'mandate'.",
    stem: "Corporate policy mandates that each branch manager _______ the incident log at the beginning of each business day.",
    choices: ["review", "reviews", "reviewed", "reviewing"],
    answer: 0,
    explanation_vi: "Động từ 'mandates' (bắt buộc / yêu cầu) là động từ cầu khiến. Cấu trúc giả định thức: [S1 + mandate / demand / require / recommend + that + S2 + (should) + V-bare] -> Động từ theo sau luôn ở dạng nguyên thể không chia (V-bare), bất kể chủ ngữ là số ít -> chọn 'review'.",
    trap: "Bẫy chia động từ theo chủ ngữ ngôi thứ 3 số ít 'each branch manager' thành 'reviews' hoặc quá khứ 'reviewed'.",
    examTip: "Công thức giả định thức (Subjunctive Mood): S + [demand / require / request / recommend / insist / mandate] + that + S + [V nguyên thể không 'to'].",
    tags: { part: "Part 5", category: "Grammar", topic: "Subjunctive Mood", difficulty: "Hard" },
    vocab: [
      { word: "mandate", ipa: "/ˈmæn.deɪt/", pos: "v", meaning: "ra lệnh, bắt buộc thi hành" },
      { word: "incident log", ipa: "/ˈɪn.sɪ.dənt lɒɡ/", pos: "n", meaning: "nhật ký ghi nhận sự cố" }
    ]
  },

  // ==========================================
  // PART 6 (ĐOẠN VĂN ĐIỀN TỪ - 1 ĐOẠN 3 CHỖ TRỐNG)
  // ==========================================
  {
    id: "c1-43",
    chapter: 1,
    part: 6,
    speaker: "AEGIS AI (Security Bulletin)",
    dialogue_en: "Internal Security Advisory regarding upcoming multi-factor authentication enrollment.",
    dialogue_vi: "Bản tin An ninh Nội bộ về việc đăng ký bắt buộc xác thực đa yếu tố MFA.",
    situation_vi: "Điền từ vào chỗ trống [1] trong thông báo an ninh gửi toàn ngân hàng.",
    passage: "INTERNAL MEMORANDUM\nTO: NovaBank Regional Staff\nFROM: Office of the Chief Information Security Officer\nDATE: November 10, 2026\nSUBJECT: Mandatory Multi-Factor Authentication Upgrade\n\nIn accordance with updated financial sector security compliance guidelines, NovaBank will roll out an upgraded Multi-Factor Authentication (MFA) system on Friday evening. This new security protocol is designed to provide _______ [1] protection against unauthorized credential harvesting and phishing attacks. All branch personnel must complete the identity registration procedure _______ [2] November 14 at 5:00 PM. Failure to complete registration by the stated deadline will result in temporary suspension of your workstation login rights. _______ [3]. We appreciate your prompt cooperation in keeping our banking infrastructure secure.",
    stem: "Select the best answer for blank [1]:",
    choices: ["enhanced", "enhancing", "enhancement", "enhance"],
    answer: 0,
    explanation_vi: "Đứng trước danh từ 'protection' (sự bảo vệ) cần một tính từ bổ nghĩa mang nghĩa 'được nâng cao / được tăng cường' -> chọn phân từ đóng vai trò tính từ 'enhanced' (sự bảo vệ được tăng cường).",
    trap: "Bẫy danh từ 'enhancement' (tạo thành cụm danh từ ghép không chuẩn xác) hoặc động từ nguyên thể 'enhance'.",
    examTip: "Các tính từ dạng phân từ V-ed hay gặp: enhanced security (an ninh được tăng cường), revised policy (chính sách được sửa đổi), customized service (dịch vụ tùy biến).",
    tags: { part: "Part 6", category: "Grammar", topic: "Participle Adjective", difficulty: "Easy" },
    vocab: [
      { word: "enhanced", ipa: "/ɪnˈhɑːnst/", pos: "adj", meaning: "được tăng cường, cải tiến" },
      { word: "harvesting", ipa: "/ˈhɑː.vɪ.stɪŋ/", pos: "n", meaning: "hành vi thu thập lén lút" }
    ]
  },
  {
    id: "c1-44",
    chapter: 1,
    part: 6,
    speaker: "AEGIS AI (Security Bulletin)",
    dialogue_en: "(Continuing Part 6 Memorandum)",
    dialogue_vi: "(Tiếp tục Bản tin Part 6)",
    situation_vi: "Điền giới từ chỉ thời hạn chót trước một mốc thời gian cụ thể tại chỗ trống [2].",
    passage: "(Tham khảo văn bản thông báo ở trên)",
    stem: "Select the best answer for blank [2]:",
    choices: ["prior to", "during", "between", "toward"],
    answer: 0,
    explanation_vi: "Ý nghĩa câu: Tất cả nhân sự chi nhánh phải hoàn thành quy trình đăng ký danh tính TRƯỚC ngày 14 tháng 11 lúc 5:00 chiều. Cụm 'prior to' đồng nghĩa với 'before' (trước một mốc thời gian) -> chọn 'prior to'.",
    trap: "Bẫy 'between' (cần cấu trúc between A and B) hoặc 'during' (trong suốt khoảng thời gian, không chỉ hạn chót).",
    examTip: "Cụm giới từ chỉ thời gian rất hay xuất hiện trong TOEIC: prior to = before (trước khi), subsequent to = after (sau khi).",
    tags: { part: "Part 6", category: "Grammar", topic: "Prepositions", difficulty: "Medium" },
    vocab: [
      { word: "prior to", ipa: "/ˈpraɪ.ər tuː/", pos: "prep", meaning: "trước thời điểm nào đó" },
      { word: "suspension", ipa: "/səˈspen.ʃən/", pos: "n", meaning: "sự đình chỉ tạm thời" }
    ]
  },
  {
    id: "c1-45",
    chapter: 1,
    part: 6,
    speaker: "AEGIS AI (Security Bulletin)",
    dialogue_en: "Select the sentence that logically fits the paragraph at blank [3].",
    dialogue_vi: "Chọn câu văn có tính kết nối mạch lạc nhất tại chỗ trống [3].",
    situation_vi: "Điền cả câu văn phù hợp vào văn bản thông báo an ninh.",
    passage: "(Tham khảo văn bản thông báo ở trên)",
    stem: "Select the sentence that best fits blank [3]:",
    choices: [
      "Detailed step-by-step setup guides have been uploaded to the internal staff intranet.",
      "The annual company picnic has been postponed due to heavy rainfall.",
      "New office desks will be delivered to the branch early next month.",
      "Several customers expressed dissatisfaction with the new checking account fees."
    ],
    answer: 0,
    explanation_vi: "Câu trước nói về việc nhân viên phải hoàn thành đăng ký trước hạn chót. Câu (A) 'Detailed step-by-step setup guides have been uploaded...' (Tài liệu hướng dẫn cài đặt từng bước chi tiết đã được tải lên mạng nội bộ nhân viên) là câu hỗ trợ hoàn hảo giải thích cách nhân viên có thể thực hiện đăng ký.",
    trap: "Các phương án (B), (C), (D) lạc đề hoàn toàn (nói về dã ngoại picnic, bàn làm việc, hoặc phí tài khoản khách hàng).",
    examTip: "Dạng bài điền câu Part 6: Chú ý tính nhất quán của chủ đề văn bản và từ nối logic giữa câu trước và câu sau.",
    tags: { part: "Part 6", category: "Reading", topic: "Sentence Insertion", difficulty: "Medium" },
    vocab: [
      { word: "step-by-step", ipa: "/ˌstep.baɪˈstep/", pos: "adj", meaning: "từng bước một, chi tiết" },
      { word: "intranet", ipa: "/ˈɪn.trə.net/", pos: "n", meaning: "mạng máy tính nội bộ doanh nghiệp" }
    ]
  },

  // ==========================================
  // PART 7 (7 CÂU ĐỌC HIỂU: 1 ĐOẠN ĐƠN 4 CÂU + 1 ĐOẠN ĐƠN 3 CÂU)
  // ==========================================
  {
    id: "c1-46",
    chapter: 1,
    part: 7,
    speaker: "AEGIS AI (System Notice)",
    dialogue_en: "Security Policy Document: Bring Your Own Device (BYOD) Guidelines.",
    dialogue_vi: "Tài liệu Chính sách An ninh: Hướng dẫn Sử dụng Thiết bị Cá nhân (BYOD).",
    situation_vi: "02:00 - Bạn đọc bản quy chuẩn an ninh BYOD của NovaBank để trả lời câu hỏi 46 - 49.",
    passage: "NOVABANK INFORMATION SECURITY POLICY DOCUMENT\nPOLICY REF: POL-SEC-2026-08\nEFFECTIVE DATE: OCTOBER 1, 2026\nSUBJECT: MOBILE DEVICE & REMOTE WORK ACCESS PROTOCOL\n\n1. Purpose & Scope\nThis policy defines mandatory requirements for employees accessing NovaBank confidential records, customer accounts, and internal communications using personal smartphones, tablets, or laptops (BYOD). Compliance with this protocol is compulsory for all permanent personnel and temporary independent contractors.\n\n2. Mandatory Security Controls\nBefore any personal device is granted access to the NovaBank corporate VPN network, it must be inspected by an authorized IT Security representative. The device must have corporate Mobile Device Management (MDM) software installed. This application enforces six-digit alphanumeric passcode locking, enables full storage encryption, and allows the SOC to remotely erase corporate databases if the device is lost or reported stolen.\n\n3. Prohibited Activities\nEmployees are strictly prohibited from storing unencrypted customer banking data on personal cloud drives or external USB flash drives. Furthermore, jailbroken or rooted mobile operating systems are barred from connecting to bank services under any circumstances.\n\n4. Incident Reporting\nIf a registered mobile device is misplaced, compromised, or stolen, the owner must notify the NovaBank 24/7 Security Operations Center helpline within two hours of discovery.",
    stem: "What is the primary purpose of this policy document?",
    choices: [
      "To outline mandatory security rules for personal devices accessing corporate systems.",
      "To announce a discount program for employees purchasing new smartphones.",
      "To explain how branch accountants can file travel expense reimbursement forms.",
      "To solicit employee opinions regarding remote working schedule options."
    ],
    answer: 0,
    explanation_vi: "Đoạn 1 'Purpose & Scope' khẳng định rõ: 'This policy defines mandatory requirements for employees accessing NovaBank confidential records... using personal smartphones, tablets, or laptops (BYOD)' -> Mục đích chính là quy định các nguyên tắc an ninh bắt buộc đối với thiết bị cá nhân.",
    trap: "Bẫy mua sắm smartphone giảm giá ở (B) hoặc thanh toán công tác phí ở (C).",
    examTip: "Câu hỏi mục đích chính (Main Purpose) trong Part 7 luôn được trả lời ở đoạn văn mở đầu (Purpose / Objective).",
    tags: { part: "Part 7", category: "Reading", topic: "Gist / Purpose", difficulty: "Easy" },
    vocab: [
      { word: "compulsory", ipa: "/kəmˈpʌl.sər.i/", pos: "adj", meaning: "mang tính bắt buộc" },
      { word: "passcode", ipa: "/ˈpɑːs.kəʊd/", pos: "n", meaning: "mã khóa truy cập" }
    ]
  },
  {
    id: "c1-47",
    chapter: 1,
    part: 7,
    speaker: "AEGIS AI (System Notice)",
    dialogue_en: "(Continuing BYOD Policy Review)",
    dialogue_vi: "(Tiếp tục rà soát Chính sách BYOD)",
    situation_vi: "Tìm hiểu yêu cầu kỹ thuật bắt buộc trước khi kết nối mạng nội bộ.",
    passage: "(Tham khảo văn bản Chính sách BYOD ở câu c1-46)",
    stem: "What must be installed on personal devices before connecting to the corporate network?",
    choices: [
      "Mobile Device Management (MDM) monitoring software.",
      "Commercial graphic design editing applications.",
      "A high-speed peer-to-peer file sharing program.",
      "Third-party social networking messengers."
    ],
    answer: 0,
    explanation_vi: "Đoạn 2 chỉ rõ: 'The device must have corporate Mobile Device Management (MDM) software installed' -> Phải cài đặt phần mềm quản lý thiết bị di động (MDM).",
    trap: "Các loại phần mềm không liên quan như đồ họa (B), chia sẻ file torrent (C) hoặc mạng xã hội (D).",
    examTip: "Kỹ thuật scanning trong Part 7: Tìm kiếm cụm từ khóa 'must have... installed' trong bài để định vị câu trả lời nhanh chóng.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail", difficulty: "Easy" },
    vocab: [
      { word: "enforce", ipa: "/ɪnˈfɔːs/", pos: "v", meaning: "thực thi, bắt buộc tuân thủ" },
      { word: "erase", ipa: "/ɪˈreɪz/", pos: "v", meaning: "xóa sạch dữ liệu" }
    ]
  },
  {
    id: "c1-48",
    chapter: 1,
    part: 7,
    speaker: "AEGIS AI (System Notice)",
    dialogue_en: "(Continuing BYOD Policy Review)",
    dialogue_vi: "(Tiếp tục rà soát Chính sách BYOD)",
    situation_vi: "Xác định hành động bị nghiêm cấm theo chính sách ngân hàng.",
    passage: "(Tham khảo văn bản Chính sách BYOD ở câu c1-46)",
    stem: "According to the document, which activity is explicitly forbidden?",
    choices: [
      "Saving unencrypted bank customer data on personal cloud drives.",
      "Connecting laptops to office wireless internet access points.",
      "Carrying corporate mobile phones outside company headquarters.",
      "Updating operating systems to the latest security release."
    ],
    answer: 0,
    explanation_vi: "Mục 3 'Prohibited Activities' nêu rõ: 'Employees are strictly prohibited from storing unencrypted customer banking data on personal cloud drives...' -> Nghiêm cấm lưu trữ dữ liệu khách hàng chưa mã hóa lên dịch vụ đám mây cá nhân.",
    trap: "Các hoạt động bình thường hoặc được khuyến khích như cập nhật hệ điều hành (D) hay kết nối wifi (B).",
    examTip: "Chú ý các từ đồng nghĩa chỉ sự cấm đoán: prohibited = forbidden = barred = not permitted.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail / Negative", difficulty: "Medium" },
    vocab: [
      { word: "prohibited", ipa: "/prəˈhɪb.ɪ.tɪd/", pos: "adj", meaning: "bị cấm chỉ" },
      { word: "unencrypted", ipa: "/ʌn.ɪnˈkrɪp.tɪd/", pos: "adj", meaning: "chưa được mã hóa" }
    ]
  },
  {
    id: "c1-49",
    chapter: 1,
    part: 7,
    speaker: "AEGIS AI (System Notice)",
    dialogue_en: "(Continuing BYOD Policy Review)",
    dialogue_vi: "(Tiếp tục rà soát Chính sách BYOD)",
    situation_vi: "Xác định mốc thời gian quy định khi xảy ra mất mát thiết bị.",
    passage: "(Tham khảo văn bản Chính sách BYOD ở câu c1-46)",
    stem: "How soon must an employee report a stolen mobile device to the SOC?",
    choices: [
      "Within two hours of discovery.",
      "By the end of the current fiscal quarter.",
      "Within forty-eight business hours.",
      "Only after filing an official police report."
    ],
    answer: 0,
    explanation_vi: "Mục 4 'Incident Reporting' quy định: 'the owner must notify the NovaBank 24/7 Security Operations Center helpline within two hours of discovery' -> Trong vòng 2 giờ kể từ khi phát hiện.",
    trap: "Bẫy 48 giờ ở (C) hoặc chờ báo cảnh sát ở (D).",
    examTip: "Các câu hỏi về số liệu, thời gian (How long, How soon, How much) rất dễ scan bằng cách tìm số trong văn bản.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail", difficulty: "Easy" },
    vocab: [
      { word: "misplaced", ipa: "/ˌmɪsˈpleɪst/", pos: "adj", meaning: "bị thất lạc, để quên đâu mất" },
      { word: "discovery", ipa: "/dɪˈskʌv.ər.i/", pos: "n", meaning: "sự phát hiện" }
    ]
  },
  {
    id: "c1-50",
    chapter: 1,
    part: 7,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Technical Incident Log excerpt from the perimeter firewall.",
    dialogue_vi: "Trích đoạn Nhật ký Sự cố Kỹ thuật từ tường lửa vành đai.",
    situation_vi: "02:30 - Phân tích bảng báo cáo kỹ thuật tường lửa để trả lời các câu 50 - 52.",
    passage: "INCIDENT INVESTIGATION SUMMARY\nINVESTIGATOR: Dave Miller (SOC Lead Analyst)\nTARGET ASSET: NovaBank Perimeter Gateway 01\nTIMEFRAME: 00:15 AM - 01:45 AM, November 10\n\nEXECUTIVE OVERVIEW:\nBetween 00:15 AM and 01:10 AM, our automated Intrusion Detection System (IDS) recorded an abnormal surge in outbound HTTP requests originating from accounting workstation WS-ACC-402. The traffic pattern exhibited signs of automated domain generation algorithms (DGA), attempting to establish communication with an unknown command-and-control server located in Eastern Europe.\n\nACTIONS TAKEN:\n1. 01:12 AM: Host WS-ACC-402 was immediately disconnected from the internal local area network via remote port shutdown.\n2. 01:25 AM: Physical memory dump and hard drive forensic images were captured by forensic investigator Sarah Lin.\n3. 01:40 AM: The external destination IP addresses (185.220.101.5 and 185.220.101.6) were permanently blacklisted across all border routers.\n\nCONCLUSION & NEXT STEPS:\nNo database exfiltration has been identified at this stage. Workstation WS-ACC-402 will remain offline until a clean operating system reinstallation is finalized tomorrow morning.",
    stem: "What first alerted the security team to suspicious activity on workstation WS-ACC-402?",
    choices: [
      "An abnormal volume of outbound HTTP requests detected by the IDS.",
      "A telephone call from a concerned customer in Eastern Europe.",
      "The physical theft of the accountant's desktop hard drive.",
      "An explicit ransom note displayed on the workstation monitor."
    ],
    answer: 0,
    explanation_vi: "Đoạn 'EXECUTIVE OVERVIEW' nêu rõ: 'our automated Intrusion Detection System (IDS) recorded an abnormal surge in outbound HTTP requests originating from accounting workstation WS-ACC-402' -> Dấu hiệu đầu tiên là sự gia tăng bất thường của các yêu cầu HTTP gửi ra ngoài.",
    trap: "Bẫy cuộc gọi từ khách hàng ở (B) hoặc thư đòi tiền chuộc ở (D).",
    examTip: "Đọc kỹ phần mở đầu của báo cáo điều tra để nắm được nguyên nhân kích hoạt cảnh báo ban đầu.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail", difficulty: "Medium" },
    vocab: [
      { word: "surge", ipa: "/sɜːdʒ/", pos: "n", meaning: "sự dâng trào, tăng đột biến" },
      { word: "originating", ipa: "/əˈrɪdʒ.ən.eɪ.tɪŋ/", pos: "adj", meaning: "bắt nguồn từ" }
    ]
  },
  {
    id: "c1-51",
    chapter: 1,
    part: 7,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "(Continuing Incident Log Review)",
    dialogue_vi: "(Tiếp tục rà soát Nhật ký Sự cố)",
    situation_vi: "Tìm hiểu nhiệm vụ của chuyên gia pháp y Sarah Lin trong báo cáo.",
    passage: "(Tham khảo báo cáo kỹ thuật ở câu c1-50)",
    stem: "What task was performed by Sarah Lin at 01:25 AM?",
    choices: [
      "Acquiring forensic memory and disk images from the infected computer.",
      "Purchasing replacement hardware components from an electronics retailer.",
      "Submitting an insurance claim for damaged server infrastructure.",
      "Writing a press statement for the NovaBank public relations team."
    ],
    answer: 0,
    explanation_vi: "Mục 2 trong 'ACTIONS TAKEN' ghi nhận: '01:25 AM: Physical memory dump and hard drive forensic images were captured by forensic investigator Sarah Lin' -> Thu thập ảnh chụp bộ nhớ và đĩa cứng phục vụ điều tra pháp y.",
    trap: "Các phương án không có trong văn bản như mua phần cứng mới (B) hay bồi thường bảo hiểm (C).",
    examTip: "Tìm mốc thời gian 01:25 AM trong bài để đối chiếu hành động chính xác của nhân vật.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail", difficulty: "Easy" },
    vocab: [
      { word: "forensic image", ipa: "/fəˈren.zɪk ˈɪm.ɪdʒ/", pos: "n", meaning: "ảnh sao chép toàn vẹn phục vụ pháp y số" },
      { word: "dump", ipa: "/dʌmp/", pos: "n", meaning: "bản trích xuất bộ nhớ ram" }
    ]
  },
  {
    id: "c1-52",
    chapter: 1,
    part: 7,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "(Continuing Incident Log Review)",
    dialogue_vi: "(Tiếp tục rà soát Nhật ký Sự cố)",
    situation_vi: "Xác định tình trạng hiện tại của máy trạm kế toán.",
    passage: "(Tham khảo báo cáo kỹ thuật ở câu c1-50)",
    stem: "What will happen to workstation WS-ACC-402 next?",
    choices: [
      "It will remain disconnected until its operating system is completely reinstalled.",
      "It will be donated to a local educational charitable organization.",
      "It will be upgraded to function as the primary bank domain controller.",
      "It will be sold at an internal employee equipment auction."
    ],
    answer: 0,
    explanation_vi: "Phần 'CONCLUSION & NEXT STEPS' khẳng định: 'Workstation WS-ACC-402 will remain offline until a clean operating system reinstallation is finalized tomorrow morning' -> Tiếp tục cách ly cho đến khi cài lại hệ điều hành sạch.",
    trap: "Bẫy quyên góp từ thiện (B) hoặc đem đấu giá (D).",
    examTip: "Câu hỏi 'What will happen next' nằm ở phần kết luận hoặc các bước tiếp theo (Next Steps / Future Action).",
    tags: { part: "Part 7", category: "Reading", topic: "Inference / Next Step", difficulty: "Medium" },
    vocab: [
      { word: "reinstallation", ipa: "/ˌriː.ɪn.stəˈleɪ.ʃən/", pos: "n", meaning: "việc cài đặt lại hệ thống" },
      { word: "offline", ipa: "/ˌɒfˈlaɪn/", pos: "adj", meaning: "ngắt kết nối mạng" }
    ]
  }
];
