/**
 * =====================================================================
 * DATA SCHEMA: VOCABULARY
 * 150+ High-Frequency General TOEIC & 150+ InfoSec/Cybersecurity
 * Total 300 Vocabulary Items
 * =====================================================================
 */
const VOCAB = [
  {
    "word": "vulnerability",
    "ipa": "/ˌvʌl.nər.əˈbɪl.ə.ti/",
    "pos": "noun",
    "meaning_vi": "lỗ hổng bảo mật, điểm yếu",
    "example": "The routine security scan identified a critical vulnerability in the outdated database software.",
    "collocations": [
      "patch a vulnerability",
      "security vulnerability",
      "exploit a vulnerability"
    ],
    "wordFamily": [
      "vulnerable (adj)",
      "invulnerable (adj)"
    ],
    "confusableWith": [
      "weakness",
      "liability"
    ],
    "topic": "IT & Cybersecurity",
    "level": 3
  },
  {
    "word": "confidential",
    "ipa": "/ˌkɒn.fɪˈden.ʃəl/",
    "pos": "adj",
    "meaning_vi": "tuyệt mật, bảo mật",
    "example": "All personnel must sign a non-disclosure agreement before handling confidential client records.",
    "collocations": [
      "strictly confidential",
      "confidential information",
      "remain confidential"
    ],
    "wordFamily": [
      "confidentiality (n)",
      "confidentially (adv)",
      "confidence (n)"
    ],
    "confusableWith": [
      "confident (tự tin)"
    ],
    "topic": "IT & Cybersecurity",
    "level": 2
  },
  {
    "word": "authenticate",
    "ipa": "/ɔːˈθen.tɪ.keɪt/",
    "pos": "verb",
    "meaning_vi": "xác thực, chứng thực",
    "example": "The server requires multi-factor credentials to authenticate remote user access.",
    "collocations": [
      "authenticate identity",
      "user authentication",
      "failed to authenticate"
    ],
    "wordFamily": [
      "authentication (n)",
      "authenticity (n)",
      "authentic (adj)"
    ],
    "confusableWith": [
      "authorize (cấp quyền)"
    ],
    "topic": "IT & Cybersecurity",
    "level": 3
  },
  {
    "word": "mandatory",
    "ipa": "/ˈmæn.də.tər.i/",
    "pos": "adj",
    "meaning_vi": "bắt buộc, theo quy định",
    "example": "Attendance at the quarterly cyber hygiene training is mandatory for all interns.",
    "collocations": [
      "mandatory requirement",
      "mandatory attendance",
      "mandatory compliance"
    ],
    "wordFamily": [
      "mandate (n, v)"
    ],
    "confusableWith": [
      "optional (tùy chọn)"
    ],
    "topic": "IT & Cybersecurity",
    "level": 2
  },
  {
    "word": "breach",
    "ipa": "/briːtʃ/",
    "pos": "noun / verb",
    "meaning_vi": "vi phạm, sự chọc thủng / xâm nhập",
    "example": "The rapid response team contained the data breach before any trade secrets were leaked.",
    "collocations": [
      "security breach",
      "breach of contract",
      "breach the perimeter"
    ],
    "wordFamily": [
      "breached (adj)"
    ],
    "confusableWith": [
      "bleach (tẩy trắng)",
      "broach (đề cập)"
    ],
    "topic": "IT & Cybersecurity",
    "level": 3
  },
  {
    "word": "protocol",
    "ipa": "/ˈprəʊ.tə.kɒl/",
    "pos": "noun",
    "meaning_vi": "giao thức, quy trình chính thức",
    "example": "Employees followed the incident response protocol immediately upon detecting anomalous traffic.",
    "collocations": [
      "security protocol",
      "network protocol",
      "follow standard protocol"
    ],
    "wordFamily": [
      "protocol-based (adj)"
    ],
    "confusableWith": [
      "procedure (thủ tục thông thường)"
    ],
    "topic": "IT & Cybersecurity",
    "level": 2
  },
  {
    "word": "encryption",
    "ipa": "/ɪnˈkrɪp.ʃən/",
    "pos": "noun",
    "meaning_vi": "sự mã hóa",
    "example": "End-to-end encryption ensures that third parties cannot intercept private correspondence.",
    "collocations": [
      "data encryption",
      "encryption key",
      "strong encryption algorithm"
    ],
    "wordFamily": [
      "encrypt (v)",
      "encrypted (adj)",
      "decrypt (v)"
    ],
    "confusableWith": [
      "encoding",
      "compression"
    ],
    "topic": "IT & Cybersecurity",
    "level": 3
  },
  {
    "word": "incident",
    "ipa": "/ˈɪn.sɪ.dənt/",
    "pos": "noun",
    "meaning_vi": "sự cố bất thường",
    "example": "The SOC logged every minor incident during the holiday system migration.",
    "collocations": [
      "incident response",
      "critical incident",
      "report an incident"
    ],
    "wordFamily": [
      "incidental (adj)",
      "incidentally (adv)"
    ],
    "confusableWith": [
      "accident (tai nạn rủi ro)",
      "coincidence (sự trùng hợp)"
    ],
    "topic": "IT & Cybersecurity",
    "level": 2
  },
  {
    "word": "integrity",
    "ipa": "/ɪnˈteɡ.rə.ti/",
    "pos": "noun",
    "meaning_vi": "tính toàn vẹn (dữ liệu), sự chính trực",
    "example": "Hash verification is implemented to confirm the integrity of downloaded system updates.",
    "collocations": [
      "data integrity",
      "system integrity",
      "act with integrity"
    ],
    "wordFamily": [
      "integrate (v)",
      "integral (adj)"
    ],
    "confusableWith": [
      "integration (sự tích hợp)"
    ],
    "topic": "IT & Cybersecurity",
    "level": 3
  },
  {
    "word": "contingency",
    "ipa": "/kənˈtɪn.dʒən.si/",
    "pos": "noun",
    "meaning_vi": "phương án dự phòng, biến cố",
    "example": "The firm formulated a comprehensive contingency plan to maintain operations during power outages.",
    "collocations": [
      "contingency plan",
      "contingency fund",
      "prepare for contingencies"
    ],
    "wordFamily": [
      "contingent (adj, n)"
    ],
    "confusableWith": [
      "consistency (tính nhất quán)"
    ],
    "topic": "IT & Cybersecurity",
    "level": 4
  },
  {
    "word": "compromise",
    "ipa": "/ˈkɒm.prə.maɪz/",
    "pos": "verb / noun",
    "meaning_vi": "làm tổn hại (bảo mật), thỏa hiệp",
    "example": "An unpatched bug allowed hackers to compromise the administrative database.",
    "collocations": [
      "compromise security",
      "reach a compromise",
      "heavily compromised"
    ],
    "wordFamily": [
      "uncompromising (adj)"
    ],
    "confusableWith": [
      "promise",
      "comprise (bao gồm)"
    ],
    "topic": "IT & Cybersecurity",
    "level": 3
  },
  {
    "word": "anomalous",
    "ipa": "/əˈnɒm.ə.ləs/",
    "pos": "adj",
    "meaning_vi": "bất thường, dị thường",
    "example": "Automated intrusion detection flags any anomalous spikes in outgoing data packets.",
    "collocations": [
      "anomalous behavior",
      "anomalous data pattern",
      "detect anomalous activity"
    ],
    "wordFamily": [
      "anomaly (n)",
      "anomalously (adv)"
    ],
    "confusableWith": [
      "anonymous (ẩn danh)"
    ],
    "topic": "IT & Cybersecurity",
    "level": 4
  },
  {
    "word": "comply",
    "ipa": "/kəmˈplaɪ/",
    "pos": "verb",
    "meaning_vi": "tuân thủ, tuân theo",
    "example": "All suppliers must comply with the updated corporate social responsibility policies.",
    "collocations": [
      "comply with regulations",
      "strictly comply",
      "fail to comply"
    ],
    "wordFamily": [
      "compliance (n)",
      "compliant (adj)"
    ],
    "confusableWith": [
      "conform (đi với to)",
      "obey"
    ],
    "topic": "General Business",
    "level": 2
  },
  {
    "word": "reimbursement",
    "ipa": "/ˌriː.ɪmˈbɜːs.mənt/",
    "pos": "noun",
    "meaning_vi": "khoản hoàn tiền, bồi hoàn chi phí",
    "example": "Keep your receipts if you expect reimbursement for meals during overseas business trips.",
    "collocations": [
      "travel reimbursement",
      "seek reimbursement",
      "process reimbursement"
    ],
    "wordFamily": [
      "reimburse (v)",
      "reimbursable (adj)"
    ],
    "confusableWith": [
      "compensation (tiền đền bù/lương)"
    ],
    "topic": "Finance & Accounting",
    "level": 2
  },
  {
    "word": "implement",
    "ipa": "/ˈɪm.plɪ.ment/",
    "pos": "verb / noun",
    "meaning_vi": "thi hành, áp dụng thực tế",
    "example": "The management decided to implement new hybrid-work policies starting next quarter.",
    "collocations": [
      "implement a strategy",
      "implement changes",
      "successfully implement"
    ],
    "wordFamily": [
      "implementation (n)",
      "implementer (n)"
    ],
    "confusableWith": [
      "execute",
      "complement"
    ],
    "topic": "Management",
    "level": 2
  },
  {
    "word": "innovative",
    "ipa": "/ˈɪn.ə.və.tɪv/",
    "pos": "adj",
    "meaning_vi": "sáng tạo, mang tính đổi mới",
    "example": "The company received an industry award for its innovative energy-saving technology.",
    "collocations": [
      "innovative approach",
      "innovative solution",
      "highly innovative"
    ],
    "wordFamily": [
      "innovate (v)",
      "innovation (n)",
      "innovator (n)"
    ],
    "confusableWith": [
      "novel (adj/n)",
      "inventive"
    ],
    "topic": "Marketing & Tech",
    "level": 2
  },
  {
    "word": "facilitate",
    "ipa": "/fəˈsɪl.ɪ.teɪt/",
    "pos": "verb",
    "meaning_vi": "tạo điều kiện thuận lợi, làm cho dễ dàng",
    "example": "The new collaborative software is designed to facilitate communication across regional offices.",
    "collocations": [
      "facilitate discussions",
      "facilitate trade",
      "greatly facilitate"
    ],
    "wordFamily": [
      "facilitator (n)",
      "facilitation (n)",
      "facility (n)"
    ],
    "confusableWith": [
      "felicitate (chúc mừng)"
    ],
    "topic": "Office General",
    "level": 3
  },
  {
    "word": "substantial",
    "ipa": "/səbˈstæn.ʃəl/",
    "pos": "adj",
    "meaning_vi": "đáng kể, lớn lao",
    "example": "The merger yielded a substantial increase in quarterly operating profit.",
    "collocations": [
      "substantial amount",
      "substantial growth",
      "substantial portion"
    ],
    "wordFamily": [
      "substantially (adv)",
      "substantiate (v)"
    ],
    "confusableWith": [
      "significant",
      "sustainable"
    ],
    "topic": "Finance & Accounting",
    "level": 3
  },
  {
    "word": "eligible",
    "ipa": "/ˈel.ɪ.dʒə.bəl/",
    "pos": "adj",
    "meaning_vi": "đủ tư cách, đủ điều kiện",
    "example": "Contractors will be eligible for health insurance benefits after six months of service.",
    "collocations": [
      "eligible for promotion",
      "eligible to participate",
      "fully eligible"
    ],
    "wordFamily": [
      "eligibility (n)"
    ],
    "confusableWith": [
      "illegible (chữ khó đọc)"
    ],
    "topic": "Human Resources",
    "level": 2
  },
  {
    "word": "negotiate",
    "ipa": "/nəˈɡəʊ.ʃi.eɪt/",
    "pos": "verb",
    "meaning_vi": "đàm phán, thương lượng",
    "example": "The procurement team managed to negotiate more favorable contract terms with the vendor.",
    "collocations": [
      "negotiate a contract",
      "negotiate terms",
      "successfully negotiate"
    ],
    "wordFamily": [
      "negotiation (n)",
      "negotiable (adj)",
      "negotiator (n)"
    ],
    "confusableWith": [
      "navigate (định hướng)"
    ],
    "topic": "Sales & Contracts",
    "level": 2
  },
  {
    "word": "specification",
    "ipa": "/ˌspes.ɪ.fɪˈkeɪ.ʃən/",
    "pos": "noun",
    "meaning_vi": "thông số kỹ thuật, đặc tả",
    "example": "The mechanical component was precision-crafted according to the architect's exact specifications.",
    "collocations": [
      "meet specifications",
      "technical specifications",
      "detailed specifications"
    ],
    "wordFamily": [
      "specify (v)",
      "specific (adj)",
      "specifically (adv)"
    ],
    "confusableWith": [
      "specialization (chuyên môn hóa)"
    ],
    "topic": "Manufacturing & Engineering",
    "level": 3
  },
  {
    "word": "provisional",
    "ipa": "/prəˈvɪʒ.ən.əl/",
    "pos": "adj",
    "meaning_vi": "tạm thời, lâm thời",
    "example": "The budget committee approved a provisional schedule pending the CEO's final endorsement.",
    "collocations": [
      "provisional license",
      "provisional agreement",
      "provisional results"
    ],
    "wordFamily": [
      "provisionally (adv)",
      "provision (n)"
    ],
    "confusableWith": [
      "provincial (thuộc về tỉnh)",
      "permanent"
    ],
    "topic": "General Business",
    "level": 4
  },
  {
    "word": "accommodate",
    "ipa": "/əˈkɒm.ə.deɪt/",
    "pos": "verb",
    "meaning_vi": "đáp ứng (nhu cầu), chứa được (người)",
    "example": "The auditorium is spacious enough to accommodate up to five hundred attendees.",
    "collocations": [
      "accommodate requests",
      "accommodate needs",
      "accommodate guests"
    ],
    "wordFamily": [
      "accommodation (n)",
      "accommodating (adj)"
    ],
    "confusableWith": [
      "accumulate (tích lũy)"
    ],
    "topic": "Hospitality & Office",
    "level": 3
  },
  {
    "word": "disruption",
    "ipa": "/dɪsˈrʌp.ʃən/",
    "pos": "noun",
    "meaning_vi": "sự gián đoạn, xáo trộn",
    "example": "Severe winter storms caused significant disruptions to maritime shipping routes.",
    "collocations": [
      "cause disruption",
      "supply chain disruption",
      "minimize disruption"
    ],
    "wordFamily": [
      "disrupt (v)",
      "disruptive (adj)"
    ],
    "confusableWith": [
      "destruction (sự phá hủy)",
      "eruption"
    ],
    "topic": "Logistics & Transport",
    "level": 3
  },
  {
    "word": "unanimous",
    "ipa": "/juːˈnæn.ɪ.məs/",
    "pos": "adj",
    "meaning_vi": "nhất trí, đồng lòng 100%",
    "example": "The board reached a unanimous decision to expand retail operations into Southeast Asia.",
    "collocations": [
      "unanimous agreement",
      "unanimous vote",
      "unanimous approval"
    ],
    "wordFamily": [
      "unanimously (adv)",
      "unanimity (n)"
    ],
    "confusableWith": [
      "anonymous (vô danh)"
    ],
    "topic": "Corporate Management",
    "level": 4
  },
  {
    "word": "supervise",
    "ipa": "/ˈsuː.pə.vaɪz/",
    "pos": "verb",
    "meaning_vi": "giám sát, quản lý",
    "example": "A certified engineer will closely supervise the installation of the backup power generators.",
    "collocations": [
      "supervise staff",
      "directly supervise",
      "supervise operations"
    ],
    "wordFamily": [
      "supervisor (n)",
      "supervision (n)",
      "supervisory (adj)"
    ],
    "confusableWith": [
      "oversee",
      "surmise (phỏng đoán)"
    ],
    "topic": "Management & HR",
    "level": 2
  },
  {
    "word": "preliminary",
    "ipa": "/prɪˈlɪm.ɪ.nər.i/",
    "pos": "adj",
    "meaning_vi": "sơ bộ, bước đầu",
    "example": "Preliminary findings from the customer satisfaction survey indicate strong brand loyalty.",
    "collocations": [
      "preliminary results",
      "preliminary report",
      "preliminary inquiry"
    ],
    "wordFamily": [
      "preliminaries (n)"
    ],
    "confusableWith": [
      "primary (chính yếu/nguyên thủy)"
    ],
    "topic": "Research & Marketing",
    "level": 3
  },
  {
    "word": "remuneration",
    "ipa": "/rɪˌmjuː.nərˈeɪ.ʃən/",
    "pos": "noun",
    "meaning_vi": "thù lao, tiền lương bổng",
    "example": "The remuneration package includes a base salary, annual bonuses, and equity options.",
    "collocations": [
      "financial remuneration",
      "remuneration package",
      "fair remuneration"
    ],
    "wordFamily": [
      "remunerate (v)",
      "remunerative (adj)"
    ],
    "confusableWith": [
      "renunciation (từ bỏ)",
      "reimbursement"
    ],
    "topic": "Human Resources",
    "level": 4
  },
  {
    "word": "adjacent",
    "ipa": "/əˈdʒeɪ.sənt/",
    "pos": "adj",
    "meaning_vi": "liền kề, ngay sát cạnh",
    "example": "The conference cafeteria is located adjacent to the main auditorium on the second floor.",
    "collocations": [
      "adjacent to",
      "adjacent building",
      "adjacent room"
    ],
    "wordFamily": [
      "adjacency (n)"
    ],
    "confusableWith": [
      "adjoining",
      "remote (xa cách)"
    ],
    "topic": "Office & Travel",
    "level": 3
  },
  {
    "word": "prospective",
    "ipa": "/prəˈspek.tɪv/",
    "pos": "adj",
    "meaning_vi": "tiềm năng, có triển vọng trong tương lai",
    "example": "The recruiter scheduled introductory interviews with five prospective candidates.",
    "collocations": [
      "prospective client",
      "prospective buyer",
      "prospective employee"
    ],
    "wordFamily": [
      "prospect (n, v)",
      "prospectus (n)"
    ],
    "confusableWith": [
      "perspective (góc nhìn, quan điểm)"
    ],
    "topic": "Human Resources",
    "level": 3
  },
  {
    "word": "scrutinize",
    "ipa": "/ˈskruː.tɪ.naɪz/",
    "pos": "verb",
    "meaning_vi": "xem xét kỹ lưỡng, săm soi",
    "example": "Internal auditors will scrutinize all corporate expense reports filed during the last fiscal year.",
    "collocations": [
      "scrutinize documents",
      "carefully scrutinize",
      "closely scrutinize"
    ],
    "wordFamily": [
      "scrutiny (n)",
      "scrutinizer (n)"
    ],
    "confusableWith": [
      "examine",
      "criticize (chỉ trích)"
    ],
    "topic": "Finance & Accounting",
    "level": 4
  },
  {
    "word": "stipulate",
    "ipa": "/ˈstɪp.jə.leɪt/",
    "pos": "verb",
    "meaning_vi": "quy định rõ trong điều khoản",
    "example": "The vendor contract clearly stipulates that delivery must occur within thirty calendar days.",
    "collocations": [
      "stipulate conditions",
      "expressly stipulate",
      "as stipulated in"
    ],
    "wordFamily": [
      "stipulation (n)"
    ],
    "confusableWith": [
      "stimulate (kích thích)"
    ],
    "topic": "Legal & Contracts",
    "level": 4
  },
  {
    "word": "curtail",
    "ipa": "/kəˈteɪl/",
    "pos": "verb",
    "meaning_vi": "cắt giảm, rút ngắn bớt",
    "example": "Management resolved to curtail unnecessary business travel in response to macroeconomic headwinds.",
    "collocations": [
      "curtail spending",
      "curtail activities",
      "sharply curtail"
    ],
    "wordFamily": [
      "curtailment (n)"
    ],
    "confusableWith": [
      "cut back",
      "maintain"
    ],
    "topic": "Finance & Strategy",
    "level": 4
  },
  {
    "word": "deficit",
    "ipa": "/ˈdef.ɪ.sɪt/",
    "pos": "noun",
    "meaning_vi": "khoản thâm hụt tài chính",
    "example": "The overseas subsidiary reduced its budget deficit through stringent overhead cost reductions.",
    "collocations": [
      "budget deficit",
      "trade deficit",
      "reduce a deficit"
    ],
    "wordFamily": [
      "deficient (adj)",
      "deficiency (n)"
    ],
    "confusableWith": [
      "surplus (thặng dư)"
    ],
    "topic": "Finance & Accounting",
    "level": 3
  },
  {
    "word": "endorse",
    "ipa": "/ɪnˈdɔːs/",
    "pos": "verb",
    "meaning_vi": "chấp thuận, ủng hộ, quảng cáo cho",
    "example": "The celebrity athlete agreed to endorse the sports nutrition product line globally.",
    "collocations": [
      "endorse a product",
      "officially endorse",
      "strongly endorse"
    ],
    "wordFamily": [
      "endorsement (n)",
      "endorser (n)"
    ],
    "confusableWith": [
      "approve",
      "enforce (bắt buộc thực thi)"
    ],
    "topic": "Marketing & Management",
    "level": 3
  },
  {
    "word": "fluctuate",
    "ipa": "/ˈflʌk.tʃu.eɪt/",
    "pos": "verb",
    "meaning_vi": "dao động, lên xuống thất thường",
    "example": "Foreign currency exchange rates fluctuate constantly depending on global trade sentiments.",
    "collocations": [
      "fluctuate wildly",
      "prices fluctuate",
      "fluctuate between"
    ],
    "wordFamily": [
      "fluctuation (n)",
      "fluctuating (adj)"
    ],
    "confusableWith": [
      "vary",
      "stabilize (ổn định)"
    ],
    "topic": "Finance & Economics",
    "level": 3
  },
  {
    "word": "indispensable",
    "ipa": "/ˌɪn.dɪˈspen.sə.bəl/",
    "pos": "adj",
    "meaning_vi": "không thể thiếu, cốt yếu",
    "example": "Her multilingual proficiency proved indispensable when closing the South American joint venture.",
    "collocations": [
      "indispensable tool",
      "indispensable asset",
      "prove indispensable"
    ],
    "wordFamily": [
      "dispense (v)",
      "dispensable (adj)"
    ],
    "confusableWith": [
      "essential",
      "dispensable (có thể bỏ qua)"
    ],
    "topic": "General Business",
    "level": 4
  },
  {
    "word": "lucrative",
    "ipa": "/ˈluː.krə.tɪv/",
    "pos": "adj",
    "meaning_vi": "sinh lợi cao, béo bở",
    "example": "Winning the government defense contract provided the firm with a highly lucrative revenue stream.",
    "collocations": [
      "lucrative deal",
      "lucrative market",
      "lucrative career"
    ],
    "wordFamily": [
      "lucratively (adv)"
    ],
    "confusableWith": [
      "profitable",
      "loss-making"
    ],
    "topic": "Finance & Sales",
    "level": 3
  },
  {
    "word": "prerequisite",
    "ipa": "/ˌpriːˈrek.wɪ.zɪt/",
    "pos": "noun / adj",
    "meaning_vi": "điều kiện tiên quyết",
    "example": "Familiarity with Python scripting is an essential prerequisite for this cybersecurity role.",
    "collocations": [
      "necessary prerequisite",
      "prerequisite course",
      "serve as a prerequisite"
    ],
    "wordFamily": [
      "require (v)",
      "requirement (n)"
    ],
    "confusableWith": [
      "requisite (cần thiết)"
    ],
    "topic": "Human Resources",
    "level": 4
  },
  {
    "word": "subsidize",
    "ipa": "/ˈsʌb.sɪ.daɪz/",
    "pos": "verb",
    "meaning_vi": "trợ cấp, bao cấp chi phí",
    "example": "The enterprise offers to subsidize 80% of employees' public transit commuting costs.",
    "collocations": [
      "heavily subsidize",
      "subsidize training",
      "government-subsidized"
    ],
    "wordFamily": [
      "subsidy (n)",
      "subsidized (adj)"
    ],
    "confusableWith": [
      "sponsor",
      "subside (lắng xuống)"
    ],
    "topic": "HR & Finance",
    "level": 3
  },
  {
    "word": "reimburse",
    "ipa": "/ˌriː.ɪmˈbɜːs/",
    "pos": "verb",
    "meaning_vi": "hoàn tiền, bồi hoàn chi phí",
    "example": "The company will reimburse all reasonable travel expenses within ten business days.",
    "collocations": [
      "reimburse expenses",
      "promptly reimburse",
      "fully reimburse"
    ],
    "wordFamily": [
      "reimbursement (n)",
      "reimbursable (adj)"
    ],
    "confusableWith": [
      "remit",
      "reinforce"
    ],
    "topic": "Finance",
    "level": 1
  },
  {
    "word": "merchandise",
    "ipa": "/ˈmɜː.tʃən.daɪs/",
    "pos": "noun",
    "meaning_vi": "hàng hóa thương mại",
    "example": "Defective merchandise may be exchanged within thirty days of purchase with a receipt.",
    "collocations": [
      "damaged merchandise",
      "display merchandise",
      "promote merchandise"
    ],
    "wordFamily": [
      "merchant (n)",
      "merchandising (n)"
    ],
    "confusableWith": [
      "commerce"
    ],
    "topic": "Retail & Sales",
    "level": 1
  },
  {
    "word": "feasible",
    "ipa": "/ˈfiː.zə.bəl/",
    "pos": "adjective",
    "meaning_vi": "khả thi, có thể thực hiện được",
    "example": "Management concluded that expanding to the European market is financially feasible.",
    "collocations": [
      "economically feasible",
      "technically feasible",
      "feasible alternative"
    ],
    "wordFamily": [
      "feasibility (n)",
      "feasibly (adv)"
    ],
    "confusableWith": [
      "flexible",
      "plausible"
    ],
    "topic": "Strategy",
    "level": 2
  },
  {
    "word": "remittance",
    "ipa": "/rɪˈmɪt.əns/",
    "pos": "noun",
    "meaning_vi": "khoản tiền chuyển khoản, sự thanh toán",
    "example": "Please include the invoice reference code with your electronic remittance.",
    "collocations": [
      "remittance advice",
      "wire remittance",
      "prompt remittance"
    ],
    "wordFamily": [
      "remit (v)",
      "remitter (n)"
    ],
    "confusableWith": [
      "admittance"
    ],
    "topic": "Banking",
    "level": 3
  },
  {
    "word": "collaborate",
    "ipa": "/kəˈlæb.ə.reɪt/",
    "pos": "verb",
    "meaning_vi": "hợp tác, phối hợp làm việc",
    "example": "The software and design divisions will collaborate on the new interface.",
    "collocations": [
      "collaborate closely",
      "collaborate with partners",
      "collaborate on a project"
    ],
    "wordFamily": [
      "collaboration (n)",
      "collaborative (adj)",
      "collaborator (n)"
    ],
    "confusableWith": [
      "corroborate (chứng thực)"
    ],
    "topic": "Human Resources",
    "level": 1
  },
  {
    "word": "fluctuation",
    "ipa": "/ˌflʌk.tʃuˈeɪ.ʃən/",
    "pos": "noun",
    "meaning_vi": "sự dao động, biến động",
    "example": "Currency exchange fluctuations can affect international manufacturing costs.",
    "collocations": [
      "price fluctuation",
      "market fluctuation",
      "sharp fluctuation"
    ],
    "wordFamily": [
      "fluctuate (v)",
      "fluctuating (adj)"
    ],
    "confusableWith": [
      "inflation"
    ],
    "topic": "Economics",
    "level": 2
  },
  {
    "word": "procure",
    "ipa": "/prəˈkjʊər/",
    "pos": "verb",
    "meaning_vi": "thu mua, mua sắm vật tư",
    "example": "The logistics manager was tasked to procure raw materials at competitive rates.",
    "collocations": [
      "procure equipment",
      "procure supplies",
      "procure services"
    ],
    "wordFamily": [
      "procurement (n)",
      "procurable (adj)"
    ],
    "confusableWith": [
      "secure"
    ],
    "topic": "Procurement",
    "level": 2
  },
  {
    "word": "incur",
    "ipa": "/ɪnˈkɜːr/",
    "pos": "verb",
    "meaning_vi": "gánh chịu, phát sinh (chi phí, thiệt hại)",
    "example": "The company will not be held liable for expenses incurred without prior authorization.",
    "collocations": [
      "incur costs",
      "incur penalties",
      "incur debt"
    ],
    "wordFamily": [
      "incurrence (n)",
      "incurred (adj)"
    ],
    "confusableWith": [
      "occur",
      "recur"
    ],
    "topic": "Finance",
    "level": 2
  },
  {
    "word": "subsequent",
    "ipa": "/ˈsʌb.sɪ.kwənt/",
    "pos": "adjective",
    "meaning_vi": "xảy ra sau đó, tiếp theo",
    "example": "Subsequent investigations revealed that the billing discrepancy was a clerical error.",
    "collocations": [
      "subsequent years",
      "subsequent developments",
      "subsequent to"
    ],
    "wordFamily": [
      "subsequence (n)",
      "subsequently (adv)"
    ],
    "confusableWith": [
      "consequent"
    ],
    "topic": "Corporate Affairs",
    "level": 2
  },
  {
    "word": "itinerary",
    "ipa": "/aɪˈtɪn.ər.ər.i/",
    "pos": "noun",
    "meaning_vi": "lịch trình chuyến đi",
    "example": "The executive assistant finalized the European business travel itinerary.",
    "collocations": [
      "flight itinerary",
      "detailed itinerary",
      "planned itinerary"
    ],
    "wordFamily": [
      "itinerant (adj)"
    ],
    "confusableWith": [
      "inventory"
    ],
    "topic": "Travel",
    "level": 1
  },
  {
    "word": "warranty",
    "ipa": "/ˈwɒr.ən.ti/",
    "pos": "noun",
    "meaning_vi": "giấy bảo hành, sự bảo hành",
    "example": "The commercial photocopiers come with a five-year limited warranty.",
    "collocations": [
      "extended warranty",
      "under warranty",
      "warranty coverage"
    ],
    "wordFamily": [
      "warrant (v)",
      "warrantor (n)"
    ],
    "confusableWith": [
      "guarantee"
    ],
    "topic": "Customer Service",
    "level": 1
  },
  {
    "word": "renovate",
    "ipa": "/ˈren.ə.veɪt/",
    "pos": "verb",
    "meaning_vi": "cải tạo, nâng cấp công trình",
    "example": "The developer plans to renovate the historic warehouse into modern offices.",
    "collocations": [
      "completely renovate",
      "renovate facilities",
      "recently renovated"
    ],
    "wordFamily": [
      "renovation (n)",
      "renovator (n)"
    ],
    "confusableWith": [
      "innovate (đổi mới)"
    ],
    "topic": "Real Estate",
    "level": 1
  },
  {
    "word": "beverage",
    "ipa": "/ˈbev.ər.ɪdʒ/",
    "pos": "noun",
    "meaning_vi": "thức uống, đồ uống",
    "example": "Complimentary beverages will be served during the afternoon symposium break.",
    "collocations": [
      "hot beverage",
      "alcoholic beverage",
      "beverage service"
    ],
    "wordFamily": [],
    "confusableWith": [
      "coverage"
    ],
    "topic": "Hospitality",
    "level": 1
  },
  {
    "word": "delegate",
    "ipa": "/ˈdel.ɪ.ɡeɪt/",
    "pos": "verb",
    "meaning_vi": "ủy thác, phân công nhiệm vụ / (n) đại biểu",
    "example": "Effective project managers know how to delegate tasks to team members.",
    "collocations": [
      "delegate authority",
      "delegate responsibility",
      "conference delegate"
    ],
    "wordFamily": [
      "delegation (n)"
    ],
    "confusableWith": [
      "deliberate"
    ],
    "topic": "Management",
    "level": 2
  },
  {
    "word": "staple",
    "ipa": "/ˈsteɪ.pəl/",
    "pos": "noun",
    "meaning_vi": "sản phẩm chủ lực, mặt hàng thiết yếu",
    "example": "High-speed broadband connectivity has become a staple of modern business.",
    "collocations": [
      "staple product",
      "dietary staple",
      "office staples"
    ],
    "wordFamily": [
      "stapler (n)"
    ],
    "confusableWith": [
      "stable"
    ],
    "topic": "Commerce",
    "level": 2
  },
  {
    "word": "consecutive",
    "ipa": "/kənˈsek.jə.tɪv/",
    "pos": "adjective",
    "meaning_vi": "liên tiếp, liền nhau",
    "example": "The division posted sales increases for four consecutive quarters.",
    "collocations": [
      "consecutive days",
      "consecutive quarters",
      "consecutive years"
    ],
    "wordFamily": [
      "consecutively (adv)"
    ],
    "confusableWith": [
      "conservative"
    ],
    "topic": "Finance",
    "level": 2
  },
  {
    "word": "commute",
    "ipa": "/kəˈmjuːt/",
    "pos": "verb",
    "meaning_vi": "đi làm hàng ngày (từ nhà tới công ty)",
    "example": "Many software engineers commute to the downtown tech campus via express rail.",
    "collocations": [
      "daily commute",
      "commute to work",
      "long commute"
    ],
    "wordFamily": [
      "commuter (n)"
    ],
    "confusableWith": [
      "compute"
    ],
    "topic": "Workplace",
    "level": 1
  },
  {
    "word": "terminate",
    "ipa": "/ˈtɜː.mɪ.neɪt/",
    "pos": "verb",
    "meaning_vi": "chấm dứt, kết thúc hợp đồng",
    "example": "Either party may terminate the partnership agreement with thirty days' written notice.",
    "collocations": [
      "terminate a contract",
      "terminate employment",
      "prematurely terminate"
    ],
    "wordFamily": [
      "termination (n)",
      "terminal (adj)"
    ],
    "confusableWith": [
      "determine"
    ],
    "topic": "Legal & Contracts",
    "level": 2
  },
  {
    "word": "deduct",
    "ipa": "/dɪˈdʌkt/",
    "pos": "verb",
    "meaning_vi": "khấu trừ, trừ bớt",
    "example": "Insurance premiums are automatically deducted from monthly salary payments.",
    "collocations": [
      "deduct taxes",
      "automatically deduct",
      "deduct from payroll"
    ],
    "wordFamily": [
      "deduction (n)",
      "deductible (adj)"
    ],
    "confusableWith": [
      "induct"
    ],
    "topic": "Payroll & Finance",
    "level": 1
  },
  {
    "word": "exempt",
    "ipa": "/ɪɡˈzempt/",
    "pos": "adjective",
    "meaning_vi": "được miễn trừ (thuế, nghĩa vụ)",
    "example": "Charitable educational foundations are exempt from state corporate income taxes.",
    "collocations": [
      "tax-exempt",
      "exempt from fees",
      "exempt status"
    ],
    "wordFamily": [
      "exemption (n)"
    ],
    "confusableWith": [
      "excerpt (trích đoạn)"
    ],
    "topic": "Finance & Legal",
    "level": 2
  },
  {
    "word": "convene",
    "ipa": "/kənˈviːn/",
    "pos": "verb",
    "meaning_vi": "triệu tập, họp lại",
    "example": "The executive compensation committee will convene tomorrow morning at nine.",
    "collocations": [
      "convene a meeting",
      "convene a session",
      "formally convene"
    ],
    "wordFamily": [
      "convention (n)",
      "convener (n)"
    ],
    "confusableWith": [
      "convenient"
    ],
    "topic": "Meetings",
    "level": 2
  },
  {
    "word": "affiliate",
    "ipa": "/əˈfɪl.i.eɪt/",
    "pos": "noun",
    "meaning_vi": "chi nhánh, công ty liên kết / (v) gia nhập",
    "example": "The enterprise operates regional affiliates in Tokyo, Seoul, and Singapore.",
    "collocations": [
      "corporate affiliate",
      "affiliate company",
      "affiliated with"
    ],
    "wordFamily": [
      "affiliation (n)",
      "affiliated (adj)"
    ],
    "confusableWith": [
      "allocate"
    ],
    "topic": "Corporate Structure",
    "level": 2
  },
  {
    "word": "subsidy",
    "ipa": "/ˈsʌb.sɪ.di/",
    "pos": "noun",
    "meaning_vi": "tiền trợ cấp của chính phủ",
    "example": "The renewable energy firm received a substantial government subsidy for solar research.",
    "collocations": [
      "government subsidy",
      "agricultural subsidy",
      "receive a subsidy"
    ],
    "wordFamily": [
      "subsidize (v)",
      "subsidized (adj)"
    ],
    "confusableWith": [
      "subsidiary (công ty con)"
    ],
    "topic": "Economics",
    "level": 2
  },
  {
    "word": "depreciate",
    "ipa": "/dɪˈpriː.ʃi.eɪt/",
    "pos": "verb",
    "meaning_vi": "khấu hao giá trị, giảm giá",
    "example": "Company fleet vehicles depreciate at a rate of twenty percent per annum.",
    "collocations": [
      "depreciate in value",
      "rapidly depreciate",
      "depreciate assets"
    ],
    "wordFamily": [
      "depreciation (n)",
      "depreciable (adj)"
    ],
    "confusableWith": [
      "appreciate (tăng giá/cảm kích)"
    ],
    "topic": "Accounting",
    "level": 2
  },
  {
    "word": "tenure",
    "ipa": "/ˈten.jʊər/",
    "pos": "noun",
    "meaning_vi": "nhiệm kỳ, thời gian công tác",
    "example": "During his five-year tenure as CEO, the company's global revenue doubled.",
    "collocations": [
      "during his tenure",
      "long tenure",
      "academic tenure"
    ],
    "wordFamily": [],
    "confusableWith": [
      "tenor"
    ],
    "topic": "Human Resources",
    "level": 3
  },
  {
    "word": "appraise",
    "ipa": "/əˈpreɪz/",
    "pos": "verb",
    "meaning_vi": "định giá, đánh giá năng lực",
    "example": "Independent real estate assessors were hired to appraise the commercial property.",
    "collocations": [
      "appraise property",
      "appraise performance",
      "accurately appraise"
    ],
    "wordFamily": [
      "appraisal (n)",
      "appraiser (n)"
    ],
    "confusableWith": [
      "apprise (thông báo)"
    ],
    "topic": "Real Estate & HR",
    "level": 2
  },
  {
    "word": "solicit",
    "ipa": "/səˈlɪs.ɪt/",
    "pos": "verb",
    "meaning_vi": "kêu gọi, trưng cầu ý kiến/đóng góp",
    "example": "The marketing survey was designed to solicit client feedback on customer service.",
    "collocations": [
      "solicit feedback",
      "solicit donations",
      "solicit bids"
    ],
    "wordFamily": [
      "solicitation (n)",
      "solicitor (n)"
    ],
    "confusableWith": [
      "explicit"
    ],
    "topic": "Marketing",
    "level": 2
  },
  {
    "word": "predecessor",
    "ipa": "/ˈpriː.dɪˌses.ər/",
    "pos": "noun",
    "meaning_vi": "người tiền nhiệm",
    "example": "The new marketing director built upon the successful brand initiatives of her predecessor.",
    "collocations": [
      "immediate predecessor",
      "illustrious predecessor"
    ],
    "wordFamily": [
      "precede (v)"
    ],
    "confusableWith": [
      "successor (người kế nhiệm)"
    ],
    "topic": "Management",
    "level": 2
  },
  {
    "word": "discrepancy",
    "ipa": "/dɪˈskrep.ən.si/",
    "pos": "noun",
    "meaning_vi": "sự sai lệch, bất nhất về số liệu",
    "example": "Internal auditors uncovered a discrepancy between inventory logs and warehouse stock.",
    "collocations": [
      "significant discrepancy",
      "minor discrepancy",
      "reconcile a discrepancy"
    ],
    "wordFamily": [
      "discrepant (adj)"
    ],
    "confusableWith": [
      "discretion"
    ],
    "topic": "Accounting",
    "level": 2
  },
  {
    "word": "incentive",
    "ipa": "/ɪnˈsen.tɪv/",
    "pos": "noun",
    "meaning_vi": "sự khuyến khích, đãi ngộ thúc đẩy",
    "example": "The company offers cash incentives for employees who propose cost-saving ideas.",
    "collocations": [
      "financial incentive",
      "performance incentive",
      "tax incentive"
    ],
    "wordFamily": [
      "incentivize (v)"
    ],
    "confusableWith": [
      "initiative (sáng kiến)"
    ],
    "topic": "Human Resources",
    "level": 1
  },
  {
    "word": "stringent",
    "ipa": "/ˈstrɪn.dʒənt/",
    "pos": "adjective",
    "meaning_vi": "nghiêm ngặt, chặt chẽ (luật lệ, tiêu chuẩn)",
    "example": "The medical device manufacturer operates under stringent quality control protocols.",
    "collocations": [
      "stringent regulations",
      "stringent standards",
      "stringent testing"
    ],
    "wordFamily": [
      "stringency (n)",
      "stringently (adv)"
    ],
    "confusableWith": [
      "strident"
    ],
    "topic": "Quality Control",
    "level": 2
  },
  {
    "word": "tentative",
    "ipa": "/ˈten.tə.tɪv/",
    "pos": "adjective",
    "meaning_vi": "dự kiến, chưa chốt chính thức",
    "example": "We reached a tentative agreement pending final approval from legal counsel.",
    "collocations": [
      "tentative agreement",
      "tentative schedule",
      "tentative date"
    ],
    "wordFamily": [
      "tentatively (adv)"
    ],
    "confusableWith": [
      "tenacious"
    ],
    "topic": "Meetings",
    "level": 2
  },
  {
    "word": "obsolete",
    "ipa": "/ˈɒb.sə.liːt/",
    "pos": "adjective",
    "meaning_vi": "lỗi thời, không còn sử dụng",
    "example": "Cloud computing has rendered traditional physical data storage warehouses largely obsolete.",
    "collocations": [
      "become obsolete",
      "obsolete equipment",
      "render obsolete"
    ],
    "wordFamily": [
      "obsolescence (n)"
    ],
    "confusableWith": [
      "absolute"
    ],
    "topic": "Technology",
    "level": 1
  },
  {
    "word": "reconcile",
    "ipa": "/ˈrek.ən.saɪl/",
    "pos": "verb",
    "meaning_vi": "đối chiếu số liệu, hòa giải",
    "example": "The accounting clerk must reconcile daily cash register receipts with bank deposits.",
    "collocations": [
      "reconcile accounts",
      "reconcile differences",
      "reconcile records"
    ],
    "wordFamily": [
      "reconciliation (n)",
      "reconcilable (adj)"
    ],
    "confusableWith": [
      "recognize"
    ],
    "topic": "Accounting",
    "level": 2
  },
  {
    "word": "expedite",
    "ipa": "/ˈek.spə.daɪt/",
    "pos": "verb",
    "meaning_vi": "xúc tiến, đẩy nhanh tiến độ",
    "example": "Please pay the express shipping surcharge to expedite delivery of the replacement parts.",
    "collocations": [
      "expedite processing",
      "expedite delivery",
      "expedite the rollout"
    ],
    "wordFamily": [
      "expeditious (adj)",
      "expedition (n)"
    ],
    "confusableWith": [
      "impede (cản trở)"
    ],
    "topic": "Logistics",
    "level": 2
  },
  {
    "word": "subordinate",
    "ipa": "/səˈbɔː.dɪ.nət/",
    "pos": "noun",
    "meaning_vi": "cấp dưới, nhân viên dưới quyền",
    "example": "Good team managers encourage subordinates to voice constructive improvement suggestions.",
    "collocations": [
      "manage subordinates",
      "subordinate staff",
      "subordinate clause"
    ],
    "wordFamily": [
      "subordination (n)"
    ],
    "confusableWith": [
      "superior (cấp trên)"
    ],
    "topic": "Management",
    "level": 2
  },
  {
    "word": "commence",
    "ipa": "/kəˈmens/",
    "pos": "verb",
    "meaning_vi": "bắt đầu, khởi động",
    "example": "Construction on the new corporate logistics hub will commence on Monday morning.",
    "collocations": [
      "commence operations",
      "commence proceedings",
      "commence work"
    ],
    "wordFamily": [
      "commencement (n)"
    ],
    "confusableWith": [
      "comment"
    ],
    "topic": "Operations",
    "level": 2
  },
  {
    "word": "retain",
    "ipa": "/rɪˈteɪn/",
    "pos": "verb",
    "meaning_vi": "giữ lại, duy trì",
    "example": "The software firm implemented retention bonuses to retain top engineering talent.",
    "collocations": [
      "retain employees",
      "retain control",
      "retain records"
    ],
    "wordFamily": [
      "retention (n)",
      "retentive (adj)"
    ],
    "confusableWith": [
      "detain"
    ],
    "topic": "Human Resources",
    "level": 1
  },
  {
    "word": "surplus",
    "ipa": "/ˈsɜː.pləs/",
    "pos": "noun",
    "meaning_vi": "thặng dư, lượng dư thừa",
    "example": "The financial comptroller allocated the annual budget surplus toward staff training.",
    "collocations": [
      "budget surplus",
      "trade surplus",
      "surplus goods"
    ],
    "wordFamily": [],
    "confusableWith": [
      "deficit"
    ],
    "topic": "Finance",
    "level": 1
  },
  {
    "word": "pertain",
    "ipa": "/pəˈteɪn/",
    "pos": "verb",
    "meaning_vi": "gắn liền, liên quan trực tiếp đến",
    "example": "The legal advisor reviewed all documents pertaining to the cross-border merger.",
    "collocations": [
      "pertaining to",
      "pertain to business",
      "pertain to the case"
    ],
    "wordFamily": [
      "pertinent (adj)"
    ],
    "confusableWith": [
      "contain"
    ],
    "topic": "Legal Affairs",
    "level": 2
  },
  {
    "word": "repertoire",
    "ipa": "/ˈrep.ə.twɑːr/",
    "pos": "noun",
    "meaning_vi": "vốn kỹ năng, danh mục chuyên môn",
    "example": "Adding mobile app optimization expands our creative design repertoire.",
    "collocations": [
      "extensive repertoire",
      "broaden the repertoire",
      "technical repertoire"
    ],
    "wordFamily": [],
    "confusableWith": [
      "repetition"
    ],
    "topic": "Skills & Training",
    "level": 3
  },
  {
    "word": "comprehensive",
    "ipa": "/ˌkɒm.prɪˈhen.sɪv/",
    "pos": "adjective",
    "meaning_vi": "toàn diện, bao quát mọi mặt",
    "example": "New staff members undergo a comprehensive two-week orientation program.",
    "collocations": [
      "comprehensive guide",
      "comprehensive review",
      "comprehensive coverage"
    ],
    "wordFamily": [
      "comprehensiveness (n)",
      "comprehensively (adv)"
    ],
    "confusableWith": [
      "comprehensible (dễ hiểu)"
    ],
    "topic": "Training",
    "level": 1
  },
  {
    "word": "designate",
    "ipa": "/ˈdez.ɪɡ.neɪt/",
    "pos": "verb",
    "meaning_vi": "chỉ định, bổ nhiệm",
    "example": "Management will designate an acting director while Ms. Gomez is on maternity leave.",
    "collocations": [
      "designated area",
      "designate a representative",
      "officially designate"
    ],
    "wordFamily": [
      "designation (n)",
      "designee (n)"
    ],
    "confusableWith": [
      "design"
    ],
    "topic": "Human Resources",
    "level": 2
  },
  {
    "word": "oversee",
    "ipa": "/ˌəʊ.vəˈsiː/",
    "pos": "verb",
    "meaning_vi": "giám sát, trông coi công việc",
    "example": "A senior project architect was hired to oversee construction of the data campus.",
    "collocations": [
      "oversee operations",
      "oversee the project",
      "directly oversee"
    ],
    "wordFamily": [
      "oversight (n)"
    ],
    "confusableWith": [
      "overlook (bỏ sót)"
    ],
    "topic": "Management",
    "level": 1
  },
  {
    "word": "promptly",
    "ipa": "/ˈprɒmpt.li/",
    "pos": "adverb",
    "meaning_vi": "nhanh chóng, đúng giờ",
    "example": "Customer inquiries submitted through the portal are answered promptly within two hours.",
    "collocations": [
      "respond promptly",
      "arrive promptly",
      "act promptly"
    ],
    "wordFamily": [
      "prompt (adj/v)",
      "promptness (n)"
    ],
    "confusableWith": [
      "properly"
    ],
    "topic": "Customer Care",
    "level": 1
  },
  {
    "word": "subcontract",
    "ipa": "/ˌsʌb.kənˈtrækt/",
    "pos": "verb",
    "meaning_vi": "giao thầu phụ, thuê ngoài",
    "example": "The general contractor decided to subcontract the fiber-optic cabling installation.",
    "collocations": [
      "subcontract work",
      "subcontract out",
      "subcontracting firm"
    ],
    "wordFamily": [
      "subcontractor (n)"
    ],
    "confusableWith": [
      "subtract"
    ],
    "topic": "Procurement",
    "level": 2
  },
  {
    "word": "affluent",
    "ipa": "/ˈæf.lu.ənt/",
    "pos": "adjective",
    "meaning_vi": "giàu có, khá giả",
    "example": "The boutique cosmetics retailer targets affluent urban consumers.",
    "collocations": [
      "affluent customers",
      "affluent neighborhood",
      "affluent society"
    ],
    "wordFamily": [
      "affluence (n)"
    ],
    "confusableWith": [
      "fluent"
    ],
    "topic": "Marketing",
    "level": 2
  },
  {
    "word": "negligent",
    "ipa": "/ˈneɡ.lɪ.dʒənt/",
    "pos": "adjective",
    "meaning_vi": "cẩu thả, lơ là trách nhiệm",
    "example": "The audit found that the contractor had been negligent in securing employee records.",
    "collocations": [
      "grossly negligent",
      "negligent behavior",
      "found negligent"
    ],
    "wordFamily": [
      "negligence (n)",
      "negligently (adv)"
    ],
    "confusableWith": [
      "negligible (không đáng kể)"
    ],
    "topic": "Legal Affairs",
    "level": 2
  },
  {
    "word": "negligible",
    "ipa": "/ˈneɡ.lɪ.dʒə.bəl/",
    "pos": "adjective",
    "meaning_vi": "không đáng kể, rất nhỏ",
    "example": "The slight packaging redesign resulted in a negligible cost increase per unit.",
    "collocations": [
      "negligible impact",
      "negligible difference",
      "negligible amount"
    ],
    "wordFamily": [
      "negligibly (adv)"
    ],
    "confusableWith": [
      "negligent (cẩu thả)"
    ],
    "topic": "Finance",
    "level": 2
  },
  {
    "word": "pivotal",
    "ipa": "/ˈpɪv.ə.təl/",
    "pos": "adjective",
    "meaning_vi": "nòng cốt, có tính quyết định",
    "example": "Securing venture funding played a pivotal role in the tech startup's survival.",
    "collocations": [
      "pivotal moment",
      "pivotal role",
      "pivotal decision"
    ],
    "wordFamily": [
      "pivot (n/v)"
    ],
    "confusableWith": [
      "vital"
    ],
    "topic": "Business Growth",
    "level": 2
  },
  {
    "word": "concur",
    "ipa": "/kənˈkɜːr/",
    "pos": "verb",
    "meaning_vi": "đồng tình, tán thành ý kiến",
    "example": "Both independent accountants concur with the financial comptroller's assessment.",
    "collocations": [
      "concur with",
      "heartily concur",
      "concur that"
    ],
    "wordFamily": [
      "concurrence (n)",
      "concurrent (adj)"
    ],
    "confusableWith": [
      "conquer (chinh phục)"
    ],
    "topic": "Governance",
    "level": 2
  },
  {
    "word": "deteriorate",
    "ipa": "/dɪˈtɪə.ri.ə.reɪt/",
    "pos": "verb",
    "meaning_vi": "xuống cấp, xấu đi",
    "example": "Without routine maintenance, manufacturing machinery will deteriorate rapidly.",
    "collocations": [
      "rapidly deteriorate",
      "deteriorate in quality",
      "conditions deteriorate"
    ],
    "wordFamily": [
      "deterioration (n)"
    ],
    "confusableWith": [
      "decorate"
    ],
    "topic": "Maintenance",
    "level": 2
  },
  {
    "word": "substantiate",
    "ipa": "/səbˈstæn.ʃi.eɪt/",
    "pos": "verb",
    "meaning_vi": "chứng minh có căn cứ, xác thực",
    "example": "Contractors must provide official material receipts to substantiate billing invoices.",
    "collocations": [
      "substantiate claims",
      "substantiate allegations",
      "substantiate findings"
    ],
    "wordFamily": [
      "substantiation (n)",
      "substantive (adj)"
    ],
    "confusableWith": [
      "substitute (thay thế)"
    ],
    "topic": "Accounting & Legal",
    "level": 3
  },
  {
    "word": "allocate",
    "ipa": "/ˈæl.ə.keɪt/",
    "pos": "verb",
    "meaning_vi": "phân bổ nguồn lực, chia ngân sách",
    "example": "The finance director decided to allocate 15% of annual revenue to technology research.",
    "collocations": [
      "allocate funds",
      "allocate resources",
      "allocate budget"
    ],
    "wordFamily": [
      "allocation (n)",
      "allocator (n)"
    ],
    "confusableWith": [
      "locate"
    ],
    "topic": "Finance",
    "level": 1
  },
  {
    "word": "behalf",
    "ipa": "/bɪˈhɑːf/",
    "pos": "noun",
    "meaning_vi": "thay mặt, đại diện",
    "example": "The attorney signed the commercial real estate agreement on behalf of the client.",
    "collocations": [
      "on behalf of",
      "in behalf of"
    ],
    "wordFamily": [],
    "confusableWith": [
      "half"
    ],
    "topic": "Legal Affairs",
    "level": 1
  },
  {
    "word": "brochure",
    "ipa": "/ˈbrəʊ.ʃʊər/",
    "pos": "noun",
    "meaning_vi": "cuốn sách quảng cáo giới thiệu",
    "example": "Prospective tourists can pick up colorful destination brochures at the airport counter.",
    "collocations": [
      "travel brochure",
      "informative brochure",
      "glossy brochure"
    ],
    "wordFamily": [],
    "confusableWith": [
      "booklet"
    ],
    "topic": "Marketing & Tourism",
    "level": 1
  },
  {
    "word": "clarify",
    "ipa": "/ˈklær.ɪ.faɪ/",
    "pos": "verb",
    "meaning_vi": "làm rõ, giải thích rõ ràng",
    "example": "The human resources manager held a brief meeting to clarify the new overtime regulations.",
    "collocations": [
      "clarify the issue",
      "clarify guidelines",
      "clarify a point"
    ],
    "wordFamily": [
      "clarification (n)",
      "clarity (n)"
    ],
    "confusableWith": [
      "classify (phân loại)"
    ],
    "topic": "Human Resources",
    "level": 1
  },
  {
    "word": "guarantee",
    "ipa": "/ˌɡær.ənˈtiː/",
    "pos": "verb",
    "meaning_vi": "bảo đảm, cam đoan / (n) sự cam kết",
    "example": "The contractor agreed to guarantee all masonry repairs for a period of ten years.",
    "collocations": [
      "guarantee satisfaction",
      "money-back guarantee",
      "offer a guarantee"
    ],
    "wordFamily": [
      "guarantor (n)"
    ],
    "confusableWith": [
      "warranty"
    ],
    "topic": "Customer Service",
    "level": 1
  },
  {
    "word": "hospitality",
    "ipa": "/ˌhɒs.pɪˈtæl.ə.ti/",
    "pos": "noun",
    "meaning_vi": "lòng hiếu khách, ngành khách sạn nhà hàng",
    "example": "Graduates of the hospitality academy find rewarding careers in luxury international resorts.",
    "collocations": [
      "hospitality industry",
      "warm hospitality",
      "corporate hospitality"
    ],
    "wordFamily": [
      "hospitable (adj)"
    ],
    "confusableWith": [
      "hospital"
    ],
    "topic": "Hospitality",
    "level": 1
  },
  {
    "word": "invoice",
    "ipa": "/ˈɪn.vɔɪs/",
    "pos": "noun",
    "meaning_vi": "hóa đơn thanh toán giao hàng",
    "example": "Please forward the supplier invoice to accounts payable for prompt processing.",
    "collocations": [
      "itemized invoice",
      "pay an invoice",
      "issue an invoice"
    ],
    "wordFamily": [
      "invoice (v)"
    ],
    "confusableWith": [
      "receipt (biên lai đã trả tiền)"
    ],
    "topic": "Accounting",
    "level": 1
  },
  {
    "word": "jurisdiction",
    "ipa": "/ˌdʒʊə.rɪsˈdɪk.ʃən/",
    "pos": "noun",
    "meaning_vi": "thẩm quyền pháp lý, khu vực quyền hạn",
    "example": "The cross-border patent dispute falls under the jurisdiction of the International Chamber of Commerce.",
    "collocations": [
      "legal jurisdiction",
      "within the jurisdiction",
      "exercise jurisdiction"
    ],
    "wordFamily": [
      "jurisdictional (adj)"
    ],
    "confusableWith": [
      "verdict"
    ],
    "topic": "Legal Affairs",
    "level": 3
  },
  {
    "word": "keen",
    "ipa": "/kiːn/",
    "pos": "adjective",
    "meaning_vi": "hăng hái, thiết tha / sắc bén",
    "example": "The executive committee is keen to explore partnership opportunities in South America.",
    "collocations": [
      "keen to do something",
      "keen interest",
      "keen competition"
    ],
    "wordFamily": [
      "keenly (adv)",
      "keenness (n)"
    ],
    "confusableWith": [
      "king"
    ],
    "topic": "Corporate Strategy",
    "level": 2
  },
  {
    "word": "lease",
    "ipa": "/liːs/",
    "pos": "noun",
    "meaning_vi": "hợp đồng thuê dài hạn / (v) cho thuê",
    "example": "The technology firm signed a seven-year commercial lease for three floors in the tower.",
    "collocations": [
      "sign a lease",
      "commercial lease",
      "lease agreement"
    ],
    "wordFamily": [
      "lessor (n)",
      "lessee (n)"
    ],
    "confusableWith": [
      "rent (thường ngắn hạn hơn)"
    ],
    "topic": "Real Estate",
    "level": 1
  },
  {
    "word": "notify",
    "ipa": "/ˈnəʊ.tɪ.faɪ/",
    "pos": "verb",
    "meaning_vi": "thông báo chính thức",
    "example": "Airlines must notify passengers promptly in the event of severe flight cancellations.",
    "collocations": [
      "notify employees",
      "formally notify",
      "notify in advance"
    ],
    "wordFamily": [
      "notification (n)",
      "notice (n)"
    ],
    "confusableWith": [
      "note"
    ],
    "topic": "Corporate Communication",
    "level": 1
  },
  {
    "word": "obligation",
    "ipa": "/ˌɒb.lɪˈɡeɪ.ʃən/",
    "pos": "noun",
    "meaning_vi": "nghĩa vụ pháp lý hoặc đạo đức",
    "example": "The supplier has a contractual obligation to deliver all components by Friday afternoon.",
    "collocations": [
      "contractual obligation",
      "meet obligations",
      "legal obligation"
    ],
    "wordFamily": [
      "obligatory (adj)",
      "oblige (v)"
    ],
    "confusableWith": [
      "obstacle"
    ],
    "topic": "Contracts",
    "level": 1
  },
  {
    "word": "penalty",
    "ipa": "/ˈpen.əl.ti/",
    "pos": "noun",
    "meaning_vi": "tiền phạt, hình phạt",
    "example": "Early termination of the telecommunications service contract incurs a $150 penalty.",
    "collocations": [
      "financial penalty",
      "incur a penalty",
      "late payment penalty"
    ],
    "wordFamily": [
      "penalize (v)"
    ],
    "confusableWith": [
      "penal"
    ],
    "topic": "Contracts & Finance",
    "level": 1
  },
  {
    "word": "quota",
    "ipa": "/ˈkwəʊ.tə/",
    "pos": "noun",
    "meaning_vi": "chỉ tiêu, hạn ngạch",
    "example": "Every regional sales representative exceeded their quarterly sales quota by at least 10%.",
    "collocations": [
      "sales quota",
      "import quota",
      "meet the quota"
    ],
    "wordFamily": [],
    "confusableWith": [
      "quote (báo giá/trích dẫn)"
    ],
    "topic": "Sales & Trade",
    "level": 2
  },
  {
    "word": "tariff",
    "ipa": "/ˈtær.ɪf/",
    "pos": "noun",
    "meaning_vi": "thuế nhập khẩu, biểu giá",
    "example": "New multilateral tariffs on imported semiconductors increased production costs by 5%.",
    "collocations": [
      "impose tariffs",
      "trade tariffs",
      "tariff reduction"
    ],
    "wordFamily": [],
    "confusableWith": [
      "traffic"
    ],
    "topic": "Trade & Economics",
    "level": 2
  },
  {
    "word": "vendor",
    "ipa": "/ˈven.dər/",
    "pos": "noun",
    "meaning_vi": "nhà cung cấp, người bán hàng",
    "example": "The procurement division is currently reviewing bids from five commercial catering vendors.",
    "collocations": [
      "approved vendor",
      "software vendor",
      "vendor selection"
    ],
    "wordFamily": [
      "vend (v)",
      "vending (n)"
    ],
    "confusableWith": [
      "vender"
    ],
    "topic": "Procurement",
    "level": 1
  },
  {
    "word": "waive",
    "ipa": "/weɪv/",
    "pos": "verb",
    "meaning_vi": "từ bỏ quyền lợi, miễn phí",
    "example": "The bank agreed to waive the foreign transaction surcharge for premium credit cardholders.",
    "collocations": [
      "waive fees",
      "waive rights",
      "waive penalties"
    ],
    "wordFamily": [
      "waiver (n)"
    ],
    "confusableWith": [
      "wave (vẫy tay/sóng)"
    ],
    "topic": "Banking",
    "level": 2
  },
  {
    "word": "yield",
    "ipa": "/jiːld/",
    "pos": "verb",
    "meaning_vi": "mang lại lợi nhuận, sinh hoa lợi / (n) sản lượng",
    "example": "Long-term treasury bonds yield a modest but dependable annual return.",
    "collocations": [
      "yield a profit",
      "yield high returns",
      "agricultural yield"
    ],
    "wordFamily": [
      "yielding (adj)"
    ],
    "confusableWith": [
      "shield"
    ],
    "topic": "Investment",
    "level": 2
  },
  {
    "word": "zeal",
    "ipa": "/ziːl/",
    "pos": "noun",
    "meaning_vi": "sự hăng hái nhiệt huyết",
    "example": "The young entrepreneur approached the software startup venture with boundless zeal.",
    "collocations": [
      "boundless zeal",
      "zeal for work",
      "religious zeal"
    ],
    "wordFamily": [
      "zealous (adj)",
      "zealot (n)"
    ],
    "confusableWith": [
      "seal"
    ],
    "topic": "Workplace",
    "level": 3
  },
  {
    "word": "ransomware",
    "ipa": "/ˈræn.səm.weər/",
    "pos": "noun",
    "meaning_vi": "mã độc tống tiền",
    "example": "The hospital's database was immobilized by a sophisticated variant of ransomware.",
    "collocations": [
      "ransomware attack",
      "ransomware payload",
      "pay the ransom"
    ],
    "wordFamily": [
      "ransom (n/v)"
    ],
    "confusableWith": [
      "malware"
    ],
    "topic": "Threats",
    "level": 1
  },
  {
    "word": "phishing",
    "ipa": "/ˈfɪʃ.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "tấn công lừa đảo qua email hoặc liên kết giả mạo",
    "example": "Employees must complete mandatory training on identifying deceptive phishing emails.",
    "collocations": [
      "spear phishing",
      "phishing campaign",
      "phishing link"
    ],
    "wordFamily": [
      "phish (v)",
      "phisher (n)"
    ],
    "confusableWith": [
      "fishing"
    ],
    "topic": "Social Engineering",
    "level": 1
  },
  {
    "word": "firewall",
    "ipa": "/ˈfaɪə.wɔːl/",
    "pos": "noun",
    "meaning_vi": "tường lửa mạng",
    "example": "The enterprise configured a stateful firewall to block unauthorized inbound connections.",
    "collocations": [
      "hardware firewall",
      "configure a firewall",
      "firewall rule"
    ],
    "wordFamily": [
      "firewalled (adj)"
    ],
    "confusableWith": [
      "firmware"
    ],
    "topic": "Network Defense",
    "level": 1
  },
  {
    "word": "decryption",
    "ipa": "/diːˈkrɪp.ʃən/",
    "pos": "noun",
    "meaning_vi": "sự giải mã dữ liệu",
    "example": "The security analyst utilized the private cryptographic key for message decryption.",
    "collocations": [
      "decryption key",
      "instant decryption",
      "decryption algorithm"
    ],
    "wordFamily": [
      "decrypt (v)",
      "decrypted (adj)"
    ],
    "confusableWith": [
      "encryption (mã hóa)"
    ],
    "topic": "Cryptography",
    "level": 2
  },
  {
    "word": "exploit",
    "ipa": "/ˈek.splɔɪt/",
    "pos": "noun",
    "meaning_vi": "đoạn mã khai thác lỗ hổng / (v) khai thác",
    "example": "Cybercriminals engineered an exploit targeting unpatched corporate mail servers.",
    "collocations": [
      "exploit a weakness",
      "zero-day exploit",
      "public exploit"
    ],
    "wordFamily": [
      "exploitable (adj)",
      "exploitation (n)"
    ],
    "confusableWith": [
      "explore"
    ],
    "topic": "Threats",
    "level": 2
  },
  {
    "word": "credential",
    "ipa": "/krɪˈden.ʃəl/",
    "pos": "noun",
    "meaning_vi": "thông tin đăng nhập, chứng chỉ xác thực",
    "example": "Never reuse the same login credentials across multiple corporate platforms.",
    "collocations": [
      "stolen credentials",
      "login credentials",
      "verify credentials"
    ],
    "wordFamily": [
      "credentials (n)"
    ],
    "confusableWith": [
      "credible (đáng tin)"
    ],
    "topic": "Access Control",
    "level": 1
  },
  {
    "word": "privilege",
    "ipa": "/ˈprɪv.əl.ɪdʒ/",
    "pos": "noun",
    "meaning_vi": "đặc quyền truy cập tài nguyên",
    "example": "The principle of least privilege ensures staff only access tools necessary for their tasks.",
    "collocations": [
      "administrative privilege",
      "elevated privilege",
      "escalate privileges"
    ],
    "wordFamily": [
      "privileged (adj)"
    ],
    "confusableWith": [
      "prestige"
    ],
    "topic": "Identity & Access",
    "level": 2
  },
  {
    "word": "containment",
    "ipa": "/kənˈteɪn.mənt/",
    "pos": "noun",
    "meaning_vi": "sự ngăn chặn, khoanh vùng cô lập sự cố",
    "example": "Rapid subnet containment prevented the malware from spreading to neighboring servers.",
    "collocations": [
      "containment strategy",
      "threat containment",
      "isolate and contain"
    ],
    "wordFamily": [
      "contain (v)",
      "container (n)"
    ],
    "confusableWith": [
      "contentment (sự hài lòng)"
    ],
    "topic": "Incident Response",
    "level": 2
  },
  {
    "word": "telemetry",
    "ipa": "/təˈlem.ə.tri/",
    "pos": "noun",
    "meaning_vi": "dữ liệu đo đạc và truyền dẫn từ xa",
    "example": "Endpoint telemetry revealed unusual data exfiltration spikes during the midnight hours.",
    "collocations": [
      "network telemetry",
      "telemetry data",
      "security telemetry"
    ],
    "wordFamily": [
      "telemetric (adj)"
    ],
    "confusableWith": [
      "geometry"
    ],
    "topic": "Monitoring",
    "level": 3
  },
  {
    "word": "quarantine",
    "ipa": "/ˈkwɒr.ən.tiːn/",
    "pos": "verb",
    "meaning_vi": "cách ly tập tin nhiễm độc / (n) khu cách ly",
    "example": "The antivirus agent will immediately quarantine any attachment containing suspicious scripts.",
    "collocations": [
      "quarantine infected files",
      "place in quarantine",
      "automatic quarantine"
    ],
    "wordFamily": [
      "quarantined (adj)"
    ],
    "confusableWith": [
      "quantity"
    ],
    "topic": "Antivirus",
    "level": 1
  },
  {
    "word": "tamper",
    "ipa": "/ˈtæm.pər/",
    "pos": "verb",
    "meaning_vi": "can thiệp trái phép, làm sai lệch",
    "example": "Digital signatures allow administrators to verify that firmware has not been tampered with.",
    "collocations": [
      "tamper with evidence",
      "tamper-evident seal",
      "unauthorized tampering"
    ],
    "wordFamily": [
      "tampering (n)"
    ],
    "confusableWith": [
      "temper"
    ],
    "topic": "Integrity",
    "level": 2
  },
  {
    "word": "mitigate",
    "ipa": "/ˈmɪt.ɪ.ɡeɪt/",
    "pos": "verb",
    "meaning_vi": "giảm thiểu rủi ro hoặc tác hại",
    "example": "Deploying multi-factor authentication helps mitigate the risk of credential theft.",
    "collocations": [
      "mitigate risk",
      "mitigate impact",
      "mitigate vulnerability"
    ],
    "wordFamily": [
      "mitigation (n)",
      "mitigated (adj)"
    ],
    "confusableWith": [
      "militate"
    ],
    "topic": "Risk Management",
    "level": 2
  },
  {
    "word": "forensics",
    "ipa": "/fəˈren.zɪks/",
    "pos": "noun",
    "meaning_vi": "khoa học điều tra kỹ thuật số pháp y",
    "example": "Digital forensics specialists examined server memory dumps to trace the hacker's origin.",
    "collocations": [
      "digital forensics",
      "forensic analysis",
      "forensic investigator"
    ],
    "wordFamily": [
      "forensic (adj)"
    ],
    "confusableWith": [
      "foreign"
    ],
    "topic": "Investigation",
    "level": 2
  },
  {
    "word": "honeypot",
    "ipa": "/ˈhʌn.i.pɒt/",
    "pos": "noun",
    "meaning_vi": "hệ thống mồi nhử bẫy kẻ tấn công",
    "example": "Security researchers set up an SSH honeypot to capture new automated brute-force techniques.",
    "collocations": [
      "deploy a honeypot",
      "decoy honeypot",
      "honeypot telemetry"
    ],
    "wordFamily": [],
    "confusableWith": [
      "honeycomb"
    ],
    "topic": "Threat Intelligence",
    "level": 3
  },
  {
    "word": "perimeter",
    "ipa": "/pəˈrɪm.ɪ.tər/",
    "pos": "noun",
    "meaning_vi": "vành đai ranh giới bảo mật mạng",
    "example": "Modern cloud environments rely on identity controls rather than a static network perimeter.",
    "collocations": [
      "network perimeter",
      "perimeter defense",
      "breach the perimeter"
    ],
    "wordFamily": [
      "perimetric (adj)"
    ],
    "confusableWith": [
      "parameter (tham số)"
    ],
    "topic": "Architecture",
    "level": 2
  },
  {
    "word": "exfiltration",
    "ipa": "/ˌeks.fɪlˈtreɪ.ʃən/",
    "pos": "noun",
    "meaning_vi": "hành vi đánh cắp rút trích dữ liệu ra ngoài",
    "example": "Encrypted tunnels were covertly established to conduct data exfiltration to an offshore IP.",
    "collocations": [
      "data exfiltration",
      "detect exfiltration",
      "prevent exfiltration"
    ],
    "wordFamily": [
      "exfiltrate (v)"
    ],
    "confusableWith": [
      "infiltration (xâm nhập)"
    ],
    "topic": "Threats",
    "level": 3
  },
  {
    "word": "obfuscate",
    "ipa": "/ˈɒb.fʌs.keɪt/",
    "pos": "verb",
    "meaning_vi": "làm rối mã nguồn để che giấu mục đích",
    "example": "The cybercriminal tried to obfuscate the PowerShell script using layers of Base64 encoding.",
    "collocations": [
      "obfuscate code",
      "obfuscated payload",
      "intentionally obfuscate"
    ],
    "wordFamily": [
      "obfuscation (n)",
      "obfuscated (adj)"
    ],
    "confusableWith": [
      "obstacle"
    ],
    "topic": "Malware Analysis",
    "level": 3
  },
  {
    "word": "compliance",
    "ipa": "/kəmˈplaɪ.əns/",
    "pos": "noun",
    "meaning_vi": "sự tuân thủ các quy định và tiêu chuẩn",
    "example": "Annual penetration testing is required to maintain PCI-DSS payment compliance.",
    "collocations": [
      "regulatory compliance",
      "ensure compliance",
      "in compliance with"
    ],
    "wordFamily": [
      "comply (v)",
      "compliant (adj)"
    ],
    "confusableWith": [
      "complaint"
    ],
    "topic": "Governance",
    "level": 1
  },
  {
    "word": "anomaly",
    "ipa": "/əˈnɒm.ə.li/",
    "pos": "noun",
    "meaning_vi": "sự bất thường, dị thường",
    "example": "Machine-learning sensors triggered an alert upon detecting an anomaly in outbound traffic.",
    "collocations": [
      "detect an anomaly",
      "traffic anomaly",
      "statistical anomaly"
    ],
    "wordFamily": [
      "anomalous (adj)"
    ],
    "confusableWith": [
      "anonymity"
    ],
    "topic": "Monitoring",
    "level": 2
  },
  {
    "word": "payload",
    "ipa": "/ˈpeɪ.ləʊd/",
    "pos": "noun",
    "meaning_vi": "phần mã thực thi độc hại chính trong virus",
    "example": "The malicious email attachment delivered a trojan payload that established a backdoor.",
    "collocations": [
      "malicious payload",
      "deliver a payload",
      "execute the payload"
    ],
    "wordFamily": [],
    "confusableWith": [
      "payment"
    ],
    "topic": "Threats",
    "level": 2
  },
  {
    "word": "backdoor",
    "ipa": "/ˈbæk.dɔːr/",
    "pos": "noun",
    "meaning_vi": "cửa hậu bí mật vượt qua rào chắn xác thực",
    "example": "The compromised firmware contained a hidden backdoor allowing unauthorized remote admin access.",
    "collocations": [
      "install a backdoor",
      "hidden backdoor",
      "backdoor access"
    ],
    "wordFamily": [],
    "confusableWith": [
      "frontdoor"
    ],
    "topic": "Threats",
    "level": 1
  },
  {
    "word": "salting",
    "ipa": "/ˈsɒl.tɪŋ/",
    "pos": "noun",
    "meaning_vi": "kỹ thuật thêm chuỗi ngẫu nhiên trước khi băm mật khẩu",
    "example": "Cryptographic salting ensures that identical user passwords yield completely different hash digests.",
    "collocations": [
      "password salting",
      "random salting",
      "salt and hash"
    ],
    "wordFamily": [
      "salt (n/v)"
    ],
    "confusableWith": [
      "sorting"
    ],
    "topic": "Cryptography",
    "level": 3
  },
  {
    "word": "entropy",
    "ipa": "/ˈen.trə.pi/",
    "pos": "noun",
    "meaning_vi": "độ ngẫu nhiên, độ phức tạp của khóa mã",
    "example": "Cryptographic keys require high system entropy to prevent mathematical prediction.",
    "collocations": [
      "high entropy",
      "entropy pool",
      "system entropy"
    ],
    "wordFamily": [
      "entropic (adj)"
    ],
    "confusableWith": [
      "entry"
    ],
    "topic": "Cryptography",
    "level": 3
  },
  {
    "word": "air-gap",
    "ipa": "/ˈeə.ɡæp/",
    "pos": "noun",
    "meaning_vi": "khoảng cách vật lý cô lập hoàn toàn khỏi mạng internet",
    "example": "Nuclear power control infrastructure is maintained within an isolated air-gap network.",
    "collocations": [
      "air-gap network",
      "air-gapped system",
      "maintain an air-gap"
    ],
    "wordFamily": [
      "air-gapped (adj)"
    ],
    "confusableWith": [
      "airport"
    ],
    "topic": "Architecture",
    "level": 3
  },
  {
    "word": "spoof",
    "ipa": "/spuːf/",
    "pos": "verb",
    "meaning_vi": "giả mạo địa chỉ IP, email hoặc danh tính",
    "example": "The attacker attempted to spoof the domain of the Chief Financial Officer in the email header.",
    "collocations": [
      "spoof an IP address",
      "spoof email sender",
      "spoofed domain"
    ],
    "wordFamily": [
      "spoofing (n)",
      "spoofer (n)"
    ],
    "confusableWith": [
      "proof"
    ],
    "topic": "Threats",
    "level": 2
  },
  {
    "word": "sanitize",
    "ipa": "/ˈsæn.ɪ.taɪz/",
    "pos": "verb",
    "meaning_vi": "lọc làm sạch dữ liệu đầu vào hoặc xóa sạch ổ cứng",
    "example": "Web applications must sanitize all form inputs to eliminate SQL injection and XSS threats.",
    "collocations": [
      "sanitize inputs",
      "sanitize hard drives",
      "properly sanitize"
    ],
    "wordFamily": [
      "sanitization (n)",
      "sanitizer (n)"
    ],
    "confusableWith": [
      "sanitary"
    ],
    "topic": "Secure Coding",
    "level": 2
  },
  {
    "word": "biometrics",
    "ipa": "/ˌbaɪ.əʊˈmet.rɪks/",
    "pos": "noun",
    "meaning_vi": "công nghệ xác thực sinh trắc học",
    "example": "High-security data vault doors require multi-modal biometrics including fingerprint and retina scans.",
    "collocations": [
      "biometrics authentication",
      "biometric sensor",
      "facial biometrics"
    ],
    "wordFamily": [
      "biometric (adj)"
    ],
    "confusableWith": [
      "biology"
    ],
    "topic": "Authentication",
    "level": 1
  },
  {
    "word": "whitelist",
    "ipa": "/ˈwaɪt.lɪst/",
    "pos": "noun",
    "meaning_vi": "danh sách trắng các ứng dụng được phép chạy",
    "example": "Implementing an application whitelist prevents unauthorized executable binaries from launching.",
    "collocations": [
      "application whitelist",
      "whitelist an IP",
      "approved whitelist"
    ],
    "wordFamily": [
      "whitelisting (n)",
      "whitelist (v)"
    ],
    "confusableWith": [
      "blacklist (danh sách đen)"
    ],
    "topic": "Endpoint Security",
    "level": 2
  },
  {
    "word": "blacklist",
    "ipa": "/ˈblæk.lɪst/",
    "pos": "noun",
    "meaning_vi": "danh sách đen các địa chỉ bị cấm",
    "example": "The firewall automatically added the attacking subnet to its global dynamic blacklist.",
    "collocations": [
      "IP blacklist",
      "blacklist domain",
      "dynamic blacklist"
    ],
    "wordFamily": [
      "blacklisting (n)",
      "blacklist (v)"
    ],
    "confusableWith": [
      "whitelist"
    ],
    "topic": "Network Security",
    "level": 1
  },
  {
    "word": "tokenization",
    "ipa": "/ˌtəʊ.kən.aɪˈzeɪ.ʃən/",
    "pos": "noun",
    "meaning_vi": "kỹ thuật mã hóa thay thế dữ liệu nhạy cảm bằng token",
    "example": "Payment processors employ tokenization so merchant databases never store actual card numbers.",
    "collocations": [
      "data tokenization",
      "tokenization system",
      "tokenized payment"
    ],
    "wordFamily": [
      "token (n)",
      "tokenize (v)"
    ],
    "confusableWith": [
      "organization"
    ],
    "topic": "Payment Security",
    "level": 3
  },
  {
    "word": "penetration",
    "ipa": "/ˌpen.ɪˈtreɪ.ʃən/",
    "pos": "noun",
    "meaning_vi": "sự thâm nhập kiểm thử bảo mật (pentest)",
    "example": "The banking group hired ethical hackers to perform annual penetration testing.",
    "collocations": [
      "penetration testing",
      "network penetration",
      "penetration tester"
    ],
    "wordFamily": [
      "penetrate (v)",
      "penetrating (adj)"
    ],
    "confusableWith": [
      "preparation"
    ],
    "topic": "Testing",
    "level": 2
  },
  {
    "word": "surveillance",
    "ipa": "/səˈveɪ.ləns/",
    "pos": "noun",
    "meaning_vi": "sự giám sát liên tục",
    "example": "Automated surveillance of corporate network traffic helps detect lateral threat movement.",
    "collocations": [
      "continuous surveillance",
      "network surveillance",
      "under surveillance"
    ],
    "wordFamily": [],
    "confusableWith": [
      "survey (khảo sát)"
    ],
    "topic": "Monitoring",
    "level": 2
  },
  {
    "word": "heuristic",
    "ipa": "/hjʊəˈrɪs.tɪk/",
    "pos": "adjective",
    "meaning_vi": "dựa trên kinh nghiệm và hành vi phán đoán",
    "example": "Next-gen antivirus uses heuristic analysis to spot unknown malware behaving suspiciously.",
    "collocations": [
      "heuristic detection",
      "heuristic analysis",
      "heuristic rule"
    ],
    "wordFamily": [
      "heuristics (n)",
      "heuristically (adv)"
    ],
    "confusableWith": [
      "historical"
    ],
    "topic": "Antivirus",
    "level": 3
  },
  {
    "word": "hardening",
    "ipa": "/ˈhɑː.dən.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "quy trình gia cố độ vững chắc an toàn cho máy chủ",
    "example": "Server hardening includes disabling unnecessary background services and closing dormant ports.",
    "collocations": [
      "server hardening",
      "system hardening",
      "OS hardening"
    ],
    "wordFamily": [
      "harden (v)",
      "hardened (adj)"
    ],
    "confusableWith": [
      "hardship"
    ],
    "topic": "System Administration",
    "level": 2
  },
  {
    "word": "reconnaissance",
    "ipa": "/rɪˈkɒn.ɪ.səns/",
    "pos": "noun",
    "meaning_vi": "hoạt động trinh sát thăm dò trước tấn công",
    "example": "Port scanning is a common reconnaissance technique used by attackers to map active nodes.",
    "collocations": [
      "reconnaissance phase",
      "active reconnaissance",
      "conduct reconnaissance"
    ],
    "wordFamily": [],
    "confusableWith": [
      "renaissance"
    ],
    "topic": "Threats",
    "level": 3
  },
  {
    "word": "firmware",
    "ipa": "/ˈfɜːm.weər/",
    "pos": "noun",
    "meaning_vi": "phần mềm nhúng điều khiển phần cứng",
    "example": "Network routers must be updated with the latest manufacturer firmware to fix flaws.",
    "collocations": [
      "firmware update",
      "flash the firmware",
      "corrupt firmware"
    ],
    "wordFamily": [],
    "confusableWith": [
      "hardware"
    ],
    "topic": "Hardware Security",
    "level": 1
  },
  {
    "word": "latency",
    "ipa": "/ˈleɪ.tən.si/",
    "pos": "noun",
    "meaning_vi": "độ trễ truyền mạng",
    "example": "Routing enterprise traffic through multiple cryptographic proxies increased network latency.",
    "collocations": [
      "low latency",
      "network latency",
      "reduce latency"
    ],
    "wordFamily": [
      "latent (adj)"
    ],
    "confusableWith": [
      "latest"
    ],
    "topic": "Networking",
    "level": 2
  },
  {
    "word": "redundancy",
    "ipa": "/rɪˈdʌn.dən.si/",
    "pos": "noun",
    "meaning_vi": "tính dự phòng sao lưu sẵn sàng",
    "example": "Deploying dual power supplies and mirror disks guarantees high operational redundancy.",
    "collocations": [
      "hardware redundancy",
      "network redundancy",
      "built-in redundancy"
    ],
    "wordFamily": [
      "redundant (adj)"
    ],
    "confusableWith": [
      "reluctance"
    ],
    "topic": "Infrastructure",
    "level": 2
  },
  {
    "word": "sandbox",
    "ipa": "/ˈsænd.bɒks/",
    "pos": "noun",
    "meaning_vi": "môi trường cô lập an toàn để phân tích mẫu mã độc",
    "example": "Suspicious email attachments are automatically detonated in a cloud sandbox environment.",
    "collocations": [
      "sandbox environment",
      "run in a sandbox",
      "sandbox detection"
    ],
    "wordFamily": [
      "sandboxing (n)"
    ],
    "confusableWith": [
      "sandbag"
    ],
    "topic": "Malware Analysis",
    "level": 2
  },
  {
    "word": "certificate",
    "ipa": "/səˈtɪf.ɪ.kət/",
    "pos": "noun",
    "meaning_vi": "chứng chỉ số SSL/TLS",
    "example": "Web browsers display a security warning when a website's SSL certificate has expired.",
    "collocations": [
      "digital certificate",
      "SSL certificate",
      "renew a certificate"
    ],
    "wordFamily": [
      "certification (n)",
      "certify (v)"
    ],
    "confusableWith": [
      "certify"
    ],
    "topic": "PKI",
    "level": 1
  },
  {
    "word": "authenticity",
    "ipa": "/ˌɔː.θenˈtɪs.ə.ti/",
    "pos": "noun",
    "meaning_vi": "tính xác thực không bị giả mạo",
    "example": "Digital signatures verify the authenticity and origin of corporate executive emails.",
    "collocations": [
      "verify authenticity",
      "guarantee authenticity",
      "test authenticity"
    ],
    "wordFamily": [
      "authentic (adj)",
      "authenticate (v)"
    ],
    "confusableWith": [
      "authority"
    ],
    "topic": "Security Attributes",
    "level": 2
  },
  {
    "word": "confidentiality",
    "ipa": "/ˌkɒn.fɪ.den.ʃiˈæl.ə.ti/",
    "pos": "noun",
    "meaning_vi": "tính bảo mật, bí mật thông tin",
    "example": "Confidentiality is one of the three foundational pillars of the Information Security CIA Triad.",
    "collocations": [
      "maintain confidentiality",
      "breach of confidentiality",
      "client confidentiality"
    ],
    "wordFamily": [
      "confidential (adj)",
      "confidentially (adv)"
    ],
    "confusableWith": [
      "confidence"
    ],
    "topic": "CIA Triad",
    "level": 1
  },
  {
    "word": "availability",
    "ipa": "/əˌveɪ.ləˈbɪl.ə.ti/",
    "pos": "noun",
    "meaning_vi": "tính sẵn sàng của hệ thống phục vụ",
    "example": "Distributed Denial of Service (DDoS) attacks directly undermine server availability.",
    "collocations": [
      "high availability",
      "service availability",
      "system availability"
    ],
    "wordFamily": [
      "available (adj)"
    ],
    "confusableWith": [
      "ability"
    ],
    "topic": "CIA Triad",
    "level": 1
  },
  {
    "word": "cryptography",
    "ipa": "/krɪpˈtɒɡ.rə.fi/",
    "pos": "noun",
    "meaning_vi": "mật mã học",
    "example": "Quantum computing poses theoretical challenges to modern public-key cryptography.",
    "collocations": [
      "modern cryptography",
      "quantum cryptography",
      "principles of cryptography"
    ],
    "wordFamily": [
      "cryptographic (adj)",
      "cryptographer (n)"
    ],
    "confusableWith": [
      "geography"
    ],
    "topic": "Cryptography",
    "level": 2
  },
  {
    "word": "advisory",
    "ipa": "/ədˈvaɪ.zər.i/",
    "pos": "noun",
    "meaning_vi": "bản tin cảnh báo bảo mật chính thức",
    "example": "The government cybersecurity agency issued an urgent security advisory regarding VPN exploits.",
    "collocations": [
      "security advisory",
      "bulletin advisory",
      "issue an advisory"
    ],
    "wordFamily": [
      "advise (v)",
      "advisor (n)"
    ],
    "confusableWith": [
      "adversary (kẻ thù)"
    ],
    "topic": "Threat Intelligence",
    "level": 2
  },
  {
    "word": "adversary",
    "ipa": "/ˈæd.və.sər.i/",
    "pos": "noun",
    "meaning_vi": "kẻ đối đầu, kẻ tấn công mạng",
    "example": "Threat hunting teams analyze the tactics, techniques, and procedures of advanced adversaries.",
    "collocations": [
      "cyber adversary",
      "sophisticated adversary",
      "adversary behavior"
    ],
    "wordFamily": [
      "adversarial (adj)"
    ],
    "confusableWith": [
      "advisory (cảnh báo)"
    ],
    "topic": "Threat Actors",
    "level": 2
  },
  {
    "word": "endpoint",
    "ipa": "/ˈend.pɔɪnt/",
    "pos": "noun",
    "meaning_vi": "thiết bị đầu cuối (laptop, máy tính bảng, server)",
    "example": "All corporate endpoints must be installed with centralized detection and response agents.",
    "collocations": [
      "endpoint security",
      "endpoint device",
      "manage endpoints"
    ],
    "wordFamily": [],
    "confusableWith": [
      "endzone"
    ],
    "topic": "Infrastructure",
    "level": 1
  },
  {
    "word": "revocation",
    "ipa": "/ˌrev.əˈkeɪ.ʃən/",
    "pos": "noun",
    "meaning_vi": "sự thu hồi hủy bỏ quyền hạn hoặc chứng chỉ",
    "example": "The resignation of the sysadmin led to the immediate revocation of his root privileges.",
    "collocations": [
      "certificate revocation",
      "privilege revocation",
      "revocation list"
    ],
    "wordFamily": [
      "revoke (v)"
    ],
    "confusableWith": [
      "vocation"
    ],
    "topic": "Access Control",
    "level": 2
  },
  {
    "word": "escalation",
    "ipa": "/ˌes.kəˈleɪ.ʃən/",
    "pos": "noun",
    "meaning_vi": "sự leo thang đặc quyền",
    "example": "The local exploit allowed an attacker to achieve privilege escalation from guest to root.",
    "collocations": [
      "privilege escalation",
      "escalation of incident",
      "escalation path"
    ],
    "wordFamily": [
      "escalate (v)"
    ],
    "confusableWith": [
      "escalator"
    ],
    "topic": "Threats",
    "level": 2
  },
  {
    "word": "triage",
    "ipa": "/ˈtriː.ɑːʒ/",
    "pos": "noun",
    "meaning_vi": "sự phân loại mức độ nghiêm trọng của sự cố",
    "example": "Incident triage allows security analysts to prioritize critical zero-day alerts over spam.",
    "collocations": [
      "incident triage",
      "triage process",
      "rapid triage"
    ],
    "wordFamily": [
      "triage (v)"
    ],
    "confusableWith": [
      "triangle"
    ],
    "topic": "Incident Response",
    "level": 3
  },
  {
    "word": "remediation",
    "ipa": "/rɪˌmiː.diˈeɪ.ʃən/",
    "pos": "noun",
    "meaning_vi": "biện pháp xử lý khắc phục triệt để",
    "example": "Post-breach remediation included rebuilding the SQL cluster and replacing all firewall rules.",
    "collocations": [
      "vulnerability remediation",
      "remediation plan",
      "swift remediation"
    ],
    "wordFamily": [
      "remedy (n/v)",
      "remedial (adj)"
    ],
    "confusableWith": [
      "mediation"
    ],
    "topic": "Incident Response",
    "level": 2
  },
  {
    "word": "deprecate",
    "ipa": "/ˈdep.rə.keɪt/",
    "pos": "verb",
    "meaning_vi": "khai tử, không khuyến khích sử dụng vì lỗi thời",
    "example": "The security committee voted to deprecate the obsolete TLS 1.0 and 1.1 protocol versions.",
    "collocations": [
      "deprecate an algorithm",
      "deprecated protocol",
      "deprecated feature"
    ],
    "wordFamily": [
      "deprecation (n)"
    ],
    "confusableWith": [
      "depreciate (khấu hao)"
    ],
    "topic": "Standards",
    "level": 3
  },
  {
    "word": "botnet",
    "ipa": "/ˈbɒt.net/",
    "pos": "noun",
    "meaning_vi": "mạng máy tính ma bị kiểm soát từ xa",
    "example": "Thousands of compromised smart home devices were coordinated to form a DDoS botnet.",
    "collocations": [
      "botnet attack",
      "dismantle a botnet",
      "botnet commander"
    ],
    "wordFamily": [
      "bot (n)"
    ],
    "confusableWith": [
      "internet"
    ],
    "topic": "Threats",
    "level": 1
  },
  {
    "word": "keylogger",
    "ipa": "/ˈkiːˌlɒɡ.ər/",
    "pos": "noun",
    "meaning_vi": "phần mềm gián điệp ghi lại thao tác gõ phím",
    "example": "The spy software included a silent keylogger designed to steal banking credentials.",
    "collocations": [
      "hardware keylogger",
      "detect a keylogger",
      "keylogger infection"
    ],
    "wordFamily": [
      "keystroke (n)"
    ],
    "confusableWith": [
      "keyboard"
    ],
    "topic": "Malware",
    "level": 1
  },
  {
    "word": "trojan",
    "ipa": "/ˈtrəʊ.dʒən/",
    "pos": "noun",
    "meaning_vi": "mã độc ngựa thành Troy ngụy trang",
    "example": "The malicious executable disguised itself as an invoice PDF but was actually a banking trojan.",
    "collocations": [
      "trojan horse",
      "remote access trojan",
      "banking trojan"
    ],
    "wordFamily": [],
    "confusableWith": [
      "trove"
    ],
    "topic": "Malware",
    "level": 1
  },
  {
    "word": "rootkit",
    "ipa": "/ˈruːt.kɪt/",
    "pos": "noun",
    "meaning_vi": "mã độc bám sâu ẩn giấu trong nhân hệ điều hành",
    "example": "Detecting a kernel rootkit often requires booting the computer from a clean external USB.",
    "collocations": [
      "kernel rootkit",
      "rootkit scanner",
      "hidden rootkit"
    ],
    "wordFamily": [],
    "confusableWith": [
      "toolkit"
    ],
    "topic": "Malware",
    "level": 3
  },
  {
    "word": "spyware",
    "ipa": "/ˈspaɪ.weər/",
    "pos": "noun",
    "meaning_vi": "phần mềm gián điệp theo dõi lén",
    "example": "The mobile phone was compromised with commercial spyware tracking GPS locations.",
    "collocations": [
      "detect spyware",
      "spyware removal",
      "invasive spyware"
    ],
    "wordFamily": [
      "spy (n/v)"
    ],
    "confusableWith": [
      "software"
    ],
    "topic": "Malware",
    "level": 1
  },
  {
    "word": "worm",
    "ipa": "/wɜːm/",
    "pos": "noun",
    "meaning_vi": "sâu máy tính tự nhân bản lây lan qua mạng",
    "example": "Unlike typical viruses, a network worm replicates across connected nodes without user action.",
    "collocations": [
      "computer worm",
      "internet worm",
      "self-replicating worm"
    ],
    "wordFamily": [],
    "confusableWith": [
      "warm"
    ],
    "topic": "Malware",
    "level": 1
  },
  {
    "word": "adware",
    "ipa": "/ˈæd.weər/",
    "pos": "noun",
    "meaning_vi": "phần mềm quảng cáo phiền toái",
    "example": "The free utility tool bundled intrusive adware that hijacked web browser homepages.",
    "collocations": [
      "intrusive adware",
      "bundle adware",
      "adware infection"
    ],
    "wordFamily": [
      "ad (n)"
    ],
    "confusableWith": [
      "hardware"
    ],
    "topic": "Malware",
    "level": 1
  },
  {
    "word": "cryptojacking",
    "ipa": "/ˌkrɪp.təʊˈdʒæk.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "chiếm quyền máy chủ để đào tiền ảo lén",
    "example": "The unauthorized cloud instance spike was traced to an employee's cryptojacking script.",
    "collocations": [
      "cryptojacking malware",
      "detect cryptojacking",
      "cloud cryptojacking"
    ],
    "wordFamily": [
      "cryptojack (v)"
    ],
    "confusableWith": [
      "hijacking"
    ],
    "topic": "Threats",
    "level": 3
  },
  {
    "word": "spear-phishing",
    "ipa": "/ˈspɪəˌfɪʃ.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "tấn công lừa đảo có chủ đích nhắm vào người cụ thể",
    "example": "The accounting director was targeted by a sophisticated spear-phishing message imitating the CEO.",
    "collocations": [
      "targeted spear-phishing",
      "spear-phishing email"
    ],
    "wordFamily": [],
    "confusableWith": [
      "phishing"
    ],
    "topic": "Social Engineering",
    "level": 2
  },
  {
    "word": "whaling",
    "ipa": "/ˈweɪ.lɪŋ/",
    "pos": "noun",
    "meaning_vi": "tấn công lừa đảo nhắm vào lãnh đạo cấp cao",
    "example": "Security protocols mandate double-verification for wire transfers to foil whaling attacks.",
    "collocations": [
      "whaling campaign",
      "whaling fraud"
    ],
    "wordFamily": [],
    "confusableWith": [
      "whale"
    ],
    "topic": "Social Engineering",
    "level": 3
  },
  {
    "word": "vishing",
    "ipa": "/ˈvɪʃ.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "lừa đảo qua cuộc gọi thoại điện thoại",
    "example": "The receptionist fell victim to a vishing scam where the caller claimed to be IT support.",
    "collocations": [
      "vishing phone call",
      "voice vishing"
    ],
    "wordFamily": [],
    "confusableWith": [
      "phishing"
    ],
    "topic": "Social Engineering",
    "level": 2
  },
  {
    "word": "smishing",
    "ipa": "/ˈsmɪʃ.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "lừa đảo qua tin nhắn SMS",
    "example": "Employees received smishing text messages claiming their delivery packages were delayed.",
    "collocations": [
      "smishing text",
      "SMS smishing"
    ],
    "wordFamily": [],
    "confusableWith": [
      "phishing"
    ],
    "topic": "Social Engineering",
    "level": 2
  },
  {
    "word": "credential-stuffing",
    "ipa": "/krɪˈden.ʃəl ˈstʌf.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "tấn công thử danh sách thông tin rò rỉ vào nhiều trang web",
    "example": "Applying rate limiting on login forms helps thwart automated credential-stuffing bots.",
    "collocations": [
      "credential-stuffing attack",
      "mitigate credential-stuffing"
    ],
    "wordFamily": [],
    "confusableWith": [
      "stuffing"
    ],
    "topic": "Threats",
    "level": 3
  },
  {
    "word": "brute-force",
    "ipa": "/ˌbruːt ˈfɔːs/",
    "pos": "noun",
    "meaning_vi": "tấn công thử tất cả các trường hợp mật khẩu",
    "example": "The server locks accounts after five consecutive incorrect brute-force password guesses.",
    "collocations": [
      "brute-force attack",
      "brute-force password",
      "resist brute-force"
    ],
    "wordFamily": [],
    "confusableWith": [
      "brutal"
    ],
    "topic": "Threats",
    "level": 1
  },
  {
    "word": "dictionary-attack",
    "ipa": "/ˈdɪk.ʃən.ər.i əˌtæk/",
    "pos": "noun",
    "meaning_vi": "tấn công thử theo danh sách từ điển mật khẩu phổ biến",
    "example": "Enforcing complex passphrase requirements prevents simple dictionary-attacks.",
    "collocations": [
      "dictionary-attack tool",
      "prevent dictionary-attacks"
    ],
    "wordFamily": [],
    "confusableWith": [
      "dictionary"
    ],
    "topic": "Threats",
    "level": 2
  },
  {
    "word": "zero-day",
    "ipa": "/ˌzɪə.rəʊ ˈdeɪ/",
    "pos": "noun",
    "meaning_vi": "lỗ hổng chưa có bản vá công khai",
    "example": "The browser developer scrambled to release an emergency update addressing an active zero-day.",
    "collocations": [
      "zero-day vulnerability",
      "zero-day exploit",
      "zero-day threat"
    ],
    "wordFamily": [],
    "confusableWith": [
      "today"
    ],
    "topic": "Vulnerabilities",
    "level": 1
  },
  {
    "word": "buffer-overflow",
    "ipa": "/ˌbʌf.ər ˈəʊ.və.fləʊ/",
    "pos": "noun",
    "meaning_vi": "lỗi tràn bộ nhớ đệm",
    "example": "Unchecked string copies in legacy C programming code often lead to fatal buffer-overflow exploits.",
    "collocations": [
      "buffer-overflow flaw",
      "stack buffer-overflow"
    ],
    "wordFamily": [],
    "confusableWith": [
      "overflow"
    ],
    "topic": "Secure Coding",
    "level": 3
  },
  {
    "word": "sql-injection",
    "ipa": "/ˌes.kjuːˈel ɪnˌdʒek.ʃən/",
    "pos": "noun",
    "meaning_vi": "tấn công chèn mã lệnh SQL độc hại",
    "example": "Parameterized database queries protect web forms against catastrophic sql-injection leaks.",
    "collocations": [
      "sql-injection vulnerability",
      "prevent sql-injection"
    ],
    "wordFamily": [],
    "confusableWith": [
      "injection"
    ],
    "topic": "Web Security",
    "level": 2
  },
  {
    "word": "cross-site-scripting",
    "ipa": "/ˌkrɒs.saɪt ˈskrɪp.tɪŋ/",
    "pos": "noun",
    "meaning_vi": "tấn công chèn mã kịch bản XSS",
    "example": "Proper HTML entity encoding on user output is essential to prevent cross-site-scripting.",
    "collocations": [
      "stored cross-site-scripting",
      "reflected XSS"
    ],
    "wordFamily": [
      "XSS (n)"
    ],
    "confusableWith": [
      "scripting"
    ],
    "topic": "Web Security",
    "level": 2
  },
  {
    "word": "man-in-the-middle",
    "ipa": "/ˌmæn.ɪn.ðəˈmɪd.əl/",
    "pos": "noun",
    "meaning_vi": "tấn công kẻ đứng giữa nghe lén/sửa đổi gói tin",
    "example": "Using public Wi-Fi without a VPN exposes travelers to man-in-the-middle eavesdropping.",
    "collocations": [
      "man-in-the-middle attack",
      "prevent MitM"
    ],
    "wordFamily": [
      "MitM (n)"
    ],
    "confusableWith": [
      "middleman"
    ],
    "topic": "Network Security",
    "level": 2
  },
  {
    "word": "denial-of-service",
    "ipa": "/dɪˌnaɪ.əl.əvˈsɜː.vɪs/",
    "pos": "noun",
    "meaning_vi": "tấn công từ chối dịch vụ (DoS)",
    "example": "The distributed denial-of-service flood overwhelmed the online retailer's checkout servers.",
    "collocations": [
      "denial-of-service attack",
      "DDoS mitigation"
    ],
    "wordFamily": [
      "DoS (n)",
      "DDoS (n)"
    ],
    "confusableWith": [
      "service"
    ],
    "topic": "Network Threats",
    "level": 1
  },
  {
    "word": "eavesdropping",
    "ipa": "/ˈiːvzˌdrɒp.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "nghe trộm dữ liệu trên đường truyền",
    "example": "Unencrypted network communication protocols leave sensitive corporate emails vulnerable to eavesdropping.",
    "collocations": [
      "network eavesdropping",
      "electronic eavesdropping"
    ],
    "wordFamily": [
      "eavesdrop (v)"
    ],
    "confusableWith": [
      "dropping"
    ],
    "topic": "Threats",
    "level": 2
  },
  {
    "word": "side-channel",
    "ipa": "/ˈsaɪd.tʃæn.əl/",
    "pos": "noun",
    "meaning_vi": "tấn công qua kênh phụ (đo nhiệt, điện năng, thời gian)",
    "example": "Spectre and Meltdown exploited microarchitectural CPU side-channel leaks.",
    "collocations": [
      "side-channel attack",
      "timing side-channel"
    ],
    "wordFamily": [],
    "confusableWith": [
      "channel"
    ],
    "topic": "Hardware Security",
    "level": 3
  },
  {
    "word": "zero-trust",
    "ipa": "/ˌzɪə.rəʊ ˈtrʌst/",
    "pos": "noun",
    "meaning_vi": "mô hình bảo mật không tin tưởng bất kỳ ai",
    "example": "The zero-trust security paradigm assumes threats exist both inside and outside the perimeter.",
    "collocations": [
      "zero-trust architecture",
      "zero-trust model"
    ],
    "wordFamily": [],
    "confusableWith": [
      "trust"
    ],
    "topic": "Architecture",
    "level": 2
  },
  {
    "word": "least-privilege",
    "ipa": "/ˌliːst ˈprɪv.əl.ɪdʒ/",
    "pos": "noun",
    "meaning_vi": "nguyên tắc đặc quyền tối thiểu",
    "example": "Adhering to least-privilege ensures developers do not hold root passwords to live production clouds.",
    "collocations": [
      "principle of least-privilege",
      "enforce least-privilege"
    ],
    "wordFamily": [],
    "confusableWith": [
      "privilege"
    ],
    "topic": "Access Control",
    "level": 2
  },
  {
    "word": "defense-in-depth",
    "ipa": "/dɪˌfens.ɪnˈdepθ/",
    "pos": "noun",
    "meaning_vi": "chiến lược phòng thủ theo nhiều lớp lang",
    "example": "Combining firewalls, endpoint sensors, and user training embodies defense-in-depth.",
    "collocations": [
      "defense-in-depth strategy",
      "multi-layered defense-in-depth"
    ],
    "wordFamily": [],
    "confusableWith": [
      "depth"
    ],
    "topic": "Strategy",
    "level": 2
  },
  {
    "word": "dmz",
    "ipa": "/ˌdiː.emˈzed/",
    "pos": "noun",
    "meaning_vi": "vùng phi quân sự mạng cách ly",
    "example": "Public-facing corporate web and mail servers reside within a segmented network DMZ.",
    "collocations": [
      "network DMZ",
      "place in the DMZ"
    ],
    "wordFamily": [],
    "confusableWith": [
      "zone"
    ],
    "topic": "Network Security",
    "level": 2
  },
  {
    "word": "vpn",
    "ipa": "/ˌviː.piːˈen/",
    "pos": "noun",
    "meaning_vi": "mạng riêng ảo mã hóa kết nối",
    "example": "Employees must establish a secure VPN connection before accessing the internal document repository.",
    "collocations": [
      "corporate VPN",
      "connect to VPN",
      "VPN tunnel"
    ],
    "wordFamily": [],
    "confusableWith": [
      "VCR"
    ],
    "topic": "Remote Access",
    "level": 1
  },
  {
    "word": "proxy",
    "ipa": "/ˈprɒk.si/",
    "pos": "noun",
    "meaning_vi": "máy chủ ủy nhiệm trung gian",
    "example": "The outbound corporate web proxy blocks traffic destined for known malware domains.",
    "collocations": [
      "reverse proxy",
      "proxy server",
      "authenticate with proxy"
    ],
    "wordFamily": [
      "proxies (pl)"
    ],
    "confusableWith": [
      "proximity"
    ],
    "topic": "Network Defense",
    "level": 2
  },
  {
    "word": "bastion-host",
    "ipa": "/ˈbæs.ti.ən həʊst/",
    "pos": "noun",
    "meaning_vi": "máy chủ trung chuyển chuyên dụng có độ bảo mật cao",
    "example": "Administrators connect through an encrypted bastion-host jump box to manage production clusters.",
    "collocations": [
      "bastion-host server",
      "configure a bastion-host"
    ],
    "wordFamily": [],
    "confusableWith": [
      "host"
    ],
    "topic": "Infrastructure",
    "level": 3
  },
  {
    "word": "nac",
    "ipa": "/næk/",
    "pos": "noun",
    "meaning_vi": "hệ thống kiểm soát truy cập mạng (Network Access Control)",
    "example": "The NAC appliance inspects personal laptops for compliance before granting Wi-Fi IP leases.",
    "collocations": [
      "NAC solution",
      "NAC policy"
    ],
    "wordFamily": [],
    "confusableWith": [
      "MAC"
    ],
    "topic": "Network Access",
    "level": 3
  },
  {
    "word": "siem",
    "ipa": "/siːm/",
    "pos": "noun",
    "meaning_vi": "hệ thống quản lý sự kiện và thông tin bảo mật",
    "example": "The enterprise SIEM aggregates syslog events from thousands of network switches and servers.",
    "collocations": [
      "SIEM platform",
      "SIEM dashboard",
      "SIEM alert"
    ],
    "wordFamily": [],
    "confusableWith": [
      "seem"
    ],
    "topic": "Monitoring",
    "level": 2
  },
  {
    "word": "soar",
    "ipa": "/sɔːr/",
    "pos": "noun",
    "meaning_vi": "nền tảng tự động hóa và điều phối phản ứng sự cố",
    "example": "By integrating SOAR playbooks, the security team automated the isolation of infected endpoints.",
    "collocations": [
      "SOAR playbook",
      "SOAR automation"
    ],
    "wordFamily": [],
    "confusableWith": [
      "soar (bay vút)"
    ],
    "topic": "Incident Response",
    "level": 3
  },
  {
    "word": "edr",
    "ipa": "/ˌiː.diːˈɑːr/",
    "pos": "noun",
    "meaning_vi": "giải pháp phát hiện và phản ứng tại thiết bị đầu cuối",
    "example": "The EDR software detected an in-memory reflective DLL injection and killed the process.",
    "collocations": [
      "EDR agent",
      "EDR sensor",
      "managed EDR"
    ],
    "wordFamily": [],
    "confusableWith": [
      "CDR"
    ],
    "topic": "Endpoint Security",
    "level": 2
  },
  {
    "word": "xdr",
    "ipa": "/ˌeks.diːˈɑːr/",
    "pos": "noun",
    "meaning_vi": "hệ thống phát hiện và phản ứng mở rộng trên nhiều nền tảng",
    "example": "Modern enterprise defense relies on XDR to correlate cloud, email, and network telemetry.",
    "collocations": [
      "XDR platform",
      "unified XDR"
    ],
    "wordFamily": [],
    "confusableWith": [
      "EDR"
    ],
    "topic": "Threat Hunting",
    "level": 3
  },
  {
    "word": "ndr",
    "ipa": "/ˌen.diːˈɑːr/",
    "pos": "noun",
    "meaning_vi": "giải pháp phân tích và phản ứng lưu lượng mạng",
    "example": "The NDR sensor flagged unauthorized lateral SMB connections traversing internal subnets.",
    "collocations": [
      "NDR appliance",
      "NDR analytics"
    ],
    "wordFamily": [],
    "confusableWith": [
      "EDR"
    ],
    "topic": "Network Defense",
    "level": 3
  },
  {
    "word": "ids",
    "ipa": "/ˌaɪ.diːˈes/",
    "pos": "noun",
    "meaning_vi": "hệ thống phát hiện xâm nhập",
    "example": "The network IDS alerted administrators to suspicious pattern matches in packet headers.",
    "collocations": [
      "network IDS",
      "host IDS",
      "IDS sensor"
    ],
    "wordFamily": [],
    "confusableWith": [
      "IPS"
    ],
    "topic": "Detection",
    "level": 2
  },
  {
    "word": "ips",
    "ipa": "/ˌaɪ.piːˈes/",
    "pos": "noun",
    "meaning_vi": "hệ thống ngăn chặn xâm nhập chủ động",
    "example": "Unlike an IDS, an inline IPS drops malicious network packets automatically in real time.",
    "collocations": [
      "inline IPS",
      "IPS signature",
      "deploy IPS"
    ],
    "wordFamily": [],
    "confusableWith": [
      "IDS"
    ],
    "topic": "Prevention",
    "level": 2
  },
  {
    "word": "dlp",
    "ipa": "/ˌdiː.elˈpiː/",
    "pos": "noun",
    "meaning_vi": "hệ thống chống rò rỉ và thất thoát dữ liệu",
    "example": "The DLP software blocked an employee from uploading internal source code to a public forum.",
    "collocations": [
      "endpoint DLP",
      "DLP rule",
      "DLP policy"
    ],
    "wordFamily": [],
    "confusableWith": [
      "DNS"
    ],
    "topic": "Data Protection",
    "level": 2
  },
  {
    "word": "casb",
    "ipa": "/ˈkæz.bi/",
    "pos": "noun",
    "meaning_vi": "cổng môi giới bảo mật truy cập đám mây",
    "example": "Organizations deploy a CASB to enforce data governance across SaaS tools like Microsoft 365.",
    "collocations": [
      "CASB architecture",
      "CASB enforcement"
    ],
    "wordFamily": [],
    "confusableWith": [
      "cask"
    ],
    "topic": "Cloud Security",
    "level": 3
  },
  {
    "word": "waf",
    "ipa": "/wæf/",
    "pos": "noun",
    "meaning_vi": "tường lửa ứng dụng web",
    "example": "A cloud WAF inspects HTTP traffic to filter out SQL injections and cross-site scripting attempts.",
    "collocations": [
      "cloud WAF",
      "WAF rule",
      "WAF protection"
    ],
    "wordFamily": [],
    "confusableWith": [
      "wafer"
    ],
    "topic": "Web Security",
    "level": 2
  },
  {
    "word": "symmetric",
    "ipa": "/sɪˈmet.rɪk/",
    "pos": "adjective",
    "meaning_vi": "mã hóa đối xứng (dùng chung một khóa)",
    "example": "AES-256 is an ultra-fast symmetric encryption algorithm favored for large data files.",
    "collocations": [
      "symmetric cipher",
      "symmetric key",
      "symmetric encryption"
    ],
    "wordFamily": [
      "symmetry (n)"
    ],
    "confusableWith": [
      "asymmetric"
    ],
    "topic": "Cryptography",
    "level": 2
  },
  {
    "word": "asymmetric",
    "ipa": "/ˌeɪ.sɪˈmet.rɪk/",
    "pos": "adjective",
    "meaning_vi": "mã hóa bất đối xứng (khóa công khai và khóa bí mật)",
    "example": "RSA utilizes an asymmetric key pair to securely exchange symmetric session keys.",
    "collocations": [
      "asymmetric algorithm",
      "asymmetric key pair"
    ],
    "wordFamily": [
      "asymmetry (n)"
    ],
    "confusableWith": [
      "symmetric"
    ],
    "topic": "Cryptography",
    "level": 2
  },
  {
    "word": "hash",
    "ipa": "/hæʃ/",
    "pos": "noun",
    "meaning_vi": "giá trị băm một chiều của tệp dữ liệu / (v) băm",
    "example": "Comparing the SHA-256 hash of the downloaded ISO confirms that the file was not altered.",
    "collocations": [
      "cryptographic hash",
      "hash function",
      "hash collision"
    ],
    "wordFamily": [
      "hashing (n)"
    ],
    "confusableWith": [
      "mash"
    ],
    "topic": "Cryptography",
    "level": 1
  },
  {
    "word": "nonce",
    "ipa": "/nɒns/",
    "pos": "noun",
    "meaning_vi": "số ngẫu nhiên chỉ sử dụng một lần trong mật mã",
    "example": "A cryptographic nonce ensures that authentication packets cannot be intercepted and replayed.",
    "collocations": [
      "cryptographic nonce",
      "random nonce",
      "unique nonce"
    ],
    "wordFamily": [],
    "confusableWith": [
      "nonsense"
    ],
    "topic": "Cryptography",
    "level": 3
  },
  {
    "word": "cipher",
    "ipa": "/ˈsaɪ.fər/",
    "pos": "noun",
    "meaning_vi": "thuật toán mã hóa",
    "example": "Modern block ciphers transform fixed-size groups of bits under the control of a key.",
    "collocations": [
      "block cipher",
      "stream cipher",
      "cipher suite"
    ],
    "wordFamily": [
      "decipher (v)"
    ],
    "confusableWith": [
      "siphon"
    ],
    "topic": "Cryptography",
    "level": 2
  },
  {
    "word": "plaintext",
    "ipa": "/ˈpleɪn.tekst/",
    "pos": "noun",
    "meaning_vi": "văn bản gốc chưa mã hóa",
    "example": "Never store user passwords in plaintext within a production database.",
    "collocations": [
      "plaintext password",
      "convert to plaintext"
    ],
    "wordFamily": [],
    "confusableWith": [
      "ciphertext"
    ],
    "topic": "Cryptography",
    "level": 1
  },
  {
    "word": "ciphertext",
    "ipa": "/ˈsaɪ.fə.tekst/",
    "pos": "noun",
    "meaning_vi": "bản mã sau khi được mã hóa",
    "example": "Without the correct private key, the transmitted ciphertext appears as meaningless static.",
    "collocations": [
      "encrypted ciphertext",
      "produce ciphertext"
    ],
    "wordFamily": [],
    "confusableWith": [
      "plaintext"
    ],
    "topic": "Cryptography",
    "level": 2
  },
  {
    "word": "pki",
    "ipa": "/ˌpiː.keɪˈaɪ/",
    "pos": "noun",
    "meaning_vi": "hạ tầng khóa công khai",
    "example": "Enterprise PKI infrastructure issues and manages digital identity certificates across the organization.",
    "collocations": [
      "PKI hierarchy",
      "PKI certificate",
      "corporate PKI"
    ],
    "wordFamily": [],
    "confusableWith": [
      "API"
    ],
    "topic": "PKI",
    "level": 2
  },
  {
    "word": "ca",
    "ipa": "/ˌsiːˈeɪ/",
    "pos": "noun",
    "meaning_vi": "nhà cấp phát chứng chỉ số (Certificate Authority)",
    "example": "A trusted third-party CA verifies corporate identity before signing SSL web certificates.",
    "collocations": [
      "trusted CA",
      "root CA",
      "CA signature"
    ],
    "wordFamily": [],
    "confusableWith": [
      "car"
    ],
    "topic": "PKI",
    "level": 2
  },
  {
    "word": "crl",
    "ipa": "/ˌsiː.ɑːrˈel/",
    "pos": "noun",
    "meaning_vi": "danh sách các chứng chỉ số đã bị thu hồi",
    "example": "Web browsers query CRL servers to check whether a stolen certificate has been revoked.",
    "collocations": [
      "CRL check",
      "download CRL"
    ],
    "wordFamily": [],
    "confusableWith": [
      "URL"
    ],
    "topic": "PKI",
    "level": 3
  },
  {
    "word": "ocsp",
    "ipa": "/ˌəʊ.siː.esˈpiː/",
    "pos": "noun",
    "meaning_vi": "giao thức kiểm tra trạng thái chứng chỉ trực tuyến",
    "example": "OCSP stapling reduces web server latency while verifying real-time certificate validity.",
    "collocations": [
      "OCSP stapling",
      "OCSP responder"
    ],
    "wordFamily": [],
    "confusableWith": [
      "OSPF"
    ],
    "topic": "PKI",
    "level": 3
  },
  {
    "word": "tls",
    "ipa": "/ˌtiː.elˈes/",
    "pos": "noun",
    "meaning_vi": "giao thức bảo mật tầng truyền tải (kế tục SSL)",
    "example": "All modern websites must enforce TLS 1.3 encryption to protect user session traffic.",
    "collocations": [
      "TLS handshake",
      "TLS certificate",
      "enforce TLS"
    ],
    "wordFamily": [],
    "confusableWith": [
      "SSL"
    ],
    "topic": "Network Protocols",
    "level": 1
  },
  {
    "word": "ssh",
    "ipa": "/ˌes.esˈeɪtʃ/",
    "pos": "noun",
    "meaning_vi": "giao thức dòng lệnh bảo mật điều khiển từ xa",
    "example": "System administrators connect via SSH keys rather than vulnerable password logins.",
    "collocations": [
      "SSH key",
      "SSH session",
      "SSH connection"
    ],
    "wordFamily": [],
    "confusableWith": [
      "SSL"
    ],
    "topic": "Remote Administration",
    "level": 1
  },
  {
    "word": "ipsec",
    "ipa": "/ˈaɪ.piːˌsek/",
    "pos": "noun",
    "meaning_vi": "bộ giao thức bảo mật lớp mạng IP",
    "example": "Branch office routers established a permanent site-to-site IPsec tunnel across the internet.",
    "collocations": [
      "IPsec tunnel",
      "IPsec VPN",
      "IPsec protocol"
    ],
    "wordFamily": [],
    "confusableWith": [
      "IPv6"
    ],
    "topic": "Network Security",
    "level": 2
  },
  {
    "word": "mfa",
    "ipa": "/ˌem.efˈeɪ/",
    "pos": "noun",
    "meaning_vi": "xác thực đa yếu tố",
    "example": "Enforcing corporate MFA blocks over 99 percent of automated credential stuffing intrusions.",
    "collocations": [
      "mandatory MFA",
      "hardware MFA",
      "enforce MFA"
    ],
    "wordFamily": [],
    "confusableWith": [
      "MBA"
    ],
    "topic": "Authentication",
    "level": 1
  },
  {
    "word": "2fa",
    "ipa": "/ˌtuː.efˈeɪ/",
    "pos": "noun",
    "meaning_vi": "xác thực hai yếu tố",
    "example": "Online banking accounts require 2FA combining a master password and an SMS passcode.",
    "collocations": [
      "enable 2FA",
      "2FA prompt",
      "2FA key"
    ],
    "wordFamily": [],
    "confusableWith": [
      "MFA"
    ],
    "topic": "Authentication",
    "level": 1
  },
  {
    "word": "sso",
    "ipa": "/ˌes.esˈəʊ/",
    "pos": "noun",
    "meaning_vi": "cơ chế đăng nhập một lần",
    "example": "Corporate SSO allows employees to access cloud email, HR tools, and wiki with one login.",
    "collocations": [
      "enterprise SSO",
      "SSO integration",
      "SSO portal"
    ],
    "wordFamily": [],
    "confusableWith": [
      "SEO"
    ],
    "topic": "Identity Management",
    "level": 2
  },
  {
    "word": "saml",
    "ipa": "/ˈsæm.əl/",
    "pos": "noun",
    "meaning_vi": "ngôn ngữ đánh dấu xác thực bảo mật",
    "example": "The enterprise identity provider utilizes SAML assertions to authenticate cloud sessions.",
    "collocations": [
      "SAML assertion",
      "SAML token",
      "SAML SSO"
    ],
    "wordFamily": [],
    "confusableWith": [
      "sample"
    ],
    "topic": "Identity Protocols",
    "level": 3
  },
  {
    "word": "oauth",
    "ipa": "/ˈəʊˌɔːθ/",
    "pos": "noun",
    "meaning_vi": "giao thức ủy quyền truy cập ứng dụng",
    "example": "OAuth 2.0 enables third-party apps to access account data without seeing user passwords.",
    "collocations": [
      "OAuth token",
      "OAuth authorization",
      "OAuth flow"
    ],
    "wordFamily": [],
    "confusableWith": [
      "oath"
    ],
    "topic": "Authorization",
    "level": 2
  },
  {
    "word": "oidc",
    "ipa": "/ˌəʊ.aɪ.diːˈsiː/",
    "pos": "noun",
    "meaning_vi": "lớp định danh người dùng xây trên OAuth 2.0",
    "example": "Modern single-page applications use OIDC to verify the identity of the end user.",
    "collocations": [
      "OIDC authentication",
      "OIDC token"
    ],
    "wordFamily": [],
    "confusableWith": [
      "OECD"
    ],
    "topic": "Identity Protocols",
    "level": 3
  },
  {
    "word": "rbac",
    "ipa": "/ˈɑː.bæk/",
    "pos": "noun",
    "meaning_vi": "mô hình kiểm soát truy cập dựa trên vai trò (Role-Based)",
    "example": "Under RBAC, an accountant cannot access engineering Git repositories or code branches.",
    "collocations": [
      "implement RBAC",
      "RBAC model",
      "RBAC policy"
    ],
    "wordFamily": [],
    "confusableWith": [
      "ABAC"
    ],
    "topic": "Access Control",
    "level": 2
  },
  {
    "word": "abac",
    "ipa": "/ˈeɪ.bæk/",
    "pos": "noun",
    "meaning_vi": "kiểm soát truy cập dựa trên thuộc tính ngữ cảnh",
    "example": "ABAC policies evaluate user location, device security posture, and time of day before granting access.",
    "collocations": [
      "ABAC rule",
      "dynamic ABAC"
    ],
    "wordFamily": [],
    "confusableWith": [
      "RBAC"
    ],
    "topic": "Access Control",
    "level": 3
  },
  {
    "word": "pam",
    "ipa": "/pæm/",
    "pos": "noun",
    "meaning_vi": "hệ thống quản lý tài khoản đặc quyền tối cao",
    "example": "Cybersecurity frameworks require PAM software to vault and audit domain administrator passwords.",
    "collocations": [
      "PAM solution",
      "PAM vault",
      "PAM session"
    ],
    "wordFamily": [],
    "confusableWith": [
      "pan"
    ],
    "topic": "Privileged Access",
    "level": 3
  },
  {
    "word": "iam",
    "ipa": "/ˌaɪ.eɪˈem/",
    "pos": "noun",
    "meaning_vi": "quản lý danh tính và quyền truy cập",
    "example": "The cloud architect configured granular IAM policies to restrict S3 bucket permissions.",
    "collocations": [
      "cloud IAM",
      "IAM policy",
      "IAM role"
    ],
    "wordFamily": [],
    "confusableWith": [
      "AIM"
    ],
    "topic": "Identity Governance",
    "level": 2
  },
  {
    "word": "soc",
    "ipa": "/sɒk/",
    "pos": "noun",
    "meaning_vi": "trung tâm điều hành an ninh mạng (Security Operations Center)",
    "example": "The Tier-1 SOC analysts monitor alerts 24/7 and triage critical incident tickets.",
    "collocations": [
      "SOC analyst",
      "SOC team",
      "internal SOC"
    ],
    "wordFamily": [],
    "confusableWith": [
      "sock"
    ],
    "topic": "Operations",
    "level": 1
  },
  {
    "word": "csirt",
    "ipa": "/ˈsiː.sɜːt/",
    "pos": "noun",
    "meaning_vi": "đội phản ứng sự cố an toàn thông tin",
    "example": "The enterprise CSIRT mobilized immediately upon confirmation of the ransomware breach.",
    "collocations": [
      "CSIRT team",
      "activate the CSIRT"
    ],
    "wordFamily": [],
    "confusableWith": [
      "CERT"
    ],
    "topic": "Incident Response",
    "level": 2
  },
  {
    "word": "ciso",
    "ipa": "/ˈsiː.səʊ/",
    "pos": "noun",
    "meaning_vi": "giám đốc an ninh thông tin",
    "example": "The CISO briefs the corporate board quarterly on emerging cyber threats and compliance.",
    "collocations": [
      "appoint a CISO",
      "CISO role",
      "report to CISO"
    ],
    "wordFamily": [],
    "confusableWith": [
      "CIO"
    ],
    "topic": "Leadership",
    "level": 1
  },
  {
    "word": "ioc",
    "ipa": "/ˌaɪ.əʊˈsiː/",
    "pos": "noun",
    "meaning_vi": "dấu hiệu nhận biết bị xâm nhập (Indicator of Compromise)",
    "example": "Security researchers shared a list of file hashes and IP addresses acting as IOCs for the malware.",
    "collocations": [
      "match an IOC",
      "IOC list",
      "threat IOC"
    ],
    "wordFamily": [],
    "confusableWith": [
      "IOC (Olympic)"
    ],
    "topic": "Threat Intelligence",
    "level": 2
  },
  {
    "word": "ioa",
    "ipa": "/ˌaɪ.əʊˈeɪ/",
    "pos": "noun",
    "meaning_vi": "dấu hiệu nhận biết hành vi tấn công đang diễn ra",
    "example": "Heuristic endpoint sensors detect IOAs such as memory injection before a file is written to disk.",
    "collocations": [
      "behavioral IOA",
      "IOA detection"
    ],
    "wordFamily": [],
    "confusableWith": [
      "IOC"
    ],
    "topic": "Threat Hunting",
    "level": 3
  },
  {
    "word": "ttp",
    "ipa": "/ˌtiː.tiːˈpiː/",
    "pos": "noun",
    "meaning_vi": "chiến thuật, kỹ thuật và quy trình của tin tặc",
    "example": "Threat intelligence analysts mapped the threat syndicate's TTPs to the MITRE ATT&CK matrix.",
    "collocations": [
      "adversary TTPs",
      "analyze TTPs"
    ],
    "wordFamily": [],
    "confusableWith": [
      "TCP"
    ],
    "topic": "Threat Intelligence",
    "level": 3
  },
  {
    "word": "cve",
    "ipa": "/ˌsiː.viːˈiː/",
    "pos": "noun",
    "meaning_vi": "mã định danh lỗ hổng bảo mật chung chuẩn quốc tế",
    "example": "The newly published CVE has a maximum CVSS base vulnerability rating of 10.0.",
    "collocations": [
      "CVE number",
      "patch the CVE",
      "assigned CVE"
    ],
    "wordFamily": [],
    "confusableWith": [
      "CV"
    ],
    "topic": "Vulnerabilities",
    "level": 2
  },
  {
    "word": "cvss",
    "ipa": "/ˌsiː.viː.esˈes/",
    "pos": "noun",
    "meaning_vi": "hệ thống chấm điểm độ nghiêm trọng của lỗ hổng",
    "example": "Any security vulnerability scoring above 9.0 on the CVSS scale requires emergency patching within 24 hours.",
    "collocations": [
      "CVSS score",
      "CVSS base metric"
    ],
    "wordFamily": [],
    "confusableWith": [
      "CSS"
    ],
    "topic": "Vulnerabilities",
    "level": 2
  },
  {
    "word": "accrue",
    "ipa": "/əˈkruː/",
    "pos": "verb",
    "meaning_vi": "tích lũy dần theo thời gian (lãi suất, ngày nghỉ)",
    "example": "Interest will accrue on the overdue balance at a rate of 1.5% per month.",
    "collocations": [
      "accrue interest",
      "accrue benefits",
      "accrued expenses"
    ],
    "wordFamily": [
      "accrual (n)",
      "accrued (adj)"
    ],
    "confusableWith": [
      "accurate"
    ],
    "topic": "Finance",
    "level": 2
  },
  {
    "word": "adjourn",
    "ipa": "/əˈdʒɜːn/",
    "pos": "verb",
    "meaning_vi": "tạm hoãn, bế mạc cuộc họp",
    "example": "The committee chairman voted to adjourn the board meeting until next Tuesday.",
    "collocations": [
      "adjourn a meeting",
      "adjourn until",
      "motion to adjourn"
    ],
    "wordFamily": [
      "adjournment (n)"
    ],
    "confusableWith": [
      "adjoin (kề bên)"
    ],
    "topic": "Meetings",
    "level": 2
  },
  {
    "word": "arbitration",
    "ipa": "/ˌɑː.bɪˈtreɪ.ʃən/",
    "pos": "noun",
    "meaning_vi": "sự phân xử của trọng tài thương mại",
    "example": "The supplier dispute was submitted to binding arbitration to avoid court litigation.",
    "collocations": [
      "binding arbitration",
      "submit to arbitration",
      "arbitration clause"
    ],
    "wordFamily": [
      "arbitrate (v)",
      "arbitrator (n)"
    ],
    "confusableWith": [
      "arbitrary (tùy tiện)"
    ],
    "topic": "Legal Affairs",
    "level": 3
  },
  {
    "word": "collateral",
    "ipa": "/kəˈlæt.ər.əl/",
    "pos": "noun",
    "meaning_vi": "tài sản thế chấp cho khoản vay",
    "example": "The enterprise offered its commercial warehouse as collateral for the bank loan.",
    "collocations": [
      "put up collateral",
      "collateral security",
      "pledge collateral"
    ],
    "wordFamily": [],
    "confusableWith": [
      "colleague"
    ],
    "topic": "Banking",
    "level": 2
  },
  {
    "word": "commensurate",
    "ipa": "/kəˈmen.sjər.ət/",
    "pos": "adjective",
    "meaning_vi": "tương xứng với (năng lực, kinh nghiệm)",
    "example": "The executive compensation package will be commensurate with candidate experience.",
    "collocations": [
      "commensurate with experience",
      "salary commensurate"
    ],
    "wordFamily": [
      "commensurately (adv)"
    ],
    "confusableWith": [
      "commence"
    ],
    "topic": "Human Resources",
    "level": 3
  },
  {
    "word": "commodity",
    "ipa": "/kəˈmɒd.ə.ti/",
    "pos": "noun",
    "meaning_vi": "hàng hóa nguyên liệu thô (dầu, ngũ cốc, kim loại)",
    "example": "Global fluctuations in commodity prices impacted manufacturing margins.",
    "collocations": [
      "basic commodity",
      "commodity market",
      "agricultural commodity"
    ],
    "wordFamily": [
      "commodities (pl)"
    ],
    "confusableWith": [
      "accommodate"
    ],
    "topic": "Economics",
    "level": 2
  },
  {
    "word": "concession",
    "ipa": "/kənˈseʃ.ən/",
    "pos": "noun",
    "meaning_vi": "sự nhượng bộ trong đàm phán / quầy nhượng quyền",
    "example": "Both negotiating parties made key concessions to finalize the trade agreement.",
    "collocations": [
      "make concessions",
      "win concessions",
      "major concession"
    ],
    "wordFamily": [
      "concede (v)"
    ],
    "confusableWith": [
      "confession"
    ],
    "topic": "Negotiations",
    "level": 2
  },
  {
    "word": "conducive",
    "ipa": "/kənˈdʒuː.sɪv/",
    "pos": "adjective",
    "meaning_vi": "tạo điều kiện thuận lợi cho điều gì",
    "example": "Ergonomic furniture and quiet office booths are conducive to high productivity.",
    "collocations": [
      "conducive to productivity",
      "environment conducive"
    ],
    "wordFamily": [
      "conduct (v)"
    ],
    "confusableWith": [
      "conductive (dẫn điện)"
    ],
    "topic": "Workplace",
    "level": 2
  },
  {
    "word": "consolidation",
    "ipa": "/kənˌsɒl.ɪˈdeɪ.ʃən/",
    "pos": "noun",
    "meaning_vi": "sự hợp nhất doanh nghiệp, gom hàng",
    "example": "Debt consolidation allowed the startup to reduce its monthly loan interest payments.",
    "collocations": [
      "corporate consolidation",
      "debt consolidation",
      "freight consolidation"
    ],
    "wordFamily": [
      "consolidate (v)",
      "consolidated (adj)"
    ],
    "confusableWith": [
      "consolation (an ủi)"
    ],
    "topic": "Finance & Logistics",
    "level": 2
  },
  {
    "word": "conspicuous",
    "ipa": "/kənˈspɪk.ju.əs/",
    "pos": "adjective",
    "meaning_vi": "nổi bật, dễ nhận thấy",
    "example": "Emergency evacuation fire exits must be marked with conspicuous illuminated signs.",
    "collocations": [
      "conspicuous display",
      "conspicuous location"
    ],
    "wordFamily": [
      "conspicuously (adv)"
    ],
    "confusableWith": [
      "suspicious (nghi ngờ)"
    ],
    "topic": "Facilities & Safety",
    "level": 2
  },
  {
    "word": "cumulative",
    "ipa": "/ˈkjuː.mjə.lə.tɪv/",
    "pos": "adjective",
    "meaning_vi": "tích lũy dồn lại dần",
    "example": "The cumulative impact of small process improvements increased overall efficiency by 20%.",
    "collocations": [
      "cumulative effect",
      "cumulative total",
      "cumulative growth"
    ],
    "wordFamily": [
      "accumulate (v)",
      "cumulatively (adv)"
    ],
    "confusableWith": [
      "accumulate"
    ],
    "topic": "Performance",
    "level": 2
  },
  {
    "word": "customary",
    "ipa": "/ˈkʌs.tə.mər.i/",
    "pos": "adjective",
    "meaning_vi": "theo phong tục, thông lệ thông thường",
    "example": "It is customary in our industry to provide a fifteen percent advance deposit on signing.",
    "collocations": [
      "customary practice",
      "customary fee",
      "as is customary"
    ],
    "wordFamily": [
      "custom (n)",
      "customarily (adv)"
    ],
    "confusableWith": [
      "customer"
    ],
    "topic": "Corporate Culture",
    "level": 1
  },
  {
    "word": "default",
    "ipa": "/dɪˈfɒlt/",
    "pos": "verb",
    "meaning_vi": "vỡ nợ, không trả được nợ / (n) mặc định",
    "example": "If the borrower should default on the mortgage, the property will be seized.",
    "collocations": [
      "default on a loan",
      "default settings",
      "in default"
    ],
    "wordFamily": [
      "defaulter (n)"
    ],
    "confusableWith": [
      "fault"
    ],
    "topic": "Finance & IT",
    "level": 2
  },
  {
    "word": "defer",
    "ipa": "/dɪˈfɜːr/",
    "pos": "verb",
    "meaning_vi": "hoãn lại, lùi ngày thực hiện",
    "example": "The board voted to defer capital expenditures on the new plant until next quarter.",
    "collocations": [
      "defer payment",
      "defer a decision",
      "defer action"
    ],
    "wordFamily": [
      "deferral (n)",
      "deferred (adj)"
    ],
    "confusableWith": [
      "differ (khác biệt)"
    ],
    "topic": "Finance",
    "level": 2
  },
  {
    "word": "demographic",
    "ipa": "/ˌdem.əˈɡræf.ɪk/",
    "pos": "noun",
    "meaning_vi": "nhóm nhân khẩu học đối tượng",
    "example": "The mobile banking app is tailored to appeal to a younger urban demographic.",
    "collocations": [
      "target demographic",
      "demographic shift",
      "demographic data"
    ],
    "wordFamily": [
      "demography (n)",
      "demographical (adj)"
    ],
    "confusableWith": [
      "geographic"
    ],
    "topic": "Marketing",
    "level": 1
  },
  {
    "word": "deplete",
    "ipa": "/dɪˈpliːt/",
    "pos": "verb",
    "meaning_vi": "làm cạn kiệt nguồn cung",
    "example": "Heavy customer holiday demand depleted warehouse inventory of the flagship smartphone.",
    "collocations": [
      "deplete resources",
      "severely deplete",
      "deplete reserves"
    ],
    "wordFamily": [
      "depletion (n)"
    ],
    "confusableWith": [
      "complete"
    ],
    "topic": "Supply Chain",
    "level": 2
  },
  {
    "word": "deterrent",
    "ipa": "/dɪˈter.ənt/",
    "pos": "noun",
    "meaning_vi": "yếu tố ngăn cản, răn đe",
    "example": "Strict audit penalties serve as a powerful deterrent against expense account fraud.",
    "collocations": [
      "effective deterrent",
      "act as a deterrent",
      "nuclear deterrent"
    ],
    "wordFamily": [
      "deter (v)"
    ],
    "confusableWith": [
      "detergent (bột giặt)"
    ],
    "topic": "Compliance",
    "level": 2
  },
  {
    "word": "disclaimer",
    "ipa": "/dɪˈskleɪ.mər/",
    "pos": "noun",
    "meaning_vi": "tuyên bố miễn trừ trách nhiệm",
    "example": "The financial prospectus includes a legal disclaimer regarding investment risks.",
    "collocations": [
      "legal disclaimer",
      "read the disclaimer",
      "publish a disclaimer"
    ],
    "wordFamily": [
      "disclaim (v)"
    ],
    "confusableWith": [
      "claim"
    ],
    "topic": "Legal Affairs",
    "level": 2
  },
  {
    "word": "discretionary",
    "ipa": "/dɪˈskreʃ.ən.ər.i/",
    "pos": "adjective",
    "meaning_vi": "tùy ý sử dụng, không bắt buộc",
    "example": "Department directors have discretionary funds for employee recognition gifts.",
    "collocations": [
      "discretionary spending",
      "discretionary income",
      "discretionary power"
    ],
    "wordFamily": [
      "discretion (n)",
      "discreet (adj)"
    ],
    "confusableWith": [
      "discreet"
    ],
    "topic": "Budgeting",
    "level": 2
  },
  {
    "word": "downsizing",
    "ipa": "/ˈdaʊnˌsaɪ.zɪŋ/",
    "pos": "noun",
    "meaning_vi": "sự tinh giản biên chế, cắt giảm nhân sự",
    "example": "Corporate restructuring and downsizing affected over two hundred regional positions.",
    "collocations": [
      "company downsizing",
      "undergo downsizing"
    ],
    "wordFamily": [
      "downsize (v)"
    ],
    "confusableWith": [
      "resizing"
    ],
    "topic": "Human Resources",
    "level": 2
  },
  {
    "word": "downturn",
    "ipa": "/ˈdaʊn.tɜːn/",
    "pos": "noun",
    "meaning_vi": "sự suy thoái, đi xuống của kinh tế",
    "example": "Export revenues declined sharply during the global semiconductor downturn.",
    "collocations": [
      "economic downturn",
      "market downturn",
      "sharp downturn"
    ],
    "wordFamily": [],
    "confusableWith": [
      "turnover"
    ],
    "topic": "Economics",
    "level": 1
  },
  {
    "word": "embargo",
    "ipa": "/ɪmˈbɑː.ɡəʊ/",
    "pos": "noun",
    "meaning_vi": "lệnh cấm vận thương mại",
    "example": "The international trade embargo halted all shipments of crude petroleum.",
    "collocations": [
      "trade embargo",
      "impose an embargo",
      "lift an embargo"
    ],
    "wordFamily": [
      "embargoes (pl)"
    ],
    "confusableWith": [
      "cargo"
    ],
    "topic": "Trade",
    "level": 3
  },
  {
    "word": "entitlement",
    "ipa": "/ɪnˈtaɪ.təl.mənt/",
    "pos": "noun",
    "meaning_vi": "quyền lợi được hưởng theo luật/hợp đồng",
    "example": "Senior software engineers are provided an annual four-week vacation entitlement.",
    "collocations": [
      "leave entitlement",
      "benefit entitlement",
      "statutory entitlement"
    ],
    "wordFamily": [
      "entitle (v)",
      "entitled (adj)"
    ],
    "confusableWith": [
      "title"
    ],
    "topic": "Human Resources",
    "level": 2
  },
  {
    "word": "equity",
    "ipa": "/ˈek.wɪ.ti/",
    "pos": "noun",
    "meaning_vi": "vốn chủ sở hữu / sự công bằng",
    "example": "The tech startup founders granted employee stock equity as part of recruitment.",
    "collocations": [
      "private equity",
      "equity stake",
      "brand equity"
    ],
    "wordFamily": [
      "equitable (adj)"
    ],
    "confusableWith": [
      "equality"
    ],
    "topic": "Finance",
    "level": 2
  },
  {
    "word": "exorbitant",
    "ipa": "/ɪɡˈzɔː.bɪ.tənt/",
    "pos": "adjective",
    "meaning_vi": "đắt đỏ quá mức, cắt cổ (giá cả)",
    "example": "The firm rejected the vendor's bid due to exorbitant shipping surcharges.",
    "collocations": [
      "exorbitant price",
      "exorbitant fees",
      "exorbitant cost"
    ],
    "wordFamily": [
      "exorbitantly (adv)"
    ],
    "confusableWith": [
      "orbit"
    ],
    "topic": "Procurement",
    "level": 3
  },
  {
    "word": "expenditure",
    "ipa": "/ɪkˈspen.dɪ.tʃər/",
    "pos": "noun",
    "meaning_vi": "khoản chi tiêu, tổng mức chi phí",
    "example": "Capital expenditure on automated warehouse robotics exceeded fifty million dollars.",
    "collocations": [
      "capital expenditure",
      "annual expenditure",
      "reduce expenditure"
    ],
    "wordFamily": [
      "expend (v)",
      "expense (n)"
    ],
    "confusableWith": [
      "expense"
    ],
    "topic": "Finance",
    "level": 1
  },
  {
    "word": "expertise",
    "ipa": "/ˌek.spɜːˈtiːz/",
    "pos": "noun",
    "meaning_vi": "chuyên môn, kiến thức chuyên sâu",
    "example": "We hired external management consultants for their specialized logistics expertise.",
    "collocations": [
      "technical expertise",
      "professional expertise",
      "area of expertise"
    ],
    "wordFamily": [
      "expert (n/adj)"
    ],
    "confusableWith": [
      "expert"
    ],
    "topic": "Human Resources",
    "level": 1
  },
  {
    "word": "fiscal",
    "ipa": "/ˈfɪs.kəl/",
    "pos": "adjective",
    "meaning_vi": "thuộc tài chính công, năm tài khóa",
    "example": "The company reported record quarterly net revenue for fiscal year 2026.",
    "collocations": [
      "fiscal year",
      "fiscal policy",
      "fiscal quarter"
    ],
    "wordFamily": [
      "fiscally (adv)"
    ],
    "confusableWith": [
      "physical"
    ],
    "topic": "Finance",
    "level": 1
  },
  {
    "word": "fraction",
    "ipa": "/ˈfræk.ʃən/",
    "pos": "noun",
    "meaning_vi": "một phần nhỏ, phân số",
    "example": "Automated fulfillment centers process customer orders in a fraction of the manual time.",
    "collocations": [
      "fraction of the cost",
      "fraction of a second",
      "small fraction"
    ],
    "wordFamily": [
      "fractional (adj)"
    ],
    "confusableWith": [
      "friction (ma sát)"
    ],
    "topic": "Operations",
    "level": 1
  },
  {
    "word": "fuzzing",
    "ipa": "/ˈfʌz.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "kỹ thuật kiểm thử tự động truyền dữ liệu ngẫu nhiên để tìm lỗi",
    "example": "Security researchers utilized protocol fuzzing to discover memory leak vulnerabilities in the server.",
    "collocations": [
      "automated fuzzing",
      "fuzzing tool",
      "fuzz testing"
    ],
    "wordFamily": [
      "fuzz (v)",
      "fuzzer (n)"
    ],
    "confusableWith": [
      "fuzzy"
    ],
    "topic": "AppSec",
    "level": 3
  },
  {
    "word": "clickjacking",
    "ipa": "/ˈklɪkˌdʒæk.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "tấn công đánh lừa người dùng nhấp vào nút ẩn trên web",
    "example": "Implementing X-Frame-Options headers protects web portals against malicious clickjacking attacks.",
    "collocations": [
      "prevent clickjacking",
      "clickjacking vulnerability"
    ],
    "wordFamily": [],
    "confusableWith": [
      "hijacking"
    ],
    "topic": "Web Security",
    "level": 3
  },
  {
    "word": "csrf",
    "ipa": "/ˌsiː.es.ɑːrˈef/",
    "pos": "noun",
    "meaning_vi": "tấn công giả mạo yêu cầu từ phía người dùng (Cross-Site Request Forgery)",
    "example": "Unique anti-CSRF verification tokens are generated per session to prevent unauthorized fund transfers.",
    "collocations": [
      "anti-CSRF token",
      "CSRF vulnerability",
      "CSRF defense"
    ],
    "wordFamily": [],
    "confusableWith": [
      "XSS"
    ],
    "topic": "Web Security",
    "level": 3
  },
  {
    "word": "beaconing",
    "ipa": "/ˈbiː.kən.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "hành vi mã độc gửi tín hiệu định kỳ về máy chủ điều khiển C2",
    "example": "Network sensors detected regular HTTP beaconing every five minutes to an unknown foreign IP.",
    "collocations": [
      "beaconing behavior",
      "malware beaconing",
      "detect beaconing"
    ],
    "wordFamily": [
      "beacon (n)"
    ],
    "confusableWith": [
      "beaver"
    ],
    "topic": "Threat Hunting",
    "level": 3
  },
  {
    "word": "c2",
    "ipa": "/ˌsiːˈtuː/",
    "pos": "noun",
    "meaning_vi": "máy chủ chỉ huy và điều khiển mã độc (Command & Control)",
    "example": "The threat intelligence team sinkholed the domain to sever the infected botnet from its C2 server.",
    "collocations": [
      "C2 server",
      "C2 channel",
      "C2 infrastructure"
    ],
    "wordFamily": [],
    "confusableWith": [
      "C3"
    ],
    "topic": "Threats",
    "level": 2
  },
  {
    "word": "infostealer",
    "ipa": "/ˈɪn.fəʊˌstiː.lər/",
    "pos": "noun",
    "meaning_vi": "mã độc chuyên đánh cắp thông tin thẻ và tài khoản đăng nhập",
    "example": "The contractor contracted an infostealer via an unverified torrent download on his home PC.",
    "collocations": [
      "infostealer infection",
      "detect an infostealer"
    ],
    "wordFamily": [
      "steal (v)"
    ],
    "confusableWith": [
      "ransomware"
    ],
    "topic": "Malware",
    "level": 2
  },
  {
    "word": "lateral-movement",
    "ipa": "/ˌlæt.ər.əl ˈmuːv.mənt/",
    "pos": "noun",
    "meaning_vi": "hành vi tin tặc di chuyển ngang qua các máy trong mạng nội bộ",
    "example": "Segmenting internal subnets prevents attackers from achieving easy lateral-movement across servers.",
    "collocations": [
      "detect lateral-movement",
      "prevent lateral-movement"
    ],
    "wordFamily": [],
    "confusableWith": [
      "movement"
    ],
    "topic": "Threats",
    "level": 2
  },
  {
    "word": "pass-the-hash",
    "ipa": "/ˌpɑːs.ðəˈhæʃ/",
    "pos": "noun",
    "meaning_vi": "kỹ thuật tấn công đăng nhập bằng mã băm mà không cần giải mã mật khẩu",
    "example": "Modern Windows Credential Guard prevents pass-the-hash attacks by isolating NTLM hashes in memory.",
    "collocations": [
      "pass-the-hash attack",
      "prevent pass-the-hash"
    ],
    "wordFamily": [],
    "confusableWith": [
      "hash"
    ],
    "topic": "Authentication Attacks",
    "level": 3
  },
  {
    "word": "mimikatz",
    "ipa": "/ˈmɪm.ɪˌkæts/",
    "pos": "noun",
    "meaning_vi": "công cụ khét tiếng dùng để trích xuất mật khẩu từ bộ nhớ RAM",
    "example": "Endpoint antivirus signatures immediately block the execution of Mimikatz memory dump scripts.",
    "collocations": [
      "execute Mimikatz",
      "Mimikatz tool"
    ],
    "wordFamily": [],
    "confusableWith": [
      "mimic"
    ],
    "topic": "Tools & Attacks",
    "level": 3
  },
  {
    "word": "kerberoasting",
    "ipa": "/ˈkɜː.bər.əʊst.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "kỹ thuật tấn công đánh cắp vé dịch vụ Kerberos để bẻ khóa ngoại tuyến",
    "example": "Organizations enforce strong 25-character service account passwords to resist Kerberoasting.",
    "collocations": [
      "Kerberoasting attack",
      "detect Kerberoasting"
    ],
    "wordFamily": [
      "Kerberos (n)"
    ],
    "confusableWith": [
      "roasting"
    ],
    "topic": "Active Directory",
    "level": 3
  },
  {
    "word": "domain-controller",
    "ipa": "/dəʊˈmeɪn kənˌtrəʊ.lər/",
    "pos": "noun",
    "meaning_vi": "máy chủ quản lý chứng thực trung tâm Active Directory",
    "example": "The primary domain-controller requires strict network firewall rules and physical access logging.",
    "collocations": [
      "compromise a domain-controller",
      "primary domain-controller"
    ],
    "wordFamily": [],
    "confusableWith": [
      "controller"
    ],
    "topic": "Infrastructure",
    "level": 2
  },
  {
    "word": "active-directory",
    "ipa": "/ˌæk.tɪv dɪˈrek.tər.i/",
    "pos": "noun",
    "meaning_vi": "hệ thống dịch vụ quản lý người dùng và tài nguyên của Microsoft",
    "example": "Auditors reviewed the enterprise Active-Directory tree to remove dormant employee accounts.",
    "collocations": [
      "Active-Directory forest",
      "Active-Directory audit"
    ],
    "wordFamily": [],
    "confusableWith": [
      "directory"
    ],
    "topic": "Identity Management",
    "level": 1
  },
  {
    "word": "wireshark",
    "ipa": "/ˈwaɪə.ʃɑːk/",
    "pos": "noun",
    "meaning_vi": "phần mềm phân tích bắt gói tin mạng phổ biến nhất",
    "example": "Network security engineers utilized Wireshark to inspect unencrypted HTTP authentication handshakes.",
    "collocations": [
      "Wireshark capture",
      "open in Wireshark"
    ],
    "wordFamily": [],
    "confusableWith": [
      "shark"
    ],
    "topic": "Tools",
    "level": 1
  },
  {
    "word": "nmap",
    "ipa": "/ˈen.mæp/",
    "pos": "noun",
    "meaning_vi": "công cụ quét cổng mạng và kiểm tra dịch vụ máy chủ",
    "example": "The penetration tester ran an Nmap sweep to identify open ports across the subnet.",
    "collocations": [
      "Nmap scan",
      "run Nmap"
    ],
    "wordFamily": [],
    "confusableWith": [
      "map"
    ],
    "topic": "Tools",
    "level": 1
  },
  {
    "word": "arp-poisoning",
    "ipa": "/ˌeɪ.ɑː.piː ˈpɔɪ.zən.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "tấn công đầu độc bảng ARP để chặn bắt gói tin nội bộ",
    "example": "Dynamic ARP inspection on the Cisco switches successfully neutralized the arp-poisoning exploit.",
    "collocations": [
      "arp-poisoning attack",
      "detect arp-poisoning"
    ],
    "wordFamily": [],
    "confusableWith": [
      "poison"
    ],
    "topic": "Network Attacks",
    "level": 3
  },
  {
    "word": "sinkhole",
    "ipa": "/ˈsɪŋk.həʊl/",
    "pos": "noun",
    "meaning_vi": "kỹ thuật điều hướng tên miền độc hại về máy chủ an toàn",
    "example": "Law enforcement authorities coordinated a DNS sinkhole to redirect botnet communication.",
    "collocations": [
      "DNS sinkhole",
      "sinkhole a domain"
    ],
    "wordFamily": [
      "sinkholing (n)"
    ],
    "confusableWith": [
      "sink"
    ],
    "topic": "Threat Mitigation",
    "level": 3
  },
  {
    "word": "bgp-hijacking",
    "ipa": "/ˌbiː.dʒiːˈpiː ˈhaɪˌdʒæk.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "tấn công cướp quyền định tuyến mạng toàn cầu BGP",
    "example": "BGP-hijacking can redirect international internet traffic through foreign government data centers.",
    "collocations": [
      "BGP-hijacking incident",
      "prevent BGP-hijacking"
    ],
    "wordFamily": [],
    "confusableWith": [
      "hijacking"
    ],
    "topic": "Internet Infrastructure",
    "level": 3
  },
  {
    "word": "syn-flood",
    "ipa": "/ˈsɪn.flʌd/",
    "pos": "noun",
    "meaning_vi": "tấn công làm nghẽn hàng đợi kết nối TCP bằng gói SYN",
    "example": "Enabling SYN cookies on the edge load balancers prevented the syn-flood from dropping connections.",
    "collocations": [
      "syn-flood attack",
      "TCP syn-flood"
    ],
    "wordFamily": [],
    "confusableWith": [
      "flood"
    ],
    "topic": "DDoS",
    "level": 3
  },
  {
    "word": "dark-web",
    "ipa": "/ˌdɑːk ˈweb/",
    "pos": "noun",
    "meaning_vi": "mạng ngầm mã hóa ẩn danh",
    "example": "Threat intelligence analysts monitor dark-web forums for mentions of leaked corporate credentials.",
    "collocations": [
      "dark-web monitoring",
      "sold on the dark-web"
    ],
    "wordFamily": [],
    "confusableWith": [
      "web"
    ],
    "topic": "Threat Intelligence",
    "level": 1
  },
  {
    "word": "apt",
    "ipa": "/ˌeɪ.piːˈtiː/",
    "pos": "noun",
    "meaning_vi": "nhóm tin tặc tấn công có chủ đích và dai dẳng (Advanced Persistent Threat)",
    "example": "APT-29 is a notorious state-sponsored group known for stealthy cyber espionage campaigns.",
    "collocations": [
      "APT group",
      "APT campaign",
      "state-sponsored APT"
    ],
    "wordFamily": [],
    "confusableWith": [
      "apt (thích hợp)"
    ],
    "topic": "Threat Actors",
    "level": 2
  },
  {
    "word": "hacktivist",
    "ipa": "/ˈhæk.tɪ.vɪst/",
    "pos": "noun",
    "meaning_vi": "tin tặc hoạt động vì động cơ chính trị hoặc ý thức hệ",
    "example": "The corporate website was defaced by an environmental hacktivist group protesting oil drilling.",
    "collocations": [
      "hacktivist syndicate",
      "hacktivist attack"
    ],
    "wordFamily": [
      "hacktivism (n)"
    ],
    "confusableWith": [
      "activist"
    ],
    "topic": "Threat Actors",
    "level": 2
  },
  {
    "word": "insider-threat",
    "ipa": "/ɪnˈsaɪ.dər θret/",
    "pos": "noun",
    "meaning_vi": "nguy cơ an ninh xuất phát từ chính nhân viên nội bộ",
    "example": "Background checks and behavioral telemetry help organizations identify malicious insider-threats.",
    "collocations": [
      "insider-threat program",
      "mitigate insider-threats"
    ],
    "wordFamily": [],
    "confusableWith": [
      "threat"
    ],
    "topic": "Risk",
    "level": 2
  },
  {
    "word": "social-engineering",
    "ipa": "/ˌsəʊ.ʃəl en.dʒɪˈnɪə.rɪŋ/",
    "pos": "noun",
    "meaning_vi": "nghệ thuật thao túng tâm lý để lấy cắp thông tin bí mật",
    "example": "Phishing is the most prevalent form of social-engineering used in modern corporate breaches.",
    "collocations": [
      "social-engineering attack",
      "victim of social-engineering"
    ],
    "wordFamily": [],
    "confusableWith": [
      "engineering"
    ],
    "topic": "Threats",
    "level": 1
  },
  {
    "word": "pretexting",
    "ipa": "/ˈpriː.tekst.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "chiêu trò dựng chuyện tạo dựng lòng tin để khai thác thông tin",
    "example": "The caller engaged in pretexting by posing as an IT technician needing remote desktop authorization.",
    "collocations": [
      "pretexting scam",
      "engage in pretexting"
    ],
    "wordFamily": [
      "pretext (n)"
    ],
    "confusableWith": [
      "texting"
    ],
    "topic": "Social Engineering",
    "level": 3
  },
  {
    "word": "shoulder-surfing",
    "ipa": "/ˈʃəʊl.dərˌsɜː.fɪŋ/",
    "pos": "noun",
    "meaning_vi": "hành vi nhìn lén qua vai để đánh cắp mã PIN hoặc mật khẩu",
    "example": "Privacy privacy screen filters prevent shoulder-surfing when working in public coffee shops.",
    "collocations": [
      "prevent shoulder-surfing",
      "shoulder-surfing risk"
    ],
    "wordFamily": [],
    "confusableWith": [
      "surfing"
    ],
    "topic": "Physical Security",
    "level": 2
  },
  {
    "word": "adversary-emulation",
    "ipa": "/ˈæd.və.sər.i ˌem.jəˈleɪ.ʃən/",
    "pos": "noun",
    "meaning_vi": "hoạt động mô phỏng các đòn đánh của tin tặc để diễn tập",
    "example": "The red team conducts adversary-emulation exercises to test the defensive reflexes of our SOC.",
    "collocations": [
      "adversary-emulation plan",
      "run adversary-emulation"
    ],
    "wordFamily": [],
    "confusableWith": [
      "emulation"
    ],
    "topic": "Testing",
    "level": 3
  },
  {
    "word": "purple-teaming",
    "ipa": "/ˈpɜː.pəl tiːm.ɪŋ/",
    "pos": "noun",
    "meaning_vi": "mô hình phối hợp chặt chẽ giữa đội tấn công (Red) và phòng thủ (Blue)",
    "example": "Purple-teaming allows defensive analysts to tune detection rules immediately as attacks occur.",
    "collocations": [
      "purple-teaming exercise",
      "adopt purple-teaming"
    ],
    "wordFamily": [],
    "confusableWith": [
      "teaming"
    ],
    "topic": "Operations",
    "level": 3
  },
  {
    "word": "red-team",
    "ipa": "/ˈred tiːm/",
    "pos": "noun",
    "meaning_vi": "đội đóng vai kẻ tấn công giả định (Offensive)",
    "example": "The red-team successfully breached the perimeter by exploiting a misconfigured web server.",
    "collocations": [
      "red-team assessment",
      "hire a red-team"
    ],
    "wordFamily": [],
    "confusableWith": [
      "blue-team"
    ],
    "topic": "Testing",
    "level": 1
  },
  {
    "word": "blue-team",
    "ipa": "/ˈbluː tiːm/",
    "pos": "noun",
    "meaning_vi": "đội ngũ phòng thủ và trực nhật an ninh mạng (Defensive)",
    "example": "The blue-team detected the intrusion within fifteen minutes and isolated the endpoint.",
    "collocations": [
      "blue-team analyst",
      "blue-team defense"
    ],
    "wordFamily": [],
    "confusableWith": [
      "red-team"
    ],
    "topic": "Operations",
    "level": 1
  },
  {
    "word": "white-hat",
    "ipa": "/ˌwaɪt ˈhæt/",
    "pos": "noun",
    "meaning_vi": "tin tặc mũ trắng, hacker đạo đức",
    "example": "White-hat security researchers report discovered vulnerabilities directly to software vendors.",
    "collocations": [
      "white-hat hacker",
      "ethical white-hat"
    ],
    "wordFamily": [],
    "confusableWith": [
      "black-hat"
    ],
    "topic": "Community",
    "level": 1
  },
  {
    "word": "black-hat",
    "ipa": "/ˌblæk ˈhæt/",
    "pos": "noun",
    "meaning_vi": "tin tặc mũ đen, tội phạm mạng",
    "example": "Black-hat syndicates sell stolen corporate financial records on encrypted underground forums.",
    "collocations": [
      "black-hat hacker",
      "black-hat criminal"
    ],
    "wordFamily": [],
    "confusableWith": [
      "white-hat"
    ],
    "topic": "Threat Actors",
    "level": 1
  },
  {
    "word": "bug-bounty",
    "ipa": "/ˈbʌɡ ˌbaʊn.ti/",
    "pos": "noun",
    "meaning_vi": "chương trình trao thưởng cho người tìm ra lỗ hổng",
    "example": "HexaTech launched a public bug-bounty program offering up to $10,000 for critical zero-days.",
    "collocations": [
      "bug-bounty platform",
      "bug-bounty reward"
    ],
    "wordFamily": [],
    "confusableWith": [
      "bounty"
    ],
    "topic": "AppSec",
    "level": 1
  },
  {
    "word": "ztna",
    "ipa": "/ˌzed.tiː.enˈeɪ/",
    "pos": "noun",
    "meaning_vi": "kiến trúc truy cập mạng Zero-Trust (Zero Trust Network Access)",
    "example": "Replacing legacy corporate VPNs with ZTNA restricts user access strictly to authorized applications.",
    "collocations": [
      "ZTNA solution",
      "deploy ZTNA"
    ],
    "wordFamily": [],
    "confusableWith": [
      "VPN"
    ],
    "topic": "Architecture",
    "level": 3
  },
  {
    "word": "microsegmentation",
    "ipa": "/ˌmaɪ.krəʊˌseɡ.mənˈteɪ.ʃən/",
    "pos": "noun",
    "meaning_vi": "kỹ thuật phân vùng mạng siêu nhỏ để cô lập từng máy chủ",
    "example": "Cloud microsegmentation ensures that a compromise in one web container cannot reach the database.",
    "collocations": [
      "network microsegmentation",
      "enforce microsegmentation"
    ],
    "wordFamily": [],
    "confusableWith": [
      "segmentation"
    ],
    "topic": "Cloud Defense",
    "level": 3
  }
];
