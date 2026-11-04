/**
 * ==========================================================================
 * MOCK DATA: ACGS ASSESSMENT & CRITERIA
 * Dữ liệu đồng bộ 100% từ SUMARY CARD.xlsx (Sheet1) & ACGS 2026_PV Drilling
 * ==========================================================================
 */

// 1. Số liệu tổng quan (Summary Sheet1)
var acgsSummaryData = {
    "overview": {
        "totalScore": 143,
        "maxScore": 209,
        "percentScore": 68,
        "level1": {
            "score": 131,
            "maxScore": 179,
            "percent": 73
        },
        "level2": {
            "score": 12,
            "maxScore": 30,
            "percent": 40
        }
    },
    "questionStatus": {
        "totalQuestions": 193,
        "completed": {
            "count": 146,
            "percent": 76
        },
        "pending": {
            "count": 47,
            "percent": 24
        }
    },
    "categoryScores": [
        {
            "badge": "A",
            "name": "Nhóm A - Quyền cổ đông",
            "score": 29,
            "maxScore": 38,
            "percent": 76,
            "totalQuestions": 30,
            "completedQuestions": 25,
            "pendingQuestions": 5
        },
        {
            "badge": "B",
            "name": "Nhóm B - Vai trò của các bên có quyền lợi liên quan",
            "score": 23,
            "maxScore": 25,
            "percent": 92,
            "totalQuestions": 22,
            "completedQuestions": 20,
            "pendingQuestions": 2
        },
        {
            "badge": "C",
            "name": "Nhóm C - Công bố thông tin và Minh bạch",
            "score": 27,
            "maxScore": 45,
            "percent": 60,
            "totalQuestions": 34,
            "completedQuestions": 22,
            "pendingQuestions": 12
        },
        {
            "badge": "D",
            "name": "Nhóm D - Trách nhiệm của HĐQT",
            "score": 52,
            "maxScore": 71,
            "percent": 73,
            "totalQuestions": 63,
            "completedQuestions": 46,
            "pendingQuestions": 17
        }
    ],
    "level2Details": {
        "bonus": {
            "title": "Bonus - Điểm thưởng",
            "totalQuestions": 18,
            "completedQuestions": 7,
            "pendingQuestions": 11,
            "maxScore": 30,
            "score": 12,
            "percent": 40
        },
        "penalty": {
            "title": "Penalty - Điểm phạt",
            "totalQuestions": 26,
            "completedQuestions": 26,
            "pendingQuestions": 0,
            "maxScore": 0,
            "score": 0,
            "percent": 100
        }
    }
};

