/**
 * =====================================================================
 * DATA SCHEMA: PHISHING HUNTER EMAILS
 * 30 Enterprise & Phishing Email Scenarios across 5 Difficulty Levels
 * ~40% Legitimate (Safe) & ~60% Fraudulent (Phishing)
 * =====================================================================
 */
const EMAILS = [
  // ===================================================================
  // LEVEL 1: BEGINNER (Blatant Red Flags, Generic Greetings, Gift Cards)
  // ===================================================================
  {
    id: "phish-001",
    level: 1,
    sender: { name: "IT Helpdesk Support", email: "support@hexatech-security-update.com" },
    recipient: "all-employees@hexatech.com",
    date: "October 18, 2026 09:14 AM",
    subject: "URGENT: Your Corporate Mailbox Exceeded 99% Storage Quota - Action Required",
    body: "Dear Customer,\n\nOur system detected that your corporate webmail account has exceeded its allocated capacity of 50 GB. Within the next 15 minutes, your incoming messages will be permanently rejected unless you upgrade your mailbox.\n\nPlease CLICK HERE IMMEDIATELY to verify your account password and prevent immediate mailbox termination.\n\nThank you for your prompt compliance,\nIT System Management",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "support@hexatech-security-update.com", explanation: "Địa chỉ email gửi đến từ tên miền giả mạo (lookalike domain), không phải đuôi chính thức @hexatech.com." },
      { phrase: "Dear Customer", explanation: "Lời chào chung chung (Generic greeting), không xưng danh tên nhân viên nội bộ." },
      { phrase: "Within the next 15 minutes", explanation: "Tạo áp lực thời gian gấp gáp phi lý (Urgency tactic) để người dùng hoảng sợ bấm link mà không kịp suy xét." },
      { phrase: "CLICK HERE IMMEDIATELY", explanation: "Lời kêu gọi hành động giật gân (Aggressive call-to-action) dẫn tới trang đăng nhập lừa đảo." }
    ],
    vietnameseTranslation: "Kính gửi Quý khách,\n\nHệ thống của chúng tôi phát hiện hòm thư doanh nghiệp của bạn đã vượt quá dung lượng 50 GB được phân bổ. Trong vòng 15 phút tới, các thư gửi đến sẽ bị từ chối vĩnh viễn trừ khi bạn nâng cấp hộp thư.\n\nVui lòng NHẤP VÀO ĐÂY NGAY LẬP TỨC để xác minh mật khẩu tài khoản và ngăn chặn việc khóa hòm thư ngay tức khắc.\n\nCảm ơn bạn đã kịp thời tuân thủ,\nBan Quản lý Hệ thống CNTT",
    detailedExplanation: "Đây là dạng tấn công Credential Harvesting kinh điển mạo danh IT Support. Dấu hiệu nhận biết: (1) Domain người gửi giả mạo có thêm tiền tố '-security-update', (2) Lời chào vô danh 'Dear Customer', (3) Đe dọa khóa tài khoản trong 15 phút, (4) Yêu cầu nhấp vào liên kết để nhập mật khẩu.",
    readingQuestion: {
      stem: "What consequence does the sender threaten if no action is taken within fifteen minutes?",
      choices: [
        "Incoming messages will be rejected permanently.",
        "The computer operating system will be locked.",
        "A financial late fee will be billed to the employee.",
        "The user will be required to attend mandatory training."
      ],
      answer: 0,
      explanation_vi: "Đoạn 1 nêu rõ: 'incoming messages will be permanently rejected unless you upgrade your mailbox'.",
      trap: "Bẫy suy diễn tài chính (late fee) hoặc khóa máy tính (OS locked)."
    },
    keyVocab: [
      { word: "allocated", pos: "adjective", meaning_vi: "được phân bổ, cấp phát", example: "Each department was assigned its allocated quarterly cloud storage." },
      { word: "quota", pos: "noun", meaning_vi: "hạn ngạch, dung lượng tối đa cho phép", example: "Users who exceed their mailbox quota cannot send outgoing attachments." },
      { word: "termination", pos: "noun", meaning_vi: "sự chấm dứt, đóng tài khoản", example: "Failure to verify employment details will result in account termination." }
    ]
  },
  {
    id: "phish-002",
    level: 1,
    sender: { name: "HexaTech Human Resources", email: "hr@hexatech.com" },
    recipient: "team@hexatech.com",
    date: "October 19, 2026 10:30 AM",
    subject: "Reminder: Open Enrollment Benefits Webinar This Thursday at 2:00 PM",
    body: "Dear Colleagues,\n\nThis is a gentle reminder that our annual benefits open enrollment session will take place this Thursday, October 22, from 2:00 PM to 3:00 PM via Microsoft Teams.\n\nDuring this session, our Benefits Administration team will review upcoming changes to our dental, health, and 401(k) matching programs for next calendar year. Attendance is optional but strongly recommended for staff considering plan adjustments.\n\nYou can access the live session using the recurring link on the corporate intranet calendar, or dial in via the internal audio conference bridge at Extension 8800.\n\nBest regards,\nEleanor Vance\nDirector of People Operations, HexaTech",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Thân gửi các đồng nghiệp,\n\nĐây là lời nhắc nhở rằng buổi giải đáp đăng ký phúc lợi hàng năm sẽ diễn ra vào thứ Năm tuần này, ngày 22 tháng 10, từ 2:00 đến 3:00 chiều qua Microsoft Teams.\n\nTrong buổi này, nhóm Quản trị Phúc lợi sẽ xem xét các thay đổi về chương trình nha khoa, y tế và quỹ hưu trí 401(k) cho năm tới. Việc tham gia là tự nguyện nhưng rất khuyến khích cho nhân sự muốn điều chỉnh gói bảo hiểm.\n\nBạn có thể vào buổi họp bằng liên kết định kỳ trên lịch nội bộ công ty, hoặc gọi qua tổng đài âm thanh tại số máy lẻ 8800.\n\nTrân trọng,\nEleanor Vance\nGiám đốc Vận hành Nhân sự, HexaTech",
    detailedExplanation: "Email hoàn toàn HỢP LỆ (SAFE): (1) Địa chỉ gửi đúng chuẩn nội bộ hr@hexatech.com, (2) Không yêu cầu nhập mật khẩu hay thông tin nhạy cảm, (3) Không chứa liên kết lạ bắt nhấp gấp, (4) Hướng dẫn nhân viên truy cập qua cổng lịch intranet chính thức hoặc số máy lẻ nội bộ.",
    readingQuestion: {
      stem: "What is the primary topic of the upcoming webinar?",
      choices: [
        "Upcoming adjustments to employee healthcare and retirement benefits",
        "A mandatory software migration for internal desktop computers",
        "The introduction of a new remote telecommuting policy",
        "Guidelines for booking corporate international flights"
      ],
      answer: 0,
      explanation_vi: "Email nêu rõ: 'review upcoming changes to our dental, health, and 401(k) matching programs'.",
      trap: "Bẫy từ 'mandatory' trong khi bài nói 'Attendance is optional'."
    },
    keyVocab: [
      { word: "enrollment", pos: "noun", meaning_vi: "sự ghi danh, đăng ký tham gia", example: "Open enrollment allows staff to change their medical insurance plans." },
      { word: "recurring", pos: "adjective", meaning_vi: "định kỳ lặp lại", example: "The weekly department sync is scheduled as a recurring calendar invite." },
      { word: "optional", pos: "adjective", meaning_vi: "tự nguyện, không bắt buộc", example: "Attending the evening social reception is entirely optional." }
    ]
  },
  {
    id: "phish-003",
    level: 1,
    sender: { name: "David Kim - Executive Office", email: "ceo.davidkim@gmail.com" },
    recipient: "finance-assistant@hexatech.com",
    date: "October 20, 2026 11:45 AM",
    subject: "QUICK TASK: Need you to purchase 10 Apple Gift Cards right now",
    body: "Hi,\n\nI am currently in an urgent confidential meeting with foreign investors and cannot take calls. I need you to do me a quick personal favor.\n\nPlease purchase 10 Apple Store gift cards ($100 each) from the nearest convenience store immediately. Scratch the back, take clear photos of the redemption codes, and email them back to me at this address. I will personally reimburse you through expense payroll by tomorrow morning.\n\nTreat this with top priority and do not mention it to anyone in the office as it is for an executive surprise.\n\nDavid Kim\nCEO, HexaTech",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "ceo.davidkim@gmail.com", explanation: "CEO công ty công nghệ lớn không bao giờ sử dụng tài khoản cá nhân @gmail.com để chỉ đạo công việc tài chính." },
      { phrase: "purchase 10 Apple Store gift cards", explanation: "Chiêu trò lừa đảo thẻ quà tặng (Gift Card Scam) kinh điển vì mã thẻ không thể truy vết hay thu hồi sau khi gửi." },
      { phrase: "cannot take calls", explanation: "Cô lập nạn nhân, ngăn nạn nhân gọi điện thoại trực tiếp để đối chiếu xác minh thông tin." },
      { phrase: "do not mention it to anyone", explanation: "Ép nạn nhân giữ bí mật để tránh đồng nghiệp hoặc bộ phận kế toán kịp thời cảnh báo." }
    ],
    vietnameseTranslation: "Chào bạn,\n\nTôi hiện đang trong một cuộc họp khẩn cấp bí mật với các nhà đầu tư nước ngoài và không thể nghe điện thoại. Tôi cần bạn giúp tôi một việc cá nhân nhanh.\n\nHãy mua ngay 10 thẻ quà tặng Apple Store (mỗi thẻ 100 USD) từ cửa hàng tiện lợi gần nhất. Cào lớp phủ mặt sau, chụp ảnh rõ các mã thẻ rồi gửi lại cho tôi qua email này. Tôi sẽ đích thân hoàn tiền lại cho bạn qua bảng lương sáng mai.\n\nHãy ưu tiên hàng đầu và đừng nói với ai trong văn phòng vì đây là phần quà bất ngờ của ban giám đốc.\n\nDavid Kim\nCEO, HexaTech",
    detailedExplanation: "Đây là đòn lừa đảo CEO Fraud / Gift Card Scam rất phổ biến. Kẻ gian dùng email miễn phí @gmail.com mạo danh lãnh đạo cao nhất, bịa lý do đang họp bí mật để ngăn gọi điện thoại kiểm tra, thúc ép nạn nhân tự ứng tiền mua thẻ quà tặng không thể truy hồi.",
    readingQuestion: {
      stem: "How does the sender instruct the recipient to deliver the gift card codes?",
      choices: [
        "By taking photos of the scratched codes and replying to the email",
        "By mailing physical plastic cards to the company headquarters",
        "By entering the pin numbers into the employee HR portal",
        "By handing the receipts directly to the executive assistant"
      ],
      answer: 0,
      explanation_vi: "Đoạn 2 nêu rõ: 'Scratch the back, take clear photos of the redemption codes, and email them back to me'.",
      trap: "Bẫy gửi qua bưu điện (mailing physical cards) hoặc nộp trên cổng HR."
    },
    keyVocab: [
      { word: "redemption", pos: "noun", meaning_vi: "sự quy đổi, đổi thưởng mã quà tặng", example: "Gift card redemption must be completed on the official retailer website." },
      { word: "reimburse", pos: "verb", meaning_vi: "hoàn tiền, trả lại chi phí", example: "The company will reimburse travel expenses backed by authentic receipts." },
      { word: "confidential", pos: "adjective", meaning_vi: "bảo mật, tuyệt mật", example: "All discussions regarding patent acquisitions must remain strictly confidential." }
    ]
  },
  {
    id: "phish-004",
    level: 1,
    sender: { name: "HexaTech Facilities Office", email: "facilities@hexatech.com" },
    recipient: "building-occupants@hexatech.com",
    date: "October 21, 2026 08:00 AM",
    subject: "Notice: Scheduled Main Entrance Turnstile Maintenance This Saturday",
    body: "Good morning Building Occupants,\n\nPlease be advised that our contracted access control vendor, SecureGate Systems, will be performing scheduled firmware calibrations on the main lobby turnstiles this Saturday, October 24, from 8:00 AM to 12:00 PM.\n\nDuring this four-hour maintenance window, the revolving doors and central glass turnstiles will be temporarily powered down. Staff members and weekend visitors should enter the facility via the East Side pedestrian entrance next to the visitor parking ramp.\n\nYour existing RFID security badges will function normally at the East Side door reader. No registration or credential updates are required.\n\nThank you for your cooperation,\nFacilities Operations Management",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Kính chào toàn thể nhân viên trong tòa nhà,\n\nXin lưu ý rằng nhà thầu kiểm soát ra vào của chúng tôi, SecureGate Systems, sẽ tiến hành bảo dưỡng và cân chỉnh phần mềm cho các cửa xoay tại sảnh chính vào thứ Bảy tuần này, ngày 24 tháng 10, từ 8:00 sáng đến 12:00 trưa.\n\nTrong khoảng thời gian 4 tiếng này, cửa xoay trung tâm sẽ tạm ngưng hoạt động. Nhân viên và khách cuối tuần vui lòng vào tòa nhà qua cửa lối đi bộ phía Đông cạnh bãi đỗ xe dành cho khách.\n\nThẻ an ninh RFID hiện tại của bạn vẫn hoạt động bình thường tại đầu đọc cửa phía Đông. Không cần đăng ký hay cập nhật lại thẻ.\n\nCảm ơn sự hợp tác của các bạn,\nBan Quản lý Vận hành Tòa nhà",
    detailedExplanation: "Email HỢP LỆ (SAFE): (1) Địa chỉ gửi đúng tên miền nội bộ facilities@hexatech.com, (2) Thông báo lịch trình bảo trì cơ sở vật chất rõ ràng, (3) Nêu rõ không yêu cầu cập nhật mật khẩu hay thẻ từ, (4) Không chứa bất kỳ liên kết hoặc tệp đính kèm nào.",
    readingQuestion: {
      stem: "Where should weekend staff enter the facility during Saturday morning maintenance?",
      choices: [
        "Through the East Side pedestrian door near the visitor parking ramp",
        "Through the underground delivery loading dock entrance",
        "Through the central lobby glass revolving turnstiles",
        "Through the third-floor skybridge connecting to the garage"
      ],
      answer: 0,
      explanation_vi: "Đoạn 2 nêu rõ: 'enter the facility via the East Side pedestrian entrance next to the visitor parking ramp'.",
      trap: "Bẫy cửa xoay chính (lobby glass turnstiles) - cửa này đang bị tắt để bảo dưỡng."
    },
    keyVocab: [
      { word: "turnstile", pos: "noun", meaning_vi: "cửa quay kiểm soát vé/thẻ ra vào", example: "Employees must tap their badges at the turnstile before entering." },
      { word: "calibration", pos: "noun", meaning_vi: "sự hiệu chỉnh, cân chỉnh thiết bị", example: "Routine sensor calibration prevents false door alarms." },
      { word: "pedestrian", pos: "noun / adjective", meaning_vi: "người đi bộ / dành cho người đi bộ", example: "The building features a dedicated pedestrian walkway." }
    ]
  },
  {
    id: "phish-005",
    level: 1,
    sender: { name: "Payroll Notification Department", email: "service@paychex-direct-verify.net" },
    recipient: "accounting-dept@hexatech.com",
    date: "October 22, 2026 01:20 PM",
    subject: "Action Required: Wire Transfer Error in Your Recent Direct Deposit",
    body: "ATTENTION EMPLOYEE:\n\nA processing discrepancy occurred during the distribution of your bi-weekly direct payroll deposit. As a result, your recent salary transfer of $2,450.00 was rejected by the clearing house.\n\nTo ensure your funds are deposited into your checking account before the weekend, you MUST verify your online banking password and Social Security Number via the secure portal below within 24 hours:\n\nhttp://192.168.1.104/secure-payroll/login.php\n\nIf verification is not completed, your salary will be withheld for 60 business days.\n\nPayroll Processing Team",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "service@paychex-direct-verify.net", explanation: "Tên miền lạ .net không thuộc hệ thống HexaTech hay đối tác thanh toán hợp pháp." },
      { phrase: "verify your online banking password and Social Security Number", explanation: "Bộ phận tiền lương nội bộ không bao giờ hỏi mật khẩu ngân hàng trực tuyến hay số an sinh xã hội qua email." },
      { phrase: "http://192.168.1.104/secure-payroll/login.php", explanation: "Liên kết trỏ trực tiếp đến địa chỉ IP thô thay vì tên miền mã hóa HTTPS hợp lệ." },
      { phrase: "salary will be withheld for 60 business days", explanation: "Lời đe dọa cực đoan nhằm gây hoảng loạn để nạn nhân vội vã cung cấp thông tin nhạy cảm." }
    ],
    vietnameseTranslation: "CHÚ Ý NHÂN VIÊN:\n\nĐã xảy ra sai sót trong quá trình chuyển khoản tiền lương định kỳ 2 tuần một lần của bạn. Hậu quả là khoản lương 2.450 USD vừa qua đã bị ngân hàng thanh toán bù trừ từ chối.\n\nĐể đảm bảo tiền vào tài khoản trước cuối tuần, bạn BẮT BUỘC phải xác minh mật khẩu ngân hàng và Số An sinh Xã hội qua cổng thông tin dưới đây trong vòng 24 giờ:\n\nhttp://192.168.1.104/secure-payroll/login.php\n\nNếu không xác minh, lương của bạn sẽ bị giữ lại trong 60 ngày làm việc.\n\nĐội ngũ Xử lý Tiền lương",
    detailedExplanation: "Email LỪA ĐẢO (PHISHING) nguy hiểm: (1) Yêu cầu cung cấp mật khẩu ngân hàng và SSN, (2) Đường link trỏ tới địa chỉ IP không bảo mật HTTP, (3) Đe dọa giữ lương 60 ngày nếu không làm theo.",
    readingQuestion: {
      stem: "What sensitive information does the email ask the employee to input?",
      choices: [
        "Online banking password and Social Security Number",
        "Office building badge number and desk extension",
        "Health insurance policy number and home address",
        "Emergency contact phone number and blood type"
      ],
      answer: 0,
      explanation_vi: "Đoạn 2 ghi rõ: 'verify your online banking password and Social Security Number'.",
      trap: "Bẫy số thẻ văn phòng (badge number) hoặc bảo hiểm y tế."
    },
    keyVocab: [
      { word: "discrepancy", pos: "noun", meaning_vi: "sự sai lệch số liệu, không trùng khớp", example: "An audit resolved the discrepancy between the ledger and bank balance." },
      { word: "withheld", pos: "verb (past)", meaning_vi: "bị giữ lại, không chi trả", example: "Taxes are automatically withheld from each paycheck." },
      { word: "clearing", pos: "noun", meaning_vi: "nghiệp vụ thanh toán bù trừ ngân hàng", example: "The check was cleared through the central clearing house." }
    ]
  },
  {
    id: "phish-006",
    level: 1,
    sender: { name: "HexaTech IT Security Operations", email: "soc@hexatech.com" },
    recipient: "all-staff@hexatech.com",
    date: "October 23, 2026 03:00 PM",
    subject: "Cybersecurity Alert: Active Phishing Campaign Targeting Payroll Credentials",
    body: "Dear HexaTech Staff,\n\nOur Threat Intelligence Center has intercepted multiple fraudulent emails claiming that employee payroll direct deposits have failed. These messages mimic popular payroll platforms and urge recipients to click links to verify banking passwords.\n\nPlease remember:\n1. The HexaTech payroll department will NEVER ask you to input personal banking credentials or passwords via email.\n2. All legitimate payroll updates must be performed directly through our authenticated Workday HR portal at https://hr.hexatech.com.\n3. If you received any suspicious messages, please forward them immediately to abuse@hexatech.com without clicking any attachments.\n\nThank you for remaining vigilant,\nSecurity Operations Center (SOC)",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Kính gửi toàn thể nhân viên HexaTech,\n\nTrung tâm Tình báo Mối đe dọa của chúng tôi vừa chặn đứng nhiều email lừa đảo mạo danh thông báo chuyển khoản tiền lương bị lỗi. Các email này bắt chước giao diện phần mềm kế toán và giục người nhận bấm link để điền mật khẩu ngân hàng.\n\nXin hãy nhớ:\n1. Bộ phận kế toán lương HexaTech KHÔNG BAO GIỜ yêu cầu bạn nhập mật khẩu ngân hàng qua email.\n2. Mọi cập nhật tiền lương hợp lệ phải thực hiện trực tiếp trên cổng Workday tại https://hr.hexatech.com.\n3. Nếu bạn nhận được thư nghi vấn, hãy chuyển tiếp ngay tới abuse@hexatech.com mà không mở bất kỳ tệp đính kèm nào.\n\nCảm ơn tinh thần cảnh giác của các bạn,\nTrung tâm Điều hành An ninh mạng (SOC)",
    detailedExplanation: "Email HỢP LỆ (SAFE): Đây là thông báo cảnh giác chính thống từ đội SOC nội bộ (soc@hexatech.com). Email không đòi hỏi thông tin mà cảnh báo các dấu hiệu nhận biết email độc hại và cung cấp địa chỉ chính thức https://hr.hexatech.com.",
    readingQuestion: {
      stem: "Where should staff report suspicious payroll phishing emails according to the notice?",
      choices: [
        "By forwarding the message to abuse@hexatech.com",
        "By calling the local police department cyber division",
        "By printing the email and submitting it to reception",
        "By replying directly to the original external sender"
      ],
      answer: 0,
      explanation_vi: "Mục số 3 nêu rõ: 'forward them immediately to abuse@hexatech.com'.",
      trap: "Bẫy trả lời lại cho kẻ gửi (replying directly) - điều này sẽ xác nhận hòm thư đang hoạt động."
    },
    keyVocab: [
      { word: "vigilant", pos: "adjective", meaning_vi: "cảnh giác, thận trọng đề phòng", example: "Security teams must stay vigilant against emerging cyber threats." },
      { word: "intercepted", pos: "verb (past)", meaning_vi: "chặn đứng, thu chặn trên đường truyền", example: "Firewalls intercepted malicious data packets before they reached servers." },
      { word: "mimic", pos: "verb", meaning_vi: "bắt chước, giả dạng", example: "Phishing portals carefully mimic authentic corporate login pages." }
    ]
  },

  // ===================================================================
  // LEVEL 2: INTERMEDIATE (Lookalike Domains, HR/IT Spoofs, Cloud Share)
  // ===================================================================
  {
    id: "phish-007",
    level: 2,
    sender: { name: "Microsoft OneDrive Cloud Share", email: "no-reply@sharepoint-hexatech.co" },
    recipient: "sarah.jenkins@hexatech.com",
    date: "October 24, 2026 09:30 AM",
    subject: "Alex Mercer shared 'Q3_Financial_Audit_CONFIDENTIAL.xlsx' with you",
    body: "Microsoft SharePoint Online\n\nAlex Mercer (alex.mercer@hexatech.com) has shared an encrypted spreadsheet document with you:\n\nFile Name: Q3_Financial_Audit_CONFIDENTIAL.xlsx\nFile Size: 4.8 MB\nExpiration: 48 Hours\n\nTo view this protected workbook, you must authenticate using your corporate domain credentials:\n\n[ OPEN ENCRYPTED SPREADSHEET IN BROWSER ]\n\nIf you do not recognize the sender, please contact your organization's IT department.",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "no-reply@sharepoint-hexatech.co", explanation: "Tên miền đuôi .co thay vì .com của HexaTech hoặc microsoft.com chính thức (Typosquatting / Lookalike domain)." },
      { phrase: "OPEN ENCRYPTED SPREADSHEET IN BROWSER", explanation: "Nút mở tài liệu chứa liên kết ngoài dẫn tới trang đánh cắp phiên đăng nhập OAuth hoặc mật khẩu." }
    ],
    vietnameseTranslation: "Microsoft SharePoint Online\n\nAlex Mercer đã chia sẻ một bảng tính được mã hóa với bạn:\n\nTên tệp: Q3_Financial_Audit_CONFIDENTIAL.xlsx\nDung lượng: 4.8 MB\nHết hạn sau: 48 giờ\n\nĐể xem bảng tính này, bạn phải xác thực bằng thông tin đăng nhập tài khoản doanh nghiệp:\n\n[ MỞ BẢNG TÍNH MÃ HÓA TRÊN TRÌNH DUYỆT ]\n\nNếu bạn không nhận biết người gửi, vui lòng liên hệ phòng CNTT.",
    detailedExplanation: "Email LỪA ĐẢO (PHISHING): Kẻ tấn công lợi dụng tâm lý tò mò với từ khóa nhạy cảm 'Financial Audit CONFIDENTIAL'. Domain người gửi giả dạng `sharepoint-hexatech.co` (.co thay vì .com). Khi bấm nút, người dùng sẽ bị dẫn tới trang đăng nhập giả mạo để cướp tài khoản Office 365.",
    readingQuestion: {
      stem: "What type of file did the sender supposedly share?",
      choices: [
        "A confidential financial audit spreadsheet",
        "A promotional video for a marketing campaign",
        "A scanned PDF copy of an office lease agreement",
        "An encrypted software installation archive"
      ],
      answer: 0,
      explanation_vi: "Tiêu đề và thân bài ghi rõ: 'Q3_Financial_Audit_CONFIDENTIAL.xlsx' (bảng tính tài chính Excel).",
      trap: "Bẫy tệp PDF hay tệp cài đặt phần mềm."
    },
    keyVocab: [
      { word: "spreadsheet", pos: "noun", meaning_vi: "tập tin bảng tính (Excel/Sheets)", example: "The accountant organized quarterly revenues in a complex spreadsheet." },
      { word: "authenticate", pos: "verb", meaning_vi: "chứng minh danh tính, xác thực", example: "Users must authenticate via facial recognition before entering." },
      { word: "expiration", pos: "noun", meaning_vi: "sự hết hạn hiệu lực", example: "Check the expiration date on your security badge regularly." }
    ]
  },
  {
    id: "phish-008",
    level: 2,
    sender: { name: "HexaTech Procurement Office", email: "procurement@hexatech.com" },
    recipient: "department-heads@hexatech.com",
    date: "October 24, 2026 11:15 AM",
    subject: "Vendor Catalog Updates & New Purchase Order Thresholds for Q4",
    body: "Dear Department Heads,\n\nIn preparation for the fourth fiscal quarter, the Procurement Division has updated our approved office supplies and hardware vendor directory. The revised price catalogs reflect newly negotiated corporate volume discounts with Dell Technologies and Staples Advantage.\n\nKey Adjustments:\n1. Departmental purchase orders under $1,000 now require only single-manager sign-off.\n2. All electronic equipment purchases exceeding $5,000 must include at least two competitive vendor bids.\n\nPlease review the complete procurement matrix on the internal corporate portal at http://intranet.hexatech.com/procurement.\n\nSincerely,\nMarcus Brody, Procurement Director",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Kính gửi Trưởng các bộ phận,\n\nĐể chuẩn bị cho quý 4, Phòng Thu mua đã cập nhật danh mục nhà cung cấp thiết bị và văn phòng phẩm được phê duyệt. Bảng giá mới phản ánh các mức chiết khấu số lượng lớn vừa đàm phán với Dell và Staples.\n\nCác điều chỉnh chính:\n1. Đơn mua hàng dưới 1.000 USD chỉ cần một quản lý ký duyệt.\n2. Đơn mua thiết bị điện tử trên 5.000 USD phải có báo giá cạnh tranh từ ít nhất 2 nhà cung cấp.\n\nVui lòng xem ma trận hướng dẫn thu mua trên cổng nội bộ tại http://intranet.hexatech.com/procurement.\n\nTrân trọng,\nMarcus Brody, Giám đốc Thu mua",
    detailedExplanation: "Email HỢP LỆ (SAFE): (1) Gửi từ địa chỉ chính thức procurement@hexatech.com, (2) Liên kết trỏ về máy chủ nội bộ intranet.hexatech.com, (3) Nội dung kinh doanh chuẩn mực về quy trình ký duyệt đơn hàng mà không có dấu hiệu thúc ép bất thường.",
    readingQuestion: {
      stem: "What requirement applies to electronic hardware orders exceeding $5,000?",
      choices: [
        "They must include bids from at least two competing vendors.",
        "They require personal written authorization from the CEO.",
        "They can only be purchased during the final week of the quarter.",
        "Payment must be made exclusively through corporate credit cards."
      ],
      answer: 0,
      explanation_vi: "Mục 2 nêu rõ: 'exceeding $5,000 must include at least two competitive vendor bids'.",
      trap: "Bẫy phải có chữ ký CEO (authorization from CEO) - văn bản không đề cập điều này."
    },
    keyVocab: [
      { word: "procurement", pos: "noun", meaning_vi: "nghiệp vụ thu mua vật tư doanh nghiệp", example: "The procurement team negotiated substantial discounts on bulk purchases." },
      { word: "threshold", pos: "noun", meaning_vi: "ngưỡng hạn mức quy định", example: "Expenses exceeding the $500 threshold require director approval." },
      { word: "matrix", pos: "noun", meaning_vi: "bảng ma trận biểu đồ đối chiếu quy định", example: "Consult the approval matrix before submitting hardware requests." }
    ]
  },
  {
    id: "phish-009",
    level: 2,
    sender: { name: "HexaTech Zoom Admin", email: "invitations@zoom-hexatech-meeting.us" },
    recipient: "team-leads@hexatech.com",
    date: "October 25, 2026 02:00 PM",
    subject: "URGENT: All-Hands Video Meeting Password Changed by Host",
    body: "HexaTech Video Conferencing System\n\nThe meeting passcode for today's Mandatory All-Hands Strategy Call has been reset due to unauthorized attendee disruptions.\n\nTo join the active conference room, you must update your Zoom plugin by installing the security executable attached to this message: 'ZoomSecurityFix_v4.2.exe'.\n\nMeeting Details:\nTopic: Executive Q4 Product Strategy\nTime: Today at 2:30 PM (Starts in 30 minutes)\n\nFailure to join will result in an unexcused absence on your HR attendance record.",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "invitations@zoom-hexatech-meeting.us", explanation: "Tên miền .us lạ không thuộc zoom.us hay hexatech.com." },
      { phrase: "ZoomSecurityFix_v4.2.exe", explanation: "Yêu cầu cài đặt tệp thực thi .exe từ email là dấu hiệu phân phối mã độc nguy hiểm (Malware Delivery)." },
      { phrase: "Starts in 30 minutes", explanation: "Thúc giục thời gian để nạn nhân tải và chạy file .exe mà không quét virus." },
      { phrase: "unexcused absence on your HR attendance record", explanation: "Đe dọa kỷ luật nhân sự nhằm ép buộc nạn nhân làm theo." }
    ],
    vietnameseTranslation: "Hệ thống Hội nghị Truyền hình HexaTech\n\nMật mã cuộc họp Chiến lược Toàn công ty bắt buộc hôm nay đã bị thay đổi do có người lạ xâm nhập.\n\nĐể tham gia phòng họp đang diễn ra, bạn phải cập nhật tiện ích Zoom bằng cách cài đặt tệp thực thi đính kèm: 'ZoomSecurityFix_v4.2.exe'.\n\nChi tiết cuộc họp:\nChủ đề: Chiến lược Sản phẩm Quý 4\nThời gian: 2:30 chiều hôm nay (bắt đầu sau 30 phút)\n\nNếu không tham gia, bạn sẽ bị ghi nhận vắng mặt không phép vào hồ sơ nhân sự.",
    detailedExplanation: "Email LỪA ĐẢO (PHISHING) đính kèm mã độc: Kẻ tấn công lợi dụng cuộc họp All-Hands để dụ người dùng chạy file .exe độc hại. Zoom chính thức không bao giờ yêu cầu cập nhật phần mềm qua file .exe gửi trong email.",
    readingQuestion: {
      stem: "What action does the email urge recipients to take to enter the meeting?",
      choices: [
        "Install an executable file attached to the email",
        "Call the telephone audio bridge directly",
        "Request a new password from human resources",
        "Reset their corporate laptop master credentials"
      ],
      answer: 0,
      explanation_vi: "Đoạn 2 nêu: 'installing the security executable attached to this message: ZoomSecurityFix_v4.2.exe'.",
      trap: "Bẫy gọi qua điện thoại (call audio bridge) hoặc xin mật khẩu từ HR."
    },
    keyVocab: [
      { word: "passcode", pos: "noun", meaning_vi: "mã số bảo mật truy cập", example: "Enter the six-digit meeting passcode to join the secure conference." },
      { word: "executable", pos: "noun / adjective", meaning_vi: "tập tin thực thi chương trình (.exe)", example: "Antivirus software blocks unauthorized executable files from running." },
      { word: "unexcused", pos: "adjective", meaning_vi: "không có lý do chính đáng, không phép", example: "Multiple unexcused absences may lead to disciplinary review." }
    ]
  },
  {
    id: "phish-010",
    level: 2,
    sender: { name: "HexaTech Corporate Travel", email: "travel@hexatech.com" },
    recipient: "marcus.vance@hexatech.com",
    date: "October 25, 2026 04:15 PM",
    subject: "Confirmed Flight Itinerary: Chicago Tech Symposium (Oct 28 - Oct 31)",
    body: "Dear Marcus,\n\nYour flight reservation for the upcoming International Enterprise Tech Summit in Chicago has been ticketed through SkyRoute Corporate. Below are your travel details:\n\nOutbound Flight: United Airlines UA 1408\nDeparture: San Francisco (SFO) - Oct 28 at 08:30 AM\nArrival: Chicago O'Hare (ORD) - Oct 28 at 02:45 PM\nSeat: 14C (Economy Plus)\n\nReturn Flight: United Airlines UA 1922\nDeparture: Chicago O'Hare (ORD) - Oct 31 at 05:15 PM\nArrival: San Francisco (SFO) - Oct 31 at 07:55 PM\n\nYour hotel accommodations at the Grand Metro Convention Hotel are prepaid. You may view your mobile boarding pass by logging into the airline app with Confirmation Code #HX782K.\n\nSafe travels,\nCorporate Travel Desk",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Chào Marcus,\n\nVé máy bay cho chuyến công tác dự Hội nghị Công nghệ Doanh nghiệp Quốc tế tại Chicago của bạn đã được xuất qua cổng SkyRoute Corporate. Dưới đây là thông tin chi tiết:\n\nChuyến đi: United Airlines UA 1408\nKhởi hành: San Francisco (SFO) - 28/10 lúc 08:30 sáng\nĐến nơi: Chicago O'Hare (ORD) - 28/10 lúc 02:45 chiều\nGhế: 14C (Economy Plus)\n\nChuyến về: United Airlines UA 1922\nKhởi hành: Chicago O'Hare (ORD) - 31/10 lúc 05:15 chiều\nĐến nơi: San Francisco (SFO) - 31/10 lúc 07:55 tối\n\nKhách sạn tại Grand Metro Convention Hotel đã được công ty thanh toán trước. Bạn có thể xem thẻ lên máy bay bằng cách đăng nhập ứng dụng hãng hàng không với Mã đặt chỗ #HX782K.\n\nChúc bạn chuyến đi thuận lợi,\nBàn Quản lý Công tác Doanh nghiệp",
    detailedExplanation: "Email HỢP LỆ (SAFE): Email xác nhận lịch trình chuyến bay công tác rất chuẩn mực từ travel@hexatech.com, cung cấp mã đặt chỗ hãng hàng không chính thống mà không yêu cầu nhấp link lạ.",
    readingQuestion: {
      stem: "Where is Mr. Vance scheduled to arrive on October 28?",
      choices: [
        "Chicago O'Hare International Airport",
        "San Francisco International Airport",
        "New York JFK International Airport",
        "Dallas Fort Worth International Airport"
      ],
      answer: 0,
      explanation_vi: "Lịch trình nêu: 'Arrival: Chicago O'Hare (ORD) - Oct 28 at 02:45 PM'.",
      trap: "Bẫy điểm khởi hành (San Francisco SFO)."
    },
    keyVocab: [
      { word: "itinerary", pos: "noun", meaning_vi: "lịch trình chuyến công tác", example: "The travel agent forwarded our finalized flight itinerary." },
      { word: "accommodations", pos: "noun (plural)", meaning_vi: "phòng ốc nghỉ ngơi khách sạn", example: "The firm arranged comfortable hotel accommodations for the speakers." },
      { word: "prepaid", pos: "adjective", meaning_vi: "đã được thanh toán trước", example: "All conference registration and lodging fees were prepaid by the sponsor." }
    ]
  },
  {
    id: "phish-011",
    level: 2,
    sender: { name: "Corporate LinkedIn Notification", email: "messages-inbox@linkedin-corporatesecure.com" },
    recipient: "linda.choi@hexatech.com",
    date: "October 26, 2026 08:45 AM",
    subject: "You have 3 unread messages from executive recruiters regarding CISO openings",
    body: "LinkedIn Talent Network\n\nDear Linda,\n\nThree executive recruiters from Fortune 500 technology corporations viewed your profile and sent urgent direct messages regarding high-compensation Chief Information Security Officer positions.\n\nMessages expire in 24 hours:\n• \"Director of Global Threat Defense - Package: $380,000 + Equity\"\n• \"VP of Enterprise Security Architecture - Remote Opportunity\"\n\nTo review full employer messages and schedule confidential interviews, verify your LinkedIn corporate work email credentials:\n\n[ LOGIN TO VIEW RECRUITER INBOX ]\n\nLinkedIn Corporation, Sunnyvale, CA",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "messages-inbox@linkedin-corporatesecure.com", explanation: "Địa chỉ gửi đến từ tên miền giả mạo linkedin-corporatesecure.com, không phải tên miền chính thức linkedin.com." },
      { phrase: "LOGIN TO VIEW RECRUITER INBOX", explanation: "Liên kết câu mồi nhử nhấp vào trang đăng nhập giả để đánh cắp tài khoản LinkedIn và email doanh nghiệp." },
      { phrase: "Messages expire in 24 hours", explanation: "Bịa đặt quy tắc tin nhắn hết hạn sau 24 giờ để hối thúc nạn nhân." }
    ],
    vietnameseTranslation: "Mạng lưới Tuyển dụng LinkedIn\n\nChào Linda,\n\nBa nhà tuyển dụng cấp cao từ các tập đoàn công nghệ trong danh sách Fortune 500 đã xem hồ sơ của bạn và gửi tin nhắn trực tiếp về các vị trí Giám đốc An ninh Thông tin với đãi ngộ rất cao.\n\nTin nhắn sẽ hết hạn trong 24 giờ:\n• 'Giám đốc Phòng thủ Mối đe dọa Toàn cầu - Đãi ngộ: 380.000 USD + Cổ phần'\n• 'Phó Chủ tịch Kiến trúc An ninh Doanh nghiệp - Làm việc từ xa'\n\nĐể xem toàn bộ tin nhắn và lên lịch phỏng vấn bí mật, hãy xác thực thông tin tài khoản LinkedIn bằng email công ty của bạn:\n\n[ ĐĂNG NHẬP ĐỂ XEM HỘP THƯ TUYỂN DỤNG ]\n\nTập đoàn LinkedIn, Sunnyvale, CA",
    detailedExplanation: "Email LỪA ĐẢO (PHISHING) nhắm vào tâm lý cơ hội nghề nghiệp (Recruiter Baiting). Kẻ tấn công đưa ra mức lương hấp dẫn 380.000 USD để lừa chuyên gia bảo mật đăng nhập vào trang phishing mạo danh LinkedIn.",
    readingQuestion: {
      stem: "What bait does the email use to entice the recipient to click?",
      choices: [
        "High-salary executive job offers from Fortune 500 recruiters",
        "A notification that their corporate computer has been infected",
        "An invitation to an exclusive luxury golf tournament",
        "A free subscription to an online cybersecurity journal"
      ],
      answer: 0,
      explanation_vi: "Email dùng mức lương hấp dẫn: 'CISO openings... Package: $380,000 + Equity' từ các tập đoàn Fortune 500.",
      trap: "Bẫy máy tính bị nhiễm độc (computer infected) hay vé chơi golf (golf tournament)."
    },
    keyVocab: [
      { word: "recruiter", pos: "noun", meaning_vi: "chuyên viên tuyển dụng nhân sự", example: "Executive recruiters specialize in finding candidates for C-level roles." },
      { word: "compensation", pos: "noun", meaning_vi: "gói thù lao đãi ngộ (lương, thưởng)", example: "The company offers a comprehensive compensation and healthcare package." },
      { word: "confidential", pos: "adjective", meaning_vi: "bí mật, kín đáo", example: "Candidate interviews are conducted in confidential meeting rooms." }
    ]
  },
  {
    id: "phish-012",
    level: 2,
    sender: { name: "HexaTech Legal Affairs", email: "legal@hexatech.com" },
    recipient: "sales-leads@hexatech.com",
    date: "October 26, 2026 05:00 PM",
    subject: "Notice: Mandatory Non-Disclosure Agreement (NDA) Review for Q4 Partnerships",
    body: "Dear Sales Leads,\n\nAs we enter final contract negotiations with our prospective European partners, please ensure that all commercial discussions are preceded by an executed mutual Non-Disclosure Agreement (NDA).\n\nThe standardized 2026 NDA template is available in the contract repository on our internal legal portal. Sales executives are not authorized to alter liability limitations or intellectual property provisions without prior written clearance from legal counsel.\n\nIf prospective clients request amendments to standard terms, please submit the redlined draft through the internal ticket queue at Ext. 312.\n\nThank you for safeguarding corporate proprietary assets,\nOffice of the General Counsel",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Kính gửi các Trưởng nhóm Kinh doanh,\n\nKhi chúng ta bước vào giai đoạn đàm phán hợp đồng cuối cùng với các đối tác châu Âu, vui lòng đảm bảo mọi cuộc thảo luận thương mại đều phải được tiến hành sau khi đã ký Thỏa thuận Bảo mật Thông tin (NDA) song phương.\n\nMẫu NDA chuẩn năm 2026 đã có sẵn trong kho hợp đồng trên cổng pháp chế nội bộ. Chuyên viên kinh doanh không được phép tự ý thay đổi các điều khoản giới hạn trách nhiệm hoặc sở hữu trí tuệ nếu chưa có sự phê chuẩn bằng văn bản từ luật sư công ty.\n\nNếu khách hàng yêu cầu sửa đổi điều khoản, vui lòng gửi bản thảo chỉnh sửa qua hệ thống yêu cầu nội bộ tại máy lẻ 312.\n\nCảm ơn các bạn đã bảo vệ tài sản sở hữu trí tuệ của tập đoàn,\nVăn phòng Cố vấn Pháp lý",
    detailedExplanation: "Email HỢP LỆ (SAFE): Email nội bộ chuẩn chỉnh từ legal@hexatech.com hướng dẫn quy trình bảo mật pháp lý (NDA) cho đội ngũ bán hàng, không có liên kết lạ, số máy lẻ nội bộ 312 rõ ràng.",
    readingQuestion: {
      stem: "What are sales executives prohibited from doing on their own?",
      choices: [
        "Modifying liability limits or intellectual property terms in NDAs",
        "Contacting prospective European clients directly by email",
        "Attending trade conferences outside the United States",
        "Offering standard volume discounts without CEO approval"
      ],
      answer: 0,
      explanation_vi: "Đoạn 2 nêu rõ: 'Sales executives are not authorized to alter liability limitations or intellectual property provisions without prior written clearance'.",
      trap: "Bẫy cấm liên hệ khách hàng (prohibited from contacting clients)."
    },
    keyVocab: [
      { word: "proprietary", pos: "adjective", meaning_vi: "độc quyền, thuộc sở hữu riêng", example: "Trade secrets and proprietary software algorithms are protected by NDAs." },
      { word: "provisions", pos: "noun (plural)", meaning_vi: "các điều khoản trong văn bản luật/hợp đồng", example: "The contract provisions state that disputes must be resolved in Texas." },
      { word: "redlined", pos: "adjective", meaning_vi: "được đánh dấu chỉnh sửa (trong văn bản hợp đồng)", example: "Legal counsel reviewed the redlined agreement before final signature." }
    ]
  },

  // ===================================================================
  // LEVEL 3: ADVANCED (Invoice Fraud, Wire Transfer Redirection, CEO Spoof)
  // ===================================================================
  {
    id: "phish-013",
    level: 3,
    sender: { name: "Vanguard Microelectronics Billing", email: "billing@vanguard-microelectronics.org" },
    recipient: "accounts-payable@hexatech.com",
    date: "October 27, 2026 10:00 AM",
    subject: "RE: Overdue Invoice #VM-9042 - Urgent Banking Remittance Details Update",
    body: "Dear Accounts Payable Team,\n\nWe refer to outstanding invoice #VM-9042 for semiconductor components delivered on October 12 in the amount of $48,600.00.\n\nPlease be advised that due to an ongoing annual financial audit and banking platform modernization, our standard wire receiving account at Chase Bank has been temporarily frozen. Effective immediately, all remittances must be wired to our secondary corporate escrow account:\n\nBeneficiary Bank: Cayman Islands Offshore Commerce Bank\nAccount Name: Vanguard Global Logistics Trust LLC\nAccount Number: 9940-2219-4482\nRouting / SWIFT: CIOCBKY33\n\nPlease confirm transmission of the wire payment today to avoid automatic shipment holds on pending deliveries.\n\nSincerely,\nBeatrice Vance\nVice President of Strategic Accounts",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "billing@vanguard-microelectronics.org", explanation: "Tên miền .org trong khi công ty đối tác là công ty thương mại .com hoặc .co.uk." },
      { phrase: "Cayman Islands Offshore Commerce Bank", explanation: "Yêu cầu chuyển tiền gấp vào tài khoản ngân hàng hải ngoại (Offshore Bank) hoàn toàn khác với tài khoản quen thuộc trong hợp đồng (Vendor Email Compromise / Invoice Fraud)." },
      { phrase: "account at Chase Bank has been temporarily frozen", explanation: "Bịa lý do tài khoản cũ bị đóng băng để thuyết phục nạn nhân đổi tài khoản nhận tiền." },
      { phrase: "avoid automatic shipment holds on pending deliveries", explanation: "Đe dọa dừng giao hàng để ép kế toán chuyển tiền ngay mà không gọi điện xác minh." }
    ],
    vietnameseTranslation: "Kính gửi Phòng Kế toán Thanh toán,\n\nChúng tôi xin đề cập tới hóa đơn còn tồn đọng #VM-9042 cho lô linh kiện bán dẫn giao ngày 12 tháng 10 trị giá 48.600 USD.\n\nXin lưu ý rằng do đang trong đợt kiểm toán tài chính hàng năm và nâng cấp hệ thống ngân hàng, tài khoản nhận tiền quen thuộc của chúng tôi tại Chase Bank đang tạm thời bị đóng băng. Có hiệu lực ngay lập tức, mọi khoản thanh toán phải chuyển vào tài khoản phụ sau:\n\nNgân hàng thụ hưởng: Cayman Islands Offshore Commerce Bank\nTên tài khoản: Vanguard Global Logistics Trust LLC\nSố tài khoản: 9940-2219-4482\nMã SWIFT: CIOCBKY33\n\nVui lòng xác nhận lệnh chuyển tiền trong ngày hôm nay để tránh việc tự động dừng giao các đơn hàng tiếp theo.\n\nTrân trọng,\nBeatrice Vance",
    detailedExplanation: "Đây là vụ tấn công lừa đảo hóa đơn (Vendor Email Compromise - Business Email Compromise). Kẻ gian mạo danh đối tác cung cấp linh kiện lớn, viện lý do tài khoản ngân hàng cũ bị khóa để lừa phòng kế toán chuyển 48.600 USD vào tài khoản hải ngoại tại Cayman Islands.",
    readingQuestion: {
      stem: "What change does the sender request regarding the invoice payment?",
      choices: [
        "Sending the money to a new offshore bank account in the Cayman Islands",
        "Dividing the payment into four separate monthly installments",
        "Applying a late payment surcharge of twenty percent",
        "Paying in foreign European currency instead of US dollars"
      ],
      answer: 0,
      explanation_vi: "Email yêu cầu đổi ngân hàng nhận tiền sang tài khoản hải ngoại: 'Beneficiary Bank: Cayman Islands Offshore Commerce Bank'.",
      trap: "Bẫy chia tiền thành 4 kỳ (monthly installments) hoặc đổi ngoại tệ."
    },
    keyVocab: [
      { word: "remittance", pos: "noun", meaning_vi: "khoản tiền thanh toán chuyển khoản", example: "Please send remittance confirmation to our accounts receivable clerk." },
      { word: "beneficiary", pos: "noun", meaning_vi: "người hoặc tổ chức thụ hưởng tiền", example: "Verify the legal beneficiary name before approving large international wires." },
      { word: "escrow", pos: "noun", meaning_vi: "tài khoản ủy thác trung gian tạm giữ", example: "Funds are deposited in escrow until both parties fulfill contract terms." }
    ]
  },
  {
    id: "phish-014",
    level: 3,
    sender: { name: "HexaTech Finance & Internal Audit", email: "finance@hexatech.com" },
    recipient: "accounts-payable@hexatech.com",
    date: "October 27, 2026 11:30 AM",
    subject: "MANDATORY PROTOCOL: Multi-Person Verification Required for Supplier Bank Account Updates",
    body: "Attention All Finance and Accounting Personnel,\n\nIn accordance with updated ISO 27001 financial risk controls, all staff members handling vendor payments are reminded of our strict Two-Person Dual Control mandate:\n\n1. UNDER NO CIRCUMSTANCES should vendor banking remittance details be altered based solely on an email request, regardless of sender authority.\n2. Any request to update supplier account numbers or routing details must be verified independently by placing a voice telephone call to the vendor's primary executive officer using contact numbers listed in our executed Master Services Agreement (NOT phone numbers provided in the email).\n3. Wire transfers exceeding $25,000 to newly designated accounts require written co-authorization from both the Treasury Controller and General Counsel.\n\nCompliance with these verification steps is legally binding.\n\nOffice of the Chief Financial Officer",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Chú ý Toàn thể Nhân viên Kế toán và Tài chính,\n\nCăn cứ theo quy trình kiểm soát rủi ro tài chính chuẩn ISO 27001, toàn bộ nhân sự phụ trách chi trả cho nhà cung cấp phải tuân thủ nghiêm ngặt quy chế Kiểm soát Kép (Hai người cùng duyệt):\n\n1. TUYỆT ĐỐI KHÔNG ĐƯỢC PHÉP thay đổi thông tin tài khoản ngân hàng của nhà cung cấp chỉ dựa trên yêu cầu qua email, bất kể cấp bậc người gửi.\n2. Mọi yêu cầu thay đổi tài khoản nhận tiền phải được xác minh độc lập bằng cách gọi điện thoại trực tiếp cho đại diện nhà cung cấp theo số điện thoại ghi trong Hợp đồng gốc (KHÔNG gọi theo số ghi trong email yêu cầu).\n3. Các lệnh chuyển khoản trên 25.000 USD vào tài khoản mới cập nhật bắt buộc phải có chữ ký đồng phê duyệt của cả Kiểm soát viên Ngân quỹ và Cố vấn Pháp chế.\n\nViệc tuân thủ các bước này có tính chất bắt buộc về mặt pháp lý.\n\nVăn phòng Giám đốc Tài chính (CFO)",
    detailedExplanation: "Email HỢP LỆ (SAFE): Đây là thông báo chính sách phòng chống lừa đảo hóa đơn từ ban tài chính nội bộ finance@hexatech.com. Nội dung nêu rõ nguyên tắc không bao giờ đổi thông tin tài khoản chỉ qua email và bắt buộc gọi điện thoại xác minh theo số trong hợp đồng cũ.",
    readingQuestion: {
      stem: "How must staff verify a vendor's request to change banking details?",
      choices: [
        "By phoning the vendor using the number stored in the original contract",
        "By asking the vendor to send a certified fax copy of their bank statement",
        "By replying to the incoming email with a confirmation password",
        "By verifying the vendor's profile on commercial social media platforms"
      ],
      answer: 0,
      explanation_vi: "Mục 2 quy định: 'placing a voice telephone call to the vendor's primary executive officer using contact numbers listed in our executed Master Services Agreement'.",
      trap: "Bẫy gọi theo số ghi trong email (đây là bẫy phổ biến vì kẻ lừa đảo sẽ nghe máy)."
    },
    keyVocab: [
      { word: "remittance", pos: "noun", meaning_vi: "khoản tiền chuyển khoản thanh toán", example: "Remittance details must be verified by two senior controllers." },
      { word: "co-authorization", pos: "noun", meaning_vi: "sự đồng phê chuẩn từ hai bên", example: "Expenditures over $50,000 require co-authorization from the CFO." },
      { word: "binding", pos: "adjective", meaning_vi: "có tính ràng buộc về mặt pháp lý", example: "Arbitration decisions are legally binding on all signatories." }
    ]
  },
  {
    id: "phish-015",
    level: 3,
    sender: { name: "HexaTech Cloud Security Automation", email: "alerts@cloudsecurity-hexatech.info" },
    recipient: "devops-leads@hexatech.com",
    date: "October 28, 2026 01:15 AM",
    subject: "CRITICAL ALERT: AWS Root API Keys Compromised on Public GitHub Repository",
    body: "HexaTech Cloud Threat Intelligence Alert\n\nIncident ID: AWS-SEC-2026-992\nSeverity: CRITICAL EMERGENCY\n\nAt 01:08 UTC, automated code monitoring scanners discovered that your AWS Production Root Access Key and Secret Key were accidentally committed to a public GitHub repository:\n\nRepository: github.com/hexatech-staging/payment-gateway-v2\nCommitted Key: AKIA************4F8A\n\nTo prevent active cryptojacking and unauthorized database deletion, you MUST grant emergency automated rotation permissions immediately by authenticating with your master AWS credentials:\n\n[ AUTHORIZE EMERGENCY AWS ROTATION ]\n\nIf you do not authorize immediate automated rotation within 10 minutes, our automation script will shut down all corporate cloud clusters permanently.",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "alerts@cloudsecurity-hexatech.info", explanation: "Đuôi tên miền .info rẻ tiền thường được tội phạm mạng mua để gửi email lừa đảo mạo danh hệ thống bảo mật." },
      { phrase: "AUTHORIZE EMERGENCY AWS ROTATION", explanation: "Đường link dẫn đến trang giả mạo trang quản trị AWS để chiếm đoạt tài khoản đám mây gốc." },
      { phrase: "shut down all corporate cloud clusters permanently", explanation: "Đe dọa xóa sạch máy chủ đám mây vĩnh viễn trong 10 phút để gây hoảng sợ cực độ." }
    ],
    vietnameseTranslation: "Cảnh báo Tình báo Mối đe dọa Đám mây HexaTech\n\nMã sự cố: AWS-SEC-2026-992\nMức độ: CỰC KỲ KHẨN CẤP\n\nLúc 01:08 UTC, công cụ quét mã tự động phát hiện rằng Khóa truy cập AWS Root của bạn đã bị vô tình đẩy lên kho mã nguồn công khai trên GitHub:\n\nKho lưu trữ: github.com/hexatech-staging/payment-gateway-v2\nKhóa bị lộ: AKIA************4F8A\n\nĐể ngăn chặn việc đào tiền ảo trái phép và xóa dữ liệu, bạn BẮT BUỘC phải cấp quyền thu hồi tự động khẩn cấp bằng cách đăng nhập tài khoản AWS gốc:\n\n[ CẤP QUYỀN THU HỒI KHÓA AWS KHẨN CẤP ]\n\nNếu bạn không cấp quyền trong vòng 10 phút, kịch bản tự động sẽ tắt toàn bộ máy chủ đám mây của công ty vĩnh viễn.",
    detailedExplanation: "Email LỪA ĐẢO (PHISHING) nhắm vào đội ngũ kỹ sư DevOps. Kẻ gian đánh trúng nỗi sợ lớn nhất của dân IT: 'lộ AWS Root Key lên GitHub'. Domain .info giả mạo, ép đăng nhập bằng nút bấm trong 10 phút nếu không sẽ dọa sập toàn bộ hệ thống.",
    readingQuestion: {
      stem: "What alleged security mistake does the email claim was committed?",
      choices: [
        "AWS production root access keys were committed to a public repository.",
        "An unencrypted backup tape was lost during shipping.",
        "A physical server room door was left unlocked over the weekend.",
        "An unauthorized external monitor was connected to a terminal."
      ],
      answer: 0,
      explanation_vi: "Đoạn 1 nêu: 'AWS Production Root Access Key and Secret Key were accidentally committed to a public GitHub repository'.",
      trap: "Bẫy mất băng từ sao lưu (backup tape lost) hoặc quên khóa cửa."
    },
    keyVocab: [
      { word: "cryptojacking", pos: "noun", meaning_vi: "chiếm đoạt tài nguyên máy chủ để đào tiền ảo lén", example: "Unauthorized cloud instances were spawned during the cryptojacking attack." },
      { word: "compromised", pos: "adjective", meaning_vi: "bị xâm phạm, bị lộ lọt bí mật", example: "Change all passwords immediately if a workstation is compromised." },
      { word: "rotation", pos: "noun", meaning_vi: "sự đổi mới định kỳ mã khóa/mật khẩu", example: "Automated cryptographic key rotation reduces the window of vulnerability." }
    ]
  },
  {
    id: "phish-016",
    level: 3,
    sender: { name: "HexaTech Cloud Engineering", email: "cloud-ops@hexatech.com" },
    recipient: "devops-all@hexatech.com",
    date: "October 28, 2026 09:00 AM",
    subject: "Notice: Quarterly AWS IAM Role and Access Key Rotation Window (Nov 1 - Nov 5)",
    body: "Good morning DevOps and Engineering Teams,\n\nThis is an advance notice that our scheduled quarterly AWS Identity and Access Management (IAM) key rotation window will commence on Friday, November 1, and conclude on Wednesday, November 5.\n\nIn accordance with corporate cloud architecture guidelines:\n1. All service account programmatic access keys older than 90 days must be retired and replaced with temporary IAM roles or new cryptographic key pairs.\n2. Engineering leads must log in through our corporate Single Sign-On (SSO) gateway at https://sso.hexatech.com to review active service roles.\n3. Keys that remain unrotated by November 6 at 18:00 UTC will be automatically deactivated by the cloud security daemon.\n\nPlease refer to the Cloud Architecture Wiki for step-by-step Terraform automation scripts.\n\nBest regards,\nNathaniel Cruz, Cloud Security Architect",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Chào đội ngũ Kỹ thuật và DevOps,\n\nĐây là thông báo trước về đợt xoay vòng khóa truy cập AWS IAM định kỳ hàng quý sẽ bắt đầu từ thứ Sáu ngày 1 tháng 11 đến thứ Tư ngày 5 tháng 11.\n\nTheo quy chuẩn kiến trúc đám mây công ty:\n1. Mọi khóa truy cập dịch vụ trên 90 ngày phải được thu hồi và thay thế bằng vai trò IAM tạm thời hoặc cặp khóa mật mã mới.\n2. Trưởng nhóm kỹ thuật phải đăng nhập qua cổng Đăng nhập một lần (SSO) tại https://sso.hexatech.com để rà soát các vai trò đang hoạt động.\n3. Các khóa chưa được đổi trước 18:00 UTC ngày 6/11 sẽ bị tiến trình an ninh tự động vô hiệu hóa.\n\nVui lòng xem tài liệu Wiki Kiến trúc Đám mây để lấy các kịch bản tự động hóa Terraform.\n\nTrân trọng,\nNathaniel Cruz, Kiến trúc sư An ninh Đám mây",
    detailedExplanation: "Email HỢP LỆ (SAFE): Thông báo kỹ thuật định kỳ chuẩn xác từ cloud-ops@hexatech.com. Cung cấp đường dẫn SSO chính thức https://sso.hexatech.com, lịch trình cụ thể kéo dài 5 ngày, không có lời đe dọa giật gân, hướng dẫn rõ ràng qua tài liệu nội bộ Wiki.",
    readingQuestion: {
      stem: "What will happen to service account keys that are not rotated by November 6 at 18:00 UTC?",
      choices: [
        "They will be automatically deactivated by an automated security daemon.",
        "They will incur an automatic financial penalty charged to the department.",
        "The associated AWS virtual machines will be completely formatted.",
        "The software engineers will be suspended from the corporate network."
      ],
      answer: 0,
      explanation_vi: "Mục 3 ghi rõ: 'Keys that remain unrotated... will be automatically deactivated by the cloud security daemon'.",
      trap: "Bẫy xóa sạch máy ảo (machines formatted) hoặc phạt tiền (financial penalty)."
    },
    keyVocab: [
      { word: "deactivated", pos: "verb (past)", meaning_vi: "bị vô hiệu hóa, ngưng kích hoạt", example: "Dormant user accounts are automatically deactivated after ninety days." },
      { word: "programmatic", pos: "adjective", meaning_vi: "thuộc về dòng lệnh/chương trình tự động", example: "Use programmatic API tokens instead of interactive user passwords." },
      { word: "commence", pos: "verb", meaning_vi: "bắt đầu, khởi động", example: "The scheduled maintenance window will commence at midnight." }
    ]
  },
  {
    id: "phish-017",
    level: 3,
    sender: { name: "HexaTech Legal Compliance", email: "compliance-notice@hexatech-legal.com" },
    recipient: "executives@hexatech.com",
    date: "October 29, 2026 02:40 PM",
    subject: "SUBPOENA NOTICE: Federal Trade Commission Investigation - Strict Confidentiality",
    body: "OFFICIAL LEGAL NOTICE\nCase File: FTC-CIV-2026-88019\nPrivileged and Confidential Attorney-Client Communication\n\nPlease be advised that HexaTech Innovations Corp. has been served with an emergency civil investigative subpoena from the Federal Trade Commission regarding corporate cloud data governance.\n\nYou have been designated as a key custodian of relevant email correspondence and financial records. Under federal law, you are strictly prohibited from altering, deleting, or discussing these documents with colleagues.\n\nTo view the sealed court order and your customized document preservation list, you must decrypt the legal summons using your domain credentials on our outside counsel's secure server:\n\n[ ACCESS SEALED FTC LEGAL SUMMONS ]\n\nFailure to comply with this federal preservation order constitutes criminal contempt of court.\n\nOffice of External Legal Counsel",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "compliance-notice@hexatech-legal.com", explanation: "Tên miền hexatech-legal.com là tên miền đăng ký giả mạo bên ngoài, không phải hexatech.com nội bộ." },
      { phrase: "ACCESS SEALED FTC LEGAL SUMMONS", explanation: "Liên kết câu mồi nhử tinh vi đòi đăng nhập thông tin chứng thực để xem trát hầu tòa giả mạo." },
      { phrase: "strictly prohibited from altering, deleting, or discussing these documents with colleagues", explanation: "Chiêu trò cô lập nạn nhân (Gagging / Isolation) bằng cách dọa vi phạm pháp luật nếu trao đổi với đồng nghiệp hoặc sếp." }
    ],
    vietnameseTranslation: "THÔNG BÁO PHÁP LÝ CHÍNH THỨC\nHồ sơ vụ án: FTC-CIV-2026-88019\nThông tin Đặc quyền và Bảo mật Luật sư - Khách hàng\n\nXin lưu ý rằng Công ty HexaTech Innovations đã nhận được trát điều tra dân sự khẩn cấp từ Ủy ban Thương mại Liên bang (FTC) liên quan đến quản trị dữ liệu đám mây.\n\nBạn đã được chỉ định là người lưu giữ tài liệu trọng yếu về các thư từ và chứng từ tài chính liên quan. Theo luật liên bang, bạn tuyệt đối bị cấm sửa đổi, xóa bỏ hoặc thảo luận các tài liệu này với đồng nghiệp.\n\nĐể xem lệnh niêm phong của tòa án và danh sách tài liệu cần bảo toàn, bạn phải giải mã trát triệu tập bằng tài khoản công ty trên máy chủ của luật sư bên ngoài:\n\n[ TRUY CẬP TRÁT TRIỆU TẬP FTC ĐƯỢC NIÊM PHONG ]\n\nViệc không tuân thủ lệnh bảo toàn này sẽ cấu thành tội khinh thường tòa án.\n\nVăn phòng Cố vấn Pháp lý Bên ngoài",
    detailedExplanation: "Email LỪA ĐẢO (PHISHING) cấp độ cao (Subpoena Scare / Whaling). Kẻ gian giả mạo trát triệu tập của cơ quan tư pháp liên bang FTC nhằm vào các quản lý cấp cao. Tên miền hexatech-legal.com giả tạo, cấm nạn nhân nói chuyện với đồng nghiệp và bắt đăng nhập để cướp tài khoản quản trị.",
    readingQuestion: {
      stem: "What legal consequence does the email warn against if the recipient fails to comply?",
      choices: [
        "Criminal contempt of court",
        "An immediate fifty percent reduction in salary",
        "Revocation of their corporate driver's license",
        "Automatic forfeiture of company stock options"
      ],
      answer: 0,
      explanation_vi: "Đoạn cuối đe dọa: 'Failure to comply with this federal preservation order constitutes criminal contempt of court'.",
      trap: "Bẫy trừ lương (salary reduction) hoặc tịch thu cổ phiếu (forfeiture of stock)."
    },
    keyVocab: [
      { word: "subpoena", pos: "noun", meaning_vi: "trát triệu tập hoặc trát đòi tài liệu của tòa án", example: "The enterprise received a federal subpoena to produce email archives." },
      { word: "custodian", pos: "noun", meaning_vi: "người chịu trách nhiệm lưu giữ tài liệu chứng cứ", example: "Department managers acted as legal custodians during the audit." },
      { word: "contempt", pos: "noun", meaning_vi: "tội khinh thường (tòa án, mệnh lệnh pháp luật)", example: "Refusing to comply with a judicial subpoena results in contempt of court." }
    ]
  },
  {
    id: "phish-018",
    level: 3,
    sender: { name: "HexaTech Corporate Communications", email: "corp-comms@hexatech.com" },
    recipient: "all-employees@hexatech.com",
    date: "October 30, 2026 09:15 AM",
    subject: "Company Milestone: HexaTech Named Leader in Gartner Cloud Security Magic Quadrant",
    body: "Dear HexaTech Team,\n\nWe are exceptionally pleased to share that Gartner Research has officially designated HexaTech as a \"Leader\" in the 2026 Magic Quadrant for Cloud Workload Protection Platforms.\n\nThis prestigious industry recognition evaluates market leaders based on completeness of vision and ability to execute. Our advancements in automated runtime telemetry, zero-trust network microsegmentation, and frictionless API deployment were highlighted as standout differentiators.\n\nThis achievement belongs to every engineer, product manager, and customer support specialist in our organization. You can read the full press release and download an excerpt of the research report on our public website at https://www.hexatech.com/news/gartner-leader-2026.\n\nThank you for your tireless dedication to making enterprise cloud infrastructure secure,\nDavid Kim, Chief Executive Officer",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Thân gửi toàn thể đội ngũ HexaTech,\n\nChúng tôi vô cùng tự hào thông báo rằng tổ chức nghiên cứu Gartner đã chính thức vinh danh HexaTech là 'Doanh nghiệp Dẫn đầu' (Leader) trong Báo cáo Magic Quadrant 2026 về Nền tảng Bảo vệ Máy chủ Đám mây.\n\nSự công nhận danh giá này đánh giá các doanh nghiệp hàng đầu dựa trên tầm nhìn hoàn thiện và năng lực thực thi. Các tiến bộ của chúng ta về dữ liệu đo từ xa, phân vùng mạng zero-trust và triển khai API mượt mà đã được nêu bật là các lợi thế cạnh tranh vượt trội.\n\nThành tựu này thuộc về mọi kỹ sư, nhà quản lý sản phẩm và chuyên viên chăm sóc khách hàng trong công ty. Bạn có thể đọc toàn văn thông cáo và tải báo cáo trên trang công khai tại https://www.hexatech.com/news/gartner-leader-2026.\n\nCảm ơn sự tận tụy không ngừng của các bạn,\nDavid Kim, Tổng Giám đốc",
    detailedExplanation: "Email HỢP LỆ (SAFE): Thông báo tin vui nội bộ chuẩn xác từ corp-comms@hexatech.com có chữ ký của CEO. Liên kết trỏ thẳng tới website chính thức của công ty https://www.hexatech.com, không yêu cầu nhập thông tin mật.",
    readingQuestion: {
      stem: "What achievement is celebrated in the announcement?",
      choices: [
        "HexaTech was named a Leader in Gartner's 2026 Cloud Security report.",
        "The company completed an initial public offering on the stock market.",
        "HexaTech acquired a major regional competitor in Western Europe.",
        "The development team launched a new smartphone hardware model."
      ],
      answer: 0,
      explanation_vi: "Đoạn 1 nêu: 'designated HexaTech as a Leader in the 2026 Magic Quadrant for Cloud Workload Protection Platforms'.",
      trap: "Bẫy IPO lên sàn chứng khoán hoặc thâu tóm công ty đối thủ (acquired a competitor)."
    },
    keyVocab: [
      { word: "prestigious", pos: "adjective", meaning_vi: "danh giá, uy tín cao", example: "Winning the prestigious industry award bolstered brand reputation." },
      { word: "differentiator", pos: "noun", meaning_vi: "yếu tố tạo nên sự khác biệt vượt trội", example: "Low latency and automated encryption are key product differentiators." },
      { word: "dedication", pos: "noun", meaning_vi: "sự tận tụy, cống hiến hết mình", example: "We celebrated the engineering team's tireless dedication to product quality." }
    ]
  },

  // ===================================================================
  // LEVEL 4: EXPERT (Typosquatting, Fake MFA Push, Malicious QR Codes)
  // ===================================================================
  {
    id: "phish-019",
    level: 4,
    sender: { name: "HexaTech Okta Identity Cloud", email: "security-push@hexatech.co" },
    recipient: "kevin.bauer@hexatech.com",
    date: "October 31, 2026 08:14 AM",
    subject: "Action Required: Re-bind Your Okta Verify Multi-Factor Device",
    body: "HexaTech Single Sign-On Security Service\n\nSystem Event: Hardware Token Expiration Detected\nUser: kevin.bauer@hexatech.com\n\nOur automated identity engine detected that your enrolled Okta Verify mobile authenticator token will expire in 2 hours. To maintain continuous access to corporate Git repositories, Slack channels, and VPN gateways, you must scan the administrative QR code below using your mobile phone camera:\n\n[ QR CODE IMAGE EMBEDDED: scan-auth-hexatech-mfa-token ]\n\nOnce scanned, confirm the six-digit push notification on your mobile browser.\n\nDo not share this QR code with coworkers as it contains encrypted private cryptographic seed credentials.\n\nHexaTech Identity Administration",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "security-push@hexatech.co", explanation: "Tên miền typosquatting cực kỳ tinh vi: 'hexatech.co' (.co thay vì .com)." },
      { phrase: "scan the administrative QR code below using your mobile phone camera", explanation: "Kỹ thuật tấn công Quishing (QR Code Phishing) lợi dụng camera điện thoại cá nhân quét mã QR để vượt qua các bộ lọc bảo vệ email trên máy tính." },
      { phrase: "authenticator token will expire in 2 hours", explanation: "Áp lực thời gian 2 tiếng nhằm thúc ép nạn nhân lấy điện thoại ra quét mã QR ngay lập tức." }
    ],
    vietnameseTranslation: "Dịch vụ Bảo mật Đăng nhập Một lần HexaTech\n\nSự kiện hệ thống: Phát hiện mã xác thực phần cứng sắp hết hạn\nNgười dùng: kevin.bauer@hexatech.com\n\nHệ thống định danh tự động phát hiện mã xác thực Okta Verify trên điện thoại của bạn sẽ hết hạn sau 2 giờ. Để duy trì quyền truy cập kho mã nguồn Git, kênh Slack và VPN, bạn phải quét mã QR quản trị bên dưới bằng camera điện thoại:\n\n[ HÌNH ẢNH MÃ QR NHÚNG ]\n\nSau khi quét, hãy xác nhận thông báo 6 số trên trình duyệt điện thoại.\n\nKhông chia sẻ mã QR này vì nó chứa khóa hạt giống mật mã riêng tư.\n\nBan Quản trị Định danh HexaTech",
    detailedExplanation: "Email LỪA ĐẢO (PHISHING) cấp độ chuyên gia sử dụng kỹ thuật Quishing (QR Phishing) kết hợp tên miền giả mạo hexatech.co (.co thay vì .com). Khi người dùng quét mã QR bằng điện thoại, link dẫn tới trang đăng nhập giả trên trình duyệt điện thoại (nơi không có các tiện ích bảo vệ của máy tính công ty) để cướp phiên 2FA.",
    readingQuestion: {
      stem: "What method does the email instruct the recipient to use to update their authenticator?",
      choices: [
        "Scanning an embedded QR code with a mobile phone camera",
        "Entering an SMS confirmation code received on their desk phone",
        "Calling the identity operations center helpdesk hotline",
        "Plugging an encrypted USB token into their desktop computer"
      ],
      answer: 0,
      explanation_vi: "Đoạn 2 nêu rõ: 'scan the administrative QR code below using your mobile phone camera'.",
      trap: "Bẫy nhận mã SMS hoặc cắm USB token."
    },
    keyVocab: [
      { word: "authenticator", pos: "noun", meaning_vi: "ứng dụng/thiết bị tạo mã xác thực hai lớp", example: "Install the corporate authenticator app on your enrolled smartphone." },
      { word: "seed", pos: "noun", meaning_vi: "chuỗi hạt giống khởi tạo thuật toán mã hóa", example: "Keep cryptographic seed values strictly protected from exposure." },
      { word: "enrolled", pos: "adjective", meaning_vi: "đã được đăng ký chính thức vào hệ thống", example: "Only enrolled mobile devices can access internal staging databases." }
    ]
  },
  {
    id: "phish-020",
    level: 4,
    sender: { name: "HexaTech Threat Intelligence", email: "threat-intel@hexatech.com" },
    recipient: "secops-team@hexatech.com",
    date: "October 31, 2026 11:00 AM",
    subject: "Threat Advisory: Rise in Quishing (QR-Code Phishing) Attacks Across Tech Sector",
    body: "Good morning Security Analysts,\n\nOur Threat Intelligence Desk has observed a 140% surge in QR-code phishing (Quishing) campaigns targeting enterprise technology firms over the past month.\n\nAttack Methodology:\n1. Threat actors send emails claiming MFA token expiration or urgent HR benefit enrollment.\n2. Instead of traditional hyperlinks, the email embeds a high-density QR code to evade conventional email gateway URL sandboxes.\n3. When scanned with a personal mobile device, the victim is redirected to an adversary-in-the-middle (AiTM) reverse proxy that captures session cookies.\n\nRecommended Countermeasures:\n• Enforce FIDO2 WebAuthn hardware security keys which are mathematically immune to reverse-proxy credential phishing.\n• Educate staff never to scan QR codes received via email.\n\nReview the full IOC list on our internal wiki at https://wiki.hexatech.com/infosec/quishing-intel.\n\nStay sharp,\nDavid O'Connor, Senior Threat Researcher",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Chào các chuyên viên phân tích an ninh,\n\nBộ phận Tình báo Mối đe dọa ghi nhận sự gia tăng 140% các chiến dịch lừa đảo bằng mã QR (Quishing) nhắm vào các công ty công nghệ trong tháng qua.\n\nPhương thức tấn công:\n1. Kẻ xấu gửi email viện cớ mã MFA sắp hết hạn hoặc đăng ký phúc lợi gấp.\n2. Thay vì link thông thường, email chèn mã QR để né tránh các hệ thống lọc và sandbox đường dẫn truyền thống.\n3. Khi quét bằng điện thoại, nạn nhân bị chuyển hướng đến máy chủ reverse proxy AiTM để đánh cắp session cookie.\n\nBiện pháp phòng vệ khuyến nghị:\n• Triển khai khóa bảo mật phần cứng FIDO2 WebAuthn có khả năng miễn nhiễm với hình thức lừa đảo qua proxy.\n• Đào tạo nhân viên tuyệt đối không quét mã QR nhận qua email.\n\nXem danh sách IOC đầy đủ tại https://wiki.hexatech.com/infosec/quishing-intel.\n\nTrân trọng,\nDavid O'Connor, Chuyên viên Nghiên cứu Mối đe dọa Cao cấp",
    detailedExplanation: "Email HỢP LỆ (SAFE): Bản tin cảnh báo an ninh nội bộ cực kỳ chuyên sâu từ threat-intel@hexatech.com. Cung cấp kiến thức về phương thức tấn công Quishing và khuyến nghị giải pháp FIDO2, liên kết trỏ về wiki nội bộ chính thức https://wiki.hexatech.com.",
    readingQuestion: {
      stem: "Why do threat actors utilize QR codes instead of traditional text links according to the advisory?",
      choices: [
        "To bypass automated email gateway URL sandboxes and security filters",
        "Because QR codes allow larger file attachments to be sent",
        "To save bandwidth when sending emails across international networks",
        "Because QR codes automatically install malware without user permission"
      ],
      answer: 0,
      explanation_vi: "Mục 2 nêu rõ: 'embeds a high-density QR code to evade conventional email gateway URL sandboxes'.",
      trap: "Bẫy tiết kiệm băng thông (save bandwidth) hay mã QR tự động cài virus (không đúng kỹ thuật)."
    },
    keyVocab: [
      { word: "evade", pos: "verb", meaning_vi: "né tránh, lách qua bộ lọc kiểm tra", example: "Polymorphic malware alters its signature to evade detection." },
      { word: "adversary", pos: "noun", meaning_vi: "kẻ đối đầu, kẻ tấn công", example: "Defenders study adversary techniques to harden infrastructure." },
      { word: "countermeasure", pos: "noun", meaning_vi: "biện pháp đối phó, phòng thủ", example: "Implementing multi-factor authentication is an effective countermeasure." }
    ]
  },
  {
    id: "phish-021",
    level: 4,
    sender: { name: "HexaTech Service Desk", email: "servicedesk@hexatech.com" },
    recipient: "daniel.webster@hexatech.com",
    date: "November 1, 2026 01:25 PM",
    subject: "Security Alert: Verify Your Active Directory Login from Moscow, Russia (IP: 185.220.101.4)",
    body: "HexaTech Identity and Access Protection\n\nSecurity Event: Unusual Login Location Detected\nAccount: daniel.webster@hexatech.com\nLocation: Moscow, Russian Federation\nTimestamp: November 1, 2026 at 01:21 PM UTC\nDevice: Windows 11 / Chrome 129\n\nOur automated security sentinel detected a successful authentication attempt from an anomalous geographic region.\n\nDid you authorize this login?\n\n[ YES, THIS WAS ME ]                [ NO, DENY AND SECURE ACCOUNT ]\n\nIf you click \"NO, DENY AND SECURE ACCOUNT\", our automated security broker will immediately terminate the rogue session and prompt you to set a new cryptographic password.",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "NO, DENY AND SECURE ACCOUNT", explanation: "Cả hai nút 'YES' và 'NO' đều trỏ về cùng một liên kết máy chủ Adversary-in-the-Middle (AiTM) để thu thập thông tin đăng nhập mới của người dùng khi họ hoảng loạn bấm 'Deny'." },
      { phrase: "Unusual Login Location Detected", explanation: "Lợi dụng tâm lý sợ hãi bị hacker Nga (Moscow, Russia) xâm nhập tài khoản để ép người dùng bấm nút xác thực giả mạo." }
    ],
    vietnameseTranslation: "Hệ thống Bảo vệ Định danh và Truy cập HexaTech\n\nSự kiện an ninh: Phát hiện đăng nhập từ vị trí bất thường\nTài khoản: daniel.webster@hexatech.com\nVị trí: Moscow, Liên bang Nga\nThời gian: 01:21 PM UTC ngày 1/11/2026\nThiết bị: Windows 11 / Chrome 129\n\nHệ thống phát hiện một lần đăng nhập thành công từ khu vực địa lý bất thường.\n\nCó phải bạn đã thực hiện đăng nhập này?\n\n[ ĐÚNG, LÀ TÔI ]                [ KHÔNG, TỪ CHỐI VÀ KHÓA TÀI KHOẢN ]\n\nNếu bạn bấm 'KHÔNG, TỪ CHỐI VÀ KHÓA TÀI KHOẢN', hệ thống sẽ ngắt phiên đăng nhập lạ và yêu cầu bạn đặt lại mật khẩu mới.",
    detailedExplanation: "Email LỪA ĐẢO (PHISHING) đỉnh cao thuộc dạng Reverse-Psychology Phishing (lừa đảo tâm lý ngược). Email giả vờ gửi cảnh báo tài khoản bị đăng nhập từ Nga. Khi người dùng hoảng sợ bấm 'NO, DENY AND SECURE ACCOUNT', họ sẽ bị dẫn tới trang đổi mật khẩu giả mạo để kẻ gian lấy cắp mật khẩu thật vừa nhập.",
    readingQuestion: {
      stem: "What psychological trigger does the email primarily exploit?",
      choices: [
        "Panic and urgency caused by a fake foreign login alert from Russia",
        "Greed caused by a promise of a corporate financial bonus",
        "Curiosity about a coworker's private performance evaluation",
        "Sympathy for a charitable donation request"
      ],
      answer: 0,
      explanation_vi: "Email khai thác nỗi sợ hãi: 'Panic and urgency caused by a fake foreign login alert from Russia'.",
      trap: "Bẫy lòng tham (greed) hoặc tò mò (curiosity)."
    },
    keyVocab: [
      { word: "anomalous", pos: "adjective", meaning_vi: "bất thường, dị thường", example: "The monitoring tool flagged anomalous outbound data transfers." },
      { word: "sentinel", pos: "noun", meaning_vi: "người lính gác, hệ thống cảnh báo thường trực", example: "The automated sentinel monitors server logs for brute-force attempts." },
      { word: "rogue", pos: "adjective", meaning_vi: "gian lận, lén lút, không hợp lệ", example: "Network administrators disconnected the rogue Wi-Fi access point." }
    ]
  },
  {
    id: "phish-022",
    level: 4,
    sender: { name: "HexaTech SOC Emergency Dispatch", email: "soc-dispatch@hexatech.com" },
    recipient: "all-employees@hexatech.com",
    date: "November 1, 2026 03:00 PM",
    subject: "SECURITY PROTOCOL: How to Verify Genuine Security Alerts vs Phishing Notifications",
    body: "Dear Colleagues,\n\nIn light of recent industry-wide credential phishing attacks disguised as \"Security Login Alerts\", the CISO Office outlines our official protocol for handling suspicious authentication prompts:\n\n1. HexaTech security alerts will NEVER ask you to click a button inside an email to \"Reset your password\".\n2. If you receive an alert regarding an unfamiliar login location, DO NOT click any links in the email. Instead, open a fresh browser window and navigate directly to https://myaccount.hexatech.com to review active devices.\n3. Legitimate automated password resets are only triggered when requested directly by the user on the official login portal.\n4. Always verify that the sender domain ends strictly in \"@hexatech.com\".\n\nThank you for keeping our corporate perimeter secure,\nDr. Aris Thorne, Chief Information Security Officer",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Kính gửi các đồng nghiệp,\n\nTrước làn sóng các cuộc tấn công lừa đảo giả dạng 'Cảnh báo đăng nhập an ninh', Văn phòng CISO xin nêu rõ quy trình chính thức để xử lý các thông báo xác thực đáng ngờ:\n\n1. Cảnh báo an ninh của HexaTech KHÔNG BAO GIỜ yêu cầu bạn bấm nút trong email để 'Đặt lại mật khẩu'.\n2. Nếu bạn nhận được thông báo về vị trí đăng nhập lạ, TUYỆT ĐỐI KHÔNG bấm bất kỳ liên kết nào trong thư. Thay vào đó, hãy mở một cửa sổ trình duyệt mới và truy cập trực tiếp https://myaccount.hexatech.com để kiểm tra thiết bị.\n3. Việc đặt lại mật khẩu hợp lệ chỉ diễn ra khi chính người dùng chủ động yêu cầu trên cổng đăng nhập chính thức.\n4. Luôn kiểm tra địa chỉ người gửi phải kết thúc chính xác bằng '@hexatech.com'.\n\nCảm ơn các bạn đã bảo vệ vững chắc vành đai tập đoàn,\nTiến sĩ Aris Thorne, Giám đốc An ninh Thông tin (CISO)",
    detailedExplanation: "Email HỢP LỆ (SAFE): Hướng dẫn chuẩn mực từ CISO Dr. Aris Thorne. Hướng dẫn nhân viên cách xử lý khi nhận email cảnh báo: không bao giờ bấm link trong mail mà hãy tự mở trình duyệt gõ địa chỉ https://myaccount.hexatech.com để kiểm tra.",
    readingQuestion: {
      stem: "What are employees instructed to do if they receive a suspicious login notification?",
      choices: [
        "Open a new browser window and go directly to the official account portal",
        "Click the link in the email to verify their current password",
        "Immediately power off their computer and unplug all network cables",
        "Forward the alert to all members of their project team"
      ],
      answer: 0,
      explanation_vi: "Mục 2 hướng dẫn: 'open a fresh browser window and navigate directly to https://myaccount.hexatech.com'.",
      trap: "Bẫy bấm link trong email (click the link in the email) hoặc tắt nguồn máy tính."
    },
    keyVocab: [
      { word: "disguised", pos: "adjective", meaning_vi: "ngụy trang, giả dạng", example: "The malware was disguised as a harmless spreadsheet attachment." },
      { word: "perimeter", pos: "noun", meaning_vi: "vành đai ranh giới bảo mật mạng", example: "Firewalls and identity verification protect the network perimeter." },
      { word: "prompt", pos: "noun", meaning_vi: "thông báo nhắc nhở trên màn hình", example: "Confirm the two-factor authentication prompt on your mobile phone." }
    ]
  },
  {
    id: "phish-023",
    level: 4,
    sender: { name: "HexaTech Corporate Benefits", email: "benefits-survey@hexatech-feedback.com" },
    recipient: "all-staff@hexatech.com",
    date: "November 2, 2026 10:15 AM",
    subject: "Anonymous 2027 Workplace Satisfaction & Healthcare Feedback Survey",
    body: "Dear Staff Member,\n\nAs part of our commitment to improving employee wellness and work-life balance, HexaTech has partnered with WorkplaceInsights to administer our confidential 2027 Benefits Survey.\n\nThe survey takes approximately eight minutes to complete and covers medical plan options, telecommuting stipends, and retirement planning resources. Your individual responses will remain strictly anonymous.\n\nTo ensure that each employee only submits one response, please log in with your corporate Google Workspace or Microsoft account:\n\n[ TAKE ANONYMOUS EMPLOYEE SURVEY ]\n\nParticipants who complete the questionnaire before Friday will be entered into a drawing for three $500 travel vouchers.",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "benefits-survey@hexatech-feedback.com", explanation: "Tên miền hexatech-feedback.com là tên miền lạ không thuộc hệ thống máy chủ công ty." },
      { phrase: "please log in with your corporate Google Workspace or Microsoft account", explanation: "Khảo sát tự nhận là 'vô danh/ẩn danh' (anonymous) nhưng lại bắt người dùng đăng nhập tài khoản để đánh cắp thông tin đăng nhập." },
      { phrase: "entered into a drawing for three $500 travel vouchers", explanation: "Treo thưởng giá trị cao (3 voucher 500 USD) để dụ dỗ người học nhấp vào liên kết." }
    ],
    vietnameseTranslation: "Kính gửi toàn thể nhân viên,\n\nNhằm nâng cao sức khỏe và sự cân bằng giữa công việc và cuộc sống cho nhân viên, HexaTech hợp tác cùng WorkplaceInsights thực hiện Khảo sát Phúc lợi 2027 hoàn toàn bảo mật.\n\nKhảo sát mất khoảng 8 phút, bao gồm các chủ đề về bảo hiểm y tế, phụ cấp làm việc từ xa và kế hoạch hưu trí. Mọi câu trả lời của bạn sẽ hoàn toàn ẩn danh.\n\nĐể đảm bảo mỗi người chỉ gửi một bài khảo sát, vui lòng đăng nhập bằng tài khoản Google Workspace hoặc Microsoft công ty:\n\n[ LÀM KHẢO SÁT ẨN DANH ]\n\nNhững người hoàn thành trước thứ Sáu sẽ được tham gia bốc thăm trúng 3 voucher du lịch trị giá 500 USD.",
    detailedExplanation: "Email LỪA ĐẢO (PHISHING) dạng Khảo sát thu thập thông tin (Survey Phishing). Điểm mâu thuẫn cốt lõi: Email nói khảo sát 'strictly anonymous' nhưng lại yêu cầu đăng nhập tài khoản Google/Microsoft qua domain lạ `hexatech-feedback.com`.",
    readingQuestion: {
      stem: "What major contradiction exists within the email request?",
      choices: [
        "It claims to be anonymous while requiring users to log in with corporate accounts.",
        "It offers travel vouchers for a company that does not allow business travel.",
        "It is sent on a weekend when employees are not in the office.",
        "It requests payment for completing an internal survey."
      ],
      answer: 0,
      explanation_vi: "Mâu thuẫn lớn nhất: Khẳng định khảo sát ẩn danh (strictly anonymous) nhưng lại bắt đăng nhập (requiring users to log in with corporate accounts).",
      trap: "Bẫy công ty không cho đi du lịch (không có trong bài)."
    },
    keyVocab: [
      { word: "stipend", pos: "noun", meaning_vi: "tiền phụ cấp, trợ cấp định kỳ", example: "Remote workers receive a monthly internet connectivity stipend." },
      { word: "anonymous", pos: "adjective", meaning_vi: "ẩn danh, không nêu tên", example: "Survey feedback is submitted via an encrypted anonymous form." },
      { word: "questionnaire", pos: "noun", meaning_vi: "bảng câu hỏi khảo sát", example: "Please complete the brief customer satisfaction questionnaire." }
    ]
  },
  {
    id: "phish-024",
    level: 4,
    sender: { name: "HexaTech Corporate HR", email: "hr@hexatech.com" },
    recipient: "all-employees@hexatech.com",
    date: "November 2, 2026 02:00 PM",
    subject: "Important: Guidelines for Participating in Legitimate Internal Surveys",
    body: "Dear HexaTech Team,\n\nWe have received inquiries from several staff members regarding unsolicited external survey invitations circulating online.\n\nPlease take note of our internal feedback standards:\n1. Genuine HexaTech employee surveys are ALWAYS hosted internally on our verified sub-domain: https://survey.hexatech.com.\n2. We will NEVER partner with unverified third-party domains or request that you input your corporate network passwords to access a survey.\n3. Legitimate internal surveys do not require separate authentication if you are already signed into your SSO workstation session.\n\nIf you receive suspicious survey invitations, do not click the links. Forward them immediately to abuse@hexatech.com.\n\nThank you for protecting our collective security,\nPeople & Culture Operations",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Thân gửi toàn thể đội ngũ HexaTech,\n\nChúng tôi đã nhận được phản ánh từ một số nhân viên về các lời mời khảo sát không rõ nguồn gốc đang lan truyền trên mạng.\n\nXin hãy lưu ý các tiêu chuẩn khảo sát nội bộ chính thức:\n1. Các khảo sát nhân viên chính thức của HexaTech LUÔN ĐƯỢC đặt trên tên miền phụ đã xác minh: https://survey.hexatech.com.\n2. Chúng tôi KHÔNG BAO GIỜ hợp tác với các domain bên ngoài chưa xác thực hoặc yêu cầu bạn nhập mật khẩu công ty để làm khảo sát.\n3. Khảo sát nội bộ hợp lệ không đòi hỏi đăng nhập lại nếu bạn đã vào máy qua hệ thống SSO.\n\nNếu bạn nhận được thư mời khảo sát nghi vấn, không bấm link mà hãy chuyển tiếp ngay tới abuse@hexatech.com.\n\nCảm ơn các bạn đã chung tay bảo vệ an ninh tập đoàn,\nBộ phận Nhân sự & Văn hóa Doanh nghiệp",
    detailedExplanation: "Email HỢP LỆ (SAFE): Hướng dẫn chính thức từ phòng Nhân sự hr@hexatech.com giải thích rõ quy tắc phân biệt khảo sát thật và giả. Khảo sát thật luôn nằm trên subdomain chính thống https://survey.hexatech.com.",
    readingQuestion: {
      stem: "According to HR guidelines, where are authentic HexaTech employee surveys hosted?",
      choices: [
        "Exclusively on the verified sub-domain https://survey.hexatech.com",
        "On public survey platforms such as SurveyMonkey or Google Forms",
        "On third-party consultant websites sent via external email",
        "On printed paper forms distributed during team meetings"
      ],
      answer: 0,
      explanation_vi: "Mục 1 khẳng định: 'ALWAYS hosted internally on our verified sub-domain: https://survey.hexatech.com'.",
      trap: "Bẫy dùng Google Forms hoặc SurveyMonkey - công ty quy định dùng hệ thống nội bộ."
    },
    keyVocab: [
      { word: "unsolicited", pos: "adjective", meaning_vi: "không được yêu cầu trước, tự ý gửi đến", example: "Spam filters block unsolicited commercial advertising emails." },
      { word: "collective", pos: "adjective", meaning_vi: "mang tính tập thể, chung của mọi người", example: "Cybersecurity is a collective responsibility shared by all staff." },
      { word: "sub-domain", pos: "noun", meaning_vi: "tên miền phụ thuộc tên miền chính", example: "The company hosts its portal on a secure sub-domain." }
    ]
  },

  // ===================================================================
  // LEVEL 5: MASTER (Subtle Context Clues, Zero Grammatical Flaws, Supply Chain)
  // ===================================================================
  {
    id: "phish-025",
    level: 5,
    sender: { name: "Dr. Kenneth Chen - NovaScale Architecture", email: "k.chen@novascale-systems.com" },
    recipient: "sophia.al-mansoor@hexatech.com",
    date: "November 3, 2026 09:12 AM",
    subject: "RE: Collaborative Multi-Cloud Microservices Benchmark Whitepaper Draft",
    body: "Hi Sophia,\n\nIt was a pleasure moderating the keynote panel alongside you at the Chicago Trade Summit last week. As we discussed over lunch, our teams have combined the benchmark telemetry data comparing AWS Graviton and Google Cloud C3 instances.\n\nI have compiled our joint findings into our technical whitepaper draft. Because the document contains proprietary benchmark algorithms from both our firms, I have uploaded it to our corporate secure document portal.\n\nPlease review the preliminary findings before our joint press release next Tuesday:\n\nhttps://portal.novascale-systems.com.auth-token-994.link/doc/whitepaper-v3\n\nLooking forward to your feedback on the latency comparison graphs,\nKenneth",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "portal.novascale-systems.com.auth-token-994.link", explanation: "Đòn tấn công Subdomain Deception tinh vi: Tên miền thực chất là đuôi '.link' chứ không phải 'novascale-systems.com'. Kẻ xấu dùng tiền tố 'portal.novascale-systems.com' để đánh lừa thị giác." },
      { phrase: "https://portal.novascale-systems.com.auth-token-994.link/doc/whitepaper-v3", explanation: "Đường dẫn giả mạo dẫn tới trang đăng nhập trung gian nhằm đánh cắp thông tin bí mật thương mại và tài khoản liên kết." }
    ],
    vietnameseTranslation: "Chào Sophia,\n\nRất vui được cùng bạn điều phối phiên thảo luận chính tại Hội nghị Thượng đỉnh Thương mại Chicago tuần trước. Như chúng ta đã trao đổi trong bữa trưa, nhóm của chúng ta đã tổng hợp dữ liệu đo kiểm tra hiệu năng so sánh giữa máy chủ AWS Graviton và Google Cloud C3.\n\nTôi đã tổng hợp các phát hiện chung vào bản thảo báo cáo kỹ thuật. Vì tài liệu chứa các thuật toán đo kiểm độc quyền của cả hai công ty, tôi đã tải nó lên cổng tài liệu bảo mật của công ty chúng tôi.\n\nVui lòng xem xét các phát hiện sơ bộ trước khi phát hành thông cáo báo chí chung vào thứ Ba tới:\n\nhttps://portal.novascale-systems.com.auth-token-994.link/doc/whitepaper-v3\n\nRất mong nhận được phản hồi của bạn về biểu đồ so sánh độ trễ,\nKenneth",
    detailedExplanation: "Email LỪA ĐẢO (PHISHING) cấp độ Master thuộc dạng Spear-Phishing / Supply Chain Reconnaissance. Kẻ tấn công nắm rõ lịch trình diễn giả tại hội nghị Chicago tuần trước để bịa chuyện rất chân thực, ngữ pháp hoàn hảo. Điểm bẫy chết người nằm ở cấu trúc URL: `novascale-systems.com.auth-token-994.link` (Tên miền thực sự là đuôi `.link`, không phải công ty đối tác).",
    readingQuestion: {
      stem: "What subtle indicator exposes the link in the email as potentially malicious?",
      choices: [
        "The actual top-level domain is '.link' rather than '.com'.",
        "The email contains multiple spelling errors in the recipient's name.",
        "The message demands an immediate wire transfer payment.",
        "The email is sent from an anonymous free Gmail account."
      ],
      answer: 0,
      explanation_vi: "Điểm vạch trần lừa đảo tinh vi nhất: Tên miền thực sự kết thúc bằng đuôi '.link' (`auth-token-994.link`) chứ không phải '.com'.",
      trap: "Bẫy đòi chuyển tiền (wire transfer) hoặc lỗi chính tả (spelling errors) - email này viết cực kỳ trau chuốt không có lỗi chính tả nào."
    },
    keyVocab: [
      { word: "benchmark", pos: "noun", meaning_vi: "tiêu chuẩn đối chuẩn đo lường hiệu năng", example: "Benchmark tests proved the new database server was 30% faster." },
      { word: "whitepaper", pos: "noun", meaning_vi: "báo cáo kỹ thuật chuyên sâu của chuyên gia", example: "The company published an authoritative whitepaper on cloud encryption." },
      { word: "deception", pos: "noun", meaning_vi: "sự lừa dối, kỹ thuật ngụy trang đánh lừa", example: "Sub-domain deception tricks users into trusting fake web links." }
    ]
  },
  {
    id: "phish-026",
    level: 5,
    sender: { name: "Dr. Kenneth Chen - NovaScale Architecture", email: "k.chen@novascale-systems.com" },
    recipient: "sophia.al-mansoor@hexatech.com",
    date: "November 3, 2026 11:45 AM",
    subject: "Official Draft: Joint Microservices Benchmark Whitepaper (Shared via Box)",
    body: "Hi Sophia,\n\nFollowing our discussion at the Chicago Tech Summit, our technical research director has reviewed the microservices benchmark analysis.\n\nI have uploaded the encrypted PDF document to our enterprise Box workspace, which is pre-authorized for HexaTech corporate federation. You can access the document directly with your existing HexaTech single sign-on credentials without creating a separate password:\n\nhttps://novascale.ent.box.com/s/77402af99b41c098\n\nPlease let me know your thoughts on Section 4 before our joint press briefing next Tuesday.\n\nWarm regards,\nKenneth Chen, Ph.D.\nChief Systems Architect, NovaScale Systems Inc.",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Chào Sophia,\n\nTiếp nối cuộc trao đổi của chúng ta tại Hội nghị Công nghệ Chicago, giám đốc nghiên cứu kỹ thuật của chúng tôi đã xem xét xong phần phân tích hiệu năng kiến trúc microservices.\n\nTôi đã tải tệp PDF mã hóa lên không gian lưu trữ Box của doanh nghiệp chúng tôi, nơi đã được cấu hình cấp quyền trước cho HexaTech. Bạn có thể truy cập tệp trực tiếp bằng tài khoản đăng nhập một lần (SSO) HexaTech sẵn có của bạn mà không cần tạo mật khẩu riêng:\n\nhttps://novascale.ent.box.com/s/77402af99b41c098\n\nVui lòng cho tôi biết suy nghĩ của bạn về Mục 4 trước buổi họp báo chung vào thứ Ba tới.\n\nTrân trọng,\nTiến sĩ Kenneth Chen\nKiến trúc sư Trưởng Hệ thống, NovaScale Systems",
    detailedExplanation: "Email HỢP LỆ (SAFE): Email chính thức từ đối tác. Đường dẫn trỏ thẳng tới dịch vụ lưu trữ đám mây chuẩn doanh nghiệp `novascale.ent.box.com` (tên miền chính thức của Box dành cho khách hàng doanh nghiệp), nêu rõ người dùng vào bằng tài khoản SSO của HexaTech mà không cần tạo mật khẩu mới.",
    readingQuestion: {
      stem: "How is Ms. Al-Mansoor instructed to access the shared research document?",
      choices: [
        "Using her existing HexaTech Single Sign-On credentials via Box",
        "By paying an individual subscription fee to NovaScale Systems",
        "By installing a specialized cryptographic desktop utility",
        "By creating a new personal account with a credit card"
      ],
      answer: 0,
      explanation_vi: "Đoạn 2 nêu rõ: 'access the document directly with your existing HexaTech single sign-on credentials without creating a separate password'.",
      trap: "Bẫy trả phí đăng ký (subscription fee) hoặc cài phần mềm (desktop utility)."
    },
    keyVocab: [
      { word: "federation", pos: "noun", meaning_vi: "liên kết xác thực danh tính giữa các tổ chức", example: "Identity federation enables seamless SSO between corporate partners." },
      { word: "briefing", pos: "noun", meaning_vi: "buổi thông tin tóm tắt, họp báo ngắn", example: "The press briefing outlined the strategic merger details." },
      { word: "benchmarking", pos: "noun", meaning_vi: "hoạt động đo lường và so sánh chuẩn mực", example: "Continuous benchmarking ensures our cloud latency remains competitive." }
    ]
  },
  {
    id: "phish-027",
    level: 5,
    sender: { name: "HexaTech GitHub Enterprise", email: "notifications@github.hexatech.com" },
    recipient: "dev-team@hexatech.com",
    date: "November 4, 2026 04:30 PM",
    subject: "Action Required: OAuth Application 'CodeReviewer-AI-Helper' Requesting Organization Access",
    body: "HexaTech Internal GitHub Enterprise Management\n\nDeveloper account 't.morrison' has requested authorization for a third-party OAuth application:\n\nApplication Name: CodeReviewer-AI-Helper\nPublisher: CodeReviewer AI Ltd (Unverified Publisher)\nRequested Scopes:\n• Read and write access to all private corporate repositories\n• Full administrative access to organization webhooks and secrets\n• Ability to delete repository branches and commit histories\n\nIf you did not initiate this integration request, please review and revoke this application immediately:\n\nhttps://github.hexatech.com/orgs/hexatech/settings/oauth_application_review?id=99281\n\nHexaTech Developer Tools Engineering",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "Publisher: CodeReviewer AI Ltd (Unverified Publisher)", explanation: "Ứng dụng từ nhà phát triển chưa được xác thực (Unverified Publisher) đòi hỏi quyền can thiệp cực kỳ nguy hiểm." },
      { phrase: "Full administrative access to organization webhooks and secrets", explanation: "Yêu cầu quyền truy cập bí mật doanh nghiệp (Secrets) và toàn bộ kho mã nguồn riêng tư (OAuth Abuse / Malicious OAuth App Attack)." },
      { phrase: "Ability to delete repository branches and commit histories", explanation: "Quyền xóa lịch sử mã nguồn là dấu hiệu nguy cơ phá hoại chuỗi cung ứng phần mềm (Supply Chain Attack)." }
    ],
    vietnameseTranslation: "Ban Quản lý GitHub Enterprise Nội bộ HexaTech\n\nTài khoản lập trình viên 't.morrison' đã yêu cầu cấp quyền cho một ứng dụng OAuth bên thứ ba:\n\nTên ứng dụng: CodeReviewer-AI-Helper\nNhà phát hành: CodeReviewer AI Ltd (Chưa được xác minh)\nPhạm vi quyền yêu cầu:\n• Quyền đọc và ghi vào toàn bộ kho mã nguồn riêng tư của tập đoàn\n• Toàn quyền quản trị đối với webhooks và các chuỗi bí mật (secrets)\n• Quyền xóa các nhánh kho mã và lịch sử commit\n\nNếu bạn không khởi tạo yêu cầu này, vui lòng xem xét và thu hồi ứng dụng ngay lập tức:\n\nhttps://github.hexatech.com/orgs/hexatech/settings/oauth_application_review?id=99281\n\nBộ phận Công cụ Lập trình HexaTech",
    detailedExplanation: "Email mô phỏng cuộc tấn công OAuth Consent Phishing / Malicious Third-Party App. Mặc dù gửi từ hệ thống GitHub nội bộ, nhưng đây là một yêu cầu cấp quyền cực kỳ độc hại (đòi đọc toàn bộ mã nguồn mật, truy cập secrets và xóa repo). Người dùng phải nhận diện đây là hành vi lừa đảo cấp quyền (Malicious App Grant) và từ chối cấp phép.",
    readingQuestion: {
      stem: "What dangerous permission does the unverified application seek to obtain?",
      choices: [
        "Full administrative access to corporate repository secrets and code history",
        "The authority to issue executive financial bonuses to employees",
        "Permission to install physical cameras in the software development office",
        "The ability to read personal text messages on employees' mobile phones"
      ],
      answer: 0,
      explanation_vi: "Mục Requested Scopes nêu: 'Full administrative access to organization webhooks and secrets' và quyền đọc/ghi toàn bộ mã nguồn mật.",
      trap: "Bẫy tài chính (financial bonuses) hoặc camera văn phòng."
    },
    keyVocab: [
      { word: "scopes", pos: "noun (plural)", meaning_vi: "phạm vi quyền hạn trong giao thức OAuth", example: "Limit application scopes strictly to read-only access." },
      { word: "unverified", pos: "adjective", meaning_vi: "chưa được xác minh độ tin cậy", example: "Do not grant corporate tokens to unverified third-party developers." },
      { word: "revoke", pos: "verb", meaning_vi: "thu hồi, hủy bỏ hiệu lực quyền hạn", example: "Administrators must promptly revoke access when an employee departs." }
    ]
  },
  {
    id: "phish-028",
    level: 5,
    sender: { name: "HexaTech Application Security", email: "appsec@hexatech.com" },
    recipient: "engineering-all@hexatech.com",
    date: "November 4, 2026 05:15 PM",
    subject: "ADVISORY: Mandatory Zero-Trust Scrutiny on Third-Party OAuth Integrations",
    body: "Attention All Software Engineers and DevOps Personnel,\n\nThe Application Security (AppSec) division has implemented strict automated controls regarding third-party OAuth integrations across our GitHub Enterprise and Slack workspaces.\n\nEffective Immediately:\n1. Automatic approval for external OAuth applications is permanently disabled.\n2. Any tool requesting read/write access to internal repositories or CI/CD pipelines must undergo a formal Architecture Security Review.\n3. Third-party applications from unverified publishers are strictly prohibited from connecting to production workspaces.\n\nTo request formal security review for a development tool, submit a ticket via our internal Jira portal at https://jira.hexatech.com/servicedesk/appsec.\n\nThank you for maintaining vigilance in our software supply chain,\nAppSec Governance Committee",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Chú ý Toàn thể Kỹ sư Phần mềm và Nhân sự DevOps,\n\nBộ phận An ninh Ứng dụng (AppSec) đã triển khai các biện pháp kiểm soát tự động nghiêm ngặt đối với việc tích hợp OAuth của bên thứ ba trên GitHub Enterprise và Slack.\n\nCó hiệu lực ngay lập tức:\n1. Việc tự động phê duyệt ứng dụng OAuth bên ngoài bị vô hiệu hóa vĩnh viễn.\n2. Bất kỳ công cụ nào yêu cầu quyền đọc/ghi vào kho mã nguồn hoặc quy trình CI/CD đều phải trải qua buổi Đánh giá An ninh Kiến trúc chính thức.\n3. Các ứng dụng từ nhà phát triển chưa được xác minh bị nghiêm cấm kết nối vào môi trường làm việc chính thức.\n\nĐể yêu cầu đánh giá an ninh cho một công cụ, hãy nộp yêu cầu qua cổng Jira nội bộ tại https://jira.hexatech.com/servicedesk/appsec.\n\nCảm ơn các bạn đã duy trì tinh thần cảnh giác bảo vệ chuỗi cung ứng phần mềm,\nỦy ban Quản trị AppSec",
    detailedExplanation: "Email HỢP LỆ (SAFE): Thông báo chính thức từ bộ phận AppSec nội bộ appsec@hexatech.com ban hành quy định bảo vệ chuỗi cung ứng phần mềm, cấm tự tiện cấp quyền OAuth cho ứng dụng trôi nổi, hướng dẫn nộp ticket qua Jira nội bộ https://jira.hexatech.com.",
    readingQuestion: {
      stem: "What change has been made regarding external OAuth application approvals?",
      choices: [
        "Automatic approvals for external OAuth applications have been permanently disabled.",
        "Engineers are no longer permitted to write software using open-source tools.",
        "All third-party tools must be purchased using personal credit cards.",
        "GitHub Enterprise access has been revoked for all junior software developers."
      ],
      answer: 0,
      explanation_vi: "Mục 1 khẳng định: 'Automatic approval for external OAuth applications is permanently disabled'.",
      trap: "Bẫy cấm dùng mã nguồn mở (open-source) hoặc thu hồi quyền truy cập của lập trình viên."
    },
    keyVocab: [
      { word: "scrutiny", pos: "noun", meaning_vi: "sự soi xét, kiểm tra kỹ lưỡng", example: "High-privilege cloud roles undergo rigorous quarterly security scrutiny." },
      { word: "integrations", pos: "noun (plural)", meaning_vi: "sự tích hợp hệ thống phần mềm", example: "Third-party Slack integrations must be reviewed by the security team." },
      { word: "vigilance", pos: "noun", meaning_vi: "sự cảnh giác đề phòng nguy cơ", example: "Constant vigilance is necessary to defend against software supply chain attacks." }
    ]
  },
  {
    id: "phish-029",
    level: 5,
    sender: { name: "HexaTech Corporate Domain Admin", email: "domain-registrar@hexatech-dns-manager.net" },
    recipient: "dns-admins@hexatech.com",
    date: "November 5, 2026 01:00 AM",
    subject: "URGENT ACTION REQUIRED: DNS Zone Delegation Failure for hexatech.com",
    body: "HexaTech Global DNS Operations Center\n\nCRITICAL NOTIFICATION: Root Name Server Desynchronization\n\nAt 00:45 UTC, our automated domain health monitor detected that DNSSEC cryptographic validation failed across primary authoritative nameservers for 'hexatech.com'. If zone records are not re-signed within 3 hours, global web traffic to hexatech.com will result in NXDOMAIN errors worldwide.\n\nTo re-synchronize DNSSEC zone keys and preserve global internet routing, the primary DNS administrator must confirm the root registrar credentials via the authoritative recovery link below:\n\nhttps://dns-manager.hexatech.net.zone-recovery-auth.cc/dnssec/re-sign\n\nHexaTech Domain Governance Desk",
    isPhishing: true,
    suspiciousClues: [
      { phrase: "domain-registrar@hexatech-dns-manager.net", explanation: "Tên miền gửi thư hexatech-dns-manager.net là tên miền đăng ký giả mạo bên ngoài." },
      { phrase: "https://dns-manager.hexatech.net.zone-recovery-auth.cc/dnssec/re-sign", explanation: "Đòn tấn công Subdomain Deception tinh vi: Tên miền thực sự là đuôi '.cc' (zone-recovery-auth.cc), mạo danh quản trị viên DNS." },
      { phrase: "If zone records are not re-signed within 3 hours", explanation: "Tạo áp lực thời gian giữa đêm khuya (01:00 AM) đe dọa sập web toàn cầu để kỹ sư hoảng loạn đăng nhập mà không kiểm tra URL." }
    ],
    vietnameseTranslation: "Trung tâm Vận hành DNS Toàn cầu HexaTech\n\nTHÔNG BÁO KHẨN CẤP: Lỗi mất đồng bộ máy chủ tên miền gốc\n\nLúc 00:45 UTC, hệ thống theo dõi tên miền phát hiện xác thực mật mã DNSSEC bị lỗi trên các máy chủ tên miền có thẩm quyền của 'hexatech.com'. Nếu các bản ghi không được ký lại trong vòng 3 giờ, lượng truy cập web toàn cầu vào hexatech.com sẽ bị lỗi không tìm thấy tên miền (NXDOMAIN) trên toàn thế giới.\n\nĐể đồng bộ lại khóa vùng DNSSEC và bảo toàn định tuyến internet toàn cầu, quản trị viên DNS chính phải xác nhận thông tin đăng nhập nhà đăng ký qua liên kết khôi phục dưới đây:\n\nhttps://dns-manager.hexatech.net.zone-recovery-auth.cc/dnssec/re-sign\n\nBan Quản trị Tên miền HexaTech",
    detailedExplanation: "Email LỪA ĐẢO (PHISHING) cấp độ Zero-Day/Master nhắm vào kỹ sư quản trị mạng và hạ tầng DNS. Kẻ tấn công gửi thư lúc 1 giờ sáng đe dọa toàn bộ website công ty sẽ bị sập nếu không ký lại DNSSEC trong 3 giờ. Đường link là bẫy Subdomain Deception đuôi `.cc` (`zone-recovery-auth.cc`) nhằm cướp quyền quản trị tên miền gốc.",
    readingQuestion: {
      stem: "What catastrophic event does the sender claim will happen if no action is taken within 3 hours?",
      choices: [
        "Global web traffic to hexatech.com will fail with domain resolution errors.",
        "All company bank accounts will be automatically frozen by regulators.",
        "Customer passwords stored in the database will be irreversibly erased.",
        "The corporate headquarters building will lose electrical grid power."
      ],
      answer: 0,
      explanation_vi: "Đoạn 1 đe dọa: 'global web traffic to hexatech.com will result in NXDOMAIN errors worldwide' (lỗi phân giải tên miền trên toàn thế giới).",
      trap: "Bẫy ngân hàng đóng băng hoặc mất điện tòa nhà."
    },
    keyVocab: [
      { word: "delegation", pos: "noun", meaning_vi: "sự ủy quyền, phân cấp máy chủ DNS", example: "DNS zone delegation points queries to authoritative nameservers." },
      { word: "desynchronization", pos: "noun", meaning_vi: "sự mất đồng bộ dữ liệu giữa các máy chủ", example: "Database desynchronization led to inconsistent inventory balances." },
      { word: "authoritative", pos: "adjective", meaning_vi: "có thẩm quyền chính thức", example: "Authoritative DNS servers provide definitive IP mappings for domains." }
    ]
  },
  {
    id: "phish-030",
    level: 5,
    sender: { name: "HexaTech Network Operations Center", email: "noc@hexatech.com" },
    recipient: "all-engineers@hexatech.com",
    date: "November 5, 2026 09:30 AM",
    subject: "STATUS REPORT: Annual DNSSEC Cryptographic Key Rollover Completed Successfully",
    body: "Good morning Engineering and IT Operations Teams,\n\nThe Network Operations Center (NOC) is pleased to confirm that our scheduled annual DNSSEC Zone Signing Key (ZSK) rollover for 'hexatech.com' concluded successfully this morning at 08:00 UTC.\n\nSummary of Rollover Execution:\n• New 2048-bit RSA zone signing keys were deployed across all global authoritative nameservers.\n• Delegation Signer (DS) resource records were updated with our enterprise registrar without propagation errors.\n• DNS query latency and resolution uptime remained at 100% throughout the maintenance window.\n\nNo administrative action is required by individual development teams. Live DNS telemetry metrics can be monitored via the internal Grafana dashboard at https://metrics.hexatech.com/dns.\n\nThank you for your ongoing partnership,\nNetwork Operations Center (NOC)",
    isPhishing: false,
    suspiciousClues: [],
    vietnameseTranslation: "Kính chào toàn thể đội ngũ Kỹ thuật và Vận hành CNTT,\n\nTrung tâm Vận hành Mạng (NOC) xin xác nhận rằng quy trình xoay vòng khóa ký vùng DNSSEC định kỳ hàng năm cho tên miền 'hexatech.com' đã hoàn tất thành công vào lúc 08:00 UTC sáng nay.\n\nTóm tắt quá trình triển khai:\n• Cặp khóa ký vùng RSA 2048-bit mới đã được triển khai trên toàn bộ các máy chủ tên miền có thẩm quyền toàn cầu.\n• Các bản ghi Delegation Signer (DS) đã được cập nhật thành công với nhà đăng ký mà không gặp lỗi lan truyền.\n• Độ trễ truy vấn DNS và thời gian hoạt động duy trì ở mức 100% trong suốt quá trình bảo trì.\n\nCác nhóm kỹ thuật không cần thực hiện thêm thao tác nào. Bạn có thể theo dõi biểu đồ đo đạc DNS trên bảng điều khiển Grafana nội bộ tại https://metrics.hexatech.com/dns.\n\nCảm ơn sự hợp tác của các bạn,\nTrung tâm Vận hành Mạng (NOC)",
    detailedExplanation: "Email HỢP LỆ (SAFE): Báo cáo kỹ thuật hạ tầng mạng chính xác từ noc@hexatech.com xác nhận việc đổi khóa DNSSEC định kỳ thành công. Cung cấp đường dẫn bảng theo dõi Grafana nội bộ https://metrics.hexatech.com/dns và khẳng định không cần người dùng thao tác gì thêm.",
    readingQuestion: {
      stem: "What was the result of the annual DNSSEC key rollover maintenance?",
      choices: [
        "It completed successfully with 100% resolution uptime throughout.",
        "It was postponed until next week due to unexpected server latency.",
        "It resulted in widespread email delivery failures across the company.",
        "It required all engineering staff to update their personal passwords."
      ],
      answer: 0,
      explanation_vi: "Đoạn 1 và bản tóm tắt nêu rõ: 'concluded successfully... uptime remained at 100% throughout the maintenance window'.",
      trap: "Bẫy bị hoãn (postponed) hoặc gây lỗi email."
    },
    keyVocab: [
      { word: "rollover", pos: "noun", meaning_vi: "quy trình chuyển giao/đổi mới định kỳ mã khóa", example: "Automated cryptographic key rollover occurs every twelve months." },
      { word: "propagation", pos: "noun", meaning_vi: "sự lan truyền dữ liệu trên mạng toàn cầu", example: "DNS record propagation across global servers typically takes up to 24 hours." },
      { word: "authoritative", pos: "adjective", meaning_vi: "có thẩm quyền, chính thức", example: "Authoritative nameservers maintain definitive zone master files." }
    ]
  }
];
