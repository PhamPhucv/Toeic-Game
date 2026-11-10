// Part 6: Text Completion (8 new sets: p6-set3 to p6-set10, 32 questions: p6-009 to p6-040)
module.exports = {
  part6New: [
    // --- SET 3: IT Security Audit Notice ---
    {
      id: "p6-set3",
      part: 6,
      level: 2,
      topic: "Corporate Security Audit & Token Expiration",
      passage: "MEMORANDUM\nTO: All Systems Engineering Staff\nFROM: Chief Information Security Office\nDATE: October 14\nSUBJECT: Mandatory Security Token Migration\n\nAs part of our continuous commitment to safeguarding internal assets, HexaTech is transitioning to hardware-based cryptographic keys. Beginning next Monday, the legacy mobile verification codes will no longer be _______ [1] for accessing production databases. Employees must collect their physical security tokens from the IT Operations Center on the 3rd floor _______ [2] Friday, October 25. Before picking up your token, please complete the brief online hardware registration form available on the employee intranet. _______ [3], the authentication system will automatically revoke any legacy access keys that remain unverified after the cut-off date. _______ [4]. We appreciate your cooperation in maintaining an impenetrable corporate network perimeter.",
      questions: [
        {
          id: "p6-009",
          blankNum: 1,
          stem: "Select the best answer for blank [1]:",
          choices: ["accepted", "acceptance", "accept", "acceptably"],
          answer: 0,
          explanation_vi: "Đứng sau cụm 'will no longer be' cần một quá khứ phân từ/tính từ ở thể bị động -> 'accepted' (sẽ không còn được chấp nhận nữa).",
          trap: "Bẫy từ loại: Thường nhầm chọn danh từ 'acceptance' hoặc động từ nguyên mẫu 'accept'."
        },
        {
          id: "p6-010",
          blankNum: 2,
          stem: "Select the best answer for blank [2]:",
          choices: ["by", "at", "through", "during"],
          answer: 0,
          explanation_vi: "Giới từ 'by' kết hợp với một mốc thời gian (Friday, October 25) để chỉ thời hạn muộn nhất hoàn thành hành động ('muộn nhất là trước ngày 25 tháng 10').",
          trap: "Bẫy giới từ: 'at' chỉ dùng cho giờ giấc cụ thể, 'during' chỉ dùng cho một khoảng thời gian."
        },
        {
          id: "p6-011",
          blankNum: 3,
          stem: "Select the best answer for blank [3]:",
          choices: ["Furthermore", "Nevertheless", "Otherwise", "Meanwhile"],
          answer: 0,
          explanation_vi: "Trạng từ liên kết 'Furthermore' (Hơn nữa/Bên cạnh đó) dùng để bổ sung thêm thông tin mang tính cảnh báo về việc hệ thống sẽ tự động thu hồi tài khoản chưa xác thực.",
          trap: "Bẫy liên từ chỉ sự nhượng bộ 'Nevertheless' (Tuy nhiên) hoặc điều kiện 'Otherwise' (Nếu không thì)."
        },
        {
          id: "p6-012",
          blankNum: 4,
          stem: "Select the best answer for blank [4]:",
          choices: [
            "Technical support specialists will be stationed in the lobby to assist with initial setup.",
            "The cafeteria menu will be updated to reflect seasonal dietary preferences.",
            "All incoming postal shipments must be inspected by customs authorities.",
            "Corporate holiday schedules will be distributed during next month's meeting."
          ],
          answer: 0,
          explanation_vi: "Câu điền vào đoạn văn phù hợp nhất với ngữ cảnh hỗ trợ nhân viên cài đặt token phần cứng: 'Technical support specialists will be stationed in the lobby to assist with initial setup'.",
          trap: "Bẫy các câu lạc đề hoàn toàn về nhà ăn (cafeteria), hải quan (customs), hoặc lịch nghỉ lễ (holiday schedules)."
        }
      ]
    },

    // --- SET 4: Corporate Travel Policy ---
    {
      id: "p6-set4",
      part: 6,
      level: 2,
      topic: "Corporate Travel Booking Policy",
      passage: "To: All Department Heads\nFrom: Global Corporate Travel Desk\nDate: September 5\nSubject: Updated Flight and Accommodation Booking Guidelines\n\nEffective October 1, all corporate flight reservations must be routed through our new centralized booking portal, SkyRoute Corporate. By consolidating travel arrangements, HexaTech aims to _______ [1] enterprise expenses and track international itineraries more effectively. Staff members traveling on company business are instructed to make reservations at least twenty-one days _______ [2] to secure discounted commercial rates. Any travel request exceeding standard budget thresholds will require written _______ [3] from division vice presidents. _______ [4]. Detailed instructional webinars on utilizing the portal will be broadcast throughout the upcoming week.",
      questions: [
        {
          id: "p6-013",
          blankNum: 1,
          stem: "Select the best answer for blank [1]:",
          choices: ["curtail", "expand", "hesitate", "abandon"],
          answer: 0,
          explanation_vi: "Động từ 'curtail' có nghĩa là cắt giảm, thu hẹp (curtail enterprise expenses = cắt giảm chi phí doanh nghiệp).",
          trap: "Bẫy từ trái nghĩa: 'expand' (mở rộng chi phí - ngược với mục tiêu tiết kiệm của công ty)."
        },
        {
          id: "p6-014",
          blankNum: 2,
          stem: "Select the best answer for blank [2]:",
          choices: ["in advance", "at least", "as usual", "for instance"],
          answer: 0,
          explanation_vi: "Cụm thành ngữ thời gian: 'twenty-one days in advance' (trước 21 ngày). 'In advance' đi sau khoảng thời gian để chỉ sự chuẩn bị từ trước.",
          trap: "Bẫy cụm từ: 'as usual' (như thường lệ) hay 'for instance' (ví dụ)."
        },
        {
          id: "p6-015",
          blankNum: 3,
          stem: "Select the best answer for blank [3]:",
          choices: ["authorization", "authorize", "authoritative", "authorizer"],
          answer: 0,
          explanation_vi: "Đứng sau tính từ 'written' cần một danh từ chỉ sự phê chuẩn bằng văn bản -> 'written authorization'.",
          trap: "Bẫy từ loại: 'authorize' (động từ), 'authoritative' (tính từ), 'authorizer' (danh từ chỉ người phê duyệt)."
        },
        {
          id: "p6-016",
          blankNum: 4,
          stem: "Select the best answer for blank [4]:",
          choices: [
            "Reimbursement claims for unapproved bookings will be summarily denied.",
            "Flight attendants are required to wear identification badges at all times.",
            "The office air conditioning filters will be replaced this Saturday afternoon.",
            "Printed paper tickets are no longer valid for regional train transit."
          ],
          answer: 0,
          explanation_vi: "Câu chốt bổ sung hệ quả nếu không tuân thủ chính sách phê duyệt: Các yêu cầu bồi hoàn không được duyệt trước sẽ bị từ chối ('summarily denied').",
          trap: "Bẫy câu nhắc về tiếp viên hàng không (flight attendants) hoặc bảo trì điều hòa (air conditioning)."
        }
      ]
    },

    // --- SET 5: Emergency Zero-Day Patch Advisory ---
    {
      id: "p6-set5",
      part: 6,
      level: 3,
      topic: "Emergency Zero-Day Patch Advisory",
      passage: "CRITICAL SECURITY BULLETIN\nISSUED BY: HexaTech Cyber Incident Response Team (CIRT)\nCLASSIFICATION: Urgent Priority\n\nA remote code execution vulnerability has been uncovered within our corporate VPN gateway client. Threat intelligence reports indicate that malicious actors are _______ [1] attempting to exploit unpatched systems worldwide. To mitigate this imminent threat, a mandatory security hotfix _______ [2] pushed to all enterprise endpoints tonight at 11:00 PM. Workstations that are powered off will receive the update _______ [3] upon reconnecting to the corporate intranet. _______ [4]. Please report any unexpected system freezes directly to the Cyber Hotline.",
      questions: [
        {
          id: "p6-017",
          blankNum: 1,
          stem: "Select the best answer for blank [1]:",
          choices: ["actively", "active", "activity", "activate"],
          answer: 0,
          explanation_vi: "Đứng giữa trợ động từ 'are' và phân từ 'attempting' cần một phó từ chỉ cách thức/tính liên tục -> 'actively' (đang ráo riết/tích cực cố gắng khai thác).",
          trap: "Bẫy từ loại: Chọn tính từ 'active' hoặc danh từ 'activity'."
        },
        {
          id: "p6-018",
          blankNum: 2,
          stem: "Select the best answer for blank [2]:",
          choices: ["will be", "was", "has been", "is being"],
          answer: 0,
          explanation_vi: "Mốc thời gian tương lai rõ ràng trong bài: 'tonight at 11:00 PM' -> Dùng tương lai đơn ở thể bị động: 'will be pushed'.",
          trap: "Bẫy thì quá khứ: Nhầm chọn 'was' hoặc hiện tại hoàn thành 'has been'."
        },
        {
          id: "p6-019",
          blankNum: 3,
          stem: "Select the best answer for blank [3]:",
          choices: ["automatically", "automatic", "automation", "automating"],
          answer: 0,
          explanation_vi: "Đứng trước cụm giới từ 'upon reconnecting' bổ nghĩa cho động từ 'receive' cần phó từ -> 'automatically' (một cách tự động).",
          trap: "Bẫy từ loại: 'automatic' (tính từ) hoặc 'automation' (danh từ)."
        },
        {
          id: "p6-020",
          blankNum: 4,
          stem: "Select the best answer for blank [4]:",
          choices: [
            "Users may notice a momentary network disconnect during the installation process.",
            "Employees are entitled to thirty days of paid paternity leave each year.",
            "The office gym will remain closed for painting over the weekend.",
            "New office stationery supplies can be ordered from the supply catalog."
          ],
          answer: 0,
          explanation_vi: "Câu thông báo phù hợp nhất với quá trình cài đặt bản vá hệ thống: Người dùng có thể thấy ngắt mạng thoáng qua trong khi cài đặt ('momentary network disconnect').",
          trap: "Bẫy các chủ đề nghỉ phép (paternity leave), phòng gym, văn phòng phẩm."
        }
      ]
    },

    // --- SET 6: Annual Employee Benefit Enrollment ---
    {
      id: "p6-set6",
      part: 6,
      level: 1,
      topic: "Annual Healthcare & Benefit Enrollment",
      passage: "MEMORANDUM\nTO: All Full-Time and Contract Employees\nFROM: Benefits Administration Office\nDATE: November 1\nSUBJECT: Open Enrollment Period for Next Year\n\nThe annual benefits open enrollment window begins on Monday, November 10, and will conclude on Friday, November 28. During this designated period, eligible staff members may _______ [1] their current medical, dental, and vision insurance policies. Any changes submitted during open enrollment will become _______ [2] on January 1 of the upcoming year. Those wishing to maintain their current benefit allocations do not need to take any action; their existing coverage will renew automatically. _______ [3]. _______ [4]. Please contact HR Extension 402 with any questions.",
      questions: [
        {
          id: "p6-021",
          blankNum: 1,
          stem: "Select the best answer for blank [1]:",
          choices: ["modify", "modification", "modified", "modifying"],
          answer: 0,
          explanation_vi: "Sau động từ khuyết thiếu 'may' cần một động từ nguyên thể không to -> 'modify' (chỉnh sửa, thay đổi gói bảo hiểm).",
          trap: "Bẫy từ loại: Chọn danh từ 'modification' hoặc phân từ 'modified'."
        },
        {
          id: "p6-022",
          blankNum: 2,
          stem: "Select the best answer for blank [2]:",
          choices: ["effective", "effectively", "effect", "effectiveness"],
          answer: 0,
          explanation_vi: "Cụm cố định: 'become effective on [Date]' có nghĩa là bắt đầu có hiệu lực từ ngày nào.",
          trap: "Bẫy từ loại: Thường nhầm chọn trạng từ 'effectively' hoặc danh từ 'effect'."
        },
        {
          id: "p6-023",
          blankNum: 3,
          stem: "Select the best answer for blank [3]:",
          choices: ["However", "Therefore", "Similarly", "Namely"],
          answer: 0,
          explanation_vi: "Liên từ chuyển tiếp chỉ tương phản 'However' (Tuy nhiên) đứng đầu câu để chuyển ý sang trường hợp ngoại lệ cho nhân viên có người phụ thuộc.",
          trap: "Bẫy liên từ chỉ kết quả 'Therefore' hoặc so sánh 'Similarly'."
        },
        {
          id: "p6-024",
          blankNum: 4,
          stem: "Select the best answer for blank [4]:",
          choices: [
            "Employees adding dependents must provide valid birth or marriage certificates.",
            "All catering services for corporate receptions must be approved by security.",
            "The parking structure will be repaved during the upcoming fiscal quarter.",
            "Conference call credentials will expire every forty-eight hours."
          ],
          answer: 0,
          explanation_vi: "Tiếp nối ý 'However', câu điền vào nêu rõ thủ tục bổ sung người phụ thuộc: phải nộp giấy khai sinh hoặc giấy đăng ký kết hôn hợp lệ.",
          trap: "Bẫy các chủ đề đỗ xe (parking), hội nghị từ xa (conference call), dịch vụ tiệc (catering)."
        }
      ]
    },

    // --- SET 7: GDPR & Data Protection Compliance ---
    {
      id: "p6-set7",
      part: 6,
      level: 2,
      topic: "GDPR & Privacy Compliance Audit",
      passage: "To: Regional Database Administrators\nFrom: Data Governance and Legal Affairs\nDate: August 18\nSubject: Mandatory Customer Data Retention Review\n\nUnder international data protection regulations, HexaTech is legally required to delete obsolete customer telemetry records after twenty-four months of account inactivity. A recent automated compliance audit revealed that several archive databases _______ [1] retained records beyond this mandated timeframe. All database administrators must _______ [2] purge unlinked client records prior to August 31. _______ [3], the compliance task force will conduct random spot audits to verify system integrity across all clusters. _______ [4]. Ensuring customer privacy remains fundamental to our corporate reputation.",
      questions: [
        {
          id: "p6-025",
          blankNum: 1,
          stem: "Select the best answer for blank [1]:",
          choices: ["have inadvertent", "have inadvertently", "has inadvertence", "was inadvertently"],
          answer: 1,
          explanation_vi: "Chủ ngữ là số nhiều ('databases') đi với hiện tại hoàn thành và trạng từ bổ nghĩa: 'have inadvertently retained' (đã vô tình lưu trữ).",
          trap: "Bẫy hòa hợp chủ vị: Chọn 'has' cho chủ ngữ số nhiều 'databases'."
        },
        {
          id: "p6-026",
          blankNum: 2,
          stem: "Select the best answer for blank [2]:",
          choices: ["manually", "manual", "manuals", "manuality"],
          answer: 0,
          explanation_vi: "Đứng giữa 'must' và động từ chính 'purge' cần một trạng từ chỉ cách thức -> 'manually purge' (xóa sạch dữ liệu bằng tay/thủ công).",
          trap: "Bẫy từ loại: Chọn tính từ 'manual'."
        },
        {
          id: "p6-027",
          blankNum: 3,
          stem: "Select the best answer for blank [3]:",
          choices: ["Subsequently", "Conversely", "Whereas", "Instead"],
          answer: 0,
          explanation_vi: "Trạng từ thời gian 'Subsequently' (Sau đó/Tiếp theo đó) diễn tả chuỗi hành động: Sau khi xóa dữ liệu, tổ công tác sẽ tiến hành kiểm tra ngẫu nhiên.",
          trap: "Bẫy trạng từ chỉ sự tương phản 'Conversely' hoặc 'Instead'."
        },
        {
          id: "p6-028",
          blankNum: 4,
          stem: "Select the best answer for blank [4]:",
          choices: [
            "Fines for noncompliance can reach up to four percent of global annual turnover.",
            "The corporate cafeteria will begin offering organic breakfast choices on Monday.",
            "All office desks should be cleared of personal items every evening.",
            "Flight reservations must be submitted three weeks before international travel."
          ],
          answer: 0,
          explanation_vi: "Câu văn củng cố tầm quan trọng của việc tuân thủ luật bảo vệ dữ liệu: Mức phạt vi phạm có thể lên đến 4% tổng doanh thu hàng năm.",
          trap: "Bẫy các quy định nội bộ không liên quan như dọn bàn (cleared of personal items) hay đặt vé máy bay."
        }
      ]
    },

    // --- SET 8: Facilities Relocation & Equipment Delivery ---
    {
      id: "p6-set8",
      part: 6,
      level: 1,
      topic: "Facilities Relocation Notice",
      passage: "ANNOUNCEMENT TO ALL HEADQUARTERS STAFF\nFacilities Management Department\n\nPlease be advised that the corporate logistics division will commence relocating the customer call center to the North Tower this coming weekend. Staff members in Suites 300 through 350 are requested to pack their personal effects into the labeled crates provided _______ [1] Friday at 4:00 PM. High-value computer monitors and cryptographic key readers will be _______ [2] packed by certified technical movers. The North Tower facility features ergonomic workstations and upgraded fiber-optic network infrastructure. _______ [3]. _______ [4]. Thank you for your patience as we finalize this operational expansion.",
      questions: [
        {
          id: "p6-029",
          blankNum: 1,
          stem: "Select the best answer for blank [1]:",
          choices: ["by", "at", "to", "from"],
          answer: 0,
          explanation_vi: "Giới từ 'by' đi với mốc thời gian (Friday at 4:00 PM) chỉ hạn chót hoàn thành hành động đóng gói đồ đạc.",
          trap: "Bẫy giới từ: 'at' chỉ đi riêng với giờ (at 4:00 PM), khi có ngày đi kèm phải dùng 'by Friday at 4:00 PM'."
        },
        {
          id: "p6-030",
          blankNum: 2,
          stem: "Select the best answer for blank [2]:",
          choices: ["securely", "security", "secure", "securing"],
          answer: 0,
          explanation_vi: "Đứng giữa trợ động từ 'will be' và phân từ 'packed' cần một phó từ bổ nghĩa -> 'securely packed' (được đóng gói một cách an toàn, cẩn mật).",
          trap: "Bẫy từ loại: Chọn danh từ 'security' hoặc tính từ 'secure'."
        },
        {
          id: "p6-031",
          blankNum: 3,
          stem: "Select the best answer for blank [3]:",
          choices: ["Additionally", "In contrast", "Nevertheless", "Despite"],
          answer: 0,
          explanation_vi: "Liên từ 'Additionally' (Ngoài ra) dùng để liệt kê thêm tiện ích mới của văn phòng North Tower.",
          trap: "Bẫy liên từ tương phản 'In contrast' hoặc 'Nevertheless'."
        },
        {
          id: "p6-032",
          blankNum: 4,
          stem: "Select the best answer for blank [4]:",
          choices: [
            "Staff members will enjoy access to dedicated quiet collaborative break rooms.",
            "All international shipping fees must be paid in foreign currencies.",
            "The company's stock price reached an unprecedented valuation yesterday.",
            "Employees must complete five hours of overtime during the relocation."
          ],
          answer: 0,
          explanation_vi: "Câu miêu tả tiếp nối tiện ích của văn phòng mới: Nhân viên sẽ có không gian phòng nghỉ ngơi yên tĩnh và hợp tác làm việc.",
          trap: "Bẫy về thị trường chứng khoán (stock price) hoặc chi phí vận chuyển quốc tế."
        }
      ]
    },

    // --- SET 9: Cloud Migration Maintenance Downtime ---
    {
      id: "p6-set9",
      part: 6,
      level: 2,
      topic: "Cloud Migration Maintenance Downtime",
      passage: "SERVICE ADVISORY\nTarget Audience: HexaTech Enterprise Software Clients\nRelease Date: May 2\nSubject: Scheduled Cloud Platform Maintenance Window\n\nIn our ongoing effort to enhance operational resilience and data throughput, HexaTech will perform an architecture migration on our primary analytics cloud. The maintenance window is scheduled to begin on Saturday, May 17, at 22:00 UTC and _______ [1] for approximately six hours. During this period, client dashboard access and automated data reporting will be _______ [2] unavailable. Our engineering team has implemented comprehensive safeguards to ensure that zero data loss occurs during the transfer. _______ [3]. _______ [4]. We apologize for any temporary inconvenience this planned enhancement may cause.",
      questions: [
        {
          id: "p6-033",
          blankNum: 1,
          stem: "Select the best answer for blank [1]:",
          choices: ["last", "lasting", "lasted", "lasts"],
          answer: 0,
          explanation_vi: "Cấu trúc song hành sau 'is scheduled to': 'to begin... and last...' -> Động từ nguyên mẫu 'last' (kéo dài trong khoảng 6 tiếng).",
          trap: "Bẫy chia động từ: Nhầm sang V-ing 'lasting' hoặc số ít 'lasts'."
        },
        {
          id: "p6-034",
          blankNum: 2,
          stem: "Select the best answer for blank [2]:",
          choices: ["temporarily", "temporary", "temporariness", "temporal"],
          answer: 0,
          explanation_vi: "Đứng trước tính từ 'unavailable' cần một phó từ chỉ thời gian -> 'temporarily unavailable' (tạm thời không khả dụng).",
          trap: "Bẫy từ loại: Chọn tính từ 'temporary' đứng trước tính từ 'unavailable'."
        },
        {
          id: "p6-035",
          blankNum: 3,
          stem: "Select the best answer for blank [3]:",
          choices: ["Consequently", "Similarly", "Conversely", "Otherwise"],
          answer: 0,
          explanation_vi: "Trạng từ kết quả 'Consequently' (Do đó/Vì vậy): Vì có các biện pháp bảo vệ toàn diện, hệ thống API sẽ tự động xử lý các truy vấn xếp hàng ngay sau khi kích hoạt.",
          trap: "Bẫy liên từ trái nghĩa 'Conversely'."
        },
        {
          id: "p6-036",
          blankNum: 4,
          stem: "Select the best answer for blank [4]:",
          choices: [
            "All queued API transactions will resume processing automatically once service is restored.",
            "Corporate holiday party invitations will be delivered by courier next month.",
            "Staff members are requested to return all borrowed library books promptly.",
            "The physical office security turnstiles will be replaced with turnstiles."
          ],
          answer: 0,
          explanation_vi: "Câu kỹ thuật phù hợp với ngữ cảnh phục hồi dịch vụ đám mây: Mọi giao dịch API trong hàng đợi sẽ tự động chạy lại ngay khi dịch vụ được khôi phục.",
          trap: "Bẫy các câu tiệc tùng (holiday party) hay trả sách thư viện."
        }
      ]
    },

    // --- SET 10: Supplier Contract Renewal ---
    {
      id: "p6-set10",
      part: 6,
      level: 3,
      topic: "Supplier Contract Renewal & Terms Amendment",
      passage: "Vanguard Microelectronics Ltd.\n742 Commerce Expressway, Suite 900\nOctober 22\n\nMr. Donald Sterling, Procurement Director\nHexaTech Innovations Corp.\n\nDear Mr. Sterling,\n\nWe are writing to confirm our mutual agreement regarding the extension of our semiconductor component supply agreement for another fiscal year. Under the newly negotiated terms, Vanguard will provide an eight percent volume discount on bulk orders, _______ [1] HexaTech meets minimum quarterly purchasing targets. We have also agreed to _______ [2] shipment lead times from fourteen business days to eight business days. Enclosed with this letter is the revised master service contract. _______ [3]. _______ [4]. We value our enduring corporate partnership and anticipate continued mutual growth.\n\nSincerely,\nBeatrice Vance, Vice President of Strategic Accounts",
      questions: [
        {
          id: "p6-037",
          blankNum: 1,
          stem: "Select the best answer for blank [1]:",
          choices: ["provided that", "in order that", "as though", "even though"],
          answer: 0,
          explanation_vi: "Cụm liên từ điều kiện 'provided that' (với điều kiện là / miễn là = 'if') -> Giảm giá 8% với điều kiện HexaTech đạt hạn mức mua hàng tối thiểu.",
          trap: "Bẫy liên từ chỉ mục đích 'in order that' hoặc nhượng bộ 'even though'."
        },
        {
          id: "p6-038",
          blankNum: 2,
          stem: "Select the best answer for blank [2]:",
          choices: ["shorten", "shortening", "shortened", "shortness"],
          answer: 0,
          explanation_vi: "Cấu trúc 'agree to + V(nguyên thể)' -> 'agreed to shorten shipment lead times' (đồng ý rút ngắn thời gian giao hàng).",
          trap: "Bẫy danh từ 'shortness' hoặc phân từ 'shortened'."
        },
        {
          id: "p6-039",
          blankNum: 3,
          stem: "Select the best answer for blank [3]:",
          choices: ["Please review and execute both duplicate signature pages.", "The cafeteria will be closed for quarterly inspection.", "Conference attendees must register their vehicles in advance.", "All international currency transfers incur standard processing fees."],
          answer: 0,
          explanation_vi: "Ý tiếp nối với 'Enclosed with this letter is the revised master service contract': Đề nghị đối tác xem xét và ký cả 2 bản hợp đồng kèm theo.",
          trap: "Bẫy câu nhắc về căng tin, hội nghị hoặc phí ngân hàng."
        },
        {
          id: "p6-040",
          blankNum: 4,
          stem: "Select the best answer for blank [4]:",
          choices: [
            "Once signed, please return one countersigned copy via courier to our legal office.",
            "Our corporate headquarters will be repainted during the spring break.",
            "Weather conditions may delay regional air mail transit times.",
            "All employees must complete mandatory fire drill training."
          ],
          answer: 0,
          explanation_vi: "Hướng dẫn xử lý hợp đồng: Sau khi ký xong, vui lòng gửi trả lại một bản có chữ ký của cả hai bên qua đường chuyển phát nhanh.",
          trap: "Bẫy thời tiết (weather) hoặc diễn tập cứu hỏa (fire drill)."
        }
      ]
    }
  ]
};
