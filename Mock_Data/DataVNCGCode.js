/**
 * ==============================================================================
 * DỮ LIỆU TIÊU CHÍ VNCG CODE (MÔI TRƯỜNG QUẢN TRỊ CÔNG TY VIỆT NAM)
 * File: Mock_Data/DataVNCGCode.js
 * Cấu trúc phân cấp 3 cấp chuẩn:
 * - Cấp 1: PHẦN (Phần 1, Phần 2, Phần 3, Phần 4, Phần 5)
 * - Cấp 1.5: NGUYÊN TẮC (Nguyên tắc 1...)
 * - Cấp 2: ĐỀ MỤC TIÊU CHÍ (1.1, 1.2, 1.3...)
 * - Cấp 3: TIÊU CHÍ CHI TIẾT (1.1.1, 1.1.2, 1.1.3, 1.1.4...)
 * ==============================================================================
 */

var vncgCodeDetailData = [
    {
        id: "PHAN_1",
        title: "PHẦN 1: TRÁCH NHIỆM CỦA HỘI ĐỒNG QUẢN TRỊ",
        isOpen: true,
        badge: "3 tiêu chí",
        principles: [
            {
                id: "NT_1",
                title: "NGUYÊN TẮC 1: THIẾT LẬP RÕ VAI TRÒ, TRÁCH NHIỆM, VÀ CAM KẾT CỦA HỘI ĐỒNG QUẢN TRỊ",
                isOpen: true,
                badge: "3 tiêu chí",
                subGroups: [
                    {
                        id: "1.1",
                        code: "1.1",
                        title: "HĐQT cần phải xác định rõ ràng và công bố toàn bộ vai trò, trách nhiệm và trách nhiệm giải trình của mình.",
                        isOpen: true,
                        criteria: [
                            {
                                stt: "1.1.1",
                                content: "Quy chế hoạt động của HĐQT cần được ĐHĐCĐ thông qua và công bố công khai trên website của công ty.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "Quy chế hoạt động của HĐQT đã được ĐHĐCĐ thường niên 2026 thông qua ngày 21/04/2026 và được công bố trên website của PV Drilling.",
                                evidences: [
                                    { title: "Quy chế hoạt động của HĐQT", url: "#" }
                                ]
                            },
                            {
                                stt: "1.1.2",
                                content: "HĐQT cần phải xác định rõ vai trò, trách nhiệm và trách nhiệm giải trình của HĐQT, các ủy ban trực thuộc HĐQT, từng thành viên HĐQT liên quan đến vai trò, trách nhiệm và trách nhiệm giải trình của Ban điều hành. Những loại vấn đề và quyết định cần được HĐQT thông qua phải được quy định rõ ràng.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: [
                                    "- Điều 21, Điều 22, Điều 23, Điều 27 Điều lệ PV Drilling quy định rõ chức năng nhiệm vụ của HĐQT và thành viên HĐQT, TGĐ.",
                                    "- Điều 2, Điều 3, Điều 4 Quy chế hoạt động của HĐQT nêu rõ chức năng, nhiệm vụ của HĐQT và thành viên HĐQT.",
                                    "- Vai trò, trách nhiệm của các UB trực thuộc HĐQT được quy định rõ ràng tại Quy chế tổ chức và hoạt động của các UB",
                                    "Các văn bản này được công khai trên website PV Drilling tại mục Điều lệ - Quy chế"
                                ],
                                evidences: [
                                    { title: "Điều lệ, quy chế", url: "#" }
                                ]
                            },
                            {
                                stt: "1.1.3",
                                content: "HĐQT có trách nhiệm bảo đảm tính trung thực của hệ thống báo cáo và kế toán của công ty, bao gồm kiểm toán độc lập và bảo đảm có các hệ thống kiểm soát nội bộ phù hợp, tuân thủ luật pháp và các tiêu chuẩn liên quan.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: [
                                    "Thông qua Ủy ban Kiểm toán, HĐQT đã thực hiện giám sát thường xuyên đối với tình trung thực của hệ thống báo cáo tài chính và kế toán của PV Drilling:",
                                    "Điều 6, Quy chế tổ chức và hoạt động của UB Kiểm toán có quy định trách nhiệm của UB Kiểm toán bao gồm \"Giám sát tính độc lập, khách quan của kiểm toán nội bộ/kiểm toán độc lập, chất lượng hoạt động kiểm toán nội bộ và hiệu quả của quy trình kiểm toán nội bộ\" (Khoản 5) và \"Giám sát và đánh giá tính trung thực của hệ thống báo cáo tài chính đảm bảo tuân thủ các yêu cầu của pháp luật và Điều lệ PV Drilling\" (Khoản 10)"
                                ],
                                evidences: [
                                    { title: "Quy chế tổ chức và hoạt động của UB kiểm toán", url: "#" }
                                ]
                            },
                            {
                                stt: "1.1.4",
                                content: "HĐQT có trách nhiệm giám sát quá trình công bố thông tin và truyền thông của công ty. HĐQT cần thiết lập rõ ràng chức năng và trách nhiệm của HĐQT và Ban điều hành liên quan đến công bố thông tin và truyền thông.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "HĐQT PV Drilling đã ban hành Quy chế công bố thông tin để chuẩn hóa việc CBTT, quy định rõ nguyên tắc/hình thức CBTT; chức năng, nhiệm vụ của cá nhân, bộ phận chịu trách nhiệm đối với từng loại thông tin công bố.",
                                evidences: [
                                    { title: "Quy chế công bố thông tin", url: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "1.2",
                        code: "1.2",
                        title: "HĐQT cần thiết lập cơ cấu thành viên đa dạng, cân bằng về kỹ năng, kinh nghiệm và tính độc lập.",
                        isOpen: false,
                        criteria: [
                            {
                                stt: "1.2.1",
                                content: "Tỷ lệ thành viên HĐQT độc lập đáp ứng đúng quy định pháp luật và thông lệ quản trị tốt (tối thiểu 1/3 tổng số thành viên).",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "PV Drilling duy trì 3/7 thành viên HĐQT độc lập, đáp ứng quy định của Luật Doanh nghiệp và Thông lệ VNCG Code.",
                                evidences: [
                                    { title: "Báo cáo thường niên 2025", url: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "1.3",
                        code: "1.3",
                        title: "HĐQT thành lập các ủy ban chuyên trách trực thuộc để hỗ trợ hiệu quả công tác quản trị.",
                        isOpen: false,
                        criteria: [
                            {
                                stt: "1.3.1",
                                content: "HĐQT đã thành lập Ủy ban Kiểm toán, Ủy ban Nhân sự & Lương thưởng với quy chế hoạt động độc lập.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "Các ủy ban trực thuộc HĐQT hoạt động theo đúng chức năng và định kỳ báo cáo HĐQT tại các phiên họp thường kỳ.",
                                evidences: [
                                    { title: "Quy chế hoạt động các Ủy ban", url: "#" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "PHAN_2",
        title: "PHẦN 2: MÔI TRƯỜNG KIỂM SOÁT",
        isOpen: false,
        badge: "3 tiêu chí",
        principles: [
            {
                id: "NT_2",
                title: "NGUYÊN TẮC 2: THIẾT LẬP HỆ THỐNG QUẢN TRỊ RỦI RO VÀ KIỂM SOÁT NỘI BỘ HIỆU QUẢ",
                isOpen: false,
                badge: "3 tiêu chí",
                subGroups: [
                    {
                        id: "2.1",
                        code: "2.1",
                        title: "HĐQT chịu trách nhiệm tối cao về việc thiết lập hệ thống kiểm soát nội bộ và quản trị rủi ro toàn diện.",
                        isOpen: false,
                        criteria: [
                            {
                                stt: "2.1.1",
                                content: "Công ty có khung quản trị rủi ro doanh nghiệp (ERM) áp dụng theo chuẩn quốc tế COSO.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "Khung quản trị rủi ro ERM được rà soát định kỳ hàng năm và tích hợp vào quy trình vận hành khoan.",
                                evidences: [
                                    { title: "Khung quản trị rủi ro ERM", url: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "2.2",
                        code: "2.2",
                        title: "Bộ phận Kiểm toán nội bộ hoạt động độc lập và trực thuộc Ủy ban Kiểm toán.",
                        isOpen: false,
                        criteria: [
                            {
                                stt: "2.2.1",
                                content: "Kiểm toán nội bộ có thẩm quyền tiếp cận đầy đủ hồ sơ tài liệu và báo cáo trực tiếp cho UBKT.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "Kiểm toán nội bộ thực hiện kiểm toán độc lập theo kế hoạch kiểm toán được phê duyệt hàng năm.",
                                evidences: [
                                    { title: "Quy chế kiểm toán nội bộ", url: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "2.3",
                        code: "2.3",
                        title: "Cơ chế bảo vệ người tố giác và tiếp nhận phản ánh vi phạm đạo đức kinh doanh.",
                        isOpen: false,
                        criteria: [
                            {
                                stt: "2.3.1",
                                content: "Có kênh tiếp nhận thông tin tố giác bảo mật và chính sách bảo vệ người tố giác không bị trả thù.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "Kênh Whistleblowing hoạt động 24/7 bảo mật thông tin tuyệt đối cho người phản ánh.",
                                evidences: [
                                    { title: "Chính sách tố giác sai phạm", url: "#" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "PHAN_3",
        title: "PHẦN 3: CÔNG BỐ THÔNG TIN VÀ MINH BẠCH",
        isOpen: false,
        badge: "3 tiêu chí",
        principles: [
            {
                id: "NT_3",
                title: "NGUYÊN TẮC 3: CÔNG BỐ THÔNG TIN KỊP THỜI, BÌNH ĐẲNG VÀ ĐẦY ĐỦ",
                isOpen: false,
                badge: "3 tiêu chí",
                subGroups: [
                    {
                        id: "3.1",
                        code: "3.1",
                        title: "Báo cáo tài chính được kiểm toán độc lập bởi hãng kiểm toán uy tín và phát hành đúng thời hạn.",
                        isOpen: false,
                        criteria: [
                            {
                                stt: "3.1.1",
                                content: "Báo cáo tài chính quý, bán niên và năm được công bố đúng hạn song ngữ Việt - Anh.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "Toàn bộ BCTC được công bố đồng thời trên website và cổng thông tin UBCKNN/SGDCK.",
                                evidences: [
                                    { title: "BCTC kiểm toán 2025", url: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "3.2",
                        code: "3.2",
                        title: "Công bố minh bạch các giao dịch với bên liên quan và quyền lợi của người nội bộ.",
                        isOpen: false,
                        criteria: [
                            {
                                stt: "3.2.1",
                                content: "Mọi giao dịch với bên liên quan đều được phê duyệt đúng thẩm quyền và thuyết minh chi tiết.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "Công bố minh bạch trong BCTC kiểm toán và Báo cáo tình hình quản trị định kỳ.",
                                evidences: [
                                    { title: "Báo cáo quản trị công ty 2025", url: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "3.3",
                        code: "3.3",
                        title: "Website công ty duy trì chuyên trang Quan hệ Cổ đông (IR) cập nhật thường xuyên.",
                        isOpen: false,
                        criteria: [
                            {
                                stt: "3.3.1",
                                content: "Website có đầy đủ tài liệu ĐHĐCĐ, BCTN, tin tức hoạt động và thông tin liên hệ IR.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "Chuyên mục IR hoạt động liên tục, cung cấp tài liệu song ngữ cho nhà đầu tư trong và ngoài nước.",
                                evidences: [
                                    { title: "Chuyên trang IR PV Drilling", url: "#" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "PHAN_4",
        title: "PHẦN 4: QUYỀN CỦA CỔ ĐÔNG",
        isOpen: false,
        badge: "3 tiêu chí",
        principles: [
            {
                id: "NT_4",
                title: "NGUYÊN TẮC 4: BẢO ĐẢM ĐỐI XỬ BÌNH ĐẲNG VÀ BẢO VỆ CÁC QUYỀN CƠ BẢN CỦA CỔ ĐÔNG",
                isOpen: false,
                badge: "3 tiêu chí",
                subGroups: [
                    {
                        id: "4.1",
                        code: "4.1",
                        title: "Bảo đảm quyền tham gia, thảo luận và bỏ phiếu của cổ đông tại ĐHĐCĐ.",
                        isOpen: false,
                        criteria: [
                            {
                                stt: "4.1.1",
                                content: "Tài liệu và thông báo mời họp ĐHĐCĐ được gửi tới cổ đông trước ngày khai mạc theo đúng luật định.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "Thông báo mời họp và toàn bộ tờ trình được đăng tải trước 21 ngày kèm biểu mẫu ủy quyền.",
                                evidences: [
                                    { title: "Thông báo mời họp ĐHĐCĐ 2025", url: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "4.2",
                        code: "4.2",
                        title: "Áp dụng công nghệ bỏ phiếu điện tử (E-voting) để tạo thuận lợi tối đa cho cổ đông tham dự từ xa.",
                        isOpen: false,
                        criteria: [
                            {
                                stt: "4.2.1",
                                content: "Công ty tổ chức ĐHĐCĐ kết hợp trực tiếp và trực tuyến, cho phép cổ đông biểu quyết điện tử.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "Hệ thống E-voting hiện đại, xác thực an toàn giúp tỷ lệ cổ đông tham gia bỏ phiếu đạt trên 85%.",
                                evidences: [
                                    { title: "Quy chế bỏ phiếu điện tử", url: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "4.3",
                        code: "4.3",
                        title: "Chính sách chi trả cổ tức công bằng, minh bạch và kịp thời.",
                        isOpen: false,
                        criteria: [
                            {
                                stt: "4.3.1",
                                content: "Cổ tức được thanh toán đầy đủ cho cổ đông đúng thời hạn đã được ĐHĐCĐ thông qua.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "Chi trả cổ tức đúng danh sách chốt của VSDC và hoàn thành nghĩa vụ thanh toán theo nghị quyết.",
                                evidences: [
                                    { title: "Nghị quyết ĐHĐCĐ về phân phối lợi nhuận", url: "#" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    },
    {
        id: "PHAN_5",
        title: "PHẦN 5: PHÁT TRIỂN BỀN VỮNG VÀ VAI TRÒ CỦA SỰ THAM GIA CỦA CÁC BÊN CÓ QUYỀN LỢI LIÊN QUAN",
        isOpen: false,
        badge: "3 tiêu chí",
        principles: [
            {
                id: "NT_5",
                title: "NGUYÊN TẮC 5: GẮN KẾT VÀ TÔN TRỌNG QUYỀN LỢI CỦA CÁC BÊN LIÊN QUAN VÌ SỰ PHÁT TRIỂN BỀN VỮNG",
                isOpen: false,
                badge: "3 tiêu chí",
                subGroups: [
                    {
                        id: "5.1",
                        code: "5.1",
                        title: "Công ty có chiến lược phát triển bền vững và lập Báo cáo Môi trường - Xã hội - Quản trị (ESG).",
                        isOpen: false,
                        criteria: [
                            {
                                stt: "5.1.1",
                                content: "Công bố định kỳ Báo cáo phát triển bền vững ESG độc lập theo khung tiêu chuẩn quốc tế GRI.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "Báo cáo ESG trình bày chi tiết các chỉ số an toàn lao động QHSE, giảm phát thải và quản trị nguồn nhân lực.",
                                evidences: [
                                    { title: "Báo cáo ESG & Phát triển bền vững 2025", url: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "5.2",
                        code: "5.2",
                        title: "Bảo đảm môi trường làm việc an toàn, bình đẳng và chính sách đãi ngộ người lao động.",
                        isOpen: false,
                        criteria: [
                            {
                                stt: "5.2.1",
                                content: "Thỏa ước lao động tập thể và các chính sách đào tạo, phúc lợi được thực thi nghiêm túc.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "Đạt thành tích nhiều năm liền không để xảy ra tai nạn sự cố mất thời gian lao động (Zero LTI).",
                                evidences: [
                                    { title: "Báo cáo thành tích an toàn QHSE", url: "#" }
                                ]
                            }
                        ]
                    },
                    {
                        id: "5.3",
                        code: "5.3",
                        title: "Trách nhiệm xã hội cộng đồng (CSR) và đạo đức kinh doanh liêm chính.",
                        isOpen: false,
                        criteria: [
                            {
                                stt: "5.3.1",
                                content: "Tích cực đóng góp cho các hoạt động an sinh xã hội, tài trợ y tế, giáo dục tại địa phương.",
                                status: "TUÂN THỦ",
                                isCompliant: true,
                                explanation: "PV Drilling duy trì thường niên các chương trình an sinh xã hội ý nghĩa vì cộng đồng.",
                                evidences: [
                                    { title: "Báo cáo hoạt động an sinh xã hội 2025", url: "#" }
                                ]
                            }
                        ]
                    }
                ]
            }
        ]
    }
];

// Gán biến toàn cục để các script khác sử dụng
if (typeof window !== "undefined") {
    window.vncgCodeDetailData = vncgCodeDetailData;
    window.vncgDetailData = vncgCodeDetailData;
    window.acgsDetailData = vncgCodeDetailData; // Tương thích ngược với các hàm gọi cũ
}