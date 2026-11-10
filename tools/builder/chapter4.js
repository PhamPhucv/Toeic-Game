/**
 * CHAPTER 4 QUESTIONS (20 câu hỏi hoàn chỉnh)
 * Bối cảnh: Quyết chiến nhóm hacker APT42 & Báo cáo Hội đồng Quản trị NovaBank
 * Quyết định 3 Kết thúc (Bad Ending, Good Ending, True Cyber Legend Ending)
 */
module.exports = [
  // --- Tình huống 1: Part 5 - Truy vết nhóm hacker APT42 (Từ loại) ---
  {
    id: "c4-01",
    chapter: 4,
    part: 5,
    speaker: "Dr. Helen Kang (CISO)",
    dialogue_en: "This is not an amateur script kiddie. We are facing APT42, an advanced state-sponsored cyber espionage syndicate.",
    dialogue_vi: "Đây không phải là những kẻ phá phách nghiệp dư. Chúng ta đang đối đầu với APT42, một tổ chức gián điệp mạng tinh vi do thế lực ngầm tài trợ.",
    situation_vi: "08:15 - CISO Helen Kang trực tiếp vào phòng SOC điều hành trận chiến cuối cùng.",
    stem: "The cyber defense specialists must act _______ to prevent the APT group from exfiltrating customer bank accounts.",
    choices: ["decisively", "decisive", "decision", "decisiveness"],
    answer: 0,
    explanation_vi: "Đứng sau động từ hành động 'act' (hành động) cần một phó từ (adverb) đuôi -ly để bổ nghĩa -> chọn 'decisively' (hành động một cách dứt khoát, quyết đoán).",
    trap: "Bẫy tính từ 'decisive' hoặc danh từ 'decision'.",
    examTip: "Động từ hành động + Phó từ [V + ADV] (act decisively).",
    tags: { part: "Part 5", category: "Grammar", topic: "Adverb", difficulty: "Easy" },
    vocab: [
      { word: "decisively", ipa: "/dɪˈsaɪ.sɪv.li/", pos: "adv", meaning: "một cách dứt khoát, quyết đoán" },
      { word: "espionage", ipa: "/ˈes.pi.ə.nɑːʒ/", pos: "n", meaning: "hoạt động gián điệp mạng" }
    ]
  },

  // --- Tình huống 2: Part 2 - Nghe Q&A: Họp báo cáo khẩn với Chủ tịch HĐQT ---
  {
    id: "c4-02",
    chapter: 4,
    part: 2,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave asks about the executive briefing with the Board of Directors.",
    dialogue_vi: "Dave hỏi về buổi báo cáo khẩn với Hội đồng Quản trị.",
    situation_vi: "08:30 - Dave hỏi bạn đã in xong báo cáo điều tra để CISO trình lên Hội đồng Quản trị chưa.",
    stem: "Could you prepare five copies of the final threat assessment report for the board meeting?",
    audioText: "Could you prepare five copies of the final threat assessment report for the board meeting?",
    choices: [
      "Certainly, I'll print them and deliver them to the boardroom now.",
      "Black coffee with no sugar, please.",
      "Yes, the meeting was postponed until next year."
    ],
    answer: 0,
    explanation_vi: "Lời đề nghị lịch sự: 'Could you prepare five copies...?' -> Đáp án (A) 'Certainly, I'll print them and deliver them to the boardroom now' (Chắc chắn rồi, tôi sẽ in và mang đến phòng họp HĐQT ngay) là câu trả lời hợp tác chính xác.",
    trap: "Bẫy gần âm kinh điển TOEIC: 'coffee' phát âm gần giống 'copies' (B), và bẫy hoãn tới năm sau phi lý (C).",
    examTip: "Bẫy từ gần âm Part 2: 'copies' (bản sao/bản in) và 'coffee' (cà phê) là bẫy âm thanh lặp đi lặp lại trong nhiều đề thi thật.",
    tags: { part: "Part 2", category: "Listening", topic: "Sound Trap", difficulty: "Medium" },
    vocab: [
      { word: "assessment", ipa: "/əˈses.mənt/", pos: "n", meaning: "sự đánh giá, thẩm định rủi ro" },
      { word: "boardroom", ipa: "/ˈbɔːd.ruːm/", pos: "n", meaning: "phòng họp Hội đồng Quản trị" }
    ]
  },

  // --- Tình huống 3: Part 5 - Thì Hoàn thành tiếp diễn & Giám sát liên tục ---
  {
    id: "c4-03",
    chapter: 4,
    part: 5,
    speaker: "Sarah (Threat Hunter)",
    dialogue_en: "Our honeypot network has been recording the hacker's lateral keystrokes for the past six hours.",
    dialogue_vi: "Mạng mồi nhử (honeypot) của chúng ta đã và đang ghi lại từng phím gõ di chuyển ngang của hacker suốt sáu giờ qua.",
    situation_vi: "08:45 - Sarah theo dõi kẻ tấn công bị lừa vào máy chủ bẫy honeypot.",
    stem: "The SOC team _______ the adversary's command-and-control server continuously since midnight.",
    choices: ["has been tracking", "tracked", "will track", "tracks"],
    answer: 0,
    explanation_vi: "Dấu hiệu 'continuously since midnight' (liên tục kể từ nửa đêm đến nay) nhấn mạnh tính liên tục của hành động kéo dài từ quá khứ đến hiện tại -> chọn thì Hiện tại Hoàn thành Tiếp diễn 'has been tracking'.",
    trap: "Bẫy thì quá khứ đơn 'tracked' hoặc tương lai 'will track'.",
    examTip: "Dấu hiệu 'since + mốc thời gian' kết hợp với trạng từ chỉ sự liên tục (continuously, non-stop) -> Ưu tiên thì Hiện tại Hoàn thành Tiếp diễn.",
    tags: { part: "Part 5", category: "Grammar", topic: "Perfect Continuous", difficulty: "Medium" },
    vocab: [
      { word: "adversary", ipa: "/ˈæd.və.sər.i/", pos: "n", meaning: "đối thủ, kẻ tấn công đối nghịch" },
      { word: "tracking", ipa: "/ˈtræk.ɪŋ/", pos: "n", meaning: "hoạt động truy vết" }
    ]
  },

  // --- Tình huống 4: Part 6 - Đoạn văn Thông báo Thắng lợi Đẩy lùi Sự cố (4 câu: c4-04 đến c4-07) ---
  {
    id: "c4-04",
    chapter: 4,
    part: 6,
    speaker: "AEGIS AI (Executive Broadcast)",
    dialogue_en: "MEMORANDUM: SUCCESSFUL NEUTRALIZATION OF CORPORATE NETWORK SIEGE",
    dialogue_vi: "BẢN GHI NHỚ: ĐẨY LÙI THÀNH CÔNG ĐỢT TẤN CÔNG MẠNG DOANH NGHIỆP",
    situation_vi: "09:00 - CISO Helen Kang gửi thông điệp chúc mừng và báo cáo toàn thể cán bộ nhân viên.",
    passage: "MEMORANDUM\nTO: All NovaBank Personnel\nFROM: Office of the Chief Executive Officer & CISO\nDATE: November 10, 09:00 AM\nSUBJECT: Neutralization of Coordinated Cyber Intrusion Attempt\n\nWe are proud to announce that our internal Cybersecurity Operations Center has successfully _______ [1] a sophisticated cyberattack originating from an advanced threat group. Thanks to the vigilant monitoring and prompt response of our night-shift security team, all malicious outbound connections were severed before any unauthorized data exfiltration could occur. Furthermore, our core banking ledgers and customer transaction databases remain _______ [2] secure. Throughout the coming week, IT security engineers will conduct a comprehensive review of all perimeter firewalls to reinforce our digital _______ [3]. _______ [4]. The Board of Directors extends its deepest gratitude to our dedicated security specialists for their professionalism.",
    stem: "Select the best answer for blank [1]:",
    choices: ["neutralized", "neutralize", "neutralizing", "neutralization"],
    answer: 0,
    explanation_vi: "Cấu trúc thì hiện tại hoàn thành: 'has successfully _______' -> Sau 'has + phó từ' cần một quá khứ phân từ V3/ed -> chọn 'neutralized' (đã vô hiệu hóa thành công).",
    trap: "Bẫy danh từ 'neutralization' hoặc động từ nguyên mẫu 'neutralize'.",
    examTip: "Công thức thì Hoàn thành có phó từ: [has / have + ADV + V3/ED] (has successfully neutralized).",
    tags: { part: "Part 6", category: "Grammar", topic: "Verb Tense", difficulty: "Easy" },
    vocab: [
      { word: "neutralize", ipa: "/ˈnjuː.trə.laɪz/", pos: "v", meaning: "vô hiệu hóa, triệt tiêu nguy hiểm" },
      { word: "vigilant", ipa: "/ˈvɪdʒ.əl.ənt/", pos: "adj", meaning: "cảnh giác cao độ, thận trọng" }
    ]
  },
  {
    id: "c4-05",
    chapter: 4,
    part: 6,
    speaker: "AEGIS AI (Executive Broadcast)",
    dialogue_en: "Continuing blank [2] in Executive Neutralization Memorandum.",
    dialogue_vi: "Tiếp tục xem xét chỗ trống [2] trong Bản ghi nhớ của Ban Điều hành.",
    situation_vi: "Chọn phó từ bổ nghĩa cho tính từ 'secure' (an toàn tuyệt đối).",
    passage: "(Tham khảo văn bản MEMORANDUM ở trên)",
    stem: "Select the best answer for blank [2]:",
    choices: ["entirely", "entire", "entirety", "more entire"],
    answer: 0,
    explanation_vi: "Sau động từ liên kết 'remain' và trước tính từ 'secure' cần một phó từ (adverb) đuôi -ly để chỉ mức độ -> chọn 'entirely' (hoàn toàn an toàn, an toàn tuyệt đối).",
    trap: "Bẫy tính từ 'entire' hoặc danh từ 'entirety'.",
    examTip: "Phó từ bổ nghĩa cho tính từ: [Linking verb + ADV + ADJECTIVE] (remain entirely secure).",
    tags: { part: "Part 6", category: "Grammar", topic: "Adverb Modification", difficulty: "Medium" },
    vocab: [
      { word: "entirely", ipa: "/ɪnˈtaɪə.li/", pos: "adv", meaning: "hoàn toàn, tuyệt đối" },
      { word: "secure", ipa: "/sɪˈkjʊər/", pos: "adj", meaning: "an toàn, được bảo vệ" }
    ]
  },
  {
    id: "c4-06",
    chapter: 4,
    part: 6,
    speaker: "AEGIS AI (Executive Broadcast)",
    dialogue_en: "Continuing blank [3] in Executive Neutralization Memorandum.",
    dialogue_vi: "Tiếp tục xem xét chỗ trống [3] trong Bản ghi nhớ của Ban Điều hành.",
    situation_vi: "Chọn danh từ phù hợp để kết hợp với tính từ 'digital' (hạ tầng phòng thủ kỹ thuật số).",
    passage: "(Tham khảo văn bản MEMORANDUM ở trên)",
    stem: "Select the best answer for blank [3]:",
    choices: ["defenses", "defend", "defensive", "defending"],
    answer: 0,
    explanation_vi: "Đứng sau tính từ sở hữu 'our' và tính từ 'digital' cần một danh từ số nhiều -> chọn 'defenses' (các phòng tuyến / hệ thống phòng thủ kỹ thuật số của chúng ta).",
    trap: "Bẫy động từ 'defend' hoặc tính từ 'defensive'.",
    examTip: "Cụm danh từ tiếng Anh công nghệ: [Tính từ sở hữu + Tính từ + DANH TỪ] (our digital defenses).",
    tags: { part: "Part 6", category: "Grammar", topic: "Noun Form", difficulty: "Easy" },
    vocab: [
      { word: "defenses", ipa: "/dɪˈfen.sɪz/", pos: "n", meaning: "hệ thống phòng thủ" },
      { word: "reinforce", ipa: "/ˌriː.ɪnˈfɔːs/", pos: "v", meaning: "gia cố, củng cố vững chắc" }
    ]
  },
  {
    id: "c4-07",
    chapter: 4,
    part: 6,
    speaker: "AEGIS AI (Executive Broadcast)",
    dialogue_en: "Select the sentence that best fits the contextual flow for blank [4].",
    dialogue_vi: "Chọn câu phù hợp nhất với mạch văn tại chỗ trống [4].",
    situation_vi: "Chọn câu khẳng định mọi hoạt động giao dịch khách hàng diễn ra bình thường trong ngày.",
    passage: "(Tham khảo văn bản MEMORANDUM ở trên)",
    stem: "Select the best sentence to fill blank [4]:",
    choices: [
      "All online banking services and branch teller counters will open on normal schedule today.",
      "The office parking garage will be closed for asphalt paving during the weekend.",
      "International postage rates will increase by ten percent starting next January.",
      "New employee identification cards can be picked up at the security desk next week."
    ],
    answer: 0,
    explanation_vi: "Phương án (A) 'All online banking services and branch teller counters will open on normal schedule today' (Mọi dịch vụ ngân hàng trực tuyến và quầy giao dịch chi nhánh sẽ mở cửa đúng lịch trình hôm nay) là câu kết hoàn hảo khẳng định ngân hàng vận hành ổn định sau sự cố.",
    trap: "Các phương án B, C, D nói về rải nhựa bãi đỗ xe, cước bưu điện, làm thẻ nhân viên.",
    examTip: "Trong bài đọc về ngân hàng sau sự cố công nghệ, thông tin các quầy giao dịch và hệ thống online mở cửa bình thường là điểm kết cốt lõi.",
    tags: { part: "Part 6", category: "Reading", topic: "Context Flow", difficulty: "Hard" },
    vocab: [
      { word: "teller", ipa: "/ˈtel.ər/", pos: "n", meaning: "giao dịch viên ngân hàng" },
      { word: "gratitude", ipa: "/ˈɡræt.ɪ.tʃuːd/", pos: "n", meaning: "lòng biết ơn, sự tri ân" }
    ]
  },

  // --- Tình huống 5: Part 2 - Nghe Q&A: Thẩm tra danh tính nhóm hacker ---
  {
    id: "c4-08",
    chapter: 4,
    part: 2,
    speaker: "Dr. Helen Kang (CISO)",
    dialogue_en: "Dr. Kang asks about the attribution evidence gathered against APT42.",
    dialogue_vi: "Tiến sĩ Kang hỏi về bằng chứng quy kết danh tính thu thập được đối với nhóm APT42.",
    situation_vi: "09:15 - CISO hỏi bạn đã hoàn tất hồ sơ quy kết nguồn gốc cuộc tấn công chưa.",
    stem: "Have you confirmed the geographic origin of the attacking IP subnet?",
    audioText: "Have you confirmed the geographic origin of the attacking IP subnet?",
    choices: [
      "Yes, the threat telemetry traces back to a proxy server in Eastern Europe.",
      "No, the geography textbook was returned to the library.",
      "The attack was very friendly."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi Yes/No 'Have you confirmed the geographic origin...?' -> (A) 'Yes, the threat telemetry traces back to a proxy server in Eastern Europe' (Có, dữ liệu đo đạc an ninh truy vết về một máy chủ proxy ở Đông Âu) là câu trả lời trực tiếp chính xác.",
    trap: "Bẫy lặp từ: (B) lặp từ 'geography' thành 'sách giáo khoa địa lý ở thư viện', và (C) câu vô nghĩa 'attack was friendly'.",
    examTip: "Bẫy lặp từ phát âm: 'geographic origin' (nguồn gốc địa lý trong an ninh mạng) bị người ra đề bẫy sang 'geography textbook' (sách giáo khoa địa lý).",
    tags: { part: "Part 2", category: "Listening", topic: "Threat Attribution", difficulty: "Medium" },
    vocab: [
      { word: "geographic", ipa: "/ˌdʒiː.əˈɡræf.ɪk/", pos: "adj", meaning: "thuộc về địa lý" },
      { word: "proxy", ipa: "/ˈprɒk.si/", pos: "n", meaning: "máy chủ ủy quyền ẩn danh" }
    ]
  },

  // --- Tình huống 6: Part 3 - Nghe hội thoại giữa CISO và Chủ tịch HĐQT (3 câu: c4-09 đến c4-11) ---
  {
    id: "c4-09",
    chapter: 4,
    part: 3,
    speaker: "Dr. Kang & Chairman Robert (Boardroom Dialogue)",
    dialogue_en: "[Chairman Robert]: Dr. Kang, I called this emergency board meeting to assess the integrity of our customer deposits after last night's cyber attack.\n[Dr. Kang]: Mr. Chairman, I am pleased to report that our SOC night team repelled the intrusion completely. Zero dollars were lost, and all core banking ledgers remain uncompromised.\n[Chairman Robert]: That is tremendous news. The board wants to commend the night-shift analysts. What investments should we prioritize next to strengthen our security posture?\n[Dr. Kang]: We recommend expanding our automated artificial intelligence threat-hunting platform and providing advanced certification sponsorships for all junior analysts.",
    dialogue_vi: "[Chủ tịch Robert]: Tiến sĩ Kang, tôi triệu tập cuộc họp HĐQT khẩn cấp này để đánh giá tính toàn vẹn của tiền gửi khách hàng sau đợt tấn công mạng đêm qua.\n[Tiến sĩ Kang]: Thưa Chủ tịch, tôi rất vui mừng báo cáo rằng đội ngũ trực đêm SOC đã đẩy lùi hoàn toàn cuộc xâm nhập. Không một đồng nào bị thất thoát, và toàn bộ sổ cái ngân hàng cốt lõi vẫn an toàn tuyệt đối.\n[Chủ tịch Robert]: Đó là tin tuyệt vời. Hội đồng muốn biểu dương các chuyên viên trực ca đêm. Chúng ta nên ưu tiên đầu tư gì tiếp theo để gia cố vị thế an ninh?\n[Tiến sĩ Kang]: Chúng tôi đề xuất mở rộng nền tảng săn mối đe dọa bằng trí tuệ nhân tạo tự động và tài trợ học các chứng chỉ bảo mật nâng cao cho toàn bộ chuyên viên trẻ.",
    situation_vi: "09:30 - Nghe cuộc đối thoại quan trọng giữa CISO Helen Kang và Chủ tịch HĐQT Robert trong phòng họp cấp cao.",
    stem: "What was the primary reason the Chairman called the emergency board meeting?",
    audioText: "Chairman Robert: Dr. Kang, I called this emergency board meeting to assess the integrity of our customer deposits after last night's cyber attack. Dr. Kang: Mr. Chairman, I am pleased to report that our SOC night team repelled the intrusion completely. Zero dollars were lost, and all core banking ledgers remain uncompromised. Chairman Robert: That is tremendous news. The board wants to commend the night-shift analysts. What investments should we prioritize next to strengthen our security posture? Dr. Kang: We recommend expanding our automated artificial intelligence threat-hunting platform and providing advanced certification sponsorships for all junior analysts.",
    choices: [
      "To assess the safety of customer deposits after the cyber attack",
      "To discuss quarterly marketing budgets for television commercials",
      "To announce the closure of ten regional bank branches",
      "To select a catering vendor for the upcoming shareholder banquet"
    ],
    answer: 0,
    explanation_vi: "Chủ tịch Robert nói rõ ngay câu đầu tiên: 'I called this emergency board meeting to assess the integrity of our customer deposits after last night's cyber attack' -> Đánh giá sự an toàn của tiền gửi khách hàng.",
    trap: "Bẫy quảng cáo truyền hình, đóng cửa chi nhánh hoặc tiệc cổ đông.",
    examTip: "Câu hỏi mục đích họp Part 3: Luôn lắng nghe lượt thoại mở màn của người triệu tập cuộc họp.",
    tags: { part: "Part 3", category: "Listening", topic: "Meeting Purpose", difficulty: "Easy" },
    vocab: [
      { word: "deposit", ipa: "/dɪˈpɒz.ɪt/", pos: "n", meaning: "tiền gửi tiết kiệm ngân hàng" },
      { word: "repelled", ipa: "/rɪˈpeld/", pos: "adj", meaning: "bị đẩy lùi, bị đánh bật" }
    ]
  },
  {
    id: "c4-10",
    chapter: 4,
    part: 3,
    speaker: "Dr. Kang & Chairman Robert (Boardroom Dialogue)",
    dialogue_en: "Reviewing the financial impact report.",
    dialogue_vi: "Xem lại báo cáo thiệt hại tài chính.",
    situation_vi: "Câu hỏi 2 bài nghe Part 3: Thiệt hại tài chính thực tế sau vụ tấn công là bao nhiêu?",
    stem: "According to Dr. Kang, how much money was lost during the incident?",
    audioText: "According to Dr. Kang, how much money was lost during the incident?",
    choices: [
      "Zero dollars were lost",
      "Ten million dollars were stolen",
      "Fifty thousand dollars in ransom fees",
      "One hundred thousand dollars in legal penalties"
    ],
    answer: 0,
    explanation_vi: "Tiến sĩ Kang tuyên bố dõng dạc: 'Zero dollars were lost, and all core banking ledgers remain uncompromised' -> Không mất một đồng nào.",
    trap: "Bẫy các con số tiền chuộc hoặc tiền phạt.",
    examTip: "Chú ý lắng nghe con số khẳng định 'Zero dollars were lost' trong bài phát biểu của CISO.",
    tags: { part: "Part 3", category: "Listening", topic: "Financial Detail", difficulty: "Easy" },
    vocab: [
      { word: "uncompromised", ipa: "/ʌnˈkɒm.prə.maɪzd/", pos: "adj", meaning: "nguyên vẹn, không bị tổn hại" },
      { word: "tremendous", ipa: "/trɪˈmen.dəs/", pos: "adj", meaning: "to lớn, tuyệt vời" }
    ]
  },
  {
    id: "c4-11",
    chapter: 4,
    part: 3,
    speaker: "Dr. Kang & Chairman Robert (Boardroom Dialogue)",
    dialogue_en: "Reviewing future investment recommendations.",
    dialogue_vi: "Xem lại các đề xuất đầu tư trong tương lai.",
    situation_vi: "Câu hỏi 3 bài nghe Part 3: Tiến sĩ Kang đề xuất ưu tiên đầu tư điều gì cho nhân sự SOC?",
    stem: "What does Dr. Kang recommend prioritizing for junior analysts?",
    audioText: "What does Dr. Kang recommend prioritizing for junior analysts?",
    choices: [
      "Providing sponsorships for advanced security certifications",
      "Reducing working hours by fifty percent",
      "Purchasing brand-new executive sports cars",
      "Relocating all employees to an overseas office"
    ],
    answer: 0,
    explanation_vi: "Tiến sĩ Kang nói ở câu cuối cùng: 'providing advanced certification sponsorships for all junior analysts' -> Tài trợ thi các chứng chỉ bảo mật nâng cao.",
    trap: "Bẫy giảm 50% giờ làm hoặc mua xe thể thao.",
    examTip: "Cụm từ 'certification sponsorships' xuất hiện ở phần kết thúc của đoạn thoại.",
    tags: { part: "Part 3", category: "Listening", topic: "Recommendation", difficulty: "Medium" },
    vocab: [
      { word: "sponsorship", ipa: "/ˈspɒn.sə.ʃɪp/", pos: "n", meaning: "sự tài trợ chi phí" },
      { word: "posture", ipa: "/ˈpɒs.tʃər/", pos: "n", meaning: "thế trận, vị thế an ninh" }
    ]
  },

  // --- Tình huống 7: Part 5 - Liên từ chỉ sự nhượng bộ và điều kiện ---
  {
    id: "c4-12",
    chapter: 4,
    part: 5,
    speaker: "Dr. Helen Kang (CISO)",
    dialogue_en: "Although the attackers deployed unprecedented distributed denial-of-service traffic, our redundant cloud gateways remained operational.",
    dialogue_vi: "Mặc dù kẻ tấn công tung ra lượng truy cập từ chối dịch vụ phân tán chưa từng có tiền lệ, các cổng đám mây dự phòng của chúng ta vẫn hoạt động ổn định.",
    situation_vi: "09:45 - Rà soát hiệu năng của hệ thống tường lửa đám mây.",
    stem: "_______ the volume of malicious network packets was unprecedented, NovaBank's redundant infrastructure absorbed the entire shock.",
    choices: ["Although", "Despite", "Because of", "Due to"],
    answer: 0,
    explanation_vi: "Phía sau là một mệnh đề hoàn chỉnh (S + V): 'the volume of malicious network packets [S] was [V] unprecedented' thể hiện sự tương phản -> chọn liên từ 'Although' (Mặc dù).",
    trap: "Bẫy 'Despite', 'Because of', 'Due to' (tất cả đều là giới từ, chỉ đi với Danh từ hoặc Cụm danh từ, không đi với mệnh đề S + V).",
    examTip: "Bẫy kinh điển phân loại ngữ pháp TOEIC: [Although + Mệnh đề S + V]; [Despite / In spite of + Cụm Danh từ].",
    tags: { part: "Part 5", category: "Grammar", topic: "Conjunction vs Preposition", difficulty: "Hard" },
    vocab: [
      { word: "unprecedented", ipa: "/ʌnˈpres.ɪ.den.tɪd/", pos: "adj", meaning: "chưa từng có tiền lệ" },
      { word: "infrastructure", ipa: "/ˈɪn.frəˌstrʌk.tʃər/", pos: "n", meaning: "cơ sở hạ tầng" }
    ]
  },

  // --- Tình huống 8: Part 7 - Đọc hiểu Báo cáo Kết luận của Ủy ban Kiểm toán (3 câu: c4-13 đến c4-15) ---
  {
    id: "c4-13",
    chapter: 4,
    part: 7,
    speaker: "Board Audit Committee",
    dialogue_en: "EXECUTIVE AUDIT REPORT: BOARDROOM VERDICT ON THE MIDNIGHT BREACH",
    dialogue_vi: "BÁO CÁO KIỂM TOÁN BAN ĐIỀU HÀNH: PHÁN QUYẾT HỘI ĐỒNG QUẢN TRỊ VỀ SỰ CỐ NỬA ĐÊM",
    situation_vi: "10:00 - Xem xét biên bản đánh giá khen thưởng và kết luận của Hội đồng Quản trị NovaBank.",
    passage: "NOVABANK BOARD OF DIRECTORS AUDIT COMMITTEE REPORT\nSession Date: November 10, 10:00 AM\nSubject: Final Operational Review of Cyber Defense Response\n\n1. Executive Summary\nThe Board Audit Committee convened to evaluate the bank's response to the coordinated APT42 cyberattack occurring between 00:00 and 06:00. The Committee formally notes that zero unauthorized financial withdrawals took place, and no regulatory non-compliance fines will be incurred.\n\n2. Commendations and Promotions\nThe committee singled out the night-shift SOC analysis team for exemplary valor and swift technical execution. Junior Analyst [Player] is recommended for immediate promotion to Senior Security Specialist with a twenty percent merit salary adjustment.\n\n3. Budgetary Allocations for Next Fiscal Year\nThe board has unanimously approved an additional fifteen-million-dollar capital investment into the SOC infrastructure. Key projects include real-time quantum-resistant cryptographic upgrades and expanded AI-driven behavioural anomaly telemetry. The official public press release will be published at 12:00 PM today.",
    stem: "What was the main finding of the Board Audit Committee?",
    choices: [
      "Zero unauthorized financial withdrawals occurred during the attack",
      "The bank must pay a substantial fine to regulatory authorities",
      "All branch offices will be closed permanently for restructuring",
      "The Chief Information Security Officer will be asked to resign"
    ],
    answer: 0,
    explanation_vi: "Mục 1 Executive Summary ghi rõ: 'zero unauthorized financial withdrawals took place, and no regulatory non-compliance fines will be incurred' -> Không có bất kỳ khoản rút tiền trái phép nào diễn ra.",
    trap: "Bẫy phạt tiền hoặc CISO phải từ chức.",
    examTip: "Tìm thông tin cốt lõi ở Mục 1 (Executive Summary) của bài đọc Part 7.",
    tags: { part: "Part 7", category: "Reading", topic: "Main Finding", difficulty: "Easy" },
    vocab: [
      { word: "convened", ipa: "/kənˈviːnd/", pos: "v", meaning: "đã triệu tập phiên họp" },
      { word: "incurred", ipa: "/ɪnˈkɜːd/", pos: "adj", meaning: "bị gánh chịu (chi phí, tiền phạt)" }
    ]
  },
  {
    id: "c4-14",
    chapter: 4,
    part: 7,
    speaker: "Board Audit Committee",
    dialogue_en: "Reviewing player commendation and career progression.",
    dialogue_vi: "Xem quyết định khen thưởng và thăng tiến nghề nghiệp của người chơi.",
    situation_vi: "Câu hỏi 2 bài đọc Part 7: Hội đồng Quản trị quyết định điều gì đối với nhân sự trực đêm xuất sắc?",
    passage: "(Tham khảo văn bản NOVABANK BOARD REPORT ở trên)",
    stem: "What recommendation did the committee make regarding the junior night analyst?",
    choices: [
      "Promotion to Senior Security Specialist with a 20% salary adjustment",
      "Transfer to the physical facilities maintenance department",
      "Re-enrollment in basic introductory computer science classes",
      "A temporary unpaid suspension pending further inquiries"
    ],
    answer: 0,
    explanation_vi: "Mục 2 ghi rõ: 'Junior Analyst [Player] is recommended for immediate promotion to Senior Security Specialist with a twenty percent merit salary adjustment' -> Thăng chức chuyên viên bảo mật cao cấp kèm tăng 20% lương.",
    trap: "Bẫy chuyển sang làm cơ sở vật chất hoặc đình chỉ công tác.",
    examTip: "Tìm từ khóa 'recommendation' hoặc 'promotions' trong Mục 2.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail", difficulty: "Easy" },
    vocab: [
      { word: "exemplary", ipa: "/ɪɡˈzem.plər.i/", pos: "adj", meaning: "gương mẫu, mẫu mực xuất sắc" },
      { word: "merit", ipa: "/ˈmer.ɪt/", pos: "n", meaning: "xứng đáng, thành tích công lao" }
    ]
  },
  {
    id: "c4-15",
    chapter: 4,
    part: 7,
    speaker: "Board Audit Committee",
    dialogue_en: "Checking the new security capital budget amount.",
    dialogue_vi: "Kiểm tra số tiền ngân sách an ninh mới được phê duyệt.",
    situation_vi: "Câu hỏi 3 bài đọc Part 7: Hội đồng Quản trị đã duyệt bao nhiêu tiền đầu tư cho SOC trong năm tài khóa tới?",
    passage: "(Tham khảo văn bản NOVABANK BOARD REPORT ở trên)",
    stem: "How much additional capital investment did the board approve for SOC infrastructure?",
    choices: [
      "Fifteen million dollars",
      "Two hundred thousand dollars",
      "Fifty billion dollars",
      "Twelve million dollars"
    ],
    answer: 0,
    explanation_vi: "Mục 3 ghi: 'approved an additional fifteen-million-dollar capital investment into the SOC infrastructure' -> Mười lăm triệu đô la ($15,000,000).",
    trap: "Bẫy các con số khác không khớp với bài đọc.",
    examTip: "Số tiền đầu tư nằm ở Mục 3 (Budgetary Allocations).",
    tags: { part: "Part 7", category: "Reading", topic: "Financial Detail", difficulty: "Easy" },
    vocab: [
      { word: "unanimously", ipa: "/juːˈnæn.ɪ.məs.li/", pos: "adv", meaning: "nhất trí 100%, đồng lòng" },
      { word: "quantum-resistant", ipa: "/ˈkwɒn.təm rɪˈzɪs.tənt/", pos: "adj", meaning: "kháng được máy tính lượng tử" }
    ]
  },

  // =========================================================================
  // ĐẠI TRÙM CHƯƠNG 4 (FINAL BOSS LEVEL): THE ULTIMATE APT SHOWDOWN
  // 5 câu sinh tử quyết định kết thúc game (c4-16 đến c4-20)
  // =========================================================================
  {
    id: "c4-16",
    chapter: 4,
    isBoss: true,
    part: 5,
    speaker: "APT42 LEADER (Final Boss)",
    dialogue_en: "CRITICAL ALERT: APT42 launching automated brute-force attacks against Swift wire transfer gateway!",
    dialogue_vi: "BÁO ĐỘNG TỐI CAO: APT42 đang tung đợt tấn công vét cạn tự động vào cổng chuyển tiền Swift!",
    situation_vi: "[ĐẠI TRÙM CUỐI - CÂU 1/5] Kích hoạt khóa bảo vệ đa lớp ngăn chặn giao dịch trái phép!",
    stem: "All overseas wire transactions must receive double authorization _______ being processed by the core banking system.",
    choices: ["prior to", "subsequent", "owing", "in lieu"],
    answer: 0,
    explanation_vi: "Cụm giới từ 'prior to + V-ing/Noun' có nghĩa là 'trước khi' -> 'prior to being processed...' (trước khi được xử lý bởi hệ thống ngân hàng cốt lõi).",
    trap: "Bẫy 'subsequent' (cần có to: subsequent to = sau khi), 'owing' (cần có to: owing to = vì), 'in lieu' (cần có of: in lieu of = thay vì).",
    examTip: "Cụm từ đồng nghĩa vàng TOEIC: [prior to = before + V-ing/N]. Thấy V-ing ở mốc thời gian trước đó -> Chọn 'prior to'.",
    tags: { part: "Part 5", category: "Grammar", topic: "Prepositional Phrase", difficulty: "Medium" },
    vocab: [
      { word: "prior to", ipa: "/ˈpraɪ.ər tuː/", pos: "prep", meaning: "trước khi" },
      { word: "authorization", ipa: "/ˌɔː.θər.aɪˈzeɪ.ʃən/", pos: "n", meaning: "sự cấp phép, sự phê duyệt" }
    ]
  },
  {
    id: "c4-17",
    chapter: 4,
    isBoss: true,
    part: 2,
    speaker: "APT42 LEADER (Final Boss)",
    dialogue_en: "Voice challenge: Confirm command-and-control server IP shutdown!",
    dialogue_vi: "Thử thách giọng nói: Xác nhận việc triệt hạ máy chủ điều khiển C2 của hacker!",
    situation_vi: "[ĐẠI TRÙM CUỐI - CÂU 2/5] Dave hét qua micro hỏi đã ngắt thành công liên lạc của máy chủ C2 chưa.",
    stem: "Have international law enforcement agencies dismantled the botnet command center?",
    audioText: "Have international law enforcement agencies dismantled the botnet command center?",
    choices: [
      "Yes, the international operation neutralized all three server nodes.",
      "The commanding officer was very tall.",
      "In the center of the town hall square."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi Yes/No 'Have international law enforcement agencies dismantled...?' -> (A) 'Yes, the international operation neutralized all three server nodes' (Có, chiến dịch quốc tế đã triệt hạ cả 3 máy chủ nút mạng) là câu trả lời trực tiếp giải quyết sự cố.",
    trap: "Bẫy lặp từ: (B) lặp từ 'command' thành 'sĩ quan chỉ huy rất cao', và (C) bẫy 'center' thành 'quảng trường thị trấn'.",
    examTip: "Bẫy lặp từ và bẫy người trong Part 2: 'command center' (trung tâm chỉ huy mạng) bị bẫy sang 'commanding officer' (sĩ quan quân đội).",
    tags: { part: "Part 2", category: "Listening", topic: "Law Enforcement", difficulty: "Hard" },
    vocab: [
      { word: "dismantle", ipa: "/dɪsˈmæn.təl/", pos: "v", meaning: "tháo dỡ, triệt phá mạng lưới" },
      { word: "node", ipa: "/nəʊd/", pos: "n", meaning: "nút mạng máy chủ" }
    ]
  },
  {
    id: "c4-18",
    chapter: 4,
    isBoss: true,
    part: 5,
    speaker: "APT42 LEADER (Final Boss)",
    dialogue_en: "ALERT: APT42 injecting malformed packets into memory resident cache!",
    dialogue_vi: "BÁO ĐỘNG: APT42 đang bơm các gói tin biến dạng vào bộ nhớ đệm máy chủ!",
    situation_vi: "[ĐẠI TRÙM CUỐI - CÂU 3/5] Áp dụng kỹ thuật kiểm tra tính toàn vẹn chữ ký số mật mã.",
    stem: "Cryptographic hash functions enable administrators to verify whether the source code has been _______ modified.",
    choices: ["illicitly", "illicit", "illicitness", "more illicit"],
    answer: 0,
    explanation_vi: "Cấu trúc bị động thì hoàn thành: 'has been _______ modified' -> Giữa 'been' và V3/ed cần một phó từ (adverb) đuôi -ly để bổ nghĩa -> chọn 'illicitly' (bị chỉnh sửa một cách phi pháp/bất hợp pháp).",
    trap: "Bẫy tính từ 'illicit' (bất hợp pháp) hoặc danh từ 'illicitness'.",
    examTip: "[has been + ADV + V3/ED] (has been illicitly modified).",
    tags: { part: "Part 5", category: "Grammar", topic: "Adverb", difficulty: "Medium" },
    vocab: [
      { word: "illicitly", ipa: "/ɪˈlɪs.ɪt.li/", pos: "adv", meaning: "một cách phi pháp, lén lút" },
      { word: "hash", ipa: "/hæʃ/", pos: "n", meaning: "giá trị băm mật mã học" }
    ]
  },
  {
    id: "c4-19",
    chapter: 4,
    isBoss: true,
    part: 5,
    speaker: "APT42 LEADER (Final Boss)",
    dialogue_en: "FINAL RESISTANCE: APT42 trying to purge system logs to erase all digital fingerprints!",
    dialogue_vi: "SỰ CỐ THỦ CUỐI CÙNG: APT42 cố xóa toàn bộ nhật ký hệ thống để hủy dấu vết số!",
    situation_vi: "[ĐẠI TRÙM CUỐI - CÂU 4/5] Kích hoạt cơ chế ghi log bất biến vào hệ thống blockchain bảo vệ bằng chứng!",
    stem: "Under no circumstances _______ employees share their administrative passwords with external contractors.",
    choices: ["may", "must", "can", "will"],
    answer: 0,
    explanation_vi: "Đảo ngữ với cụm từ phủ định đứng đầu câu: 'Under no circumstances + Modal verb + S + V(nguyên thể)' mang nghĩa 'Trong bất kỳ hoàn cảnh nào cũng tuyệt đối không được phép...'. Trong văn phong quy định pháp lý và TOEIC, 'Under no circumstances may S + V' là cấu trúc trang trọng chuẩn mực nhất.",
    trap: "Nhầm thứ tự từ không đảo ngữ, hoặc dùng các động từ không mang nghĩa chuẩn mực quy định.",
    examTip: "Cụm đảo ngữ phủ định 750+ TOEIC: [Under no circumstances / In no way / Seldom / Rarely + Trợ động từ/Modal + S + V].",
    tags: { part: "Part 5", category: "Grammar", topic: "Negative Inversion", difficulty: "Hard" },
    vocab: [
      { word: "circumstance", ipa: "/ˈsɜː.kəm.stɑːns/", pos: "n", meaning: "hoàn cảnh, tình huống" },
      { word: "contractor", ipa: "/kənˈtræk.tər/", pos: "n", meaning: "nhà thầu bên ngoài" }
    ]
  },
  {
    id: "c4-20",
    chapter: 4,
    isBoss: true,
    part: 5,
    speaker: "APT42 LEADER (Final Boss)",
    dialogue_en: "THE ULTIMATE BLOW: Counter-hack the APT42 bastion host and terminate their access forever!",
    dialogue_vi: "ĐÒN KẾT LIỄU CUỐI CÙNG: Tấn công triệt hạ máy chủ pháo đài của APT42 và cắt đứt vĩnh viễn quyền truy cập!",
    situation_vi: "[ĐẠI TRÙM CUỐI - CÂU 5/5] Cú đánh quyết định khép lại toàn bộ cuộc chiến và bảo vệ ngân hàng NovaBank!",
    stem: "NovaBank's unwavering dedication to cybersecurity excellence ensures that client financial data remains _______ protected.",
    choices: ["inviolably", "inviolable", "inviolate", "inviolability"],
    answer: 0,
    explanation_vi: "Đứng trước phân từ/tính từ 'protected' (được bảo vệ) cần một phó từ (adverb) đuôi -ly để bổ nghĩa -> chọn 'inviolably' (được bảo vệ một cách bất khả xâm phạm).",
    trap: "Bẫy tính từ 'inviolable' hoặc danh từ 'inviolability'.",
    examTip: "Vị trí phó từ trước phân từ tính từ: [remains + ADV + V3/ed] (remains inviolably protected). 'Inviolably' = bất khả xâm phạm.",
    tags: { part: "Part 5", category: "Grammar", topic: "Adverb", difficulty: "Hard" },
    vocab: [
      { word: "inviolably", ipa: "/ɪnˈvaɪ.ə.lə.bli/", pos: "adv", meaning: "một cách bất khả xâm phạm" },
      { word: "unwavering", ipa: "/ʌnˈweɪ.vər.ɪŋ/", pos: "adj", meaning: "kiên định, không hề dao động" }
    ]
  }
];
