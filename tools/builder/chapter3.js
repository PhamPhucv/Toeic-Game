/**
 * CHAPTER 3 QUESTIONS (54 câu hỏi hoàn chỉnh)
 * Bao gồm các Part 1, 2, 3, 4, 5, 6, 7 chuẩn ETS TOEIC & InfoSec SOC
 */
module.exports = [
  {
    "id": "c3-01",
    "chapter": 3,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "The threat intelligence feed just confirmed that an unpatched Zero-Day vulnerability in our web framework is being actively exploited.",
    "dialogue_vi": "Kênh dữ liệu tình báo mối đe dọa vừa xác nhận một lỗ hổng Zero-Day chưa có bản vá trong khung web của chúng ta đang bị khai thác tích cực.",
    "situation_vi": "06:00 - Dave phát hiện kẻ tấn công đang nhắm vào lỗ hổng trong cổng thanh toán trực tuyến.",
    "stem": "Software developers must _______ inspect the web application code to locate the unpatched vulnerability.",
    "choices": [
      "thoroughly",
      "thorough",
      "thoroughness",
      "more thorough"
    ],
    "answer": 0,
    "explanation_vi": "Đứng giữa trợ động từ khuyết thiếu 'must' và động từ chính 'inspect' cần một phó từ (adverb) đuôi -ly -> chọn 'thoroughly' (kiểm tra một cách kỹ lưỡng, cặn kẽ).",
    "trap": "Bẫy tính từ 'thorough' hoặc danh từ 'thoroughness'.",
    "examTip": "Vị trí phó từ kinh điển: [Modal verb + ADV + V(nguyên mẫu)] (must thoroughly inspect).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Adverb",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "thoroughly",
        "ipa": "/ˈθʌr.ə.li/",
        "pos": "adv",
        "meaning": "một cách kỹ lưỡng, thấu đáo"
      },
      {
        "word": "inspect",
        "ipa": "/ɪnˈspekt/",
        "pos": "v",
        "meaning": "thanh tra, kiểm tra"
      }
    ]
  },
  {
    "id": "c3-02",
    "chapter": 3,
    "part": 2,
    "speaker": "Sarah (Threat Hunter)",
    "dialogue_en": "Sarah asks when the core banking server patch will be applied.",
    "dialogue_vi": "Sarah hỏi khi nào bản vá máy chủ ngân hàng cốt lõi sẽ được áp dụng.",
    "situation_vi": "06:15 - Sarah hỏi về thời điểm bảo trì khẩn cấp để vá lỗ hổng Zero-Day.",
    "stem": "When is the emergency zero-day patch scheduled to be deployed?",
    "audioText": "When is the emergency zero-day patch scheduled to be deployed?",
    "choices": [
      "During the scheduled maintenance window at 7:00 AM.",
      "Yes, the patch is completely free.",
      "Because the software vendor called us."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi bắt đầu bằng 'When' (Khi nào) hỏi mốc thời gian -> (A) 'During the scheduled maintenance window at 7:00 AM' (Trong khung giờ bảo trì dự kiến lúc 7 giờ sáng) là câu trả lời trực tiếp chính xác.",
    "trap": "Bẫy Yes/No đối với câu hỏi Wh- (B), và bẫy trả lời lý do 'Because' cho câu hỏi 'When' (C).",
    "examTip": "Câu hỏi 'When' -> Tìm câu trả lời có mốc thời gian cụ thể (During the window at 7:00 AM, Next Monday, In two hours).",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Scheduling",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "maintenance",
        "ipa": "/ˈmeɪn.tən.əns/",
        "pos": "n",
        "meaning": "hoạt động bảo trì"
      },
      {
        "word": "window",
        "ipa": "/ˈwɪn.dəʊ/",
        "pos": "n",
        "meaning": "khung thời gian (kỹ thuật)"
      }
    ]
  },
  {
    "id": "c3-03",
    "chapter": 3,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Any compromised digital certificates must be permanently invalidated across all banking portals.",
    "dialogue_vi": "Bất kỳ chứng chỉ số nào bị lộ đều phải bị hủy bỏ vĩnh viễn trên mọi cổng thông tin ngân hàng.",
    "situation_vi": "06:30 - Dave chỉ đạo thu hồi và cấp lại chứng chỉ bảo mật mã hóa SSL/TLS.",
    "stem": "All compromised cryptographic keys must _______ immediately to prevent unauthorized decryption.",
    "choices": [
      "be revoked",
      "revoke",
      "revoking",
      "have revoked"
    ],
    "answer": 0,
    "explanation_vi": "Chủ ngữ là vật: 'cryptographic keys' (các khóa mật mã). Đứng sau động từ khuyết thiếu 'must' nên cần thể bị động: 'must be revoked' (phải bị thu hồi).",
    "trap": "Bẫy thể chủ động 'revoke' hoặc 'have revoked'.",
    "examTip": "Chủ ngữ chỉ vật (cryptographic keys) + Sau chỗ trống không có tân ngữ -> Chọn thể Bị động [be + V3/ed].",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Passive Voice",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "cryptographic",
        "ipa": "/ˌkrɪp.təˈɡræf.ɪk/",
        "pos": "adj",
        "meaning": "thuộc về mật mã học"
      },
      {
        "word": "revoke",
        "ipa": "/rɪˈvəʊk/",
        "pos": "v",
        "meaning": "thu hồi, hủy bỏ"
      }
    ]
  },
  {
    "id": "c3-04",
    "chapter": 3,
    "part": 6,
    "speaker": "AEGIS AI (Token Directive)",
    "dialogue_en": "MEMORANDUM: MANDATORY HARDWARE TOKEN MIGRATION",
    "dialogue_vi": "BẢN GHI NHỚ: BẮT BUỘC CHUYỂN ĐỔI SANG TOKEN PHẦN CỨNG",
    "situation_vi": "06:45 - CISO ban hành thông báo bắt buộc chuyển đổi phương thức xác thực phần cứng.",
    "passage": "MEMORANDUM\nTO: All Systems Engineering Staff\nFROM: Chief Information Security Office\nDATE: November 10, 06:45 AM\nSUBJECT: Mandatory Security Token Migration\n\nAs part of our continuous commitment to safeguarding internal assets, NovaBank is transitioning to hardware-based cryptographic keys. Beginning next Monday, the legacy mobile verification codes will no longer be _______ [1] for accessing production databases. Employees must collect their physical security tokens from the IT Operations Center on the 3rd floor _______ [2] Friday, November 14. Before picking up your token, please complete the brief online hardware registration form available on the employee intranet. _______ [3], the authentication system will automatically revoke any legacy access keys that remain unverified after the cut-off date. _______ [4]. We appreciate your cooperation in maintaining an impenetrable corporate network perimeter.",
    "stem": "Select the best answer for blank [1]:",
    "choices": [
      "accepted",
      "acceptance",
      "accept",
      "acceptably"
    ],
    "answer": 0,
    "explanation_vi": "Đứng sau cụm 'will no longer be' cần một quá khứ phân từ/tính từ ở thể bị động -> 'accepted' (sẽ không còn được chấp nhận nữa).",
    "trap": "Bẫy danh từ 'acceptance' hoặc động từ nguyên mẫu 'accept'.",
    "examTip": "Cấu trúc bị động phủ định: [will no longer be + V3/ed] (will no longer be accepted).",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Passive Participle",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "legacy",
        "ipa": "/ˈleɡ.ə.si/",
        "pos": "adj",
        "meaning": "kế thừa, cũ kỹ (công nghệ cũ)"
      },
      {
        "word": "accepted",
        "ipa": "/əkˈsep.tɪd/",
        "pos": "adj",
        "meaning": "được chấp thuận"
      }
    ]
  },
  {
    "id": "c3-05",
    "chapter": 3,
    "part": 6,
    "speaker": "AEGIS AI (Token Directive)",
    "dialogue_en": "Continuing blank [2] in Token Migration Memorandum.",
    "dialogue_vi": "Tiếp tục xem xét chỗ trống [2] trong Bản ghi nhớ chuyển đổi Token.",
    "situation_vi": "Chọn giới từ chỉ thời hạn chót nhận thiết bị xác thực phần cứng.",
    "passage": "(Tham khảo văn bản MEMORANDUM ở trên)",
    "stem": "Select the best answer for blank [2]:",
    "choices": [
      "by",
      "at",
      "through",
      "during"
    ],
    "answer": 0,
    "explanation_vi": "Giới từ 'by' kết hợp với một mốc thời hạn (Friday, November 14) để chỉ thời điểm muộn nhất phải hoàn thành ('muộn nhất là trước thứ Sáu, ngày 14 tháng 11').",
    "trap": "Bẫy 'at' (chỉ giờ giấc cụ thể như at 5 PM), 'during' (khoảng thời gian diễn ra sự kiện).",
    "examTip": "Quy tắc giới từ thời gian TOEIC: [BY + Mốc thời gian] = Hành động hoàn thành muộn nhất tại thời điểm đó (deadline).",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Preposition of Time",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "by",
        "ipa": "/baɪ/",
        "pos": "prep",
        "meaning": "muộn nhất là vào lúc (thời hạn)"
      },
      {
        "word": "intranet",
        "ipa": "/ˈɪn.trə.net/",
        "pos": "n",
        "meaning": "mạng nội bộ doanh nghiệp"
      }
    ]
  },
  {
    "id": "c3-06",
    "chapter": 3,
    "part": 6,
    "speaker": "AEGIS AI (Token Directive)",
    "dialogue_en": "Continuing blank [3] in Token Migration Memorandum.",
    "dialogue_vi": "Tiếp tục xem xét chỗ trống [3] trong Bản ghi nhớ chuyển đổi Token.",
    "situation_vi": "Chọn trạng từ liên kết câu mang ý nghĩa bổ sung cảnh báo.",
    "passage": "(Tham khảo văn bản MEMORANDUM ở trên)",
    "stem": "Select the best answer for blank [3]:",
    "choices": [
      "Furthermore",
      "Nevertheless",
      "Otherwise",
      "Meanwhile"
    ],
    "answer": 0,
    "explanation_vi": "Trạng từ liên kết 'Furthermore' (Hơn nữa / Thêm vào đó) dùng để bổ sung thông tin nghiêm ngặt tiếp theo về việc hệ thống sẽ tự động thu hồi khóa truy cập chưa xác thực.",
    "trap": "Bẫy từ chỉ sự nhượng bộ 'Nevertheless' (Tuy nhiên) hoặc điều kiện phủ định 'Otherwise' (Nếu không thì).",
    "examTip": "Trạng từ liên kết đầu câu đứng trước dấu phẩy: 'Furthermore / In addition / Moreover,' dùng để bổ sung luận điểm cùng chiều.",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Transitions",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "furthermore",
        "ipa": "/ˌfɜː.ðəˈmɔːr/",
        "pos": "adv",
        "meaning": "hơn nữa, ngoài ra"
      },
      {
        "word": "cut-off",
        "ipa": "/ˈkʌt.ɒf/",
        "pos": "adj",
        "meaning": "mốc giới hạn chót"
      }
    ]
  },
  {
    "id": "c3-07",
    "chapter": 3,
    "part": 6,
    "speaker": "AEGIS AI (Token Directive)",
    "dialogue_en": "Select the sentence that best fits the contextual flow for blank [4].",
    "dialogue_vi": "Chọn câu phù hợp nhất với mạch văn tại chỗ trống [4].",
    "situation_vi": "Chọn câu thông báo đội ngũ hỗ trợ kỹ thuật sẽ túc trực tại sảnh để giúp nhân viên cài đặt.",
    "passage": "(Tham khảo văn bản MEMORANDUM ở trên)",
    "stem": "Select the best sentence to fill blank [4]:",
    "choices": [
      "Technical support specialists will be stationed in the lobby to assist with initial setup.",
      "The cafeteria menu will be updated to reflect seasonal dietary preferences.",
      "All incoming postal shipments must be inspected by customs authorities.",
      "Corporate holiday schedules will be distributed during next month's meeting."
    ],
    "answer": 0,
    "explanation_vi": "Phương án (A) 'Technical support specialists will be stationed in the lobby to assist with initial setup' (Các chuyên viên hỗ trợ kỹ thuật sẽ túc trực tại sảnh để hỗ trợ cài đặt ban đầu) là câu kết nối logic và hữu ích nhất cho quy trình cấp phát token.",
    "trap": "Các phương án B, C, D nói về thực đơn căng-tin, hải quan bưu điện, lịch nghỉ lễ.",
    "examTip": "Khi văn bản công sở triển khai công nghệ mới (token, phần mềm mới), câu điền đoạn văn thường là cam kết cử nhân viên kỹ thuật hỗ trợ nhân viên cài đặt.",
    "tags": {
      "part": "Part 6",
      "category": "Reading",
      "topic": "Context",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "stationed",
        "ipa": "/ˈsteɪ.ʃənd/",
        "pos": "adj",
        "meaning": "được bố trí túc trực tại chỗ"
      },
      {
        "word": "initial",
        "ipa": "/ɪˈnɪʃ.əl/",
        "pos": "adj",
        "meaning": "ban đầu"
      }
    ]
  },
  {
    "id": "c3-08",
    "chapter": 3,
    "part": 2,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave inquires about the external compliance audit report.",
    "dialogue_vi": "Dave hỏi về báo cáo kiểm toán tuân thủ bảo mật bên ngoài.",
    "situation_vi": "07:05 - Dave hỏi bạn ai chịu trách nhiệm làm việc với đoàn thanh tra an ninh mạng.",
    "stem": "Who will coordinate the external cybersecurity compliance audit?",
    "audioText": "Who will coordinate the external cybersecurity compliance audit?",
    "choices": [
      "Mr. Bennett from the regulatory governance office.",
      "Yes, the audit was extremely strict.",
      "At the downtown international convention center."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi bắt đầu bằng 'Who' (Ai sẽ điều phối) -> Phương án (A) chỉ rõ danh tính người phụ trách: 'Mr. Bennett from the regulatory governance office'.",
    "trap": "Bẫy Yes/No cho câu hỏi 'Who' (B), và bẫy trả lời địa điểm hội nghị (C).",
    "examTip": "Câu hỏi 'Who will coordinate / Who is in charge' -> Tìm phương án nhắc đến chức danh hoặc nhân sự cụ thể (Mr. Bennett, The team leader).",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Personnel Q&A",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "coordinate",
        "ipa": "/kəʊˈɔː.dɪ.neɪt/",
        "pos": "v",
        "meaning": "điều phối, phối hợp"
      },
      {
        "word": "governance",
        "ipa": "/ˈɡʌv.ən.əns/",
        "pos": "n",
        "meaning": "công tác quản trị doanh nghiệp"
      }
    ]
  },
  {
    "id": "c3-09",
    "chapter": 3,
    "part": 3,
    "speaker": "Dave & Vendor Director (Vendor Call)",
    "dialogue_en": "[Dave]: Good morning, Ms. Vance. We discovered that your cloud storage software contains an unpatched zero-day vulnerability.\n[Ms. Vance]: We are fully aware of the issue, Dave. Our security engineering team has been working through the night to compile an emergency hotfix.\n[Dave]: That's critical, but our banking regulators require compliance proof. When will the official patch be available for production deployment?\n[Ms. Vance]: We are running final regression tests now. The certified patch will be released to your repository in exactly two hours.",
    "dialogue_vi": "[Dave]: Chào buổi sáng cô Vance. Chúng tôi phát hiện phần mềm lưu trữ đám mây của bên cô có chứa lỗ hổng zero-day chưa được vá.\n[Ms. Vance]: Chúng tôi đã nắm rất rõ vấn đề này, Dave. Đội ngũ kỹ thuật bảo mật của chúng tôi đã làm việc xuyên đêm để biên dịch bản vá nóng khẩn cấp.\n[Dave]: Điều đó rất quan trọng, nhưng các cơ quan quản lý ngân hàng yêu cầu bằng chứng tuân thủ. Khi nào thì bản vá chính thức sẵn sàng để triển khai vào hệ thống thật?\n[Ms. Vance]: Chúng tôi đang chạy các bài kiểm thử hồi quy cuối cùng. Bản vá có chứng nhận sẽ được phát hành vào kho lưu trữ của các anh trong đúng hai giờ nữa.",
    "situation_vi": "07:20 - Nghe cuộc gọi khẩn cấp giữa Dave và Giám đốc kỹ thuật của nhà cung cấp phần mềm đám mây.",
    "stem": "What problem does the man bring to the woman's attention?",
    "audioText": "Dave: Good morning, Ms. Vance. We discovered that your cloud storage software contains an unpatched zero-day vulnerability. Ms. Vance: We are fully aware of the issue, Dave. Our security engineering team has been working through the night to compile an emergency hotfix. Dave: That's critical, but our banking regulators require compliance proof. When will the official patch be available for production deployment? Ms. Vance: We are running final regression tests now. The certified patch will be released to your repository in exactly two hours.",
    "choices": [
      "A zero-day security vulnerability in the vendor's cloud software",
      "An unexpected bill for cloud hosting server fees",
      "A loss of physical internet cables in the data center",
      "A scheduling conflict for the annual corporate dinner"
    ],
    "answer": 0,
    "explanation_vi": "Dave nêu ngay câu đầu tiên: 'your cloud storage software contains an unpatched zero-day vulnerability' -> Lỗ hổng zero-day trong phần mềm đám mây của nhà cung cấp.",
    "trap": "Bẫy hóa đơn phí máy chủ hoặc đứt dây cáp internet.",
    "examTip": "Part 3: Câu hỏi mở đầu luôn nhắm vào câu thoại thứ nhất của người khởi xướng cuộc trò chuyện.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Vulnerability Discussion",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "hotfix",
        "ipa": "/ˈhɒt.fɪks/",
        "pos": "n",
        "meaning": "bản sửa lỗi nóng khẩn cấp"
      },
      {
        "word": "regulator",
        "ipa": "/ˈreɡ.jə.leɪ.tər/",
        "pos": "n",
        "meaning": "cơ quan quản lý nhà nước"
      }
    ]
  },
  {
    "id": "c3-10",
    "chapter": 3,
    "part": 3,
    "speaker": "Dave & Vendor Director (Vendor Call)",
    "dialogue_en": "Reviewing what the vendor engineering team has been doing.",
    "dialogue_vi": "Xem đội ngũ kỹ thuật của bên cung cấp đã làm gì.",
    "situation_vi": "Câu hỏi 2 bài nghe Part 3: Đội ngũ kỹ thuật của nhà cung cấp đã làm gì suốt đêm?",
    "stem": "What has the woman's engineering team been doing overnight?",
    "audioText": "What has the woman's engineering team been doing overnight?",
    "choices": [
      "Working through the night to compile an emergency hotfix",
      "Drafting a new price quotation for upcoming contracts",
      "Moving corporate headquarters to a different city",
      "Interviewing candidates for marketing internship roles"
    ],
    "answer": 0,
    "explanation_vi": "Cô Vance nói: 'Our security engineering team has been working through the night to compile an emergency hotfix'.",
    "trap": "Bẫy phỏng vấn ứng viên marketing hoặc chuyển văn phòng.",
    "examTip": "Lắng nghe cụm 'working through the night to compile an emergency hotfix'.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Team Action",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "compile",
        "ipa": "/kəmˈpaɪl/",
        "pos": "v",
        "meaning": "biên dịch mã nguồn"
      },
      {
        "word": "emergency",
        "ipa": "/ɪˈmɜː.dʒən.si/",
        "pos": "n",
        "meaning": "tình huống khẩn cấp"
      }
    ]
  },
  {
    "id": "c3-11",
    "chapter": 3,
    "part": 3,
    "speaker": "Dave & Vendor Director (Vendor Call)",
    "dialogue_en": "Reviewing the delivery timeframe.",
    "dialogue_vi": "Xem thời gian bàn giao bản vá chính thức.",
    "situation_vi": "Câu hỏi 3 bài nghe Part 3: Khi nào bản vá sẽ được gửi đến kho lưu trữ của ngân hàng?",
    "stem": "When will the certified patch be released to NovaBank's repository?",
    "audioText": "When will the certified patch be released to NovaBank's repository?",
    "choices": [
      "In exactly two hours",
      "At the end of next week",
      "After three business months",
      "By tomorrow evening"
    ],
    "answer": 0,
    "explanation_vi": "Cô Vance kết luận ở câu cuối: 'The certified patch will be released to your repository in exactly two hours' -> Trong đúng 2 giờ nữa.",
    "trap": "Bẫy cuối tuần sau hoặc ngày mai.",
    "examTip": "Số đếm chỉ thời gian trong câu cuối Part 3: 'in exactly two hours' chính là chìa khóa đáp án.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Timeframe",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "repository",
        "ipa": "/rɪˈpɒz.ɪ.tər.i/",
        "pos": "n",
        "meaning": "kho lưu trữ mã nguồn / phần mềm"
      },
      {
        "word": "regression",
        "ipa": "/rɪˈɡreʃ.ən/",
        "pos": "n",
        "meaning": "kiểm thử hồi quy"
      }
    ]
  },
  {
    "id": "c3-12",
    "chapter": 3,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "All personal mobile devices connected to NovaBank Wi-Fi must comply with our strict endpoint security standard.",
    "dialogue_vi": "Mọi thiết bị di động cá nhân kết nối vào Wi-Fi NovaBank đều phải tuân thủ chuẩn an toàn điểm cuối nghiêm ngặt.",
    "situation_vi": "07:35 - Kiểm tra thiết bị của nhân viên theo chính sách Bring Your Own Device (BYOD).",
    "stem": "All employee smartphones connected to the internal network must _______ with the corporate mobile device management policy.",
    "choices": [
      "comply",
      "adhere",
      "conform",
      "obey"
    ],
    "answer": 0,
    "explanation_vi": "Cụm động từ cố định: 'comply with' có nghĩa là tuân thủ theo quy định/chính sách. Chú ý: 'comply' đi với giới từ 'with', còn 'adhere' đi với 'to', 'conform' đi với 'to'.",
    "trap": "Bẫy chọn 'adhere' (vì adhere cần đi với TO, không đi với with), hoặc 'obey' (là ngoại động từ, không có giới từ).",
    "examTip": "Ghi nhớ cặp đôi bất hủ TOEIC: [comply WITH = adhere TO = abide BY]. Thấy 'with' chọn ngay 'comply'.",
    "tags": {
      "part": "Part 5",
      "category": "Vocabulary",
      "topic": "Collocation",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "comply with",
        "ipa": "/kəmˈplaɪ wɪð/",
        "pos": "v",
        "meaning": "tuân thủ theo"
      },
      {
        "word": "endpoint",
        "ipa": "/ˈend.pɔɪnt/",
        "pos": "n",
        "meaning": "thiết bị đầu cuối"
      }
    ]
  },
  {
    "id": "c3-13",
    "chapter": 3,
    "part": 7,
    "speaker": "Dr. Helen Kang (CISO)",
    "dialogue_en": "POLICY BULLETIN: BRING YOUR OWN DEVICE (BYOD) CYBERSECURITY PROTOCOL",
    "dialogue_vi": "BẢN TIN CHÍNH SÁCH: NGHỊ ĐỊNH THƯ AN TOÀN THÔNG TIN THIẾT BỊ CÁ NHÂN (BYOD)",
    "situation_vi": "07:50 - Rà soát văn bản chính sách BYOD của ngân hàng NovaBank.",
    "passage": "NOVABANK POLICY BULLETIN: BRING YOUR OWN DEVICE (BYOD)\nEffective Date: November 10\nTarget Audience: All Staff Connecting Personal Mobile Devices to Corporate Networks\n\n1. Device Registration and Compliance\nPrior to accessing corporate e-mail, intranet databases, or communication channels from personal smartphones, laptops, or tablets, employees must enroll the device in the NovaBank Mobile Device Management (MDM) portal. The MDM agent verifies that operating system patches are current and enforces a mandatory six-digit alphanumeric screen lock.\n\n2. Separation of Data and Encryption\nAll corporate correspondence, files, and proprietary client materials stored locally on enrolled devices are partitioned within an encrypted container. Corporate data cannot be copied to personal cloud storage services or unapproved messaging applications.\n\n3. Lost or Stolen Devices\nIn the event that an enrolled device is lost or stolen, the employee must contact the Security Operations Center (Ext. 5500) within two hours. The security team reserves the authority to remotely erase corporate data from the device without affecting the employee's personal photographs, contacts, or private media files.",
    "stem": "What is the primary purpose of the policy bulletin?",
    "choices": [
      "To outline security rules for personal devices used for work",
      "To announce the replacement of corporate laptop computers",
      "To describe how to apply for a company-subsidized smartphone",
      "To provide instructions for installing personal social media apps"
    ],
    "answer": 0,
    "explanation_vi": "Đoạn mở đầu và toàn bộ văn bản nêu rõ: 'outline security rules for personal devices used for work' (quy định các quy tắc bảo mật đối với thiết bị cá nhân dùng cho công việc).",
    "trap": "Bẫy trợ cấp mua điện thoại mới hay cài đặt mạng xã hội.",
    "examTip": "Câu hỏi mục đích Part 7: Đọc kỹ tiêu đề và phần đầu của văn bản (Bring Your Own Device).",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Main Idea",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "portal",
        "ipa": "/ˈpɔː.təl/",
        "pos": "n",
        "meaning": "cổng thông tin điện tử"
      },
      {
        "word": "alphanumeric",
        "ipa": "/ˌæl.fə.njuːˈmer.ɪk/",
        "pos": "adj",
        "meaning": "gồm cả chữ cái và chữ số"
      }
    ]
  },
  {
    "id": "c3-14",
    "chapter": 3,
    "part": 7,
    "speaker": "Dr. Helen Kang (CISO)",
    "dialogue_en": "Continuing review of screen lock requirements.",
    "dialogue_vi": "Tiếp tục xem yêu cầu về khóa màn hình thiết bị.",
    "situation_vi": "Câu hỏi 2 bài đọc Part 7: Yêu cầu bắt buộc khi đăng ký thiết bị vào hệ thống MDM.",
    "passage": "(Tham khảo văn bản NOVABANK POLICY BULLETIN ở trên)",
    "stem": "What security requirement must a personal device meet during enrollment?",
    "choices": [
      "It must enforce a mandatory six-digit alphanumeric screen lock.",
      "It must be manufactured within the last six calendar months.",
      "It must have at least one terabyte of available storage space.",
      "It must be equipped with physical biometric thumbprint sensors."
    ],
    "answer": 0,
    "explanation_vi": "Mục 1 ghi rõ: 'enforces a mandatory six-digit alphanumeric screen lock' (bắt buộc cài khóa màn hình 6 ký tự gồm chữ và số).",
    "trap": "Bẫy tiêu chí phần cứng không có trong bài (bộ nhớ 1TB, sản xuất trong 6 tháng).",
    "examTip": "Tìm cụm từ khóa 'screen lock' trong Mục 1 của bài đọc.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "mandatory",
        "ipa": "/ˈmæn.də.tər.i/",
        "pos": "adj",
        "meaning": "bắt buộc theo luật/quy định"
      },
      {
        "word": "partitioned",
        "ipa": "/pɑːˈtɪʃ.ənd/",
        "pos": "adj",
        "meaning": "được phân vùng tách biệt"
      }
    ]
  },
  {
    "id": "c3-15",
    "chapter": 3,
    "part": 7,
    "speaker": "Dr. Helen Kang (CISO)",
    "dialogue_en": "Reviewing protocol for lost devices.",
    "dialogue_vi": "Xem quy trình xử lý khi thiết bị bị mất.",
    "situation_vi": "Câu hỏi 3 bài đọc Part 7: Nhân viên phải làm gì nếu điện thoại bị mất hoặc bị đánh cắp?",
    "passage": "(Tham khảo văn bản NOVABANK POLICY BULLETIN ở trên)",
    "stem": "What must an employee do if an enrolled mobile phone is lost?",
    "choices": [
      "Contact the Security Operations Center within two hours",
      "File a formal insurance claim with an outside provider",
      "Submit an expedited purchase order for a new company laptop",
      "Change all corporate passwords from a coworker's desktop"
    ],
    "answer": 0,
    "explanation_vi": "Mục 3 ghi: 'the employee must contact the Security Operations Center (Ext. 5500) within two hours' -> Liên hệ SOC trong vòng 2 giờ.",
    "trap": "Bẫy nộp bảo hiểm hoặc tự ý đổi mật khẩu trên máy đồng nghiệp.",
    "examTip": "Tìm từ khóa 'lost or stolen' ở Mục 3.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "remotely",
        "ipa": "/rɪˈməʊt.li/",
        "pos": "adv",
        "meaning": "từ xa"
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
    "id": "c3-16",
    "chapter": 3,
    "isBoss": true,
    "part": 5,
    "speaker": "ZERO-DAY EXPLOIT PAYLOAD (Boss 3)",
    "dialogue_en": "CRITICAL ALERT: Zero-day buffer overflow exploit attempting remote code execution!",
    "dialogue_vi": "CẢNH BÁO NGUY CẤP: Mã khai thác tràn bộ đệm Zero-day đang cố thực thi mã từ xa!",
    "situation_vi": "[TRÙM 3 - CÂU 1/5] Kích hoạt cơ chế bảo vệ chống tràn bộ đệm (DEP) trên máy chủ web!",
    "stem": "The emergency patch must be installed _______ to prevent cybercriminals from exploiting the server flaw.",
    "choices": [
      "expeditiously",
      "expeditious",
      "expedition",
      "expedite"
    ],
    "answer": 0,
    "explanation_vi": "Đứng sau cụm động từ bị động 'must be installed' cần một phó từ (adverb) đuôi -ly để chỉ cách thức -> chọn 'expeditiously' (một cách khẩn trương, mau lẹ).",
    "trap": "Bẫy tính từ 'expeditious' hoặc danh từ 'expedition' (chuyến thám hiểm).",
    "examTip": "[to be + V3/ed + ADV] (must be installed expeditiously). 'Expeditiously' là từ vựng 750+ TOEIC mang nghĩa 'nhanh chóng và hiệu quả'.",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Adverb",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "expeditiously",
        "ipa": "/ˌek.spəˈdɪʃ.əs.li/",
        "pos": "adv",
        "meaning": "một cách khẩn trương, mau lẹ"
      },
      {
        "word": "flaw",
        "ipa": "/flɔː/",
        "pos": "n",
        "meaning": "khiếm khuyết, lỗ hổng"
      }
    ]
  },
  {
    "id": "c3-17",
    "chapter": 3,
    "isBoss": true,
    "part": 2,
    "speaker": "ZERO-DAY EXPLOIT PAYLOAD (Boss 3)",
    "dialogue_en": "Audio query regarding cryptographic certificate revocation!",
    "dialogue_vi": "Câu hỏi âm thanh về việc thu hồi chứng chỉ số bảo mật!",
    "situation_vi": "[TRÙM 3 - CÂU 2/5] Dave hỏi bạn đã phát lệnh thu hồi chứng chỉ số bị lộ chưa.",
    "stem": "Have you submitted the certificate revocation list to the public registry?",
    "audioText": "Have you submitted the certificate revocation list to the public registry?",
    "choices": [
      "Yes, the updated list was uploaded ten minutes ago.",
      "The certificate is framed on the office wall.",
      "In the public park across the street."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi Yes/No 'Have you submitted...?' -> (A) 'Yes, the updated list was uploaded ten minutes ago' (Có, danh sách cập nhật đã được tải lên cách đây 10 phút) là câu trả lời trực tiếp chính xác.",
    "trap": "Bẫy nghĩa đen của 'certificate' (bằng khen đóng khung trên tường - B) và bẫy 'public park' từ chữ 'public' (C).",
    "examTip": "Bẫy lặp từ và bẫy nghĩa đen là đặc sản Part 2: 'certificate' ở đây là chứng chỉ số SSL, không phải giấy khen treo tường.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Verification",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "revocation",
        "ipa": "/ˌrev.əˈkeɪ.ʃən/",
        "pos": "n",
        "meaning": "sự thu hồi, bãi bỏ"
      },
      {
        "word": "registry",
        "ipa": "/ˈredʒ.ɪ.stri/",
        "pos": "n",
        "meaning": "sổ đăng ký, cơ quan cấp phát"
      }
    ]
  },
  {
    "id": "c3-18",
    "chapter": 3,
    "isBoss": true,
    "part": 5,
    "speaker": "ZERO-DAY EXPLOIT PAYLOAD (Boss 3)",
    "dialogue_en": "ALERT: Attacker attempting SQL injection bypass on customer balance queries!",
    "dialogue_vi": "BÁO ĐỘNG: Kẻ tấn công cố vượt qua bộ lọc bằng kỹ thuật SQL Injection!",
    "situation_vi": "[TRÙM 3 - CÂU 3/5] Áp dụng quy tắc lọc sạch toàn bộ dữ liệu đầu vào (Input Sanitization).",
    "stem": "Web application firewalls are programmed to reject queries containing _______ characters.",
    "choices": [
      "unauthorized",
      "unauthorization",
      "unauthorize",
      "unauthorizing"
    ],
    "answer": 0,
    "explanation_vi": "Đứng trước danh từ 'characters' (các ký tự) cần một tính từ (adjective) để bổ nghĩa -> chọn 'unauthorized' (trái phép, không được cấp quyền). 'unauthorized characters' = các ký tự trái phép.",
    "trap": "Bẫy danh từ 'unauthorization'.",
    "examTip": "Vị trí tính từ trước danh từ: [Tính từ + Danh từ] (unauthorized characters).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Adjective Modifier",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "unauthorized",
        "ipa": "/ʌnˈɔː.θər.aɪzd/",
        "pos": "adj",
        "meaning": "chưa được phép, trái phép"
      },
      {
        "word": "character",
        "ipa": "/ˈkær.ək.tər/",
        "pos": "n",
        "meaning": "ký tự máy tính"
      }
    ]
  },
  {
    "id": "c3-19",
    "chapter": 3,
    "isBoss": true,
    "part": 5,
    "speaker": "ZERO-DAY EXPLOIT PAYLOAD (Boss 3)",
    "dialogue_en": "ALERT: Memory corruption triggered by malformed HTTP request headers!",
    "dialogue_vi": "BÁO ĐỘNG: Lỗi tràn bộ nhớ do tiêu đề yêu cầu HTTP bị cố ý làm biến dạng!",
    "situation_vi": "[TRÙM 3 - CÂU 4/5] Triển khai bản vá nóng sửa đổi bộ phân tích tiêu đề yêu cầu web.",
    "stem": "Had the engineering department _______ the zero-day flaw earlier, the brief server outage would have been avoided entirely.",
    "choices": [
      "identified",
      "identifying",
      "identify",
      "identifies"
    ],
    "answer": 0,
    "explanation_vi": "Đảo ngữ câu điều kiện loại 3 (Inversion in Third Conditional): 'Had + S + V3/ed, S + would have + V3/ed' thay thế cho 'If the engineering department had identified...'.",
    "trap": "Bẫy chọn động từ nguyên mẫu 'identify' hoặc V-ing. Cấu trúc quá khứ hoàn thành với 'Had' bắt buộc đi với V3/ed.",
    "examTip": "Công thức đảo ngữ điều kiện loại 3 điểm 750+ TOEIC: [HAD + S + V3/ED, S + WOULD HAVE + V3/ED].",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Conditional Inversion",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "outage",
        "ipa": "/ˈaʊ.tɪdʒ/",
        "pos": "n",
        "meaning": "sự ngừng hoạt động (nguồn điện/máy chủ)"
      },
      {
        "word": "entirely",
        "ipa": "/ɪnˈtaɪə.li/",
        "pos": "adv",
        "meaning": "hoàn toàn"
      }
    ]
  },
  {
    "id": "c3-20",
    "chapter": 3,
    "isBoss": true,
    "part": 5,
    "speaker": "ZERO-DAY EXPLOIT PAYLOAD (Boss 3)",
    "dialogue_en": "FINALE: Apply the certified vendor hotfix to seal the memory vulnerability forever!",
    "dialogue_vi": "ĐÒN KẾT LIỄU: Áp dụng bản vá nóng của nhà cung cấp để bịt kín lỗ hổng bộ nhớ vĩnh viễn!",
    "situation_vi": "[TRÙM 3 - CÂU 5/5] Hoàn tất triển khai bản vá zero-day bảo vệ toàn vẹn hệ thống ngân hàng!",
    "stem": "The executive committee expressed complete confidence _______ the SOC team's technical competence.",
    "choices": [
      "in",
      "on",
      "at",
      "with"
    ],
    "answer": 0,
    "explanation_vi": "Cụm danh từ cố định trong tiếng Anh thương mại: 'confidence in someone/something' có nghĩa là sự tin tưởng tuyệt đối vào năng lực của ai đó.",
    "trap": "Bẫy giới từ 'on' hoặc 'with' do dịch nghĩa tiếng Việt.",
    "examTip": "Cụm giới từ hay gặp: [confidence IN / faith IN / trust IN + Noun] (confidence in the SOC team).",
    "tags": {
      "part": "Part 5",
      "category": "Vocabulary",
      "topic": "Prepositional Collocation",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "competence",
        "ipa": "/ˈkɒm.pɪ.təns/",
        "pos": "n",
        "meaning": "năng lực chuyên môn giỏi"
      },
      {
        "word": "confidence",
        "ipa": "/ˈkɒn.fɪ.dəns/",
        "pos": "n",
        "meaning": "sự tự tin, lòng tin cậy"
      }
    ]
  },
  {
    "id": "c3-21",
    "chapter": 3,
    "part": 2,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave asks when the emergency security patch will be pushed to branch servers.",
    "dialogue_vi": "Dave hỏi thời điểm triển khai bản vá an ninh khẩn cấp đến các máy chủ chi nhánh.",
    "situation_vi": "06:05 - Đội kỹ thuật đang chuẩn bị cập nhật firmware bản vá Zero-Day.",
    "stem": "When will the zero-day security patch be deployed to the regional servers?",
    "audioText": "When will the zero-day security patch be deployed to the regional servers?",
    "choices": [
      "As soon as the test environment confirms stability, likely within thirty minutes.",
      "Yes, it is a very critical vulnerability.",
      "The regional server room is located in Da Nang."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi 'When' (Khi nào) -> (A) 'As soon as the test environment confirms stability, likely within thirty minutes' (Ngay khi môi trường thử nghiệm xác nhận tính ổn định, có thể trong vòng 30 phút tới) cung cấp mốc thời gian cụ thể.",
    "trap": "Bẫy Yes/No ở (B) và bẫy vị trí địa lý ở (C).",
    "examTip": "Cụm 'As soon as + mệnh đề' hoặc 'within + khoảng thời gian' là câu trả lời kinh điển cho câu hỏi When.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Deployment Schedule",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "deployed",
        "ipa": "/dɪˈplɔɪd/",
        "pos": "adj",
        "meaning": "được triển khai vào thực tế"
      },
      {
        "word": "stability",
        "ipa": "/stəˈbɪl.ə.ti/",
        "pos": "n",
        "meaning": "tính ổn định"
      }
    ]
  },
  {
    "id": "c3-22",
    "chapter": 3,
    "part": 2,
    "speaker": "Helen Kang (CISO)",
    "dialogue_en": "CISO Helen Kang asks who is coordinating the emergency vendor meeting.",
    "dialogue_vi": "CISO Helen Kang hỏi ai đang điều phối cuộc họp khẩn cấp với nhà cung cấp phần mềm.",
    "situation_vi": "06:20 - Cần làm việc trực tiếp với kỹ sư trưởng của đối tác cung cấp hệ điều hành.",
    "stem": "Who is coordinating the emergency meeting with the firewall vendor?",
    "audioText": "Who is coordinating the emergency meeting with the firewall vendor?",
    "choices": [
      "Alex Mercer from procurement is handling the arrangements.",
      "In the fifth-floor executive conference room.",
      "Because the warranty expires at the end of this month."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi 'Who' (Ai) -> (A) 'Alex Mercer from procurement is handling the arrangements' (Alex Mercer thuộc phòng mua sắm đang phụ trách việc sắp xếp) chỉ rõ người điều phối.",
    "trap": "Bẫy địa điểm (Where) ở (B) và bẫy lý do (Why) ở (C).",
    "examTip": "Câu hỏi Who luôn tìm người phụ trách, thường đi kèm tên riêng hoặc phòng ban (procurement, human resources, IT).",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Coordination",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "coordinate",
        "ipa": "/kəʊˈɔː.dɪ.neɪt/",
        "pos": "v",
        "meaning": "điều phối, sắp xếp"
      },
      {
        "word": "procurement",
        "ipa": "/prəˈkjʊə.mənt/",
        "pos": "n",
        "meaning": "phòng mua sắm trang thiết bị"
      }
    ]
  },
  {
    "id": "c3-23",
    "chapter": 3,
    "part": 2,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah asks which certificate authority issued the rogue SSL certificate.",
    "dialogue_vi": "Sarah hỏi tổ chức cấp chứng chỉ nào đã ký chứng thực cho chứng chỉ SSL giả mạo.",
    "situation_vi": "06:40 - Kẻ tấn công dùng chứng chỉ tự ký (self-signed) để đánh lừa cổng thanh toán.",
    "stem": "Which certificate authority signed this fraudulent security token?",
    "audioText": "Which certificate authority signed this fraudulent security token?",
    "choices": [
      "It appears to be a self-signed certificate with no valid root authority.",
      "Yes, digital certificates ensure cryptographic privacy.",
      "Thirty thousand dollars was transferred via wire."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi 'Which...' (Tổ chức nào) -> (A) 'It appears to be a self-signed certificate with no valid root authority' (Có vẻ là một chứng chỉ tự ký không có tổ chức chứng thực gốc hợp lệ) trả lời trực tiếp bản chất của chứng chỉ.",
    "trap": "Bẫy định nghĩa chung và Yes/No ở (B), bẫy số tiền chuyển khoản ở (C).",
    "examTip": "Câu hỏi 'Which' yêu cầu chọn đối tượng cụ thể hoặc làm rõ đặc tính của đối tượng được hỏi.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Certificates",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "fraudulent",
        "ipa": "/ˈfrɔː.dʒə.lənt/",
        "pos": "adj",
        "meaning": "gian lận, lừa đảo"
      },
      {
        "word": "self-signed",
        "ipa": "/ˌselfˈsaɪnd/",
        "pos": "adj",
        "meaning": "tự ký số, không qua trung tâm kiểm định"
      }
    ]
  },
  {
    "id": "c3-24",
    "chapter": 3,
    "part": 2,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave checks if the core router configuration has been backed up.",
    "dialogue_vi": "Dave kiểm tra xem cấu hình bộ định tuyến trung tâm đã được sao lưu chưa.",
    "situation_vi": "07:00 - Trước khi khởi động lại router, bắt buộc phải sao lưu cấu hình.",
    "stem": "Has the network engineer exported the current router configuration?",
    "audioText": "Has the network engineer exported the current router configuration?",
    "choices": [
      "Yes, a copy was saved to the encrypted administrative vault ten minutes ago.",
      "No, the router connects forty workstations together.",
      "Routers operate at the network layer of the architecture."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi dạng Yes/No với thì Hiện tại hoàn thành ('Has the network engineer exported...?') -> (A) 'Yes, a copy was saved to the encrypted administrative vault...' xác nhận đã sao lưu vào kho mã hóa 10 phút trước.",
    "trap": "Bẫy lặp từ 'router' ở (B) và (C) nhưng lạc sang câu trả lời kỹ thuật chung chung.",
    "examTip": "Câu hỏi Yes/No với 'Has/Have' thường xác nhận sự hoàn thành của hành động trong quá khứ gần.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Backup Verification",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "export",
        "ipa": "/ɪkˈspɔːt/",
        "pos": "v",
        "meaning": "xuất dữ liệu / tệp cấu hình"
      },
      {
        "word": "vault",
        "ipa": "/vɒlt/",
        "pos": "n",
        "meaning": "kho lưu trữ dữ liệu an toàn tối mật"
      }
    ]
  },
  {
    "id": "c3-25",
    "chapter": 3,
    "part": 2,
    "speaker": "Helen Kang (CISO)",
    "dialogue_en": "CISO Helen Kang makes an inquiry about the board meeting preparation.",
    "dialogue_vi": "CISO Helen Kang hỏi về tài liệu chuẩn bị cho cuộc họp khẩn với Hội đồng quản trị.",
    "situation_vi": "07:15 - Helen Kang cần slide tóm tắt sự cố để báo cáo Chủ tịch ngân hàng.",
    "stem": "Will the executive summary slides be ready for the board meeting at eight o'clock?",
    "audioText": "Will the executive summary slides be ready for the board meeting at eight o'clock?",
    "choices": [
      "They are nearly finished; I am just inserting the final intrusion timeline charts.",
      "The meeting will be held in the main boardroom.",
      "Yes, board members receive annual dividends."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi Yes/No hỏi về tiến độ ('Will the executive summary slides be ready...?') -> (A) 'They are nearly finished; I am just inserting the final intrusion timeline charts' (Chúng gần xong rồi; tôi chỉ đang chèn thêm các biểu đồ dòng thời gian vụ xâm nhập) trả lời tự nhiên về mức độ sẵn sàng.",
    "trap": "Bẫy địa điểm ở (B) và bẫy cổ tức cổ đông ở (C).",
    "examTip": "Câu hỏi về sự sẵn sàng (Will X be ready?) thường trả lời bằng: nearly finished, almost ready, already done, or needs a few more minutes.",
    "tags": {
      "part": "Part 2",
      "category": "Listening",
      "topic": "Meeting Prep",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "nearly",
        "ipa": "/ˈnɪə.li/",
        "pos": "adv",
        "meaning": "gần như, suýt nữa"
      },
      {
        "word": "timeline",
        "ipa": "/ˈtaɪm.laɪn/",
        "pos": "n",
        "meaning": "dòng thời gian diễn biến sự kiện"
      }
    ]
  },
  {
    "id": "c3-26",
    "chapter": 3,
    "part": 3,
    "speaker": "Helen Kang & Dave",
    "dialogue_en": "Helen: Dave, our vulnerability scanner just flagged an unpatched zero-day flaw in the core transaction gateway's SSL offloader.\nDave: I saw the alert, Director Kang. The exploit allows an attacker to bypass authentication headers and inject arbitrary database commands.\nHelen: We cannot delay. I have authorized the emergency maintenance window. Instruct all branch managers to switch customer transactions to the backup gateway while we apply the vendor's hotfix.",
    "dialogue_vi": "Helen: Dave, máy quét lỗ hổng vừa cảnh báo một lỗ hổng Zero-day chưa vá trong bộ giải mã SSL của cổng giao dịch cốt lõi.\nDave: Tôi thấy cảnh báo rồi, Thưa Giám đốc Kang. Lỗ hổng cho phép kẻ tấn công vượt qua tiêu đề xác thực và tiêm lệnh cơ sở dữ liệu tùy ý.\nHelen: Chúng ta không thể trì hoãn. Tôi đã phê duyệt khung bảo trì khẩn cấp. Hãy chỉ đạo tất cả giám đốc chi nhánh chuyển giao dịch khách hàng sang cổng dự phòng trong khi chúng ta áp dụng bản vá nóng của nhà cung cấp.",
    "situation_vi": "07:30 - Hội thoại giữa CISO Helen Kang và Dave về việc triển khai bản vá khẩn cho cổng giao dịch.",
    "stem": "What critical issue does Helen Kang report to Dave?",
    "audioText": "What critical issue does Helen Kang report to Dave?",
    "choices": [
      "A newly discovered zero-day flaw in the bank's core transaction gateway.",
      "An unexpected resignation letter from the senior database manager.",
      "A failure of the main office air conditioning units.",
      "A power outage affecting all automated teller machines in the city."
    ],
    "answer": 0,
    "explanation_vi": "Helen mở đầu hội thoại: 'our vulnerability scanner just flagged an unpatched zero-day flaw in the core transaction gateway' -> Vấn đề nghiêm trọng là một lỗ hổng Zero-day mới phát hiện trong cổng giao dịch cốt lõi của ngân hàng.",
    "trap": "Bẫy thư từ chức ở (B), điều hòa nhiệt độ ở (C), hoặc cúp điện cây ATM ở (D).",
    "examTip": "Lắng nghe ngay câu mở đầu của nhân vật thứ nhất trong Part 3 để xác định vấn đề trọng tâm (Critical issue / Problem).",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Gist / Problem",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "vulnerability scanner",
        "ipa": "/ˌvʌl.nər.əˈbɪl.ə.ti ˈskæn.ər/",
        "pos": "n",
        "meaning": "công cụ quét dò tìm lỗ hổng"
      },
      {
        "word": "offloader",
        "ipa": "/ˈɒfˌləʊ.dər/",
        "pos": "n",
        "meaning": "thiết bị xử lý giảm tải mã hóa SSL"
      }
    ]
  },
  {
    "id": "c3-27",
    "chapter": 3,
    "part": 3,
    "speaker": "Helen Kang & Dave",
    "dialogue_en": "(Continuing Conversation 3)",
    "dialogue_vi": "(Tiếp tục Hội thoại 3)",
    "situation_vi": "Tìm hiểu rủi ro kỹ thuật mà Dave giải thích.",
    "stem": "According to Dave, what could an attacker do by exploiting the vulnerability?",
    "audioText": "According to Dave, what could an attacker do by exploiting the vulnerability?",
    "choices": [
      "Bypass authentication checks and execute unauthorized database commands.",
      "Physically disable the security cameras installed in the lobby.",
      "Cancel all scheduled flights booked by executive personnel.",
      "Steal office furniture from the accounting department."
    ],
    "answer": 0,
    "explanation_vi": "Dave giải thích: 'The exploit allows an attacker to bypass authentication headers and inject arbitrary database commands' -> Vượt qua khâu kiểm tra xác thực và thực thi các lệnh cơ sở dữ liệu trái phép.",
    "trap": "Các phương án vô lý về camera an ninh (B), hủy vé máy bay (C), hoặc lấy trộm bàn ghế (D).",
    "examTip": "Kỹ năng Paraphrase: 'bypass authentication headers and inject commands' được diễn đạt lại thành 'Bypass authentication checks and execute unauthorized database commands'.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Detail / Risk",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "bypass",
        "ipa": "/ˈbaɪ.pɑːs/",
        "pos": "v",
        "meaning": "vượt qua mặt, đi vòng qua hàng rào"
      },
      {
        "word": "arbitrary",
        "ipa": "/ˈɑː.bɪ.trər.i/",
        "pos": "adj",
        "meaning": "tùy ý, bất kỳ theo ý kẻ tấn công"
      }
    ]
  },
  {
    "id": "c3-28",
    "chapter": 3,
    "part": 3,
    "speaker": "Helen Kang & Dave",
    "dialogue_en": "(Continuing Conversation 3)",
    "dialogue_vi": "(Tiếp tục Hội thoại 3)",
    "situation_vi": "Chỉ thị của Helen Kang để đảm bảo giao dịch không bị gián đoạn.",
    "stem": "What interim measure does Helen Kang instruct Dave to carry out?",
    "audioText": "What interim measure does Helen Kang instruct Dave to carry out?",
    "choices": [
      "Route customer transactions through a secondary backup gateway.",
      "Shut down all regional branch banking operations for the remainder of the week.",
      "Borrow funds from another commercial financial institution.",
      "Replace all employee workstation monitors with touchscreens."
    ],
    "answer": 0,
    "explanation_vi": "Helen chỉ đạo: 'Instruct all branch managers to switch customer transactions to the backup gateway while we apply the vendor's hotfix' -> Định tuyến giao dịch của khách hàng qua cổng phụ dự phòng.",
    "trap": "Bẫy đóng cửa ngân hàng cả tuần ở (B) hoặc vay tiền ngân hàng khác ở (C).",
    "examTip": "Từ đồng nghĩa: 'switch transactions to the backup gateway' = 'Route transactions through a secondary backup gateway'.",
    "tags": {
      "part": "Part 3",
      "category": "Listening",
      "topic": "Action Item",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "interim",
        "ipa": "/ˈɪn.tər.ɪm/",
        "pos": "adj",
        "meaning": "tạm thời, quá độ trong thời gian chờ"
      },
      {
        "word": "route",
        "ipa": "/ruːt/",
        "pos": "v",
        "meaning": "định tuyến, chuyển hướng luồng dữ liệu"
      }
    ]
  },
  {
    "id": "c3-29",
    "chapter": 3,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave explains the strict rules for applying software patches.",
    "dialogue_vi": "Dave nhấn mạnh nguyên tắc thử nghiệm trước khi vá máy chủ chính.",
    "situation_vi": "Chủ điểm: Trạng từ chỉ tần suất (Adverbs of Frequency).",
    "stem": "Security engineers must _______ test critical firmware updates in an isolated staging environment before production deployment.",
    "choices": [
      "always",
      "never",
      "hardly",
      "seldom"
    ],
    "answer": 0,
    "explanation_vi": "Ngữ cảnh yêu cầu hành động bắt buộc an toàn: Các kỹ sư an ninh 'phải luôn luôn' thử nghiệm bản cập nhật firmware trong môi trường thử nghiệm cô lập trước khi triển khai thực tế -> chọn 'always' (luôn luôn).",
    "trap": "Các trạng từ mang nghĩa phủ định: 'never' (không bao giờ), 'hardly' (hầu như không), 'seldom' (hiếm khi) làm sai hoàn toàn logic an ninh.",
    "examTip": "Đọc hiểu nghĩa câu kết hợp trạng từ: Các từ chỉ tần suất phủ định (rarely, seldom, scarcely, hardly) đảo lộn nghĩa câu.",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Adverbs of Frequency",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "staging",
        "ipa": "/ˈsteɪ.dʒɪŋ/",
        "pos": "n",
        "meaning": "môi trường kiểm thử mô phỏng thực tế"
      },
      {
        "word": "deployment",
        "ipa": "/dɪˈplɔɪ.mənt/",
        "pos": "n",
        "meaning": "việc triển khai áp dụng"
      }
    ]
  },
  {
    "id": "c3-30",
    "chapter": 3,
    "part": 5,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah discusses the identification of anomalous API traffic.",
    "dialogue_vi": "Sarah nhận định về sự phát hiện lưu lượng truy cập API bất thường.",
    "situation_vi": "Chủ điểm: Cấu trúc câu điều kiện loại 1 (First Conditional).",
    "stem": "If the border firewall detects an unauthenticated API call, it _______ the source IP address automatically.",
    "choices": [
      "will block",
      "blocked",
      "had blocked",
      "would have blocked"
    ],
    "answer": 0,
    "explanation_vi": "Mệnh đề If ở thì hiện tại đơn ('detects') diễn tả một điều kiện có thể xảy ra ở hiện tại hoặc tương lai (Câu điều kiện loại 1). Mệnh đề chính dùng [will + V-bare] -> chọn 'will block'.",
    "trap": "Bẫy câu điều kiện loại 2 'would block' hoặc điều kiện loại 3 'would have blocked'.",
    "examTip": "Công thức câu điều kiện loại 1: [If + S + V(s/es), S + will / can / may + V-bare].",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Conditionals",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "unauthenticated",
        "ipa": "/ˌʌn.ɔːˈθen.tɪ.keɪ.tɪd/",
        "pos": "adj",
        "meaning": "chưa được xác thực danh tính"
      },
      {
        "word": "automatically",
        "ipa": "/ˌɔː.təˈmæt.ɪ.kəl.i/",
        "pos": "adv",
        "meaning": "một cách hoàn toàn tự động"
      }
    ]
  },
  {
    "id": "c3-31",
    "chapter": 3,
    "part": 5,
    "speaker": "Helen Kang (CISO)",
    "dialogue_en": "Helen Kang announces the formal designation of the project leader.",
    "dialogue_vi": "Helen Kang công bố việc chỉ định người phụ trách dự án nâng cấp chứng chỉ số.",
    "situation_vi": "Chủ điểm: Từ loại - Chọn Danh từ (Noun) chỉ người sau động từ 'designate'.",
    "stem": "The executive committee agreed to designate Sarah Lin as the chief _______ for the upcoming data center migration.",
    "choices": [
      "coordinator",
      "coordination",
      "coordinate",
      "coordinated"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc: 'designate someone as [Noun chỉ chức vụ/vị trí]'. Cần một danh từ chỉ người phù hợp với 'Sarah Lin' -> chọn 'coordinator' (điều phối viên trưởng).",
    "trap": "Bẫy danh từ trừu tượng chỉ hành động 'coordination' (sự điều phối) hoặc động từ 'coordinate'.",
    "examTip": "Phân biệt đuôi danh từ chỉ người (-er, -or, -ant, -ist, -ee) và danh từ chỉ vật/khái niệm (-tion, -ment, -ance, -ity).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Word Form",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "designate",
        "ipa": "/ˈdez.ɪɡ.neɪt/",
        "pos": "v",
        "meaning": "chỉ định, bổ nhiệm vào vị trí"
      },
      {
        "word": "coordinator",
        "ipa": "/kəʊˈɔː.dɪ.neɪ.tər/",
        "pos": "n",
        "meaning": "điều phối viên"
      }
    ]
  },
  {
    "id": "c3-32",
    "chapter": 3,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave talks about the comprehensive analysis of security logs.",
    "dialogue_vi": "Dave nói về việc phân tích toàn diện các bản ghi an ninh.",
    "situation_vi": "Chủ điểm: Từ vựng - Chọn tính từ mang nghĩa sơ bộ, bước đầu.",
    "stem": "Our _______ assessment indicated a minor configuration glitch, but deeper inspection uncovered an active exploit.",
    "choices": [
      "preliminary",
      "conclusive",
      "terminal",
      "permanent"
    ],
    "answer": 0,
    "explanation_vi": "Vế sau có từ nối tương phản 'but deeper inspection' (nhưng kiểm tra sâu hơn). Đánh giá ban đầu/sơ bộ đối lập với kiểm tra sâu -> chọn 'preliminary' (sơ bộ, bước đầu). Cụm 'preliminary assessment' (đánh giá sơ bộ) là collocation chuẩn.",
    "trap": "Các từ mang nghĩa kết luận chắc chắn hoặc vĩnh viễn: 'conclusive' (mang tính kết luận chắc nịch), 'terminal' (giai đoạn cuối), 'permanent' (vĩnh viễn).",
    "examTip": "Collocation kinh điển TOEIC: preliminary assessment / preliminary findings / preliminary report (đánh giá / phát hiện / báo cáo sơ bộ ban đầu).",
    "tags": {
      "part": "Part 5",
      "category": "Vocabulary",
      "topic": "Collocation",
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
        "word": "glitch",
        "ipa": "/ɡlɪtʃ/",
        "pos": "n",
        "meaning": "trục trặc kỹ thuật nhỏ"
      }
    ]
  },
  {
    "id": "c3-33",
    "chapter": 3,
    "part": 5,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah discusses the necessity of data recovery protocols.",
    "dialogue_vi": "Sarah nói về khả năng phục hồi dữ liệu từ bản sao lưu lạnh.",
    "situation_vi": "Chủ điểm: Cấu trúc [capable of + V-ing].",
    "stem": "The encrypted off-site repository is capable of _______ complete database snapshots within two hours.",
    "choices": [
      "restoring",
      "restore",
      "restoration",
      "restored"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc: 'capable of + V-ing' (có khả năng làm được việc gì). Đứng sau giới từ 'of' cần một danh động từ (Gerund V-ing) mang theo tân ngữ 'complete database snapshots' -> chọn 'restoring'.",
    "trap": "Bẫy danh từ 'restoration' (danh từ không thể đi trực tiếp với tân ngữ danh từ phía sau mà không có giới từ of).",
    "examTip": "Cấu trúc cần nhớ: [capable of + V-ing + Tân ngữ] >< [capable of + Danh từ]. Khi có tân ngữ phía sau, bắt buộc chọn dạng V-ing.",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Gerunds",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "repository",
        "ipa": "/rɪˈpɒz.ɪ.tər.i/",
        "pos": "n",
        "meaning": "kho lưu trữ dữ liệu tập trung"
      },
      {
        "word": "snapshot",
        "ipa": "/ˈsnæp.ʃɒt/",
        "pos": "n",
        "meaning": "ảnh chụp bản sao trạng thái dữ liệu tại một thời điểm"
      }
    ]
  },
  {
    "id": "c3-34",
    "chapter": 3,
    "part": 5,
    "speaker": "Helen Kang (CISO)",
    "dialogue_en": "Helen Kang emphasizes the board's highest priority.",
    "dialogue_vi": "Helen Kang nhấn mạnh ưu tiên số một của Hội đồng quản trị ngân hàng.",
    "situation_vi": "Chủ điểm: Cụm giới từ cố định (Of paramount importance).",
    "stem": "Maintaining customer trust and regulatory compliance is of _______ importance to the executive board.",
    "choices": [
      "paramount",
      "reluctant",
      "fragile",
      "hesitant"
    ],
    "answer": 0,
    "explanation_vi": "Cụm thành ngữ cố định trong tiếng Anh trang trọng: 'of paramount importance' = 'extremely important' (có tầm quan trọng tối thượng / bậc nhất) -> chọn 'paramount'.",
    "trap": "Các tính từ không ăn nhập cấu trúc: 'reluctant' (miễn cưỡng), 'fragile' (mong manh), 'hesitant' (do dự).",
    "examTip": "Cấu trúc trang trọng trong đề TOEIC Part 5 & 7: [be of paramount importance = be extremely important].",
    "tags": {
      "part": "Part 5",
      "category": "Vocabulary",
      "topic": "Idiomatic Expressions",
      "difficulty": "Hard"
    },
    "vocab": [
      {
        "word": "paramount",
        "ipa": "/ˈpær.ə.maʊnt/",
        "pos": "adj",
        "meaning": "tối thượng, quan trọng bậc nhất"
      },
      {
        "word": "regulatory",
        "ipa": "/ˈreɡ.jə.lə.tər.i/",
        "pos": "adj",
        "meaning": "thuộc về quy chế, luật định"
      }
    ]
  },
  {
    "id": "c3-35",
    "chapter": 3,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave orders the verification of all server hardware specifications.",
    "dialogue_vi": "Dave yêu cầu đối chiếu các thông số kỹ thuật của cụm máy chủ dự phòng.",
    "situation_vi": "Chủ điểm: Từ loại - Chọn Danh từ số nhiều (Plural Noun) sau 'all'.",
    "stem": "The replacement server must satisfy all technical _______ established by the banking IT infrastructure committee.",
    "choices": [
      "specifications",
      "specifying",
      "specific",
      "specifically"
    ],
    "answer": 0,
    "explanation_vi": "Đứng sau tính từ 'technical' và từ chỉ số lượng 'all' cần một danh từ số nhiều -> chọn 'specifications' (các thông số kỹ thuật, quy cách kỹ thuật).",
    "trap": "Bẫy tính từ 'specific' hoặc phó từ 'specifically'.",
    "examTip": "Collocation phổ biến: technical specifications (thông số kỹ thuật), job specifications (tiêu chuẩn công việc).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Word Form",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "specifications",
        "ipa": "/ˌspes.ɪ.fɪˈkeɪ.ʃənz/",
        "pos": "n",
        "meaning": "các thông số kỹ thuật chi tiết"
      },
      {
        "word": "satisfy",
        "ipa": "/ˈsæt.ɪs.faɪ/",
        "pos": "v",
        "meaning": "đáp ứng, thỏa mãn tiêu chuẩn"
      }
    ]
  },
  {
    "id": "c3-36",
    "chapter": 3,
    "part": 5,
    "speaker": "Sarah (Forensics)",
    "dialogue_en": "Sarah discusses the swift propagation of the worm across subnets.",
    "dialogue_vi": "Sarah nhận xét về tốc độ lây lan cực nhanh của sâu máy tính.",
    "situation_vi": "Chủ điểm: Chọn Phó từ (Adverb) bổ nghĩa cho động từ thường.",
    "stem": "The automated worm spread _______ across internal VLANs before network segmentation rules took effect.",
    "choices": [
      "exponentially",
      "exponential",
      "exponent",
      "exponentialness"
    ],
    "answer": 0,
    "explanation_vi": "Đứng sau động từ thường 'spread' (lan truyền) cần một phó từ (adverb) đuôi -ly để chỉ mức độ / cách thức hành động -> chọn 'exponentially' (lan truyền theo cấp số nhân, cực kỳ nhanh chóng).",
    "trap": "Bẫy tính từ 'exponential' hoặc danh từ 'exponent'.",
    "examTip": "Vị trí trạng từ: [Động từ nội (Intransitive Verb) + Trạng từ đuôi -ly]. Ví dụ: grow exponentially, increase significantly, spread rapidly.",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Adverbs",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "exponentially",
        "ipa": "/ˌek.spəˈnen.ʃəl.i/",
        "pos": "adv",
        "meaning": "theo cấp số nhân, cực nhanh"
      },
      {
        "word": "segmentation",
        "ipa": "/ˌseɡ.menˈteɪ.ʃən/",
        "pos": "n",
        "meaning": "sự phân đoạn, chia nhỏ mạng"
      }
    ]
  },
  {
    "id": "c3-37",
    "chapter": 3,
    "part": 5,
    "speaker": "Helen Kang (CISO)",
    "dialogue_en": "Helen Kang reiterates employee obligations under the non-disclosure agreement.",
    "dialogue_vi": "Helen Kang nhắc lại nghĩa vụ bảo mật của nhân viên theo thỏa thuận bảo mật NDA.",
    "situation_vi": "Chủ điểm: Cấu trúc tính từ sở hữu + Danh từ (Legal obligation).",
    "stem": "Every employee has a strict legal _______ to maintain the secrecy of customer financial records.",
    "choices": [
      "obligation",
      "obligate",
      "obliged",
      "obligatory"
    ],
    "answer": 0,
    "explanation_vi": "Sau mạo từ 'a' và tính từ 'legal' cần một danh từ đếm được số ít -> chọn 'obligation' (nghĩa vụ pháp lý).",
    "trap": "Bẫy tính từ 'obligatory' hoặc động từ 'obligate'.",
    "examTip": "Collocation pháp lý và công sở trong TOEIC: legal obligation (nghĩa vụ pháp lý), contractual obligation (nghĩa vụ theo hợp đồng).",
    "tags": {
      "part": "Part 5",
      "category": "Grammar",
      "topic": "Word Form",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "obligation",
        "ipa": "/ˌɒb.lɪˈɡeɪ.ʃən/",
        "pos": "n",
        "meaning": "nghĩa vụ, bổn phận bắt buộc"
      },
      {
        "word": "secrecy",
        "ipa": "/ˈsiː.krə.si/",
        "pos": "n",
        "meaning": "tính bí mật, sự giữ kín"
      }
    ]
  },
  {
    "id": "c3-38",
    "chapter": 3,
    "part": 5,
    "speaker": "Dave (SOC Lead)",
    "dialogue_en": "Dave orders the immediate revocation of the compromised SSL key.",
    "dialogue_vi": "Dave chỉ đạo hủy bỏ ngay lập tức khóa SSL đã bị lộ.",
    "situation_vi": "Chủ điểm: Từ vựng - Chọn động từ mang nghĩa thu hồi quyền hạn hoặc chứng chỉ.",
    "stem": "The security team will immediately _______ the compromised digital certificate to block further unauthorized logins.",
    "choices": [
      "revoke",
      "resume",
      "reimburse",
      "relocate"
    ],
    "answer": 0,
    "explanation_vi": "Cụm kết hợp từ chuyên ngành an ninh thông tin: 'revoke a certificate / revoke credentials' mang nghĩa 'thu hồi chứng chỉ số / hủy bỏ quyền truy cập' -> chọn 'revoke'.",
    "trap": "Các từ không ăn nhập ngữ cảnh: 'resume' (tiếp tục lại sau gián đoạn), 'reimburse' (hoàn tiền chi phí), 'relocate' (chuyển địa điểm).",
    "examTip": "Thuật ngữ bảo mật kinh điển: revoke access / revoke a certificate / revoke privileges (thu hồi quyền truy cập / chứng chỉ / đặc quyền).",
    "tags": {
      "part": "Part 5",
      "category": "Vocabulary",
      "topic": "Technical Vocabulary",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "revoke",
        "ipa": "/rɪˈvəʊk/",
        "pos": "v",
        "meaning": "thu hồi, hủy bỏ hiệu lực"
      },
      {
        "word": "compromised",
        "ipa": "/ˈkɒm.prə.maɪzd/",
        "pos": "adj",
        "meaning": "đã bị lộ, bị xâm phạm an ninh"
      }
    ]
  },
  {
    "id": "c3-39",
    "chapter": 3,
    "part": 6,
    "speaker": "Alex Mercer (Infrastructure Engineer)",
    "dialogue_en": "Security Patch Directive sent to all Branch Systems Administrators.",
    "dialogue_vi": "Chỉ thị Triển khai Bản vá gửi Quản trị viên Hệ thống các Chi nhánh.",
    "situation_vi": "Điền từ vào chỗ trống [1] trong văn bản chỉ thị triển khai bản vá an ninh khẩn cấp.",
    "passage": "URGENT INFRASTRUCTURE DIRECTIVE\nTO: Regional IT Systems Administrators\nFROM: Alex Mercer, Enterprise Infrastructure Group\nDATE: November 10, 2026\nSUBJECT: Immediate Deployment of OpenSSL Security Patch (CVE-2026-8819)\n\nA critical zero-day vulnerability affecting our web application gateway was discovered early this morning. This flaw allows unauthorized external actors to bypass TLS authentication filters and execute remote code. A validated firmware hotfix is now available on our secure distribution server. It is _______ [1] that all regional gateway appliances install this patch before 08:00 AM. Administrators must _______ [2] verify the SHA-256 package signature before initiating installation. _______ [3]. Contact the central SOC hotline at extension 4400 if you encounter any unexpected deployment failures.",
    "stem": "Select the best answer for blank [1]:",
    "choices": [
      "imperative",
      "reluctant",
      "optional",
      "casual"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc giả định thức diễn tả tính khẩn cấp: 'It is imperative that + S + (should) + V-bare' mang nghĩa 'việc ... là tối quan trọng, cấp bách bắt buộc' -> chọn 'imperative'.",
    "trap": "Các tính từ trái nghĩa: 'optional' (tùy chọn không bắt buộc), 'casual' (tùy tiện), 'reluctant' (miễn cưỡng).",
    "examTip": "Các tính từ chỉ tính cấp bách trong TOEIC: imperative = vital = essential = mandatory.",
    "tags": {
      "part": "Part 6",
      "category": "Vocabulary",
      "topic": "Formal Adjectives",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "imperative",
        "ipa": "/ɪmˈper.ə.tɪv/",
        "pos": "adj",
        "meaning": "cấp bách, tối quan trọng"
      },
      {
        "word": "validated",
        "ipa": "/ˈvæl.ɪ.deɪ.tɪd/",
        "pos": "adj",
        "meaning": "đã được kiểm định tính hợp lệ"
      }
    ]
  },
  {
    "id": "c3-40",
    "chapter": 3,
    "part": 6,
    "speaker": "Alex Mercer (Infrastructure Engineer)",
    "dialogue_en": "(Continuing Part 6 Directive 1)",
    "dialogue_vi": "(Tiếp tục Chỉ thị 1 Part 6)",
    "situation_vi": "Chọn trạng từ thích hợp bổ nghĩa cho động từ 'verify' tại chỗ trống [2].",
    "passage": "(Tham khảo văn bản Chỉ thị ở câu c3-39)",
    "stem": "Select the best answer for blank [2]:",
    "choices": [
      "meticulously",
      "meticulous",
      "meticulousness",
      "more meticulous"
    ],
    "answer": 0,
    "explanation_vi": "Đứng giữa trợ động từ khuyết thiếu 'must' và động từ chính 'verify' (kiểm tra, xác minh) cần một phó từ (adverb) đuôi -ly -> chọn 'meticulously' (phải kiểm tra một cách tỉ mỉ, cẩn thận).",
    "trap": "Bẫy tính từ 'meticulous' hoặc danh từ 'meticulousness'.",
    "examTip": "Vị trí: [must + ADV + V-bare] (must meticulously verify).",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Adverbs",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "meticulously",
        "ipa": "/məˈtɪk.jə.ləs.li/",
        "pos": "adv",
        "meaning": "một cách tỉ mỉ, cẩn thận từng li"
      },
      {
        "word": "signature",
        "ipa": "/ˈsɪɡ.nə.tʃər/",
        "pos": "n",
        "meaning": "chữ ký số xác thực"
      }
    ]
  },
  {
    "id": "c3-41",
    "chapter": 3,
    "part": 6,
    "speaker": "Alex Mercer (Infrastructure Engineer)",
    "dialogue_en": "Select the sentence that best fits blank [3].",
    "dialogue_vi": "Chọn câu văn phù hợp nhất với logic văn bản tại chỗ trống [3].",
    "situation_vi": "Điền câu văn hướng dẫn báo cáo sau khi cập nhật xong.",
    "passage": "(Tham khảo văn bản Chỉ thị ở câu c3-39)",
    "stem": "Select the sentence that best fits blank [3]:",
    "choices": [
      "Once installation is complete, submit a confirmation ticket via the IT service portal.",
      "The branch cafeteria will be closed for sanitation throughout Friday afternoon.",
      "Discounted train passes are now available for all full-time customer service staff.",
      "Several branch accountants have requested new ergonomic office chairs."
    ],
    "answer": 0,
    "explanation_vi": "Câu (A) 'Once installation is complete, submit a confirmation ticket via the IT service portal' (Ngay khi cài đặt xong, hãy gửi phiếu xác nhận qua cổng dịch vụ CNTT) là câu hướng dẫn quy trình báo cáo tiếp theo hoàn toàn tự nhiên và khớp mạch văn.",
    "trap": "Các phương án lạc đề về căng tin (B), vé tàu (C) hay ghế văn phòng (D).",
    "examTip": "Trong các văn bản chỉ thị kỹ thuật (Directive), các câu nối tiếp nhau theo quy trình: Chuẩn bị -> Thực hiện -> Báo cáo kết quả (Confirmation ticket).",
    "tags": {
      "part": "Part 6",
      "category": "Reading",
      "topic": "Sentence Insertion",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "ticket",
        "ipa": "/ˈtɪk.ɪt/",
        "pos": "n",
        "meaning": "phiếu yêu cầu / báo cáo công việc trên hệ thống IT"
      },
      {
        "word": "portal",
        "ipa": "/ˈpɔː.təl/",
        "pos": "n",
        "meaning": "cổng thông tin điện tử nội bộ"
      }
    ]
  },
  {
    "id": "c3-42",
    "chapter": 3,
    "part": 6,
    "speaker": "Helen Kang (CISO)",
    "dialogue_en": "Memo on Special Audit Procedures for Core Banking APIs.",
    "dialogue_vi": "Bản ghi nhớ về Quy trình Kiểm toán Đặc biệt đối với các cổng API Core Banking.",
    "situation_vi": "Điền từ vào chỗ trống [1] trong bản ghi nhớ kiểm toán.",
    "passage": "MEMORANDUM TO EXECUTIVE DIRECTORS\nFROM: Helen Kang, Chief Information Security Officer\nDATE: November 10, 2026\nSUBJECT: Special Security Audit of Application Programming Interfaces (APIs)\n\nIn light of the recent perimeter intrusion attempt, the SOC has initiated a comprehensive security audit of all application interfaces interacting with our Core Banking database. Our goal is to identify any undetected security _______ [1] before public trading commences at 09:00 AM. External forensic consultants have been engaged to assist our internal engineers. They will _______ [2] examine the source code of newly deployed microservices. _______ [3]. A final briefing will be presented to the Board of Directors at 08:30 AM.",
    "stem": "Select the best answer for blank [1]:",
    "choices": [
      "vulnerabilities",
      "vulnerable",
      "vulnerably",
      "vulnerableness"
    ],
    "answer": 0,
    "explanation_vi": "Đứng sau tính từ 'undetected security' (an ninh chưa bị phát hiện) cần một danh từ số nhiều đóng vai trò tân ngữ cho động từ 'identify' -> chọn danh từ 'vulnerabilities' (các lỗ hổng bảo mật).",
    "trap": "Bẫy tính từ 'vulnerable' hoặc phó từ 'vulnerably'.",
    "examTip": "Cụm danh từ cốt lõi trong ngành: security vulnerabilities (các lỗ hổng bảo mật).",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Word Form",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "vulnerabilities",
        "ipa": "/ˌvʌl.nər.əˈbɪl.ə.tiz/",
        "pos": "n",
        "meaning": "các lỗ hổng bảo mật"
      },
      {
        "word": "commences",
        "ipa": "/kəˈmens.ɪz/",
        "pos": "v",
        "meaning": "bắt đầu, khai mạc"
      }
    ]
  },
  {
    "id": "c3-43",
    "chapter": 3,
    "part": 6,
    "speaker": "Helen Kang (CISO)",
    "dialogue_en": "(Continuing Part 6 Memo 2)",
    "dialogue_vi": "(Tiếp tục Bản ghi nhớ 2 Part 6)",
    "situation_vi": "Chọn trạng từ thích hợp đứng trước động từ 'examine' tại chỗ trống [2].",
    "passage": "(Tham khảo văn bản Ghi nhớ ở câu c3-42)",
    "stem": "Select the best answer for blank [2]:",
    "choices": [
      "thoroughly",
      "thorough",
      "thoroughness",
      "more thorough"
    ],
    "answer": 0,
    "explanation_vi": "Đứng giữa trợ động từ 'will' và động từ chính 'examine' (kiểm tra, xem xét) cần một phó từ (adverb) đuôi -ly -> chọn 'thoroughly' (sẽ kiểm tra một cách kỹ lưỡng, thấu đáo).",
    "trap": "Bẫy tính từ 'thorough' hoặc danh từ 'thoroughness'.",
    "examTip": "Collocation kinh điển: thoroughly examine / thoroughly inspect / thoroughly review (kiểm tra / xem xét một cách thấu đáo, kỹ lưỡng).",
    "tags": {
      "part": "Part 6",
      "category": "Grammar",
      "topic": "Adverbs",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "thoroughly",
        "ipa": "/ˈθʌr.ə.li/",
        "pos": "adv",
        "meaning": "một cách kỹ lưỡng, thấu đáo"
      },
      {
        "word": "microservices",
        "ipa": "/ˈmaɪ.krəʊˌsɜː.vɪ.sɪz/",
        "pos": "n",
        "meaning": "kiến trúc dịch vụ siêu nhỏ"
      }
    ]
  },
  {
    "id": "c3-44",
    "chapter": 3,
    "part": 6,
    "speaker": "Helen Kang (CISO)",
    "dialogue_en": "Select the sentence that best fits blank [3].",
    "dialogue_vi": "Chọn câu văn phù hợp nhất với tính mạch lạc tại chỗ trống [3].",
    "situation_vi": "Điền câu văn khẳng định tính bảo mật của các giao dịch thông thường.",
    "passage": "(Tham khảo văn bản Ghi nhớ ở câu c3-42)",
    "stem": "Select the sentence that best fits blank [3]:",
    "choices": [
      "All automated auditing tools will operate in read-only mode to prevent system slowdowns.",
      "Corporate gym memberships will be subsidized starting with next month's payroll.",
      "The marketing director approved the new commercial television advertisement script.",
      "Branch employees should submit their annual vacation requests by mid-December."
    ],
    "answer": 0,
    "explanation_vi": "Câu (A) 'All automated auditing tools will operate in read-only mode to prevent system slowdowns' (Tất cả công cụ kiểm toán tự động sẽ hoạt động ở chế độ chỉ đọc để ngăn chặn tình trạng máy chủ bị chậm) là chi tiết kỹ thuật bảo đảm an toàn hệ thống hoàn toàn ăn khớp với nội dung cuộc kiểm toán an ninh.",
    "trap": "Các phương án lạc đề về thẻ tập gym (B), kịch bản quảng cáo (C) hay lịch nghỉ phép (D).",
    "examTip": "Tìm câu văn có tính tương thích cao với chủ đề công nghệ thông tin và kiểm toán hệ thống ngân hàng.",
    "tags": {
      "part": "Part 6",
      "category": "Reading",
      "topic": "Sentence Insertion",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "read-only",
        "ipa": "/ˌriːdˈəʊn.li/",
        "pos": "adj",
        "meaning": "chỉ đọc, không làm thay đổi dữ liệu"
      },
      {
        "word": "slowdown",
        "ipa": "/ˈsləʊ.daʊn/",
        "pos": "n",
        "meaning": "sự suy giảm tốc độ hoạt động"
      }
    ]
  },
  {
    "id": "c3-45",
    "chapter": 3,
    "part": 7,
    "speaker": "AEGIS AI (Security Audit Report)",
    "dialogue_en": "Third-Party Vulnerability Assessment & Penetration Testing Summary.",
    "dialogue_vi": "Báo cáo Đánh giá Lỗ hổng & Kiểm thử Xâm nhập từ Đơn vị Độc lập.",
    "situation_vi": "07:45 - Bạn đọc bản tóm tắt báo cáo kiểm thử của đối tác an ninh CyberShield để trả lời câu 45 - 49.",
    "passage": "CYBERSHIELD DEFENSE CONSULTING\nINDEPENDENT SECURITY EVALUATION REPORT\nCLIENT: NovaBank Core Banking Division\nASSESSMENT DATE: November 9-10, 2026\nREPORT REFERENCE: CS-EVAL-2026-441\n\n1. Scope of Engagement\nCyberShield was contracted by NovaBank to perform a black-box penetration assessment targeting the external payment gateway and public transaction API interfaces. The objective was to ascertain whether an unauthenticated external attacker could access database records or disrupt automated clearing house (ACH) payment processing.\n\n2. Key Vulnerability Findings\n- Critical Issue #1 (CVE-2026-8819): An improper input validation flaw was discovered in the legacy API header parsing module. By transmitting a specially crafted HTTP POST header containing null bytes, testers successfully bypassed session authentication checks and retrieved ten mock customer transaction records.\n- Moderate Issue #2: Several secondary SSL certificates installed on development subdomains were found to use outdated SHA-1 cryptographic hashing algorithms, which do not meet current central banking encryption standards.\n\n3. Corrective Actions Executed\nAt 06:30 AM, NovaBank engineers successfully applied vendor firmware hotfix V4.2.1, which completely remediated Critical Issue #1. Re-testing conducted at 07:15 AM confirmed that the exploit payload was rejected with a 403 Forbidden response code. All legacy SHA-1 certificates have been queued for automated replacement before 12:00 PM today.",
    "stem": "What was the main purpose of the CyberShield engagement?",
    "choices": [
      "To test whether an external attacker could access bank database records or disrupt payments.",
      "To recruit fifty new software engineers for NovaBank's mobile application team.",
      "To design new promotional flyers advertising zero-interest personal loans.",
      "To audit employee expense reimbursement receipts from international business trips."
    ],
    "answer": 0,
    "explanation_vi": "Mục 1 'Scope of Engagement' nêu rõ: 'The objective was to ascertain whether an unauthenticated external attacker could access database records or disrupt automated clearing house (ACH) payment processing' -> Kiểm tra xem kẻ tấn công bên ngoài có thể tiếp cận dữ liệu ngân hàng hoặc làm gián đoạn thanh toán hay không.",
    "trap": "Các phương án về tuyển dụng nhân sự (B), tờ rơi quảng cáo vay vốn (C) hay hóa đơn công tác phí (D).",
    "examTip": "Xác định mục đích kiểm thử trong phần 'Scope of Engagement' hoặc 'Objective'.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Gist / Scope",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "black-box",
        "ipa": "/ˈblæk.bɒks/",
        "pos": "adj",
        "meaning": "kiểm thử hộp đen không biết trước mã nguồn"
      },
      {
        "word": "ascertain",
        "ipa": "/ˌæs.əˈteɪn/",
        "pos": "v",
        "meaning": "xác minh, làm sáng tỏ tính xác thực"
      }
    ]
  },
  {
    "id": "c3-46",
    "chapter": 3,
    "part": 7,
    "speaker": "AEGIS AI (Security Audit Report)",
    "dialogue_en": "(Continuing CyberShield Assessment Review)",
    "dialogue_vi": "(Tiếp tục rà soát Báo cáo Đánh giá)",
    "situation_vi": "Tìm hiểu phương thức kỹ thuật kẻ tấn công lợi dụng để vượt qua xác thực.",
    "passage": "(Tham khảo văn bản Báo cáo Đánh giá ở câu c3-45)",
    "stem": "According to the report, how was Critical Issue #1 demonstrated?",
    "choices": [
      "By sending a crafted HTTP header with null bytes to bypass authentication checks.",
      "By guessing an employee's easy password on a social media website.",
      "By cutting the physical optical fiber cables connecting the data center.",
      "By bribing a branch security guard to unlock the server cabinet."
    ],
    "answer": 0,
    "explanation_vi": "Mục 'Critical Issue #1' chỉ rõ: 'By transmitting a specially crafted HTTP POST header containing null bytes, testers successfully bypassed session authentication checks' -> Gửi tiêu đề HTTP tạo đặc biệt chứa các byte rỗng để vượt qua kiểm tra phiên xác thực.",
    "trap": "Bẫy đoán mật khẩu mạng xã hội (B), cắt cáp quang (C) hoặc hối lộ bảo vệ (D).",
    "examTip": "Định vị từ khóa 'Critical Issue #1' và đọc kỹ câu miêu tả kỹ thuật thực hiện.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "validation",
        "ipa": "/ˌvæl.ɪˈdeɪ.ʃən/",
        "pos": "n",
        "meaning": "sự phê chuẩn tính hợp lệ của dữ liệu đầu vào"
      },
      {
        "word": "bypass",
        "ipa": "/ˈbaɪ.pɑːs/",
        "pos": "v",
        "meaning": "vượt qua hàng rào kiểm soát"
      }
    ]
  },
  {
    "id": "c3-47",
    "chapter": 3,
    "part": 7,
    "speaker": "AEGIS AI (Security Audit Report)",
    "dialogue_en": "(Continuing CyberShield Assessment Review)",
    "dialogue_vi": "(Tiếp tục rà soát Báo cáo Đánh giá)",
    "situation_vi": "Xác định vấn đề an ninh mức độ trung bình (Moderate Issue) trong báo cáo.",
    "passage": "(Tham khảo văn bản Báo cáo Đánh giá ở câu c3-45)",
    "stem": "What weakness was identified as a Moderate Issue?",
    "choices": [
      "Secondary subdomains were using obsolete SHA-1 cryptographic algorithms.",
      "All branch teller computers were completely missing antivirus software.",
      "The bank's customer service telephone lines were continuously busy.",
      "The building air conditioning filters had not been replaced in six months."
    ],
    "answer": 0,
    "explanation_vi": "Mục 'Moderate Issue #2' ghi rõ: 'Several secondary SSL certificates installed on development subdomains were found to use outdated SHA-1 cryptographic hashing algorithms' -> Các tên miền phụ sử dụng thuật toán mã hóa SHA-1 đã lỗi thời.",
    "trap": "Bẫy thiếu phần mềm diệt virus (B), bận đường dây điện thoại (C) hoặc bộ lọc điều hòa (D).",
    "examTip": "Từ đồng nghĩa: 'outdated' = 'obsolete' (lỗi thời, không còn an toàn).",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "obsolete",
        "ipa": "/ˌɒb.səlˈiːt/",
        "pos": "adj",
        "meaning": "lỗi thời, cổ lỗ sĩ"
      },
      {
        "word": "cryptographic",
        "ipa": "/ˌkrɪp.təˈɡræf.ɪk/",
        "pos": "adj",
        "meaning": "thuộc về mật mã học"
      }
    ]
  },
  {
    "id": "c3-48",
    "chapter": 3,
    "part": 7,
    "speaker": "AEGIS AI (Security Audit Report)",
    "dialogue_en": "(Continuing CyberShield Assessment Review)",
    "dialogue_vi": "(Tiếp tục rà soát Báo cáo Đánh giá)",
    "situation_vi": "Tìm hiểu kết quả kiểm tra lại (re-testing) sau khi vá lỗi.",
    "passage": "(Tham khảo văn bản Báo cáo Đánh giá ở câu c3-45)",
    "stem": "What happened when testers re-evaluated the system at 07:15 AM?",
    "choices": [
      "The attack payload was successfully blocked with a 403 Forbidden code.",
      "The entire database crashed and could not be restarted.",
      "All bank customer loan accounts were permanently erased.",
      "The testing team gained complete root control of the primary server."
    ],
    "answer": 0,
    "explanation_vi": "Mục 3 'Corrective Actions Executed' nêu rõ: 'Re-testing conducted at 07:15 AM confirmed that the exploit payload was rejected with a 403 Forbidden response code' -> Tải trọng tấn công đã bị từ chối và chặn lại thành công với mã phản hồi 403 Forbidden.",
    "trap": "Bẫy cơ sở dữ liệu sập (B) hoặc chiếm quyền kiểm soát máy chủ (D).",
    "examTip": "Tìm mốc thời gian '07:15 AM' để định vị câu trả lời về kết quả kiểm thử lại.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "re-testing",
        "ipa": "/ˌriːˈtest.ɪŋ/",
        "pos": "n",
        "meaning": "hoạt động kiểm thử lại sau khắc phục"
      },
      {
        "word": "rejected",
        "ipa": "/rɪˈdʒek.tɪd/",
        "pos": "adj",
        "meaning": "bị từ chối, bị chặn đứng"
      }
    ]
  },
  {
    "id": "c3-49",
    "chapter": 3,
    "part": 7,
    "speaker": "AEGIS AI (Security Audit Report)",
    "dialogue_en": "(Continuing CyberShield Assessment Review)",
    "dialogue_vi": "(Tiếp tục rà soát Báo cáo Đánh giá)",
    "situation_vi": "Xác định thời hạn hoàn tất thay thế các chứng chỉ số cũ.",
    "passage": "(Tham khảo văn bản Báo cáo Đánh giá ở câu c3-45)",
    "stem": "When are the outdated SHA-1 certificates scheduled to be replaced?",
    "choices": [
      "Before 12:00 PM today.",
      "By the end of the next calendar year.",
      "Only after a formal shareholder vote.",
      "During next month's annual holiday shutdown."
    ],
    "answer": 0,
    "explanation_vi": "Câu cuối cùng của báo cáo nêu rõ: 'All legacy SHA-1 certificates have been queued for automated replacement before 12:00 PM today' -> Trước 12:00 trưa hôm nay.",
    "trap": "Bẫy cuối năm tới (B) hoặc chờ đại hội cổ đông bỏ phiếu (C).",
    "examTip": "Quét nhanh mốc thời gian: 'before 12:00 PM today' nằm ở câu cuối cùng của văn bản.",
    "tags": {
      "part": "Part 7",
      "category": "Reading",
      "topic": "Detail / Timeline",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "queued",
        "ipa": "/kjuːd/",
        "pos": "adj",
        "meaning": "đã được xếp hàng chờ xử lý tự động"
      },
      {
        "word": "legacy",
        "ipa": "/ˈleɡ.ə.si/",
        "pos": "adj",
        "meaning": "kế thừa, phiên bản cũ đã tồn tại từ trước"
      }
    ]
  },
  {
    "id": "c3-p1-01",
    "chapter": 3,
    "part": 1,
    "speaker": "ETS TOEIC Narrator",
    "dialogue_en": "Look at the picture marked Number 5 in your test book. Listen to the four statements and select the one that best describes the picture.",
    "dialogue_vi": "Quan sát bức tranh số 5. Lắng nghe 4 phương án và chọn câu miêu tả đúng nhất cổng kiểm soát an ninh sinh trắc học.",
    "situation_vi": "02:30 - Lối vào trụ sở ngân hàng với cổng xoay kiểm soát thẻ từ và vân tay.",
    "imageSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 280\" width=\"100%\" height=\"auto\" style=\"border-radius: 8px; background: #0b1329;\">\n      <!-- Polished Granite Floor with Reflection -->\n      <rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" fill=\"#0b1120\"/>\n      <polygon points=\"20,180 480,180 500,280 0,280\" fill=\"#1e293b\"/>\n      <line x1=\"0\" y1=\"180\" x2=\"500\" y2=\"180\" stroke=\"#334155\" stroke-width=\"1.5\"/>\n\n      <!-- Turnstile Lane 1 (Left Pedestal) -->\n      <rect x=\"90\" y=\"90\" width=\"40\" height=\"120\" rx=\"6\" fill=\"#334155\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <rect x=\"100\" y=\"105\" width=\"20\" height=\"15\" rx=\"3\" fill=\"#0f172a\"/>\n      <circle cx=\"110\" cy=\"112\" r=\"3.5\" fill=\"#22c55e\"/>\n\n      <!-- Glass Flap Barrier 1 -->\n      <polygon points=\"130,120 185,95 185,170 130,175\" fill=\"#38bdf8\" fill-opacity=\"0.3\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n\n      <!-- Turnstile Lane Center Pedestal -->\n      <rect x=\"190\" y=\"90\" width=\"45\" height=\"120\" rx=\"6\" fill=\"#334155\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <!-- RFID Card Reader glowing green -->\n      <rect x=\"200\" y=\"105\" width=\"25\" height=\"18\" rx=\"3\" fill=\"#0f172a\" stroke=\"#22c55e\" stroke-width=\"1.5\"/>\n      <path d=\"M 206 114 L 210 118 L 219 109\" fill=\"none\" stroke=\"#22c55e\" stroke-width=\"2\"/>\n\n      <!-- Glass Flap Barrier 2 -->\n      <polygon points=\"235,120 290,95 290,170 235,175\" fill=\"#38bdf8\" fill-opacity=\"0.3\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n\n      <!-- Turnstile Lane 3 (Right Pedestal) -->\n      <rect x=\"295\" y=\"90\" width=\"40\" height=\"120\" rx=\"6\" fill=\"#334155\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <rect x=\"305\" y=\"105\" width=\"20\" height=\"15\" rx=\"3\" fill=\"#0f172a\"/>\n      <circle cx=\"315\" cy=\"112\" r=\"3.5\" fill=\"#22c55e\"/>\n\n      <!-- Overhead Security Dome Camera on ceiling bracket -->\n      <rect x=\"205\" y=\"0\" width=\"15\" height=\"25\" fill=\"#64748b\"/>\n      <path d=\"M 200 25 A 12 12 0 0 0 225 25 Z\" fill=\"#0f172a\" stroke=\"#94a3b8\" stroke-width=\"1.5\"/>\n      <circle cx=\"212\" cy=\"28\" r=\"2\" fill=\"#ef4444\"/>\n\n      <!-- NovaBank Wall Logo in background -->\n      <rect x=\"380\" y=\"30\" width=\"90\" height=\"50\" rx=\"4\" fill=\"#0f172a\" stroke=\"#334155\"/>\n      <text x=\"390\" y=\"58\" fill=\"#38bdf8\" font-size=\"11\" font-family=\"sans-serif\" font-weight=\"bold\">NovaBank</text>\n      <text x=\"395\" y=\"70\" fill=\"#94a3b8\" font-size=\"7\" font-family=\"sans-serif\">SECURITY ACCESS</text>\n    </svg>",
    "stem": "Look at the photograph and select the statement that best describes what you see.",
    "audioText": "(A) Turnstiles with electronic card readers are positioned at an entrance. (B) Security guards are searching bags at a checkpoint. (C) The glass barriers have been pushed onto the floor. (D) Employees are assembling a reception desk in the lobby.",
    "choices": [
      "Turnstiles with electronic card readers are positioned at an entrance.",
      "Security guards are searching bags at a checkpoint.",
      "The glass barriers have been pushed onto the floor.",
      "Employees are assembling a reception desk in the lobby."
    ],
    "answer": 0,
    "explanation_vi": "Hình vẽ mô tả các cổng xoay an ninh (turnstiles) có trang bị đầu đọc thẻ điện tử (electronic card readers) được bố trí ở lối vào sảnh chính -> Câu (A) hoàn toàn chính xác.",
    "trap": "Câu (B) bẫy bảo vệ lục soát túi xách (không có người); Câu (C) bẫy rào chắn kính bị đẩy ngã (chúng đang đứng vững); Câu (D) bẫy hành động lắp ráp bàn tiếp tân.",
    "examTip": "Từ vựng 'turnstile' (cổng xoay kiểm soát) là từ vựng rất hay xuất hiện trong tranh Part 1 miêu tả ga tàu điện hoặc cửa tòa nhà văn phòng cao ốc.",
    "tags": {
      "part": "Part 1",
      "category": "Photographs",
      "topic": "Security Turnstile",
      "difficulty": "Medium"
    },
    "vocab": [
      {
        "word": "turnstile",
        "ipa": "/ˈtɜːn.staɪl/",
        "pos": "n",
        "meaning": "cổng xoay kiểm soát ra vào"
      },
      {
        "word": "position",
        "ipa": "/pəˈzɪʃ.ən/",
        "pos": "v",
        "meaning": "đặt ở vị trí, bố trí"
      }
    ]
  },
  {
    "id": "c3-p1-02",
    "chapter": 3,
    "part": 1,
    "speaker": "ETS TOEIC Narrator",
    "dialogue_en": "Look at the picture marked Number 6 in your test book. Listen to the four statements and select the one that best describes the picture.",
    "dialogue_vi": "Quan sát bức tranh số 6. Lắng nghe 4 phương án và chọn câu miêu tả đúng nhất phòng họp tác chiến của Giám đốc An ninh.",
    "situation_vi": "03:15 - Phòng họp chỉ huy khẩn cấp (War Room) chuẩn bị cho buổi báo cáo CISO.",
    "imageSvg": "<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 500 280\" width=\"100%\" height=\"auto\" style=\"border-radius: 8px; background: #0f172a;\">\n      <!-- Room Background with Wall Molding -->\n      <rect x=\"0\" y=\"0\" width=\"500\" height=\"280\" fill=\"#0b1120\"/>\n      <rect x=\"0\" y=\"210\" width=\"500\" height=\"70\" fill=\"#1e293b\"/>\n      <line x1=\"0\" y1=\"210\" x2=\"500\" y2=\"210\" stroke=\"#475569\" stroke-width=\"2\"/>\n\n      <!-- Large Wall Projection Screen -->\n      <rect x=\"130\" y=\"25\" width=\"240\" height=\"120\" rx=\"3\" fill=\"#0f172a\" stroke=\"#475569\" stroke-width=\"3\"/>\n      <!-- Slide Content: Incident Flowchart -->\n      <text x=\"145\" y=\"45\" fill=\"#38bdf8\" font-size=\"9\" font-family=\"sans-serif\" font-weight=\"bold\">ZERO-DAY INCIDENT RESPONSE TIMELINE</text>\n      <!-- Timeline Nodes -->\n      <circle cx=\"170\" cy=\"75\" r=\"9\" fill=\"#0284c7\"/>\n      <text x=\"166\" y=\"78\" fill=\"#ffffff\" font-size=\"8\">1</text>\n      <line x1=\"179\" y1=\"75\" x2=\"225\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n      <circle cx=\"235\" cy=\"75\" r=\"9\" fill=\"#0284c7\"/>\n      <text x=\"231\" y=\"78\" fill=\"#ffffff\" font-size=\"8\">2</text>\n      <line x1=\"244\" y1=\"75\" x2=\"290\" y2=\"75\" stroke=\"#38bdf8\" stroke-width=\"2\"/>\n      <circle cx=\"300\" cy=\"75\" r=\"9\" fill=\"#10b981\"/>\n      <text x=\"296\" y=\"78\" fill=\"#ffffff\" font-size=\"8\">3</text>\n      <!-- Trend Graph on Slide -->\n      <polyline points=\"150,125 180,115 210,120 250,95 290,105 340,90\" fill=\"none\" stroke=\"#f59e0b\" stroke-width=\"2\"/>\n\n      <!-- Conference Table -->\n      <ellipse cx=\"250\" cy=\"225\" rx=\"180\" ry=\"35\" fill=\"#1e293b\" stroke=\"#64748b\" stroke-width=\"2.5\"/>\n\n      <!-- Swivel Office Chairs around table -->\n      <rect x=\"120\" y=\"180\" width=\"28\" height=\"25\" rx=\"3\" fill=\"#334155\" stroke=\"#475569\"/>\n      <rect x=\"180\" y=\"175\" width=\"28\" height=\"25\" rx=\"3\" fill=\"#334155\" stroke=\"#475569\"/>\n      <rect x=\"290\" y=\"175\" width=\"28\" height=\"25\" rx=\"3\" fill=\"#334155\" stroke=\"#475569\"/>\n      <rect x=\"350\" y=\"180\" width=\"28\" height=\"25\" rx=\"3\" fill=\"#334155\" stroke=\"#475569\"/>\n\n      <!-- Laptop and Notebooks on Table -->\n      <rect x=\"230\" y=\"215\" width=\"40\" height=\"20\" rx=\"2\" fill=\"#0f172a\" stroke=\"#94a3b8\"/>\n      <rect x=\"160\" y=\"222\" width=\"18\" height=\"14\" fill=\"#f8fafc\"/>\n      <rect x=\"320\" y=\"222\" width=\"18\" height=\"14\" fill=\"#f8fafc\"/>\n    </svg>",
    "stem": "Look at the photograph and select the statement that best describes what you see.",
    "audioText": "(A) A presentation screen displays information above a conference table. (B) Meeting attendees are taking seats around the podium. (C) Chairs are being stacked in the corner of the room. (D) The projection screen has been retracted into the ceiling.",
    "choices": [
      "A presentation screen displays information above a conference table.",
      "Meeting attendees are taking seats around the podium.",
      "Chairs are being stacked in the corner of the room.",
      "The projection screen has been retracted into the ceiling."
    ],
    "answer": 0,
    "explanation_vi": "Bức tranh cho thấy màn hình máy chiếu lớn đang hiển thị lưu đồ tiến trình sự cố phía trên chiếc bàn hội nghị hình bầu dục -> Câu (A) miêu tả hoàn toàn chính xác.",
    "trap": "Câu (B) bẫy người tham gia đang ngồi vào chỗ (không có người); Câu (C) bẫy ghế bị xếp chồng 'being stacked'; Câu (D) bẫy màn hình bị cuốn lên trần.",
    "examTip": "Các từ chỉ vị trí không gian như 'above', 'adjacent to', 'surrounding', 'alongside' là trọng tâm thường xuyên xuất hiện ở Part 1.",
    "tags": {
      "part": "Part 1",
      "category": "Photographs",
      "topic": "War Room",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "display",
        "ipa": "/dɪˈspleɪ/",
        "pos": "v",
        "meaning": "trưng bày, trình chiếu"
      },
      {
        "word": "conference",
        "ipa": "/ˈkɒn.fər.əns/",
        "pos": "n",
        "meaning": "hội nghị, cuộc họp"
      }
    ]
  },
  {
    "id": "c3-p4-01",
    "chapter": 3,
    "part": 4,
    "talkId": "talk-c3-01",
    "speaker": "Security Workshop Facilitator",
    "dialogue_en": "Welcome everyone to NovaBank's Annual Cybersecurity Awareness and Compliance Workshop. I am delighted to see representatives from both branch operations and administrative departments here this morning. Today's program focuses on strengthening our human firewall against sophisticated social engineering tactics and zero-day vulnerabilities. In our first session, our guest speaker, Dr. Raymond Vance from the National Cyber Defense Institute, will walk us through real-world case studies of credential theft and token hijacking. Following that, we will conduct a hands-on simulation where each table will analyze deceptive email headers. Before we begin our introductory keynote, please ensure that all mobile phones and handheld devices are silenced to minimize distractions. In addition, please note that refreshments are available in the foyer behind the auditorium throughout the day. Let us give a warm welcome to Dr. Vance.",
    "dialogue_vi": "Chào mừng toàn thể anh chị đến với Hội thảo Thường niên Nâng cao Nhận thức và Tuân thủ An toàn Thông tin của NovaBank. Tôi rất vui mừng được đón tiếp các đại diện từ chi nhánh và khối văn phòng. Chương trình hôm nay tập trung củng cố 'bức tường lửa con người' trước các thủ thuật lừa đảo phi kỹ thuật và lỗ hổng zero-day. Trong phiên đầu tiên, diễn giả khách mời - Tiến sĩ Raymond Vance từ Viện Phòng thủ Không gian Mạng Quốc gia sẽ phân tích các tình huống thực tế về chiếm đoạt tài khoản và token xác thực. Sau đó, chúng ta sẽ thực hành phân tích header email giả mạo theo từng bàn. Trước khi bắt đầu bài phát biểu mở màn, vui lòng chuyển điện thoại và thiết bị cầm tay sang chế độ im lặng. Nước uống giải khát được phục vụ tại sảnh sau hội trường. Xin nhiệt liệt chào đón Tiến sĩ Vance.",
    "situation_vi": "03:00 - Lắng nghe bài phát biểu khai mạc khóa đào tạo nâng cao nhận thức bảo mật NovaBank.",
    "stem": "What is the primary theme of today's workshop?",
    "audioText": "Welcome everyone to NovaBank's Annual Cybersecurity Awareness and Compliance Workshop. I am delighted to see representatives from both branch operations and administrative departments here this morning. Today's program focuses on strengthening our human firewall against sophisticated social engineering tactics and zero-day vulnerabilities. In our first session, our guest speaker, Dr. Raymond Vance from the National Cyber Defense Institute, will walk us through real-world case studies of credential theft and token hijacking. Following that, we will conduct a hands-on simulation where each table will analyze deceptive email headers. Before we begin our introductory keynote, please ensure that all mobile phones and handheld devices are silenced to minimize distractions. In addition, please note that refreshments are available in the foyer behind the auditorium throughout the day. Let us give a warm welcome to Dr. Vance. Question: What is the primary theme of today's workshop?",
    "choices": [
      "Strategies for expanding retail branch networks",
      "Defending against social engineering and cyber threats",
      "Techniques for preparing annual income tax returns",
      "Guidelines for office furniture and ergonomic design"
    ],
    "answer": 1,
    "explanation_vi": "Người nói công bố mục tiêu: 'Today's program focuses on strengthening our human firewall against sophisticated social engineering tactics and zero-day vulnerabilities' -> Phòng chống tấn công phi kỹ thuật và các hiểm họa an ninh mạng.",
    "trap": "Bẫy mở rộng chi nhánh bán lẻ và bẫy thiết kế nội thất văn phòng.",
    "examTip": "Cụm 'strengthening human firewall' và 'social engineering' liên quan trực tiếp đến phòng thủ an ninh thông tin (cyber defense).",
    "tags": {
      "part": "Part 4",
      "category": "Listening",
      "topic": "Workshop Opening",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "compliance",
        "ipa": "/kəmˈplaɪ.əns/",
        "pos": "n",
        "meaning": "sự tuân thủ chính sách"
      },
      {
        "word": "facilitator",
        "ipa": "/fəˈsɪl.ɪ.teɪ.tər/",
        "pos": "n",
        "meaning": "người điều phối chương trình"
      }
    ]
  },
  {
    "id": "c3-p4-02",
    "chapter": 3,
    "part": 4,
    "talkId": "talk-c3-01",
    "speaker": "Security Workshop Facilitator",
    "dialogue_en": "In our first session, our guest speaker, Dr. Raymond Vance from the National Cyber Defense Institute, will walk us through real-world case studies of credential theft and token hijacking.",
    "dialogue_vi": "Trong phiên đầu tiên, diễn giả khách mời - Tiến sĩ Raymond Vance từ Viện Phòng thủ Không gian Mạng Quốc gia sẽ phân tích các tình huống thực tế về chiếm đoạt tài khoản và token xác thực.",
    "situation_vi": "03:00 - Câu hỏi về danh tính và chuyên môn của diễn giả khách mời.",
    "stem": "Who is Dr. Raymond Vance?",
    "audioText": "Question: Who is Dr. Raymond Vance?",
    "choices": [
      "The newly appointed chief financial officer of NovaBank",
      "An expert guest speaker from a cyber defense institute",
      "A building contractor supervising auditorium renovations",
      "A software developer from an overseas subsidiary"
    ],
    "answer": 1,
    "explanation_vi": "Người dẫn chương trình giới thiệu: 'our guest speaker, Dr. Raymond Vance from the National Cyber Defense Institute' -> Diễn giả khách mời từ Viện Phòng thủ Không gian Mạng.",
    "trap": "Bẫy Giám đốc Tài chính CFO của NovaBank hoặc kỹ sư phần mềm nước ngoài.",
    "examTip": "Các danh từ chỉ vai trò như 'guest speaker', 'keynote presenter' thường là từ khóa nhận diện trong Part 4.",
    "tags": {
      "part": "Part 4",
      "category": "Listening",
      "topic": "Speaker Identity",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "hijacking",
        "ipa": "/ˈhaɪ.dʒæk.ɪŋ/",
        "pos": "n",
        "meaning": "sự chiếm đoạt quyền điều khiển"
      },
      {
        "word": "institute",
        "ipa": "/ˈɪn.stɪ.tʃuːt/",
        "pos": "n",
        "meaning": "viện nghiên cứu"
      }
    ]
  },
  {
    "id": "c3-p4-03",
    "chapter": 3,
    "part": 4,
    "talkId": "talk-c3-01",
    "speaker": "Security Workshop Facilitator",
    "dialogue_en": "Before we begin our introductory keynote, please ensure that all mobile phones and handheld devices are silenced to minimize distractions.",
    "dialogue_vi": "Trước khi bắt đầu bài phát biểu mở màn, vui lòng chuyển điện thoại và thiết bị cầm tay sang chế độ im lặng để giảm thiểu sự xao nhãng.",
    "situation_vi": "03:00 - Câu hỏi về quy định phòng hội thảo đối với người tham dự.",
    "stem": "What are attendees requested to do before the presentation begins?",
    "audioText": "Question: What are attendees requested to do before the presentation begins?",
    "choices": [
      "Submit their written evaluation forms to the front desk",
      "Silence their mobile phones and electronic devices",
      "Move to the front row seats in the auditorium",
      "Register their personal laptop serial numbers in the foyer"
    ],
    "answer": 1,
    "explanation_vi": "Người điều phối nhắc nhở: 'please ensure that all mobile phones and handheld devices are silenced to minimize distractions' -> Chuyển điện thoại và thiết bị di động về chế độ im lặng.",
    "trap": "Bẫy nộp phiếu đánh giá trước khi nghe (phiếu đánh giá thường nộp sau cùng) và bẫy chuyển lên hàng ghế đầu.",
    "examTip": "Yêu cầu 'silence mobile phones' hoặc 'turn off electronic devices' là thông báo kinh điển xuất hiện lặp đi lặp lại trong các bài nói hội nghị của TOEIC Part 4.",
    "tags": {
      "part": "Part 4",
      "category": "Listening",
      "topic": "Auditorium Etiquette",
      "difficulty": "Easy"
    },
    "vocab": [
      {
        "word": "silence",
        "ipa": "/ˈsaɪ.ləns/",
        "pos": "v",
        "meaning": "tắt chuông, chuyển về chế độ im lặng"
      },
      {
        "word": "distraction",
        "ipa": "/dɪˈstræk.ʃən/",
        "pos": "n",
        "meaning": "sự xao nhãng, làm phiền"
      }
    ]
  }
];
