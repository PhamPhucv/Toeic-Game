/**
 * CHAPTER 2 QUESTIONS (48 câu hỏi hoàn chỉnh)
 * Bao gồm 20 câu nền tảng + 28 câu mới bổ sung
 */
module.exports = [
  {
    "id": "c2-01",
    "chapter": 2,
    "part": 5,
    "speaker": "Sarah (Threat Hunter)",
    "dialogue_en": "The ransomware payload has started encrypting local .docx files on workstation PC-402.",
    "dialogue_vi": "Mã độc tống tiền đã bắt đầu mã hóa các tệp tin .docx trên máy trạm PC-402.",
    "situation_vi": "03:45 - Sarah phát hiện tiến trình độc hại ngầm đang đổi phần mở rộng tệp tin.",
    "stem": "The malicious script operates _______ in the background without triggering standard antivirus alarms.",
    "choices": [
      "silently",
      "silent",
      "silence",
      "silenced"
    ],
    "answer": 0,
    "explanation_vi": "Đứng sau động từ 'operates' (hoạt động) cần một phó từ (adverb) đuôi -ly để chỉ cách thức hoạt động -> chọn 'silently' (hoạt động một cách âm thầm, lặng lẽ).",
    "trap": "Bẫy tính từ 'silent' hoặc danh từ 'silence'.",
    "examTip": "Động từ hành động thường + Phó từ (V + ADV) để bổ nghĩa cách thức (operates silently).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Adverb",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "silently",
        "ipa": "/ˈsaɪ.lənt.li/",
        "pos": "adv",
        "meaning": "một cách âm thầm"
      },
      {
        "word": "trigger",
        "ipa": "/ˈtrɪɡ.ər/",
        "pos": "v",
        "meaning": "kích hoạt, làm khởi phát"
      }
    ]
  },
  {
    "id": "c2-02",
    "chapter": 2,
    "part": 2,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave checks how long server audit logs are retained for forensic analysis.",
    "dialogue_vi": "Dave hỏi thời gian lưu giữ nhật ký kiểm toán máy chủ để phục vụ điều tra pháp y số.",
    "situation_vi": "04:00 - Dave hỏi bạn về chính sách lưu trữ log của hệ thống ngân hàng.",
    "stem": "How long are the server security telemetry logs archived?",
    "audioText": "How long are the server security telemetry logs archived?",
    "choices": [
      "For a minimum of twelve months according to compliance regulations.",
      "Yes, the server is quite long.",
      "On the top shelf in the archive room."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi bắt đầu bằng 'How long' (Trong bao lâu) hỏi khoảng thời gian -> (A) 'For a minimum of twelve months...' (Tối thiểu 12 tháng theo quy định tuân thủ) là câu trả lời chính xác.",
    "trap": "Bẫy lặp từ: (B) lặp từ 'long' và bẫy Yes/No cho câu hỏi Wh-, (C) lặp 'archive' và trả lời địa điểm Where.",
    "examTip": "Câu hỏi 'How long' -> Tìm câu trả lời có 'For + khoảng thời gian' (For 12 months, For two weeks).",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Duration",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "archive",
        "ipa": "/ˈɑː.kaɪv/",
        "pos": "v",
        "meaning": "lưu trữ lâu dài"
      },
      {
        "word": "regulation",
        "ipa": "/ˌreɡ.jəˈleɪ.ʃən/",
        "pos": "n",
        "meaning": "quy định, quy chế"
      }
    ]
  },
  {
    "id": "c2-03",
    "chapter": 2,
    "part": 5,
    "speaker": "Sarah (Threat Hunter)",
    "dialogue_en": "If the ransomware reaches the core banking database, we will face an existential catastrophe.",
    "dialogue_vi": "Nếu ransomware chạm đến cơ sở dữ liệu ngân hàng cốt lõi, chúng ta sẽ đối mặt thảm họa sống còn.",
    "situation_vi": "04:15 - Sarah nhắc lại giao thức phản ứng khẩn cấp trong điều kiện nghi ngờ lây nhiễm diện rộng.",
    "stem": "_______ any employee workstation exhibit signs of ransomware encryption, disconnect it from the network immediately.",
    "choices": [
      "Should",
      "Were",
      "Had",
      "Unless"
    ],
    "answer": 0,
    "explanation_vi": "Đảo ngữ câu điều kiện loại 1 (Inversion in First Conditional): 'Should + S + V(nguyên thể), V(mệnh lệnh)' thay cho 'If any employee workstation exhibits...'.",
    "trap": "Bẫy 'Were' dùng cho điều kiện loại 2, 'Had' dùng cho loại 3, 'Unless' không đi với cấu trúc đảo ngữ như trên.",
    "examTip": "Mẹo điểm 750+ TOEIC: Thấy đầu câu đứng trước S + V(nguyên thể) mà không có 'If' -> Chọn 'Should' (Should S V = If S V).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Conditional Inversion",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "exhibit",
        "ipa": "/ɪɡˈzɪb.ɪt/",
        "pos": "v",
        "meaning": "biểu hiện, bộc lộ dấu hiệu"
      },
      {
        "word": "catastrophe",
        "ipa": "/kəˈtæs.trə.fi/",
        "pos": "n",
        "meaning": "thảm họa"
      }
    ]
  },
  {
    "id": "c2-04",
    "chapter": 2,
    "part": 6,
    "speaker": "AEGIS AI (Incident Procedure)",
    "dialogue_en": "EMERGENCY CONTAINMENT MEMORANDUM for branch offices.",
    "dialogue_vi": "BẢN GHI NHỚ KHOANH VÙNG KHẨN CẤP gửi các văn phòng chi nhánh.",
    "situation_vi": "04:30 - Ban chỉ huy SOC ban hành quy trình khẩn cấp cô lập phân mạng kế toán.",
    "passage": "INCIDENT MANAGEMENT BULLETIN: MALWARE CONTAINMENT PROTOCOL\nTO: Regional Branch IT Coordinators\nFROM: NovaBank Security Operations Center\nDATE: November 10, 04:30 AM\nSUBJECT: Immediate Quarantine of Infected Network Segments\n\nFollowing the detection of automated ransomware probing on regional subnets, all branch IT coordinators must act with utmost _______ [1]. Workstations displaying encrypted file notifications must be _______ [2] severed from physical local area network jacks. Do not power off infected devices, as active system memory contains critical cryptographic keys necessary for forensic _______ [3]. Our specialized forensics response engineers are being deployed to regional branches to restore clean backups. _______ [4]. Direct all urgent inquiries to the Incident Response Command at extension 5522.",
    "stem": "Select the best answer for blank [1]:",
    "choices": [
      "urgency",
      "urgent",
      "urgently",
      "urging"
    ],
    "answer": 0,
    "explanation_vi": "Cụm danh từ đi sau giới từ 'with' và tính từ 'utmost' (tột bậc) cần một danh từ -> chọn 'urgency' (sự khẩn trương, tính cấp bách). 'act with utmost urgency' = hành động với sự khẩn trương cao nhất.",
    "trap": "Bẫy tính từ 'urgent' hoặc phó từ 'urgently'. Sau giới từ 'with + tính từ' bắt buộc là danh từ.",
    "examTip": "Cụm giới từ công sở: [with + utmost + Danh từ] (with utmost urgency / with utmost care / with utmost discretion).",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Noun Form",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "utmost",
        "ipa": "/ˈʌt.məʊst/",
        "pos": "adj",
        "meaning": "vô cùng, tột bậc"
      },
      {
        "word": "urgency",
        "ipa": "/ˈɜː.dʒən.si/",
        "pos": "n",
        "meaning": "sự khẩn cấp, cấp bách"
      }
    ]
  },
  {
    "id": "c2-05",
    "chapter": 2,
    "part": 6,
    "speaker": "AEGIS AI (Incident Procedure)",
    "dialogue_en": "Continuing blank [2] in Incident Management Bulletin.",
    "dialogue_vi": "Tiếp tục xem xét chỗ trống [2] trong Bản tin quản lý sự cố.",
    "situation_vi": "Chọn phó từ bổ nghĩa cho hành động ngắt kết nối vật lý 'severed'.",
    "passage": "(Tham khảo văn bản INCIDENT MANAGEMENT BULLETIN ở trên)",
    "stem": "Select the best answer for blank [2]:",
    "choices": [
      "immediately",
      "immediate",
      "immediacy",
      "immediateness"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc bị động với modal verb: 'must be _______ severed' -> Giữa 'be' và V3/ed cần một phó từ (adverb) -> chọn 'immediately' (ngay lập tức).",
    "trap": "Bẫy tính từ 'immediate'.",
    "examTip": "[be + ADV + V3/ed] là cấu trúc xuất hiện trong hầu như mọi đề thi TOEIC Part 5 & 6.",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Adverb",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "sever",
        "ipa": "/ˈsev.ər/",
        "pos": "v",
        "meaning": "cắt đứt hoàn toàn, ngắt rời"
      },
      {
        "word": "immediately",
        "ipa": "/ɪˈmiː.di.ət.li/",
        "pos": "adv",
        "meaning": "ngay lập tức"
      }
    ]
  },
  {
    "id": "c2-06",
    "chapter": 2,
    "part": 6,
    "speaker": "AEGIS AI (Incident Procedure)",
    "dialogue_en": "Continuing blank [3] in Incident Management Bulletin.",
    "dialogue_vi": "Tiếp tục xem xét chỗ trống [3] trong Bản tin quản lý sự cố.",
    "situation_vi": "Điền danh từ kết hợp với tính từ 'forensic' để chỉ hoạt động điều tra số.",
    "passage": "(Tham khảo văn bản INCIDENT MANAGEMENT BULLETIN ở trên)",
    "stem": "Select the best answer for blank [3]:",
    "choices": [
      "investigation",
      "investigate",
      "investigative",
      "investigator"
    ],
    "answer": 0,
    "explanation_vi": "Đứng sau giới từ 'for' và tính từ 'forensic' cần một danh từ chỉ sự việc/hoạt động -> chọn 'investigation' (cuộc điều tra pháp y số).",
    "trap": "Bẫy danh từ chỉ người 'investigator' (điều tra viên) không phù hợp về ngữ nghĩa so với 'cuộc điều tra'.",
    "examTip": "Phân biệt danh từ chỉ người và danh từ chỉ vật/sự việc là bẫy phân loại câu hỏi 700+ TOEIC.",
    "tags": {
      "part": "Part 6",
      "category": "Vocabulary",
      "topic": "Noun Choice",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "forensic",
        "ipa": "/fəˈren.zɪk/",
        "pos": "adj",
        "meaning": "thuộc về điều tra pháp y kỹ thuật số"
      },
      {
        "word": "investigation",
        "ipa": "/ɪnˌves.tɪˈɡeɪ.ʃən/",
        "pos": "n",
        "meaning": "cuộc điều tra"
      }
    ]
  },
  {
    "id": "c2-07",
    "chapter": 2,
    "part": 6,
    "speaker": "AEGIS AI (Incident Procedure)",
    "dialogue_en": "Select the sentence that best fits the contextual flow for blank [4].",
    "dialogue_vi": "Chọn câu phù hợp nhất với ngữ cảnh tại chỗ trống [4].",
    "situation_vi": "Chọn câu cam kết bảo vệ dữ liệu khách hàng gửi đến các chi nhánh.",
    "passage": "(Tham khảo văn bản INCIDENT MANAGEMENT BULLETIN ở trên)",
    "stem": "Select the best sentence to fill blank [4]:",
    "choices": [
      "Customer financial account ledgers remain completely safe and uncompromised.",
      "The annual company sports festival has been rescheduled for next summer.",
      "Cafeteria vending machines will be stocked with fresh beverages today.",
      "Corporate business travel expenses will be reimbursed by accounts payable."
    ],
    "answer": 0,
    "explanation_vi": "Câu (A) 'Customer financial account ledgers remain completely safe and uncompromised' (Sổ cái tài khoản tài chính của khách hàng vẫn an toàn tuyệt đối và không bị xâm phạm) mang lại sự trấn an và thông tin bảo mật chuẩn mực nhất.",
    "trap": "Các phương án B, C, D hoàn toàn không liên quan đến sự cố an toàn thông tin.",
    "examTip": "Trong bài đọc xử lý sự cố doanh nghiệp, câu trấn an tính nguyên vẹn của dữ liệu khách hàng luôn là thông điệp ưu tiên hàng đầu.",
    "tags": {
      "part": "Part 6",
      "category": "Reading",
      "topic": "Context",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "ledger",
        "ipa": "/ˈledʒ.ər/",
        "pos": "n",
        "meaning": "sổ cái kế toán"
      },
      {
        "word": "uncompromised",
        "ipa": "/ʌnˈkɒm.prə.maɪzd/",
        "pos": "adj",
        "meaning": "nguyên vẹn, không bị xâm phạm"
      }
    ]
  },
  {
    "id": "c2-08",
    "chapter": 2,
    "part": 2,
    "speaker": "Sarah (Threat Hunter)",
    "dialogue_en": "Sarah asks about the reverse engineering of the ransomware binary.",
    "dialogue_vi": "Sarah hỏi về việc dịch ngược mã nhị phân của phần mềm tống tiền.",
    "situation_vi": "04:50 - Sarah hỏi tiến độ phân tích mẫu mã độc trong môi trường hộp cát (sandbox).",
    "stem": "Has the malware analysis completed in the isolated sandbox environment?",
    "audioText": "Has the malware analysis completed in the isolated sandbox environment?",
    "choices": [
      "Yes, the automated disassembly report was just generated.",
      "In the sandbox on the children's playground.",
      "No, the box was shipped by postal courier."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi dạng Yes/No ('Has the malware analysis completed...?') -> Đáp án (A) 'Yes, the automated disassembly report was just generated' (Có, báo cáo dịch ngược tự động vừa được tạo ra) trả lời trực tiếp và phù hợp ngữ cảnh.",
    "trap": "Bẫy nghĩa đen của từ 'sandbox' (hộp cát trẻ em ở sân chơi - B) và bẫy lặp từ 'box' (hộp bưu phẩm gửi bưu điện - C).",
    "examTip": "Bẫy từ đa nghĩa trong TOEIC: 'sandbox' trong IT là môi trường cô lập để chạy thử mã độc, không phải hộp cát sân chơi.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Technical Q&A",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "disassembly",
        "ipa": "/ˌdɪs.əˈsem.bli/",
        "pos": "n",
        "meaning": "sự dịch ngược mã máy"
      },
      {
        "word": "sandbox",
        "ipa": "/ˈsænd.bɒks/",
        "pos": "n",
        "meaning": "môi trường hộp cát an toàn"
      }
    ]
  },
  {
    "id": "c2-09",
    "chapter": 2,
    "part": 3,
    "speaker": "Sarah & Mark (Forensics Team)",
    "dialogue_en": "[Sarah]: Mark, I extracted the decryption key from the malware process memory dump.\n[Mark]: Outstanding work, Sarah! Were you able to verify whether any customer databases were encrypted?\n[Sarah]: Fortunately, our air-gap architecture prevented the ransomware from reaching the primary core banking server. Only ten accounting spreadsheets were affected.\n[Mark]: That's a huge relief. I'll immediately update the executive incident log and prepare the decryption utility.",
    "dialogue_vi": "[Sarah]: Mark, tôi đã trích xuất được khóa giải mã từ bản kết xuất bộ nhớ của tiến trình mã độc.\n[Mark]: Làm tốt lắm Sarah! Cô đã xác minh được liệu có cơ sở dữ liệu khách hàng nào bị mã hóa chưa?\n[Sarah]: May mắn là kiến trúc mạng cô lập vật lý của chúng ta đã ngăn mã độc chạm tới máy chủ ngân hàng cốt lõi. Chỉ có mười bảng tính kế toán bị ảnh hưởng.\n[Mark]: Thật nhẹ cả người. Tôi sẽ cập nhật ngay nhật ký sự cố cho ban điều hành và chuẩn bị công cụ giải mã.",
    "situation_vi": "05:10 - Nghe cuộc trò chuyện giữa Sarah và kỹ sư pháp y Mark về việc thu hồi khóa giải mã.",
    "stem": "What significant breakthrough did the woman achieve?",
    "audioText": "Sarah: Mark, I extracted the decryption key from the malware process memory dump. Mark: Outstanding work, Sarah! Were you able to verify whether any customer databases were encrypted? Sarah: Fortunately, our air-gap architecture prevented the ransomware from reaching the primary core banking server. Only ten accounting spreadsheets were affected. Mark: That's a huge relief. I'll immediately update the executive incident log and prepare the decryption utility.",
    "choices": [
      "She extracted the decryption key from process memory",
      "She ordered replacement hard drives from the manufacturer",
      "She negotiated a reduced ransom fee with the attackers",
      "She designed a new company logo for marketing"
    ],
    "answer": 0,
    "explanation_vi": "Sarah thông báo ngay câu mở đầu: 'I extracted the decryption key from the malware process memory dump' -> Trích xuất thành công khóa giải mã.",
    "trap": "Bẫy trả tiền chuộc (ngân hàng không bao giờ thương lượng tiền chuộc) hoặc thay ổ cứng mới.",
    "examTip": "Câu hỏi thành tựu / hành động đầu tiên trong Part 3 nằm ở lời thoại mở màn của người phụ nữ.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Achievement",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "extract",
        "ipa": "/ɪkˈstrækt/",
        "pos": "v",
        "meaning": "trích xuất, lấy ra"
      },
      {
        "word": "decryption",
        "ipa": "/diːˈkrɪp.ʃən/",
        "pos": "n",
        "meaning": "sự giải mã"
      }
    ]
  },
  {
    "id": "c2-10",
    "chapter": 2,
    "part": 3,
    "speaker": "Sarah & Mark (Forensics Team)",
    "dialogue_en": "Reviewing why the primary banking server remained safe.",
    "dialogue_vi": "Xem lý do vì sao máy chủ ngân hàng cốt lõi vẫn an toàn.",
    "situation_vi": "Câu hỏi 2 bài nghe Part 3: Yếu tố nào bảo vệ máy chủ chính?",
    "stem": "According to the woman, what protected the primary banking server?",
    "audioText": "According to the woman, what protected the primary banking server?",
    "choices": [
      "The air-gap network architecture",
      "An automated power generator",
      "The third-party antivirus hotline",
      "A biometric retina recognition scanner"
    ],
    "answer": 0,
    "explanation_vi": "Sarah nói rõ: 'our air-gap architecture prevented the ransomware from reaching the primary core banking server'.",
    "trap": "Bẫy máy phát điện hoặc máy quét võng mạc sinh trắc học.",
    "examTip": "Chú ý nghe danh từ kỹ thuật đi sau 'prevented' hoặc 'protected' (air-gap architecture).",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Architecture",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "architecture",
        "ipa": "/ˈɑː.kɪ.tek.tʃər/",
        "pos": "n",
        "meaning": "kiến trúc hệ thống"
      },
      {
        "word": "air-gap",
        "ipa": "/ˈeə.ɡæp/",
        "pos": "n",
        "meaning": "khoảng cách cô lập mạng vật lý"
      }
    ]
  },
  {
    "id": "c2-11",
    "chapter": 2,
    "part": 3,
    "speaker": "Sarah & Mark (Forensics Team)",
    "dialogue_en": "Reviewing Mark's next action.",
    "dialogue_vi": "Xem lại hành động tiếp theo của Mark.",
    "situation_vi": "Câu hỏi 3 bài nghe Part 3: Mark sẽ chuẩn bị điều gì?",
    "stem": "What will the man prepare next?",
    "audioText": "What will the man prepare next?",
    "choices": [
      "A decryption utility to restore the affected spreadsheets",
      "An invoice for external consulting services",
      "A job posting for junior software programmers",
      "A flight reservation for an emergency business trip"
    ],
    "answer": 0,
    "explanation_vi": "Mark nói ở câu cuối cùng: 'I'll immediately update the executive incident log and prepare the decryption utility' -> Chuẩn bị công cụ giải mã.",
    "trap": "Bẫy hóa đơn tư vấn hay đặt vé máy bay.",
    "examTip": "Cụm 'prepare the decryption utility' xuất hiện ở cuối đoạn hội thoại.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Next Action",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "utility",
        "ipa": "/juːˈtɪl.ə.ti/",
        "pos": "n",
        "meaning": "công cụ tiện ích phần mềm"
      },
      {
        "word": "relief",
        "ipa": "/rɪˈliːf/",
        "pos": "n",
        "meaning": "sự nhẹ nhõm, an tâm"
      }
    ]
  },
  {
    "id": "c2-12",
    "chapter": 2,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Every incident report must be submitted to the financial regulatory board prior to the market opening.",
    "dialogue_vi": "Mọi báo cáo sự cố phải được trình lên hội đồng quản lý tài chính trước giờ mở cửa thị trường.",
    "situation_vi": "05:25 - Kiểm tra thời hạn nộp báo cáo kiểm soát sự cố theo luật định.",
    "stem": "All preliminary forensic reports must be submitted to the compliance director _______ three hours of incident detection.",
    "choices": [
      "within",
      "among",
      "between",
      "during"
    ],
    "answer": 0,
    "explanation_vi": "Giới từ 'within + khoảng thời gian' (within three hours) có nghĩa là 'trong vòng 3 giờ' (tính từ lúc phát hiện sự cố).",
    "trap": "Bẫy 'during' (chỉ đi với danh từ chỉ kỳ/thời gian như during the meeting, không đi trực tiếp với số giờ đếm được 'three hours'). Bẫy 'between' (cần có and).",
    "examTip": "Phân biệt cực chuẩn TOEIC: [within + khoảng thời gian có số đếm] (within 3 hours, within 5 days); [during + danh từ sự kiện] (during the conference, during the audit).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Prepositions",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "preliminary",
        "ipa": "/prɪˈlɪm.ɪ.nər.i/",
        "pos": "adj",
        "meaning": "sơ bộ, bước đầu"
      },
      {
        "word": "within",
        "ipa": "/wɪˈðɪn/",
        "pos": "prep",
        "meaning": "trong vòng (thời gian)"
      }
    ]
  },
  {
    "id": "c2-13",
    "chapter": 2,
    "part": 7,
    "speaker": "Sarah (Threat Hunter)",
    "dialogue_en": "FORENSICS INCIDENT LOG: WORKSTATION PC-402 COMPROMISE ANALYSIS",
    "dialogue_vi": "NHẬT KÝ ĐIỀU TRA PHÁP Y SỐ: PHÂN TÍCH XÂM NHẬP MÁY TRẠM PC-402",
    "situation_vi": "05:35 - Đọc báo cáo điều tra kỹ thuật số pháp y về nguồn gốc lây nhiễm mã độc.",
    "passage": "NOVABANK DIGITAL FORENSICS INVESTIGATION LOG\nCase Reference: INC-2026-8841\nInvestigator: Sarah Lin, Senior Threat Hunter\nTarget Device: Host PC-402 (Accounting Division)\n\nTIMELINE OF EVENTS:\n- 00:22 AM: User clicked an unverified hyperlink embedded within a spoofed vendor invoice email.\n- 00:23 AM: An obfuscated PowerShell payload downloaded a trojan binary from a remote Command-and-Control (C2) server.\n- 01:05 AM: The trojan executed a local privilege escalation exploit, granting itself administrative rights.\n- 01:14 AM: Automated lateral scanning detected across TCP port 445 (SMB) targeting internal file servers.\n- 01:28 AM: Network isolation initiated by SOC night analyst, cutting outbound connections before data exfiltration occurred.\n\nEVIDENCE RETRIEVAL:\nMemory analysis successfully recovered the encryption master key before system processes terminated. Clean backup images from 11:00 PM yesterday were verified as uncorrupted. Total operational downtime for Host PC-402 was limited to three hours.",
    "stem": "What was the initial attack vector that caused the compromise?",
    "choices": [
      "A malicious hyperlink inside a fake vendor invoice email",
      "A physical USB drive plugged in by an intern",
      "A hardware failure in the central cooling unit",
      "An unannounced power cut in the regional branch"
    ],
    "answer": 0,
    "explanation_vi": "Mục mốc thời gian 00:22 AM ghi rõ: 'User clicked an unverified hyperlink embedded within a spoofed vendor invoice email' -> Bấm vào link độc hại trong email hóa đơn giả mạo.",
    "trap": "Bẫy cắm USB hay lỗi phần cứng làm mát.",
    "examTip": "Thuật ngữ 'initial attack vector' trong an ninh mạng có nghĩa là con đường xâm nhập ban đầu. Hãy tìm mốc thời gian sớm nhất trong bảng Timeline.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Cause & Effect",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "obfuscated",
        "ipa": "/ˈɒb.fʌs.keɪ.tɪd/",
        "pos": "adj",
        "meaning": "được làm rối mã để qua mặt phát hiện"
      },
      {
        "word": "escalation",
        "ipa": "/ˌes.kəˈleɪ.ʃən/",
        "pos": "n",
        "meaning": "sự leo thang đặc quyền"
      }
    ]
  },
  {
    "id": "c2-14",
    "chapter": 2,
    "part": 7,
    "speaker": "Sarah (Threat Hunter)",
    "dialogue_en": "Continuing review of forensic evidence retrieval.",
    "dialogue_vi": "Tiếp tục xem kết quả thu thập bằng chứng pháp y số.",
    "situation_vi": "Câu hỏi 2 bài đọc Part 7: Yếu tố nào chứng minh việc khôi phục thành công?",
    "passage": "(Tham khảo văn bản NOVABANK DIGITAL FORENSICS INVESTIGATION LOG ở trên)",
    "stem": "According to the report, what critical piece of evidence was successfully recovered?",
    "choices": [
      "The encryption master key extracted from memory",
      "The personal identity card of the remote attacker",
      "A signed paper contract from the external software vendor",
      "Ten thousand dollars in cash paid as ransom"
    ],
    "answer": 0,
    "explanation_vi": "Mục Evidence Retrieval ghi: 'Memory analysis successfully recovered the encryption master key before system processes terminated' -> Khóa mã hóa chính trích xuất từ bộ nhớ.",
    "trap": "Bẫy tìm thấy thẻ căn cước hacker hay tiền mặt chuộc.",
    "examTip": "Đối chiếu chính xác từ khóa 'evidence recovered' trong bài đọc.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "retrieval",
        "ipa": "/rɪˈtriː.vəl/",
        "pos": "n",
        "meaning": "sự thu hồi, lấy lại dữ liệu"
      },
      {
        "word": "uncorrupted",
        "ipa": "/ʌn.kəˈrʌp.tɪd/",
        "pos": "adj",
        "meaning": "nguyên vẹn, không bị hỏng hóc"
      }
    ]
  },
  {
    "id": "c2-15",
    "chapter": 2,
    "part": 7,
    "speaker": "Sarah (Threat Hunter)",
    "dialogue_en": "Checking total system downtime impact.",
    "dialogue_vi": "Kiểm tra tổng thời gian gián đoạn của thiết bị.",
    "situation_vi": "Câu hỏi 3 bài đọc Part 7: Thời gian ngừng hoạt động của máy trạm PC-402 là bao lâu?",
    "passage": "(Tham khảo văn bản NOVABANK DIGITAL FORENSICS INVESTIGATION LOG ở trên)",
    "stem": "What was the total operational downtime for the affected workstation?",
    "choices": [
      "Three hours",
      "Twelve days",
      "Twenty-four hours",
      "Forty-eight minutes"
    ],
    "answer": 0,
    "explanation_vi": "Câu cuối cùng của báo cáo ghi: 'Total operational downtime for Host PC-402 was limited to three hours' -> Ba giờ đồng hồ.",
    "trap": "Bẫy các mốc thời gian khác xuất hiện trong bài.",
    "examTip": "Dạng câu hỏi con số / thời gian Part 7: Đọc kỹ câu kết thúc của bài báo cáo để tìm số liệu chuẩn.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Number Detail",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "downtime",
        "ipa": "/ˈdaʊn.taɪm/",
        "pos": "n",
        "meaning": "thời gian hệ thống ngừng hoạt động"
      },
      {
        "word": "operational",
        "ipa": "/ˌɒp.ərˈeɪ.ʃən.əl/",
        "pos": "adj",
        "meaning": "thuộc về vận hành"
      }
    ]
  },
  {
    "id": "c2-16",
    "chapter": 2,
    "isBoss": true,
    "part": 5,
    "speaker": "RANSOMWARE CORE PROCESS (Boss 2)",
    "dialogue_en": "WARNING: Ransomware encryption routine spreading to shared network drives!",
    "dialogue_vi": "CẢNH BÁO: Tiến trình mã hóa ransomware đang lan sang các ổ đĩa mạng chia sẻ!",
    "situation_vi": "[TRÙM 2 - CÂU 1/5] Khóa quyền ghi dữ liệu trên toàn bộ ổ đĩa dùng chung!",
    "stem": "The system administrator immediately revoked all write permissions _______ prevent further encryption of shared directories.",
    "choices": [
      "in order to",
      "as if",
      "so that",
      "because of"
    ],
    "answer": 0,
    "explanation_vi": "Cụm 'in order to + V(nguyên thể)' (in order to prevent...) có nghĩa là 'để / nhằm mục đích ngăn chặn việc mã hóa thêm các thư mục chia sẻ'.",
    "trap": "Bẫy 'so that' (cần một mệnh đề: so that it could prevent), 'because of' (đi với danh từ/V-ing: because of preventing).",
    "examTip": "Công thức chỉ mục đích cực hay thi TOEIC: [in order to / so as to + V(nguyên mẫu)].",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Purpose Clause",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "revoke",
        "ipa": "/rɪˈvəʊk/",
        "pos": "v",
        "meaning": "thu hồi, tước bỏ quyền"
      },
      {
        "word": "permission",
        "ipa": "/pəˈmɪʃ.ən/",
        "pos": "n",
        "meaning": "sự cho phép, quyền hạn"
      }
    ]
  },
  {
    "id": "c2-17",
    "chapter": 2,
    "isBoss": true,
    "part": 2,
    "speaker": "RANSOMWARE CORE PROCESS (Boss 2)",
    "dialogue_en": "Voice alert from CISO regarding decryption status!",
    "dialogue_vi": "Cảnh báo giọng nói từ CISO về tình trạng giải mã dữ liệu!",
    "situation_vi": "[TRÙM 2 - CÂU 2/5] CISO hỏi tình trạng khôi phục các tệp tin kế toán.",
    "stem": "Why haven't the accounting spreadsheets been fully decrypted yet?",
    "audioText": "Why haven't the accounting spreadsheets been fully decrypted yet?",
    "choices": [
      "Because the integrity verification tool is still running.",
      "Yes, the accountant was very pleased.",
      "In the file cabinet next to the door."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi bắt đầu bằng 'Why haven't...' (Tại sao chưa giải mã xong?) giải thích nguyên nhân -> (A) 'Because the integrity verification tool is still running' (Bởi vì công cụ xác minh tính toàn vẹn vẫn đang chạy) là câu trả lời trực tiếp giải thích lý do.",
    "trap": "Bẫy Yes/No đối với câu hỏi 'Why' (B), và bẫy trả lời tủ hồ sơ (địa điểm Where) ở phương án C.",
    "examTip": "Câu hỏi 'Why' -> 80% câu trả lời bắt đầu bằng 'Because', 'Due to', 'Since', hoặc trực tiếp đưa ra lý do khách quan.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Reasoning",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "integrity",
        "ipa": "/ɪnˈteɡ.rə.ti/",
        "pos": "n",
        "meaning": "tính toàn vẹn của dữ liệu"
      },
      {
        "word": "verification",
        "ipa": "/ˌver.ɪ.fɪˈkeɪ.ʃən/",
        "pos": "n",
        "meaning": "sự xác minh, kiểm chứng"
      }
    ]
  },
  {
    "id": "c2-18",
    "chapter": 2,
    "isBoss": true,
    "part": 5,
    "speaker": "RANSOMWARE CORE PROCESS (Boss 2)",
    "dialogue_en": "ALERT: Rogue process attempting to delete shadow volume copies!",
    "dialogue_vi": "BÁO ĐỘNG: Tiến trình độc hại đang cố xóa các bản sao lưu ẩn (Shadow Copies)!",
    "situation_vi": "[TRÙM 2 - CÂU 3/5] Kẻ tấn công kích hoạt lệnh vssadmin hòng triệt phá khả năng phục hồi dữ liệu.",
    "stem": "The forensic specialist was highly _______ in detecting hidden rootkits and memory resident malware.",
    "choices": [
      "skilled",
      "skillful",
      "skills",
      "skillfully"
    ],
    "answer": 0,
    "explanation_vi": "Đứng sau động từ to-be 'was' và trạng từ chỉ mức độ 'highly' cần một tính từ -> chọn 'skilled' (có tay nghề cao, thành thạo). Cấu trúc 'skilled in + V-ing' là dạng chuẩn trong đề thi TOEIC.",
    "trap": "Bẫy phó từ 'skillfully' hoặc danh từ số nhiều 'skills'.",
    "examTip": "Cụm tính từ kinh nghiệm công sở: [to be skilled in / experienced in + V-ing/N].",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Adjective Usage",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "skilled",
        "ipa": "/skɪld/",
        "pos": "adj",
        "meaning": "có kỹ năng, thành thạo"
      },
      {
        "word": "rootkit",
        "ipa": "/ˈruːt.kɪt/",
        "pos": "n",
        "meaning": "mã độc can thiệp sâu vào nhân hệ điều hành"
      }
    ]
  },
  {
    "id": "c2-19",
    "chapter": 2,
    "isBoss": true,
    "part": 5,
    "speaker": "RANSOMWARE CORE PROCESS (Boss 2)",
    "dialogue_en": "ALERT: Lateral privilege escalation detected on branch domain controller!",
    "dialogue_vi": "BÁO ĐỘNG: Phát hiện leo thang đặc quyền ngang trên máy chủ quản lý miền chi nhánh!",
    "situation_vi": "[TRÙM 2 - CÂU 4/5] Chặn đứng hành vi mạo danh tài khoản quản trị miền.",
    "stem": "Despite _______ several complex obfuscation layers, the trojan payload was successfully decompiled.",
    "choices": [
      "incorporating",
      "incorporate",
      "incorporated",
      "incorporation"
    ],
    "answer": 0,
    "explanation_vi": "Đứng sau giới từ 'Despite' cần một Danh từ hoặc Danh động từ (V-ing) có tân ngữ phía sau ('several complex obfuscation layers') -> chọn 'incorporating' (Mặc dù tích hợp nhiều lớp làm rối mã phức tạp, mã độc vẫn bị dịch ngược thành công).",
    "trap": "Bẫy danh từ 'incorporation' (không thể mang trực tiếp cụm tân ngữ 'several complex layers' phía sau mà không có giới từ of).",
    "examTip": "Công thức V-ing sau giới từ: [Giới từ + V-ING + Cụm tân ngữ Danh từ] (Despite incorporating several layers).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Gerund after Preposition",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "incorporate",
        "ipa": "/ɪnˈkɔː.pər.eɪt/",
        "pos": "v",
        "meaning": "kết hợp, tích hợp"
      },
      {
        "word": "decompile",
        "ipa": "/diː.kəmˈpaɪl/",
        "pos": "v",
        "meaning": "dịch ngược mã nguồn"
      }
    ]
  },
  {
    "id": "c2-20",
    "chapter": 2,
    "isBoss": true,
    "part": 5,
    "speaker": "RANSOMWARE CORE PROCESS (Boss 2)",
    "dialogue_en": "CRITICAL COUNTER-ATTACK: Execute the memory flush and restore clean shadow copies!",
    "dialogue_vi": "PHẢN CÔNG QUYẾT ĐỊNH: Thực thi lệnh giải phóng bộ nhớ và khôi phục bản sao lưu sạch!",
    "situation_vi": "[TRÙM 2 - CÂU 5/5] Cú đánh quyết định tiêu diệt hoàn toàn tiến trình ransomware!",
    "stem": "NovaBank's swift incident response successfully prevented the ransomware from _______ any critical financial databases.",
    "choices": [
      "compromising",
      "compromised",
      "compromise",
      "compromises"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc 'prevent someone/something from + V-ing': 'prevented the ransomware from compromising any critical databases' (ngăn chặn phần mềm tống tiền làm tổn hại bất kỳ cơ sở dữ liệu tài chính quan trọng nào).",
    "trap": "Bẫy chọn động từ nguyên mẫu 'compromise' sau giới từ 'from'.",
    "examTip": "Công thức vàng TOEIC: [prevent / stop / protect + O + FROM + V-ING] (prevented from compromising).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Verb Pattern",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "prevent",
        "ipa": "/prɪˈvent/",
        "pos": "v",
        "meaning": "ngăn chặn"
      },
      {
        "word": "critical",
        "ipa": "/ˈkrɪt.ɪ.kəl/",
        "pos": "adj",
        "meaning": "then chốt, cực kỳ quan trọng"
      }
    ]
  },
  {
    "id": "c2-21",
    "chapter": 2,
    "part": 2,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah asks when the memory analysis script will finish executing.",
    "dialogue_vi": "Sarah hỏi thời điểm hoàn thành tập lệnh phân tích bộ nhớ RAM.",
    "situation_vi": "03:15 - Sarah đang chạy công cụ Volatility để trích xuất khóa mã hóa độc hại.",
    "stem": "How long will it take to extract the ransomware encryption key from memory?",
    "audioText": "How long will it take to extract the ransomware encryption key from memory?",
    "choices": [
      "Approximately forty-five minutes if the CPU load remains steady.",
      "Yes, the key was generated automatically.",
      "In the top directory of the external backup drive."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi 'How long' (Mất bao lâu) hỏi khoảng thời gian -> (A) 'Approximately forty-five minutes...' (Khoảng 45 phút nếu tải CPU giữ ổn định) trả lời trực tiếp về thời lượng.",
    "trap": "Bẫy Yes/No ở (B) và bẫy vị trí trả lời cho Where ở (C).",
    "examTip": "Câu hỏi 'How long' luôn tìm câu trả lời chứa khoảng thời gian (for 2 hours, about 45 minutes, until next week).",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Forensics",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "extract",
        "ipa": "/ɪkˈstrækt/",
        "pos": "v",
        "meaning": "trích xuất, lấy ra"
      },
      {
        "word": "steady",
        "ipa": "/ˈsted.i/",
        "pos": "adj",
        "meaning": "ổn định, đều đặn"
      }
    ]
  },
  {
    "id": "c2-22",
    "chapter": 2,
    "part": 2,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave checks who authorized the emergency VLAN isolation command.",
    "dialogue_vi": "Dave hỏi ai đã phê duyệt lệnh cô lập phân đoạn mạng VLAN khẩn cấp.",
    "situation_vi": "03:30 - Lệnh cô lập mạng cần sự phê chuẩn của cấp quản lý.",
    "stem": "Didn't the CISO authorize the disconnection of the accounting branch?",
    "audioText": "Didn't the CISO authorize the disconnection of the accounting branch?",
    "choices": [
      "Yes, she sent the signed authorization memo twenty minutes ago.",
      "No, the branch is located on the third floor.",
      "An accountant submitted the quarterly budget forecast."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi phủ định dạng Yes/No ('Didn't the CISO authorize...?') -> (A) 'Yes, she sent the signed authorization memo...' xác nhận CISO đã ký giấy ủy quyền cách đây 20 phút.",
    "trap": "Bẫy trả lời vị trí chi nhánh ở (B) và bẫy lặp từ 'accountant' ở (C).",
    "examTip": "Trong tiếng Anh, câu trả lời 'Yes' cho câu hỏi phủ định mang nghĩa khẳng định sự việc ĐÃ diễn ra.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Authorization",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "disconnection",
        "ipa": "/ˌdɪs.kəˈnek.ʃən/",
        "pos": "n",
        "meaning": "sự ngắt kết nối"
      },
      {
        "word": "authorization",
        "ipa": "/ˌɔː.θər.aɪˈzeɪ.ʃən/",
        "pos": "n",
        "meaning": "sự cấp phép, phê duyệt"
      }
    ]
  },
  {
    "id": "c2-23",
    "chapter": 2,
    "part": 2,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah asks where the quarantined malicious attachment was saved.",
    "dialogue_vi": "Sarah hỏi vị trí lưu trữ tệp đính kèm độc hại đã cách ly.",
    "situation_vi": "03:45 - Sarah cần tải tệp độc hại vào môi trường sandbox để phân tích hành vi.",
    "stem": "Where is the quarantined email attachment currently stored?",
    "audioText": "Where is the quarantined email attachment currently stored?",
    "choices": [
      "On the isolated sandbox server inside the secure forensics lab.",
      "To inspect the dynamic behavior of the executable.",
      "Yes, it was quarantined yesterday."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi 'Where' (Ở đâu) -> (A) 'On the isolated sandbox server inside the secure forensics lab' chỉ rõ vị trí lưu trữ.",
    "trap": "Bẫy trả lời mục đích (To + V) ở (B) và bẫy Yes/No ở (C).",
    "examTip": "Xác định nhanh từ để hỏi (Where) để loại trừ ngay các đáp án bắt đầu bằng Yes/No hoặc To V.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Sandbox",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "quarantined",
        "ipa": "/ˈkwɒr.ən.tiːnd/",
        "pos": "adj",
        "meaning": "đã bị cách ly"
      },
      {
        "word": "sandbox",
        "ipa": "/ˈsænd.bɒks/",
        "pos": "n",
        "meaning": "môi trường ảo cô lập để thử nghiệm"
      }
    ]
  },
  {
    "id": "c2-24",
    "chapter": 2,
    "part": 2,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave makes a polite request to verify the server backup checksums.",
    "dialogue_vi": "Dave đề nghị kiểm tra mã băm checksum của các bản sao lưu máy chủ.",
    "situation_vi": "04:00 - Cần đảm bảo các bản sao lưu không bị mã độc can thiệp.",
    "stem": "Could you verify the cryptographic checksums of our database backups?",
    "audioText": "Could you verify the cryptographic checksums of our database backups?",
    "choices": [
      "Certainly, I will run the SHA-256 verification utility immediately.",
      "The database contains over ten million transaction records.",
      "No, the check was signed by the branch accountant."
    ],
    "answer": 0,
    "explanation_vi": "Lời đề nghị lịch sự 'Could you...?' -> (A) 'Certainly, I will run the SHA-256 verification utility immediately' (Chắc chắn rồi, tôi sẽ chạy tiện ích xác thực SHA-256 ngay lập tức) là câu nhận lời trang trọng.",
    "trap": "Bẫy lặp từ đồng âm 'check' (tấm séc ngân hàng) ở (C) và bẫy mô tả số lượng dữ liệu ở (B).",
    "examTip": "Lời yêu cầu lịch sự (Could you / Would you / Can you) thường được đáp lại bằng: Certainly, Of course, Sure, I'd be glad to, No problem.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Data Integrity",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "cryptographic",
        "ipa": "/ˌkrɪp.təˈɡræf.ɪk/",
        "pos": "adj",
        "meaning": "thuộc mật mã học"
      },
      {
        "word": "checksum",
        "ipa": "/ˈtʃek.sʌm/",
        "pos": "n",
        "meaning": "mã băm kiểm tra tính toàn vẹn"
      }
    ]
  },
  {
    "id": "c2-25",
    "chapter": 2,
    "part": 2,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah makes a suggestion about contacting the incident response retainer firm.",
    "dialogue_vi": "Sarah đề xuất liên hệ đơn vị tư vấn ứng cứu sự cố chuyên nghiệp.",
    "situation_vi": "04:15 - Cân nhắc gọi hỗ trợ từ đối tác an ninh Mandiant.",
    "stem": "Why don't we contact our external incident response provider for assistance?",
    "audioText": "Why don't we contact our external incident response provider for assistance?",
    "choices": [
      "Good idea; I will dial their twenty-four-hour hotline right now.",
      "Because they responded to the ticket last month.",
      "Assistance is available on the ground floor lobby."
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc 'Why don't we...?' là câu đưa ra lời gợi ý (Suggestion), không phải câu hỏi lý do -> (A) 'Good idea; I will dial their twenty-four-hour hotline right now' (Ý hay đấy, tôi sẽ gọi đường dây nóng 24/7 của họ ngay) là câu tán thành tự nhiên.",
    "trap": "Bẫy trả lời 'Because' ở (B) (nghe nhầm 'Why don't we' thành câu hỏi Why thông thường).",
    "examTip": "Bẫy kinh điển: 'Why don't you / Why don't we' là LỜI KHUYÊN / GỢI Ý, KHÔNG BAO GIỜ trả lời bằng 'Because'.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Suggestions",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "assistance",
        "ipa": "/əˈsɪs.təns/",
        "pos": "n",
        "meaning": "sự hỗ trợ, trợ giúp"
      },
      {
        "word": "hotline",
        "ipa": "/ˈhɒt.laɪn/",
        "pos": "n",
        "meaning": "đường dây nóng khẩn cấp"
      }
    ]
  },
  {
    "id": "c2-26",
    "chapter": 2,
    "part": 3,
    "speaker": "Dave & Sarah",
    "dialogue_en": "Dave: Sarah, I just received an alert that the secondary storage area network is experiencing heavy write activity.\nSarah: That matches the behavior of the LockBit ransomware strain we isolated earlier. The malware is trying to overwrite the volume shadow copies to prevent file recovery.\nDave: We cannot allow that to happen. Please issue an immediate emergency command to sever the Fibre Channel interconnects between the SAN and the virtual machines.",
    "dialogue_vi": "Dave: Sarah, anh vừa nhận cảnh báo vùng lưu trữ phụ SAN đang có hoạt động ghi dữ liệu cực lớn.\nSarah: Dấu hiệu đó khớp với hành vi của biến thể ransomware LockBit ta vừa cách ly. Mã độc đang cố ghi đè các bản sao shadow copy để ngăn khôi phục dữ liệu.\nDave: Tuyệt đối không thể để điều đó xảy ra. Em hãy phát lệnh khẩn cấp ngắt ngay kết nối cáp quang giữa SAN và các máy ảo.",
    "situation_vi": "04:30 - Hội thoại giữa Dave và Sarah về việc ngăn chặn Ransomware phá hoại bản sao lưu.",
    "stem": "What problem are the speakers addressing?",
    "audioText": "What problem are the speakers addressing?",
    "choices": [
      "Malware is actively attempting to destroy system backup copies.",
      "The server cooling fans have stopped spinning completely.",
      "An accounting employee forgot their master database password.",
      "The bank's website has been taken down by a DDoS attack."
    ],
    "answer": 0,
    "explanation_vi": "Sarah nêu rõ: 'The malware is trying to overwrite the volume shadow copies to prevent file recovery' -> Mã độc đang cố tình phá hủy các bản sao lưu để ngăn khôi phục dữ liệu (Malware is actively attempting to destroy system backup copies).",
    "trap": "Bẫy quạt tản nhiệt ở (B), quên mật khẩu ở (C) hoặc tấn công DDoS ở (D).",
    "examTip": "Nghe từ khóa mang tính chuyên môn: 'ransomware', 'overwrite shadow copies', 'prevent recovery' liên kết trực tiếp với 'destroy system backup copies'.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Problem Identification",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "overwrite",
        "ipa": "/ˌəʊ.vəˈraɪt/",
        "pos": "v",
        "meaning": "ghi đè dữ liệu lên vùng cũ"
      },
      {
        "word": "sever",
        "ipa": "/ˈsev.ər/",
        "pos": "v",
        "meaning": "cắt đứt, ngắt kết nối dứt khoát"
      }
    ]
  },
  {
    "id": "c2-27",
    "chapter": 2,
    "part": 3,
    "speaker": "Dave & Sarah",
    "dialogue_en": "(Continuing Conversation 2)",
    "dialogue_vi": "(Tiếp tục Hội thoại 2)",
    "situation_vi": "Chi tiết về loại phần mềm độc hại được Sarah xác định.",
    "stem": "What type of threat does Sarah identify?",
    "audioText": "What type of threat does Sarah identify?",
    "choices": [
      "A sophisticated ransomware variant.",
      "A counterfeit hardware component.",
      "An unverified credit card transaction.",
      "An accidental loss of electrical power."
    ],
    "answer": 0,
    "explanation_vi": "Sarah nói: 'That matches the behavior of the LockBit ransomware strain we isolated earlier' -> Một biến thể mã độc tống tiền tinh vi (A sophisticated ransomware variant).",
    "trap": "Bẫy phần cứng giả mạo (B) hoặc mất điện (D).",
    "examTip": "Nhận biết từ đồng nghĩa: 'strain' = 'variant' (biến thể mã độc).",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Detail",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "strain",
        "ipa": "/streɪn/",
        "pos": "n",
        "meaning": "chủng, biến thể mã độc"
      },
      {
        "word": "sophisticated",
        "ipa": "/səˈfɪs.tɪ.keɪ.tɪd/",
        "pos": "adj",
        "meaning": "tinh vi, phức tạp"
      }
    ]
  },
  {
    "id": "c2-28",
    "chapter": 2,
    "part": 3,
    "speaker": "Dave & Sarah",
    "dialogue_en": "(Continuing Conversation 2)",
    "dialogue_vi": "(Tiếp tục Hội thoại 2)",
    "situation_vi": "Chỉ đạo quyết liệt của Dave đối với kết nối phần cứng mạng.",
    "stem": "What does Dave instruct Sarah to do?",
    "audioText": "What does Dave instruct Sarah to do?",
    "choices": [
      "Disconnect the physical interconnects linked to the storage network.",
      "Order five new server racks from the computer distributor.",
      "Transfer thirty million dollars to the attacker's bitcoin wallet.",
      "Send an email apology to all bank loan customers."
    ],
    "answer": 0,
    "explanation_vi": "Dave yêu cầu: 'Please issue an immediate emergency command to sever the Fibre Channel interconnects between the SAN and the virtual machines' -> Ngắt kết nối phần cứng liên kết với mạng lưu trữ SAN.",
    "trap": "Bẫy trả tiền chuộc bitcoin ở (C) và bẫy xin lỗi khách hàng ở (D).",
    "examTip": "Kỹ năng Paraphrase: 'sever the Fibre Channel interconnects' được chuyển thành 'Disconnect the physical interconnects'.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Action Item",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "interconnect",
        "ipa": "/ˌɪn.tə.kəˈnekt/",
        "pos": "n",
        "meaning": "đường kết nối trung gian"
      },
      {
        "word": "sever",
        "ipa": "/ˈsev.ər/",
        "pos": "v",
        "meaning": "ngắt đứt"
      }
    ]
  },
  {
    "id": "c2-29",
    "chapter": 2,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave orders the immediate retention of forensic evidence.",
    "dialogue_vi": "Dave chỉ đạo lưu giữ nguyên vẹn các chứng cứ pháp y số.",
    "situation_vi": "Chủ điểm: Cấu trúc câu mệnh lệnh (Imperative Sentence).",
    "stem": "_______ all hard drive forensic images onto write-blocked optical media before restarting any database host.",
    "choices": [
      "Save",
      "Saves",
      "Saving",
      "Saved"
    ],
    "answer": 0,
    "explanation_vi": "Câu không có chủ ngữ và đứng đầu câu nhằm đưa ra mệnh lệnh / chỉ thị kỹ thuật -> Cần dùng động từ nguyên thể đứng đầu câu mệnh lệnh (Imperative Sentence) -> chọn 'Save'.",
    "trap": "Bẫy dạng danh động từ 'Saving' hoặc thì quá khứ 'Saved'.",
    "examTip": "Công thức câu mệnh lệnh trong TOEIC: [V-bare + Tân ngữ/Trạng ngữ] (ví dụ: Please review, Call us, Save all files).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Imperatives",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "write-blocked",
        "ipa": "/raɪt blɒkt/",
        "pos": "adj",
        "meaning": "bị khóa chống ghi đè dữ liệu"
      },
      {
        "word": "media",
        "ipa": "/ˈmiː.di.ə/",
        "pos": "n",
        "meaning": "phương tiện lưu trữ dữ liệu"
      }
    ]
  },
  {
    "id": "c2-30",
    "chapter": 2,
    "part": 5,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah discusses the swift containment of the infection.",
    "dialogue_vi": "Sarah nói về việc khoanh vùng nhanh chóng ngăn mã độc lây lan.",
    "situation_vi": "Chủ điểm: Cụm liên từ kép (Not only... but also).",
    "stem": "The automated quarantine script not only isolated the rogue host _______ terminated its active external connections.",
    "choices": [
      "but also",
      "and either",
      "as well",
      "or else"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc liên từ tương quan kinh điển: 'not only ... but also ...' (không những ... mà còn ...) -> chọn 'but also'.",
    "trap": "Bẫy 'as well' (thiếu 'as well as') hoặc 'and either'.",
    "examTip": "Các cặp liên từ tương quan bắt buộc phải thuộc lòng: [not only A but also B], [either A or B], [neither A nor B], [both A and B].",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Correlative Conjunctions",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "rogue",
        "ipa": "/rəʊɡ/",
        "pos": "adj",
        "meaning": "bất hảo, độc hại, không kiểm soát"
      },
      {
        "word": "terminate",
        "ipa": "/ˈtɜː.mɪ.neɪt/",
        "pos": "v",
        "meaning": "chấm dứt, ngắt bỏ"
      }
    ]
  },
  {
    "id": "c2-31",
    "chapter": 2,
    "part": 5,
    "speaker": "Helen Kang (CISO)",
    "dialogue_en": "Helen Kang comments on the financial implications of network downtime.",
    "dialogue_vi": "Helen Kang nhận định về tổn thất tài chính nếu mạng ngân hàng ngừng hoạt động.",
    "situation_vi": "Chủ điểm: Từ vựng - Chọn động từ mang nghĩa gánh chịu chi phí / thiệt hại.",
    "stem": "If the core transaction system remains offline for another hour, the bank will _______ severe financial penalties.",
    "choices": [
      "incur",
      "imply",
      "inspect",
      "invest"
    ],
    "answer": 0,
    "explanation_vi": "Cụm kết hợp từ 'incur penalties / incur expenses / incur losses' mang nghĩa 'gánh chịu mức phạt / phát sinh tổn thất tài chính' -> chọn 'incur'.",
    "trap": "Các động từ không hợp ngữ cảnh: 'imply' (ám chỉ), 'inspect' (thanh tra), 'invest' (đầu tư).",
    "examTip": "Collocation TOEIC thông dụng: incur costs / incur fines / incur losses / incur penalties (gánh chịu tổn thất / chi phí / tiền phạt).",
    "tags": {
      "part": "Part 5",
      "category": "Vocabulary",
      "topic": "Collocation",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "incur",
        "ipa": "/ɪnˈkɜːr/",
        "pos": "v",
        "meaning": "gánh chịu, phát sinh (tổn thất, chi phí)"
      },
      {
        "word": "penalty",
        "ipa": "/ˈpen.əl.ti/",
        "pos": "n",
        "meaning": "hình phạt, khoản tiền phạt"
      }
    ]
  },
  {
    "id": "c2-32",
    "chapter": 2,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave checks server availability during forensic imaging.",
    "dialogue_vi": "Dave lưu ý về tình trạng máy chủ trong khi sao chép đĩa cứng.",
    "situation_vi": "Chủ điểm: Giới từ chỉ thời gian (During + Danh từ).",
    "stem": "Customer online banking services will experience brief slowdowns _______ the scheduled disk imaging window.",
    "choices": [
      "during",
      "while",
      "whereas",
      "as if"
    ],
    "answer": 0,
    "explanation_vi": "Phía sau là cụm danh từ 'the scheduled disk imaging window' (khung thời gian sao chép đĩa dự kiến). Cần một giới từ đi với danh từ -> chọn 'during' (trong suốt).",
    "trap": "Bẫy liên từ 'while' (phải đi kèm mệnh đề S + V hoặc V-ing).",
    "examTip": "Phân biệt: [During + Cụm danh từ] >< [While + S + V / V-ing]. Ví dụ: during the meeting >< while attending the meeting.",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Prepositions",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "brief",
        "ipa": "/briːf/",
        "pos": "adj",
        "meaning": "ngắn ngủi, chốc lát"
      },
      {
        "word": "window",
        "ipa": "/ˈwɪn.dəʊ/",
        "pos": "n",
        "meaning": "khung thời gian cho phép thực hiện"
      }
    ]
  },
  {
    "id": "c2-33",
    "chapter": 2,
    "part": 5,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah discusses the forensic preservation of server logs.",
    "dialogue_vi": "Sarah nhấn mạnh tính toàn vẹn của bằng chứng pháp y số.",
    "situation_vi": "Chủ điểm: Thể chủ động - Chọn hình thức phân từ hiện tại (V-ing) trong mệnh đề quan hệ rút gọn.",
    "stem": "The analyst _______ the investigation must preserve the digital chain of custody at every step.",
    "choices": [
      "conducting",
      "conducted",
      "conducts",
      "conductor"
    ],
    "answer": 0,
    "explanation_vi": "Câu đã có động từ chính là 'must preserve'. Cụm '_______ the investigation' là mệnh đề quan hệ rút gọn bổ nghĩa cho danh từ 'The analyst'. Nhà phân tích là chủ thể trực tiếp thực hiện (chủ động) cuộc điều tra -> rút gọn thành V-ing: 'conducting' (người đang tiến hành cuộc điều tra).",
    "trap": "Bẫy V-ed 'conducted' (dùng cho thể bị động) hoặc danh từ 'conductor' (người soát vé/chỉ huy).",
    "examTip": "Rút gọn mệnh đề quan hệ: Chủ động dùng [V-ing] (The person conducting sth); Bị động dùng [V-ed/V3] (The report conducted by...).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Reduced Relative Clause",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "chain of custody",
        "ipa": "/tʃeɪn əv ˈkʌs.tə.di/",
        "pos": "n",
        "meaning": "chuỗi bảo quản chứng cứ pháp lý"
      },
      {
        "word": "preserve",
        "ipa": "/prɪˈzɜːv/",
        "pos": "v",
        "meaning": "gìn giữ nguyên vẹn"
      }
    ]
  },
  {
    "id": "c2-34",
    "chapter": 2,
    "part": 5,
    "speaker": "Helen Kang (CISO)",
    "dialogue_en": "Helen Kang reinforces the requirement for full data transparency.",
    "dialogue_vi": "CISO Helen Kang quán triệt nguyên tắc minh bạch dữ liệu điều tra.",
    "situation_vi": "Chủ điểm: Cặp liên từ chỉ sự tương phản (Although / Despite).",
    "stem": "_______ the attack caused significant network congestion, no confidential customer account details were exfiltrated.",
    "choices": [
      "Although",
      "Despite",
      "Because",
      "Unless"
    ],
    "answer": 0,
    "explanation_vi": "Phía sau là mệnh đề đầy đủ 'the attack caused significant network congestion' (cuộc tấn công gây ra nghẽn mạng nghiêm trọng). Hai vế mang ý tương phản (gây nghẽn mạng nhưng không mất dữ liệu) -> chọn liên từ 'Although' (Mặc dù).",
    "trap": "Bẫy giới từ 'Despite' (phải đi kèm cụm danh từ, không đi với mệnh đề S + V).",
    "examTip": "Công thức tương phản: [Although / Even though / Though + Mệnh đề S + V] đối lập với [Despite / In spite of + Cụm danh từ / V-ing].",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Conjunctions",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "congestion",
        "ipa": "/kənˈdʒes.tʃən/",
        "pos": "n",
        "meaning": "sự tắc nghẽn lưu lượng"
      },
      {
        "word": "exfiltrate",
        "ipa": "/ˈeks.fɪl.treɪt/",
        "pos": "v",
        "meaning": "đánh cắp dữ liệu trót lọt ra ngoài"
      }
    ]
  },
  {
    "id": "c2-35",
    "chapter": 2,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave requires a comprehensive audit of all employee access rights.",
    "dialogue_vi": "Dave yêu cầu rà soát toàn bộ quyền truy cập của nhân viên.",
    "situation_vi": "Chủ điểm: Từ loại - Chọn Danh từ (Noun) làm tân ngữ cho động từ.",
    "stem": "The internal audit department will initiate an immediate _______ of all elevated database credentials.",
    "choices": [
      "investigation",
      "investigate",
      "investigative",
      "investigating"
    ],
    "answer": 0,
    "explanation_vi": "Đứng sau mạo từ 'an' và tính từ 'immediate' cần một danh từ (Noun) đóng vai trò tân ngữ -> chọn 'investigation' (cuộc điều tra, thẩm tra).",
    "trap": "Bẫy tính từ 'investigative' hoặc động từ 'investigate'.",
    "examTip": "Trật tự từ ngữ kinh điển: [Mạo từ + Tính từ + Danh từ] (an immediate investigation, a comprehensive review).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Word Form",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "initiate",
        "ipa": "/ɪˈnɪʃ.i.eɪt/",
        "pos": "v",
        "meaning": "khởi xướng, bắt đầu tiến hành"
      },
      {
        "word": "elevated",
        "ipa": "/ˈel.ɪ.veɪ.tɪd/",
        "pos": "adj",
        "meaning": "có đặc quyền cao hơn bình thường"
      }
    ]
  },
  {
    "id": "c2-36",
    "chapter": 2,
    "part": 5,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah discusses the malware's evasion technique.",
    "dialogue_vi": "Sarah nhận xét về kỹ thuật lẩn tránh tinh vi của mã độc.",
    "situation_vi": "Chủ điểm: Cấu trúc So sánh Nhất (Superlative).",
    "stem": "This trojan loader is currently the _______ malware sample ever analyzed by our forensics laboratory.",
    "choices": [
      "most sophisticated",
      "sophisticated",
      "more sophisticated",
      "sophistication"
    ],
    "answer": 0,
    "explanation_vi": "Có mạo từ 'the' phía trước và cụm từ 'ever analyzed' (từng được phân tích từ trước đến nay) ở phía sau chỉ phạm vi so sánh tuyệt đối -> Dùng so sánh nhất (Superlative) của tính từ dài -> chọn 'most sophisticated' (tinh vi nhất).",
    "trap": "Bẫy so sánh hơn 'more sophisticated' hoặc danh từ 'sophistication'.",
    "examTip": "Dấu hiệu nhận biết So sánh nhất: Có 'the' đứng trước và 'in/of/ever + V3' đứng sau: the most + Adj + ever + V3/ed.",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Superlative",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "trojan loader",
        "ipa": "/ˈtrəʊ.dʒən ˈləʊ.dər/",
        "pos": "n",
        "meaning": "mã độc chuyên tải các payload khác"
      },
      {
        "word": "sophisticated",
        "ipa": "/səˈfɪs.tɪ.keɪ.tɪd/",
        "pos": "adj",
        "meaning": "tinh vi, phức tạp"
      }
    ]
  },
  {
    "id": "c2-37",
    "chapter": 2,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave orders the implementation of strict USB storage policies.",
    "dialogue_vi": "Dave yêu cầu áp dụng lệnh cấm cắm USB trên máy trạm ngân hàng.",
    "situation_vi": "Chủ điểm: Từ vựng - Chọn động từ mang nghĩa ngăn cấm theo quy chế.",
    "stem": "New banking compliance standards strictly _______ employees from connecting personal thumb drives to company workstations.",
    "choices": [
      "prohibit",
      "persuade",
      "promote",
      "postpone"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc: 'prohibit someone from doing sth' mang nghĩa 'nghiêm cấm ai làm việc gì' -> chọn 'prohibit'.",
    "trap": "Các từ khác cấu trúc hoặc ngữ nghĩa: 'persuade' (thuyết phục), 'promote' (quảng bá/thăng chức), 'postpone' (hoãn lại).",
    "examTip": "Cấu trúc cấm đoán trong TOEIC: prohibit / ban / forbid / discourage + [someone from V-ing].",
    "tags": {
      "part": "Part 5",
      "category": "Vocabulary",
      "topic": "Verb Patterns",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "prohibit",
        "ipa": "/prəˈhɪb.ɪt/",
        "pos": "v",
        "meaning": "cấm chỉ, ngăn cấm"
      },
      {
        "word": "thumb drive",
        "ipa": "/ˈθʌm draɪv/",
        "pos": "n",
        "meaning": "ổ lưu trữ USB mini"
      }
    ]
  },
  {
    "id": "c2-38",
    "chapter": 2,
    "part": 5,
    "speaker": "Helen Kang (CISO)",
    "dialogue_en": "Helen Kang speaks about the importance of speed in patching.",
    "dialogue_vi": "CISO Helen Kang nhấn mạnh tính cấp thiết của việc cập nhật bản vá.",
    "situation_vi": "Chủ điểm: Cấu trúc tính từ giả định [It is imperative that + S + V-bare].",
    "stem": "It is _______ that all branch firewalls install the firmware hotfix before normal banking operations resume.",
    "choices": [
      "imperative",
      "reluctant",
      "hesitant",
      "casual"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc nhấn mạnh tính khẩn thiết: 'It is imperative that + S + (should) + V-bare' mang nghĩa 'việc ... là vô cùng cấp bách / tối quan trọng' -> chọn 'imperative'.",
    "trap": "Các tính từ không hợp nghĩa: 'reluctant' (ngập ngừng, miễn cưỡng), 'hesitant' (do dự), 'casual' (bình thường, tùy tiện).",
    "examTip": "Các tính từ kích hoạt thể giả định thức: [It is imperative / vital / crucial / essential / necessary + that + S + V-bare].",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Subjunctive Adjectives",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "imperative",
        "ipa": "/ɪmˈper.ə.tɪv/",
        "pos": "adj",
        "meaning": "cấp bách, tối quan trọng"
      },
      {
        "word": "hotfix",
        "ipa": "/ˈhɒt.fɪks/",
        "pos": "n",
        "meaning": "bản vá nóng khẩn cấp cho phần mềm"
      }
    ]
  },
  {
    "id": "c2-39",
    "chapter": 2,
    "part": 6,
    "speaker": "AEGIS AI (Security Incident Report)",
    "dialogue_en": "Incident Update Notice sent to the IT Infrastructure Committee.",
    "dialogue_vi": "Bản tin cập nhật sự cố gửi Ủy ban Hạ tầng CNTT NovaBank.",
    "situation_vi": "Điền từ vào chỗ trống [1] trong Báo cáo tiến độ xử lý sự cố mã độc.",
    "passage": "INCIDENT STATUS UPDATE\nTO: IT Operations Committee\nFROM: NovaBank SOC Incident Response Team\nDATE: November 10, 04:45 AM\nSUBJECT: Containment of Malware Intrusion on Accounting VLAN 3\n\nWe are pleased to report that the malicious script detected on workstation WS-ACC-402 has been _______ [1] isolated. Thanks to the automated intrusion prevention rules deployed earlier tonight, the ransomware payload was unable to propagate to our centralized customer database. Forensic engineers are currently analyzing the memory artifact to identify the attacker's command-and-control server. Furthermore, all domain controller passwords _______ [2] by 6:00 AM this morning as a precautionary measure. _______ [3]. Normal branch banking services are expected to operate without disruption today.",
    "stem": "Select the best answer for blank [1]:",
    "choices": [
      "successfully",
      "success",
      "successful",
      "succeed"
    ],
    "answer": 0,
    "explanation_vi": "Đứng giữa trợ động từ 'has been' và phân từ quá khứ 'isolated' cần một phó từ (adverb) đuôi -ly để bổ nghĩa cho hành động 'đã được cô lập' -> chọn 'successfully' (đã được cô lập thành công).",
    "trap": "Bẫy danh từ 'success' hoặc tính từ 'successful'.",
    "examTip": "Vị trí kinh điển của trạng từ trong thể bị động: [to be / have been + TRẠNG TỪ + V3/ed] (has been successfully isolated).",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Adverbs",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "successfully",
        "ipa": "/səkˈses.fəl.i/",
        "pos": "adv",
        "meaning": "một cách thành công"
      },
      {
        "word": "centralized",
        "ipa": "/ˈsen.trə.laɪzd/",
        "pos": "adj",
        "meaning": "mang tính tập trung"
      }
    ]
  },
  {
    "id": "c2-40",
    "chapter": 2,
    "part": 6,
    "speaker": "AEGIS AI (Security Incident Report)",
    "dialogue_en": "(Continuing Part 6 Passage 1)",
    "dialogue_vi": "(Tiếp tục Đoạn 1 Part 6)",
    "situation_vi": "Chọn thì động từ thích hợp tại chỗ trống [2] có mốc thời gian tương lai 'by 6:00 AM this morning'.",
    "passage": "(Tham khảo văn bản Báo cáo tiến độ ở câu c2-39)",
    "stem": "Select the best answer for blank [2]:",
    "choices": [
      "will be reset",
      "have reset",
      "resetting",
      "were reset"
    ],
    "answer": 0,
    "explanation_vi": "Hành động 'all domain controller passwords' (tất cả mật khẩu máy chủ quản trị) là vật chịu tác động (thể bị động), diễn ra trước mốc thời gian tương lai 'by 6:00 AM this morning' -> chọn thì tương lai đơn bị động 'will be reset' (sẽ được đặt lại).",
    "trap": "Bẫy thể chủ động 'have reset' hoặc quá khứ 'were reset' (mâu thuẫn với mốc thời gian hành động chưa xảy ra).",
    "examTip": "Cụm 'by + thời điểm tương lai' chỉ hành động sẽ được hoàn tất trong tương lai -> ưu tiên dùng thì tương lai (will be + V3/ed).",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Future Passive",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "precautionary",
        "ipa": "/prɪˈkɔː.ʃən.ər.i/",
        "pos": "adj",
        "meaning": "mang tính phòng ngừa trước"
      },
      {
        "word": "measure",
        "ipa": "/ˈmeʒ.ər/",
        "pos": "n",
        "meaning": "biện pháp xử lý"
      }
    ]
  },
  {
    "id": "c2-41",
    "chapter": 2,
    "part": 6,
    "speaker": "AEGIS AI (Security Incident Report)",
    "dialogue_en": "Select the sentence that best fits the flow of thought at blank [3].",
    "dialogue_vi": "Chọn câu văn kết nối ý mạch lạc nhất tại chỗ trống [3].",
    "situation_vi": "Điền câu văn bổ trợ cho thông điệp trấn an hoạt động ngân hàng diễn ra bình thường.",
    "passage": "(Tham khảo văn bản Báo cáo tiến độ ở câu c2-39)",
    "stem": "Select the sentence that best fits blank [3]:",
    "choices": [
      "No customer financial balances or transactional records have been compromised.",
      "The employee cafeteria will introduce an expanded breakfast menu next week.",
      "Office supply orders must be submitted to purchasing by Thursday afternoon.",
      "The building elevator will be shut down for routine cable inspection."
    ],
    "answer": 0,
    "explanation_vi": "Câu (A) 'No customer financial balances or transactional records have been compromised' (Không có số dư tài chính hay hồ sơ giao dịch nào của khách hàng bị xâm phạm) là lời khẳng định cốt lõi liên kết tự nhiên với câu kết luận 'Normal branch banking services are expected to operate without disruption today'.",
    "trap": "Các phương án lạc đề về căng tin nhân viên (B), đồ dùng văn phòng (C), hay thang máy (D).",
    "examTip": "Trong báo cáo sự cố an ninh ngân hàng, câu chèn vào thường là cam kết bảo toàn dữ liệu tài sản của khách hàng.",
    "tags": {
      "part": "Part 6",
      "category": "Reading",
      "topic": "Sentence Insertion",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "transactional",
        "ipa": "/trænˈzæk.ʃən.əl/",
        "pos": "adj",
        "meaning": "thuộc về giao dịch tài chính"
      },
      {
        "word": "disruption",
        "ipa": "/dɪsˈrʌp.ʃən/",
        "pos": "n",
        "meaning": "sự xáo trộn, gián đoạn"
      }
    ]
  },
  {
    "id": "c2-42",
    "chapter": 2,
    "part": 6,
    "speaker": "Alex Mercer (Infrastructure Engineer)",
    "dialogue_en": "Notice regarding database cluster license renewal and security patching.",
    "dialogue_vi": "Thông báo về việc gia hạn bản quyền và cập nhật vá bảo mật cơ sở dữ liệu.",
    "situation_vi": "Điền từ vào chỗ trống [1] trong thông báo gia hạn dịch vụ phần mềm máy chủ.",
    "passage": "TECHNICAL NOTIFICATION\nTO: NovaBank Database Administration Group\nFROM: Alex Mercer, IT Infrastructure Operations\nDATE: November 10, 2026\nSUBJECT: Oracle Database Security Patch & Cluster Renewal\n\nPlease be advised that our annual enterprise database maintenance contract is due for _______ [1] at the end of this month. In conjunction with this renewal, Oracle Corporation released an emergency critical patch update (CPU) to remedy an authenticated remote code execution vulnerability. The IT security committee has determined that applying this patch is _______ [2] to maintaining core banking stability. Maintenance will begin at 01:00 AM on Sunday. _______ [3]. Please ensure that all pending batch processing jobs are finalized prior to the scheduled maintenance window.",
    "stem": "Select the best answer for blank [1]:",
    "choices": [
      "renewal",
      "renewing",
      "renew",
      "renewed"
    ],
    "answer": 0,
    "explanation_vi": "Cụm thành ngữ cố định: 'due for renewal' mang nghĩa 'đến hạn phải gia hạn hợp đồng' -> cần một danh từ (Noun) sau giới từ 'for' -> chọn 'renewal'.",
    "trap": "Bẫy danh động từ 'renewing' hoặc động từ nguyên thể 'renew'.",
    "examTip": "Cụm từ quen thuộc trong hợp đồng thương mại TOEIC: due for renewal (đến hạn gia hạn), due for inspection (đến hạn kiểm tra).",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Collocations",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "renewal",
        "ipa": "/rɪˈnjuː.əl/",
        "pos": "n",
        "meaning": "sự gia hạn hợp đồng/dịch vụ"
      },
      {
        "word": "in conjunction with",
        "ipa": "/ɪn kənˈdʒʌŋk.ʃən wɪð/",
        "pos": "prep",
        "meaning": "cùng với, kết hợp với"
      }
    ]
  },
  {
    "id": "c2-43",
    "chapter": 2,
    "part": 6,
    "speaker": "Alex Mercer (Infrastructure Engineer)",
    "dialogue_en": "(Continuing Part 6 Passage 2)",
    "dialogue_vi": "(Tiếp tục Đoạn 2 Part 6)",
    "situation_vi": "Chọn tính từ thích hợp đi với giới từ 'to' tại chỗ trống [2].",
    "passage": "(Tham khảo thông báo kỹ thuật ở câu c2-42)",
    "stem": "Select the best answer for blank [2]:",
    "choices": [
      "essential",
      "hesitant",
      "tentative",
      "negligent"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc: 'essential to doing sth / essential to something' mang nghĩa 'thiết yếu, không thể thiếu đối với việc gì' -> chọn 'essential'.",
    "trap": "Các tính từ không hợp nghĩa: 'hesitant' (do dự), 'tentative' (chưa dứt khoát), 'negligent' (bất cẩn, cẩu thả).",
    "examTip": "Tính từ đi với giới từ to: essential to (thiết yếu cho), vital to (sống còn với), crucial to (quyết định đối với).",
    "tags": {
      "part": "Part 6",
      "category": "Vocabulary",
      "topic": "Adjective Prepositions",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "essential",
        "ipa": "/ɪˈsen.ʃəl/",
        "pos": "adj",
        "meaning": "thiết yếu, cực kỳ quan trọng"
      },
      {
        "word": "stability",
        "ipa": "/stəˈbɪl.ə.ti/",
        "pos": "n",
        "meaning": "sự ổn định của hệ thống"
      }
    ]
  },
  {
    "id": "c2-44",
    "chapter": 2,
    "part": 6,
    "speaker": "Alex Mercer (Infrastructure Engineer)",
    "dialogue_en": "Select the best sentence for blank [3].",
    "dialogue_vi": "Chọn câu văn phù hợp nhất với ngữ cảnh tại chỗ trống [3].",
    "situation_vi": "Điền câu văn hướng dẫn kỹ thuật vào thông báo bảo trì máy chủ.",
    "passage": "(Tham khảo thông báo kỹ thuật ở câu c2-42)",
    "stem": "Select the sentence that best fits blank [3]:",
    "choices": [
      "Secondary failover servers will temporarily process user queries to avoid downtime.",
      "All employees must vacate the parking garage by 5:00 PM on Friday.",
      "New cafeteria prices will take effect at the start of the next financial quarter.",
      "The branch manager decided to purchase twenty additional desktop printers."
    ],
    "answer": 0,
    "explanation_vi": "Đoạn văn đang giải thích về việc bảo trì cơ sở dữ liệu. Câu (A) 'Secondary failover servers will temporarily process user queries to avoid downtime' (Các máy chủ dự phòng sẽ tạm thời xử lý các truy vấn của người dùng để tránh gián đoạn dịch vụ) cung cấp phương án kỹ thuật hợp lý nhất.",
    "trap": "Các phương án nói về hầm đỗ xe (B), giá đồ ăn (C) hay máy in (D).",
    "examTip": "Các đoạn văn về bảo trì hệ thống (Maintenance notice) luôn đề cập đến giải pháp dự phòng (Failover/Backup) để trấn an người dùng.",
    "tags": {
      "part": "Part 6",
      "category": "Reading",
      "topic": "Sentence Insertion",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "failover",
        "ipa": "/ˈfeɪlˌəʊ.vər/",
        "pos": "n",
        "meaning": "cơ chế tự động chuyển đổi dự phòng"
      },
      {
        "word": "downtime",
        "ipa": "/ˈdaʊn.taɪm/",
        "pos": "n",
        "meaning": "thời gian hệ thống ngừng hoạt động"
      }
    ]
  },
  {
    "id": "c2-45",
    "chapter": 2,
    "part": 7,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Digital Forensics Memory Analysis Lab Report.",
    "dialogue_vi": "Báo cáo Kết quả Phân tích Pháp y Bộ nhớ RAM.",
    "situation_vi": "05:00 - Bạn đọc bản báo cáo kết quả dịch ngược mã độc của Sarah để trả lời câu 45 - 48.",
    "passage": "NOVABANK DIGITAL FORENSICS INVESTIGATION REPORT\nCASE ID: SEC-2026-1109-RAM\nLEAD INVESTIGATOR: Sarah Lin (Senior Forensics Analyst)\nEVIDENCE ITEM: 16GB Physical Memory Dump (Host WS-ACC-402)\nDATE OF ANALYSIS: November 10, 2026\n\n1. Executive Summary\nA physical memory dump was captured from accounting workstation WS-ACC-402 at 01:25 AM following anomalous outbound beaconing alerts. Memory carving and string extraction revealed an injected dynamic link library (DLL) residing in the memory space of the legitimate svchost.exe process.\n\n2. Key Findings\n- Malware Family: The payload was identified as a custom variant of DarkLocker, an evasive ransomware strain engineered to encrypt financial spreadsheets (.xlsx, .csv) and SQL database exports (.bak).\n- Persistence Mechanism: The malware established a hidden scheduled task disguised as 'WindowsFontCacheOptimizer' set to execute every 12 hours.\n- Network Activity: The injected DLL attempted to send encrypted HTTP POST requests to an external command-and-control server (IP: 194.67.210.15). The packets were successfully dropped by the border firewall.\n- Data Compromise: Analysis of the process memory confirms that the encryption routine was halted in its reconnaissance phase. Zero client banking records were encrypted or exfiltrated.\n\n3. Recommendations\n1. Revoke and reissue all network credentials assigned to the user of WS-ACC-402.\n2. Deploy an endpoint detection and response (EDR) scanning rule across all branch workstations to detect the rogue scheduled task.\n3. Conduct an educational refresher on recognizing deceptive macro-enabled spreadsheets.",
    "stem": "What was the primary purpose of Sarah Lin's investigation?",
    "choices": [
      "To analyze a memory dump from an infected workstation to assess malware impact.",
      "To negotiate a lower software licensing price with an external operating system vendor.",
      "To design an architectural blueprint for a new physical banking branch building.",
      "To calculate annual employee pension contributions for the human resources division."
    ],
    "answer": 0,
    "explanation_vi": "Phần mở đầu 'Executive Summary' nêu rõ: 'A physical memory dump was captured from accounting workstation WS-ACC-402... to analyze an injected dynamic link library' -> Mục đích chính là phân tích bản trích xuất bộ nhớ từ máy trạm nhiễm độc để đánh giá tác động của mã độc.",
    "trap": "Các phương án không liên quan như đàm phán giá phần mềm (B), thiết kế kiến trúc tòa nhà (C), hay tính lương hưu (D).",
    "examTip": "Câu hỏi mục đích văn bản (Primary purpose) trong báo cáo kỹ thuật thường nằm ở đoạn 'Executive Summary'.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Gist / Purpose",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "carving",
        "ipa": "/ˈkɑː.vɪŋ/",
        "pos": "n",
        "meaning": "kỹ thuật bóc tách dữ liệu thô trong pháp y số"
      },
      {
        "word": "injected",
        "ipa": "/ɪnˈdʒek.tɪd/",
        "pos": "adj",
        "meaning": "bị tiêm nhiễm vào quy trình khác"
      }
    ]
  },
  {
    "id": "c2-46",
    "chapter": 2,
    "part": 7,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "(Continuing Forensics Report Review)",
    "dialogue_vi": "(Tiếp tục rà soát Báo cáo Pháp y)",
    "situation_vi": "Tìm hiểu phương thức mã độc duy trì sự tồn tại trong hệ thống.",
    "passage": "(Tham khảo văn bản Báo cáo Pháp y ở câu c2-45)",
    "stem": "How did the malware maintain persistence on the infected system?",
    "choices": [
      "By creating a scheduled task disguised with an innocent system name.",
      "By physically altering the computer's central processing unit.",
      "By sending paper letters to bank customers through the post office.",
      "By erasing all operating system files permanently."
    ],
    "answer": 0,
    "explanation_vi": "Mục 2 'Persistence Mechanism' chỉ rõ: 'The malware established a hidden scheduled task disguised as WindowsFontCacheOptimizer' -> Tạo một tác vụ định thời ngụy trang dưới tên hệ thống vô hại.",
    "trap": "Các phương án vô lý như thay đổi CPU phần cứng (B) hay gửi thư bưu điện (C).",
    "examTip": "Tìm kiếm từ khóa 'Persistence Mechanism' trong văn bản để xác định đáp án ngay lập tức.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "persistence",
        "ipa": "/pəˈsɪs.təns/",
        "pos": "n",
        "meaning": "sự duy trì tồn tại lâu dài"
      },
      {
        "word": "disguised",
        "ipa": "/dɪsˈɡaɪzd/",
        "pos": "adj",
        "meaning": "được ngụy trang, che giấu thân phận"
      }
    ]
  },
  {
    "id": "c2-47",
    "chapter": 2,
    "part": 7,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "(Continuing Forensics Report Review)",
    "dialogue_vi": "(Tiếp tục rà soát Báo cáo Pháp y)",
    "situation_vi": "Xác minh thông tin về mức độ thiệt hại dữ liệu khách hàng.",
    "passage": "(Tham khảo văn bản Báo cáo Pháp y ở câu c2-45)",
    "stem": "What does the report confirm regarding customer banking data?",
    "choices": [
      "No customer records were encrypted or stolen by the malware.",
      "All customer financial records were permanently lost.",
      "The bank paid five thousand dollars in bitcoin to recover files.",
      "Customer data was sold to an overseas marketing agency."
    ],
    "answer": 0,
    "explanation_vi": "Mục 'Data Compromise' khẳng định rõ ràng: 'Zero client banking records were encrypted or exfiltrated' -> Không có bất kỳ dữ liệu ngân hàng nào của khách hàng bị mã hóa hay đánh cắp.",
    "trap": "Bẫy mất hết dữ liệu (B) hoặc trả tiền chuộc bitcoin (C).",
    "examTip": "Chú ý từ 'Zero' đồng nghĩa với 'No client banking records were encrypted or stolen'.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "halted",
        "ipa": "/hɔːl.tɪd/",
        "pos": "adj",
        "meaning": "đã bị ngăn chặn, tạm dừng"
      },
      {
        "word": "reconnaissance",
        "ipa": "/rɪˈkɒn.ɪ.səns/",
        "pos": "n",
        "meaning": "giai đoạn trinh sát thăm dò"
      }
    ]
  },
  {
    "id": "c2-48",
    "chapter": 2,
    "part": 7,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "(Continuing Forensics Report Review)",
    "dialogue_vi": "(Tiếp tục rà soát Báo cáo Pháp y)",
    "situation_vi": "Xác định một trong những khuyến nghị của Sarah.",
    "passage": "(Tham khảo văn bản Báo cáo Pháp y ở câu c2-45)",
    "stem": "Which of the following actions is recommended by Sarah Lin?",
    "choices": [
      "Providing refresher training on detecting malicious macro-enabled spreadsheets.",
      "Purchasing brand-new computers for the entire accounting department.",
      "Closing all bank branches nationwide for three consecutive business days.",
      "Terminating the employment contract of the workstation user immediately."
    ],
    "answer": 0,
    "explanation_vi": "Khuyến nghị số 3 (Recommendations 3) nêu: 'Conduct an educational refresher on recognizing deceptive macro-enabled spreadsheets' -> Tổ chức khóa bồi dưỡng nhận diện bảng tính chứa macro độc hại.",
    "trap": "Các phương án cực đoan không có trong bài như sa thải nhân viên (D) hay đóng cửa ngân hàng 3 ngày (C).",
    "examTip": "Kiểm tra kỹ phần 'Recommendations' và đối chiếu các từ khóa tương ứng.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Recommendations",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "refresher",
        "ipa": "/rɪˈfreʃ.ər/",
        "pos": "n",
        "meaning": "khóa học ôn tập bồi dưỡng kiến thức"
      },
      {
        "word": "macro-enabled",
        "ipa": "/ˈmæk.rəʊ ɪˈneɪ.bəld/",
        "pos": "adj",
        "meaning": "có kích hoạt lệnh tự động macro"
      }
    ]
  }
];
