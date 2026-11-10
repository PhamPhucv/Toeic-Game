/**
 * CHAPTERS & NARRATIVE DEFINITIONS
 * Bối cảnh: Ngân hàng NovaBank - Trung tâm SOC (Security Operations Center)
 */
module.exports = [
  {
    id: 1,
    title: "Chương 1: Ca trực nửa đêm & Báo động Phishing",
    title_en: "Chapter 1: The Midnight Alarm & Phishing Surge",
    description: "Đêm đầu tiên tại SOC NovaBank. Lúc 00:15, còi báo động SIEM vang lên dồn dập. Một chiến dịch Phishing tinh vi nhắm vào nhân viên tài chính ngân hàng đang diễn ra.",
    bossTitle: "TRÙM CHƯƠNG 1: The Phishing Infiltration & Firewall Breach",
    bossDescription: "Kẻ tấn công đang gửi hàng loạt email giả mạo để chiếm đoạt tài khoản quản trị viên. Hãy vượt qua 5 câu hỏi quyết định để khóa chặt cổng tường lửa và thanh lọc hộp thư!",
    minScoreToPass: 60,
    situationsCount: 26,
    questionsCount: 52,
    badge: "🛡️ SOC Defender"
  },
  {
    id: 2,
    title: "Chương 2: Đào sâu mã độc & Thẩm tra sự cố",
    title_en: "Chapter 2: Malware Forensics & Incident Response",
    description: "Một nhân viên kế toán đã vô tình tải về tệp tin độc hại. Ransomware bắt đầu lan sang máy chủ chi nhánh. Bạn phải cùng chuyên gia Sarah Lin cách ly mạng và điều tra dấu vết mã độc.",
    bossTitle: "TRÙM CHƯƠNG 2: The Ransomware Containment",
    bossDescription: "Ransomware đang cố gắng mã hóa cơ sở dữ liệu khách hàng! Trả lời chính xác 5 câu hỏi chuyên sâu để kích hoạt giao thức cô lập và giải mã khẩn cấp!",
    minScoreToPass: 65,
    situationsCount: 24,
    questionsCount: 48,
    badge: "🔬 Forensics Investigator"
  },
  {
    id: 3,
    title: "Chương 3: Vá lỗ hổng Zero-Day & Kiểm soát thiệt hại",
    title_en: "Chapter 3: Zero-Day Defense & Damage Control",
    description: "Cuộc điều tra phát hiện kẻ tấn công đã khai thác một lỗ hổng Zero-day chưa từng công bố trong thư viện máy chủ. Trưởng ca Dave yêu cầu triển khai bản vá khẩn và cấp mới khóa token MFA.",
    bossTitle: "TRÙM CHƯƠNG 3: Zero-Day Vulnerability Patching",
    bossDescription: "Hệ thống xác thực ngân hàng đang gặp nguy hiểm. Hoàn thành 5 câu hỏi kỹ thuật khẩn cấp để vá lỗ hổng và thu hồi chứng chỉ số bị xâm phạm!",
    minScoreToPass: 70,
    situationsCount: 24,
    questionsCount: 49,
    badge: "⚙️ Patch Master"
  },
  {
    id: 4,
    title: "Chương 4: Quyết chiến APT & Báo cáo Hội đồng Quản trị",
    title_en: "Chapter 4: The APT Showdown & Boardroom Verdict",
    description: "Nhóm hacker tinh nhuệ APT42 dồn toàn lực tấn công vào hệ thống thanh toán cốt lõi Core Banking Swift. Giám đốc CISO Helen Kang trực tiếp chỉ huy ca trực. Vận mệnh của NovaBank nằm trong tay bạn!",
    bossTitle: "ĐẠI TRÙM CHƯƠNG 4: Ultimate APT Showdown",
    bossDescription: "Trận chiến cuối cùng trên máy chủ dữ liệu ngân hàng! Vượt qua 5 câu hỏi sinh tử để truy vết IP nhóm hacker và cứu nguy cho toàn bộ hệ thống tài chính!",
    minScoreToPass: 75,
    situationsCount: 24,
    questionsCount: 49,
    badge: "👑 NovaBank Cyber Legend"
  }
];
