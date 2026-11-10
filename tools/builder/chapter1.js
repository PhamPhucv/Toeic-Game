/**
 * CHAPTER 1 QUESTIONS (57 câu hỏi hoàn chỉnh)
 * Bao gồm các Part 1, 2, 3, 4, 5, 6, 7 chuẩn ETS TOEIC & InfoSec SOC
 */
module.exports = [
  {
    "id": "c1-01",
    "chapter": 1,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Welcome to your first night shift at NovaBank SOC. Before touching the terminal, make sure your security credentials are fully verified.",
    "dialogue_vi": "Chào mừng bạn đến với ca trực đêm đầu tiên tại SOC NovaBank. Trước khi chạm vào thiết bị đầu cuối, hãy chắc chắn thông tin đăng nhập của bạn đã được xác thực.",
    "situation_vi": "00:00 - Bạn ngồi vào bàn trực SOC. Trưởng ca Dave yêu cầu bạn kiểm tra quyền truy cập hệ thống giám sát SIEM.",
    "stem": "All SOC analysts must authenticate _______ identities before accessing NovaBank's production servers.",
    "choices": [
      "their",
      "theirs",
      "them",
      "they"
    ],
    "answer": 0,
    "explanation_vi": "Đứng trước danh từ 'identities' (danh tính) cần một tính từ sở hữu (possessive adjective) để bổ nghĩa -> chọn 'their' (của họ).",
    "trap": "Bẫy đại từ sở hữu 'theirs' (không đứng trước danh từ) và đại từ tân ngữ 'them'.",
    "examTip": "Công thức vàng TOEIC: [Tính từ sở hữu + Danh từ]. Trước danh từ luôn là tính từ sở hữu (their/his/her/its/our).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Authentication",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "authenticate",
        "ipa": "/ɔːˈθen.tɪ.keɪt/",
        "pos": "v",
        "meaning": "xác thực danh tính"
      },
      {
        "word": "identity",
        "ipa": "/aɪˈden.tə.ti/",
        "pos": "n",
        "meaning": "danh tính"
      }
    ]
  },
  {
    "id": "c1-02",
    "chapter": 1,
    "part": 2,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave asks through the SOC intercom headset about the network firewall report.",
    "dialogue_vi": "Dave hỏi qua tai nghe bộ đàm SOC về báo cáo tường lửa mạng.",
    "situation_vi": "00:15 - Dave nhấn nút bộ đàm nội bộ hỏi bạn tiến độ rà soát tường lửa.",
    "stem": "When will the firewall configuration report be finalized?",
    "audioText": "When will the firewall configuration report be finalized?",
    "choices": [
      "By the end of this shift at 6:00 AM.",
      "Because the server wall needs maintenance.",
      "Yes, it was very final."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi bắt đầu bằng 'When' (Khi nào) hỏi mốc thời gian -> (A) 'By the end of this shift at 6:00 AM' (Trước khi kết thúc ca trực lúc 6h sáng) là câu trả lời trực tiếp chính xác.",
    "trap": "Bẫy lặp âm / lặp từ: (B) lặp từ 'wall' từ 'firewall', (C) lặp từ 'final' và bẫy Yes/No cho câu hỏi Wh-.",
    "examTip": "Bẫy kinh điển Part 2: Câu hỏi Wh- (Who, When, Where, Why, What) KHÔNG BAO GIỜ chấp nhận câu trả lời bắt đầu bằng Yes/No.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Firewall",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "configuration",
        "ipa": "/kənˌfɪɡ.əˈreɪ.ʃən/",
        "pos": "n",
        "meaning": "cấu hình hệ thống"
      },
      {
        "word": "finalize",
        "ipa": "/ˈfaɪ.nəl.aɪz/",
        "pos": "v",
        "meaning": "hoàn thiện, chốt xong"
      }
    ]
  },
  {
    "id": "c1-03",
    "chapter": 1,
    "part": 5,
    "speaker": "Sarah (Threat Hunter)",
    "dialogue_en": "Look at this inbound mail log. An employee in finance has just received an urgent wire transfer request.",
    "dialogue_vi": "Nhìn vào nhật ký thư đến này xem. Một nhân viên phòng tài chính vừa nhận được yêu cầu chuyển tiền khẩn cấp.",
    "situation_vi": "00:30 - Hệ thống chống thư rác phát hiện một tập tin đính kèm bất thường gửi đến kế toán trưởng.",
    "stem": "The automated security filter _______ over two hundred fraudulent emails since midnight.",
    "choices": [
      "has intercepted",
      "will intercept",
      "intercepting",
      "intercepts"
    ],
    "answer": 0,
    "explanation_vi": "Cụm trạng từ thời gian 'since midnight' (kể từ lúc nửa đêm đến nay) là dấu hiệu nhận biết đặc trưng của thì Hiện tại hoàn thành (Present Perfect) -> chọn 'has intercepted'.",
    "trap": "Bẫy thì tương lai 'will intercept' hoặc hiện tại đơn 'intercepts' (không phù hợp với mốc 'since + thời điểm').",
    "examTip": "Dấu hiệu thì Hiện tại Hoàn thành trong TOEIC: 'since + mốc thời gian', 'for + khoảng thời gian', 'over the past/last...'.",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Tenses",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "intercept",
        "ipa": "/ˌɪn.təˈsept/",
        "pos": "v",
        "meaning": "đánh chặn, chặn bắt"
      },
      {
        "word": "fraudulent",
        "ipa": "/ˈfrɔː.dʒə.lənt/",
        "pos": "adj",
        "meaning": "gian lận, lừa đảo"
      }
    ]
  },
  {
    "id": "c1-04",
    "chapter": 1,
    "part": 6,
    "speaker": "AEGIS AI (Security Alert)",
    "dialogue_en": "URGENT SECURITY BULLETIN broadcasted across NovaBank internal network.",
    "dialogue_vi": "BẢN TIN AN NINH KHẨN CẤP phát đi trên toàn mạng nội bộ NovaBank.",
    "situation_vi": "00:45 - Trưởng phòng bảo mật phát đi thông báo khẩn cấp cho toàn thể nhân viên ngân hàng về chiến dịch Spear-Phishing.",
    "passage": "SECURITY ALERT MEMORANDUM\nTO: All NovaBank Employees\nFROM: SOC Incident Response Team\nDATE: November 10, 00:45 AM\nSUBJECT: Active Spear-Phishing Campaign Targeting Corporate Mailboxes\n\nPlease be advised that our perimeter firewalls detected an aggressive phishing campaign targeting NovaBank personnel. The malicious emails deceptively claim that employee annual bonus statements are _______ [1] for download. Recipients are instructed to click a hyperlink and provide their network login credentials. You must _______ [2] avoid opening any attachments from unfamiliar senders. The IT Security Operations Center is _______ [3] monitoring internal traffic to block external command-and-control IP addresses. _______ [4]. If you have already clicked the link, contact the SOC helpline immediately at extension 5500.",
    "stem": "Select the best answer for blank [1]:",
    "choices": [
      "ready",
      "readiness",
      "readily",
      "readying"
    ],
    "answer": 0,
    "explanation_vi": "Sau động từ to-be 'are' cần một tính từ đóng vai trò vị ngữ bổ nghĩa cho chủ ngữ 'annual bonus statements' -> chọn tính từ 'ready' (sẵn sàng để tải về).",
    "trap": "Bẫy danh từ 'readiness' hoặc phó từ 'readily'. Cấu trúc 'be ready for + N' rất thông dụng trong đề TOEIC.",
    "examTip": "Cấu trúc: S + to be + Adj + for N/to V.",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Word Form",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "deceptively",
        "ipa": "/dɪˈsep.tɪv.li/",
        "pos": "adv",
        "meaning": "một cách lừa dối, gây hiểu lầm"
      },
      {
        "word": "recipient",
        "ipa": "/rɪˈsɪp.i.ənt/",
        "pos": "n",
        "meaning": "người nhận thư"
      }
    ]
  },
  {
    "id": "c1-05",
    "chapter": 1,
    "part": 6,
    "speaker": "AEGIS AI (Security Alert)",
    "dialogue_en": "Continuing review of blank [2] in the Security Alert Memorandum.",
    "dialogue_vi": "Tiếp tục xem xét chỗ trống [2] trong Bản tin cảnh báo an ninh.",
    "situation_vi": "Điền từ bổ nghĩa cho động từ hành động 'avoid' (tránh mở tệp đính kèm).",
    "passage": "(Tham khảo đoạn văn thông báo an ninh ở trên)",
    "stem": "Select the best answer for blank [2]:",
    "choices": [
      "strictly",
      "strictness",
      "strict",
      "stricter"
    ],
    "answer": 0,
    "explanation_vi": "Đứng trước động từ 'avoid' (tránh) cần một phó từ (adverb) đuôi -ly để bổ nghĩa cho hành động -> chọn 'strictly' (nghiêm ngặt tránh, tuyệt đối tránh).",
    "trap": "Bẫy tính từ 'strict' đi kèm động từ khuyết thiếu 'must'. Ở đây 'strictly' bổ nghĩa cho động từ chính 'avoid'.",
    "examTip": "Quy tắc vị trí phó từ: Trợ động từ / Modal verb + [ADV] + Động từ chính (must strictly avoid).",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Adverb",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "strictly",
        "ipa": "/ˈstrɪkt.li/",
        "pos": "adv",
        "meaning": "nghiêm ngặt, tuyệt đối"
      },
      {
        "word": "avoid",
        "ipa": "/əˈvɔɪd/",
        "pos": "v",
        "meaning": "tránh né"
      }
    ]
  },
  {
    "id": "c1-06",
    "chapter": 1,
    "part": 6,
    "speaker": "AEGIS AI (Security Alert)",
    "dialogue_en": "Continuing review of blank [3] in the Security Alert Memorandum.",
    "dialogue_vi": "Tiếp tục xem xét chỗ trống [3] trong Bản tin cảnh báo an ninh.",
    "situation_vi": "Điền trạng từ thể hiện trạng thái hoạt động đang diễn ra của trung tâm SOC.",
    "passage": "(Tham khảo đoạn văn thông báo an ninh ở trên)",
    "stem": "Select the best answer for blank [3]:",
    "choices": [
      "actively",
      "activity",
      "action",
      "acted"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc thì hiện tại tiếp diễn: 'is _______ monitoring' -> Vị trí giữa to be và V-ing cần một phó từ (adverb) -> chọn 'actively' (đang chủ động/tích cực giám sát).",
    "trap": "Bẫy danh từ 'activity' xen giữa thì tiếp diễn.",
    "examTip": "Công thức thì tiếp diễn có phó từ: [to be + ADV + V-ing] (is actively monitoring).",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Adverb",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "actively",
        "ipa": "/ˈæk.tɪv.li/",
        "pos": "adv",
        "meaning": "một cách chủ động, tích cực"
      },
      {
        "word": "monitoring",
        "ipa": "/ˈmɒn.ɪ.tər.ɪŋ/",
        "pos": "n",
        "meaning": "hoạt động giám sát"
      }
    ]
  },
  {
    "id": "c1-07",
    "chapter": 1,
    "part": 6,
    "speaker": "AEGIS AI (Security Alert)",
    "dialogue_en": "Select the sentence that best fits the contextual flow for blank [4].",
    "dialogue_vi": "Chọn câu văn phù hợp nhất với mạch văn tại chỗ trống [4].",
    "situation_vi": "Chọn câu bổ trợ thích hợp vào văn bản thông báo để hướng dẫn nhân viên.",
    "passage": "(Tham khảo đoạn văn thông báo an ninh ở trên)",
    "stem": "Select the best sentence to fill blank [4]:",
    "choices": [
      "Network engineers have already isolated three compromised email accounts.",
      "The corporate cafeteria will serve lunch at twelve o'clock tomorrow.",
      "All overseas flight bookings must be authorized by travel managers.",
      "New office furniture will be delivered to the reception lobby on Friday."
    ],
    "answer": 0,
    "explanation_vi": "Câu (A) 'Network engineers have already isolated three compromised email accounts' (Các kỹ sư mạng đã cách ly xong 3 tài khoản email bị xâm phạm) liên kết chặt chẽ và liền mạch nhất với ngữ cảnh xử lý sự cố an ninh.",
    "trap": "Các phương án B, C, D hoàn toàn lạc đề (về căng-tin, đặt vé máy bay, bàn ghế văn phòng).",
    "examTip": "Dạng câu điền câu vào đoạn văn Part 6: Hãy tìm từ khóa đồng nghĩa (isolated, compromised email accounts) kết nối với chủ đề an ninh mạng của bài đọc.",
    "tags": {
      "part": "Part 6",
      "category": "Reading",
      "topic": "Context Flow",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "isolate",
        "ipa": "/ˈaɪ.sə.leɪt/",
        "pos": "v",
        "meaning": "cách ly, cô lập"
      },
      {
        "word": "compromise",
        "ipa": "/ˈkɒm.prə.maɪz/",
        "pos": "v",
        "meaning": "làm lộ, làm tổn hại an toàn"
      }
    ]
  },
  {
    "id": "c1-08",
    "chapter": 1,
    "part": 2,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave calls out across the room about the suspicious IP address.",
    "dialogue_vi": "Dave gọi to từ phía góc phòng về địa chỉ IP đáng ngờ.",
    "situation_vi": "01:10 - Dave hỏi ai chịu trách nhiệm phân tích danh sách IP đen gửi đến từ máy chủ nước ngoài.",
    "stem": "Who is responsible for analyzing the outbound connection logs?",
    "audioText": "Who is responsible for analyzing the outbound connection logs?",
    "choices": [
      "Sarah from the threat hunting team is handling that.",
      "Yes, the connection is very stable.",
      "To connect the printer cable."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi bắt đầu bằng 'Who' (Ai chịu trách nhiệm) -> Đáp án (A) chỉ rõ người thực hiện: 'Sarah from the threat hunting team is handling that'.",
    "trap": "Bẫy Yes/No cho câu hỏi 'Who' (B), và bẫy trả lời mục đích 'To + V' (C).",
    "examTip": "Bẫy Part 2: Câu hỏi người 'Who is in charge / Who is responsible' thường có câu trả lời nhắc đến tên riêng hoặc phòng ban chuyên trách.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Responsibility",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "responsible",
        "ipa": "/rɪˈspɒn.sə.bəl/",
        "pos": "adj",
        "meaning": "chịu trách nhiệm"
      },
      {
        "word": "outbound",
        "ipa": "/ˈaʊt.baʊnd/",
        "pos": "adj",
        "meaning": "kết nối gửi ra ngoài"
      }
    ]
  },
  {
    "id": "c1-09",
    "chapter": 1,
    "part": 3,
    "speaker": "Dave & Sarah (SOC Conversation)",
    "dialogue_en": "[Dave]: Sarah, did you notice the bandwidth anomaly on port 443?\n[Sarah]: Yes, Dave. A workstation in accounting attempted to send 5 gigabytes of encrypted files to an external IP in Eastern Europe.\n[Dave]: That looks like data exfiltration. Disconnect that machine from the local network right now before it infects other subnets.\n[Sarah]: I'm on it. I'll also notify the Chief Information Security Officer immediately.",
    "dialogue_vi": "[Dave]: Sarah, cô có thấy sự bất thường về băng thông trên cổng 443 không?\n[Sarah]: Có chứ Dave. Một máy trạm ở phòng kế toán vừa cố gửi 5 GB tệp mã hóa ra một IP nước ngoài ở Đông Âu.\n[Dave]: Trông giống như hành vi rút trích dữ liệu ra ngoài rồi. Ngắt kết nối máy đó khỏi mạng nội bộ ngay lập tức trước khi nó lây sang các phân mạng khác.\n[Sarah]: Tôi làm ngay đây. Tôi cũng sẽ báo cáo Giám đốc CISO ngay lập tức.",
    "situation_vi": "01:30 - Nghe cuộc đối thoại khẩn giữa Dave và Sarah về nguy cơ rò rỉ dữ liệu kế toán.",
    "stem": "What problem are the speakers discussing?",
    "audioText": "Dave: Sarah, did you notice the bandwidth anomaly on port 443? Sarah: Yes, Dave. A workstation in accounting attempted to send 5 gigabytes of encrypted files to an external IP in Eastern Europe. Dave: That looks like data exfiltration. Disconnect that machine from the local network right now before it infects other subnets. Sarah: I'm on it. I'll also notify the Chief Information Security Officer immediately.",
    "choices": [
      "Suspicious data transmission from an accounting computer",
      "A scheduled power outage in the server room",
      "The purchase of new desktop computers for interns",
      "A delay in employee monthly payroll processing"
    ],
    "answer": 0,
    "explanation_vi": "Sarah báo cáo: 'A workstation in accounting attempted to send 5 gigabytes of encrypted files to an external IP' -> Hành vi truyền dữ liệu đáng ngờ từ máy tính kế toán.",
    "trap": "Bẫy từ 'payroll' do có từ 'accounting', bẫy mất điện và mua sắm máy tính mới.",
    "examTip": "Câu hỏi đầu tiên của Part 3 thường hỏi về chủ đề / vấn đề chính (topic/problem). Hãy chú ý lắng nghe ngay 2 lượt lời đầu tiên.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Exfiltration",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "anomaly",
        "ipa": "/əˈnɒm.ə.li/",
        "pos": "n",
        "meaning": "sự bất thường"
      },
      {
        "word": "exfiltration",
        "ipa": "/ˌeks.fɪlˈtreɪ.ʃən/",
        "pos": "n",
        "meaning": "sự rút trích dữ liệu bất hợp pháp"
      }
    ]
  },
  {
    "id": "c1-10",
    "chapter": 1,
    "part": 3,
    "speaker": "Dave & Sarah (SOC Conversation)",
    "dialogue_en": "Reviewing Dave's instruction in the conversation.",
    "dialogue_vi": "Xem lại chỉ đạo của Dave trong đoạn đối thoại.",
    "situation_vi": "Câu hỏi 2 của bài nghe Part 3: Hành động mà Dave chỉ đạo.",
    "stem": "What action does the man instruct the woman to take immediately?",
    "audioText": "What action does the man instruct the woman to take immediately?",
    "choices": [
      "Disconnect the infected machine from the network",
      "Reboot the corporate email server",
      "Draft a press release for external news reporters",
      "Cancel all scheduled staff leave requests"
    ],
    "answer": 0,
    "explanation_vi": "Dave nói dứt khoát: 'Disconnect that machine from the local network right now' -> Ngắt kết nối máy bị nhiễm khỏi mạng.",
    "trap": "Bẫy khởi động lại server email hoặc phát thông cáo báo chí (quá sớm khi chưa kiểm soát sự cố).",
    "examTip": "Khi nghe thấy các từ mệnh lệnh như 'Disconnect', 'Send', 'Contact', 'Review' - đó chính là đáp án cho câu hỏi 'What does the man suggest / instruct'.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Incident Action",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "disconnect",
        "ipa": "/ˌdɪs.kəˈnekt/",
        "pos": "v",
        "meaning": "ngắt kết nối"
      },
      {
        "word": "subnet",
        "ipa": "/ˈsʌb.net/",
        "pos": "n",
        "meaning": "phân mạng con"
      }
    ]
  },
  {
    "id": "c1-11",
    "chapter": 1,
    "part": 3,
    "speaker": "Dave & Sarah (SOC Conversation)",
    "dialogue_en": "Reviewing Sarah's next planned task.",
    "dialogue_vi": "Xem lại bước tiếp theo Sarah sẽ làm.",
    "situation_vi": "Câu hỏi 3 của bài nghe Part 3: Sarah sẽ làm gì tiếp theo?",
    "stem": "Who will the woman contact next?",
    "audioText": "Who will the woman contact next?",
    "choices": [
      "The Chief Information Security Officer",
      "The external software hardware vendor",
      "The bank's customer support hotline",
      "The local municipal police department"
    ],
    "answer": 0,
    "explanation_vi": "Sarah nói ở câu cuối cùng: 'I'll also notify the Chief Information Security Officer immediately' -> Chọn CISO.",
    "trap": "Bẫy các bên liên quan khác như nhà cung cấp phần cứng hay cảnh sát.",
    "examTip": "Câu hỏi cuối cùng của Part 3 thường là: 'What will the speaker do next?' -> Đáp án luôn nằm ở 1-2 câu nói cuối cùng của đoạn hội thoại.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Reporting",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "notify",
        "ipa": "/ˈnəʊ.tɪ.faɪ/",
        "pos": "v",
        "meaning": "thông báo, báo cáo"
      },
      {
        "word": "officer",
        "ipa": "/ˈɒf.ɪ.sər/",
        "pos": "n",
        "meaning": "sĩ quan, giám đốc chức năng"
      }
    ]
  },
  {
    "id": "c1-12",
    "chapter": 1,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Now configure the emergency rule. No packet should leave the bank without deep inspection.",
    "dialogue_vi": "Bây giờ hãy cấu hình luật khẩn cấp. Không gói tin nào được phép rời ngân hàng mà không qua kiểm tra sâu.",
    "situation_vi": "01:50 - Bạn cần thêm quy tắc chặn cổng mạng khẩn cấp trên bảng điều khiển Firewall.",
    "stem": "_______ discovering the abnormal traffic spike, the security team immediately blocked the suspicious IP address.",
    "choices": [
      "Upon",
      "Despite",
      "Although",
      "Whereas"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc 'Upon + V-ing' có nghĩa là 'Ngay khi / Ngay sau khi làm gì' -> 'Upon discovering the abnormal traffic spike...' (Ngay khi phát hiện lượng truy cập tăng vọt bất thường, đội bảo mật lập tức chặn IP nghi vấn).",
    "trap": "Bẫy liên từ chỉ sự tương phản 'Despite' (Mặc dù), 'Although' (cần đi với mệnh đề S+V), 'Whereas' (trong khi). Ngữ cảnh ở đây là hành động phản ứng nối tiếp nhau về thời gian.",
    "examTip": "Cụm cực hay thi TOEIC: 'Upon + V-ing' = 'As soon as + S + V' (Ngay sau khi làm gì thì làm gì tiếp theo).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Prepositions",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "spike",
        "ipa": "/spaɪk/",
        "pos": "n",
        "meaning": "sự tăng vọt đột biến"
      },
      {
        "word": "suspicious",
        "ipa": "/səˈspɪʃ.əs/",
        "pos": "adj",
        "meaning": "đáng ngờ, khả nghi"
      }
    ]
  },
  {
    "id": "c1-13",
    "chapter": 1,
    "part": 7,
    "speaker": "Dr. Helen Kang (CISO)",
    "dialogue_en": "MEMORANDUM FROM DR. HELEN KANG - CHIEF INFORMATION SECURITY OFFICER",
    "dialogue_vi": "BẢN GHI NHỚ TỪ TIẾN SĨ HELEN KANG - GIÁM ĐỐC AN TOÀN THÔNG TIN",
    "situation_vi": "02:15 - CISO gửi chỉ thị khẩn cấp về việc thắt chặt chính sách mật khẩu và báo cáo rủi ro tài chính.",
    "passage": "NOVABANK SECURITY BULLETIN: MANDATORY AUTHENTICATION HARDENING\nIssued by: Dr. Helen Kang, CISO\nTarget Audience: All Staff in Financial Processing & Core Banking\n\n1. Purpose and Overview\nIn response to heightened cyber threat levels observed over the past 48 hours, NovaBank is accelerating the enforcement of its Multi-Factor Authentication (MFA) policy. Attackers have been utilizing sophisticated credential-stuffing attacks to compromise staff accounts.\n\n2. Mandatory Password Reset\nAll personnel holding administrative or financial authorization privileges must reset their enterprise passwords by 08:00 AM this morning. Passwords must be at least sixteen characters in length and include uppercase letters, numbers, and special symbols. Reusing any of your previous five passwords is strictly prohibited.\n\n3. Hardware Token Requirement\nEmployees processing wire transfers exceeding $50,000 must now confirm each transaction using their physical RSA hardware security token. Digital SMS verification codes will no longer be considered adequate for high-value transactions.\n\n4. Reporting Incidents\nIf your screen displays unusual pop-up windows or if your password fails to unlock your workstation, report the event directly to the SOC Emergency Hotline at Ext. 5500 within fifteen minutes.",
    "stem": "What is the primary objective of the security bulletin?",
    "choices": [
      "To enforce stricter identity authentication rules across the bank",
      "To announce the annual schedule of corporate holidays",
      "To introduce a new retirement benefits plan for managers",
      "To solicit feedback on the quality of office cafeteria meals"
    ],
    "answer": 0,
    "explanation_vi": "Mục 1 nêu rõ mục đích: 'NovaBank is accelerating the enforcement of its Multi-Factor Authentication (MFA) policy' -> Tăng cường và áp dụng các quy định xác thực danh tính nghiêm ngặt hơn.",
    "trap": "Các phương án B, C, D hoàn toàn không liên quan đến bảo mật (nghỉ lễ, hưu trí, căng-tin).",
    "examTip": "Câu hỏi mục đích (primary objective / purpose) của bài đọc Part 7: Hãy đọc kỹ tiêu đề và đoạn văn mở đầu số 1 (Purpose and Overview).",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Main Idea",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "enforcement",
        "ipa": "/ɪnˈfɔːs.mənt/",
        "pos": "n",
        "meaning": "sự thực thi, sự bắt buộc áp dụng"
      },
      {
        "word": "credential",
        "ipa": "/krɪˈden.ʃəl/",
        "pos": "n",
        "meaning": "thông tin xác thực đăng nhập"
      }
    ]
  },
  {
    "id": "c1-14",
    "chapter": 1,
    "part": 7,
    "speaker": "Dr. Helen Kang (CISO)",
    "dialogue_en": "Continuing review of CISO Security Bulletin details.",
    "dialogue_vi": "Tiếp tục xem chi tiết Bản tin an ninh của CISO.",
    "situation_vi": "Câu hỏi 2 bài đọc Part 7: Thời hạn đặt lại mật khẩu của nhân viên.",
    "passage": "(Tham khảo văn bản NOVABANK SECURITY BULLETIN ở trên)",
    "stem": "By what time must eligible employees complete their password reset?",
    "choices": [
      "By 8:00 AM this morning",
      "By midnight on Friday",
      "Within 48 hours of notification",
      "Before the end of next month"
    ],
    "answer": 0,
    "explanation_vi": "Mục 2 ghi rõ: 'must reset their enterprise passwords by 08:00 AM this morning' -> Trước 8 giờ sáng nay.",
    "trap": "Bẫy con số 48 hours xuất hiện ở mục 1 (thời gian ghi nhận mối đe dọa gia tăng), không phải thời hạn đổi mật khẩu.",
    "examTip": "Bẫy thông tin nhiễu trong Part 7: Luôn đối chiếu đúng câu hỏi (By what time must reset password) với đúng đoạn chứa thông tin đó (Mục 2).",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "prohibit",
        "ipa": "/prəˈhɪb.ɪt/",
        "pos": "v",
        "meaning": "nghiêm cấm"
      },
      {
        "word": "eligible",
        "ipa": "/ˈel.ɪ.dʒə.bəl/",
        "pos": "adj",
        "meaning": "đủ điều kiện, thuộc diện áp dụng"
      }
    ]
  },
  {
    "id": "c1-15",
    "chapter": 1,
    "part": 7,
    "speaker": "Dr. Helen Kang (CISO)",
    "dialogue_en": "Analyzing high-value transaction policy.",
    "dialogue_vi": "Phân tích quy định giao dịch giá trị cao.",
    "situation_vi": "Câu hỏi 3 bài đọc Part 7: Yêu cầu bắt buộc đối với giao dịch chuyển tiền trên $50,000.",
    "passage": "(Tham khảo văn bản NOVABANK SECURITY BULLETIN ở trên)",
    "stem": "What is required for wire transfers exceeding $50,000?",
    "choices": [
      "Confirmation using a physical hardware security token",
      "Submission of a written notarized bank letter",
      "Approval from two external government auditors",
      "Verification solely via mobile phone SMS messages"
    ],
    "answer": 0,
    "explanation_vi": "Mục 3 ghi rõ: 'Employees processing wire transfers exceeding $50,000 must now confirm each transaction using their physical RSA hardware security token'.",
    "trap": "Bẫy phương án D: Văn bản nêu rõ 'SMS verification codes will NO LONGER be considered adequate', nên chọn SMS là sai hoàn toàn.",
    "examTip": "Để ý các từ phủ định hoặc thay đổi: 'no longer' (không còn nữa) thường là điểm thi bẫy của người ra đề TOEIC.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail Negative",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "adequate",
        "ipa": "/ˈæd.ə.kwət/",
        "pos": "adj",
        "meaning": "đầy đủ, thỏa đáng"
      },
      {
        "word": "hardware",
        "ipa": "/ˈhɑːd.weər/",
        "pos": "n",
        "meaning": "phần cứng thiết bị"
      }
    ]
  },
  {
    "id": "c1-16",
    "chapter": 1,
    "part": 7,
    "speaker": "Dr. Helen Kang (CISO)",
    "dialogue_en": "Checking the incident reporting timeframe.",
    "dialogue_vi": "Kiểm tra thời hạn báo cáo sự cố an ninh.",
    "situation_vi": "Câu hỏi 4 bài đọc Part 7: Thời gian tối đa để báo cáo sự cố màn hình bất thường.",
    "passage": "(Tham khảo văn bản NOVABANK SECURITY BULLETIN ở trên)",
    "stem": "How quickly must unusual computer screen behavior be reported?",
    "choices": [
      "Within fifteen minutes",
      "Within two business days",
      "At the end of the monthly shift",
      "Only after consulting coworkers"
    ],
    "answer": 0,
    "explanation_vi": "Mục 4 nêu rõ: 'report the event directly to the SOC Emergency Hotline at Ext. 5500 within fifteen minutes' -> Trong vòng 15 phút.",
    "trap": "Bẫy tự xử lý hoặc đợi hết tháng mới báo cáo.",
    "examTip": "Các từ chỉ giới hạn thời gian (within, by, prior to) luôn là trọng tâm câu hỏi chi tiết Part 7.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "hotline",
        "ipa": "/ˈhɒt.laɪn/",
        "pos": "n",
        "meaning": "đường dây nóng khẩn cấp"
      },
      {
        "word": "workstation",
        "ipa": "/ˈwɜːkˌsteɪ.ʃən/",
        "pos": "n",
        "meaning": "máy trạm làm việc"
      }
    ]
  },
  {
    "id": "c1-17",
    "chapter": 1,
    "part": 5,
    "speaker": "Sarah (Threat Hunter)",
    "dialogue_en": "We must ensure all sensitive customer account balances are protected with top-tier cryptography.",
    "dialogue_vi": "Chúng ta phải đảm bảo toàn bộ số dư tài khoản khách hàng nhạy cảm đều được bảo vệ bằng mật mã học hàng đầu.",
    "situation_vi": "02:40 - Kiểm tra hệ thống cơ sở dữ liệu lưu trữ thông tin thẻ tín dụng.",
    "stem": "NovaBank requires all sensitive customer records to be _______ encrypted before being transferred over the public internet.",
    "choices": [
      "securely",
      "security",
      "secure",
      "securing"
    ],
    "answer": 0,
    "explanation_vi": "Đứng trước phân từ/tính từ bị động 'encrypted' (được mã hóa) cần một phó từ (adverb) đuôi -ly để bổ nghĩa -> chọn 'securely' (được mã hóa một cách an toàn).",
    "trap": "Bẫy danh từ 'security' hoặc tính từ 'secure'.",
    "examTip": "Công thức quen thuộc Part 5: [to be + ADV + V3/ed] (to be securely encrypted).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Adverb Modification",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "securely",
        "ipa": "/sɪˈkjʊə.li/",
        "pos": "adv",
        "meaning": "một cách an toàn, chắc chắn"
      },
      {
        "word": "encrypted",
        "ipa": "/ɪnˈkrɪp.tɪd/",
        "pos": "adj",
        "meaning": "đã được mã hóa"
      }
    ]
  },
  {
    "id": "c1-18",
    "chapter": 1,
    "part": 2,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave asks about the incident response briefing with branch managers.",
    "dialogue_vi": "Dave hỏi về buổi họp báo cáo ứng phó sự cố với các giám đốc chi nhánh.",
    "situation_vi": "03:00 - Dave hỏi bạn về lịch họp khẩn lúc rạng sáng.",
    "stem": "Has the emergency response briefing been rescheduled for 4:00 AM or 5:00 AM?",
    "audioText": "Has the emergency response briefing been rescheduled for 4:00 AM or 5:00 AM?",
    "choices": [
      "Actually, it has been pushed back to 5:30 AM.",
      "Yes, the briefing was very informative.",
      "In the main executive boardroom."
    ],
    "answer": 0,
    "explanation_vi": "Đây là câu hỏi lựa chọn 'A or B' (4:00 AM hay 5:00 AM) -> Đáp án (A) 'Actually, it has been pushed back to 5:30 AM' cung cấp thông tin mốc thời gian điều chỉnh thực tế.",
    "trap": "Bẫy trả lời Yes/No cho câu hỏi lựa chọn Or (Phương án B), và bẫy trả lời phòng họp (địa điểm Where) ở phương án C.",
    "examTip": "Quy tắc vàng Part 2: Câu hỏi lựa chọn 'A or B' KHÔNG BAO GIỜ trả lời bằng Yes hoặc No.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Alternative Q&A",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "briefing",
        "ipa": "/ˈbriː.fɪŋ/",
        "pos": "n",
        "meaning": "buổi họp ngắn chỉ đạo nhiệm vụ"
      },
      {
        "word": "reschedule",
        "ipa": "/ˌriːˈskedʒ.uːl/",
        "pos": "v",
        "meaning": "đổi lại lịch trình"
      }
    ]
  },
  {
    "id": "c1-19",
    "chapter": 1,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "We must confirm that tonight's transaction snapshot has been safely backed up to the offline air-gapped vault.",
    "dialogue_vi": "Chúng ta phải xác nhận rằng bản chụp giao dịch đêm nay đã được sao lưu an toàn vào kho lưu trữ ngắt kết nối vật lý.",
    "situation_vi": "03:20 - Rà soát quy trình sao lưu dữ liệu tự động của máy chủ ngân hàng.",
    "stem": "Complete database snapshots _______ automatically to the secondary disaster recovery site every four hours.",
    "choices": [
      "are transmitted",
      "transmitting",
      "transmit",
      "have transmitted"
    ],
    "answer": 0,
    "explanation_vi": "Chủ ngữ là vật chịu tác động: 'Complete database snapshots' (các bản sao chụp cơ sở dữ liệu hoàn chỉnh). Hành động xảy ra định kỳ 'every four hours' nên cần thì Hiện tại đơn ở thể Bị động: 'are transmitted' (được truyền đi).",
    "trap": "Bẫy thể chủ động 'transmit' hoặc 'have transmitted' (bản sao chụp dữ liệu không thể tự truyền chính nó).",
    "examTip": "Chủ ngữ chỉ vật + Không có tân ngữ phía sau động từ -> 90% câu chọn dạng Bị động (to be + V3/ed).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Passive Voice",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "snapshot",
        "ipa": "/ˈsnæp.ʃɒt/",
        "pos": "n",
        "meaning": "bản chụp trạng thái dữ liệu tức thời"
      },
      {
        "word": "transmit",
        "ipa": "/trænzˈmɪt/",
        "pos": "v",
        "meaning": "truyền dẫn dữ liệu"
      }
    ]
  },
  {
    "id": "c1-20",
    "chapter": 1,
    "isBoss": true,
    "part": 5,
    "speaker": "HACKER / THREAT ACTOR (Phishing Wave)",
    "dialogue_en": "ALERT: Outbound botnet traffic detected! The attacker is attempting to validate stolen credentials!",
    "dialogue_vi": "BÁO ĐỘNG: Phát hiện lưu lượng botnet gửi ra ngoài! Kẻ tấn công đang cố gắng xác thực tài khoản đánh cắp!",
    "situation_vi": "[TRÙM 1 - CÂU 1/5] Kẻ tấn công mở đợt tấn công credential stuffing tự động!",
    "stem": "All personnel must strictly adhere _______ the newly revised password complexity standards.",
    "choices": [
      "to",
      "with",
      "at",
      "for"
    ],
    "answer": 0,
    "explanation_vi": "Cụm động từ cố định: 'adhere to' có nghĩa là tuân thủ chặt chẽ theo quy định/tiêu chuẩn.",
    "trap": "Bẫy dùng giới từ 'with' do nhầm với 'comply with'. Nhớ: 'adhere to' nhưng 'comply with'.",
    "examTip": "Cặp giới từ đối chiếu cực hay gặp trong TOEIC: [adhere TO = comply WITH = conform TO = abide BY].",
    "tags": {
      "part": "Part 5",
      "category": "Vocabulary",
      "topic": "Collocation",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "adhere to",
        "ipa": "/ədˈhɪər tuː/",
        "pos": "v",
        "meaning": "tuân thủ theo"
      },
      {
        "word": "complexity",
        "ipa": "/kəmˈplek.sə.ti/",
        "pos": "n",
        "meaning": "độ phức tạp"
      }
    ]
  },
  {
    "id": "c1-21",
    "chapter": 1,
    "isBoss": true,
    "part": 2,
    "speaker": "HACKER / THREAT ACTOR (Phishing Wave)",
    "dialogue_en": "Audio intrusion attempt on SOC voice gateway!",
    "dialogue_vi": "Kẻ tấn công cố gắng xâm nhập cổng thoại SOC!",
    "situation_vi": "[TRÙM 1 - CÂU 2/5] Dave gọi gấp qua bộ đàm yêu cầu bạn chặn dải IP độc hại ngay lập tức!",
    "stem": "Could you block these five malicious IP addresses on the external gateway?",
    "audioText": "Could you block these five malicious IP addresses on the external gateway?",
    "choices": [
      "Certainly, I will apply the firewall rule immediately.",
      "No, the address was printed on white paper.",
      "Because the gate is already closed."
    ],
    "answer": 0,
    "explanation_vi": "Lời yêu cầu lịch sự: 'Could you block...?' -> Đáp án (A) 'Certainly, I will apply the firewall rule immediately' (Chắc chắn rồi, tôi sẽ áp dụng luật tường lửa ngay lập tức) là câu phản hồi hợp tác chính xác.",
    "trap": "Bẫy lặp từ: (B) lặp từ 'address' và 'paper', (C) lặp 'gate' từ 'gateway'.",
    "examTip": "Dạng câu yêu cầu Part 2 (Could you / Would you please): Câu trả lời đồng ý thường dùng 'Certainly', 'Sure', 'Of course', 'Right away'.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Requests",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "certainly",
        "ipa": "/ˈsɜː.tən.li/",
        "pos": "adv",
        "meaning": "chắc chắn rồi"
      },
      {
        "word": "malicious",
        "ipa": "/məˈlɪʃ.əs/",
        "pos": "adj",
        "meaning": "có dã tâm độc hại"
      }
    ]
  },
  {
    "id": "c1-22",
    "chapter": 1,
    "isBoss": true,
    "part": 5,
    "speaker": "HACKER / THREAT ACTOR (Phishing Wave)",
    "dialogue_en": "ALERT: Unauthorized script injection detected in customer web portal!",
    "dialogue_vi": "BÁO ĐỘNG: Phát hiện chèn mã lệnh trái phép trên cổng thông tin khách hàng!",
    "situation_vi": "[TRÙM 1 - CÂU 3/5] Phát hiện lỗ hổng cho phép người dùng chưa xác thực truy cập tài liệu nhạy cảm.",
    "stem": "Unauthorized individuals are strictly forbidden from entering the server room _______ accompanied by a licensed security officer.",
    "choices": [
      "unless",
      "without",
      "despite",
      "except"
    ],
    "answer": 0,
    "explanation_vi": "Liên từ 'unless' (+ rút gọn phân từ 'accompanied by...') có nghĩa là 'trừ phi được tháp tùng bởi một sĩ quan an ninh có thẩm quyền'.",
    "trap": "Bẫy giới từ 'without' (cần đi với V-ing/Danh từ: without being accompanied) hoặc 'despite'.",
    "examTip": "Cấu trúc rút gọn với liên từ điều kiện: 'unless + V3/ed' (trừ phi được làm gì).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Conjunctions",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "forbidden",
        "ipa": "/fəˈbɪd.ən/",
        "pos": "adj",
        "meaning": "bị cấm"
      },
      {
        "word": "accompanied",
        "ipa": "/əˈkʌm.pə.nid/",
        "pos": "adj",
        "meaning": "được đi cùng, được tháp tùng"
      }
    ]
  },
  {
    "id": "c1-23",
    "chapter": 1,
    "isBoss": true,
    "part": 5,
    "speaker": "HACKER / THREAT ACTOR (Phishing Wave)",
    "dialogue_en": "ALERT: Final breach attempt targeting the corporate mail server DNS records!",
    "dialogue_vi": "BÁO ĐỘNG: Đợt tấn công cuối cùng nhắm vào bản ghi DNS của máy chủ thư tín nội bộ!",
    "situation_vi": "[TRÙM 1 - CÂU 4/5] Kẻ tấn công giả mạo tên miền hòng đánh sập bộ lọc thư rác của ngân hàng.",
    "stem": "The Chief Information Security Officer praised the SOC analysts for their _______ response to the midnight phishing breach.",
    "choices": [
      "prompt",
      "promptly",
      "promptness",
      "prompting"
    ],
    "answer": 0,
    "explanation_vi": "Vị trí nằm giữa tính từ sở hữu 'their' và danh từ 'response' cần một tính từ (adjective) để bổ nghĩa -> chọn 'prompt' (nhanh chóng, kịp thời). 'prompt response' = phản ứng kịp thời.",
    "trap": "Bẫy phó từ 'promptly' hoặc danh từ 'promptness'. Cụm 'their prompt response' là cụm danh từ hoàn chỉnh.",
    "examTip": "Cấu trúc cụm danh từ TOEIC: [Tính từ sở hữu + TÍNH TỪ + Danh từ chính] (their prompt response).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Word Form",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "prompt",
        "ipa": "/prɒmpt/",
        "pos": "adj",
        "meaning": "nhanh chóng, kịp thời"
      },
      {
        "word": "praise",
        "ipa": "/preɪz/",
        "pos": "v",
        "meaning": "khen ngợi, biểu dương"
      }
    ]
  },
  {
    "id": "c1-24",
    "chapter": 1,
    "isBoss": true,
    "part": 5,
    "speaker": "HACKER / THREAT ACTOR (Phishing Wave)",
    "dialogue_en": "CRITICAL FINALE: Lock the master firewall rule to terminate the botnet connection!",
    "dialogue_vi": "ĐÒN KẾT LIỄU: Khóa luật tường lửa tổng để ngắt toàn bộ kết nối của mạng botnet!",
    "situation_vi": "[TRÙM 1 - CÂU 5/5] Tung đòn quyết định đẩy lùi đợt tấn công Phishing của kẻ thù!",
    "stem": "_______ the emergency patch has been successfully deployed, all network services will resume standard operations.",
    "choices": [
      "Now that",
      "Although",
      "In spite of",
      "Even though"
    ],
    "answer": 0,
    "explanation_vi": "'Now that' là một liên từ phụ thuộc có nghĩa là 'Giờ đây khi mà / Vì thực tế là' (Now that the emergency patch has been deployed = Giờ đây khi bản vá khẩn đã được triển khai xong, mọi dịch vụ mạng sẽ trở lại hoạt động bình thường).",
    "trap": "Bẫy liên từ chỉ sự tương phản 'Although' / 'Even though' hoặc giới từ 'In spite of' (đi với danh từ).",
    "examTip": "'Now that' = 'Because now'. Sau 'Now that' luôn là một mệnh đề hoàn chỉnh (S + V) giải thích lý do cho kết quả ở mệnh đề sau.",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Conjunctions",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "deploy",
        "ipa": "/dɪˈplɔɪ/",
        "pos": "v",
        "meaning": "triển khai phần mềm"
      },
      {
        "word": "resume",
        "ipa": "/rɪˈzjuːm/",
        "pos": "v",
        "meaning": "bắt đầu lại, khôi phục lại"
      }
    ]
  },
  {
    "id": "c1-25",
    "chapter": 1,
    "part": 2,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave asks through the SOC intercom headset about the phishing report timeline.",
    "dialogue_vi": "Dave hỏi qua tai nghe bộ đàm SOC về thời hạn nộp báo cáo vụ tấn công phishing.",
    "situation_vi": "00:25 - Dave kiểm tra tiến độ tổng hợp danh sách nhân viên đã bấm vào liên kết phishing.",
    "stem": "Who is responsible for compiling the phishing incident report?",
    "audioText": "Who is responsible for compiling the phishing incident report?",
    "choices": [
      "Sarah will handle that assignment before sunrise.",
      "Yes, the incident was very alarming.",
      "To report any suspicious incoming phone calls."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi bắt đầu bằng 'Who' (Ai chịu trách nhiệm) -> (A) 'Sarah will handle that assignment...' (Sarah sẽ xử lý nhiệm vụ đó trước khi mặt trời mọc) trả lời trực tiếp cho người thực hiện.",
    "trap": "Bẫy Yes/No ở (B) (câu hỏi Wh- không bao giờ trả lời bằng Yes/No) và bẫy lặp từ 'report' ở (C) với câu trả lời dạng 'To V' (trả lời cho Why).",
    "examTip": "Câu hỏi Who thường có câu trả lời là tên người, chức vụ, bộ phận hoặc đại từ chỉ người.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Incident Response",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "compile",
        "ipa": "/kəmˈpaɪl/",
        "pos": "v",
        "meaning": "biên soạn, tổng hợp tài liệu"
      },
      {
        "word": "assignment",
        "ipa": "/əˈsaɪn.mənt/",
        "pos": "n",
        "meaning": "nhiệm vụ được giao"
      }
    ]
  },
  {
    "id": "c1-26",
    "chapter": 1,
    "part": 2,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave checks the location of the backup firewall hardware keys.",
    "dialogue_vi": "Dave hỏi vị trí cất giữ khóa bảo mật phần cứng của tường lửa dự phòng.",
    "situation_vi": "00:35 - Cần cấp quyền cấu hình khẩn cấp cho tường lửa FortiGate.",
    "stem": "Where did you store the spare authentication tokens?",
    "audioText": "Where did you store the spare authentication tokens?",
    "choices": [
      "In the locked metal cabinet beside server rack B.",
      "Tokens are used for two-factor authentication.",
      "No, we haven't received them yet."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi 'Where' (Ở đâu) -> (A) 'In the locked metal cabinet...' (Trong tủ kim loại khóa cạnh giá máy chủ B) chỉ rõ vị trí địa điểm.",
    "trap": "Bẫy định nghĩa giải thích ở (B) và bẫy Yes/No ở (C) đối với câu hỏi Where.",
    "examTip": "Câu hỏi 'Where' luôn ưu tiên tìm câu trả lời có giới từ chỉ vị trí (in, on, at, under, next to, beside).",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Authentication",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "spare",
        "ipa": "/speər/",
        "pos": "adj",
        "meaning": "dự phòng, để dành"
      },
      {
        "word": "cabinet",
        "ipa": "/ˈkæb.ɪ.nət/",
        "pos": "n",
        "meaning": "tủ đựng hồ sơ/thiết bị"
      }
    ]
  },
  {
    "id": "c1-27",
    "chapter": 1,
    "part": 2,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah asks why the proxy server bandwidth dropped suddenly.",
    "dialogue_vi": "Sarah hỏi lý do băng thông máy chủ proxy tụt giảm đột ngột.",
    "situation_vi": "00:50 - Lưu lượng mạng nội bộ có dấu hiệu nghẽn bất thường.",
    "stem": "Why did the proxy server shut down unexpectedly at midnight?",
    "audioText": "Why did the proxy server shut down unexpectedly at midnight?",
    "choices": [
      "Because an automated memory leak triggered a fail-safe restart.",
      "Yes, it was scheduled for tomorrow afternoon.",
      "Around fifteen hundred megabytes per second."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi 'Why' (Tại sao) -> (A) 'Because an automated memory leak...' giải thích nguyên nhân trực tiếp bằng liên từ 'Because'.",
    "trap": "Bẫy Yes/No ở (B) và bẫy trả lời cho câu hỏi How much / speed ở (C).",
    "examTip": "Câu hỏi 'Why' thường trả lời bằng Because, Due to, As, Since, hoặc cụm To + V (mục đích).",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Server Health",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "proxy",
        "ipa": "/ˈprɒk.si/",
        "pos": "n",
        "meaning": "máy chủ ủy quyền"
      },
      {
        "word": "fail-safe",
        "ipa": "/ˈfeɪl.seɪf/",
        "pos": "adj",
        "meaning": "chế độ tự ngắt an toàn"
      }
    ]
  },
  {
    "id": "c1-28",
    "chapter": 1,
    "part": 2,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave offers a choice between two actions regarding the suspicious IP.",
    "dialogue_vi": "Dave đưa ra câu hỏi lựa chọn giữa chặn IP hay theo dõi thêm.",
    "situation_vi": "01:05 - Cân nhắc giữa việc lập tức cách ly IP hay để hệ thống bẫy (honeypot) quan sát.",
    "stem": "Should we blacklist this suspicious IP immediately or monitor its packets for twenty minutes?",
    "audioText": "Should we blacklist this suspicious IP immediately or monitor its packets for twenty minutes?",
    "choices": [
      "Let's trace its origin for a short while before blocking it.",
      "Yes, I think it is an IP address.",
      "The black list is located in the top drawer."
    ],
    "answer": 0,
    "explanation_vi": "Đây là câu hỏi lựa chọn (Alternative question với 'or'). Đáp án (A) 'Let's trace its origin...' chọn phương án theo dõi trước.",
    "trap": "Bẫy trả lời Yes/No ở (B) (câu hỏi lựa chọn A or B TUYỆT ĐỐI không trả lời Yes/No) và bẫy lặp từ 'black list' ở (C).",
    "examTip": "Câu hỏi chứa 'A or B' không chọn đáp án có Yes/No. Câu trả lời thường chọn 1 trong 2, hoặc chọn cả hai (either/both), hoặc bác bỏ cả hai (neither).",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Decision Making",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "blacklist",
        "ipa": "/ˈblæk.lɪst/",
        "pos": "v",
        "meaning": "đưa vào danh sách đen ngăn chặn"
      },
      {
        "word": "trace",
        "ipa": "/treɪs/",
        "pos": "v",
        "meaning": "truy vết, lần theo dấu vết"
      }
    ]
  },
  {
    "id": "c1-29",
    "chapter": 1,
    "part": 2,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah makes a statement about the upcoming cybersecurity compliance audit.",
    "dialogue_vi": "Sarah đưa ra câu trần thuật về đợt kiểm toán an ninh sắp tới của ngân hàng.",
    "situation_vi": "01:15 - Sarah nhắc bạn về việc chuẩn bị bằng chứng log trước thanh tra.",
    "stem": "The external audit team is arriving earlier than anticipated tomorrow morning.",
    "audioText": "The external audit team is arriving earlier than anticipated tomorrow morning.",
    "choices": [
      "In that case, I will organize the access logs right now.",
      "No, the flight has not landed yet.",
      "He arrived at the conference on Wednesday."
    ],
    "answer": 0,
    "explanation_vi": "Câu đề bài là câu trần thuật (Statement) thông báo thông tin -> (A) 'In that case, I will organize the access logs right now' (Trong trường hợp đó, tôi sẽ sắp xếp log truy cập ngay bây giờ) là phản hồi tự nhiên và có tính hợp tác giải quyết vấn đề.",
    "trap": "Bẫy lặp thì quá khứ không liên quan 'arrived' ở (C) và bẫy suy diễn sai về chuyến bay ở (B).",
    "examTip": "Đối với câu trần thuật trong Part 2, câu trả lời đúng thường thể hiện sự đồng tình, đưa ra giải pháp tiếp nối hoặc ngạc nhiên.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Audit",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "anticipated",
        "ipa": "/ænˈtɪs.ɪ.peɪ.tɪd/",
        "pos": "adj",
        "meaning": "được dự tính trước"
      },
      {
        "word": "organize",
        "ipa": "/ˈɔː.ɡən.aɪz/",
        "pos": "v",
        "meaning": "sắp xếp, tổ chức"
      }
    ]
  },
  {
    "id": "c1-30",
    "chapter": 1,
    "part": 3,
    "speaker": "Dave & Sarah",
    "dialogue_en": "Dave: Sarah, did you review the spam quarantine log from the wealth management division?\nSarah: Yes, I noticed eight executives received an invitation to verify their corporate credit cards on an external domain.\nDave: That is definitely a spear-phishing attack. We need to notify IT Helpdesk to reset those eight accounts immediately.",
    "dialogue_vi": "Dave: Sarah, em đã kiểm tra nhật ký cách ly thư rác từ khối quản lý tài sản chưa?\nSarah: Rồi anh, em thấy có 8 giám đốc nhận được email mời xác thực thẻ tín dụng doanh nghiệp trên một tên miền ngoài.\nDave: Chắc chắn là tấn công Spear-Phishing rồi. Chúng ta phải báo bộ phận Helpdesk đổi mật khẩu 8 tài khoản đó ngay.",
    "situation_vi": "01:25 - Hội thoại giữa Dave và Sarah về chiến dịch lừa đảo nhắm vào khối khách hàng VIP.",
    "stem": "What are the speakers mainly discussing?",
    "audioText": "What are the speakers mainly discussing?",
    "choices": [
      "A deceptive email campaign targeting senior managers.",
      "The installation of new office credit card machines.",
      "Plans to relocate the bank's wealth management headquarters.",
      "A software demonstration presented by external consultants."
    ],
    "answer": 0,
    "explanation_vi": "Cả đoạn hội thoại bàn về 'spam quarantine log', 'eight executives received an invitation to verify corporate credit cards on an external domain' -> Đây là chiến dịch email giả mạo nhắm vào các giám đốc (deceptive email campaign targeting senior managers).",
    "trap": "Bẫy lặp từ 'credit card' ở (B) và 'wealth management' ở (C) nhưng sai lệch ngữ cảnh.",
    "examTip": "Câu hỏi về chủ đề chính (Main topic/discussing) luôn nằm ở 1-2 câu đầu tiên của đoạn thoại.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Main Idea",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "deceptive",
        "ipa": "/dɪˈsep.tɪv/",
        "pos": "adj",
        "meaning": "lừa dối, mang tính đánh lừa"
      },
      {
        "word": "executive",
        "ipa": "/ɪɡˈzek.jə.tɪv/",
        "pos": "n",
        "meaning": "cán bộ quản lý cấp cao"
      }
    ]
  },
  {
    "id": "c1-31",
    "chapter": 1,
    "part": 3,
    "speaker": "Dave & Sarah",
    "dialogue_en": "(Continuing Conversation 1)",
    "dialogue_vi": "(Tiếp tục Hội thoại 1)",
    "situation_vi": "Tìm hiểu chi tiết về số lượng người dùng bị ảnh hưởng trong vụ việc.",
    "stem": "According to Sarah, what did several employees receive?",
    "audioText": "According to Sarah, what did several employees receive?",
    "choices": [
      "An unexpected request to validate corporate card details.",
      "A discount voucher for online accounting software.",
      "An official notice announcing executive promotions.",
      "A confirmation receipt for an international wire transfer."
    ],
    "answer": 0,
    "explanation_vi": "Sarah nói rõ: 'eight executives received an invitation to verify their corporate credit cards on an external domain' -> tương đương với 'An unexpected request to validate corporate card details'.",
    "trap": "Bẫy chuyển khoản quốc tế ở (D) hoặc thông báo thăng chức ở (C).",
    "examTip": "Kỹ năng Paraphrasing trong TOEIC: 'invitation to verify' được diễn đạt lại thành 'request to validate'.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Detail",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "validate",
        "ipa": "/ˈvæl.ɪ.deɪt/",
        "pos": "v",
        "meaning": "xác minh tính hợp lệ"
      },
      {
        "word": "invitation",
        "ipa": "/ˌɪn.vɪˈteɪ.ʃən/",
        "pos": "n",
        "meaning": "lời mời, thông điệp mời gọi"
      }
    ]
  },
  {
    "id": "c1-32",
    "chapter": 1,
    "part": 3,
    "speaker": "Dave & Sarah",
    "dialogue_en": "(Continuing Conversation 1)",
    "dialogue_vi": "(Tiếp tục Hội thoại 1)",
    "situation_vi": "Hành động khắc phục tiếp theo mà Dave chỉ đạo.",
    "stem": "What action does Dave recommend taking immediately?",
    "audioText": "What action does Dave recommend taking immediately?",
    "choices": [
      "Instructing the helpdesk to reset compromised credentials.",
      "Purchasing additional firewall licenses from the vendor.",
      "Suspending all corporate credit card transactions permanently.",
      "Scheduling an emergency press conference with news reporters."
    ],
    "answer": 0,
    "explanation_vi": "Dave kết luận: 'We need to notify IT Helpdesk to reset those eight accounts immediately' -> tương đương 'Instructing the helpdesk to reset compromised credentials'.",
    "trap": "Bẫy cực đoan 'permanently' ở (C) và bẫy họp báo báo chí ở (D).",
    "examTip": "Câu hỏi cuối của Part 3 thường hỏi về hành động tiếp theo (What will the speakers do next / recommend). Lắng nghe kỹ lời thoại của người nói cuối cùng.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Next Action",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "compromised",
        "ipa": "/ˈkɒm.prə.maɪzd/",
        "pos": "adj",
        "meaning": "đã bị lộ, bị xâm phạm"
      },
      {
        "word": "credential",
        "ipa": "/krɪˈden.ʃəl/",
        "pos": "n",
        "meaning": "thông tin đăng nhập"
      }
    ]
  },
  {
    "id": "c1-33",
    "chapter": 1,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave checks the server room temperature regulations.",
    "dialogue_vi": "Dave nhắc nhở về quy định giám sát nhiệt độ phòng máy chủ.",
    "situation_vi": "Chủ điểm: Cặp liên từ chỉ nguyên nhân (Because of / Due to + Cụm danh từ).",
    "stem": "The primary firewall cluster was relocated to Server Room C _______ recent overheating issues in the basement.",
    "choices": [
      "because of",
      "although",
      "even if",
      "in spite"
    ],
    "answer": 0,
    "explanation_vi": "Đằng sau chỗ trống là một cụm danh từ 'recent overheating issues...' (các sự cố quá nhiệt gần đây), không phải mệnh đề có động từ chia thì. Cần một giới từ chỉ nguyên nhân -> chọn 'because of' (bởi vì).",
    "trap": "Bẫy liên từ 'although' (cần đi với mệnh đề S + V) và bẫy thiếu 'of' của 'in spite' (phải là in spite of).",
    "examTip": "Quy tắc ngữ pháp: [Because / Although + Mệnh đề S + V] đối lập với [Because of / Despite / In spite of + Cụm danh từ / V-ing].",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Conjunctions",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "cluster",
        "ipa": "/ˈklʌs.tər/",
        "pos": "n",
        "meaning": "cụm máy chủ liên kết"
      },
      {
        "word": "overheating",
        "ipa": "/ˌəʊ.vəˈhiː.tɪŋ/",
        "pos": "n",
        "meaning": "hiện tượng quá nhiệt"
      }
    ]
  },
  {
    "id": "c1-34",
    "chapter": 1,
    "part": 5,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah discusses employee compliance with workstation safety rules.",
    "dialogue_vi": "Sarah nhấn mạnh việc tuân thủ quy tắc khóa máy trạm khi rời bàn.",
    "situation_vi": "Chủ điểm: Từ loại - Chọn Phó từ (Adverb) bổ nghĩa cho động từ thường.",
    "stem": "Employees must _______ lock their computer screens whenever leaving their desks unattended.",
    "choices": [
      "consistently",
      "consistent",
      "consistency",
      "consisting"
    ],
    "answer": 0,
    "explanation_vi": "Đứng giữa trợ động từ khuyết thiếu 'must' và động từ chính 'lock' cần một phó từ (adverb) đuôi -ly để bổ nghĩa cho hành động -> chọn 'consistently' (phải luôn luôn/nhất quán khóa màn hình).",
    "trap": "Bẫy tính từ 'consistent' hoặc danh từ 'consistency'.",
    "examTip": "Vị trí vàng của Trạng từ: [Modal Verb + Trạng từ + Động từ nguyên thể]. Ví dụ: must strictly follow, will promptly reply, must consistently lock.",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Word Form",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "consistently",
        "ipa": "/kənˈsɪs.tənt.li/",
        "pos": "adv",
        "meaning": "nhất quán, trước sau như một"
      },
      {
        "word": "unattended",
        "ipa": "/ˌʌn.əˈten.dɪd/",
        "pos": "adj",
        "meaning": "không có người trông coi"
      }
    ]
  },
  {
    "id": "c1-35",
    "chapter": 1,
    "part": 5,
    "speaker": "Helen Kang (CISO)",
    "dialogue_en": "CISO Helen Kang issues a policy directive regarding external vendors.",
    "dialogue_vi": "Giám đốc Helen Kang ban hành chỉ thị rà soát các nhà cung ứng bên ngoài.",
    "situation_vi": "Chủ điểm: Từ vựng - Chọn tính từ phù hợp ngữ cảnh an toàn tài chính.",
    "stem": "NovaBank requires all third-party software vendors to maintain _______ security safeguards against data theft.",
    "choices": [
      "stringent",
      "reluctant",
      "fragile",
      "hesitant"
    ],
    "answer": 0,
    "explanation_vi": "Cần một tính từ bổ nghĩa cho 'security safeguards' (các biện pháp bảo vệ an ninh). 'Stringent' nghĩa là nghiêm ngặt, khắt khe -> 'stringent security safeguards' là cụm kết hợp từ (collocation) tự nhiên chuẩn mực.",
    "trap": "Các từ mang nghĩa tiêu cực không hợp logic: 'reluctant' (miễn cưỡng), 'fragile' (mong manh, dễ vỡ), 'hesitant' (do dự).",
    "examTip": "Collocation hay gặp trong TOEIC: stringent standards / regulations / safeguards (các tiêu chuẩn / quy định / biện pháp bảo vệ nghiêm ngặt).",
    "tags": {
      "part": "Part 5",
      "category": "Vocabulary",
      "topic": "Collocation",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "stringent",
        "ipa": "/ˈstrɪn.dʒənt/",
        "pos": "adj",
        "meaning": "nghiêm ngặt, khắt khe"
      },
      {
        "word": "safeguard",
        "ipa": "/ˈseɪf.ɡɑːd/",
        "pos": "n",
        "meaning": "biện pháp che chắn bảo vệ"
      }
    ]
  },
  {
    "id": "c1-36",
    "chapter": 1,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave reviews the SIEM threat intelligence log entries.",
    "dialogue_vi": "Dave kiểm tra các bản ghi nhật ký cảnh báo nguy cơ trên hệ thống SIEM.",
    "situation_vi": "Chủ điểm: Thể bị động (Passive Voice) của thì Hiện tại Hoàn thành.",
    "stem": "More than five hundred unauthorized login attempts _______ by the perimeter firewall since midnight.",
    "choices": [
      "have been intercepted",
      "have intercepted",
      "intercepting",
      "are intercepting"
    ],
    "answer": 0,
    "explanation_vi": "Chủ ngữ là vật 'More than five hundred unauthorized login attempts' (Hơn 500 nỗ lực đăng nhập trái phép), đi với tác nhân 'by the perimeter firewall' -> Cần dùng thể bị động (Passive Voice). Có mốc thời gian 'since midnight' -> thì Hiện tại hoàn thành bị động: [have/has been + V3/ed] -> chọn 'have been intercepted'.",
    "trap": "Bẫy thể chủ động 'have intercepted' (nhầm lẫn giữa chủ ngữ gây ra hành động và chịu tác động).",
    "examTip": "Dấu hiệu nhận biết: Có 'since + mốc thời gian' chia Hiện tại Hoàn thành. Chủ ngữ là vật + 'by...' -> ưu tiên chọn thể bị động (be + V3/ed).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Passive Voice",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "unauthorized",
        "ipa": "/ʌnˈɔː.θər.aɪzd/",
        "pos": "adj",
        "meaning": "trái phép, chưa được cấp quyền"
      },
      {
        "word": "intercept",
        "ipa": "/ˌɪn.təˈsept/",
        "pos": "v",
        "meaning": "đánh chặn, ngăn chặn giữa đường"
      }
    ]
  },
  {
    "id": "c1-37",
    "chapter": 1,
    "part": 5,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah explains why emergency measures were executed.",
    "dialogue_vi": "Sarah giải thích lý do thực hiện biện pháp ứng cứu khẩn cấp.",
    "situation_vi": "Chủ điểm: Cụm giới từ chỉ mục đích (In order to + Động từ nguyên thể).",
    "stem": "The network engineering team disabled remote desktop access _______ prevent further malicious propagation.",
    "choices": [
      "in order to",
      "as well as",
      "so that",
      "in case of"
    ],
    "answer": 0,
    "explanation_vi": "Phía sau là động từ nguyên thể 'prevent' (ngăn chặn). Cụm 'in order to + V-bare' dùng để chỉ mục đích (để làm gì) -> chọn 'in order to'.",
    "trap": "Bẫy 'so that' (cần đi với mệnh đề S + V, ví dụ: so that they could prevent) và 'in case of' (đi với cụm danh từ).",
    "examTip": "Phân biệt chỉ mục đích: [in order to / so as to + V-bare] >< [so that / in order that + S + can/could/will + V].",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Purpose Clause",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "propagation",
        "ipa": "/ˌprɒp.əˈɡeɪ.ʃən/",
        "pos": "n",
        "meaning": "sự lan truyền, phát tán"
      },
      {
        "word": "malicious",
        "ipa": "/məˈlɪʃ.əs/",
        "pos": "adj",
        "meaning": "hiểm độc, có ác ý"
      }
    ]
  },
  {
    "id": "c1-38",
    "chapter": 1,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave comments on the clarity of the new incident reporting handbook.",
    "dialogue_vi": "Dave đánh giá tài liệu hướng dẫn báo cáo sự cố an ninh mới.",
    "situation_vi": "Chủ điểm: Tính từ so sánh hơn (Comparative Adjectives) với phó từ bổ trợ.",
    "stem": "The revised incident management manual is considerably _______ than the previous version published last year.",
    "choices": [
      "more comprehensive",
      "comprehensively",
      "comprehensiveness",
      "most comprehensive"
    ],
    "answer": 0,
    "explanation_vi": "Có từ 'than' ở phía sau cho thấy đây là cấu trúc so sánh hơn. Tính từ dài 'comprehensive' đi với 'more'. 'Considerably' là phó từ chỉ mức độ nhấn mạnh cho so sánh hơn -> chọn 'more comprehensive'.",
    "trap": "Bẫy dạng so sánh nhất 'most comprehensive' hoặc phó từ 'comprehensively'.",
    "examTip": "Các phó từ chuyên dùng nhấn mạnh cho so sánh hơn trong TOEIC: much, far, significantly, considerably, substantially + [Hình thức so sánh hơn].",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Comparison",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "considerably",
        "ipa": "/kənˈsɪd.ər.ə.bli/",
        "pos": "adv",
        "meaning": "đáng kể, nhiều"
      },
      {
        "word": "comprehensive",
        "ipa": "/ˌkɒm.prɪˈhen.sɪv/",
        "pos": "adj",
        "meaning": "toàn diện, bao quát"
      }
    ]
  },
  {
    "id": "c1-39",
    "chapter": 1,
    "part": 5,
    "speaker": "Helen Kang (CISO)",
    "dialogue_en": "Helen Kang specifies which employee group must attend the seminar.",
    "dialogue_vi": "CISO Helen Kang nêu rõ đối tượng nhân viên đủ điều kiện tham dự hội thảo.",
    "situation_vi": "Chủ điểm: Cấu trúc đi kèm giới từ (Eligible for + Danh từ).",
    "stem": "Only analysts who have completed their probationary period are _______ for the advanced ethical hacking workshop.",
    "choices": [
      "eligible",
      "capable",
      "reluctant",
      "probable"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc thông dụng: 'to be eligible for something' (đủ tư cách / đủ điều kiện để nhận hoặc tham gia cái gì) -> chọn 'eligible'.",
    "trap": "Bẫy từ 'capable' (thường đi với giới từ 'of': capable of doing sth).",
    "examTip": "Cụm tính từ + giới từ quen thuộc trong TOEIC: eligible for N / eligible to V (đủ điều kiện), capable of V-ing (có năng lực), responsible for (chịu trách nhiệm).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Prepositional Idioms",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "probationary",
        "ipa": "/prəˈbeɪ.ʃən.ər.i/",
        "pos": "adj",
        "meaning": "thời gian thử việc"
      },
      {
        "word": "eligible",
        "ipa": "/ˈel.ɪ.dʒə.bəl/",
        "pos": "adj",
        "meaning": "đủ điều kiện, xứng đáng"
      }
    ]
  },
  {
    "id": "c1-40",
    "chapter": 1,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave advises on how to handle confidential customer audit findings.",
    "dialogue_vi": "Dave lưu ý về tính bảo mật của báo cáo kiểm toán khách hàng.",
    "situation_vi": "Chủ điểm: Đại từ phản thân (Reflexive Pronouns) dùng để nhấn mạnh.",
    "stem": "The CISO _______ signed the emergency executive order authorizing server isolation.",
    "choices": [
      "herself",
      "her",
      "she",
      "hers"
    ],
    "answer": 0,
    "explanation_vi": "Câu đã có đầy đủ chủ ngữ 'The CISO' và động từ chính 'signed'. Chỗ trống đứng ngay sau chủ ngữ dùng để nhấn mạnh chính chủ thể đã tự tay thực hiện hành động -> chọn đại từ phản thân 'herself'.",
    "trap": "Bẫy đại từ tân ngữ 'her' hoặc đại từ sở hữu 'hers'.",
    "examTip": "Đại từ phản thân đứng ngay sau Chủ ngữ hoặc ở cuối câu đóng vai trò nhấn mạnh: 'S + [myself/himself/herself] + V' mang nghĩa 'chính ai đó tự làm việc gì'.",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Pronouns",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "executive order",
        "ipa": "/ɪɡˈzek.jə.tɪv ˈɔː.dər/",
        "pos": "n",
        "meaning": "lệnh điều hành khẩn cấp"
      },
      {
        "word": "isolation",
        "ipa": "/ˌaɪ.səˈleɪ.ʃən/",
        "pos": "n",
        "meaning": "sự cách ly cô lập mạng"
      }
    ]
  },
  {
    "id": "c1-41",
    "chapter": 1,
    "part": 5,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah discusses the necessity of having redundant electrical generators.",
    "dialogue_vi": "Sarah nói về tầm quan trọng của hệ thống phát điện dự phòng cho máy chủ.",
    "situation_vi": "Chủ điểm: Từ vựng - Chọn danh từ phù hợp nghĩa trong kinh doanh & CNTT.",
    "stem": "NovaBank established a comprehensive _______ plan to maintain data integrity during major power disruptions.",
    "choices": [
      "contingency",
      "advertisement",
      "hesitation",
      "subscription"
    ],
    "answer": 0,
    "explanation_vi": "Cụm danh từ 'contingency plan' là thuật ngữ quen thuộc chỉ 'kế hoạch dự phòng / phương án ứng phó biến cố khẩn cấp' -> chọn 'contingency'.",
    "trap": "Các từ không ăn nhập ngữ cảnh kỹ thuật: 'advertisement' (quảng cáo), 'hesitation' (sự ngập ngừng), 'subscription' (đăng ký theo kỳ).",
    "examTip": "Collocation kinh điển TOEIC Part 5 & 7: contingency plan (kế hoạch dự phòng), business continuity plan (kế hoạch duy trì kinh doanh liên tục).",
    "tags": {
      "part": "Part 5",
      "category": "Vocabulary",
      "topic": "Business Terms",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "contingency",
        "ipa": "/kənˈtɪn.dʒən.si/",
        "pos": "n",
        "meaning": "kế hoạch dự phòng rủi ro"
      },
      {
        "word": "disruption",
        "ipa": "/dɪsˈrʌp.ʃən/",
        "pos": "n",
        "meaning": "sự gián đoạn hoạt động"
      }
    ]
  },
  {
    "id": "c1-42",
    "chapter": 1,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave orders the prompt notification of branch managers.",
    "dialogue_vi": "Dave yêu cầu thông báo khẩn cho các giám đốc chi nhánh ngân hàng.",
    "situation_vi": "Chủ điểm: Thể Giả định thức (Subjunctive Mood) với động từ 'mandate'.",
    "stem": "Corporate policy mandates that each branch manager _______ the incident log at the beginning of each business day.",
    "choices": [
      "review",
      "reviews",
      "reviewed",
      "reviewing"
    ],
    "answer": 0,
    "explanation_vi": "Động từ 'mandates' (bắt buộc / yêu cầu) là động từ cầu khiến. Cấu trúc giả định thức: [S1 + mandate / demand / require / recommend + that + S2 + (should) + V-bare] -> Động từ theo sau luôn ở dạng nguyên thể không chia (V-bare), bất kể chủ ngữ là số ít -> chọn 'review'.",
    "trap": "Bẫy chia động từ theo chủ ngữ ngôi thứ 3 số ít 'each branch manager' thành 'reviews' hoặc quá khứ 'reviewed'.",
    "examTip": "Công thức giả định thức (Subjunctive Mood): S + [demand / require / request / recommend / insist / mandate] + that + S + [V nguyên thể không 'to'].",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Subjunctive Mood",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "mandate",
        "ipa": "/ˈmæn.deɪt/",
        "pos": "v",
        "meaning": "ra lệnh, bắt buộc thi hành"
      },
      {
        "word": "incident log",
        "ipa": "/ˈɪn.sɪ.dənt lɒɡ/",
        "pos": "n",
        "meaning": "nhật ký ghi nhận sự cố"
      }
    ]
  },
  {
    "id": "c1-43",
    "chapter": 1,
    "part": 6,
    "speaker": "AEGIS AI (Security Bulletin)",
    "dialogue_en": "Internal Security Advisory regarding upcoming multi-factor authentication enrollment.",
    "dialogue_vi": "Bản tin An ninh Nội bộ về việc đăng ký bắt buộc xác thực đa yếu tố MFA.",
    "situation_vi": "Điền từ vào chỗ trống [1] trong thông báo an ninh gửi toàn ngân hàng.",
    "passage": "INTERNAL MEMORANDUM\nTO: NovaBank Regional Staff\nFROM: Office of the Chief Information Security Officer\nDATE: November 10, 2026\nSUBJECT: Mandatory Multi-Factor Authentication Upgrade\n\nIn accordance with updated financial sector security compliance guidelines, NovaBank will roll out an upgraded Multi-Factor Authentication (MFA) system on Friday evening. This new security protocol is designed to provide _______ [1] protection against unauthorized credential harvesting and phishing attacks. All branch personnel must complete the identity registration procedure _______ [2] November 14 at 5:00 PM. Failure to complete registration by the stated deadline will result in temporary suspension of your workstation login rights. _______ [3]. We appreciate your prompt cooperation in keeping our banking infrastructure secure.",
    "stem": "Select the best answer for blank [1]:",
    "choices": [
      "enhanced",
      "enhancing",
      "enhancement",
      "enhance"
    ],
    "answer": 0,
    "explanation_vi": "Đứng trước danh từ 'protection' (sự bảo vệ) cần một tính từ bổ nghĩa mang nghĩa 'được nâng cao / được tăng cường' -> chọn phân từ đóng vai trò tính từ 'enhanced' (sự bảo vệ được tăng cường).",
    "trap": "Bẫy danh từ 'enhancement' (tạo thành cụm danh từ ghép không chuẩn xác) hoặc động từ nguyên thể 'enhance'.",
    "examTip": "Các tính từ dạng phân từ V-ed hay gặp: enhanced security (an ninh được tăng cường), revised policy (chính sách được sửa đổi), customized service (dịch vụ tùy biến).",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Participle Adjective",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "enhanced",
        "ipa": "/ɪnˈhɑːnst/",
        "pos": "adj",
        "meaning": "được tăng cường, cải tiến"
      },
      {
        "word": "harvesting",
        "ipa": "/ˈhɑː.vɪ.stɪŋ/",
        "pos": "n",
        "meaning": "hành vi thu thập lén lút"
      }
    ]
  },
  {
    "id": "c1-44",
    "chapter": 1,
    "part": 6,
    "speaker": "AEGIS AI (Security Bulletin)",
    "dialogue_en": "(Continuing Part 6 Memorandum)",
    "dialogue_vi": "(Tiếp tục Bản tin Part 6)",
    "situation_vi": "Điền giới từ chỉ thời hạn chót trước một mốc thời gian cụ thể tại chỗ trống [2].",
    "passage": "(Tham khảo văn bản thông báo ở trên)",
    "stem": "Select the best answer for blank [2]:",
    "choices": [
      "prior to",
      "during",
      "between",
      "toward"
    ],
    "answer": 0,
    "explanation_vi": "Ý nghĩa câu: Tất cả nhân sự chi nhánh phải hoàn thành quy trình đăng ký danh tính TRƯỚC ngày 14 tháng 11 lúc 5:00 chiều. Cụm 'prior to' đồng nghĩa với 'before' (trước một mốc thời gian) -> chọn 'prior to'.",
    "trap": "Bẫy 'between' (cần cấu trúc between A and B) hoặc 'during' (trong suốt khoảng thời gian, không chỉ hạn chót).",
    "examTip": "Cụm giới từ chỉ thời gian rất hay xuất hiện trong TOEIC: prior to = before (trước khi), subsequent to = after (sau khi).",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Prepositions",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "prior to",
        "ipa": "/ˈpraɪ.ər tuː/",
        "pos": "prep",
        "meaning": "trước thời điểm nào đó"
      },
      {
        "word": "suspension",
        "ipa": "/səˈspen.ʃən/",
        "pos": "n",
        "meaning": "sự đình chỉ tạm thời"
      }
    ]
  },
  {
    "id": "c1-45",
    "chapter": 1,
    "part": 6,
    "speaker": "AEGIS AI (Security Bulletin)",
    "dialogue_en": "Select the sentence that logically fits the paragraph at blank [3].",
    "dialogue_vi": "Chọn câu văn có tính kết nối mạch lạc nhất tại chỗ trống [3].",
    "situation_vi": "Điền cả câu văn phù hợp vào văn bản thông báo an ninh.",
    "passage": "(Tham khảo văn bản thông báo ở trên)",
    "stem": "Select the sentence that best fits blank [3]:",
    "choices": [
      "Detailed step-by-step setup guides have been uploaded to the internal staff intranet.",
      "The annual company picnic has been postponed due to heavy rainfall.",
      "New office desks will be delivered to the branch early next month.",
      "Several customers expressed dissatisfaction with the new checking account fees."
    ],
    "answer": 0,
    "explanation_vi": "Câu trước nói về việc nhân viên phải hoàn thành đăng ký trước hạn chót. Câu (A) 'Detailed step-by-step setup guides have been uploaded...' (Tài liệu hướng dẫn cài đặt từng bước chi tiết đã được tải lên mạng nội bộ nhân viên) là câu hỗ trợ hoàn hảo giải thích cách nhân viên có thể thực hiện đăng ký.",
    "trap": "Các phương án (B), (C), (D) lạc đề hoàn toàn (nói về dã ngoại picnic, bàn làm việc, hoặc phí tài khoản khách hàng).",
    "examTip": "Dạng bài điền câu Part 6: Chú ý tính nhất quán của chủ đề văn bản và từ nối logic giữa câu trước và câu sau.",
    "tags": {
      "part": "Part 6",
      "category": "Reading",
      "topic": "Sentence Insertion",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "step-by-step",
        "ipa": "/ˌstep.baɪˈstep/",
        "pos": "adj",
        "meaning": "từng bước một, chi tiết"
      },
      {
        "word": "intranet",
        "ipa": "/ˈɪn.trə.net/",
        "pos": "n",
        "meaning": "mạng máy tính nội bộ doanh nghiệp"
      }
    ]
  },
  {
    "id": "c1-46",
    "chapter": 1,
    "part": 7,
    "speaker": "AEGIS AI (System Notice)",
    "dialogue_en": "Security Policy Document: Bring Your Own Device (BYOD) Guidelines.",
    "dialogue_vi": "Tài liệu Chính sách An ninh: Hướng dẫn Sử dụng Thiết bị Cá nhân (BYOD).",
    "situation_vi": "02:00 - Bạn đọc bản quy chuẩn an ninh BYOD của NovaBank để trả lời câu hỏi 46 - 49.",
    "passage": "NOVABANK INFORMATION SECURITY POLICY DOCUMENT\nPOLICY REF: POL-SEC-2026-08\nEFFECTIVE DATE: OCTOBER 1, 2026\nSUBJECT: MOBILE DEVICE & REMOTE WORK ACCESS PROTOCOL\n\n1. Purpose & Scope\nThis policy defines mandatory requirements for employees accessing NovaBank confidential records, customer accounts, and internal communications using personal smartphones, tablets, or laptops (BYOD). Compliance with this protocol is compulsory for all permanent personnel and temporary independent contractors.\n\n2. Mandatory Security Controls\nBefore any personal device is granted access to the NovaBank corporate VPN network, it must be inspected by an authorized IT Security representative. The device must have corporate Mobile Device Management (MDM) software installed. This application enforces six-digit alphanumeric passcode locking, enables full storage encryption, and allows the SOC to remotely erase corporate databases if the device is lost or reported stolen.\n\n3. Prohibited Activities\nEmployees are strictly prohibited from storing unencrypted customer banking data on personal cloud drives or external USB flash drives. Furthermore, jailbroken or rooted mobile operating systems are barred from connecting to bank services under any circumstances.\n\n4. Incident Reporting\nIf a registered mobile device is misplaced, compromised, or stolen, the owner must notify the NovaBank 24/7 Security Operations Center helpline within two hours of discovery.",
    "stem": "What is the primary purpose of this policy document?",
    "choices": [
      "To outline mandatory security rules for personal devices accessing corporate systems.",
      "To announce a discount program for employees purchasing new smartphones.",
      "To explain how branch accountants can file travel expense reimbursement forms.",
      "To solicit employee opinions regarding remote working schedule options."
    ],
    "answer": 0,
    "explanation_vi": "Đoạn 1 'Purpose & Scope' khẳng định rõ: 'This policy defines mandatory requirements for employees accessing NovaBank confidential records... using personal smartphones, tablets, or laptops (BYOD)' -> Mục đích chính là quy định các nguyên tắc an ninh bắt buộc đối với thiết bị cá nhân.",
    "trap": "Bẫy mua sắm smartphone giảm giá ở (B) hoặc thanh toán công tác phí ở (C).",
    "examTip": "Câu hỏi mục đích chính (Main Purpose) trong Part 7 luôn được trả lời ở đoạn văn mở đầu (Purpose / Objective).",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Gist / Purpose",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "compulsory",
        "ipa": "/kəmˈpʌl.sər.i/",
        "pos": "adj",
        "meaning": "mang tính bắt buộc"
      },
      {
        "word": "passcode",
        "ipa": "/ˈpɑːs.kəʊd/",
        "pos": "n",
        "meaning": "mã khóa truy cập"
      }
    ]
  },
  {
    "id": "c1-47",
    "chapter": 1,
    "part": 7,
    "speaker": "AEGIS AI (System Notice)",
    "dialogue_en": "(Continuing BYOD Policy Review)",
    "dialogue_vi": "(Tiếp tục rà soát Chính sách BYOD)",
    "situation_vi": "Tìm hiểu yêu cầu kỹ thuật bắt buộc trước khi kết nối mạng nội bộ.",
    "passage": "(Tham khảo văn bản Chính sách BYOD ở câu c1-46)",
    "stem": "What must be installed on personal devices before connecting to the corporate network?",
    "choices": [
      "Mobile Device Management (MDM) monitoring software.",
      "Commercial graphic design editing applications.",
      "A high-speed peer-to-peer file sharing program.",
      "Third-party social networking messengers."
    ],
    "answer": 0,
    "explanation_vi": "Đoạn 2 chỉ rõ: 'The device must have corporate Mobile Device Management (MDM) software installed' -> Phải cài đặt phần mềm quản lý thiết bị di động (MDM).",
    "trap": "Các loại phần mềm không liên quan như đồ họa (B), chia sẻ file torrent (C) hoặc mạng xã hội (D).",
    "examTip": "Kỹ thuật scanning trong Part 7: Tìm kiếm cụm từ khóa 'must have... installed' trong bài để định vị câu trả lời nhanh chóng.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "enforce",
        "ipa": "/ɪnˈfɔːs/",
        "pos": "v",
        "meaning": "thực thi, bắt buộc tuân thủ"
      },
      {
        "word": "erase",
        "ipa": "/ɪˈreɪz/",
        "pos": "v",
        "meaning": "xóa sạch dữ liệu"
      }
    ]
  },
  {
    "id": "c1-48",
    "chapter": 1,
    "part": 7,
    "speaker": "AEGIS AI (System Notice)",
    "dialogue_en": "(Continuing BYOD Policy Review)",
    "dialogue_vi": "(Tiếp tục rà soát Chính sách BYOD)",
    "situation_vi": "Xác định hành động bị nghiêm cấm theo chính sách ngân hàng.",
    "passage": "(Tham khảo văn bản Chính sách BYOD ở câu c1-46)",
    "stem": "According to the document, which activity is explicitly forbidden?",
    "choices": [
      "Saving unencrypted bank customer data on personal cloud drives.",
      "Connecting laptops to office wireless internet access points.",
      "Carrying corporate mobile phones outside company headquarters.",
      "Updating operating systems to the latest security release."
    ],
    "answer": 0,
    "explanation_vi": "Mục 3 'Prohibited Activities' nêu rõ: 'Employees are strictly prohibited from storing unencrypted customer banking data on personal cloud drives...' -> Nghiêm cấm lưu trữ dữ liệu khách hàng chưa mã hóa lên dịch vụ đám mây cá nhân.",
    "trap": "Các hoạt động bình thường hoặc được khuyến khích như cập nhật hệ điều hành (D) hay kết nối wifi (B).",
    "examTip": "Chú ý các từ đồng nghĩa chỉ sự cấm đoán: prohibited = forbidden = barred = not permitted.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail / Negative",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "prohibited",
        "ipa": "/prəˈhɪb.ɪ.tɪd/",
        "pos": "adj",
        "meaning": "bị cấm chỉ"
      },
      {
        "word": "unencrypted",
        "ipa": "/ʌn.ɪnˈkrɪp.tɪd/",
        "pos": "adj",
        "meaning": "chưa được mã hóa"
      }
    ]
  },
  {
    "id": "c1-49",
    "chapter": 1,
    "part": 7,
    "speaker": "AEGIS AI (System Notice)",
    "dialogue_en": "(Continuing BYOD Policy Review)",
    "dialogue_vi": "(Tiếp tục rà soát Chính sách BYOD)",
    "situation_vi": "Xác định mốc thời gian quy định khi xảy ra mất mát thiết bị.",
    "passage": "(Tham khảo văn bản Chính sách BYOD ở câu c1-46)",
    "stem": "How soon must an employee report a stolen mobile device to the SOC?",
    "choices": [
      "Within two hours of discovery.",
      "By the end of the current fiscal quarter.",
      "Within forty-eight business hours.",
      "Only after filing an official police report."
    ],
    "answer": 0,
    "explanation_vi": "Mục 4 'Incident Reporting' quy định: 'the owner must notify the NovaBank 24/7 Security Operations Center helpline within two hours of discovery' -> Trong vòng 2 giờ kể từ khi phát hiện.",
    "trap": "Bẫy 48 giờ ở (C) hoặc chờ báo cảnh sát ở (D).",
    "examTip": "Các câu hỏi về số liệu, thời gian (How long, How soon, How much) rất dễ scan bằng cách tìm số trong văn bản.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "misplaced",
        "ipa": "/ˌmɪsˈpleɪst/",
        "pos": "adj",
        "meaning": "bị thất lạc, để quên đâu mất"
      },
      {
        "word": "discovery",
        "ipa": "/dɪˈskʌv.ər.i/",
        "pos": "n",
        "meaning": "sự phát hiện"
      }
    ]
  },
  {
    "id": "c1-50",
    "chapter": 1,
    "part": 7,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Technical Incident Log excerpt from the perimeter firewall.",
    "dialogue_vi": "Trích đoạn Nhật ký Sự cố Kỹ thuật từ tường lửa vành đai.",
    "situation_vi": "02:30 - Phân tích bảng báo cáo kỹ thuật tường lửa để trả lời các câu 50 - 52.",
    "passage": "INCIDENT INVESTIGATION SUMMARY\nINVESTIGATOR: Dave Miller (SOC Lead Analyst)\nTARGET ASSET: NovaBank Perimeter Gateway 01\nTIMEFRAME: 00:15 AM - 01:45 AM, November 10\n\nEXECUTIVE OVERVIEW:\nBetween 00:15 AM and 01:10 AM, our automated Intrusion Detection System (IDS) recorded an abnormal surge in outbound HTTP requests originating from accounting workstation WS-ACC-402. The traffic pattern exhibited signs of automated domain generation algorithms (DGA), attempting to establish communication with an unknown command-and-control server located in Eastern Europe.\n\nACTIONS TAKEN:\n1. 01:12 AM: Host WS-ACC-402 was immediately disconnected from the internal local area network via remote port shutdown.\n2. 01:25 AM: Physical memory dump and hard drive forensic images were captured by forensic investigator Sarah Lin.\n3. 01:40 AM: The external destination IP addresses (185.220.101.5 and 185.220.101.6) were permanently blacklisted across all border routers.\n\nCONCLUSION & NEXT STEPS:\nNo database exfiltration has been identified at this stage. Workstation WS-ACC-402 will remain offline until a clean operating system reinstallation is finalized tomorrow morning.",
    "stem": "What first alerted the security team to suspicious activity on workstation WS-ACC-402?",
    "choices": [
      "An abnormal volume of outbound HTTP requests detected by the IDS.",
      "A telephone call from a concerned customer in Eastern Europe.",
      "The physical theft of the accountant's desktop hard drive.",
      "An explicit ransom note displayed on the workstation monitor."
    ],
    "answer": 0,
    "explanation_vi": "Đoạn 'EXECUTIVE OVERVIEW' nêu rõ: 'our automated Intrusion Detection System (IDS) recorded an abnormal surge in outbound HTTP requests originating from accounting workstation WS-ACC-402' -> Dấu hiệu đầu tiên là sự gia tăng bất thường của các yêu cầu HTTP gửi ra ngoài.",
    "trap": "Bẫy cuộc gọi từ khách hàng ở (B) hoặc thư đòi tiền chuộc ở (D).",
    "examTip": "Đọc kỹ phần mở đầu của báo cáo điều tra để nắm được nguyên nhân kích hoạt cảnh báo ban đầu.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "surge",
        "ipa": "/sɜːdʒ/",
        "pos": "n",
        "meaning": "sự dâng trào, tăng đột biến"
      },
      {
        "word": "originating",
        "ipa": "/əˈrɪdʒ.ən.eɪ.tɪŋ/",
        "pos": "adj",
        "meaning": "bắt nguồn từ"
      }
    ]
  },
  {
    "id": "c1-51",
    "chapter": 1,
    "part": 7,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "(Continuing Incident Log Review)",
    "dialogue_vi": "(Tiếp tục rà soát Nhật ký Sự cố)",
    "situation_vi": "Tìm hiểu nhiệm vụ của chuyên gia pháp y Sarah Lin trong báo cáo.",
    "passage": "(Tham khảo báo cáo kỹ thuật ở câu c1-50)",
    "stem": "What task was performed by Sarah Lin at 01:25 AM?",
    "choices": [
      "Acquiring forensic memory and disk images from the infected computer.",
      "Purchasing replacement hardware components from an electronics retailer.",
      "Submitting an insurance claim for damaged server infrastructure.",
      "Writing a press statement for the NovaBank public relations team."
    ],
    "answer": 0,
    "explanation_vi": "Mục 2 trong 'ACTIONS TAKEN' ghi nhận: '01:25 AM: Physical memory dump and hard drive forensic images were captured by forensic investigator Sarah Lin' -> Thu thập ảnh chụp bộ nhớ và đĩa cứng phục vụ điều tra pháp y.",
    "trap": "Các phương án không có trong văn bản như mua phần cứng mới (B) hay bồi thường bảo hiểm (C).",
    "examTip": "Tìm mốc thời gian 01:25 AM trong bài để đối chiếu hành động chính xác của nhân vật.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "forensic image",
        "ipa": "/fəˈren.zɪk ˈɪm.ɪdʒ/",
        "pos": "n",
        "meaning": "ảnh sao chép toàn vẹn phục vụ pháp y số"
      },
      {
        "word": "dump",
        "ipa": "/dʌmp/",
        "pos": "n",
        "meaning": "bản trích xuất bộ nhớ ram"
      }
    ]
  },
  {
    "id": "c1-52",
    "chapter": 1,
    "part": 7,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "(Continuing Incident Log Review)",
    "dialogue_vi": "(Tiếp tục rà soát Nhật ký Sự cố)",
    "situation_vi": "Xác định tình trạng hiện tại của máy trạm kế toán.",
    "passage": "(Tham khảo báo cáo kỹ thuật ở câu c1-50)",
    "stem": "What will happen to workstation WS-ACC-402 next?",
    "choices": [
      "It will remain disconnected until its operating system is completely reinstalled.",
      "It will be donated to a local educational charitable organization.",
      "It will be upgraded to function as the primary bank domain controller.",
      "It will be sold at an internal employee equipment auction."
    ],
    "answer": 0,
    "explanation_vi": "Phần 'CONCLUSION & NEXT STEPS' khẳng định: 'Workstation WS-ACC-402 will remain offline until a clean operating system reinstallation is finalized tomorrow morning' -> Tiếp tục cách ly cho đến khi cài lại hệ điều hành sạch.",
    "trap": "Bẫy quyên góp từ thiện (B) hoặc đem đấu giá (D).",
    "examTip": "Câu hỏi 'What will happen next' nằm ở phần kết luận hoặc các bước tiếp theo (Next Steps / Future Action).",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Inference / Next Step",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "reinstallation",
        "ipa": "/ˌriː.ɪn.stəˈleɪ.ʃən/",
        "pos": "n",
        "meaning": "việc cài đặt lại hệ thống"
      },
      {
        "word": "offline",
        "ipa": "/ˌɒfˈlaɪn/",
        "pos": "adj",
        "meaning": "ngắt kết nối mạng"
      }
    ]
  },
  {
    "id": "c1-p1-01",
    "chapter": 1,
    "part": 1,
    "speaker": "ETS TOEIC Narrator",
    "dialogue_en": "Look at the picture marked Number 1 in your test book. Listen to the four statements and select the one that best describes the picture.",
    "dialogue_vi": "Quan sát bức tranh số 1. Lắng nghe 4 phương án mô tả và chọn câu miêu tả chính xác nhất hình ảnh bạn thấy.",
    "situation_vi": "00:05 - Bàn làm việc trung tâm giám sát an ninh SOC NovaBank lúc nửa đêm.",
    "imageSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 280\" width=\"100%\" height=\"auto\" style=\"border-radius: 8px; background: #0f172a;\">\n      <defs>\n        <linearGradient id=\"screenGrad1\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n          <stop offset=\"0%\" stop-color=\"#1e293b\"/>\n          <stop offset=\"100%\" stop-color=\"#0f172a\"/>\n        </linearGradient>\n        <linearGradient id=\"chartGrad1\" x1=\"0%\" y1=\"100%\" x2=\"0%\" y2=\"0%\">\n          <stop offset=\"0%\" stop-color=\"#06b6d4\" stop-opacity=\"0.2\"/>\n          <stop offset=\"100%\" stop-color=\"#06b6d4\" stop-opacity=\"0.9\"/>\n        </linearGradient>\n      </defs>\n      <!-- Background Wall -->\n      <rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" fill=\"#0b1120\"/>\n      <!-- Desk Surface -->\n      <polygon points=\"20,240 480,240 500,280 0,280\" fill=\"#1e293b\"/>\n      <line x1=\"0\" y1=\"240\" x2=\"500\" y2=\"240\" stroke=\"#334155\" stroke-width=\"2\"/>\n\n      <!-- Central Large Monitor -->\n      <rect x=\"160\" y=\"50\" width=\"180\" height=\"110\" rx=\"4\" fill=\"url(#screenGrad1)\" stroke=\"#475569\" stroke-width=\"3\"/>\n      <rect x=\"240\" y=\"160\" width=\"20\" height=\"35\" fill=\"#334155\"/>\n      <polygon points=\"220,195 280,195 290,205 210,205\" fill=\"#475569\"/>\n      <!-- SIEM Telemetry Wave on Center Monitor -->\n      <path d=\"M 170 120 Q 190 80, 210 110 T 250 90 T 290 125 T 330 85\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2.5\"/>\n      <circle cx=\"250\" cy=\"90\" r=\"3\" fill=\"#ef4444\"/>\n      <rect x=\"170\" y=\"60\" width=\"45\" height=\"12\" rx=\"2\" fill=\"#0284c7\" opacity=\"0.8\"/>\n      <text x=\"173\" y=\"69\" fill=\"#ffffff\" font-size=\"7\" font-family=\"monospace\" font-weight=\"bold\">SIEM:LIVE</text>\n      <!-- Telemetry Bars -->\n      <rect x=\"175\" y=\"135\" width=\"8\" height=\"15\" fill=\"#06b6d4\"/>\n      <rect x=\"187\" y=\"130\" width=\"8\" height=\"20\" fill=\"#06b6d4\"/>\n      <rect x=\"199\" y=\"125\" width=\"8\" height=\"25\" fill=\"#06b6d4\"/>\n      <rect x=\"211\" y=\"120\" width=\"8\" height=\"30\" fill=\"#38bdf8\"/>\n\n      <!-- Left Angled Monitor -->\n      <polygon points=\"40,70 145,85 145,185 40,175\" fill=\"#1e293b\" stroke=\"#475569\" stroke-width=\"2.5\"/>\n      <rect x=\"85\" y=\"180\" width=\"15\" height=\"30\" fill=\"#334155\"/>\n      <ellipse cx=\"92\" cy=\"210\" rx=\"25\" ry=\"6\" fill=\"#475569\"/>\n      <line x1=\"55\" y1=\"110\" x2=\"135\" y2=\"120\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n      <line x1=\"55\" y1=\"130\" x2=\"125\" y2=\"140\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n      <line x1=\"55\" y1=\"150\" x2=\"130\" y2=\"160\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n\n      <!-- Right Angled Monitor -->\n      <polygon points=\"355,85 460,70 460,175 355,185\" fill=\"#1e293b\" stroke=\"#475569\" stroke-width=\"2.5\"/>\n      <rect x=\"400\" y=\"180\" width=\"15\" height=\"30\" fill=\"#334155\"/>\n      <ellipse cx=\"407\" cy=\"210\" rx=\"25\" ry=\"6\" fill=\"#475569\"/>\n      <circle cx=\"410\" cy=\"125\" r=\"22\" fill=\"none\" stroke=\"#ef4444\" stroke-width=\"2\" stroke-dasharray=\"4 2\"/>\n      <line x1=\"370\" y1=\"155\" x2=\"445\" y2=\"145\" stroke=\"#10b981\" stroke-width=\"2\"/>\n\n      <!-- Keyboard & Mouse -->\n      <polygon points=\"190,245 310,245 325,270 175,270\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n      <ellipse cx=\"360\" cy=\"255\" rx=\"10\" ry=\"14\" fill=\"#0f172a\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n\n      <!-- Coffee Mug & Pen -->\n      <rect x=\"120\" y=\"242\" width=\"16\" height=\"20\" rx=\"3\" fill=\"#f59e0b\"/>\n      <path d=\"M 136 247 Q 144 252, 136 258\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n      <line x1=\"100\" y1=\"260\" x2=\"115\" y2=\"248\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n\n      <!-- Engineer Silhouette sitting in chair -->\n      <path d=\"M 220 280 Q 250 215, 280 280 Z\" fill=\"#0f172a\" opacity=\"0.85\"/>\n      <circle cx=\"250\" cy=\"215\" r=\"16\" fill=\"#0f172a\" opacity=\"0.85\"/>\n      <!-- Headset on silhouette -->\n      <path d=\"M 235 212 A 15 15 0 0 1 265 212\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.5\"/>\n      <circle cx=\"234\" cy=\"215\" r=\"4\" fill=\"#38bdf8\"/>\n    </svg>",
    "stem": "Look at the photograph and select the statement that best describes what you see.",
    "audioText": "(A) An analyst is monitoring active displays in a control room. (B) The computer monitors have all been turned off. (C) A technician is replacing the keyboard on the desk. (D) Several employees are exiting the conference room.",
    "choices": [
      "An analyst is monitoring active displays in a control room.",
      "The computer monitors have all been turned off.",
      "A technician is replacing the keyboard on the desk.",
      "Several employees are exiting the conference room."
    ],
    "answer": 0,
    "explanation_vi": "Bức tranh thể hiện rõ một chuyên viên an ninh đang ngồi quan sát các màn hình hiển thị biểu đồ và dữ liệu giám sát trong phòng điều khiển SOC -> Câu (A) miêu tả hoàn toàn chính xác.",
    "trap": "Câu (B) sai vì các màn hình đều đang bật sáng; Câu (C) bẫy hành động 'is replacing' (không có ai đang thay bàn phím); Câu (D) bẫy từ vựng 'exiting conference room' hoàn toàn không xuất hiện trong hình.",
    "examTip": "Bẫy hành động thì hiện tại tiếp diễn: Luôn quan sát xem chủ thể có thực sự đang thực hiện động tác đó hay không (monitoring vs replacing).",
    "tags": {
      "part": "Part 1",
      "category": "Photographs",
      "topic": "Monitoring",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "monitor",
        "ipa": "/ˈmɒn.ɪ.tər/",
        "pos": "v",
        "meaning": "giám sát, theo dõi"
      },
      {
        "word": "display",
        "ipa": "/dɪˈspleɪ/",
        "pos": "n",
        "meaning": "màn hình hiển thị"
      }
    ]
  },
  {
    "id": "c1-p1-02",
    "chapter": 1,
    "part": 1,
    "speaker": "ETS TOEIC Narrator",
    "dialogue_en": "Look at the picture marked Number 2 in your test book. Listen to the four statements and select the one that best describes the picture.",
    "dialogue_vi": "Quan sát bức tranh số 2. Lắng nghe 4 phương án và chọn câu miêu tả đúng nhất vị trí và trạng thái thiết bị phòng máy chủ.",
    "situation_vi": "00:45 - Khu vực tủ rack máy chủ trung tâm dữ liệu Core Banking NovaBank.",
    "imageSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 280\" width=\"100%\" height=\"auto\" style=\"border-radius: 8px; background: #0b1329;\">\n      <!-- Grid floor perspective -->\n      <polygon points=\"50,280 450,280 380,180 120,180\" fill=\"#1e293b\" opacity=\"0.6\"/>\n      <line x1=\"120\" y1=\"180\" x2=\"50\" y2=\"280\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n      <line x1=\"380\" y1=\"180\" x2=\"450\" y2=\"280\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n      <line x1=\"200\" y1=\"180\" x2=\"170\" y2=\"280\" stroke=\"#334155\" stroke-dasharray=\"4 4\"/>\n      <line x1=\"300\" y1=\"180\" x2=\"330\" y2=\"280\" stroke=\"#334155\" stroke-dasharray=\"4 4\"/>\n\n      <!-- Left Server Cabinet -->\n      <rect x=\"70\" y=\"30\" width=\"100\" height=\"210\" rx=\"4\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2.5\"/>\n      <!-- Server Blades -->\n      <rect x=\"80\" y=\"45\" width=\"80\" height=\"18\" fill=\"#1e293b\" stroke=\"#334155\"/>\n      <circle cx=\"90\" cy=\"54\" r=\"2.5\" fill=\"#10b981\"/>\n      <circle cx=\"98\" cy=\"54\" r=\"2.5\" fill=\"#10b981\"/>\n      <rect x=\"80\" y=\"70\" width=\"80\" height=\"18\" fill=\"#1e293b\" stroke=\"#334155\"/>\n      <circle cx=\"90\" cy=\"79\" r=\"2.5\" fill=\"#10b981\"/>\n      <circle cx=\"98\" cy=\"79\" r=\"2.5\" fill=\"#f59e0b\"/>\n      <rect x=\"80\" y=\"95\" width=\"80\" height=\"18\" fill=\"#1e293b\" stroke=\"#334155\"/>\n      <circle cx=\"90\" cy=\"104\" r=\"2.5\" fill=\"#10b981\"/>\n      <circle cx=\"98\" cy=\"104\" r=\"2.5\" fill=\"#10b981\"/>\n      <rect x=\"80\" y=\"120\" width=\"80\" height=\"18\" fill=\"#1e293b\" stroke=\"#334155\"/>\n      <circle cx=\"90\" cy=\"129\" r=\"2.5\" fill=\"#10b981\"/>\n      <circle cx=\"98\" cy=\"129\" r=\"2.5\" fill=\"#ef4444\"/>\n      <rect x=\"80\" y=\"145\" width=\"80\" height=\"35\" fill=\"#1e293b\" stroke=\"#334155\"/>\n      <!-- Cable bundles on side -->\n      <path d=\"M 165 50 Q 185 100, 165 170\" fill=\"none\" stroke=\"#0284c7\" stroke-width=\"4\"/>\n      <path d=\"M 168 60 Q 190 120, 168 190\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"3\"/>\n\n      <!-- Right Server Cabinet -->\n      <rect x=\"330\" y=\"30\" width=\"100\" height=\"210\" rx=\"4\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"2.5\"/>\n      <rect x=\"340\" y=\"45\" width=\"80\" height=\"18\" fill=\"#1e293b\" stroke=\"#334155\"/>\n      <circle cx=\"350\" cy=\"54\" r=\"2.5\" fill=\"#10b981\"/>\n      <circle cx=\"358\" cy=\"54\" r=\"2.5\" fill=\"#10b981\"/>\n      <rect x=\"340\" y=\"70\" width=\"80\" height=\"18\" fill=\"#1e293b\" stroke=\"#334155\"/>\n      <circle cx=\"350\" cy=\"79\" r=\"2.5\" fill=\"#10b981\"/>\n      <rect x=\"340\" y=\"95\" width=\"80\" height=\"18\" fill=\"#1e293b\" stroke=\"#334155\"/>\n      <circle cx=\"350\" cy=\"104\" r=\"2.5\" fill=\"#10b981\"/>\n      <circle cx=\"358\" cy=\"104\" r=\"2.5\" fill=\"#10b981\"/>\n      <!-- Ventilation Grilles -->\n      <line x1=\"350\" y1=\"130\" x2=\"410\" y2=\"130\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n      <line x1=\"350\" y1=\"140\" x2=\"410\" y2=\"140\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n      <line x1=\"350\" y1=\"150\" x2=\"410\" y2=\"150\" stroke=\"#475569\" stroke-width=\"1.5\"/>\n\n      <!-- Technician standing in corridor holding diagnostic tablet -->\n      <rect x=\"235\" y=\"110\" width=\"30\" height=\"60\" rx=\"4\" fill=\"#1e3a8a\"/>\n      <circle cx=\"250\" cy=\"95\" r=\"12\" fill=\"#f8fafc\"/>\n      <line x1=\"240\" y1=\"170\" x2=\"240\" y2=\"240\" stroke=\"#0f172a\" stroke-width=\"9\"/>\n      <line x1=\"260\" y1=\"170\" x2=\"260\" y2=\"240\" stroke=\"#0f172a\" stroke-width=\"9\"/>\n      <!-- Tablet glowing blue in hands -->\n      <rect x=\"238\" y=\"130\" width=\"24\" height=\"16\" rx=\"2\" fill=\"#38bdf8\" stroke=\"#ffffff\" stroke-width=\"1\"/>\n      <!-- Identification Badge on lanyard -->\n      <rect x=\"247\" y=\"118\" width=\"6\" height=\"8\" rx=\"1\" fill=\"#f59e0b\"/>\n    </svg>",
    "stem": "Look at the photograph and select the statement that best describes what you see.",
    "audioText": "(A) Server racks are being disassembled on the floor. (B) A technician is inspecting equipment in a server room. (C) The data center is completely vacant. (D) Heavy boxes are stacked in front of the doorway.",
    "choices": [
      "Server racks are being disassembled on the floor.",
      "A technician is inspecting equipment in a server room.",
      "The data center is completely vacant.",
      "Heavy boxes are stacked in front of the doorway."
    ],
    "answer": 1,
    "explanation_vi": "Hình vẽ thể hiện rõ một kỹ thuật viên cầm máy tính bảng chẩn đoán đang đứng kiểm tra các tủ máy chủ trong phòng trung tâm dữ liệu -> Câu (B) miêu tả hoàn toàn chính xác.",
    "trap": "Câu (A) bẫy 'being disassembled' (tháo rời); Câu (C) bẫy 'completely vacant' (hoàn toàn vắng người trong khi có kỹ thuật viên đứng đó); Câu (D) không có thùng hàng nào.",
    "examTip": "Cảnh giác với thì tiếp diễn bị động 'being + V3' trong Part 1: Cụm từ 'are being disassembled' chỉ đúng khi có người đang tháo các thanh tủ.",
    "tags": {
      "part": "Part 1",
      "category": "Photographs",
      "topic": "Server Room",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "inspect",
        "ipa": "/ɪnˈspekt/",
        "pos": "v",
        "meaning": "thanh tra, kiểm tra kỹ lưỡng"
      },
      {
        "word": "rack",
        "ipa": "/ræk/",
        "pos": "n",
        "meaning": "giá đỡ, tủ chứa máy chủ"
      }
    ]
  },
  {
    "id": "c1-p4-01",
    "chapter": 1,
    "part": 4,
    "talkId": "talk-c1-01",
    "speaker": "Helen Kang (CISO Broadcast)",
    "dialogue_en": "Good morning, NovaBank staff. This is Chief Information Security Officer Helen Kang with an urgent security broadcast. Late last night, our Security Operations Center detected a coordinated phishing campaign attempting to compromise employee credentials. While perimeter firewalls intercepted the majority of suspicious messages, several malicious attachments may have reached internal mailboxes. As a precautionary measure, all personnel are required to change their network passwords before five o'clock this afternoon using our self-service portal. Please make sure your new password contains at least fourteen characters, including numbers and symbols. If you notice any unusual password reset requests or unprompted authentication prompts on your mobile device, please report them to extension four-one-one-zero immediately. Thank you for your vigilance.",
    "dialogue_vi": "Xin chào toàn thể nhân viên NovaBank. Tôi là Giám đốc An toàn Thông tin Helen Kang với thông báo an ninh khẩn. Đêm qua, Trung tâm SOC đã phát hiện một chiến dịch phishing quy mô lớn nhắm vào tài khoản nhân viên. Mặc dù tường lửa đã chặn phần lớn, một số tệp đính kèm độc hại có thể đã lọt vào hộp thư nội bộ. Để phòng ngừa, tất cả nhân viên phải đổi mật khẩu mạng trước 17:00 chiều nay qua cổng tự phục vụ. Mật khẩu mới phải dài ít nhất 14 ký tự gồm chữ số và ký tự đặc biệt. Nếu thấy bất kỳ yêu cầu đặt lại mật khẩu đáng ngờ nào trên điện thoại, hãy báo ngay cho máy lẻ 4110. Cảm ơn sự cảnh giác của các bạn.",
    "situation_vi": "01:00 - Lắng nghe thông báo an ninh khẩn cấp từ Giám đốc CISO Helen Kang phát trên loa nội bộ ngân hàng.",
    "stem": "What is the primary purpose of the broadcast announcement?",
    "audioText": "Good morning, NovaBank staff. This is Chief Information Security Officer Helen Kang with an urgent security broadcast. Late last night, our Security Operations Center detected a coordinated phishing campaign attempting to compromise employee credentials. While perimeter firewalls intercepted the majority of suspicious messages, several malicious attachments may have reached internal mailboxes. As a precautionary measure, all personnel are required to change their network passwords before five o'clock this afternoon using our self-service portal. Please make sure your new password contains at least fourteen characters, including numbers and symbols. If you notice any unusual password reset requests or unprompted authentication prompts on your mobile device, please report them to extension four-one-one-zero immediately. Thank you for your vigilance. Question: What is the primary purpose of the broadcast announcement?",
    "choices": [
      "To announce an urgent requirement for password changes",
      "To introduce a newly appointed department manager",
      "To schedule routine server hardware maintenance",
      "To review quarterly corporate financial earnings"
    ],
    "answer": 0,
    "explanation_vi": "CISO Helen Kang phát đi thông báo khẩn: 'As a precautionary measure, all personnel are required to change their network passwords before five o'clock this afternoon' -> Mục đích chính là thông báo yêu cầu đổi mật khẩu khẩn cấp.",
    "trap": "Bẫy bảo trì máy chủ (server maintenance) và bẫy công bố báo cáo tài chính quý.",
    "examTip": "Câu hỏi mục đích chính (purpose/topic) của bài nói Part 4 luôn được giải đáp ngay trong 2-3 câu mở đầu của người nói.",
    "tags": {
      "part": "Part 4",
      "category": "Listening",
      "topic": "Security Broadcast",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "precautionary",
        "ipa": "/prɪˈkɔː.ʃən.ər.i/",
        "pos": "adj",
        "meaning": "có tính chất phòng ngừa"
      },
      {
        "word": "vigilance",
        "ipa": "/ˈvɪdʒ.əl.əns/",
        "pos": "n",
        "meaning": "sự cảnh giác, tỉnh táo"
      }
    ]
  },
  {
    "id": "c1-p4-02",
    "chapter": 1,
    "part": 4,
    "talkId": "talk-c1-01",
    "speaker": "Helen Kang (CISO Broadcast)",
    "dialogue_en": "All personnel are required to change their network passwords before five o'clock this afternoon using our self-service portal.",
    "dialogue_vi": "Tất cả nhân viên bắt buộc phải đổi mật khẩu mạng trước 17:00 chiều nay qua cổng tự phục vụ.",
    "situation_vi": "01:00 - Câu hỏi chi tiết về thời hạn và yêu cầu thực hiện của thông báo CISO.",
    "stem": "What are employees instructed to do before 5:00 PM today?",
    "audioText": "Question: What are employees instructed to do before 5:00 PM today?",
    "choices": [
      "Submit their overtime timesheets to payroll",
      "Update their network passwords via the self-service portal",
      "Attend an emergency briefing in the auditorium",
      "Shut down their desktop workstations completely"
    ],
    "answer": 1,
    "explanation_vi": "Helen Kang chỉ thị: 'all personnel are required to change their network passwords before five o'clock this afternoon using our self-service portal' -> Cập nhật mật khẩu qua cổng tự phục vụ.",
    "trap": "Bẫy 'shut down workstations' và bẫy nộp bảng chấm công 'timesheets'.",
    "examTip": "Khi nghe thấy mốc thời gian ('before five o'clock'), hãy tập trung ghi nhớ động từ hành động đi kèm ngay trước hoặc sau mốc thời gian đó.",
    "tags": {
      "part": "Part 4",
      "category": "Listening",
      "topic": "Deadline Instruction",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "portal",
        "ipa": "/ˈpɔː.təl/",
        "pos": "n",
        "meaning": "cổng thông tin điện tử nội bộ"
      },
      {
        "word": "personnel",
        "ipa": "/ˌpɜː.sənˈel/",
        "pos": "n",
        "meaning": "toàn thể nhân viên, nhân sự"
      }
    ]
  },
  {
    "id": "c1-p4-03",
    "chapter": 1,
    "part": 4,
    "talkId": "talk-c1-01",
    "speaker": "Helen Kang (CISO Broadcast)",
    "dialogue_en": "If you notice any unusual password reset requests or unprompted authentication prompts on your mobile device, please report them to extension four-one-one-zero immediately.",
    "dialogue_vi": "Nếu thấy yêu cầu đặt lại mật khẩu bất thường hoặc thông báo xác thực không rõ nguồn gốc trên điện thoại, hãy báo ngay cho số máy lẻ 4110.",
    "situation_vi": "01:00 - Câu hỏi về kênh liên hệ khi phát hiện bất thường.",
    "stem": "How should staff members report suspicious activity?",
    "audioText": "Question: How should staff members report suspicious activity?",
    "choices": [
      "By sending an email to the marketing director",
      "By posting a message on the public company website",
      "By calling telephone extension 4110 immediately",
      "By submitting a written memo by the end of the week"
    ],
    "answer": 2,
    "explanation_vi": "Thông báo nêu rõ: 'please report them to extension four-one-one-zero immediately' -> Gọi điện ngay cho số máy lẻ 4110.",
    "trap": "Bẫy gửi email cho giám đốc marketing hoặc gửi văn bản vào cuối tuần (trái ngược với tính chất khẩn cấp 'immediately').",
    "examTip": "Số máy lẻ (extension number) trong bài nghe TOEIC thường được đọc từng chữ số riêng biệt ('four-one-one-zero' thay vì 'four thousand...').",
    "tags": {
      "part": "Part 4",
      "category": "Listening",
      "topic": "Contact Protocol",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "extension",
        "ipa": "/ɪkˈsten.ʃən/",
        "pos": "n",
        "meaning": "số máy lẻ điện thoại nội bộ"
      },
      {
        "word": "unprompted",
        "ipa": "/ʌnˈprɒmp.tɪd/",
        "pos": "adj",
        "meaning": "tự phát, không có yêu cầu trước"
      }
    ]
  }
];
