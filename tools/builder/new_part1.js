/**
 * TOEIC PART 1: PHOTOGRAPHS (MÔ TẢ TRANH BẰNG ĐỒ HỌA SVG TỰ HÀNH)
 * 8 câu hỏi mô tả hình ảnh độc quyền chủ đề SOC, Phòng Máy Chủ, Ngân Hàng NovaBank
 * 100% nguyên bản, đồ họa SVG vector độc lập, tương thích Dark/Light theme, không phụ thuộc ảnh ngoài
 */

const part1Questions = [
  {
    id: "c1-p1-01",
    chapter: 1,
    part: 1,
    speaker: "ETS TOEIC Narrator",
    dialogue_en: "Look at the picture marked Number 1 in your test book. Listen to the four statements and select the one that best describes the picture.",
    dialogue_vi: "Quan sát bức tranh số 1. Lắng nghe 4 phương án mô tả và chọn câu miêu tả chính xác nhất hình ảnh bạn thấy.",
    situation_vi: "00:05 - Bàn làm việc trung tâm giám sát an ninh SOC NovaBank lúc nửa đêm.",
    imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="100%" height="auto" style="border-radius: 8px; background: #0f172a;">
      <defs>
        <linearGradient id="screenGrad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1e293b"/>
          <stop offset="100%" stop-color="#0f172a"/>
        </linearGradient>
        <linearGradient id="chartGrad1" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" stop-color="#06b6d4" stop-opacity="0.2"/>
          <stop offset="100%" stop-color="#06b6d4" stop-opacity="0.9"/>
        </linearGradient>
      </defs>
      <!-- Background Wall -->
      <rect x="0" y="0" width="500" height="280" fill="#0b1120"/>
      <!-- Desk Surface -->
      <polygon points="20,240 480,240 500,280 0,280" fill="#1e293b"/>
      <line x1="0" y1="240" x2="500" y2="240" stroke="#334155" stroke-width="2"/>

      <!-- Central Large Monitor -->
      <rect x="160" y="50" width="180" height="110" rx="4" fill="url(#screenGrad1)" stroke="#475569" stroke-width="3"/>
      <rect x="240" y="160" width="20" height="35" fill="#334155"/>
      <polygon points="220,195 280,195 290,205 210,205" fill="#475569"/>
      <!-- SIEM Telemetry Wave on Center Monitor -->
      <path d="M 170 120 Q 190 80, 210 110 T 250 90 T 290 125 T 330 85" fill="none" stroke="#10b981" stroke-width="2.5"/>
      <circle cx="250" cy="90" r="3" fill="#ef4444"/>
      <rect x="170" y="60" width="45" height="12" rx="2" fill="#0284c7" opacity="0.8"/>
      <text x="173" y="69" fill="#ffffff" font-size="7" font-family="monospace" font-weight="bold">SIEM:LIVE</text>
      <!-- Telemetry Bars -->
      <rect x="175" y="135" width="8" height="15" fill="#06b6d4"/>
      <rect x="187" y="130" width="8" height="20" fill="#06b6d4"/>
      <rect x="199" y="125" width="8" height="25" fill="#06b6d4"/>
      <rect x="211" y="120" width="8" height="30" fill="#38bdf8"/>

      <!-- Left Angled Monitor -->
      <polygon points="40,70 145,85 145,185 40,175" fill="#1e293b" stroke="#475569" stroke-width="2.5"/>
      <rect x="85" y="180" width="15" height="30" fill="#334155"/>
      <ellipse cx="92" cy="210" rx="25" ry="6" fill="#475569"/>
      <line x1="55" y1="110" x2="135" y2="120" stroke="#38bdf8" stroke-width="2"/>
      <line x1="55" y1="130" x2="125" y2="140" stroke="#38bdf8" stroke-width="2"/>
      <line x1="55" y1="150" x2="130" y2="160" stroke="#f59e0b" stroke-width="2"/>

      <!-- Right Angled Monitor -->
      <polygon points="355,85 460,70 460,175 355,185" fill="#1e293b" stroke="#475569" stroke-width="2.5"/>
      <rect x="400" y="180" width="15" height="30" fill="#334155"/>
      <ellipse cx="407" cy="210" rx="25" ry="6" fill="#475569"/>
      <circle cx="410" cy="125" r="22" fill="none" stroke="#ef4444" stroke-width="2" stroke-dasharray="4 2"/>
      <line x1="370" y1="155" x2="445" y2="145" stroke="#10b981" stroke-width="2"/>

      <!-- Keyboard & Mouse -->
      <polygon points="190,245 310,245 325,270 175,270" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>
      <ellipse cx="360" cy="255" rx="10" ry="14" fill="#0f172a" stroke="#334155" stroke-width="1.5"/>

      <!-- Coffee Mug & Pen -->
      <rect x="120" y="242" width="16" height="20" rx="3" fill="#f59e0b"/>
      <path d="M 136 247 Q 144 252, 136 258" fill="none" stroke="#f59e0b" stroke-width="2"/>
      <line x1="100" y1="260" x2="115" y2="248" stroke="#38bdf8" stroke-width="2"/>

      <!-- Engineer Silhouette sitting in chair -->
      <path d="M 220 280 Q 250 215, 280 280 Z" fill="#0f172a" opacity="0.85"/>
      <circle cx="250" cy="215" r="16" fill="#0f172a" opacity="0.85"/>
      <!-- Headset on silhouette -->
      <path d="M 235 212 A 15 15 0 0 1 265 212" fill="none" stroke="#38bdf8" stroke-width="2.5"/>
      <circle cx="234" cy="215" r="4" fill="#38bdf8"/>
    </svg>`,
    stem: "Look at the photograph and select the statement that best describes what you see.",
    audioText: "(A) An analyst is monitoring active displays in a control room. (B) The computer monitors have all been turned off. (C) A technician is replacing the keyboard on the desk. (D) Several employees are exiting the conference room.",
    choices: [
      "An analyst is monitoring active displays in a control room.",
      "The computer monitors have all been turned off.",
      "A technician is replacing the keyboard on the desk.",
      "Several employees are exiting the conference room."
    ],
    answer: 0,
    explanation_vi: "Bức tranh thể hiện rõ một chuyên viên an ninh đang ngồi quan sát các màn hình hiển thị biểu đồ và dữ liệu giám sát trong phòng điều khiển SOC -> Câu (A) miêu tả hoàn toàn chính xác.",
    trap: "Câu (B) sai vì các màn hình đều đang bật sáng; Câu (C) bẫy hành động 'is replacing' (không có ai đang thay bàn phím); Câu (D) bẫy từ vựng 'exiting conference room' hoàn toàn không xuất hiện trong hình.",
    examTip: "Bẫy hành động thì hiện tại tiếp diễn: Luôn quan sát xem chủ thể có thực sự đang thực hiện động tác đó hay không (monitoring vs replacing).",
    tags: {
      part: "Part 1",
      category: "Photographs",
      topic: "Monitoring",
      difficulty: "Easy"
    },
    vocab: [
      { word: "monitor", ipa: "/ˈmɒn.ɪ.tər/", pos: "v", meaning: "giám sát, theo dõi" },
      { word: "display", ipa: "/dɪˈspleɪ/", pos: "n", meaning: "màn hình hiển thị" }
    ]
  },
  {
    id: "c1-p1-02",
    chapter: 1,
    part: 1,
    speaker: "ETS TOEIC Narrator",
    dialogue_en: "Look at the picture marked Number 2 in your test book. Listen to the four statements and select the one that best describes the picture.",
    dialogue_vi: "Quan sát bức tranh số 2. Lắng nghe 4 phương án và chọn câu miêu tả đúng nhất vị trí và trạng thái thiết bị phòng máy chủ.",
    situation_vi: "00:45 - Khu vực tủ rack máy chủ trung tâm dữ liệu Core Banking NovaBank.",
    imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="100%" height="auto" style="border-radius: 8px; background: #0b1329;">
      <!-- Grid floor perspective -->
      <polygon points="50,280 450,280 380,180 120,180" fill="#1e293b" opacity="0.6"/>
      <line x1="120" y1="180" x2="50" y2="280" stroke="#334155" stroke-width="1.5"/>
      <line x1="380" y1="180" x2="450" y2="280" stroke="#334155" stroke-width="1.5"/>
      <line x1="200" y1="180" x2="170" y2="280" stroke="#334155" stroke-dasharray="4 4"/>
      <line x1="300" y1="180" x2="330" y2="280" stroke="#334155" stroke-dasharray="4 4"/>

      <!-- Left Server Cabinet -->
      <rect x="70" y="30" width="100" height="210" rx="4" fill="#0f172a" stroke="#475569" stroke-width="2.5"/>
      <!-- Server Blades -->
      <rect x="80" y="45" width="80" height="18" fill="#1e293b" stroke="#334155"/>
      <circle cx="90" cy="54" r="2.5" fill="#10b981"/>
      <circle cx="98" cy="54" r="2.5" fill="#10b981"/>
      <rect x="80" y="70" width="80" height="18" fill="#1e293b" stroke="#334155"/>
      <circle cx="90" cy="79" r="2.5" fill="#10b981"/>
      <circle cx="98" cy="79" r="2.5" fill="#f59e0b"/>
      <rect x="80" y="95" width="80" height="18" fill="#1e293b" stroke="#334155"/>
      <circle cx="90" cy="104" r="2.5" fill="#10b981"/>
      <circle cx="98" cy="104" r="2.5" fill="#10b981"/>
      <rect x="80" y="120" width="80" height="18" fill="#1e293b" stroke="#334155"/>
      <circle cx="90" cy="129" r="2.5" fill="#10b981"/>
      <circle cx="98" cy="129" r="2.5" fill="#ef4444"/>
      <rect x="80" y="145" width="80" height="35" fill="#1e293b" stroke="#334155"/>
      <!-- Cable bundles on side -->
      <path d="M 165 50 Q 185 100, 165 170" fill="none" stroke="#0284c7" stroke-width="4"/>
      <path d="M 168 60 Q 190 120, 168 190" fill="none" stroke="#38bdf8" stroke-width="3"/>

      <!-- Right Server Cabinet -->
      <rect x="330" y="30" width="100" height="210" rx="4" fill="#0f172a" stroke="#475569" stroke-width="2.5"/>
      <rect x="340" y="45" width="80" height="18" fill="#1e293b" stroke="#334155"/>
      <circle cx="350" cy="54" r="2.5" fill="#10b981"/>
      <circle cx="358" cy="54" r="2.5" fill="#10b981"/>
      <rect x="340" y="70" width="80" height="18" fill="#1e293b" stroke="#334155"/>
      <circle cx="350" cy="79" r="2.5" fill="#10b981"/>
      <rect x="340" y="95" width="80" height="18" fill="#1e293b" stroke="#334155"/>
      <circle cx="350" cy="104" r="2.5" fill="#10b981"/>
      <circle cx="358" cy="104" r="2.5" fill="#10b981"/>
      <!-- Ventilation Grilles -->
      <line x1="350" y1="130" x2="410" y2="130" stroke="#475569" stroke-width="1.5"/>
      <line x1="350" y1="140" x2="410" y2="140" stroke="#475569" stroke-width="1.5"/>
      <line x1="350" y1="150" x2="410" y2="150" stroke="#475569" stroke-width="1.5"/>

      <!-- Technician standing in corridor holding diagnostic tablet -->
      <rect x="235" y="110" width="30" height="60" rx="4" fill="#1e3a8a"/>
      <circle cx="250" cy="95" r="12" fill="#f8fafc"/>
      <line x1="240" y1="170" x2="240" y2="240" stroke="#0f172a" stroke-width="9"/>
      <line x1="260" y1="170" x2="260" y2="240" stroke="#0f172a" stroke-width="9"/>
      <!-- Tablet glowing blue in hands -->
      <rect x="238" y="130" width="24" height="16" rx="2" fill="#38bdf8" stroke="#ffffff" stroke-width="1"/>
      <!-- Identification Badge on lanyard -->
      <rect x="247" y="118" width="6" height="8" rx="1" fill="#f59e0b"/>
    </svg>`,
    stem: "Look at the photograph and select the statement that best describes what you see.",
    audioText: "(A) Server racks are being disassembled on the floor. (B) A technician is inspecting equipment in a server room. (C) The data center is completely vacant. (D) Heavy boxes are stacked in front of the doorway.",
    choices: [
      "Server racks are being disassembled on the floor.",
      "A technician is inspecting equipment in a server room.",
      "The data center is completely vacant.",
      "Heavy boxes are stacked in front of the doorway."
    ],
    answer: 1,
    explanation_vi: "Hình vẽ thể hiện rõ một kỹ thuật viên cầm máy tính bảng chẩn đoán đang đứng kiểm tra các tủ máy chủ trong phòng trung tâm dữ liệu -> Câu (B) miêu tả hoàn toàn chính xác.",
    trap: "Câu (A) bẫy 'being disassembled' (tháo rời); Câu (C) bẫy 'completely vacant' (hoàn toàn vắng người trong khi có kỹ thuật viên đứng đó); Câu (D) không có thùng hàng nào.",
    examTip: "Cảnh giác với thì tiếp diễn bị động 'being + V3' trong Part 1: Cụm từ 'are being disassembled' chỉ đúng khi có người đang tháo các thanh tủ.",
    tags: {
      part: "Part 1",
      category: "Photographs",
      topic: "Server Room",
      difficulty: "Medium"
    },
    vocab: [
      { word: "inspect", ipa: "/ɪnˈspekt/", pos: "v", meaning: "thanh tra, kiểm tra kỹ lưỡng" },
      { word: "rack", ipa: "/ræk/", pos: "n", meaning: "giá đỡ, tủ chứa máy chủ" }
    ]
  },
  {
    id: "c2-p1-01",
    chapter: 2,
    part: 1,
    speaker: "ETS TOEIC Narrator",
    dialogue_en: "Look at the picture marked Number 3 in your test book. Listen to the four statements and select the one that best describes the picture.",
    dialogue_vi: "Quan sát bức tranh số 3. Lắng nghe 4 phương án và chọn câu miêu tả đúng nhất các thiết bị trong phòng thí nghiệm điều tra số.",
    situation_vi: "01:15 - Bàn phân tích chứng cứ phần cứng độc hại của điều tra viên Sarah Lin.",
    imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="100%" height="auto" style="border-radius: 8px; background: #0f172a;">
      <!-- Lab Workbench Surface -->
      <rect x="0" y="0" width="500" height="280" fill="#0b1120"/>
      <polygon points="30,190 470,190 500,280 0,280" fill="#334155"/>
      <rect x="0" y="190" width="500" height="6" fill="#64748b"/>

      <!-- Magnifying Lamp with Circular Ring Light -->
      <path d="M 60 190 L 75 110 L 120 80" fill="none" stroke="#94a3b8" stroke-width="5"/>
      <ellipse cx="135" cy="75" rx="20" ry="14" fill="#0f172a" stroke="#cbd5e1" stroke-width="3"/>
      <ellipse cx="135" cy="75" rx="12" ry="8" fill="#38bdf8" opacity="0.4"/>

      <!-- Diagnostic Laptop displaying memory analysis -->
      <polygon points="170,165 290,165 305,215 155,215" fill="#1e293b" stroke="#64748b"/>
      <rect x="180" y="95" width="100" height="70" rx="3" fill="#0284c7" stroke="#38bdf8" stroke-width="2"/>
      <rect x="185" y="105" width="90" height="8" rx="2" fill="#0f172a"/>
      <text x="188" y="112" fill="#22c55e" font-size="6" font-family="monospace">VOLATILITY.DUMP: OK</text>
      <line x1="188" y1="125" x2="260" y2="125" stroke="#f8fafc" stroke-width="1.5"/>
      <line x1="188" y1="135" x2="245" y2="135" stroke="#f8fafc" stroke-width="1.5"/>

      <!-- Detached Hard Drive and Circuit Boards -->
      <rect x="330" y="210" width="55" height="40" rx="4" fill="#64748b" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="355" cy="230" r="12" fill="#475569"/>
      <circle cx="355" cy="230" r="4" fill="#cbd5e1"/>
      <rect x="405" y="215" width="45" height="35" rx="2" fill="#15803d" stroke="#22c55e" stroke-width="1.5"/>
      <circle cx="415" cy="225" r="2" fill="#facc15"/>
      <circle cx="435" cy="235" r="2" fill="#facc15"/>

      <!-- Antistatic Grounding Wire -->
      <path d="M 450 230 Q 480 250, 460 270" fill="none" stroke="#eab308" stroke-width="2.5"/>

      <!-- Tool Holder on Wall -->
      <rect x="360" y="40" width="100" height="25" rx="3" fill="#1e293b" stroke="#475569"/>
      <line x1="380" y1="45" x2="380" y2="60" stroke="#f8fafc" stroke-width="2"/>
      <line x1="410" y1="45" x2="410" y2="60" stroke="#f8fafc" stroke-width="2"/>
      <line x1="440" y1="45" x2="440" y2="60" stroke="#f8fafc" stroke-width="2"/>
    </svg>`,
    stem: "Look at the photograph and select the statement that best describes what you see.",
    audioText: "(A) Diagnostic tools and computer hardware are set on a laboratory counter. (B) A technician is soldering a wire onto a motherboard. (C) All the equipment has been packed into cardboard boxes. (D) A customer is filling out an equipment repair form.",
    choices: [
      "Diagnostic tools and computer hardware are set on a laboratory counter.",
      "A technician is soldering a wire onto a motherboard.",
      "All the equipment has been packed into cardboard boxes.",
      "A customer is filling out an equipment repair form."
    ],
    answer: 0,
    explanation_vi: "Bức tranh chụp mặt bàn phòng lab điều tra mã độc với các thiết bị chẩn đoán (máy tính phân tích dump bộ nhớ, kính lúp vòng LED, ổ đĩa tháo rời, bảng mạch) được sắp đặt trên bàn -> Câu (A) miêu tả hoàn toàn khách quan và chính xác.",
    trap: "Câu (B) bẫy hành động 'is soldering' (không có người cầm mỏ hàn); Câu (C) bẫy từ 'packed into boxes'; Câu (D) bẫy đối tượng 'customer'.",
    examTip: "Với tranh chỉ có đồ vật (không có người), đáp án chứa động từ hành động của người (soldering, filling out) gần như luôn là bẫy sai.",
    tags: {
      part: "Part 1",
      category: "Photographs",
      topic: "Forensics Lab",
      difficulty: "Medium"
    },
    vocab: [
      { word: "diagnostic", ipa: "/ˌdaɪ.əɡˈnɒs.tɪk/", pos: "adj", meaning: "thuộc về chẩn đoán" },
      { word: "counter", ipa: "/ˈkaʊn.tər/", pos: "n", meaning: "quầy, mặt bàn kỹ thuật" }
    ]
  },
  {
    id: "c2-p1-02",
    chapter: 2,
    part: 1,
    speaker: "ETS TOEIC Narrator",
    dialogue_en: "Look at the picture marked Number 4 in your test book. Listen to the four statements and select the one that best describes the picture.",
    dialogue_vi: "Quan sát bức tranh số 4. Lắng nghe 4 phương án và chọn câu miêu tả đúng nhất khu vực quầy giao dịch ngân hàng NovaBank.",
    situation_vi: "02:00 - Chi nhánh ngân hàng NovaBank với vách kính an toàn và máy ATM.",
    imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="100%" height="auto" style="border-radius: 8px; background: #0f172a;">
      <!-- Lobby Floor -->
      <polygon points="0,210 500,210 500,280 0,280" fill="#1e293b"/>
      <line x1="0" y1="210" x2="500" y2="210" stroke="#475569" stroke-width="2"/>

      <!-- Teller Counter with Glass Partitions -->
      <rect x="40" y="140" width="280" height="70" fill="#0f172a" stroke="#334155" stroke-width="2"/>
      <!-- Glass Partition Panes -->
      <rect x="50" y="50" width="80" height="90" rx="3" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="1.5"/>
      <circle cx="90" cy="115" r="5" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
      <rect x="145" y="50" width="80" height="90" rx="3" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="1.5"/>
      <circle cx="185" cy="115" r="5" fill="none" stroke="#38bdf8" stroke-width="1.5"/>
      <rect x="240" y="50" width="75" height="90" rx="3" fill="#38bdf8" fill-opacity="0.15" stroke="#38bdf8" stroke-width="1.5"/>
      <!-- Counter document trays -->
      <rect x="70" y="135" width="40" height="6" fill="#cbd5e1"/>
      <rect x="165" y="135" width="40" height="6" fill="#cbd5e1"/>

      <!-- ATM Terminal on the right -->
      <rect x="360" y="60" width="90" height="150" rx="4" fill="#0284c7" stroke="#38bdf8" stroke-width="2.5"/>
      <rect x="375" y="75" width="60" height="40" rx="2" fill="#0f172a" stroke="#94a3b8"/>
      <text x="385" y="98" fill="#38bdf8" font-size="8" font-family="sans-serif" font-weight="bold">NovaATM</text>
      <!-- Keypad & Card slot -->
      <rect x="380" y="125" width="25" height="18" fill="#334155"/>
      <rect x="415" y="128" width="20" height="4" fill="#22c55e"/>

      <!-- Queue Control Stanchions with Blue Belts -->
      <rect x="100" y="200" width="6" height="55" fill="#94a3b8"/>
      <circle cx="103" cy="200" r="5" fill="#cbd5e1"/>
      <ellipse cx="103" cy="255" rx="12" ry="4" fill="#64748b"/>
      <rect x="230" y="200" width="6" height="55" fill="#94a3b8"/>
      <circle cx="233" cy="200" r="5" fill="#cbd5e1"/>
      <ellipse cx="233" cy="255" rx="12" ry="4" fill="#64748b"/>
      <!-- Connecting Retractable Belt -->
      <path d="M 103 208 Q 168 220, 233 208" fill="none" stroke="#2563eb" stroke-width="3"/>
    </svg>`,
    stem: "Look at the photograph and select the statement that best describes what you see.",
    audioText: "(A) Protective glass partitions have been installed on the service counter. (B) A teller is handing a bank draft to a customer. (C) Cash is being dispensed from an automated teller machine. (D) The service line is crowded with waiting patrons.",
    choices: [
      "Protective glass partitions have been installed on the service counter.",
      "A teller is handing a bank draft to a customer.",
      "Cash is being dispensed from an automated teller machine.",
      "The service line is crowded with waiting patrons."
    ],
    answer: 0,
    explanation_vi: "Hình ảnh cho thấy các tấm vách kính bảo vệ trong suốt (protective glass partitions) được lắp đặt trên quầy giao dịch dịch vụ khách hàng -> Câu (A) hoàn toàn chính xác.",
    trap: "Câu (B) bẫy hành động người giao dịch viên (không có người); Câu (C) bẫy tiếp diễn bị động 'is being dispensed'; Câu (D) bẫy 'crowded with patrons' trong khi sảnh đang trống.",
    examTip: "Cụm 'have been installed' (thể hoàn thành chỉ trạng thái tĩnh của đồ vật) thường là đáp án đúng trong các bức ảnh chụp không gian nội thất văn phòng.",
    tags: {
      part: "Part 1",
      category: "Photographs",
      topic: "Banking Hall",
      difficulty: "Easy"
    },
    vocab: [
      { word: "partition", ipa: "/pɑːˈtɪʃ.ən/", pos: "n", meaning: "vách ngăn phân chia không gian" },
      { word: "stanchion", ipa: "/ˈstɑːn.ʃən/", pos: "n", meaning: "cọc phân luồng xếp hàng" }
    ]
  },
  {
    id: "c3-p1-01",
    chapter: 3,
    part: 1,
    speaker: "ETS TOEIC Narrator",
    dialogue_en: "Look at the picture marked Number 5 in your test book. Listen to the four statements and select the one that best describes the picture.",
    dialogue_vi: "Quan sát bức tranh số 5. Lắng nghe 4 phương án và chọn câu miêu tả đúng nhất cổng kiểm soát an ninh sinh trắc học.",
    situation_vi: "02:30 - Lối vào trụ sở ngân hàng với cổng xoay kiểm soát thẻ từ và vân tay.",
    imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="100%" height="auto" style="border-radius: 8px; background: #0b1329;">
      <!-- Polished Granite Floor with Reflection -->
      <rect x="0" y="0" width="500" height="280" fill="#0b1120"/>
      <polygon points="20,180 480,180 500,280 0,280" fill="#1e293b"/>
      <line x1="0" y1="180" x2="500" y2="180" stroke="#334155" stroke-width="1.5"/>

      <!-- Turnstile Lane 1 (Left Pedestal) -->
      <rect x="90" y="90" width="40" height="120" rx="6" fill="#334155" stroke="#64748b" stroke-width="2"/>
      <rect x="100" y="105" width="20" height="15" rx="3" fill="#0f172a"/>
      <circle cx="110" cy="112" r="3.5" fill="#22c55e"/>

      <!-- Glass Flap Barrier 1 -->
      <polygon points="130,120 185,95 185,170 130,175" fill="#38bdf8" fill-opacity="0.3" stroke="#38bdf8" stroke-width="2"/>

      <!-- Turnstile Lane Center Pedestal -->
      <rect x="190" y="90" width="45" height="120" rx="6" fill="#334155" stroke="#64748b" stroke-width="2"/>
      <!-- RFID Card Reader glowing green -->
      <rect x="200" y="105" width="25" height="18" rx="3" fill="#0f172a" stroke="#22c55e" stroke-width="1.5"/>
      <path d="M 206 114 L 210 118 L 219 109" fill="none" stroke="#22c55e" stroke-width="2"/>

      <!-- Glass Flap Barrier 2 -->
      <polygon points="235,120 290,95 290,170 235,175" fill="#38bdf8" fill-opacity="0.3" stroke="#38bdf8" stroke-width="2"/>

      <!-- Turnstile Lane 3 (Right Pedestal) -->
      <rect x="295" y="90" width="40" height="120" rx="6" fill="#334155" stroke="#64748b" stroke-width="2"/>
      <rect x="305" y="105" width="20" height="15" rx="3" fill="#0f172a"/>
      <circle cx="315" cy="112" r="3.5" fill="#22c55e"/>

      <!-- Overhead Security Dome Camera on ceiling bracket -->
      <rect x="205" y="0" width="15" height="25" fill="#64748b"/>
      <path d="M 200 25 A 12 12 0 0 0 225 25 Z" fill="#0f172a" stroke="#94a3b8" stroke-width="1.5"/>
      <circle cx="212" cy="28" r="2" fill="#ef4444"/>

      <!-- NovaBank Wall Logo in background -->
      <rect x="380" y="30" width="90" height="50" rx="4" fill="#0f172a" stroke="#334155"/>
      <text x="390" y="58" fill="#38bdf8" font-size="11" font-family="sans-serif" font-weight="bold">NovaBank</text>
      <text x="395" y="70" fill="#94a3b8" font-size="7" font-family="sans-serif">SECURITY ACCESS</text>
    </svg>`,
    stem: "Look at the photograph and select the statement that best describes what you see.",
    audioText: "(A) Turnstiles with electronic card readers are positioned at an entrance. (B) Security guards are searching bags at a checkpoint. (C) The glass barriers have been pushed onto the floor. (D) Employees are assembling a reception desk in the lobby.",
    choices: [
      "Turnstiles with electronic card readers are positioned at an entrance.",
      "Security guards are searching bags at a checkpoint.",
      "The glass barriers have been pushed onto the floor.",
      "Employees are assembling a reception desk in the lobby."
    ],
    answer: 0,
    explanation_vi: "Hình vẽ mô tả các cổng xoay an ninh (turnstiles) có trang bị đầu đọc thẻ điện tử (electronic card readers) được bố trí ở lối vào sảnh chính -> Câu (A) hoàn toàn chính xác.",
    trap: "Câu (B) bẫy bảo vệ lục soát túi xách (không có người); Câu (C) bẫy rào chắn kính bị đẩy ngã (chúng đang đứng vững); Câu (D) bẫy hành động lắp ráp bàn tiếp tân.",
    examTip: "Từ vựng 'turnstile' (cổng xoay kiểm soát) là từ vựng rất hay xuất hiện trong tranh Part 1 miêu tả ga tàu điện hoặc cửa tòa nhà văn phòng cao ốc.",
    tags: {
      part: "Part 1",
      category: "Photographs",
      topic: "Security Turnstile",
      difficulty: "Medium"
    },
    vocab: [
      { word: "turnstile", ipa: "/ˈtɜːn.staɪl/", pos: "n", meaning: "cổng xoay kiểm soát ra vào" },
      { word: "position", ipa: "/pəˈzɪʃ.ən/", pos: "v", meaning: "đặt ở vị trí, bố trí" }
    ]
  },
  {
    id: "c3-p1-02",
    chapter: 3,
    part: 1,
    speaker: "ETS TOEIC Narrator",
    dialogue_en: "Look at the picture marked Number 6 in your test book. Listen to the four statements and select the one that best describes the picture.",
    dialogue_vi: "Quan sát bức tranh số 6. Lắng nghe 4 phương án và chọn câu miêu tả đúng nhất phòng họp tác chiến của Giám đốc An ninh.",
    situation_vi: "03:15 - Phòng họp chỉ huy khẩn cấp (War Room) chuẩn bị cho buổi báo cáo CISO.",
    imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="100%" height="auto" style="border-radius: 8px; background: #0f172a;">
      <!-- Room Background with Wall Molding -->
      <rect x="0" y="0" width="500" height="280" fill="#0b1120"/>
      <rect x="0" y="210" width="500" height="70" fill="#1e293b"/>
      <line x1="0" y1="210" x2="500" y2="210" stroke="#475569" stroke-width="2"/>

      <!-- Large Wall Projection Screen -->
      <rect x="130" y="25" width="240" height="120" rx="3" fill="#0f172a" stroke="#475569" stroke-width="3"/>
      <!-- Slide Content: Incident Flowchart -->
      <text x="145" y="45" fill="#38bdf8" font-size="9" font-family="sans-serif" font-weight="bold">ZERO-DAY INCIDENT RESPONSE TIMELINE</text>
      <!-- Timeline Nodes -->
      <circle cx="170" cy="75" r="9" fill="#0284c7"/>
      <text x="166" y="78" fill="#ffffff" font-size="8">1</text>
      <line x1="179" y1="75" x2="225" y2="75" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="235" cy="75" r="9" fill="#0284c7"/>
      <text x="231" y="78" fill="#ffffff" font-size="8">2</text>
      <line x1="244" y1="75" x2="290" y2="75" stroke="#38bdf8" stroke-width="2"/>
      <circle cx="300" cy="75" r="9" fill="#10b981"/>
      <text x="296" y="78" fill="#ffffff" font-size="8">3</text>
      <!-- Trend Graph on Slide -->
      <polyline points="150,125 180,115 210,120 250,95 290,105 340,90" fill="none" stroke="#f59e0b" stroke-width="2"/>

      <!-- Conference Table -->
      <ellipse cx="250" cy="225" rx="180" ry="35" fill="#1e293b" stroke="#64748b" stroke-width="2.5"/>

      <!-- Swivel Office Chairs around table -->
      <rect x="120" y="180" width="28" height="25" rx="3" fill="#334155" stroke="#475569"/>
      <rect x="180" y="175" width="28" height="25" rx="3" fill="#334155" stroke="#475569"/>
      <rect x="290" y="175" width="28" height="25" rx="3" fill="#334155" stroke="#475569"/>
      <rect x="350" y="180" width="28" height="25" rx="3" fill="#334155" stroke="#475569"/>

      <!-- Laptop and Notebooks on Table -->
      <rect x="230" y="215" width="40" height="20" rx="2" fill="#0f172a" stroke="#94a3b8"/>
      <rect x="160" y="222" width="18" height="14" fill="#f8fafc"/>
      <rect x="320" y="222" width="18" height="14" fill="#f8fafc"/>
    </svg>`,
    stem: "Look at the photograph and select the statement that best describes what you see.",
    audioText: "(A) A presentation screen displays information above a conference table. (B) Meeting attendees are taking seats around the podium. (C) Chairs are being stacked in the corner of the room. (D) The projection screen has been retracted into the ceiling.",
    choices: [
      "A presentation screen displays information above a conference table.",
      "Meeting attendees are taking seats around the podium.",
      "Chairs are being stacked in the corner of the room.",
      "The projection screen has been retracted into the ceiling."
    ],
    answer: 0,
    explanation_vi: "Bức tranh cho thấy màn hình máy chiếu lớn đang hiển thị lưu đồ tiến trình sự cố phía trên chiếc bàn hội nghị hình bầu dục -> Câu (A) miêu tả hoàn toàn chính xác.",
    trap: "Câu (B) bẫy người tham gia đang ngồi vào chỗ (không có người); Câu (C) bẫy ghế bị xếp chồng 'being stacked'; Câu (D) bẫy màn hình bị cuốn lên trần.",
    examTip: "Các từ chỉ vị trí không gian như 'above', 'adjacent to', 'surrounding', 'alongside' là trọng tâm thường xuyên xuất hiện ở Part 1.",
    tags: {
      part: "Part 1",
      category: "Photographs",
      topic: "War Room",
      difficulty: "Easy"
    },
    vocab: [
      { word: "display", ipa: "/dɪˈspleɪ/", pos: "v", meaning: "trưng bày, trình chiếu" },
      { word: "conference", ipa: "/ˈkɒn.fər.əns/", pos: "n", meaning: "hội nghị, cuộc họp" }
    ]
  },
  {
    id: "c4-p1-01",
    chapter: 4,
    part: 1,
    speaker: "ETS TOEIC Narrator",
    dialogue_en: "Look at the picture marked Number 7 in your test book. Listen to the four statements and select the one that best describes the picture.",
    dialogue_vi: "Quan sát bức tranh số 7. Lắng nghe 4 phương án và chọn câu miêu tả đúng nhất phòng nguồn điện dự phòng UPS.",
    situation_vi: "04:00 - Trạm máy phát điện khẩn cấp và ắc quy dự phòng của trung tâm Core Banking.",
    imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="100%" height="auto" style="border-radius: 8px; background: #0b1120;">
      <!-- Facility Concrete Floor -->
      <rect x="0" y="0" width="500" height="280" fill="#090d16"/>
      <polygon points="10,190 490,190 500,280 0,280" fill="#1e293b"/>

      <!-- Yellow and Black Safety Hazard Stripes on Floor -->
      <polygon points="80,240 100,240 85,270 65,270" fill="#eab308"/>
      <polygon points="115,240 135,240 120,270 100,270" fill="#eab308"/>
      <polygon points="150,240 170,240 155,270 135,270" fill="#eab308"/>
      <polygon points="185,240 205,240 190,270 170,270" fill="#eab308"/>

      <!-- Backup Diesel Generator Housing Unit -->
      <rect x="60" y="50" width="220" height="150" rx="4" fill="#334155" stroke="#64748b" stroke-width="3"/>
      <!-- Ventilation Louvers -->
      <rect x="75" y="70" width="70" height="110" fill="#1e293b"/>
      <line x1="75" y1="85" x2="145" y2="85" stroke="#475569" stroke-width="2"/>
      <line x1="75" y1="100" x2="145" y2="100" stroke="#475569" stroke-width="2"/>
      <line x1="75" y1="115" x2="145" y2="115" stroke="#475569" stroke-width="2"/>
      <line x1="75" y1="130" x2="145" y2="130" stroke="#475569" stroke-width="2"/>
      <line x1="75" y1="145" x2="145" y2="145" stroke="#475569" stroke-width="2"/>
      <line x1="75" y1="160" x2="145" y2="160" stroke="#475569" stroke-width="2"/>

      <!-- Exhaust Flange Pipe -->
      <rect x="230" y="20" width="30" height="30" fill="#475569"/>
      <ellipse cx="245" cy="20" rx="15" ry="5" fill="#64748b"/>

      <!-- Emergency Stop Button Unit (E-Stop) -->
      <rect x="175" y="75" width="45" height="45" rx="3" fill="#facc15" stroke="#000000" stroke-width="1.5"/>
      <circle cx="197" cy="97" r="14" fill="#ef4444" stroke="#7f1d1d" stroke-width="2"/>

      <!-- UPS Battery Bank Cabinet on the right -->
      <rect x="320" y="40" width="130" height="170" rx="4" fill="#0f172a" stroke="#0284c7" stroke-width="2.5"/>
      <text x="340" y="60" fill="#38bdf8" font-size="8" font-family="sans-serif" font-weight="bold">UPS BATTERY MODULES</text>
      <!-- Battery Cells -->
      <rect x="335" y="70" width="100" height="22" fill="#1e293b" stroke="#334155"/>
      <circle cx="345" cy="81" r="2.5" fill="#22c55e"/>
      <rect x="335" y="100" width="100" height="22" fill="#1e293b" stroke="#334155"/>
      <circle cx="345" cy="111" r="2.5" fill="#22c55e"/>
      <rect x="335" y="130" width="100" height="22" fill="#1e293b" stroke="#334155"/>
      <circle cx="345" cy="141" r="2.5" fill="#22c55e"/>
      <rect x="335" y="160" width="100" height="22" fill="#1e293b" stroke="#334155"/>
      <circle cx="345" cy="171" r="2.5" fill="#22c55e"/>
    </svg>`,
    stem: "Look at the photograph and select the statement that best describes what you see.",
    audioText: "(A) Industrial power equipment is installed inside a utility facility. (B) Workers are refueling an emergency generator. (C) An operator is pressing an emergency shutoff switch. (D) Yellow caution tape has been cordoned across the doorway.",
    choices: [
      "Industrial power equipment is installed inside a utility facility.",
      "Workers are refueling an emergency generator.",
      "An operator is pressing an emergency shutoff switch.",
      "Yellow caution tape has been cordoned across the doorway."
    ],
    answer: 0,
    explanation_vi: "Bức tranh chụp các khối thiết bị điện công nghiệp dự phòng (industrial power equipment) gồm máy phát điện và tủ pin UPS được lắp đặt kiên cố trong gian phòng kỹ thuật -> Câu (A) miêu tả hoàn toàn chính xác.",
    trap: "Câu (B) bẫy công nhân tiếp nhiên liệu 'are refueling'; Câu (C) bẫy thao tác bấm nút khẩn cấp 'is pressing'; Câu (D) bẫy dây cảnh báo giăng ngang cửa.",
    examTip: "Khi nhìn thấy máy móc công nghiệp trong phòng kỹ thuật, hãy tìm câu có cấu trúc bị động chỉ trạng thái như 'is installed', 'is housed', 'is positioned'.",
    tags: {
      part: "Part 1",
      category: "Photographs",
      topic: "Utility Facility",
      difficulty: "Medium"
    },
    vocab: [
      { word: "industrial", ipa: "/ɪnˈdʌs.tri.əl/", pos: "adj", meaning: "thuộc về công nghiệp" },
      { word: "facility", ipa: "/fəˈsɪl.ə.ti/", pos: "n", meaning: "cơ sở vật chất, nhà xưởng kỹ thuật" }
    ]
  },
  {
    id: "c4-p1-02",
    chapter: 4,
    part: 1,
    speaker: "ETS TOEIC Narrator",
    dialogue_en: "Look at the picture marked Number 8 in your test book. Listen to the four statements and select the one that best describes the picture.",
    dialogue_vi: "Quan sát bức tranh số 8. Lắng nghe 4 phương án và chọn câu miêu tả đúng nhất phòng họp báo cáo Hội đồng Quản trị.",
    situation_vi: "05:00 - Bục phát biểu và bảng tổng kết chuẩn bị cho phiên báo cáo trước Hội đồng Quản trị.",
    imageSvg: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 280" width="100%" height="auto" style="border-radius: 8px; background: #0f172a;">
      <!-- City Skyline at Night through Panoramic Window -->
      <rect x="0" y="0" width="500" height="280" fill="#0b1120"/>
      <!-- Window Mullions -->
      <rect x="30" y="10" width="440" height="140" fill="#020617" stroke="#334155" stroke-width="2"/>
      <!-- Distant City Lights -->
      <rect x="50" y="60" width="35" height="90" fill="#0f172a"/>
      <circle cx="60" cy="80" r="1.5" fill="#facc15"/>
      <circle cx="70" cy="90" r="1.5" fill="#facc15"/>
      <rect x="95" y="40" width="40" height="110" fill="#1e293b"/>
      <circle cx="105" cy="60" r="1.5" fill="#38bdf8"/>
      <circle cx="120" cy="75" r="1.5" fill="#38bdf8"/>
      <rect x="145" y="70" width="30" height="80" fill="#0f172a"/>

      <!-- Executive Lectern / Podium -->
      <polygon points="80,140 140,140 150,250 70,250" fill="#1e293b" stroke="#475569" stroke-width="2"/>
      <rect x="75" y="130" width="70" height="14" rx="2" fill="#334155" stroke="#64748b"/>
      <!-- Gooseneck Microphone on Lectern -->
      <path d="M 110 130 Q 110 110, 125 105" fill="none" stroke="#94a3b8" stroke-width="2"/>
      <circle cx="127" cy="104" r="3" fill="#0f172a" stroke="#cbd5e1"/>
      <rect x="85" y="132" width="22" height="10" rx="1" fill="#38bdf8" opacity="0.6"/>

      <!-- Whiteboard on Easel Stand showing Cyber Audit Charts -->
      <rect x="220" y="45" width="210" height="135" rx="3" fill="#f8fafc" stroke="#94a3b8" stroke-width="3"/>
      <!-- Easel Legs -->
      <line x1="240" y1="180" x2="225" y2="255" stroke="#475569" stroke-width="3.5"/>
      <line x1="410" y1="180" x2="425" y2="255" stroke="#475569" stroke-width="3.5"/>
      <line x1="325" y1="180" x2="325" y2="255" stroke="#334155" stroke-width="2.5"/>

      <!-- Whiteboard Charts -->
      <text x="235" y="65" fill="#0f172a" font-size="9" font-family="sans-serif" font-weight="bold">NOVABANK CYBER RESILIENCE</text>
      <!-- Bar Chart -->
      <rect x="245" y="130" width="18" height="35" fill="#0284c7"/>
      <rect x="270" y="115" width="18" height="50" fill="#0284c7"/>
      <rect x="295" y="95" width="18" height="70" fill="#10b981"/>
      <text x="245" y="175" fill="#64748b" font-size="7">Q1</text>
      <text x="270" y="175" fill="#64748b" font-size="7">Q2</text>
      <text x="295" y="175" fill="#64748b" font-size="7">Q3</text>
      <!-- Circular Metric -->
      <circle cx="370" cy="120" r="28" fill="none" stroke="#e2e8f0" stroke-width="6"/>
      <circle cx="370" cy="120" r="28" fill="none" stroke="#10b981" stroke-width="6" stroke-dasharray="140 180" stroke-linecap="round"/>
      <text x="355" y="124" fill="#0f172a" font-size="11" font-weight="bold">99.8%</text>
    </svg>`,
    stem: "Look at the photograph and select the statement that best describes what you see.",
    audioText: "(A) A presentation board with charts is positioned near a podium. (B) A speaker is addressing members of the executive board. (C) Window blinds have been pulled down over the glass pane. (D) The whiteboard is being moved into another office.",
    choices: [
      "A presentation board with charts is positioned near a podium.",
      "A speaker is addressing members of the executive board.",
      "Window blinds have been pulled down over the glass pane.",
      "The whiteboard is being moved into another office."
    ],
    answer: 0,
    explanation_vi: "Hình vẽ thể hiện một bảng thuyết trình có các biểu đồ chỉ số an ninh đặt cạnh bục phát biểu có gắn micro -> Câu (A) miêu tả hoàn toàn chính xác.",
    trap: "Câu (B) bẫy người phát biểu đang nói chuyện trước ban giám đốc (phòng chưa có người); Câu (C) bẫy rèm cửa sổ bị kéo xuống (cửa sổ đang mở nhìn ra bầu trời đêm); Câu (D) bẫy tiếp diễn bị động 'is being moved'.",
    examTip: "Bẫy 'speaker is addressing' là bẫy phổ biến nhất trong các bài thi Part 1 khi hình ảnh chỉ có bục phát biểu và bảng trình chiếu mà không có người.",
    tags: {
      part: "Part 1",
      category: "Photographs",
      topic: "Executive Boardroom",
      difficulty: "Medium"
    },
    vocab: [
      { word: "podium", ipa: "/ˈpəʊ.di.əm/", pos: "n", meaning: "bục phát biểu" },
      { word: "board", ipa: "/bɔːd/", pos: "n", meaning: "bảng trình bày, hội đồng" }
    ]
  }
];

module.exports = part1Questions;
