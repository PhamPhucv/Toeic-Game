module.exports = [
  // --- PART 1: PHOTOGRAPHS (4 SVG ILLUSTRATED QUESTIONS) ---
  {
    id: "p1-001", part: 1, level: 2, topic: "IT & Server Room",
    skillTags: ["listening", "photographs", "it-equipment"],
    stem: "Look at the photograph and choose the statement that best describes what you see.",
    svgArt: `<svg viewBox="0 0 400 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="srvGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
      </defs>
      <!-- Background Wall & Floor -->
      <rect width="400" height="170" fill="#1e293b"/>
      <rect y="170" width="400" height="70" fill="#334155"/>
      <line x1="0" y1="170" x2="400" y2="170" stroke="#475569" stroke-width="2"/>
      <!-- Server Rack Cabinet -->
      <rect x="50" y="30" width="110" height="150" rx="4" fill="url(#srvGrad)" stroke="#06b6d4" stroke-width="2"/>
      <!-- Server Units inside -->
      <rect x="60" y="45" width="90" height="18" rx="2" fill="#334155"/>
      <circle cx="70" cy="54" r="3" fill="#10b981"/>
      <circle cx="80" cy="54" r="3" fill="#10b981"/>
      <circle cx="90" cy="54" r="2" fill="#f59e0b"/>
      <rect x="60" y="70" width="90" height="18" rx="2" fill="#334155"/>
      <circle cx="70" cy="79" r="3" fill="#10b981"/>
      <circle cx="80" cy="79" r="3" fill="#06b6d4"/>
      <rect x="60" y="95" width="90" height="18" rx="2" fill="#334155"/>
      <circle cx="70" cy="104" r="3" fill="#10b981"/>
      <circle cx="80" cy="104" r="3" fill="#10b981"/>
      <rect x="60" y="120" width="90" height="18" rx="2" fill="#334155"/>
      <circle cx="70" cy="129" r="3" fill="#f59e0b"/>
      <rect x="60" y="145" width="90" height="22" rx="2" fill="#1e293b" stroke="#475569"/>
      <!-- Colored Network Cables looping -->
      <path d="M145,54 C175,70 175,120 145,130" fill="none" stroke="#06b6d4" stroke-width="3"/>
      <path d="M145,79 C185,90 185,140 145,155" fill="none" stroke="#3b82f6" stroke-width="3"/>
      <path d="M145,104 C190,110 190,160 145,160" fill="none" stroke="#10b981" stroke-width="2"/>
      <!-- Technician Standing Beside Rack -->
      <circle cx="250" cy="65" r="18" fill="#cbd5e1"/> <!-- Head -->
      <rect x="232" y="85" width="36" height="65" rx="6" fill="#0284c7"/> <!-- Torso/Shirt -->
      <path d="M232,95 L200,120" stroke="#0284c7" stroke-width="10" stroke-linecap="round"/> <!-- Left arm reaching to rack -->
      <circle cx="196" cy="122" r="5" fill="#fbcfe8"/> <!-- Hand connecting cable -->
      <path d="M268,95 L285,125" stroke="#0284c7" stroke-width="10" stroke-linecap="round"/> <!-- Right arm -->
      <rect x="235" y="150" width="14" height="65" fill="#1e293b"/> <!-- Left leg -->
      <rect x="253" y="150" width="14" height="65" fill="#1e293b"/> <!-- Right leg -->
      <rect x="230" y="210" width="22" height="10" rx="3" fill="#0f172a"/> <!-- Shoes -->
      <rect x="250" y="210" width="22" height="10" rx="3" fill="#0f172a"/>
      <!-- ID Badge on chest -->
      <rect x="244" y="98" width="10" height="14" rx="2" fill="#f8fafc" stroke="#3b82f6"/>
    </svg>`,
    choices: [
      "A technician is connecting a cable to the server rack.",
      "The computer monitors are stacked on the floor.",
      "A worker is installing a glass window.",
      "The office chairs are being disassembled."
    ],
    answer: 0,
    explanation_vi: "Phương án (A) mô tả chính xác hành động: Người kỹ thuật viên đang cắm dây cáp vào tủ máy chủ (server rack).",
    trap: "Bẫy thì bị động tiếp diễn: 'are being disassembled' (đang được tháo dỡ) là bẫy kinh điển Part 1 khi trong tranh không có ai tháo ghế.",
    transcript: "(A) A technician is connecting a cable to the server rack.\n(B) The computer monitors are stacked on the floor.\n(C) A worker is installing a glass window.\n(D) The office chairs are being disassembled.",
    vocab: ["technician", "connecting", "server rack"]
  },
  {
    id: "p1-002", part: 1, level: 2, topic: "Office Conference & Presentation",
    skillTags: ["listening", "photographs", "presentation"],
    stem: "Look at the photograph and choose the statement that best describes what you see.",
    svgArt: `<svg viewBox="0 0 400 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg">
      <!-- Conference Room Wall -->
      <rect width="400" height="175" fill="#1e293b"/>
      <rect y="175" width="400" height="65" fill="#334155"/>
      <!-- Presentation Display Screen on Wall -->
      <rect x="35" y="30" width="160" height="95" rx="6" fill="#0f172a" stroke="#06b6d4" stroke-width="3"/>
      <!-- Chart Graphic on Screen -->
      <polyline points="50,105 80,85 110,95 140,60 175,50" fill="none" stroke="#10b981" stroke-width="4"/>
      <circle cx="175" cy="50" r="4" fill="#06b6d4"/>
      <line x1="50" y1="110" x2="180" y2="110" stroke="#475569" stroke-width="2"/>
      <!-- Presenter Woman Standing Pointing -->
      <circle cx="230" cy="55" r="16" fill="#cbd5e1"/>
      <path d="M218,73 L242,73 L246,140 L214,140 Z" fill="#0369a1"/> <!-- Business Suit -->
      <path d="M218,80 L180,68" stroke="#0369a1" stroke-width="8" stroke-linecap="round"/> <!-- Arm pointing to screen -->
      <path d="M242,80 L255,115" stroke="#0369a1" stroke-width="8" stroke-linecap="round"/>
      <rect x="220" y="140" width="10" height="70" fill="#1e293b"/>
      <rect x="234" y="140" width="10" height="70" fill="#1e293b"/>
      <!-- Conference Table & Attendees -->
      <ellipse cx="320" cy="185" rx="70" ry="25" fill="#475569" stroke="#64748b" stroke-width="2"/>
      <!-- Attendee 1 -->
      <circle cx="310" cy="135" r="13" fill="#94a3b8"/>
      <rect x="298" y="150" width="24" height="30" rx="4" fill="#334155"/>
      <!-- Attendee 2 -->
      <circle cx="355" cy="140" r="13" fill="#94a3b8"/>
      <rect x="345" y="155" width="22" height="28" rx="4" fill="#1e293b"/>
      <!-- Laptop on table -->
      <rect x="300" y="175" width="22" height="12" rx="2" fill="#0f172a" stroke="#06b6d4"/>
    </svg>`,
    choices: [
      "The conference room is completely unoccupied.",
      "A woman is gesturing toward a presentation screen.",
      "Some confidential papers are being shredded.",
      "The meeting participants are leaving the building."
    ],
    answer: 1,
    explanation_vi: "Phương án (B) chính xác: Người phụ nữ đang chỉ tay về phía màn hình thuyết trình (gesturing toward a presentation screen).",
    trap: "Bẫy phủ định: 'unoccupied' (không có người) mâu thuẫn trực tiếp với các nhân vật hiện diện trong tranh.",
    transcript: "(A) The conference room is completely unoccupied.\n(B) A woman is gesturing toward a presentation screen.\n(C) Some confidential papers are being shredded.\n(D) The meeting participants are leaving the building.",
    vocab: ["gesturing", "presentation screen", "unoccupied"]
  },
  {
    id: "p1-003", part: 1, level: 2, topic: "Reception & Visitor Access",
    skillTags: ["listening", "photographs", "reception"],
    stem: "Look at the photograph and choose the statement that best describes what you see.",
    svgArt: `<svg viewBox="0 0 400 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="160" fill="#1e293b"/>
      <rect y="160" width="400" height="80" fill="#334155"/>
      <!-- Reception Counter Desk -->
      <rect x="60" y="110" width="280" height="65" rx="6" fill="#475569" stroke="#64748b" stroke-width="2"/>
      <rect x="70" y="120" width="260" height="12" fill="#334155"/>
      <!-- Visitor Signing Registry Book -->
      <circle cx="140" cy="65" r="16" fill="#cbd5e1"/>
      <rect x="122" y="83" width="36" height="60" rx="4" fill="#2563eb"/>
      <path d="M138,95 L160,115" stroke="#2563eb" stroke-width="7" stroke-linecap="round"/> <!-- Hand holding pen -->
      <!-- Registry Logbook on Counter -->
      <rect x="155" y="112" width="38" height="24" rx="2" fill="#f8fafc" stroke="#94a3b8"/>
      <line x1="160" y1="120" x2="185" y2="120" stroke="#64748b" stroke-width="2"/>
      <line x1="160" y1="126" x2="180" y2="126" stroke="#64748b" stroke-width="2"/>
      <!-- Receptionist Sitting Behind Desk -->
      <circle cx="280" cy="80" r="15" fill="#cbd5e1"/>
      <rect x="264" y="97" width="32" height="30" rx="4" fill="#0d9488"/>
      <!-- Computer Monitor on Desk -->
      <rect x="220" y="85" width="32" height="25" rx="2" fill="#0f172a" stroke="#06b6d4"/>
      <rect x="232" y="110" width="8" height="6" fill="#0f172a"/>
      <!-- Digital Security Badge Scanner on desk -->
      <rect x="100" y="105" width="20" height="15" rx="2" fill="#0f172a" stroke="#10b981"/>
      <circle cx="110" cy="112" r="3" fill="#10b981"/>
    </svg>`,
    choices: [
      "A visitor is writing in a registry at the front desk.",
      "A desktop computer is being repaired by a technician.",
      "The counter is covered with potted plants.",
      "All the entrance doors have been locked."
    ],
    answer: 0,
    explanation_vi: "Phương án (A) mô tả chính xác: Khách viếng thăm đang ghi thông tin vào sổ đăng ký tại bàn tiếp tân (writing in a registry at the front desk).",
    trap: "Bẫy hành động không tồn tại: 'is being repaired' không có hành động sửa chữa nào diễn ra.",
    transcript: "(A) A visitor is writing in a registry at the front desk.\n(B) A desktop computer is being repaired by a technician.\n(C) The counter is covered with potted plants.\n(D) All the entrance doors have been locked.",
    vocab: ["registry", "front desk", "visitor"]
  },
  {
    id: "p1-004", part: 1, level: 3, topic: "Logistics & Warehouse Operations",
    skillTags: ["listening", "photographs", "logistics"],
    stem: "Look at the photograph and choose the statement that best describes what you see.",
    svgArt: `<svg viewBox="0 0 400 240" width="100%" height="240" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="170" fill="#1e293b"/>
      <rect y="170" width="400" height="70" fill="#334155"/>
      <!-- Warehouse Storage Shelves in Background -->
      <rect x="20" y="25" width="16" height="160" fill="#475569"/>
      <rect x="180" y="25" width="16" height="160" fill="#475569"/>
      <line x1="20" y1="70" x2="196" y2="70" stroke="#64748b" stroke-width="4"/>
      <line x1="20" y1="120" x2="196" y2="120" stroke="#64748b" stroke-width="4"/>
      <!-- Pallet with Cardboard Boxes -->
      <rect x="50" y="165" width="110" height="12" fill="#d97706"/> <!-- Wooden Pallet -->
      <rect x="55" y="115" width="48" height="50" rx="3" fill="#b45309" stroke="#78350f"/> <!-- Box 1 -->
      <rect x="105" y="115" width="48" height="50" rx="3" fill="#b45309" stroke="#78350f"/> <!-- Box 2 -->
      <rect x="75" y="70" width="54" height="45" rx="3" fill="#b45309" stroke="#78350f"/> <!-- Box on top -->
      <rect x="85" y="85" width="18" height="12" fill="#f8fafc"/> <!-- Barcode label -->
      <!-- Warehouse Worker with Barcode Scanner -->
      <circle cx="260" cy="70" r="17" fill="#cbd5e1"/>
      <path d="M242,90 L278,90 L278,160 L242,160 Z" fill="#ea580c"/> <!-- Hi-Vis Safety Vest -->
      <path d="M242,100 L205,95" stroke="#ea580c" stroke-width="9" stroke-linecap="round"/> <!-- Arm scanning -->
      <rect x="195" y="90" width="15" height="10" rx="2" fill="#0f172a"/> <!-- Scanner Gun -->
      <line x1="195" y1="95" x2="105" y2="92" stroke="#ef4444" stroke-dasharray="4" stroke-width="2"/> <!-- Red Laser -->
      <rect x="246" y="160" width="12" height="55" fill="#1e293b"/>
      <rect x="262" y="160" width="12" height="55" fill="#1e293b"/>
    </svg>`,
    choices: [
      "A forklift is transporting heavy machinery.",
      "Merchandise is being unloaded into a delivery van.",
      "An employee is scanning a label on a package.",
      "The warehouse storage shelves are completely empty."
    ],
    answer: 2,
    explanation_vi: "Phương án (C) đúng: Nhân viên đang quét mã vạch trên kiện hàng (scanning a label on a package).",
    trap: "Bẫy từ vựng suy đoán: Trong tranh có kho hàng nhưng không có xe nâng (forklift) hay xe tải giao hàng (delivery van).",
    transcript: "(A) A forklift is transporting heavy machinery.\n(B) Merchandise is being unloaded into a delivery van.\n(C) An employee is scanning a label on a package.\n(D) The warehouse storage shelves are completely empty.",
    vocab: ["scanning", "label", "package"]
  },

  // --- PART 2: QUESTION & RESPONSE (12 AUDIO TRAP QUESTIONS) ---
  {
    id: "p2-001", part: 2, level: 2, topic: "Office Requests & Audit",
    skillTags: ["listening", "q-and-a", "sound-trap"],
    trapCategory: "sound",
    stem: "Could you make five copies of the network security audit report?",
    choices: [
      "Black coffee with sugar, please.",
      "Sure, I'll print them out right away.",
      "Yes, it was very loud."
    ],
    answer: 1,
    explanation_vi: "Lời đề nghị lịch sự: 'Could you make five copies...?' -> Phương án (B) đồng ý nhận in tài liệu ngay lập tức.",
    trap: "Bẫy từ gần âm (Similar Sound): Đáp án (A) dùng từ 'coffee' phát âm gần giống với 'copies'.",
    transcript: "Q: Could you make five copies of the network security audit report?\n(A) Black coffee with sugar, please.\n(B) Sure, I'll print them out right away.\n(C) Yes, it was very loud.",
    vocab: ["copies", "audit report", "print out"]
  },
  {
    id: "p2-002", part: 2, level: 3, topic: "IT Operations & Scheduling",
    skillTags: ["listening", "q-and-a", "repeated-word"],
    trapCategory: "repeated-word",
    stem: "When will the firewall configuration be finalized?",
    choices: [
      "By the end of this afternoon.",
      "Because the wall needs painting.",
      "Yes, it is very final."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi bắt đầu bằng 'When' (Khi nào) hỏi mốc thời gian -> (A) 'By the end of this afternoon' (Trước cuối chiều nay) là câu trả lời trực tiếp chính xác.",
    trap: "Bẫy lặp từ (Repeated word): (B) lặp từ 'wall' từ 'firewall', (C) lặp 'final' và bẫy Yes/No đối với câu hỏi Wh-.",
    transcript: "Q: When will the firewall configuration be finalized?\n(A) By the end of this afternoon.\n(B) Because the wall needs painting.\n(C) Yes, it is very final.",
    vocab: ["finalized", "firewall", "configuration"]
  },
  {
    id: "p2-003", part: 2, level: 3, topic: "Management & HR",
    skillTags: ["listening", "q-and-a", "indirect-response"],
    trapCategory: "indirect",
    stem: "Who was selected as the new project manager for the cloud migration?",
    choices: [
      "They haven't announced the decision yet.",
      "Yes, I selected it yesterday.",
      "At the downtown conference hall."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi 'Who' (Ai) nhưng người trả lời đưa ra câu trả lời gián tiếp: 'Họ vẫn chưa công bố quyết định'. Đây là dạng câu trả lời cực kỳ hay gặp trong đề TOEIC hiện đại.",
    trap: "Bẫy Yes/No đối với câu hỏi 'Who' (B), và bẫy trả lời địa điểm cho câu hỏi người (C).",
    transcript: "Q: Who was selected as the new project manager for the cloud migration?\n(A) They haven't announced the decision yet.\n(B) Yes, I selected it yesterday.\n(C) At the downtown conference hall.",
    vocab: ["cloud migration", "announced", "selected"]
  },
  {
    id: "p2-004", part: 2, level: 2, topic: "Emergency Planning",
    skillTags: ["listening", "q-and-a", "sound-trap"],
    trapCategory: "sound",
    stem: "Has the safety committee finished the evacuation plan?",
    choices: [
      "Flight 204 departs at seven o'clock.",
      "No, they're still reviewing the emergency exits.",
      "It is a very plain design."
    ],
    answer: 1,
    explanation_vi: "Câu hỏi Yes/No hỏi tiến độ kế hoạch thoát hiểm -> (B) trả lời họ vẫn đang xem xét lối thoát hiểm.",
    trap: "Bẫy từ đồng âm / gần âm: 'plan' (kế hoạch) bị bẫy với 'plane' (máy bay) ở câu (A) và 'plain' (đơn giản) ở câu (C).",
    transcript: "Q: Has the safety committee finished the evacuation plan?\n(A) Flight 204 departs at seven o'clock.\n(B) No, they're still reviewing the emergency exits.\n(C) It is a very plain design.",
    vocab: ["evacuation", "emergency exits", "safety committee"]
  },
  {
    id: "p2-005", part: 2, level: 3, topic: "IT Hardware & Procurement",
    skillTags: ["listening", "q-and-a", "indirect-response"],
    trapCategory: "indirect",
    stem: "Where can I find the spare USB security dongles?",
    choices: [
      "Ask Michael in the IT procurement department.",
      "About fifteen gigabytes.",
      "No, I don't have one."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi 'Where' hỏi vị trí đồ vật -> Câu trả lời gián tiếp chỉ dẫn hỏi người phụ trách: 'Ask Michael in IT...'",
    trap: "Bẫy Yes/No với câu hỏi Where (C); bẫy liên tưởng sai đơn vị lưu trữ (B).",
    transcript: "Q: Where can I find the spare USB security dongles?\n(A) Ask Michael in the IT procurement department.\n(B) About fifteen gigabytes.\n(C) No, I don't have one.",
    vocab: ["spare", "procurement", "dongle"]
  },
  {
    id: "p2-006", part: 2, level: 3, topic: "Training Options",
    skillTags: ["listening", "q-and-a", "sound-trap"],
    trapCategory: "sound",
    stem: "Would you prefer to conduct the security training online or in person?",
    choices: [
      "Whichever is more convenient for the team.",
      "Yes, I prefer both.",
      "The express train arrives at nine."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi lựa chọn 'A or B' (online hay trực tiếp) -> (A) 'Cách nào thuận tiện hơn cho nhóm thì làm' là câu trả lời kinh điển trong giao tiếp công sở.",
    trap: "Bẫy Yes/No với câu hỏi lựa chọn 'or' (B); bẫy từ gần âm 'training' (đào tạo) với 'train' (tàu hỏa) ở (C).",
    transcript: "Q: Would you prefer to conduct the security training online or in person?\n(A) Whichever is more convenient for the team.\n(B) Yes, I prefer both.\n(C) The express train arrives at nine.",
    vocab: ["convenient", "in person", "conduct"]
  },
  {
    id: "p2-007", part: 2, level: 4, topic: "Incident Investigation",
    skillTags: ["listening", "q-and-a", "indirect-response"],
    trapCategory: "indirect",
    stem: "Mr. Henderson reviewed the penetration testing logs, didn't he?",
    choices: [
      "Actually, he was out sick yesterday.",
      "He is doing very well, thank you.",
      "To test the internet bandwidth."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi đuôi kiểm tra sự việc -> (A) Phủ định ngầm tiền đề bằng cách nêu lý do ông ấy nghỉ ốm hôm qua nên chưa thể xem.",
    trap: "Bẫy trả lời cho câu hỏi thăm sức khỏe 'How is he doing?' (B); bẫy trả lời mục đích 'To test...' (C).",
    transcript: "Q: Mr. Henderson reviewed the penetration testing logs, didn't he?\n(A) Actually, he was out sick yesterday.\n(B) He is doing very well, thank you.\n(C) To test the internet bandwidth.",
    vocab: ["penetration testing", "out sick", "reviewed"]
  },
  {
    id: "p2-008", part: 2, level: 3, topic: "Accounting & Expenses",
    skillTags: ["listening", "q-and-a", "indirect-response"],
    trapCategory: "indirect",
    stem: "Didn't you submit the travel reimbursement voucher already?",
    choices: [
      "I'm still waiting for one restaurant receipt.",
      "Yes, I didn't.",
      "The flight was canceled."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi phủ định 'Didn't you...?' -> (A) Giải thích lý do gián tiếp vì sao chưa nộp: đang đợi 1 hóa đơn nhà hàng.",
    trap: "Bẫy logic câu trả lời tiếng Anh: Tiếng Anh không dùng 'Yes, I didn't' vì mâu thuẫn khẳng định/phủ định.",
    transcript: "Q: Didn't you submit the travel reimbursement voucher already?\n(A) I'm still waiting for one restaurant receipt.\n(B) Yes, I didn't.\n(C) The flight was canceled.",
    vocab: ["voucher", "reimbursement", "receipt"]
  },
  {
    id: "p2-009", part: 2, level: 3, topic: "System Administration",
    skillTags: ["listening", "q-and-a", "sound-trap"],
    trapCategory: "sound",
    stem: "You have administrative access to the database, right?",
    choices: [
      "I will write a detailed report shortly.",
      "Turn right at the end of the hallway.",
      "Only on the staging test server."
    ],
    answer: 2,
    explanation_vi: "Hỏi xác nhận quyền quản trị -> (C) Trả lời làm rõ phạm vi: chỉ có quyền trên máy chủ kiểm thử (test server).",
    trap: "Bẫy từ đồng âm & đa nghĩa: (A) dùng từ đồng âm 'write' (viết); (B) dùng từ 'right' với nghĩa rẽ phải.",
    transcript: "Q: You have administrative access to the database, right?\n(A) I will write a detailed report shortly.\n(B) Turn right at the end of the hallway.\n(C) Only on the staging test server.",
    vocab: ["administrative access", "database", "staging"]
  },
  {
    id: "p2-010", part: 2, level: 3, topic: "Project Management",
    skillTags: ["listening", "q-and-a", "repeated-word"],
    trapCategory: "repeated-word",
    stem: "Why don't we postpone the software rollout until next Monday?",
    choices: [
      "That sounds like a sensible suggestion.",
      "Because I couldn't find it.",
      "At the post office down the street."
    ],
    answer: 0,
    explanation_vi: "'Why don't we...' là câu đề xuất (suggestion) làm gì -> (A) 'Nghe có vẻ là gợi ý hợp lý' là câu phản hồi phù hợp nhất.",
    trap: "Bẫy máy móc nghe 'Why' vội chọn 'Because' (B); bẫy lặp từ gần âm 'postpone' thành 'post office' (C).",
    transcript: "Q: Why don't we postpone the software rollout until next Monday?\n(A) That sounds like a sensible suggestion.\n(B) Because I couldn't find it.\n(C) At the post office down the street.",
    vocab: ["postpone", "rollout", "sensible"]
  },
  {
    id: "p2-011", part: 2, level: 3, topic: "Procurement & Licensing",
    skillTags: ["listening", "q-and-a", "indirect-response"],
    trapCategory: "indirect",
    stem: "How much did the vendor quote for the firewall license renewal?",
    choices: [
      "The invoice is still on Rachel's desk.",
      "About ten miles south of here.",
      "Yes, it was quite expensive."
    ],
    answer: 0,
    explanation_vi: "Câu hỏi 'How much' hỏi giá tiền nhưng câu trả lời gián tiếp chỉ nơi xem tài liệu: 'Hóa đơn vẫn ở trên bàn Rachel'.",
    trap: "Bẫy trả lời khoảng cách 'ten miles' (B); bẫy trả lời Yes/No cho câu hỏi Wh- (C).",
    transcript: "Q: How much did the vendor quote for the firewall license renewal?\n(A) The invoice is still on Rachel's desk.\n(B) About ten miles south of here.\n(C) Yes, it was quite expensive.",
    vocab: ["quote", "renewal", "license"]
  },
  {
    id: "p2-012", part: 2, level: 3, topic: "Office Facilities",
    skillTags: ["listening", "q-and-a", "repeated-word"],
    trapCategory: "repeated-word",
    stem: "Do you know where the visitor parking area is located?",
    choices: [
      "The national park is closed for maintenance.",
      "Follow the yellow signs behind Building C.",
      "Yes, I parked my car yesterday."
    ],
    answer: 1,
    explanation_vi: "Hỏi vị trí bãi đỗ xe của khách -> (B) Chỉ dẫn: 'Đi theo các biển báo màu vàng phía sau Tòa nhà C'.",
    trap: "Bẫy chuyển nghĩa từ vựng: 'parking' (đỗ xe) bị bẫy sang 'national park' (công viên quốc gia) ở (A).",
    transcript: "Q: Do you know where the visitor parking area is located?\n(A) The national park is closed for maintenance.\n(B) Follow the yellow signs behind Building C.\n(C) Yes, I parked my car yesterday.",
    vocab: ["located", "parking area", "visitor"]
  },

  // --- PART 5 (22 QUESTIONS) ---
  {
    id: "p5-001", part: 5, level: 2, topic: "IT & Cybersecurity",
    skillTags: ["word-form", "adverb"],
    stem: "The system administrator _______ updated the server firewall to protect against zero-day exploits.",
    choices: ["frequent", "frequency", "frequently", "frequented"], answer: 2,
    explanation_vi: "Cần một phó từ (adverb) bổ nghĩa cho động từ 'updated'. 'Frequently' (thường xuyên) là trạng từ thích hợp nhất.",
    trap: "Bẫy từ loại: Nhiều người nhầm chọn tính từ 'frequent' đứng trước động từ.",
    vocab: ["frequently", "administrator", "exploit"]
  },
  {
    id: "p5-002", part: 5, level: 3, topic: "IT & Cybersecurity",
    skillTags: ["vocabulary", "collocation"],
    stem: "Employees are strictly required to create _______ passwords containing at least twelve characters, numbers, and symbols.",
    choices: ["complex", "spacious", "cordial", "convenient"], answer: 0,
    explanation_vi: "Collocation công nghệ: 'complex passwords' (mật khẩu phức tạp). 'Spacious' (rộng rãi), 'cordial' (thân ái), 'convenient' (tiện lợi) không hợp ngữ cảnh.",
    trap: "Bẫy dịch nghĩa bề mặt: 'convenient' (tiện lợi) thường là mong muốn người dùng nhưng trái chính sách bảo mật.",
    vocab: ["complex", "strictly", "characters"]
  },
  {
    id: "p5-003", part: 5, level: 2, topic: "Corporate & HR",
    skillTags: ["grammar", "prepositions"],
    stem: "All reimbursement requests must be submitted _______ five business days following the conclusion of the business trip.",
    choices: ["within", "between", "among", "along"], answer: 0,
    explanation_vi: "Cấu trúc giới từ chỉ thời hạn: 'within + khoảng thời gian' (trong vòng... ngày).",
    trap: "'Between' phải đi với hai mốc (between A and B); 'among' đi với danh từ số nhiều >= 3 đối tượng.",
    vocab: ["reimbursement", "conclusion", "within"]
  },
  {
    id: "p5-004", part: 5, level: 4, topic: "IT & Cybersecurity",
    skillTags: ["grammar", "verb-tense", "passive"],
    stem: "A mandatory penetration testing protocol _______ by the third-party security firm before next Friday's launch.",
    choices: ["will conduct", "will be conducted", "conducted", "has conducted"], answer: 1,
    explanation_vi: "Chủ ngữ là vật 'protocol' (biên bản/quy trình kiểm thử) kết hợp với mốc thời gian tương lai 'before next Friday' -> Dùng tương lai đơn thể bị động (will be + V3/ed).",
    trap: "Nhầm lẫn giữa chủ động và bị động khi gặp thuật ngữ chuyên ngành dài.",
    vocab: ["mandatory", "penetration testing", "protocol"]
  },
  {
    id: "p5-005", part: 5, level: 3, topic: "Corporate & Management",
    skillTags: ["word-form", "noun-suffix"],
    stem: "The board of directors expressed their complete _______ with the quarter's financial performance.",
    choices: ["satisfy", "satisfaction", "satisfactory", "satisfied"], answer: 1,
    explanation_vi: "Đứng sau tính từ 'complete' và tính từ sở hữu 'their' cần một danh từ (noun) -> 'satisfaction'.",
    trap: "Hậu tố từ loại: nhầm giữa danh từ 'satisfaction' và tính từ 'satisfactory'.",
    vocab: ["directors", "satisfaction", "performance"]
  },
  {
    id: "p5-006", part: 5, level: 3, topic: "Marketing & Sales",
    skillTags: ["vocabulary", "synonym-discrimination"],
    stem: "The marketing director proposed an innovative campaign designed to attract _______ customers in the European market.",
    choices: ["potential", "capable", "urgent", "tentative"], answer: 0,
    explanation_vi: "Cụm 'potential customers' (khách hàng tiềm năng) là cụm từ chuẩn mực trong kinh doanh/TOEIC.",
    trap: "'Capable' mang nghĩa có năng lực làm gì (capable of doing), không ghép 'capable customers' để chỉ khách tiềm năng.",
    vocab: ["innovative", "potential", "campaign"]
  },
  {
    id: "p5-007", part: 5, level: 4, topic: "IT & Cybersecurity",
    skillTags: ["grammar", "conjunctions"],
    stem: "The database servers will continue functioning _______ an unexpected hardware failure occurs at the primary datacenter.",
    choices: ["unless", "without", "despite", "although"], answer: 0,
    explanation_vi: "Cần một liên từ nối hai mệnh đề có nghĩa 'trừ khi' (unless = if not). 'Without' và 'despite' là giới từ (cần danh từ).",
    trap: "Nhầm liên từ và giới từ chỉ sự nhượng bộ/loại trừ (despite / unless).",
    vocab: ["unexpected", "unless", "failure"]
  },
  {
    id: "p5-008", part: 5, level: 2, topic: "Office & Facilities",
    skillTags: ["word-form", "adjective"],
    stem: "To maintain an _______ environment, all employees must keep their workstations organized and clean.",
    choices: ["efficiently", "efficiency", "efficient", "efficacious"], answer: 2,
    explanation_vi: "Trước danh từ 'environment' và sau mạo từ 'an' cần một tính từ -> 'efficient' (hiệu quả).",
    trap: "Nhầm phó từ đuôi -ly với tính từ.",
    vocab: ["workstation", "efficient", "organized"]
  },
  {
    id: "p5-009", part: 5, level: 3, topic: "Finance & Accounting",
    skillTags: ["vocabulary", "business-phrases"],
    stem: "Due to unforeseen supply chain disruptions, the final budget had to be _______ revised.",
    choices: ["significantly", "mutually", "closely", "densely"], answer: 0,
    explanation_vi: "'Significantly revised' (được sửa đổi đáng kể/rất nhiều). 'Mutually' (lẫn nhau), 'densely' (dày đặc) không hợp nghĩa.",
    trap: "Nhầm nghĩa các trạng từ thường gặp trong báo cáo tài chính.",
    vocab: ["unforeseen", "disruption", "significantly"]
  },
  {
    id: "p5-010", part: 5, level: 4, topic: "IT & Cybersecurity",
    skillTags: ["grammar", "relative-pronouns"],
    stem: "Mr. Vance praised the cyber response unit, _______ rapid intervention prevented widespread data corruption.",
    choices: ["whose", "which", "whom", "who"], answer: 0,
    explanation_vi: "Đại từ quan hệ chỉ sở hữu: 'whose + danh từ' (whose rapid intervention = sự can thiệp nhanh của đơn vị đó).",
    trap: "Chọn 'which' vì thấy unit là tập thể/vật mà quên sau đó là cụm danh từ thuộc sở hữu.",
    vocab: ["intervention", "corruption", "widespread"]
  },
  {
    id: "p5-011", part: 5, level: 2, topic: "Human Resources",
    skillTags: ["word-form", "pronoun"],
    stem: "The department manager urged all applicants to double-check _______ contact information before submitting the form.",
    choices: ["their", "theirs", "they", "them"], answer: 0,
    explanation_vi: "Đứng trước cụm danh từ 'contact information' cần tính từ sở hữu 'their'.",
    trap: "Chọn đại từ sở hữu 'theirs' vốn không được đứng trước danh từ.",
    vocab: ["applicants", "urge", "submitting"]
  },
  {
    id: "p5-012", part: 5, level: 3, topic: "Manufacturing & Quality",
    skillTags: ["vocabulary", "collocations"],
    stem: "Every manufactured component must comply _______ international safety regulations before export.",
    choices: ["with", "to", "at", "for"], answer: 0,
    explanation_vi: "Collocation bắt buộc: 'comply with' (tuân thủ theo quy định/luật lệ).",
    trap: "Nhiều người quen 'conform to' nên dễ nhầm điền 'to' sau 'comply'.",
    vocab: ["comply", "regulations", "component"]
  },
  {
    id: "p5-013", part: 5, level: 4, topic: "IT & Cybersecurity",
    skillTags: ["grammar", "subjunctive-or-infinitive"],
    stem: "The Chief Information Security Officer recommended that multi-factor authentication _______ implemented across all corporate accounts.",
    choices: ["is", "be", "was", "being"], answer: 1,
    explanation_vi: "Thể giả định (Subjunctive mood) sau động từ 'recommend that + S + (should) + V-infinitive' -> chọn nguyên mẫu không to 'be'.",
    trap: "Bẫy ngữ pháp TOEIC điểm 700+: Chọn 'is' hoặc 'was' theo thói quen chia thì thông thường.",
    vocab: ["authentication", "recommended", "corporate"]
  },
  {
    id: "p5-014", part: 5, level: 3, topic: "Purchasing & Logistics",
    skillTags: ["vocabulary"],
    stem: "The shipment was temporarily delayed because the supplier ran out of _______ raw materials.",
    choices: ["essential", "accidental", "hesitant", "reluctant"], answer: 0,
    explanation_vi: "'Essential raw materials' (nguyên vật liệu thiết yếu/cốt lõi).",
    trap: "'Reluctant' (lưỡng lự), 'hesitant' (ngập ngừng) chỉ dùng cho cảm xúc con người, không dùng cho vật tư.",
    vocab: ["shipment", "essential", "supplier"]
  },
  {
    id: "p5-015", part: 5, level: 3, topic: "Customer Service",
    skillTags: ["word-form"],
    stem: "Our representatives are available around the clock to provide technical assistance _______ and courteously.",
    choices: ["promptly", "prompt", "promptness", "prompting"], answer: 0,
    explanation_vi: "Sau động từ 'provide assistance' và đi kèm với trạng từ 'courteously' qua liên từ 'and' cần trạng từ đồng vị -> 'promptly'.",
    trap: "Song hành ngữ pháp (parallel structure): 'and courteously' đòi hỏi trạng từ ở trước.",
    vocab: ["assistance", "courteously", "promptly"]
  },
  {
    id: "p5-016", part: 5, level: 4, topic: "IT & Network",
    skillTags: ["grammar", "participial-phrase"],
    stem: "_______ thoroughly examined the network traffic logs, the security analyst identified the anomaly.",
    choices: ["Having", "Have", "Has", "Had"], answer: 0,
    explanation_vi: "Rút gọn mệnh đề đồng chủ ngữ ở thể hoàn thành (Perfect Participle): 'Having + V3/ed' diễn tả hành động đã hoàn tất trước một hành động khác trong quá khứ.",
    trap: "Bẫy rút gọn mệnh đề: Thấy thì quá khứ vội chọn 'Had'.",
    vocab: ["analyst", "anomaly", "traffic logs"]
  },
  {
    id: "p5-017", part: 5, level: 2, topic: "Office General",
    skillTags: ["grammar", "comparative"],
    stem: "The upgraded cloud storage plan offers significantly _______ bandwidth than the standard version.",
    choices: ["great", "greater", "greatest", "greatly"], answer: 1,
    explanation_vi: "Có từ 'than' ở phía sau báo hiệu so sánh hơn của tính từ ngắn 'greater'.",
    trap: "Từ bổ trợ 'significantly' gây phân tâm cấu trúc so sánh hơn.",
    vocab: ["bandwidth", "significantly", "upgraded"]
  },
  {
    id: "p5-018", part: 5, level: 3, topic: "Legal & Contracts",
    skillTags: ["vocabulary"],
    stem: "Neither party may disclose confidential project specifications without prior written _______ from senior leadership.",
    choices: ["consent", "contempt", "contact", "content"], answer: 0,
    explanation_vi: "Thuật ngữ hợp đồng: 'written consent' (sự đồng ý/chấp thuận bằng văn bản).",
    trap: "Bẫy từ vựng phát âm và viết gần giống nhau (consent / contempt / contact / content).",
    vocab: ["confidential", "specifications", "consent"]
  },
  {
    id: "p5-019", part: 5, level: 3, topic: "Travel & Hospitality",
    skillTags: ["vocabulary", "collocations"],
    stem: "The conference venue is located in close _______ to the central railway station and airport shuttle stops.",
    choices: ["proximity", "estimation", "allowance", "advance"], answer: 0,
    explanation_vi: "Collocation cực phổ biến trong Part 5 & 7: 'in close proximity to' (ở vị trí gần sát với cái gì).",
    trap: "Dịch 'ở gần ước tính' -> chọn sai 'estimation'.",
    vocab: ["venue", "proximity", "shuttle"]
  },
  {
    id: "p5-020", part: 5, level: 4, topic: "IT & Cybersecurity",
    skillTags: ["word-form"],
    stem: "Data encryption ensures that intercepted transmissions remain completely _______ to unauthorized observers.",
    choices: ["inaccessible", "inaccessibility", "inaccessibly", "access"], answer: 0,
    explanation_vi: "Sau động từ liên kết 'remain' và trạng từ 'completely' cần một tính từ bổ nghĩa cho chủ ngữ 'transmissions' -> 'inaccessible' (không thể truy cập).",
    trap: "Sau động từ thường nhầm chọn phó từ, nhưng 'remain' là linking verb cần tính từ.",
    vocab: ["encryption", "inaccessible", "unauthorized"]
  },
  {
    id: "p5-021", part: 5, level: 2, topic: "Human Resources",
    skillTags: ["vocabulary"],
    stem: "Due to her outstanding leadership during the merger, Ms. Zhang was recently _______ to Executive Director.",
    choices: ["promoted", "retained", "dismissed", "transferred"], answer: 0,
    explanation_vi: "Ngữ cảnh khen thưởng vì khả năng lãnh đạo xuất sắc -> 'promoted' (được thăng chức).",
    trap: "'Retained' (giữ lại), 'dismissed' (cho thôi việc) mâu thuẫn ý nghĩa tích cực 'outstanding'.",
    vocab: ["merger", "outstanding", "promoted"]
  },
  {
    id: "p5-022", part: 5, level: 3, topic: "General Business",
    skillTags: ["grammar", "conjunctions"],
    stem: "Please refrain from opening external email attachments _______ you have verified the identity of the sender.",
    choices: ["until", "during", "so that", "in order to"], answer: 0,
    explanation_vi: "'Until' (cho đến khi) nối mệnh đề thời gian. 'Refrain from... until...' (vui lòng kiềm chế/tránh làm gì cho tới khi...).",
    trap: "'During' là giới từ đi với danh từ, không đi với mệnh đề 'you have verified'.",
    vocab: ["refrain", "attachments", "verified"]
  },
  {
    id: "p5-023", part: 5, level: 4, topic: "IT & Cybersecurity",
    skillTags: ["grammar", "subjunctive", "boss-tier"],
    stem: "It is imperative that all external network drives _______ thoroughly scanned for rootkits prior to server synchronization.",
    choices: ["are", "be", "were", "being"], answer: 1,
    explanation_vi: "Thể giả định (Subjunctive mood) với tính từ chỉ tính cấp thiết: 'It is imperative that + S + (should) + V-bare' -> chọn 'be'.",
    trap: "Bẫy thì hiện tại thông thường: Nhiều thí sinh thấy drives số nhiều nên vội chọn 'are'.",
    vocab: ["imperative", "rootkits", "synchronization"]
  },
  {
    id: "p5-024", part: 5, level: 5, topic: "IT & Incident Response",
    skillTags: ["grammar", "inversion", "conditionals", "boss-tier"],
    stem: "_______ the cybersecurity team not acted so swiftly, the corporate ledger would have suffered catastrophic corruption.",
    choices: ["Had", "Were", "Should", "If"], answer: 0,
    explanation_vi: "Đảo ngữ câu điều kiện loại 3 phủ định: 'Had + S + not + V3/ed ..., S + would have + V3/ed'.",
    trap: "Bẫy câu điều kiện rút gọn: 'Were' chỉ dùng cho điều kiện loại 2, 'Should' dùng cho loại 1.",
    vocab: ["catastrophic", "ledger", "corruption"]
  },
  {
    id: "p5-025", part: 5, level: 4, topic: "Network Security",
    skillTags: ["grammar", "prepositions", "boss-tier"],
    stem: "_______ the stringent firewall rules and automated intrusion filters, several malicious packets managed to penetrate the perimeter.",
    choices: ["Notwithstanding", "Regardless", "In spite", "Whereas"], answer: 0,
    explanation_vi: "'Notwithstanding + Cụm danh từ' (Mặc dù...). 'Regardless' và 'In spite' đều thiếu giới từ 'of'.",
    trap: "Bẫy giới từ thiếu 'of': 'in spite of', 'regardless of'.",
    vocab: ["notwithstanding", "stringent", "penetrate"]
  },
  {
    id: "p5-026", part: 5, level: 5, topic: "Finance & Accounting",
    skillTags: ["vocabulary", "confusable-words", "boss-tier"],
    stem: "The senior forensic accountant discovered an unexplained _______ between the logged invoice totals and the bank wire disbursements.",
    choices: ["discrepancy", "discretion", "discipline", "dispensation"], answer: 0,
    explanation_vi: "'Discrepancy' (sự sai lệch, bất nhất về số liệu / chứng từ). 'Discretion' (sự thận trọng / quyền tự quyết).",
    trap: "Bẫy từ vựng tiền tố 'dis-': 4 từ viết gần giống nhau nhưng nghĩa hoàn toàn khác biệt.",
    vocab: ["discrepancy", "disbursements", "forensic"]
  },
  {
    id: "p5-027", part: 5, level: 4, topic: "Incident Recovery",
    skillTags: ["grammar", "participle", "boss-tier"],
    stem: "_______ successfully quarantined the ransomware payload, the security engineers initiated full data restoration.",
    choices: ["Having", "Have", "Had", "To have"], answer: 0,
    explanation_vi: "Rút gọn mệnh đề phân từ hoàn thành (Perfect Participle): 'Having + V3/ed' diễn tả hành động đã hoàn tất trước khi hành động chính diễn ra.",
    trap: "Nhầm thì quá khứ hoàn thành 'Had' khi thiếu liên từ và chủ ngữ.",
    vocab: ["quarantined", "ransomware", "restoration"]
  },
  {
    id: "p5-028", part: 5, level: 5, topic: "Corporate Governance",
    skillTags: ["grammar", "inversion", "boss-tier"],
    stem: "_______ any employee receive an email requesting administrative login credentials, it must be escalated to the SOC immediately.",
    choices: ["Should", "Were", "Had", "Unless"], answer: 0,
    explanation_vi: "Đảo ngữ câu điều kiện loại 1: 'Should + S + V-nguyên mẫu...'. Lưu ý động từ 'receive' giữ nguyên mẫu.",
    trap: "Nếu chọn 'If', động từ với 'any employee' phải chia số ít là 'receives'. Vì động từ là 'receive' nên bắt buộc phải đảo ngữ với 'Should'.",
    vocab: ["escalated", "credentials", "administrative"]
  },
  {
    id: "p5-029", part: 5, level: 4, topic: "Software Architecture",
    skillTags: ["grammar", "correlative", "boss-tier"],
    stem: "The encrypted cloud storage solution is _______ rigorous in security architecture but also remarkably intuitive for end-users.",
    choices: ["not only", "neither", "either", "as well"], answer: 0,
    explanation_vi: "Cặp liên từ tương quan bắt buộc: 'not only ... but also ...' (không những ... mà còn ...).",
    trap: "'Neither' đi với 'nor', 'Either' đi với 'or'.",
    vocab: ["rigorous", "intuitive", "architecture"]
  },
  {
    id: "p5-030", part: 5, level: 5, topic: "Compliance & Auditing",
    skillTags: ["grammar", "subjunctive", "boss-tier"],
    stem: "The external regulatory auditor insisted that the legacy cryptographic keys _______ revoked without delay.",
    choices: ["be", "are", "were", "been"], answer: 0,
    explanation_vi: "Cấu trúc giả định thức: 'insist that + S + (should) + V-infinitive' -> chọn 'be revoked'.",
    trap: "Nhiều người thấy danh từ số nhiều 'keys' vội chọn 'are' hoặc 'were'.",
    vocab: ["cryptographic", "revoked", "regulatory"]
  },
  {
    id: "p5-031", part: 5, level: 4, topic: "Cyber Defense",
    skillTags: ["word-form", "boss-tier"],
    stem: "The enterprise formulated a _______ cyber resilience strategy to counter zero-day exploits effectively.",
    choices: ["comprehensive", "comprehensively", "comprehend", "comprehension"], answer: 0,
    explanation_vi: "Đứng trước cụm danh từ 'cyber resilience strategy' cần một tính từ bổ nghĩa -> 'comprehensive' (toàn diện).",
    trap: "Bẫy từ loại đuôi -ive (tính từ) so với danh từ -ion.",
    vocab: ["resilience", "counter", "comprehensive"]
  },
  {
    id: "p5-032", part: 5, level: 5, topic: "Corporate Mergers",
    skillTags: ["vocabulary", "collocations", "boss-tier"],
    stem: "The final approval of the international defense contract is strictly _______ upon passing government compliance verification.",
    choices: ["contingent", "adjacent", "reluctant", "unanimous"], answer: 0,
    explanation_vi: "Collocation cao cấp: 'contingent upon / on' (phụ thuộc vào điều kiện gì).",
    trap: "'Adjacent' đi với giới từ 'to' (kề bên); 'reluctant' đi với 'to V' (ngại làm gì).",
    vocab: ["contingent", "verification", "compliance"]
  },
  {
    id: "p5-033", part: 5, level: 4, topic: "Data Security Policy",
    skillTags: ["grammar", "modals", "passive", "boss-tier"],
    stem: "Sensitive authentication tokens must under no circumstances _______ on public GitHub repositories.",
    choices: ["be exposed", "expose", "have exposed", "exposing"], answer: 0,
    explanation_vi: "Cấu trúc bị động sau động từ khuyết thiếu: 'must ... be + V3/ed'. 'Tokens' là đối tượng bị lộ.",
    trap: "Cụm trạng từ 'under no circumstances' chen giữa 'must' và động từ chính gây nhiễu cấu trúc.",
    vocab: ["repositories", "exposed", "authentication"]
  },
  {
    id: "p5-034", part: 5, level: 5, topic: "Security Awareness",
    skillTags: ["grammar", "inversion", "boss-tier"],
    stem: "Seldom _______ such sophisticated spear-phishing campaigns been observed by our threat intelligence analysts.",
    choices: ["have", "has", "did", "are"], answer: 0,
    explanation_vi: "Đảo ngữ với phó từ phủ định đứng đầu câu: 'Seldom + have/has + S + been + V3/ed'. Chủ ngữ 'campaigns' là số nhiều -> dùng 'have'.",
    trap: "Nhầm chia 'has' nếu chỉ nhìn lướt qua từ 'spear-phishing' mà quên chủ ngữ chính là 'campaigns'.",
    vocab: ["spear-phishing", "sophisticated", "intelligence"]
  },
  {
    id: "p5-035", part: 5, level: 4, topic: "Datacenter Operations",
    skillTags: ["grammar", "prepositions", "boss-tier"],
    stem: "All server clusters will undergo scheduled rebooting at midnight, _______ for the primary authentication node.",
    choices: ["except", "besides", "despite", "including"], answer: 0,
    explanation_vi: "'Except for' (ngoại trừ cái gì). 'Besides' mang nghĩa bên cạnh/ngoài ra (thêm vào chứ không trừ ra).",
    trap: "Nhầm lẫn giữa 'except for' (loại trừ) và 'besides' (bổ sung).",
    vocab: ["clusters", "rebooting", "except for"]
  },
  {
    id: "p5-036", part: 5, level: 5, topic: "Technology Markets",
    skillTags: ["vocabulary", "collocations", "boss-tier"],
    stem: "The technology sector experienced an _______ expansion in cybersecurity expenditures following high-profile data breaches.",
    choices: ["unprecedented", "accidental", "unanimous", "hesitant"], answer: 0,
    explanation_vi: "'Unprecedented expansion' (sự mở rộng chưa từng có tiền lệ).",
    trap: "'Unanimous' (nhất trí) chỉ dùng cho quyết định con người; 'hesitant' (do dự) dùng cho cảm xúc.",
    vocab: ["unprecedented", "expenditures", "expansion"]
  },
  {
    id: "p5-037", part: 5, level: 5, topic: "Executive Leadership",
    skillTags: ["grammar", "parallel-structure", "boss-tier"],
    stem: "The Chief Security Officer's mandate encompasses evaluating zero-day exploits, establishing policies, and _______ corporate audits.",
    choices: ["overseeing", "oversee", "overseen", "oversight"], answer: 0,
    explanation_vi: "Cấu trúc song hành (Parallel structure) với các danh động từ: 'evaluating...', 'establishing...', and 'overseeing...'.",
    trap: "Nhầm chọn danh từ 'oversight' thay vì danh động từ có tân ngữ 'corporate audits' theo sau.",
    vocab: ["mandate", "encompasses", "overseeing"]
  },

  // --- PART 6: TEXT COMPLETION (2 SETS - 8 QUESTIONS) ---
  {
    id: "p6-set1", part: 6, level: 3, topic: "IT Password & MFA Update Notice",
    passage: `MEMORANDUM\nTO: All Staff, HexaTech Solutions\nFROM: Security Operations Center (SOC)\nDATE: November 12, 2026\nSUBJECT: Upcoming Security Credential Rotation\n\nIn accordance with our bi-annual cyber hygiene protocol, all enterprise employee accounts are scheduled for credential rotation next Tuesday. The authentication portal will _______ [1] prompt you to construct a new alphanumeric password upon logging in. Please ensure your new password includes uppercase letters, numbers, and symbols.\n\nIt is _______ [2] that employees refrain from reusing passwords that have been utilized over the previous twelve months. _______ [3]. Additionally, any accounts that fail to update their credentials within 48 hours _______ [4] temporarily suspended until cleared by an IT helpdesk technician.\n\nThank you for your proactive partnership in safeguarding company data.`,
    questions: [
      {
        id: "p6-001", blankNum: 1, stem: "Select the best answer for blank [1]:",
        choices: ["automatically", "automation", "automatic", "automating"], answer: 0,
        explanation_vi: "Đứng trước động từ 'prompt' và sau trợ động từ 'will' cần một phó từ (adverb) -> 'automatically' (tự động).",
        trap: "Bẫy từ loại: Thường nhầm chọn tính từ 'automatic'."
      },
      {
        id: "p6-002", blankNum: 2, stem: "Select the best answer for blank [2]:",
        choices: ["mandatory", "optional", "tentative", "negligent"], answer: 0,
        explanation_vi: "Cụm 'It is mandatory that...' (Điều bắt buộc là...). Ngữ cảnh bảo mật thông tin đòi hỏi tính bắt buộc, không thể là 'optional' (tùy ý) hay 'negligent' (cẩu thả).",
        trap: "Bẫy ngữ nghĩa: 'optional' mâu thuẫn trực tiếp với chính sách an ninh mạng ở đoạn tiếp theo."
      },
      {
        id: "p6-003", blankNum: 3, stem: "Select the sentence that best fits blank [3]:",
        choices: [
          "This standard minimizes the potential vulnerability of credential stuffing.",
          "The corporate cafeteria will serve refreshments throughout the afternoon.",
          "Our revenue projections for the upcoming fiscal quarter remain steady.",
          "Please submit all travel receipts directly to the accounting division."
        ], answer: 0,
        explanation_vi: "Câu (A) 'This standard minimizes the potential vulnerability...' giải thích lý do vì sao không được dùng lại mật khẩu cũ ở câu trước. Các đáp án khác lạc đề về nhà ăn, doanh thu, công tác phí.",
        trap: "Dạng câu chèn cả câu văn (Sentence insertion) đòi hỏi tính mạch lạc (coherence) với câu đứng trước."
      },
      {
        id: "p6-004", blankNum: 4, stem: "Select the best answer for blank [4]:",
        choices: ["will be", "have been", "were", "are being"], answer: 0,
        explanation_vi: "Chủ ngữ là 'accounts' kết hợp với mốc thời gian tương lai 'within 48 hours' -> Dùng tương lai đơn bị động 'will be temporarily suspended' (sẽ bị tạm đình chỉ).",
        trap: "Bẫy thì động từ trong mệnh đề chính sau mệnh đề quan hệ 'that fail to update'."
      }
    ]
  },
  {
    id: "p6-set2", part: 6, level: 3, topic: "Corporate Software Convention",
    passage: `EMAIL INVITATION\nTO: Regional Technology Partners\nFROM: Clara Bennett, Director of Enterprise Relations\nDATE: December 5, 2026\nSUBJECT: Annual CyberTech Summit Registration\n\nDear Partner,\n\nWe are pleased to invite you to the 14th Annual Global CyberTech Summit, taking place from January 18 to 20 at the Metro Convention Center. Registration is now officially open _______ [1] all accredited partner firms.\n\nThis year's event will feature an _______ [2] keynote presentation on defensive artificial intelligence delivered by Dr. Victor Vance. _______ [3].\n\nAs a valued partner, your representatives will receive _______ [4] access badges to all executive networking sessions. Please register your delegates before December 30 to secure their hotel accommodations.\n\nWarm regards,\nClara Bennett`,
    questions: [
      {
        id: "p6-005", blankNum: 1, stem: "Select the best answer for blank [1]:",
        choices: ["to", "at", "by", "from"], answer: 0,
        explanation_vi: "Collocation bắt buộc: 'open to someone' (mở cửa / dành cho ai tham gia).",
        trap: "Bẫy giới từ: Hay nhầm 'open for' hoặc 'open by'."
      },
      {
        id: "p6-006", blankNum: 2, stem: "Select the best answer for blank [2]:",
        choices: ["insightful", "accidental", "hesitant", "reluctant"], answer: 0,
        explanation_vi: "'An insightful keynote presentation' (bài phát biểu sâu sắc / giàu thông tin chuyên môn).",
        trap: "'Accidental' (tình cờ), 'hesitant' (do dự) không mang nghĩa tích cực cho một hội thảo lớn."
      },
      {
        id: "p6-007", blankNum: 3, stem: "Select the sentence that best fits blank [3]:",
        choices: [
          "Attendees will gain actionable strategies to protect corporate infrastructure.",
          "The convention center parking lot has been closed for repaving.",
          "Our overseas shipping department is handling maritime transport.",
          "Please verify that the fire alarm batteries have been changed."
        ], answer: 0,
        explanation_vi: "Câu (A) 'Attendees will gain actionable strategies...' tiếp nối ý bài phát biểu về AI phòng thủ ở câu trước để nêu lợi ích cho người tham gia.",
        trap: "Bẫy câu chèn: Các đáp án B, C, D đều lạc đề (bãi đỗ xe, tàu biển, pin báo cháy)."
      },
      {
        id: "p6-008", blankNum: 4, stem: "Select the best answer for blank [4]:",
        choices: ["complimentary", "compliment", "complimenting", "complimented"], answer: 0,
        explanation_vi: "Trước cụm danh từ 'access badges' cần tính từ 'complimentary' mang nghĩa miễn phí / tặng kèm (complimentary access badges = thẻ tham dự miễn phí).",
        trap: "Bẫy từ vựng kinh điển TOEIC: 'complimentary' là tính từ (miễn phí), khác với động từ/danh từ 'compliment' (khen ngợi)."
      }
    ]
  },

  // --- PART 7 PASSAGES & QUESTIONS (8 QUESTIONS ACROSS 2 SETS) ---
  {
    id: "p7-set1", part: 7, level: 3, topic: "IT Security Incident & Policy",
    passage: `MEMORANDUM\nTO: All Personnel, HexaTech Solutions Global\nFROM: David Sterling, Chief Information Security Officer (CISO)\nDATE: October 14, 2026\nSUBJECT: Mandatory Security Upgrade & Phishing Simulation Alert\n\nOver the past weekend, our Security Operations Center (SOC) successfully neutralized a targeted credential-stuffing attack directed against our internal staging servers. While no proprietary client data or intellectual property was compromised, this incident highlights the imperative need for heightened vigilance across all branches.\n\nEffective Monday, October 21, multi-factor authentication (MFA) will be enforced across all cloud applications, VPN gateways, and employee portals. Anyone experiencing difficulty configuring the authenticator application on their corporate device should contact the IT Helpdesk at extension 4099 prior to 5:00 PM this Friday.\n\nAdditionally, over the next three weeks, the cybersecurity division will conduct unannounced phishing simulations. Employees who inadvertently click on simulated deceptive links will be automatically enrolled in an interactive remedial training module. We appreciate your cooperation in safeguarding company assets.`,
    questions: [
      {
        id: "p7-001", stem: "What is the primary purpose of the memorandum?",
        choices: [
          "To announce the appointment of a new CISO",
          "To notify staff of a security policy update following an incident",
          "To report a loss of sensitive customer financial files",
          "To advertise a newly released software product"
        ], answer: 1,
        explanation_vi: "Đoạn văn nêu rõ thông báo triển khai MFA bắt buộc và bài test giả lập sau một sự cố tấn công máy chủ cuối tuần qua.",
        trap: "Đáp án C sai vì bài đọc ghi rõ: 'no proprietary client data... was compromised'."
      },
      {
        id: "p7-002", stem: "According to the memo, what will occur on October 21?",
        choices: [
          "Staging servers will be taken offline permanently",
          "A replacement helpdesk phone system will be installed",
          "Multi-factor authentication will become mandatory",
          "The remedial training portal will shut down"
        ], answer: 2,
        explanation_vi: "Dòng: 'Effective Monday, October 21, multi-factor authentication (MFA) will be enforced across all cloud applications...'",
        trap: "Dễ nhầm lẫn giữa ngày diễn ra sự việc (Oct 14, Oct 21, and Friday deadline)."
      },
      {
        id: "p7-003", stem: "What will happen to employees who fail the phishing simulation?",
        choices: [
          "Their accounts will be terminated immediately",
          "They will be required to complete an educational course",
          "They will receive a formal disciplinary fine",
          "They will be reassigned to the IT Helpdesk"
        ], answer: 1,
        explanation_vi: "Trích xuất: '...will be automatically enrolled in an interactive remedial training module' (sẽ được ghi danh học lớp đào tạo bổ trợ).",
        trap: "Paraphrase: 'remedial training module' = 'educational course'."
      },
      {
        id: "p7-004", stem: "In the memo, the word 'neutralized' in paragraph 1 is closest in meaning to:",
        choices: ["counteracted", "installed", "accelerated", "overlooked"], answer: 0,
        explanation_vi: "'Neutralize' trong ngữ cảnh an ninh mạng có nghĩa là vô hiệu hóa, ngăn chặn thành công mối đe dọa (counteracted).",
        trap: "Câu hỏi từ đồng nghĩa ngữ cảnh Part 7 (vocabulary in context)."
      }
    ]
  },
  {
    id: "p7-set2", part: 7, level: 3, topic: "Business Logistics & Event Booking",
    passage: `EMAIL INQUIRY & CONFIRMATION\n\nFrom: elena.rostova@nexus-logistics.com\nTo: reservations@greenview-convention.com\nDate: November 3, 2026\nSubject: Booking Confirmation - Annual Logistics Conference\n\nDear Reservations Team,\n\nI am writing to finalize our booking for the Apex Banquet Hall and Conference Suite B for our Annual Logistics Seminar scheduled on December 12–13. We anticipate approximately 180 delegates attending from our regional distribution hubs.\n\nAs previously discussed with your event coordinator, Mr. Marcus Webb, we require high-speed wireless Internet coverage for all attendees, two high-definition video projectors, and dedicated audio equipment. Furthermore, 35 of our participants have indicated strict dietary restrictions (vegetarian and gluten-free), so please ensure the catering banquet menu accommodates these preferences.\n\nPlease furnish an updated itemized invoice reflecting our 10% non-profit corporate discount by tomorrow afternoon so our finance department can process the initial deposit.\n\nWarm regards,\nElena Rostova\nCorporate Events Liaison, Nexus Logistics`,
    questions: [
      {
        id: "p7-005", stem: "Why did Ms. Rostova send the email?",
        choices: [
          "To request a postponement of a booked seminar",
          "To confirm details and requirements for an upcoming event",
          "To complain about defective audio-visual hardware",
          "To apply for a job position as an event coordinator"
        ], answer: 1,
        explanation_vi: "Elena viết email để chốt xác nhận địa điểm, thiết bị và yêu cầu ăn uống cho hội thảo sắp tới.",
        trap: "Dễ nhầm là khiếu nại (complain) vì có nhắc tới yêu cầu chi tiết về đồ ăn và thiết bị."
      },
      {
        id: "p7-006", stem: "What specific accommodation does Ms. Rostova mention for catering?",
        choices: [
          "Providing free beverages throughout the night",
          "Catering to specific dietary requirements for some attendees",
          "Offering an exclusively seafood buffet",
          "Delivering boxed meals to individual hotel rooms"
        ], answer: 1,
        explanation_vi: "Chi tiết trong bài: '35 of our participants have indicated strict dietary restrictions (vegetarian and gluten-free)...'",
        trap: "Paraphrase: 'dietary restrictions' = 'specific dietary requirements'."
      },
      {
        id: "p7-007", stem: "What is requested to be sent by tomorrow afternoon?",
        choices: [
          "A list of delegate biographies",
          "A revised itemized bill with a discount",
          "A signed non-disclosure agreement",
          "Replacement projection equipment"
        ], answer: 1,
        explanation_vi: "Trích xuất: 'Please furnish an updated itemized invoice reflecting our 10% non-profit corporate discount by tomorrow afternoon...'",
        trap: "Từ đồng nghĩa 'invoice' = 'bill'."
      },
      {
        id: "p7-008", stem: "The word 'accommodates' in paragraph 2 is closest in meaning to:",
        choices: ["lodges", "caters to", "ignores", "purchases"], answer: 1,
        explanation_vi: "'Accommodate preferences' mang nghĩa đáp ứng, phục vụ đúng nhu cầu (caters to).",
        trap: "'Accommodate' nhiều người chỉ biết nghĩa chỗ ở (lodges), nhưng với nhu cầu/mong muốn thì mang nghĩa đáp ứng."
      }
    ]
  }
];