// 2. Danh mục tiêu chí Cấp độ 1 (Level 1: Nhóm A, B, C, D - 149 tiêu chí)
var acgsLevel1Data = [
    {
        "id": "A",
        "title": "A - QUYỀN CỦA CỔ ĐÔNG",
        "isOpen": true,
        "subGroups": [
            {
                "id": "A.1",
                "code": "A.1",
                "title": "QUYỀN CƠ BẢN CỦA CỔ ĐÔNG",
                "isOpen": true,
                "criteria": [
                    {
                        "stt": "A.1.1",
                        "content": "Công ty có trả cổ tức (kỳ giữa và kỳ cuối hàng năm) một cách bình đẳng và kịp thời; nghĩa là, tất cả cổ đông được đối xử bình đẳng và được trả trong vòng 30 ngày sau khi được (i) công bố đối với cổ tức giữa kỳ và (ii) được cổ đông thông qua tại các đại hội cổ đông đối với cổ tức cuối năm? Trong trường hợp công ty công bố phương án chọn lựa chi trả cổ tức cổ phiếu (scrip dividend), công ty có trả cổ tức trong vòng 60 ngày kể từ ngày công bố hay không?",
                        "maxScore": 2,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling chưa đạt phần này",
                            "items": [
                                "Có chính sách chi trả cổ tức",
                                "Có NQ của ĐHĐCĐ về chi trả cổ tức",
                                "BCTN có báo cáo chi tiết về kết quả chi trả cổ tức theo đúng quy định của pháp luật Việt Nam",
                                "Nhưng không đáp ứng số ngày thực hiện 30 ngày (tiền mặt) và 60 ngày (cổ phiếu)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Chính sách chi trả cổ tức",
                                "url": "#"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "A.2",
                "code": "A.2",
                "title": "QUYỀN THAM GIA HIỆU QUẢ VÀ BIỂU QUYẾT TRONG CÁC CUỘC HỌP ĐẠI HỘI ĐỒNG CỔ ĐÔNG VÀ PHẢI ĐƯỢC THÔNG BÁO VỀ CÁC QUY TẮC, BAO GỒM CẢ THỦ TỤC BIỂU QUYẾT, CHI PHỐI CÁC CUỘC HỌP ĐẠI HỘI ĐỒNG CỔ ĐÔNG.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "A.2.1",
                        "content": "Các cổ đông có cơ hội, được chứng minh bằng một mục chương trình nghị sự, để phê duyệt thù lao (phí, phụ cấp, lợi ích bằng hiện vật và các khoản thù lao khác) hoặc bất kỳ sự gia tăng thù lao nào cho các giám đốc / ủy viên không điều hành không?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Điều lệ (điều 14.2.d, trang 25) quy định quyền của ĐHĐCĐ về quyết định thù lao của HĐQT/BKS.",
                                "Trong chương trình nghị sự ĐHĐCĐ thường niên 2026, đây là một trong những nội dung cần được ĐHĐCĐ biểu quyết thông qua và đã có NQ về nội dung này"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Điều lệ",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "A.2.2",
                        "content": "Công ty có cung cấp cho các cổ đông không kiểm soát quyền đề cử ứng cử viên cho hội đồng quản trị / ủy viên không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Điều lệ (Điều 11 khoản 6, trang 20) công bố: \" Cổ đông hoặc nhóm cổ đông sở hữu từ 10% tổng số cổ phần phổ thông trở lên có quyền đề cử người vào HĐQT theo quy định tại khoản 2 Điều 20 và ……\""
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Điều lệ",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "A.2.3",
                        "content": "Công ty có cho phép cổ đông bầu từng thành viên/ủy viên HĐQT không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Thể lệ biểu quyết tại ĐHĐCĐ 2026: cổ đông có thể dồn phiếu cho 1 hoặc 1 số ứng viên",
                                "Biên bản cuộc họp ĐHĐCĐ 2026 ( Mục V.13, trang 25): PV Drilling bầu thành viên HĐQT theo nguyên tắc phiếu cộng dồn cho từng thành viên HĐQT"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.2.4",
                        "content": "Công ty có tiết lộ các thủ tục biểu quyết được sử dụng trước khi bắt đầu cuộc họp không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Các thủ tục biểu quyết được hướng dẫn chi tiết trực tuyến trên phần mền Bvote và hướng dẫn trực tiếp tại đại hội và có quy định tại",
                                "Thể lệ biểu quyết tại cuộc họp ĐHĐCĐ TN 2026",
                                "Quy chế làm việc tại cuộc họp ĐHĐCĐ TN 2026",
                                "Hướng dẫn tham dự ĐHĐCĐ TN 2026"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.2.5",
                        "content": "Biên bản ĐHĐCĐ gần đây nhất có ghi nhận rằng các cổ đông đã có cơ hội đặt câu hỏi và câu hỏi của các cổ đông và Câu trả lời được đưa ra được ghi lại?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BB họp ĐHĐCĐ 2026 (Mục V, trang 8 và Phụ lục đính kèm, trang 28-35): có chương trình thảo luận trong ĐHĐCĐ để các cổ đông có thể đặt câu hỏi và PV Drilling trả lời"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.2.6",
                        "content": "Công ty có tiết lộ kết quả biểu quyết bao gồm thông qua, không đồng ý và bỏ phiếu trắng đối với tất cả các nghị quyết / từng mục chương trình nghị sự cho ĐHĐCĐ gần đây nhất không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BB họp ĐHĐCĐ 2026 (mục VI, trang 8-25): có thể hiện nội dung công bố kết quả biểu quyết gồm số phiếu tán thành, số phiếu không tán thành, phiếu không có ý kiến cho từng mục chương trình nghị sự"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.2.7",
                        "content": "Công ty có tiết lộ danh sách thành viên HĐQT tham dự ĐHĐCĐ gần đây nhất không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BB họp ĐHĐCĐ 2026 (mục II.1, trang 1-2): có thể hiện nội dung công bố đầy đủ danh sách TV HĐQT, chủ tịch các Ủy ban tham dự ĐHĐCĐ."
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.2.8",
                        "content": "Công ty có tiết lộ rằng tất cả các thành viên hội đồng quản trị và CEO (nếu CEO không phải là thành viên hội đồng quản trị) đã tham dự ĐHĐCĐ gần đây nhất không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BB họp ĐHĐCĐ 2026 (mục II.1, trang 1-2): có thể hiện nội dung công bố đầy đủ TV HĐQT và TV Ban TGĐ, trong đó có CEO tham dự ĐHĐCĐ (CEO là TV HĐQT)."
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.2.9",
                        "content": "Công ty có cho phép bỏ phiếu vắng mặt không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BB họp ĐHĐCĐ 2026: cho phép bỏ phiếu vắng mặt thông qua việc bỏ phiếu điện tử hoặc ủy quyền:",
                                "'- Hướng dẫn biểu quyết bằng phương thức bỏ phiếu điện tử;",
                                "Thể lệ biểu quyết tại cuộc họp ĐHĐCĐ 2026",
                                "Điều 9, 10; Quy chế làm việc tại cuộc họp ĐHĐCĐ 2026",
                                "Hướng dẫn đăng nhập và bỏ phiếu điện tử; Hướng dẫn tham dự cuộc họp ĐHĐCĐ 2026"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.2.10",
                        "content": "Công ty có bỏ phiếu bằng cách thăm dò ý kiến (trái ngược với việc giơ tay) cho tất cả các nghị quyết tại ĐHĐCĐ gần đây nhất không?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BB họp ĐHĐCĐ 2026: lấy ý kiến cổ đông thông qua phương thức bỏ phiếu điện tử"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.2.11",
                        "content": "Công ty có tiết lộ rằng họ đã chỉ định một bên độc lập (scrutineers / thanh tra) để kiểm đếm và / hoặc xác nhận phiếu bầu tại AGM không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BB họp ĐHĐCĐ 2026 (Mục III.3, trang 4): PV Drilling chỉ định bên độc lập tham gia Ban kiểm phiếu: đơn vị kiểm toán (giám sát kiểm phiếu), TV HĐQT độc lập, cổ đông nhỏ"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.2.12",
                        "content": "Công ty có công bố công khai vào ngày làm việc tiếp theo kết quả biểu quyết được thực hiện trong ĐHĐCĐ / EGM gần đây nhất cho tất cả các nghị quyết không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "ĐHĐCĐ thường niên 2026 kết thúc vào 13:10 ngày 21/04/2026.Tất cả các nghị quyết và các biên bản ĐHĐCĐ được công bố cùng ngày trên website mục Quan hệ nhà đầu tư/ĐHĐCĐ"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.2.13",
                        "content": "Công ty có thông báo trước ít nhất 21 ngày cho tất cả các ĐHĐCĐ và ĐHĐCĐ bất thường không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Thư mời và tất cả tài liệu tại cuộc họp được công bố trên website (Mục: Quan hệ nhà đầu tư/Tài liệu ĐHĐCĐ) ngày 28/3/206, trước 24 ngày so với ngày tổ chức ĐHĐCĐ 21/04/2026"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.2.14",
                        "content": "Công ty có đưa ra lý do và giải thích cho từng mục chương trình nghị sự cần có sự chấp thuận của cổ đông trong thông báo ĐHĐCĐ/thông tư và/hoặc tuyên bố kèm theo không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Đối với mỗi nội dung chương trình họp ĐHĐCĐ, Công ty cung cấp các thông tin, tài liệu liên quan cho mỗi vấn đề trình ĐHĐCĐ thông qua tại tài liệu Đại hội được công bố trên website (Mục: Quan hệ nhà đầu tư/Tài liệu ĐHĐCĐ), nơi mà thư mời tham dự ĐHĐCĐ có hướng dẫn cổ đông xem tài liệu",
                                "Tuy nhiên trong Agenda không có giải thích lý do của từng nội dung"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.2.15",
                        "content": "Công ty có tạo cơ hội cho các cổ đông đưa các mục vào chương trình nghị sự của các cuộc họp đại hội đồng và / hoặc yêu cầu các cuộc họp đại hội đồng theo một tỷ lệ nhất định không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "PV Drilling tạo đầy đủ điều kiện để cổ đông nắm bắt các nội dung ĐHĐCĐ và hoàn toàn có quyền yêu cầu bổ sung nội dung ĐH:",
                                "'- Thư mời họp ĐHĐCĐ năm 2026 (mục 4) có công bố nơi cung cấp tài liệu đại hội trên website và người liên hệ trực tiếp khi cổ đông cần hỗ trợ.",
                                "Tài liệu ĐHĐCĐ có kèm theo mẫu Giấy kiến nghị bổ sung nội dung vào chương trình ĐHĐCĐ năm 2026.",
                                "Biên bản ĐHĐCD 2026 (mục IV trang 4): \"Đoàn Chủ tịch trình bày Chương trình làm việc, Quy chế làm việc, Thể lệ biểu quyết của cuộc họp...\" và kết quả bỏ phiếu thông qua từng nội dung"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Điều lệ",
                                "url": "#"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "A.3",
                "code": "A.3",
                "title": "THỊ TRƯỜNG KIỂM SOÁT DOANH NGHIỆP NÊN ĐƯỢC PHÉP HOẠT ĐỘNG MỘT CÁCH HIỆU QUẢ VÀ MINH BẠCH.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "A.3.1",
                        "content": "Trường hợp sáp nhập, mua lại, tiếp quản cần có sự chấp thuận của cổ đông, Hội đồng quản trị/ủy viên của công ty có chỉ định một bên độc lập để đánh giá tính công bằng của giá giao dịch không?",
                        "maxScore": 1,
                        "result": "N/A",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không phát sinh giao dịch trong 2026",
                            "items": [
                                "PVD không có giao dịch mua bán, sáp nhập (M&A) hoặc thâu tóm thuộc diện phải được Đại hội đồng cổ đông chấp thuận trong 2026. Tuy nhiên các giao dịch mua/bán phần vốn khác như mua lại cổ phần của PVD Well và PVD Offshore tại PVD Tech, PVD DW mua thêm vốn tại BCC trong năm 2026 được định giá chuyển nhượng bởi bên độc lập theo đúng quy định."
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "A.4",
                "code": "A.4",
                "title": "VIỆC THỰC HIỆN QUYỀN SỞ HỮU CỦA TẤT CẢ CÁC CỔ ĐÔNG, BAO GỒM CẢ CÁC NHÀ ĐẦU TƯ TỔ CHỨC, CẦN ĐƯỢC TẠO ĐIỀU KIỆN.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "A.4.1",
                        "content": "Công ty có tiết lộ các hoạt động của mình để khuyến khích các cổ đông tham gia với công ty ngoài các cuộc họp đại hội đồng không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BCTN 2025 (Mục 4.11.c - Quan hệ nhà đầu tư và các bên hữu quan, trang 149) công bố: PV Drilling có Bộ phận quan hệ cổ đông để tiếp nhận, trao đổi, phản hồi các ý kiến của cổ đông và nhà đầu tư qua các kênh trực tiếp tại trụ sở chính, điện thoại, fax, email, ... được công khai trên website để cổ đông/nha đầu tư dễ dàng liên hệ.",
                                "Website mục LIÊN HỆ thể hiện thông tin chi tiết để cổ đông có thể liên hệ bất cứ khi nào"
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "A.5",
                "code": "A.5",
                "title": "CỔ PHIẾU VÀ QUYỀN BIỂU QUYẾT",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "A.5.1",
                        "content": "Trường hợp công ty có nhiều hơn một loại cổ phiếu, công ty có công khai quyền biểu quyết gắn liền với từng loại cổ phiếu (ví dụ: thông qua trang web / báo cáo của công ty / sàn giao dịch chứng khoán / trang web của cơ quan quản lý) không?",
                        "maxScore": 1,
                        "result": "N/A",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BCTN năm 2025 (phần Vốn cổ phần và cơ cấu cổ đông, trang 248-249) công bố: PV Drilling hiện chỉ có 1 loại cổ phiếu là cổ phiếu phổ thông"
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "A.6",
                "code": "A.6",
                "title": "THÔNG BÁO ĐHĐCĐ",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "A.6.1",
                        "content": "Có phải mỗi nghị quyết được đưa ra tại đại hội đồng cổ đông thường niên gần đây nhất chỉ đề cập đến một mục, tức là không có sự gộp nhiều mục vào cùng một nghị quyết?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Website công bố các tài liệu sau ĐHĐCĐ TN 2026 (mục Quan hệ nhà đầu tư/Đại hội đồng cổ đông) cho thấy PV Drilling đã ban hành các nghị quyết riêng cho từng vấn đề đã được lấy ý kiến tại ĐHĐCĐ 2026"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.6.2",
                        "content": "Thông báo, tài liệu của công ty về ĐHĐCĐ gần đây nhất có được dịch hoàn toàn sang tiếng Anh và được công bố cùng ngày với phiên bản tiếng địa phương không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Website công bố các tài liệu trước và sau ĐHĐCĐ TN 2026 (mục Quan hệ nhà đầu tư) cho thấy: Thư mời họp và các tài liệu trước và sau đại hội được trình bày song ngữ tiếng Việt - tiếng Anh và công bố đầy đủ trên website (ngày 28/03/2026)"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.6.3",
                        "content": "Hồ sơ của các ứng viên/thành viên HĐQT được bầu hoặc tái cử có cung cấp tối thiểu các thông tin về tuổi, trình độ chuyên môn, ngày được bổ nhiệm lần đầu, kinh nghiệm liên quan và các chức vụ thành viên HĐQT tại các công ty niêm yết khác hay không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Tờ trình V/v Bầu Thành viên HĐQT nhiệm kỳ 2026-2031 (18/04/2026) có đính kèm lý lịch trích ngang các ứng viên gồm đầy đủ thông tin tuổi, trình độ học vấn, ngày bổ nhiệm đầu tiên, kinh nghiệm và chức vụ công tác, …"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "A.6.4",
                        "content": "Kiểm toán viên xin bổ nhiệm/bổ nhiệm lại có được xác định rõ ràng không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "1. Điều lệ quy định việc lựa chọn đơn vị kiểm toán thuộc quyền của ĐHĐCĐ",
                                "2. Tờ trình ĐHĐCĐ 04/2026/TTr-ĐHĐCĐ ngày 18/4/2026, dự thảo nghị quyết, biên bản đại hội và Nghị quyết ĐHĐCĐ số 04/2026/NQ-ĐHĐCĐ ngày 21/4/2026 vv Lựa chọn đơn vị kiểm toán cho Báo cáo tài chính năm 2026, ghi rõ các công ty kiểm toán trình ĐHĐCĐ để tiến hành lựa chọn:",
                                "Công ty TNHH Kiểm toán Deloitte Việt Nam",
                                "Công ty TNHH Ernst & Young Việt Nam",
                                "Công ty TNHH KPMG (Việt Nam)",
                                "Công ty TNHH PwC (Việt Nam)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Điều lệ",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "A.6.5",
                        "content": "Giấy ủy quyền tham dự ĐHĐCĐ được cung cấp dễ dàng không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Điều lệ (Điều 12 khoản 1 mục a, trang 21) quy định nghĩ vụ cổ đông \"….; tham gia các cuộc họp ĐHĐCĐ và thực hiện quyền biểu quyết trực tiếp hoặc thông qua đại diện được ủy quyền hoặc ....\"",
                                "PV Drilling công bố mẫu giấy ủy quyền trên website để cổ đông dễ dàng truy cập và tải về"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Điều lệ",
                                "url": "#"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "A.7",
                "code": "A.7",
                "title": "GIAO DỊCH NỘI GIÁN VÀ TỰ GIAO DỊCH LẠM DỤNG NÊN BỊ CẤM.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "A.7.1",
                        "content": "Giám đốc / ủy viên có phải báo cáo các giao dịch của họ bằng cổ phiếu công ty trong vòng 3 ngày làm việc không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "1. Quy chế công bố thông tin (điều 16, trang 36-37) quy định:",
                                "\"Trước ngày dự kiến thực hiện giao dịch tối thiểu ba (03) ngày làm việc, người nội bộ và người có liên quan phải công bố thông tin về việc dự kiến giao dịch.\"",
                                "\"Trong thời hạn 05 ngày làm việc, kể từ ngày hoàn tất giao dịch (trường hợp giao dịch kết thúc trước thời hạn đăng ký) hoặc kết thúc thời hạn dự kiến giao dịch, Người nội bộ và Người có liên quan phải công bố thông tin về kết quả giao dịch đồng thời giải trình nguyên nhân không thực hiện được giao dịch hoặc không thực hiện hết khối lượng đăng ký (nếu có).",
                                "\"Trong thời hạn 03 ngày làm việc sau khi nhận được các báo cáo liên quan đến giao dịch chứng khoán của Người nội bộ và Người có liên quan theo quy định tại Điều này, PV Drilling phải công bố trên Trang thông tin điện tử của PV Drilling\"",
                                "2. BCTN 2025 (mục 8. Giao dịch cổ phiếu của cổ đông nội bộ và NLQ, trang 188) công bố tình hình tuân thù về công bố thông tin giao dịch cổ phiếu của người nội bộ và NLQ của người nội bộ."
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế Công bố thông tin",
                                "url": "#"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "A.8",
                "code": "A.8",
                "title": "CÁC GIAO DỊCH BÊN LIÊN QUAN CỦA GIÁM ĐỐC VÀ GIÁM ĐỐC ĐIỀU HÀNH CHỦ CHỐT.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "A.8.1",
                        "content": "Công ty có chính sách yêu cầu một ủy ban gồm các giám đốc / ủy viên độc lập xem xét các RPT quan trọng để xác định xem chúng có mang lại lợi ích tốt nhất cho công ty và cổ đông hay không?",
                        "maxScore": 2,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt phần này",
                            "items": [
                                "'- PV Drilling áp dụng chính sách quản lý giao dịch với các bên liên quan thông qua Quy chế quản lý xung đột lợi ích và giao dịch với người có liên quan",
                                "Quy chế tổ chức và hoạt động của UB Kiểm toán (Điều 6.11, trang 5): Ủy ban kiểm toán thuộc HĐQT với vai trò tham mưu cho HĐQT, trong đó UB kiểm toán có nhiệm vụ rà soát hợp đồng, giao dịch với người có liên quan và hoặc có xung đột lợi ích thuộc thẩm quyền của HĐQT /ĐHĐCĐ và tham mưu cho HĐQT trước khi HĐQT ra quyết định.",
                                "Tuy nhiên, Chủ tịch UBKT không độc lập (UV độc lập đứng đầu không được chấp nhận)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế quản lý xung đột lợi ích và giao dịch với người có liên quan",
                                "url": "#"
                            },
                            {
                                "title": "Quy chế tổ chức và hoạt động của UB Kiểm toán (Điều 6.11, trang 5)",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "A.8.2",
                        "content": "Công ty có chính sách yêu cầu các thành viên hội đồng quản trị (giám đốc / ủy viên) tránh tham gia thảo luận hội đồng quản trị về một chương trình nghị sự cụ thể khi họ mâu thuẫn không?",
                        "maxScore": 2,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt 1 phần chỉ tiêu này",
                            "items": [
                                "1. Bộ Quy tắc Ứng xử của TV HĐQT (Điều 4, trang 5): \"Thành viên HĐQT có trách nhiệm công khai bất kỳ lợi ích liên quan theo quy định của pháp luật và các quy định nội bộ của Tổng công ty. Trong trường hợp xảy ra xung đột lợi ích, bao gồm nhưng không giới hạn các giao dịch với PV Drilling và/hoặc công ty con của Tổng công ty mà Thành viên HĐQT hoặc người có liên quan của họ có lợi ích liên quan, Thành viên HĐQT phải thông báo cho HĐQT và không biểu quyết về các giao dịch như vậy hoặc tham gia vào quá trình ra quyết định liên quan đến các xung đột lợi ích..\"",
                                "2. BCTN 2025 (mục 4.15, trang 151-152) công bố: \"Trong năm 2025, HĐQT không ghi nhận trường hợp vi phạm Bộ quy tắc ứng xử của TV HĐQT;.....\"",
                                "Tuy nhiên quy định chưa có đủ key word: \"Thành viên HĐQT phải thông báo cho HĐQT và không được tham gia vào quá trình trao đổi, và biểu quyết về các giao dịch như vậy, và tham gia vào quá trình ra quyết định liên quan đến các xung đột lợi ích...."
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Bộ Quy tắc ứng xử của Thành viên Hội đồng quản trị",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "A.8.3",
                        "content": "Công ty có chính sách cho vay giám đốc và ủy viên hoặc cấm thực hành này hoặc đảm bảo rằng chúng đang được thực hiện trên cơ sở dài hạn và theo tỷ giá thị trường không?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Quy chế quản lý xung đột lợi ích và giao dịch với người có liên quan (Điều 5 khoản 7, trang 8) quy định: \"PV Drilling không được cấp các khoản vay, bảo lãnh hoặc thực hiện các giao dịch tài chính với các TV HĐQT, TGĐ, KSV và người quản lý khác, cổ đông và NCLQ trái với quy định của pháp luật và Điều lệ PV Drilling\"",
                                "Quy chế về công tác quản lý nợ (Điều 4.2.2, trang 8) quy định không cho CBCNV (bao gồm HĐQT, BĐH) vay vốn",
                                "BCTN 2025 (trang 190): công bố chính sách và kết quả thực hiện năm 2025 là không phát sinh giao dịch cho vay, bảo lãnh"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế quản lý xung đột lợi ích và giao dịch với người có liên quan",
                                "url": "#"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "A.9",
                "code": "A.9",
                "title": "BẢO VỆ CỔ ĐÔNG THIỂU SỐ KHỎI CÁC HÀNH ĐỘNG LẠM DỤNG",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "A.9.1",
                        "content": "Công ty có tiết lộ rằng RPT được thực hiện theo cách như vậy để đảm bảo rằng chúng công bằng và trong tầm tay không?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Có \"Quy chế quản lý xung đột lợi ích và GD với NLQ\", trong đó có giao UB Kiểm toán có trách nhiệm rà soát và đưa ra các khuyến nghị về GD với NLQ trước khi HĐQT ra quyết định.",
                                "BCTN 2025 (trang 189-190) có bảng công bố thông tin về GD với các bên liên quan, các giao dịch này cũng được công bố trên website tại mục thông tin công bố."
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế quản lý xung đột lợi ích và giao dịch với người có liên quan",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "A.9.2",
                        "content": "Trường hợp giao dịch liên kết cần có sự chấp thuận của cổ đông thì quyết định của cổ đông không quan tâm có phải do cổ đông không quan tâm đưa ra không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "PV Drilling không có giao dịch với BLQ cần phê duyệt của ĐHĐCĐ trong năm. Tuy nhiên PV Drilling có công bố chính sách quản lý GDBLQ thuộc thẩm quyền của ĐHĐCĐ tại Quy chế QL xung đột lợi ích (Điều 9, trang 14) và báo cáo chính sách giám sát cũng như kết quả thực hiện trong năm (BCTN 2025 trang 189). Điều 5.5 Quy chế này cũng công bố thành viên HĐQT có lợi ích liên quan không được tham  gia thảo luận, không biểu quyết giao dịch"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế quản lý xung đột lợi ích và giao dịch với người có liên quan",
                                "url": "#"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "B",
        "title": "B - VAI TRÒ CỦA CÁC BÊN CÓ QUYỀN LỢI LIÊN QUAN",
        "isOpen": false,
        "subGroups": [
            {
                "id": "B.1",
                "code": "B.1",
                "title": "TIẾT LỘ LIÊN QUAN ĐẾN TÍNH BỀN VỮNG PHẢI NHẤT QUÁN, CÓ THỂ SO SÁNH VÀ ĐÁNG TIN CẬY, VÀ BAO GỒM THÔNG TIN QUAN TRỌNG HỒI CỨU VÀ HƯỚNG TỚI TƯƠNG LAI MÀ MỘT NHÀ ĐẦU TƯ HỢP LÝ SẼ COI LÀ QUAN TRỌNG TRONG VIỆC ĐẦU TƯ HOẶC BỎ PHIẾU QUYẾT ĐỊNH",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "B.1.1",
                        "content": "Công ty có xác định / báo cáo các chủ đề ESG quan trọng cho Chiến lược của tổ chức không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "1. BCTN 2025 (Đánh giá các vấn đề ESG trọng yếu - trang 308–313):",
                                "(i) Có mô tả quy trình đánh giá trọng yếu (materiality assessment)",
                                "(ii) Có ma trận các vấn đề trọng yếu ESG",
                                "(iii) Có tuyên bố: \"Hội đồng quản trị ghi nhận và đảm baor rằng các chủ đề ESG trọng yếu đã được xác định có ý nghĩa then chốt đối với chiến lược dài hạn và việc tạo ra giá trị bền vững của Tổng công ty. Các chủ đề này được xem xét và lồng ghép trong quá trình hoạch định chiến lược, quản lý rủi ro và đưa ra các quyết định kinh doanh quan trọng, đặc biệt liên quan đến an toàn trong hoạt động, bảo vệ môi trường, phát triển nguồn nhân lực và quản trị công ty\"",
                                "2. Báo cáo Phát triển bền vững 2025:",
                                "Mục 2.3 Chủ đề trọng yếu (trang 88-101)"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "B.1.2",
                        "content": "Công ty có xác định biến đổi khí hậu là một vấn đề không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này:",
                            "items": [
                                "1. BCTN 2025 đã công bố: Biến đổi khí hậu là một vấn đề/rủi ro",
                                "Chương 3 – Các rủi ro trọng yếu tại PV Drilling-trang 241",
                                "Chương Phát triển bền vững - trang 295",
                                "2. BCPTBV 2025",
                                "Mục 5.1 Ứng phó biến đổi khi hậu (trang 192-193)"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "B.1.3",
                        "content": "Công ty có áp dụng khung báo cáo hoặc tiêu chuẩn được quốc tế công nhận về tính bền vững (ví dụ: GRI, Báo cáo tích hợp, SASB, Tiêu chuẩn công bố bền vững IFRS) không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này:",
                            "items": [
                                "1. BCTN 2025 công bố rõ ràng việc áp dụng các khung/chuẩn quốc tế về báo cáo bền vững (Trang 301, Chương Phát triển bền vững)",
                                "2. Báo cáo Phát triển bền vững 2025:",
                                "Mục 6.2 Chuẩn mực báo cáo (trang 229)"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "B.1.4",
                        "content": "Công ty có tiết lộ mục tiêu bền vững định lượng không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này:",
                            "items": [
                                "1. Ban hành định lượng mục tiêu Môi trường - Xã hội - Quản trị năm 2026 và đến năm 2030 (NQ 31/12/2025/NQ-HĐQT ngày 31/12/2025)",
                                "2. BCTN 2025 (Phát triển bền vững - trang 297) công bố một số chỉ tiêu/mục tiêu bền vững",
                                "3. BCPTBV 2025 (chương Chuẩn vận hành - trang 154): công bố số liệu kết quả thực hiện năm 2025"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Ban hành định lượng mục tiêu Môi trường - Xã hội - Quản trị năm 2026 và đến năm 2030",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "B.1.5",
                        "content": "Công ty có tiết lộ tiến độ hoạt động liên quan đến tính bền vững liên quan đến các mục tiêu đã đặt ra trước đó không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Báo cáo Phát triển bền vững 2025:  Mục định lượng mục tiêu 2026-2030 & giải pháp/sáng kiến (trang 66-73)",
                                "Công bố TIẾN ĐỘ/KẾT QUẢ hoạt động bền vững (định lượng) năm tới"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "B.1.6",
                        "content": "Công ty có xác nhận rằng Báo cáo / Báo cáo Bền vững của mình được Hội đồng quản trị hoặc Ủy ban Hội đồng quản trị xem xét và / hoặc phê duyệt không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này.",
                            "items": [
                                "BCTN 2025 (nội dung và kết quả họp HĐQT- trang 164): có xác nhận  HĐQT phê duyệt BCTN, (Q1/2026 có thêm BC PTBV)",
                                "BC PTBV phát hành có thông điệp của Ban lãnh đạo (CT.HĐQT và TGĐ ký, trang 8,9)."
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "B.2",
                "code": "B.2",
                "title": "KHUNG QUẢN TRỊ DOANH NGHIỆP NÊN CHO PHÉP ĐỐI THOẠI GIỮA MỘT CÔNG TY, CÁC CỔ ĐÔNG VÀ CÁC BÊN LIÊN QUAN ĐỂ TRAO ĐỔI QUAN ĐIỂM VỀ CÁC VẤN ĐỀ BỀN VỮNG",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "B.2.1",
                        "content": "Công ty có thu hút các bên liên quan nội bộ để trao đổi quan điểm và thu thập phản hồi về các vấn đề bền vững quan trọng đối với hoạt động kinh doanh của công ty không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt 1 phần",
                            "items": [
                                "1. BC PTBV (Gắn hết các bên liên quan, trang 75)",
                                "2. BCTN 2025 (Gắn kết các bên liên quan và Đánh giá các vấn đề ESG trọng yếu - trang 308-313):",
                                "Có nêu các bên liên quan khảo sát, trao đổi (trong đó có bên nội bộ) được xác định rõ.",
                                "Có trình bày phương thức thu thập ý kiến & phản hồi nội bộ.",
                                "Kết quả phản hồi nội bộ được phản ánh trong nội dung báo cáo (Ma trận các vấn đề trọng yếu ESG.",
                                "Tuy nhiên, báo cáo không có công bố về tiêu chí phải review các bên liên quan nào ảnh hưởng trọng yếu trong vòng ít nhất 2 năm 1 lần. Nếu không thay đổi bên liêu quan phải có công bố tương tự như \"chúng tôi đã rà soát và nhận thấy các bên liên quan không thay đổi......\""
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "B.2.2",
                        "content": "Công ty có thu hút các bên liên quan bên ngoài để trao đổi quan điểm và thu thập phản hồi về các vấn đề bền vững quan trọng đối với hoạt động kinh doanh của công ty không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt 1 phần",
                            "items": [
                                "1. BC PTBV (Gắn hết các bên liên quan, trang 75)",
                                "2. BCTN 2025 (Gắn kết các bên liên quan và Đánh giá các vấn đề ESG trọng yếu - trang 308-313):",
                                "Có nêu các bên liên quan khảo sát, trao đổi (trong đó có bên nội bộ) được xác định rõ.",
                                "Có trình bày phương thức thu thập ý kiến & phản hồi nội bộ.",
                                "Kết quả phản hồi nội bộ được phản ánh trong nội dung báo cáo (Ma trận các vấn đề trọng yếu ESG.",
                                "Tuy nhiên, báo cáo không có công bố về tiêu chí phải review các bên liên quan nào ảnh hưởng trọng yếu trong vòng ít nhất 2 năm 1 lần. Nếu không thay đổi bên liêu quan phải có công bố tương tự như \"chúng tôi đã rà soát và nhận thấy các bên liên quan không thay đổi......\""
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "B.3",
                "code": "B.3",
                "title": "KHUNG QUẢN TRỊ CÔNG TY CẦN ĐẢM BẢO RẰNG CÁC HỘI ĐỒNG QUẢN TRỊ XEM XÉT ĐẦY ĐỦ CÁC RỦI RO VÀ CƠ HỘI BỀN VỮNG TRỌNG YẾU KHI THỰC HIỆN CÁC CHỨC NĂNG CHÍNH CỦA MÌNH TRONG VIỆC XEM XÉT, GIÁM SÁT VÀ HƯỚNG DẪN CÁC HOẠT ĐỘNG QUẢN TRỊ, CÔNG BỐ THÔNG TIN, CHIẾN LƯỢC, QUẢN LÝ RỦI RO VÀ HỆ THỐNG KIỂM SOÁT NỘI BỘ, BAO GỒM CẢ ĐỐI VỚI CÁC RỦI RO VẬT LÝ VÀ CHUYỂN ĐỔI LIÊN QUAN ĐẾN KHÍ HẬU",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "B.3.1",
                        "content": "Công ty có tiết lộ rằng hội đồng quản trị xem xét hàng năm rằng cơ cấu vốn và nợ của công ty tương thích với các mục tiêu chiến lược và khẩu vị rủi ro liên quan của nó không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BCTN 2025 (mục 4.7 Quản trị tài chính trang 146-147) đã tuyên bố:",
                                "\"HĐQT đã chỉ đạo BĐH luôn theo dõi sát diễn biến kinh tế vĩ",
                                "mô và thị trường tài chính (lãi suất, tỷ giá, lạm phát và các chính sách liên quan) để kịp thời điều chỉnh giải pháp QTRR tài chính phù hợp ......\"",
                                "\"Trên cơ sở chiến lược kinh doanh, Tổng công ty đã",
                                "xây dựng phương án vốn phù hợp,……\".",
                                "\"HĐQT nhận định cơ cấu vốn và cơ cấu nợ vay của PV Drilling",
                                "trong năm 2025 phù hợp với mục tiêu chiến lược và",
                                "khẩu vị rủi ro của Tổng công ty......\""
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "B.4",
                "code": "B.4",
                "title": "KHUNG QUẢN TRỊ DOANH NGHIỆP CẦN CÔNG NHẬN QUYỀN CỦA CÁC BÊN LIÊN QUAN ĐƯỢC THIẾT LẬP BỞI PHÁP LUẬT HOẶC THÔNG QUA CÁC THỎA THUẬN CHUNG VÀ KHUYẾN KHÍCH HỢP TÁC TÍCH CỰC GIỮA CÁC TẬP ĐOÀN VÀ CÁC BÊN LIÊN QUAN TRONG VIỆC TẠO RA SỰ GIÀU CÓ, VIỆC LÀM VÀ TÍNH BỀN VỮNG CỦA CÁC DOANH NGHIỆP LÀNH MẠNH VỀ TÀI CHÍNH.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "B.4.1",
                        "content": "Sự tồn tại và phạm vi nỗ lực của công ty trong việc bảo vệ quyền lợi khách hàng?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt điểm phần này:",
                            "items": [
                                "1.  Nghị quyết 31/12/2025/NQ-HĐQT ngày 31/12/2025 V/v Ban hành khung chính sách PTBV của PV Drilling:",
                                "Mục 3.3 Kinh doanh có trách nhiệm và quản trị doanh nghiệp. (trang 3)",
                                "2. Bộ quy tắc ứng xử của PV Drilling:",
                                "Mục C. Khách hàng và các đối tác kinh doanh của chúng ta (trang 26-31)",
                                "3. BCTN 2025 (chính sách bảo vệ quyền lợi khách hàng - trang 280-281): mô tả các sáng kiến bảo vệ quyền lợi khách hàng “.....cung cấp dịch vụ khoan và kỹ thuật giếng khoan hàng đầu khu vực, bằng việc không ngừng tạo ra giá trị gia tăng cho khách hàng thông qua các dịch vụ chất lượng cao và giá cả cạnh tranh”."
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Khung chính sách phát triển bền vững",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "B.4.2",
                        "content": "Quy trình lựa chọn nhà cung cấp/nhà thầu?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "1. Nghị quyết 30/12/2025/NQ-HĐQT ngày 31/12/2025 V/v Sửa đổi ban hành quy chế mua sắm vật tư, thiết bị, phụ tùng và dịch vụ trực tiếp phục vụ hoạt động giàn khoan",
                                "2.  Nghị quyết 31/12/2025/NQ-HĐQT ngày 31/12/2025 V/v Ban hành khung chính sách PTBV của PV Drilling:",
                                "Mục 3.3 Kinh doanh có trách nhiệm và quản trị doanh nghiệp. (trang 3)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế mua sắm vật tư, thiết bị, phụ tùng và dịch vụ trực tiếp phục vụ hoạt động giàn khoan",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "B.4.3",
                        "content": "Nỗ lực của công ty trong việc đảm bảo chuỗi cung ứng của công ty thân thiện với môi trường hoặc phù hợp với sự thúc đẩy phát triển bền vững?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "1. Nghị quyết 31/12/2025/NQ-HĐQT ngày 31/12/2025 V/v Ban hành khung chính sách PTBV của PV Drilling.",
                                "2. Báo cáo Phát triển bền vững 2025:",
                                "Mục mô hình và các hoạt động kinh doanh (trang 32-38)"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "B.4.4",
                        "content": "Nỗ lực của công ty trong việc tương tác với cộng đồng nơi công ty hoạt động?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này:",
                            "items": [
                                "1. Nghị quyết 31/12/2025/NQ-HĐQT ngày 31/12/2025 V/v Ban hành khung chính sách PTBV của PV Drilling.",
                                "Mục con người và nhân quyền (trang 2-3)",
                                "2. Bộ quy tắc ứng xử của PV Drilling:",
                                "Mục E. Cộng đồng của chúng ta (trang 37)",
                                "3. Báo cáo Phát triển bền vững 2025:",
                                "Mục 5.5.  cộng đồng địa phương (trang 216-221)",
                                "Mục gắn kết các bên liên quan - cộng đồng địa phương (trang 84-85)",
                                "4. Báo cáo thường niên 2025: Gắn kết hoạt động SXKD của PV Drilling với cộng đồng, xã hội; trang 90-91"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "B.4.5",
                        "content": "Các chương trình và quy trình chống tham nhũng của công ty?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "1. Nghị quyết 33/12/2025/NQ-HĐQT ngày 31/12/2025 V/v Ban hành  chính sách phòng chống tham nhũng và hối lộ của PV Drilling.",
                                "2. Bộ quy tắc ứng xử của PV Drilling:",
                                "Mục phòng chống tham nhũng và hối lộ (trang 22)",
                                "3. Báo cáo Phát triển bền vững 2025:",
                                "Mục đạo đức kinh doanh (trang 133)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Chính sách phòng chống tham nhũng và hối lộ",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "B.4.6",
                        "content": "Quyền lợi của các chủ nợ được bảo vệ như thế nào?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "1. Nghị quyết số 28/12/2025/NQ-HĐQT ngày 28/12/2025 V/v ban hành Quy chế quản lý nợ của Công ty mẹ",
                                "Điều 9. Bảo vệ lợi ích của chủ nợ (trang 15-17) .",
                                "2. Báo cáo thường niên:",
                                "Mục 4.7. Công tác quản trị tài chính (trang 146-147): công bố kết quả thực hiện nghĩa vụ với chủ nợ năm 2025"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "B.4.7",
                        "content": "Công ty có báo cáo/phần báo cáo riêng mô tả những nỗ lực của mình về các vấn đề liên quan đến môi trường/kinh tế và xã hội?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "PV Drilling có báo cáo phát triển bền vững riêng"
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "B.5",
                "code": "B.5",
                "title": "KHI LỢI ÍCH CỦA CÁC BÊN LIÊN QUAN ĐƯỢC PHÁP LUẬT BẢO VỆ, CÁC BÊN LIÊN QUAN NÊN CÓ CƠ HỘI ĐỂ CÓ ĐƯỢC BIỆN PHÁP KHẮC PHỤC HIỆU QUẢ ĐỐI VỚI HÀNH VI VI PHẠM QUYỀN CỦA HỌ.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "B.5.1",
                        "content": "Công ty có cung cấp thông tin liên hệ trên website của công ty hay Báo cáo Thường niên để các bên có quyền lợi liên quan (Ví dụ: khách hàng, nhà cung cấp, công chúng, v.v.) có thể sử dụng để lên tiếng về những lo ngại và/hoặc khiếu nại về những vi phạm có thể xảy ra đối với quyền lợi của họ?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này:",
                            "items": [
                                "Website có công bố thông tin liên hệ có điện thoại, địa chỉ, email tiếp nhận cho tất cả các vấn đề."
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "B.6",
                "code": "B.6",
                "title": "CÁC CƠ CHẾ CHO SỰ THAM GIA CỦA NHÂN VIÊN NÊN ĐƯỢC PHÉP PHÁT TRIỂN.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "B.6.1",
                        "content": "Công ty có công bố rõ ràng các chính sách và thực hành về sức khỏe, an toàn và phúc lợi cho nhân viên của mình?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "1. Chính sách HSEQ:",
                                "2. Báo cáo Phát triển bền vững 2025:",
                                "Mục 1. Lương, thưởng và phúc lợi, trang 146",
                                "Mục 4.1. An toàn sức khoẻ lao động (trang 154-167)",
                                "3. Báo cáo Thường niên 2025",
                                "Mục 2. Chính sách tiền lương, phúc lợi và khen thưởng, trang 84)",
                                "Công tác an toàn - Sức khỏe - Môi trường (trang 151)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Chính sách HSEQ",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "B.6.2",
                        "content": "Công ty có công bố rõ ràng các chính sách và thực hành về các chương trình đào tạo và phát triển cho nhân viên của mình?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt tiêu chí này",
                            "items": [
                                "1. Nghị quyết 31/12/2025/NQ-HĐQT ngày 31/12/2025 V/v Ban hành khung chính sách PTBV của PV Drilling.",
                                "Mục con người và nhân quyền (trang 2-3)",
                                "2. Báo cáo Phát triển bền vững 2025:",
                                "Mục đào tạo, phát triển kỹ năng và thu hút nhân lực khoan (trang 180-183)",
                                "3. BCTN 2025, Phần \"Đào tạo và phát triển nguồn nhân lực\" (trang 85)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Khung chính sách phát triển bền vững",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "B.6.3",
                        "content": "Công ty có chính sách khen thưởng/thưởng dựa trên kết quả hoạt động của công ty ngoài các công cụ tài chính ngắn hạn?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PVD không đạt tiêu chí này",
                            "items": [
                                "BCTN 2025 (mục c.Việc chi trả thủ lao, lương, thưởng, trang 143) công bố: \" ..., HĐQT đã sửa đổi và ban hành Quy chế lương mới, theo đó khung chính sách thù lao và đãi ngộ được thiết kế nhằm gắn kết lợi ích của HĐQT, BĐH và NLĐ với các chỉ tiêu SXKD và mục tiêu phát triển bền vững của TCT. ....., Tổng công ty đã áp dụng phương pháp quản trị Thẻ điểm cân bằng (Balanced Scorecard - BSC) để phân bổ các chỉ tiêu hiệu quả từ cấp TCT xuống từng cá nhân một cách toàn diện giúp PV Drilling không chỉ trả lương cho những con số tài chính ngắn hạn mà còn vì sự phát triển bền vững trong dài hạn.\"",
                                "BCTN 2025 (mục 7.1. thù lao của HĐQT, trang 186): Không có nội dung nào nói rõ: Thưởng dài hạn; Thưởng gắn với yếu tố phi tài chính hoặc bền vững.",
                                "Không có chính sách thưởng dài hạn nào được công bố trên website."
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "B.7",
                "code": "B.7",
                "title": "CÁC BÊN LIÊN QUAN BAO GỒM TỪNG NHÂN VIÊN VÀ CÁC CƠ QUAN ĐẠI DIỆN CỦA HỌ, SẼ CÓ THỂ TỰ DO TRUYỀN ĐẠT MỐI QUAN TÂM CỦA HỌ VỀ CÁC HÀNH VI BẤT HỢP PHÁP HOẶC PHI ĐẠO ĐỨC ĐỂ HỘI ĐỒNG QUẢN TRỊ VÀ QUYỀN CỦA HỌ KHÔNG NÊN BỊ XÂM PHẠM KHI LÀM ĐIỀU NÀY.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "B.7.1",
                        "content": "Công ty có chính sách báo cáo sai phạm trong đó bao gồm các quy trình khiếu nại dành cho nhân viên và các bên có quyền lợi liên quan khác về hành vi không hợp pháp hoặc không phù hợp tiêu chuẩn đạo đức và cung cấp thông tin liên hệ chi tiết được đề cập trên website của công ty hoặc báo cáo thường niên?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "1. Chính sách cảnh báo sai phạm (34/12/2025/NQ-HĐQT ngày 31/12/2025).",
                                "2. Báo cáo thường niên 2025: mục 4.16. Chính sách tố giác và Cảnh báo sai phạm (trang 152)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Chính sách cảnh báo sai phạm",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "B.7.2",
                        "content": "Công ty có chính sách hay thủ tục để bảo vệ nhân viên/cá nhân khỏi bị trả đũa vì đã tiết lộ hành vi không hợp pháp/không phù hợp đạo đức ?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "1. Chính sách cảnh báo sai phạm (34/12/2025/NQ-HĐQT ngày 31/12/2025).",
                                "2. Bộ quy tắc ứng xử của PV Drilling:",
                                "Mục 4. Không khoan thứ hành vi trả đũa (trang 12)",
                                "3. Khung chính sách PTBV (31/12/2025/NQ-HĐQT ngày 31/12/2025).",
                                "Mục 3.2. Con người, an toàn và nhân quyền"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Bộ quy tắc ứng xử của PV Drilling",
                                "url": "#"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "C",
        "title": "C - CÔNG BỐ THÔNG TIN VÀ MINH BẠCH",
        "isOpen": false,
        "subGroups": [
            {
                "id": "C.1",
                "code": "C.1",
                "title": "CẤU TRÚC SỞ HỮU MINH BẠCH",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "C.1.1",
                        "content": "Thông tin về cổ đông có tiết lộ danh tính của các chủ sở hữu nắm giữ 5% cổ phần trở lên?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PVD không đạt phần này",
                            "items": [
                                "1. BCTN 2025: có bảng/thông tin riêng về cơ cấu cổ đông (trang 249)",
                                "2. Mục Thông tin công bố của website, PV Drilling đăng tải nhiều tài liệu như:",
                                "Báo cáo thay đổi sở hữu của cổ đông lớn;",
                                "Báo cáo của nhóm nhà đầu tư nước ngoài có liên quan sở hữu từ 5% trở lên;",
                                "Các thông báo khi một cổ đông trở thành hoặc không còn là cổ đông lớn.",
                                "Tuy nhiên, BCTN trang 249 cơ cấu cổ đông không khẳng định là danh dách cổ công >= 5% (trong mục cổ đông cá nhân 34,9% và tổ chức nước ngoài 11,1% có ai >=5% không? là không rõ)"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.1.2",
                        "content": "Công ty có công bố việc sở hữu cổ phần trực tiếp và (được cho là) gián tiếp của cổ đông/nhóm cổ đông lớn?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này nhưng chỉ ở mức tối thiểu, có khả năng bị đánh trượt",
                            "items": [
                                "(i) Công ty CÓ công bố việc sở hữu cổ phần TRỰC TIẾP của cổ đông lớn",
                                "(ii) KHÔNG có công bố về việc sở hữu cổ phần GIÁN TIẾP của cổ đông/nhóm cổ đông lớn"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.1.3",
                        "content": "Công ty có công bố việc sở hữu cổ phần trực tiếp và (được cho là) gián tiếp của các thành viên/ủy viên HĐQT?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BCTN 2025 (Báo cáo của HĐQT- trang 188): công bố bảng thông tin sở hữu cổ phiếu trực tiếp và gián tiếp của các TV HĐQT"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.1.4",
                        "content": "Công ty có công bố việc sở hữu cổ phần trực tiếp và (được cho là) gián tiếp của các thành viên Ban Điều hành?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này nhưng chỉ ở mức tối thiểu, có khả năng bị đánh trượt",
                            "items": [
                                "(i) Công ty CÓ công bố việc sở hữu cổ phần TRỰC TIẾP của các thành viên Ban Điều hành và người liên quan (BCTN 2025 trang 201) và Ban Kiểm soát (BCTN 2025 trang 234)",
                                "(ii) KHÔNG có công bố về việc sở hữu cổ phần GIÁN TIẾP của các thành viên Ban Điều hành"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.1.5",
                        "content": "Công ty có công bố chi tiết về công ty mẹ, công ty con, công ty liên kết, công ty liên doanh và doanh nghiệp/công ty có mục đích đặc biệt (SPEs)/ (SPVs)?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BCTN 2025 có công bố:",
                                "(i) danh sách CÁC ĐƠN VỊ THÀNH VIÊN (trang 96-99) có mô tả lĩnh vực hoạt động, % sở hữu. Các đơn vị này được phân nhóm là CÔNG TY CON, CÔNG TY LIÊN DOANH/LIÊN KẾT trong báo cáo tài chính của PV Drilling.",
                                "(ii) Có công bố là PV Drilling không có doanh nghiệp/công ty có mục đích đặc biệt (SPEs/SPVs) (trang 21)"
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "C.2",
                "code": "C.2",
                "title": "CHẤT LƯỢNG CỦA BÁO CÁO THƯỜNG NIÊN",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "C.2.1",
                        "content": "Mục tiêu của công ty",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "Báo cáo thường niên 2025 có công bố mục tiêu, định hướng phát triển của công ty ở nhiều mục:",
                                "(i) TẦM NHÌN VÀ SỨ MỆNH (trang 9)",
                                "(ii) Mục tiêu chiến lược năm 2026 (trang 61)",
                                "(ii)Mục tiêu phát triển giai đoạn 2026-2030 (trang 193)"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.2.2",
                        "content": "Chỉ số hiệu quả tài chính",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "BCTN 2025 có",
                                "PHẦN/BẢNG trình bày các chỉ tiêu tài chính chính (trang 64)",
                                "Có bảng/tập hợp chỉ tiêu thể hiện hiệu quả tài chính theo thời gian",
                                "(Phần tình hình tài chính, trang 74-77)",
                                "Có đánh giá tình hình SXKD (Tình hình hoạt động SXKD, trang 65-71)"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.2.3",
                        "content": "Chỉ số hiệu quả phi tài chính",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "(i) Báo cáo thường niên 2025 có CHƯƠNG/PHẦN RIÊNG trình bày các nội dung phi tài chính (Chương 5: VỮNG BƯỚC PHAT TRIỂN”",
                                "(ii) có BC phát triển bền vững riêng có tình bày nhiều chỉ số phi lợi nhuận như an toàn, sức khỏe, môi trường, con người, xã hội, ...."
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.2.4",
                        "content": "Chính sách cổ tức",
                        "maxScore": 2,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt 1 phần",
                            "items": [
                                "(i) Có chính sách chi trả cổ tức (27/12/2025/NQ-HĐQT ngày 31/12/2025)",
                                "(ii) Báo cáo thường niên 2025 có công bố chính sách cổ tức và việc trả cổ tức trong kỳ báo cáo (trang 251)",
                                "Tuy nhiên chính sách cổ tức không lượng hóa được"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Chính sách chi trả cổ tức",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "C.2.5",
                        "content": "Chi tiết tiểu sử (tối thiểu tuổi, trình độ đào tạo / chứng chỉ chuyên môn, ngày đầu bổ nhiệm, kinh nghiệm liên quan, và bất kỳ vị trí thành viên HĐQT nào khác đang nắm giữ tại các công ty niêm yết) của các thành viên/ủy viên HĐQT",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BCTN 2025 – phần Tiểu sử HĐQT (trang 40-48) và Phần báo cáo của HĐQT (trang 158-159) công bố:",
                                "Tiểu sử cá nhân của thành viên HĐQT;",
                                "Có mô tả các chức vụ đang đảm nhiệm từng TV;"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.2.6",
                        "content": "Báo cáo thường niên có chứa một tuyên bố xác nhận sự tuân thủ đầy đủ của công ty với quy tắc quản trị công ty và nơi không tuân thủ, xác định và giải thích lý do cho từng vấn đề đó không?",
                        "maxScore": 2,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt một phần yêu cầu này",
                            "items": [
                                "BCTN 2025 (Mô hình QTCT, mục 10.đánh giá về tình hình thực hiện QTCT- trang 190) có công bố sự tuân thủ đầy đủ của công ty với quy tắc quản trị công ty.",
                                "Tuy nhiên chưa có bảng so sánh, xác định các phần chưa tuân thủ và giải thích lý do chưa tuân thủ cho mỗi vấn đề."
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "C.3",
                "code": "C.3",
                "title": "THÙ LAO CỦA THÀNH VIÊN HỘI ĐỒNG QUẢN TRỊ VÀ GIÁM ĐỐC ĐIỀU HÀNH CHỦ CHỐT",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "C.3.1",
                        "content": "Có công bố về cấu trúc thù lao cho các thành viên / ủy viên HĐQT không điều hành không?",
                        "maxScore": 2,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt 1 phần tiêu chí này",
                            "items": [
                                "BCTN 2025 (phần thù lao và cp hoạt động của HĐQT, trang 186) công bố HĐQT không điều hành không hưởng thù lao theo kết quả SXKD:",
                                "\" Theo đó, các thành viên độc lập HĐQT và các thành viên HĐQT không nắm giữ chức vụ điều hành, chuyên trách tại Tổng công ty chỉ nhận mức phụ cấp cố định và phụ cấp bổ sung khi thực hiện các công việc nằm ngoài phạm vi thông thường của HĐQT đó. Các thành viên này không được hưởng thù lao gắn với kết quả hoạt động hoặc các khoản thù lao biến đổi. Chính sách thù lao này được thiết kế nhằm bảo đảm tính độc lập và tăng cường hiệu quả giám sát của HĐQT.\"",
                                "Tuy nhiên, số tiền của từng TV chỉ nêu số tổng cộng mà không nêu cấu trúc từng loại thù lao nên không đáp ứng C.3.1"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.3.2",
                        "content": "Công ty có tiết lộ công khai [tức là báo cáo thường niên hoặc các tài liệu được tiết lộ công khai khác] chi tiết về thù lao của mỗi giám đốc / ủy viên không điều hành không?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt tiêu chí này",
                            "items": [
                                "BCTN 2025 trang 186 có mục Thù lao và chi phí hoạt động của HĐQT, có công bố tổng thu nhập của từng thành viên HĐQT nhưng không thể hiện rõ ràng được những nội dung sau:",
                                "(i) có mục/tiêu đề riêng cho HĐQT KHÔNG ĐIỀU HÀNH",
                                "(i) KHÔNG có phân biệt giữa HĐQT điều hành và KHÔNG điều hành ở cấp độ cá nhân và không công bố CHI TIẾT các loại thù lao.",
                                "(ii) Không có công bố thay thế được ACGS chấp nhận."
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.3.3",
                        "content": "Công ty có công bố chính sách/thực tiễn về thù lao (bao gồm phí, phụ cấp, lợi ích bằng hiện vật và các khoản thù lao khác) cho các thành viên HĐQT điều hành và CEO không? (Tức là việc sử dụng các ưu đãi ngắn hạn, dài hạn và các tiêu chí đánh giá hiệu suất)",
                        "maxScore": 2,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này (đạt 1 phần)",
                            "items": [
                                "BCTN 2025 (trang 186) công bố:",
                                "\" Thù lao của các thành viên HĐQT kiêm Tổng giám đốc bao gồm lương cố định, các khoản khuyến khích ngắn hạn gắn với các mục tiêu hiệu quả hoạt động hằng năm, và các phúc lợi, phụ cấp khác. Các khoản thù lao gắn với kết quả hoạt động được chi trả dựa trên các chỉ tiêu hiệu quả SXKD và hiệu quả công việc (KPI) do HĐQT phê duyệt.\"",
                                "Tuy nhiên chưa gắn với kết quả dài hạn, cũng chưa công bố chi tiết thù lao"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.3.4",
                        "content": "Công ty có công khai [ví dụ: báo cáo thường niên hoặc các tài liệu được công bố khác] chi tiết thù lao của từng thành viên HĐQT điều hành và CEO [nếu CEO không phải là thành viên HĐQT] không?",
                        "maxScore": 2,
                        "result": "N/A",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này (đạt 1 phần)",
                            "items": [
                                "BCTN 2025 (trang 186)",
                                "(i) có công bố thù lao theo TỪNG CÁ NHÂN HĐQT  ĐIỀU HÀNH và HĐQT kiêm CEO trong cùng 1 bảng của HĐQT",
                                "Nhưng chưa chi tiết theo từng loại thù lao"
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "C.4",
                "code": "C.4",
                "title": "TIẾT LỘ GIAO DỊCH CỦA BÊN LIÊN KẾT (RPT)",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "C.4.1",
                        "content": "Công ty có tiết lộ chính sách của mình bao gồm việc xem xét và phê duyệt các bên liên quan quan trọng không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "PV Drilling đã ban hành quy chế công bố thông tin (29/12/2025/NQ-HĐQT ngày 31/12/2025)",
                                "BCTN 2025 (mục 9. Giao dịch giữa TCT và người có liên quan, trang 190) công bố: \"Tổng công ty đã ban hành các chính sách và quy trình nhằm xác định, xem xét và phê duyệt các bên liên quan trọng yếu. Các bên liên quan trọng yếu phải được Hội đồng quản trị hoặc Ủy ban được Hội đồng quản trị ủy quyền xem xét và phê duyệt trước khi Tổng công ty thực hiện bất kỳ giao dịch liên quan nào......\""
                            ]
                        },
                        "evidences": [
                            {
                                "title": "quy chế công bố thông tin",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "C.4.2",
                        "content": "Công ty có công bố tên của bên liên quan, mối quan hệ, bản chất và giá trị cho mỗi GDBLQ trọng yếu/quan trọng?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "(i) BCTN có THUYẾT MINH RIÊNG về GIAO DỊCH VỚI BÊN LIÊN QUAN trọng yếu (BCTC hợp nhất 2025 đính kèm BCTN, thuyết minh số 43)",
                                "(ii) BCTN 2025: )Phụ lục 03 - Giao dịch giữa PV Drilling và người có liên quan)."
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "C.5",
                "code": "C.5",
                "title": "GIÁM ĐỐC VÀ ỦY VIÊN GIAO DỊCH CỔ PHIẾU CỦA CÔNG TY",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "C.5.1",
                        "content": "Công ty có tiết lộ giao dịch cổ phiếu của công ty bởi người nội bộ không?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "BCTN 2025: (Phụ lục 2 - giao dịch cổ phiếu của cổ đông nội bộ và người có liên quan trong năm 2025) công bố chi tiết tên người nội bộ/người liên quan, số cổ phiếu đầu năm/cuối năm và tỷ lệ cổ phiếu."
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "C.6",
                "code": "C.6",
                "title": "KIỂM TOÁN ĐỘC LẬP VÀ BÁO CÁO KIỂM TOÁN",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "C.6.1",
                        "content": "Phí dịch vụ kiểm toán và phi kiểm toán có được công bố?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "BCTN 2025 (mục 2.2 - Ủy ban kiểm toán, trang 172) công bố:",
                                "\"- Phí dịch vụ kiểm toán: 1.551 triệu đồng (đã bao gồm VAT)",
                                "Phí dịch vụ phi kiểm toán: 3.995 triệu đồng (đã bao gồm VAT). Phí dịch vụ phi kiếm toán chủ yếu là phí tư vấn lập Báo cáo tài chính theo chuẩn IFRS trong 2 năm 2025-2026\""
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.6.2",
                        "content": "Phí phi kiểm toán có vượt quá phí kiểm toán không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PVD không đạt phần này:",
                            "items": [
                                "BCTN 2025 (mục 2.2 - Ủy ban kiểm toán, trang 172) công bố cho thấy phí phi kiểm toán năm 2025 cao hơn phí kiểm toản cho có chi phí tư vấn",
                                "lập Báo cáo tài chính theo chuẩn IFRS trong 2 năm 2025-2026."
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "C.7",
                "code": "C.7",
                "title": "PHƯƠNG TIỆN TRUYỀN THÔNG",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "C.7.1",
                        "content": "Báo cáo hàng quý",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "BC tài chính côgn ty mẹ và hợp nhất hàng quý được công bố trên website theo đúng quy định đối với công ty niêm yết."
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.7.2",
                        "content": "Trang web công ty",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "website PV Drilling vận hành bình thường và được cập nhật thông tin thường xuyên"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.7.3",
                        "content": "Tóm tắt của nhà phân tích (Analyst's briefing)",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt 1 phần chỉ tiêu",
                            "items": [
                                "BCTN 2025 (Mục Công tác quan hệ nhà đầu tư, trang 220-225) công bố chi tiết công tác quan hệ nhà đầu tư",
                                "Tuy nhiên, trên website chưa có công bố đánh giá chuyên gia"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.7.4",
                        "content": "Họp báo",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt một phần chỉ tiêu này",
                            "items": [
                                "Có đăng các tin tức quan trọng về mọi hoạt động và cập nhật thường xuyên trên website công ty: https://www.pvdrilling.com.vn/tin-tuc",
                                "Tuy nhiên đây tin 1 chiều từ DN, chưa phản ảnh được việc giao lưu báo chí"
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "C.8",
                "code": "C.8",
                "title": "NỘP / PHÁT HÀNH KỊP THỜI CÁC BÁO CÁO TÀI CHÍNH / HÀNG NĂM",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "C.8.1",
                        "content": "Báo cáo/báo cáo tài chính năm đã được kiểm toán có được công bố trong thời hạn 120 ngày kể từ ngày kết thúc năm tài chính không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "Báo cáo kiểm toán năm 2025 được công bố ngày 30/03/2026 (trong thời hạn 120 ngày kể từ ngày kết thúc năm tài chính)"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.8.2",
                        "content": "Báo cáo thường niên có được công bố trong vòng 120 ngày kể từ ngày kết thúc",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "Báo cáo TN 2025 được công bố ngày 16/04//2026 (trong thời hạn 120 ngày kể từ ngày kết thúc năm tài chính)"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.8.3",
                        "content": "Sự trình bày trung thực và công bằng / công bằng của báo cáo / báo cáo tài chính hàng năm có được xác nhận bởi hội đồng quản trị / ủy viên và / hoặc các cán bộ có liên quan của công ty không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "Nội dung BCTN đã bao gồm: Xác nhận của HĐQT, xác nhận của BKS, và Trách nhiệm của BĐH"
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "C.9",
                "code": "C.9",
                "title": "TRANG WEB CÔNG TY",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "C.9.1",
                        "content": "Báo cáo/báo cáo tài chính (quý gần nhất)",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "Thông tin đã được công bố trên website của PVD"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.9.2",
                        "content": "Tài liệu được cung cấp trong các cuộc họp giao ban cho các nhà phân tích và phương tiện truyền thông",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt một phần này",
                            "items": [
                                "(i) BCTN 2025 (trang 222) có công bố danh sách bài phân tích của các quỹ đầu tư, có công bố \"các tài liệu được trình bày trong các cuộc hóp với chuyên gia phân tích được công bố công khai, ...\" nhưng không thấy bằng chứng"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.9.3",
                        "content": "Báo cáo thường niên có thể tải xuống",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "Thông tin đã được công bố trên website và có thể tải xuống"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.9.4",
                        "content": "Thông báo ĐHĐCĐ và/hoặc ĐHĐCĐ",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "Thông tin đã được công bố trên website và có thể tải xuống"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.9.5",
                        "content": "Biên bản ĐHĐCĐ và/hoặc ĐHĐCĐ",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "Thông tin đã được công bố trên website và có thể tải xuống"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "C.9.6",
                        "content": "Điều lệ của công ty (điều lệ của công ty, bản ghi nhớ và các điều khoản của hiệp hội)",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PVD đạt phần này",
                            "items": [
                                "Thông tin đã được công bố trên website và có thể tải xuống"
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "C.10",
                "code": "C.10",
                "title": "QUAN HỆ NHÀ ĐẦU TƯ",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "C.10.1",
                        "content": "Công ty có tiết lộ chi tiết liên lạc (ví dụ: điện thoại, fax và email) của cán bộ / văn phòng chịu trách nhiệm về quan hệ nhà đầu tư không?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PVD đáp ứng phần này",
                            "items": [
                                "Thông tin của cán bộ/ văn phòng chịu trách nhiệm về quan hệ nhà đầu tư đã được công bố trên website mục quan hệ nhà đầu tư"
                            ]
                        },
                        "evidences": []
                    }
                ]
            }
        ]
    },
    {
        "id": "D",
        "title": "D - TRÁCH NHIỆM CỦA HĐQT",
        "isOpen": false,
        "subGroups": [
            {
                "id": "D.1",
                "code": "D.1",
                "title": "NHIỆM VỤ VÀ TRÁCH NHIỆM CỦA HỘI ĐỒNG QUẢN TRỊ",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "D.1.1",
                        "content": "Công ty có công bố chính sách quản trị công ty/điều lệ hội đồng quản trị không?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": "PV Drilling đạt phần này\n(i) Công ty công bố công khai ĐIỀU LỆ CÔNG TY trên website\n(ii) Điều lệ có CHƯƠNG/MỤC RIÊNG quy định về HỘI ĐỒNG QUẢN TRỊ\nĐiều lệ sửa đổi lần 23: quy định về HĐQT tại mục VII từ Điều 20 đến Điều 24. Đây là bằng chứng trực tiếp cho việc công ty công bố: Quyền hạn; Trách nhiệm; Cơ cấu của HĐQT đáp ứng yêu cầu “Board charter / governance policy”.",
                        "evidences": [
                            {
                                "title": "Điều lệ",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.1.2",
                        "content": "Các loại quyết định cần sự chấp thuận của hội đồng quản trị / ủy viên có được tiết lộ không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "(i) Điều lệ Công ty quy định rõ QUYỀN HẠN và NHIỆM VỤ của HĐQT (Điều lệ sửa đổi lần 23 ngày 21/4/2026: quy định về HĐQT tại mục VII từ Điều 20 đến Điều 24)",
                                "(ii) Điều lệ liệt kê CÁC NHÓM QUYẾT ĐỊNH thuộc thẩm quyền HĐQT.",
                                "(Điều lệ sửa đổi lần 23 - Điều 21 khoản 1)",
                                "(iii) Điều lệ có các quy định cụ thể về các quyết định chiến lược & quản trị",
                                "(Điều lệ sửa đổi lần 23- Điều 21 khoản 2)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Điều lệ",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.1.3",
                        "content": "Vai trò và trách nhiệm của hội đồng quản trị/ủy viên có được nêu rõ không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này.",
                            "items": [
                                "Vai trò và trách nhiệm của HĐQT đã được nêu rõ trong:",
                                "Điều lệ_Bổ sung, sửa đổi lần thứ 23_Ngày 21/4/2026 (Điều 21 trang 41)",
                                "Báo cáo thường niên 2025 (trang 134) công bố: \"HĐQT là cơ quan quản trị cao nhất, hoạt động theo nguyên tắc tập thể, chịu trách nhiệm định hướng chiến lược trung và dài hạn, quyết định các vấn đề thuộc thẩm quyền và giám sát hoạt động điều hành\""
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Điều lệ",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.1.4",
                        "content": "Công ty có tầm nhìn và tuyên bố sứ mệnh cập nhật không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "(i) BCTN có PHẦN RIÊNG công bố TẦM NHÌN và SỨ MỆNH",
                                "(BCTN 2025 – Phần Tổng quan / Giới thiệu về Công ty)",
                                "Nội dung công bố 2 mục riêng: “Tầm nhìn” và “Sứ mệnh”",
                                "(ii) Tầm nhìn và Sứ mệnh được trình bày như ĐỊNH HƯỚNG DÀI HẠN của Công ty (BCTN 2025 – Phần Tổng quan / Giới thiệu về Công ty)",
                                "Đặc điểm disclosure (dựa trên cách trình bày):",
                                "Được đặt ở phần định hướng/giới thiệu chiến lược;",
                                "Không gắn với năm cụ thể;",
                                "Mang tính định hướng trung–dài hạn.",
                                "(iii) Tầm nhìn và xứ mệnh được xem xét năm 2025 tại cuộc họp HĐQT quý 2/2025 (BCTN 2025 phần Nội dung và kết quả cuộc họp HĐQT trang 164)",
                                "(iv) Vision & Mission được công bố CÔNG KHAI",
                                "Nguồn công bố:",
                                "BCTN 2025;",
                                "Website chính thức của PV Drilling (mục Giới thiệu/Overview)."
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.1.5",
                        "content": "Hội đồng quản trị có đóng vai trò chủ đạo trong quá trình phát triển và xem xét chiến lược của công ty ít nhất hàng năm không?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "'- BCTN 2025 (trang134) - HĐQT: tuyên bố chức năng của HĐQT gồm \".....chịu trách nhiệm định hướng chiến lược trung và dài hạn, quyết định các vấn đề thuộc thẩm quyền và giám sát hoạt động điều hành\"",
                                "BCTN 2025 (trang 164-166) phần nội dung và kết quả các cuộc họp HĐQT: cuộc họp Quý 2 và Quý 4/2025 có xem xét kế hoạch SXKD năm 2026 của các đơn vị và KH 5 năm giai đoạn 2026-2030 và chiến lược phát triển đến năm 2023 và tầm nhìn đến năm 20250.",
                                "Quy chế hoạt động của HĐQT - sửa đổi lần 3 ngày 21/4/2026  - Điều 2 khoản 2.2 quy định quyền hạn và nhiệm vụ của HĐQT, trong đó có nội dung \"Quyết định hướng chiến lược, kế hoạch phát triển trung hạn và kế hoạch sản xuất kinh doanh hằng năm của Tổng công ty. Định kỳ xem xét định hướng chiến lược của Tổng công ty ít nhất mỗi năm một lần.\""
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế hoạt động của HĐQT",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.1.6",
                        "content": "Hội đồng quản trị có quy trình xem xét, giám sát và giám sát việc thực hiện chiến lược của công ty không?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này tại T4.2026",
                            "items": [
                                "'- PV Drilling có Quy trình xem xét và giám sát chiến lược của HĐQT",
                                "BCTN 2025 công bố (vai trò lãnh đạo của HĐQT - trang 139): xem xét chiến lược định kỳ và giám sát theo quý việc triển khai chiến lược, kế hoạch SXKD theo Quy trình xem xét và giám sát chiến lược đã ban hành\""
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy trình xem xét và giám sát chiến lược của HĐQT",
                                "url": "#"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "D.2",
                "code": "D.2",
                "title": "CƠ CẤU HỘI ĐỒNG QUẢN TRỊ",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "D.2.1",
                        "content": "Các chi tiết của quy tắc đạo đức hoặc ứng xử có được tiết lộ không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "(i) Công bố CÔNG KHAI Bộ Quy tắc Ứng xử (website)",
                                "(ii) Bộ Quy tắc Ứng xử có NỘI DUNG CHI TIẾT, CÓ CẤU TRÚC",
                                "Các nhóm nội dung chính (theo cấu trúc tài liệu):",
                                "Nguyên tắc đạo đức và chuẩn mực ứng xử",
                                "Tuân thủ pháp luật và quy định nội bộ",
                                "Phòng chống tham nhũng, hối lộ",
                                "Xung đột lợi ích",
                                "Trách nhiệm của người lao động, cán bộ quản lý",
                                "Cơ chế tuân thủ và thực hiện"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Bộ quy tắc ứng xử của PV Drilling",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.2",
                        "content": "Tất cả các giám đốc / ủy viên, quản lý cấp cao và nhân viên có bắt buộc phải tuân thủ (các) quy tắc không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Quy tắc ứng xử áp dụng cho toàn bộ tổ chức",
                                "Đối tượng áp dụng (thể hiện trong tài liệu):",
                                "Người lao động",
                                "Cán bộ quản lý",
                                "Người đại diện và các bên liên quan trong hoạt động của Công ty"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Bộ quy tắc ứng xử của PV Drilling",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.3",
                        "content": "Công ty có quy trình thực hiện và giám sát việc tuân thủ các quy tắc đạo đức hoặc ứng xử không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt phần này",
                            "items": [
                                "COC có đề cập đến XỬ LÝ VI PHẠM / KỶ LUẬT như KHÔNG có mô tả RÕ RÀNG về QUY TRÌNH GIÁM SÁT & THEO DÕI TUÂN THỦ"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.2.4",
                        "content": "Các giám đốc / ủy viên độc lập có chiếm ít nhất 50% hội đồng quản trị / ủy viên không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt phần này",
                            "items": [
                                "Hiện HĐQT có 2/7 thành viên là thành viên độc lập (chiếm 28,57%)."
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.2.5",
                        "content": "Công ty có giới hạn nhiệm kỳ từ chín năm trở xuống hoặc 2 nhiệm kỳ năm năm1 cho mỗi giám đốc / ủy viên độc lập không?\n¹ Thời hạn năm năm phải được yêu cầu bởi luật pháp đã có từ trước khi giới thiệu Thẻ điểm Quản trị Công ty ASEAN vào năm 2011",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "(i) Có QUY ĐỊNH GIỚI HẠN NHIỆM KỲ giám đốc độc lập trong Điều lệ",
                                "Điều lệ  – Sửa đổi lần 23 - Điều 20 Khoản 1 quy định:",
                                "Nhiệm kỳ; Tiêu chuẩn, điều kiện của thành viên HĐQT độc lập;",
                                "Có giới hạn tổng thời gian đảm nhiệm của giám đốc độc lập; Đề cập mốc 2 nhiệm kỳ liên tục (mỗi nhiệm kỳ 5 năm) đối với giám đốc độc lập."
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Điều lệ",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.6",
                        "content": "Công ty có đặt giới hạn năm ghế hội đồng quản trị mà một giám đốc / ủy viên độc lập / không điều hành cá nhân có thể nắm giữ đồng thời không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Quy chế nội bộ về quản trị công ty (Tiêu chuẩn đề cử, ứng cử TV HĐQT, Điều 14 khoản 14.1 mục a, trang 17) quy định: \"TV HĐQT có thể đồng thời là TV HĐQT hoặc HĐTV của công ty khác nhưng chỉ được đồng thời là TV HĐQT hoặc HĐTV tại tối đa năm (5) công ty khác\""
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế nội bộ về quản trị công ty",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.7",
                        "content": "Công ty có bất kỳ giám đốc điều hành nào phục vụ trong hơn hai hội đồng quản trị của các công ty niêm yết bên ngoài công ty không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "1. BCTN 2025 – phần Tiểu sử HĐQT/Ban Điều hành (trang 40-57) và Phần báo cáo của HĐQT (trang 158-159) công bố:",
                                "Tiểu sử cá nhân của thành viên HĐQT/Ban Điều hành;",
                                "Có mô tả các chức vụ đang đảm nhiệm từng TV;",
                                "Có bảng tổng hợp các chức vụ tại các công ty khác của từng TV;",
                                "cho thấy không có thành viên nào giữ trên 2 ghế HĐQT tại các công ty niêm yết bên ngoài PV Drilling.",
                                "2. BCTN 2025 - phần 4.3 đánh giá của TV HĐQT độc lập về hoạt động của HĐQT (trang  179) công bố: \"Ngoài ra, tất cả các TV HĐQT đều đảm bảo tuân thủ  quy định pháp luật - không là TV HĐQT hoặc HĐTV của quá 5 công ty và không có TV nào là TV HĐQT của công ty niêm yết khác\""
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.2.8",
                        "content": "Công ty có Ủy ban đề cử không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "'- Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng (Quyết định số 12/12/2025/QĐ-HĐQT)_Ngày 31/12/2025",
                                "BCTN 2025 (Trang 136) - Mô hình quản trị công ty"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.9",
                        "content": "Ủy ban đề cử có bao gồm đa số giám đốc / ủy viên độc lập không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng (Quyết định số 12/12/2025/QĐ-HĐQT)_Ngày 31/12/2025 (Điều 4 khoản 1 trang 3) quy định: UB có ít nhất 3 TV HĐQT, trong đó thành viên độc lập HĐQT chiếm đa số.",
                                "Cơ cấu tổ chức công bố trên website và BCTN 2025 công bố: UB Đề cử và Thù lao lương thưởng hiện nay có 2/3 thành viên là TV HĐQT độc lập."
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.10",
                        "content": "Chủ tịch Ủy ban đề cử có phải là giám đốc / ủy viên độc lập không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt phần này",
                            "items": [
                                "Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng (Quyết định số 12/12/2025/QĐ-HĐQT)_Ngày 31/12/2025 (Điều 4 khoản 2 trang 3) quy định: \".....Chủ nhiệm ủy ban là thành viên độc lập HĐQT hoặc thành viên HĐQT không điều hành.\"",
                                "Cơ cấu tổ chức công bố trên website: Chủ nhiệm UB Đề cử và Thù lao lương thưởng hiện nay là TV HĐQT không điều hành (không phải TV độc lập HĐQT)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.11",
                        "content": "Công ty có tiết lộ các điều khoản tham chiếu / cơ cấu quản trị / điều lệ của Ủy ban đề cử không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "PVD đã công bố quy chế của UB tại website công ty"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.2.12",
                        "content": "Sự tham dự cuộc họp của Ủy ban đề cử có được tiết lộ không và nếu có, Ủy ban đề cử có họp ít nhất hai lần trong năm không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt 1 phần chỉ tiêu này",
                            "items": [
                                "Quy chế UB ĐC&LT của PVD có nêu rõ tại Điều 8, khoản 1 \"Ủy ban họp ít nhất 04 lần trong 01 năm…\".",
                                "BCTN 2025 (phần báo cáo của HĐQT - trang 169) công bố: \"Trong năm 2025, Ủy ban ĐC&TLLT đã tổ chức 6 cuộc họp với nội dung chủ yếu như sau:\" và có công bố chi tiết thời gian, số TV tham dự, số BB, nội dung chính của từng cuộc họp.",
                                "Tuy nhiên chưa công bố rõ tình hình tham dự của từng thành viên"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.13",
                        "content": "Công ty có Ủy ban thù lao không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "'- Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng (Quyết định số 12/12/2025/QĐ-HĐQT)_Ngày 31/12/2025",
                                "BCTN 2025 (Trang 134) - Mô hình quản trị công ty"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.14",
                        "content": "Ủy ban thù lao có bao gồm hoàn toàn các giám đốc / ủy viên không điều hành với đa số giám đốc / ủy viên độc lập không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng (Quyết định số 12/12/2025/QĐ-HĐQT)_Ngày 31/12/2025 (Điều 4 khoản 1 trang 3) quy định: UB có ít nhất 3 TV HĐQT, trong đó thành viên độc lập HĐQT chiếm đa số.",
                                "Cơ cấu tổ chức công bố trên website và BCTN 2025 công bố: UB Đề cử và Thù lao lương thưởng hiện nay có 2/3 thành viên là TV HĐQT độc lập."
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.15",
                        "content": "Chủ tịch Ủy ban thù lao có phải là giám đốc / ủy viên độc lập không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt phần này",
                            "items": [
                                "Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng (Quyết định số 12/12/2025/QĐ-HĐQT)_Ngày 31/12/2025 (Điều 4 khoản 2 trang 3) quy định: \".....Chủ nhiệm ủy ban là thành viên độc lập HĐQT hoặc thành viên HĐQT không điều hành.\"",
                                "Cơ cấu tổ chức công bố trên website: Chủ nhiệm UB Đề cử và Thù lao lương thưởng hiện nay là TV HĐQT không điều hành (không phải TV độc lập HĐQT)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.16",
                        "content": "Công ty có tiết lộ các điều khoản tham chiếu / cơ cấu quản trị / điều lệ của Ủy ban thù lao không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "PVD đã công bố quy chế của UB tại website công ty"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.2.17",
                        "content": "Sự tham dự cuộc họp của Ủy ban thù lao có được tiết lộ không, và nếu có, Ủy ban thù lao có họp ít nhất hai lần trong năm không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt 1 phần chỉ tiêu",
                            "items": [
                                "Quy chế UB ĐC&LT của PVD có nêu rõ tại Điều 8, khoản 1 \"Ủy ban họp ít nhất 04 lần trong 01 năm…\".",
                                "BCTN 2025 (phần báo cáo của HĐQT - trang 169) công bố: \"Trong năm 2025, Ủy ban ĐC&TLLT đã tổ chức 6 cuộc họp với nội dung chủ yếu như sau:\" và có công bố chi tiết thời gian, số TV tham dự, số BB, nội dung chính của từng cuộc họp.",
                                "Tuy nhiên, chưa công bố tình hình tham dự của từng TV trong từng cuộc họp"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.18",
                        "content": "Công ty có Ủy ban Kiểm toán không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "PV Drilling đã công bố quy chế của UB tại website công ty và BCTN 2025",
                                "'- Quy chế tổ chức và hoạt động của Ủy ban Kiểm toán (Quyết định số 03/01/2026/QĐ-HĐQT)_Ngày 30/01/2026",
                                "BCTN 2025 (T.134) - Mô hình quản trị Công ty"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của UBKT",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.19",
                        "content": "Ủy ban Kiểm toán có bao gồm hoàn toàn các giám đốc / ủy viên không điều hành với đa số giám đốc / ủy viên độc lập không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Quy chế tổ chức và hoạt động của Ủy ban Kiểm toan (Điều 4 khoản 1 trang 3) quy định: UB có ít nhất 3 TV HĐQT, trong đó thành viên độc lập HĐQT chiếm đa số.",
                                "Cơ cấu tổ chức công bố trên website và BCTN 2025 (trang 156): UB Kiểm toán hiện nay có 2/3 thành viên là TV độc lập HĐQT."
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của UBKT",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.20",
                        "content": "Chủ tịch Ủy ban Kiểm toán có phải là giám đốc / ủy viên độc lập không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt phần này",
                            "items": [
                                "Quy chế tổ chức và hoạt động của UB Kiểm toán (Điều 4 khoản 2 trang 3) quy định: \".....Chủ nhiệm ủy ban là thành viên độc lập HĐQT hoặc thành viên HĐQT không điều hành.\"",
                                "Cơ cấu tổ chức công bố trên website và BCTN 2025 (trang 156): Chủ nhiệm UB Kiểm toán hiện nay là TV HĐQT không điều hành (không phải TV độc lập HĐQT)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của UBKT",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.21",
                        "content": "Công ty có tiết lộ các điều khoản tham chiếu / cơ cấu quản trị / điều lệ của Ủy ban kiểm toán không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "PV Drilling đã công bố Quy chế hoạt động của UB Kiểm toán tại website"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.2.22",
                        "content": "Có ít nhất một trong các giám đốc / ủy viên độc lập của ủy ban có chuyên môn kế toán (trình độ hoặc kinh nghiệm kế toán) không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt phần này",
                            "items": [
                                "Quy chế hoạt động của UBKT (Điều 5, khoản 1, trang 3) đã nêu rõ yêu cầu \"Các thành viên Ủy ban Kiểm toán cần có chuyên môn, kiến thức về một trong các lĩnh vực kinh tế, tài chính, kế toán, kiểm toán, luật, quản trị kinh doanh hoặc các chuyên ngành phù hợp với hoạt động sản xuất kinh doanh của Tổng công ty.....\"",
                                "BCTN 2025 (trang 45 và 156) công bố Chủ nhiệm UBKT là ông Vũ Thụy Tường là cử nhân kinh tế chuyên ngành tài chính doanh nghiệp. Tuy nhiên ông Tường không phải TV độc lập"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của UBKT",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.23",
                        "content": "Sự tham dự cuộc họp của Ủy ban Kiểm toán có được tiết lộ không, và nếu có, Ủy ban Kiểm toán có họp ít nhất bốn lần trong năm không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Quy chế UBKT có nêu rõ (Điều 8, khoản 1 trang 7) \"Ủy ban họp ít nhất 04 lần trong 01 năm…\".",
                                "BCTN 2025 (phần báo cáo của HĐQT - trang 171) công bố: \"Trong năm 2025, Ủy ban Kiểm toán đã tổ chức 4 cuộc họp với nội dung chủ yếu như sau:\" và có công bố chi tiết thời gian, số TV tham dự, số BB, nội dung chính của từng cuộc họp.",
                                "Tuy nhiên chưa công bố tình hình tham dự từng TV trong các buổi họp"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của UBKT",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.2.24",
                        "content": "Ủy ban kiểm toán có chịu trách nhiệm chính về việc đề xuất bổ nhiệm và miễn nhiệm kiểm toán viên độc lập không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Đối với mô hình quản trị của PV Drilling có Ban Kiểm soát, trách nhiệm chính đề xuất và kiến nghị ĐHĐCĐ bổ nhiệm và miễn nhiệm kiểm toán độc lập thuộc Ban Kiểm soát (Điều lệ: Điều 32 khoản 1 mục m, trang 67)",
                                "'- Theo đó, UBKT có nhiệm vụ tham mưu cho HĐQT về lĩnh vực này: Quy chế tổ chức và hoạt động của Ủy ban Kiểm toán (Điều 6 - Quyền và nhiệm vụ của Ủy ban) công bố: \"Tham mưu cho HĐQT trong việc bổ nhiệm/miễn nhiệm kiểm toán độc lập và lựa chọn đơn vị kiểm toán báo cáo tài chính. Đề xuất HĐQT bổ  nhiệm/miễn nhiệm kiểm toán nội bộ.\""
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của UBKT",
                                "url": "#"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "D.3",
                "code": "D.3",
                "title": "QUY TRÌNH HỘI ĐỒNG QUẢN TRỊ",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "D.3.1",
                        "content": "Cuộc họp hội đồng quản trị có được lên lịch trước khi bắt đầu năm tài chính không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Cuộc họp hội đồng quản trị 2026 được lên lịch trước khi bắt đầu năm tài chính (22/12/2025/NQ-HĐQT ngày 24/12/2025), công bố website 24/12/2025"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Kế hoạch hoạt động HĐQT 2026",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.3.2",
                        "content": "Hội đồng quản trị / ủy viên có họp ít nhất sáu lần trong năm không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt chỉ tiêu này",
                            "items": [
                                "Quy chế hoạt động của HĐQT sửa đổi lần Ba ngày 21/4/2026  (Điều 7 khoản 7.1 - trang 12) công bố: \"HĐQT họp tối thiểu sáu (6) lần một năm,….\"",
                                "Trong BCTN 2025 công bố HĐQT họp 7 lần trong năm 2025 (trang 164-166)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế hoạt động của HĐQT",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.3.3",
                        "content": "Mỗi giám đốc / ủy viên đã tham dự ít nhất 75% tất cả các cuộc họp hội đồng quản trị được tổ chức trong năm chưa?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt chỉ tiêu này năm 2025",
                            "items": [
                                "BCTN 2025 (trang 163) có bảng thống kế số lần và tỉ lệ tham dự họp của các TV HĐQT. Trong đó ông Hoàng Xuân Quốc không tham dự buổi họp nào (lý do bận công tác và ủy quyền cho Chủ tịch HĐQT)"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.3.4",
                        "content": "Công ty có yêu cầu số đại biểu tối thiểu ít nhất 2/3 cho các quyết định của hội đồng quản trị không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Tại Quy chế hoạt động HĐQT, Điều 9, khoản 9.1: \"Cuộc họp HĐQT chỉ có thể được coi là hợp lệ để tiến hành và thông qua các nghị quyết khi có ít nhất ba phần tư (3/4) tổng số thành viên HĐQT hiện hữu tại thời điểm họp dự họp trực tiếp hay qua ủy quyền\""
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế hoạt động của HĐQT",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.3.5",
                        "content": "Các giám đốc / ủy viên không điều hành của công ty có gặp riêng ít nhất một lần trong năm mà không có bất kỳ giám đốc điều hành nào có mặt không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BCTN 2025 (trang 162-163) có nêu trong năm 2025 có họp HDQT mà không gồm bất cứ thành viên điều hành nào vào ngày 17/12/2025"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.3.6",
                        "content": "Các giấy tờ của hội đồng quản trị cho các cuộc họp hội đồng quản trị / ủy viên có được cung cấp cho hội đồng quản trị ít nhất năm ngày làm việc trước cuộc họp hội đồng quản trị không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt phần này",
                            "items": [
                                "BCTN 2025 (trang 162) công bố thư mời và tài liệu họp HĐQT được gửi đến các TV HĐQT trước khi họp ít nhất 5 ngày làm việc.",
                                "Tuy nhiên Điều 24.7 Điều lệ quy định là ít nhất 3 ngày"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.3.7",
                        "content": "Thư ký công ty có đóng một vai trò quan trọng trong việc hỗ trợ hội đồng quản trị trong việc thực hiện trách nhiệm của mình không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đáp ứng phần này",
                            "items": [
                                "Vai trò của Thư ký công ty được quy định tại",
                                "Điều lệ_Bổ sung, sửa đổi lần thứ 23_21/4/2025 (Điều 28)",
                                "Quy chế nội bộ về Quản trị công ty_Sửa đổi lần thứ 6_23/4/2026 (Điều 17)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Điều lệ",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.3.8",
                        "content": "Thư ký công ty có được đào tạo về thực hành pháp lý, kế toán hoặc thư ký công ty và đã theo kịp các phát triển có liên quan không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": "Kết quả: PV Drilling đạt phần này\nBCTN thể hiện nội dung các khóa học liên quan đến nâng cao năng lực đã tham gia: Bà Nguyễn Phương Linh - Thư ký Tổng công ty đã tham gia 6 khóa đào tạo về QTCT và nâng cao năng lực.",
                        "evidences": []
                    },
                    {
                        "stt": "D.3.9",
                        "content": "Công ty có tiết lộ các tiêu chí được sử dụng trong việc lựa chọn giám đốc / ủy viên mới không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt phần này",
                            "items": [
                                "Tiêu chí lựa chọn TV HĐQT được nêu tại:",
                                "'- Điều lệ_Bổ sung, sửa đổi lần thứ 23_21/4/2026 (Điều 28)",
                                "Quy chế nội bộ về Quản trị công ty_Sửa đổi lần thứ 6_21/4/2026 (Điều 14-TV HĐQT) và (Điều 22 - Người điều hành doanh nghiệp)",
                                "Tuy nhiên chỉ là tiêu chí chung, không công bố tiêu chí cho từng lần lựa chọn"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.3.10",
                        "content": "Công ty có mô tả quy trình bổ nhiệm giám đốc / ủy viên mới không?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Quy trình bổ nhiệm Thành viên HĐQT được mô tả trong Quy chế nội bộ về Quản trị công ty_Sửa đổi lần thứ 6_21/4/2026 (Điều 14-TV HĐQT)."
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế nội bộ về Quản trị công ty",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.3.11",
                        "content": "Tất cả các giám đốc / ủy viên có được bầu lại 3 năm một lần không; hoặc 5 năm đối với công ty niêm yết ở các nước có pháp luật quy định thời hạn 5 năm2 mỗi năm?\n(2)Nhiệm kỳ 5 năm phải được yêu cầu bởi các đạo luật đã có từ trước khi có Thẻ Điểm Quản trị Công ty ASEAN vào năm 2011",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Điều lệ_Bổ sung, sửa đổi lần thứ 23_21/4/2026 (Điều 20) quy định \"Mỗi thành viên HĐQT có nhiệm kỳ không quá 5 năm…….\"",
                                "Việc TV HĐQT có nhiệm kỳ không quá 5 năm được quy định từ Luật doanh nghiệp 2005 (Khoản 1 Điều 109)",
                                "Tờ trình 11/2026/TTr-ĐHĐCĐ ngày 18/4/2026 vv bầu thành viên HĐQT nhiệm kỳ 2026-2031"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Điều lệ",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.3.12",
                        "content": "Các cổ đông hoặc Hội đồng quản trị có chấp thuận mức thù lao của giám đốc điều hành và / hoặc giám đốc điều hành cấp cao không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "HĐQT quyết định mức lương, thưởng, thù lao và các lợi ích khác của TGĐ và các phó TGĐ thể hiện tại:",
                                "Điều lệ_Bổ sung, sửa đổi lần thứ 23_21/4/2026 quy định tổng số tiền thù lao, thưởng và lợi ích khác của các TV HĐQT (Điều 14 khoản 2 điểm d trang 25) và HĐQT quyết định mức lương, thưởng, thù lao và các lợi ích khác của TGĐ và các phó TGĐ (Điều 21 khoản 2 điểm c, trang 41).",
                                "BCTN 2025 (trang185) - Kết quả giám sát đối với TGĐ và các TV trong ban TGĐ công bố: \"HĐQT quyết định mức thù lao, lương thưởng và phụ cấp của các TV ban TGĐ theo các quy chế, quy định của TCT, đảm bảo gắn kết lợi ích của BĐH với các chỉ tiêu SXKD và mục tiêu phát triển bền vững của TCT\""
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Điều lệ",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.3.13",
                        "content": "Công ty có các tiêu chuẩn có thể đo lường được để điều chỉnh mức thù lao dựa trên hiệu suất của các giám đốc điều hành và giám đốc điều hành cấp cao với lợi ích lâu dài của công ty, chẳng hạn như áp dụng điều khoản thu hồi, chính sách khoản thưởng hoãn lại (clawback division, deffered bonus)?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": "Kết luận: PV Drilling không đạt phần này",
                        "evidences": []
                    },
                    {
                        "stt": "D.3.14",
                        "content": "Công ty có chức năng kiểm toán nội bộ riêng biệt không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "PV Drilling có bộ phận kiểm toán nội bộ thuộc Ban Tổng hợp trực thuộc HĐQT:",
                                "BCTN 2025 (trang 134) - Mô hình và khung quản trị tại PV Drilling",
                                "Quy chế kiểm toán nội ban hành theo NQ 09/01/2026/NQ-HĐQT ngày 30/1/2026"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế kiểm toán nội bộ",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.3.15",
                        "content": "Người đứng đầu kiểm toán nội bộ có được xác định hay không, nếu thuê ngoài, tên của công ty bên ngoài có được tiết lộ không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BCTN 2025 trang 218-219 công bố người phụ trách kiểm toán nội bộ là ông Nguyễn Văn Tứ"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.3.16",
                        "content": "Việc bổ nhiệm, miễn nhiệm kiểm toán viên nội bộ có cần phải có sự chấp thuận của Ủy ban kiểm toán không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "'- Quy chế tổ chức và hoạt động của Ủy ban Kiểm toán (Quyết định số 03/01/2026/QĐ-HĐQT_30/01/2026-Điều 6 khoản 9): UBKT \"Tham mưu  cho HĐQT trong việc bổ nhiệm/miễn nhiệm kiểm toán độc lập và lựa chọn đơn vị kiểm toán báo cáo tài chính. Tham mưu HĐQT bổ  nhiệm/miễn nhiệm kiểm toán nội bộ.\""
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của Ủy ban Kiểm toán",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.3.17",
                        "content": "Công ty có thiết lập một quy trình kiểm soát nội bộ / khung quản lý rủi ro hợp lý và định kỳ xem xét hiệu quả của khuôn khổ đó không?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "PVD đã thiết lập văn bản Cơ cấu tổ chức, chức năng - nhiệm vụ của hệ thống QTRR.",
                                "PVD có thiết lập UB QTRR với Quy chế hoạt động của UB được công bố trên website.",
                                "BCTN 2025 công bố vai trò của 3 Tuyến phòng vệ đối với QTRR (trang 239).",
                                "Có Quy chế KTNB ban hành theo NQ 09/01/2026/NQ-HĐQT ngày 30/1/2026.",
                                "Có quy chế quản trị rủi ro theo NQ 02/07/2026/NQ-HĐQT - 21/07/2026",
                                "BC PTBV 2025 (trang 134)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế QTRR doanh nghiệp",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.3.18",
                        "content": "Báo cáo thường niên / Báo cáo CG hàng năm có tiết lộ rằng hội đồng quản trị / ủy viên đã tiến hành xem xét các kiểm soát trọng yếu của công ty (bao gồm kiểm soát hoạt động, tài chính và tuân thủ) và hệ thống quản lý rủi ro không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BCTN 2025 công bố rằng HĐQT đã \"Rà soát và củng cố hẹ thống kiểm soát nội bộ: đánh giá các kiểm soát trọng yếu trên các lĩnh vực hoạt động, tài chính, tuân thủ và công nghệ thông tin;\""
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.3.19",
                        "content": "Công ty có tiết lộ những rủi ro chính mà công ty phải đối mặt trọng yếu (tức là tài chính, hoạt động bao gồm CNTT, môi trường, xã hội, kinh tế) không?",
                        "maxScore": 2,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Trong BCTN 2025 có công bố nội dung về \"Các rủi ro trọng yếu tại PV Drilling\" (Trang 240-243)"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.3.20",
                        "content": "Báo cáo thường niên / Báo cáo CG hàng năm có chứa tuyên bố từ hội đồng quản trị / ủy viên hoặc Ủy ban kiểm toán nhận xét về tính đầy đủ của kiểm soát nội bộ / hệ thống quản lý rủi ro của công ty không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BCTN 2025 (công tác quản trị rủi ro và kiểm soát nội bộ - trang 144) công bố: “Với sự hỗ trợ của Ủy ban Kiểm toán và Ủy ban QTRR, HĐQT đã định kỳ xem xét, đánh giá mức độ đầy đủ, phù hợp và hiệu lực của hệ thống kiểm soát nội bộ và khung QTRR, bảo đảm hệ thống này được vận hành tương thích với quy mô, mức độ phức tạp và đặc thù hoạt động của Tổng công ty”"
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "D.4",
                "code": "D.4",
                "title": "NHỮNG NGƯỜI TRONG HỘI ĐỒNG QUẢN TRỊ",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "D.4.1",
                        "content": "Những người khác nhau có đảm nhận vai trò của chủ tịch và giám đốc điều hành không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "PV Drilling có công bố Chủ tịch HĐQT là ông Mai Thế Toàn và Tổng Giám đốc là ông Nguyễn Xuân Cường trên website"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.4.2",
                        "content": "Chủ tịch có phải là giám đốc / ủy viên độc lập không?",
                        "maxScore": 2,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt phần này",
                            "items": [
                                "Chủ tịch là TV HĐQT không điều hành"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.4.3",
                        "content": "Có ai trong số các thành viên HĐQT là cựu CEO của công ty trong 2 năm qua không?",
                        "maxScore": 2,
                        "result": "NO",
                        "selfScore": 2,
                        "explanation": "Kết luận: PV Drilling đạt phần này",
                        "evidences": []
                    },
                    {
                        "stt": "D.4.4",
                        "content": "Vai trò, trách nhiệm của chủ tịch HĐQT có được bộc lộ không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "Quy chế hoạt động HĐQT (Điều 3 trang 8) - Nhiệm vụ, quyền hạn của Chủ tịch HĐQT."
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế hoạt động của HĐQT",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.4.5",
                        "content": "Nếu Chủ tịch không độc lập, Hội đồng quản trị đã bổ nhiệm Trưởng nhóm / Giám đốc độc lập cao cấp và vai trò của anh ấy / cô ấy đã được xác định chưa?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BCTN 2025 - Báo cáo của HĐQT - trang 178 cho thấy: PV Drilling đã bổ nhiệm ông Phạm Xuân Sơn là thành viên độc lập đứng đầu và nêu rõ vai trò của thành viên độc lập đứng đầu.",
                                "Chức năng, nhiệm vụ của thành viên độc lập đứng đầu được quy định tại QĐ 05/11/2025/QĐ-HĐQT ngày 3/11/2025 và công bố trên website"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Chức năng, nhiệm vụ của thành viên độc lập đứng đầu",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.4.6",
                        "content": "Có ít nhất một giám đốc / ủy viên không điều hành có kinh nghiệm làm việc trước đó trong lĩnh vực chính mà công ty đang hoạt động không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "BCTN 2025 - Báo cáo của HĐQT-trang161 công bố: \"… kinh nghiệm công tác trung bình trong lĩnh vực dầu khí của các thành viên HĐQT là 30 năm, trong đó có nhiều thành viên có trên 30 năm kinh nghiệm…\"",
                                "BCTN - giới thiệu HĐQT - trang 42-48 - có giới thiệu quá trình công tác của từng TV HĐQT"
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "D.5",
                "code": "D.5",
                "title": "HIỆU SUẤT HỘI ĐỒNG QUẢN TRỊ",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "D.5.1",
                        "content": "Công ty có chương trình định hướng cho giám đốc / ủy viên mới không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "PV Drilling có \"Chính sách đào tạo định hướng và phát triển chuyên môn liên tục cho thành viên HĐQT\" và có công bố trên website (NQ 35/12/2025/NQ-HĐQT ngày 31/12/2025)",
                                "BCTN 2025 (Báo cáo của HĐQT - mục 1.3 - trang 162 công bố): \"Tất cả các thành viên khi tham gia HĐQT đều được triển khai chương trình đào tạo định hướng theo chính sách và quy trình thống nhất của TCT\"",
                                "BCTN 2025 (công tác đào tạo về QTCT và phát triển năng lực quản trị - trang 244) công bố nội dung đào tạo định hướng cho TV HĐQT mới."
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Chính sách đào tạo định hướng và phát triển chuyên môn liên tục cho thành viên HĐQT",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.5.2",
                        "content": "Công ty có chính sách và thực tiễn thực tế và các chương trình khuyến khích giám đốc / ủy viên tham dự các chương trình giáo dục chuyên nghiệp đang diễn ra hoặc liên tục không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "'- BCTN 2025 (trang 244-247) báo cáo công tác đào tạo có nêu chi tiết các khóa học mà từng TV Ban lãnh đạo tham gia liên quan đến QTCT và nâng cao năng lực."
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.5.3",
                        "content": "Công ty có tiết lộ quy trình về cách hội đồng quản trị / ủy viên lên kế hoạch cho sự kế nhiệm của Giám đốc điều hành / Giám đốc điều hành / Chủ tịch và quản lý chủ chốt không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này.",
                            "items": [
                                "QC hoạt động của UB Đề cử & Thù lao lương thưởng (12/12/NQ-HĐQT ngày 31/12/2025-điều 6 khoản 2): quy định quyền và nhiệm vụ của UB Đề cử & TLLT về việc tư vấn ccho HĐQT về kế hoạch kế nhiệm cho các cán bộ chủ chốt.",
                                "Đã công bố Quy trình lập kế hoạch kế nhiệm TV HĐQT và TV BĐH (09/12/2025/QĐ-HĐQT ngày 31/12/2025)",
                                "BCTN 2025 (trang 143) công bố: \"Trọng tâm giám sát của HĐQT trong năm là xây dựng, rà soát và theo dõi kế hoạch kế nhiệm đối với Chủ tịch HĐQT, các Thành viên HĐQT, Tổng giám đốc và các chức danh quản lý chủ chốt, nhằm bảo đảm tính liên tục, ổn định và hiệu quả trong quản trị, điều hành của PV Drilling\""
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy trình lập kế hoạch kế nhiệm TV HĐQT và TV BĐH",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.5.4",
                        "content": "Hội đồng quản trị / ủy viên có tiến hành đánh giá hiệu suất hàng năm của Giám đốc điều hành / Giám đốc điều hành / Chủ tịch không?",
                        "maxScore": 1,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt chỉ tiêu này",
                            "items": [
                                "BCTN 2025 cho thấy HĐQT đã thực hiện đánh giá hiệu suất hàng năm của BĐH và có phương pháp rõ ràng (Kết quả giám sát đối với TGĐ và Ban TGĐ, trang 184-185)"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.5.5",
                        "content": "Công ty có tiến hành đánh giá hiệu suất hàng năm của hội đồng quản trị / ủy viên và tiết lộ các tiêu chí và quy trình tiếp theo để đánh giá không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt 1 phần tiêu chí này",
                            "items": [
                                "PV Drilling có kế hoạch đánh giá hoạt động của HĐQT năm 2025 (03/12/2025/NQ-HĐQT ngày 11/12/2025)",
                                "BCTN 2025 cho thấy PV Drilling đã thực hiện đánh giá hiệu suất hàng năm của  HĐQT, các UB và TV HĐQT (trang 180-183 -BC của HĐQT), trong đó có nêu các tiêu chí chung và công cụ và phương pháp đánh giá đã được sử dụng.",
                                "Tuy nhiên, các tiêu chí cụ thể không được công bố (03/12/2025/NQ-HĐQT không được công bố)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Kế hoạch đánh giá hoạt động của HĐQT năm 2025",
                                "url": "#"
                            }
                        ]
                    },
                    {
                        "stt": "D.5.6",
                        "content": "Công ty có tiến hành đánh giá hiệu suất hàng năm của từng giám đốc / ủy viên và công khai các tiêu chí và quy trình để đánh giá không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt 1 phần tiêu chí này",
                            "items": [
                                "PV Drilling có kế hoạch đánh giá hoạt động của HĐQT năm 2025 (03/12/2025/NQ-HĐQT ngày 11/12/2025)",
                                "BCTN 2025 cho thấy PV Drilling đã thực hiện đánh giá hiệu suất hàng năm của  HĐQT, các UB và TV HĐQT (trang 180-183 -BC của HĐQT), trong đó có nêu các tiêu chí chung và công cụ và phương pháp đánh giá đã được sử dụng.",
                                "Tuy nhiên, các tiêu chí cụ thể không được công bố (03/12/2025/NQ-HĐQT không được công bố)"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "D.5.7",
                        "content": "Công ty có tiến hành đánh giá hiệu suất hàng năm của các ủy ban hội đồng quản trị và công khai các tiêu chí và quy trình để đánh giá không?",
                        "maxScore": 1,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt 1 phần tiêu chí này",
                            "items": [
                                "BCTN 2025 cho thấy PV Drilling đã thực hiện đánh giá hiệu suất hàng năm của HĐQT, các UB và TV HĐQT (trang 180-183 -BC của HĐQT), trong đó có nêu các tiêu chí chung, công cụ và phương pháp đánh giá đã được sử dụng.",
                                "Tuy nhiên các tiêu chí cụ thể không được công bố."
                            ]
                        },
                        "evidences": []
                    }
                ]
            }
        ]
    }
];

// 3. Danh mục tiêu chí Cấp độ 2 (Level 2: Bonus & Penalty - 44 tiêu chí)
var acgsLevel2Data = [
    {
        "id": "(B)A",
        "title": "(B)A - QUYỀN CỦA CỔ ĐÔNG",
        "isOpen": true,
        "subGroups": [
            {
                "id": "(B)A.1",
                "code": "(B)A.1",
                "title": "QUYỀN THAM GIA VÀ BIỂU QUYẾT CÓ HIỆU QUẢ TRONG CUỘC HỌP ĐẠI HỘI ĐỒNG CỔ ĐÔNG VÀ PHẢI ĐƯỢC THÔNG BÁO VỀ CÁC QUY TẮC, BAO GỒM CẢ THỦ TỤC BIỂU QUYẾT, CHI PHỐI CUỘC HỌP ĐẠI HỘI ĐỒNG CỔ ĐÔNG.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(B)A.1.1",
                        "content": "Công ty có thực hiện biểu quyết điện tử an toàn theo thời gian thực vắng mặt tại các cuộc họp đại hội đồng cổ đông không?",
                        "maxScore": 0,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": "PV Drilling cho phép biểu quyết vắng mặt bằng phương thức điện thông qua phần mềm bỏ phiếu của Bvote, đảm bảo thời gian thực tại ĐHĐCĐ.\nBiên bản kiểm phiếu và biên bản ĐHĐCĐ có ghi nhận việc này.",
                        "evidences": []
                    }
                ]
            }
        ]
    },
    {
        "id": "(B)B",
        "title": "(B)B - ĐỐI XỬ CÔNG BẰNG VỚI CỔ ĐÔNG",
        "isOpen": false,
        "subGroups": [
            {
                "id": "(B)B.1",
                "code": "(B)B.1",
                "title": "THÔNG BÁO ĐHĐCĐ",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(B)B.1.1",
                        "content": "Công ty có công bố thông báo ĐHĐCĐ (với chương trình nghị sự chi tiết và thông tư giải trình) như đã thông báo cho Sở giao dịch, ít nhất 28 ngày trước ngày họp không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt phần này",
                            "items": [
                                "PV Drilling có thông báo cho Sở giao dịch chốt danh sách họp ĐHĐCĐ ngày 26/2/2026 nhưng Thư mời và tất cả tài liệu tại cuộc họp được công bố ngày 28/3/2026, trước 24 ngày so với ngày tổ chức ĐHĐCĐ (21/04/2026)"
                            ]
                        },
                        "evidences": []
                    }
                ]
            }
        ]
    },
    {
        "id": "(B)C",
        "title": "(B)C - TÍNH BỀN VỮNG VÀ KHẢ NĂNG PHỤC HỒI",
        "isOpen": false,
        "subGroups": [
            {
                "id": "(B)C.1",
                "code": "(B)C.1",
                "title": "(B)C.1",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(B)C.1.1",
                        "content": "Công ty có tiết lộ cách quản lý rủi ro và cơ hội liên quan đến khí hậu không?",
                        "maxScore": 0,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": "Báo cáo Phát triển bền vững 2025: \n- Mục 3.4 Quản lý rủi ro (trang 134-135)\n- Mục 5.1 ứng phó biến đổi khí hậu (trang 192-193)",
                        "evidences": []
                    },
                    {
                        "stt": "(B)C.1.2",
                        "content": "Công ty có tiết lộ rằng Báo cáo bền vững / Báo cáo bền vững của mình được đảm bảo bên ngoài không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": "Kết luận: PV Drilling không đạt phần này",
                        "evidences": []
                    },
                    {
                        "stt": "(B)C.1.3",
                        "content": "Công ty có tiết lộ kênh tương tác với các nhóm bên liên quan không và cách công ty phản ứng với các mối quan tâm ESG của các bên liên quan?",
                        "maxScore": 0,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": "1. Báo cáo Phát triển bền vững 2025: \n- Mục 2.2. Gắn kết các bên liên quan (trang 74-86)\n2. Website - mục liên hệ:\nhttps://www.pvdrilling.com.vn/lien-he",
                        "evidences": []
                    },
                    {
                        "stt": "(B)C.1.4",
                        "content": "Công ty có một bộ phận/Ủy ban chuyên trách về các vấn đề ESG không?",
                        "maxScore": 0,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": "PV Drilling có Uỷ ban Chiến lược và Phát triển bền vững ESG do Chủ tịch HĐQT là thành viên không điều hành là Chủ nhiệm",
                        "evidences": []
                    },
                    {
                        "stt": "(B)C.1.5",
                        "content": "Công ty có công bố vai trò giám sát của HĐQT liên quan đến các rủi ro và cơ hội liên quan đến phát triển bền vững hay không?",
                        "maxScore": 0,
                        "result": "YES",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "PV Drilling đã thiết lập văn bản Cơ cấu tổ chức, chức năng - nhiệm vụ của hệ thống QTRR và PTBV thể hiện vai trò giám sát của HĐQT:",
                                "Có UB QTRR với Quy chế hoạt động của UB được công bố trên website.",
                                "BCTN 2025 công bố vai trò của 3 Tuyến phòng vệ đối với QTRR (trang 239).",
                                "Có Quy chế KTNB ban hành theo NQ 09/01/2026/NQ-HĐQT ngày 30/1/2026.",
                                "Có QC quản trị rủi ro theo NQ 02/07/2026/NQ-HĐQT - 21/07/2026",
                                "Khung chính sách PTBV"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "(B)C.1.6",
                        "content": "Công ty có tiết lộ mối liên hệ giữa giám đốc điều hành và thù lao quản lý cấp cao  và hiệu suất bền vững cho năm trước không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": "Kết luận: PV Drilling không đạt phần này",
                        "evidences": []
                    },
                    {
                        "stt": "(B)C.1.7",
                        "content": "Hệ thống cảnh báo sai phạm của công ty có được quản lý bởi các bên / tổ chức độc lập không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": "Kết luận: PV Drilling không đạt phần này",
                        "evidences": []
                    }
                ]
            }
        ]
    },
    {
        "id": "(B)D",
        "title": "(B)D - CÔNG BỐ THÔNG TIN VÀ MINH BẠCH",
        "isOpen": false,
        "subGroups": [
            {
                "id": "(B)D.1",
                "code": "(B)D.1",
                "title": "CHẤT LƯỢNG BÁO CÁO THƯỜNG NIÊN",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(B)D.1.1",
                        "content": "Báo cáo/báo cáo tài chính năm đã được kiểm toán có được công bố trong vòng 60 ngày kể từ ngày kết thúc năm tài chính không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt phần này",
                            "items": [
                                "BCTC năm 2025 công bố ngày 28/3/2026 (> 60 ngày)"
                            ]
                        },
                        "evidences": []
                    }
                ]
            }
        ]
    },
    {
        "id": "(B)E",
        "title": "(B)E - TRÁCH NHIỆM CỦA HĐQT",
        "isOpen": false,
        "subGroups": [
            {
                "id": "(B)E.1",
                "code": "(B)E.1",
                "title": "NĂNG LỰC VÀ SỰ ĐA DẠNG CỦA HỘI ĐỒNG QUẢN TRỊ",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(B)E.1.1",
                        "content": "Công ty có tối thiểu một thành viên/ủy viên HĐQT độc lập là nữ?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": "Kết luận: PV Drilling không đạt phần này",
                        "evidences": []
                    },
                    {
                        "stt": "(B)E.1.2",
                        "content": "Công ty có chính sách và tiết lộ các mục tiêu có thể đo lường được để thực hiện sự đa dạng của hội đồng quản trị và báo cáo về tiến độ đạt được các mục tiêu của mình không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần chỉ tiêu này",
                            "items": [
                                "Chính sách: Quy trình đề cử TV HDQT (Điều 8) có nguyên tắc đảm bảo tính đa dạng và hiệu quả của HĐQT.",
                                "Quy trình lập kế hoạch kế nhiệm Thành viên HĐQT và Thành viên Ban điều hành: hướng tới mục tiêu đa dạng TV HĐQT và BĐH",
                                "Thực trạng: BCTN 2025 (mục 1.2 Đánh giá cấu trúc HĐQT, trang 160) có báo cáo tình trạng cơ cấu HĐQT trong đó có các tiêu chí: Tỷ lệ độc lập, tỷ lệ không điều hành, cơ cấu độ tuổi giao thoa thế hệ, học vấn, trình độ chuyên môn, kinh nghiệm công tác trong lĩnh vực của PV Drilling, nhiệm kỳ.",
                                "Tuy nhiên, chưa có mục tiêu đo lường và báo cáo tiến độ thực hiện mục tiêu được công bố"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy trình Đề cử, Ứng cử Thành viên HĐQT",
                                "url": "#"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "(B)E.2",
                "code": "(B)E.2",
                "title": "CƠ CẤU HỘI ĐỒNG QUẢN TRỊ",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(B)E.2.1",
                        "content": "Ủy ban đề cử có bao gồm toàn bộ các thành viên HĐQT độc lập không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt",
                            "items": [
                                "UB đề cử và thù lao lương thưởng chỉ có 2/3 thành viên là TV độc lập HĐQT"
                            ]
                        },
                        "evidences": []
                    },
                    {
                        "stt": "(B)E.2.2",
                        "content": "Hội đồng đề cử có thực hiện quá trình xác định chất lượng giám đốc phù hợp với định hướng chiến lược của công ty không?",
                        "maxScore": 0,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "'- Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng (Quyết định số 12/12/2025/QĐ-HĐQT)_Ngày 31/12/2025: Điều 6- quyền và nghĩa vụ ủy ban"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy chế tổ chức và hoạt động của Ủy ban Đề cử và Thù lao lương thưởng",
                                "url": "#"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "(B)E.3",
                "code": "(B)E.3",
                "title": "BỔ NHIỆM HỘI ĐỒNG QUẢN TRỊ VÀ BẦU CỬ LẠI",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(B)E.3.1",
                        "content": "Công ty có sử dụng các công ty tìm kiếm chuyên nghiệp hoặc các nguồn ứng cử viên bên ngoài khác (chẳng hạn như cơ sở dữ liệu giám đốc do giám đốc hoặc cơ quan cổ đông thiết lập) khi tìm kiếm ứng viên vào hội đồng quản trị / ủy viên không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 1,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt 1 phần",
                            "items": [
                                "Có chính sách: Quy trình đề cử TV HDQT (Điều 8.3.a - tiếp nhận hồ sơ ứng cử viên)",
                                "BCTN 2025 (mục 2.2 Ủy ban Đề cử và TLLT, trang 169) công bố: \"HĐQT PV Drilling đã chủ động liên lạc với mạng lưới thành viên HĐQT chuyên nghiệp là VIOD để tìm kiếm thêm nguồn ứng viên chất lượng cho vị trí thành viên đôc lập HĐQT\"",
                                "Tuy nhiên thực tế không có bằng chứng đã áp dụng được công bố"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "Quy trình Đề cử, Ứng cử Thành viên HĐQT",
                                "url": "#"
                            }
                        ]
                    }
                ]
            },
            {
                "id": "(B)E.4",
                "code": "(B)E.4",
                "title": "CẤU TRÚC & THÀNH PHẦN HỘI ĐỒNG QUẢN TRỊ",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(B)E.4.1",
                        "content": "Các giám đốc / ủy viên độc lập không điều hành có chiếm hơn 50% hội đồng quản trị / ủy viên cho một công ty có chủ tịch độc lập không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling không đạt phần này",
                            "items": [
                                "Điều kiện đầu tiên \"Chủ tịch HĐQT là độc lập\" không đạt"
                            ]
                        },
                        "evidences": []
                    }
                ]
            },
            {
                "id": "(B)E.5",
                "code": "(B)E.5",
                "title": "GIÁM SÁT RỦI RO",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(B)E.5.1",
                        "content": "Công ty có tiết lộ rằng Hội đồng quản trị của mình đã xác định rủi ro chính liên quan đến công nghệ thông tin bao gồm gián đoạn, an ninh mạng và khắc phục thảm họa, để đảm bảo rằng các rủi ro đó được quản lý và tích hợp vào khuôn khổ quản lý rủi ro tổng thể không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": "PV Drilling đạt 1 phần chỉ tiêu này\nHĐQT đã xác định và có hành động để quản lý rủi ro liên quan đến công nghệ thông tin bao gồm gián đoạn, an ninh mạng và khắc phục thảm họa này và tích hợp trong hệ thống ERM\n- Quy chế về quản trị rủi ro doanh nghiệp: \n+ (Điều 5, trang 7) xác định \" gián đoạn hoạt động kinh doanh liên tục do sự cố từ hệ thống công nghệ thông tin\" là một trong những lĩnh vực rủi ro chính.\n+ (điều 9.2.1, trang 16) quy định HĐQT chịu trách nhiệm cao nhất với toàn bộ hệ thống ERM, phê duyệt khẩu vị rủi ro, mức độ chấp nhận RR, thước đo RR.\n- BC PTBV 2025\n+ (Quản lý rủi ro, trang 134-135) xác định rủi ro an toàn thông tin & dữ liệu là 1 trong 6 nhóm rủi ro chính cần quản lý\n+ Phụ lục 4, trang 265: đánh giá chi tiết tác động của rủi ro an ninh mạng (mã rủi ro G6)\n Tuy nhiên, chưa rõ bằng chứng thể hiện rõ nội dung 'khắc phục thảm họa/disaster recovery' và chưa có một công bố trực tiếp liên kết đầy đủ ba nhóm: gián đoạn – an ninh mạng – khắc phục thảm họa vào ERM.",
                        "evidences": []
                    }
                ]
            },
            {
                "id": "(B)E.6",
                "code": "(B)E.6",
                "title": "HIỆU SUẤT HỘI ĐỒNG QUẢN TRỊ",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(B)E.6.1",
                        "content": "Công ty có Ủy ban rủi ro cấp hội đồng quản trị riêng biệt không?",
                        "maxScore": 0,
                        "result": "YES",
                        "selfScore": 2,
                        "explanation": {
                            "highlight": "Kết luận: PV Drilling đạt phần này",
                            "items": [
                                "UB Quản trị rủi ro được thành lập từ năm 2025 và hoạt động theo quy chế tổ chức và hoạt động của Ủy ban QTRR (QĐ 14/12/QĐ-HĐQT ngày 31/12/2025)"
                            ]
                        },
                        "evidences": [
                            {
                                "title": "quy chế tổ chức và hoạt động của Ủy ban QTRR",
                                "url": "#"
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        "id": "(P)A",
        "title": "(P)A - QUYỀN CỦA CỔ ĐÔNG",
        "isOpen": false,
        "subGroups": [
            {
                "id": "(P)A.1",
                "code": "(P)A.1",
                "title": "QUYỀN CỔ ĐÔNG CƠ BẢN",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(P)A.1.1",
                        "content": "Có phải công ty đã thất bại hoặc bỏ qua việc cung cấp đối xử bình đẳng cho việc mua lại cổ phần cho Tất cả cổ đông?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    }
                ]
            },
            {
                "id": "(P)A.2",
                "code": "(P)A.2",
                "title": "CÁC CỔ ĐÔNG, BAO GỒM CẢ CÁC CỔ ĐÔNG TỔ CHỨC, NÊN ĐƯỢC PHÉP THAM KHẢO Ý KIẾN LẪN NHAU VỀ CÁC VẤN ĐỀ LIÊN QUAN ĐẾN QUYỀN CỔ ĐÔNG CƠ BẢN CỦA HỌ NHƯ ĐƯỢC ĐỊNH NGHĨA TRONG NGUYÊN TẮC, TÙY THUỘC VÀO CÁC TRƯỜNG HỢP NGOẠI LỆ ĐỂ NGĂN CHẶN LẠM DỤNG.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(P)A.2.1",
                        "content": "Có bằng chứng về các rào cản ngăn cản các cổ đông giao tiếp hoặc tư vấn với các cổ đông khác không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    }
                ]
            },
            {
                "id": "(P)A.3",
                "code": "(P)A.3",
                "title": "QUYỀN THAM GIA VÀ BIỂU QUYẾT CÓ HIỆU QUẢ TRONG CUỘC HỌP ĐẠI HỘI ĐỒNG CỔ ĐÔNG VÀ PHẢI ĐƯỢC THÔNG BÁO VỀ CÁC QUY TẮC, BAO GỒM CẢ THỦ TỤC BIỂU QUYẾT, CHI PHỐI CUỘC HỌP ĐẠI HỘI ĐỒNG CỔ ĐÔNG.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(P)A.3.1",
                        "content": "Công ty có đưa bất kỳ mục chương trình nghị sự bổ sung và không báo trước nào vào thông báo của ĐHĐCĐ / EGM không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    },
                    {
                        "stt": "(P)A.3.2",
                        "content": "Là Chủ tịch Hội đồng quản trị và Chủ tịch của tất cả các Ủy ban Hội đồng quản trị và Tổng giám đốc vắng mặt trong Đại hội đồng cổ đông gần đây nhất?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    }
                ]
            },
            {
                "id": "(P)A.4",
                "code": "(P)A.4",
                "title": "CẤU TRÚC VỐN VÀ THỎA THUẬN CHO PHÉP MỘT SỐ CỔ ĐÔNG NHẤT ĐỊNH CÓ ĐƯỢC MỨC ĐỘ KIỂM SOÁT KHÔNG TƯƠNG XỨNG VỚI QUYỀN SỞ HỮU VỐN CHỦ SỞ HỮU CỦA HỌ NÊN ĐƯỢC TIẾT LỘ.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(P)A.4.1",
                        "content": "Thỏa thuận cổ đông?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    },
                    {
                        "stt": "(P)A.4.2",
                        "content": "Giới hạn biểu quyết?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    },
                    {
                        "stt": "(P)A.4.3",
                        "content": "Nhiều quyền biểu quyết?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    }
                ]
            },
            {
                "id": "(P)A.5",
                "code": "(P)A.5",
                "title": "CẤU TRÚC VỐN VÀ THỎA THUẬN CHO PHÉP MỘT SỐ CỔ ĐÔNG NHẤT ĐỊNH CÓ ĐƯỢC MỨC ĐỘ KIỂM SOÁT KHÔNG TƯƠNG XỨNG VỚI QUYỀN SỞ HỮU VỐN CHỦ SỞ HỮU CỦA HỌ NÊN ĐƯỢC TIẾT LỘ.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(P)A.5.1",
                        "content": "Cấu trúc sở hữu kim tự tháp và / hoặc cấu trúc nắm giữ chéo có rõ ràng không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    }
                ]
            }
        ]
    },
    {
        "id": "(P)B",
        "title": "(P)B - ĐỐI XỬ CÔNG BẰNG VỚI CỔ ĐÔNG",
        "isOpen": false,
        "subGroups": [
            {
                "id": "(P)B.1",
                "code": "(P)B.1",
                "title": "GIAO DỊCH NỘI GIÁN VÀ TỰ GIAO DỊCH LẠM DỤNG NÊN BỊ CẤM.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(P)B.1.1",
                        "content": "Có bất kỳ kết án nào về giao dịch nội gián liên quan đến giám đốc / ủy viên, quản lý và nhân viên trong ba năm qua không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    }
                ]
            },
            {
                "id": "(P)B.2",
                "code": "(P)B.2",
                "title": "BẢO VỆ CỔ ĐÔNG THIỂU SỐ KHỎI HÀNH ĐỘNG LẠM DỤNG",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(P)B.2.1",
                        "content": "Có bất kỳ RPT nào có thể được phân loại là hỗ trợ tài chính (tức là không được tiến hành trong thời gian dài) cho các thực thể không phải là công ty con thuộc sở hữu hoàn toàn không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    },
                    {
                        "stt": "(P)B.2.2",
                        "content": "Có bất kỳ RPT nào có thể được phân loại là hỗ trợ tài chính (tức là không được tiến hành trong thời gian dài) cho các thực thể không phải là công ty con thuộc sở hữu hoàn toàn không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    }
                ]
            }
        ]
    },
    {
        "id": "(P)C",
        "title": "(P)C - VAI TRÒ CỦA CÁC BÊN LIÊN QUAN",
        "isOpen": false,
        "subGroups": [
            {
                "id": "(P)C.1",
                "code": "(P)C.1",
                "title": "QUYỀN CỦA CÁC BÊN LIÊN QUAN ĐƯỢC THIẾT LẬP BỞI PHÁP LUẬT HOẶC THÔNG QUA CÁC THỎA THUẬN CHUNG PHẢI ĐƯỢC TÔN TRỌNG.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(P)C.1.1",
                        "content": "Có bất kỳ vi phạm nào đối với bất kỳ luật nào liên quan đến lao động / việc làm / người tiêu dùng / mất khả năng thanh toán / thương mại / cạnh tranh hoặc các vấn đề môi trường không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    }
                ]
            },
            {
                "id": "(P)C.2",
                "code": "(P)C.2",
                "title": "KHI CÁC BÊN LIÊN QUAN THAM GIA VÀO QUÁ TRÌNH QUẢN TRỊ CÔNG TY, HỌ CẦN ĐƯỢC TIẾP CẬN VỚI THÔNG TIN PHÙ HỢP, ĐẦY ĐỦ VÀ ĐÁNG TIN CẬY MỘT CÁCH KỊP THỜI VÀ THƯỜNG XUYÊN CƠ SỞ.",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(P)C.2.1",
                        "content": "Công ty có phải đối mặt với bất kỳ lệnh trừng phạt nào của các cơ quan quản lý vì không đưa ra thông báo trong khoảng thời gian cần thiết cho các sự kiện quan trọng không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    },
                    {
                        "stt": "(P)C.2.2",
                        "content": "Có bằng chứng nào cho thấy công ty đang tham gia vào các hoạt động tẩy xanh không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    }
                ]
            }
        ]
    },
    {
        "id": "(P)D",
        "title": "(P)D - CÔNG BỐ THÔNG TIN VÀ MINH BẠCH",
        "isOpen": false,
        "subGroups": [
            {
                "id": "(P)D.1",
                "code": "(P)D.1",
                "title": "CHẾ TÀI TỪ CƠ QUAN QUẢN LÝ ĐỐI VỚI BÁO CÁO TÀI CHÍNH",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(P)D.1.1",
                        "content": "Công ty có nhận được \"ý kiến đủ điều kiện\" trong báo cáo kiểm toán độc lập không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    },
                    {
                        "stt": "(P)D.1.2",
                        "content": "Công ty có nhận được \"ý kiến bất lợi\" trong báo cáo kiểm toán độc lập không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    },
                    {
                        "stt": "(P)D.1.3",
                        "content": "Công ty có nhận được \"ý kiến từ chối trách nhiệm\" trong báo cáo kiểm toán bên ngoài không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    },
                    {
                        "stt": "(P)D.1.4",
                        "content": "Công ty trong năm qua có điều chỉnh báo cáo tài chính vì những lý do khác ngoài những thay đổi trong chính sách kế toán không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    }
                ]
            }
        ]
    },
    {
        "id": "(P)E",
        "title": "(P)E - TRÁCH NHIỆM CỦA HỘI ĐỒNG QUẢN TRỊ",
        "isOpen": false,
        "subGroups": [
            {
                "id": "(P)E.1",
                "code": "(P)E.1",
                "title": "TUÂN THỦ CÁC QUY TẮC, QUY ĐỊNH NIÊM YẾT VÀ LUẬT HIỆN HÀNH",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(P)E.1.1",
                        "content": "Có bằng chứng nào cho thấy công ty đã không tuân thủ bất kỳ quy tắc và quy định niêm yết nào ngoài các quy tắc công bố thông tin trong năm qua không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    },
                    {
                        "stt": "(P)E.1.2",
                        "content": "Có trường hợp nào mà các giám đốc / ủy viên không điều hành đã từ chức và nêu ra bất kỳ vấn đề nào về các mối quan tâm liên quan đến quản trị không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    }
                ]
            },
            {
                "id": "(P)E.2",
                "code": "(P)E.2",
                "title": "CƠ CẤU HỘI ĐỒNG QUẢN TRỊ",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(P)E.2.1",
                        "content": "Công ty có bất kỳ giám đốc / ủy viên độc lập nào đã phục vụ hơn chín năm hoặc hai nhiệm kỳ, mỗi nhiệm kỳ năm năm (tùy theo mức nào cao hơn) trong cùng một khả năng không? \n\n1 Thời hạn năm năm phải được yêu cầu bởi luật pháp đã có từ trước khi Thẻ điểm Quản trị Công ty ASEAN ra đời vào năm 2011",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    },
                    {
                        "stt": "(P)E.2.2",
                        "content": "Có phải công ty đã không xác định chính xác mô tả của tất cả các giám đốc của họ là độc lập, không điều hành và điều hành?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    },
                    {
                        "stt": "(P)E.2.3",
                        "content": "Công ty có bất kỳ giám đốc / người không điều hành / ủy viên độc lập nào phục vụ trong tổng số hơn năm hội đồng quản trị của các công ty niêm yết công khai không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    }
                ]
            },
            {
                "id": "(P)E.3",
                "code": "(P)E.3",
                "title": "KIỂM TOÁN BÊN NGOÀI",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(P)E.3.1",
                        "content": "Có bất kỳ giám đốc hoặc quản lý cấp cao nào là nhân viên cũ hoặc đối tác của kiểm toán viên bên ngoài hiện tại (trong 2 năm qua) không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    }
                ]
            },
            {
                "id": "(P)E.4",
                "code": "(P)E.4",
                "title": "CẤU TRÚC VÀ THÀNH PHẦN HỘI ĐỒNG QUẢN TRỊ",
                "isOpen": false,
                "criteria": [
                    {
                        "stt": "(P)E.4.1",
                        "content": "Chủ tịch có phải là CEO của công ty trong ba năm qua không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    },
                    {
                        "stt": "(P)E.4.2",
                        "content": "Giám đốc / ủy viên không điều hành có nhận được quyền chọn, cổ phiếu hiệu suất hoặc tiền thưởng không?",
                        "maxScore": 0,
                        "result": "NO",
                        "selfScore": 0,
                        "explanation": null,
                        "evidences": []
                    }
                ]
            }
        ]
    }
];

// 4. Dữ liệu mặc định cho Accordion
var acgsDetailData = acgsLevel1Data;

// Gán toàn cục window
if (typeof window !== 'undefined') {
    window.acgsSummaryData = acgsSummaryData;
    window.acgsLevel1Data = acgsLevel1Data;
    window.acgsLevel2Data = acgsLevel2Data;
    window.acgsDetailData = acgsDetailData;
}
