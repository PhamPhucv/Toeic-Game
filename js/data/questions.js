/**
 * =====================================================================
 * DATA SCHEMA: QUESTIONS
 * TOEIC Standard Business (60%) & Cybersecurity / InfoSec Context (40%)
 * Parts 1 - 7 (Total 180 questions)
 * =====================================================================
 */
const QUESTIONS = [
  {
    "id": "p1-001",
    "part": 1,
    "level": 2,
    "topic": "IT & Server Room",
    "skillTags": [
      "listening",
      "photographs",
      "it-equipment"
    ],
    "stem": "Look at the photograph and choose the statement that best describes what you see.",
    "svgArt": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n      <defs>\n        <linearGradient id=\"srvGrad\" x1=\"0%\" y1=\"0%\" x2=\"100%\" y2=\"100%\">\n          <stop offset=\"0%\" stop-color=\"#1e293b\"/>\n          <stop offset=\"100%\" stop-color=\"#0f172a\"/>\n        </linearGradient>\n      </defs>\n      <!-- Background Wall & Floor -->\n      <rect width=\"400\" height=\"170\" fill=\"#1e293b\"/>\n      <rect y=\"170\" width=\"400\" height=\"70\" fill=\"#334155\"/>\n      <line x1=\"0\" y1=\"170\" x2=\"400\" y2=\"170\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <!-- Server Rack Cabinet -->\n      <rect x=\"50\" y=\"30\" width=\"110\" height=\"150\" rx=\"4\" fill=\"url(#srvGrad)\" stroke=\"#06b6d4\" stroke-width=\"2\"/>\n      <!-- Server Units inside -->\n      <rect x=\"60\" y=\"45\" width=\"90\" height=\"18\" rx=\"2\" fill=\"#334155\"/>\n      <circle cx=\"70\" cy=\"54\" r=\"3\" fill=\"#10b981\"/>\n      <circle cx=\"80\" cy=\"54\" r=\"3\" fill=\"#10b981\"/>\n      <circle cx=\"90\" cy=\"54\" r=\"2\" fill=\"#f59e0b\"/>\n      <rect x=\"60\" y=\"70\" width=\"90\" height=\"18\" rx=\"2\" fill=\"#334155\"/>\n      <circle cx=\"70\" cy=\"79\" r=\"3\" fill=\"#10b981\"/>\n      <circle cx=\"80\" cy=\"79\" r=\"3\" fill=\"#06b6d4\"/>\n      <rect x=\"60\" y=\"95\" width=\"90\" height=\"18\" rx=\"2\" fill=\"#334155\"/>\n      <circle cx=\"70\" cy=\"104\" r=\"3\" fill=\"#10b981\"/>\n      <circle cx=\"80\" cy=\"104\" r=\"3\" fill=\"#10b981\"/>\n      <rect x=\"60\" y=\"120\" width=\"90\" height=\"18\" rx=\"2\" fill=\"#334155\"/>\n      <circle cx=\"70\" cy=\"129\" r=\"3\" fill=\"#f59e0b\"/>\n      <rect x=\"60\" y=\"145\" width=\"90\" height=\"22\" rx=\"2\" fill=\"#1e293b\" stroke=\"#475569\"/>\n      <!-- Colored Network Cables looping -->\n      <path d=\"M145,54 C175,70 175,120 145,130\" fill=\"none\" stroke=\"#06b6d4\" stroke-width=\"3\"/>\n      <path d=\"M145,79 C185,90 185,140 145,155\" fill=\"none\" stroke=\"#3b82f6\" stroke-width=\"3\"/>\n      <path d=\"M145,104 C190,110 190,160 145,160\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"2\"/>\n      <!-- Technician Standing Beside Rack -->\n      <circle cx=\"250\" cy=\"65\" r=\"18\" fill=\"#cbd5e1\"/> <!-- Head -->\n      <rect x=\"232\" y=\"85\" width=\"36\" height=\"65\" rx=\"6\" fill=\"#0284c7\"/> <!-- Torso/Shirt -->\n      <path d=\"M232,95 L200,120\" stroke=\"#0284c7\" stroke-width=\"10\" stroke-linecap=\"round\"/> <!-- Left arm reaching to rack -->\n      <circle cx=\"196\" cy=\"122\" r=\"5\" fill=\"#fbcfe8\"/> <!-- Hand connecting cable -->\n      <path d=\"M268,95 L285,125\" stroke=\"#0284c7\" stroke-width=\"10\" stroke-linecap=\"round\"/> <!-- Right arm -->\n      <rect x=\"235\" y=\"150\" width=\"14\" height=\"65\" fill=\"#1e293b\"/> <!-- Left leg -->\n      <rect x=\"253\" y=\"150\" width=\"14\" height=\"65\" fill=\"#1e293b\"/> <!-- Right leg -->\n      <rect x=\"230\" y=\"210\" width=\"22\" height=\"10\" rx=\"3\" fill=\"#0f172a\"/> <!-- Shoes -->\n      <rect x=\"250\" y=\"210\" width=\"22\" height=\"10\" rx=\"3\" fill=\"#0f172a\"/>\n      <!-- ID Badge on chest -->\n      <rect x=\"244\" y=\"98\" width=\"10\" height=\"14\" rx=\"2\" fill=\"#f8fafc\" stroke=\"#3b82f6\"/>\n    </svg>",
    "choices": [
      "A technician is connecting a cable to the server rack.",
      "The computer monitors are stacked on the floor.",
      "A worker is installing a glass window.",
      "The office chairs are being disassembled."
    ],
    "answer": 0,
    "explanation_vi": "Phương án (A) mô tả chính xác hành động: Người kỹ thuật viên đang cắm dây cáp vào tủ máy chủ (server rack).",
    "trap": "Bẫy thì bị động tiếp diễn: 'are being disassembled' (đang được tháo dỡ) là bẫy kinh điển Part 1 khi trong tranh không có ai tháo ghế.",
    "transcript": "(A) A technician is connecting a cable to the server rack.\n(B) The computer monitors are stacked on the floor.\n(C) A worker is installing a glass window.\n(D) The office chairs are being disassembled.",
    "vocab": [
      "technician",
      "connecting",
      "server rack"
    ]
  },
  {
    "id": "p1-002",
    "part": 1,
    "level": 2,
    "topic": "Office Conference & Presentation",
    "skillTags": [
      "listening",
      "photographs",
      "presentation"
    ],
    "stem": "Look at the photograph and choose the statement that best describes what you see.",
    "svgArt": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n      <!-- Conference Room Wall -->\n      <rect width=\"400\" height=\"175\" fill=\"#1e293b\"/>\n      <rect y=\"175\" width=\"400\" height=\"65\" fill=\"#334155\"/>\n      <!-- Presentation Display Screen on Wall -->\n      <rect x=\"35\" y=\"30\" width=\"160\" height=\"95\" rx=\"6\" fill=\"#0f172a\" stroke=\"#06b6d4\" stroke-width=\"3\"/>\n      <!-- Chart Graphic on Screen -->\n      <polyline points=\"50,105 80,85 110,95 140,60 175,50\" fill=\"none\" stroke=\"#10b981\" stroke-width=\"4\"/>\n      <circle cx=\"175\" cy=\"50\" r=\"4\" fill=\"#06b6d4\"/>\n      <line x1=\"50\" y1=\"110\" x2=\"180\" y2=\"110\" stroke=\"#475569\" stroke-width=\"2\"/>\n      <!-- Presenter Woman Standing Pointing -->\n      <circle cx=\"230\" cy=\"55\" r=\"16\" fill=\"#cbd5e1\"/>\n      <path d=\"M218,73 L242,73 L246,140 L214,140 Z\" fill=\"#0369a1\"/> <!-- Business Suit -->\n      <path d=\"M218,80 L180,68\" stroke=\"#0369a1\" stroke-width=\"8\" stroke-linecap=\"round\"/> <!-- Arm pointing to screen -->\n      <path d=\"M242,80 L255,115\" stroke=\"#0369a1\" stroke-width=\"8\" stroke-linecap=\"round\"/>\n      <rect x=\"220\" y=\"140\" width=\"10\" height=\"70\" fill=\"#1e293b\"/>\n      <rect x=\"234\" y=\"140\" width=\"10\" height=\"70\" fill=\"#1e293b\"/>\n      <!-- Conference Table & Attendees -->\n      <ellipse cx=\"320\" cy=\"185\" rx=\"70\" ry=\"25\" fill=\"#475569\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <!-- Attendee 1 -->\n      <circle cx=\"310\" cy=\"135\" r=\"13\" fill=\"#94a3b8\"/>\n      <rect x=\"298\" y=\"150\" width=\"24\" height=\"30\" rx=\"4\" fill=\"#334155\"/>\n      <!-- Attendee 2 -->\n      <circle cx=\"355\" cy=\"140\" r=\"13\" fill=\"#94a3b8\"/>\n      <rect x=\"345\" y=\"155\" width=\"22\" height=\"28\" rx=\"4\" fill=\"#1e293b\"/>\n      <!-- Laptop on table -->\n      <rect x=\"300\" y=\"175\" width=\"22\" height=\"12\" rx=\"2\" fill=\"#0f172a\" stroke=\"#06b6d4\"/>\n    </svg>",
    "choices": [
      "The conference room is completely unoccupied.",
      "A woman is gesturing toward a presentation screen.",
      "Some confidential papers are being shredded.",
      "The meeting participants are leaving the building."
    ],
    "answer": 1,
    "explanation_vi": "Phương án (B) chính xác: Người phụ nữ đang chỉ tay về phía màn hình thuyết trình (gesturing toward a presentation screen).",
    "trap": "Bẫy phủ định: 'unoccupied' (không có người) mâu thuẫn trực tiếp với các nhân vật hiện diện trong tranh.",
    "transcript": "(A) The conference room is completely unoccupied.\n(B) A woman is gesturing toward a presentation screen.\n(C) Some confidential papers are being shredded.\n(D) The meeting participants are leaving the building.",
    "vocab": [
      "gesturing",
      "presentation screen",
      "unoccupied"
    ]
  },
  {
    "id": "p1-003",
    "part": 1,
    "level": 2,
    "topic": "Reception & Visitor Access",
    "skillTags": [
      "listening",
      "photographs",
      "reception"
    ],
    "stem": "Look at the photograph and choose the statement that best describes what you see.",
    "svgArt": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"400\" height=\"160\" fill=\"#1e293b\"/>\n      <rect y=\"160\" width=\"400\" height=\"80\" fill=\"#334155\"/>\n      <!-- Reception Counter Desk -->\n      <rect x=\"60\" y=\"110\" width=\"280\" height=\"65\" rx=\"6\" fill=\"#475569\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <rect x=\"70\" y=\"120\" width=\"260\" height=\"12\" fill=\"#334155\"/>\n      <!-- Visitor Signing Registry Book -->\n      <circle cx=\"140\" cy=\"65\" r=\"16\" fill=\"#cbd5e1\"/>\n      <rect x=\"122\" y=\"83\" width=\"36\" height=\"60\" rx=\"4\" fill=\"#2563eb\"/>\n      <path d=\"M138,95 L160,115\" stroke=\"#2563eb\" stroke-width=\"7\" stroke-linecap=\"round\"/> <!-- Hand holding pen -->\n      <!-- Registry Logbook on Counter -->\n      <rect x=\"155\" y=\"112\" width=\"38\" height=\"24\" rx=\"2\" fill=\"#f8fafc\" stroke=\"#94a3b8\"/>\n      <line x1=\"160\" y1=\"120\" x2=\"185\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <line x1=\"160\" y1=\"126\" x2=\"180\" y2=\"126\" stroke=\"#64748b\" stroke-width=\"2\"/>\n      <!-- Receptionist Sitting Behind Desk -->\n      <circle cx=\"280\" cy=\"80\" r=\"15\" fill=\"#cbd5e1\"/>\n      <rect x=\"264\" y=\"97\" width=\"32\" height=\"30\" rx=\"4\" fill=\"#0d9488\"/>\n      <!-- Computer Monitor on Desk -->\n      <rect x=\"220\" y=\"85\" width=\"32\" height=\"25\" rx=\"2\" fill=\"#0f172a\" stroke=\"#06b6d4\"/>\n      <rect x=\"232\" y=\"110\" width=\"8\" height=\"6\" fill=\"#0f172a\"/>\n      <!-- Digital Security Badge Scanner on desk -->\n      <rect x=\"100\" y=\"105\" width=\"20\" height=\"15\" rx=\"2\" fill=\"#0f172a\" stroke=\"#10b981\"/>\n      <circle cx=\"110\" cy=\"112\" r=\"3\" fill=\"#10b981\"/>\n    </svg>",
    "choices": [
      "A visitor is writing in a registry at the front desk.",
      "A desktop computer is being repaired by a technician.",
      "The counter is covered with potted plants.",
      "All the entrance doors have been locked."
    ],
    "answer": 0,
    "explanation_vi": "Phương án (A) mô tả chính xác: Khách viếng thăm đang ghi thông tin vào sổ đăng ký tại bàn tiếp tân (writing in a registry at the front desk).",
    "trap": "Bẫy hành động không tồn tại: 'is being repaired' không có hành động sửa chữa nào diễn ra.",
    "transcript": "(A) A visitor is writing in a registry at the front desk.\n(B) A desktop computer is being repaired by a technician.\n(C) The counter is covered with potted plants.\n(D) All the entrance doors have been locked.",
    "vocab": [
      "registry",
      "front desk",
      "visitor"
    ]
  },
  {
    "id": "p1-004",
    "part": 1,
    "level": 3,
    "topic": "Logistics & Warehouse Operations",
    "skillTags": [
      "listening",
      "photographs",
      "logistics"
    ],
    "stem": "Look at the photograph and choose the statement that best describes what you see.",
    "svgArt": "<svg viewBox=\"0 0 400 240\" width=\"100%\" height=\"240\" xmlns=\"http://www.w3.org/2000/svg\">\n      <rect width=\"400\" height=\"170\" fill=\"#1e293b\"/>\n      <rect y=\"170\" width=\"400\" height=\"70\" fill=\"#334155\"/>\n      <!-- Warehouse Storage Shelves in Background -->\n      <rect x=\"20\" y=\"25\" width=\"16\" height=\"160\" fill=\"#475569\"/>\n      <rect x=\"180\" y=\"25\" width=\"16\" height=\"160\" fill=\"#475569\"/>\n      <line x1=\"20\" y1=\"70\" x2=\"196\" y2=\"70\" stroke=\"#64748b\" stroke-width=\"4\"/>\n      <line x1=\"20\" y1=\"120\" x2=\"196\" y2=\"120\" stroke=\"#64748b\" stroke-width=\"4\"/>\n      <!-- Pallet with Cardboard Boxes -->\n      <rect x=\"50\" y=\"165\" width=\"110\" height=\"12\" fill=\"#d97706\"/> <!-- Wooden Pallet -->\n      <rect x=\"55\" y=\"115\" width=\"48\" height=\"50\" rx=\"3\" fill=\"#b45309\" stroke=\"#78350f\"/> <!-- Box 1 -->\n      <rect x=\"105\" y=\"115\" width=\"48\" height=\"50\" rx=\"3\" fill=\"#b45309\" stroke=\"#78350f\"/> <!-- Box 2 -->\n      <rect x=\"75\" y=\"70\" width=\"54\" height=\"45\" rx=\"3\" fill=\"#b45309\" stroke=\"#78350f\"/> <!-- Box on top -->\n      <rect x=\"85\" y=\"85\" width=\"18\" height=\"12\" fill=\"#f8fafc\"/> <!-- Barcode label -->\n      <!-- Warehouse Worker with Barcode Scanner -->\n      <circle cx=\"260\" cy=\"70\" r=\"17\" fill=\"#cbd5e1\"/>\n      <path d=\"M242,90 L278,90 L278,160 L242,160 Z\" fill=\"#ea580c\"/> <!-- Hi-Vis Safety Vest -->\n      <path d=\"M242,100 L205,95\" stroke=\"#ea580c\" stroke-width=\"9\" stroke-linecap=\"round\"/> <!-- Arm scanning -->\n      <rect x=\"195\" y=\"90\" width=\"15\" height=\"10\" rx=\"2\" fill=\"#0f172a\"/> <!-- Scanner Gun -->\n      <line x1=\"195\" y1=\"95\" x2=\"105\" y2=\"92\" stroke=\"#ef4444\" stroke-dasharray=\"4\" stroke-width=\"2\"/> <!-- Red Laser -->\n      <rect x=\"246\" y=\"160\" width=\"12\" height=\"55\" fill=\"#1e293b\"/>\n      <rect x=\"262\" y=\"160\" width=\"12\" height=\"55\" fill=\"#1e293b\"/>\n    </svg>",
    "choices": [
      "A forklift is transporting heavy machinery.",
      "Merchandise is being unloaded into a delivery van.",
      "An employee is scanning a label on a package.",
      "The warehouse storage shelves are completely empty."
    ],
    "answer": 2,
    "explanation_vi": "Phương án (C) đúng: Nhân viên đang quét mã vạch trên kiện hàng (scanning a label on a package).",
    "trap": "Bẫy từ vựng suy đoán: Trong tranh có kho hàng nhưng không có xe nâng (forklift) hay xe tải giao hàng (delivery van).",
    "transcript": "(A) A forklift is transporting heavy machinery.\n(B) Merchandise is being unloaded into a delivery van.\n(C) An employee is scanning a label on a package.\n(D) The warehouse storage shelves are completely empty.",
    "vocab": [
      "scanning",
      "label",
      "package"
    ]
  },
  {
    "id": "p2-001",
    "part": 2,
    "level": 2,
    "topic": "Office Requests & Audit",
    "skillTags": [
      "listening",
      "q-and-a",
      "sound-trap"
    ],
    "trapCategory": "sound",
    "stem": "Could you make five copies of the network security audit report?",
    "choices": [
      "Black coffee with sugar, please.",
      "Sure, I'll print them out right away.",
      "Yes, it was very loud."
    ],
    "answer": 1,
    "explanation_vi": "Lời đề nghị lịch sự: 'Could you make five copies...?' -> Phương án (B) đồng ý nhận in tài liệu ngay lập tức.",
    "trap": "Bẫy từ gần âm (Similar Sound): Đáp án (A) dùng từ 'coffee' phát âm gần giống với 'copies'.",
    "transcript": "Q: Could you make five copies of the network security audit report?\n(A) Black coffee with sugar, please.\n(B) Sure, I'll print them out right away.\n(C) Yes, it was very loud.",
    "vocab": [
      "copies",
      "audit report",
      "print out"
    ]
  },
  {
    "id": "p2-002",
    "part": 2,
    "level": 3,
    "topic": "IT Operations & Scheduling",
    "skillTags": [
      "listening",
      "q-and-a",
      "repeated-word"
    ],
    "trapCategory": "repeated-word",
    "stem": "When will the firewall configuration be finalized?",
    "choices": [
      "By the end of this afternoon.",
      "Because the wall needs painting.",
      "Yes, it is very final."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi bắt đầu bằng 'When' (Khi nào) hỏi mốc thời gian -> (A) 'By the end of this afternoon' (Trước cuối chiều nay) là câu trả lời trực tiếp chính xác.",
    "trap": "Bẫy lặp từ (Repeated word): (B) lặp từ 'wall' từ 'firewall', (C) lặp 'final' và bẫy Yes/No đối với câu hỏi Wh-.",
    "transcript": "Q: When will the firewall configuration be finalized?\n(A) By the end of this afternoon.\n(B) Because the wall needs painting.\n(C) Yes, it is very final.",
    "vocab": [
      "finalized",
      "firewall",
      "configuration"
    ]
  },
  {
    "id": "p2-003",
    "part": 2,
    "level": 3,
    "topic": "Management & HR",
    "skillTags": [
      "listening",
      "q-and-a",
      "indirect-response"
    ],
    "trapCategory": "indirect",
    "stem": "Who was selected as the new project manager for the cloud migration?",
    "choices": [
      "They haven't announced the decision yet.",
      "Yes, I selected it yesterday.",
      "At the downtown conference hall."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi 'Who' (Ai) nhưng người trả lời đưa ra câu trả lời gián tiếp: 'Họ vẫn chưa công bố quyết định'. Đây là dạng câu trả lời cực kỳ hay gặp trong đề TOEIC hiện đại.",
    "trap": "Bẫy Yes/No đối với câu hỏi 'Who' (B), và bẫy trả lời địa điểm cho câu hỏi người (C).",
    "transcript": "Q: Who was selected as the new project manager for the cloud migration?\n(A) They haven't announced the decision yet.\n(B) Yes, I selected it yesterday.\n(C) At the downtown conference hall.",
    "vocab": [
      "cloud migration",
      "announced",
      "selected"
    ]
  },
  {
    "id": "p2-004",
    "part": 2,
    "level": 2,
    "topic": "Emergency Planning",
    "skillTags": [
      "listening",
      "q-and-a",
      "sound-trap"
    ],
    "trapCategory": "sound",
    "stem": "Has the safety committee finished the evacuation plan?",
    "choices": [
      "Flight 204 departs at seven o'clock.",
      "No, they're still reviewing the emergency exits.",
      "It is a very plain design."
    ],
    "answer": 1,
    "explanation_vi": "Câu hỏi Yes/No hỏi tiến độ kế hoạch thoát hiểm -> (B) trả lời họ vẫn đang xem xét lối thoát hiểm.",
    "trap": "Bẫy từ đồng âm / gần âm: 'plan' (kế hoạch) bị bẫy với 'plane' (máy bay) ở câu (A) và 'plain' (đơn giản) ở câu (C).",
    "transcript": "Q: Has the safety committee finished the evacuation plan?\n(A) Flight 204 departs at seven o'clock.\n(B) No, they're still reviewing the emergency exits.\n(C) It is a very plain design.",
    "vocab": [
      "evacuation",
      "emergency exits",
      "safety committee"
    ]
  },
  {
    "id": "p2-005",
    "part": 2,
    "level": 3,
    "topic": "IT Hardware & Procurement",
    "skillTags": [
      "listening",
      "q-and-a",
      "indirect-response"
    ],
    "trapCategory": "indirect",
    "stem": "Where can I find the spare USB security dongles?",
    "choices": [
      "Ask Michael in the IT procurement department.",
      "About fifteen gigabytes.",
      "No, I don't have one."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi 'Where' hỏi vị trí đồ vật -> Câu trả lời gián tiếp chỉ dẫn hỏi người phụ trách: 'Ask Michael in IT...'",
    "trap": "Bẫy Yes/No với câu hỏi Where (C); bẫy liên tưởng sai đơn vị lưu trữ (B).",
    "transcript": "Q: Where can I find the spare USB security dongles?\n(A) Ask Michael in the IT procurement department.\n(B) About fifteen gigabytes.\n(C) No, I don't have one.",
    "vocab": [
      "spare",
      "procurement",
      "dongle"
    ]
  },
  {
    "id": "p2-006",
    "part": 2,
    "level": 3,
    "topic": "Training Options",
    "skillTags": [
      "listening",
      "q-and-a",
      "sound-trap"
    ],
    "trapCategory": "sound",
    "stem": "Would you prefer to conduct the security training online or in person?",
    "choices": [
      "Whichever is more convenient for the team.",
      "Yes, I prefer both.",
      "The express train arrives at nine."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi lựa chọn 'A or B' (online hay trực tiếp) -> (A) 'Cách nào thuận tiện hơn cho nhóm thì làm' là câu trả lời kinh điển trong giao tiếp công sở.",
    "trap": "Bẫy Yes/No với câu hỏi lựa chọn 'or' (B); bẫy từ gần âm 'training' (đào tạo) với 'train' (tàu hỏa) ở (C).",
    "transcript": "Q: Would you prefer to conduct the security training online or in person?\n(A) Whichever is more convenient for the team.\n(B) Yes, I prefer both.\n(C) The express train arrives at nine.",
    "vocab": [
      "convenient",
      "in person",
      "conduct"
    ]
  },
  {
    "id": "p2-007",
    "part": 2,
    "level": 4,
    "topic": "Incident Investigation",
    "skillTags": [
      "listening",
      "q-and-a",
      "indirect-response"
    ],
    "trapCategory": "indirect",
    "stem": "Mr. Henderson reviewed the penetration testing logs, didn't he?",
    "choices": [
      "Actually, he was out sick yesterday.",
      "He is doing very well, thank you.",
      "To test the internet bandwidth."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi đuôi kiểm tra sự việc -> (A) Phủ định ngầm tiền đề bằng cách nêu lý do ông ấy nghỉ ốm hôm qua nên chưa thể xem.",
    "trap": "Bẫy trả lời cho câu hỏi thăm sức khỏe 'How is he doing?' (B); bẫy trả lời mục đích 'To test...' (C).",
    "transcript": "Q: Mr. Henderson reviewed the penetration testing logs, didn't he?\n(A) Actually, he was out sick yesterday.\n(B) He is doing very well, thank you.\n(C) To test the internet bandwidth.",
    "vocab": [
      "penetration testing",
      "out sick",
      "reviewed"
    ]
  },
  {
    "id": "p2-008",
    "part": 2,
    "level": 3,
    "topic": "Accounting & Expenses",
    "skillTags": [
      "listening",
      "q-and-a",
      "indirect-response"
    ],
    "trapCategory": "indirect",
    "stem": "Didn't you submit the travel reimbursement voucher already?",
    "choices": [
      "I'm still waiting for one restaurant receipt.",
      "Yes, I didn't.",
      "The flight was canceled."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi phủ định 'Didn't you...?' -> (A) Giải thích lý do gián tiếp vì sao chưa nộp: đang đợi 1 hóa đơn nhà hàng.",
    "trap": "Bẫy logic câu trả lời tiếng Anh: Tiếng Anh không dùng 'Yes, I didn't' vì mâu thuẫn khẳng định/phủ định.",
    "transcript": "Q: Didn't you submit the travel reimbursement voucher already?\n(A) I'm still waiting for one restaurant receipt.\n(B) Yes, I didn't.\n(C) The flight was canceled.",
    "vocab": [
      "voucher",
      "reimbursement",
      "receipt"
    ]
  },
  {
    "id": "p2-009",
    "part": 2,
    "level": 3,
    "topic": "System Administration",
    "skillTags": [
      "listening",
      "q-and-a",
      "sound-trap"
    ],
    "trapCategory": "sound",
    "stem": "You have administrative access to the database, right?",
    "choices": [
      "I will write a detailed report shortly.",
      "Turn right at the end of the hallway.",
      "Only on the staging test server."
    ],
    "answer": 2,
    "explanation_vi": "Hỏi xác nhận quyền quản trị -> (C) Trả lời làm rõ phạm vi: chỉ có quyền trên máy chủ kiểm thử (test server).",
    "trap": "Bẫy từ đồng âm & đa nghĩa: (A) dùng từ đồng âm 'write' (viết); (B) dùng từ 'right' với nghĩa rẽ phải.",
    "transcript": "Q: You have administrative access to the database, right?\n(A) I will write a detailed report shortly.\n(B) Turn right at the end of the hallway.\n(C) Only on the staging test server.",
    "vocab": [
      "administrative access",
      "database",
      "staging"
    ]
  },
  {
    "id": "p2-010",
    "part": 2,
    "level": 3,
    "topic": "Project Management",
    "skillTags": [
      "listening",
      "q-and-a",
      "repeated-word"
    ],
    "trapCategory": "repeated-word",
    "stem": "Why don't we postpone the software rollout until next Monday?",
    "choices": [
      "That sounds like a sensible suggestion.",
      "Because I couldn't find it.",
      "At the post office down the street."
    ],
    "answer": 0,
    "explanation_vi": "'Why don't we...' là câu đề xuất (suggestion) làm gì -> (A) 'Nghe có vẻ là gợi ý hợp lý' là câu phản hồi phù hợp nhất.",
    "trap": "Bẫy máy móc nghe 'Why' vội chọn 'Because' (B); bẫy lặp từ gần âm 'postpone' thành 'post office' (C).",
    "transcript": "Q: Why don't we postpone the software rollout until next Monday?\n(A) That sounds like a sensible suggestion.\n(B) Because I couldn't find it.\n(C) At the post office down the street.",
    "vocab": [
      "postpone",
      "rollout",
      "sensible"
    ]
  },
  {
    "id": "p2-011",
    "part": 2,
    "level": 3,
    "topic": "Procurement & Licensing",
    "skillTags": [
      "listening",
      "q-and-a",
      "indirect-response"
    ],
    "trapCategory": "indirect",
    "stem": "How much did the vendor quote for the firewall license renewal?",
    "choices": [
      "The invoice is still on Rachel's desk.",
      "About ten miles south of here.",
      "Yes, it was quite expensive."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi 'How much' hỏi giá tiền nhưng câu trả lời gián tiếp chỉ nơi xem tài liệu: 'Hóa đơn vẫn ở trên bàn Rachel'.",
    "trap": "Bẫy trả lời khoảng cách 'ten miles' (B); bẫy trả lời Yes/No cho câu hỏi Wh- (C).",
    "transcript": "Q: How much did the vendor quote for the firewall license renewal?\n(A) The invoice is still on Rachel's desk.\n(B) About ten miles south of here.\n(C) Yes, it was quite expensive.",
    "vocab": [
      "quote",
      "renewal",
      "license"
    ]
  },
  {
    "id": "p2-012",
    "part": 2,
    "level": 3,
    "topic": "Office Facilities",
    "skillTags": [
      "listening",
      "q-and-a",
      "repeated-word"
    ],
    "trapCategory": "repeated-word",
    "stem": "Do you know where the visitor parking area is located?",
    "choices": [
      "The national park is closed for maintenance.",
      "Follow the yellow signs behind Building C.",
      "Yes, I parked my car yesterday."
    ],
    "answer": 1,
    "explanation_vi": "Hỏi vị trí bãi đỗ xe của khách -> (B) Chỉ dẫn: 'Đi theo các biển báo màu vàng phía sau Tòa nhà C'.",
    "trap": "Bẫy chuyển nghĩa từ vựng: 'parking' (đỗ xe) bị bẫy sang 'national park' (công viên quốc gia) ở (A).",
    "transcript": "Q: Do you know where the visitor parking area is located?\n(A) The national park is closed for maintenance.\n(B) Follow the yellow signs behind Building C.\n(C) Yes, I parked my car yesterday.",
    "vocab": [
      "located",
      "parking area",
      "visitor"
    ]
  },
  {
    "id": "p5-001",
    "part": 5,
    "level": 2,
    "topic": "IT & Cybersecurity",
    "skillTags": [
      "word-form",
      "adverb"
    ],
    "stem": "The system administrator _______ updated the server firewall to protect against zero-day exploits.",
    "choices": [
      "frequent",
      "frequency",
      "frequently",
      "frequented"
    ],
    "answer": 2,
    "explanation_vi": "Cần một phó từ (adverb) bổ nghĩa cho động từ 'updated'. 'Frequently' (thường xuyên) là trạng từ thích hợp nhất.",
    "trap": "Bẫy từ loại: Nhiều người nhầm chọn tính từ 'frequent' đứng trước động từ.",
    "vocab": [
      "frequently",
      "administrator",
      "exploit"
    ]
  },
  {
    "id": "p5-002",
    "part": 5,
    "level": 3,
    "topic": "IT & Cybersecurity",
    "skillTags": [
      "vocabulary",
      "collocation"
    ],
    "stem": "Employees are strictly required to create _______ passwords containing at least twelve characters, numbers, and symbols.",
    "choices": [
      "complex",
      "spacious",
      "cordial",
      "convenient"
    ],
    "answer": 0,
    "explanation_vi": "Collocation công nghệ: 'complex passwords' (mật khẩu phức tạp). 'Spacious' (rộng rãi), 'cordial' (thân ái), 'convenient' (tiện lợi) không hợp ngữ cảnh.",
    "trap": "Bẫy dịch nghĩa bề mặt: 'convenient' (tiện lợi) thường là mong muốn người dùng nhưng trái chính sách bảo mật.",
    "vocab": [
      "complex",
      "strictly",
      "characters"
    ]
  },
  {
    "id": "p5-003",
    "part": 5,
    "level": 2,
    "topic": "Corporate & HR",
    "skillTags": [
      "grammar",
      "prepositions"
    ],
    "stem": "All reimbursement requests must be submitted _______ five business days following the conclusion of the business trip.",
    "choices": [
      "within",
      "between",
      "among",
      "along"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc giới từ chỉ thời hạn: 'within + khoảng thời gian' (trong vòng... ngày).",
    "trap": "'Between' phải đi với hai mốc (between A and B); 'among' đi với danh từ số nhiều >= 3 đối tượng.",
    "vocab": [
      "reimbursement",
      "conclusion",
      "within"
    ]
  },
  {
    "id": "p5-004",
    "part": 5,
    "level": 4,
    "topic": "IT & Cybersecurity",
    "skillTags": [
      "grammar",
      "verb-tense",
      "passive"
    ],
    "stem": "A mandatory penetration testing protocol _______ by the third-party security firm before next Friday's launch.",
    "choices": [
      "will conduct",
      "will be conducted",
      "conducted",
      "has conducted"
    ],
    "answer": 1,
    "explanation_vi": "Chủ ngữ là vật 'protocol' (biên bản/quy trình kiểm thử) kết hợp với mốc thời gian tương lai 'before next Friday' -> Dùng tương lai đơn thể bị động (will be + V3/ed).",
    "trap": "Nhầm lẫn giữa chủ động và bị động khi gặp thuật ngữ chuyên ngành dài.",
    "vocab": [
      "mandatory",
      "penetration testing",
      "protocol"
    ]
  },
  {
    "id": "p5-005",
    "part": 5,
    "level": 3,
    "topic": "Corporate & Management",
    "skillTags": [
      "word-form",
      "noun-suffix"
    ],
    "stem": "The board of directors expressed their complete _______ with the quarter's financial performance.",
    "choices": [
      "satisfy",
      "satisfaction",
      "satisfactory",
      "satisfied"
    ],
    "answer": 1,
    "explanation_vi": "Đứng sau tính từ 'complete' và tính từ sở hữu 'their' cần một danh từ (noun) -> 'satisfaction'.",
    "trap": "Hậu tố từ loại: nhầm giữa danh từ 'satisfaction' và tính từ 'satisfactory'.",
    "vocab": [
      "directors",
      "satisfaction",
      "performance"
    ]
  },
  {
    "id": "p5-006",
    "part": 5,
    "level": 3,
    "topic": "Marketing & Sales",
    "skillTags": [
      "vocabulary",
      "synonym-discrimination"
    ],
    "stem": "The marketing director proposed an innovative campaign designed to attract _______ customers in the European market.",
    "choices": [
      "potential",
      "capable",
      "urgent",
      "tentative"
    ],
    "answer": 0,
    "explanation_vi": "Cụm 'potential customers' (khách hàng tiềm năng) là cụm từ chuẩn mực trong kinh doanh/TOEIC.",
    "trap": "'Capable' mang nghĩa có năng lực làm gì (capable of doing), không ghép 'capable customers' để chỉ khách tiềm năng.",
    "vocab": [
      "innovative",
      "potential",
      "campaign"
    ]
  },
  {
    "id": "p5-007",
    "part": 5,
    "level": 4,
    "topic": "IT & Cybersecurity",
    "skillTags": [
      "grammar",
      "conjunctions"
    ],
    "stem": "The database servers will continue functioning _______ an unexpected hardware failure occurs at the primary datacenter.",
    "choices": [
      "unless",
      "without",
      "despite",
      "although"
    ],
    "answer": 0,
    "explanation_vi": "Cần một liên từ nối hai mệnh đề có nghĩa 'trừ khi' (unless = if not). 'Without' và 'despite' là giới từ (cần danh từ).",
    "trap": "Nhầm liên từ và giới từ chỉ sự nhượng bộ/loại trừ (despite / unless).",
    "vocab": [
      "unexpected",
      "unless",
      "failure"
    ]
  },
  {
    "id": "p5-008",
    "part": 5,
    "level": 2,
    "topic": "Office & Facilities",
    "skillTags": [
      "word-form",
      "adjective"
    ],
    "stem": "To maintain an _______ environment, all employees must keep their workstations organized and clean.",
    "choices": [
      "efficiently",
      "efficiency",
      "efficient",
      "efficacious"
    ],
    "answer": 2,
    "explanation_vi": "Trước danh từ 'environment' và sau mạo từ 'an' cần một tính từ -> 'efficient' (hiệu quả).",
    "trap": "Nhầm phó từ đuôi -ly với tính từ.",
    "vocab": [
      "workstation",
      "efficient",
      "organized"
    ]
  },
  {
    "id": "p5-009",
    "part": 5,
    "level": 3,
    "topic": "Finance & Accounting",
    "skillTags": [
      "vocabulary",
      "business-phrases"
    ],
    "stem": "Due to unforeseen supply chain disruptions, the final budget had to be _______ revised.",
    "choices": [
      "significantly",
      "mutually",
      "closely",
      "densely"
    ],
    "answer": 0,
    "explanation_vi": "'Significantly revised' (được sửa đổi đáng kể/rất nhiều). 'Mutually' (lẫn nhau), 'densely' (dày đặc) không hợp nghĩa.",
    "trap": "Nhầm nghĩa các trạng từ thường gặp trong báo cáo tài chính.",
    "vocab": [
      "unforeseen",
      "disruption",
      "significantly"
    ]
  },
  {
    "id": "p5-010",
    "part": 5,
    "level": 4,
    "topic": "IT & Cybersecurity",
    "skillTags": [
      "grammar",
      "relative-pronouns"
    ],
    "stem": "Mr. Vance praised the cyber response unit, _______ rapid intervention prevented widespread data corruption.",
    "choices": [
      "whose",
      "which",
      "whom",
      "who"
    ],
    "answer": 0,
    "explanation_vi": "Đại từ quan hệ chỉ sở hữu: 'whose + danh từ' (whose rapid intervention = sự can thiệp nhanh của đơn vị đó).",
    "trap": "Chọn 'which' vì thấy unit là tập thể/vật mà quên sau đó là cụm danh từ thuộc sở hữu.",
    "vocab": [
      "intervention",
      "corruption",
      "widespread"
    ]
  },
  {
    "id": "p5-011",
    "part": 5,
    "level": 2,
    "topic": "Human Resources",
    "skillTags": [
      "word-form",
      "pronoun"
    ],
    "stem": "The department manager urged all applicants to double-check _______ contact information before submitting the form.",
    "choices": [
      "their",
      "theirs",
      "they",
      "them"
    ],
    "answer": 0,
    "explanation_vi": "Đứng trước cụm danh từ 'contact information' cần tính từ sở hữu 'their'.",
    "trap": "Chọn đại từ sở hữu 'theirs' vốn không được đứng trước danh từ.",
    "vocab": [
      "applicants",
      "urge",
      "submitting"
    ]
  },
  {
    "id": "p5-012",
    "part": 5,
    "level": 3,
    "topic": "Manufacturing & Quality",
    "skillTags": [
      "vocabulary",
      "collocations"
    ],
    "stem": "Every manufactured component must comply _______ international safety regulations before export.",
    "choices": [
      "with",
      "to",
      "at",
      "for"
    ],
    "answer": 0,
    "explanation_vi": "Collocation bắt buộc: 'comply with' (tuân thủ theo quy định/luật lệ).",
    "trap": "Nhiều người quen 'conform to' nên dễ nhầm điền 'to' sau 'comply'.",
    "vocab": [
      "comply",
      "regulations",
      "component"
    ]
  },
  {
    "id": "p5-013",
    "part": 5,
    "level": 4,
    "topic": "IT & Cybersecurity",
    "skillTags": [
      "grammar",
      "subjunctive-or-infinitive"
    ],
    "stem": "The Chief Information Security Officer recommended that multi-factor authentication _______ implemented across all corporate accounts.",
    "choices": [
      "is",
      "be",
      "was",
      "being"
    ],
    "answer": 1,
    "explanation_vi": "Thể giả định (Subjunctive mood) sau động từ 'recommend that + S + (should) + V-infinitive' -> chọn nguyên mẫu không to 'be'.",
    "trap": "Bẫy ngữ pháp TOEIC điểm 700+: Chọn 'is' hoặc 'was' theo thói quen chia thì thông thường.",
    "vocab": [
      "authentication",
      "recommended",
      "corporate"
    ]
  },
  {
    "id": "p5-014",
    "part": 5,
    "level": 3,
    "topic": "Purchasing & Logistics",
    "skillTags": [
      "vocabulary"
    ],
    "stem": "The shipment was temporarily delayed because the supplier ran out of _______ raw materials.",
    "choices": [
      "essential",
      "accidental",
      "hesitant",
      "reluctant"
    ],
    "answer": 0,
    "explanation_vi": "'Essential raw materials' (nguyên vật liệu thiết yếu/cốt lõi).",
    "trap": "'Reluctant' (lưỡng lự), 'hesitant' (ngập ngừng) chỉ dùng cho cảm xúc con người, không dùng cho vật tư.",
    "vocab": [
      "shipment",
      "essential",
      "supplier"
    ]
  },
  {
    "id": "p5-015",
    "part": 5,
    "level": 3,
    "topic": "Customer Service",
    "skillTags": [
      "word-form"
    ],
    "stem": "Our representatives are available around the clock to provide technical assistance _______ and courteously.",
    "choices": [
      "promptly",
      "prompt",
      "promptness",
      "prompting"
    ],
    "answer": 0,
    "explanation_vi": "Sau động từ 'provide assistance' và đi kèm với trạng từ 'courteously' qua liên từ 'and' cần trạng từ đồng vị -> 'promptly'.",
    "trap": "Song hành ngữ pháp (parallel structure): 'and courteously' đòi hỏi trạng từ ở trước.",
    "vocab": [
      "assistance",
      "courteously",
      "promptly"
    ]
  },
  {
    "id": "p5-016",
    "part": 5,
    "level": 4,
    "topic": "IT & Network",
    "skillTags": [
      "grammar",
      "participial-phrase"
    ],
    "stem": "_______ thoroughly examined the network traffic logs, the security analyst identified the anomaly.",
    "choices": [
      "Having",
      "Have",
      "Has",
      "Had"
    ],
    "answer": 0,
    "explanation_vi": "Rút gọn mệnh đề đồng chủ ngữ ở thể hoàn thành (Perfect Participle): 'Having + V3/ed' diễn tả hành động đã hoàn tất trước một hành động khác trong quá khứ.",
    "trap": "Bẫy rút gọn mệnh đề: Thấy thì quá khứ vội chọn 'Had'.",
    "vocab": [
      "analyst",
      "anomaly",
      "traffic logs"
    ]
  },
  {
    "id": "p5-017",
    "part": 5,
    "level": 2,
    "topic": "Office General",
    "skillTags": [
      "grammar",
      "comparative"
    ],
    "stem": "The upgraded cloud storage plan offers significantly _______ bandwidth than the standard version.",
    "choices": [
      "great",
      "greater",
      "greatest",
      "greatly"
    ],
    "answer": 1,
    "explanation_vi": "Có từ 'than' ở phía sau báo hiệu so sánh hơn của tính từ ngắn 'greater'.",
    "trap": "Từ bổ trợ 'significantly' gây phân tâm cấu trúc so sánh hơn.",
    "vocab": [
      "bandwidth",
      "significantly",
      "upgraded"
    ]
  },
  {
    "id": "p5-018",
    "part": 5,
    "level": 3,
    "topic": "Legal & Contracts",
    "skillTags": [
      "vocabulary"
    ],
    "stem": "Neither party may disclose confidential project specifications without prior written _______ from senior leadership.",
    "choices": [
      "consent",
      "contempt",
      "contact",
      "content"
    ],
    "answer": 0,
    "explanation_vi": "Thuật ngữ hợp đồng: 'written consent' (sự đồng ý/chấp thuận bằng văn bản).",
    "trap": "Bẫy từ vựng phát âm và viết gần giống nhau (consent / contempt / contact / content).",
    "vocab": [
      "confidential",
      "specifications",
      "consent"
    ]
  },
  {
    "id": "p5-019",
    "part": 5,
    "level": 3,
    "topic": "Travel & Hospitality",
    "skillTags": [
      "vocabulary",
      "collocations"
    ],
    "stem": "The conference venue is located in close _______ to the central railway station and airport shuttle stops.",
    "choices": [
      "proximity",
      "estimation",
      "allowance",
      "advance"
    ],
    "answer": 0,
    "explanation_vi": "Collocation cực phổ biến trong Part 5 & 7: 'in close proximity to' (ở vị trí gần sát với cái gì).",
    "trap": "Dịch 'ở gần ước tính' -> chọn sai 'estimation'.",
    "vocab": [
      "venue",
      "proximity",
      "shuttle"
    ]
  },
  {
    "id": "p5-020",
    "part": 5,
    "level": 4,
    "topic": "IT & Cybersecurity",
    "skillTags": [
      "word-form"
    ],
    "stem": "Data encryption ensures that intercepted transmissions remain completely _______ to unauthorized observers.",
    "choices": [
      "inaccessible",
      "inaccessibility",
      "inaccessibly",
      "access"
    ],
    "answer": 0,
    "explanation_vi": "Sau động từ liên kết 'remain' và trạng từ 'completely' cần một tính từ bổ nghĩa cho chủ ngữ 'transmissions' -> 'inaccessible' (không thể truy cập).",
    "trap": "Sau động từ thường nhầm chọn phó từ, nhưng 'remain' là linking verb cần tính từ.",
    "vocab": [
      "encryption",
      "inaccessible",
      "unauthorized"
    ]
  },
  {
    "id": "p5-021",
    "part": 5,
    "level": 2,
    "topic": "Human Resources",
    "skillTags": [
      "vocabulary"
    ],
    "stem": "Due to her outstanding leadership during the merger, Ms. Zhang was recently _______ to Executive Director.",
    "choices": [
      "promoted",
      "retained",
      "dismissed",
      "transferred"
    ],
    "answer": 0,
    "explanation_vi": "Ngữ cảnh khen thưởng vì khả năng lãnh đạo xuất sắc -> 'promoted' (được thăng chức).",
    "trap": "'Retained' (giữ lại), 'dismissed' (cho thôi việc) mâu thuẫn ý nghĩa tích cực 'outstanding'.",
    "vocab": [
      "merger",
      "outstanding",
      "promoted"
    ]
  },
  {
    "id": "p5-022",
    "part": 5,
    "level": 3,
    "topic": "General Business",
    "skillTags": [
      "grammar",
      "conjunctions"
    ],
    "stem": "Please refrain from opening external email attachments _______ you have verified the identity of the sender.",
    "choices": [
      "until",
      "during",
      "so that",
      "in order to"
    ],
    "answer": 0,
    "explanation_vi": "'Until' (cho đến khi) nối mệnh đề thời gian. 'Refrain from... until...' (vui lòng kiềm chế/tránh làm gì cho tới khi...).",
    "trap": "'During' là giới từ đi với danh từ, không đi với mệnh đề 'you have verified'.",
    "vocab": [
      "refrain",
      "attachments",
      "verified"
    ]
  },
  {
    "id": "p5-023",
    "part": 5,
    "level": 4,
    "topic": "IT & Cybersecurity",
    "skillTags": [
      "grammar",
      "subjunctive",
      "boss-tier"
    ],
    "stem": "It is imperative that all external network drives _______ thoroughly scanned for rootkits prior to server synchronization.",
    "choices": [
      "are",
      "be",
      "were",
      "being"
    ],
    "answer": 1,
    "explanation_vi": "Thể giả định (Subjunctive mood) với tính từ chỉ tính cấp thiết: 'It is imperative that + S + (should) + V-bare' -> chọn 'be'.",
    "trap": "Bẫy thì hiện tại thông thường: Nhiều thí sinh thấy drives số nhiều nên vội chọn 'are'.",
    "vocab": [
      "imperative",
      "rootkits",
      "synchronization"
    ]
  },
  {
    "id": "p5-024",
    "part": 5,
    "level": 5,
    "topic": "IT & Incident Response",
    "skillTags": [
      "grammar",
      "inversion",
      "conditionals",
      "boss-tier"
    ],
    "stem": "_______ the cybersecurity team not acted so swiftly, the corporate ledger would have suffered catastrophic corruption.",
    "choices": [
      "Had",
      "Were",
      "Should",
      "If"
    ],
    "answer": 0,
    "explanation_vi": "Đảo ngữ câu điều kiện loại 3 phủ định: 'Had + S + not + V3/ed ..., S + would have + V3/ed'.",
    "trap": "Bẫy câu điều kiện rút gọn: 'Were' chỉ dùng cho điều kiện loại 2, 'Should' dùng cho loại 1.",
    "vocab": [
      "catastrophic",
      "ledger",
      "corruption"
    ]
  },
  {
    "id": "p5-025",
    "part": 5,
    "level": 4,
    "topic": "Network Security",
    "skillTags": [
      "grammar",
      "prepositions",
      "boss-tier"
    ],
    "stem": "_______ the stringent firewall rules and automated intrusion filters, several malicious packets managed to penetrate the perimeter.",
    "choices": [
      "Notwithstanding",
      "Regardless",
      "In spite",
      "Whereas"
    ],
    "answer": 0,
    "explanation_vi": "'Notwithstanding + Cụm danh từ' (Mặc dù...). 'Regardless' và 'In spite' đều thiếu giới từ 'of'.",
    "trap": "Bẫy giới từ thiếu 'of': 'in spite of', 'regardless of'.",
    "vocab": [
      "notwithstanding",
      "stringent",
      "penetrate"
    ]
  },
  {
    "id": "p5-026",
    "part": 5,
    "level": 5,
    "topic": "Finance & Accounting",
    "skillTags": [
      "vocabulary",
      "confusable-words",
      "boss-tier"
    ],
    "stem": "The senior forensic accountant discovered an unexplained _______ between the logged invoice totals and the bank wire disbursements.",
    "choices": [
      "discrepancy",
      "discretion",
      "discipline",
      "dispensation"
    ],
    "answer": 0,
    "explanation_vi": "'Discrepancy' (sự sai lệch, bất nhất về số liệu / chứng từ). 'Discretion' (sự thận trọng / quyền tự quyết).",
    "trap": "Bẫy từ vựng tiền tố 'dis-': 4 từ viết gần giống nhau nhưng nghĩa hoàn toàn khác biệt.",
    "vocab": [
      "discrepancy",
      "disbursements",
      "forensic"
    ]
  },
  {
    "id": "p5-027",
    "part": 5,
    "level": 4,
    "topic": "Incident Recovery",
    "skillTags": [
      "grammar",
      "participle",
      "boss-tier"
    ],
    "stem": "_______ successfully quarantined the ransomware payload, the security engineers initiated full data restoration.",
    "choices": [
      "Having",
      "Have",
      "Had",
      "To have"
    ],
    "answer": 0,
    "explanation_vi": "Rút gọn mệnh đề phân từ hoàn thành (Perfect Participle): 'Having + V3/ed' diễn tả hành động đã hoàn tất trước khi hành động chính diễn ra.",
    "trap": "Nhầm thì quá khứ hoàn thành 'Had' khi thiếu liên từ và chủ ngữ.",
    "vocab": [
      "quarantined",
      "ransomware",
      "restoration"
    ]
  },
  {
    "id": "p5-028",
    "part": 5,
    "level": 5,
    "topic": "Corporate Governance",
    "skillTags": [
      "grammar",
      "inversion",
      "boss-tier"
    ],
    "stem": "_______ any employee receive an email requesting administrative login credentials, it must be escalated to the SOC immediately.",
    "choices": [
      "Should",
      "Were",
      "Had",
      "Unless"
    ],
    "answer": 0,
    "explanation_vi": "Đảo ngữ câu điều kiện loại 1: 'Should + S + V-nguyên mẫu...'. Lưu ý động từ 'receive' giữ nguyên mẫu.",
    "trap": "Nếu chọn 'If', động từ với 'any employee' phải chia số ít là 'receives'. Vì động từ là 'receive' nên bắt buộc phải đảo ngữ với 'Should'.",
    "vocab": [
      "escalated",
      "credentials",
      "administrative"
    ]
  },
  {
    "id": "p5-029",
    "part": 5,
    "level": 4,
    "topic": "Software Architecture",
    "skillTags": [
      "grammar",
      "correlative",
      "boss-tier"
    ],
    "stem": "The encrypted cloud storage solution is _______ rigorous in security architecture but also remarkably intuitive for end-users.",
    "choices": [
      "not only",
      "neither",
      "either",
      "as well"
    ],
    "answer": 0,
    "explanation_vi": "Cặp liên từ tương quan bắt buộc: 'not only ... but also ...' (không những ... mà còn ...).",
    "trap": "'Neither' đi với 'nor', 'Either' đi với 'or'.",
    "vocab": [
      "rigorous",
      "intuitive",
      "architecture"
    ]
  },
  {
    "id": "p5-030",
    "part": 5,
    "level": 5,
    "topic": "Compliance & Auditing",
    "skillTags": [
      "grammar",
      "subjunctive",
      "boss-tier"
    ],
    "stem": "The external regulatory auditor insisted that the legacy cryptographic keys _______ revoked without delay.",
    "choices": [
      "be",
      "are",
      "were",
      "been"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc giả định thức: 'insist that + S + (should) + V-infinitive' -> chọn 'be revoked'.",
    "trap": "Nhiều người thấy danh từ số nhiều 'keys' vội chọn 'are' hoặc 'were'.",
    "vocab": [
      "cryptographic",
      "revoked",
      "regulatory"
    ]
  },
  {
    "id": "p5-031",
    "part": 5,
    "level": 4,
    "topic": "Cyber Defense",
    "skillTags": [
      "word-form",
      "boss-tier"
    ],
    "stem": "The enterprise formulated a _______ cyber resilience strategy to counter zero-day exploits effectively.",
    "choices": [
      "comprehensive",
      "comprehensively",
      "comprehend",
      "comprehension"
    ],
    "answer": 0,
    "explanation_vi": "Đứng trước cụm danh từ 'cyber resilience strategy' cần một tính từ bổ nghĩa -> 'comprehensive' (toàn diện).",
    "trap": "Bẫy từ loại đuôi -ive (tính từ) so với danh từ -ion.",
    "vocab": [
      "resilience",
      "counter",
      "comprehensive"
    ]
  },
  {
    "id": "p5-032",
    "part": 5,
    "level": 5,
    "topic": "Corporate Mergers",
    "skillTags": [
      "vocabulary",
      "collocations",
      "boss-tier"
    ],
    "stem": "The final approval of the international defense contract is strictly _______ upon passing government compliance verification.",
    "choices": [
      "contingent",
      "adjacent",
      "reluctant",
      "unanimous"
    ],
    "answer": 0,
    "explanation_vi": "Collocation cao cấp: 'contingent upon / on' (phụ thuộc vào điều kiện gì).",
    "trap": "'Adjacent' đi với giới từ 'to' (kề bên); 'reluctant' đi với 'to V' (ngại làm gì).",
    "vocab": [
      "contingent",
      "verification",
      "compliance"
    ]
  },
  {
    "id": "p5-033",
    "part": 5,
    "level": 4,
    "topic": "Data Security Policy",
    "skillTags": [
      "grammar",
      "modals",
      "passive",
      "boss-tier"
    ],
    "stem": "Sensitive authentication tokens must under no circumstances _______ on public GitHub repositories.",
    "choices": [
      "be exposed",
      "expose",
      "have exposed",
      "exposing"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc bị động sau động từ khuyết thiếu: 'must ... be + V3/ed'. 'Tokens' là đối tượng bị lộ.",
    "trap": "Cụm trạng từ 'under no circumstances' chen giữa 'must' và động từ chính gây nhiễu cấu trúc.",
    "vocab": [
      "repositories",
      "exposed",
      "authentication"
    ]
  },
  {
    "id": "p5-034",
    "part": 5,
    "level": 5,
    "topic": "Security Awareness",
    "skillTags": [
      "grammar",
      "inversion",
      "boss-tier"
    ],
    "stem": "Seldom _______ such sophisticated spear-phishing campaigns been observed by our threat intelligence analysts.",
    "choices": [
      "have",
      "has",
      "did",
      "are"
    ],
    "answer": 0,
    "explanation_vi": "Đảo ngữ với phó từ phủ định đứng đầu câu: 'Seldom + have/has + S + been + V3/ed'. Chủ ngữ 'campaigns' là số nhiều -> dùng 'have'.",
    "trap": "Nhầm chia 'has' nếu chỉ nhìn lướt qua từ 'spear-phishing' mà quên chủ ngữ chính là 'campaigns'.",
    "vocab": [
      "spear-phishing",
      "sophisticated",
      "intelligence"
    ]
  },
  {
    "id": "p5-035",
    "part": 5,
    "level": 4,
    "topic": "Datacenter Operations",
    "skillTags": [
      "grammar",
      "prepositions",
      "boss-tier"
    ],
    "stem": "All server clusters will undergo scheduled rebooting at midnight, _______ for the primary authentication node.",
    "choices": [
      "except",
      "besides",
      "despite",
      "including"
    ],
    "answer": 0,
    "explanation_vi": "'Except for' (ngoại trừ cái gì). 'Besides' mang nghĩa bên cạnh/ngoài ra (thêm vào chứ không trừ ra).",
    "trap": "Nhầm lẫn giữa 'except for' (loại trừ) và 'besides' (bổ sung).",
    "vocab": [
      "clusters",
      "rebooting",
      "except for"
    ]
  },
  {
    "id": "p5-036",
    "part": 5,
    "level": 5,
    "topic": "Technology Markets",
    "skillTags": [
      "vocabulary",
      "collocations",
      "boss-tier"
    ],
    "stem": "The technology sector experienced an _______ expansion in cybersecurity expenditures following high-profile data breaches.",
    "choices": [
      "unprecedented",
      "accidental",
      "unanimous",
      "hesitant"
    ],
    "answer": 0,
    "explanation_vi": "'Unprecedented expansion' (sự mở rộng chưa từng có tiền lệ).",
    "trap": "'Unanimous' (nhất trí) chỉ dùng cho quyết định con người; 'hesitant' (do dự) dùng cho cảm xúc.",
    "vocab": [
      "unprecedented",
      "expenditures",
      "expansion"
    ]
  },
  {
    "id": "p5-037",
    "part": 5,
    "level": 5,
    "topic": "Executive Leadership",
    "skillTags": [
      "grammar",
      "parallel-structure",
      "boss-tier"
    ],
    "stem": "The Chief Security Officer's mandate encompasses evaluating zero-day exploits, establishing policies, and _______ corporate audits.",
    "choices": [
      "overseeing",
      "oversee",
      "overseen",
      "oversight"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc song hành (Parallel structure) với các danh động từ: 'evaluating...', 'establishing...', and 'overseeing...'.",
    "trap": "Nhầm chọn danh từ 'oversight' thay vì danh động từ có tân ngữ 'corporate audits' theo sau.",
    "vocab": [
      "mandate",
      "encompasses",
      "overseeing"
    ]
  },
  {
    "id": "p6-set1",
    "part": 6,
    "level": 3,
    "topic": "IT Password & MFA Update Notice",
    "passage": "MEMORANDUM\nTO: All Staff, HexaTech Solutions\nFROM: Security Operations Center (SOC)\nDATE: November 12, 2026\nSUBJECT: Upcoming Security Credential Rotation\n\nIn accordance with our bi-annual cyber hygiene protocol, all enterprise employee accounts are scheduled for credential rotation next Tuesday. The authentication portal will _______ [1] prompt you to construct a new alphanumeric password upon logging in. Please ensure your new password includes uppercase letters, numbers, and symbols.\n\nIt is _______ [2] that employees refrain from reusing passwords that have been utilized over the previous twelve months. _______ [3]. Additionally, any accounts that fail to update their credentials within 48 hours _______ [4] temporarily suspended until cleared by an IT helpdesk technician.\n\nThank you for your proactive partnership in safeguarding company data.",
    "questions": [
      {
        "id": "p6-001",
        "blankNum": 1,
        "stem": "Select the best answer for blank [1]:",
        "choices": [
          "automatically",
          "automation",
          "automatic",
          "automating"
        ],
        "answer": 0,
        "explanation_vi": "Đứng trước động từ 'prompt' và sau trợ động từ 'will' cần một phó từ (adverb) -> 'automatically' (tự động).",
        "trap": "Bẫy từ loại: Thường nhầm chọn tính từ 'automatic'."
      },
      {
        "id": "p6-002",
        "blankNum": 2,
        "stem": "Select the best answer for blank [2]:",
        "choices": [
          "mandatory",
          "optional",
          "tentative",
          "negligent"
        ],
        "answer": 0,
        "explanation_vi": "Cụm 'It is mandatory that...' (Điều bắt buộc là...). Ngữ cảnh bảo mật thông tin đòi hỏi tính bắt buộc, không thể là 'optional' (tùy ý) hay 'negligent' (cẩu thả).",
        "trap": "Bẫy ngữ nghĩa: 'optional' mâu thuẫn trực tiếp với chính sách an ninh mạng ở đoạn tiếp theo."
      },
      {
        "id": "p6-003",
        "blankNum": 3,
        "stem": "Select the sentence that best fits blank [3]:",
        "choices": [
          "This standard minimizes the potential vulnerability of credential stuffing.",
          "The corporate cafeteria will serve refreshments throughout the afternoon.",
          "Our revenue projections for the upcoming fiscal quarter remain steady.",
          "Please submit all travel receipts directly to the accounting division."
        ],
        "answer": 0,
        "explanation_vi": "Câu (A) 'This standard minimizes the potential vulnerability...' giải thích lý do vì sao không được dùng lại mật khẩu cũ ở câu trước. Các đáp án khác lạc đề về nhà ăn, doanh thu, công tác phí.",
        "trap": "Dạng câu chèn cả câu văn (Sentence insertion) đòi hỏi tính mạch lạc (coherence) với câu đứng trước."
      },
      {
        "id": "p6-004",
        "blankNum": 4,
        "stem": "Select the best answer for blank [4]:",
        "choices": [
          "will be",
          "have been",
          "were",
          "are being"
        ],
        "answer": 0,
        "explanation_vi": "Chủ ngữ là 'accounts' kết hợp với mốc thời gian tương lai 'within 48 hours' -> Dùng tương lai đơn bị động 'will be temporarily suspended' (sẽ bị tạm đình chỉ).",
        "trap": "Bẫy thì động từ trong mệnh đề chính sau mệnh đề quan hệ 'that fail to update'."
      }
    ]
  },
  {
    "id": "p6-set2",
    "part": 6,
    "level": 3,
    "topic": "Corporate Software Convention",
    "passage": "EMAIL INVITATION\nTO: Regional Technology Partners\nFROM: Clara Bennett, Director of Enterprise Relations\nDATE: December 5, 2026\nSUBJECT: Annual CyberTech Summit Registration\n\nDear Partner,\n\nWe are pleased to invite you to the 14th Annual Global CyberTech Summit, taking place from January 18 to 20 at the Metro Convention Center. Registration is now officially open _______ [1] all accredited partner firms.\n\nThis year's event will feature an _______ [2] keynote presentation on defensive artificial intelligence delivered by Dr. Victor Vance. _______ [3].\n\nAs a valued partner, your representatives will receive _______ [4] access badges to all executive networking sessions. Please register your delegates before December 30 to secure their hotel accommodations.\n\nWarm regards,\nClara Bennett",
    "questions": [
      {
        "id": "p6-005",
        "blankNum": 1,
        "stem": "Select the best answer for blank [1]:",
        "choices": [
          "to",
          "at",
          "by",
          "from"
        ],
        "answer": 0,
        "explanation_vi": "Collocation bắt buộc: 'open to someone' (mở cửa / dành cho ai tham gia).",
        "trap": "Bẫy giới từ: Hay nhầm 'open for' hoặc 'open by'."
      },
      {
        "id": "p6-006",
        "blankNum": 2,
        "stem": "Select the best answer for blank [2]:",
        "choices": [
          "insightful",
          "accidental",
          "hesitant",
          "reluctant"
        ],
        "answer": 0,
        "explanation_vi": "'An insightful keynote presentation' (bài phát biểu sâu sắc / giàu thông tin chuyên môn).",
        "trap": "'Accidental' (tình cờ), 'hesitant' (do dự) không mang nghĩa tích cực cho một hội thảo lớn."
      },
      {
        "id": "p6-007",
        "blankNum": 3,
        "stem": "Select the sentence that best fits blank [3]:",
        "choices": [
          "Attendees will gain actionable strategies to protect corporate infrastructure.",
          "The convention center parking lot has been closed for repaving.",
          "Our overseas shipping department is handling maritime transport.",
          "Please verify that the fire alarm batteries have been changed."
        ],
        "answer": 0,
        "explanation_vi": "Câu (A) 'Attendees will gain actionable strategies...' tiếp nối ý bài phát biểu về AI phòng thủ ở câu trước để nêu lợi ích cho người tham gia.",
        "trap": "Bẫy câu chèn: Các đáp án B, C, D đều lạc đề (bãi đỗ xe, tàu biển, pin báo cháy)."
      },
      {
        "id": "p6-008",
        "blankNum": 4,
        "stem": "Select the best answer for blank [4]:",
        "choices": [
          "complimentary",
          "compliment",
          "complimenting",
          "complimented"
        ],
        "answer": 0,
        "explanation_vi": "Trước cụm danh từ 'access badges' cần tính từ 'complimentary' mang nghĩa miễn phí / tặng kèm (complimentary access badges = thẻ tham dự miễn phí).",
        "trap": "Bẫy từ vựng kinh điển TOEIC: 'complimentary' là tính từ (miễn phí), khác với động từ/danh từ 'compliment' (khen ngợi)."
      }
    ]
  },
  {
    "id": "p7-set1",
    "part": 7,
    "level": 3,
    "topic": "IT Security Incident & Policy",
    "passage": "MEMORANDUM\nTO: All Personnel, HexaTech Solutions Global\nFROM: David Sterling, Chief Information Security Officer (CISO)\nDATE: October 14, 2026\nSUBJECT: Mandatory Security Upgrade & Phishing Simulation Alert\n\nOver the past weekend, our Security Operations Center (SOC) successfully neutralized a targeted credential-stuffing attack directed against our internal staging servers. While no proprietary client data or intellectual property was compromised, this incident highlights the imperative need for heightened vigilance across all branches.\n\nEffective Monday, October 21, multi-factor authentication (MFA) will be enforced across all cloud applications, VPN gateways, and employee portals. Anyone experiencing difficulty configuring the authenticator application on their corporate device should contact the IT Helpdesk at extension 4099 prior to 5:00 PM this Friday.\n\nAdditionally, over the next three weeks, the cybersecurity division will conduct unannounced phishing simulations. Employees who inadvertently click on simulated deceptive links will be automatically enrolled in an interactive remedial training module. We appreciate your cooperation in safeguarding company assets.",
    "questions": [
      {
        "id": "p7-001",
        "stem": "What is the primary purpose of the memorandum?",
        "choices": [
          "To announce the appointment of a new CISO",
          "To notify staff of a security policy update following an incident",
          "To report a loss of sensitive customer financial files",
          "To advertise a newly released software product"
        ],
        "answer": 1,
        "explanation_vi": "Đoạn văn nêu rõ thông báo triển khai MFA bắt buộc và bài test giả lập sau một sự cố tấn công máy chủ cuối tuần qua.",
        "trap": "Đáp án C sai vì bài đọc ghi rõ: 'no proprietary client data... was compromised'."
      },
      {
        "id": "p7-002",
        "stem": "According to the memo, what will occur on October 21?",
        "choices": [
          "Staging servers will be taken offline permanently",
          "A replacement helpdesk phone system will be installed",
          "Multi-factor authentication will become mandatory",
          "The remedial training portal will shut down"
        ],
        "answer": 2,
        "explanation_vi": "Dòng: 'Effective Monday, October 21, multi-factor authentication (MFA) will be enforced across all cloud applications...'",
        "trap": "Dễ nhầm lẫn giữa ngày diễn ra sự việc (Oct 14, Oct 21, and Friday deadline)."
      },
      {
        "id": "p7-003",
        "stem": "What will happen to employees who fail the phishing simulation?",
        "choices": [
          "Their accounts will be terminated immediately",
          "They will be required to complete an educational course",
          "They will receive a formal disciplinary fine",
          "They will be reassigned to the IT Helpdesk"
        ],
        "answer": 1,
        "explanation_vi": "Trích xuất: '...will be automatically enrolled in an interactive remedial training module' (sẽ được ghi danh học lớp đào tạo bổ trợ).",
        "trap": "Paraphrase: 'remedial training module' = 'educational course'."
      },
      {
        "id": "p7-004",
        "stem": "In the memo, the word 'neutralized' in paragraph 1 is closest in meaning to:",
        "choices": [
          "counteracted",
          "installed",
          "accelerated",
          "overlooked"
        ],
        "answer": 0,
        "explanation_vi": "'Neutralize' trong ngữ cảnh an ninh mạng có nghĩa là vô hiệu hóa, ngăn chặn thành công mối đe dọa (counteracted).",
        "trap": "Câu hỏi từ đồng nghĩa ngữ cảnh Part 7 (vocabulary in context)."
      }
    ]
  },
  {
    "id": "p7-set2",
    "part": 7,
    "level": 3,
    "topic": "Business Logistics & Event Booking",
    "passage": "EMAIL INQUIRY & CONFIRMATION\n\nFrom: elena.rostova@nexus-logistics.com\nTo: reservations@greenview-convention.com\nDate: November 3, 2026\nSubject: Booking Confirmation - Annual Logistics Conference\n\nDear Reservations Team,\n\nI am writing to finalize our booking for the Apex Banquet Hall and Conference Suite B for our Annual Logistics Seminar scheduled on December 12–13. We anticipate approximately 180 delegates attending from our regional distribution hubs.\n\nAs previously discussed with your event coordinator, Mr. Marcus Webb, we require high-speed wireless Internet coverage for all attendees, two high-definition video projectors, and dedicated audio equipment. Furthermore, 35 of our participants have indicated strict dietary restrictions (vegetarian and gluten-free), so please ensure the catering banquet menu accommodates these preferences.\n\nPlease furnish an updated itemized invoice reflecting our 10% non-profit corporate discount by tomorrow afternoon so our finance department can process the initial deposit.\n\nWarm regards,\nElena Rostova\nCorporate Events Liaison, Nexus Logistics",
    "questions": [
      {
        "id": "p7-005",
        "stem": "Why did Ms. Rostova send the email?",
        "choices": [
          "To request a postponement of a booked seminar",
          "To confirm details and requirements for an upcoming event",
          "To complain about defective audio-visual hardware",
          "To apply for a job position as an event coordinator"
        ],
        "answer": 1,
        "explanation_vi": "Elena viết email để chốt xác nhận địa điểm, thiết bị và yêu cầu ăn uống cho hội thảo sắp tới.",
        "trap": "Dễ nhầm là khiếu nại (complain) vì có nhắc tới yêu cầu chi tiết về đồ ăn và thiết bị."
      },
      {
        "id": "p7-006",
        "stem": "What specific accommodation does Ms. Rostova mention for catering?",
        "choices": [
          "Providing free beverages throughout the night",
          "Catering to specific dietary requirements for some attendees",
          "Offering an exclusively seafood buffet",
          "Delivering boxed meals to individual hotel rooms"
        ],
        "answer": 1,
        "explanation_vi": "Chi tiết trong bài: '35 of our participants have indicated strict dietary restrictions (vegetarian and gluten-free)...'",
        "trap": "Paraphrase: 'dietary restrictions' = 'specific dietary requirements'."
      },
      {
        "id": "p7-007",
        "stem": "What is requested to be sent by tomorrow afternoon?",
        "choices": [
          "A list of delegate biographies",
          "A revised itemized bill with a discount",
          "A signed non-disclosure agreement",
          "Replacement projection equipment"
        ],
        "answer": 1,
        "explanation_vi": "Trích xuất: 'Please furnish an updated itemized invoice reflecting our 10% non-profit corporate discount by tomorrow afternoon...'",
        "trap": "Từ đồng nghĩa 'invoice' = 'bill'."
      },
      {
        "id": "p7-008",
        "stem": "The word 'accommodates' in paragraph 2 is closest in meaning to:",
        "choices": [
          "lodges",
          "caters to",
          "ignores",
          "purchases"
        ],
        "answer": 1,
        "explanation_vi": "'Accommodate preferences' mang nghĩa đáp ứng, phục vụ đúng nhu cầu (caters to).",
        "trap": "'Accommodate' nhiều người chỉ biết nghĩa chỗ ở (lodges), nhưng với nhu cầu/mong muốn thì mang nghĩa đáp ứng."
      }
    ]
  },
  {
    "id": "p1-005",
    "part": 1,
    "level": 1,
    "topic": "Server Room Inspection",
    "skillTags": [
      "listening",
      "photographs",
      "it-workplace"
    ],
    "stem": "Look at the image: A network administrator wearing a lanyard is connecting a blue Ethernet cable into a high-density server rack.",
    "imageSvg": "<svg viewBox=\"0 0 400 240\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; height: auto; border-radius: 8px; background: #0f172a;\"><rect x=\"20\" y=\"20\" width=\"120\" height=\"200\" fill=\"#1e293b\" stroke=\"#06b6d4\" stroke-width=\"2\"/><circle cx=\"40\" cy=\"50\" r=\"4\" fill=\"#10b981\"/><circle cx=\"60\" cy=\"50\" r=\"4\" fill=\"#10b981\"/><circle cx=\"80\" cy=\"50\" r=\"4\" fill=\"#f59e0b\"/><circle cx=\"100\" cy=\"50\" r=\"4\" fill=\"#10b981\"/><rect x=\"30\" y=\"70\" width=\"100\" height=\"15\" fill=\"#334155\"/><rect x=\"30\" y=\"95\" width=\"100\" height=\"15\" fill=\"#334155\"/><rect x=\"30\" y=\"120\" width=\"100\" height=\"15\" fill=\"#334155\"/><circle cx=\"250\" cy=\"80\" r=\"28\" fill=\"#e2e8f0\"/><path d=\"M220,170 C220,120 280,120 280,170\" fill=\"#3b82f6\"/><path d=\"M245,130 L130,102\" stroke=\"#38bdf8\" stroke-width=\"4\" stroke-linecap=\"round\"/><text x=\"180\" y=\"215\" fill=\"#94a3b8\" font-size=\"12\" font-family=\"sans-serif\">SERVER INFRASTRUCTURE</text></svg>",
    "choices": [
      "He is plugging a cable into a server rack.",
      "He is assembling an office chair.",
      "He is replacing a ceiling light bulb.",
      "He is unplugging a desktop computer."
    ],
    "answer": 0,
    "explanation_vi": "Hành động thực tế: nhân viên đang cắm cáp kết nối vào tủ rack server ('plugging a cable into a server rack').",
    "trap": "Bẫy hành động đối lập: 'unplugging' thay vì 'plugging', và các bẫy hành vi lạc đề (lắp ghế, thay bóng đèn)."
  },
  {
    "id": "p1-006",
    "part": 1,
    "level": 1,
    "topic": "Boardroom Presentation",
    "skillTags": [
      "listening",
      "photographs",
      "corporate"
    ],
    "stem": "Look at the image: A speaker in business attire is pointing at a financial bar chart displayed on an interactive whiteboard while attendees take notes.",
    "imageSvg": "<svg viewBox=\"0 0 400 240\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; height: auto; border-radius: 8px; background: #0f172a;\"><rect x=\"180\" y=\"30\" width=\"180\" height=\"120\" fill=\"#1e293b\" stroke=\"#f59e0b\" stroke-width=\"2\"/><rect x=\"200\" y=\"100\" width=\"20\" height=\"40\" fill=\"#3b82f6\"/><rect x=\"230\" y=\"80\" width=\"20\" height=\"60\" fill=\"#3b82f6\"/><rect x=\"260\" y=\"60\" width=\"20\" height=\"80\" fill=\"#10b981\"/><circle cx=\"100\" cy=\"70\" r=\"24\" fill=\"#e2e8f0\"/><path d=\"M70,160 C70,110 130,110 130,160\" fill=\"#64748b\"/><line x1=\"120\" y1=\"100\" x2=\"200\" y2=\"70\" stroke=\"#f59e0b\" stroke-width=\"3\" stroke-linecap=\"round\"/><text x=\"140\" y=\"215\" fill=\"#94a3b8\" font-size=\"12\" font-family=\"sans-serif\">EXECUTIVE QUARTERLY BRIEFING</text></svg>",
    "choices": [
      "A presenter is gesturing toward a projected display.",
      "Some audience members are leaving the auditorium.",
      "The conference room chairs are being stacked against the wall.",
      "A document is being printed from a copy machine."
    ],
    "answer": 0,
    "explanation_vi": "Người thuyết trình đang hướng tay/chỉ vào màn hình chiếu ('gesturing toward a projected display').",
    "trap": "Bẫy thể bị động hiện tại tiếp diễn 'are being stacked', 'is being printed' khi không có người trực tiếp thực hiện hành động đó."
  },
  {
    "id": "p1-007",
    "part": 1,
    "level": 2,
    "topic": "Warehouse Logistics",
    "skillTags": [
      "listening",
      "photographs",
      "logistics"
    ],
    "stem": "Look at the image: Two warehouse workers in high-visibility vests are verifying an inventory barcode list next to stacked cardboard cartons.",
    "imageSvg": "<svg viewBox=\"0 0 400 240\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; height: auto; border-radius: 8px; background: #0f172a;\"><rect x=\"30\" y=\"90\" width=\"60\" height=\"50\" fill=\"#78350f\" stroke=\"#d97706\"/><rect x=\"30\" y=\"145\" width=\"60\" height=\"50\" fill=\"#78350f\" stroke=\"#d97706\"/><rect x=\"95\" y=\"145\" width=\"60\" height=\"50\" fill=\"#78350f\" stroke=\"#d97706\"/><circle cx=\"220\" cy=\"80\" r=\"22\" fill=\"#fed7aa\"/><path d=\"M195,160 C195,120 245,120 245,160\" fill=\"#f97316\"/><circle cx=\"290\" cy=\"80\" r=\"22\" fill=\"#fed7aa\"/><path d=\"M265,160 C265,120 315,120 315,160\" fill=\"#f97316\"/><rect x=\"235\" y=\"115\" width=\"25\" height=\"35\" fill=\"#fff\"/><text x=\"140\" y=\"220\" fill=\"#94a3b8\" font-size=\"12\" font-family=\"sans-serif\">SHIPPING & RECEIVING BAY</text></svg>",
    "choices": [
      "Workers are inspecting merchandise in a storage facility.",
      "Packages are being loaded onto a cargo aircraft.",
      "A forklift is moving construction materials across a yard.",
      "Boxes are being discarded in a recycling bin."
    ],
    "answer": 0,
    "explanation_vi": "Các nhân viên kho đang kiểm tra hàng hóa/hàng tồn kho ('inspecting merchandise in a storage facility').",
    "trap": "Bẫy từ vựng suy diễn quá đà: không có 'cargo aircraft' hay 'forklift' nào xuất hiện trong bối cảnh."
  },
  {
    "id": "p1-008",
    "part": 1,
    "level": 2,
    "topic": "Electronics Assembly",
    "skillTags": [
      "listening",
      "photographs",
      "manufacturing"
    ],
    "stem": "Look at the image: A lab technician with protective gloves is using precision tweezers to inspect circuit components under an illuminated magnifying lens.",
    "imageSvg": "<svg viewBox=\"0 0 400 240\" xmlns=\"http://www.w3.org/2000/svg\" style=\"width: 100%; height: auto; border-radius: 8px; background: #0f172a;\"><rect x=\"60\" y=\"140\" width=\"280\" height=\"20\" fill=\"#334155\"/><rect x=\"120\" y=\"110\" width=\"160\" height=\"30\" fill=\"#065f46\" stroke=\"#10b981\" stroke-width=\"2\"/><circle cx=\"200\" cy=\"70\" r=\"35\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"4\"/><line x1=\"200\" y1=\"105\" x2=\"200\" y2=\"135\" stroke=\"#94a3b8\" stroke-width=\"3\"/><circle cx=\"200\" cy=\"70\" r=\"26\" fill=\"rgba(56, 189, 248, 0.2)\"/><text x=\"135\" y=\"210\" fill=\"#94a3b8\" font-size=\"12\" font-family=\"sans-serif\">HARDWARE TESTING LABORATORY</text></svg>",
    "choices": [
      "A technician is examining an electronic board with specialized equipment.",
      "Safety goggles are being stored in an equipment cabinet.",
      "Circuit boards are being packed into mailing envelopes.",
      "A computer screen is being disassembled for repairs."
    ],
    "answer": 0,
    "explanation_vi": "Kỹ thuật viên đang kiểm tra bảng mạch điện tử bằng thiết bị chuyên dụng ('examining an electronic board with specialized equipment').",
    "trap": "Bẫy hành vi: 'disassembled for repairs' hoặc 'packed into mailing envelopes' không khớp với hình ảnh đang kiểm tra qua kính lúp."
  },
  {
    "id": "p2-013",
    "part": 2,
    "level": 1,
    "topic": "Meeting Reschedule",
    "skillTags": [
      "listening",
      "q-and-a",
      "time"
    ],
    "stem": "Has the vendor audit meeting been rescheduled for Wednesday or Thursday?",
    "choices": [
      "Actually, it's been pushed back to Friday morning.",
      "Yes, the audit was very thorough.",
      "In conference room 4B on the third floor."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi lựa chọn 'Wednesday or Thursday' -> Câu trả lời cung cấp thời điểm chính xác: 'Actually, it's been pushed back to Friday morning'.",
    "trap": "Bẫy Yes/No đối với câu hỏi lựa chọn Or (Lựa chọn B), và bẫy nhầm câu hỏi địa điểm Where (Lựa chọn C)."
  },
  {
    "id": "p2-014",
    "part": 2,
    "level": 2,
    "topic": "Multi-Factor Authentication",
    "skillTags": [
      "listening",
      "q-and-a",
      "it-support"
    ],
    "stem": "Why hasn't the engineering team updated their two-factor authentication keys yet?",
    "choices": [
      "They're currently deploying a major software patch.",
      "Yes, two factors are usually required.",
      "The security keys are inside the top drawer."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi 'Why hasn't...' giải thích lý do -> Đội ngũ kỹ thuật bận triển khai bản vá phần mềm lớn ('They're currently deploying...').",
    "trap": "Bẫy Yes/No cho câu hỏi 'Why' (Lựa chọn B), và bẫy lặp từ âm thanh 'security keys' (Lựa chọn C)."
  },
  {
    "id": "p2-015",
    "part": 2,
    "level": 2,
    "topic": "Budget Approval",
    "skillTags": [
      "listening",
      "q-and-a",
      "finance"
    ],
    "stem": "Who is in charge of reviewing corporate credit card expense claims?",
    "choices": [
      "Ms. Lin from the accounts payable division.",
      "No, charges are made automatically.",
      "About fifteen corporate accounts."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi 'Who is in charge of...' hỏi về người phụ trách -> 'Ms. Lin from the accounts payable division'.",
    "trap": "Bẫy Yes/No cho câu hỏi Who (Lựa chọn B) và bẫy trả lời số lượng How many (Lựa chọn C)."
  },
  {
    "id": "p2-016",
    "part": 2,
    "level": 2,
    "topic": "Server Maintenance",
    "skillTags": [
      "listening",
      "q-and-a",
      "indirect-response"
    ],
    "stem": "Could you help me configure the automated database backup script?",
    "choices": [
      "I'm scheduled to facilitate an onboarding seminar until noon.",
      "Yes, the script was written in Python.",
      "Backup files are stored on external drives."
    ],
    "answer": 0,
    "explanation_vi": "Lời đề nghị giúp đỡ ('Could you help me...') -> Từ chối khéo bằng cách nêu lịch trình bận đến trưa ('I'm scheduled to facilitate...'). Đây là dạng câu trả lời gián tiếp rất hay xuất hiện trong Part 2.",
    "trap": "Bẫy trả lời trực diện nhưng lặp lại từ vựng 'script' (Lựa chọn B) hoặc giải thích định nghĩa 'backup' (Lựa chọn C)."
  },
  {
    "id": "p2-017",
    "part": 2,
    "level": 1,
    "topic": "Office Supply Logistics",
    "skillTags": [
      "listening",
      "q-and-a",
      "procurement"
    ],
    "stem": "When are the ergonomic office chairs expected to arrive?",
    "choices": [
      "The supplier confirmed shipment for next Tuesday.",
      "Because the old chairs were causing back discomfort.",
      "Please place them near the reception desk."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi 'When' hỏi thời gian dự kiến -> 'The supplier confirmed shipment for next Tuesday'.",
    "trap": "Bẫy trả lời lý do 'Because' cho câu hỏi When (Lựa chọn B) và bẫy trả lời địa điểm Where (Lựa chọn C)."
  },
  {
    "id": "p2-018",
    "part": 2,
    "level": 3,
    "topic": "Incident Response Protocol",
    "skillTags": [
      "listening",
      "q-and-a",
      "boss-tier",
      "infosec"
    ],
    "stem": "Shouldn't we isolate the infected workstations before notifying client stakeholders?",
    "choices": [
      "The network containment procedure has already been executed.",
      "Yes, all clients were very satisfied with the demo.",
      "Stationery supplies are located in the mailroom."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi tu từ/khuyến nghị an ninh mạng ('Shouldn't we isolate...') -> Phản hồi gián tiếp: Quy trình khoanh vùng mạng đã được thực thi rồi ('already been executed').",
    "trap": "Bẫy từ phát âm tương tự: 'workstations' nhầm sang 'Stationery' (văn phòng phẩm), và bẫy lạc đề khách hàng (Lựa chọn B)."
  },
  {
    "id": "p2-019",
    "part": 2,
    "level": 2,
    "topic": "Flight & Travel",
    "skillTags": [
      "listening",
      "q-and-a",
      "travel"
    ],
    "stem": "How will the regional marketing representatives travel to the convention?",
    "choices": [
      "They reserved high-speed train tickets through corporate travel.",
      "It was scheduled for the third week of November.",
      "Yes, regional sales have exceeded targets."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi phương tiện di chuyển 'How will... travel' -> 'They reserved high-speed train tickets...'.",
    "trap": "Bẫy trả lời thời gian When (Lựa chọn B) và bẫy Yes/No lặp từ 'regional' (Lựa chọn C)."
  },
  {
    "id": "p2-020",
    "part": 2,
    "level": 2,
    "topic": "Facility Management",
    "skillTags": [
      "listening",
      "q-and-a",
      "workplace"
    ],
    "stem": "You remembered to lock the server room doors before leaving, didn't you?",
    "choices": [
      "I ensured both biometric deadbolts were engaged.",
      "No, the keys are kept in the reception desk.",
      "We need to hire two more network administrators."
    ],
    "answer": 0,
    "explanation_vi": "Câu hỏi đuôi kiểm tra sự việc ('didn't you?') -> Trả lời khẳng định chi tiết: 'I ensured both biometric deadbolts were engaged' (Tôi đã đảm bảo cả hai khóa sinh trắc học đã gài).",
    "trap": "Bẫy từ liên quan 'keys' nhưng không trả lời trực tiếp hành động khóa cửa (Lựa chọn B)."
  },
  {
    "id": "p3-set1",
    "part": 3,
    "level": 2,
    "topic": "Enterprise Cloud Migration",
    "skillTags": [
      "listening",
      "conversations",
      "it-project"
    ],
    "passage": "CONVERSATION (PART 3)\n[Man]: Good morning, Ms. Vance. Have you finalized the vendor selection for our enterprise database migration?\n[Woman]: Almost, Kevin. CloudSphere Solutions meets our scalability needs, but their quoted implementation timeline is two weeks longer than we planned.\n[Man]: That might delay our compliance audit. Why don't we ask if they can assign additional migration engineers to expedite the rollout?\n[Woman]: Good idea. I'll send an email to their account director before our afternoon meeting.",
    "dialogue": [
      {
        "speaker": "M",
        "text": "Good morning, Ms. Vance. Have you finalized the vendor selection for our enterprise database migration?"
      },
      {
        "speaker": "W",
        "text": "Almost, Kevin. CloudSphere Solutions meets our scalability needs, but their quoted implementation timeline is two weeks longer than we planned."
      },
      {
        "speaker": "M",
        "text": "That might delay our compliance audit. Why don't we ask if they can assign additional migration engineers to expedite the rollout?"
      },
      {
        "speaker": "W",
        "text": "Good idea. I'll send an email to their account director before our afternoon meeting."
      }
    ],
    "questions": [
      {
        "id": "p3-001",
        "stem": "What project are the speakers discussing?",
        "choices": [
          "A database migration project",
          "An office renovation proposal",
          "A corporate website redesign",
          "An employee performance review"
        ],
        "answer": 0,
        "explanation_vi": "Người nam mở đầu câu hỏi về 'vendor selection for our enterprise database migration'.",
        "trap": "Bẫy từ vựng 'website' và 'renovation' xuất hiện thường xuyên trong đề thi nhưng không phải ngữ cảnh đoạn này."
      },
      {
        "id": "p3-002",
        "stem": "What concern does the woman mention regarding CloudSphere Solutions?",
        "choices": [
          "Their implementation timeline is too long.",
          "Their licensing fees exceed the budget.",
          "Their customer support hotline is unreliable.",
          "Their security certifications are expired."
        ],
        "answer": 0,
        "explanation_vi": "Người phụ nữ nói 'their quoted implementation timeline is two weeks longer than we planned'.",
        "trap": "Bẫy suy diễn tài chính 'licensing fees' hoặc 'budget' dù người nói chỉ nhấn mạnh vào 'timeline'."
      },
      {
        "id": "p3-003",
        "stem": "What will the woman do before the afternoon meeting?",
        "choices": [
          "Contact a company representative",
          "Draft a new contract proposal",
          "Conduct an internal audit",
          "Submit a revised project budget"
        ],
        "answer": 0,
        "explanation_vi": "Người phụ nữ nói 'I'll send an email to their account director' (paraphrase của 'Contact a company representative').",
        "trap": "Bẫy từ đồng âm hoặc bẫy hành động khác liên quan đến 'audit' hay 'budget'."
      }
    ]
  },
  {
    "id": "p3-set2",
    "part": 3,
    "level": 2,
    "topic": "Workplace Phishing Incident",
    "skillTags": [
      "listening",
      "conversations",
      "infosec",
      "incident"
    ],
    "passage": "CONVERSATION (PART 3)\n[Woman]: Marcus, did you receive an urgent message this morning asking to verify your email credentials on an external site?\n[Man]: Yes, I almost clicked the link, but I noticed the sender's domain had an extra letter in the corporate domain name.\n[Woman]: That's definitely a phishing attempt. The IT Security Operations Center warned us that fraudulent emails were circulating.\n[Man]: I'll forward the message as an attachment to abuse@hexatech.com right away so they can block the sender's IP address.",
    "dialogue": [
      {
        "speaker": "W",
        "text": "Marcus, did you receive an urgent message this morning asking to verify your email credentials on an external site?"
      },
      {
        "speaker": "M",
        "text": "Yes, I almost clicked the link, but I noticed the sender's domain had an extra letter in the corporate domain name."
      },
      {
        "speaker": "W",
        "text": "That's definitely a phishing attempt. The IT Security Operations Center warned us that fraudulent emails were circulating."
      },
      {
        "speaker": "M",
        "text": "I'll forward the message as an attachment to abuse@hexatech.com right away so they can block the sender's IP address."
      }
    ],
    "questions": [
      {
        "id": "p3-004",
        "stem": "What problem are the speakers discussing?",
        "choices": [
          "A suspicious phishing email",
          "A malfunctioning office printer",
          "A lost corporate security badge",
          "An unexpected server power outage"
        ],
        "answer": 0,
        "explanation_vi": "Cả hai nhân vật bàn về email giả mạo yêu cầu xác thực thông tin đăng nhập ('phishing attempt').",
        "trap": "Bẫy bối cảnh văn phòng thường gặp như mất thẻ (security badge) hay hỏng máy in (printer)."
      },
      {
        "id": "p3-005",
        "stem": "How did the man identify the message as fraudulent?",
        "choices": [
          "He noticed an irregularity in the sender's email address.",
          "His web browser automatically blocked the attachment.",
          "His manager instructed him to ignore external emails.",
          "The email contained obvious spelling mistakes in the body."
        ],
        "answer": 0,
        "explanation_vi": "Người nam nói: 'the sender's domain had an extra letter in the corporate domain name' -> Nhận thấy dấu hiệu bất thường trong địa chỉ email gửi đến.",
        "trap": "Bẫy 'obvious spelling mistakes' - một dấu hiệu phishing phổ biến nhưng không được nhân vật nam nhắc tới ở đây."
      },
      {
        "id": "p3-006",
        "stem": "What does the man promise to do immediately?",
        "choices": [
          "Report the malicious message to the security team",
          "Change his corporate network password",
          "Call the human resources department",
          "Delete all emails from his personal inbox"
        ],
        "answer": 0,
        "explanation_vi": "Người nam nói 'I'll forward the message as an attachment to abuse@hexatech.com' -> Báo cáo email độc hại cho đội an ninh mạng.",
        "trap": "Bẫy hành vi: Đổi mật khẩu ('change password') là phản xạ thông thường nhưng không phải lời hứa của người nam."
      }
    ]
  },
  {
    "id": "p4-set1",
    "part": 4,
    "level": 2,
    "topic": "Corporate Software Upgrade Announcement",
    "skillTags": [
      "listening",
      "talks",
      "it-announcement"
    ],
    "passage": "RECORDED TALK (PART 4)\nAttention all personnel. This is an announcement from the Global Information Technology Department. Beginning this Friday at 9:00 PM, we will initiate a comprehensive upgrade of our customer relationship management software across all corporate regional offices. During this scheduled maintenance window, the database will remain offline until Saturday at 6:00 AM. Please ensure you save all customer correspondence and log off your terminals before departing on Friday afternoon. If you anticipate needing emergency access to client account records over the weekend, please submit an expedited authorization request to the IT helpdesk before Thursday at 5:00 PM.",
    "transcript": "Attention all personnel. This is an announcement from the Global Information Technology Department. Beginning this Friday at 9:00 PM, we will initiate a comprehensive upgrade of our customer relationship management software across all corporate regional offices. During this scheduled maintenance window, the database will remain offline until Saturday at 6:00 AM. Please ensure you save all customer correspondence and log off your terminals before departing on Friday afternoon. If you anticipate needing emergency access to client account records over the weekend, please submit an expedited authorization request to the IT helpdesk before Thursday at 5:00 PM.",
    "questions": [
      {
        "id": "p4-001",
        "stem": "What is the primary purpose of the announcement?",
        "choices": [
          "To inform employees of an upcoming software upgrade",
          "To introduce a new telecommuting policy",
          "To announce the hiring of an IT director",
          "To advertise a new customer discount program"
        ],
        "answer": 0,
        "explanation_vi": "Thông báo nêu rõ: 'we will initiate a comprehensive upgrade of our customer relationship management software'.",
        "trap": "Bẫy từ 'customer' dẫn dụ người nghe chọn đáp án 'customer discount program' (Lựa chọn D)."
      },
      {
        "id": "p4-002",
        "stem": "When will the system maintenance conclude?",
        "choices": [
          "Saturday at 6:00 AM",
          "Friday at 9:00 PM",
          "Thursday at 5:00 PM",
          "Sunday at midnight"
        ],
        "answer": 0,
        "explanation_vi": "Người nói nêu: 'offline until Saturday at 6:00 AM' -> Thời điểm kết thúc bảo trì là 6:00 sáng thứ Bảy.",
        "trap": "Bẫy mốc thời gian bắt đầu (Friday at 9:00 PM) hoặc hạn chót gửi yêu cầu (Thursday at 5:00 PM)."
      },
      {
        "id": "p4-003",
        "stem": "What are staff members instructed to do on Friday afternoon?",
        "choices": [
          "Log out of their workstations before leaving",
          "Attend an informational training webinar",
          "Submit their weekly expense receipts",
          "Inspect physical server connections"
        ],
        "answer": 0,
        "explanation_vi": "Lời dặn nhân viên: 'save all customer correspondence and log off your terminals before departing on Friday afternoon'.",
        "trap": "Bẫy các hoạt động văn phòng thứ Sáu như nộp hóa đơn (expense receipts) hoặc dự webinar."
      }
    ]
  },
  {
    "id": "p4-set2",
    "part": 4,
    "level": 3,
    "topic": "Annual Business Conference Keynote",
    "skillTags": [
      "listening",
      "talks",
      "conference",
      "corporate"
    ],
    "passage": "KEYNOTE TALK (PART 4)\nGood morning, honored delegates, and welcome to the opening plenary of the Asia-Pacific Trade Symposium. My name is Elena Rostova, and I serve as Executive Director of the International Commerce Alliance. Over the next three days, over five hundred industry executives and supply chain strategists will examine sustainable logistics solutions, emerging fintech innovations, and multilateral tariff reductions. Before we proceed to our keynote panel on automated fulfillment centers, please take a moment to download our symposium conference mobile application. The app contains real-time venue floor plans, speaker presentation slide decks, and instant notifications regarding workshop room allocations. Thank you, and I look forward to productive deliberations.",
    "transcript": "Good morning, honored delegates, and welcome to the opening plenary of the Asia-Pacific Trade Symposium. My name is Elena Rostova, and I serve as Executive Director of the International Commerce Alliance. Over the next three days, over five hundred industry executives and supply chain strategists will examine sustainable logistics solutions, emerging fintech innovations, and multilateral tariff reductions. Before we proceed to our keynote panel on automated fulfillment centers, please take a moment to download our symposium conference mobile application. The app contains real-time venue floor plans, speaker presentation slide decks, and instant notifications regarding workshop room allocations. Thank you, and I look forward to productive deliberations.",
    "questions": [
      {
        "id": "p4-004",
        "stem": "Who is the speaker?",
        "choices": [
          "An executive director of a trade alliance",
          "A logistics facility general manager",
          "A mobile software application developer",
          "A keynote speaker on commercial real estate"
        ],
        "answer": 0,
        "explanation_vi": "Người nói tự giới thiệu: 'My name is Elena Rostova, and I serve as Executive Director of the International Commerce Alliance'.",
        "trap": "Bẫy lặp từ 'mobile application developer' vì bài nói có nhắc tới ứng dụng di động hội thảo."
      },
      {
        "id": "p4-005",
        "stem": "What topic will the keynote panel focus on?",
        "choices": [
          "Automated fulfillment centers",
          "Currency exchange fluctuation",
          "Employee wellness programs",
          "International maritime law"
        ],
        "answer": 0,
        "explanation_vi": "Người nói nhắc đến: 'our keynote panel on automated fulfillment centers'.",
        "trap": "Bẫy các chủ đề kinh tế chung chung không được chọn làm chủ đề của phiên thảo luận chính."
      },
      {
        "id": "p4-006",
        "stem": "What are attendees advised to download?",
        "choices": [
          "A conference mobile application",
          "A digital financial report",
          "A corporate security certificate",
          "An airline boarding pass"
        ],
        "answer": 0,
        "explanation_vi": "Diễn giả đề nghị: 'please take a moment to download our symposium conference mobile application'.",
        "trap": "Bẫy các tài liệu tải về phổ biến khi đi công tác như boarding pass hay financial report."
      }
    ]
  },
  {
    "id": "p5-038",
    "part": 5,
    "level": 1,
    "topic": "Corporate Compliance",
    "skillTags": [
      "grammar",
      "word-form"
    ],
    "stem": "All overseas branch offices must strictly adhere to the company's _______ established environmental protocols.",
    "choices": [
      "newly",
      "new",
      "newness",
      "renew"
    ],
    "answer": 0,
    "explanation_vi": "Đứng trước tính từ/phân từ 'established' bổ nghĩa cho cụm danh từ 'environmental protocols' cần một phó từ (adverb) -> 'newly' (mới được thiết lập gần đây).",
    "trap": "Bẫy từ loại: Thường nhầm chọn tính từ 'new' đứng trước danh từ mà bỏ quên phân từ 'established'."
  },
  {
    "id": "p5-039",
    "part": 5,
    "level": 2,
    "topic": "Zero-Day Patch Management",
    "skillTags": [
      "grammar",
      "conditional",
      "infosec"
    ],
    "stem": "_______ the cybersecurity committee identify a critical zero-day threat, an emergency patch will be pushed immediately.",
    "choices": [
      "Should",
      "Were",
      "Had",
      "Unless"
    ],
    "answer": 0,
    "explanation_vi": "Đảo ngữ câu điều kiện loại 1 (Inversion in First Conditional): 'Should + S + V(nguyên thể), S + will + V' thay thế cho 'If the cybersecurity committee identifies...'.",
    "trap": "Bẫy đảo ngữ câu điều kiện: 'Were' dùng cho loại 2, 'Had' dùng cho loại 3."
  },
  {
    "id": "p5-040",
    "part": 5,
    "level": 1,
    "topic": "Travel Reimbursement",
    "skillTags": [
      "vocabulary",
      "collocation",
      "finance"
    ],
    "stem": "Please submit all hotel receipts and transportation vouchers to _______ the business trip expenses.",
    "choices": [
      "substantiate",
      "collaborate",
      "relocate",
      "negotiate"
    ],
    "answer": 0,
    "explanation_vi": "'Substantiate expenses/claims' là thuật ngữ chuẩn trong kế toán doanh nghiệp có nghĩa là chứng minh, cung cấp chứng từ xác thực chi phí.",
    "trap": "Bẫy từ vựng phát âm dài có gốc Latinh: 'collaborate' (hợp tác), 'negotiate' (đàm phán) không phù hợp ngữ nghĩa chi phí."
  },
  {
    "id": "p5-041",
    "part": 5,
    "level": 2,
    "topic": "Data Encryption Policy",
    "skillTags": [
      "grammar",
      "passive",
      "infosec"
    ],
    "stem": "Customer payment records must _______ using 256-bit AES algorithms prior to being stored on cloud servers.",
    "choices": [
      "be encrypted",
      "encrypt",
      "have encrypted",
      "encrypting"
    ],
    "answer": 0,
    "explanation_vi": "Chủ ngữ là vật ('Customer payment records' - hồ sơ thanh toán) đi sau động từ khuyết thiếu 'must' nên cần thể bị động: 'must be encrypted' (phải được mã hóa).",
    "trap": "Bẫy thể chủ động: Chọn 'encrypt' sẽ sai vì hồ sơ thanh toán không tự mã hóa chính nó."
  },
  {
    "id": "p5-042",
    "part": 5,
    "level": 2,
    "topic": "Employee Performance Evaluation",
    "skillTags": [
      "grammar",
      "conjunction"
    ],
    "stem": "_______ the department finished the quarterly project ahead of schedule, the executive board approved a team bonus.",
    "choices": [
      "Since",
      "Despite",
      "Although",
      "Whereas"
    ],
    "answer": 0,
    "explanation_vi": "Mệnh đề chỉ nguyên nhân - kết quả: 'Since' (Bởi vì/Do) = 'Because/As'. 'Because the department finished... the board approved...'.",
    "trap": "Bẫy liên từ chỉ sự tương phản: 'Although' hay giới từ 'Despite' (phải đi với N/V-ing)."
  },
  {
    "id": "p5-043",
    "part": 5,
    "level": 3,
    "topic": "Incident Response Notification",
    "skillTags": [
      "grammar",
      "subjunctive",
      "boss-tier",
      "infosec"
    ],
    "stem": "The Chief Information Security Officer demanded that all compromised user sessions _______ terminated without delay.",
    "choices": [
      "be",
      "are",
      "were",
      "have been"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc giả định thức (Subjunctive Mood) với các động từ yêu cầu/đề nghị (demand, insist, require, recommend) + that + S + (should) V(nguyên thể) -> Dùng 'be terminated'.",
    "trap": "Bẫy chia động từ theo thì quá khứ 'demanded' dẫn đến việc nhầm chọn 'were' hoặc 'are'."
  },
  {
    "id": "p5-044",
    "part": 5,
    "level": 1,
    "topic": "Product Warranty",
    "skillTags": [
      "vocabulary",
      "preposition"
    ],
    "stem": "Replacement parts for the manufacturing conveyor belts are available _______ request from our logistics hub.",
    "choices": [
      "upon",
      "into",
      "toward",
      "among"
    ],
    "answer": 0,
    "explanation_vi": "Cụm cố định: 'upon request' (khi có yêu cầu). 'Available upon request' = sẵn sàng cung cấp khi người mua yêu cầu.",
    "trap": "Bẫy giới từ: Hay nhầm 'at request' hoặc 'into request'."
  },
  {
    "id": "p5-045",
    "part": 5,
    "level": 2,
    "topic": "Network Access Privilege",
    "skillTags": [
      "vocabulary",
      "word-choice",
      "infosec"
    ],
    "stem": "Interns are granted _______ access to internal development staging environments during their probationary period.",
    "choices": [
      "restricted",
      "restriction",
      "restrictively",
      "restricting"
    ],
    "answer": 0,
    "explanation_vi": "Đứng trước danh từ 'access' cần một tính từ bổ nghĩa -> 'restricted access' (quyền truy cập bị giới hạn/hạn chế).",
    "trap": "Bẫy từ loại: Chọn danh từ ghép 'restriction' hoặc trạng từ 'restrictively'."
  },
  {
    "id": "p5-046",
    "part": 5,
    "level": 1,
    "topic": "Conference Registration",
    "skillTags": [
      "grammar",
      "pronoun"
    ],
    "stem": "Conference participants are encouraged to register _______ for the interactive breakout workshops by Friday.",
    "choices": [
      "themselves",
      "their",
      "theirs",
      "they"
    ],
    "answer": 0,
    "explanation_vi": "Đại từ phản thân 'themselves' làm tân ngữ khi chủ ngữ 'Conference participants' tự thực hiện hành động đăng ký chính mình ('register themselves').",
    "trap": "Bẫy đại từ sở hữu: 'their' (cần danh từ theo sau) hoặc 'theirs' (đại từ sở hữu thay thế cụm danh từ)."
  },
  {
    "id": "p5-047",
    "part": 5,
    "level": 2,
    "topic": "Software Licensing Audit",
    "skillTags": [
      "grammar",
      "preposition"
    ],
    "stem": "Failure to comply _______ corporate software licensing regulations may result in substantial financial penalties.",
    "choices": [
      "with",
      "to",
      "for",
      "against"
    ],
    "answer": 0,
    "explanation_vi": "Động từ 'comply' luôn đi với giới từ 'with': 'comply with regulations' (tuân thủ các quy định).",
    "trap": "Bẫy giới từ: Rất nhiều người nhầm 'comply to' (do nhầm lẫn với 'conform to' hoặc 'adhere to')."
  },
  {
    "id": "p5-048",
    "part": 5,
    "level": 2,
    "topic": "Marketing Strategy",
    "skillTags": [
      "grammar",
      "adverb-placement"
    ],
    "stem": "The market research team _______ surveyed over three thousand consumers across five metropolitan districts.",
    "choices": [
      "comprehensively",
      "comprehensiveness",
      "comprehensive",
      "comprehend"
    ],
    "answer": 0,
    "explanation_vi": "Đứng giữa chủ ngữ 'team' và động từ chính 'surveyed' cần một phó từ chỉ mức độ/cách thức -> 'comprehensively' (một cách toàn diện, bao quát).",
    "trap": "Bẫy chọn tính từ 'comprehensive' thay vì phó từ 'comprehensively'."
  },
  {
    "id": "p5-049",
    "part": 5,
    "level": 3,
    "topic": "Firewall Configuration",
    "skillTags": [
      "grammar",
      "participle-clause",
      "boss-tier",
      "infosec"
    ],
    "stem": "_______ unusual traffic spikes originating from unauthorized IP addresses, the intrusion prevention system locked the ports.",
    "choices": [
      "Detecting",
      "Detected",
      "Detection",
      "Detects"
    ],
    "answer": 0,
    "explanation_vi": "Rút gọn mệnh đề đồng chủ ngữ ở dạng chủ động: 'Because it detected...' -> 'Detecting unusual traffic spikes... the intrusion prevention system locked...'.",
    "trap": "Bẫy thể bị động: Chọn 'Detected' (chỉ dùng nếu hệ thống là đối tượng bị phát hiện, nhưng ở đây hệ thống là chủ thể phát hiện ra traffic spike)."
  },
  {
    "id": "p5-050",
    "part": 5,
    "level": 1,
    "topic": "Human Resources Hiring",
    "skillTags": [
      "vocabulary",
      "collocation"
    ],
    "stem": "The interview panel agreed that Mr. Harrison possesses the _______ qualifications for the Senior Logistics Director role.",
    "choices": [
      "requisite",
      "accidental",
      "tentative",
      "negligible"
    ],
    "answer": 0,
    "explanation_vi": "'Requisite qualifications' là collocation chuẩn mực có nghĩa là các văn bằng, tiêu chuẩn chuyên môn cần thiết/bắt buộc.",
    "trap": "Bẫy ngữ nghĩa: 'tentative' (dự kiến/thăm dò), 'negligible' (không đáng kể), 'accidental' (tình cờ)."
  },
  {
    "id": "p5-051",
    "part": 5,
    "level": 2,
    "topic": "Cloud Backup Redundancy",
    "skillTags": [
      "grammar",
      "relative-clause",
      "infosec"
    ],
    "stem": "The primary data center hosts several secondary failover clusters, _______ operate continuously without manual oversight.",
    "choices": [
      "which",
      "what",
      "who",
      "whom"
    ],
    "answer": 0,
    "explanation_vi": "Mệnh đề quan hệ không xác định (sau dấu phẩy) thay thế cho danh từ chỉ vật 'failover clusters' và làm chủ ngữ -> Dùng 'which'.",
    "trap": "Bẫy từ 'what' (không làm đại từ quan hệ nối mệnh đề) và bẫy 'that' (không đứng sau dấu phẩy)."
  },
  {
    "id": "p5-052",
    "part": 5,
    "level": 2,
    "topic": "Office Lease Agreement",
    "skillTags": [
      "vocabulary",
      "word-choice"
    ],
    "stem": "Under the provisions of the commercial lease, the tenant is responsible for routine office maintenance _______ indicated otherwise.",
    "choices": [
      "unless",
      "without",
      "despite",
      "during"
    ],
    "answer": 0,
    "explanation_vi": "Cụm liên từ điều kiện rút gọn: 'unless indicated otherwise' (trừ khi có quy định/chỉ dẫn khác).",
    "trap": "Bẫy giới từ: 'without' hoặc 'despite' không kết hợp trực tiếp với phân từ 'indicated otherwise' tạo thành mệnh đề chuẩn."
  },
  {
    "id": "p5-053",
    "part": 5,
    "level": 2,
    "topic": "Password Expiration Policy",
    "skillTags": [
      "grammar",
      "word-form",
      "infosec"
    ],
    "stem": "To minimize brute-force intrusions, corporate system accounts require _______ password rotation every forty-five days.",
    "choices": [
      "periodical",
      "periodically",
      "periodic",
      "period"
    ],
    "answer": 2,
    "explanation_vi": "Đứng trước cụm danh từ 'password rotation' cần một tính từ mô tả tính định kỳ -> 'periodic password rotation' (việc xoay vòng mật khẩu định kỳ).",
    "trap": "Bẫy từ loại: 'periodical' thường là danh từ (tạp chí xuất bản định kỳ) hoặc ít dùng trước danh từ kỹ thuật hơn 'periodic'."
  },
  {
    "id": "p5-054",
    "part": 5,
    "level": 1,
    "topic": "Financial Quarterly Report",
    "skillTags": [
      "vocabulary",
      "collocation",
      "finance"
    ],
    "stem": "Despite higher raw material costs, the corporation managed to yield a _______ profit in the second quarter.",
    "choices": [
      "substantial",
      "fragile",
      "hesitant",
      "reluctant"
    ],
    "answer": 0,
    "explanation_vi": "Collocation trong kinh doanh: 'substantial profit' (lợi nhuận đáng kể/lớn).",
    "trap": "Bẫy tính từ tả cảm xúc người: 'hesitant' (ngập ngừng), 'reluctant' (lưỡng lự), 'fragile' (mong manh)."
  },
  {
    "id": "p5-055",
    "part": 5,
    "level": 2,
    "topic": "Server Room Climate Control",
    "skillTags": [
      "grammar",
      "parallel-structure"
    ],
    "stem": "The facility maintenance guidelines emphasize checking coolant levels, replacing air filters, and _______ temperature sensors.",
    "choices": [
      "calibrating",
      "calibrate",
      "calibrated",
      "calibration"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc song hành (Parallel structure) nối bằng liên từ 'and' với chuỗi danh động từ: 'checking...', 'replacing...', and 'calibrating...'.",
    "trap": "Bẫy từ loại: Nhầm chọn danh từ 'calibration' trong khi hai thành phần trước đều là V-ing có tân ngữ trực tiếp theo sau."
  },
  {
    "id": "p5-056",
    "part": 5,
    "level": 3,
    "topic": "Vulnerability Disclosure",
    "skillTags": [
      "grammar",
      "inversion",
      "boss-tier",
      "infosec"
    ],
    "stem": "Rarely _______ an enterprise experience a ransomware breach if multi-factor authentication is enforced across all endpoints.",
    "choices": [
      "does",
      "will",
      "is",
      "has"
    ],
    "answer": 0,
    "explanation_vi": "Đảo ngữ với trạng từ phủ định/bán phủ định đứng đầu câu: 'Rarely + trợ động từ + S + V(nguyên thể)'. Động từ chính là 'experience' ở thì hiện tại đơn -> Dùng trợ động từ 'does'.",
    "trap": "Bẫy đảo ngữ: Không dùng 'is' vì động từ chính là 'experience' chứ không phải dạng bị động hay tiếp diễn."
  },
  {
    "id": "p5-057",
    "part": 5,
    "level": 1,
    "topic": "Corporate Charity Gala",
    "skillTags": [
      "vocabulary",
      "preposition"
    ],
    "stem": "Contributions to the employee educational scholarship fund will be matched _______ the corporate foundation.",
    "choices": [
      "by",
      "at",
      "into",
      "toward"
    ],
    "answer": 0,
    "explanation_vi": "Cấu trúc câu bị động chỉ tác nhân: 'be matched by the corporate foundation' (được quỹ công ty đóng góp đối ứng một khoản tương đương).",
    "trap": "Bẫy giới từ: Thường nhầm 'matched with' hoặc 'matched to'."
  },
  {
    "id": "p5-058",
    "part": 5,
    "level": 2,
    "topic": "Software Deployment Window",
    "skillTags": [
      "grammar",
      "time-clause"
    ],
    "stem": "By the time the global teleconference concludes, the infrastructure engineering team _______ the server migration.",
    "choices": [
      "will have completed",
      "completed",
      "completes",
      "was completing"
    ],
    "answer": 0,
    "explanation_vi": "Mệnh đề chỉ thời gian tương lai: 'By the time + S + V(hiện tại đơn), S + will have + V3/ed (Tương lai hoàn thành)' để diễn tả hành động hoàn tất trước mốc thời gian đó.",
    "trap": "Bẫy thì: Chọn quá khứ đơn 'completed' do nhầm cấu trúc 'By the time + quá khứ đơn, S + had V3/ed'."
  },
  {
    "id": "p5-059",
    "part": 5,
    "level": 2,
    "topic": "Employee Orientation",
    "skillTags": [
      "vocabulary",
      "word-choice"
    ],
    "stem": "The introductory handbook provides _______ descriptions of the company's health insurance and retirement plans.",
    "choices": [
      "comprehensive",
      "hesitant",
      "provisional",
      "reluctant"
    ],
    "answer": 0,
    "explanation_vi": "Tính từ 'comprehensive descriptions' có nghĩa là những mô tả đầy đủ, bao quát, chi tiết về chế độ bảo hiểm và hưu trí.",
    "trap": "Bẫy nghĩa từ vựng: 'provisional' (tạm thời), 'hesitant' (do dự)."
  },
  {
    "id": "p5-060",
    "part": 5,
    "level": 3,
    "topic": "Endpoint Security Telemetry",
    "skillTags": [
      "grammar",
      "word-form",
      "boss-tier",
      "infosec"
    ],
    "stem": "Real-time telemetry algorithms enable security analysts to identify abnormal network behaviors _______ and neutralize threats.",
    "choices": [
      "promptly",
      "prompt",
      "promptness",
      "prompted"
    ],
    "answer": 0,
    "explanation_vi": "Đứng sau cụm vị ngữ 'identify abnormal network behaviors' bổ nghĩa cho hành động nhận diện cần một phó từ chỉ thời gian/tính mau lẹ -> 'promptly' (ngay lập tức, không chậm trễ).",
    "trap": "Bẫy từ loại: Chọn tính từ 'prompt' hoặc danh từ 'promptness'."
  },
  {
    "id": "p6-set3",
    "part": 6,
    "level": 2,
    "topic": "Corporate Security Audit & Token Expiration",
    "passage": "MEMORANDUM\nTO: All Systems Engineering Staff\nFROM: Chief Information Security Office\nDATE: October 14\nSUBJECT: Mandatory Security Token Migration\n\nAs part of our continuous commitment to safeguarding internal assets, HexaTech is transitioning to hardware-based cryptographic keys. Beginning next Monday, the legacy mobile verification codes will no longer be _______ [1] for accessing production databases. Employees must collect their physical security tokens from the IT Operations Center on the 3rd floor _______ [2] Friday, October 25. Before picking up your token, please complete the brief online hardware registration form available on the employee intranet. _______ [3], the authentication system will automatically revoke any legacy access keys that remain unverified after the cut-off date. _______ [4]. We appreciate your cooperation in maintaining an impenetrable corporate network perimeter.",
    "questions": [
      {
        "id": "p6-009",
        "blankNum": 1,
        "stem": "Select the best answer for blank [1]:",
        "choices": [
          "accepted",
          "acceptance",
          "accept",
          "acceptably"
        ],
        "answer": 0,
        "explanation_vi": "Đứng sau cụm 'will no longer be' cần một quá khứ phân từ/tính từ ở thể bị động -> 'accepted' (sẽ không còn được chấp nhận nữa).",
        "trap": "Bẫy từ loại: Thường nhầm chọn danh từ 'acceptance' hoặc động từ nguyên mẫu 'accept'."
      },
      {
        "id": "p6-010",
        "blankNum": 2,
        "stem": "Select the best answer for blank [2]:",
        "choices": [
          "by",
          "at",
          "through",
          "during"
        ],
        "answer": 0,
        "explanation_vi": "Giới từ 'by' kết hợp với một mốc thời gian (Friday, October 25) để chỉ thời hạn muộn nhất hoàn thành hành động ('muộn nhất là trước ngày 25 tháng 10').",
        "trap": "Bẫy giới từ: 'at' chỉ dùng cho giờ giấc cụ thể, 'during' chỉ dùng cho một khoảng thời gian."
      },
      {
        "id": "p6-011",
        "blankNum": 3,
        "stem": "Select the best answer for blank [3]:",
        "choices": [
          "Furthermore",
          "Nevertheless",
          "Otherwise",
          "Meanwhile"
        ],
        "answer": 0,
        "explanation_vi": "Trạng từ liên kết 'Furthermore' (Hơn nữa/Bên cạnh đó) dùng để bổ sung thêm thông tin mang tính cảnh báo về việc hệ thống sẽ tự động thu hồi tài khoản chưa xác thực.",
        "trap": "Bẫy liên từ chỉ sự nhượng bộ 'Nevertheless' (Tuy nhiên) hoặc điều kiện 'Otherwise' (Nếu không thì)."
      },
      {
        "id": "p6-012",
        "blankNum": 4,
        "stem": "Select the best answer for blank [4]:",
        "choices": [
          "Technical support specialists will be stationed in the lobby to assist with initial setup.",
          "The cafeteria menu will be updated to reflect seasonal dietary preferences.",
          "All incoming postal shipments must be inspected by customs authorities.",
          "Corporate holiday schedules will be distributed during next month's meeting."
        ],
        "answer": 0,
        "explanation_vi": "Câu điền vào đoạn văn phù hợp nhất với ngữ cảnh hỗ trợ nhân viên cài đặt token phần cứng: 'Technical support specialists will be stationed in the lobby to assist with initial setup'.",
        "trap": "Bẫy các câu lạc đề hoàn toàn về nhà ăn (cafeteria), hải quan (customs), hoặc lịch nghỉ lễ (holiday schedules)."
      }
    ]
  },
  {
    "id": "p6-set4",
    "part": 6,
    "level": 2,
    "topic": "Corporate Travel Booking Policy",
    "passage": "To: All Department Heads\nFrom: Global Corporate Travel Desk\nDate: September 5\nSubject: Updated Flight and Accommodation Booking Guidelines\n\nEffective October 1, all corporate flight reservations must be routed through our new centralized booking portal, SkyRoute Corporate. By consolidating travel arrangements, HexaTech aims to _______ [1] enterprise expenses and track international itineraries more effectively. Staff members traveling on company business are instructed to make reservations at least twenty-one days _______ [2] to secure discounted commercial rates. Any travel request exceeding standard budget thresholds will require written _______ [3] from division vice presidents. _______ [4]. Detailed instructional webinars on utilizing the portal will be broadcast throughout the upcoming week.",
    "questions": [
      {
        "id": "p6-013",
        "blankNum": 1,
        "stem": "Select the best answer for blank [1]:",
        "choices": [
          "curtail",
          "expand",
          "hesitate",
          "abandon"
        ],
        "answer": 0,
        "explanation_vi": "Động từ 'curtail' có nghĩa là cắt giảm, thu hẹp (curtail enterprise expenses = cắt giảm chi phí doanh nghiệp).",
        "trap": "Bẫy từ trái nghĩa: 'expand' (mở rộng chi phí - ngược với mục tiêu tiết kiệm của công ty)."
      },
      {
        "id": "p6-014",
        "blankNum": 2,
        "stem": "Select the best answer for blank [2]:",
        "choices": [
          "in advance",
          "at least",
          "as usual",
          "for instance"
        ],
        "answer": 0,
        "explanation_vi": "Cụm thành ngữ thời gian: 'twenty-one days in advance' (trước 21 ngày). 'In advance' đi sau khoảng thời gian để chỉ sự chuẩn bị từ trước.",
        "trap": "Bẫy cụm từ: 'as usual' (như thường lệ) hay 'for instance' (ví dụ)."
      },
      {
        "id": "p6-015",
        "blankNum": 3,
        "stem": "Select the best answer for blank [3]:",
        "choices": [
          "authorization",
          "authorize",
          "authoritative",
          "authorizer"
        ],
        "answer": 0,
        "explanation_vi": "Đứng sau tính từ 'written' cần một danh từ chỉ sự phê chuẩn bằng văn bản -> 'written authorization'.",
        "trap": "Bẫy từ loại: 'authorize' (động từ), 'authoritative' (tính từ), 'authorizer' (danh từ chỉ người phê duyệt)."
      },
      {
        "id": "p6-016",
        "blankNum": 4,
        "stem": "Select the best answer for blank [4]:",
        "choices": [
          "Reimbursement claims for unapproved bookings will be summarily denied.",
          "Flight attendants are required to wear identification badges at all times.",
          "The office air conditioning filters will be replaced this Saturday afternoon.",
          "Printed paper tickets are no longer valid for regional train transit."
        ],
        "answer": 0,
        "explanation_vi": "Câu chốt bổ sung hệ quả nếu không tuân thủ chính sách phê duyệt: Các yêu cầu bồi hoàn không được duyệt trước sẽ bị từ chối ('summarily denied').",
        "trap": "Bẫy câu nhắc về tiếp viên hàng không (flight attendants) hoặc bảo trì điều hòa (air conditioning)."
      }
    ]
  },
  {
    "id": "p6-set5",
    "part": 6,
    "level": 3,
    "topic": "Emergency Zero-Day Patch Advisory",
    "passage": "CRITICAL SECURITY BULLETIN\nISSUED BY: HexaTech Cyber Incident Response Team (CIRT)\nCLASSIFICATION: Urgent Priority\n\nA remote code execution vulnerability has been uncovered within our corporate VPN gateway client. Threat intelligence reports indicate that malicious actors are _______ [1] attempting to exploit unpatched systems worldwide. To mitigate this imminent threat, a mandatory security hotfix _______ [2] pushed to all enterprise endpoints tonight at 11:00 PM. Workstations that are powered off will receive the update _______ [3] upon reconnecting to the corporate intranet. _______ [4]. Please report any unexpected system freezes directly to the Cyber Hotline.",
    "questions": [
      {
        "id": "p6-017",
        "blankNum": 1,
        "stem": "Select the best answer for blank [1]:",
        "choices": [
          "actively",
          "active",
          "activity",
          "activate"
        ],
        "answer": 0,
        "explanation_vi": "Đứng giữa trợ động từ 'are' và phân từ 'attempting' cần một phó từ chỉ cách thức/tính liên tục -> 'actively' (đang ráo riết/tích cực cố gắng khai thác).",
        "trap": "Bẫy từ loại: Chọn tính từ 'active' hoặc danh từ 'activity'."
      },
      {
        "id": "p6-018",
        "blankNum": 2,
        "stem": "Select the best answer for blank [2]:",
        "choices": [
          "will be",
          "was",
          "has been",
          "is being"
        ],
        "answer": 0,
        "explanation_vi": "Mốc thời gian tương lai rõ ràng trong bài: 'tonight at 11:00 PM' -> Dùng tương lai đơn ở thể bị động: 'will be pushed'.",
        "trap": "Bẫy thì quá khứ: Nhầm chọn 'was' hoặc hiện tại hoàn thành 'has been'."
      },
      {
        "id": "p6-019",
        "blankNum": 3,
        "stem": "Select the best answer for blank [3]:",
        "choices": [
          "automatically",
          "automatic",
          "automation",
          "automating"
        ],
        "answer": 0,
        "explanation_vi": "Đứng trước cụm giới từ 'upon reconnecting' bổ nghĩa cho động từ 'receive' cần phó từ -> 'automatically' (một cách tự động).",
        "trap": "Bẫy từ loại: 'automatic' (tính từ) hoặc 'automation' (danh từ)."
      },
      {
        "id": "p6-020",
        "blankNum": 4,
        "stem": "Select the best answer for blank [4]:",
        "choices": [
          "Users may notice a momentary network disconnect during the installation process.",
          "Employees are entitled to thirty days of paid paternity leave each year.",
          "The office gym will remain closed for painting over the weekend.",
          "New office stationery supplies can be ordered from the supply catalog."
        ],
        "answer": 0,
        "explanation_vi": "Câu thông báo phù hợp nhất với quá trình cài đặt bản vá hệ thống: Người dùng có thể thấy ngắt mạng thoáng qua trong khi cài đặt ('momentary network disconnect').",
        "trap": "Bẫy các chủ đề nghỉ phép (paternity leave), phòng gym, văn phòng phẩm."
      }
    ]
  },
  {
    "id": "p6-set6",
    "part": 6,
    "level": 1,
    "topic": "Annual Healthcare & Benefit Enrollment",
    "passage": "MEMORANDUM\nTO: All Full-Time and Contract Employees\nFROM: Benefits Administration Office\nDATE: November 1\nSUBJECT: Open Enrollment Period for Next Year\n\nThe annual benefits open enrollment window begins on Monday, November 10, and will conclude on Friday, November 28. During this designated period, eligible staff members may _______ [1] their current medical, dental, and vision insurance policies. Any changes submitted during open enrollment will become _______ [2] on January 1 of the upcoming year. Those wishing to maintain their current benefit allocations do not need to take any action; their existing coverage will renew automatically. _______ [3]. _______ [4]. Please contact HR Extension 402 with any questions.",
    "questions": [
      {
        "id": "p6-021",
        "blankNum": 1,
        "stem": "Select the best answer for blank [1]:",
        "choices": [
          "modify",
          "modification",
          "modified",
          "modifying"
        ],
        "answer": 0,
        "explanation_vi": "Sau động từ khuyết thiếu 'may' cần một động từ nguyên thể không to -> 'modify' (chỉnh sửa, thay đổi gói bảo hiểm).",
        "trap": "Bẫy từ loại: Chọn danh từ 'modification' hoặc phân từ 'modified'."
      },
      {
        "id": "p6-022",
        "blankNum": 2,
        "stem": "Select the best answer for blank [2]:",
        "choices": [
          "effective",
          "effectively",
          "effect",
          "effectiveness"
        ],
        "answer": 0,
        "explanation_vi": "Cụm cố định: 'become effective on [Date]' có nghĩa là bắt đầu có hiệu lực từ ngày nào.",
        "trap": "Bẫy từ loại: Thường nhầm chọn trạng từ 'effectively' hoặc danh từ 'effect'."
      },
      {
        "id": "p6-023",
        "blankNum": 3,
        "stem": "Select the best answer for blank [3]:",
        "choices": [
          "However",
          "Therefore",
          "Similarly",
          "Namely"
        ],
        "answer": 0,
        "explanation_vi": "Liên từ chuyển tiếp chỉ tương phản 'However' (Tuy nhiên) đứng đầu câu để chuyển ý sang trường hợp ngoại lệ cho nhân viên có người phụ thuộc.",
        "trap": "Bẫy liên từ chỉ kết quả 'Therefore' hoặc so sánh 'Similarly'."
      },
      {
        "id": "p6-024",
        "blankNum": 4,
        "stem": "Select the best answer for blank [4]:",
        "choices": [
          "Employees adding dependents must provide valid birth or marriage certificates.",
          "All catering services for corporate receptions must be approved by security.",
          "The parking structure will be repaved during the upcoming fiscal quarter.",
          "Conference call credentials will expire every forty-eight hours."
        ],
        "answer": 0,
        "explanation_vi": "Tiếp nối ý 'However', câu điền vào nêu rõ thủ tục bổ sung người phụ thuộc: phải nộp giấy khai sinh hoặc giấy đăng ký kết hôn hợp lệ.",
        "trap": "Bẫy các chủ đề đỗ xe (parking), hội nghị từ xa (conference call), dịch vụ tiệc (catering)."
      }
    ]
  },
  {
    "id": "p6-set7",
    "part": 6,
    "level": 2,
    "topic": "GDPR & Privacy Compliance Audit",
    "passage": "To: Regional Database Administrators\nFrom: Data Governance and Legal Affairs\nDate: August 18\nSubject: Mandatory Customer Data Retention Review\n\nUnder international data protection regulations, HexaTech is legally required to delete obsolete customer telemetry records after twenty-four months of account inactivity. A recent automated compliance audit revealed that several archive databases _______ [1] retained records beyond this mandated timeframe. All database administrators must _______ [2] purge unlinked client records prior to August 31. _______ [3], the compliance task force will conduct random spot audits to verify system integrity across all clusters. _______ [4]. Ensuring customer privacy remains fundamental to our corporate reputation.",
    "questions": [
      {
        "id": "p6-025",
        "blankNum": 1,
        "stem": "Select the best answer for blank [1]:",
        "choices": [
          "have inadvertent",
          "have inadvertently",
          "has inadvertence",
          "was inadvertently"
        ],
        "answer": 1,
        "explanation_vi": "Chủ ngữ là số nhiều ('databases') đi với hiện tại hoàn thành và trạng từ bổ nghĩa: 'have inadvertently retained' (đã vô tình lưu trữ).",
        "trap": "Bẫy hòa hợp chủ vị: Chọn 'has' cho chủ ngữ số nhiều 'databases'."
      },
      {
        "id": "p6-026",
        "blankNum": 2,
        "stem": "Select the best answer for blank [2]:",
        "choices": [
          "manually",
          "manual",
          "manuals",
          "manuality"
        ],
        "answer": 0,
        "explanation_vi": "Đứng giữa 'must' và động từ chính 'purge' cần một trạng từ chỉ cách thức -> 'manually purge' (xóa sạch dữ liệu bằng tay/thủ công).",
        "trap": "Bẫy từ loại: Chọn tính từ 'manual'."
      },
      {
        "id": "p6-027",
        "blankNum": 3,
        "stem": "Select the best answer for blank [3]:",
        "choices": [
          "Subsequently",
          "Conversely",
          "Whereas",
          "Instead"
        ],
        "answer": 0,
        "explanation_vi": "Trạng từ thời gian 'Subsequently' (Sau đó/Tiếp theo đó) diễn tả chuỗi hành động: Sau khi xóa dữ liệu, tổ công tác sẽ tiến hành kiểm tra ngẫu nhiên.",
        "trap": "Bẫy trạng từ chỉ sự tương phản 'Conversely' hoặc 'Instead'."
      },
      {
        "id": "p6-028",
        "blankNum": 4,
        "stem": "Select the best answer for blank [4]:",
        "choices": [
          "Fines for noncompliance can reach up to four percent of global annual turnover.",
          "The corporate cafeteria will begin offering organic breakfast choices on Monday.",
          "All office desks should be cleared of personal items every evening.",
          "Flight reservations must be submitted three weeks before international travel."
        ],
        "answer": 0,
        "explanation_vi": "Câu văn củng cố tầm quan trọng của việc tuân thủ luật bảo vệ dữ liệu: Mức phạt vi phạm có thể lên đến 4% tổng doanh thu hàng năm.",
        "trap": "Bẫy các quy định nội bộ không liên quan như dọn bàn (cleared of personal items) hay đặt vé máy bay."
      }
    ]
  },
  {
    "id": "p6-set8",
    "part": 6,
    "level": 1,
    "topic": "Facilities Relocation Notice",
    "passage": "ANNOUNCEMENT TO ALL HEADQUARTERS STAFF\nFacilities Management Department\n\nPlease be advised that the corporate logistics division will commence relocating the customer call center to the North Tower this coming weekend. Staff members in Suites 300 through 350 are requested to pack their personal effects into the labeled crates provided _______ [1] Friday at 4:00 PM. High-value computer monitors and cryptographic key readers will be _______ [2] packed by certified technical movers. The North Tower facility features ergonomic workstations and upgraded fiber-optic network infrastructure. _______ [3]. _______ [4]. Thank you for your patience as we finalize this operational expansion.",
    "questions": [
      {
        "id": "p6-029",
        "blankNum": 1,
        "stem": "Select the best answer for blank [1]:",
        "choices": [
          "by",
          "at",
          "to",
          "from"
        ],
        "answer": 0,
        "explanation_vi": "Giới từ 'by' đi với mốc thời gian (Friday at 4:00 PM) chỉ hạn chót hoàn thành hành động đóng gói đồ đạc.",
        "trap": "Bẫy giới từ: 'at' chỉ đi riêng với giờ (at 4:00 PM), khi có ngày đi kèm phải dùng 'by Friday at 4:00 PM'."
      },
      {
        "id": "p6-030",
        "blankNum": 2,
        "stem": "Select the best answer for blank [2]:",
        "choices": [
          "securely",
          "security",
          "secure",
          "securing"
        ],
        "answer": 0,
        "explanation_vi": "Đứng giữa trợ động từ 'will be' và phân từ 'packed' cần một phó từ bổ nghĩa -> 'securely packed' (được đóng gói một cách an toàn, cẩn mật).",
        "trap": "Bẫy từ loại: Chọn danh từ 'security' hoặc tính từ 'secure'."
      },
      {
        "id": "p6-031",
        "blankNum": 3,
        "stem": "Select the best answer for blank [3]:",
        "choices": [
          "Additionally",
          "In contrast",
          "Nevertheless",
          "Despite"
        ],
        "answer": 0,
        "explanation_vi": "Liên từ 'Additionally' (Ngoài ra) dùng để liệt kê thêm tiện ích mới của văn phòng North Tower.",
        "trap": "Bẫy liên từ tương phản 'In contrast' hoặc 'Nevertheless'."
      },
      {
        "id": "p6-032",
        "blankNum": 4,
        "stem": "Select the best answer for blank [4]:",
        "choices": [
          "Staff members will enjoy access to dedicated quiet collaborative break rooms.",
          "All international shipping fees must be paid in foreign currencies.",
          "The company's stock price reached an unprecedented valuation yesterday.",
          "Employees must complete five hours of overtime during the relocation."
        ],
        "answer": 0,
        "explanation_vi": "Câu miêu tả tiếp nối tiện ích của văn phòng mới: Nhân viên sẽ có không gian phòng nghỉ ngơi yên tĩnh và hợp tác làm việc.",
        "trap": "Bẫy về thị trường chứng khoán (stock price) hoặc chi phí vận chuyển quốc tế."
      }
    ]
  },
  {
    "id": "p6-set9",
    "part": 6,
    "level": 2,
    "topic": "Cloud Migration Maintenance Downtime",
    "passage": "SERVICE ADVISORY\nTarget Audience: HexaTech Enterprise Software Clients\nRelease Date: May 2\nSubject: Scheduled Cloud Platform Maintenance Window\n\nIn our ongoing effort to enhance operational resilience and data throughput, HexaTech will perform an architecture migration on our primary analytics cloud. The maintenance window is scheduled to begin on Saturday, May 17, at 22:00 UTC and _______ [1] for approximately six hours. During this period, client dashboard access and automated data reporting will be _______ [2] unavailable. Our engineering team has implemented comprehensive safeguards to ensure that zero data loss occurs during the transfer. _______ [3]. _______ [4]. We apologize for any temporary inconvenience this planned enhancement may cause.",
    "questions": [
      {
        "id": "p6-033",
        "blankNum": 1,
        "stem": "Select the best answer for blank [1]:",
        "choices": [
          "last",
          "lasting",
          "lasted",
          "lasts"
        ],
        "answer": 0,
        "explanation_vi": "Cấu trúc song hành sau 'is scheduled to': 'to begin... and last...' -> Động từ nguyên mẫu 'last' (kéo dài trong khoảng 6 tiếng).",
        "trap": "Bẫy chia động từ: Nhầm sang V-ing 'lasting' hoặc số ít 'lasts'."
      },
      {
        "id": "p6-034",
        "blankNum": 2,
        "stem": "Select the best answer for blank [2]:",
        "choices": [
          "temporarily",
          "temporary",
          "temporariness",
          "temporal"
        ],
        "answer": 0,
        "explanation_vi": "Đứng trước tính từ 'unavailable' cần một phó từ chỉ thời gian -> 'temporarily unavailable' (tạm thời không khả dụng).",
        "trap": "Bẫy từ loại: Chọn tính từ 'temporary' đứng trước tính từ 'unavailable'."
      },
      {
        "id": "p6-035",
        "blankNum": 3,
        "stem": "Select the best answer for blank [3]:",
        "choices": [
          "Consequently",
          "Similarly",
          "Conversely",
          "Otherwise"
        ],
        "answer": 0,
        "explanation_vi": "Trạng từ kết quả 'Consequently' (Do đó/Vì vậy): Vì có các biện pháp bảo vệ toàn diện, hệ thống API sẽ tự động xử lý các truy vấn xếp hàng ngay sau khi kích hoạt.",
        "trap": "Bẫy liên từ trái nghĩa 'Conversely'."
      },
      {
        "id": "p6-036",
        "blankNum": 4,
        "stem": "Select the best answer for blank [4]:",
        "choices": [
          "All queued API transactions will resume processing automatically once service is restored.",
          "Corporate holiday party invitations will be delivered by courier next month.",
          "Staff members are requested to return all borrowed library books promptly.",
          "The physical office security turnstiles will be replaced with turnstiles."
        ],
        "answer": 0,
        "explanation_vi": "Câu kỹ thuật phù hợp với ngữ cảnh phục hồi dịch vụ đám mây: Mọi giao dịch API trong hàng đợi sẽ tự động chạy lại ngay khi dịch vụ được khôi phục.",
        "trap": "Bẫy các câu tiệc tùng (holiday party) hay trả sách thư viện."
      }
    ]
  },
  {
    "id": "p6-set10",
    "part": 6,
    "level": 3,
    "topic": "Supplier Contract Renewal & Terms Amendment",
    "passage": "Vanguard Microelectronics Ltd.\n742 Commerce Expressway, Suite 900\nOctober 22\n\nMr. Donald Sterling, Procurement Director\nHexaTech Innovations Corp.\n\nDear Mr. Sterling,\n\nWe are writing to confirm our mutual agreement regarding the extension of our semiconductor component supply agreement for another fiscal year. Under the newly negotiated terms, Vanguard will provide an eight percent volume discount on bulk orders, _______ [1] HexaTech meets minimum quarterly purchasing targets. We have also agreed to _______ [2] shipment lead times from fourteen business days to eight business days. Enclosed with this letter is the revised master service contract. _______ [3]. _______ [4]. We value our enduring corporate partnership and anticipate continued mutual growth.\n\nSincerely,\nBeatrice Vance, Vice President of Strategic Accounts",
    "questions": [
      {
        "id": "p6-037",
        "blankNum": 1,
        "stem": "Select the best answer for blank [1]:",
        "choices": [
          "provided that",
          "in order that",
          "as though",
          "even though"
        ],
        "answer": 0,
        "explanation_vi": "Cụm liên từ điều kiện 'provided that' (với điều kiện là / miễn là = 'if') -> Giảm giá 8% với điều kiện HexaTech đạt hạn mức mua hàng tối thiểu.",
        "trap": "Bẫy liên từ chỉ mục đích 'in order that' hoặc nhượng bộ 'even though'."
      },
      {
        "id": "p6-038",
        "blankNum": 2,
        "stem": "Select the best answer for blank [2]:",
        "choices": [
          "shorten",
          "shortening",
          "shortened",
          "shortness"
        ],
        "answer": 0,
        "explanation_vi": "Cấu trúc 'agree to + V(nguyên thể)' -> 'agreed to shorten shipment lead times' (đồng ý rút ngắn thời gian giao hàng).",
        "trap": "Bẫy danh từ 'shortness' hoặc phân từ 'shortened'."
      },
      {
        "id": "p6-039",
        "blankNum": 3,
        "stem": "Select the best answer for blank [3]:",
        "choices": [
          "Please review and execute both duplicate signature pages.",
          "The cafeteria will be closed for quarterly inspection.",
          "Conference attendees must register their vehicles in advance.",
          "All international currency transfers incur standard processing fees."
        ],
        "answer": 0,
        "explanation_vi": "Ý tiếp nối với 'Enclosed with this letter is the revised master service contract': Đề nghị đối tác xem xét và ký cả 2 bản hợp đồng kèm theo.",
        "trap": "Bẫy câu nhắc về căng tin, hội nghị hoặc phí ngân hàng."
      },
      {
        "id": "p6-040",
        "blankNum": 4,
        "stem": "Select the best answer for blank [4]:",
        "choices": [
          "Once signed, please return one countersigned copy via courier to our legal office.",
          "Our corporate headquarters will be repainted during the spring break.",
          "Weather conditions may delay regional air mail transit times.",
          "All employees must complete mandatory fire drill training."
        ],
        "answer": 0,
        "explanation_vi": "Hướng dẫn xử lý hợp đồng: Sau khi ký xong, vui lòng gửi trả lại một bản có chữ ký của cả hai bên qua đường chuyển phát nhanh.",
        "trap": "Bẫy thời tiết (weather) hoặc diễn tập cứu hỏa (fire drill)."
      }
    ]
  },
  {
    "id": "p7-set3",
    "part": 7,
    "level": 2,
    "topic": "Remote Work & BYOD Cybersecurity Policy",
    "passage": "HEXATECH POLICY BULLETIN: BRING YOUR OWN DEVICE (BYOD)\nEffective Date: January 15\nApplies to: All personnel connecting personal mobile devices to corporate networks\n\n1. Device Registration and Compliance\nPrior to accessing corporate e-mail, intranet databases, or Slack workspaces from personal smartphones, laptops, or tablets, employees must enroll the device in the HexaTech Mobile Device Management (MDM) portal. The MDM agent verifies that operating system patches are current and enforces a mandatory six-digit alphanumeric screen lock.\n\n2. Separation of Data and Encryption\nAll corporate correspondence, files, and proprietary client materials stored locally on enrolled devices are partitioned within an encrypted container. Corporate data cannot be copied to personal cloud storage services or unapproved messaging applications.\n\n3. Lost or Stolen Devices\nIn the event that an enrolled device is lost or stolen, the employee must contact the Security Operations Center (Ext. 555) within two hours. The security team reserves the authority to remotely erase corporate data from the device without affecting the employee's personal photographs, contacts, or private media files.",
    "questions": [
      {
        "id": "p7-009",
        "stem": "What is the primary purpose of the policy bulletin?",
        "choices": [
          "To outline security rules for personal devices used for work",
          "To announce the replacement of corporate laptop computers",
          "To describe how to apply for a company-subsidized smartphone",
          "To provide instructions for installing personal social media apps"
        ],
        "answer": 0,
        "explanation_vi": "Đoạn văn nêu rõ quy định bảo mật khi kết nối thiết bị cá nhân (BYOD) vào mạng công ty: 'outline security rules for personal devices used for work'.",
        "trap": "Bẫy từ 'subsidized smartphone' - chính sách chỉ quy định thiết bị cá nhân của nhân viên chứ không trợ cấp mua máy."
      },
      {
        "id": "p7-010",
        "stem": "What requirement must a personal device meet during enrollment?",
        "choices": [
          "It must enforce a six-digit alphanumeric screen lock.",
          "It must be manufactured within the last twelve months.",
          "It must have at least one hundred gigabytes of free storage.",
          "It must be equipped with physical biometric thumbprint sensors."
        ],
        "answer": 0,
        "explanation_vi": "Mục 1 nêu: 'enforces a mandatory six-digit alphanumeric screen lock' (khóa màn hình 6 ký tự gồm chữ và số).",
        "trap": "Bẫy các tiêu chí phần cứng không có trong văn bản như bộ nhớ 100GB hay năm sản xuất."
      },
      {
        "id": "p7-011",
        "stem": "What should employees do if their enrolled mobile phone is lost?",
        "choices": [
          "Notify security personnel within two hours",
          "File a formal claim with their personal insurance provider",
          "Submit an expedited purchase order for a replacement",
          "Change their passwords from a coworker's desktop terminal"
        ],
        "answer": 0,
        "explanation_vi": "Mục 3 ghi: 'employee must contact the Security Operations Center (Ext. 555) within two hours'.",
        "trap": "Bẫy các hành động khác như mua máy mới hoặc nộp bảo hiểm cá nhân."
      },
      {
        "id": "p7-012",
        "stem": "What happens during a remote data erasure?",
        "choices": [
          "Only corporate data is wiped from the device.",
          "All personal photos and private contacts are permanently deleted.",
          "The device's cellular contract is immediately terminated.",
          "The operating system is downgraded to factory default settings."
        ],
        "answer": 0,
        "explanation_vi": "Câu cuối mục 3 nêu rõ: 'remotely erase corporate data... without affecting personal photographs, contacts, or private media files' -> Chỉ xóa dữ liệu công ty.",
        "trap": "Bẫy hiểu nhầm: Nghĩ rằng xóa trắng cả dữ liệu cá nhân (personal photos)."
      }
    ]
  },
  {
    "id": "p7-set4",
    "part": 7,
    "level": 2,
    "topic": "Urgent Data Center Cooling Alert (Text Chain)",
    "passage": "SECURE CHAT LOG: SERVER INFRASTRUCTURE DISPATCH\nParticipants: Kenji Sato (Facilities Lead), Rachel Moore (Lead Systems Engineer), Carlos Gomez (Shift Supervisor)\nTime: 14:15 - 14:32\n\nKenji Sato [14:15]:\nRachel, Carlos, our environmental monitoring sensors in Server Room B just triggered an amber alert. The ambient rack temperature has risen from 21°C to 28°C in the last twenty minutes.\n\nRachel Moore [14:18]:\nI see the telemetry alert on my dashboard too. The main database cluster is beginning to throttle processing clock speeds to prevent thermal hardware degradation. Did the secondary chiller kick in?\n\nKenji Sato [14:21]:\nNegative. I just inspected the mechanical mezzanine. Chiller Unit 2 has a blown electrical fuse. I've already dispatched the emergency HVAC contractor, but transit time will take forty minutes.\n\nCarlos Gomez [14:24]:\nWe can't wait that long. Room B hosts our financial transactions database. Rachel, can we dynamically reroute half the live production queries to our West Coast disaster recovery center?\n\nRachel Moore [14:27]:\nYes, I'm initiating load shedding now. That will drop Server Room B's computational load by 60% and buy Kenji sufficient time.\n\nKenji Sato [14:32]:\nAppreciate it, Rachel. The HVAC technician just texted; he arrived at the loading dock security gate.",
    "questions": [
      {
        "id": "p7-013",
        "stem": "What is the emergency situation in Server Room B?",
        "choices": [
          "The cooling equipment malfunctioned and temperatures are climbing.",
          "A fire broke out in the electrical generator room.",
          "Water leaked from the ceiling onto primary database racks.",
          "Unauthorized intruders entered through the loading dock."
        ],
        "answer": 0,
        "explanation_vi": "Đoạn chat bắt đầu bằng cảnh báo nhiệt độ phòng máy chủ tăng vọt từ 21 lên 28 độ do hỏng điều hòa (Chiller Unit 2 blown fuse).",
        "trap": "Bẫy các tình huống tai nạn khác như rò nước (water leak) hay hỏa hoạn (fire)."
      },
      {
        "id": "p7-014",
        "stem": "Why does Carlos want immediate action taken?",
        "choices": [
          "Server Room B processes critical financial transactions.",
          "The emergency contractor refused to come to the facility.",
          "The building manager ordered an immediate evacuation.",
          "Server racks in Room B contain classified military contracts."
        ],
        "answer": 0,
        "explanation_vi": "Carlos giải thích: 'We can't wait that long. Room B hosts our financial transactions database'.",
        "trap": "Bẫy các lý do cực đoan không có trong bài như sơ tán tòa nhà hay hợp đồng quân sự."
      },
      {
        "id": "p7-015",
        "stem": "At 14:27, what does Rachel mean when she writes, 'buy Kenji sufficient time'?",
        "choices": [
          "It will prevent equipment damage while the repairs are made.",
          "She will purchase spare cooling equipment on the corporate card.",
          "Kenji will be granted extra paid vacation hours.",
          "She will reschedule a client presentation until tomorrow."
        ],
        "answer": 0,
        "explanation_vi": "Cụm 'buy time' có nghĩa là kéo dài thời gian, ngăn ngừa quá nhiệt gây hỏng hóc phần cứng trong khi chờ thợ sửa điều hòa đến.",
        "trap": "Bẫy nghĩa đen của từ 'buy' (mua sắm thiết bị bằng thẻ tín dụng)."
      },
      {
        "id": "p7-016",
        "stem": "Who has arrived at the facility by 14:32?",
        "choices": [
          "The heating and air conditioning repair specialist",
          "The regional financial accounts auditor",
          "The West Coast database administrator",
          "A courier delivering replacement server chips"
        ],
        "answer": 0,
        "explanation_vi": "Kenji xác nhận lúc 14:32: 'The HVAC technician just texted; he arrived at the loading dock security gate' (HVAC = heating, ventilation, air conditioning).",
        "trap": "Bẫy từ viết tắt HVAC không nhận diện được là kỹ thuật viên điều hòa/làm mát."
      }
    ]
  },
  {
    "id": "p7-set5",
    "part": 7,
    "level": 2,
    "topic": "Managed Threat Detection & Response Service Ad",
    "passage": "AEGIS CYBER DEFENSE SOLUTIONS\nNext-Generation Managed Detection & Response (MDR)\n\nIs your internal IT staff overwhelmed by hundreds of false-positive firewall notifications every day? Sophisticated cyber syndicates do not sleep, and neither do we.\n\nAegis MDR provides around-the-clock telemetry surveillance, automated threat hunting, and rapid incident isolation tailored specifically for medium and enterprise-scale organizations. Leveraging machine-learning heuristics and our global threat intelligence network, Aegis neutralizes ransomware and zero-day breaches in an average of 4.2 minutes—well below the industry standard of several hours.\n\nKey Package Advantages:\n• 24/7/365 SOC Monitoring: Dedicated certified analysts stationed across three continents.\n• Frictionless Deployment: Cloud-native endpoint sensors install in under fifteen minutes with zero server restarts required.\n• Breach Warranty Guarantee: Up to $2,000,000 in remediation coverage for qualified subscribers.\n\nSpecial Promotional Offer:\nSchedule a complimentary infrastructure vulnerability assessment before November 30 and receive thirty days of unrestricted premium surveillance at no charge. Visit www.aegisdefense.io/trial to register.",
    "questions": [
      {
        "id": "p7-017",
        "stem": "What service is Aegis Cyber Defense advertising?",
        "choices": [
          "A continuous managed threat detection and response platform",
          "Physical office building security camera installations",
          "Custom accounting software development for small businesses",
          "A high-speed satellite broadband internet service"
        ],
        "answer": 0,
        "explanation_vi": "Quảng cáo giới thiệu dịch vụ Next-Generation Managed Detection & Response (MDR) - giám sát và phản ứng sự cố an ninh mạng 24/7.",
        "trap": "Bẫy từ 'security camera' (an ninh vật lý) hoặc phần mềm kế toán (accounting software)."
      },
      {
        "id": "p7-018",
        "stem": "According to the advertisement, what is a feature of the endpoint sensors?",
        "choices": [
          "They can be deployed without restarting servers.",
          "They require specialized hardware installation in each office.",
          "They are completely free for enterprise companies indefinitely.",
          "They only function when connected to fiber-optic cables."
        ],
        "answer": 0,
        "explanation_vi": "Đặc điểm cảm biến endpoint: 'install in under fifteen minutes with zero server restarts required' (không cần khởi động lại máy chủ).",
        "trap": "Bẫy miễn phí vĩnh viễn (free indefinitely) thay vì chỉ khuyến mãi 30 ngày dùng thử."
      },
      {
        "id": "p7-019",
        "stem": "The word 'complimentary' in the final paragraph is closest in meaning to:",
        "choices": [
          "free",
          "flattering",
          "frequent",
          "complex"
        ],
        "answer": 0,
        "explanation_vi": "Trong ngữ cảnh thương mại và đề thi TOEIC, 'complimentary assessment/ticket/breakfast' đồng nghĩa với 'free' (miễn phí).",
        "trap": "Bẫy nghĩa khen ngợi của từ 'compliment' (flattering = tâng bốc, khen ngợi)."
      },
      {
        "id": "p7-020",
        "stem": "What must prospective customers do to qualify for the promotional offer?",
        "choices": [
          "Schedule a vulnerability assessment prior to November 30",
          "Purchase a five-year corporate software license",
          "Submit an existing insurance claim for review",
          "Attend an in-person workshop at the company headquarters"
        ],
        "answer": 0,
        "explanation_vi": "Đoạn cuối hướng dẫn: 'Schedule a complimentary infrastructure vulnerability assessment before November 30'.",
        "trap": "Bẫy mua hợp đồng 5 năm (five-year license) hoặc dự hội thảo trực tiếp (in-person workshop)."
      }
    ]
  },
  {
    "id": "p7-set6",
    "part": 7,
    "level": 1,
    "topic": "Executive Restructuring & CISO Appointment",
    "passage": "PRESS RELEASE: FOR IMMEDIATE RELEASE\nHEXATECH INNOVATIONS CORP. ANNOUNCES EXECUTIVE APPOINTMENT\nSan Francisco, CA — April 3\n\nHexaTech Innovations Corp. today announced that its Board of Directors has unanimously confirmed the appointment of Dr. Aris Thorne as Chief Information Security Officer (CISO), effective May 1. Dr. Thorne will oversee global cybersecurity architecture, threat intelligence, and data privacy governance across the company's twelve international development centers.\n\nDr. Thorne brings more than eighteen years of cybersecurity leadership experience to HexaTech. Most recently, she served as Senior Vice President of Risk Mitigation at Apex Financial Holdings, where she directed the architectural transition of the firm's core retail banking systems to a Zero-Trust framework. Prior to Apex, she conducted cryptographical research at the National Institute of Computational Sciences.\n\n\"As HexaTech expands its enterprise cloud software footprint, ensuring that our systems remain resilient against evolving state-sponsored cyber threats is paramount,\" said David Kim, Chief Executive Officer of HexaTech. \"Dr. Thorne's proven track record of securing mission-critical enterprise environments makes her the ideal leader for our cybersecurity posture.\"\n\nDr. Thorne holds a Ph.D. in Computer Science from the Massachusetts Institute of Technology and serves on the advisory board of the Open Cloud Security Foundation.",
    "questions": [
      {
        "id": "p7-021",
        "stem": "What is the main topic of the press release?",
        "choices": [
          "The hiring of a new Chief Information Security Officer",
          "The merger of two international financial institutions",
          "The discovery of a security flaw in cloud banking software",
          "The relocation of corporate headquarters to San Francisco"
        ],
        "answer": 0,
        "explanation_vi": "Thông cáo báo chí công bố việc bổ nhiệm Tiến sĩ Aris Thorne vào vị trí CISO (Chief Information Security Officer).",
        "trap": "Bẫy sáp nhập (merger) hoặc chuyển trụ sở (relocation)."
      },
      {
        "id": "p7-022",
        "stem": "What did Dr. Thorne accomplish in her previous role at Apex Financial?",
        "choices": [
          "She transitioned core banking systems to a Zero-Trust architecture.",
          "She negotiated the sale of fifteen branch retail banking locations.",
          "She wrote an introductory textbook on basic network programming.",
          "She opened twelve software development offices across Europe."
        ],
        "answer": 0,
        "explanation_vi": "Đoạn 2 nêu: 'directed the architectural transition of the firm's core retail banking systems to a Zero-Trust framework'.",
        "trap": "Bẫy con số 12 (đó là số trung tâm của HexaTech, không phải thành tích ở Apex)."
      },
      {
        "id": "p7-023",
        "stem": "When will Dr. Thorne officially begin her duties at HexaTech?",
        "choices": [
          "May 1",
          "April 3",
          "May 15",
          "June 30"
        ],
        "answer": 0,
        "explanation_vi": "Đoạn 1 nêu rõ mốc thời gian: 'effective May 1' (có hiệu lực từ ngày 1 tháng 5).",
        "trap": "Bẫy ngày phát hành thông cáo báo chí (April 3)."
      },
      {
        "id": "p7-024",
        "stem": "What is indicated about Dr. Thorne's academic background?",
        "choices": [
          "She earned a doctorate in Computer Science from MIT.",
          "She completed an MBA in International Finance in London.",
          "She taught undergraduate statistics at San Francisco University.",
          "She holds a degree in Corporate Commercial Law."
        ],
        "answer": 0,
        "explanation_vi": "Đoạn cuối nêu: 'Dr. Thorne holds a Ph.D. in Computer Science from the Massachusetts Institute of Technology (MIT)'.",
        "trap": "Bẫy bằng cấp kinh doanh (MBA) hoặc luật (Law)."
      }
    ]
  },
  {
    "id": "p7-set7",
    "part": 7,
    "level": 3,
    "topic": "Forensic Triage & Post-Incident Security Briefing",
    "passage": "HEXATECH SECURITY OPERATIONS CENTER: INCIDENT POST-MORTEM\nIncident Identifier: INC-2026-0882\nSeverity Level: Critical (Severity 1)\nDate of Incident: September 12\nInvestigator: Senior Threat Analyst Marcus Vance\n\nEXECUTIVE SUMMARY\nAt 03:14 UTC on September 12, automated network telemetry detected abnormal outbound data transfers from a staging development database. The Security Operations Center initiated immediate containment protocols at 03:22 UTC by severing the compromised virtual subnet from the primary network backbone. Total incident duration was 8 minutes from detection to complete isolation.\n\nROOT CAUSE ANALYSIS\nThe threat actor gained unauthorized initial access by utilizing compromised VPN credentials belonging to an external HVAC contractor. The contractor's workstation had contracted an infostealer trojan three days prior. Because the contractor's credentials were not protected by multi-factor authentication, the attacker authenticated successfully and moved laterally toward internal development databases.\n\nIMPACT EVALUATION\nForensic disk inspection confirmed that the attacker accessed synthetic test data containing simulated account numbers. Zero authentic client records or personally identifiable financial data were compromised. No ransomware payloads were executed, and system integrity remains fully verified.\n\nREMEDIATION MANDATES\n1. Discontinue all single-factor authentication for third-party vendors immediately.\n2. Require all vendor endpoints to install corporate endpoint security agents prior to connecting.\n3. Rotate all database administration encryption certificates by September 15.",
    "questions": [
      {
        "id": "p7-025",
        "stem": "How long did it take the security team to isolate the compromised subnet after detection?",
        "choices": [
          "8 minutes",
          "3 days",
          "3 hours",
          "12 minutes"
        ],
        "answer": 0,
        "explanation_vi": "Đoạn tóm tắt nêu rõ: 'Total incident duration was 8 minutes from detection to complete isolation' (từ 03:14 đến 03:22 UTC = 8 phút).",
        "trap": "Bẫy con số 3 ngày (thời gian máy của nhà thầu bị dính mã độc trước đó)."
      },
      {
        "id": "p7-026",
        "stem": "How did the intruder initially gain access to the network?",
        "choices": [
          "By using compromised login details from an external contractor",
          "By guessing the root password of the primary database server",
          "By physically breaking into the server room loading dock",
          "By exploiting a zero-day vulnerability in web browser software"
        ],
        "answer": 0,
        "explanation_vi": "Root Cause ghi nhận: 'utilizing compromised VPN credentials belonging to an external HVAC contractor'.",
        "trap": "Bẫy đột nhập vật lý (physically breaking in) hoặc khai thác lỗ hổng trình duyệt."
      },
      {
        "id": "p7-027",
        "stem": "What data did the threat actor actually access?",
        "choices": [
          "Simulated test data with fictitious numbers",
          "Actual client credit card numbers and passwords",
          "Executive salary and performance records",
          "Proprietary software source code repositories"
        ],
        "answer": 0,
        "explanation_vi": "Phần Impact nêu: 'accessed synthetic test data containing simulated account numbers. Zero authentic client records... were compromised'.",
        "trap": "Bẫy hiểu nhầm sang dữ liệu thật (actual client credit card numbers)."
      },
      {
        "id": "p7-028",
        "stem": "Which remedial action must be taken immediately?",
        "choices": [
          "Stop allowing single-factor authentication for outside vendors",
          "Reimburse customers for potential identity theft damages",
          "Replace all physical computer hardware in the staging room",
          "Fire the security operations center shift manager"
        ],
        "answer": 0,
        "explanation_vi": "Mục Remediation số 1: 'Discontinue all single-factor authentication for third-party vendors immediately'.",
        "trap": "Bẫy bồi thường khách hàng (reimburse customers) trong khi không có dữ liệu thật nào bị rò rỉ."
      }
    ]
  },
  {
    "id": "p7-set8",
    "part": 7,
    "level": 2,
    "topic": "Hardware Order Confirmation & Support Inquiry (Double Passage)",
    "passage": "[DOCUMENT 1: PURCHASE ORDER CONFIRMATION]\nVORTEX HARDWARE SUPPLIES LTD.\nInvoice #: VX-88402\nOrder Date: June 12\nCustomer: HexaTech Innovations Corp.\nShipping Address: 400 Silicon Parkway, Building B, Austin, TX\n\nItem # | Description | Qty | Unit Price | Total\n--------------------------------------------------------------\nVH-102 | Cat6a Shielded Ethernet Cable (50m) | 20 | $45.00 | $900.00\nVH-305 | 24-Port Gigabit Managed Network Switch | 2 | $350.00 | $700.00\nVH-810 | Dual-Frequency Wireless Access Point | 4 | $175.00 | $700.00\n--------------------------------------------------------------\nSubtotal: $2,300.00\nStandard Ground Shipping (3-5 business days): $65.00\nTotal Invoiced Amount: $2,365.00\nPayment Method: Corporate Account Balance (Paid in Full)\nEstimated Delivery Date: June 17\nNote: All electronic hardware components carry a 3-year manufacturer warranty.\n\n==============================================================\n\n[DOCUMENT 2: CUSTOMER SUPPORT INQUIRY]\nTo: support@vortexsupplies.com\nFrom: g.montoya@hexatech.com\nDate: June 18\nSubject: Invoice VX-88402 / Incomplete Delivery\n\nDear Customer Support Team,\n\nWe received shipment VX-88402 yesterday afternoon at our Austin facility. While the Ethernet cables and managed network switches were in perfect condition, the shipping carton was missing the wireless access points (Item VH-810).\n\nOur network deployment timeline requires these access points to configure the second-floor workstations before our new interns arrive next Monday. Could you please confirm if the access points were shipped under a separate tracking consignment, or if an expedited shipment can be dispatched today via overnight courier? Please contact me at Extension 204 or reply directly to this email.\n\nSincerely,\nGabriel Montoya, Infrastructure Procurement Coordinator\nHexaTech Innovations Corp.",
    "questions": [
      {
        "id": "p7-029",
        "stem": "What item was NOT included in the received delivery?",
        "choices": [
          "Dual-Frequency Wireless Access Points",
          "Shielded Ethernet Cables",
          "Gigabit Managed Network Switches",
          "Installation Screws and Brackets"
        ],
        "answer": 0,
        "explanation_vi": "Email thứ 2 nêu rõ: 'the shipping carton was missing the wireless access points (Item VH-810)'.",
        "trap": "Bẫy các sản phẩm đã nhận đầy đủ như cáp mạng (cables) hay switch mạng."
      },
      {
        "id": "p7-030",
        "stem": "How much did HexaTech pay in total for the order?",
        "choices": [
          "$2,365.00",
          "$2,300.00",
          "$900.00",
          "$700.00"
        ],
        "answer": 0,
        "explanation_vi": "Hóa đơn nêu: Subtotal $2,300.00 + phí vận chuyển $65.00 = Tổng thanh toán '$2,365.00'.",
        "trap": "Bẫy số tiền chưa cộng phí vận chuyển ($2,300.00)."
      },
      {
        "id": "p7-031",
        "stem": "Why does Mr. Montoya need the missing equipment urgently?",
        "choices": [
          "To configure workstations before new staff members arrive",
          "To replace damaged equipment after an office fire",
          "To demonstrate products at an upcoming trade show",
          "To return borrowed equipment to another department"
        ],
        "answer": 0,
        "explanation_vi": "Trong Document 2, ông Montoya viết: 'configure the second-floor workstations before our new interns arrive next Monday'.",
        "trap": "Bẫy mang đi triển lãm (trade show) hay cháy nổ (fire)."
      },
      {
        "id": "p7-032",
        "stem": "What request does Mr. Montoya make to Vortex Hardware?",
        "choices": [
          "To send the missing items by overnight delivery",
          "To cancel the order and provide a full refund",
          "To extend the product warranty by twelve months",
          "To update the billing address on the corporate invoice"
        ],
        "answer": 0,
        "explanation_vi": "Email nêu: 'if an expedited shipment can be dispatched today via overnight courier' (gửi hỏa tốc qua đêm).",
        "trap": "Bẫy hủy đơn hoàn tiền (cancel and refund) trong khi ông Montoya cần thiết bị gấp."
      }
    ]
  },
  {
    "id": "p7-set9",
    "part": 7,
    "level": 3,
    "topic": "Bug Bounty Vulnerability Disclosure & Patch Resolution (Double Passage)",
    "passage": "[DOCUMENT 1: EXTERNAL RESEARCHER DISCLOSURE REPORT]\nHEXATECH BUG BOUNTY PROGRAM\nReport Date: July 10\nResearcher Handle: @CyberSentinel_UK (Dr. Liam Patel)\nVulnerability Class: Stored Cross-Site Scripting (XSS) in User Profile Settings\nAssigned Severity: High (CVSS Score: 7.8)\n\nDescription:\nWhile evaluating the HexaTech Employee Dashboard portal (v1.4.2), I observed that input provided in the 'Student Name' and 'Target Score' fields is stored and subsequently rendered into victory modals without proper HTML entity escaping. An attacker could craft an SVG or script payload inside the student name field that executes malicious JavaScript within the administrative session when viewing score certificates.\n\nSteps to Reproduce:\n1. Open Settings modal and enter test payload: <img src=x onerror=alert(document.domain)>\n2. Save settings and complete a Boss battle challenge.\n3. Upon triggering the promotion modal, the unsanitized script executes.\nRecommended Fix: Implement strict string escaping (e.g. escapeHTML) and merge state through schema validation.\n\n==============================================================\n\n[DOCUMENT 2: SECURITY ADVISORY & BOUNTY AWARD NOTICE]\nTo: Dr. Liam Patel (@CyberSentinel_UK)\nFrom: HexaTech Product Security Incident Response Team (PSIRT)\nDate: July 16\nSubject: Resolution Confirmation: Bug Report #BB-2026-441\n\nDear Dr. Patel,\n\nOur engineering team has thoroughly reviewed your vulnerability disclosure regarding unescaped user profile inputs in Dashboard v1.4.2. We are pleased to confirm that your findings were verified and completely remediated in our v1.4.3 release deployed this morning.\n\nAs recommended in your report, all user string interpolations now utilize an escapeHTML() sanitization utility, and data imports are validated against DEFAULT_STATE schemas to eliminate code injection vectors.\n\nIn recognition of your responsible disclosure and clear reproduction steps, the HexaTech Bounty Committee has awarded you a bounty payment of $3,500 along with recognition on our Public Security Hall of Fame. The funds will be transferred to your designated account within five business days.\n\nSincerely,\nDirector of Application Security, HexaTech Innovations Corp.",
    "questions": [
      {
        "id": "p7-033",
        "stem": "What type of vulnerability was uncovered by Dr. Patel?",
        "choices": [
          "A stored cross-site scripting (XSS) vulnerability",
          "An unencrypted password transmission flaw",
          "A physical hardware bypass in security badges",
          "A denial-of-service weakness in web servers"
        ],
        "answer": 0,
        "explanation_vi": "Document 1 ghi rõ: 'Vulnerability Class: Stored Cross-Site Scripting (XSS) in User Profile Settings'.",
        "trap": "Bẫy các loại lỗ hổng khác như DoS hoặc rò mật khẩu."
      },
      {
        "id": "p7-034",
        "stem": "Where in the application was the vulnerability triggered?",
        "choices": [
          "In the settings input fields and victory certificates",
          "In the shopping cart checkout payment page",
          "In the audio synthesizer sound generation buffer",
          "In the external employee calendar synchronization module"
        ],
        "answer": 0,
        "explanation_vi": "Báo cáo nêu: 'Student Name' and 'Target Score' fields... rendered into victory modals without proper HTML entity escaping.",
        "trap": "Bẫy trang thanh toán (checkout page) hoặc âm thanh (audio buffer)."
      },
      {
        "id": "p7-035",
        "stem": "What fix did HexaTech implement in version 1.4.3?",
        "choices": [
          "They introduced an escapeHTML utility and state schema validation.",
          "They completely disabled user profiles and student names.",
          "They restricted dashboard access exclusively to office IP addresses.",
          "They required all students to purchase antivirus subscriptions."
        ],
        "answer": 0,
        "explanation_vi": "Document 2 xác nhận: 'user string interpolations now utilize an escapeHTML() sanitization utility, and data imports are validated against DEFAULT_STATE schemas'.",
        "trap": "Bẫy xóa bỏ hoàn toàn tên học viên (disabled student names) hoặc bắt mua phần mềm diệt virus."
      },
      {
        "id": "p7-036",
        "stem": "What reward did Dr. Patel receive from HexaTech?",
        "choices": [
          "A cash bounty of $3,500 and Hall of Fame recognition",
          "A complimentary one-year subscription to cloud software",
          "An offer of full-time employment as a security director",
          "A new high-performance laptop and travel voucher"
        ],
        "answer": 0,
        "explanation_vi": "Document 2 công bố: 'awarded you a bounty payment of $3,500 along with recognition on our Public Security Hall of Fame'.",
        "trap": "Bẫy mời làm việc chính thức (full-time employment offer) hoặc tặng máy tính xách tay (laptop)."
      }
    ]
  },
  {
    "id": "p7-set10",
    "part": 7,
    "level": 2,
    "topic": "Tech Symposium Agenda & Speaker Follow-up (Double Passage)",
    "passage": "[DOCUMENT 1: SYMPOSIUM PROGRAM GUIDE]\nINTERNATIONAL ENTERPRISE TECH SUMMIT\nGrand Metro Convention Center, Chicago, IL\nDay 2 Schedule: Thursday, October 16\n\n09:00 - 10:15 | Room A\nKeynote Address: Scaling Microservices in Multi-Cloud Infrastructures\nSpeaker: Dr. Kenneth Chen, Chief Architect at NovaScale Systems\n\n10:30 - 11:45 | Room C\nPanel Discussion: Modernizing Legacy Mainframes Without Downtime\nModerator: Sophia Al-Mansoor, VP of Systems Engineering, HexaTech\n\n12:00 - 13:30 | Grand Ballroom\nNetworking Luncheon & Technology Exhibition (Sponsored by CloudMatrix)\n\n13:45 - 15:00 | Room B\nInteractive Workshop: Defending Enterprise Endpoints Against AI-Driven Malware\nFacilitator: Marcus Vance, HexaTech Senior Threat Analyst\n*Note: Participants should bring laptops with Wi-Fi capability for hands-on malware reverse-engineering labs.\n\n15:15 - 16:30 | Room A\nClosing Executive Round Table: Regulatory Compliance Trends for 2027\n\n==============================================================\n\n[DOCUMENT 2: FOLLOW-UP CORRESPONDENCE]\nTo: attendees-workshopB@techsummit2026.org\nFrom: m.vance@hexatech.com\nDate: October 17\nSubject: Resources and Lab Slides from Yesterday's Endpoint Defense Workshop\n\nDear Workshop Participants,\n\nThank you for attending yesterday afternoon's session on combating AI-driven malware in Room B. Due to the high attendance and extensive live audience questions, we were unable to review the final three interactive case studies on heuristic anomaly detection.\n\nAs promised during the session, I have uploaded the complete presentation slides, the Python reverse-engineering lab scripts, and our curated indicator-of-compromise (IOC) dataset to our public GitHub repository at github.com/hexatech/endpoint-defense-labs.\n\nIf your organization is currently re-evaluating its endpoint protection architecture and would like to explore our open-source threat simulation tools, feel free to connect with me directly on LinkedIn or email our lab coordinators.\n\nBest regards,\nMarcus Vance\nSenior Threat Analyst, HexaTech Innovations Corp.",
    "questions": [
      {
        "id": "p7-037",
        "stem": "What was required of participants attending Mr. Vance's workshop?",
        "choices": [
          "Bringing a laptop computer with wireless capability",
          "Registering at least two weeks before the summit",
          "Paying a supplemental laboratory equipment fee",
          "Submitting proof of security clearance at the door"
        ],
        "answer": 0,
        "explanation_vi": "Ghi chú ở Document 1 nêu rõ: 'Participants should bring laptops with Wi-Fi capability for hands-on malware reverse-engineering labs'.",
        "trap": "Bẫy đóng thêm phí (supplemental fee) hoặc giấy phép an ninh (security clearance)."
      },
      {
        "id": "p7-038",
        "stem": "What happened during the 13:45 workshop in Room B?",
        "choices": [
          "Not all planned case studies were covered due to audience questions.",
          "The wireless internet connection in Room B failed completely.",
          "The facilitator arrived late due to airport transit delays.",
          "The keynote address ran forty-five minutes over its schedule."
        ],
        "answer": 0,
        "explanation_vi": "Email Document 2 giải thích: 'Due to the high attendance and extensive live audience questions, we were unable to review the final three interactive case studies'.",
        "trap": "Bẫy hỏng mạng Wi-Fi (wireless failed) hoặc diễn giả đến muộn (arrived late)."
      },
      {
        "id": "p7-039",
        "stem": "Where can attendees access the additional reverse-engineering materials?",
        "choices": [
          "On a public GitHub repository link",
          "By requesting a physical flash drive by mail",
          "In the symposium printed paper conference handbook",
          "Through a paid subscription database service"
        ],
        "answer": 0,
        "explanation_vi": "Document 2 viết: 'uploaded the complete presentation slides... to our public GitHub repository at github.com/hexatech/endpoint-defense-labs'.",
        "trap": "Bẫy gửi USB qua bưu điện (flash drive by mail) hoặc dịch vụ trả phí (paid subscription)."
      },
      {
        "id": "p7-040",
        "stem": "According to Document 1, who moderated the panel discussion on mainframes?",
        "choices": [
          "Sophia Al-Mansoor",
          "Dr. Kenneth Chen",
          "Marcus Vance",
          "Dr. Liam Patel"
        ],
        "answer": 0,
        "explanation_vi": "Lịch trình lúc 10:30 - 11:45 ghi rõ: 'Moderator: Sophia Al-Mansoor, VP of Systems Engineering, HexaTech'.",
        "trap": "Bẫy chọn các diễn giả khác trong ngày như Dr. Kenneth Chen hay Marcus Vance."
      }
    ]
  }
];
