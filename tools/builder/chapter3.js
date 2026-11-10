/**
 * CHAPTER 3 QUESTIONS (20 câu hỏi hoàn chỉnh)
 * Bối cảnh: Vá lỗ hổng Zero-Day & Kiểm soát thiệt hại hệ thống tại NovaBank
 */
module.exports = [
  // --- Tình huống 1: Part 5 - Phát hiện lỗ hổng Zero-Day (Từ loại) ---
  {
    id: "c3-01",
    chapter: 3,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "The threat intelligence feed just confirmed that an unpatched Zero-Day vulnerability in our web framework is being actively exploited.",
    dialogue_vi: "Kênh dữ liệu tình báo mối đe dọa vừa xác nhận một lỗ hổng Zero-Day chưa có bản vá trong khung web của chúng ta đang bị khai thác tích cực.",
    situation_vi: "06:00 - Dave phát hiện kẻ tấn công đang nhắm vào lỗ hổng trong cổng thanh toán trực tuyến.",
    stem: "Software developers must _______ inspect the web application code to locate the unpatched vulnerability.",
    choices: ["thoroughly", "thorough", "thoroughness", "more thorough"],
    answer: 0,
    explanation_vi: "Đứng giữa trợ động từ khuyết thiếu 'must' và động từ chính 'inspect' cần một phó từ (adverb) đuôi -ly -> chọn 'thoroughly' (kiểm tra một cách kỹ lưỡng, cặn kẽ).",
    trap: "Bẫy tính từ 'thorough' hoặc danh từ 'thoroughness'.",
    examTip: "Vị trí phó từ kinh điển: [Modal verb + ADV + V(nguyên mẫu)] (must thoroughly inspect).",
    tags: { part: "Part 5", category: "Grammar", topic: "Adverb", difficulty: "Easy" },
    vocab: [
      { word: "thoroughly", ipa: "/ˈθʌr.ə.li/", pos: "adv", meaning: "một cách kỹ lưỡng, thấu đáo" },
      { word: "inspect", ipa: "/ɪnˈspekt/", pos: "v", meaning: "thanh tra, kiểm tra" }
    ]
  },

  // --- Tình huống 2: Part 2 - Nghe Q&A: Lịch triển khai bản vá khẩn cấp ---
  {
    id: "c3-02",
    chapter: 3,
    part: 2,
    speaker: "Sarah (Threat Hunter)",
    dialogue_en: "Sarah asks when the core banking server patch will be applied.",
    dialogue_vi: "Sarah hỏi khi nào bản vá máy chủ ngân hàng cốt lõi sẽ được áp dụng.",
    situation_vi: "06:15 - Sarah hỏi về thời điểm bảo trì khẩn cấp để vá lỗ hổng Zero-Day.",
    stem: "When is the emergency zero-day patch scheduled to be deployed?",
    audioText: "When is the emergency zero-day patch scheduled to be deployed?",
    choices: [
      "During the scheduled maintenance window at 7:00 AM.",
      "Yes, the patch is completely free.",
      "Because the software vendor called us."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi bắt đầu bằng 'When' (Khi nào) hỏi mốc thời gian -> (A) 'During the scheduled maintenance window at 7:00 AM' (Trong khung giờ bảo trì dự kiến lúc 7 giờ sáng) là câu trả lời trực tiếp chính xác.",
    trap: "Bẫy Yes/No đối với câu hỏi Wh- (B), và bẫy trả lời lý do 'Because' cho câu hỏi 'When' (C).",
    examTip: "Câu hỏi 'When' -> Tìm câu trả lời có mốc thời gian cụ thể (During the window at 7:00 AM, Next Monday, In two hours).",
    tags: { part: "Part 2", category: "Listening", topic: "Scheduling", difficulty: "Easy" },
    vocab: [
      { word: "maintenance", ipa: "/ˈmeɪn.tən.əns/", pos: "n", meaning: "hoạt động bảo trì" },
      { word: "window", ipa: "/ˈwɪn.dəʊ/", pos: "n", meaning: "khung thời gian (kỹ thuật)" }
    ]
  },

  // --- Tình huống 3: Part 5 - Câu bị động & Thu hồi chứng chỉ SSL ---
  {
    id: "c3-03",
    chapter: 3,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Any compromised digital certificates must be permanently invalidated across all banking portals.",
    dialogue_vi: "Bất kỳ chứng chỉ số nào bị lộ đều phải bị hủy bỏ vĩnh viễn trên mọi cổng thông tin ngân hàng.",
    situation_vi: "06:30 - Dave chỉ đạo thu hồi và cấp lại chứng chỉ bảo mật mã hóa SSL/TLS.",
    stem: "All compromised cryptographic keys must _______ immediately to prevent unauthorized decryption.",
    choices: ["be revoked", "revoke", "revoking", "have revoked"],
    answer: 0,
    explanation_vi: "Chủ ngữ là vật: 'cryptographic keys' (các khóa mật mã). Đứng sau động từ khuyết thiếu 'must' nên cần thể bị động: 'must be revoked' (phải bị thu hồi).",
    trap: "Bẫy thể chủ động 'revoke' hoặc 'have revoked'.",
    examTip: "Chủ ngữ chỉ vật (cryptographic keys) + Sau chỗ trống không có tân ngữ -> Chọn thể Bị động [be + V3/ed].",
    tags: { part: "Part 5", category: "Grammar", topic: "Passive Voice", difficulty: "Medium" },
    vocab: [
      { word: "cryptographic", ipa: "/ˌkrɪp.təˈɡræf.ɪk/", pos: "adj", meaning: "thuộc về mật mã học" },
      { word: "revoke", ipa: "/rɪˈvəʊk/", pos: "v", meaning: "thu hồi, hủy bỏ" }
    ]
  },

  // --- Tình huống 4: Part 6 - Đoạn văn Quy định Chuyển đổi Hardware Token (4 câu: c3-04 đến c3-07) ---
  {
    id: "c3-04",
    chapter: 3,
    part: 6,
    speaker: "AEGIS AI (Token Directive)",
    dialogue_en: "MEMORANDUM: MANDATORY HARDWARE TOKEN MIGRATION",
    dialogue_vi: "BẢN GHI NHỚ: BẮT BUỘC CHUYỂN ĐỔI SANG TOKEN PHẦN CỨNG",
    situation_vi: "06:45 - CISO ban hành thông báo bắt buộc chuyển đổi phương thức xác thực phần cứng.",
    passage: "MEMORANDUM\nTO: All Systems Engineering Staff\nFROM: Chief Information Security Office\nDATE: November 10, 06:45 AM\nSUBJECT: Mandatory Security Token Migration\n\nAs part of our continuous commitment to safeguarding internal assets, NovaBank is transitioning to hardware-based cryptographic keys. Beginning next Monday, the legacy mobile verification codes will no longer be _______ [1] for accessing production databases. Employees must collect their physical security tokens from the IT Operations Center on the 3rd floor _______ [2] Friday, November 14. Before picking up your token, please complete the brief online hardware registration form available on the employee intranet. _______ [3], the authentication system will automatically revoke any legacy access keys that remain unverified after the cut-off date. _______ [4]. We appreciate your cooperation in maintaining an impenetrable corporate network perimeter.",
    stem: "Select the best answer for blank [1]:",
    choices: ["accepted", "acceptance", "accept", "acceptably"],
    answer: 0,
    explanation_vi: "Đứng sau cụm 'will no longer be' cần một quá khứ phân từ/tính từ ở thể bị động -> 'accepted' (sẽ không còn được chấp nhận nữa).",
    trap: "Bẫy danh từ 'acceptance' hoặc động từ nguyên mẫu 'accept'.",
    examTip: "Cấu trúc bị động phủ định: [will no longer be + V3/ed] (will no longer be accepted).",
    tags: { part: "Part 6", category: "Grammar", topic: "Passive Participle", difficulty: "Easy" },
    vocab: [
      { word: "legacy", ipa: "/ˈleɡ.ə.si/", pos: "adj", meaning: "kế thừa, cũ kỹ (công nghệ cũ)" },
      { word: "accepted", ipa: "/əkˈsep.tɪd/", pos: "adj", meaning: "được chấp thuận" }
    ]
  },
  {
    id: "c3-05",
    chapter: 3,
    part: 6,
    speaker: "AEGIS AI (Token Directive)",
    dialogue_en: "Continuing blank [2] in Token Migration Memorandum.",
    dialogue_vi: "Tiếp tục xem xét chỗ trống [2] trong Bản ghi nhớ chuyển đổi Token.",
    situation_vi: "Chọn giới từ chỉ thời hạn chót nhận thiết bị xác thực phần cứng.",
    passage: "(Tham khảo văn bản MEMORANDUM ở trên)",
    stem: "Select the best answer for blank [2]:",
    choices: ["by", "at", "through", "during"],
    answer: 0,
    explanation_vi: "Giới từ 'by' kết hợp với một mốc thời hạn (Friday, November 14) để chỉ thời điểm muộn nhất phải hoàn thành ('muộn nhất là trước thứ Sáu, ngày 14 tháng 11').",
    trap: "Bẫy 'at' (chỉ giờ giấc cụ thể như at 5 PM), 'during' (khoảng thời gian diễn ra sự kiện).",
    examTip: "Quy tắc giới từ thời gian TOEIC: [BY + Mốc thời gian] = Hành động hoàn thành muộn nhất tại thời điểm đó (deadline).",
    tags: { part: "Part 6", category: "Grammar", topic: "Preposition of Time", difficulty: "Medium" },
    vocab: [
      { word: "by", ipa: "/baɪ/", pos: "prep", meaning: "muộn nhất là vào lúc (thời hạn)" },
      { word: "intranet", ipa: "/ˈɪn.trə.net/", pos: "n", meaning: "mạng nội bộ doanh nghiệp" }
    ]
  },
  {
    id: "c3-06",
    chapter: 3,
    part: 6,
    speaker: "AEGIS AI (Token Directive)",
    dialogue_en: "Continuing blank [3] in Token Migration Memorandum.",
    dialogue_vi: "Tiếp tục xem xét chỗ trống [3] trong Bản ghi nhớ chuyển đổi Token.",
    situation_vi: "Chọn trạng từ liên kết câu mang ý nghĩa bổ sung cảnh báo.",
    passage: "(Tham khảo văn bản MEMORANDUM ở trên)",
    stem: "Select the best answer for blank [3]:",
    choices: ["Furthermore", "Nevertheless", "Otherwise", "Meanwhile"],
    answer: 0,
    explanation_vi: "Trạng từ liên kết 'Furthermore' (Hơn nữa / Thêm vào đó) dùng để bổ sung thông tin nghiêm ngặt tiếp theo về việc hệ thống sẽ tự động thu hồi khóa truy cập chưa xác thực.",
    trap: "Bẫy từ chỉ sự nhượng bộ 'Nevertheless' (Tuy nhiên) hoặc điều kiện phủ định 'Otherwise' (Nếu không thì).",
    examTip: "Trạng từ liên kết đầu câu đứng trước dấu phẩy: 'Furthermore / In addition / Moreover,' dùng để bổ sung luận điểm cùng chiều.",
    tags: { part: "Part 6", category: "Grammar", topic: "Transitions", difficulty: "Medium" },
    vocab: [
      { word: "furthermore", ipa: "/ˌfɜː.ðəˈmɔːr/", pos: "adv", meaning: "hơn nữa, ngoài ra" },
      { word: "cut-off", ipa: "/ˈkʌt.ɒf/", pos: "adj", meaning: "mốc giới hạn chót" }
    ]
  },
  {
    id: "c3-07",
    chapter: 3,
    part: 6,
    speaker: "AEGIS AI (Token Directive)",
    dialogue_en: "Select the sentence that best fits the contextual flow for blank [4].",
    dialogue_vi: "Chọn câu phù hợp nhất với mạch văn tại chỗ trống [4].",
    situation_vi: "Chọn câu thông báo đội ngũ hỗ trợ kỹ thuật sẽ túc trực tại sảnh để giúp nhân viên cài đặt.",
    passage: "(Tham khảo văn bản MEMORANDUM ở trên)",
    stem: "Select the best sentence to fill blank [4]:",
    choices: [
      "Technical support specialists will be stationed in the lobby to assist with initial setup.",
      "The cafeteria menu will be updated to reflect seasonal dietary preferences.",
      "All incoming postal shipments must be inspected by customs authorities.",
      "Corporate holiday schedules will be distributed during next month's meeting."
    ],
    answer: 0,
    explanation_vi: "Phương án (A) 'Technical support specialists will be stationed in the lobby to assist with initial setup' (Các chuyên viên hỗ trợ kỹ thuật sẽ túc trực tại sảnh để hỗ trợ cài đặt ban đầu) là câu kết nối logic và hữu ích nhất cho quy trình cấp phát token.",
    trap: "Các phương án B, C, D nói về thực đơn căng-tin, hải quan bưu điện, lịch nghỉ lễ.",
    examTip: "Khi văn bản công sở triển khai công nghệ mới (token, phần mềm mới), câu điền đoạn văn thường là cam kết cử nhân viên kỹ thuật hỗ trợ nhân viên cài đặt.",
    tags: { part: "Part 6", category: "Reading", topic: "Context", difficulty: "Hard" },
    vocab: [
      { word: "stationed", ipa: "/ˈsteɪ.ʃənd/", pos: "adj", meaning: "được bố trí túc trực tại chỗ" },
      { word: "initial", ipa: "/ɪˈnɪʃ.əl/", pos: "adj", meaning: "ban đầu" }
    ]
  },

  // --- Tình huống 5: Part 2 - Nghe Q&A: Thẩm tra đơn vị kiểm toán bên ngoài ---
  {
    id: "c3-08",
    chapter: 3,
    part: 2,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave inquires about the external compliance audit report.",
    dialogue_vi: "Dave hỏi về báo cáo kiểm toán tuân thủ bảo mật bên ngoài.",
    situation_vi: "07:05 - Dave hỏi bạn ai chịu trách nhiệm làm việc với đoàn thanh tra an ninh mạng.",
    stem: "Who will coordinate the external cybersecurity compliance audit?",
    audioText: "Who will coordinate the external cybersecurity compliance audit?",
    choices: [
      "Mr. Bennett from the regulatory governance office.",
      "Yes, the audit was extremely strict.",
      "At the downtown international convention center."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi bắt đầu bằng 'Who' (Ai sẽ điều phối) -> Phương án (A) chỉ rõ danh tính người phụ trách: 'Mr. Bennett from the regulatory governance office'.",
    trap: "Bẫy Yes/No cho câu hỏi 'Who' (B), và bẫy trả lời địa điểm hội nghị (C).",
    examTip: "Câu hỏi 'Who will coordinate / Who is in charge' -> Tìm phương án nhắc đến chức danh hoặc nhân sự cụ thể (Mr. Bennett, The team leader).",
    tags: { part: "Part 2", category: "Listening", topic: "Personnel Q&A", difficulty: "Easy" },
    vocab: [
      { word: "coordinate", ipa: "/kəʊˈɔː.dɪ.neɪt/", pos: "v", meaning: "điều phối, phối hợp" },
      { word: "governance", ipa: "/ˈɡʌv.ən.əns/", pos: "n", meaning: "công tác quản trị doanh nghiệp" }
    ]
  },

  // --- Tình huống 6: Part 3 - Nghe hội thoại đàm phán nhà cung cấp (3 câu: c3-09 đến c3-11) ---
  {
    id: "c3-09",
    chapter: 3,
    part: 3,
    speaker: "Dave & Vendor Director (Vendor Call)",
    dialogue_en: "[Dave]: Good morning, Ms. Vance. We discovered that your cloud storage software contains an unpatched zero-day vulnerability.\n[Ms. Vance]: We are fully aware of the issue, Dave. Our security engineering team has been working through the night to compile an emergency hotfix.\n[Dave]: That's critical, but our banking regulators require compliance proof. When will the official patch be available for production deployment?\n[Ms. Vance]: We are running final regression tests now. The certified patch will be released to your repository in exactly two hours.",
    dialogue_vi: "[Dave]: Chào buổi sáng cô Vance. Chúng tôi phát hiện phần mềm lưu trữ đám mây của bên cô có chứa lỗ hổng zero-day chưa được vá.\n[Ms. Vance]: Chúng tôi đã nắm rất rõ vấn đề này, Dave. Đội ngũ kỹ thuật bảo mật của chúng tôi đã làm việc xuyên đêm để biên dịch bản vá nóng khẩn cấp.\n[Dave]: Điều đó rất quan trọng, nhưng các cơ quan quản lý ngân hàng yêu cầu bằng chứng tuân thủ. Khi nào thì bản vá chính thức sẵn sàng để triển khai vào hệ thống thật?\n[Ms. Vance]: Chúng tôi đang chạy các bài kiểm thử hồi quy cuối cùng. Bản vá có chứng nhận sẽ được phát hành vào kho lưu trữ của các anh trong đúng hai giờ nữa.",
    situation_vi: "07:20 - Nghe cuộc gọi khẩn cấp giữa Dave và Giám đốc kỹ thuật của nhà cung cấp phần mềm đám mây.",
    stem: "What problem does the man bring to the woman's attention?",
    audioText: "Dave: Good morning, Ms. Vance. We discovered that your cloud storage software contains an unpatched zero-day vulnerability. Ms. Vance: We are fully aware of the issue, Dave. Our security engineering team has been working through the night to compile an emergency hotfix. Dave: That's critical, but our banking regulators require compliance proof. When will the official patch be available for production deployment? Ms. Vance: We are running final regression tests now. The certified patch will be released to your repository in exactly two hours.",
    choices: [
      "A zero-day security vulnerability in the vendor's cloud software",
      "An unexpected bill for cloud hosting server fees",
      "A loss of physical internet cables in the data center",
      "A scheduling conflict for the annual corporate dinner"
    ],
    answer: 0,
    explanation_vi: "Dave nêu ngay câu đầu tiên: 'your cloud storage software contains an unpatched zero-day vulnerability' -> Lỗ hổng zero-day trong phần mềm đám mây của nhà cung cấp.",
    trap: "Bẫy hóa đơn phí máy chủ hoặc đứt dây cáp internet.",
    examTip: "Part 3: Câu hỏi mở đầu luôn nhắm vào câu thoại thứ nhất của người khởi xướng cuộc trò chuyện.",
    tags: { part: "Part 3", category: "Listening", topic: "Vulnerability Discussion", difficulty: "Medium" },
    vocab: [
      { word: "hotfix", ipa: "/ˈhɒt.fɪks/", pos: "n", meaning: "bản sửa lỗi nóng khẩn cấp" },
      { word: "regulator", ipa: "/ˈreɡ.jə.leɪ.tər/", pos: "n", meaning: "cơ quan quản lý nhà nước" }
    ]
  },
  {
    id: "c3-10",
    chapter: 3,
    part: 3,
    speaker: "Dave & Vendor Director (Vendor Call)",
    dialogue_en: "Reviewing what the vendor engineering team has been doing.",
    dialogue_vi: "Xem đội ngũ kỹ thuật của bên cung cấp đã làm gì.",
    situation_vi: "Câu hỏi 2 bài nghe Part 3: Đội ngũ kỹ thuật của nhà cung cấp đã làm gì suốt đêm?",
    stem: "What has the woman's engineering team been doing overnight?",
    audioText: "What has the woman's engineering team been doing overnight?",
    choices: [
      "Working through the night to compile an emergency hotfix",
      "Drafting a new price quotation for upcoming contracts",
      "Moving corporate headquarters to a different city",
      "Interviewing candidates for marketing internship roles"
    ],
    answer: 0,
    explanation_vi: "Cô Vance nói: 'Our security engineering team has been working through the night to compile an emergency hotfix'.",
    trap: "Bẫy phỏng vấn ứng viên marketing hoặc chuyển văn phòng.",
    examTip: "Lắng nghe cụm 'working through the night to compile an emergency hotfix'.",
    tags: { part: "Part 3", category: "Listening", topic: "Team Action", difficulty: "Medium" },
    vocab: [
      { word: "compile", ipa: "/kəmˈpaɪl/", pos: "v", meaning: "biên dịch mã nguồn" },
      { word: "emergency", ipa: "/ɪˈmɜː.dʒən.si/", pos: "n", meaning: "tình huống khẩn cấp" }
    ]
  },
  {
    id: "c3-11",
    chapter: 3,
    part: 3,
    speaker: "Dave & Vendor Director (Vendor Call)",
    dialogue_en: "Reviewing the delivery timeframe.",
    dialogue_vi: "Xem thời gian bàn giao bản vá chính thức.",
    situation_vi: "Câu hỏi 3 bài nghe Part 3: Khi nào bản vá sẽ được gửi đến kho lưu trữ của ngân hàng?",
    stem: "When will the certified patch be released to NovaBank's repository?",
    audioText: "When will the certified patch be released to NovaBank's repository?",
    choices: [
      "In exactly two hours",
      "At the end of next week",
      "After three business months",
      "By tomorrow evening"
    ],
    answer: 0,
    explanation_vi: "Cô Vance kết luận ở câu cuối: 'The certified patch will be released to your repository in exactly two hours' -> Trong đúng 2 giờ nữa.",
    trap: "Bẫy cuối tuần sau hoặc ngày mai.",
    examTip: "Số đếm chỉ thời gian trong câu cuối Part 3: 'in exactly two hours' chính là chìa khóa đáp án.",
    tags: { part: "Part 3", category: "Listening", topic: "Timeframe", difficulty: "Easy" },
    vocab: [
      { word: "repository", ipa: "/rɪˈpɒz.ɪ.tər.i/", pos: "n", meaning: "kho lưu trữ mã nguồn / phần mềm" },
      { word: "regression", ipa: "/rɪˈɡreʃ.ən/", pos: "n", meaning: "kiểm thử hồi quy" }
    ]
  },

  // --- Tình huống 7: Part 5 - Từ vựng An toàn thiết bị cá nhân (BYOD) ---
  {
    id: "c3-12",
    chapter: 3,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "All personal mobile devices connected to NovaBank Wi-Fi must comply with our strict endpoint security standard.",
    dialogue_vi: "Mọi thiết bị di động cá nhân kết nối vào Wi-Fi NovaBank đều phải tuân thủ chuẩn an toàn điểm cuối nghiêm ngặt.",
    situation_vi: "07:35 - Kiểm tra thiết bị của nhân viên theo chính sách Bring Your Own Device (BYOD).",
    stem: "All employee smartphones connected to the internal network must _______ with the corporate mobile device management policy.",
    choices: ["comply", "adhere", "conform", "obey"],
    answer: 0,
    explanation_vi: "Cụm động từ cố định: 'comply with' có nghĩa là tuân thủ theo quy định/chính sách. Chú ý: 'comply' đi với giới từ 'with', còn 'adhere' đi với 'to', 'conform' đi với 'to'.",
    trap: "Bẫy chọn 'adhere' (vì adhere cần đi với TO, không đi với with), hoặc 'obey' (là ngoại động từ, không có giới từ).",
    examTip: "Ghi nhớ cặp đôi bất hủ TOEIC: [comply WITH = adhere TO = abide BY]. Thấy 'with' chọn ngay 'comply'.",
    tags: { part: "Part 5", category: "Vocabulary", topic: "Collocation", difficulty: "Medium" },
    vocab: [
      { word: "comply with", ipa: "/kəmˈplaɪ wɪð/", pos: "v", meaning: "tuân thủ theo" },
      { word: "endpoint", ipa: "/ˈend.pɔɪnt/", pos: "n", meaning: "thiết bị đầu cuối" }
    ]
  },

  // --- Tình huống 8: Part 7 - Đọc hiểu Bản tin Chính sách BYOD (3 câu: c3-13 đến c3-15) ---
  {
    id: "c3-13",
    chapter: 3,
    part: 7,
    speaker: "Dr. Helen Kang (CISO)",
    dialogue_en: "POLICY BULLETIN: BRING YOUR OWN DEVICE (BYOD) CYBERSECURITY PROTOCOL",
    dialogue_vi: "BẢN TIN CHÍNH SÁCH: NGHỊ ĐỊNH THƯ AN TOÀN THÔNG TIN THIẾT BỊ CÁ NHÂN (BYOD)",
    situation_vi: "07:50 - Rà soát văn bản chính sách BYOD của ngân hàng NovaBank.",
    passage: "NOVABANK POLICY BULLETIN: BRING YOUR OWN DEVICE (BYOD)\nEffective Date: November 10\nTarget Audience: All Staff Connecting Personal Mobile Devices to Corporate Networks\n\n1. Device Registration and Compliance\nPrior to accessing corporate e-mail, intranet databases, or communication channels from personal smartphones, laptops, or tablets, employees must enroll the device in the NovaBank Mobile Device Management (MDM) portal. The MDM agent verifies that operating system patches are current and enforces a mandatory six-digit alphanumeric screen lock.\n\n2. Separation of Data and Encryption\nAll corporate correspondence, files, and proprietary client materials stored locally on enrolled devices are partitioned within an encrypted container. Corporate data cannot be copied to personal cloud storage services or unapproved messaging applications.\n\n3. Lost or Stolen Devices\nIn the event that an enrolled device is lost or stolen, the employee must contact the Security Operations Center (Ext. 5500) within two hours. The security team reserves the authority to remotely erase corporate data from the device without affecting the employee's personal photographs, contacts, or private media files.",
    stem: "What is the primary purpose of the policy bulletin?",
    choices: [
      "To outline security rules for personal devices used for work",
      "To announce the replacement of corporate laptop computers",
      "To describe how to apply for a company-subsidized smartphone",
      "To provide instructions for installing personal social media apps"
    ],
    answer: 0,
    explanation_vi: "Đoạn mở đầu và toàn bộ văn bản nêu rõ: 'outline security rules for personal devices used for work' (quy định các quy tắc bảo mật đối với thiết bị cá nhân dùng cho công việc).",
    trap: "Bẫy trợ cấp mua điện thoại mới hay cài đặt mạng xã hội.",
    examTip: "Câu hỏi mục đích Part 7: Đọc kỹ tiêu đề và phần đầu của văn bản (Bring Your Own Device).",
    tags: { part: "Part 7", category: "Reading", topic: "Main Idea", difficulty: "Easy" },
    vocab: [
      { word: "portal", ipa: "/ˈpɔː.təl/", pos: "n", meaning: "cổng thông tin điện tử" },
      { word: "alphanumeric", ipa: "/ˌæl.fə.njuːˈmer.ɪk/", pos: "adj", meaning: "gồm cả chữ cái và chữ số" }
    ]
  },
  {
    id: "c3-14",
    chapter: 3,
    part: 7,
    speaker: "Dr. Helen Kang (CISO)",
    dialogue_en: "Continuing review of screen lock requirements.",
    dialogue_vi: "Tiếp tục xem yêu cầu về khóa màn hình thiết bị.",
    situation_vi: "Câu hỏi 2 bài đọc Part 7: Yêu cầu bắt buộc khi đăng ký thiết bị vào hệ thống MDM.",
    passage: "(Tham khảo văn bản NOVABANK POLICY BULLETIN ở trên)",
    stem: "What security requirement must a personal device meet during enrollment?",
    choices: [
      "It must enforce a mandatory six-digit alphanumeric screen lock.",
      "It must be manufactured within the last six calendar months.",
      "It must have at least one terabyte of available storage space.",
      "It must be equipped with physical biometric thumbprint sensors."
    ],
    answer: 0,
    explanation_vi: "Mục 1 ghi rõ: 'enforces a mandatory six-digit alphanumeric screen lock' (bắt buộc cài khóa màn hình 6 ký tự gồm chữ và số).",
    trap: "Bẫy tiêu chí phần cứng không có trong bài (bộ nhớ 1TB, sản xuất trong 6 tháng).",
    examTip: "Tìm cụm từ khóa 'screen lock' trong Mục 1 của bài đọc.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail", difficulty: "Easy" },
    vocab: [
      { word: "mandatory", ipa: "/ˈmæn.də.tər.i/", pos: "adj", meaning: "bắt buộc theo luật/quy định" },
      { word: "partitioned", ipa: "/pɑːˈtɪʃ.ənd/", pos: "adj", meaning: "được phân vùng tách biệt" }
    ]
  },
  {
    id: "c3-15",
    chapter: 3,
    part: 7,
    speaker: "Dr. Helen Kang (CISO)",
    dialogue_en: "Reviewing protocol for lost devices.",
    dialogue_vi: "Xem quy trình xử lý khi thiết bị bị mất.",
    situation_vi: "Câu hỏi 3 bài đọc Part 7: Nhân viên phải làm gì nếu điện thoại bị mất hoặc bị đánh cắp?",
    passage: "(Tham khảo văn bản NOVABANK POLICY BULLETIN ở trên)",
    stem: "What must an employee do if an enrolled mobile phone is lost?",
    choices: [
      "Contact the Security Operations Center within two hours",
      "File a formal insurance claim with an outside provider",
      "Submit an expedited purchase order for a new company laptop",
      "Change all corporate passwords from a coworker's desktop"
    ],
    answer: 0,
    explanation_vi: "Mục 3 ghi: 'the employee must contact the Security Operations Center (Ext. 5500) within two hours' -> Liên hệ SOC trong vòng 2 giờ.",
    trap: "Bẫy nộp bảo hiểm hoặc tự ý đổi mật khẩu trên máy đồng nghiệp.",
    examTip: "Tìm từ khóa 'lost or stolen' ở Mục 3.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail", difficulty: "Easy" },
    vocab: [
      { word: "remotely", ipa: "/rɪˈməʊt.li/", pos: "adv", meaning: "từ xa" },
      { word: "erase", ipa: "/ɪˈreɪz/", pos: "v", meaning: "xóa sạch dữ liệu" }
    ]
  },

  // =========================================================================
  // TRÙM CHƯƠNG 3 (BOSS LEVEL 3): ZERO-DAY VULNERABILITY PATCHING
  // 5 câu tổng hợp tốc độ cao (c3-16 đến c3-20)
  // =========================================================================
  {
    id: "c3-16",
    chapter: 3,
    isBoss: true,
    part: 5,
    speaker: "ZERO-DAY EXPLOIT PAYLOAD (Boss 3)",
    dialogue_en: "CRITICAL ALERT: Zero-day buffer overflow exploit attempting remote code execution!",
    dialogue_vi: "CẢNH BÁO NGUY CẤP: Mã khai thác tràn bộ đệm Zero-day đang cố thực thi mã từ xa!",
    situation_vi: "[TRÙM 3 - CÂU 1/5] Kích hoạt cơ chế bảo vệ chống tràn bộ đệm (DEP) trên máy chủ web!",
    stem: "The emergency patch must be installed _______ to prevent cybercriminals from exploiting the server flaw.",
    choices: ["expeditiously", "expeditious", "expedition", "expedite"],
    answer: 0,
    explanation_vi: "Đứng sau cụm động từ bị động 'must be installed' cần một phó từ (adverb) đuôi -ly để chỉ cách thức -> chọn 'expeditiously' (một cách khẩn trương, mau lẹ).",
    trap: "Bẫy tính từ 'expeditious' hoặc danh từ 'expedition' (chuyến thám hiểm).",
    examTip: "[to be + V3/ed + ADV] (must be installed expeditiously). 'Expeditiously' là từ vựng 750+ TOEIC mang nghĩa 'nhanh chóng và hiệu quả'.",
    tags: { part: "Part 5", category: "Grammar", topic: "Adverb", difficulty: "Hard" },
    vocab: [
      { word: "expeditiously", ipa: "/ˌek.spəˈdɪʃ.əs.li/", pos: "adv", meaning: "một cách khẩn trương, mau lẹ" },
      { word: "flaw", ipa: "/flɔː/", pos: "n", meaning: "khiếm khuyết, lỗ hổng" }
    ]
  },
  {
    id: "c3-17",
    chapter: 3,
    isBoss: true,
    part: 2,
    speaker: "ZERO-DAY EXPLOIT PAYLOAD (Boss 3)",
    dialogue_en: "Audio query regarding cryptographic certificate revocation!",
    dialogue_vi: "Câu hỏi âm thanh về việc thu hồi chứng chỉ số bảo mật!",
    situation_vi: "[TRÙM 3 - CÂU 2/5] Dave hỏi bạn đã phát lệnh thu hồi chứng chỉ số bị lộ chưa.",
    stem: "Have you submitted the certificate revocation list to the public registry?",
    audioText: "Have you submitted the certificate revocation list to the public registry?",
    choices: [
      "Yes, the updated list was uploaded ten minutes ago.",
      "The certificate is framed on the office wall.",
      "In the public park across the street."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi Yes/No 'Have you submitted...?' -> (A) 'Yes, the updated list was uploaded ten minutes ago' (Có, danh sách cập nhật đã được tải lên cách đây 10 phút) là câu trả lời trực tiếp chính xác.",
    trap: "Bẫy nghĩa đen của 'certificate' (bằng khen đóng khung trên tường - B) và bẫy 'public park' từ chữ 'public' (C).",
    examTip: "Bẫy lặp từ và bẫy nghĩa đen là đặc sản Part 2: 'certificate' ở đây là chứng chỉ số SSL, không phải giấy khen treo tường.",
    tags: { part: "Part 2", category: "Listening", topic: "Verification", difficulty: "Medium" },
    vocab: [
      { word: "revocation", ipa: "/ˌrev.əˈkeɪ.ʃən/", pos: "n", meaning: "sự thu hồi, bãi bỏ" },
      { word: "registry", ipa: "/ˈredʒ.ɪ.stri/", pos: "n", meaning: "sổ đăng ký, cơ quan cấp phát" }
    ]
  },
  {
    id: "c3-18",
    chapter: 3,
    isBoss: true,
    part: 5,
    speaker: "ZERO-DAY EXPLOIT PAYLOAD (Boss 3)",
    dialogue_en: "ALERT: Attacker attempting SQL injection bypass on customer balance queries!",
    dialogue_vi: "BÁO ĐỘNG: Kẻ tấn công cố vượt qua bộ lọc bằng kỹ thuật SQL Injection!",
    situation_vi: "[TRÙM 3 - CÂU 3/5] Áp dụng quy tắc lọc sạch toàn bộ dữ liệu đầu vào (Input Sanitization).",
    stem: "Web application firewalls are programmed to reject queries containing _______ characters.",
    choices: ["unauthorized", "unauthorization", "unauthorize", "unauthorizing"],
    answer: 0,
    explanation_vi: "Đứng trước danh từ 'characters' (các ký tự) cần một tính từ (adjective) để bổ nghĩa -> chọn 'unauthorized' (trái phép, không được cấp quyền). 'unauthorized characters' = các ký tự trái phép.",
    trap: "Bẫy danh từ 'unauthorization'.",
    examTip: "Vị trí tính từ trước danh từ: [Tính từ + Danh từ] (unauthorized characters).",
    tags: { part: "Part 5", category: "Grammar", topic: "Adjective Modifier", difficulty: "Easy" },
    vocab: [
      { word: "unauthorized", ipa: "/ʌnˈɔː.θər.aɪzd/", pos: "adj", meaning: "chưa được phép, trái phép" },
      { word: "character", ipa: "/ˈkær.ək.tər/", pos: "n", meaning: "ký tự máy tính" }
    ]
  },
  {
    id: "c3-19",
    chapter: 3,
    isBoss: true,
    part: 5,
    speaker: "ZERO-DAY EXPLOIT PAYLOAD (Boss 3)",
    dialogue_en: "ALERT: Memory corruption triggered by malformed HTTP request headers!",
    dialogue_vi: "BÁO ĐỘNG: Lỗi tràn bộ nhớ do tiêu đề yêu cầu HTTP bị cố ý làm biến dạng!",
    situation_vi: "[TRÙM 3 - CÂU 4/5] Triển khai bản vá nóng sửa đổi bộ phân tích tiêu đề yêu cầu web.",
    stem: "Had the engineering department _______ the zero-day flaw earlier, the brief server outage would have been avoided entirely.",
    choices: ["identified", "identifying", "identify", "identifies"],
    answer: 0,
    explanation_vi: "Đảo ngữ câu điều kiện loại 3 (Inversion in Third Conditional): 'Had + S + V3/ed, S + would have + V3/ed' thay thế cho 'If the engineering department had identified...'.",
    trap: "Bẫy chọn động từ nguyên mẫu 'identify' hoặc V-ing. Cấu trúc quá khứ hoàn thành với 'Had' bắt buộc đi với V3/ed.",
    examTip: "Công thức đảo ngữ điều kiện loại 3 điểm 750+ TOEIC: [HAD + S + V3/ED, S + WOULD HAVE + V3/ED].",
    tags: { part: "Part 5", category: "Grammar", topic: "Conditional Inversion", difficulty: "Hard" },
    vocab: [
      { word: "outage", ipa: "/ˈaʊ.tɪdʒ/", pos: "n", meaning: "sự ngừng hoạt động (nguồn điện/máy chủ)" },
      { word: "entirely", ipa: "/ɪnˈtaɪə.li/", pos: "adv", meaning: "hoàn toàn" }
    ]
  },
  {
    id: "c3-20",
    chapter: 3,
    isBoss: true,
    part: 5,
    speaker: "ZERO-DAY EXPLOIT PAYLOAD (Boss 3)",
    dialogue_en: "FINALE: Apply the certified vendor hotfix to seal the memory vulnerability forever!",
    dialogue_vi: "ĐÒN KẾT LIỄU: Áp dụng bản vá nóng của nhà cung cấp để bịt kín lỗ hổng bộ nhớ vĩnh viễn!",
    situation_vi: "[TRÙM 3 - CÂU 5/5] Hoàn tất triển khai bản vá zero-day bảo vệ toàn vẹn hệ thống ngân hàng!",
    stem: "The executive committee expressed complete confidence _______ the SOC team's technical competence.",
    choices: ["in", "on", "at", "with"],
    answer: 0,
    explanation_vi: "Cụm danh từ cố định trong tiếng Anh thương mại: 'confidence in someone/something' có nghĩa là sự tin tưởng tuyệt đối vào năng lực của ai đó.",
    trap: "Bẫy giới từ 'on' hoặc 'with' do dịch nghĩa tiếng Việt.",
    examTip: "Cụm giới từ hay gặp: [confidence IN / faith IN / trust IN + Noun] (confidence in the SOC team).",
    tags: { part: "Part 5", category: "Vocabulary", topic: "Prepositional Collocation", difficulty: "Medium" },
    vocab: [
      { word: "competence", ipa: "/ˈkɒm.pɪ.təns/", pos: "n", meaning: "năng lực chuyên môn giỏi" },
      { word: "confidence", ipa: "/ˈkɒn.fɪ.dəns/", pos: "n", meaning: "sự tự tin, lòng tin cậy" }
    ]
  }
];
