/* Dữ liệu bài tập. Khóa = môn-lớp-idBài (trùng với lessons.js), ví dụ 'math-10-logic'.
   Mỗi bài tập gồm: ref (nguồn, hiện dưới tiêu đề), q (đề tiếng Anh), qv (đề tiếng Việt).
   Có thể đánh dấu thuật ngữ bằng {English|Tiếng Việt}.
   Lời giải KHÔNG để ở đây: nó nằm trong bảng exercise_solutions của Supabase với khóa 'môn-lớp-idBài-số thứ tự'
   (ví dụ 'math-10-logic-1'), chỉ tài khoản gói trả phí đọc được. Xem supabase_exercises.sql. */
const EXERCISES = {
  "math-10-logic": [
    {
      "ref": "SGK Toán 10 · Bài tập 1.1",
      "q": "Which of the following sentences are statements (propositions)? (a) China is the most populous country in the world. (b) Which school do you attend? (c) No private work is allowed during class time. (d) I will hit the crossbar with my shot.",
      "qv": "Trong các câu sau, câu nào là mệnh đề? (a) Trung Quốc là nước đông dân nhất thế giới. (b) Bạn học trường nào? (c) Không được làm việc riêng trong giờ học. (d) Tôi sẽ sút bóng trúng xà ngang."
    },
    {
      "ref": "SGK Toán 10 · Bài tập 1.2",
      "q": "Decide whether each statement is true or false: (a) π > 10/3; (b) the equation 3x + 7 = 0 has a solution; (c) there is at least one number that equals 0 when added to itself; (d) 2022 is a composite number.",
      "qv": "Xác định tính đúng sai của mỗi mệnh đề sau: (a) π > 10/3; (b) phương trình 3x + 7 = 0 có nghiệm; (c) có ít nhất một số mà cộng với chính nó bằng 0; (d) 2022 là hợp số."
    },
    {
      "ref": "SGK Toán 10 · Bài tập 1.3",
      "q": "Consider two sentences. P: “Triangle ABC is a right triangle.” Q: “Triangle ABC has an angle equal to the sum of the other two angles.” State the equivalence P ⇔ Q and decide whether it is true or false.",
      "qv": "Cho hai câu sau. P: “Tam giác ABC là tam giác vuông.” Q: “Tam giác ABC có một góc bằng tổng hai góc còn lại.” Hãy phát biểu mệnh đề tương đương P ⇔ Q và xét tính đúng sai của mệnh đề này."
    },
    {
      "ref": "SGK Toán 10 · Bài tập 1.4",
      "q": "Write the converse of each implication and decide whether the implication and its converse are true. P: “If a natural number n ends in the digit 5, then n is divisible by 5.” Q: “If a quadrilateral ABCD is a rectangle, then its two diagonals are equal.”",
      "qv": "Phát biểu mệnh đề đảo của mỗi mệnh đề kéo theo sau và xét tính đúng sai của mệnh đề đã cho và mệnh đề đảo. P: “Nếu số tự nhiên n có chữ số tận cùng là 5 thì n chia hết cho 5.” Q: “Nếu tứ giác ABCD là hình chữ nhật thì hai đường chéo của nó bằng nhau.”"
    },
    {
      "ref": "SGK Toán 10 · Bài tập 1.5",
      "q": "For real numbers a and b, let P be “a² < b²” and Q be “0 < a < b”. (a) State the implication P ⇒ Q. (b) State the converse of the implication in (a). (c) Decide whether each of the two implications is true or false.",
      "qv": "Với hai số thực a và b, xét P: “a² < b²” và Q: “0 < a < b”. (a) Phát biểu mệnh đề P ⇒ Q. (b) Phát biểu mệnh đề đảo của mệnh đề ở câu (a). (c) Xét tính đúng sai của hai mệnh đề đó."
    },
    {
      "ref": "SGK Toán 10 · Bài tập 1.6",
      "q": "Decide whether the statement Q: “∃n ∈ ℕ, n is divisible by n + 1” is true or false, and write its negation. (Here ℕ = {0, 1, 2, …}.)",
      "qv": "Xác định tính đúng sai của mệnh đề Q: “∃n ∈ ℕ, n chia hết cho n + 1” và tìm mệnh đề phủ định của nó. (Ở đây ℕ = {0; 1; 2; …}.)"
    },
    {
      "ref": "SGK Toán 10 · Bài tập 1.7",
      "q": "Use the symbols ∀ and ∃ to write the following statements. P: “Every natural number has a square greater than or equal to itself.” Q: “There is a real number that equals 0 when added to itself.”",
      "qv": "Dùng kí hiệu ∀, ∃ để viết các mệnh đề sau. P: “Mọi số tự nhiên đều có bình phương lớn hơn hoặc bằng chính nó.” Q: “Có một số thực cộng với chính nó bằng 0.”"
    }
  ],
  "math-10-sets": [
    {
      "ref": "SGK Toán 10 · Bài tập 1.12",
      "q": "Let X = {a; b}. Decide whether each of the following is correct or incorrect, and explain: (a) a ⊂ X; (b) {a} ⊂ X; (c) ∅ ∈ X.",
      "qv": "Cho X = {a; b}. Các cách viết sau đúng hay sai? Giải thích: (a) a ⊂ X; (b) {a} ⊂ X; (c) ∅ ∈ X."
    },
    {
      "ref": "SGK Toán 10 · Bài tập 1.14",
      "q": "Let A be the set of integers whose absolute value is less than 4, and let B = {x ∈ ℤ : (5x − 3x²)(x² + 2x − 3) = 0}. (a) List the elements of A and B. (b) Find A ∩ B, A ∪ B and A \\ B.",
      "qv": "Cho A là tập hợp các số nguyên có giá trị tuyệt đối nhỏ hơn 4 và B = {x ∈ ℤ : (5x − 3x²)(x² + 2x − 3) = 0}. (a) Liệt kê các phần tử của A và B. (b) Xác định A ∩ B, A ∪ B và A \\ B."
    },
    {
      "ref": "SGK Toán 10 · Bài tập 1.15",
      "q": "Determine each of the following sets and show them on the number line: (a) (−4; 1] ∩ [0; 3); (b) (0; 2] ∪ (−3; 1]; (c) (−2; 1] ∩ (1; +∞); (d) ℝ \\ (−∞; 3].",
      "qv": "Xác định các tập hợp sau và biểu diễn chúng trên trục số: (a) (−4; 1] ∩ [0; 3); (b) (0; 2] ∪ (−3; 1]; (c) (−2; 1] ∩ (1; +∞); (d) ℝ \\ (−∞; 3]."
    },
    {
      "ref": "SGK Toán 10 · Bài tập 1.16",
      "q": "For an international conference, the organisers recruit 35 English interpreters and 30 French interpreters, including 16 people who can interpret both English and French. (a) How many interpreters were recruited in total? (b) How many can interpret only English? (c) How many can interpret only French?",
      "qv": "Để phục vụ một hội nghị quốc tế, ban tổ chức huy động 35 người phiên dịch tiếng Anh và 30 người phiên dịch tiếng Pháp, trong đó có 16 người phiên dịch được cả hai thứ tiếng. (a) Ban tổ chức đã huy động tất cả bao nhiêu người phiên dịch? (b) Có bao nhiêu người chỉ phiên dịch được tiếng Anh? (c) Có bao nhiêu người chỉ phiên dịch được tiếng Pháp?"
    }
  ],
  "math-10-ineq": [
    {
      "ref": "SGK Toán 10 · Bài tập 2.1",
      "q": "Which of the following are linear inequalities in two variables? (a) 2x + 3y > 6; (b) 2²x + y ≤ 0; (c) 2x² − y ≥ 1.",
      "qv": "Bất phương trình nào sau đây là bất phương trình bậc nhất hai ẩn? (a) 2x + 3y > 6; (b) 2²x + y ≤ 0; (c) 2x² − y ≥ 1."
    },
    {
      "ref": "SGK Toán 10 · Bài tập 2.2",
      "q": "Show the solution region of each inequality on the coordinate plane: (a) 3x + 2y ≥ 300; (b) 7x + 20y < 0.",
      "qv": "Biểu diễn miền nghiệm của mỗi bất phương trình sau trên mặt phẳng tọa độ: (a) 3x + 2y ≥ 300; (b) 7x + 20y < 0."
    },
    {
      "ref": "SGK Toán 10 · Bài tập 2.3",
      "q": "Mr An wants to rent a car (with a driver) for one week. From Monday to Friday the rental costs a fixed 900 thousand VND per day plus 8 thousand VND per kilometre; on Saturday and Sunday it costs a fixed 1,500 thousand VND per day plus 10 thousand VND per kilometre. (a) Let x be the distance (km) driven from Monday to Friday and y the distance driven on the weekend. Write an inequality in x and y saying that Mr An pays at most 14 million VND in total. (b) Show the solution region of the inequality from (a) on the coordinate plane.",
      "qv": "Ông An muốn thuê một chiếc ô tô (có lái xe) trong một tuần. Từ thứ Hai đến thứ Sáu, phí thuê gồm phí cố định 900 nghìn đồng mỗi ngày cộng 8 nghìn đồng cho mỗi kilômét; vào thứ Bảy và Chủ nhật, phí gồm phí cố định 1 500 nghìn đồng mỗi ngày cộng 10 nghìn đồng cho mỗi kilômét. (a) Gọi x là số kilômét ông An đi từ thứ Hai đến thứ Sáu và y là số kilômét đi vào cuối tuần. Viết bất phương trình biểu thị mối liên hệ giữa x và y sao cho tổng số tiền ông An phải trả không quá 14 triệu đồng. (b) Biểu diễn miền nghiệm của bất phương trình ở câu (a) trên mặt phẳng tọa độ."
    }
  ],
  "physics-10-intro": [
    {
      "ref": "SGK Vật lí 10 · Bài 1 (câu hỏi trong bài)",
      "q": "Give two advantages of using an electric motor instead of a steam engine.",
      "qv": "Hãy nêu hai ưu điểm của việc dùng động cơ điện so với dùng máy hơi nước."
    },
    {
      "ref": "SGK Vật lí 10 · Bài 1 (câu hỏi về Hình 1.9)",
      "q": "Two mathematical models of a moving object are shown: (a) a graph of distance s against time t that is a straight line through the origin; (b) a graph of velocity v against time t that is a horizontal line. What kind of motion do these models describe?",
      "qv": "Có hai mô hình toán học mô tả chuyển động của một vật: (a) đồ thị quãng đường s theo thời gian t là một đường thẳng đi qua gốc tọa độ; (b) đồ thị vận tốc v theo thời gian t là một đường thẳng nằm ngang. Các mô hình này mô tả loại chuyển động nào?"
    },
    {
      "ref": "SGK Vật lí 10 · Bài 1 (câu hỏi về mô hình)",
      "q": "Give one example of a physical model and one example of a theoretical model that is used in physics.",
      "qv": "Hãy nêu một ví dụ về mô hình vật chất và một ví dụ về mô hình lí thuyết được dùng trong vật lí."
    },
    {
      "ref": "SGK Vật lí 10 · Bài 1 (mục “Em có thể”)",
      "q": "Predict how the rate of evaporation of water depends on the water temperature and on the wind blowing over the surface. Then plan an experiment to test your prediction.",
      "qv": "Hãy dự đoán tốc độ bay hơi của nước phụ thuộc như thế nào vào nhiệt độ của nước và vào gió thổi qua mặt nước. Sau đó lập phương án thí nghiệm để kiểm tra dự đoán."
    }
  ],
  "physics-10-safety": [
    {
      "ref": "SGK Vật lí 10 · Bài 2 (hoạt động về Hình 2.4)",
      "q": "Five lab actions are shown: (a) plugging a plug into a socket, (b) pulling a plug out by its cable, (c) using a cable with damaged insulation, (d) pointing a laser beam, (e) heating water over an alcohol burner. Predict one possible hazard for each.",
      "qv": "Có năm thao tác trong phòng thực hành: (a) cắm phích điện vào ổ, (b) rút phích điện bằng cách kéo dây, (c) dùng dây điện bị sờn vỏ cách điện, (d) chiếu chùm tia laser, (e) đun nước trên đèn cồn. Hãy dự đoán một nguy cơ có thể xảy ra ở mỗi thao tác."
    },
    {
      "ref": "SGK Vật lí 10 · Bài 2 (câu hỏi về Hình 2.5)",
      "q": "An ammeter has two terminals marked 0.6 A and 3 A. (a) What are its measuring limits? (b) What can happen if it is used to measure a current larger than its limit?",
      "qv": "Một ampe kế có hai chốt cắm ghi 0,6 A và 3 A. (a) Giới hạn đo của nó là bao nhiêu? (b) Điều gì có thể xảy ra nếu dùng nó để đo dòng điện lớn hơn giới hạn đo?"
    },
    {
      "ref": "SGK Vật lí 10 · Bài 2 (mục “Em có thể”)",
      "q": "Explain why: (1) a measuring device must always be set to a suitable range; (2) when a transformer power supply is used, the output voltage must first be set to its lowest level and then raised step by step.",
      "qv": "Giải thích vì sao: (1) khi dùng thiết bị đo điện, phải luôn đặt ở thang đo phù hợp; (2) khi dùng máy biến áp nguồn, phải đặt hiệu điện thế đầu ra ở mức thấp nhất rồi mới tăng dần."
    },
    {
      "ref": "SGK Vật lí 10 · Bài 2 (hoạt động về Hình 2.7)",
      "q": "Three lab situations are shown: (a) electrical clips placed very close to each other; (b) a flammable liquid placed near a circuit that is switched on; (c) working with a hot object without heat-resistant gloves. Predict the fire, explosion or injury risk in each case.",
      "qv": "Có ba tình huống trong phòng thực hành: (a) các kẹp điện đặt rất gần nhau; (b) chất dễ cháy đặt gần mạch điện đang bật; (c) làm việc với vật nóng mà không đeo găng tay chịu nhiệt. Hãy dự đoán nguy cơ cháy, nổ hoặc chấn thương trong mỗi trường hợp."
    }
  ],
  "physics-10-units": [
    {
      "ref": "Dựa trên SGK Vật lí 10 · Bài 3 (phép đo trực tiếp và gián tiếp)",
      "q": "You want to find the speed of a toy car that rolls across a table, using only a ruler and a stopwatch. (a) Which quantities must you measure? (b) Which formula gives the speed? (c) Which measurements are direct, and which is indirect?",
      "qv": "Em muốn xác định tốc độ của một chiếc xe đồ chơi chạy trên mặt bàn, chỉ dùng thước và đồng hồ bấm giây. (a) Cần đo những đại lượng nào? (b) Tốc độ được tính theo công thức nào? (c) Phép đo nào là trực tiếp, phép đo nào là gián tiếp?"
    },
    {
      "ref": "Dựa trên thí nghiệm đo tốc độ trong SGK Vật lí 10 · Bài 3 (số liệu do mình đặt)",
      "q": "A ruler with a smallest division of 1 mm and a stopwatch with a smallest division of 0.01 s are used to time a toy car. Five measurements give the distance s = 80.2, 80.4, 80.0, 80.3, 80.1 cm and the time t = 1.62, 1.64, 1.60, 1.63, 1.61 s. Take the instrument error to be half of the smallest division. (a) Find the mean values of s and t. (b) Find the absolute error of s and t. (c) Write the results for s and t. (d) Find the relative errors, and the speed v with its absolute error.",
      "qv": "Dùng một thước có độ chia nhỏ nhất 1 mm và một đồng hồ bấm giây có độ chia nhỏ nhất 0,01 s để đo chuyển động của một xe đồ chơi. Năm lần đo cho quãng đường s = 80,2; 80,4; 80,0; 80,3; 80,1 cm và thời gian t = 1,62; 1,64; 1,60; 1,63; 1,61 s. Lấy sai số dụng cụ bằng một nửa độ chia nhỏ nhất. (a) Tính giá trị trung bình của s và t. (b) Tính sai số tuyệt đối của s và t. (c) Viết kết quả đo của s và t. (d) Tính sai số tỉ đối, và tốc độ v cùng sai số tuyệt đối của nó."
    },
    {
      "ref": "Dựa trên SGK Vật lí 10 · Bài 3 (sai số của tổng và tích; số liệu do mình đặt)",
      "q": "(a) Two lengths are measured: B = 12.5 ± 0.1 cm and C = 7.3 ± 0.1 cm. Find A = B + C with its absolute error. (b) The sides of a rectangle are a = 5.0 ± 0.1 cm and b = 3.0 ± 0.1 cm. Find its area S = a·b with its absolute error.",
      "qv": "(a) Đo hai độ dài: B = 12,5 ± 0,1 cm và C = 7,3 ± 0,1 cm. Tìm A = B + C cùng sai số tuyệt đối. (b) Hai cạnh của một hình chữ nhật là a = 5,0 ± 0,1 cm và b = 3,0 ± 0,1 cm. Tìm diện tích S = a·b cùng sai số tuyệt đối."
    },
    {
      "ref": "SGK Vật lí 10 · Bài 3 (mục “Em có thể”)",
      "q": "Explain why, to measure a physical quantity accurately, we should repeat the measurement several times and calculate the error.",
      "qv": "Giải thích vì sao để đo một đại lượng vật lí cho chính xác, ta cần lặp lại phép đo nhiều lần và tính sai số."
    }
  ],
  "chemistry-10-comp": [
    {
      "ref": "SGK Hóa học 10 · Bài 1, câu 3",
      "q": "In Rutherford’s gold-foil experiment, most of the alpha particles passed straight through the foil, a few were deflected, and a very small number bounced back. What does each observation tell us about the structure of the atom?",
      "qv": "Trong thí nghiệm lá vàng của Rutherford, phần lớn hạt alpha đi thẳng qua lá vàng, một số ít bị lệch hướng, và rất ít hạt bị bật ngược trở lại. Mỗi quan sát cho ta biết điều gì về cấu tạo của nguyên tử?"
    },
    {
      "ref": "SGK Hóa học 10 · Bài 1, câu 4",
      "q": "If a gold atom were enlarged one billion (10⁹) times, its size would be about that of a basketball with a diameter of 30 cm, and its nucleus would be about the size of a grain of sand with a diameter of 0.003 cm. How many times larger is the gold atom than its nucleus?",
      "qv": "Nếu phóng đại một nguyên tử vàng lên một tỉ (10⁹) lần thì kích thước của nó tương đương một quả bóng rổ có đường kính 30 cm, còn hạt nhân của nó tương đương một hạt cát có đường kính 0,003 cm. Nguyên tử vàng lớn hơn hạt nhân của nó bao nhiêu lần?"
    },
    {
      "ref": "SGK Hóa học 10 · Bài 1, câu 5",
      "q": "A nitrogen atom has 7 protons and 7 neutrons in its nucleus. Using m(proton) = 1.672 × 10⁻²⁷ kg, m(neutron) = 1.675 × 10⁻²⁷ kg and m(electron) = 9.109 × 10⁻³¹ kg, compare (a) the mass of the nucleus with the mass of the atom, and (b) the mass of the nucleus with the mass of the electron shell.",
      "qv": "Một nguyên tử nitrogen có 7 proton và 7 neutron trong hạt nhân. Dùng m(proton) = 1,672 × 10⁻²⁷ kg, m(neutron) = 1,675 × 10⁻²⁷ kg và m(electron) = 9,109 × 10⁻³¹ kg, hãy so sánh (a) khối lượng hạt nhân với khối lượng nguyên tử, và (b) khối lượng hạt nhân với khối lượng vỏ electron."
    },
    {
      "ref": "SGK Hóa học 10 · Bài 1, câu 6",
      "q": "Aluminium is the most abundant metal in the Earth’s crust. Its atom has a nuclear charge of +13 and a mass number of 27. Find the number of protons, neutrons and electrons in an aluminium atom.",
      "qv": "Aluminium là kim loại phổ biến nhất trên vỏ Trái Đất. Hạt nhân nguyên tử aluminium có điện tích bằng +13 và số khối bằng 27. Tính số proton, số neutron và số electron trong nguyên tử aluminium."
    }
  ],
  "chemistry-10-element": [
    {
      "ref": "SGK Hóa học 10 · Bài 2, câu 1",
      "q": "Four atoms are given as (Z; A): B (8; 16), D (9; 19), E (8; 18), G (7; 15). Which atoms belong to the same chemical element?",
      "qv": "Cho bốn nguyên tử với (Z; A): B (8; 16), D (9; 19), E (8; 18), G (7; 15). Các nguyên tử nào thuộc cùng một nguyên tố hóa học?"
    },
    {
      "ref": "SGK Hóa học 10 · Bài 2, câu 3",
      "q": "Write the atomic symbol (with the mass number as a superscript and the atomic number as a subscript) of each atom: (a) nitrogen with 7 protons and 7 neutrons; (b) phosphorus with 15 protons and 16 neutrons; (c) copper with 29 protons and 34 neutrons.",
      "qv": "Hãy viết kí hiệu nguyên tử (số khối ở phía trên bên trái, số hiệu nguyên tử ở phía dưới bên trái) của mỗi nguyên tử sau: (a) nitrogen có 7 proton và 7 neutron; (b) phosphorus có 15 proton và 16 neutron; (c) copper có 29 proton và 34 neutron."
    },
    {
      "ref": "SGK Hóa học 10 · Bài 2, câu 5",
      "q": "Natural neon consists of three isotopes: neon-20 (90.0%), neon-21 (1.0%) and neon-22 (9.0%). Calculate the average atomic mass of neon.",
      "qv": "Neon tự nhiên gồm ba đồng vị: neon-20 (90,0%), neon-21 (1,0%) và neon-22 (9,0%). Tính nguyên tử khối trung bình của neon."
    },
    {
      "ref": "SGK Hóa học 10 · Bài 2, câu 7",
      "q": "Copper has an average atomic mass of 63.546. In nature it exists as two isotopes, copper-63 and copper-65. Find the percentage of copper-63 atoms.",
      "qv": "Nguyên tử khối trung bình của copper là 63,546. Trong tự nhiên copper tồn tại dưới hai dạng đồng vị là copper-63 và copper-65. Tính phần trăm số nguyên tử của đồng vị copper-63."
    }
  ],
  "chemistry-10-shell": [
    {
      "ref": "SGK Hóa học 10 · Bài 3, câu 4",
      "q": "State the maximum number of electrons that can be held by (a) a p subshell and (b) a d subshell.",
      "qv": "Hãy cho biết số electron tối đa chứa trong (a) phân lớp p và (b) phân lớp d."
    },
    {
      "ref": "SGK Hóa học 10 · Bài 3, câu 6",
      "q": "The electron configuration of an atom with Z = 16 is: A. 1s²2s²2p⁶3s²3p³; B. 1s²2s²2p⁶3s²3p⁵; C. 1s²2s²2p⁶3s²3p⁴; D. 1s²2s²2p⁵3s²3p⁶. Choose the correct answer.",
      "qv": "Cấu hình electron của nguyên tử có Z = 16 là: A. 1s²2s²2p⁶3s²3p³; B. 1s²2s²2p⁶3s²3p⁵; C. 1s²2s²2p⁶3s²3p⁴; D. 1s²2s²2p⁵3s²3p⁶. Hãy chọn đáp án đúng."
    },
    {
      "ref": "SGK Hóa học 10 · Bài 3, câu 7",
      "q": "Represent the electron configurations of the atoms with Z = 8 (oxygen) and Z = 11 (sodium) using orbital boxes. Show how the Pauli exclusion principle and Hund’s rule are applied.",
      "qv": "Hãy biểu diễn cấu hình electron của các nguyên tử có Z = 8 (oxygen) và Z = 11 (sodium) theo ô orbital. Chỉ rõ việc áp dụng nguyên lí loại trừ Pauli và quy tắc Hund."
    },
    {
      "ref": "SGK Hóa học 10 · Bài 3, câu 10",
      "q": "The outer shell of a calcium atom (Z = 20) contains 2 electrons in the 4s subshell. Write the complete electron configuration of calcium and decide whether it is a metal, a non-metal or a noble gas.",
      "qv": "Lớp electron ngoài cùng của nguyên tử calcium (Z = 20) có 2 electron ở phân lớp 4s. Hãy viết cấu hình electron đầy đủ của calcium và cho biết calcium là kim loại, phi kim hay khí hiếm."
    }
  ]
};
