// Additional Part 1 & Part 2 questions
module.exports = {
  part1New: [
    {
      id: "p1-005",
      part: 1,
      level: 1,
      topic: "Server Room Inspection",
      skillTags: ["listening", "photographs", "it-workplace"],
      stem: "Look at the image: A network administrator wearing a lanyard is connecting a blue Ethernet cable into a high-density server rack.",
      imageSvg: `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #0f172a;"><rect x="20" y="20" width="120" height="200" fill="#1e293b" stroke="#06b6d4" stroke-width="2"/><circle cx="40" cy="50" r="4" fill="#10b981"/><circle cx="60" cy="50" r="4" fill="#10b981"/><circle cx="80" cy="50" r="4" fill="#f59e0b"/><circle cx="100" cy="50" r="4" fill="#10b981"/><rect x="30" y="70" width="100" height="15" fill="#334155"/><rect x="30" y="95" width="100" height="15" fill="#334155"/><rect x="30" y="120" width="100" height="15" fill="#334155"/><circle cx="250" cy="80" r="28" fill="#e2e8f0"/><path d="M220,170 C220,120 280,120 280,170" fill="#3b82f6"/><path d="M245,130 L130,102" stroke="#38bdf8" stroke-width="4" stroke-linecap="round"/><text x="180" y="215" fill="#94a3b8" font-size="12" font-family="sans-serif">SERVER INFRASTRUCTURE</text></svg>`,
      choices: [
        "He is plugging a cable into a server rack.",
        "He is assembling an office chair.",
        "He is replacing a ceiling light bulb.",
        "He is unplugging a desktop computer."
      ],
      answer: 0,
      explanation_vi: "Hành động thực tế: nhân viên đang cắm cáp kết nối vào tủ rack server ('plugging a cable into a server rack').",
      trap: "Bẫy hành động đối lập: 'unplugging' thay vì 'plugging', và các bẫy hành vi lạc đề (lắp ghế, thay bóng đèn)."
    },
    {
      id: "p1-006",
      part: 1,
      level: 1,
      topic: "Boardroom Presentation",
      skillTags: ["listening", "photographs", "corporate"],
      stem: "Look at the image: A speaker in business attire is pointing at a financial bar chart displayed on an interactive whiteboard while attendees take notes.",
      imageSvg: `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #0f172a;"><rect x="180" y="30" width="180" height="120" fill="#1e293b" stroke="#f59e0b" stroke-width="2"/><rect x="200" y="100" width="20" height="40" fill="#3b82f6"/><rect x="230" y="80" width="20" height="60" fill="#3b82f6"/><rect x="260" y="60" width="20" height="80" fill="#10b981"/><circle cx="100" cy="70" r="24" fill="#e2e8f0"/><path d="M70,160 C70,110 130,110 130,160" fill="#64748b"/><line x1="120" y1="100" x2="200" y2="70" stroke="#f59e0b" stroke-width="3" stroke-linecap="round"/><text x="140" y="215" fill="#94a3b8" font-size="12" font-family="sans-serif">EXECUTIVE QUARTERLY BRIEFING</text></svg>`,
      choices: [
        "A presenter is gesturing toward a projected display.",
        "Some audience members are leaving the auditorium.",
        "The conference room chairs are being stacked against the wall.",
        "A document is being printed from a copy machine."
      ],
      answer: 0,
      explanation_vi: "Người thuyết trình đang hướng tay/chỉ vào màn hình chiếu ('gesturing toward a projected display').",
      trap: "Bẫy thể bị động hiện tại tiếp diễn 'are being stacked', 'is being printed' khi không có người trực tiếp thực hiện hành động đó."
    },
    {
      id: "p1-007",
      part: 1,
      level: 2,
      topic: "Warehouse Logistics",
      skillTags: ["listening", "photographs", "logistics"],
      stem: "Look at the image: Two warehouse workers in high-visibility vests are verifying an inventory barcode list next to stacked cardboard cartons.",
      imageSvg: `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #0f172a;"><rect x="30" y="90" width="60" height="50" fill="#78350f" stroke="#d97706"/><rect x="30" y="145" width="60" height="50" fill="#78350f" stroke="#d97706"/><rect x="95" y="145" width="60" height="50" fill="#78350f" stroke="#d97706"/><circle cx="220" cy="80" r="22" fill="#fed7aa"/><path d="M195,160 C195,120 245,120 245,160" fill="#f97316"/><circle cx="290" cy="80" r="22" fill="#fed7aa"/><path d="M265,160 C265,120 315,120 315,160" fill="#f97316"/><rect x="235" y="115" width="25" height="35" fill="#fff"/><text x="140" y="220" fill="#94a3b8" font-size="12" font-family="sans-serif">SHIPPING & RECEIVING BAY</text></svg>`,
      choices: [
        "Workers are inspecting merchandise in a storage facility.",
        "Packages are being loaded onto a cargo aircraft.",
        "A forklift is moving construction materials across a yard.",
        "Boxes are being discarded in a recycling bin."
      ],
      answer: 0,
      explanation_vi: "Các nhân viên kho đang kiểm tra hàng hóa/hàng tồn kho ('inspecting merchandise in a storage facility').",
      trap: "Bẫy từ vựng suy diễn quá đà: không có 'cargo aircraft' hay 'forklift' nào xuất hiện trong bối cảnh."
    },
    {
      id: "p1-008",
      part: 1,
      level: 2,
      topic: "Electronics Assembly",
      skillTags: ["listening", "photographs", "manufacturing"],
      stem: "Look at the image: A lab technician with protective gloves is using precision tweezers to inspect circuit components under an illuminated magnifying lens.",
      imageSvg: `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" style="width: 100%; height: auto; border-radius: 8px; background: #0f172a;"><rect x="60" y="140" width="280" height="20" fill="#334155"/><rect x="120" y="110" width="160" height="30" fill="#065f46" stroke="#10b981" stroke-width="2"/><circle cx="200" cy="70" r="35" fill="none" stroke="#38bdf8" stroke-width="4"/><line x1="200" y1="105" x2="200" y2="135" stroke="#94a3b8" stroke-width="3"/><circle cx="200" cy="70" r="26" fill="rgba(56, 189, 248, 0.2)"/><text x="135" y="210" fill="#94a3b8" font-size="12" font-family="sans-serif">HARDWARE TESTING LABORATORY</text></svg>`,
      choices: [
        "A technician is examining an electronic board with specialized equipment.",
        "Safety goggles are being stored in an equipment cabinet.",
        "Circuit boards are being packed into mailing envelopes.",
        "A computer screen is being disassembled for repairs."
      ],
      answer: 0,
      explanation_vi: "Kỹ thuật viên đang kiểm tra bảng mạch điện tử bằng thiết bị chuyên dụng ('examining an electronic board with specialized equipment').",
      trap: "Bẫy hành vi: 'disassembled for repairs' hoặc 'packed into mailing envelopes' không khớp với hình ảnh đang kiểm tra qua kính lúp."
    }
  ],

  part2New: [
    {
      id: "p2-013",
      part: 2,
      level: 1,
      topic: "Meeting Reschedule",
      skillTags: ["listening", "q-and-a", "time"],
      stem: "Has the vendor audit meeting been rescheduled for Wednesday or Thursday?",
      choices: [
        "Actually, it's been pushed back to Friday morning.",
        "Yes, the audit was very thorough.",
        "In conference room 4B on the third floor."
      ],
      answer: 0,
      explanation_vi: "Câu hỏi lựa chọn 'Wednesday or Thursday' -> Câu trả lời cung cấp thời điểm chính xác: 'Actually, it's been pushed back to Friday morning'.",
      trap: "Bẫy Yes/No đối với câu hỏi lựa chọn Or (Lựa chọn B), và bẫy nhầm câu hỏi địa điểm Where (Lựa chọn C)."
    },
    {
      id: "p2-014",
      part: 2,
      level: 2,
      topic: "Multi-Factor Authentication",
      skillTags: ["listening", "q-and-a", "it-support"],
      stem: "Why hasn't the engineering team updated their two-factor authentication keys yet?",
      choices: [
        "They're currently deploying a major software patch.",
        "Yes, two factors are usually required.",
        "The security keys are inside the top drawer."
      ],
      answer: 0,
      explanation_vi: "Câu hỏi 'Why hasn't...' giải thích lý do -> Đội ngũ kỹ thuật bận triển khai bản vá phần mềm lớn ('They're currently deploying...').",
      trap: "Bẫy Yes/No cho câu hỏi 'Why' (Lựa chọn B), và bẫy lặp từ âm thanh 'security keys' (Lựa chọn C)."
    },
    {
      id: "p2-015",
      part: 2,
      level: 2,
      topic: "Budget Approval",
      skillTags: ["listening", "q-and-a", "finance"],
      stem: "Who is in charge of reviewing corporate credit card expense claims?",
      choices: [
        "Ms. Lin from the accounts payable division.",
        "No, charges are made automatically.",
        "About fifteen corporate accounts."
      ],
      answer: 0,
      explanation_vi: "Câu hỏi 'Who is in charge of...' hỏi về người phụ trách -> 'Ms. Lin from the accounts payable division'.",
      trap: "Bẫy Yes/No cho câu hỏi Who (Lựa chọn B) và bẫy trả lời số lượng How many (Lựa chọn C)."
    },
    {
      id: "p2-016",
      part: 2,
      level: 2,
      topic: "Server Maintenance",
      skillTags: ["listening", "q-and-a", "indirect-response"],
      stem: "Could you help me configure the automated database backup script?",
      choices: [
        "I'm scheduled to facilitate an onboarding seminar until noon.",
        "Yes, the script was written in Python.",
        "Backup files are stored on external drives."
      ],
      answer: 0,
      explanation_vi: "Lời đề nghị giúp đỡ ('Could you help me...') -> Từ chối khéo bằng cách nêu lịch trình bận đến trưa ('I'm scheduled to facilitate...'). Đây là dạng câu trả lời gián tiếp rất hay xuất hiện trong Part 2.",
      trap: "Bẫy trả lời trực diện nhưng lặp lại từ vựng 'script' (Lựa chọn B) hoặc giải thích định nghĩa 'backup' (Lựa chọn C)."
    },
    {
      id: "p2-017",
      part: 2,
      level: 1,
      topic: "Office Supply Logistics",
      skillTags: ["listening", "q-and-a", "procurement"],
      stem: "When are the ergonomic office chairs expected to arrive?",
      choices: [
        "The supplier confirmed shipment for next Tuesday.",
        "Because the old chairs were causing back discomfort.",
        "Please place them near the reception desk."
      ],
      answer: 0,
      explanation_vi: "Câu hỏi 'When' hỏi thời gian dự kiến -> 'The supplier confirmed shipment for next Tuesday'.",
      trap: "Bẫy trả lời lý do 'Because' cho câu hỏi When (Lựa chọn B) và bẫy trả lời địa điểm Where (Lựa chọn C)."
    },
    {
      id: "p2-018",
      part: 2,
      level: 3,
      topic: "Incident Response Protocol",
      skillTags: ["listening", "q-and-a", "boss-tier", "infosec"],
      stem: "Shouldn't we isolate the infected workstations before notifying client stakeholders?",
      choices: [
        "The network containment procedure has already been executed.",
        "Yes, all clients were very satisfied with the demo.",
        "Stationery supplies are located in the mailroom."
      ],
      answer: 0,
      explanation_vi: "Câu hỏi tu từ/khuyến nghị an ninh mạng ('Shouldn't we isolate...') -> Phản hồi gián tiếp: Quy trình khoanh vùng mạng đã được thực thi rồi ('already been executed').",
      trap: "Bẫy từ phát âm tương tự: 'workstations' nhầm sang 'Stationery' (văn phòng phẩm), và bẫy lạc đề khách hàng (Lựa chọn B)."
    },
    {
      id: "p2-019",
      part: 2,
      level: 2,
      topic: "Flight & Travel",
      skillTags: ["listening", "q-and-a", "travel"],
      stem: "How will the regional marketing representatives travel to the convention?",
      choices: [
        "They reserved high-speed train tickets through corporate travel.",
        "It was scheduled for the third week of November.",
        "Yes, regional sales have exceeded targets."
      ],
      answer: 0,
      explanation_vi: "Câu hỏi phương tiện di chuyển 'How will... travel' -> 'They reserved high-speed train tickets...'.",
      trap: "Bẫy trả lời thời gian When (Lựa chọn B) và bẫy Yes/No lặp từ 'regional' (Lựa chọn C)."
    },
    {
      id: "p2-020",
      part: 2,
      level: 2,
      topic: "Facility Management",
      skillTags: ["listening", "q-and-a", "workplace"],
      stem: "You remembered to lock the server room doors before leaving, didn't you?",
      choices: [
        "I ensured both biometric deadbolts were engaged.",
        "No, the keys are kept in the reception desk.",
        "We need to hire two more network administrators."
      ],
      answer: 0,
      explanation_vi: "Câu hỏi đuôi kiểm tra sự việc ('didn't you?') -> Trả lời khẳng định chi tiết: 'I ensured both biometric deadbolts were engaged' (Tôi đã đảm bảo cả hai khóa sinh trắc học đã gài).",
      trap: "Bẫy từ liên quan 'keys' nhưng không trả lời trực tiếp hành động khóa cửa (Lựa chọn B)."
    }
  ]
};
