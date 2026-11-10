/**
 * CHAPTER 1 QUESTIONS (24 câu hỏi hoàn chỉnh)
 * Bối cảnh: Đêm trực đầu tiên tại SOC NovaBank, Báo động Phishing & Tường lửa
 */
module.exports = [
  // --- Tình huống 1: Part 5 - Nhận ca trực & Xác thực quyền truy cập ---
  {
    id: "c1-01",
    chapter: 1,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Welcome to your first night shift at NovaBank SOC. Before touching the terminal, make sure your security credentials are fully verified.",
    dialogue_vi: "Chào mừng bạn đến với ca trực đêm đầu tiên tại SOC NovaBank. Trước khi chạm vào thiết bị đầu cuối, hãy chắc chắn thông tin đăng nhập của bạn đã được xác thực.",
    situation_vi: "00:00 - Bạn ngồi vào bàn trực SOC. Trưởng ca Dave yêu cầu bạn kiểm tra quyền truy cập hệ thống giám sát SIEM.",
    stem: "All SOC analysts must authenticate _______ identities before accessing NovaBank's production servers.",
    choices: ["their", "theirs", "them", "they"],
    answer: 0,
    explanation_vi: "Đứng trước danh từ 'identities' (danh tính) cần một tính từ sở hữu (possessive adjective) để bổ nghĩa -> chọn 'their' (của họ).",
    trap: "Bẫy đại từ sở hữu 'theirs' (không đứng trước danh từ) và đại từ tân ngữ 'them'.",
    examTip: "Công thức vàng TOEIC: [Tính từ sở hữu + Danh từ]. Trước danh từ luôn là tính từ sở hữu (their/his/her/its/our).",
    tags: { part: "Part 5", category: "Grammar", topic: "Authentication", difficulty: "Easy" },
    vocab: [
      { word: "authenticate", ipa: "/ɔːˈθen.tɪ.keɪt/", pos: "v", meaning: "xác thực danh tính" },
      { word: "identity", ipa: "/aɪˈden.tə.ti/", pos: "n", meaning: "danh tính" }
    ]
  },

  // --- Tình huống 2: Part 2 - Nghe Q&A qua Web Speech API ---
  {
    id: "c1-02",
    chapter: 1,
    part: 2,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave asks through the SOC intercom headset about the network firewall report.",
    dialogue_vi: "Dave hỏi qua tai nghe bộ đàm SOC về báo cáo tường lửa mạng.",
    situation_vi: "00:15 - Dave nhấn nút bộ đàm nội bộ hỏi bạn tiến độ rà soát tường lửa.",
    stem: "When will the firewall configuration report be finalized?",
    audioText: "When will the firewall configuration report be finalized?",
    choices: [
      "By the end of this shift at 6:00 AM.",
      "Because the server wall needs maintenance.",
      "Yes, it was very final."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi bắt đầu bằng 'When' (Khi nào) hỏi mốc thời gian -> (A) 'By the end of this shift at 6:00 AM' (Trước khi kết thúc ca trực lúc 6h sáng) là câu trả lời trực tiếp chính xác.",
    trap: "Bẫy lặp âm / lặp từ: (B) lặp từ 'wall' từ 'firewall', (C) lặp từ 'final' và bẫy Yes/No cho câu hỏi Wh-.",
    examTip: "Bẫy kinh điển Part 2: Câu hỏi Wh- (Who, When, Where, Why, What) KHÔNG BAO GIỜ chấp nhận câu trả lời bắt đầu bằng Yes/No.",
    tags: { part: "Part 2", category: "Listening", topic: "Firewall", difficulty: "Medium" },
    vocab: [
      { word: "configuration", ipa: "/kənˌfɪɡ.əˈreɪ.ʃən/", pos: "n", meaning: "cấu hình hệ thống" },
      { word: "finalize", ipa: "/ˈfaɪ.nəl.aɪz/", pos: "v", meaning: "hoàn thiện, chốt xong" }
    ]
  },

  // --- Tình huống 3: Part 5 - Phát hiện email nghi vấn (Thì động từ) ---
  {
    id: "c1-03",
    chapter: 1,
    part: 5,
    speaker: "Sarah (Threat Hunter)",
    dialogue_en: "Look at this inbound mail log. An employee in finance has just received an urgent wire transfer request.",
    dialogue_vi: "Nhìn vào nhật ký thư đến này xem. Một nhân viên phòng tài chính vừa nhận được yêu cầu chuyển tiền khẩn cấp.",
    situation_vi: "00:30 - Hệ thống chống thư rác phát hiện một tập tin đính kèm bất thường gửi đến kế toán trưởng.",
    stem: "The automated security filter _______ over two hundred fraudulent emails since midnight.",
    choices: ["has intercepted", "will intercept", "intercepting", "intercepts"],
    answer: 0,
    explanation_vi: "Cụm trạng từ thời gian 'since midnight' (kể từ lúc nửa đêm đến nay) là dấu hiệu nhận biết đặc trưng của thì Hiện tại hoàn thành (Present Perfect) -> chọn 'has intercepted'.",
    trap: "Bẫy thì tương lai 'will intercept' hoặc hiện tại đơn 'intercepts' (không phù hợp với mốc 'since + thời điểm').",
    examTip: "Dấu hiệu thì Hiện tại Hoàn thành trong TOEIC: 'since + mốc thời gian', 'for + khoảng thời gian', 'over the past/last...'.",
    tags: { part: "Part 5", category: "Grammar", topic: "Tenses", difficulty: "Medium" },
    vocab: [
      { word: "intercept", ipa: "/ˌɪn.təˈsept/", pos: "v", meaning: "đánh chặn, chặn bắt" },
      { word: "fraudulent", ipa: "/ˈfrɔː.dʒə.lənt/", pos: "adj", meaning: "gian lận, lừa đảo" }
    ]
  },

  // --- Tình huống 4: Part 6 - Đoạn văn Email khẩn cấp (4 câu: c1-04 đến c1-07) ---
  {
    id: "c1-04",
    chapter: 1,
    part: 6,
    speaker: "AEGIS AI (Security Alert)",
    dialogue_en: "URGENT SECURITY BULLETIN broadcasted across NovaBank internal network.",
    dialogue_vi: "BẢN TIN AN NINH KHẨN CẤP phát đi trên toàn mạng nội bộ NovaBank.",
    situation_vi: "00:45 - Trưởng phòng bảo mật phát đi thông báo khẩn cấp cho toàn thể nhân viên ngân hàng về chiến dịch Spear-Phishing.",
    passage: "SECURITY ALERT MEMORANDUM\nTO: All NovaBank Employees\nFROM: SOC Incident Response Team\nDATE: November 10, 00:45 AM\nSUBJECT: Active Spear-Phishing Campaign Targeting Corporate Mailboxes\n\nPlease be advised that our perimeter firewalls detected an aggressive phishing campaign targeting NovaBank personnel. The malicious emails deceptively claim that employee annual bonus statements are _______ [1] for download. Recipients are instructed to click a hyperlink and provide their network login credentials. You must _______ [2] avoid opening any attachments from unfamiliar senders. The IT Security Operations Center is _______ [3] monitoring internal traffic to block external command-and-control IP addresses. _______ [4]. If you have already clicked the link, contact the SOC helpline immediately at extension 5500.",
    stem: "Select the best answer for blank [1]:",
    choices: ["ready", "readiness", "readily", "readying"],
    answer: 0,
    explanation_vi: "Sau động từ to-be 'are' cần một tính từ đóng vai trò vị ngữ bổ nghĩa cho chủ ngữ 'annual bonus statements' -> chọn tính từ 'ready' (sẵn sàng để tải về).",
    trap: "Bẫy danh từ 'readiness' hoặc phó từ 'readily'. Cấu trúc 'be ready for + N' rất thông dụng trong đề TOEIC.",
    examTip: "Cấu trúc: S + to be + Adj + for N/to V.",
    tags: { part: "Part 6", category: "Grammar", topic: "Word Form", difficulty: "Easy" },
    vocab: [
      { word: "deceptively", ipa: "/dɪˈsep.tɪv.li/", pos: "adv", meaning: "một cách lừa dối, gây hiểu lầm" },
      { word: "recipient", ipa: "/rɪˈsɪp.i.ənt/", pos: "n", meaning: "người nhận thư" }
    ]
  },
  {
    id: "c1-05",
    chapter: 1,
    part: 6,
    speaker: "AEGIS AI (Security Alert)",
    dialogue_en: "Continuing review of blank [2] in the Security Alert Memorandum.",
    dialogue_vi: "Tiếp tục xem xét chỗ trống [2] trong Bản tin cảnh báo an ninh.",
    situation_vi: "Điền từ bổ nghĩa cho động từ hành động 'avoid' (tránh mở tệp đính kèm).",
    passage: "(Tham khảo đoạn văn thông báo an ninh ở trên)",
    stem: "Select the best answer for blank [2]:",
    choices: ["strictly", "strictness", "strict", "stricter"],
    answer: 0,
    explanation_vi: "Đứng trước động từ 'avoid' (tránh) cần một phó từ (adverb) đuôi -ly để bổ nghĩa cho hành động -> chọn 'strictly' (nghiêm ngặt tránh, tuyệt đối tránh).",
    trap: "Bẫy tính từ 'strict' đi kèm động từ khuyết thiếu 'must'. Ở đây 'strictly' bổ nghĩa cho động từ chính 'avoid'.",
    examTip: "Quy tắc vị trí phó từ: Trợ động từ / Modal verb + [ADV] + Động từ chính (must strictly avoid).",
    tags: { part: "Part 6", category: "Grammar", topic: "Adverb", difficulty: "Medium" },
    vocab: [
      { word: "strictly", ipa: "/ˈstrɪkt.li/", pos: "adv", meaning: "nghiêm ngặt, tuyệt đối" },
      { word: "avoid", ipa: "/əˈvɔɪd/", pos: "v", meaning: "tránh né" }
    ]
  },
  {
    id: "c1-06",
    chapter: 1,
    part: 6,
    speaker: "AEGIS AI (Security Alert)",
    dialogue_en: "Continuing review of blank [3] in the Security Alert Memorandum.",
    dialogue_vi: "Tiếp tục xem xét chỗ trống [3] trong Bản tin cảnh báo an ninh.",
    situation_vi: "Điền trạng từ thể hiện trạng thái hoạt động đang diễn ra của trung tâm SOC.",
    passage: "(Tham khảo đoạn văn thông báo an ninh ở trên)",
    stem: "Select the best answer for blank [3]:",
    choices: ["actively", "activity", "action", "acted"],
    answer: 0,
    explanation_vi: "Cấu trúc thì hiện tại tiếp diễn: 'is _______ monitoring' -> Vị trí giữa to be và V-ing cần một phó từ (adverb) -> chọn 'actively' (đang chủ động/tích cực giám sát).",
    trap: "Bẫy danh từ 'activity' xen giữa thì tiếp diễn.",
    examTip: "Công thức thì tiếp diễn có phó từ: [to be + ADV + V-ing] (is actively monitoring).",
    tags: { part: "Part 6", category: "Grammar", topic: "Adverb", difficulty: "Medium" },
    vocab: [
      { word: "actively", ipa: "/ˈæk.tɪv.li/", pos: "adv", meaning: "một cách chủ động, tích cực" },
      { word: "monitoring", ipa: "/ˈmɒn.ɪ.tər.ɪŋ/", pos: "n", meaning: "hoạt động giám sát" }
    ]
  },
  {
    id: "c1-07",
    chapter: 1,
    part: 6,
    speaker: "AEGIS AI (Security Alert)",
    dialogue_en: "Select the sentence that best fits the contextual flow for blank [4].",
    dialogue_vi: "Chọn câu văn phù hợp nhất với mạch văn tại chỗ trống [4].",
    situation_vi: "Chọn câu bổ trợ thích hợp vào văn bản thông báo để hướng dẫn nhân viên.",
    passage: "(Tham khảo đoạn văn thông báo an ninh ở trên)",
    stem: "Select the best sentence to fill blank [4]:",
    choices: [
      "Network engineers have already isolated three compromised email accounts.",
      "The corporate cafeteria will serve lunch at twelve o'clock tomorrow.",
      "All overseas flight bookings must be authorized by travel managers.",
      "New office furniture will be delivered to the reception lobby on Friday."
    ],
    answer: 0,
    explanation_vi: "Câu (A) 'Network engineers have already isolated three compromised email accounts' (Các kỹ sư mạng đã cách ly xong 3 tài khoản email bị xâm phạm) liên kết chặt chẽ và liền mạch nhất với ngữ cảnh xử lý sự cố an ninh.",
    trap: "Các phương án B, C, D hoàn toàn lạc đề (về căng-tin, đặt vé máy bay, bàn ghế văn phòng).",
    examTip: "Dạng câu điền câu vào đoạn văn Part 6: Hãy tìm từ khóa đồng nghĩa (isolated, compromised email accounts) kết nối với chủ đề an ninh mạng của bài đọc.",
    tags: { part: "Part 6", category: "Reading", topic: "Context Flow", difficulty: "Hard" },
    vocab: [
      { word: "isolate", ipa: "/ˈaɪ.sə.leɪt/", pos: "v", meaning: "cách ly, cô lập" },
      { word: "compromise", ipa: "/ˈkɒm.prə.maɪz/", pos: "v", meaning: "làm lộ, làm tổn hại an toàn" }
    ]
  },

  // --- Tình huống 5: Part 2 - Nghe Q&A: Kiểm tra địa chỉ IP nghi vấn ---
  {
    id: "c1-08",
    chapter: 1,
    part: 2,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave calls out across the room about the suspicious IP address.",
    dialogue_vi: "Dave gọi to từ phía góc phòng về địa chỉ IP đáng ngờ.",
    situation_vi: "01:10 - Dave hỏi ai chịu trách nhiệm phân tích danh sách IP đen gửi đến từ máy chủ nước ngoài.",
    stem: "Who is responsible for analyzing the outbound connection logs?",
    audioText: "Who is responsible for analyzing the outbound connection logs?",
    choices: [
      "Sarah from the threat hunting team is handling that.",
      "Yes, the connection is very stable.",
      "To connect the printer cable."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi bắt đầu bằng 'Who' (Ai chịu trách nhiệm) -> Đáp án (A) chỉ rõ người thực hiện: 'Sarah from the threat hunting team is handling that'.",
    trap: "Bẫy Yes/No cho câu hỏi 'Who' (B), và bẫy trả lời mục đích 'To + V' (C).",
    examTip: "Bẫy Part 2: Câu hỏi người 'Who is in charge / Who is responsible' thường có câu trả lời nhắc đến tên riêng hoặc phòng ban chuyên trách.",
    tags: { part: "Part 2", category: "Listening", topic: "Responsibility", difficulty: "Easy" },
    vocab: [
      { word: "responsible", ipa: "/rɪˈspɒn.sə.bəl/", pos: "adj", meaning: "chịu trách nhiệm" },
      { word: "outbound", ipa: "/ˈaʊt.baʊnd/", pos: "adj", meaning: "kết nối gửi ra ngoài" }
    ]
  },

  // --- Tình huống 6: Part 3 - Nghe hội thoại SOC (3 câu: c1-09 đến c1-11) ---
  {
    id: "c1-09",
    chapter: 1,
    part: 3,
    speaker: "Dave & Sarah (SOC Conversation)",
    dialogue_en: "[Dave]: Sarah, did you notice the bandwidth anomaly on port 443?\n[Sarah]: Yes, Dave. A workstation in accounting attempted to send 5 gigabytes of encrypted files to an external IP in Eastern Europe.\n[Dave]: That looks like data exfiltration. Disconnect that machine from the local network right now before it infects other subnets.\n[Sarah]: I'm on it. I'll also notify the Chief Information Security Officer immediately.",
    dialogue_vi: "[Dave]: Sarah, cô có thấy sự bất thường về băng thông trên cổng 443 không?\n[Sarah]: Có chứ Dave. Một máy trạm ở phòng kế toán vừa cố gửi 5 GB tệp mã hóa ra một IP nước ngoài ở Đông Âu.\n[Dave]: Trông giống như hành vi rút trích dữ liệu ra ngoài rồi. Ngắt kết nối máy đó khỏi mạng nội bộ ngay lập tức trước khi nó lây sang các phân mạng khác.\n[Sarah]: Tôi làm ngay đây. Tôi cũng sẽ báo cáo Giám đốc CISO ngay lập tức.",
    situation_vi: "01:30 - Nghe cuộc đối thoại khẩn giữa Dave và Sarah về nguy cơ rò rỉ dữ liệu kế toán.",
    stem: "What problem are the speakers discussing?",
    audioText: "Dave: Sarah, did you notice the bandwidth anomaly on port 443? Sarah: Yes, Dave. A workstation in accounting attempted to send 5 gigabytes of encrypted files to an external IP in Eastern Europe. Dave: That looks like data exfiltration. Disconnect that machine from the local network right now before it infects other subnets. Sarah: I'm on it. I'll also notify the Chief Information Security Officer immediately.",
    choices: [
      "Suspicious data transmission from an accounting computer",
      "A scheduled power outage in the server room",
      "The purchase of new desktop computers for interns",
      "A delay in employee monthly payroll processing"
    ],
    answer: 0,
    explanation_vi: "Sarah báo cáo: 'A workstation in accounting attempted to send 5 gigabytes of encrypted files to an external IP' -> Hành vi truyền dữ liệu đáng ngờ từ máy tính kế toán.",
    trap: "Bẫy từ 'payroll' do có từ 'accounting', bẫy mất điện và mua sắm máy tính mới.",
    examTip: "Câu hỏi đầu tiên của Part 3 thường hỏi về chủ đề / vấn đề chính (topic/problem). Hãy chú ý lắng nghe ngay 2 lượt lời đầu tiên.",
    tags: { part: "Part 3", category: "Listening", topic: "Exfiltration", difficulty: "Medium" },
    vocab: [
      { word: "anomaly", ipa: "/əˈnɒm.ə.li/", pos: "n", meaning: "sự bất thường" },
      { word: "exfiltration", ipa: "/ˌeks.fɪlˈtreɪ.ʃən/", pos: "n", meaning: "sự rút trích dữ liệu bất hợp pháp" }
    ]
  },
  {
    id: "c1-10",
    chapter: 1,
    part: 3,
    speaker: "Dave & Sarah (SOC Conversation)",
    dialogue_en: "Reviewing Dave's instruction in the conversation.",
    dialogue_vi: "Xem lại chỉ đạo của Dave trong đoạn đối thoại.",
    situation_vi: "Câu hỏi 2 của bài nghe Part 3: Hành động mà Dave chỉ đạo.",
    stem: "What action does the man instruct the woman to take immediately?",
    audioText: "What action does the man instruct the woman to take immediately?",
    choices: [
      "Disconnect the infected machine from the network",
      "Reboot the corporate email server",
      "Draft a press release for external news reporters",
      "Cancel all scheduled staff leave requests"
    ],
    answer: 0,
    explanation_vi: "Dave nói dứt khoát: 'Disconnect that machine from the local network right now' -> Ngắt kết nối máy bị nhiễm khỏi mạng.",
    trap: "Bẫy khởi động lại server email hoặc phát thông cáo báo chí (quá sớm khi chưa kiểm soát sự cố).",
    examTip: "Khi nghe thấy các từ mệnh lệnh như 'Disconnect', 'Send', 'Contact', 'Review' - đó chính là đáp án cho câu hỏi 'What does the man suggest / instruct'.",
    tags: { part: "Part 3", category: "Listening", topic: "Incident Action", difficulty: "Medium" },
    vocab: [
      { word: "disconnect", ipa: "/ˌdɪs.kəˈnekt/", pos: "v", meaning: "ngắt kết nối" },
      { word: "subnet", ipa: "/ˈsʌb.net/", pos: "n", meaning: "phân mạng con" }
    ]
  },
  {
    id: "c1-11",
    chapter: 1,
    part: 3,
    speaker: "Dave & Sarah (SOC Conversation)",
    dialogue_en: "Reviewing Sarah's next planned task.",
    dialogue_vi: "Xem lại bước tiếp theo Sarah sẽ làm.",
    situation_vi: "Câu hỏi 3 của bài nghe Part 3: Sarah sẽ làm gì tiếp theo?",
    stem: "Who will the woman contact next?",
    audioText: "Who will the woman contact next?",
    choices: [
      "The Chief Information Security Officer",
      "The external software hardware vendor",
      "The bank's customer support hotline",
      "The local municipal police department"
    ],
    answer: 0,
    explanation_vi: "Sarah nói ở câu cuối cùng: 'I'll also notify the Chief Information Security Officer immediately' -> Chọn CISO.",
    trap: "Bẫy các bên liên quan khác như nhà cung cấp phần cứng hay cảnh sát.",
    examTip: "Câu hỏi cuối cùng của Part 3 thường là: 'What will the speaker do next?' -> Đáp án luôn nằm ở 1-2 câu nói cuối cùng của đoạn hội thoại.",
    tags: { part: "Part 3", category: "Listening", topic: "Reporting", difficulty: "Easy" },
    vocab: [
      { word: "notify", ipa: "/ˈnəʊ.tɪ.faɪ/", pos: "v", meaning: "thông báo, báo cáo" },
      { word: "officer", ipa: "/ˈɒf.ɪ.sər/", pos: "n", meaning: "sĩ quan, giám đốc chức năng" }
    ]
  },

  // --- Tình huống 7: Part 5 - Cấu hình luật tường lửa (Giới từ / Liên từ) ---
  {
    id: "c1-12",
    chapter: 1,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Now configure the emergency rule. No packet should leave the bank without deep inspection.",
    dialogue_vi: "Bây giờ hãy cấu hình luật khẩn cấp. Không gói tin nào được phép rời ngân hàng mà không qua kiểm tra sâu.",
    situation_vi: "01:50 - Bạn cần thêm quy tắc chặn cổng mạng khẩn cấp trên bảng điều khiển Firewall.",
    stem: "_______ discovering the abnormal traffic spike, the security team immediately blocked the suspicious IP address.",
    choices: ["Upon", "Despite", "Although", "Whereas"],
    answer: 0,
    explanation_vi: "Cấu trúc 'Upon + V-ing' có nghĩa là 'Ngay khi / Ngay sau khi làm gì' -> 'Upon discovering the abnormal traffic spike...' (Ngay khi phát hiện lượng truy cập tăng vọt bất thường, đội bảo mật lập tức chặn IP nghi vấn).",
    trap: "Bẫy liên từ chỉ sự tương phản 'Despite' (Mặc dù), 'Although' (cần đi với mệnh đề S+V), 'Whereas' (trong khi). Ngữ cảnh ở đây là hành động phản ứng nối tiếp nhau về thời gian.",
    examTip: "Cụm cực hay thi TOEIC: 'Upon + V-ing' = 'As soon as + S + V' (Ngay sau khi làm gì thì làm gì tiếp theo).",
    tags: { part: "Part 5", category: "Grammar", topic: "Prepositions", difficulty: "Hard" },
    vocab: [
      { word: "spike", ipa: "/spaɪk/", pos: "n", meaning: "sự tăng vọt đột biến" },
      { word: "suspicious", ipa: "/səˈspɪʃ.əs/", pos: "adj", meaning: "đáng ngờ, khả nghi" }
    ]
  },

  // --- Tình huống 8: Part 7 - Đọc hiểu Thông báo an ninh từ CISO (4 câu: c1-13 đến c1-16) ---
  {
    id: "c1-13",
    chapter: 1,
    part: 7,
    speaker: "Dr. Helen Kang (CISO)",
    dialogue_en: "MEMORANDUM FROM DR. HELEN KANG - CHIEF INFORMATION SECURITY OFFICER",
    dialogue_vi: "BẢN GHI NHỚ TỪ TIẾN SĨ HELEN KANG - GIÁM ĐỐC AN TOÀN THÔNG TIN",
    situation_vi: "02:15 - CISO gửi chỉ thị khẩn cấp về việc thắt chặt chính sách mật khẩu và báo cáo rủi ro tài chính.",
    passage: "NOVABANK SECURITY BULLETIN: MANDATORY AUTHENTICATION HARDENING\nIssued by: Dr. Helen Kang, CISO\nTarget Audience: All Staff in Financial Processing & Core Banking\n\n1. Purpose and Overview\nIn response to heightened cyber threat levels observed over the past 48 hours, NovaBank is accelerating the enforcement of its Multi-Factor Authentication (MFA) policy. Attackers have been utilizing sophisticated credential-stuffing attacks to compromise staff accounts.\n\n2. Mandatory Password Reset\nAll personnel holding administrative or financial authorization privileges must reset their enterprise passwords by 08:00 AM this morning. Passwords must be at least sixteen characters in length and include uppercase letters, numbers, and special symbols. Reusing any of your previous five passwords is strictly prohibited.\n\n3. Hardware Token Requirement\nEmployees processing wire transfers exceeding $50,000 must now confirm each transaction using their physical RSA hardware security token. Digital SMS verification codes will no longer be considered adequate for high-value transactions.\n\n4. Reporting Incidents\nIf your screen displays unusual pop-up windows or if your password fails to unlock your workstation, report the event directly to the SOC Emergency Hotline at Ext. 5500 within fifteen minutes.",
    stem: "What is the primary objective of the security bulletin?",
    choices: [
      "To enforce stricter identity authentication rules across the bank",
      "To announce the annual schedule of corporate holidays",
      "To introduce a new retirement benefits plan for managers",
      "To solicit feedback on the quality of office cafeteria meals"
    ],
    answer: 0,
    explanation_vi: "Mục 1 nêu rõ mục đích: 'NovaBank is accelerating the enforcement of its Multi-Factor Authentication (MFA) policy' -> Tăng cường và áp dụng các quy định xác thực danh tính nghiêm ngặt hơn.",
    trap: "Các phương án B, C, D hoàn toàn không liên quan đến bảo mật (nghỉ lễ, hưu trí, căng-tin).",
    examTip: "Câu hỏi mục đích (primary objective / purpose) của bài đọc Part 7: Hãy đọc kỹ tiêu đề và đoạn văn mở đầu số 1 (Purpose and Overview).",
    tags: { part: "Part 7", category: "Reading", topic: "Main Idea", difficulty: "Easy" },
    vocab: [
      { word: "enforcement", ipa: "/ɪnˈfɔːs.mənt/", pos: "n", meaning: "sự thực thi, sự bắt buộc áp dụng" },
      { word: "credential", ipa: "/krɪˈden.ʃəl/", pos: "n", meaning: "thông tin xác thực đăng nhập" }
    ]
  },
  {
    id: "c1-14",
    chapter: 1,
    part: 7,
    speaker: "Dr. Helen Kang (CISO)",
    dialogue_en: "Continuing review of CISO Security Bulletin details.",
    dialogue_vi: "Tiếp tục xem chi tiết Bản tin an ninh của CISO.",
    situation_vi: "Câu hỏi 2 bài đọc Part 7: Thời hạn đặt lại mật khẩu của nhân viên.",
    passage: "(Tham khảo văn bản NOVABANK SECURITY BULLETIN ở trên)",
    stem: "By what time must eligible employees complete their password reset?",
    choices: [
      "By 8:00 AM this morning",
      "By midnight on Friday",
      "Within 48 hours of notification",
      "Before the end of next month"
    ],
    answer: 0,
    explanation_vi: "Mục 2 ghi rõ: 'must reset their enterprise passwords by 08:00 AM this morning' -> Trước 8 giờ sáng nay.",
    trap: "Bẫy con số 48 hours xuất hiện ở mục 1 (thời gian ghi nhận mối đe dọa gia tăng), không phải thời hạn đổi mật khẩu.",
    examTip: "Bẫy thông tin nhiễu trong Part 7: Luôn đối chiếu đúng câu hỏi (By what time must reset password) với đúng đoạn chứa thông tin đó (Mục 2).",
    tags: { part: "Part 7", category: "Reading", topic: "Detail", difficulty: "Easy" },
    vocab: [
      { word: "prohibit", ipa: "/prəˈhɪb.ɪt/", pos: "v", meaning: "nghiêm cấm" },
      { word: "eligible", ipa: "/ˈel.ɪ.dʒə.bəl/", pos: "adj", meaning: "đủ điều kiện, thuộc diện áp dụng" }
    ]
  },
  {
    id: "c1-15",
    chapter: 1,
    part: 7,
    speaker: "Dr. Helen Kang (CISO)",
    dialogue_en: "Analyzing high-value transaction policy.",
    dialogue_vi: "Phân tích quy định giao dịch giá trị cao.",
    situation_vi: "Câu hỏi 3 bài đọc Part 7: Yêu cầu bắt buộc đối với giao dịch chuyển tiền trên $50,000.",
    passage: "(Tham khảo văn bản NOVABANK SECURITY BULLETIN ở trên)",
    stem: "What is required for wire transfers exceeding $50,000?",
    choices: [
      "Confirmation using a physical hardware security token",
      "Submission of a written notarized bank letter",
      "Approval from two external government auditors",
      "Verification solely via mobile phone SMS messages"
    ],
    answer: 0,
    explanation_vi: "Mục 3 ghi rõ: 'Employees processing wire transfers exceeding $50,000 must now confirm each transaction using their physical RSA hardware security token'.",
    trap: "Bẫy phương án D: Văn bản nêu rõ 'SMS verification codes will NO LONGER be considered adequate', nên chọn SMS là sai hoàn toàn.",
    examTip: "Để ý các từ phủ định hoặc thay đổi: 'no longer' (không còn nữa) thường là điểm thi bẫy của người ra đề TOEIC.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail Negative", difficulty: "Medium" },
    vocab: [
      { word: "adequate", ipa: "/ˈæd.ə.kwət/", pos: "adj", meaning: "đầy đủ, thỏa đáng" },
      { word: "hardware", ipa: "/ˈhɑːd.weər/", pos: "n", meaning: "phần cứng thiết bị" }
    ]
  },
  {
    id: "c1-16",
    chapter: 1,
    part: 7,
    speaker: "Dr. Helen Kang (CISO)",
    dialogue_en: "Checking the incident reporting timeframe.",
    dialogue_vi: "Kiểm tra thời hạn báo cáo sự cố an ninh.",
    situation_vi: "Câu hỏi 4 bài đọc Part 7: Thời gian tối đa để báo cáo sự cố màn hình bất thường.",
    passage: "(Tham khảo văn bản NOVABANK SECURITY BULLETIN ở trên)",
    stem: "How quickly must unusual computer screen behavior be reported?",
    choices: [
      "Within fifteen minutes",
      "Within two business days",
      "At the end of the monthly shift",
      "Only after consulting coworkers"
    ],
    answer: 0,
    explanation_vi: "Mục 4 nêu rõ: 'report the event directly to the SOC Emergency Hotline at Ext. 5500 within fifteen minutes' -> Trong vòng 15 phút.",
    trap: "Bẫy tự xử lý hoặc đợi hết tháng mới báo cáo.",
    examTip: "Các từ chỉ giới hạn thời gian (within, by, prior to) luôn là trọng tâm câu hỏi chi tiết Part 7.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail", difficulty: "Easy" },
    vocab: [
      { word: "hotline", ipa: "/ˈhɒt.laɪn/", pos: "n", meaning: "đường dây nóng khẩn cấp" },
      { word: "workstation", ipa: "/ˈwɜːkˌsteɪ.ʃən/", pos: "n", meaning: "máy trạm làm việc" }
    ]
  },

  // --- Tình huống 9: Part 5 - Từ vựng An toàn thông tin (Mã hóa dữ liệu) ---
  {
    id: "c1-17",
    chapter: 1,
    part: 5,
    speaker: "Sarah (Threat Hunter)",
    dialogue_en: "We must ensure all sensitive customer account balances are protected with top-tier cryptography.",
    dialogue_vi: "Chúng ta phải đảm bảo toàn bộ số dư tài khoản khách hàng nhạy cảm đều được bảo vệ bằng mật mã học hàng đầu.",
    situation_vi: "02:40 - Kiểm tra hệ thống cơ sở dữ liệu lưu trữ thông tin thẻ tín dụng.",
    stem: "NovaBank requires all sensitive customer records to be _______ encrypted before being transferred over the public internet.",
    choices: ["securely", "security", "secure", "securing"],
    answer: 0,
    explanation_vi: "Đứng trước phân từ/tính từ bị động 'encrypted' (được mã hóa) cần một phó từ (adverb) đuôi -ly để bổ nghĩa -> chọn 'securely' (được mã hóa một cách an toàn).",
    trap: "Bẫy danh từ 'security' hoặc tính từ 'secure'.",
    examTip: "Công thức quen thuộc Part 5: [to be + ADV + V3/ed] (to be securely encrypted).",
    tags: { part: "Part 5", category: "Grammar", topic: "Adverb Modification", difficulty: "Medium" },
    vocab: [
      { word: "securely", ipa: "/sɪˈkjʊə.li/", pos: "adv", meaning: "một cách an toàn, chắc chắn" },
      { word: "encrypted", ipa: "/ɪnˈkrɪp.tɪd/", pos: "adj", meaning: "đã được mã hóa" }
    ]
  },

  // --- Tình huống 10: Part 2 - Nghe Q&A: Họp bàn phương án ứng phó ---
  {
    id: "c1-18",
    chapter: 1,
    part: 2,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave asks about the incident response briefing with branch managers.",
    dialogue_vi: "Dave hỏi về buổi họp báo cáo ứng phó sự cố với các giám đốc chi nhánh.",
    situation_vi: "03:00 - Dave hỏi bạn về lịch họp khẩn lúc rạng sáng.",
    stem: "Has the emergency response briefing been rescheduled for 4:00 AM or 5:00 AM?",
    audioText: "Has the emergency response briefing been rescheduled for 4:00 AM or 5:00 AM?",
    choices: [
      "Actually, it has been pushed back to 5:30 AM.",
      "Yes, the briefing was very informative.",
      "In the main executive boardroom."
    ],
    answer: 0,
    explanation_vi: "Đây là câu hỏi lựa chọn 'A or B' (4:00 AM hay 5:00 AM) -> Đáp án (A) 'Actually, it has been pushed back to 5:30 AM' cung cấp thông tin mốc thời gian điều chỉnh thực tế.",
    trap: "Bẫy trả lời Yes/No cho câu hỏi lựa chọn Or (Phương án B), và bẫy trả lời phòng họp (địa điểm Where) ở phương án C.",
    examTip: "Quy tắc vàng Part 2: Câu hỏi lựa chọn 'A or B' KHÔNG BAO GIỜ trả lời bằng Yes hoặc No.",
    tags: { part: "Part 2", category: "Listening", topic: "Alternative Q&A", difficulty: "Medium" },
    vocab: [
      { word: "briefing", ipa: "/ˈbriː.fɪŋ/", pos: "n", meaning: "buổi họp ngắn chỉ đạo nhiệm vụ" },
      { word: "reschedule", ipa: "/ˌriːˈskedʒ.uːl/", pos: "v", meaning: "đổi lại lịch trình" }
    ]
  },

  // --- Tình huống 11: Part 5 - Thể bị động & Sao lưu dữ liệu dự phòng ---
  {
    id: "c1-19",
    chapter: 1,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "We must confirm that tonight's transaction snapshot has been safely backed up to the offline air-gapped vault.",
    dialogue_vi: "Chúng ta phải xác nhận rằng bản chụp giao dịch đêm nay đã được sao lưu an toàn vào kho lưu trữ ngắt kết nối vật lý.",
    situation_vi: "03:20 - Rà soát quy trình sao lưu dữ liệu tự động của máy chủ ngân hàng.",
    stem: "Complete database snapshots _______ automatically to the secondary disaster recovery site every four hours.",
    choices: ["are transmitted", "transmitting", "transmit", "have transmitted"],
    answer: 0,
    explanation_vi: "Chủ ngữ là vật chịu tác động: 'Complete database snapshots' (các bản sao chụp cơ sở dữ liệu hoàn chỉnh). Hành động xảy ra định kỳ 'every four hours' nên cần thì Hiện tại đơn ở thể Bị động: 'are transmitted' (được truyền đi).",
    trap: "Bẫy thể chủ động 'transmit' hoặc 'have transmitted' (bản sao chụp dữ liệu không thể tự truyền chính nó).",
    examTip: "Chủ ngữ chỉ vật + Không có tân ngữ phía sau động từ -> 90% câu chọn dạng Bị động (to be + V3/ed).",
    tags: { part: "Part 5", category: "Grammar", topic: "Passive Voice", difficulty: "Medium" },
    vocab: [
      { word: "snapshot", ipa: "/ˈsnæp.ʃɒt/", pos: "n", meaning: "bản chụp trạng thái dữ liệu tức thời" },
      { word: "transmit", ipa: "/trænzˈmɪt/", pos: "v", meaning: "truyền dẫn dữ liệu" }
    ]
  },

  // =========================================================================
  // TRÙM CHƯƠNG 1 (BOSS LEVEL 1): THE PHISHING INFILTRATION & FIREWALL BREACH
  // 5 câu tổng hợp tốc độ cao (c1-20 đến c1-24)
  // =========================================================================
  {
    id: "c1-20",
    chapter: 1,
    isBoss: true,
    part: 5,
    speaker: "HACKER / THREAT ACTOR (Phishing Wave)",
    dialogue_en: "ALERT: Outbound botnet traffic detected! The attacker is attempting to validate stolen credentials!",
    dialogue_vi: "BÁO ĐỘNG: Phát hiện lưu lượng botnet gửi ra ngoài! Kẻ tấn công đang cố gắng xác thực tài khoản đánh cắp!",
    situation_vi: "[TRÙM 1 - CÂU 1/5] Kẻ tấn công mở đợt tấn công credential stuffing tự động!",
    stem: "All personnel must strictly adhere _______ the newly revised password complexity standards.",
    choices: ["to", "with", "at", "for"],
    answer: 0,
    explanation_vi: "Cụm động từ cố định: 'adhere to' có nghĩa là tuân thủ chặt chẽ theo quy định/tiêu chuẩn.",
    trap: "Bẫy dùng giới từ 'with' do nhầm với 'comply with'. Nhớ: 'adhere to' nhưng 'comply with'.",
    examTip: "Cặp giới từ đối chiếu cực hay gặp trong TOEIC: [adhere TO = comply WITH = conform TO = abide BY].",
    tags: { part: "Part 5", category: "Vocabulary", topic: "Collocation", difficulty: "Medium" },
    vocab: [
      { word: "adhere to", ipa: "/ədˈhɪər tuː/", pos: "v", meaning: "tuân thủ theo" },
      { word: "complexity", ipa: "/kəmˈplek.sə.ti/", pos: "n", meaning: "độ phức tạp" }
    ]
  },
  {
    id: "c1-21",
    chapter: 1,
    isBoss: true,
    part: 2,
    speaker: "HACKER / THREAT ACTOR (Phishing Wave)",
    dialogue_en: "Audio intrusion attempt on SOC voice gateway!",
    dialogue_vi: "Kẻ tấn công cố gắng xâm nhập cổng thoại SOC!",
    situation_vi: "[TRÙM 1 - CÂU 2/5] Dave gọi gấp qua bộ đàm yêu cầu bạn chặn dải IP độc hại ngay lập tức!",
    stem: "Could you block these five malicious IP addresses on the external gateway?",
    audioText: "Could you block these five malicious IP addresses on the external gateway?",
    choices: [
      "Certainly, I will apply the firewall rule immediately.",
      "No, the address was printed on white paper.",
      "Because the gate is already closed."
    ],
    answer: 0,
    explanation_vi: "Lời yêu cầu lịch sự: 'Could you block...?' -> Đáp án (A) 'Certainly, I will apply the firewall rule immediately' (Chắc chắn rồi, tôi sẽ áp dụng luật tường lửa ngay lập tức) là câu phản hồi hợp tác chính xác.",
    trap: "Bẫy lặp từ: (B) lặp từ 'address' và 'paper', (C) lặp 'gate' từ 'gateway'.",
    examTip: "Dạng câu yêu cầu Part 2 (Could you / Would you please): Câu trả lời đồng ý thường dùng 'Certainly', 'Sure', 'Of course', 'Right away'.",
    tags: { part: "Part 2", category: "Listening", topic: "Requests", difficulty: "Easy" },
    vocab: [
      { word: "certainly", ipa: "/ˈsɜː.tən.li/", pos: "adv", meaning: "chắc chắn rồi" },
      { word: "malicious", ipa: "/məˈlɪʃ.əs/", pos: "adj", meaning: "có dã tâm độc hại" }
    ]
  },
  {
    id: "c1-22",
    chapter: 1,
    isBoss: true,
    part: 5,
    speaker: "HACKER / THREAT ACTOR (Phishing Wave)",
    dialogue_en: "ALERT: Unauthorized script injection detected in customer web portal!",
    dialogue_vi: "BÁO ĐỘNG: Phát hiện chèn mã lệnh trái phép trên cổng thông tin khách hàng!",
    situation_vi: "[TRÙM 1 - CÂU 3/5] Phát hiện lỗ hổng cho phép người dùng chưa xác thực truy cập tài liệu nhạy cảm.",
    stem: "Unauthorized individuals are strictly forbidden from entering the server room _______ accompanied by a licensed security officer.",
    choices: ["unless", "without", "despite", "except"],
    answer: 0,
    explanation_vi: "Liên từ 'unless' (+ rút gọn phân từ 'accompanied by...') có nghĩa là 'trừ phi được tháp tùng bởi một sĩ quan an ninh có thẩm quyền'.",
    trap: "Bẫy giới từ 'without' (cần đi với V-ing/Danh từ: without being accompanied) hoặc 'despite'.",
    examTip: "Cấu trúc rút gọn với liên từ điều kiện: 'unless + V3/ed' (trừ phi được làm gì).",
    tags: { part: "Part 5", category: "Grammar", topic: "Conjunctions", difficulty: "Hard" },
    vocab: [
      { word: "forbidden", ipa: "/fəˈbɪd.ən/", pos: "adj", meaning: "bị cấm" },
      { word: "accompanied", ipa: "/əˈkʌm.pə.nid/", pos: "adj", meaning: "được đi cùng, được tháp tùng" }
    ]
  },
  {
    id: "c1-23",
    chapter: 1,
    isBoss: true,
    part: 5,
    speaker: "HACKER / THREAT ACTOR (Phishing Wave)",
    dialogue_en: "ALERT: Final breach attempt targeting the corporate mail server DNS records!",
    dialogue_vi: "BÁO ĐỘNG: Đợt tấn công cuối cùng nhắm vào bản ghi DNS của máy chủ thư tín nội bộ!",
    situation_vi: "[TRÙM 1 - CÂU 4/5] Kẻ tấn công giả mạo tên miền hòng đánh sập bộ lọc thư rác của ngân hàng.",
    stem: "The Chief Information Security Officer praised the SOC analysts for their _______ response to the midnight phishing breach.",
    choices: ["prompt", "promptly", "promptness", "prompting"],
    answer: 0,
    explanation_vi: "Vị trí nằm giữa tính từ sở hữu 'their' và danh từ 'response' cần một tính từ (adjective) để bổ nghĩa -> chọn 'prompt' (nhanh chóng, kịp thời). 'prompt response' = phản ứng kịp thời.",
    trap: "Bẫy phó từ 'promptly' hoặc danh từ 'promptness'. Cụm 'their prompt response' là cụm danh từ hoàn chỉnh.",
    examTip: "Cấu trúc cụm danh từ TOEIC: [Tính từ sở hữu + TÍNH TỪ + Danh từ chính] (their prompt response).",
    tags: { part: "Part 5", category: "Grammar", topic: "Word Form", difficulty: "Medium" },
    vocab: [
      { word: "prompt", ipa: "/prɒmpt/", pos: "adj", meaning: "nhanh chóng, kịp thời" },
      { word: "praise", ipa: "/preɪz/", pos: "v", meaning: "khen ngợi, biểu dương" }
    ]
  },
  {
    id: "c1-24",
    chapter: 1,
    isBoss: true,
    part: 5,
    speaker: "HACKER / THREAT ACTOR (Phishing Wave)",
    dialogue_en: "CRITICAL FINALE: Lock the master firewall rule to terminate the botnet connection!",
    dialogue_vi: "ĐÒN KẾT LIỄU: Khóa luật tường lửa tổng để ngắt toàn bộ kết nối của mạng botnet!",
    situation_vi: "[TRÙM 1 - CÂU 5/5] Tung đòn quyết định đẩy lùi đợt tấn công Phishing của kẻ thù!",
    stem: "_______ the emergency patch has been successfully deployed, all network services will resume standard operations.",
    choices: ["Now that", "Although", "In spite of", "Even though"],
    answer: 0,
    explanation_vi: "'Now that' là một liên từ phụ thuộc có nghĩa là 'Giờ đây khi mà / Vì thực tế là' (Now that the emergency patch has been deployed = Giờ đây khi bản vá khẩn đã được triển khai xong, mọi dịch vụ mạng sẽ trở lại hoạt động bình thường).",
    trap: "Bẫy liên từ chỉ sự tương phản 'Although' / 'Even though' hoặc giới từ 'In spite of' (đi với danh từ).",
    examTip: "'Now that' = 'Because now'. Sau 'Now that' luôn là một mệnh đề hoàn chỉnh (S + V) giải thích lý do cho kết quả ở mệnh đề sau.",
    tags: { part: "Part 5", category: "Grammar", topic: "Conjunctions", difficulty: "Hard" },
    vocab: [
      { word: "deploy", ipa: "/dɪˈplɔɪ/", pos: "v", meaning: "triển khai phần mềm" },
      { word: "resume", ipa: "/rɪˈzjuːm/", pos: "v", meaning: "bắt đầu lại, khôi phục lại" }
    ]
  }
];
