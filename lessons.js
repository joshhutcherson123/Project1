/* Dữ liệu bài học. Thuật ngữ viết dạng {English|Tiếng Việt} và sẽ được tô sáng kèm chú giải.
   Bài chưa có "body" sẽ hiện nhãn "Sắp ra mắt". Khi có backend, thay bằng dữ liệu từ API. */
const SUBJECTS = {
  math: {name:'Toán', en:'Math', cls:'m', grades:{
    10:[
      {ch:'Functions', vi:'Hàm số', items:[
        {id:'quad', t:'Quadratic functions', vi:'Hàm số bậc hai', body:[
          {h:'What is a quadratic function?', p:'A {quadratic function|hàm số bậc hai} has the form y = ax² + bx + c, where a ≠ 0. Its {graph|đồ thị} is a curve called a {parabola|parabol}. If a > 0 the parabola opens upward; if a < 0 it opens downward.'},
          {h:'Vertex and axis of symmetry', p:'The {vertex|đỉnh} is the turning point of the parabola. Its x-coordinate is x = −b / 2a, and the vertical line through it is the {axis of symmetry|trục đối xứng}. Substitute this x back into the function to get the y-coordinate.'},
          {h:'Roots and the discriminant', p:'The {roots|nghiệm} are the x-values where y = 0. The {discriminant|biệt thức} Δ = b² − 4ac tells you how many roots exist: two when Δ > 0, one {repeated root|nghiệm kép} when Δ = 0, and none (in the real numbers) when Δ < 0.'},
          {h:'Worked example', p:'For y = x² − 4x + 3: a = 1, b = −4, c = 3. The vertex has x = 4 / 2 = 2 and y = 4 − 8 + 3 = −1, so the vertex is (2, −1). Since Δ = 16 − 12 = 4 > 0, there are two roots: x = 1 and x = 3.'}
        ], practice:{q:'Find the vertex of y = −2x² + 8x − 5 and say whether it is a maximum or a minimum.', a:'x = −8 / (2·(−2)) = 2, then y = −8 + 16 − 5 = 3. The vertex is (2, 3). Because a < 0, the parabola opens downward, so the vertex is a {maximum|giá trị lớn nhất}.'}},
        {id:'domain', t:'Domain and range', vi:'Tập xác định và tập giá trị'},
        {id:'transform', t:'Graph transformations', vi:'Phép biến đổi đồ thị'}
      ]},
      {ch:'Sets and statements', vi:'Mệnh đề và tập hợp', items:[
        {id:'sets', t:'Sets and subsets', vi:'Tập hợp và tập con'},
        {id:'logic', t:'Statements', vi:'Mệnh đề'}
      ]}
    ],
    11:[
      {ch:'Limits', vi:'Giới hạn', items:[
        {id:'seq', t:'Sequences', vi:'Dãy số'},
        {id:'lim', t:'Limits of functions', vi:'Giới hạn của hàm số'}
      ]},
      {ch:'Probability', vi:'Xác suất', items:[{id:'prob', t:'Basic probability', vi:'Xác suất cơ bản'}]}
    ],
    12:[
      {ch:'Calculus', vi:'Giải tích', items:[
        {id:'deriv', t:'Derivatives', vi:'Đạo hàm'},
        {id:'integral', t:'Integrals', vi:'Tích phân'}
      ]}
    ]}},
  physics: {name:'Lý', en:'Physics', cls:'p', grades:{
    10:[
      {ch:'Kinematics', vi:'Động học', items:[
        {id:'vel', t:'Velocity', vi:'Vận tốc', body:[
          {h:'Distance and displacement', p:'{Distance|quãng đường} is the total length of the path travelled. {Displacement|độ dịch chuyển} is the straight-line change in position, with a direction. They are equal only when the object moves in a straight line without turning back.'},
          {h:'Speed and velocity', p:'{Average speed|tốc độ trung bình} is distance divided by time. {Average velocity|vận tốc trung bình} is displacement divided by time: v = Δx / Δt. Speed is a {scalar|đại lượng vô hướng}; velocity is a {vector|đại lượng có hướng}, so it has a direction.'},
          {h:'Uniform motion', p:'In {uniform motion|chuyển động thẳng đều} the velocity stays constant, so the position changes linearly: x = x₀ + vt, where x₀ is the {initial position|vị trí ban đầu}.'},
          {h:'Worked example', p:'A car travels 150 km in 2 hours. Its average speed is 150 / 2 = 75 km/h. To convert to SI units, divide by 3.6: 75 / 3.6 ≈ 20.8 m/s.'}
        ], practice:{q:'A cyclist rides 300 m in 1 minute 15 seconds. What is the average speed in m/s?', a:'The time is 75 s, so the average speed is 300 / 75 = 4 m/s.'}},
        {id:'acc', t:'Acceleration', vi:'Gia tốc'},
        {id:'free', t:'Free fall', vi:'Rơi tự do'}
      ]}
    ],
    11:[{ch:'Electricity', vi:'Điện học', items:[
      {id:'field', t:'Electric field', vi:'Điện trường'},
      {id:'coulomb', t:"Coulomb's law", vi:'Định luật Cu-lông'}
    ]}],
    12:[{ch:'Waves', vi:'Sóng', items:[
      {id:'wave', t:'Mechanical waves', vi:'Sóng cơ'},
      {id:'osc', t:'Oscillations', vi:'Dao động điều hòa'}
    ]}]}},
  chemistry: {name:'Hóa', en:'Chemistry', cls:'c', grades:{
    10:[{ch:'Quantities in chemistry', vi:'Đại lượng trong hóa học', items:[
      {id:'mole', t:'The mole', vi:'Mol', body:[
        {h:'Counting particles', p:'Atoms and molecules are far too small to count one by one, so chemists use the {mole|mol}. One mole contains 6.022 × 10²³ particles. This number is called {Avogadro’s number|số Avogadro}.'},
        {h:'Molar mass', p:'The {molar mass|khối lượng mol} M is the mass of one mole of a substance, in g/mol. Numerically it equals the {relative molecular mass|phân tử khối}. For water, M(H₂O) = 2 × 1 + 16 = 18 g/mol.'},
        {h:'Converting between mass and moles', p:'The amount of substance n (in mol) is found with n = m / M, where m is the mass in grams. Multiply n by Avogadro’s number to get the number of particles.'},
        {h:'Worked example', p:'How many molecules are in 36 g of water? n = 36 / 18 = 2 mol. Number of molecules = 2 × 6.022 × 10²³ ≈ 1.204 × 10²⁴.'}
      ], practice:{q:'What is the mass of 0.5 mol of carbon dioxide (CO₂)? Use C = 12 and O = 16.', a:'M(CO₂) = 12 + 2 × 16 = 44 g/mol, so m = n × M = 0.5 × 44 = 22 g.'}},
      {id:'solution', t:'Concentration of solutions', vi:'Nồng độ dung dịch'},
      {id:'atom', t:'Atomic structure', vi:'Cấu tạo nguyên tử'}
    ]}],
    11:[{ch:'Organic chemistry', vi:'Hóa học hữu cơ', items:[
      {id:'hydro', t:'Hydrocarbons', vi:'Hiđrocacbon'},
      {id:'alcohol', t:'Alcohols', vi:'Ancol'}
    ]}],
    12:[{ch:'Redox and electrochemistry', vi:'Oxi hóa khử và điện hóa', items:[
      {id:'redox', t:'Oxidation and reduction', vi:'Sự oxi hóa và sự khử'},
      {id:'cell', t:'Galvanic cells', vi:'Pin điện hóa'}
    ]}]}}
};
