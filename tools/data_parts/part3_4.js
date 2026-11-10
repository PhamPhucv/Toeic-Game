// Part 3 & Part 4 questions with speaker dialogues and audio transcripts
module.exports = {
  part3_4New: [
    // --- PART 3: CONVERSATIONS (2 SETS - 6 QUESTIONS) ---
    {
      id: "p3-set1",
      part: 3,
      level: 2,
      topic: "Enterprise Cloud Migration",
      skillTags: ["listening", "conversations", "it-project"],
      passage: "CONVERSATION (PART 3)\n[Man]: Good morning, Ms. Vance. Have you finalized the vendor selection for our enterprise database migration?\n[Woman]: Almost, Kevin. CloudSphere Solutions meets our scalability needs, but their quoted implementation timeline is two weeks longer than we planned.\n[Man]: That might delay our compliance audit. Why don't we ask if they can assign additional migration engineers to expedite the rollout?\n[Woman]: Good idea. I'll send an email to their account director before our afternoon meeting.",
      dialogue: [
        { speaker: "M", text: "Good morning, Ms. Vance. Have you finalized the vendor selection for our enterprise database migration?" },
        { speaker: "W", text: "Almost, Kevin. CloudSphere Solutions meets our scalability needs, but their quoted implementation timeline is two weeks longer than we planned." },
        { speaker: "M", text: "That might delay our compliance audit. Why don't we ask if they can assign additional migration engineers to expedite the rollout?" },
        { speaker: "W", text: "Good idea. I'll send an email to their account director before our afternoon meeting." }
      ],
      questions: [
        {
          id: "p3-001",
          stem: "What project are the speakers discussing?",
          choices: [
            "A database migration project",
            "An office renovation proposal",
            "A corporate website redesign",
            "An employee performance review"
          ],
          answer: 0,
          explanation_vi: "Người nam mở đầu câu hỏi về 'vendor selection for our enterprise database migration'.",
          trap: "Bẫy từ vựng 'website' và 'renovation' xuất hiện thường xuyên trong đề thi nhưng không phải ngữ cảnh đoạn này."
        },
        {
          id: "p3-002",
          stem: "What concern does the woman mention regarding CloudSphere Solutions?",
          choices: [
            "Their implementation timeline is too long.",
            "Their licensing fees exceed the budget.",
            "Their customer support hotline is unreliable.",
            "Their security certifications are expired."
          ],
          answer: 0,
          explanation_vi: "Người phụ nữ nói 'their quoted implementation timeline is two weeks longer than we planned'.",
          trap: "Bẫy suy diễn tài chính 'licensing fees' hoặc 'budget' dù người nói chỉ nhấn mạnh vào 'timeline'."
        },
        {
          id: "p3-003",
          stem: "What will the woman do before the afternoon meeting?",
          choices: [
            "Contact a company representative",
            "Draft a new contract proposal",
            "Conduct an internal audit",
            "Submit a revised project budget"
          ],
          answer: 0,
          explanation_vi: "Người phụ nữ nói 'I'll send an email to their account director' (paraphrase của 'Contact a company representative').",
          trap: "Bẫy từ đồng âm hoặc bẫy hành động khác liên quan đến 'audit' hay 'budget'."
        }
      ]
    },
    {
      id: "p3-set2",
      part: 3,
      level: 2,
      topic: "Workplace Phishing Incident",
      skillTags: ["listening", "conversations", "infosec", "incident"],
      passage: "CONVERSATION (PART 3)\n[Woman]: Marcus, did you receive an urgent message this morning asking to verify your email credentials on an external site?\n[Man]: Yes, I almost clicked the link, but I noticed the sender's domain had an extra letter in the corporate domain name.\n[Woman]: That's definitely a phishing attempt. The IT Security Operations Center warned us that fraudulent emails were circulating.\n[Man]: I'll forward the message as an attachment to abuse@hexatech.com right away so they can block the sender's IP address.",
      dialogue: [
        { speaker: "W", text: "Marcus, did you receive an urgent message this morning asking to verify your email credentials on an external site?" },
        { speaker: "M", text: "Yes, I almost clicked the link, but I noticed the sender's domain had an extra letter in the corporate domain name." },
        { speaker: "W", text: "That's definitely a phishing attempt. The IT Security Operations Center warned us that fraudulent emails were circulating." },
        { speaker: "M", text: "I'll forward the message as an attachment to abuse@hexatech.com right away so they can block the sender's IP address." }
      ],
      questions: [
        {
          id: "p3-004",
          stem: "What problem are the speakers discussing?",
          choices: [
            "A suspicious phishing email",
            "A malfunctioning office printer",
            "A lost corporate security badge",
            "An unexpected server power outage"
          ],
          answer: 0,
          explanation_vi: "Cả hai nhân vật bàn về email giả mạo yêu cầu xác thực thông tin đăng nhập ('phishing attempt').",
          trap: "Bẫy bối cảnh văn phòng thường gặp như mất thẻ (security badge) hay hỏng máy in (printer)."
        },
        {
          id: "p3-005",
          stem: "How did the man identify the message as fraudulent?",
          choices: [
            "He noticed an irregularity in the sender's email address.",
            "His web browser automatically blocked the attachment.",
            "His manager instructed him to ignore external emails.",
            "The email contained obvious spelling mistakes in the body."
          ],
          answer: 0,
          explanation_vi: "Người nam nói: 'the sender's domain had an extra letter in the corporate domain name' -> Nhận thấy dấu hiệu bất thường trong địa chỉ email gửi đến.",
          trap: "Bẫy 'obvious spelling mistakes' - một dấu hiệu phishing phổ biến nhưng không được nhân vật nam nhắc tới ở đây."
        },
        {
          id: "p3-006",
          stem: "What does the man promise to do immediately?",
          choices: [
            "Report the malicious message to the security team",
            "Change his corporate network password",
            "Call the human resources department",
            "Delete all emails from his personal inbox"
          ],
          answer: 0,
          explanation_vi: "Người nam nói 'I'll forward the message as an attachment to abuse@hexatech.com' -> Báo cáo email độc hại cho đội an ninh mạng.",
          trap: "Bẫy hành vi: Đổi mật khẩu ('change password') là phản xạ thông thường nhưng không phải lời hứa của người nam."
        }
      ]
    },

    // --- PART 4: TALKS & ANNOUNCEMENTS (2 SETS - 6 QUESTIONS) ---
    {
      id: "p4-set1",
      part: 4,
      level: 2,
      topic: "Corporate Software Upgrade Announcement",
      skillTags: ["listening", "talks", "it-announcement"],
      passage: "RECORDED TALK (PART 4)\nAttention all personnel. This is an announcement from the Global Information Technology Department. Beginning this Friday at 9:00 PM, we will initiate a comprehensive upgrade of our customer relationship management software across all corporate regional offices. During this scheduled maintenance window, the database will remain offline until Saturday at 6:00 AM. Please ensure you save all customer correspondence and log off your terminals before departing on Friday afternoon. If you anticipate needing emergency access to client account records over the weekend, please submit an expedited authorization request to the IT helpdesk before Thursday at 5:00 PM.",
      transcript: "Attention all personnel. This is an announcement from the Global Information Technology Department. Beginning this Friday at 9:00 PM, we will initiate a comprehensive upgrade of our customer relationship management software across all corporate regional offices. During this scheduled maintenance window, the database will remain offline until Saturday at 6:00 AM. Please ensure you save all customer correspondence and log off your terminals before departing on Friday afternoon. If you anticipate needing emergency access to client account records over the weekend, please submit an expedited authorization request to the IT helpdesk before Thursday at 5:00 PM.",
      questions: [
        {
          id: "p4-001",
          stem: "What is the primary purpose of the announcement?",
          choices: [
            "To inform employees of an upcoming software upgrade",
            "To introduce a new telecommuting policy",
            "To announce the hiring of an IT director",
            "To advertise a new customer discount program"
          ],
          answer: 0,
          explanation_vi: "Thông báo nêu rõ: 'we will initiate a comprehensive upgrade of our customer relationship management software'.",
          trap: "Bẫy từ 'customer' dẫn dụ người nghe chọn đáp án 'customer discount program' (Lựa chọn D)."
        },
        {
          id: "p4-002",
          stem: "When will the system maintenance conclude?",
          choices: [
            "Saturday at 6:00 AM",
            "Friday at 9:00 PM",
            "Thursday at 5:00 PM",
            "Sunday at midnight"
          ],
          answer: 0,
          explanation_vi: "Người nói nêu: 'offline until Saturday at 6:00 AM' -> Thời điểm kết thúc bảo trì là 6:00 sáng thứ Bảy.",
          trap: "Bẫy mốc thời gian bắt đầu (Friday at 9:00 PM) hoặc hạn chót gửi yêu cầu (Thursday at 5:00 PM)."
        },
        {
          id: "p4-003",
          stem: "What are staff members instructed to do on Friday afternoon?",
          choices: [
            "Log out of their workstations before leaving",
            "Attend an informational training webinar",
            "Submit their weekly expense receipts",
            "Inspect physical server connections"
          ],
          answer: 0,
          explanation_vi: "Lời dặn nhân viên: 'save all customer correspondence and log off your terminals before departing on Friday afternoon'.",
          trap: "Bẫy các hoạt động văn phòng thứ Sáu như nộp hóa đơn (expense receipts) hoặc dự webinar."
        }
      ]
    },
    {
      id: "p4-set2",
      part: 4,
      level: 3,
      topic: "Annual Business Conference Keynote",
      skillTags: ["listening", "talks", "conference", "corporate"],
      passage: "KEYNOTE TALK (PART 4)\nGood morning, honored delegates, and welcome to the opening plenary of the Asia-Pacific Trade Symposium. My name is Elena Rostova, and I serve as Executive Director of the International Commerce Alliance. Over the next three days, over five hundred industry executives and supply chain strategists will examine sustainable logistics solutions, emerging fintech innovations, and multilateral tariff reductions. Before we proceed to our keynote panel on automated fulfillment centers, please take a moment to download our symposium conference mobile application. The app contains real-time venue floor plans, speaker presentation slide decks, and instant notifications regarding workshop room allocations. Thank you, and I look forward to productive deliberations.",
      transcript: "Good morning, honored delegates, and welcome to the opening plenary of the Asia-Pacific Trade Symposium. My name is Elena Rostova, and I serve as Executive Director of the International Commerce Alliance. Over the next three days, over five hundred industry executives and supply chain strategists will examine sustainable logistics solutions, emerging fintech innovations, and multilateral tariff reductions. Before we proceed to our keynote panel on automated fulfillment centers, please take a moment to download our symposium conference mobile application. The app contains real-time venue floor plans, speaker presentation slide decks, and instant notifications regarding workshop room allocations. Thank you, and I look forward to productive deliberations.",
      questions: [
        {
          id: "p4-004",
          stem: "Who is the speaker?",
          choices: [
            "An executive director of a trade alliance",
            "A logistics facility general manager",
            "A mobile software application developer",
            "A keynote speaker on commercial real estate"
          ],
          answer: 0,
          explanation_vi: "Người nói tự giới thiệu: 'My name is Elena Rostova, and I serve as Executive Director of the International Commerce Alliance'.",
          trap: "Bẫy lặp từ 'mobile application developer' vì bài nói có nhắc tới ứng dụng di động hội thảo."
        },
        {
          id: "p4-005",
          stem: "What topic will the keynote panel focus on?",
          choices: [
            "Automated fulfillment centers",
            "Currency exchange fluctuation",
            "Employee wellness programs",
            "International maritime law"
          ],
          answer: 0,
          explanation_vi: "Người nói nhắc đến: 'our keynote panel on automated fulfillment centers'.",
          trap: "Bẫy các chủ đề kinh tế chung chung không được chọn làm chủ đề của phiên thảo luận chính."
        },
        {
          id: "p4-006",
          stem: "What are attendees advised to download?",
          choices: [
            "A conference mobile application",
            "A digital financial report",
            "A corporate security certificate",
            "An airline boarding pass"
          ],
          answer: 0,
          explanation_vi: "Diễn giả đề nghị: 'please take a moment to download our symposium conference mobile application'.",
          trap: "Bẫy các tài liệu tải về phổ biến khi đi công tác như boarding pass hay financial report."
        }
      ]
    }
  ]
};
