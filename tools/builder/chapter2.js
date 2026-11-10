/**
 * CHAPTER 2 QUESTIONS (20 câu hỏi hoàn chỉnh)
 * Bối cảnh: Đào sâu mã độc & Thẩm tra sự cố Ransomware tại NovaBank
 */
module.exports = [
  // --- Tình huống 1: Part 5 - Phân tích tệp tin độc hại (Từ loại) ---
  {
    id: "c2-01",
    chapter: 2,
    part: 5,
    speaker: "Sarah (Threat Hunter)",
    dialogue_en: "The ransomware payload has started encrypting local .docx files on workstation PC-402.",
    dialogue_vi: "Mã độc tống tiền đã bắt đầu mã hóa các tệp tin .docx trên máy trạm PC-402.",
    situation_vi: "03:45 - Sarah phát hiện tiến trình độc hại ngầm đang đổi phần mở rộng tệp tin.",
    stem: "The malicious script operates _______ in the background without triggering standard antivirus alarms.",
    choices: ["silently", "silent", "silence", "silenced"],
    answer: 0,
    explanation_vi: "Đứng sau động từ 'operates' (hoạt động) cần một phó từ (adverb) đuôi -ly để chỉ cách thức hoạt động -> chọn 'silently' (hoạt động một cách âm thầm, lặng lẽ).",
    trap: "Bẫy tính từ 'silent' hoặc danh từ 'silence'.",
    examTip: "Động từ hành động thường + Phó từ (V + ADV) để bổ nghĩa cách thức (operates silently).",
    tags: { part: "Part 5", category: "Grammar", topic: "Adverb", difficulty: "Easy" },
    vocab: [
      { word: "silently", ipa: "/ˈsaɪ.lənt.li/", pos: "adv", meaning: "một cách âm thầm" },
      { word: "trigger", ipa: "/ˈtrɪɡ.ər/", pos: "v", meaning: "kích hoạt, làm khởi phát" }
    ]
  },

  // --- Tình huống 2: Part 2 - Nghe Q&A: Thời gian lưu trữ log hệ thống ---
  {
    id: "c2-02",
    chapter: 2,
    part: 2,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave checks how long server audit logs are retained for forensic analysis.",
    dialogue_vi: "Dave hỏi thời gian lưu giữ nhật ký kiểm toán máy chủ để phục vụ điều tra pháp y số.",
    situation_vi: "04:00 - Dave hỏi bạn về chính sách lưu trữ log của hệ thống ngân hàng.",
    stem: "How long are the server security telemetry logs archived?",
    audioText: "How long are the server security telemetry logs archived?",
    choices: [
      "For a minimum of twelve months according to compliance regulations.",
      "Yes, the server is quite long.",
      "On the top shelf in the archive room."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi bắt đầu bằng 'How long' (Trong bao lâu) hỏi khoảng thời gian -> (A) 'For a minimum of twelve months...' (Tối thiểu 12 tháng theo quy định tuân thủ) là câu trả lời chính xác.",
    trap: "Bẫy lặp từ: (B) lặp từ 'long' và bẫy Yes/No cho câu hỏi Wh-, (C) lặp 'archive' và trả lời địa điểm Where.",
    examTip: "Câu hỏi 'How long' -> Tìm câu trả lời có 'For + khoảng thời gian' (For 12 months, For two weeks).",
    tags: { part: "Part 2", category: "Listening", topic: "Duration", difficulty: "Easy" },
    vocab: [
      { word: "archive", ipa: "/ˈɑː.kaɪv/", pos: "v", meaning: "lưu trữ lâu dài" },
      { word: "regulation", ipa: "/ˌreɡ.jəˈleɪ.ʃən/", pos: "n", meaning: "quy định, quy chế" }
    ]
  },

  // --- Tình huống 3: Part 5 - Câu điều kiện đảo ngữ trong bảo mật ---
  {
    id: "c2-03",
    chapter: 2,
    part: 5,
    speaker: "Sarah (Threat Hunter)",
    dialogue_en: "If the ransomware reaches the core banking database, we will face an existential catastrophe.",
    dialogue_vi: "Nếu ransomware chạm đến cơ sở dữ liệu ngân hàng cốt lõi, chúng ta sẽ đối mặt thảm họa sống còn.",
    situation_vi: "04:15 - Sarah nhắc lại giao thức phản ứng khẩn cấp trong điều kiện nghi ngờ lây nhiễm diện rộng.",
    stem: "_______ any employee workstation exhibit signs of ransomware encryption, disconnect it from the network immediately.",
    choices: ["Should", "Were", "Had", "Unless"],
    answer: 0,
    explanation_vi: "Đảo ngữ câu điều kiện loại 1 (Inversion in First Conditional): 'Should + S + V(nguyên thể), V(mệnh lệnh)' thay cho 'If any employee workstation exhibits...'.",
    trap: "Bẫy 'Were' dùng cho điều kiện loại 2, 'Had' dùng cho loại 3, 'Unless' không đi với cấu trúc đảo ngữ như trên.",
    examTip: "Mẹo điểm 750+ TOEIC: Thấy đầu câu đứng trước S + V(nguyên thể) mà không có 'If' -> Chọn 'Should' (Should S V = If S V).",
    tags: { part: "Part 5", category: "Grammar", topic: "Conditional Inversion", difficulty: "Hard" },
    vocab: [
      { word: "exhibit", ipa: "/ɪɡˈzɪb.ɪt/", pos: "v", meaning: "biểu hiện, bộc lộ dấu hiệu" },
      { word: "catastrophe", ipa: "/kəˈtæs.trə.fi/", pos: "n", meaning: "thảm họa" }
    ]
  },

  // --- Tình huống 4: Part 6 - Đoạn văn Quy định Cách ly Máy trạm (4 câu: c2-04 đến c2-07) ---
  {
    id: "c2-04",
    chapter: 2,
    part: 6,
    speaker: "AEGIS AI (Incident Procedure)",
    dialogue_en: "EMERGENCY CONTAINMENT MEMORANDUM for branch offices.",
    dialogue_vi: "BẢN GHI NHỚ KHOANH VÙNG KHẨN CẤP gửi các văn phòng chi nhánh.",
    situation_vi: "04:30 - Ban chỉ huy SOC ban hành quy trình khẩn cấp cô lập phân mạng kế toán.",
    passage: "INCIDENT MANAGEMENT BULLETIN: MALWARE CONTAINMENT PROTOCOL\nTO: Regional Branch IT Coordinators\nFROM: NovaBank Security Operations Center\nDATE: November 10, 04:30 AM\nSUBJECT: Immediate Quarantine of Infected Network Segments\n\nFollowing the detection of automated ransomware probing on regional subnets, all branch IT coordinators must act with utmost _______ [1]. Workstations displaying encrypted file notifications must be _______ [2] severed from physical local area network jacks. Do not power off infected devices, as active system memory contains critical cryptographic keys necessary for forensic _______ [3]. Our specialized forensics response engineers are being deployed to regional branches to restore clean backups. _______ [4]. Direct all urgent inquiries to the Incident Response Command at extension 5522.",
    stem: "Select the best answer for blank [1]:",
    choices: ["urgency", "urgent", "urgently", "urging"],
    answer: 0,
    explanation_vi: "Cụm danh từ đi sau giới từ 'with' và tính từ 'utmost' (tột bậc) cần một danh từ -> chọn 'urgency' (sự khẩn trương, tính cấp bách). 'act with utmost urgency' = hành động với sự khẩn trương cao nhất.",
    trap: "Bẫy tính từ 'urgent' hoặc phó từ 'urgently'. Sau giới từ 'with + tính từ' bắt buộc là danh từ.",
    examTip: "Cụm giới từ công sở: [with + utmost + Danh từ] (with utmost urgency / with utmost care / with utmost discretion).",
    tags: { part: "Part 6", category: "Grammar", topic: "Noun Form", difficulty: "Medium" },
    vocab: [
      { word: "utmost", ipa: "/ˈʌt.məʊst/", pos: "adj", meaning: "vô cùng, tột bậc" },
      { word: "urgency", ipa: "/ˈɜː.dʒən.si/", pos: "n", meaning: "sự khẩn cấp, cấp bách" }
    ]
  },
  {
    id: "c2-05",
    chapter: 2,
    part: 6,
    speaker: "AEGIS AI (Incident Procedure)",
    dialogue_en: "Continuing blank [2] in Incident Management Bulletin.",
    dialogue_vi: "Tiếp tục xem xét chỗ trống [2] trong Bản tin quản lý sự cố.",
    situation_vi: "Chọn phó từ bổ nghĩa cho hành động ngắt kết nối vật lý 'severed'.",
    passage: "(Tham khảo văn bản INCIDENT MANAGEMENT BULLETIN ở trên)",
    stem: "Select the best answer for blank [2]:",
    choices: ["immediately", "immediate", "immediacy", "immediateness"],
    answer: 0,
    explanation_vi: "Cấu trúc bị động với modal verb: 'must be _______ severed' -> Giữa 'be' và V3/ed cần một phó từ (adverb) -> chọn 'immediately' (ngay lập tức).",
    trap: "Bẫy tính từ 'immediate'.",
    examTip: "[be + ADV + V3/ed] là cấu trúc xuất hiện trong hầu như mọi đề thi TOEIC Part 5 & 6.",
    tags: { part: "Part 6", category: "Grammar", topic: "Adverb", difficulty: "Easy" },
    vocab: [
      { word: "sever", ipa: "/ˈsev.ər/", pos: "v", meaning: "cắt đứt hoàn toàn, ngắt rời" },
      { word: "immediately", ipa: "/ɪˈmiː.di.ət.li/", pos: "adv", meaning: "ngay lập tức" }
    ]
  },
  {
    id: "c2-06",
    chapter: 2,
    part: 6,
    speaker: "AEGIS AI (Incident Procedure)",
    dialogue_en: "Continuing blank [3] in Incident Management Bulletin.",
    dialogue_vi: "Tiếp tục xem xét chỗ trống [3] trong Bản tin quản lý sự cố.",
    situation_vi: "Điền danh từ kết hợp với tính từ 'forensic' để chỉ hoạt động điều tra số.",
    passage: "(Tham khảo văn bản INCIDENT MANAGEMENT BULLETIN ở trên)",
    stem: "Select the best answer for blank [3]:",
    choices: ["investigation", "investigate", "investigative", "investigator"],
    answer: 0,
    explanation_vi: "Đứng sau giới từ 'for' và tính từ 'forensic' cần một danh từ chỉ sự việc/hoạt động -> chọn 'investigation' (cuộc điều tra pháp y số).",
    trap: "Bẫy danh từ chỉ người 'investigator' (điều tra viên) không phù hợp về ngữ nghĩa so với 'cuộc điều tra'.",
    examTip: "Phân biệt danh từ chỉ người và danh từ chỉ vật/sự việc là bẫy phân loại câu hỏi 700+ TOEIC.",
    tags: { part: "Part 6", category: "Vocabulary", topic: "Noun Choice", difficulty: "Medium" },
    vocab: [
      { word: "forensic", ipa: "/fəˈren.zɪk/", pos: "adj", meaning: "thuộc về điều tra pháp y kỹ thuật số" },
      { word: "investigation", ipa: "/ɪnˌves.tɪˈɡeɪ.ʃən/", pos: "n", meaning: "cuộc điều tra" }
    ]
  },
  {
    id: "c2-07",
    chapter: 2,
    part: 6,
    speaker: "AEGIS AI (Incident Procedure)",
    dialogue_en: "Select the sentence that best fits the contextual flow for blank [4].",
    dialogue_vi: "Chọn câu phù hợp nhất với ngữ cảnh tại chỗ trống [4].",
    situation_vi: "Chọn câu cam kết bảo vệ dữ liệu khách hàng gửi đến các chi nhánh.",
    passage: "(Tham khảo văn bản INCIDENT MANAGEMENT BULLETIN ở trên)",
    stem: "Select the best sentence to fill blank [4]:",
    choices: [
      "Customer financial account ledgers remain completely safe and uncompromised.",
      "The annual company sports festival has been rescheduled for next summer.",
      "Cafeteria vending machines will be stocked with fresh beverages today.",
      "Corporate business travel expenses will be reimbursed by accounts payable."
    ],
    answer: 0,
    explanation_vi: "Câu (A) 'Customer financial account ledgers remain completely safe and uncompromised' (Sổ cái tài khoản tài chính của khách hàng vẫn an toàn tuyệt đối và không bị xâm phạm) mang lại sự trấn an và thông tin bảo mật chuẩn mực nhất.",
    trap: "Các phương án B, C, D hoàn toàn không liên quan đến sự cố an toàn thông tin.",
    examTip: "Trong bài đọc xử lý sự cố doanh nghiệp, câu trấn an tính nguyên vẹn của dữ liệu khách hàng luôn là thông điệp ưu tiên hàng đầu.",
    tags: { part: "Part 6", category: "Reading", topic: "Context", difficulty: "Hard" },
    vocab: [
      { word: "ledger", ipa: "/ˈledʒ.ər/", pos: "n", meaning: "sổ cái kế toán" },
      { word: "uncompromised", ipa: "/ʌnˈkɒm.prə.maɪzd/", pos: "adj", meaning: "nguyên vẹn, không bị xâm phạm" }
    ]
  },

  // --- Tình huống 5: Part 2 - Nghe Q&A: Khảo sát mã nguồn độc hại ---
  {
    id: "c2-08",
    chapter: 2,
    part: 2,
    speaker: "Sarah (Threat Hunter)",
    dialogue_en: "Sarah asks about the reverse engineering of the ransomware binary.",
    dialogue_vi: "Sarah hỏi về việc dịch ngược mã nhị phân của phần mềm tống tiền.",
    situation_vi: "04:50 - Sarah hỏi tiến độ phân tích mẫu mã độc trong môi trường hộp cát (sandbox).",
    stem: "Has the malware analysis completed in the isolated sandbox environment?",
    audioText: "Has the malware analysis completed in the isolated sandbox environment?",
    choices: [
      "Yes, the automated disassembly report was just generated.",
      "In the sandbox on the children's playground.",
      "No, the box was shipped by postal courier."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi dạng Yes/No ('Has the malware analysis completed...?') -> Đáp án (A) 'Yes, the automated disassembly report was just generated' (Có, báo cáo dịch ngược tự động vừa được tạo ra) trả lời trực tiếp và phù hợp ngữ cảnh.",
    trap: "Bẫy nghĩa đen của từ 'sandbox' (hộp cát trẻ em ở sân chơi - B) và bẫy lặp từ 'box' (hộp bưu phẩm gửi bưu điện - C).",
    examTip: "Bẫy từ đa nghĩa trong TOEIC: 'sandbox' trong IT là môi trường cô lập để chạy thử mã độc, không phải hộp cát sân chơi.",
    tags: { part: "Part 2", category: "Listening", topic: "Technical Q&A", difficulty: "Medium" },
    vocab: [
      { word: "disassembly", ipa: "/ˌdɪs.əˈsem.bli/", pos: "n", meaning: "sự dịch ngược mã máy" },
      { word: "sandbox", ipa: "/ˈsænd.bɒks/", pos: "n", meaning: "môi trường hộp cát an toàn" }
    ]
  },

  // --- Tình huống 6: Part 3 - Nghe hội thoại chuyên sâu (3 câu: c2-09 đến c2-11) ---
  {
    id: "c2-09",
    chapter: 2,
    part: 3,
    speaker: "Sarah & Mark (Forensics Team)",
    dialogue_en: "[Sarah]: Mark, I extracted the decryption key from the malware process memory dump.\n[Mark]: Outstanding work, Sarah! Were you able to verify whether any customer databases were encrypted?\n[Sarah]: Fortunately, our air-gap architecture prevented the ransomware from reaching the primary core banking server. Only ten accounting spreadsheets were affected.\n[Mark]: That's a huge relief. I'll immediately update the executive incident log and prepare the decryption utility.",
    dialogue_vi: "[Sarah]: Mark, tôi đã trích xuất được khóa giải mã từ bản kết xuất bộ nhớ của tiến trình mã độc.\n[Mark]: Làm tốt lắm Sarah! Cô đã xác minh được liệu có cơ sở dữ liệu khách hàng nào bị mã hóa chưa?\n[Sarah]: May mắn là kiến trúc mạng cô lập vật lý của chúng ta đã ngăn mã độc chạm tới máy chủ ngân hàng cốt lõi. Chỉ có mười bảng tính kế toán bị ảnh hưởng.\n[Mark]: Thật nhẹ cả người. Tôi sẽ cập nhật ngay nhật ký sự cố cho ban điều hành và chuẩn bị công cụ giải mã.",
    situation_vi: "05:10 - Nghe cuộc trò chuyện giữa Sarah và kỹ sư pháp y Mark về việc thu hồi khóa giải mã.",
    stem: "What significant breakthrough did the woman achieve?",
    audioText: "Sarah: Mark, I extracted the decryption key from the malware process memory dump. Mark: Outstanding work, Sarah! Were you able to verify whether any customer databases were encrypted? Sarah: Fortunately, our air-gap architecture prevented the ransomware from reaching the primary core banking server. Only ten accounting spreadsheets were affected. Mark: That's a huge relief. I'll immediately update the executive incident log and prepare the decryption utility.",
    choices: [
      "She extracted the decryption key from process memory",
      "She ordered replacement hard drives from the manufacturer",
      "She negotiated a reduced ransom fee with the attackers",
      "She designed a new company logo for marketing"
    ],
    answer: 0,
    explanation_vi: "Sarah thông báo ngay câu mở đầu: 'I extracted the decryption key from the malware process memory dump' -> Trích xuất thành công khóa giải mã.",
    trap: "Bẫy trả tiền chuộc (ngân hàng không bao giờ thương lượng tiền chuộc) hoặc thay ổ cứng mới.",
    examTip: "Câu hỏi thành tựu / hành động đầu tiên trong Part 3 nằm ở lời thoại mở màn của người phụ nữ.",
    tags: { part: "Part 3", category: "Listening", topic: "Achievement", difficulty: "Medium" },
    vocab: [
      { word: "extract", ipa: "/ɪkˈstrækt/", pos: "v", meaning: "trích xuất, lấy ra" },
      { word: "decryption", ipa: "/diːˈkrɪp.ʃən/", pos: "n", meaning: "sự giải mã" }
    ]
  },
  {
    id: "c2-10",
    chapter: 2,
    part: 3,
    speaker: "Sarah & Mark (Forensics Team)",
    dialogue_en: "Reviewing why the primary banking server remained safe.",
    dialogue_vi: "Xem lý do vì sao máy chủ ngân hàng cốt lõi vẫn an toàn.",
    situation_vi: "Câu hỏi 2 bài nghe Part 3: Yếu tố nào bảo vệ máy chủ chính?",
    stem: "According to the woman, what protected the primary banking server?",
    audioText: "According to the woman, what protected the primary banking server?",
    choices: [
      "The air-gap network architecture",
      "An automated power generator",
      "The third-party antivirus hotline",
      "A biometric retina recognition scanner"
    ],
    answer: 0,
    explanation_vi: "Sarah nói rõ: 'our air-gap architecture prevented the ransomware from reaching the primary core banking server'.",
    trap: "Bẫy máy phát điện hoặc máy quét võng mạc sinh trắc học.",
    examTip: "Chú ý nghe danh từ kỹ thuật đi sau 'prevented' hoặc 'protected' (air-gap architecture).",
    tags: { part: "Part 3", category: "Listening", topic: "Architecture", difficulty: "Medium" },
    vocab: [
      { word: "architecture", ipa: "/ˈɑː.kɪ.tek.tʃər/", pos: "n", meaning: "kiến trúc hệ thống" },
      { word: "air-gap", ipa: "/ˈeə.ɡæp/", pos: "n", meaning: "khoảng cách cô lập mạng vật lý" }
    ]
  },
  {
    id: "c2-11",
    chapter: 2,
    part: 3,
    speaker: "Sarah & Mark (Forensics Team)",
    dialogue_en: "Reviewing Mark's next action.",
    dialogue_vi: "Xem lại hành động tiếp theo của Mark.",
    situation_vi: "Câu hỏi 3 bài nghe Part 3: Mark sẽ chuẩn bị điều gì?",
    stem: "What will the man prepare next?",
    audioText: "What will the man prepare next?",
    choices: [
      "A decryption utility to restore the affected spreadsheets",
      "An invoice for external consulting services",
      "A job posting for junior software programmers",
      "A flight reservation for an emergency business trip"
    ],
    answer: 0,
    explanation_vi: "Mark nói ở câu cuối cùng: 'I'll immediately update the executive incident log and prepare the decryption utility' -> Chuẩn bị công cụ giải mã.",
    trap: "Bẫy hóa đơn tư vấn hay đặt vé máy bay.",
    examTip: "Cụm 'prepare the decryption utility' xuất hiện ở cuối đoạn hội thoại.",
    tags: { part: "Part 3", category: "Listening", topic: "Next Action", difficulty: "Easy" },
    vocab: [
      { word: "utility", ipa: "/juːˈtɪl.ə.ti/", pos: "n", meaning: "công cụ tiện ích phần mềm" },
      { word: "relief", ipa: "/rɪˈliːf/", pos: "n", meaning: "sự nhẹ nhõm, an tâm" }
    ]
  },

  // --- Tình huống 7: Part 5 - Giới từ thời hạn và tuân thủ ---
  {
    id: "c2-12",
    chapter: 2,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Every incident report must be submitted to the financial regulatory board prior to the market opening.",
    dialogue_vi: "Mọi báo cáo sự cố phải được trình lên hội đồng quản lý tài chính trước giờ mở cửa thị trường.",
    situation_vi: "05:25 - Kiểm tra thời hạn nộp báo cáo kiểm soát sự cố theo luật định.",
    stem: "All preliminary forensic reports must be submitted to the compliance director _______ three hours of incident detection.",
    choices: ["within", "among", "between", "during"],
    answer: 0,
    explanation_vi: "Giới từ 'within + khoảng thời gian' (within three hours) có nghĩa là 'trong vòng 3 giờ' (tính từ lúc phát hiện sự cố).",
    trap: "Bẫy 'during' (chỉ đi với danh từ chỉ kỳ/thời gian như during the meeting, không đi trực tiếp với số giờ đếm được 'three hours'). Bẫy 'between' (cần có and).",
    examTip: "Phân biệt cực chuẩn TOEIC: [within + khoảng thời gian có số đếm] (within 3 hours, within 5 days); [during + danh từ sự kiện] (during the conference, during the audit).",
    tags: { part: "Part 5", category: "Grammar", topic: "Prepositions", difficulty: "Medium" },
    vocab: [
      { word: "preliminary", ipa: "/prɪˈlɪm.ɪ.nər.i/", pos: "adj", meaning: "sơ bộ, bước đầu" },
      { word: "within", ipa: "/wɪˈðɪn/", pos: "prep", meaning: "trong vòng (thời gian)" }
    ]
  },

  // --- Tình huống 8: Part 7 - Đọc hiểu Báo cáo Nhật ký Forensics (3 câu: c2-13 đến c2-15) ---
  {
    id: "c2-13",
    chapter: 2,
    part: 7,
    speaker: "Sarah (Threat Hunter)",
    dialogue_en: "FORENSICS INCIDENT LOG: WORKSTATION PC-402 COMPROMISE ANALYSIS",
    dialogue_vi: "NHẬT KÝ ĐIỀU TRA PHÁP Y SỐ: PHÂN TÍCH XÂM NHẬP MÁY TRẠM PC-402",
    situation_vi: "05:35 - Đọc báo cáo điều tra kỹ thuật số pháp y về nguồn gốc lây nhiễm mã độc.",
    passage: "NOVABANK DIGITAL FORENSICS INVESTIGATION LOG\nCase Reference: INC-2026-8841\nInvestigator: Sarah Lin, Senior Threat Hunter\nTarget Device: Host PC-402 (Accounting Division)\n\nTIMELINE OF EVENTS:\n- 00:22 AM: User clicked an unverified hyperlink embedded within a spoofed vendor invoice email.\n- 00:23 AM: An obfuscated PowerShell payload downloaded a trojan binary from a remote Command-and-Control (C2) server.\n- 01:05 AM: The trojan executed a local privilege escalation exploit, granting itself administrative rights.\n- 01:14 AM: Automated lateral scanning detected across TCP port 445 (SMB) targeting internal file servers.\n- 01:28 AM: Network isolation initiated by SOC night analyst, cutting outbound connections before data exfiltration occurred.\n\nEVIDENCE RETRIEVAL:\nMemory analysis successfully recovered the encryption master key before system processes terminated. Clean backup images from 11:00 PM yesterday were verified as uncorrupted. Total operational downtime for Host PC-402 was limited to three hours.",
    stem: "What was the initial attack vector that caused the compromise?",
    choices: [
      "A malicious hyperlink inside a fake vendor invoice email",
      "A physical USB drive plugged in by an intern",
      "A hardware failure in the central cooling unit",
      "An unannounced power cut in the regional branch"
    ],
    answer: 0,
    explanation_vi: "Mục mốc thời gian 00:22 AM ghi rõ: 'User clicked an unverified hyperlink embedded within a spoofed vendor invoice email' -> Bấm vào link độc hại trong email hóa đơn giả mạo.",
    trap: "Bẫy cắm USB hay lỗi phần cứng làm mát.",
    examTip: "Thuật ngữ 'initial attack vector' trong an ninh mạng có nghĩa là con đường xâm nhập ban đầu. Hãy tìm mốc thời gian sớm nhất trong bảng Timeline.",
    tags: { part: "Part 7", category: "Reading", topic: "Cause & Effect", difficulty: "Medium" },
    vocab: [
      { word: "obfuscated", ipa: "/ˈɒb.fʌs.keɪ.tɪd/", pos: "adj", meaning: "được làm rối mã để qua mặt phát hiện" },
      { word: "escalation", ipa: "/ˌes.kəˈleɪ.ʃən/", pos: "n", meaning: "sự leo thang đặc quyền" }
    ]
  },
  {
    id: "c2-14",
    chapter: 2,
    part: 7,
    speaker: "Sarah (Threat Hunter)",
    dialogue_en: "Continuing review of forensic evidence retrieval.",
    dialogue_vi: "Tiếp tục xem kết quả thu thập bằng chứng pháp y số.",
    situation_vi: "Câu hỏi 2 bài đọc Part 7: Yếu tố nào chứng minh việc khôi phục thành công?",
    passage: "(Tham khảo văn bản NOVABANK DIGITAL FORENSICS INVESTIGATION LOG ở trên)",
    stem: "According to the report, what critical piece of evidence was successfully recovered?",
    choices: [
      "The encryption master key extracted from memory",
      "The personal identity card of the remote attacker",
      "A signed paper contract from the external software vendor",
      "Ten thousand dollars in cash paid as ransom"
    ],
    answer: 0,
    explanation_vi: "Mục Evidence Retrieval ghi: 'Memory analysis successfully recovered the encryption master key before system processes terminated' -> Khóa mã hóa chính trích xuất từ bộ nhớ.",
    trap: "Bẫy tìm thấy thẻ căn cước hacker hay tiền mặt chuộc.",
    examTip: "Đối chiếu chính xác từ khóa 'evidence recovered' trong bài đọc.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail", difficulty: "Easy" },
    vocab: [
      { word: "retrieval", ipa: "/rɪˈtriː.vəl/", pos: "n", meaning: "sự thu hồi, lấy lại dữ liệu" },
      { word: "uncorrupted", ipa: "/ʌn.kəˈrʌp.tɪd/", pos: "adj", meaning: "nguyên vẹn, không bị hỏng hóc" }
    ]
  },
  {
    id: "c2-15",
    chapter: 2,
    part: 7,
    speaker: "Sarah (Threat Hunter)",
    dialogue_en: "Checking total system downtime impact.",
    dialogue_vi: "Kiểm tra tổng thời gian gián đoạn của thiết bị.",
    situation_vi: "Câu hỏi 3 bài đọc Part 7: Thời gian ngừng hoạt động của máy trạm PC-402 là bao lâu?",
    passage: "(Tham khảo văn bản NOVABANK DIGITAL FORENSICS INVESTIGATION LOG ở trên)",
    stem: "What was the total operational downtime for the affected workstation?",
    choices: [
      "Three hours",
      "Twelve days",
      "Twenty-four hours",
      "Forty-eight minutes"
    ],
    answer: 0,
    explanation_vi: "Câu cuối cùng của báo cáo ghi: 'Total operational downtime for Host PC-402 was limited to three hours' -> Ba giờ đồng hồ.",
    trap: "Bẫy các mốc thời gian khác xuất hiện trong bài.",
    examTip: "Dạng câu hỏi con số / thời gian Part 7: Đọc kỹ câu kết thúc của bài báo cáo để tìm số liệu chuẩn.",
    tags: { part: "Part 7", category: "Reading", topic: "Number Detail", difficulty: "Easy" },
    vocab: [
      { word: "downtime", ipa: "/ˈdaʊn.taɪm/", pos: "n", meaning: "thời gian hệ thống ngừng hoạt động" },
      { word: "operational", ipa: "/ˌɒp.ərˈeɪ.ʃən.əl/", pos: "adj", meaning: "thuộc về vận hành" }
    ]
  },

  // =========================================================================
  // TRÙM CHƯƠNG 2 (BOSS LEVEL 2): THE RANSOMWARE CONTAINMENT
  // 5 câu tổng hợp tốc độ cao (c2-16 đến c2-20)
  // =========================================================================
  {
    id: "c2-16",
    chapter: 2,
    isBoss: true,
    part: 5,
    speaker: "RANSOMWARE CORE PROCESS (Boss 2)",
    dialogue_en: "WARNING: Ransomware encryption routine spreading to shared network drives!",
    dialogue_vi: "CẢNH BÁO: Tiến trình mã hóa ransomware đang lan sang các ổ đĩa mạng chia sẻ!",
    situation_vi: "[TRÙM 2 - CÂU 1/5] Khóa quyền ghi dữ liệu trên toàn bộ ổ đĩa dùng chung!",
    stem: "The system administrator immediately revoked all write permissions _______ prevent further encryption of shared directories.",
    choices: ["in order to", "as if", "so that", "because of"],
    answer: 0,
    explanation_vi: "Cụm 'in order to + V(nguyên thể)' (in order to prevent...) có nghĩa là 'để / nhằm mục đích ngăn chặn việc mã hóa thêm các thư mục chia sẻ'.",
    trap: "Bẫy 'so that' (cần một mệnh đề: so that it could prevent), 'because of' (đi với danh từ/V-ing: because of preventing).",
    examTip: "Công thức chỉ mục đích cực hay thi TOEIC: [in order to / so as to + V(nguyên mẫu)].",
    tags: { part: "Part 5", category: "Grammar", topic: "Purpose Clause", difficulty: "Medium" },
    vocab: [
      { word: "revoke", ipa: "/rɪˈvəʊk/", pos: "v", meaning: "thu hồi, tước bỏ quyền" },
      { word: "permission", ipa: "/pəˈmɪʃ.ən/", pos: "n", meaning: "sự cho phép, quyền hạn" }
    ]
  },
  {
    id: "c2-17",
    chapter: 2,
    isBoss: true,
    part: 2,
    speaker: "RANSOMWARE CORE PROCESS (Boss 2)",
    dialogue_en: "Voice alert from CISO regarding decryption status!",
    dialogue_vi: "Cảnh báo giọng nói từ CISO về tình trạng giải mã dữ liệu!",
    situation_vi: "[TRÙM 2 - CÂU 2/5] CISO hỏi tình trạng khôi phục các tệp tin kế toán.",
    stem: "Why haven't the accounting spreadsheets been fully decrypted yet?",
    audioText: "Why haven't the accounting spreadsheets been fully decrypted yet?",
    choices: [
      "Because the integrity verification tool is still running.",
      "Yes, the accountant was very pleased.",
      "In the file cabinet next to the door."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi bắt đầu bằng 'Why haven't...' (Tại sao chưa giải mã xong?) giải thích nguyên nhân -> (A) 'Because the integrity verification tool is still running' (Bởi vì công cụ xác minh tính toàn vẹn vẫn đang chạy) là câu trả lời trực tiếp giải thích lý do.",
    trap: "Bẫy Yes/No đối với câu hỏi 'Why' (B), và bẫy trả lời tủ hồ sơ (địa điểm Where) ở phương án C.",
    examTip: "Câu hỏi 'Why' -> 80% câu trả lời bắt đầu bằng 'Because', 'Due to', 'Since', hoặc trực tiếp đưa ra lý do khách quan.",
    tags: { part: "Part 2", category: "Listening", topic: "Reasoning", difficulty: "Easy" },
    vocab: [
      { word: "integrity", ipa: "/ɪnˈteɡ.rə.ti/", pos: "n", meaning: "tính toàn vẹn của dữ liệu" },
      { word: "verification", ipa: "/ˌver.ɪ.fɪˈkeɪ.ʃən/", pos: "n", meaning: "sự xác minh, kiểm chứng" }
    ]
  },
  {
    id: "c2-18",
    chapter: 2,
    isBoss: true,
    part: 5,
    speaker: "RANSOMWARE CORE PROCESS (Boss 2)",
    dialogue_en: "ALERT: Rogue process attempting to delete shadow volume copies!",
    dialogue_vi: "BÁO ĐỘNG: Tiến trình độc hại đang cố xóa các bản sao lưu ẩn (Shadow Copies)!",
    situation_vi: "[TRÙM 2 - CÂU 3/5] Kẻ tấn công kích hoạt lệnh vssadmin hòng triệt phá khả năng phục hồi dữ liệu.",
    stem: "The forensic specialist was highly _______ in detecting hidden rootkits and memory resident malware.",
    choices: ["skilled", "skillful", "skills", "skillfully"],
    answer: 0,
    explanation_vi: "Đứng sau động từ to-be 'was' và trạng từ chỉ mức độ 'highly' cần một tính từ -> chọn 'skilled' (có tay nghề cao, thành thạo). Cấu trúc 'skilled in + V-ing' là dạng chuẩn trong đề thi TOEIC.",
    trap: "Bẫy phó từ 'skillfully' hoặc danh từ số nhiều 'skills'.",
    examTip: "Cụm tính từ kinh nghiệm công sở: [to be skilled in / experienced in + V-ing/N].",
    tags: { part: "Part 5", category: "Grammar", topic: "Adjective Usage", difficulty: "Medium" },
    vocab: [
      { word: "skilled", ipa: "/skɪld/", pos: "adj", meaning: "có kỹ năng, thành thạo" },
      { word: "rootkit", ipa: "/ˈruːt.kɪt/", pos: "n", meaning: "mã độc can thiệp sâu vào nhân hệ điều hành" }
    ]
  },
  {
    id: "c2-19",
    chapter: 2,
    isBoss: true,
    part: 5,
    speaker: "RANSOMWARE CORE PROCESS (Boss 2)",
    dialogue_en: "ALERT: Lateral privilege escalation detected on branch domain controller!",
    dialogue_vi: "BÁO ĐỘNG: Phát hiện leo thang đặc quyền ngang trên máy chủ quản lý miền chi nhánh!",
    situation_vi: "[TRÙM 2 - CÂU 4/5] Chặn đứng hành vi mạo danh tài khoản quản trị miền.",
    stem: "Despite _______ several complex obfuscation layers, the trojan payload was successfully decompiled.",
    choices: ["incorporating", "incorporate", "incorporated", "incorporation"],
    answer: 0,
    explanation_vi: "Đứng sau giới từ 'Despite' cần một Danh từ hoặc Danh động từ (V-ing) có tân ngữ phía sau ('several complex obfuscation layers') -> chọn 'incorporating' (Mặc dù tích hợp nhiều lớp làm rối mã phức tạp, mã độc vẫn bị dịch ngược thành công).",
    trap: "Bẫy danh từ 'incorporation' (không thể mang trực tiếp cụm tân ngữ 'several complex layers' phía sau mà không có giới từ of).",
    examTip: "Công thức V-ing sau giới từ: [Giới từ + V-ING + Cụm tân ngữ Danh từ] (Despite incorporating several layers).",
    tags: { part: "Part 5", category: "Grammar", topic: "Gerund after Preposition", difficulty: "Hard" },
    vocab: [
      { word: "incorporate", ipa: "/ɪnˈkɔː.pər.eɪt/", pos: "v", meaning: "kết hợp, tích hợp" },
      { word: "decompile", ipa: "/diː.kəmˈpaɪl/", pos: "v", meaning: "dịch ngược mã nguồn" }
    ]
  },
  {
    id: "c2-20",
    chapter: 2,
    isBoss: true,
    part: 5,
    speaker: "RANSOMWARE CORE PROCESS (Boss 2)",
    dialogue_en: "CRITICAL COUNTER-ATTACK: Execute the memory flush and restore clean shadow copies!",
    dialogue_vi: "PHẢN CÔNG QUYẾT ĐỊNH: Thực thi lệnh giải phóng bộ nhớ và khôi phục bản sao lưu sạch!",
    situation_vi: "[TRÙM 2 - CÂU 5/5] Cú đánh quyết định tiêu diệt hoàn toàn tiến trình ransomware!",
    stem: "NovaBank's swift incident response successfully prevented the ransomware from _______ any critical financial databases.",
    choices: ["compromising", "compromised", "compromise", "compromises"],
    answer: 0,
    explanation_vi: "Cấu trúc 'prevent someone/something from + V-ing': 'prevented the ransomware from compromising any critical databases' (ngăn chặn phần mềm tống tiền làm tổn hại bất kỳ cơ sở dữ liệu tài chính quan trọng nào).",
    trap: "Bẫy chọn động từ nguyên mẫu 'compromise' sau giới từ 'from'.",
    examTip: "Công thức vàng TOEIC: [prevent / stop / protect + O + FROM + V-ING] (prevented from compromising).",
    tags: { part: "Part 5", category: "Grammar", topic: "Verb Pattern", difficulty: "Medium" },
    vocab: [
      { word: "prevent", ipa: "/prɪˈvent/", pos: "v", meaning: "ngăn chặn" },
      { word: "critical", ipa: "/ˈkrɪt.ɪ.kəl/", pos: "adj", meaning: "then chốt, cực kỳ quan trọng" }
    ]
  }
];
