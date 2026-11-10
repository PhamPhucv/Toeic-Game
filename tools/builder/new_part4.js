/**
 * TOEIC PART 4: SHORT TALKS (ĐỘC THOẠI NGẮN NGHIỆP VỤ SOC & NGÂN HÀNG)
 * 12 câu hỏi (4 bài nói độc thoại x 3 câu hỏi)
 * 100% nguyên bản, phản ánh đúng cấu trúc đề thi TOEIC ETS:
 * - Talk 1: Thông báo an ninh khẩn từ CISO Helen Kang
 * - Talk 2: Tin nhắn thoại từ Trưởng ca Dave gửi Đội phản ứng sự cố
 * - Talk 3: Phát biểu khai mạc hội thảo nâng cao nhận thức bảo mật
 * - Talk 4: Thông báo tổng đài tự động về lịch bảo trì hệ thống Core Banking Swift
 */

const part4Questions = [
  /* =========================================================================
     TALK 1: CISO EMERGENCY SECURITY BROADCAST (Chapter 1)
     ========================================================================= */
  {
    id: "c1-p4-01",
    chapter: 1,
    part: 4,
    talkId: "talk-c1-01",
    speaker: "Helen Kang (CISO Broadcast)",
    dialogue_en: "Good morning, NovaBank staff. This is Chief Information Security Officer Helen Kang with an urgent security broadcast. Late last night, our Security Operations Center detected a coordinated phishing campaign attempting to compromise employee credentials. While perimeter firewalls intercepted the majority of suspicious messages, several malicious attachments may have reached internal mailboxes. As a precautionary measure, all personnel are required to change their network passwords before five o'clock this afternoon using our self-service portal. Please make sure your new password contains at least fourteen characters, including numbers and symbols. If you notice any unusual password reset requests or unprompted authentication prompts on your mobile device, please report them to extension four-one-one-zero immediately. Thank you for your vigilance.",
    dialogue_vi: "Xin chào toàn thể nhân viên NovaBank. Tôi là Giám đốc An toàn Thông tin Helen Kang với thông báo an ninh khẩn. Đêm qua, Trung tâm SOC đã phát hiện một chiến dịch phishing quy mô lớn nhắm vào tài khoản nhân viên. Mặc dù tường lửa đã chặn phần lớn, một số tệp đính kèm độc hại có thể đã lọt vào hộp thư nội bộ. Để phòng ngừa, tất cả nhân viên phải đổi mật khẩu mạng trước 17:00 chiều nay qua cổng tự phục vụ. Mật khẩu mới phải dài ít nhất 14 ký tự gồm chữ số và ký tự đặc biệt. Nếu thấy bất kỳ yêu cầu đặt lại mật khẩu đáng ngờ nào trên điện thoại, hãy báo ngay cho máy lẻ 4110. Cảm ơn sự cảnh giác của các bạn.",
    situation_vi: "01:00 - Lắng nghe thông báo an ninh khẩn cấp từ Giám đốc CISO Helen Kang phát trên loa nội bộ ngân hàng.",
    stem: "What is the primary purpose of the broadcast announcement?",
    audioText: "Good morning, NovaBank staff. This is Chief Information Security Officer Helen Kang with an urgent security broadcast. Late last night, our Security Operations Center detected a coordinated phishing campaign attempting to compromise employee credentials. While perimeter firewalls intercepted the majority of suspicious messages, several malicious attachments may have reached internal mailboxes. As a precautionary measure, all personnel are required to change their network passwords before five o'clock this afternoon using our self-service portal. Please make sure your new password contains at least fourteen characters, including numbers and symbols. If you notice any unusual password reset requests or unprompted authentication prompts on your mobile device, please report them to extension four-one-one-zero immediately. Thank you for your vigilance. Question: What is the primary purpose of the broadcast announcement?",
    choices: [
      "To announce an urgent requirement for password changes",
      "To introduce a newly appointed department manager",
      "To schedule routine server hardware maintenance",
      "To review quarterly corporate financial earnings"
    ],
    answer: 0,
    explanation_vi: "CISO Helen Kang phát đi thông báo khẩn: 'As a precautionary measure, all personnel are required to change their network passwords before five o'clock this afternoon' -> Mục đích chính là thông báo yêu cầu đổi mật khẩu khẩn cấp.",
    trap: "Bẫy bảo trì máy chủ (server maintenance) và bẫy công bố báo cáo tài chính quý.",
    examTip: "Câu hỏi mục đích chính (purpose/topic) của bài nói Part 4 luôn được giải đáp ngay trong 2-3 câu mở đầu của người nói.",
    tags: {
      part: "Part 4",
      category: "Listening",
      topic: "Security Broadcast",
      difficulty: "Easy"
    },
    vocab: [
      { word: "precautionary", ipa: "/prɪˈkɔː.ʃən.ər.i/", pos: "adj", meaning: "có tính chất phòng ngừa" },
      { word: "vigilance", ipa: "/ˈvɪdʒ.əl.əns/", pos: "n", meaning: "sự cảnh giác, tỉnh táo" }
    ]
  },
  {
    id: "c1-p4-02",
    chapter: 1,
    part: 4,
    talkId: "talk-c1-01",
    speaker: "Helen Kang (CISO Broadcast)",
    dialogue_en: "All personnel are required to change their network passwords before five o'clock this afternoon using our self-service portal.",
    dialogue_vi: "Tất cả nhân viên bắt buộc phải đổi mật khẩu mạng trước 17:00 chiều nay qua cổng tự phục vụ.",
    situation_vi: "01:00 - Câu hỏi chi tiết về thời hạn và yêu cầu thực hiện của thông báo CISO.",
    stem: "What are employees instructed to do before 5:00 PM today?",
    audioText: "Question: What are employees instructed to do before 5:00 PM today?",
    choices: [
      "Submit their overtime timesheets to payroll",
      "Update their network passwords via the self-service portal",
      "Attend an emergency briefing in the auditorium",
      "Shut down their desktop workstations completely"
    ],
    answer: 1,
    explanation_vi: "Helen Kang chỉ thị: 'all personnel are required to change their network passwords before five o'clock this afternoon using our self-service portal' -> Cập nhật mật khẩu qua cổng tự phục vụ.",
    trap: "Bẫy 'shut down workstations' và bẫy nộp bảng chấm công 'timesheets'.",
    examTip: "Khi nghe thấy mốc thời gian ('before five o'clock'), hãy tập trung ghi nhớ động từ hành động đi kèm ngay trước hoặc sau mốc thời gian đó.",
    tags: {
      part: "Part 4",
      category: "Listening",
      topic: "Deadline Instruction",
      difficulty: "Easy"
    },
    vocab: [
      { word: "portal", ipa: "/ˈpɔː.təl/", pos: "n", meaning: "cổng thông tin điện tử nội bộ" },
      { word: "personnel", ipa: "/ˌpɜː.sənˈel/", pos: "n", meaning: "toàn thể nhân viên, nhân sự" }
    ]
  },
  {
    id: "c1-p4-03",
    chapter: 1,
    part: 4,
    talkId: "talk-c1-01",
    speaker: "Helen Kang (CISO Broadcast)",
    dialogue_en: "If you notice any unusual password reset requests or unprompted authentication prompts on your mobile device, please report them to extension four-one-one-zero immediately.",
    dialogue_vi: "Nếu thấy yêu cầu đặt lại mật khẩu bất thường hoặc thông báo xác thực không rõ nguồn gốc trên điện thoại, hãy báo ngay cho số máy lẻ 4110.",
    situation_vi: "01:00 - Câu hỏi về kênh liên hệ khi phát hiện bất thường.",
    stem: "How should staff members report suspicious activity?",
    audioText: "Question: How should staff members report suspicious activity?",
    choices: [
      "By sending an email to the marketing director",
      "By posting a message on the public company website",
      "By calling telephone extension 4110 immediately",
      "By submitting a written memo by the end of the week"
    ],
    answer: 2,
    explanation_vi: "Thông báo nêu rõ: 'please report them to extension four-one-one-zero immediately' -> Gọi điện ngay cho số máy lẻ 4110.",
    trap: "Bẫy gửi email cho giám đốc marketing hoặc gửi văn bản vào cuối tuần (trái ngược với tính chất khẩn cấp 'immediately').",
    examTip: "Số máy lẻ (extension number) trong bài nghe TOEIC thường được đọc từng chữ số riêng biệt ('four-one-one-zero' thay vì 'four thousand...').",
    tags: {
      part: "Part 4",
      category: "Listening",
      topic: "Contact Protocol",
      difficulty: "Medium"
    },
    vocab: [
      { word: "extension", ipa: "/ɪkˈsten.ʃən/", pos: "n", meaning: "số máy lẻ điện thoại nội bộ" },
      { word: "unprompted", ipa: "/ʌnˈprɒmp.tɪd/", pos: "adj", meaning: "tự phát, không có yêu cầu trước" }
    ]
  },

  /* =========================================================================
     TALK 2: DAVE'S VOICEMAIL TO INCIDENT RESPONSE TEAM (Chapter 2)
     ========================================================================= */
  {
    id: "c2-p4-01",
    chapter: 2,
    part: 4,
    talkId: "talk-c2-01",
    speaker: "Dave (Incident Lead Voicemail)",
    dialogue_en: "Hello, Incident Response Team, this is Dave from the midnight SOC shift leaving a high-priority message at two fifteen A.M. We have successfully contained the ransomware incident that originated from a compromised accounting terminal in our North Branch. Sarah has already severed the affected machine's network connectivity and isolated the local subnet to prevent lateral movement. However, forensic scans indicate that the malware attempted to establish an encrypted tunnel to an external server right before disconnection. I need the primary forensics investigators to assemble in Conference Room B on the fourth floor at three sharp. Please bring your encrypted laptops and memory dump analysis logs so we can determine whether any sensitive customer banking records were extracted. Please acknowledge receipt of this message via our secure messaging channel as soon as you listen to it. See you shortly.",
    dialogue_vi: "Chào Đội Phản ứng Sự cố, tôi là Dave từ ca trực SOC nửa đêm để lại tin nhắn khẩn cấp lúc 02:15 sáng. Chúng tôi đã cô lập thành công sự cố mã độc tống tiền phát tán từ một máy trạm kế toán ở Chi nhánh Phía Bắc. Sarah đã ngắt kết nối mạng máy bị nhiễm và cách ly phân mạng để ngăn lây lan ngang. Tuy nhiên, quét pháp y cho thấy mã độc đã cố thiết lập đường hầm mã hóa ra máy chủ bên ngoài ngay trước khi bị ngắt. Tôi cần các điều tra viên pháp y chính có mặt tại Phòng họp B trên tầng 4 đúng 03:00. Hãy mang theo laptop mã hóa và nhật ký phân tích dump bộ nhớ để xác định xem hồ sơ khách hàng có bị rút trích không. Hãy xác nhận đã nhận tin nhắn qua kênh bảo mật. Hẹn gặp lại các bạn.",
    situation_vi: "02:15 - Nghe hộp thư thoại khẩn cấp của Trưởng ca Dave gửi Đội phản ứng sự cố.",
    stem: "Why is the speaker contacting the incident response team?",
    audioText: "Hello, Incident Response Team, this is Dave from the midnight SOC shift leaving a high-priority message at two fifteen A.M. We have successfully contained the ransomware incident that originated from a compromised accounting terminal in our North Branch. Sarah has already severed the affected machine's network connectivity and isolated the local subnet to prevent lateral movement. However, forensic scans indicate that the malware attempted to establish an encrypted tunnel to an external server right before disconnection. I need the primary forensics investigators to assemble in Conference Room B on the fourth floor at three sharp. Please bring your encrypted laptops and memory dump analysis logs so we can determine whether any sensitive customer banking records were extracted. Please acknowledge receipt of this message via our secure messaging channel as soon as you listen to it. See you shortly. Question: Why is the speaker contacting the incident response team?",
    choices: [
      "To provide an incident update and convene an emergency meeting",
      "To request price estimates for desktop hardware replacement",
      "To cancel a scheduled cybersecurity training session",
      "To complain about defective network cables in the branch"
    ],
    answer: 0,
    explanation_vi: "Dave gọi điện thông báo diễn biến sự cố ransomware vừa được cô lập và triệu tập cuộc họp khẩn lúc 03:00 tại Phòng họp B ('assemble in Conference Room B... at three sharp').",
    trap: "Bẫy mua sắm thiết bị mới và bẫy hủy buổi đào tạo.",
    examTip: "Các từ vựng như 'convene a meeting' (triệu tập cuộc họp), 'provide an update' (cung cấp thông tin cập nhật) là đáp án cực kỳ quen thuộc cho câu hỏi mục đích trong Part 4.",
    tags: {
      part: "Part 4",
      category: "Listening",
      topic: "Incident Voicemail",
      difficulty: "Medium"
    },
    vocab: [
      { word: "convene", ipa: "/kənˈviːn/", pos: "v", meaning: "triệu tập (cuộc họp)" },
      { word: "lateral", ipa: "/ˈlæt.ər.əl/", pos: "adj", meaning: "theo chiều ngang (lây lan ngang)" }
    ]
  },
  {
    id: "c2-p4-02",
    chapter: 2,
    part: 4,
    talkId: "talk-c2-01",
    speaker: "Dave (Incident Lead Voicemail)",
    dialogue_en: "Sarah has already severed the affected machine's network connectivity and isolated the local subnet to prevent lateral movement.",
    dialogue_vi: "Sarah đã ngắt kết nối mạng máy bị nhiễm và cách ly phân mạng để ngăn lây lan ngang.",
    situation_vi: "02:15 - Câu hỏi về hành động ứng cứu kỹ thuật đã hoàn thành.",
    stem: "What action has Sarah already taken?",
    audioText: "Question: What action has Sarah already taken?",
    choices: [
      "She formatted all customer transaction databases",
      "She disconnected the compromised machine and isolated the subnet",
      "She published a press release regarding the security incident",
      "She ordered new firewalls for the North Branch"
    ],
    answer: 1,
    explanation_vi: "Dave báo cáo hành động của Sarah: 'Sarah has already severed the affected machine's network connectivity and isolated the local subnet' -> Ngắt mạng máy bị xâm phạm và cách ly phân mạng.",
    trap: "Bẫy định dạng cơ sở dữ liệu (formatted databases) và bẫy phát thông cáo báo chí (press release).",
    examTip: "Chú ý phân biệt hành động đã xảy ra ('already taken') với hành động sắp diễn ra trong tương lai ('need to assemble', 'bring laptops').",
    tags: {
      part: "Part 4",
      category: "Listening",
      topic: "Action Verification",
      difficulty: "Medium"
    },
    vocab: [
      { word: "sever", ipa: "/ˈsev.ər/", pos: "v", meaning: "cắt đứt, ngắt hoàn toàn" },
      { word: "isolate", ipa: "/ˈaɪ.sə.leɪt/", pos: "v", meaning: "cô lập, cách ly" }
    ]
  },
  {
    id: "c2-p4-03",
    chapter: 2,
    part: 4,
    talkId: "talk-c2-01",
    speaker: "Dave (Incident Lead Voicemail)",
    dialogue_en: "Please bring your encrypted laptops and memory dump analysis logs so we can determine whether any sensitive customer banking records were extracted.",
    dialogue_vi: "Hãy mang theo laptop mã hóa và nhật ký phân tích dump bộ nhớ để xác định xem hồ sơ khách hàng có bị rút trích không.",
    situation_vi: "02:15 - Câu hỏi về tài liệu và trang bị cần mang theo khi họp.",
    stem: "What are the investigators asked to bring to Conference Room B?",
    audioText: "Question: What are the investigators asked to bring to Conference Room B?",
    choices: [
      "Physical keys to the server room cabinets",
      "Encrypted laptops and memory dump analysis logs",
      "Printed copies of employee contracts",
      "Spare power adapters and Ethernet cables"
    ],
    answer: 1,
    explanation_vi: "Dave yêu cầu: 'Please bring your encrypted laptops and memory dump analysis logs' -> Mang theo máy tính mã hóa và nhật ký phân tích bộ nhớ.",
    trap: "Bẫy chìa khóa vật lý tủ máy chủ và hợp đồng lao động.",
    examTip: "Khi câu hỏi hỏi về vật dụng cần mang ('What to bring'), hãy lắng nghe kỹ động từ 'bring', 'carry' hoặc 'have with you'.",
    tags: {
      part: "Part 4",
      category: "Listening",
      topic: "Meeting Requirement",
      difficulty: "Easy"
    },
    vocab: [
      { word: "encrypted", ipa: "/ɪnˈkrɪp.tɪd/", pos: "adj", meaning: "được mã hóa bảo mật" },
      { word: "dump", ipa: "/dʌmp/", pos: "n", meaning: "bản sao trích xuất bộ nhớ tạm" }
    ]
  },

  /* =========================================================================
     TALK 3: CYBERSECURITY WORKSHOP OPENING ADDRESS (Chapter 3)
     ========================================================================= */
  {
    id: "c3-p4-01",
    chapter: 3,
    part: 4,
    talkId: "talk-c3-01",
    speaker: "Security Workshop Facilitator",
    dialogue_en: "Welcome everyone to NovaBank's Annual Cybersecurity Awareness and Compliance Workshop. I am delighted to see representatives from both branch operations and administrative departments here this morning. Today's program focuses on strengthening our human firewall against sophisticated social engineering tactics and zero-day vulnerabilities. In our first session, our guest speaker, Dr. Raymond Vance from the National Cyber Defense Institute, will walk us through real-world case studies of credential theft and token hijacking. Following that, we will conduct a hands-on simulation where each table will analyze deceptive email headers. Before we begin our introductory keynote, please ensure that all mobile phones and handheld devices are silenced to minimize distractions. In addition, please note that refreshments are available in the foyer behind the auditorium throughout the day. Let us give a warm welcome to Dr. Vance.",
    dialogue_vi: "Chào mừng toàn thể anh chị đến với Hội thảo Thường niên Nâng cao Nhận thức và Tuân thủ An toàn Thông tin của NovaBank. Tôi rất vui mừng được đón tiếp các đại diện từ chi nhánh và khối văn phòng. Chương trình hôm nay tập trung củng cố 'bức tường lửa con người' trước các thủ thuật lừa đảo phi kỹ thuật và lỗ hổng zero-day. Trong phiên đầu tiên, diễn giả khách mời - Tiến sĩ Raymond Vance từ Viện Phòng thủ Không gian Mạng Quốc gia sẽ phân tích các tình huống thực tế về chiếm đoạt tài khoản và token xác thực. Sau đó, chúng ta sẽ thực hành phân tích header email giả mạo theo từng bàn. Trước khi bắt đầu bài phát biểu mở màn, vui lòng chuyển điện thoại và thiết bị cầm tay sang chế độ im lặng. Nước uống giải khát được phục vụ tại sảnh sau hội trường. Xin nhiệt liệt chào đón Tiến sĩ Vance.",
    situation_vi: "03:00 - Lắng nghe bài phát biểu khai mạc khóa đào tạo nâng cao nhận thức bảo mật NovaBank.",
    stem: "What is the primary theme of today's workshop?",
    audioText: "Welcome everyone to NovaBank's Annual Cybersecurity Awareness and Compliance Workshop. I am delighted to see representatives from both branch operations and administrative departments here this morning. Today's program focuses on strengthening our human firewall against sophisticated social engineering tactics and zero-day vulnerabilities. In our first session, our guest speaker, Dr. Raymond Vance from the National Cyber Defense Institute, will walk us through real-world case studies of credential theft and token hijacking. Following that, we will conduct a hands-on simulation where each table will analyze deceptive email headers. Before we begin our introductory keynote, please ensure that all mobile phones and handheld devices are silenced to minimize distractions. In addition, please note that refreshments are available in the foyer behind the auditorium throughout the day. Let us give a warm welcome to Dr. Vance. Question: What is the primary theme of today's workshop?",
    choices: [
      "Strategies for expanding retail branch networks",
      "Defending against social engineering and cyber threats",
      "Techniques for preparing annual income tax returns",
      "Guidelines for office furniture and ergonomic design"
    ],
    answer: 1,
    explanation_vi: "Người nói công bố mục tiêu: 'Today's program focuses on strengthening our human firewall against sophisticated social engineering tactics and zero-day vulnerabilities' -> Phòng chống tấn công phi kỹ thuật và các hiểm họa an ninh mạng.",
    trap: "Bẫy mở rộng chi nhánh bán lẻ và bẫy thiết kế nội thất văn phòng.",
    examTip: "Cụm 'strengthening human firewall' và 'social engineering' liên quan trực tiếp đến phòng thủ an ninh thông tin (cyber defense).",
    tags: {
      part: "Part 4",
      category: "Listening",
      topic: "Workshop Opening",
      difficulty: "Easy"
    },
    vocab: [
      { word: "compliance", ipa: "/kəmˈplaɪ.əns/", pos: "n", meaning: "sự tuân thủ chính sách" },
      { word: "facilitator", ipa: "/fəˈsɪl.ɪ.teɪ.tər/", pos: "n", meaning: "người điều phối chương trình" }
    ]
  },
  {
    id: "c3-p4-02",
    chapter: 3,
    part: 4,
    talkId: "talk-c3-01",
    speaker: "Security Workshop Facilitator",
    dialogue_en: "In our first session, our guest speaker, Dr. Raymond Vance from the National Cyber Defense Institute, will walk us through real-world case studies of credential theft and token hijacking.",
    dialogue_vi: "Trong phiên đầu tiên, diễn giả khách mời - Tiến sĩ Raymond Vance từ Viện Phòng thủ Không gian Mạng Quốc gia sẽ phân tích các tình huống thực tế về chiếm đoạt tài khoản và token xác thực.",
    situation_vi: "03:00 - Câu hỏi về danh tính và chuyên môn của diễn giả khách mời.",
    stem: "Who is Dr. Raymond Vance?",
    audioText: "Question: Who is Dr. Raymond Vance?",
    choices: [
      "The newly appointed chief financial officer of NovaBank",
      "An expert guest speaker from a cyber defense institute",
      "A building contractor supervising auditorium renovations",
      "A software developer from an overseas subsidiary"
    ],
    answer: 1,
    explanation_vi: "Người dẫn chương trình giới thiệu: 'our guest speaker, Dr. Raymond Vance from the National Cyber Defense Institute' -> Diễn giả khách mời từ Viện Phòng thủ Không gian Mạng.",
    trap: "Bẫy Giám đốc Tài chính CFO của NovaBank hoặc kỹ sư phần mềm nước ngoài.",
    examTip: "Các danh từ chỉ vai trò như 'guest speaker', 'keynote presenter' thường là từ khóa nhận diện trong Part 4.",
    tags: {
      part: "Part 4",
      category: "Listening",
      topic: "Speaker Identity",
      difficulty: "Easy"
    },
    vocab: [
      { word: "hijacking", ipa: "/ˈhaɪ.dʒæk.ɪŋ/", pos: "n", meaning: "sự chiếm đoạt quyền điều khiển" },
      { word: "institute", ipa: "/ˈɪn.stɪ.tʃuːt/", pos: "n", meaning: "viện nghiên cứu" }
    ]
  },
  {
    id: "c3-p4-03",
    chapter: 3,
    part: 4,
    talkId: "talk-c3-01",
    speaker: "Security Workshop Facilitator",
    dialogue_en: "Before we begin our introductory keynote, please ensure that all mobile phones and handheld devices are silenced to minimize distractions.",
    dialogue_vi: "Trước khi bắt đầu bài phát biểu mở màn, vui lòng chuyển điện thoại và thiết bị cầm tay sang chế độ im lặng để giảm thiểu sự xao nhãng.",
    situation_vi: "03:00 - Câu hỏi về quy định phòng hội thảo đối với người tham dự.",
    stem: "What are attendees requested to do before the presentation begins?",
    audioText: "Question: What are attendees requested to do before the presentation begins?",
    choices: [
      "Submit their written evaluation forms to the front desk",
      "Silence their mobile phones and electronic devices",
      "Move to the front row seats in the auditorium",
      "Register their personal laptop serial numbers in the foyer"
    ],
    answer: 1,
    explanation_vi: "Người điều phối nhắc nhở: 'please ensure that all mobile phones and handheld devices are silenced to minimize distractions' -> Chuyển điện thoại và thiết bị di động về chế độ im lặng.",
    trap: "Bẫy nộp phiếu đánh giá trước khi nghe (phiếu đánh giá thường nộp sau cùng) và bẫy chuyển lên hàng ghế đầu.",
    examTip: "Yêu cầu 'silence mobile phones' hoặc 'turn off electronic devices' là thông báo kinh điển xuất hiện lặp đi lặp lại trong các bài nói hội nghị của TOEIC Part 4.",
    tags: {
      part: "Part 4",
      category: "Listening",
      topic: "Auditorium Etiquette",
      difficulty: "Easy"
    },
    vocab: [
      { word: "silence", ipa: "/ˈsaɪ.ləns/", pos: "v", meaning: "tắt chuông, chuyển về chế độ im lặng" },
      { word: "distraction", ipa: "/dɪˈstræk.ʃən/", pos: "n", meaning: "sự xao nhãng, làm phiền" }
    ]
  },

  /* =========================================================================
     TALK 4: AUTOMATED HELPDESK SYSTEM ANNOUNCEMENT (Chapter 4)
     ========================================================================= */
  {
    id: "c4-p4-01",
    chapter: 4,
    part: 4,
    talkId: "talk-c4-01",
    speaker: "NovaBank Automated Phone System",
    dialogue_en: "Thank you for calling the NovaBank Commercial Support Center. Please listen carefully as our menu options have recently changed. Please be advised that our online banking portal and international Swift wire transfer services will undergo vital security infrastructure upgrades this coming Sunday, November fifteenth, starting at midnight. Service will be temporarily unavailable until four o'clock Sunday morning while our engineering team deploys advanced encryption protocols. During this four-hour maintenance window, automated teller machines and debit card point-of-sale transactions will continue to function normally. For questions regarding pending domestic wire transfers, press one. To report a lost or compromised corporate credit card, press two to speak with an emergency security representative immediately. For all other corporate inquiries, please stay on the line or visit novabank.com/support. Thank you for choosing NovaBank.",
    dialogue_vi: "Cảm ơn quý khách đã gọi đến Trung tâm Hỗ trợ Doanh nghiệp NovaBank. Vui lòng chú ý lắng nghe vì các lựa chọn đã thay đổi. Cổng ngân hàng trực tuyến và dịch vụ chuyển tiền quốc tế Swift sẽ được nâng cấp hạ tầng bảo mật vào Chủ Nhật tới, ngày 15/11, bắt đầu từ nửa đêm. Dịch vụ sẽ tạm thời gián đoạn đến 04:00 sáng Chủ Nhật trong khi đội ngũ kỹ sư triển khai các giao thức mã hóa tiên tiến. Trong 4 giờ bảo trì này, cây ATM và thanh toán thẻ qua máy POS vẫn hoạt động bình thường. Để hỏi về chuyển tiền trong nước, bấm phím 1. Để báo mất hoặc nghi lộ thẻ tín dụng doanh nghiệp, bấm phím 2 để gặp chuyên viên an ninh khẩn cấp. Các yêu cầu khác xin giữ máy hoặc truy cập novabank.com/support.",
    situation_vi: "04:30 - Lắng nghe thông điệp tự động của tổng đài ngân hàng về lịch bảo trì mạng Swift.",
    stem: "What is the primary purpose of the recorded telephone message?",
    audioText: "Thank you for calling the NovaBank Commercial Support Center. Please listen carefully as our menu options have recently changed. Please be advised that our online banking portal and international Swift wire transfer services will undergo vital security infrastructure upgrades this coming Sunday, November fifteenth, starting at midnight. Service will be temporarily unavailable until four o'clock Sunday morning while our engineering team deploys advanced encryption protocols. During this four-hour maintenance window, automated teller machines and debit card point-of-sale transactions will continue to function normally. For questions regarding pending domestic wire transfers, press one. To report a lost or compromised corporate credit card, press two to speak with an emergency security representative immediately. For all other corporate inquiries, please stay on the line or visit novabank.com/support. Thank you for choosing NovaBank. Question: What is the primary purpose of the recorded telephone message?",
    choices: [
      "To notify customers of a scheduled service maintenance window",
      "To advertise introductory interest rates on commercial loans",
      "To explain the permanent closure of a downtown bank branch",
      "To invite corporate clients to an annual investment dinner"
    ],
    answer: 0,
    explanation_vi: "Đoạn ghi âm thông báo thời gian bảo trì nâng cấp hạ tầng bảo mật vào nửa đêm Chủ Nhật khiến cổng trực tuyến tạm gián đoạn -> Thông báo lịch bảo trì dịch vụ (scheduled service maintenance).",
    trap: "Bẫy quảng cáo lãi suất vay thương mại và bẫy đóng cửa vĩnh viễn chi nhánh.",
    examTip: "Cụm 'undergo maintenance / infrastructure upgrades' luôn tương ứng với mục đích thông báo lịch bảo trì hệ thống ('service maintenance window').",
    tags: {
      part: "Part 4",
      category: "Listening",
      topic: "Automated Phone Message",
      difficulty: "Easy"
    },
    vocab: [
      { word: "infrastructure", ipa: "/ˈɪn.frəˌstrʌk.tʃər/", pos: "n", meaning: "cơ sở hạ tầng" },
      { word: "compromised", ipa: "/ˈkɒm.prə.maɪzd/", pos: "adj", meaning: "bị xâm phạm, bị lộ lọt bảo mật" }
    ]
  },
  {
    id: "c4-p4-02",
    chapter: 4,
    part: 4,
    talkId: "talk-c4-01",
    speaker: "NovaBank Automated Phone System",
    dialogue_en: "During this four-hour maintenance window, automated teller machines and debit card point-of-sale transactions will continue to function normally.",
    dialogue_vi: "Trong 4 giờ bảo trì này, cây ATM và thanh toán thẻ qua máy POS vẫn hoạt động bình thường.",
    situation_vi: "04:30 - Câu hỏi về dịch vụ vẫn hoạt động liên tục trong thời gian bảo trì.",
    stem: "Which banking service will remain operational during the maintenance window?",
    audioText: "Question: Which banking service will remain operational during the maintenance window?",
    choices: [
      "The international Swift wire transfer network",
      "The online commercial banking web portal",
      "Automated teller machines and card point-of-sale terminals",
      "Real-time foreign currency exchange requests"
    ],
    answer: 2,
    explanation_vi: "Bản ghi âm nêu rõ dịch vụ không bị gián đoạn: 'automated teller machines and debit card point-of-sale transactions will continue to function normally' -> Cây ATM và máy quẹt thẻ POS.",
    trap: "Cổng trực tuyến (web portal) và mạng Swift quốc tế là 2 dịch vụ bị tạm dừng, không phải dịch vụ duy trì.",
    examTip: "Cực kỳ chú ý các từ mang nghĩa đối lập như 'temporarily unavailable' (tạm ngừng) vs 'continue to function normally / remain operational' (vẫn hoạt động bình thường).",
    tags: {
      part: "Part 4",
      category: "Listening",
      topic: "Service Continuity",
      difficulty: "Medium"
    },
    vocab: [
      { word: "operational", ipa: "/ˌɒp.ərˈeɪ.ʃən.əl/", pos: "adj", meaning: "đang hoạt động bình thường" },
      { word: "point-of-sale", ipa: "/ˌpɔɪnt.əvˈseɪl/", pos: "n", meaning: "điểm bán lẻ, máy POS thanh toán thẻ" }
    ]
  },
  {
    id: "c4-p4-03",
    chapter: 4,
    part: 4,
    talkId: "talk-c4-01",
    speaker: "NovaBank Automated Phone System",
    dialogue_en: "To report a lost or compromised corporate credit card, press two to speak with an emergency security representative immediately.",
    dialogue_vi: "Để báo mất hoặc nghi lộ thẻ tín dụng doanh nghiệp, bấm phím 2 để gặp chuyên viên an ninh khẩn cấp ngay.",
    situation_vi: "04:30 - Câu hỏi về thao tác bàn phím điện thoại để báo mất thẻ khẩn cấp.",
    stem: "What should callers do to report a compromised corporate card?",
    audioText: "Question: What should callers do to report a compromised corporate card?",
    choices: [
      "Press one on their telephone keypad",
      "Press two to connect with an emergency security representative",
      "Visit the physical bank branch on Monday morning",
      "Send a message via the general contact web form"
    ],
    answer: 1,
    explanation_vi: "Hệ thống chỉ dẫn: 'To report a lost or compromised corporate credit card, press two to speak with an emergency security representative immediately' -> Bấm phím 2.",
    trap: "Phím 1 là để hỏi về chuyển tiền trong nước (domestic wire transfers).",
    examTip: "Dạng bài thực đơn điện thoại (telephone phone menu) thường yêu cầu nối số phím bấm ('press one / press two') với dịch vụ tương ứng.",
    tags: {
      part: "Part 4",
      category: "Listening",
      topic: "Phone Navigation",
      difficulty: "Easy"
    },
    vocab: [
      { word: "keypad", ipa: "/ˈkiː.pæd/", pos: "n", meaning: "bàn phím số điện thoại" },
      { word: "representative", ipa: "/ˌrep.rɪˈzen.tə.tɪv/", pos: "n", meaning: "đại diện, chuyên viên hỗ trợ" }
    ]
  }
];

module.exports = part4Questions;
