/**
 * NEW QUESTIONS - CHAPTER 4 (29 câu mới: 5 Part 2, 3 Part 3, 10 Part 5, 3 Part 6, 8 Part 7)
 * Chủ đề: Quyết chiến APT, Báo cáo Hội đồng Quản trị & Truy vết Thủ phạm
 */
module.exports = [
  // ==========================================
  // PART 2 (5 CÂU Q&A LISTENING)
  // ==========================================
  {
    id: "c4-21",
    chapter: 4,
    part: 2,
    speaker: "Helen Kang (CISO)",
    dialogue_en: "Helen Kang asks about the final forensic attribution report status.",
    dialogue_vi: "Helen Kang hỏi về tình trạng báo cáo quy kết thủ phạm vụ tấn công APT.",
    situation_vi: "08:15 - Helen Kang cần kết luận điều tra để báo cáo Chủ tịch Ngân hàng.",
    stem: "Has the cyber threat intelligence team confirmed the attribution of the APT attack?",
    audioText: "Has the cyber threat intelligence team confirmed the attribution of the APT attack?",
    choices: [
      "Yes, digital signatures and infrastructure patterns point conclusively to APT42.",
      "The board meeting will start in ten minutes.",
      "No, the team ordered twenty laptop computers."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi Yes/No với thì Hiện tại hoàn thành ('Has the... team confirmed...?') -> (A) 'Yes, digital signatures and infrastructure patterns point conclusively to APT42' (Vâng, chữ ký số và mô thức hạ tầng chỉ ra một cách chắc chắn thủ phạm là nhóm APT42) trả lời trực tiếp câu hỏi.",
    trap: "Bẫy giờ họp ở (B) và bẫy máy tính xách tay ở (C).",
    examTip: "Câu hỏi xác nhận bằng chứng pháp lý an ninh: chú ý từ 'conclusively' (mang tính kết luận chắc chắn) hoặc 'confirmed'.",
    tags: { part: "Part 2", category: "Listening", topic: "Attribution", difficulty: "Medium" },
    vocab: [
      { word: "attribution", ipa: "/ˌæt.rɪˈbjuː.ʃən/", pos: "n", meaning: "sự quy kết thủ phạm tấn công" },
      { word: "conclusively", ipa: "/kənˈkluː.sɪv.li/", pos: "adv", meaning: "một cách chắc chắn, có tính thuyết phục tuyệt đối" }
    ]
  },
  {
    id: "c4-22",
    chapter: 4,
    part: 2,
    speaker: "Frank Vance (Operations Lead)",
    dialogue_en: "Frank Vance asks when interbank Swift transactions can be safely resumed.",
    dialogue_vi: "Frank Vance hỏi khi nào có thể mở lại an toàn các giao dịch liên ngân hàng Swift.",
    situation_vi: "08:30 - Khối Vận hành giao dịch chờ tín hiệu xanh từ trung tâm SOC.",
    stem: "When can our branch tellers begin processing international wire transfers again?",
    audioText: "When can our branch tellers begin processing international wire transfers again?",
    choices: [
      "Right after the CISO and SOC lead sign off on the clean integrity audit.",
      "Because the foreign exchange market fluctuates constantly.",
      "International wires cost twenty-five dollars per transaction."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi 'When' (Khi nào) -> (A) 'Right after the CISO and SOC lead sign off on the clean integrity audit' (Ngay sau khi CISO và trưởng ca SOC ký phê chuẩn cuộc kiểm toán tính toàn vẹn hệ thống) chỉ rõ thời điểm bằng liên từ thời gian 'Right after'.",
    trap: "Bẫy lý do ở (B) và bẫy phí giao dịch ở (C).",
    examTip: "Cụm 'Right after + mệnh đề' hoặc 'As soon as + mệnh đề' là câu trả lời phổ biến cho câu hỏi When.",
    tags: { part: "Part 2", category: "Listening", topic: "Operations", difficulty: "Easy" },
    vocab: [
      { word: "sign off", ipa: "/saɪn ɒf/", pos: "v", meaning: "ký tên phê chuẩn chính thức" },
      { word: "integrity", ipa: "/ɪnˈteɡ.rə.ti/", pos: "n", meaning: "tính toàn vẹn dữ liệu" }
    ]
  },
  {
    id: "c4-23",
    chapter: 4,
    part: 2,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave checks where the CISO Helen Kang is currently located.",
    dialogue_vi: "Dave hỏi Giám đốc Helen Kang hiện đang ở đâu.",
    situation_vi: "08:45 - Cần trình ký biên bản hoàn tất ca trực đêm.",
    stem: "Where is Director Kang presenting the incident briefing right now?",
    audioText: "Where is Director Kang presenting the incident briefing right now?",
    choices: [
      "In the main executive boardroom on the twentieth floor.",
      "The presentation contains sixteen detailed data charts.",
      "Yes, she has been the director for three years."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi 'Where' (Ở đâu) -> (A) 'In the main executive boardroom on the twentieth floor' chỉ rõ địa điểm vị trí.",
    trap: "Bẫy mô tả số lượng biểu đồ ở (B) và bẫy Yes/No ở (C).",
    examTip: "Câu hỏi Where luôn ưu tiên các giới từ chỉ nơi chốn (In the boardroom, On the twentieth floor).",
    tags: { part: "Part 2", category: "Listening", topic: "Locations", difficulty: "Easy" },
    vocab: [
      { word: "briefing", ipa: "/ˈbriː.fɪŋ/", pos: "n", meaning: "buổi báo cáo tóm tắt ngắn gọn" },
      { word: "boardroom", ipa: "/ˈbɔːd.ruːm/", pos: "n", meaning: "phòng họp hội đồng quản trị" }
    ]
  },
  {
    id: "c4-24",
    chapter: 4,
    part: 2,
    speaker: "Sarah (Forensics)",
    dialogue_en: "Sarah makes a suggestion about retaining external legal counsel.",
    dialogue_vi: "Sarah đề xuất mời luật sư tư vấn pháp lý về việc thông báo rủi ro.",
    situation_vi: "09:00 - Quy định pháp luật yêu cầu báo cáo cơ quan thanh tra ngân hàng trung ương.",
    stem: "Shouldn't we consult our legal counsel regarding regulatory disclosure requirements?",
    audioText: "Shouldn't we consult our legal counsel regarding regulatory disclosure requirements?",
    choices: [
      "Yes, the general counsel has already reviewed our preliminary statement.",
      "No, regulatory requirements are updated every year.",
      "Legal counsel is located across the street from the bank."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi Yes/No gợi ý hành động ('Shouldn't we consult...?') -> (A) 'Yes, the general counsel has already reviewed our preliminary statement' xác nhận đã tham vấn và luật sư trưởng đã xem qua tuyên bố sơ bộ.",
    trap: "Bẫy quy định cập nhật hàng năm ở (B) và bẫy vị trí văn phòng luật ở (C).",
    examTip: "Câu hỏi 'Shouldn't we...' đưa ra đề xuất thận trọng trong quản trị doanh nghiệp.",
    tags: { part: "Part 2", category: "Listening", topic: "Compliance & Legal", difficulty: "Medium" },
    vocab: [
      { word: "counsel", ipa: "/ˈkaʊn.səl/", pos: "n", meaning: "cố vấn pháp lý, luật sư doanh nghiệp" },
      { word: "disclosure", ipa: "/dɪˈskləʊ.ʒər/", pos: "n", meaning: "sự công bố thông tin theo luật" }
    ]
  },
  {
    id: "c4-25",
    chapter: 4,
    part: 2,
    speaker: "Helen Kang (CISO)",
    dialogue_en: "Helen Kang delivers high praise to the SOC night-shift team.",
    dialogue_vi: "Helen Kang khen ngợi sự phối hợp xuất sắc của cả ca trực SOC.",
    situation_vi: "09:15 - Helen Kang bước vào phòng trực SOC sau cuộc họp hội đồng quản trị.",
    stem: "The chairman of the board was exceptionally impressed by our rapid incident containment.",
    audioText: "The chairman of the board was exceptionally impressed by our rapid incident containment.",
    choices: [
      "That is wonderful news; everyone on this shift worked tirelessly throughout the night.",
      "The board of directors meets once every quarter.",
      "No, the rapid transit system is experiencing delays."
    ],
    answer: 0,
    explanation_vi: "Câu trần thuật mang tính tán thưởng ('The chairman... was exceptionally impressed...') -> (A) 'That is wonderful news; everyone on this shift worked tirelessly throughout the night' (Đó quả là tin tuyệt vời; mọi người trong ca trực này đã làm việc không mệt mỏi suốt đêm) là phản hồi tự nhiên và thể hiện tinh thần đồng đội.",
    trap: "Bẫy lịch họp định kỳ ở (B) và bẫy lặp từ 'rapid' (hệ thống tàu điện ngầm) ở (C).",
    examTip: "Khi nghe câu trần thuật thông báo tin tốt lành, câu trả lời đúng thường thể hiện sự vui mừng: That's great news, I'm glad to hear that, That's wonderful.",
    tags: { part: "Part 2", category: "Listening", topic: "Acknowledgement", difficulty: "Easy" },
    vocab: [
      { word: "exceptionally", ipa: "/ɪkˈsep.ʃən.əl.i/", pos: "adv", meaning: "một cách đặc biệt xuất sắc" },
      { word: "tirelessly", ipa: "/ˈtaɪə.ləs.li/", pos: "adv", meaning: "không biết mệt mỏi" }
    ]
  },

  // ==========================================
  // PART 3 (HỘI THOẠI 3 CÂU - CONVERSATION 4)
  // ==========================================
  {
    id: "c4-26",
    chapter: 4,
    part: 3,
    speaker: "Helen Kang & Frank Vance",
    dialogue_en: "Helen: Frank, I have just concluded our emergency briefing with the Board of Directors. I can confirm that our SOC team successfully thwarted the APT42 cyberattack without a single unauthorized wire transfer.\nFrank: That is a tremendous relief, Helen. Our corporate treasury clients have been calling all morning to verify their account security. Can I inform them that normal SWIFT transaction processing is fully operational?\nHelen: Yes, absolutely. All perimeter gateways have been patched, the malicious command-and-control IPs are blacklisted, and digital certificates have been reissued. You may authorize normal settlement immediately.",
    dialogue_vi: "Helen: Frank, tôi vừa kết thúc buổi báo cáo khẩn cấp với Hội đồng quản trị. Tôi có thể khẳng định đội SOC của chúng ta đã đập tan thành công cuộc tấn công của nhóm APT42 mà không có bất kỳ giao dịch chuyển tiền trái phép nào diễn ra.\nFrank: Thật là nhẹ nhõm, Helen. Các khách hàng doanh nghiệp khối ngân quỹ đã gọi điện suốt buổi sáng để kiểm tra an toàn tài khoản. Tôi có thể thông báo với họ là hệ thống xử lý giao dịch SWIFT đã hoạt động bình thường trở lại chưa?\nHelen: Được chứ, hoàn toàn có thể. Tất cả cổng vành đai đã được vá, các IP độc hại đã bị chặn, và các chứng chỉ số đã được cấp mới. Anh có thể cho phép quyết toán bình thường ngay lập tức.",
    situation_vi: "09:30 - Hội thoại giữa CISO Helen Kang và Giám đốc Vận hành Frank Vance sau khi dập tắt cuộc tấn công.",
    stem: "What good news does Helen Kang share with Frank Vance?",
    audioText: "What good news does Helen Kang share with Frank Vance?",
    choices: [
      "The cyberattack was thwarted with zero fraudulent transactions.",
      "The bank has acquired a competitor financial institution.",
      "All branch tellers will receive an immediate holiday bonus.",
      "The company will relocate to a larger skyscraper downtown."
    ],
    answer: 0,
    explanation_vi: "Helen khẳng định: 'our SOC team successfully thwarted the APT42 cyberattack without a single unauthorized wire transfer' -> Cuộc tấn công mạng đã bị đập tan mà không có bất kỳ giao dịch gian lận nào (The cyberattack was thwarted with zero fraudulent transactions).",
    trap: "Bẫy thâu tóm đối thủ (B), thưởng tiền (C), hay chuyển trụ sở (D).",
    examTip: "Từ đồng nghĩa: 'without a single unauthorized wire transfer' = 'with zero fraudulent transactions'.",
    tags: { part: "Part 3", category: "Listening", topic: "Gist / Good News", difficulty: "Easy" },
    vocab: [
      { word: "tremendous", ipa: "/trɪˈmen.dəs/", pos: "adj", meaning: "to lớn, phi thường" },
      { word: "thwarted", ipa: "/θwɔː.tɪd/", pos: "adj", meaning: "đã bị đập tan, ngăn chặn thành công" }
    ]
  },
  {
    id: "c4-27",
    chapter: 4,
    part: 3,
    speaker: "Helen Kang & Frank Vance",
    dialogue_en: "(Continuing Conversation 4)",
    dialogue_vi: "(Tiếp tục Hội thoại 4)",
    situation_vi: "Tìm hiểu mối bận tâm của các khách hàng doanh nghiệp khối ngân quỹ.",
    stem: "Why have corporate treasury clients been contacting Frank Vance?",
    audioText: "Why have corporate treasury clients been contacting Frank Vance?",
    choices: [
      "To check on the security and integrity of their banking accounts.",
      "To apply for mortgage loans to purchase industrial factories.",
      "To complain about the bank's mobile application color scheme.",
      "To cancel their corporate credit cards permanently."
    ],
    answer: 0,
    explanation_vi: "Frank cho biết: 'Our corporate treasury clients have been calling all morning to verify their account security' -> Để kiểm tra mức độ an toàn tài khoản của họ (To check on the security and integrity of their banking accounts).",
    trap: "Bẫy vay mua nhà xưởng (B), chê màu ứng dụng (C) hay hủy thẻ (D).",
    examTip: "Kỹ năng Paraphrase: 'verify their account security' = 'check on the security and integrity of their accounts'.",
    tags: { part: "Part 3", category: "Listening", topic: "Detail", difficulty: "Medium" },
    vocab: [
      { word: "treasury", ipa: "/ˈtreʒ.ər.i/", pos: "n", meaning: "khối ngân quỹ / nguồn vốn doanh nghiệp" },
      { word: "operational", ipa: "/ˌɒp.ərˈeɪ.ʃən.əl/", pos: "adj", meaning: "vận hành bình thường, sẵn sàng hoạt động" }
    ]
  },
  {
    id: "c4-28",
    chapter: 4,
    part: 3,
    speaker: "Helen Kang & Frank Vance",
    dialogue_en: "(Continuing Conversation 4)",
    dialogue_vi: "(Tiếp tục Hội thoại 4)",
    situation_vi: "Quyết định cuối cùng của Helen Kang cho phép mở lại giao dịch.",
    stem: "What does Helen Kang permit Frank Vance to do immediately?",
    audioText: "What does Helen Kang permit Frank Vance to do immediately?",
    choices: [
      "Authorize the resumption of standard transaction settlement.",
      "Hire fifteen independent external security consultants.",
      "Shut down the corporate website for another twelve hours.",
      "File an insurance claim for five million dollars."
    ],
    answer: 0,
    explanation_vi: "Helen kết luận: 'You may authorize normal settlement immediately' -> Cho phép phê duyệt khôi phục quyết toán giao dịch bình thường (Authorize the resumption of standard transaction settlement).",
    trap: "Bẫy thuê 15 tư vấn (B), đóng web thêm 12 tiếng (C), hoặc đòi tiền bảo hiểm (D).",
    examTip: "Từ đồng nghĩa: 'authorize normal settlement' = 'Authorize the resumption of standard transaction settlement'.",
    tags: { part: "Part 3", category: "Listening", topic: "Action Item", difficulty: "Easy" },
    vocab: [
      { word: "resumption", ipa: "/rɪˈzʌmp.ʃən/", pos: "n", meaning: "sự khôi phục lại sau thời gian gián đoạn" },
      { word: "settlement", ipa: "/ˈset.əl.mənt/", pos: "n", meaning: "việc thanh quyết toán giao dịch tài chính" }
    ]
  },

  // ==========================================
  // PART 5 (10 CÂU GRAMMAR & VOCABULARY)
  // ==========================================
  {
    id: "c4-29",
    chapter: 4,
    part: 5,
    speaker: "Helen Kang (CISO)",
    dialogue_en: "Helen Kang remarks on the rapid resolution of the incident.",
    dialogue_vi: "Helen Kang nhận định về giải pháp xử lý sự cố dứt điểm và nhanh chóng.",
    situation_vi: "Chủ điểm: Cấu trúc giới từ 'thanks to' (nhờ vào / nhờ có).",
    stem: "_______ the prompt actions taken by our night-shift analysts, the cyber intrusion was halted before critical assets were reached.",
    choices: ["Thanks to", "Even though", "In case", "As if"],
    answer: 0,
    explanation_vi: "Phía sau là cụm danh từ 'the prompt actions taken by our night-shift analysts' (những hành động kịp thời của các chuyên viên trực ca đêm). Cần cụm giới từ chỉ nguyên nhân tích cực -> chọn 'Thanks to' (Nhờ có / nhờ vào).",
    trap: "Bẫy liên từ 'Even though' (cần đi với mệnh đề S + V).",
    examTip: "Phân biệt: [Thanks to + Cụm danh từ] (mang nghĩa tích cực: nhờ có) >< [Because of / Due to + Cụm danh từ] (nguyên nhân trung tính/tiêu cực).",
    tags: { part: "Part 5", category: "Grammar", topic: "Prepositions", difficulty: "Easy" },
    vocab: [
      { word: "prompt", ipa: "/prɒmpt/", pos: "adj", meaning: "nhanh chóng, kịp thời" },
      { word: "halted", ipa: "/hɔːl.tɪd/", pos: "adj", meaning: "bị chặn đứng" }
    ]
  },
  {
    id: "c4-30",
    chapter: 4,
    part: 5,
    speaker: "Frank Vance (Operations Lead)",
    dialogue_en: "Frank Vance requires matching transaction records.",
    dialogue_vi: "Frank Vance yêu cầu đối chiếu các giao dịch để phát hiện sai lệch.",
    situation_vi: "Chủ điểm: Từ vựng - Chọn động từ mang nghĩa đối chiếu số liệu tài chính.",
    stem: "Senior accountants will _______ electronic wire transfers against SWIFT confirmation slips to verify balance accuracy.",
    choices: ["reconcile", "relocate", "renovate", "reimburse"],
    answer: 0,
    explanation_vi: "Cụm thuật ngữ kế toán và ngân hàng: 'reconcile accounts / reconcile transactions' mang nghĩa 'đối chiếu các khoản giao dịch / làm cho khớp số liệu sổ sách' -> chọn 'reconcile'.",
    trap: "Các động từ không đúng nghĩa: 'relocate' (chuyển chỗ), 'renovate' (cải tạo nhà cửa), 'reimburse' (hoàn trả tiền).",
    examTip: "Collocation ngành ngân hàng: reconcile accounts / reconcile transactions (đối chiếu tài khoản / đối chiếu giao dịch).",
    tags: { part: "Part 5", category: "Vocabulary", topic: "Banking Collocation", difficulty: "Medium" },
    vocab: [
      { word: "reconcile", ipa: "/ˈrek.ən.saɪl/", pos: "v", meaning: "đối chiếu, làm khớp số liệu" },
      { word: "confirmation slip", ipa: "/ˌkɒn.fəˈmeɪ.ʃən slɪp/", pos: "n", meaning: "phiếu xác nhận giao dịch" }
    ]
  },
  {
    id: "c4-31",
    chapter: 4,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave orders the archival of all incident records.",
    dialogue_vi: "Dave yêu cầu lưu trữ toàn bộ hồ sơ sự cố vào kho dữ liệu.",
    situation_vi: "Chủ điểm: Từ loại - Chọn Tính từ (Adjective) bổ nghĩa cho danh từ.",
    stem: "The SOC lead archived all _______ incident logs in the secure offline digital safe.",
    choices: ["perpertual", "relevant", "relevantly", "relevance"],
    answer: 0,
    explanation_vi: "Đứng sau từ chỉ số lượng 'all' và đứng trước danh từ 'incident logs' cần một tính từ (Adjective) bổ nghĩa -> chọn 'relevant' (các bản ghi sự cố có liên quan).",
    trap: "Bẫy danh từ 'relevance' hoặc phó từ 'relevantly'.",
    examTip: "Cụm danh từ: [all + Tính từ + Danh từ] (all relevant documents, all necessary precautions).",
    tags: { part: "Part 5", category: "Grammar", topic: "Word Form", difficulty: "Easy" },
    vocab: [
      { word: "relevant", ipa: "/ˈrel.ə.vənt/", pos: "adj", meaning: "có liên quan, thích hợp" },
      { word: "archived", ipa: "/ˈɑː.kaɪvd/", pos: "adj", meaning: "đã được lưu trữ vào kho hồ sơ" }
    ]
  },
  {
    id: "c4-32",
    chapter: 4,
    part: 5,
    speaker: "Helen Kang (CISO)",
    dialogue_en: "Helen Kang notes the total agreement among security directors.",
    dialogue_vi: "Helen Kang ghi nhận sự đồng thuận tuyệt đối giữa các giám đốc an ninh.",
    situation_vi: "Chủ điểm: Cấu trúc động từ 'concur with' (đồng tình với ai/cái gì).",
    stem: "All regional security directors _______ with the recommendation to upgrade our centralized SIEM infrastructure.",
    choices: ["concurred", "concurrence", "concurrent", "concurrently"],
    answer: 0,
    explanation_vi: "Câu có chủ ngữ 'All regional security directors' (Tất cả giám đốc an ninh vùng), thiếu động từ chính vị ngữ. Cụm 'concur with sth' nghĩa là 'đồng tình, nhất trí với điều gì' -> chọn động từ thì quá khứ 'concurred'.",
    trap: "Bẫy danh từ 'concurrence' hoặc tính từ 'concurrent' (đồng thời).",
    examTip: "Cấu trúc: [S + concur with + N / that + S + V] (đồng tình với quan điểm/khuyến nghị).",
    tags: { part: "Part 5", category: "Grammar", topic: "Subject-Verb Agreement", difficulty: "Medium" },
    vocab: [
      { word: "concur", ipa: "/kənˈkɜːr/", pos: "v", meaning: "đồng tình, nhất trí" },
      { word: "centralized", ipa: "/ˈsen.trə.laɪzd/", pos: "adj", meaning: "mang tính tập trung" }
    ]
  },
  {
    id: "c4-33",
    chapter: 4,
    part: 5,
    speaker: "Sarah (Forensics)",
    dialogue_en: "Sarah discusses the high vulnerability of unpatched endpoints.",
    dialogue_vi: "Sarah nhắc nhở về mức độ nhạy cảm dễ bị tấn công của máy trạm chưa cập nhật.",
    situation_vi: "Chủ điểm: Cấu trúc tính từ đi với giới từ 'susceptible to'.",
    stem: "Computers that lack updated security signatures remain highly _______ to zero-day browser exploits.",
    choices: ["susceptible", "sustainable", "suspicious", "substantial"],
    answer: 0,
    explanation_vi: "Cấu trúc tính từ quen thuộc: 'susceptible to sth' mang nghĩa 'dễ bị tổn thương, dễ bị ảnh hưởng bởi cái gì' -> chọn 'susceptible'.",
    trap: "Các tính từ bắt đầu bằng 'su-' gây nhiễu: 'sustainable' (bền vững), 'suspicious' (đáng nghi), 'substantial' (đáng kể).",
    examTip: "Cụm từ hay gặp: [susceptible to + Danh từ / V-ing] = vulnerable to (dễ bị tổn thương trước nguy cơ).",
    tags: { part: "Part 5", category: "Vocabulary", topic: "Adjective Prepositions", difficulty: "Hard" },
    vocab: [
      { word: "susceptible", ipa: "/səˈsep.tə.bəl/", pos: "adj", meaning: "dễ bị ảnh hưởng, dễ bị tổn thương" },
      { word: "signature", ipa: "/ˈsɪɡ.nə.tʃər/", pos: "n", meaning: "mẫu nhận diện mã độc" }
    ]
  },
  {
    id: "c4-34",
    chapter: 4,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave comments on the performance of the newly deployed AI defense module.",
    dialogue_vi: "Dave đánh giá hiệu quả của mô đun phòng thủ AI vừa triển khai.",
    situation_vi: "Chủ điểm: Cấu trúc đảo ngữ với 'Only after' (Inversion).",
    stem: "Only after the packet inspection rules were updated _______ the rogue command-and-control beacons stopped.",
    choices: ["were", "did", "was", "have"],
    answer: 0,
    explanation_vi: "Cấu trúc đảo ngữ: [Only after + Mệnh đề thời gian, Trợ động từ / to be + S + V-ed / V-bare]. Mệnh đề chính có chủ ngữ số nhiều 'the rogue command-and-control beacons' và phân từ quá khứ bị động 'stopped' -> Trợ động từ to be ở quá khứ số nhiều là 'were' (were the beacons stopped) -> chọn 'were'.",
    trap: "Bẫy trợ động từ 'did' (nếu dùng did thì động từ phía sau phải là stop nguyên thể).",
    examTip: "Cấu trúc đảo ngữ nâng cao TOEIC: [Only after / Only when / Not until + Mệnh đề, Trợ động từ + S + V].",
    tags: { part: "Part 5", category: "Grammar", topic: "Inversion", difficulty: "Hard" },
    vocab: [
      { word: "beacon", ipa: "/ˈbiː.kən/", pos: "n", meaning: "tín hiệu phát định kỳ ra máy chủ điều khiển" },
      { word: "inspection", ipa: "/ɪnˈspek.ʃən/", pos: "n", meaning: "sự thanh tra, rà soát chi tiết gói tin" }
    ]
  },
  {
    id: "c4-35",
    chapter: 4,
    part: 5,
    speaker: "Helen Kang (CISO)",
    dialogue_en: "Helen Kang reiterates the zero-tolerance stance on policy deviations.",
    dialogue_vi: "Helen Kang tái khẳng định lập trường không khoan nhượng với các sai phạm bảo mật.",
    situation_vi: "Chủ điểm: Từ vựng - Chọn động từ mang nghĩa nhắc lại, tái khẳng định.",
    stem: "During the board presentation, Director Kang _______ NovaBank's firm commitment to international data security compliance.",
    choices: ["reiterated", "relieved", "repaired", "reimbursed"],
    answer: 0,
    explanation_vi: "Cụm kết hợp từ: 'reiterate a commitment / reiterate a policy' mang nghĩa 'nhắc lại, tái khẳng định cam kết / chính sách' -> chọn 'reiterated'.",
    trap: "Các từ khác không phù hợp ngữ cảnh: 'relieved' (làm cho nhẹ nhõm), 'repaired' (sửa chữa), 'reimbursed' (hoàn trả tiền).",
    examTip: "Collocation TOEIC trang trọng: reiterate a commitment / reiterate an objective (nhấn mạnh lại một cam kết / mục tiêu).",
    tags: { part: "Part 5", category: "Vocabulary", topic: "Formal Verbs", difficulty: "Medium" },
    vocab: [
      { word: "reiterate", ipa: "/riˈɪt.ər.eɪt/", pos: "v", meaning: "nhắc lại nhiều lần, tái khẳng định" },
      { word: "commitment", ipa: "/kəˈmɪt.mənt/", pos: "n", meaning: "sự cam kết kiên định" }
    ]
  },
  {
    id: "c4-36",
    chapter: 4,
    part: 5,
    speaker: "Frank Vance (Operations Lead)",
    dialogue_en: "Frank Vance expresses gratitude to the IT staff.",
    dialogue_vi: "Frank Vance gửi lời cảm ơn sâu sắc đến toàn thể nhân viên kỹ thuật.",
    situation_vi: "Chủ điểm: Đại từ quan hệ (Relative Pronouns) chỉ người làm chủ ngữ.",
    stem: "We would like to thank all the security analysts _______ contributed to safeguarding our financial infrastructure tonight.",
    choices: ["who", "whom", "whose", "which"],
    answer: 0,
    explanation_vi: "Đứng sau danh từ chỉ người 'all the security analysts' và đứng trước động từ 'contributed' cần một đại từ quan hệ đóng vai trò chủ ngữ -> chọn 'who'.",
    trap: "Bẫy đại từ tân ngữ 'whom' (không làm chủ ngữ), đại từ sở hữu 'whose' hoặc 'which' (chỉ vật).",
    examTip: "Công thức đại từ quan hệ chỉ người: [Danh từ chỉ người + WHO + Động từ + Tân ngữ].",
    tags: { part: "Part 5", category: "Grammar", topic: "Relative Pronouns", difficulty: "Easy" },
    vocab: [
      { word: "contribute", ipa: "/kənˈtrɪb.juːt/", pos: "v", meaning: "đóng góp, cống hiến công sức" },
      { word: "infrastructure", ipa: "/ˈɪn.frəˌstrʌk.tʃər/", pos: "n", meaning: "cơ sở hạ tầng kỹ thuật" }
    ]
  },
  {
    id: "c4-37",
    chapter: 4,
    part: 5,
    speaker: "Sarah (Forensics)",
    dialogue_en: "Sarah discusses the consolidation of distributed audit logs.",
    dialogue_vi: "Sarah nói về việc hợp nhất các bản ghi nhật ký phân tán về máy chủ trung tâm.",
    situation_vi: "Chủ điểm: Cấu trúc [Plan to + V-bare] (kế hoạch làm gì).",
    stem: "The cyber intelligence team plans to _______ all branch security telemetry into a unified cloud analytical platform.",
    choices: ["consolidate", "consolidation", "consolidated", "consolidating"],
    answer: 0,
    explanation_vi: "Cấu trúc: 'plan to + V-bare' (lên kế hoạch thực hiện hành động gì). Cần động từ nguyên thể -> chọn 'consolidate' (hợp nhất, củng cố về một mối).",
    trap: "Bẫy danh từ 'consolidation' hoặc phân từ 'consolidated'.",
    examTip: "Các động từ luôn đi với To V nguyên thể trong TOEIC: plan to V, decide to V, hope to V, intend to V, aim to V.",
    tags: { part: "Part 5", category: "Grammar", topic: "Infinitives", difficulty: "Easy" },
    vocab: [
      { word: "consolidate", ipa: "/kənˈsɒl.ɪ.deɪt/", pos: "v", meaning: "hợp nhất, gom về một đầu mối" },
      { word: "telemetry", ipa: "/təˈlem.ə.tri/", pos: "n", meaning: "dữ liệu đo đạc giám sát từ xa" }
    ]
  },
  {
    id: "c4-38",
    chapter: 4,
    part: 5,
    speaker: "Dave (SOC Lead)",
    dialogue_en: "Dave verifies that the data discrepancies have been resolved.",
    dialogue_vi: "Dave xác nhận các sự sai lệch dữ liệu đã được đối soát thành công.",
    situation_vi: "Chủ điểm: Từ vựng - Chọn danh từ mang nghĩa sự chênh lệch, sai khác bất thường.",
    stem: "The automated settlement run revealed zero _______ between account balances and logged wire requests.",
    choices: ["discrepancies", "distractions", "disruptions", "discounts"],
    answer: 0,
    explanation_vi: "Trong ngữ cảnh đối chiếu tài chính ngân hàng, 'discrepancy' mang nghĩa 'sự sai khác, chênh lệch không khớp giữa các con số' -> 'zero discrepancies' nghĩa là không có bất kỳ sai lệch nào -> chọn 'discrepancies'.",
    trap: "Các từ khác bắt đầu bằng 'dis-': 'distractions' (sự xao nhãng), 'disruptions' (sự gián đoạn), 'discounts' (khoản giảm giá).",
    examTip: "Collocation tài chính TOEIC: discrepancy between A and B (sự khác biệt, sai lệch giữa A và B).",
    tags: { part: "Part 5", category: "Vocabulary", topic: "Financial Vocabulary", difficulty: "Medium" },
    vocab: [
      { word: "discrepancy", ipa: "/dɪˈskrep.ən.si/", pos: "n", meaning: "sự sai lệch, chênh lệch không khớp" },
      { word: "settlement run", ipa: "/ˈset.əl.mənt rʌn/", pos: "n", meaning: "phiên chạy quyết toán giao dịch" }
    ]
  },

  // ==========================================
  // PART 6 (3 CÂU: 1 ĐOẠN VĂN x 3 CHỖ TRỐNG)
  // ==========================================
  {
    id: "c4-39",
    chapter: 4,
    part: 6,
    speaker: "Helen Kang (CISO)",
    dialogue_en: "Official All-Staff Announcement from the CISO.",
    dialogue_vi: "Thông cáo Chính thức gửi Toàn thể Nhân viên từ Giám đốc CISO.",
    situation_vi: "Điền từ vào chỗ trống [1] trong thư biểu dương toàn thể nhân viên ngân hàng.",
    passage: "SPECIAL ANNOUNCEMENT TO ALL NOVABANK PERSONNEL\nFROM: Office of the Chief Information Security Officer\nDATE: November 10, 2026\nSUBJECT: Successful Defense Against Coordinated Cyberattack\n\nI am writing to share extraordinary news with all NovaBank employees. Between 00:00 and 08:00 AM today, our financial institution was targeted by a sophisticated advanced persistent threat (APT) campaign aimed at penetrating our Core Banking wire gateways. Thanks to the vigilant defense mounted by our night-shift SOC analysts, the intrusion was _______ [1] detected, quarantined, and eliminated. No unauthorized financial transfers occurred, and customer account confidentiality remains completely intact. The Executive Committee _______ [2] its deepest appreciation to every staff member who assisted in overnight containment. _______ [3]. Normal branch banking services will proceed without interruption.",
    stem: "Select the best answer for blank [1]:",
    choices: ["swiftly", "swift", "swiftness", "swifter"],
    answer: 0,
    explanation_vi: "Đứng giữa trợ động từ 'was' và chuỗi các động từ phân từ quá khứ 'detected, quarantined, and eliminated' cần một phó từ (adverb) đuôi -ly để bổ nghĩa cho hành động -> chọn 'swiftly' (đã được phát hiện, cách ly và tiêu diệt một cách nhanh chóng).",
    trap: "Bẫy tính từ 'swift' hoặc danh từ 'swiftness'.",
    examTip: "Vị trí của trạng từ trong thể bị động: [was/were + TRẠNG TỪ + V3/ed].",
    tags: { part: "Part 6", category: "Grammar", topic: "Adverbs", difficulty: "Easy" },
    vocab: [
      { word: "swiftly", ipa: "/ˈswɪft.li/", pos: "adv", meaning: "một cách nhanh chóng, thần tốc" },
      { word: "vigilant", ipa: "/ˈvɪdʒ.əl.ənt/", pos: "adj", meaning: "cảnh giác cao độ" }
    ]
  },
  {
    id: "c4-40",
    chapter: 4,
    part: 6,
    speaker: "Helen Kang (CISO)",
    dialogue_en: "(Continuing Part 6 Announcement)",
    dialogue_vi: "(Tiếp tục Thông cáo Part 6)",
    situation_vi: "Chọn dạng động từ phù hợp với chủ ngữ số ít 'The Executive Committee' tại chỗ trống [2].",
    passage: "(Tham khảo văn bản Thông cáo ở câu c4-39)",
    stem: "Select the best answer for blank [2]:",
    choices: ["extends", "extending", "extension", "extensively"],
    answer: 0,
    explanation_vi: "Chủ ngữ là danh từ tập hợp số ít 'The Executive Committee' (Ban Điều hành), câu diễn tả một sự việc ở hiện tại và cần động từ chính chia ngôi thứ 3 số ít -> chọn 'extends' (bày tỏ lời cảm ơn sâu sắc nhất: extends its deepest appreciation).",
    trap: "Bẫy danh từ 'extension', tính từ hoặc phó từ 'extensively'.",
    examTip: "Collocation trang trọng trong thư từ kinh doanh: extend appreciation / extend congratulations / extend an invitation (bày tỏ lòng biết ơn / gửi lời chúc mừng / gửi lời mời).",
    tags: { part: "Part 6", category: "Grammar", topic: "Subject-Verb Agreement", difficulty: "Medium" },
    vocab: [
      { word: "extends", ipa: "/ɪkˈstendz/", pos: "v", meaning: "gửi tới, bày tỏ (lòng biết ơn)" },
      { word: "appreciation", ipa: "/əˌpriː.ʃiˈeɪ.ʃən/", pos: "n", meaning: "sự tri ân, lòng cảm kích" }
    ]
  },
  {
    id: "c4-41",
    chapter: 4,
    part: 6,
    speaker: "Helen Kang (CISO)",
    dialogue_en: "Select the sentence that best fits blank [3].",
    dialogue_vi: "Chọn câu văn phù hợp nhất với mạch cảm xúc và tính chuyên nghiệp tại chỗ trống [3].",
    situation_vi: "Điền câu văn khẳng định vị thế an ninh ngân hàng vào thông cáo.",
    passage: "(Tham khảo văn bản Thông cáo ở câu c4-39)",
    stem: "Select the sentence that best fits blank [3]:",
    choices: [
      "This decisive achievement demonstrates the robust resilience of our cybersecurity safeguards.",
      "The parking lot will be repaved during the upcoming three-day national holiday weekend.",
      "New cafeteria prices will be posted near the beverage vending machines tomorrow.",
      "Employees who wish to order additional business cards should contact office stationery."
    ],
    answer: 0,
    explanation_vi: "Câu (A) 'This decisive achievement demonstrates the robust resilience of our cybersecurity safeguards' (Thành tựu mang tính quyết định này chứng minh cho khả năng phục hồi vững chắc của các biện pháp bảo vệ an ninh mạng của chúng ta) là lời tổng kết hoàn hảo cho thông cáo chiến thắng cuộc tấn công mạng.",
    trap: "Các phương án lạc lõng về bãi đỗ xe (B), máy bán nước ngọt (C), hay danh thiếp (D).",
    examTip: "Đoạn văn kết bài thông cáo thành tích luôn chọn câu khẳng định uy tín, năng lực và sự kiên cường (resilience) của tổ chức.",
    tags: { part: "Part 6", category: "Reading", topic: "Sentence Insertion", difficulty: "Medium" },
    vocab: [
      { word: "resilience", ipa: "/rɪˈzɪl.jəns/", pos: "n", meaning: "khả năng chống chịu và phục hồi nhanh chóng" },
      { word: "decisive", ipa: "/dɪˈsaɪ.sɪv/", pos: "adj", meaning: "mang tính quyết định" }
    ]
  },

  // ==========================================
  // PART 7 (8 CÂU: ĐOẠN ĐÔI DOUBLE PASSAGES 5 CÂU + ĐOẠN ĐƠN 3 CÂU)
  // ==========================================
  // Bộ đoạn đôi 5 câu (c4-42 -> c4-46): Báo cáo SOC & Email Hội đồng Quản trị
  {
    id: "c4-42",
    chapter: 4,
    part: 7,
    speaker: "Helen Kang & Board Chairman",
    dialogue_en: "Document 1: Incident Closure Briefing; Document 2: Boardroom Commendation Email.",
    dialogue_vi: "Văn bản 1: Báo cáo Khép lại Sự cố; Văn bản 2: Email Khen thưởng từ Hội đồng Quản trị.",
    situation_vi: "09:45 - Đọc 2 văn bản liên kết dưới đây để trả lời các câu hỏi từ 42 đến 46.",
    passage: "DOCUMENT 1: EXECUTIVE BRIEFING MEMORANDUM\nTO: Board of Directors, NovaBank Financial Group\nFROM: Helen Kang, Chief Information Security Officer\nDATE: November 10, 2026, 08:30 AM\nSUBJECT: Final Status Report - Operation Midnight Siege Containment\n\n1. Incident Overview\nAt 00:15 AM today, automated sensors detected a multi-stage intrusion attempt orchestrated by the advanced cyber espionage syndicate known as APT42. The attackers deployed spear-phishing lures, compromised an accounting workstation (WS-ACC-402), and attempted to leverage an unpatched zero-day flaw in our core SWIFT transaction gateway.\n\n2. Key Operational Outcomes\n- Zero Financial Loss: All malicious wire requests were intercepted before database commit.\n- Complete Remediation: The zero-day vulnerability (CVE-2026-8819) was fully patched at 06:30 AM with firmware hotfix V4.2.1.\n- Forensic Attribution: Analysis of memory artifacts, command-and-control IP infrastructure, and compilation timestamps confirms with 99% confidence that APT42 executed the campaign.\n\n3. Budgetary Recommendation\nTo prevent future advanced threats, I formally request board approval for an emergency capital expenditure of $450,000 to deploy next-generation endpoint detection and response (EDR) software across all 48 regional branches.\n\n------------------------------------------------------------\nDOCUMENT 2: INTERNAL EMAIL MESSAGE\nTO: Helen Kang <helen.kang@novabank.com>\nFROM: Arthur Pendelton, Chairman of the Board <arthur.pendelton@novabank.com>\nDATE: November 10, 2026, 09:15 AM\nSUBJECT: Board Commendation and Immediate Budget Approval\n\nDear Helen,\n\nOn behalf of the entire Board of Directors, I wish to extend our highest commendation to you, lead analyst Dave Miller, forensic specialist Sarah Lin, and the night-shift SOC staff. Your decisive actions successfully shielded NovaBank from catastrophic financial and reputational harm.\n\nI am pleased to inform you that during our executive session this morning, the board unanimously voted to approve your requested $450,000 budget allocation for enterprise EDR deployment. Furthermore, the board authorized an extraordinary merit bonus for every analyst on duty during the midnight shift.\n\nPlease proceed with procurement immediately and convey our heartfelt gratitude to the team.\n\nSincerely,\nArthur Pendelton\nChairman of the Board, NovaBank Financial Group",
    stem: "According to Document 1, what was the primary objective of the APT42 cyberattack?",
    choices: [
      "To penetrate the bank's core SWIFT transaction gateway and execute unauthorized fund transfers.",
      "To obtain employee home addresses for direct mail marketing brochures.",
      "To physically damage the building's central heating and cooling pipes.",
      "To offer discounts on home insurance policies to retail banking customers."
    ],
    answer: 0,
    explanation_vi: "Đoạn 1 của Văn bản 1 nêu rõ: 'The attackers deployed spear-phishing lures... and attempted to leverage an unpatched zero-day flaw in our core SWIFT transaction gateway' kết hợp với mục 'Zero Financial Loss' -> Mục tiêu chính là xâm nhập vào cổng giao dịch SWIFT để thực hiện chuyển tiền trái phép.",
    trap: "Các phương án vô lý về tờ rơi tiếp thị (B), đường ống nước (C) hay bảo hiểm nhà ở (D).",
    examTip: "Đọc phần tổng quan sự cố (Incident Overview) trong văn bản 1 để xác định mục đích của thủ phạm.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail", difficulty: "Easy" },
    vocab: [
      { word: "orchestrated", ipa: "/ˈɔː.kɪ.streɪ.tɪd/", pos: "adj", meaning: "được dàn dựng, lên kế hoạch công phu" },
      { word: "espionage", ipa: "/ˈes.pi.ə.nɑːʒ/", pos: "n", meaning: "hoạt động gián điệp mạng" }
    ]
  },
  {
    id: "c4-43",
    chapter: 4,
    part: 7,
    speaker: "Helen Kang & Board Chairman",
    dialogue_en: "(Continuing Double Passage Review)",
    dialogue_vi: "(Tiếp tục rà soát Bộ Đoạn đôi)",
    situation_vi: "Tìm hiểu bằng chứng kỹ thuật giúp nhóm điều tra quy kết trách nhiệm cho APT42.",
    passage: "(Tham khảo 2 văn bản ở câu c4-42)",
    stem: "What enabled investigators to attribute the intrusion to APT42 with high confidence?",
    choices: [
      "Examination of memory artifacts, IP infrastructure, and compilation timestamps.",
      "A confession letter published in a local morning newspaper.",
      "A video recording captured by security cameras in the parking lot.",
      "An anonymous telephone call received by customer support."
    ],
    answer: 0,
    explanation_vi: "Mục 2 của Văn bản 1 'Forensic Attribution' khẳng định: 'Analysis of memory artifacts, command-and-control IP infrastructure, and compilation timestamps confirms with 99% confidence that APT42 executed the campaign' -> Phân tích dữ liệu bộ nhớ, hạ tầng IP và tem thời gian biên dịch.",
    trap: "Bẫy thư thú tội trên báo (B), camera bãi xe (C) hay cuộc gọi nặc danh (D).",
    examTip: "Tìm cụm từ 'Forensic Attribution' để đối chiếu các căn cứ kỹ thuật.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail", difficulty: "Medium" },
    vocab: [
      { word: "artifacts", ipa: "/ˈɑː.tɪ.fækts/", pos: "n", meaning: "các dấu vết/chứng cứ kỹ thuật số còn sót lại" },
      { word: "timestamps", ipa: "/ˈtaɪm.stæmps/", pos: "n", meaning: "dấu tem ghi nhận thời gian" }
    ]
  },
  {
    id: "c4-44",
    chapter: 4,
    part: 7,
    speaker: "Helen Kang & Board Chairman",
    dialogue_en: "(Continuing Double Passage Review)",
    dialogue_vi: "(Tiếp tục rà soát Bộ Đoạn đôi)",
    situation_vi: "Câu hỏi suy luận liên kết giữa 2 văn bản về ngân sách được duyệt.",
    passage: "(Tham khảo 2 văn bản ở câu c4-42)",
    stem: "What will the approved $450,000 budget be used for?",
    choices: [
      "Deploying next-generation endpoint detection software across all regional branches.",
      "Renovating the executive dining room on the top floor of the headquarters.",
      "Purchasing corporate luxury sedans for members of the Board of Directors.",
      "Paying ransom extortion demands to foreign cybercriminal organizations."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi kết nối 2 văn bản (Cross-reference): Văn bản 1 nêu yêu cầu '$450,000 to deploy next-generation endpoint detection and response (EDR) software across all 48 regional branches'. Văn bản 2 xác nhận 'the board unanimously voted to approve your requested $450,000 budget allocation for enterprise EDR deployment' -> Ngân sách được duyệt dùng để triển khai phần mềm EDR trên toàn bộ các chi nhánh vùng.",
    trap: "Các phương án sử dụng sai mục đích như sửa phòng ăn (B), mua xe sang (C) hay trả tiền chuộc (D).",
    examTip: "Câu hỏi kết nối 2 văn bản (Cross-reference Question): Luôn tìm kiếm thông tin xuất hiện ở văn bản 1 (Yêu cầu $450,000 cho EDR) và được văn bản 2 phê chuẩn.",
    tags: { part: "Part 7", category: "Reading", topic: "Cross-Reference", difficulty: "Hard" },
    vocab: [
      { word: "allocation", ipa: "/ˌæl.əˈkeɪ.ʃən/", pos: "n", meaning: "khoản phân bổ ngân sách" },
      { word: "unanimously", ipa: "/juːˈnæn.ɪ.məs.li/", pos: "adv", meaning: "đồng lòng nhất trí 100%" }
    ]
  },
  {
    id: "c4-45",
    chapter: 4,
    part: 7,
    speaker: "Helen Kang & Board Chairman",
    dialogue_en: "(Continuing Double Passage Review)",
    dialogue_vi: "(Tiếp tục rà soát Bộ Đoạn đôi)",
    situation_vi: "Xác định những người được nhận phần thưởng đặc biệt trong văn bản 2.",
    passage: "(Tham khảo 2 văn bản ở câu c4-42)",
    stem: "According to Document 2, what additional reward did the board approve?",
    choices: [
      "An extraordinary merit bonus for every analyst on duty during the night shift.",
      "Two extra weeks of paid annual vacation for all branch bank tellers.",
      "Free international airline tickets to a cybersecurity conference in Paris.",
      "A lifetime discount on personal mortgage interest rates."
    ],
    answer: 0,
    explanation_vi: "Đoạn 2 của Văn bản 2 nêu rõ: 'Furthermore, the board authorized an extraordinary merit bonus for every analyst on duty during the midnight shift' -> Một khoản tiền thưởng thành tích đặc biệt cho mọi chuyên viên trực ca đêm.",
    trap: "Bẫy nghỉ phép thêm 2 tuần (B), vé máy bay đi Paris (C) hay giảm lãi suất vay (D).",
    examTip: "Tìm từ khóa 'reward / bonus / authorized' trong thư của Chủ tịch Arthur Pendelton.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail", difficulty: "Easy" },
    vocab: [
      { word: "merit bonus", ipa: "/ˈmer.ɪt ˈbəʊ.nəs/", pos: "n", meaning: "tiền thưởng khen thưởng thành tích xuất sắc" },
      { word: "extraordinary", ipa: "/ɪkˈstrɔː.dən.ər.i/", pos: "adj", meaning: "đặc biệt, phi thường" }
    ]
  },
  {
    id: "c4-46",
    chapter: 4,
    part: 7,
    speaker: "Helen Kang & Board Chairman",
    dialogue_en: "(Continuing Double Passage Review)",
    dialogue_vi: "(Tiếp tục rà soát Bộ Đoạn đôi)",
    situation_vi: "Từ vựng trong ngữ cảnh (Vocabulary in Context).",
    passage: "(Tham khảo 2 văn bản ở câu c4-42)",
    stem: "In Document 2, paragraph 1, line 3, the word 'shielded' is closest in meaning to:",
    choices: ["protected", "criticized", "abandoned", "postponed"],
    answer: 0,
    explanation_vi: "Ngữ cảnh: 'Your decisive actions successfully shielded NovaBank from catastrophic financial and reputational harm' (Hành động quyết đoán của bạn đã che chắn/bảo vệ thành công NovaBank khỏi tổn hại tài chính và uy tín thảm khốc). Từ 'shielded' đồng nghĩa với 'protected' (được bảo vệ) -> chọn 'protected'.",
    trap: "Các từ trái nghĩa: 'criticized' (chỉ trích), 'abandoned' (từ bỏ), 'postponed' (trì hoãn).",
    examTip: "Câu hỏi từ vựng trong ngữ cảnh (Closest in meaning): Luôn thay thế 4 đáp án vào câu văn gốc để xem từ nào giữ nguyên ý nghĩa logic nhất.",
    tags: { part: "Part 7", category: "Reading", topic: "Vocabulary in Context", difficulty: "Medium" },
    vocab: [
      { word: "shielded", ipa: "/ˈʃiːl.dɪd/", pos: "adj", meaning: "được che chắn, bảo vệ an toàn" },
      { word: "catastrophic", ipa: "/ˌkæt.əˈstrɒf.ɪk/", pos: "adj", meaning: "thảm khốc, tai hại nghiêm trọng" }
    ]
  },

  // Đoạn đơn 3 câu (c4-47 -> c4-49): Báo cáo Báo chí Truyền thông
  {
    id: "c4-47",
    chapter: 4,
    part: 7,
    speaker: "AEGIS AI (Press Release)",
    dialogue_en: "Official Press Release: NovaBank Cyber Resilience Statement.",
    dialogue_vi: "Thông cáo Báo chí Chính thức: Tuyên bố về Năng lực Phục hồi Không gian Mạng của NovaBank.",
    situation_vi: "10:00 - Bạn đọc bản thông cáo báo chí chính thức để trả lời 3 câu hỏi cuối cùng 47 - 49.",
    passage: "FOR IMMEDIATE RELEASE\nNOVABANK STATEMENT ON CYBER RESILIENCE AND TRANSACTION INTEGRITY\nHO CHI MINH CITY - NOVEMBER 10, 2026\n\nNovaBank Financial Corporation today announced that its advanced Security Operations Center successfully detected and neutralized a coordinated external cyber intrusion attempt during the early morning hours of November 10. The intrusion was blocked at the perimeter gateway through automated anomaly detection and proactive threat intelligence.\n\nAll customer account balances, transactional registries, and confidential personal identification data remain fully secure and unaffected. Banking operations across all regional branches, automated teller machines (ATMs), and digital mobile banking applications are functioning normally with zero disruption.\n\nNovaBank Chief Information Security Officer Helen Kang stated: 'Our substantial long-term investments in cyber defense infrastructure, employee awareness, and real-time incident monitoring allowed our team to contain this sophisticated threat within minutes. NovaBank remains steadfastly committed to providing safe, dependable financial services for millions of retail and commercial clients across the nation.'",
    stem: "What does the press release primarily announce?",
    choices: [
      "The successful neutralization of an external cyberattack with zero customer impact.",
      "The introduction of a new cryptocurrency trading platform for retail investors.",
      "The temporary closure of fifty regional branch offices for interior painting.",
      "The appointment of a new Chief Executive Officer following annual elections."
    ],
    answer: 0,
    explanation_vi: "Đoạn mở đầu nêu rõ: 'NovaBank Financial Corporation today announced that its advanced Security Operations Center successfully detected and neutralized a coordinated external cyber intrusion attempt...' -> Mục đích thông cáo chính thức là công bố việc vô hiệu hóa thành công cuộc tấn công mạng từ bên ngoài mà không gây bất kỳ ảnh hưởng nào đến khách hàng.",
    trap: "Bẫy tiền mã hóa (B), đóng cửa chi nhánh (C) hay bổ nhiệm CEO mới (D).",
    examTip: "Tiêu đề và đoạn đầu của Thông cáo báo chí (Press Release) luôn tóm tắt trực tiếp tin tức chính.",
    tags: { part: "Part 7", category: "Reading", topic: "Gist / Main Idea", difficulty: "Easy" },
    vocab: [
      { word: "neutralized", ipa: "/ˈnjuː.trə.laɪzd/", pos: "adj", meaning: "đã bị vô hiệu hóa hoàn toàn" },
      { word: "steadfastly", ipa: "/ˈsted.fɑːst.li/", pos: "adv", meaning: "một cách kiên định, vững vàng" }
    ]
  },
  {
    id: "c4-48",
    chapter: 4,
    part: 7,
    speaker: "AEGIS AI (Press Release)",
    dialogue_en: "(Continuing Press Release Review)",
    dialogue_vi: "(Tiếp tục rà soát Thông cáo Báo chí)",
    situation_vi: "Xác nhận tình trạng hoạt động của các dịch vụ ngân hàng số và máy ATM.",
    passage: "(Tham khảo văn bản Thông cáo Báo chí ở câu c4-47)",
    stem: "According to the press release, what is the status of NovaBank's consumer services?",
    choices: [
      "All branches, ATMs, and digital applications are operating normally without disruption.",
      "Mobile banking services will be unavailable for seventy-two hours.",
      "Customers are advised to withdraw all their cash immediately.",
      "ATM cash withdrawal limits have been cut by fifty percent."
    ],
    answer: 0,
    explanation_vi: "Đoạn 2 chỉ rõ: 'Banking operations across all regional branches, automated teller machines (ATMs), and digital mobile banking applications are functioning normally with zero disruption' -> Toàn bộ chi nhánh, cây ATM và ứng dụng di động đều hoạt động bình thường không có gián đoạn.",
    trap: "Bẫy ngưng ứng dụng 72 giờ (B) hoặc giảm hạn mức rút tiền (D).",
    examTip: "Quét từ khóa 'ATMs', 'mobile banking', 'zero disruption' trong đoạn 2.",
    tags: { part: "Part 7", category: "Reading", topic: "Detail", difficulty: "Easy" },
    vocab: [
      { word: "registries", ipa: "/ˈredʒ.ɪ.striz/", pos: "n", meaning: "các sổ cái đăng ký giao dịch" },
      { word: "disruption", ipa: "/dɪsˈrʌp.ʃən/", pos: "n", meaning: "sự gián đoạn" }
    ]
  },
  {
    id: "c4-49",
    chapter: 4,
    part: 7,
    speaker: "AEGIS AI (Press Release)",
    dialogue_en: "(Continuing Press Release Review)",
    dialogue_vi: "(Tiếp tục rà soát Thông cáo Báo chí)",
    situation_vi: "Từ vựng trong ngữ cảnh (Vocabulary in Context).",
    passage: "(Tham khảo văn bản Thông cáo Báo chí ở câu c4-47)",
    stem: "In paragraph 3, line 1, the word 'substantial' is closest in meaning to:",
    choices: ["significant", "fragile", "temporary", "unwanted"],
    answer: 0,
    explanation_vi: "Ngữ cảnh: 'Our substantial long-term investments in cyber defense infrastructure...' (Những khoản đầu tư to lớn / đáng kể dài hạn của chúng tôi vào cơ sở hạ tầng an ninh mạng...). Từ 'substantial' đồng nghĩa với 'significant' (to lớn, đáng kể) -> chọn 'significant'.",
    trap: "Các từ khác nghĩa: 'fragile' (mong manh, dễ vỡ), 'temporary' (tạm thời), 'unwanted' (không mong muốn).",
    examTip: "Collocation kinh điển TOEIC: substantial investments / substantial growth / substantial increase = significant investments / significant growth.",
    tags: { part: "Part 7", category: "Reading", topic: "Vocabulary in Context", difficulty: "Medium" },
    vocab: [
      { word: "substantial", ipa: "/səbˈstæn.ʃəl/", pos: "adj", meaning: "đáng kể, to lớn, có giá trị cao" },
      { word: "dependable", ipa: "/dɪˈpen.də.bəl/", pos: "adj", meaning: "đáng tin cậy, an tâm" }
    ]
  }
];
