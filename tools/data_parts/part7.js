// Part 7: Reading Comprehension (8 new sets: p7-set3 to p7-set10, 32 questions: p7-009 to p7-040)
module.exports = {
  part7New: [
    // --- SET 3: Corporate Policy Notice (Single) ---
    {
      id: "p7-set3",
      part: 7,
      level: 2,
      topic: "Remote Work & BYOD Cybersecurity Policy",
      passage: "HEXATECH POLICY BULLETIN: BRING YOUR OWN DEVICE (BYOD)\nEffective Date: January 15\nApplies to: All personnel connecting personal mobile devices to corporate networks\n\n1. Device Registration and Compliance\nPrior to accessing corporate e-mail, intranet databases, or Slack workspaces from personal smartphones, laptops, or tablets, employees must enroll the device in the HexaTech Mobile Device Management (MDM) portal. The MDM agent verifies that operating system patches are current and enforces a mandatory six-digit alphanumeric screen lock.\n\n2. Separation of Data and Encryption\nAll corporate correspondence, files, and proprietary client materials stored locally on enrolled devices are partitioned within an encrypted container. Corporate data cannot be copied to personal cloud storage services or unapproved messaging applications.\n\n3. Lost or Stolen Devices\nIn the event that an enrolled device is lost or stolen, the employee must contact the Security Operations Center (Ext. 555) within two hours. The security team reserves the authority to remotely erase corporate data from the device without affecting the employee's personal photographs, contacts, or private media files.",
      questions: [
        {
          id: "p7-009",
          stem: "What is the primary purpose of the policy bulletin?",
          choices: [
            "To outline security rules for personal devices used for work",
            "To announce the replacement of corporate laptop computers",
            "To describe how to apply for a company-subsidized smartphone",
            "To provide instructions for installing personal social media apps"
          ],
          answer: 0,
          explanation_vi: "Đoạn văn nêu rõ quy định bảo mật khi kết nối thiết bị cá nhân (BYOD) vào mạng công ty: 'outline security rules for personal devices used for work'.",
          trap: "Bẫy từ 'subsidized smartphone' - chính sách chỉ quy định thiết bị cá nhân của nhân viên chứ không trợ cấp mua máy."
        },
        {
          id: "p7-010",
          stem: "What requirement must a personal device meet during enrollment?",
          choices: [
            "It must enforce a six-digit alphanumeric screen lock.",
            "It must be manufactured within the last twelve months.",
            "It must have at least one hundred gigabytes of free storage.",
            "It must be equipped with physical biometric thumbprint sensors."
          ],
          answer: 0,
          explanation_vi: "Mục 1 nêu: 'enforces a mandatory six-digit alphanumeric screen lock' (khóa màn hình 6 ký tự gồm chữ và số).",
          trap: "Bẫy các tiêu chí phần cứng không có trong văn bản như bộ nhớ 100GB hay năm sản xuất."
        },
        {
          id: "p7-011",
          stem: "What should employees do if their enrolled mobile phone is lost?",
          choices: [
            "Notify security personnel within two hours",
            "File a formal claim with their personal insurance provider",
            "Submit an expedited purchase order for a replacement",
            "Change their passwords from a coworker's desktop terminal"
          ],
          answer: 0,
          explanation_vi: "Mục 3 ghi: 'employee must contact the Security Operations Center (Ext. 555) within two hours'.",
          trap: "Bẫy các hành động khác như mua máy mới hoặc nộp bảo hiểm cá nhân."
        },
        {
          id: "p7-012",
          stem: "What happens during a remote data erasure?",
          choices: [
            "Only corporate data is wiped from the device.",
            "All personal photos and private contacts are permanently deleted.",
            "The device's cellular contract is immediately terminated.",
            "The operating system is downgraded to factory default settings."
          ],
          answer: 0,
          explanation_vi: "Câu cuối mục 3 nêu rõ: 'remotely erase corporate data... without affecting personal photographs, contacts, or private media files' -> Chỉ xóa dữ liệu công ty.",
          trap: "Bẫy hiểu nhầm: Nghĩ rằng xóa trắng cả dữ liệu cá nhân (personal photos)."
        }
      ]
    },

    // --- SET 4: Text Message Chain (Single) ---
    {
      id: "p7-set4",
      part: 7,
      level: 2,
      topic: "Urgent Data Center Cooling Alert (Text Chain)",
      passage: "SECURE CHAT LOG: SERVER INFRASTRUCTURE DISPATCH\nParticipants: Kenji Sato (Facilities Lead), Rachel Moore (Lead Systems Engineer), Carlos Gomez (Shift Supervisor)\nTime: 14:15 - 14:32\n\nKenji Sato [14:15]:\nRachel, Carlos, our environmental monitoring sensors in Server Room B just triggered an amber alert. The ambient rack temperature has risen from 21°C to 28°C in the last twenty minutes.\n\nRachel Moore [14:18]:\nI see the telemetry alert on my dashboard too. The main database cluster is beginning to throttle processing clock speeds to prevent thermal hardware degradation. Did the secondary chiller kick in?\n\nKenji Sato [14:21]:\nNegative. I just inspected the mechanical mezzanine. Chiller Unit 2 has a blown electrical fuse. I've already dispatched the emergency HVAC contractor, but transit time will take forty minutes.\n\nCarlos Gomez [14:24]:\nWe can't wait that long. Room B hosts our financial transactions database. Rachel, can we dynamically reroute half the live production queries to our West Coast disaster recovery center?\n\nRachel Moore [14:27]:\nYes, I'm initiating load shedding now. That will drop Server Room B's computational load by 60% and buy Kenji sufficient time.\n\nKenji Sato [14:32]:\nAppreciate it, Rachel. The HVAC technician just texted; he arrived at the loading dock security gate.",
      questions: [
        {
          id: "p7-013",
          stem: "What is the emergency situation in Server Room B?",
          choices: [
            "The cooling equipment malfunctioned and temperatures are climbing.",
            "A fire broke out in the electrical generator room.",
            "Water leaked from the ceiling onto primary database racks.",
            "Unauthorized intruders entered through the loading dock."
          ],
          answer: 0,
          explanation_vi: "Đoạn chat bắt đầu bằng cảnh báo nhiệt độ phòng máy chủ tăng vọt từ 21 lên 28 độ do hỏng điều hòa (Chiller Unit 2 blown fuse).",
          trap: "Bẫy các tình huống tai nạn khác như rò nước (water leak) hay hỏa hoạn (fire)."
        },
        {
          id: "p7-014",
          stem: "Why does Carlos want immediate action taken?",
          choices: [
            "Server Room B processes critical financial transactions.",
            "The emergency contractor refused to come to the facility.",
            "The building manager ordered an immediate evacuation.",
            "Server racks in Room B contain classified military contracts."
          ],
          answer: 0,
          explanation_vi: "Carlos giải thích: 'We can't wait that long. Room B hosts our financial transactions database'.",
          trap: "Bẫy các lý do cực đoan không có trong bài như sơ tán tòa nhà hay hợp đồng quân sự."
        },
        {
          id: "p7-015",
          stem: "At 14:27, what does Rachel mean when she writes, 'buy Kenji sufficient time'?",
          choices: [
            "It will prevent equipment damage while the repairs are made.",
            "She will purchase spare cooling equipment on the corporate card.",
            "Kenji will be granted extra paid vacation hours.",
            "She will reschedule a client presentation until tomorrow."
          ],
          answer: 0,
          explanation_vi: "Cụm 'buy time' có nghĩa là kéo dài thời gian, ngăn ngừa quá nhiệt gây hỏng hóc phần cứng trong khi chờ thợ sửa điều hòa đến.",
          trap: "Bẫy nghĩa đen của từ 'buy' (mua sắm thiết bị bằng thẻ tín dụng)."
        },
        {
          id: "p7-016",
          stem: "Who has arrived at the facility by 14:32?",
          choices: [
            "The heating and air conditioning repair specialist",
            "The regional financial accounts auditor",
            "The West Coast database administrator",
            "A courier delivering replacement server chips"
          ],
          answer: 0,
          explanation_vi: "Kenji xác nhận lúc 14:32: 'The HVAC technician just texted; he arrived at the loading dock security gate' (HVAC = heating, ventilation, air conditioning).",
          trap: "Bẫy từ viết tắt HVAC không nhận diện được là kỹ thuật viên điều hòa/làm mát."
        }
      ]
    },

    // --- SET 5: Commercial Advertisement (Single) ---
    {
      id: "p7-set5",
      part: 7,
      level: 2,
      topic: "Managed Threat Detection & Response Service Ad",
      passage: "AEGIS CYBER DEFENSE SOLUTIONS\nNext-Generation Managed Detection & Response (MDR)\n\nIs your internal IT staff overwhelmed by hundreds of false-positive firewall notifications every day? Sophisticated cyber syndicates do not sleep, and neither do we.\n\nAegis MDR provides around-the-clock telemetry surveillance, automated threat hunting, and rapid incident isolation tailored specifically for medium and enterprise-scale organizations. Leveraging machine-learning heuristics and our global threat intelligence network, Aegis neutralizes ransomware and zero-day breaches in an average of 4.2 minutes—well below the industry standard of several hours.\n\nKey Package Advantages:\n• 24/7/365 SOC Monitoring: Dedicated certified analysts stationed across three continents.\n• Frictionless Deployment: Cloud-native endpoint sensors install in under fifteen minutes with zero server restarts required.\n• Breach Warranty Guarantee: Up to $2,000,000 in remediation coverage for qualified subscribers.\n\nSpecial Promotional Offer:\nSchedule a complimentary infrastructure vulnerability assessment before November 30 and receive thirty days of unrestricted premium surveillance at no charge. Visit www.aegisdefense.io/trial to register.",
      questions: [
        {
          id: "p7-017",
          stem: "What service is Aegis Cyber Defense advertising?",
          choices: [
            "A continuous managed threat detection and response platform",
            "Physical office building security camera installations",
            "Custom accounting software development for small businesses",
            "A high-speed satellite broadband internet service"
          ],
          answer: 0,
          explanation_vi: "Quảng cáo giới thiệu dịch vụ Next-Generation Managed Detection & Response (MDR) - giám sát và phản ứng sự cố an ninh mạng 24/7.",
          trap: "Bẫy từ 'security camera' (an ninh vật lý) hoặc phần mềm kế toán (accounting software)."
        },
        {
          id: "p7-018",
          stem: "According to the advertisement, what is a feature of the endpoint sensors?",
          choices: [
            "They can be deployed without restarting servers.",
            "They require specialized hardware installation in each office.",
            "They are completely free for enterprise companies indefinitely.",
            "They only function when connected to fiber-optic cables."
          ],
          answer: 0,
          explanation_vi: "Đặc điểm cảm biến endpoint: 'install in under fifteen minutes with zero server restarts required' (không cần khởi động lại máy chủ).",
          trap: "Bẫy miễn phí vĩnh viễn (free indefinitely) thay vì chỉ khuyến mãi 30 ngày dùng thử."
        },
        {
          id: "p7-019",
          stem: "The word 'complimentary' in the final paragraph is closest in meaning to:",
          choices: ["free", "flattering", "frequent", "complex"],
          answer: 0,
          explanation_vi: "Trong ngữ cảnh thương mại và đề thi TOEIC, 'complimentary assessment/ticket/breakfast' đồng nghĩa với 'free' (miễn phí).",
          trap: "Bẫy nghĩa khen ngợi của từ 'compliment' (flattering = tâng bốc, khen ngợi)."
        },
        {
          id: "p7-020",
          stem: "What must prospective customers do to qualify for the promotional offer?",
          choices: [
            "Schedule a vulnerability assessment prior to November 30",
            "Purchase a five-year corporate software license",
            "Submit an existing insurance claim for review",
            "Attend an in-person workshop at the company headquarters"
          ],
          answer: 0,
          explanation_vi: "Đoạn cuối hướng dẫn: 'Schedule a complimentary infrastructure vulnerability assessment before November 30'.",
          trap: "Bẫy mua hợp đồng 5 năm (five-year license) hoặc dự hội thảo trực tiếp (in-person workshop)."
        }
      ]
    },

    // --- SET 6: Executive Appointment & Corporate Reorganization (Single) ---
    {
      id: "p7-set6",
      part: 7,
      level: 1,
      topic: "Executive Restructuring & CISO Appointment",
      passage: "PRESS RELEASE: FOR IMMEDIATE RELEASE\nHEXATECH INNOVATIONS CORP. ANNOUNCES EXECUTIVE APPOINTMENT\nSan Francisco, CA — April 3\n\nHexaTech Innovations Corp. today announced that its Board of Directors has unanimously confirmed the appointment of Dr. Aris Thorne as Chief Information Security Officer (CISO), effective May 1. Dr. Thorne will oversee global cybersecurity architecture, threat intelligence, and data privacy governance across the company's twelve international development centers.\n\nDr. Thorne brings more than eighteen years of cybersecurity leadership experience to HexaTech. Most recently, she served as Senior Vice President of Risk Mitigation at Apex Financial Holdings, where she directed the architectural transition of the firm's core retail banking systems to a Zero-Trust framework. Prior to Apex, she conducted cryptographical research at the National Institute of Computational Sciences.\n\n\"As HexaTech expands its enterprise cloud software footprint, ensuring that our systems remain resilient against evolving state-sponsored cyber threats is paramount,\" said David Kim, Chief Executive Officer of HexaTech. \"Dr. Thorne's proven track record of securing mission-critical enterprise environments makes her the ideal leader for our cybersecurity posture.\"\n\nDr. Thorne holds a Ph.D. in Computer Science from the Massachusetts Institute of Technology and serves on the advisory board of the Open Cloud Security Foundation.",
      questions: [
        {
          id: "p7-021",
          stem: "What is the main topic of the press release?",
          choices: [
            "The hiring of a new Chief Information Security Officer",
            "The merger of two international financial institutions",
            "The discovery of a security flaw in cloud banking software",
            "The relocation of corporate headquarters to San Francisco"
          ],
          answer: 0,
          explanation_vi: "Thông cáo báo chí công bố việc bổ nhiệm Tiến sĩ Aris Thorne vào vị trí CISO (Chief Information Security Officer).",
          trap: "Bẫy sáp nhập (merger) hoặc chuyển trụ sở (relocation)."
        },
        {
          id: "p7-022",
          stem: "What did Dr. Thorne accomplish in her previous role at Apex Financial?",
          choices: [
            "She transitioned core banking systems to a Zero-Trust architecture.",
            "She negotiated the sale of fifteen branch retail banking locations.",
            "She wrote an introductory textbook on basic network programming.",
            "She opened twelve software development offices across Europe."
          ],
          answer: 0,
          explanation_vi: "Đoạn 2 nêu: 'directed the architectural transition of the firm's core retail banking systems to a Zero-Trust framework'.",
          trap: "Bẫy con số 12 (đó là số trung tâm của HexaTech, không phải thành tích ở Apex)."
        },
        {
          id: "p7-023",
          stem: "When will Dr. Thorne officially begin her duties at HexaTech?",
          choices: ["May 1", "April 3", "May 15", "June 30"],
          answer: 0,
          explanation_vi: "Đoạn 1 nêu rõ mốc thời gian: 'effective May 1' (có hiệu lực từ ngày 1 tháng 5).",
          trap: "Bẫy ngày phát hành thông cáo báo chí (April 3)."
        },
        {
          id: "p7-024",
          stem: "What is indicated about Dr. Thorne's academic background?",
          choices: [
            "She earned a doctorate in Computer Science from MIT.",
            "She completed an MBA in International Finance in London.",
            "She taught undergraduate statistics at San Francisco University.",
            "She holds a degree in Corporate Commercial Law."
          ],
          answer: 0,
          explanation_vi: "Đoạn cuối nêu: 'Dr. Thorne holds a Ph.D. in Computer Science from the Massachusetts Institute of Technology (MIT)'.",
          trap: "Bẫy bằng cấp kinh doanh (MBA) hoặc luật (Law)."
        }
      ]
    },

    // --- SET 7: Incident Triage & Forensic Audit Report (Single) ---
    {
      id: "p7-set7",
      part: 7,
      level: 3,
      topic: "Forensic Triage & Post-Incident Security Briefing",
      passage: "HEXATECH SECURITY OPERATIONS CENTER: INCIDENT POST-MORTEM\nIncident Identifier: INC-2026-0882\nSeverity Level: Critical (Severity 1)\nDate of Incident: September 12\nInvestigator: Senior Threat Analyst Marcus Vance\n\nEXECUTIVE SUMMARY\nAt 03:14 UTC on September 12, automated network telemetry detected abnormal outbound data transfers from a staging development database. The Security Operations Center initiated immediate containment protocols at 03:22 UTC by severing the compromised virtual subnet from the primary network backbone. Total incident duration was 8 minutes from detection to complete isolation.\n\nROOT CAUSE ANALYSIS\nThe threat actor gained unauthorized initial access by utilizing compromised VPN credentials belonging to an external HVAC contractor. The contractor's workstation had contracted an infostealer trojan three days prior. Because the contractor's credentials were not protected by multi-factor authentication, the attacker authenticated successfully and moved laterally toward internal development databases.\n\nIMPACT EVALUATION\nForensic disk inspection confirmed that the attacker accessed synthetic test data containing simulated account numbers. Zero authentic client records or personally identifiable financial data were compromised. No ransomware payloads were executed, and system integrity remains fully verified.\n\nREMEDIATION MANDATES\n1. Discontinue all single-factor authentication for third-party vendors immediately.\n2. Require all vendor endpoints to install corporate endpoint security agents prior to connecting.\n3. Rotate all database administration encryption certificates by September 15.",
      questions: [
        {
          id: "p7-025",
          stem: "How long did it take the security team to isolate the compromised subnet after detection?",
          choices: ["8 minutes", "3 days", "3 hours", "12 minutes"],
          answer: 0,
          explanation_vi: "Đoạn tóm tắt nêu rõ: 'Total incident duration was 8 minutes from detection to complete isolation' (từ 03:14 đến 03:22 UTC = 8 phút).",
          trap: "Bẫy con số 3 ngày (thời gian máy của nhà thầu bị dính mã độc trước đó)."
        },
        {
          id: "p7-026",
          stem: "How did the intruder initially gain access to the network?",
          choices: [
            "By using compromised login details from an external contractor",
            "By guessing the root password of the primary database server",
            "By physically breaking into the server room loading dock",
            "By exploiting a zero-day vulnerability in web browser software"
          ],
          answer: 0,
          explanation_vi: "Root Cause ghi nhận: 'utilizing compromised VPN credentials belonging to an external HVAC contractor'.",
          trap: "Bẫy đột nhập vật lý (physically breaking in) hoặc khai thác lỗ hổng trình duyệt."
        },
        {
          id: "p7-027",
          stem: "What data did the threat actor actually access?",
          choices: [
            "Simulated test data with fictitious numbers",
            "Actual client credit card numbers and passwords",
            "Executive salary and performance records",
            "Proprietary software source code repositories"
          ],
          answer: 0,
          explanation_vi: "Phần Impact nêu: 'accessed synthetic test data containing simulated account numbers. Zero authentic client records... were compromised'.",
          trap: "Bẫy hiểu nhầm sang dữ liệu thật (actual client credit card numbers)."
        },
        {
          id: "p7-028",
          stem: "Which remedial action must be taken immediately?",
          choices: [
            "Stop allowing single-factor authentication for outside vendors",
            "Reimburse customers for potential identity theft damages",
            "Replace all physical computer hardware in the staging room",
            "Fire the security operations center shift manager"
          ],
          answer: 0,
          explanation_vi: "Mục Remediation số 1: 'Discontinue all single-factor authentication for third-party vendors immediately'.",
          trap: "Bẫy bồi thường khách hàng (reimburse customers) trong khi không có dữ liệu thật nào bị rò rỉ."
        }
      ]
    },

    // --- SET 8: DOUBLE PASSAGE (Order Invoice & Customer Inquiry) ---
    {
      id: "p7-set8",
      part: 7,
      level: 2,
      topic: "Hardware Order Confirmation & Support Inquiry (Double Passage)",
      passage: "[DOCUMENT 1: PURCHASE ORDER CONFIRMATION]\nVORTEX HARDWARE SUPPLIES LTD.\nInvoice #: VX-88402\nOrder Date: June 12\nCustomer: HexaTech Innovations Corp.\nShipping Address: 400 Silicon Parkway, Building B, Austin, TX\n\nItem # | Description | Qty | Unit Price | Total\n--------------------------------------------------------------\nVH-102 | Cat6a Shielded Ethernet Cable (50m) | 20 | $45.00 | $900.00\nVH-305 | 24-Port Gigabit Managed Network Switch | 2 | $350.00 | $700.00\nVH-810 | Dual-Frequency Wireless Access Point | 4 | $175.00 | $700.00\n--------------------------------------------------------------\nSubtotal: $2,300.00\nStandard Ground Shipping (3-5 business days): $65.00\nTotal Invoiced Amount: $2,365.00\nPayment Method: Corporate Account Balance (Paid in Full)\nEstimated Delivery Date: June 17\nNote: All electronic hardware components carry a 3-year manufacturer warranty.\n\n==============================================================\n\n[DOCUMENT 2: CUSTOMER SUPPORT INQUIRY]\nTo: support@vortexsupplies.com\nFrom: g.montoya@hexatech.com\nDate: June 18\nSubject: Invoice VX-88402 / Incomplete Delivery\n\nDear Customer Support Team,\n\nWe received shipment VX-88402 yesterday afternoon at our Austin facility. While the Ethernet cables and managed network switches were in perfect condition, the shipping carton was missing the wireless access points (Item VH-810).\n\nOur network deployment timeline requires these access points to configure the second-floor workstations before our new interns arrive next Monday. Could you please confirm if the access points were shipped under a separate tracking consignment, or if an expedited shipment can be dispatched today via overnight courier? Please contact me at Extension 204 or reply directly to this email.\n\nSincerely,\nGabriel Montoya, Infrastructure Procurement Coordinator\nHexaTech Innovations Corp.",
      questions: [
        {
          id: "p7-029",
          stem: "What item was NOT included in the received delivery?",
          choices: [
            "Dual-Frequency Wireless Access Points",
            "Shielded Ethernet Cables",
            "Gigabit Managed Network Switches",
            "Installation Screws and Brackets"
          ],
          answer: 0,
          explanation_vi: "Email thứ 2 nêu rõ: 'the shipping carton was missing the wireless access points (Item VH-810)'.",
          trap: "Bẫy các sản phẩm đã nhận đầy đủ như cáp mạng (cables) hay switch mạng."
        },
        {
          id: "p7-030",
          stem: "How much did HexaTech pay in total for the order?",
          choices: ["$2,365.00", "$2,300.00", "$900.00", "$700.00"],
          answer: 0,
          explanation_vi: "Hóa đơn nêu: Subtotal $2,300.00 + phí vận chuyển $65.00 = Tổng thanh toán '$2,365.00'.",
          trap: "Bẫy số tiền chưa cộng phí vận chuyển ($2,300.00)."
        },
        {
          id: "p7-031",
          stem: "Why does Mr. Montoya need the missing equipment urgently?",
          choices: [
            "To configure workstations before new staff members arrive",
            "To replace damaged equipment after an office fire",
            "To demonstrate products at an upcoming trade show",
            "To return borrowed equipment to another department"
          ],
          answer: 0,
          explanation_vi: "Trong Document 2, ông Montoya viết: 'configure the second-floor workstations before our new interns arrive next Monday'.",
          trap: "Bẫy mang đi triển lãm (trade show) hay cháy nổ (fire)."
        },
        {
          id: "p7-032",
          stem: "What request does Mr. Montoya make to Vortex Hardware?",
          choices: [
            "To send the missing items by overnight delivery",
            "To cancel the order and provide a full refund",
            "To extend the product warranty by twelve months",
            "To update the billing address on the corporate invoice"
          ],
          answer: 0,
          explanation_vi: "Email nêu: 'if an expedited shipment can be dispatched today via overnight courier' (gửi hỏa tốc qua đêm).",
          trap: "Bẫy hủy đơn hoàn tiền (cancel and refund) trong khi ông Montoya cần thiết bị gấp."
        }
      ]
    },

    // --- SET 9: DOUBLE PASSAGE (Vulnerability Disclosure & Security Resolution) ---
    {
      id: "p7-set9",
      part: 7,
      level: 3,
      topic: "Bug Bounty Vulnerability Disclosure & Patch Resolution (Double Passage)",
      passage: "[DOCUMENT 1: EXTERNAL RESEARCHER DISCLOSURE REPORT]\nHEXATECH BUG BOUNTY PROGRAM\nReport Date: July 10\nResearcher Handle: @CyberSentinel_UK (Dr. Liam Patel)\nVulnerability Class: Stored Cross-Site Scripting (XSS) in User Profile Settings\nAssigned Severity: High (CVSS Score: 7.8)\n\nDescription:\nWhile evaluating the HexaTech Employee Dashboard portal (v1.4.2), I observed that input provided in the 'Student Name' and 'Target Score' fields is stored and subsequently rendered into victory modals without proper HTML entity escaping. An attacker could craft an SVG or script payload inside the student name field that executes malicious JavaScript within the administrative session when viewing score certificates.\n\nSteps to Reproduce:\n1. Open Settings modal and enter test payload: <img src=x onerror=alert(document.domain)>\n2. Save settings and complete a Boss battle challenge.\n3. Upon triggering the promotion modal, the unsanitized script executes.\nRecommended Fix: Implement strict string escaping (e.g. escapeHTML) and merge state through schema validation.\n\n==============================================================\n\n[DOCUMENT 2: SECURITY ADVISORY & BOUNTY AWARD NOTICE]\nTo: Dr. Liam Patel (@CyberSentinel_UK)\nFrom: HexaTech Product Security Incident Response Team (PSIRT)\nDate: July 16\nSubject: Resolution Confirmation: Bug Report #BB-2026-441\n\nDear Dr. Patel,\n\nOur engineering team has thoroughly reviewed your vulnerability disclosure regarding unescaped user profile inputs in Dashboard v1.4.2. We are pleased to confirm that your findings were verified and completely remediated in our v1.4.3 release deployed this morning.\n\nAs recommended in your report, all user string interpolations now utilize an escapeHTML() sanitization utility, and data imports are validated against DEFAULT_STATE schemas to eliminate code injection vectors.\n\nIn recognition of your responsible disclosure and clear reproduction steps, the HexaTech Bounty Committee has awarded you a bounty payment of $3,500 along with recognition on our Public Security Hall of Fame. The funds will be transferred to your designated account within five business days.\n\nSincerely,\nDirector of Application Security, HexaTech Innovations Corp.",
      questions: [
        {
          id: "p7-033",
          stem: "What type of vulnerability was uncovered by Dr. Patel?",
          choices: [
            "A stored cross-site scripting (XSS) vulnerability",
            "An unencrypted password transmission flaw",
            "A physical hardware bypass in security badges",
            "A denial-of-service weakness in web servers"
          ],
          answer: 0,
          explanation_vi: "Document 1 ghi rõ: 'Vulnerability Class: Stored Cross-Site Scripting (XSS) in User Profile Settings'.",
          trap: "Bẫy các loại lỗ hổng khác như DoS hoặc rò mật khẩu."
        },
        {
          id: "p7-034",
          stem: "Where in the application was the vulnerability triggered?",
          choices: [
            "In the settings input fields and victory certificates",
            "In the shopping cart checkout payment page",
            "In the audio synthesizer sound generation buffer",
            "In the external employee calendar synchronization module"
          ],
          answer: 0,
          explanation_vi: "Báo cáo nêu: 'Student Name' and 'Target Score' fields... rendered into victory modals without proper HTML entity escaping.",
          trap: "Bẫy trang thanh toán (checkout page) hoặc âm thanh (audio buffer)."
        },
        {
          id: "p7-035",
          stem: "What fix did HexaTech implement in version 1.4.3?",
          choices: [
            "They introduced an escapeHTML utility and state schema validation.",
            "They completely disabled user profiles and student names.",
            "They restricted dashboard access exclusively to office IP addresses.",
            "They required all students to purchase antivirus subscriptions."
          ],
          answer: 0,
          explanation_vi: "Document 2 xác nhận: 'user string interpolations now utilize an escapeHTML() sanitization utility, and data imports are validated against DEFAULT_STATE schemas'.",
          trap: "Bẫy xóa bỏ hoàn toàn tên học viên (disabled student names) hoặc bắt mua phần mềm diệt virus."
        },
        {
          id: "p7-036",
          stem: "What reward did Dr. Patel receive from HexaTech?",
          choices: [
            "A cash bounty of $3,500 and Hall of Fame recognition",
            "A complimentary one-year subscription to cloud software",
            "An offer of full-time employment as a security director",
            "A new high-performance laptop and travel voucher"
          ],
          answer: 0,
          explanation_vi: "Document 2 công bố: 'awarded you a bounty payment of $3,500 along with recognition on our Public Security Hall of Fame'.",
          trap: "Bẫy mời làm việc chính thức (full-time employment offer) hoặc tặng máy tính xách tay (laptop)."
        }
      ]
    },

    // --- SET 10: DOUBLE PASSAGE (Conference Schedule & Follow-Up Email) ---
    {
      id: "p7-set10",
      part: 7,
      level: 2,
      topic: "Tech Symposium Agenda & Speaker Follow-up (Double Passage)",
      passage: "[DOCUMENT 1: SYMPOSIUM PROGRAM GUIDE]\nINTERNATIONAL ENTERPRISE TECH SUMMIT\nGrand Metro Convention Center, Chicago, IL\nDay 2 Schedule: Thursday, October 16\n\n09:00 - 10:15 | Room A\nKeynote Address: Scaling Microservices in Multi-Cloud Infrastructures\nSpeaker: Dr. Kenneth Chen, Chief Architect at NovaScale Systems\n\n10:30 - 11:45 | Room C\nPanel Discussion: Modernizing Legacy Mainframes Without Downtime\nModerator: Sophia Al-Mansoor, VP of Systems Engineering, HexaTech\n\n12:00 - 13:30 | Grand Ballroom\nNetworking Luncheon & Technology Exhibition (Sponsored by CloudMatrix)\n\n13:45 - 15:00 | Room B\nInteractive Workshop: Defending Enterprise Endpoints Against AI-Driven Malware\nFacilitator: Marcus Vance, HexaTech Senior Threat Analyst\n*Note: Participants should bring laptops with Wi-Fi capability for hands-on malware reverse-engineering labs.\n\n15:15 - 16:30 | Room A\nClosing Executive Round Table: Regulatory Compliance Trends for 2027\n\n==============================================================\n\n[DOCUMENT 2: FOLLOW-UP CORRESPONDENCE]\nTo: attendees-workshopB@techsummit2026.org\nFrom: m.vance@hexatech.com\nDate: October 17\nSubject: Resources and Lab Slides from Yesterday's Endpoint Defense Workshop\n\nDear Workshop Participants,\n\nThank you for attending yesterday afternoon's session on combating AI-driven malware in Room B. Due to the high attendance and extensive live audience questions, we were unable to review the final three interactive case studies on heuristic anomaly detection.\n\nAs promised during the session, I have uploaded the complete presentation slides, the Python reverse-engineering lab scripts, and our curated indicator-of-compromise (IOC) dataset to our public GitHub repository at github.com/hexatech/endpoint-defense-labs.\n\nIf your organization is currently re-evaluating its endpoint protection architecture and would like to explore our open-source threat simulation tools, feel free to connect with me directly on LinkedIn or email our lab coordinators.\n\nBest regards,\nMarcus Vance\nSenior Threat Analyst, HexaTech Innovations Corp.",
      questions: [
        {
          id: "p7-037",
          stem: "What was required of participants attending Mr. Vance's workshop?",
          choices: [
            "Bringing a laptop computer with wireless capability",
            "Registering at least two weeks before the summit",
            "Paying a supplemental laboratory equipment fee",
            "Submitting proof of security clearance at the door"
          ],
          answer: 0,
          explanation_vi: "Ghi chú ở Document 1 nêu rõ: 'Participants should bring laptops with Wi-Fi capability for hands-on malware reverse-engineering labs'.",
          trap: "Bẫy đóng thêm phí (supplemental fee) hoặc giấy phép an ninh (security clearance)."
        },
        {
          id: "p7-038",
          stem: "What happened during the 13:45 workshop in Room B?",
          choices: [
            "Not all planned case studies were covered due to audience questions.",
            "The wireless internet connection in Room B failed completely.",
            "The facilitator arrived late due to airport transit delays.",
            "The keynote address ran forty-five minutes over its schedule."
          ],
          answer: 0,
          explanation_vi: "Email Document 2 giải thích: 'Due to the high attendance and extensive live audience questions, we were unable to review the final three interactive case studies'.",
          trap: "Bẫy hỏng mạng Wi-Fi (wireless failed) hoặc diễn giả đến muộn (arrived late)."
        },
        {
          id: "p7-039",
          stem: "Where can attendees access the additional reverse-engineering materials?",
          choices: [
            "On a public GitHub repository link",
            "By requesting a physical flash drive by mail",
            "In the symposium printed paper conference handbook",
            "Through a paid subscription database service"
          ],
          answer: 0,
          explanation_vi: "Document 2 viết: 'uploaded the complete presentation slides... to our public GitHub repository at github.com/hexatech/endpoint-defense-labs'.",
          trap: "Bẫy gửi USB qua bưu điện (flash drive by mail) hoặc dịch vụ trả phí (paid subscription)."
        },
        {
          id: "p7-040",
          stem: "According to Document 1, who moderated the panel discussion on mainframes?",
          choices: [
            "Sophia Al-Mansoor",
            "Dr. Kenneth Chen",
            "Marcus Vance",
            "Dr. Liam Patel"
          ],
          answer: 0,
          explanation_vi: "Lịch trình lúc 10:30 - 11:45 ghi rõ: 'Moderator: Sophia Al-Mansoor, VP of Systems Engineering, HexaTech'.",
          trap: "Bẫy chọn các diễn giả khác trong ngày như Dr. Kenneth Chen hay Marcus Vance."
        }
      ]
    }
  ]
};
