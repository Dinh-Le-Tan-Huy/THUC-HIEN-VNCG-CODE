// 9. Dữ liệu chi tiết tiêu chí ACGS (Số lượng tiêu chí tự động tính theo cấp 2)
var acgsDetailData = [
    {
        id: "A",
        title: "A - QUYỀN CƠ BẢN CỦA CỔ ĐÔNG",
        isOpen: true,
        subGroups: [
            {
                id: "A.1",
                code: "A.1",
                title: "QUYỀN CƠ BẢN CỦA CỔ ĐÔNG",
                isOpen: true,
                criteria: [
                    {
                        stt: "A.1.1",
                        content: "Công ty có trả cổ tức (kỳ giữa và kỳ cuối hàng năm) một cách bình đẳng và kịp thời; nghĩa là, tất cả cổ đông được đối xử bình đẳng và được trả trong vòng 30 ngày sau khi được (i) công bố đối với cổ tức giữa kỳ và (ii) được cổ đông thông qua tại các đại hội cổ đông đối với cổ tức cuối năm? Trong trường hợp công ty công bố phương án chọn lựa chi trả cổ tức cổ phiếu (scrip dividend), công ty có trả cổ tức trong vòng 60 ngày kể từ ngày công bố hay không",
                        maxScore: 2,
                        result: "NO",
                        selfScore: 0,
                        explanation: {
                            highlight: "Kết luận: PV Drilling chưa đạt phần này",
                            items: [
                                "Có chính sách chi trả cổ tức",
                                "Có NQ của ĐHĐCĐ về chi trả cổ tức",
                                "BCTN có báo cáo chi tiết về kết quả chi trả cổ tức theo đúng quy định của pháp luật Việt Nam",
                                "Nhưng không đáp ứng số ngày thực hiện 30 ngày (tiền mặt) và 60 ngày (cổ phiếu)"
                            ]
                        },
                        evidences: [
                            { title: "Chính sách chi trả cổ tức", url: "#" },
                            { title: "BCTN 2025", url: "#" }
                        ]
                    },
                    {
                        stt: "A.1.2",
                        content: "Công ty có quy định quyền của cổ đông được tham gia và bỏ phiếu tại ĐHĐCĐ một cách đầy đủ và kịp thời theo quy định hay không?",
                        maxScore: 2,
                        result: "YES",
                        selfScore: 2,
                        explanation: {
                            highlight: "Kết luận: PV Drilling đã đạt phần này",
                            items: [
                                "Được quy định đầy đủ trong Điều lệ công ty",
                                "Thông báo họp ĐHĐCĐ được gửi trước 21 ngày kèm tài liệu biểu quyết"
                            ]
                        },
                        evidences: [
                            { title: "Điều lệ công ty", url: "#" },
                            { title: "Quy chế ĐHĐCĐ 2025", url: "#" }
                        ]
                    },
                    {
                        stt: "A.1.3",
                        content: "Cổ đông có quyền chất vấn các thành viên HĐQT và Ban điều hành tại ĐHĐCĐ và được trả lời thỏa đáng hay không?",
                        maxScore: 2,
                        result: "YES",
                        selfScore: 2,
                        explanation: {
                            highlight: "Kết luận: PV Drilling đã đạt phần này",
                            items: [
                                "Biên bản họp ĐHĐCĐ ghi nhận đầy đủ phiên thảo luận và giải đáp thắc mắc của cổ đông"
                            ]
                        },
                        evidences: [
                            { title: "Biên bản ĐHĐCĐ 2025", url: "#" }
                        ]
                    }
                ]
            },
            {
                id: "A.2",
                code: "A.2",
                title: "ĐỐI XỬ BÌNH ĐẲNG VỚI CÁC CỔ ĐÔNG",
                isOpen: false,
                criteria: [
                    {
                        stt: "A.2.1",
                        content: "Tất cả cổ đông nắm giữ cùng một loại cổ phần được hưởng quyền bình đẳng như nhau trong việc tiếp cận thông tin và biểu quyết?",
                        maxScore: 2,
                        result: "YES",
                        selfScore: 2,
                        explanation: {
                            highlight: "Kết luận: PV Drilling đã đạt phần này",
                            items: [
                                "Tuân thủ nghiêm ngặt nguyên tắc một cổ phần một phiếu biểu quyết"
                            ]
                        },
                        evidences: [
                            { title: "Điều lệ công ty", url: "#" }
                        ]
                    }
                ]
            },
            {
                id: "A.3",
                code: "A.3",
                title: "QUY TRÌNH BIỂU QUYẾT TẠI ĐẠI HỘI ĐỒNG CỔ ĐÔNG",
                isOpen: false,
                criteria: [
                    {
                        stt: "A.3.1",
                        content: "Công ty có cho phép cổ đông bỏ phiếu từ xa hoặc bỏ phiếu điện tử tại các kỳ ĐHĐCĐ hay không?",
                        maxScore: 2,
                        result: "YES",
                        selfScore: 2,
                        explanation: {
                            highlight: "Kết luận: PV Drilling đã đạt phần này",
                            items: [
                                "Hệ thống E-voting đã được triển khai hiệu quả từ kỳ họp năm 2023"
                            ]
                        },
                        evidences: [
                            { title: "Quy chế họp ĐHĐCĐ trực tuyến", url: "#" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "B",
        title: "B - VAI TRÒ CỦA CÁC BÊN CÓ QUYỀN LỢI LIÊN QUAN",
        isOpen: false,
        subGroups: [
            {
                id: "B.1",
                code: "B.1",
                title: "QUYỀN LỢI CỦA CÁC BÊN LIÊN QUAN ĐƯỢC PHÁP LUẬT BẢO VỆ",
                isOpen: false,
                criteria: [
                    {
                        stt: "B.1.1",
                        content: "Công ty có chính sách rõ ràng về việc bảo vệ quyền lợi của các bên liên quan (khách hàng, nhà cung cấp, người lao động, cộng đồng)?",
                        maxScore: 2,
                        result: "YES",
                        selfScore: 2,
                        explanation: {
                            highlight: "Kết luận: PV Drilling đã đạt phần này",
                            items: [
                                "Có quy chế ứng xử và chính sách nhân sự công khai trên website"
                            ]
                        },
                        evidences: [
                            { title: "Quy chế ứng xử nội bộ", url: "#" }
                        ]
                    }
                ]
            },
            {
                id: "B.2",
                code: "B.2",
                title: "CƠ CHẾ GIẢI QUYẾT TRANH CHẤP VÀ KHIẾU NẠI",
                isOpen: false,
                criteria: [
                    {
                        stt: "B.2.1",
                        content: "Công ty có kênh tiếp nhận và xử lý khiếu nại minh bạch cho các bên liên quan không?",
                        maxScore: 2,
                        result: "YES",
                        selfScore: 2,
                        explanation: {
                            highlight: "Kết luận: PV Drilling đã đạt phần này",
                            items: [
                                "Đường dây nóng và email kiểm toán nội bộ hoạt động 24/7"
                            ]
                        },
                        evidences: [
                            { title: "Chính sách bảo vệ người tố giác", url: "#" }
                        ]
                    }
                ]
            },
            {
                id: "B.3",
                code: "B.3",
                title: "PHÁT TRIỂN BỀN VỮNG VÀ BẢO VỆ MÔI TRƯỜNG",
                isOpen: false,
                criteria: [
                    {
                        stt: "B.3.1",
                        content: "Công ty có công bố báo cáo phát triển bền vững (ESG) độc lập hoặc trong Báo cáo thường niên?",
                        maxScore: 2,
                        result: "YES",
                        selfScore: 2,
                        explanation: {
                            highlight: "Kết luận: PV Drilling đã đạt phần này",
                            items: [
                                "Báo cáo ESG tuân thủ chuẩn GRI Standards"
                            ]
                        },
                        evidences: [
                            { title: "Báo cáo ESG 2025", url: "#" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "C",
        title: "C - CÔNG BỐ THÔNG TIN VÀ MINH BẠCH",
        isOpen: false,
        subGroups: [
            {
                id: "C.1",
                code: "C.1",
                title: "MINH BẠCH BÁO CÁO TÀI CHÍNH VÀ HOẠT ĐỘNG",
                isOpen: false,
                criteria: [
                    {
                        stt: "C.1.1",
                        content: "Báo cáo tài chính năm được kiểm toán bởi công ty kiểm toán độc lập có uy tín và phát hành đúng thời hạn quy định?",
                        maxScore: 2,
                        result: "YES",
                        selfScore: 2,
                        explanation: {
                            highlight: "Kết luận: PV Drilling đã đạt phần này",
                            items: [
                                "BCTC kiểm toán bởi Big 4 và công bố đầy đủ song ngữ Việt - Anh"
                            ]
                        },
                        evidences: [
                            { title: "BCTC kiểm toán 2025", url: "#" }
                        ]
                    }
                ]
            },
            {
                id: "C.2",
                code: "C.2",
                title: "CÔNG BỐ THÔNG TIN KỊP THỜI VÀ BÌNH ĐẲNG",
                isOpen: false,
                criteria: [
                    {
                        stt: "C.2.1",
                        content: "Các thông tin trọng yếu được công bố đồng thời trên website và hệ thống CBTT của UBCKNN?",
                        maxScore: 2,
                        result: "YES",
                        selfScore: 2,
                        explanation: {
                            highlight: "Kết luận: PV Drilling đã đạt phần này",
                            items: [
                                "Tuân thủ đúng Thông tư 96/2020/TT-BTC về công bố thông tin"
                            ]
                        },
                        evidences: [
                            { title: "Quy chế công bố thông tin", url: "#" }
                        ]
                    }
                ]
            },
            {
                id: "C.3",
                code: "C.3",
                title: "GIAO DỊCH VỚI BÊN LIÊN QUAN",
                isOpen: false,
                criteria: [
                    {
                        stt: "C.3.1",
                        content: "Tất cả các giao dịch với bên liên quan được trình HĐQT/ĐHĐCĐ thông qua theo thẩm quyền và công bố đầy đủ?",
                        maxScore: 2,
                        result: "YES",
                        selfScore: 2,
                        explanation: {
                            highlight: "Kết luận: PV Drilling đã đạt phần này",
                            items: [
                                "Công bố minh bạch tại phụ lục BCTC và báo cáo tình hình quản trị công ty"
                            ]
                        },
                        evidences: [
                            { title: "Báo cáo quản trị 2025", url: "#" }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "D",
        title: "D - TRÁCH NHIỆM CỦA HĐQT",
        isOpen: false,
        subGroups: [
            {
                id: "D.1",
                code: "D.1",
                title: "CƠ CẤU VÀ TRÁCH NHIỆM CỦA HỘI ĐỒNG QUẢN TRỊ",
                isOpen: false,
                criteria: [
                    {
                        stt: "D.1.1",
                        content: "HĐQT có quy chế hoạt động rõ ràng, thành phần độc lập đáp ứng tỷ lệ tối thiểu theo quy định?",
                        maxScore: 2,
                        result: "YES",
                        selfScore: 2,
                        explanation: {
                            highlight: "Kết luận: PV Drilling đã đạt phần này",
                            items: [
                                "Tỷ lệ thành viên HĐQT độc lập đạt trên 33%"
                            ]
                        },
                        evidences: [
                            { title: "Quy chế hoạt động HĐQT", url: "#" }
                        ]
                    }
                ]
            },
            {
                id: "D.2",
                code: "D.2",
                title: "HOẠT ĐỘNG CỦA CÁC ỦY BAN TRỰC THUỘC",
                isOpen: false,
                criteria: [
                    {
                        stt: "D.2.1",
                        content: "HĐQT đã thành lập Ủy ban Kiểm toán độc lập và hoạt động hiệu quả?",
                        maxScore: 2,
                        result: "YES",
                        selfScore: 2,
                        explanation: {
                            highlight: "Kết luận: PV Drilling đã đạt phần này",
                            items: [
                                "Ủy ban Kiểm toán gồm các thành viên độc lập có chuyên môn tài chính"
                            ]
                        },
                        evidences: [
                            { title: "Quy chế hoạt động UBKT", url: "#" }
                        ]
                    }
                ]
            }
        ]
    }
];

if (typeof window !== "undefined") {
    window.acgsDetailData = acgsDetailData;
}