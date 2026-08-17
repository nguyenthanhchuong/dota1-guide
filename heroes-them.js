// Hướng dẫn chi tiết bổ sung cho các tướng còn lại.
// Tướng có `chuaChac: true` = chỗ chưa chắc chắn, trang sẽ hiện cảnh báo cho người đọc.
const HEROES_THEM = [
  {
    id: "abaddon",
    icon: "🛡️",
    danhHieu: "Lord of Avernus",
    skills: [
      { phim: "Q", ten: "Mist Coil", mota: "Bắn một quả cầu bóng tối, tốn một ít máu của bản thân để gây sát thương lên kẻ địch hoặc hồi máu cho đồng minh. Vừa là chiêu quấy rối vừa là chiêu cứu mạng." },
      { phim: "W", ten: "Aphotic Shield", mota: "Phủ lên bản thân hoặc đồng minh một lớp khiên hấp thụ sát thương. Khi khiên vỡ hoặc hết hạn sẽ nổ gây sát thương xung quanh. Quan trọng nhất: khi đặt khiên sẽ gỡ bỏ phần lớn hiệu ứng khống chế đang dính trên mục tiêu." },
      { phim: "E", ten: "Curse of Avernus", mota: "Đòn đánh thường của Abaddon dán một lớp nguyền lên mục tiêu; khi tích đủ lớp thì mục tiêu bị làm chậm nặng, đồng thời đồng minh đánh vào mục tiêu đó được tăng tốc đánh và tốc chạy." },
      { phim: "R", ten: "Borrowed Time", mota: "Ulti: Trong thời gian ngắn, mọi sát thương nhận vào bị đảo ngược thành hồi máu. Có thể tự kích hoạt khi máu tụt xuống ngưỡng thấp, hoặc bấm chủ động. Khi bật cũng gỡ bỏ phần lớn hiệu ứng khống chế." }
    ],
    lenSkill: "Ưu tiên max Aphotic Shield trước để vừa cứu đồng đội vừa gây sát thương, điểm phụ vào Mist Coil, lấy Borrowed Time ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Gauntlets of Ogre Strength"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Urn of Shadows"],
      coreItem: ["Vladmir's Offering", "Mekansm", "Power Treads"],
      xaXi: ["Shiva's Guard", "Refresher Orb", "Heart of Tarrasque"]
    },
    chienThuat: [
      "Aphotic Shield là chiêu gỡ khống chế mạnh nhất của Abaddon: canh đặt đúng lúc đồng đội dính stun hoặc silence để cứu mạng.",
      "Có thể tự đặt khiên lên mình rồi lao vào đám đông để cho khiên nổ giữa đội hình địch.",
      "Vì Borrowed Time tự bật khi máu thấp, Abaddon rất hợp làm người mở giao tranh và ăn đòn thay carry.",
      "Đòn đánh thường rất đáng giá nhờ Curse of Avernus, đừng chỉ đứng bấm chiêu mà quên đánh tay."
    ],
    khacChe: [
      "Các nguồn sát thương thuần túy hoặc hiệu ứng cấm hồi máu làm Borrowed Time mất phần lớn giá trị.",
      "Silence dài khiến Abaddon không kịp đặt khiên cứu đồng đội.",
      "Cứ để Borrowed Time bật rồi lùi ra, quay lại giết khi ulti hết hiệu lực."
    ]
  },
  {
    id: "alchemist",
    icon: "⚗️",
    danhHieu: "Razzil Darkbrew",
    skills: [
      { phim: "Q", ten: "Acid Spray", mota: "Rải một vũng axit lên mặt đất, gây sát thương theo thời gian và giảm mạnh giáp của kẻ địch đứng trong vùng. Rất mạnh để dọn lính và đẩy trụ." },
      { phim: "W", ten: "Unstable Concoction", mota: "Tích tụ một bình thuốc nổ; càng tích lâu sát thương và thời gian choáng càng lớn, nhưng tích quá lâu sẽ nổ ngay trên tay Alchemist. Ném trúng kẻ địch để làm choáng." },
      { phim: "E", ten: "Greevil's Greed", mota: "Mỗi lần hạ gục đơn vị, Alchemist nhận thêm vàng thưởng, và chuỗi hạ gục liên tiếp làm phần thưởng tăng dần. Đây là lý do Alchemist lên đồ nhanh nhất game." },
      { phim: "R", ten: "Chemical Rage", mota: "Ulti: Biến thành dạng quái vật, tăng mạnh máu tối đa, hồi máu và giảm mạnh thời gian giữa các đòn đánh. Biến Alchemist từ bao cát thành cỗ máy chém." }
    ],
    lenSkill: "Max Greevil's Greed sớm để tích vàng, kết hợp một vài điểm Acid Spray để farm rừng và lính, lấy Chemical Rage ngay khi có thể.",
    doBuild: {
      khoiDau: ["Tangoes", "Quelling Blade", "Branch"],
      giaiDoanDau: ["Ring of Health", "Boots of Speed", "Soul Ring"],
      coreItem: ["Power Treads", "Radiance", "Black King Bar"],
      xaXi: ["Assault Cuirass", "Heart of Tarrasque", "Satanic"]
    },
    chienThuat: [
      "Farm là công việc chính trong 15 phút đầu; Alchemist mạnh không phải vì kỹ năng mà vì lên đồ trước đối phương cả một pha.",
      "Acid Spray giúp farm rừng và lính cùng lúc, đứng giữa hai bãi để tận dụng vùng phủ.",
      "Unstable Concoction cần luyện: tích gần đầy rồi mới ném, nhưng đừng tham đến mức tự nổ.",
      "Alchemist còn đẩy Roshan rất nhanh nhờ giảm giáp từ Acid Spray, có thể ăn Roshan sớm hơn đối phương tưởng."
    ],
    khacChe: [
      "Gank sớm và liên tục: Alchemist yếu ở giai đoạn đầu, chậm farm là hỏng cả ván.",
      "Silence hoặc khống chế trước khi Chemical Rage kịp bật khiến Alchemist chết rất nhanh.",
      "Cướp rừng và cắm mắt ở khu farm của Alchemist để chặn nguồn vàng."
    ]
  },
  {
    id: "ancientapparition",
    icon: "❄️",
    danhHieu: "Kaldr",
    skills: [
      { phim: "Q", ten: "Cold Feet", mota: "Đặt một lời nguyền lên kẻ địch; nếu mục tiêu không chạy ra đủ xa khỏi vị trí bị dính trong thời gian ngắn, mục tiêu sẽ bị đóng băng cứng người. Gây sát thương theo thời gian trong lúc chờ." },
      { phim: "W", ten: "Ice Vortex", mota: "Tạo một xoáy băng trên mặt đất, làm chậm và giảm kháng phép của kẻ địch trong vùng. Cũng cho tầm nhìn tại vị trí đặt." },
      { phim: "E", ten: "Chilling Touch", mota: "Tăng sát thương phép cho các đòn đánh thường tiếp theo của Ancient Apparition và đồng minh xung quanh, đổi lại làm chậm tốc độ đánh." },
      { phim: "R", ten: "Ice Blast", mota: "Ulti: Bắn một quả cầu băng bay xuyên bản đồ, bấm lần hai để cho nổ. Kẻ địch trong vùng nổ bị dính hiệu ứng cấm hồi máu hoàn toàn; nếu máu tụt xuống dưới một ngưỡng trong lúc dính hiệu ứng thì bị xử tử ngay lập tức." }
    ],
    lenSkill: "Max Cold Feet để có khống chế mạnh trong đi đường, điểm phụ vào Ice Vortex, luôn lấy Ice Blast ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Observer Wards"],
      coreItem: ["Arcane Boots", "Force Staff", "Eul's Scepter of Divinity"],
      xaXi: ["Aghanim's Scepter", "Scythe of Vyse", "Refresher Orb"]
    },
    chienThuat: [
      "Ice Blast là chiêu toàn bản đồ: học nhìn minimap và bắn cứu đồng đội hoặc kết liễu địch đang chạy trốn ở lane khác.",
      "Hiệu ứng cấm hồi máu của Ice Blast vô hiệu hóa hoàn toàn những tướng sống nhờ hút máu hoặc hồi máu.",
      "Ice Vortex giảm kháng phép, nên đặt trước khi đồng đội tung chiêu sát thương phép lớn.",
      "Cold Feet dùng tốt nhất khi mục tiêu đang bị làm chậm hoặc đang lao vào giao tranh, vì họ khó chạy ra kịp."
    ],
    khacChe: [
      "Ancient Apparition rất mỏng manh, gank sớm là ép được.",
      "Blink Dagger hoặc Force Staff giúp thoát Cold Feet dễ dàng.",
      "Black King Bar chặn được cả Cold Feet lẫn Ice Blast."
    ]
  },
  {
    id: "arcwarden",
    icon: "⚡",
    danhHieu: "Zet",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Flux", mota: "Đánh dấu một kẻ địch, gây sát thương theo thời gian và làm chậm, nhưng chỉ có tác dụng khi mục tiêu ở một mình — có đơn vị khác đứng gần thì hiệu ứng ngừng lại." },
      { phim: "W", ten: "Magnetic Field", mota: "Tạo một vùng từ trường; đồng minh trong vùng được tăng mạnh tốc độ đánh và có cơ hội né tránh đòn đánh thường từ bên ngoài." },
      { phim: "E", ten: "Spark Wraith", mota: "Đặt một linh hồn tia lửa tại vị trí chỉ định; sau một lúc tích tụ, nó sẽ tự truy đuổi kẻ địch đến gần và gây sát thương phép kèm làm chậm. Dùng để cắm phòng thủ và soi tầm nhìn." },
      { phim: "R", ten: "Tempest Double", mota: "Ulti: Tạo ra một bản sao hoàn hảo của bản thân, mang theo toàn bộ đồ đạc và kỹ năng với thời gian hồi chiêu riêng. Bản sao tồn tại trong thời gian ngắn và có thể farm hoặc đánh nhau song song." }
    ],
    lenSkill: "Max Spark Wraith để farm và quấy rối an toàn, điểm phụ Magnetic Field, lấy Tempest Double ngay khi có thể.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Circlet of Nobility"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Wraith Band"],
      coreItem: ["Hand of Midas", "Maelstrom", "Power Treads"],
      xaXi: ["Mjollnir", "Manta Style", "Butterfly"]
    },
    chienThuat: [
      "Sức mạnh cốt lõi nằm ở việc dùng bản sao để farm một nơi trong khi bản thân farm hoặc đẩy trụ ở nơi khác.",
      "Bản sao mang theo đồ, nên các món chủ động và món có hiệu ứng đòn đánh được nhân đôi giá trị.",
      "Spark Wraith cắm sẵn quanh khu rừng vừa cho tầm nhìn vừa trừng phạt kẻ đi lẻ.",
      "Arc Warden đẩy trụ cực nhanh khi cả hai bản đứng cùng một lane."
    ],
    khacChe: [
      "Ép giao tranh sớm trước khi Arc Warden lên đủ đồ, vì giai đoạn đầu rất yếu.",
      "Cắm mắt và bắt khi Arc Warden đi farm một mình mà chưa có ulti.",
      "Đẩy trụ đồng loạt buộc Arc Warden phải phòng thủ thay vì farm chia đôi."
    ]
  },
  {
    id: "bane",
    icon: "😈",
    danhHieu: "Atropos",
    skills: [
      { phim: "Q", ten: "Enfeeble", mota: "Làm suy yếu một kẻ địch, giảm mạnh sát thương đòn đánh thường của mục tiêu trong thời gian dài. Cực kỳ hiệu quả khi ném vào carry đối phương ngay trước giao tranh." },
      { phim: "W", ten: "Brain Sap", mota: "Hút sinh lực từ mục tiêu, gây sát thương thuần và hồi lại lượng máu tương ứng cho Bane. Xuyên qua hầu hết kháng phép." },
      { phim: "E", ten: "Nightmare", mota: "Đưa mục tiêu vào giấc ngủ ác mộng, khiến mục tiêu bất động và bất khả xâm phạm cho đến khi bị đánh trúng. Có thể dùng lên cả đồng minh để cứu khỏi sát thương theo thời gian." },
      { phim: "R", ten: "Fiend's Grip", mota: "Ulti: Trói chặt một mục tiêu tại chỗ, gây sát thương liên tục và rút mana trong suốt thời gian kênh chiêu. Là một trong những chiêu khống chế đơn mục tiêu mạnh nhất game." }
    ],
    lenSkill: "Max Brain Sap để có sát thương thuần và tự hồi máu, kèm điểm Nightmare để khống chế, lấy Fiend's Grip ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Observer Wards"],
      coreItem: ["Arcane Boots", "Force Staff", "Black King Bar"],
      xaXi: ["Aghanim's Scepter", "Scythe of Vyse", "Refresher Orb"]
    },
    chienThuat: [
      "Fiend's Grip là chiêu kênh: cần đồng đội bảo vệ hoặc Black King Bar để không bị ngắt giữa chừng.",
      "Nightmare vừa là khống chế vừa là chiêu cứu mạng — có thể ru ngủ đồng đội sắp chết để câu giờ.",
      "Enfeeble ném lên carry đối phương trước giao tranh khiến sát thương của họ gần như biến mất.",
      "Đừng quên Nightmare có thể lan sang mục tiêu khác nếu bị đánh thức bằng cách chạm vào."
    ],
    khacChe: [
      "Linken's Sphere chặn được cả Fiend's Grip lẫn Nightmare.",
      "Bất kỳ chiêu khống chế nào cũng ngắt được Fiend's Grip, hãy giữ sẵn một chiêu stun.",
      "Black King Bar khiến Bane gần như vô dụng trong giao tranh."
    ]
  },
  {
    id: "bara",
    icon: "🐂",
    danhHieu: "Spirit Breaker, Barathrum",
    skills: [
      { phim: "Q", ten: "Charge of Darkness", mota: "Húc thẳng về phía một kẻ địch bất kể khoảng cách trên toàn bản đồ, xuyên qua địa hình. Khi chạm mục tiêu sẽ làm choáng. Trong lúc húc, Bara nhìn thấy mục tiêu và tăng dần tốc chạy." },
      { phim: "W", ten: "Empowering Haste", mota: "Tăng tốc độ di chuyển cho Bara và đồng minh xung quanh, đồng thời chuyển một phần tốc chạy thành sát thương thêm cho đòn đánh." },
      { phim: "E", ten: "Greater Bash", mota: "Đòn đánh thường có cơ hội đẩy lùi và làm choáng mục tiêu, gây sát thương tỷ lệ theo tốc độ di chuyển của Bara. Đây là nguồn sát thương chính của tướng." },
      { phim: "R", ten: "Nether Strike", mota: "Ulti: Dịch chuyển tức thời đến sau lưng mục tiêu và tung một đòn đánh mạnh, chắc chắn kích hoạt Greater Bash. Cách mở giao tranh hoặc kết liễu cực nhanh." }
    ],
    lenSkill: "Max Greater Bash để tăng sát thương và tỉ lệ choáng, kèm điểm Charge of Darkness sớm để gank, lấy Nether Strike ngay khi có thể.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Gauntlets of Ogre Strength"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Bracer"],
      coreItem: ["Power Treads", "Mask of Madness", "Black King Bar"],
      xaXi: ["Assault Cuirass", "Skadi", "Satanic"]
    },
    chienThuat: [
      "Charge of Darkness bấm từ trong rừng để địch khó đoán hướng tới; càng chạy lâu càng nhanh và càng đau.",
      "Tốc chạy chính là sát thương của Bara — mọi món tăng tốc độ di chuyển đều là món tăng damage.",
      "Có thể húc vào một mục tiêu ở lane khác để tham gia gank từ xa mà đồng đội không cần đợi.",
      "Trong giao tranh, cứ đứng đánh liên tục: Greater Bash tự nổ và làm rối loạn đội hình địch."
    ],
    khacChe: [
      "Khi thấy hiệu ứng Charge trên người, hãy chạy về phía đồng đội hoặc trụ thay vì chạy ra xa.",
      "Force Staff hoặc Blink Dagger phá được cú húc nếu dùng đúng lúc chạm.",
      "Bara rất phụ thuộc vào việc bắt lẻ; đi theo nhóm là cách khắc chế đơn giản nhất."
    ]
  },
  {
    id: "batrider",
    icon: "🦇",
    danhHieu: "Jin'zakk",
    skills: [
      { phim: "Q", ten: "Sticky Napalm", mota: "Ném dầu lên một vùng, cộng dồn nhiều lớp lên kẻ địch. Mỗi lớp làm chậm tốc quay và tốc chạy, đồng thời tăng sát thương mà Batrider gây lên mục tiêu đó." },
      { phim: "W", ten: "Flamebreak", mota: "Ném một quả cầu lửa nổ tại điểm rơi, gây sát thương và đẩy lùi kẻ địch trong vùng ra xa." },
      { phim: "E", ten: "Firefly", mota: "Batrider bay lên, có thể bay qua địa hình và để lại một vệt lửa phía sau gây sát thương theo thời gian cho kẻ địch đi qua. Vừa là chiêu chạy trốn vừa là chiêu farm." },
      { phim: "R", ten: "Flaming Lasso", mota: "Ulti: Quăng dây trói một kẻ địch và kéo lê theo Batrider, mục tiêu hoàn toàn mất khả năng hành động. Dùng để lôi mục tiêu quan trọng vào giữa đội hình mình." }
    ],
    lenSkill: "Max Sticky Napalm sớm để thống trị đi đường, kèm một điểm Firefly để cơ động, lấy Flaming Lasso ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Soul Ring"],
      coreItem: ["Blink Dagger", "Arcane Boots", "Black King Bar"],
      xaXi: ["Aghanim's Scepter", "Shiva's Guard", "Refresher Orb"]
    },
    chienThuat: [
      "Combo chuẩn: Blink vào, Flaming Lasso mục tiêu chủ chốt rồi kéo về phía đội mình.",
      "Chồng nhiều lớp Sticky Napalm trước khi vào combo, mọi sát thương sau đó đều tăng mạnh.",
      "Firefly kết hợp bay qua rừng để trốn thoát hoặc để tiếp cận từ hướng địch không ngờ.",
      "Black King Bar rất quan trọng vì Flaming Lasso bị hủy nếu Batrider dính khống chế."
    ],
    khacChe: [
      "Black King Bar hoặc Linken's Sphere của mục tiêu chặn được Flaming Lasso.",
      "Bất kỳ chiêu stun nào lên Batrider cũng phá được dây trói.",
      "Ép Batrider dùng hết Blink Dagger trước giao tranh chính."
    ]
  },
  {
    id: "beastmaster",
    icon: "🐗",
    danhHieu: "Karroch, Rexxar",
    skills: [
      { phim: "Q", ten: "Wild Axes", mota: "Ném hai chiếc rìu theo hình vòng cung, gây sát thương cho kẻ địch trúng phải; trúng cả hai rìu thì sát thương cộng dồn. Dùng để dọn lính rất tốt." },
      { phim: "W", ten: "Call of the Wild", mota: "Triệu hồi thú đồng hành: một con chim cho tầm nhìn trên cao và một con lợn rừng tấn công kèm làm chậm mục tiêu. Nguồn tầm nhìn và quấy rối miễn phí ở giai đoạn đầu." },
      { phim: "E", ten: "Inner Beast", mota: "Nội tại: tăng tốc độ đánh cho Beastmaster và toàn bộ đồng minh xung quanh, bao gồm cả lính triệu hồi." },
      { phim: "R", ten: "Primal Roar", mota: "Ulti: Gầm lên, làm choáng cứng một mục tiêu trong thời gian dài, đồng thời đẩy dạt và làm chậm mọi đơn vị đứng trên đường gầm. Là một trong những chiêu khống chế đơn mục tiêu lâu nhất game." }
    ],
    lenSkill: "Max Wild Axes hoặc Call of the Wild tùy lane, giữ một điểm Inner Beast, ưu tiên Primal Roar ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Gauntlets of Ogre Strength"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Ring of Basilius"],
      coreItem: ["Blink Dagger", "Power Treads", "Necronomicon 2"],
      xaXi: ["Aghanim's Scepter", "Assault Cuirass", "Black King Bar"]
    },
    chienThuat: [
      "Chim triệu hồi là mắt di động miễn phí: dùng để soi rừng, soi Roshan và canh gank.",
      "Combo Blink Dagger vào rồi Primal Roar tướng chủ chốt là cách mở giao tranh sạch nhất.",
      "Beastmaster đẩy trụ rất mạnh nhờ Inner Beast cộng lính triệu hồi, hãy ép trụ liên tục.",
      "Lợn rừng dùng để quấy rối lane và chặn đường chạy nhờ hiệu ứng làm chậm."
    ],
    khacChe: [
      "Các chiêu sát thương diện rộng dọn sạch thú triệu hồi và làm Beastmaster mất tầm nhìn.",
      "Linken's Sphere chặn được Primal Roar.",
      "Ép Beastmaster dùng Blink Dagger trước, hoặc phá bằng sát thương lên người trước giao tranh."
    ]
  },
  {
    id: "bloodseeker",
    icon: "🩸",
    danhHieu: "Strygwyr",
    skills: [
      { phim: "Q", ten: "Bloodrage", mota: "Đưa bản thân hoặc đồng minh vào trạng thái cuồng máu: tăng mạnh sát thương gây ra nhưng cũng nhận thêm sát thương, và mục tiêu bị câm lặng trong lúc hiệu lực." },
      { phim: "W", ten: "Blood Bath", mota: "Khi một đơn vị chết gần đó, Bloodseeker hồi lại một phần máu; hạ gục tướng địch cho lượng hồi lớn hơn nhiều." },
      { phim: "E", ten: "Thirst", mota: "Nội tại: khi có tướng địch máu thấp trên bản đồ, Bloodseeker được tăng tốc chạy và nhìn thấy vị trí của họ dù ở đâu. Máu địch càng thấp hiệu ứng càng mạnh." },
      { phim: "R", ten: "Rupture", mota: "Ulti: Xé rách da thịt mục tiêu; trong thời gian hiệu lực, mục tiêu nhận sát thương lớn mỗi khi di chuyển. Đứng yên thì không sao, nhưng chạy trốn là chết." }
    ],
    lenSkill: "Max Bloodrage để có sát thương và câm lặng, điểm phụ vào Thirst để đi săn, lấy Rupture ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Quelling Blade", "Slippers of Agility"],
      giaiDoanDau: ["Boots of Speed", "Wraith Band", "Magic Wand"],
      coreItem: ["Power Treads", "Mask of Madness", "Black King Bar"],
      xaXi: ["Skadi", "Butterfly", "Satanic"]
    },
    chienThuat: [
      "Thirst cho tầm nhìn miễn phí lên địch máu thấp — luôn để mắt tới minimap để bắt lẻ khắp bản đồ.",
      "Rupture nên ném vào mục tiêu đang chạy hoặc mục tiêu buộc phải di chuyển để né chiêu khác.",
      "Bloodrage tự đặt lên mình để tăng sát thương, nhưng nhớ là lúc đó nhận sát thương cũng nhiều hơn.",
      "Có thể dùng Bloodrage lên địch để câm lặng, chặn chiêu chạy trốn hoặc chiêu cứu mạng."
    ],
    khacChe: [
      "Khi dính Rupture, đứng yên và dùng Town Portal hoặc chiêu dịch chuyển thay vì chạy bộ.",
      "Ghost Scepter hoặc các món tăng sức chống chịu giúp sống qua giai đoạn Bloodseeker lao vào.",
      "Đi theo nhóm và giữ máu cao để không kích hoạt Thirst."
    ]
  },
  {
    id: "bone",
    icon: "🏹",
    danhHieu: "Clinkz, Bone Fletcher",
    skills: [
      { phim: "Q", ten: "Strafe", mota: "Tăng vọt tốc độ đánh trong thời gian ngắn. Là công tắc bùng nổ sát thương của Clinkz trong lúc lao vào giết mục tiêu." },
      { phim: "W", ten: "Searing Arrows", mota: "Đòn đánh thường tiêu tốn mana để cộng thêm sát thương. Dùng liên tục ở giai đoạn đầu để ép lane và last hit." },
      { phim: "E", ten: "Skeleton Walk", mota: "Tàng hình và có thể đi xuyên qua đơn vị, đồng thời tăng tốc chạy. Dùng để tiếp cận mục tiêu, đi vòng vào hậu tuyến hoặc trốn thoát." },
      { phim: "R", ten: "Death Pact", mota: "Ulti: Nuốt một đơn vị lính hoặc quái rừng, nhận thêm máu tối đa và sát thương dựa trên máu của đơn vị bị nuốt. Luôn nuốt quái to nhất tìm được trước khi đánh nhau." }
    ],
    lenSkill: "Max Searing Arrows để ép lane và farm, điểm phụ Strafe, lấy Death Pact ngay khi đủ cấp và luôn giữ buff.",
    doBuild: {
      khoiDau: ["Tangoes", "Slippers of Agility", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Wraith Band", "Magic Wand"],
      coreItem: ["Power Treads", "Orchid Malevolence", "Desolator"],
      xaXi: ["Monkey King Bar", "Butterfly", "Skadi"]
    },
    chienThuat: [
      "Luôn duy trì buff Death Pact trước khi rời base — Clinkz không có buff là Clinkz giấy.",
      "Skeleton Walk dùng để đi vòng ra sau, bắt hỗ trợ đang cắm mắt hoặc bỏ chạy khi bị bắt.",
      "Orchid Malevolence là món cực hợp: câm lặng mục tiêu để họ không kịp bấm chiêu thoát.",
      "Clinkz phá trụ rất nhanh khi bật Strafe, tận dụng lúc địch bận giao tranh ở nơi khác."
    ],
    khacChe: [
      "Dust of Appearance, Sentry Ward và Gem of True Sight vô hiệu hóa hoàn toàn Skeleton Walk.",
      "Clinkz cực mỏng, chỉ cần một chiêu stun là chết.",
      "Đi theo nhóm và cắm mắt phòng thủ để không bị bắt lẻ."
    ]
  },
  {
    id: "bountyhunter",
    icon: "🗡️",
    danhHieu: "Gondar",
    skills: [
      { phim: "Q", ten: "Shuriken Toss", mota: "Ném phi tiêu gây sát thương và làm choáng ngắn mục tiêu. Nếu mục tiêu đang bị đánh dấu Track, phi tiêu sẽ nảy sang các kẻ địch gần đó." },
      { phim: "W", ten: "Jinada", mota: "Sau mỗi khoảng thời gian hồi, đòn đánh tiếp theo gây thêm sát thương chí mạng và cướp vàng của mục tiêu. Đây là công cụ ép lane cực mạnh ở giai đoạn đầu." },
      { phim: "E", ten: "Wind Walk", mota: "Tàng hình và tăng tốc chạy; đòn đánh thoát tàng hình gây thêm sát thương lớn. Là chiêu tiếp cận và trốn thoát cốt lõi." },
      { phim: "R", ten: "Track", mota: "Ulti: Đánh dấu một kẻ địch — nhìn thấy vị trí của họ xuyên bản đồ và xuyên tàng hình, làm chậm họ (hoặc tăng tốc bản thân), và khi mục tiêu bị hạ gục thì Bounty Hunter cùng đồng minh gần đó nhận thêm vàng thưởng." }
    ],
    lenSkill: "Max Jinada để ép lane và cướp vàng, kèm điểm Wind Walk để cơ động, lấy Track ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Slippers of Agility"],
      giaiDoanDau: ["Boots of Speed", "Wraith Band", "Magic Wand"],
      coreItem: ["Power Treads", "Desolator", "Black King Bar"],
      xaXi: ["Monkey King Bar", "Skadi", "Butterfly"]
    },
    chienThuat: [
      "Track vào tướng địch quan trọng trước giao tranh: vừa cho tầm nhìn vừa cho cả đội thêm vàng khi giết.",
      "Wind Walk giúp đi cắm mắt, phá mắt và di chuyển giữa các lane an toàn trong suốt game.",
      "Bounty Hunter gank rất tốt từ phút 6-10, đừng đứng lane cày mà hãy đi bắt người.",
      "Track lên tướng tàng hình như Clinkz hay Riki khiến họ không còn chỗ trốn."
    ],
    khacChe: [
      "Dust of Appearance và Sentry Ward phá hoàn toàn lối chơi tàng hình.",
      "Nếu bị Track, hãy chơi thận trọng và đi theo nhóm vì địch luôn thấy vị trí của bạn.",
      "Bounty Hunter yếu ở giai đoạn cuối nếu không lên đủ đồ, hãy kéo dài game và farm hơn hắn."
    ]
  },
  {
    id: "bristleback",
    icon: "🦔",
    danhHieu: "Rigwarl",
    skills: [
      { phim: "Q", ten: "Viscous Nasal Goo", mota: "Bắn một cục nhớt lên kẻ địch, cộng dồn nhiều lớp; mỗi lớp làm chậm mục tiêu và giảm giáp của họ." },
      { phim: "W", ten: "Quill Spray", mota: "Bắn gai ra xung quanh, gây sát thương diện rộng. Sát thương tăng dần mỗi lần trúng lại cùng một mục tiêu trong thời gian ngắn, nên càng đánh lâu càng đau." },
      { phim: "E", ten: "Bristleback", mota: "Nội tại: giảm sát thương nhận vào khi bị đánh từ phía sau hoặc hai bên sườn; đồng thời khi nhận đủ lượng sát thương ở lưng thì tự động bắn Quill Spray ra." },
      { phim: "R", ten: "Warpath", mota: "Ulti: Mỗi lần Bristleback dùng chiêu, hắn tích thêm một lớp tăng sát thương và tốc chạy. Càng đánh nhau lâu càng mạnh." }
    ],
    lenSkill: "Max Quill Spray trước để có sát thương diện rộng và farm, kèm điểm Viscous Nasal Goo và Bristleback, lấy Warpath ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Gauntlets of Ogre Strength"],
      giaiDoanDau: ["Boots of Speed", "Soul Ring", "Magic Wand"],
      coreItem: ["Vanguard", "Arcane Boots", "Hood of Defiance"],
      xaXi: ["Heart of Tarrasque", "Assault Cuirass", "Shiva's Guard"]
    },
    chienThuat: [
      "Luôn quay lưng về phía kẻ địch khi rút lui — đó là lúc Bristleback chịu ít sát thương nhất và bắn gai nhiều nhất.",
      "Bristleback càng đánh lâu càng mạnh nhờ Warpath và Quill Spray cộng dồn, nên hãy kéo dài giao tranh.",
      "Bấm chiêu liên tục kể cả khi không trúng ai, chỉ để giữ lớp Warpath trong lúc truy đuổi.",
      "Rất mạnh khi đứng lì ở tuyến đầu, ép địch phải đánh mình thay vì đánh carry."
    ],
    khacChe: [
      "Sát thương phép lớn hoặc sát thương thuần bỏ qua lớp giảm sát thương từ lưng.",
      "Cấm hồi máu và giảm hồi phục làm Bristleback khó cầm cự trong giao tranh dài.",
      "Câm lặng chặn việc tích Warpath, khiến Bristleback vừa chậm vừa yếu."
    ]
  }
,
  {
    id: "broodmother",
    icon: "🕷️",
    danhHieu: "Black Arachnia",
    skills: [
      { phim: "Q", ten: "Spawn Spiderlings", mota: "Phóng trứng nhện vào một mục tiêu, gây sát thương; nếu đơn vị đó chết trong lúc còn dính trứng sẽ nở ra bầy nhện con chiến đấu cho bạn." },
      { phim: "W", ten: "Spin Web", mota: "Giăng mạng nhện tại một vị trí. Khi đứng trong mạng, Broodmother chạy nhanh hơn, hồi máu liên tục và ẩn mình khỏi tầm nhìn thường của địch." },
      { phim: "E", ten: "Incapacitating Bite", mota: "Nội tại: đòn đánh thường mang nọc độc, làm kẻ địch chậm lại và có khả năng đánh trượt." },
      { phim: "R", ten: "Insatiable Hunger", mota: "Ulti: trong thời gian ngắn, tăng mạnh sát thương đánh thường và hút máu theo mỗi đòn đánh." }
    ],
    lenSkill: "Ưu tiên Spin Web sớm để làm chủ lane và có đường chạy, xen Spawn Spiderlings để đẩy lính, lấy Insatiable Hunger ngay khi tới cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Circlet of Nobility"],
      giaiDoanDau: ["Boots of Speed", "Orb of Venom", "Magic Wand"],
      coreItem: ["Power Treads", "Orchid Malevolence", "Mask of Madness"],
      xaXi: ["Black King Bar", "Butterfly", "Satanic"]
    },
    chienThuat: [
      "Giăng sẵn mạng phủ kín lane của mình rồi mới đôi co, vì ra khỏi mạng là mất gần hết sức mạnh.",
      "Đẩy lane liên tục bằng nhện con, ép đối phương phải về thủ thay vì đi gank chỗ khác.",
      "Vào giao tranh nên nhắm thẳng hero yếu máu phía sau thay vì đứng đánh nhau ở tuyến đầu."
    ],
    khacChe: [
      "Mọi thứ cho tầm nhìn thật và sát thương diện rộng đều rất khó chịu với cô ta: Dust of Appearance, Gem of True Sight, Sentry Ward.",
      "Đám nhện con chết rất nhanh trước các kỹ năng diện rộng, dọn sạch nhện là Broodmother mất phần lớn sức ép."
    ]
  },
  {
    id: "chaosknight",
    icon: "🐎",
    danhHieu: "Nessaj",
    skills: [
      { phim: "Q", ten: "Chaos Bolt", mota: "Ném quả cầu hỗn mang làm choáng mục tiêu, thời gian choáng và sát thương đều ngẫu nhiên." },
      { phim: "W", ten: "Reality Rift", mota: "Xé không gian kéo bản thân, toàn bộ ảnh phân thân và mục tiêu về cùng một điểm, đồng thời cộng thêm sát thương cho đòn đánh kế tiếp." },
      { phim: "E", ten: "Chaos Strike", mota: "Nội tại: có cơ hội tung đòn chí mạng kèm hút máu." },
      { phim: "R", ten: "Phantasm", mota: "Ulti: tạo ra nhiều ảnh phân thân của chính mình, ảnh đánh rất đau nhưng nhận sát thương gấp bội nên chết nhanh." }
    ],
    lenSkill: "Lên Chaos Bolt và Chaos Strike xen kẽ để có khống chế và sức đánh sớm, giữ một điểm Reality Rift để bắt mục tiêu, lấy Phantasm mỗi khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Gauntlets of Ogre Strength"],
      giaiDoanDau: ["Boots of Speed", "Bracer", "Magic Wand"],
      coreItem: ["Power Treads", "Armlet of Mordiggian", "Black King Bar"],
      xaXi: ["Heart of Tarrasque", "Assault Cuirass", "Satanic"]
    },
    chienThuat: [
      "Mở màn bằng Phantasm rồi mới Reality Rift, để cả đàn ảnh cùng dính vào mục tiêu một lúc.",
      "Ảnh phân thân dùng để đẩy trụ và ăn rừng trong lúc chờ giao tranh chứ đừng để chúng chết vô ích.",
      "Chaos Bolt là khống chế may rủi, đừng tính toán kèo giao tranh dựa hoàn toàn vào nó."
    ],
    khacChe: [
      "Kỹ năng và đồ diện rộng quét sạch ảnh phân thân rất nhanh, ví dụ Shiva's Guard hay Mjollnir.",
      "Ở giai đoạn đầu game Chaos Knight yếu và chậm, ép lane mạnh từ sớm sẽ khiến anh ta rất chật vật."
    ]
  },
  {
    id: "chen",
    icon: "🐑",
    danhHieu: "Holy Knight",
    skills: [
      { phim: "Q", ten: "Penitence", mota: "Khiến mục tiêu di chuyển chậm hẳn lại và nhận thêm sát thương từ mọi nguồn." },
      { phim: "W", ten: "Test of Faith", mota: "Gây sát thương phép ngẫu nhiên lên kẻ địch; khi dùng lên đồng minh thì dịch chuyển họ về nhà chính sau một khoảng chờ." },
      { phim: "E", ten: "Holy Persuasion", mota: "Thu phục quái rừng hoặc lính làm quân riêng của mình, đồng thời tăng máu cho chúng." },
      { phim: "R", ten: "Hand of God", mota: "Ulti: hồi máu cho toàn bộ đồng đội ở bất kỳ đâu trên bản đồ và hồi đầy máu cho đám quái đang bị thu phục." }
    ],
    lenSkill: "Lên Holy Persuasion sớm để có quân đi gank và giữ rừng, thêm Penitence hỗ trợ bắt người, ưu tiên Hand of God ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Ring of Basilius", "Magic Wand"],
      coreItem: ["Arcane Boots", "Mekansm", "Aghanim's Scepter"],
      xaXi: ["Refresher Orb", "Shiva's Guard", "Scythe of Vyse"]
    },
    chienThuat: [
      "Chen mạnh nhất ở đầu và giữa game: gom quái có kỹ năng khống chế rồi đi bắt người liên tục.",
      "Chia quân ra đẩy nhiều lane cùng lúc trong lúc đội mình tạo áp lực chỗ khác.",
      "Hand of God có thể cứu cả đội từ xa, đừng dùng chỉ để hồi cho một người trừ khi thực sự cần."
    ],
    khacChe: [
      "Diệt quái của Chen là cách rẻ nhất để vô hiệu hóa anh ta, vì gom lại rất tốn thời gian.",
      "Sát thương diện rộng và cắm mắt kiểm soát rừng khiến Chen không thể ăn quái tự do."
    ]
  },
  {
    id: "clock",
    icon: "⚙️",
    danhHieu: "Rattletrap",
    skills: [
      { phim: "Q", ten: "Battery Assault", mota: "Liên tục bắn mảnh đạn vào các kẻ địch ở gần một cách ngẫu nhiên, mỗi phát gây sát thương nhỏ kèm choáng chớp nhoáng." },
      { phim: "W", ten: "Power Cogs", mota: "Dựng vòng bánh răng vây quanh mình để nhốt mục tiêu; ai đụng vào sẽ bị hất văng ra ngoài, mất máu và mất mana." },
      { phim: "E", ten: "Rocket Flare", mota: "Bắn pháo sáng tới bất kỳ đâu trên bản đồ, gây sát thương diện rộng và soi tầm nhìn tại điểm rơi." },
      { phim: "R", ten: "Hookshot", mota: "Ulti: phóng móc bám; nếu trúng hero địch thì kéo Clockwerk lao thẳng tới, gây sát thương và làm choáng." }
    ],
    lenSkill: "Lên Battery Assault trước để đổi máu trong lane, thêm Power Cogs để nhốt người, giữ Rocket Flare mức thấp để soi bản đồ, lấy Hookshot mỗi khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Gauntlets of Ogre Strength"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Urn of Shadows"],
      coreItem: ["Arcane Boots", "Force Staff", "Blade Mail"],
      xaXi: ["Shiva's Guard", "Heart of Tarrasque", "Black King Bar"]
    },
    chienThuat: [
      "Chuỗi chuẩn là móc vào mục tiêu, dựng bánh răng nhốt lại rồi bật Battery Assault đứng đánh.",
      "Rocket Flare vừa dùng để kết liễu người chạy trốn vừa là mắt di động, đừng để nguội vô ích.",
      "Là người mở giao tranh nên phải chọn đúng mục tiêu, móc trúng hero yếu máu quan trọng hơn là móc trúng tank."
    ],
    khacChe: [
      "Force Staff, Blink Dagger hay các kỹ năng dịch chuyển đều thoát khỏi vòng bánh răng dễ dàng.",
      "Đứng tách ra khỏi tầm móc và giữ khoảng cách với địa hình hẹp sẽ khiến Clockwerk khó mở kèo."
    ]
  },
  {
    id: "darkseer",
    icon: "🌀",
    danhHieu: "Ish'kafel",
    skills: [
      { phim: "Q", ten: "Vacuum", mota: "Hút toàn bộ kẻ địch trong vùng về một điểm, gây sát thương và làm vỡ đội hình đối phương." },
      { phim: "W", ten: "Ion Shell", mota: "Bọc một đơn vị bằng lớp vỏ năng lượng, thiêu đốt liên tục mọi kẻ địch đứng gần đơn vị đó." },
      { phim: "E", ten: "Surge", mota: "Đẩy một đơn vị lên tốc chạy tối đa trong thời gian ngắn, dùng để lao vào hoặc chạy thoát." },
      { phim: "R", ten: "Wall of Replica", mota: "Ulti: dựng một bức tường ma thuật; hero địch đi xuyên qua sẽ bị chậm và bị tạo ra một bản sao chiến đấu cho phe bạn." }
    ],
    lenSkill: "Tối đa Ion Shell sớm để farm và ép lane, lấy một điểm Surge để cơ động, thêm Vacuum khi cần mở kèo, lên Wall of Replica ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Mantle of Intelligence"],
      giaiDoanDau: ["Boots of Speed", "Soul Ring", "Magic Wand"],
      coreItem: ["Arcane Boots", "Vanguard", "Blink Dagger"],
      xaXi: ["Shiva's Guard", "Khadgar's Pipe of Insight", "Refresher Orb"]
    },
    chienThuat: [
      "Dán Ion Shell lên lính để vừa dọn lính vừa gặm máu đối thủ mà không cần tới gần.",
      "Chuỗi mạnh nhất là chớp vào giữa đội hình địch, Vacuum gom lại rồi dựng tường ngay sau lưng chúng.",
      "Surge cho carry của đội trong giao tranh có giá trị không kém gì dùng cho bản thân."
    ],
    khacChe: [
      "Black King Bar khiến hero địch đi qua tường mà không bị sao chép, làm ulti mất phần lớn giá trị.",
      "Đứng dàn ra thay vì chụm lại sẽ khiến Vacuum chỉ gom được một hai người."
    ]
  },
  {
    id: "dazzle",
    icon: "💚",
    danhHieu: "Shadow Priest",
    skills: [
      { phim: "Q", ten: "Poison Touch", mota: "Đầu độc mục tiêu, khiến kẻ địch chậm dần và mất máu liên tục trong vài giây." },
      { phim: "W", ten: "Shallow Grave", mota: "Giữ một đồng minh không thể chết trong vài giây, dù máu có tụt xuống mức thấp nhất." },
      { phim: "E", ten: "Shadow Wave", mota: "Sóng bóng tối nhảy qua các đồng minh để hồi máu, đồng thời gây sát thương cho kẻ địch đứng cạnh những người được hồi." },
      { phim: "R", ten: "Weave", mota: "Ulti: tạo vùng ảnh hưởng lớn, dần dần giảm giáp kẻ địch và tăng giáp cho đồng minh trong vùng." }
    ],
    lenSkill: "Lấy Shallow Grave ngay khi có thể và luôn nâng đúng cấp, tối đa Shadow Wave để vừa hồi vừa đổi máu, Poison Touch để trong lane, lên Weave mỗi khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Observer Wards"],
      coreItem: ["Arcane Boots", "Mekansm", "Force Staff"],
      xaXi: ["Aghanim's Scepter", "Scythe of Vyse", "Ghost Scepter"]
    },
    chienThuat: [
      "Shallow Grave không hồi máu, phải hồi tiếp ngay sau đó nếu không mục tiêu vẫn chết khi hết hiệu lực.",
      "Shadow Wave dùng lên chính mình hoặc lên người đang đứng sát địch sẽ vừa hồi vừa gây sát thương tốt nhất.",
      "Weave nên bật sớm ngay đầu giao tranh vì hiệu ứng cộng dồn theo thời gian."
    ],
    khacChe: [
      "Câm lặng hoặc khống chế Dazzle trước là cách duy nhất để dứt điểm mục tiêu mà anh ta bảo kê.",
      "Sát thương thật hoặc dồn quá nhanh khiến máu bốc hơi trước khi tay hồi kịp phản ứng."
    ]
  },
  {
    id: "deathprophet",
    icon: "👻",
    danhHieu: "Krobelus",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Carrion Swarm", mota: "Phóng bầy dơi theo hình nón, gây sát thương phép lên mọi kẻ địch trúng đòn." },
      { phim: "W", ten: "Silence", mota: "Câm lặng toàn bộ kẻ địch trong một vùng, khiến chúng không dùng được kỹ năng." },
      { phim: "E", ten: "Witchcraft", mota: "Nội tại: tăng tốc chạy và tăng số hồn ma mà Exorcism triệu ra. Lưu ý ở các bản sau kỹ năng này bị thay bằng Spirit Siphon nên tùy map có thể khác." },
      { phim: "R", ten: "Exorcism", mota: "Ulti: triệu một bầy hồn ma bay quanh Krobelus, tự động lao vào tấn công hero, lính và công trình, đồng thời hút máu về cho cô." }
    ],
    lenSkill: "Tối đa Carrion Swarm để dọn lính và đổi máu, để một điểm Silence chống lại hero phép, lên Exorcism ngay khi đủ cấp và tận dụng nó để đẩy trụ.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Circlet of Nobility"],
      giaiDoanDau: ["Boots of Speed", "Null Talisman", "Magic Wand"],
      coreItem: ["Power Treads", "Eul's Scepter of Divinity", "Shiva's Guard"],
      xaXi: ["Aghanim's Scepter", "Black King Bar", "Heart of Tarrasque"]
    },
    chienThuat: [
      "Mỗi lần bật ulti là một nhịp đẩy trụ, hãy gọi đội tập trung ăn công trình thay vì chỉ đánh nhau.",
      "Hồn ma cần thời gian để phát huy, nên bật ulti trước khi lao vào chứ không phải khi đã gần chết.",
      "Máu và giáp quan trọng hơn sát thương phép thuần, vì cô ta phải đứng gần địch thì hồn ma mới đánh được."
    ],
    khacChe: [
      "Đồ tăng giáp và kháng phép làm hồn ma mất nhiều tác dụng, ví dụ Assault Cuirass hay Hood of Defiance.",
      "Rút lui khỏi tầm hồn ma khi ulti còn hiệu lực rồi quay lại đánh sau đó là cách chống rẻ nhất."
    ]
  },
  {
    id: "doom",
    icon: "😈",
    danhHieu: "Lucifer",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Devour", mota: "Nuốt chửng một con quái rừng để lấy vàng và học được kỹ năng nội tại của con quái đó." },
      { phim: "W", ten: "Scorched Earth", mota: "Thiêu đốt mặt đất quanh mình, liên tục gây sát thương cho kẻ địch đồng thời tăng tốc chạy và hồi máu cho bản thân." },
      { phim: "E", ten: "Infernal Blade", mota: "Đòn đánh tẩm lửa địa ngục, gây sát thương theo máu tối đa của mục tiêu kèm choáng ngắn. Ở các bản DotA 1 cũ hơn vị trí này là LVL? Death nên tùy map có thể khác." },
      { phim: "R", ten: "Doom", mota: "Ulti: nguyền rủa một hero địch, khiến nó mất hoàn toàn khả năng dùng kỹ năng lẫn vật phẩm và cháy liên tục trong thời gian rất dài." }
    ],
    lenSkill: "Nuốt quái sớm để có nội tại và vàng, tối đa Scorched Earth để đi gank và trụ lane, luôn lấy Doom ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Gauntlets of Ogre Strength"],
      giaiDoanDau: ["Boots of Speed", "Ring of Health", "Magic Wand"],
      coreItem: ["Phase Boots", "Hand of Midas", "Blink Dagger"],
      xaXi: ["Shiva's Guard", "Black King Bar", "Refresher Orb"]
    },
    chienThuat: [
      "Chọn đúng con quái để nuốt: mỗi loại cho một nội tại khác nhau, có loại cho hào quang rất giá trị.",
      "Ulti chỉ dùng được lên một người nên phải nhắm đúng hero quyết định trận đấu, không phí lên tank.",
      "Blink Dagger giúp áp sát và thả ulti trước khi đối phương kịp bật đồ chống."
    ],
    khacChe: [
      "Linken's Sphere chặn đứng ulti, còn Black King Bar bật đúng lúc khiến Doom khó áp sát.",
      "Doom hồi chiêu rất lâu, sau khi anh ta dùng xong là khoảng thời gian đội bạn nên ép giao tranh."
    ]
  },
  {
    id: "dragonknight",
    icon: "🐉",
    danhHieu: "Knight Davion",
    skills: [
      { phim: "Q", ten: "Breathe Fire", mota: "Phun luồng lửa hình nón gây sát thương phép lên mọi kẻ địch phía trước." },
      { phim: "W", ten: "Dragon Tail", mota: "Quật khiên vào một mục tiêu, gây sát thương và làm choáng." },
      { phim: "E", ten: "Dragon Blood", mota: "Nội tại: tăng giáp và hồi máu liên tục, giúp trụ lane cực dai." },
      { phim: "R", ten: "Elder Dragon Form", mota: "Ulti: hóa thành rồng, đánh tầm xa với sát thương lan ra xung quanh và thêm hiệu ứng phụ theo cấp rồng." }
    ],
    lenSkill: "Tối đa Dragon Blood sớm để trụ lane và ăn rừng an toàn, giữ một điểm Dragon Tail để khống chế, lên Elder Dragon Form ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Quelling Blade"],
      giaiDoanDau: ["Boots of Speed", "Bracer", "Magic Wand"],
      coreItem: ["Power Treads", "Armlet of Mordiggian", "Black King Bar"],
      xaXi: ["Assault Cuirass", "Heart of Tarrasque", "Daedalus"]
    },
    chienThuat: [
      "Có ulti là có thể đi đẩy trụ, vì sát thương lan phá công trình rất nhanh.",
      "Dragon Blood khiến anh ta trụ lane rất tốt, đừng về nhà sớm khi chưa cần thiết.",
      "Trong giao tranh nên mở màn bằng Dragon Tail lên mục tiêu quan trọng rồi đứng đánh lâu dài."
    ],
    khacChe: [
      "Sát thương thật và các hiệu ứng giảm hồi máu làm mất lợi thế dai máu của anh ta.",
      "Dragon Knight thiếu cơ động: khống chế cứng hoặc silence khiến anh ta không làm được gì trong giao tranh."
    ]
  },
  {
    id: "drowranger",
    icon: "🏹",
    danhHieu: "Traxex",
    skills: [
      { phim: "Q", ten: "Frost Arrows", mota: "Mũi tên băng làm kẻ địch chậm hẳn lại; là kỹ năng bấm tay nên không làm hỏng việc kéo lính." },
      { phim: "W", ten: "Silence", mota: "Câm lặng mọi kẻ địch trong vùng chỉ định, chặn đứng hero dựa vào kỹ năng." },
      { phim: "E", ten: "Trueshot Aura", mota: "Hào quang cộng sát thương cho cả đội dựa trên chỉ số nhanh nhẹn của Drow, hiệu quả nhất với hero đánh xa." },
      { phim: "R", ten: "Marksmanship", mota: "Ulti: nội tại cộng rất nhiều nhanh nhẹn, nhưng bị vô hiệu khi có hero địch đứng quá gần." }
    ],
    lenSkill: "Tối đa Frost Arrows để làm chủ lane, để một điểm Silence chống mở kèo, thêm Trueshot Aura khi cần farm, lên Marksmanship ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Slippers of Agility", "Circlet of Nobility"],
      giaiDoanDau: ["Wraith Band", "Boots of Speed", "Magic Wand"],
      coreItem: ["Power Treads", "Manta Style", "Black King Bar"],
      xaXi: ["Butterfly", "Skadi", "Monkey King Bar"]
    },
    chienThuat: [
      "Luôn đứng sau cùng trong giao tranh: chỉ cần một hero địch áp sát là ulti tắt ngay.",
      "Kết hợp làm chậm bằng Frost Arrows với đồng đội có khống chế để bắt gọn mục tiêu.",
      "Sát thương đẩy trụ của Drow rất mạnh, ép trụ ngoài sớm để mở rộng vùng farm."
    ],
    khacChe: [
      "Mọi hero lao vào áp sát đều khắc chế cô ta vì làm mất hiệu lực ulti và Drow rất mỏng manh.",
      "Câm lặng và khống chế cứng khiến Drow không kịp bỏ chạy, cô ta gần như không có kỹ năng thoát thân."
    ]
  },
  {
    id: "earthshaker",
    icon: "🌋",
    danhHieu: "Raigor Stonehoof",
    skills: [
      { phim: "Q", ten: "Fissure", mota: "Đập gậy xuống đất tạo bức tường đá dài, làm choáng và đẩy văng kẻ địch trúng đòn, đồng thời chặn đường đi." },
      { phim: "W", ten: "Enchant Totem", mota: "Tăng vọt sát thương cho đòn đánh thường kế tiếp." },
      { phim: "E", ten: "Aftershock", mota: "Nội tại: mỗi lần dùng kỹ năng đều tạo chấn động làm choáng kẻ địch xung quanh." },
      { phim: "R", ten: "Echo Slam", mota: "Ulti: đập đất tạo sóng chấn dội lại; càng nhiều đơn vị địch đứng gần thì tổng sát thương càng khủng khiếp." }
    ],
    lenSkill: "Tối đa Fissure để khống chế và chặn đường, thêm Aftershock để mọi kỹ năng đều kèm choáng, lên Echo Slam ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Soul Ring", "Magic Wand"],
      coreItem: ["Arcane Boots", "Blink Dagger", "Black King Bar"],
      xaXi: ["Aghanim's Scepter", "Shiva's Guard", "Refresher Orb"]
    },
    chienThuat: [
      "Blink Dagger là món quyết định: chớp vào giữa đội hình rồi thả Echo Slam là cách ăn cả giao tranh.",
      "Nhờ Aftershock, thứ tự chuẩn khi vào là ulti rồi Fissure rồi Enchant Totem để cộng dồn choáng.",
      "Có lính hoặc quái đứng gần sẽ khuếch đại Echo Slam rất mạnh, tận dụng lúc giao tranh giữa bãi lính."
    ],
    khacChe: [
      "Black King Bar và các đồ giải khống chế làm cả chuỗi combo của anh ta mất tác dụng.",
      "Cắm mắt kiểm soát các bụi cây và đứng dàn ra khiến Earthshaker không tìm được điểm chớp vào."
    ]
  },
  {
    id: "ember",
    icon: "🔥",
    danhHieu: "Xin",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Searing Chains", mota: "Xích lửa trói ngẫu nhiên một vài kẻ địch quanh mình, khiến chúng không di chuyển được và bị thiêu đốt." },
      { phim: "W", ten: "Sleight of Fist", mota: "Lướt qua toàn bộ kẻ địch trong vùng chỉ định, đánh mỗi mục tiêu một nhát rồi quay về vị trí cũ, trong lúc đó gần như không thể bị nhắm." },
      { phim: "E", ten: "Flame Guard", mota: "Khiên lửa hấp thụ sát thương phép và liên tục thiêu đốt kẻ địch đứng gần." },
      { phim: "R", ten: "Fire Remnant", mota: "Ulti: đặt sẵn các tàn lửa trên bản đồ, kích hoạt để lao thẳng tới vị trí tàn lửa và gây sát thương diện rộng khi đến nơi." }
    ],
    lenSkill: "Tối đa Flame Guard sớm để farm và chống sát thương phép, thêm Searing Chains để bắt người, dùng Fire Remnant vừa để di chuyển vừa để gank.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Quelling Blade"],
      giaiDoanDau: ["Boots of Speed", "Wraith Band", "Magic Wand"],
      coreItem: ["Phase Boots", "Battle Fury", "Black King Bar"],
      xaXi: ["Daedalus", "Shiva's Guard", "Refresher Orb"]
    },
    chienThuat: [
      "Luôn đặt sẵn tàn lửa ở nơi an toàn trước khi lao vào, đó vừa là đường vào vừa là đường rút.",
      "Sleight of Fist dùng đúng lúc còn là cách né sát thương và các kỹ năng nhắm mục tiêu.",
      "Sát thương lan từ Battle Fury kết hợp Sleight of Fist giúp dọn lính và farm cực nhanh."
    ],
    khacChe: [
      "Khống chế cứng ngay khi anh ta vừa hạ cánh sẽ khiến Ember chết trước khi kịp thoát.",
      "Đồ và kỹ năng gây sát thương phép mạnh xuyên qua khiên lửa, còn cấm hồi phục làm anh ta rất khó trụ."
    ]
  }
,
  {
    id: "enchantress",
    icon: "🦌",
    danhHieu: "Aiushtha",
    skills: [
      { phim: "Q", ten: "Untouchable", mota: "Nội tại: mỗi khi bị đánh thường, kẻ tấn công bị giảm mạnh tốc độ đánh trong chốc lát. Khiến Enchantress cực kỳ khó bị hạ bằng đánh tay, nhất là với các carry phụ thuộc tốc độ đánh." },
      { phim: "W", ten: "Enchant", mota: "Thu phục một creep rừng hoặc creep lính về phe mình làm lính đánh thuê; nếu dùng lên tướng địch thì làm chậm nặng mục tiêu một khoảng thời gian. Đây là công cụ vừa để farm rừng vừa để đuổi giết." },
      { phim: "E", ten: "Nature's Attendants", mota: "Triệu ra một bầy tinh linh bay quanh Enchantress, liên tục hồi máu cho cô và đồng đội đứng gần trong suốt thời gian tồn tại. Hồi phục tổng cộng rất lớn nếu đứng yên trong vùng." },
      { phim: "R", ten: "Impetus", mota: "Ulti: đòn đánh tẩm phép (orb), gây thêm sát thương nguyên tố dựa trên khoảng cách giữa Enchantress và mục tiêu — càng xa càng đau. Kết hợp tầm đánh xa và làm chậm từ Enchant để đứng ngoài bắn tỉa." }
    ],
    lenSkill: "Ưu tiên Enchant sớm để farm rừng và cầm chân địch, điểm đầu cho Impetus khi đủ cấp, xen kẽ Nature's Attendants để trụ lane, Untouchable lấy sau cùng.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Circlet of Nobility"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Ring of Basilius"],
      coreItem: ["Power Treads", "Aghanim's Scepter", "Orchid Malevolence"],
      xaXi: ["Skadi", "Butterfly", "Scythe of Vyse"]
    },
    chienThuat: [
      "Enchant một creep rừng mạnh ngay từ đầu game để có thêm sức đẩy lane và bảo vệ bản thân.",
      "Khi truy sát, giữ khoảng cách tối đa rồi mới đánh — Impetus ăn theo khoảng cách nên đứng xa gây đau hơn nhiều.",
      "Nature's Attendants là công cụ trụ lane và cứu đồng đội giữa giao tranh; dùng ngay khi cả đội đang co cụm để hồi máu tập thể."
    ],
    khacChe: [
      "Rất sợ sát thương phép nổ lẻ và khống chế cứng — Untouchable không giúp gì trước combo phép.",
      "Máu và giáp thấp, dễ bị các tướng có tầm đánh xa hoặc dồn sát thương phép hạ gục trước khi kịp phản ứng."
    ]
  },
  {
    id: "enigma",
    icon: "🌌",
    danhHieu: "Darchrow",
    skills: [
      { phim: "Q", ten: "Malefice", mota: "Giam hãm mục tiêu bằng năng lượng hư không: gây sát thương và làm choáng ngắt quãng nhiều lần. Rất tốt để ngắt hồi chiêu, chặn dịch chuyển hoặc giữ chân mục tiêu bỏ chạy." },
      { phim: "W", ten: "Demonic Conversion", mota: "Hiến tế một creep để biến nó thành một nhóm eidolon nhỏ đi theo Enigma. Nếu eidolon đánh đủ số đòn, chúng tự nhân đôi. Đây là nguồn farm và đẩy lane chính của Enigma giai đoạn đầu." },
      { phim: "E", ten: "Midnight Pulse", mota: "Tạo vùng hư không dưới đất, liên tục đốt máu theo phần trăm máu tối đa của mọi kẻ địch đứng trong vùng. Càng đông và càng nhiều máu thì càng đau." },
      { phim: "R", ten: "Black Hole", mota: "Ulti: mở hố đen hút mọi kẻ địch trong vùng vào tâm, vô hiệu hóa hoàn toàn (không đi, không đánh, không dùng chiêu) và gây sát thương liên tục. Đây là một trong những chiêu khởi chiến mạnh nhất game." }
    ],
    lenSkill: "Max Demonic Conversion sớm để farm và giữ lane, điểm phụ cho Midnight Pulse và Malefice, luôn lấy Black Hole ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Soul Ring"],
      coreItem: ["Arcane Boots", "Blink Dagger", "Black King Bar"],
      xaXi: ["Refresher Orb", "Aghanim's Scepter", "Shiva's Guard"]
    },
    chienThuat: [
      "Blink Dagger là món đồ quyết định: nhảy vào giữa đội hình địch rồi mở Black Hole ngay lập tức, không cho địch kịp phản ứng.",
      "Bật Black King Bar trước khi nhảy để không bị khống chế cắt ngang Black Hole giữa chừng.",
      "Rải Midnight Pulse xuống trước rồi mới hút — cả đội địch nằm trong hố đen sẽ ăn trọn sát thương theo phần trăm máu."
    ],
    khacChe: [
      "Bất kỳ khống chế cứng nào cũng cắt được Black Hole; hãy để dành một chiêu choáng riêng cho Enigma.",
      "Trước khi có Blink Dagger, Enigma rất chậm và mỏng — gank sớm hoặc ép rừng để cắt farm eidolon."
    ]
  },
  {
    id: "ezalor",
    icon: "🕯️",
    danhHieu: "Ezalor",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Illuminate", mota: "Tích năng lượng ánh sáng rồi bắn ra một luồng dài, gây sát thương lớn cho mọi thứ trên đường đi. Tích càng lâu càng mạnh; dùng để dọn cả đợt lính từ xa hoặc bắn mù vào chỗ khuất." },
      { phim: "W", ten: "Mana Leak", mota: "Nguyền một mục tiêu: mỗi bước nó di chuyển đều bị rút mana, và nếu cạn sạch mana thì bị choáng. Trừng phạt nặng những tướng phải chạy hoặc truy đuổi." },
      { phim: "E", ten: "Chakra Magic", mota: "Truyền mana cho một đồng đội và giảm thời gian hồi chiêu của chiêu vừa dùng. Giúp cả đội, đặc biệt là các pháp sư, spam chiêu liên tục suốt giai đoạn đi lane và giao tranh." },
      { phim: "R", ten: "Spirit Form", mota: "Ulti: hóa thành dạng linh hồn, tăng mạnh sức mạnh của Illuminate và mở thêm khả năng chiếu sáng làm kẻ địch trượt đòn đánh thường. Trong dạng này Ezalor trở thành nguồn sát thương và đẩy trụ đáng gờm." }
    ],
    lenSkill: "Max Illuminate để đẩy lane và dọn lính, điểm sớm cho Chakra Magic nuôi mana đồng đội, Mana Leak lấy phụ, luôn nâng Spirit Form ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Observer Wards"],
      coreItem: ["Arcane Boots", "Force Staff", "Mekansm"],
      xaXi: ["Aghanim's Scepter", "Shiva's Guard", "Refresher Orb"]
    },
    chienThuat: [
      "Tích Illuminate từ trong bóng tối hoặc sau cây rồi thả vào lane — dọn sạch lính mà địch không thấy bạn ở đâu.",
      "Chakra Magic không chỉ nạp mana mà còn rút ngắn hồi chiêu, hãy dùng ngay sau khi đồng đội tung chiêu chủ lực.",
      "Ezalor đẩy trụ cực nhanh: chia lane, ép địch phải về giữ nhà trong khi đội mình ăn mục tiêu khác."
    ],
    khacChe: [
      "Máu rất mỏng, gần như không có khả năng tự vệ nếu bị áp sát — dễ bị các tướng nhảy vào giết ngay.",
      "Illuminate cần thời gian tích và đứng yên, chỉ cần ép giao tranh liên tục là Ezalor khó phát huy sát thương."
    ]
  },
  {
    id: "furion",
    icon: "🌳",
    danhHieu: "Furion",
    skills: [
      { phim: "Q", ten: "Sprout", mota: "Mọc một vòng cây bao quanh mục tiêu, nhốt nó lại trong chốc lát. Vừa dùng để chặn đường chạy trốn, vừa dùng để tự cứu mình hoặc chặn đường truy đuổi của địch." },
      { phim: "W", ten: "Teleportation", mota: "Dịch chuyển tới bất kỳ điểm nào trên bản đồ sau một khoảng niệm chú. Đây là chiêu định hình lối chơi của Furion: có mặt ở mọi nơi, tách đẩy lane, gank bất ngờ và bỏ chạy an toàn." },
      { phim: "E", ten: "Force of Nature", mota: "Biến một cụm cây thành đàn treant chiến đấu cho Furion. Dùng để đẩy trụ cực nhanh, farm rừng, hoặc thêm sát thương và làm lá chắn thịt trong giao tranh." },
      { phim: "R", ten: "Wrath of Nature", mota: "Ulti: bắn một tia năng lượng nảy lần lượt giữa các mục tiêu địch trên toàn bản đồ, sát thương tăng dần theo mỗi lần nảy. Dùng để kết liễu tướng địch máu thấp ở bất cứ đâu hoặc dọn lính toàn cầu." }
    ],
    lenSkill: "Max Force of Nature để tách đẩy và farm, điểm sớm cho Sprout đủ dùng khi gank, Teleportation nâng dần để rút ngắn thời gian chờ, lấy Wrath of Nature ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Circlet of Nobility"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Null Talisman"],
      coreItem: ["Power Treads", "Orchid Malevolence", "Necronomicon 3"],
      xaXi: ["Aghanim's Scepter", "Assault Cuirass", "Boots of Travel"]
    },
    chienThuat: [
      "Luôn giữ Teleportation sẵn sàng: đẩy một lane trống rồi dịch chuyển sang lane khác trước khi địch kịp đến chặn.",
      "Sprout dùng đúng lúc còn giá trị hơn sát thương — nhốt carry địch giữa giao tranh hoặc chặn đường rút của cả đội.",
      "Wrath of Nature nảy tăng dần sát thương, hãy bắn từ phía có nhiều lính/treant để phát cuối rơi vào tướng địch."
    ],
    khacChe: [
      "Rất mỏng và không có khống chế cứng; nếu bị bắt khi chưa kịp Teleportation thì gần như chắc chắn chết.",
      "Cắm mắt canh lane trống và giữ lính gần trụ sẽ vô hiệu hóa lối chơi tách đẩy của Furion."
    ]
  },
  {
    id: "geomancer",
    icon: "🐭",
    danhHieu: "Meepo",
    skills: [
      { phim: "Q", ten: "Earthbind", mota: "Ném một tấm lưới xuống khu vực, trói chân mọi kẻ địch trong vùng và làm lộ cả mục tiêu tàng hình. Kẻ bị trói không thể di chuyển hay dịch chuyển — công cụ bắt người chủ lực của Meepo." },
      { phim: "W", ten: "Poof", mota: "Một bản sao biến mất rồi dịch chuyển tới một bản sao khác, gây sát thương phép quanh cả điểm đi lẫn điểm đến. Vừa là cách gom quân, vừa là nguồn sát thương diện rộng chính." },
      { phim: "E", ten: "Geostrike", mota: "Nội tại đòn đánh: mỗi cú đánh của mọi bản sao đều gây thêm sát thương theo thời gian và làm chậm mục tiêu. Nhiều Meepo đánh cùng lúc khiến nạn nhân gần như đứng yên." },
      { phim: "R", ten: "Divided We Stand", mota: "Ulti: tạo thêm các bản sao Meepo hoàn chỉnh, mỗi bản sao đều có chiêu thức và chia sẻ một phần chỉ số từ trang bị của bản gốc. Nếu bất kỳ bản sao nào chết thì cả đội hình Meepo chết theo." }
    ],
    lenSkill: "Max Poof để farm và dồn sát thương, một điểm Earthbind sớm để bắt người, Geostrike nâng sau, và luôn ưu tiên Divided We Stand mỗi khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Slippers of Agility"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Ring of Basilius"],
      coreItem: ["Power Treads", "Diffusal Blade", "Blink Dagger"],
      xaXi: ["Skadi", "Heart of Tarrasque", "Ethereal Blade"]
    },
    chienThuat: [
      "Rải các bản sao ra nhiều lane cùng lúc để farm và đẩy — không tướng nào chia bản đồ nhanh bằng Meepo.",
      "Combo chuẩn: Earthbind trói mục tiêu, các bản sao Poof đồng loạt vào đúng vị trí đó rồi đánh tay cho Geostrike chồng lên.",
      "Tập điều khiển nhóm bản sao thành thục — Meepo mạnh hay yếu phụ thuộc gần như hoàn toàn vào tay điều khiển."
    ],
    khacChe: [
      "Chỉ cần giết một bản sao là toàn bộ Meepo chết — hãy dồn sát thương vào con lạc đàn hoặc con máu thấp nhất.",
      "Sát thương phép diện rộng và các chiêu đánh trúng nhiều mục tiêu cùng lúc là khắc tinh tuyệt đối của Meepo."
    ]
  },
  {
    id: "goblinshredder",
    icon: "🪚",
    danhHieu: "Rizzrack",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Whirling Death", mota: "Quay lưỡi cưa gây sát thương diện rộng quanh mình; nếu có cây trong vùng thì cây bị chặt và mục tiêu bị giảm thêm chỉ số cơ bản. Đây là nguồn sát thương lặp lại rẻ tiền của Shredder." },
      { phim: "W", ten: "Timber Chain", mota: "Bắn móc xích vào một cái cây và kéo mình bay tới đó, gây sát thương cho kẻ địch trên đường bay. Là công cụ cơ động chính: lao vào, thoát ra, hoặc băng rừng bất ngờ." },
      { phim: "E", ten: "Reactive Armor", mota: "Nội tại: mỗi lần bị đánh trúng, Shredder cộng dồn thêm giáp và hồi máu, các lớp cộng dồn tự mất dần theo thời gian. Đánh càng nhiều thì càng khó giết bằng đòn thường." },
      { phim: "R", ten: "Chakram", mota: "Ulti: phóng lưỡi cưa khổng lồ tới một điểm, đứng đó liên tục cắt và làm chậm mọi kẻ địch chạm phải, rồi thu hồi về gây sát thương lần nữa trên đường quay lại." }
    ],
    lenSkill: "Max Reactive Armor để trụ lane thật lì, điểm sớm cho Whirling Death đổi máu, Timber Chain lấy đủ để cơ động, và luôn nâng Chakram khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Ring of Protection"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Soul Ring"],
      coreItem: ["Arcane Boots", "Bloodstone", "Blade Mail"],
      xaXi: ["Shiva's Guard", "Black King Bar", "Heart of Tarrasque"]
    },
    chienThuat: [
      "Luôn đứng gần rừng hoặc cụm cây — không có cây thì Timber Chain vô dụng và Shredder mất hết cơ động.",
      "Cứ để địch đánh mình vài đòn đầu giao tranh: Reactive Armor cộng dồn càng nhiều, bạn càng lì đòn về sau.",
      "Chakram đặt chắn ngang đường rút của địch, vừa làm chậm vừa cắt máu liên tục trong lúc đồng đội dồn vào."
    ],
    khacChe: [
      "Sát thương phép thuần khắc chế hoàn toàn Reactive Armor, vì giáp cộng dồn không giảm được sát thương phép.",
      "Các chiêu phá cây hoặc giao tranh ở chỗ trống khiến Shredder không có điểm bám để lao đi hay thoát thân."
    ]
  },
  {
    id: "gyrocopter",
    icon: "🚁",
    danhHieu: "Aurel Vlaicu",
    skills: [
      { phim: "Q", ten: "Rocket Barrage", mota: "Bắn liên tiếp hàng loạt tên lửa nhỏ vào mọi kẻ địch đứng gần trong vài giây. Càng ít mục tiêu quanh mình thì mỗi mục tiêu ăn càng nhiều đạn — cực mạnh khi solo đổi máu giai đoạn đầu." },
      { phim: "W", ten: "Homing Missile", mota: "Phóng một quả tên lửa tự dò tìm bay chậm đuổi theo mục tiêu, khi trúng thì gây sát thương lớn và làm choáng. Tên lửa có thể bị đánh gãy trước khi nó chạm đích." },
      { phim: "E", ten: "Flak Cannon", mota: "Trong thời gian hiệu lực, mỗi đòn đánh thường của Gyrocopter đồng thời bắn trúng tất cả kẻ địch trong bán kính lớn quanh mình. Đây là nguồn sát thương diện rộng và đẩy lane chủ lực." },
      { phim: "R", ten: "Call Down", mota: "Ulti: gọi hai đợt không kích dội xuống một khu vực, đợt đầu gây sát thương và làm chậm, đợt sau đánh mạnh hơn. Tầm thi triển toàn cầu ở một số phiên bản, dùng để mở giao tranh hoặc kết liễu từ xa." }
    ],
    lenSkill: "Max Rocket Barrage để áp đảo giai đoạn đi lane, một điểm sớm cho Homing Missile lấy choáng, Flak Cannon nâng khi bắt đầu farm nhanh, luôn lấy Call Down đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Slippers of Agility"],
      giaiDoanDau: ["Boots of Speed", "Wraith Band", "Magic Wand"],
      coreItem: ["Power Treads", "Black King Bar", "Satanic"],
      xaXi: ["Daedalus", "Butterfly", "Monkey King Bar"]
    },
    chienThuat: [
      "Rocket Barrage chỉ có tầm rất ngắn — phải áp sát mới ra đủ sát thương, hãy dùng khi có đồng đội khống chế trước.",
      "Bật Flak Cannon rồi mới lao vào đám đông: một đòn đánh trúng cả đội địch, sát thương cộng dồn rất khủng khiếp.",
      "Dùng Flak Cannon để dọn cả đợt lính trong vài giây rồi lập tức chuyển sang farm rừng hoặc đẩy trụ."
    ],
    khacChe: [
      "Thân mỏng và phải đứng gần mới phát huy sức mạnh, rất dễ bị khống chế cứng bắt chết ngay.",
      "Homing Missile có thể bị lính hoặc chính tướng địch đánh gãy — chú ý phá tên lửa để né đòn choáng."
    ]
  },
  {
    id: "huskar",
    icon: "🔥",
    danhHieu: "Sacred Warrior",
    skills: [
      { phim: "Q", ten: "Inner Vitality", mota: "Hồi máu liên tục cho bản thân hoặc đồng đội trong một khoảng thời gian, và hồi mạnh hơn hẳn khi mục tiêu đang ở mức máu thấp. Chính chiêu này cho phép Huskar chơi liều mạng." },
      { phim: "W", ten: "Burning Spear", mota: "Tẩm lửa lên giáo: các đòn đánh thường tiếp theo gây sát thương cháy cộng dồn theo thời gian, đổi lại Huskar tự mất một ít máu mỗi lần dùng. Có thể bật tự động để đánh liên tục." },
      { phim: "E", ten: "Berserker's Blood", mota: "Nội tại: máu càng thấp thì Huskar càng tăng tốc độ đánh và kháng phép. Đây là lý do Huskar càng gần chết lại càng nguy hiểm và càng khó bị giết bằng phép." },
      { phim: "R", ten: "Life Break", mota: "Ulti: lao thẳng tới mục tiêu, chém một đòn hy sinh phần máu của chính mình để cắt đi một phần lớn máu của địch theo phần trăm, đồng thời làm chậm nặng mục tiêu. Vừa là chiêu lao vào vừa là chiêu tự hạ máu để kích hoạt nội tại." }
    ],
    lenSkill: "Xen kẽ Burning Spear và Berserker's Blood để vừa có sát thương vừa có kháng phép, một điểm Inner Vitality sớm để trụ lane, luôn lấy Life Break khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Gauntlets of Ogre Strength"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Helm of Iron Will"],
      coreItem: ["Power Treads", "Armlet of Mordiggian", "Black King Bar"],
      xaXi: ["Satanic", "Assault Cuirass", "Heart of Tarrasque"]
    },
    chienThuat: [
      "Chơi Huskar là nghệ thuật giữ máu thấp có kiểm soát: đủ thấp để ăn nội tại nhưng vẫn đủ sống nhờ Inner Vitality.",
      "Armlet bật tắt liên tục là kỹ năng bắt buộc — vừa hạ máu kích hoạt Berserker's Blood vừa tăng sức mạnh đánh.",
      "Life Break vào đúng mục tiêu ưu tiên (carry hoặc pháp sư địch) rồi dồn Burning Spear để đốt máu liên tục."
    ],
    khacChe: [
      "Các chiêu chặn hồi máu, sát thương vật lý thuần và giảm giáp khiến Huskar chết rất nhanh vì kháng phép không đỡ được.",
      "Khống chế cứng dài hoặc câm lặng lúc Huskar máu thấp là bản án tử — hắn không có cách thoát ngoài chạy bộ."
    ]
  },
  {
    id: "jakiro",
    icon: "🐉",
    danhHieu: "Twin Head Dragon",
    skills: [
      { phim: "Q", ten: "Dual Breath", mota: "Thổi một luồng băng rồi tiếp nối bằng luồng lửa theo cùng hướng: luồng băng làm chậm, luồng lửa gây sát thương thiêu đốt. Trúng cả hai luồng thì sát thương và làm chậm rất đáng kể." },
      { phim: "W", ten: "Ice Path", mota: "Tạo một đường băng dài trên mặt đất sau một nhịp trễ; mọi kẻ địch chạm phải bị choáng và gây ít sát thương. Dùng để chặn đường rút hoặc khóa cả đội hình địch đang đứng thành hàng." },
      { phim: "E", ten: "Liquid Fire", mota: "Nội tại tự động: đòn đánh của Jakiro tạo vùng lửa quanh mục tiêu, gây sát thương theo thời gian và giảm mạnh tốc độ đánh của kẻ địch trúng phải. Rất mạnh khi quấy rối trụ và đi lane." },
      { phim: "R", ten: "Macropyre", mota: "Ulti: đốt một dải lửa dài trên mặt đất, thiêu liên tục mọi kẻ địch đứng trong đó suốt thời gian tồn tại. Dùng chặn lối vào hoặc lối ra của giao tranh sẽ hiệu quả hơn là ném thẳng vào mặt địch." }
    ],
    lenSkill: "Max Dual Breath để có sát thương và làm chậm mạnh giai đoạn đầu, một điểm Ice Path sớm để khống chế, Liquid Fire lấy phụ, luôn nâng Macropyre khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Natherezim Buckler"],
      coreItem: ["Arcane Boots", "Aghanim's Scepter", "Blink Dagger"],
      xaXi: ["Shiva's Guard", "Refresher Orb", "Black King Bar"]
    },
    chienThuat: [
      "Ice Path có độ trễ trước khi hiện: hãy nhắm vào nơi địch SẼ chạy tới, không phải nơi địch đang đứng.",
      "Combo cơ bản: Ice Path khóa chân, Dual Breath thổi dọc theo hàng địch, rồi trải Macropyre lên đúng vị trí đó.",
      "Liquid Fire bật tự động khi phá trụ — vừa giảm sát thương lính địch vừa quấy rối tướng địch bảo vệ trụ."
    ],
    khacChe: [
      "Mọi chiêu của Jakiro đều là vùng đất cố định và có độ trễ, chỉ cần né chuẩn là hắn gần như vô hại.",
      "Rất chậm và mỏng, không có cách thoát thân — áp sát bằng tướng có chiêu lao vào là bắt chết dễ dàng."
    ]
  },
  {
    id: "kunkka",
    icon: "⚓",
    danhHieu: "Admiral Proudmoore",
    skills: [
      { phim: "Q", ten: "Torrent", mota: "Sau một nhịp trễ, một cột nước phun lên từ điểm chỉ định, hất tung kẻ địch lên không, gây sát thương và làm chậm nặng khi rơi xuống. Cần đoán trước đường đi của địch để trúng." },
      { phim: "W", ten: "Tidebringer", mota: "Nội tại tích lũy: sau thời gian hồi, đòn đánh thường kế tiếp của Kunkka gây thêm sát thương lớn và chém lan ra hình quạt trúng nhiều kẻ địch cùng lúc. Nguồn dọn lính và đổi máu chính giai đoạn đi lane." },
      { phim: "E", ten: "X Marks the Spot", mota: "Đánh dấu một mục tiêu (địch hoặc đồng minh); sau một lúc hoặc khi Kunkka kích hoạt lại, mục tiêu bị kéo ngược về đúng vị trí đã đánh dấu. Dùng để giữ chân địch hoặc cứu đồng đội." },
      { phim: "R", ten: "Ghostship", mota: "Ulti: triệu một con tàu ma lao tới khu vực rồi vỡ tan, làm choáng và gây sát thương diện rộng cho địch, đồng thời ban cho đồng đội trong vùng hiệu ứng say rượu giúp trì hoãn phần lớn sát thương nhận vào." }
    ],
    lenSkill: "Max Tidebringer để thống trị lane và dọn lính, một điểm sớm cho Torrent và X Marks the Spot để combo, luôn lấy Ghostship khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Quelling Blade"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Bottle"],
      coreItem: ["Phase Boots", "Armlet of Mordiggian", "Blink Dagger"],
      xaXi: ["Black King Bar", "Assault Cuirass", "Refresher Orb"]
    },
    chienThuat: [
      "Combo kinh điển: X Marks the Spot lên địch, đặt Torrent vào đúng chỗ đánh dấu, kéo về cho ăn trọn cột nước.",
      "X Marks the Spot cũng dùng để cứu đồng đội đang bị vây, hoặc kéo chính mình sau khi lao vào chém Tidebringer.",
      "Đừng phí Tidebringer lên lính khi sắp giao tranh — giữ lại để đòn chém quạt trúng nhiều tướng địch."
    ],
    khacChe: [
      "Torrent và Ghostship đều có độ trễ rõ ràng, người chơi tỉnh táo có thể đi lệch để né hoàn toàn.",
      "Sau khi tung hết combo, Kunkka khá vô hại trong lúc chờ hồi chiêu — ép giao tranh kéo dài sẽ có lợi."
    ]
  },
  {
    id: "legioncommander",
    icon: "⚔️",
    danhHieu: "Tresdin",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Overwhelming Odds", mota: "Đâm giáo từ dưới đất lên một khu vực, gây sát thương tăng theo số lượng kẻ địch và lính trong vùng, đồng thời tăng tốc chạy cho Legion Commander theo số mục tiêu trúng phải. Vừa dọn lính vừa đuổi giết." },
      { phim: "W", ten: "Press the Attack", mota: "Ban cho bản thân hoặc đồng đội hiệu ứng gỡ bỏ khống chế và làm chậm, đồng thời tăng mạnh tốc độ đánh và hồi máu trong thời gian ngắn. Là chiêu vừa giải cứu vừa buff tấn công." },
      { phim: "E", ten: "Moment of Courage", mota: "Nội tại: khi bị đánh, có cơ hội phản đòn ngay lập tức một cú đánh có hút máu. Càng ở giữa đám đông đánh nhau thì càng kích hoạt nhiều." },
      { phim: "R", ten: "Duel", mota: "Ulti: ép một tướng địch tay đôi với mình, cả hai bị buộc phải đánh thường và không dùng được chiêu thức hay trang bị. Ai sống sót sẽ nhận thêm sát thương cơ bản vĩnh viễn — thắng càng nhiều càng mạnh." }
    ],
    lenSkill: "Max Overwhelming Odds để farm và đuổi giết, một điểm Press the Attack sớm để tự cứu, Moment of Courage nâng dần, luôn lấy Duel khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Quelling Blade"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Bracer"],
      coreItem: ["Phase Boots", "Blink Dagger", "Black King Bar"],
      xaXi: ["Assault Cuirass", "Satanic", "Heart of Tarrasque"]
    },
    chienThuat: [
      "Blink Dagger là món đồ bắt buộc: nhảy thẳng vào và Duel đúng mục tiêu mình chắc chắn thắng, không phải mục tiêu gần nhất.",
      "Chỉ mở Duel khi có đồng đội đứng gần để dồn sát thương lên đối thủ — Duel đơn độc là tự sát.",
      "Mỗi lần thắng Duel cộng sát thương vĩnh viễn, hãy chọn giao tranh dễ ăn giai đoạn đầu để cuộn tuyết."
    ],
    khacChe: [
      "Trong lúc Duel, cả hai không dùng được chiêu và trang bị — hãy Duel Legion Commander bằng tướng đánh tay khỏe hơn hoặc để đồng đội ở gần cứu.",
      "Trước khi có Blink Dagger, Legion Commander không có cách áp sát; chỉ cần giữ khoảng cách và làm chậm là vô hiệu hóa."
    ]
  },
  {
    id: "leshrac",
    icon: "⚡",
    danhHieu: "Tormented Soul",
    skills: [
      { phim: "Q", ten: "Split Earth", mota: "Nứt đất tại một khu vực sau nhịp trễ ngắn, gây sát thương và làm choáng mọi kẻ địch đứng trong đó. Đây là khống chế duy nhất của Leshrac, cần dự đoán vị trí địch." },
      { phim: "W", ten: "Diabolic Edict", mota: "Bao quanh mình bằng các quả cầu năng lượng liên tục nổ vào kẻ địch và công trình gần đó. Càng ít mục tiêu ở gần thì mỗi mục tiêu càng ăn nhiều phát nổ — cực mạnh khi phá trụ." },
      { phim: "E", ten: "Lightning Storm", mota: "Gọi tia sét đánh vào một mục tiêu rồi nảy sang các kẻ địch gần đó, gây sát thương và làm chậm ngắn từng mục tiêu trúng phải. Rẻ và hồi nhanh, dùng để quấy rối liên tục." },
      { phim: "R", ten: "Pulse Nova", mota: "Ulti: bật tắt, liên tục phát ra các đợt sóng năng lượng gây sát thương cho mọi kẻ địch quanh Leshrac, đổi lại tiêu hao mana đều đặn. Bật lên là cả đội địch đứng gần đều bị đốt máu." }
    ],
    lenSkill: "Max Diabolic Edict để đẩy trụ và ép lane, một điểm Split Earth sớm để có khống chế, Lightning Storm nâng xen kẽ, luôn lấy Pulse Nova khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Null Talisman"],
      coreItem: ["Arcane Boots", "Bloodstone", "Blink Dagger"],
      xaXi: ["Shiva's Guard", "Aghanim's Scepter", "Black King Bar"]
    },
    chienThuat: [
      "Diabolic Edict cộng Pulse Nova biến Leshrac thành máy phá trụ — đẩy trụ nhanh hơn hầu hết mọi tướng trong game.",
      "Pulse Nova ngốn mana khủng khiếp, chỉ bật khi thực sự vào giao tranh và cần Bloodstone để duy trì.",
      "Blink Dagger giúp nhảy vào giữa đội hình địch rồi bật hết chiêu diện rộng cùng lúc."
    ],
    khacChe: [
      "Máu thấp và bắt buộc phải đứng gần mới gây sát thương — mọi khống chế cứng hoặc dồn sát thương đều giết Leshrac rất nhanh.",
      "Ép cạn mana bằng cách kéo dài trận đấu hoặc dùng các chiêu rút mana sẽ vô hiệu hóa hoàn toàn Pulse Nova."
    ]
  }
,
  {
    id: "lifestealer",
    icon: "🧟",
    danhHieu: "Naix",
    skills: [
      { phim: "Q", ten: "Rage", mota: "Miễn nhiễm phép thuật trong thời gian ngắn và tăng tốc chạy. Dùng để lao vào, thoát khống chế hoặc bọc qua chiêu cuối của địch." },
      { phim: "W", ten: "Feast", mota: "Nội tại: mỗi đòn đánh gây thêm sát thương theo phần trăm máu tối đa của mục tiêu và hồi máu cho bản thân. Càng đánh trâu bò càng ăn mạnh." },
      { phim: "E", ten: "Open Wounds", mota: "Xé rách mục tiêu, làm chậm cực nặng và cho phép đồng đội hút máu khi đánh vào nó. Là chiêu khóa chân chính để bắt lẻ." },
      { phim: "R", ten: "Infest", mota: "Ulti: chui vào trong một creep hoặc lính (kể cả quái rừng), ẩn mình và hồi máu; khi nhảy ra sẽ gây sát thương cho địch xung quanh. Dùng để phục kích, di chuyển bí mật hoặc trốn thoát." }
    ],
    lenSkill: "Ưu tiên Feast để có sức đánh sớm, điểm vào Rage khi cần thoát khống chế, Open Wounds lấy vài điểm để gank, và luôn nâng Infest ở cấp 6-11-16.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Quelling Blade"],
      giaiDoanDau: ["Power Treads", "Magic Wand", "Ring of Health"],
      coreItem: ["Armlet of Mordiggian", "Black King Bar", "Sange and Yasha"],
      xaXi: ["Satanic", "Assault Cuirass", "Heart of Tarrasque"]
    },
    chienThuat: [
      "Rage cho miễn nhiễm phép nên đừng bật quá sớm — giữ lại để phá chiêu khống chế quan trọng của địch.",
      "Feast khiến bạn khắc chế các tướng máu dày, hãy chủ động nhắm vào tank thay vì né tránh chúng.",
      "Infest vào creep đứng gần lane địch rồi chờ đồng đội mở giao tranh, nhảy ra sau lưng đội hình là combo bắt lẻ rất khó đỡ.",
      "Armlet lên sớm giúp farm rừng và đi gank cực nhanh, nhớ tắt bật để giữ máu khi ra khỏi giao tranh."
    ],
    khacChe: [
      "Các chiêu khống chế vật lý (choáng từ đòn đánh, trói, đẩy lùi) vẫn ăn xuyên qua Rage.",
      "Giáp cao và các món giảm hút máu khiến Feast mất tác dụng; hãy cắm mắt và đứng theo nhóm để không bị bắt lẻ."
    ]
  },
  {
    id: "lonedruid",
    icon: "🐻",
    danhHieu: "Sylla",
    skills: [
      { phim: "Q", ten: "Summon Spirit Bear", mota: "Triệu hồi một con gấu chiến đấu riêng, có thể mang và dùng đồ riêng. Gấu chết sẽ hồi lại sau một khoảng thời gian." },
      { phim: "W", ten: "Rabid", mota: "Tăng tốc đánh và tốc chạy cho cả Lone Druid lẫn Spirit Bear trong thời gian ngắn." },
      { phim: "E", ten: "Synergy", mota: "Nội tại: tăng sức mạnh cho Spirit Bear và cường hóa các kỹ năng còn lại của Lone Druid." },
      { phim: "R", ten: "True Form", mota: "Ulti: biến thành gấu, đổi sang đánh cận chiến, tăng mạnh máu và giáp nhưng chậm hơn. Ở dạng này có thêm chiêu phụ Battle Cry buff sát thương và giáp cho toàn đội." }
    ],
    lenSkill: "Max Summon Spirit Bear trước để có sức đẩy trụ và farm, xen kẽ Synergy, lấy Rabid sau, nâng True Form khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Stout Shield"],
      giaiDoanDau: ["Boots of Speed", "Ring of Basilius", "Magic Wand"],
      coreItem: ["Vladmir's Offering", "Radiance", "Assault Cuirass"],
      xaXi: ["Manta Style", "Butterfly", "Divine Rapier"]
    },
    chienThuat: [
      "Gấu và người là hai đơn vị riêng: cho gấu đẩy một lane trong khi bản thân farm rừng hoặc lane khác, tốc độ ăn vàng gần như gấp đôi.",
      "Đồ sát thương và Radiance nên để trên gấu vì gấu đánh nhiều hơn và không sợ chết vĩnh viễn.",
      "Đừng để gấu đi quá xa bản thân, nếu vượt khoảng cách cho phép gấu sẽ tự biến mất.",
      "Trong giao tranh, bật True Form để đứng chịu đòn và dùng Battle Cry ngay trước khi lao vào."
    ],
    khacChe: [
      "Các chiêu sát thương diện rộng dọn lính rất nhanh giết gấu, khiến Lone Druid mất phần lớn sức mạnh.",
      "Đội hình đẩy trụ nhanh hoặc gank sớm sẽ chặn được lối chơi chia lane farm của Lone Druid."
    ]
  },
  {
    id: "luna",
    icon: "🌙",
    danhHieu: "Moon Rider",
    skills: [
      { phim: "Q", ten: "Lucent Beam", mota: "Chiếu một tia sáng vào mục tiêu, gây sát thương phép và làm choáng trong chớp mắt." },
      { phim: "W", ten: "Moon Glaive", mota: "Nội tại: đòn đánh nảy sang các kẻ địch gần đó, sát thương giảm dần theo mỗi lần nảy. Giúp dọn lính và farm rất nhanh." },
      { phim: "E", ten: "Lunar Blessing", mota: "Hào quang bị động tăng sát thương cho Luna và đồng minh xung quanh, đồng thời cải thiện tầm nhìn ban đêm." },
      { phim: "R", ten: "Eclipse", mota: "Ulti: liên tục dội các tia Lucent Beam xuống kẻ địch ngẫu nhiên quanh Luna, gây sát thương phép rất lớn nếu chỉ có một mục tiêu." }
    ],
    lenSkill: "Max Lunar Blessing và Moon Glaive để farm cùng sức đánh, lấy vài điểm Lucent Beam để quấy rối lane, luôn nâng Eclipse khi có thể.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Slippers of Agility"],
      giaiDoanDau: ["Power Treads", "Wraith Band", "Magic Wand"],
      coreItem: ["Mask of Madness", "Manta Style", "Black King Bar"],
      xaXi: ["Butterfly", "Satanic", "Daedalus"]
    },
    chienThuat: [
      "Moon Glaive khiến Luna dọn lính cực nhanh — hãy tận dụng để ăn vàng vượt trội trong giai đoạn giữa game.",
      "Eclipse phát huy tối đa khi chỉ còn một mục tiêu trong tầm, hãy dùng khi địch bị khống chế hoặc kẹt trong khe hẹp.",
      "Kết hợp Eclipse với các chiêu giữ chân của đồng đội để không tia nào bị lãng phí.",
      "Lunar Blessing là hào quang cho cả đội, nên đứng gần đồng đội trong giao tranh."
    ],
    khacChe: [
      "Luna rất mỏng máu và không có chiêu thoát, dễ bị lao vào bắt gọn.",
      "Kháng phép cao hoặc khiên chống phép làm Eclipse gần như vô hại."
    ]
  },
  {
    id: "lycan",
    icon: "🐺",
    danhHieu: "Banehallow",
    skills: [
      { phim: "Q", ten: "Summon Wolves", mota: "Triệu hồi hai con sói chiến đấu; ở cấp cao sói có thêm chí mạng và khả năng tàng hình." },
      { phim: "W", ten: "Howl", mota: "Tiếng hú vang xa làm giảm sát thương của quân địch trong một khoảng thời gian ngắn." },
      { phim: "E", ten: "Feral Impulse", mota: "Hào quang bị động tăng sát thương và hồi máu cho Lycan cùng các đơn vị đồng minh xung quanh, kể cả sói và lính." },
      { phim: "R", ten: "Shapeshift", mota: "Ulti: biến thành sói, đạt tốc chạy tối đa và có tỉ lệ chí mạng cao, kèm tầm nhìn tốt hơn. Là chiêu vừa để lao vào vừa để chạy trốn." }
    ],
    lenSkill: "Max Summon Wolves và Feral Impulse trước để farm rừng và đẩy trụ sớm, Howl lấy sau, nâng Shapeshift ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Quelling Blade"],
      giaiDoanDau: ["Boots of Speed", "Ring of Basilius", "Helm of Iron Will"],
      coreItem: ["Vladmir's Offering", "Helm of the Dominator", "Black King Bar"],
      xaXi: ["Assault Cuirass", "Satanic", "Skadi"]
    },
    chienThuat: [
      "Lycan là một trong những tướng đẩy trụ mạnh nhất: gom sói, lính bị khống chế và hào quang Feral Impulse là trụ đổ rất nhanh.",
      "Shapeshift cho tốc chạy tối đa nên Lycan gần như không thể bị bỏ chạy khỏi — chủ động gank các lane lẻ từ sớm.",
      "Có thể farm rừng gần như ngay từ cấp 1 nhờ sói, hãy tận dụng để lên đồ sớm.",
      "Trong giao tranh, nhắm thẳng vào tướng hỗ trợ phía sau thay vì đứng đánh nhau ở tuyến đầu."
    ],
    khacChe: [
      "Các chiêu diện rộng dọn sạch sói và lính khiến sức đẩy của Lycan sụp đổ.",
      "Làm chậm mạnh, trói hoặc bẫy khiến Shapeshift mất giá trị; đồng thời hãy giữ trụ bằng cách đẩy lính ngược lại."
    ]
  },
  {
    id: "magnus",
    icon: "🦣",
    danhHieu: "Magnataur",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Shockwave", mota: "Bắn một luồng sóng chấn theo đường thẳng, gây sát thương lên mọi kẻ địch trúng đường đi." },
      { phim: "W", ten: "Empower", mota: "Buff lên bản thân hoặc một đồng minh, tăng sát thương và cho đòn đánh chém lan sang kẻ địch xung quanh." },
      { phim: "E", ten: "Skewer", mota: "Lao thẳng về phía trước, xiên và kéo theo mọi kẻ địch trên đường đi rồi làm chậm chúng." },
      { phim: "R", ten: "Reverse Polarity", mota: "Ulti: hút toàn bộ kẻ địch trong vùng lớn về trước mặt Magnus và làm choáng chúng trong nhiều giây — một trong những chiêu mở giao tranh mạnh nhất game." }
    ],
    lenSkill: "Max Empower để hỗ trợ carry farm (hoặc max Shockwave nếu đi lane quấy rối), lấy một điểm Skewer, luôn nâng Reverse Polarity khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Clarity"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Bracer"],
      coreItem: ["Blink Dagger", "Arcane Boots", "Black King Bar"],
      xaXi: ["Refresher Orb", "Shiva's Guard", "Assault Cuirass"]
    },
    chienThuat: [
      "Blink Dagger là món bắt buộc: nhảy vào giữa đội hình địch rồi bấm Reverse Polarity ngay lập tức.",
      "Luôn Empower cho carry của đội trước giao tranh và khi họ đang farm rừng — chém lan giúp dọn trại cực nhanh.",
      "Refresher Orb cho phép mở giao tranh hai lần, gần như là kết thúc trận đấu nếu đội có sát thương diện rộng.",
      "Skewer có thể dùng để kéo một mục tiêu về phía đồng đội hoặc để tự thoát khỏi vị trí xấu."
    ],
    khacChe: [
      "Khiên chống phép của địch làm hỏng hoàn toàn Reverse Polarity — hãy ép họ dùng khiên trước.",
      "Cắm mắt các điểm cao và bụi rậm để thấy Magnus trước khi hắn kịp nhảy vào."
    ]
  },
  {
    id: "medusa",
    icon: "🐍",
    danhHieu: "Gorgon",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Split Shot", mota: "Bật/tắt: mỗi đòn đánh bắn thêm mũi tên sang các mục tiêu khác gần đó với sát thương giảm bớt. Farm và đẩy lính cực mạnh." },
      { phim: "W", ten: "Mystic Snake", mota: "Thả một con rắn nảy qua lại giữa các kẻ địch, gây sát thương và hút mana, sát thương tăng dần theo mỗi lần nảy rồi trả mana về cho Medusa." },
      { phim: "E", ten: "Mana Shield", mota: "Bật/tắt: một phần sát thương nhận vào được chuyển sang trừ mana thay vì máu, khiến Medusa cực kỳ khó chết khi đầy mana." },
      { phim: "R", ten: "Stone Gaze", mota: "Ulti: kẻ địch nhìn về phía Medusa sẽ bị chậm rồi hóa đá, không thể hành động và nhận thêm sát thương vật lý." }
    ],
    lenSkill: "Max Mystic Snake để trụ lane và giữ mana, xen kẽ Mana Shield, lấy Split Shot khi bắt đầu farm mạnh, nâng ulti khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Slippers of Agility"],
      giaiDoanDau: ["Power Treads", "Wraith Band", "Magic Wand"],
      coreItem: ["Manta Style", "Skadi", "Linken's Sphere"],
      xaXi: ["Butterfly", "Divine Rapier", "Satanic"]
    },
    chienThuat: [
      "Mana chính là máu của Medusa: mọi món đồ tăng mana đều gián tiếp tăng độ trâu bò.",
      "Split Shot nên tắt khi cần dồn sát thương vào một mục tiêu hoặc khi last hit lúc lane căng.",
      "Medusa là carry lên đồ chậm nhưng cực mạnh cuối trận — hãy tránh giao tranh sớm và tập trung farm an toàn.",
      "Mystic Snake hút mana rất nhiều, dùng nó lên nhóm lính hoặc tướng để không bao giờ cạn mana."
    ],
    khacChe: [
      "Các chiêu đốt mana hoặc trừ mana khiến Mana Shield sụp rất nhanh.",
      "Gây áp lực và đẩy trụ sớm là cách tốt nhất, vì để Medusa farm đủ đồ thì cuối trận rất khó hạ."
    ]
  },
  {
    id: "mirana",
    icon: "🏹",
    danhHieu: "Priestess of the Moon",
    skills: [
      { phim: "Q", ten: "Starfall", mota: "Gọi mưa sao băng rơi xuống khu vực quanh Mirana, gây sát thương phép cho mọi kẻ địch; một mục tiêu ngẫu nhiên sẽ bị đánh trúng thêm lần nữa." },
      { phim: "W", ten: "Elune's Arrow", mota: "Bắn một mũi tên bay rất xa theo đường thẳng; trúng mục tiêu đầu tiên thì gây sát thương và choáng, bay càng xa thì choáng càng lâu." },
      { phim: "E", ten: "Leap", mota: "Nhảy vọt về phía trước, sau khi nhảy nhận buff tăng tốc đánh và tốc chạy cho bản thân cùng đồng minh xung quanh." },
      { phim: "R", ten: "Moonlight Shadow", mota: "Ulti: khiến toàn bộ đồng minh trên bản đồ tàng hình và tăng tốc chạy; sau khi hết tàng hình do tấn công, hiệu ứng sẽ trở lại nếu thời gian chiêu còn." }
    ],
    lenSkill: "Lấy sớm Elune's Arrow và Leap để gank, max Starfall nếu muốn quấy rối lane hoặc max Arrow nếu muốn bắt lẻ, luôn nâng Moonlight Shadow.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Circlet of Nobility"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Wraith Band"],
      coreItem: ["Power Treads", "Diffusal Blade", "Manta Style"],
      xaXi: ["Butterfly", "Skadi", "Monkey King Bar"]
    },
    chienThuat: [
      "Bắn Arrow xuyên qua rừng hoặc từ trong bóng tối để địch không kịp né — dự đoán đường đi thay vì bắn vào vị trí hiện tại.",
      "Leap có thể dùng qua địa hình để trốn thoát hoặc để rút ngắn khoảng cách ngay sau khi trúng Arrow.",
      "Moonlight Shadow là chiêu chiến thuật toàn đội: dùng để mở phục kích, để rút lui an toàn hoặc để cướp Roshan.",
      "Đứng giữa nhóm lính rồi bấm Starfall là cách dọn lính và quấy rối lane hiệu quả."
    ],
    khacChe: [
      "Cắm mắt và mua Dust of Appearance để vô hiệu hóa Moonlight Shadow.",
      "Mirana rất mỏng, nếu bắt trượt Arrow thì cô ta gần như không còn gì để chống trả trong vài giây."
    ]
  },
  {
    id: "morphling",
    icon: "💧",
    danhHieu: "Morph",
    skills: [
      { phim: "Q", ten: "Waveform", mota: "Hóa thành sóng nước lao theo đường thẳng, gây sát thương cho kẻ địch trên đường và bất khả xâm phạm trong lúc lướt." },
      { phim: "W", ten: "Adaptive Strike", mota: "Đòn đánh gây sát thương dựa theo chỉ số nhanh nhẹn, đồng thời đẩy lùi và choáng mục tiêu mạnh hơn khi Morphling có nhiều sức mạnh." },
      { phim: "E", ten: "Morph", mota: "Chuyển đổi chỉ số giữa Sức mạnh và Nhanh nhẹn theo hai hướng: đổi sang Sức mạnh để trâu bò, đổi sang Nhanh nhẹn để đánh mạnh." },
      { phim: "R", ten: "Replicate", mota: "Ulti: tạo một bản sao của một tướng bất kỳ (địch hoặc đồng minh). Với Aghanim's Scepter, Morphling có thể đổi chỗ với bản sao đó." }
    ],
    lenSkill: "Lấy Morph sớm để linh hoạt chỉ số, max Waveform để farm và cơ động, điểm phụ vào Adaptive Strike, nâng Replicate khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Slippers of Agility"],
      giaiDoanDau: ["Bottle", "Power Treads", "Wraith Band"],
      coreItem: ["Ethereal Blade", "Linken's Sphere", "Manta Style"],
      xaXi: ["Skadi", "Butterfly", "Satanic"]
    },
    chienThuat: [
      "Kỹ năng cốt lõi là đổi chỉ số theo thời gian thực: bị nhắm thì đổi sang Sức mạnh để sống, an toàn rồi thì đổi sang Nhanh nhẹn để dồn sát thương.",
      "Waveform cho khoảng thời gian bất khả xâm phạm — dùng đúng lúc có thể né được cả chiêu cuối của địch.",
      "Ethereal Blade cộng dồn rất mạnh với chỉ số nhanh nhẹn cao, tạo combo bùng nổ giết mục tiêu trong tích tắc.",
      "Morphling farm chậm ở đầu game và rất dễ bị bắt trước cấp 6, hãy đi lane an toàn và giữ Waveform để thoát."
    ],
    khacChe: [
      "Câm lặng khiến Morphling không đổi được chỉ số và không dùng được Waveform, gần như là án tử.",
      "Sát thương bùng nổ tức thì trong một nhịp giết được Morphling trước khi hắn kịp đổi sang Sức mạnh."
    ]
  },
  {
    id: "nagasiren",
    icon: "🧜",
    danhHieu: "Slithice",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Mirror Image", mota: "Tạo ra nhiều ảnh phân thân và khiến Naga biến mất trong chốc lát khi phân tán, khiến địch khó nhắm đúng bản thể." },
      { phim: "W", ten: "Ensnare", mota: "Ném lưới trói chặt một mục tiêu, khiến nó không thể di chuyển hay dịch chuyển trong vài giây (vẫn có thể đánh và dùng chiêu)." },
      { phim: "E", ten: "Rip Tide", mota: "Gây sát thương diện rộng quanh Naga và giảm giáp kẻ địch trúng chiêu; các ảnh phân thân cũng kích hoạt hiệu ứng này." },
      { phim: "R", ten: "Song of the Siren", mota: "Ulti: ru ngủ toàn bộ kẻ địch trong vùng rộng, chúng bất khả xâm phạm nhưng không thể hành động. Với Aghanim's Scepter có thêm chiêu phụ kết thúc bài hát sớm và hồi máu cho đồng đội." }
    ],
    lenSkill: "Max Mirror Image để farm và đẩy lane, lấy một điểm Ensnare sớm để bắt lẻ, xen kẽ Rip Tide, luôn nâng Song of the Siren.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Stout Shield"],
      giaiDoanDau: ["Power Treads", "Ring of Basilius", "Magic Wand"],
      coreItem: ["Diffusal Blade", "Yasha", "Manta Style"],
      xaXi: ["Butterfly", "Heart of Tarrasque", "Radiance"]
    },
    chienThuat: [
      "Phân thân của Naga rất nhiều nên cô là một trong những tướng farm nhanh nhất: chia phân thân ra nhiều trại rừng cùng lúc.",
      "Song of the Siren là chiêu cứu đội tuyệt vời — dùng để hủy một giao tranh đang thua rồi rút lui.",
      "Ensnare trói cả những mục tiêu đang có khiên chống phép ở nhiều bản, là công cụ bắt Roshan và bắt lẻ rất mạnh.",
      "Diffusal Blade phát huy tối đa vì phân thân cũng đốt mana và làm chậm mục tiêu."
    ],
    khacChe: [
      "Sát thương diện rộng dọn sạch phân thân, làm lộ bản thể ngay lập tức.",
      "Naga bản thể khá mỏng ở đầu game, hãy gây áp lực trước khi cô kịp lên đủ đồ."
    ]
  },
  {
    id: "necro",
    icon: "💀",
    danhHieu: "Rotund'jere",
    skills: [
      { phim: "Q", ten: "Death Pulse", mota: "Phát ra một làn sóng tử khí gây sát thương phép cho kẻ địch xung quanh và đồng thời hồi máu cho đồng minh trong vùng." },
      { phim: "W", ten: "Heartstopper Aura", mota: "Hào quang bị động khiến mọi kẻ địch ở gần liên tục mất máu theo phần trăm máu tối đa của chúng." },
      { phim: "E", ten: "Sadist", mota: "Nội tại: mỗi lần hạ gục một đơn vị, Necrolyte nhận thêm khả năng hồi máu và mana trong một khoảng thời gian, cộng dồn nhiều lần." },
      { phim: "R", ten: "Reaper's Scythe", mota: "Ulti: choáng mục tiêu rồi gây sát thương phép lớn dựa trên lượng máu đã mất của nó; mục tiêu chết vì chiêu này sẽ hồi sinh lâu hơn bình thường. Aghanim's Scepter tăng sức mạnh chiêu này rõ rệt." }
    ],
    lenSkill: "Max Death Pulse để vừa quấy rối vừa hồi máu cho lane, xen kẽ Heartstopper Aura, lấy Sadist khi bắt đầu đi farm, luôn nâng Reaper's Scythe.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Clarity"],
      giaiDoanDau: ["Arcane Boots", "Magic Wand", "Bracer"],
      coreItem: ["Mekansm", "Aghanim's Scepter", "Hood of Defiance"],
      xaXi: ["Shiva's Guard", "Heart of Tarrasque", "Refresher Orb"]
    },
    chienThuat: [
      "Necrolyte thắng lane bằng cách đứng lì: Death Pulse vừa dọn lính vừa hồi máu, đối thủ rất khó ép ra khỏi lane.",
      "Reaper's Scythe nên dùng khi mục tiêu đã mất nhiều máu — đừng nổ ngay từ đầu giao tranh.",
      "Heartstopper Aura khiến địch không dám đứng gần bạn khi thủ trụ hoặc ở khe hẹp, hãy tận dụng khi thủ nhà.",
      "Món đồ tăng máu và kháng phép biến Necrolyte thành tường chắn khó chịu ở tuyến đầu."
    ],
    khacChe: [
      "Câm lặng hoặc khống chế cứng ngay trước lúc bấm ulti khiến Necrolyte mất toàn bộ giá trị giao tranh.",
      "Giảm hiệu quả hồi máu và sát thương bùng nổ khiến Sadist cùng Death Pulse không kịp bù lại máu."
    ]
  },
  {
    id: "nerubianassassin",
    icon: "🕷️",
    danhHieu: "Anub'seran",
    skills: [
      { phim: "Q", ten: "Impale", mota: "Gai đất trồi lên theo đường thẳng, hất tung và làm choáng mọi kẻ địch trúng chiêu kèm sát thương phép." },
      { phim: "W", ten: "Mana Burn", mota: "Đốt một lượng mana của mục tiêu dựa theo chỉ số trí tuệ của nó và gây sát thương tương ứng lượng mana bị đốt." },
      { phim: "E", ten: "Spiked Carapace", mota: "Dựng lớp giáp gai chặn đòn tấn công tiếp theo, phản lại sát thương và làm choáng kẻ đã tấn công." },
      { phim: "R", ten: "Vendetta", mota: "Ulti: tàng hình kèm tăng tốc chạy; đòn đánh đầu tiên khi thoát tàng hình gây sát thương cực lớn." }
    ],
    lenSkill: "Max Impale để có khống chế và sát thương gank, lấy vài điểm Mana Burn để ép mana tướng phép, một điểm Spiked Carapace để phản đòn, luôn nâng Vendetta.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Circlet of Nobility"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Bracer"],
      coreItem: ["Power Treads", "Dagon 3", "Blink Dagger"],
      xaXi: ["Dagon 5", "Scythe of Vyse", "Ethereal Blade"]
    },
    chienThuat: [
      "Combo chuẩn: Vendetta tiếp cận, đánh một phát cường hóa rồi Impale để giữ chân và dồn tiếp sát thương.",
      "Mana Burn khắc chế cực mạnh các tướng trí tuệ có mana lớn, khiến chúng không dùng nổi chiêu.",
      "Spiked Carapace có thể dùng để chặn đòn choáng hoặc sát thương lớn của địch, không chỉ để phản đòn.",
      "Vendetta còn là công cụ di chuyển bí mật và trốn thoát, đừng luôn dùng nó chỉ để mở combo."
    ],
    khacChe: [
      "Dust of Appearance, Sentry Ward và Gem of True Sight phá hoàn toàn Vendetta.",
      "Tướng ít mana hoặc có kháng phép cao khiến bộ combo phép của Nerubian Assassin mất hiệu lực."
    ]
  },
  {
    id: "nightstalker",
    icon: "🦇",
    danhHieu: "Balanar",
    skills: [
      { phim: "Q", ten: "Void", mota: "Gây sát thương phép cho một mục tiêu và làm chậm tốc chạy cùng tốc đánh của nó; hiệu quả mạnh hơn khi trời tối." },
      { phim: "W", ten: "Crippling Fear", mota: "Gieo nỗi sợ khiến kẻ địch xung quanh bị câm lặng trong một khoảng thời gian; hiệu quả kéo dài hơn vào ban đêm." },
      { phim: "E", ten: "Hunter in the Night", mota: "Nội tại: vào ban đêm, Night Stalker được tăng mạnh tốc đánh và tốc chạy, biến hắn thành kẻ đi săn đáng sợ." },
      { phim: "R", ten: "Darkness", mota: "Ulti: biến ngày thành đêm trên toàn bản đồ trong một khoảng thời gian, đồng thời làm giảm tầm nhìn của kẻ địch." }
    ],
    lenSkill: "Max Hunter in the Night và Void để gank mạnh vào đêm đầu tiên, lấy Crippling Fear khi cần chống tướng phép, luôn nâng Darkness khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Gauntlets of Ogre Strength"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Bracer"],
      coreItem: ["Power Treads", "Armlet of Mordiggian", "Black King Bar"],
      xaXi: ["Assault Cuirass", "Heart of Tarrasque", "Satanic"]
    },
    chienThuat: [
      "Night Stalker mạnh nhất vào đêm đầu tiên khi vừa lên cấp 5 — hãy chuẩn bị sẵn để gank ngay khi trời tối.",
      "Ban ngày hắn yếu hơn hẳn: hãy farm an toàn, tránh giao tranh và chờ đêm hoặc chờ đủ cấp bấm Darkness.",
      "Darkness không chỉ để mạnh hơn mà còn cắt tầm nhìn địch, rất hiệu quả khi mở giao tranh bất ngờ hoặc cướp Roshan.",
      "Crippling Fear là chiêu câm lặng diện rộng, dùng để lao vào giữa nhóm tướng phép của địch."
    ],
    khacChe: [
      "Kéo dài trận đấu và ép giao tranh vào ban ngày sẽ khiến Night Stalker mất phần lớn sức mạnh.",
      "Khiên chống phép và các món tăng tầm nhìn giúp giảm hiệu quả của bộ khống chế cùng chiêu Darkness."
    ]
  }
,
  {
    id: "obsidiandestroyer",
    icon: "🔮",
    danhHieu: "Harbinger",
    skills: [
      { phim: "Q", ten: "Arcane Orb", mota: "Orb effect: đòn đánh thường gây thêm sát thương phép dựa trên lượng mana hiện có, ăn mana để đánh mạnh. Sát thương này xuyên qua giáp vật lý." },
      { phim: "W", ten: "Astral Imprisonment", mota: "Nhốt một đơn vị vào không gian khác trong vài giây, mục tiêu bất tử và không thể hành động. Dùng lên địch để vô hiệu hoá và hút mana, hoặc lên đồng đội để cứu mạng." },
      { phim: "E", ten: "Essence Aura", mota: "Hào quang bị động tăng mana tối đa cho cả đội, và cho Harbinger cơ hội hồi lại một phần mana mỗi khi tung skill. Đây là nguồn mana giúp duy trì Arcane Orb liên tục." },
      { phim: "R", ten: "Sanity's Eclipse", mota: "Ulti: gây sát thương phép diện rộng dựa trên chênh lệch chỉ số trí tuệ giữa Harbinger và mục tiêu. Đánh cực nặng vào các tướng sức mạnh và nhanh nhẹn có ít trí tuệ." }
    ],
    lenSkill: "Ưu tiên tối đa Arcane Orb để farm và trade lane, điểm sớm vào Astral Imprisonment và Essence Aura, lấy ulti ngay khi mở.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Mantle of Intelligence"],
      giaiDoanDau: ["Null Talisman", "Boots of Speed", "Magic Wand"],
      coreItem: ["Power Treads", "Black King Bar", "Scythe of Vyse"],
      xaXi: ["Shiva's Guard", "Refresher Orb", "Heart of Tarrasque"]
    },
    chienThuat: [
      "Ở lane hãy dùng Arcane Orb để trade với đối thủ, sát thương phép nên giáp cao cũng không đỡ được.",
      "Astral Imprisonment là công cụ đa năng: cắt combo địch, cứu đồng đội khỏi sát thương chí mạng, hoặc tách một tướng ra khỏi giao tranh vài giây.",
      "Trong giao tranh hãy giữ ulti tới khi địch đứng cụm và đã mất một phần máu, sát thương diện rộng có thể quét sạch nhóm địch yếu trí tuệ."
    ],
    khacChe: [
      "Rất phụ thuộc mana; các tướng đốt mana hoặc gây câm lặng khiến Harbinger mất gần hết sức mạnh.",
      "Không có khả năng thoát chạy, dễ bị gank khi chưa có Black King Bar hoặc đồ chống chịu."
    ]
  },
  {
    id: "ogremagi",
    icon: "👹",
    danhHieu: "Aggron Stonebreak",
    skills: [
      { phim: "Q", ten: "Fireblast", mota: "Ném một quả cầu lửa gây sát thương phép và làm choáng mục tiêu trong thời gian ngắn. Là công cụ khống chế đơn mục tiêu chính từ đầu trận." },
      { phim: "W", ten: "Ignite", mota: "Đốt cháy mục tiêu, gây sát thương theo thời gian và làm chậm mạnh tốc độ di chuyển. Rất tốt để chốt hạ hoặc giữ chân địch bỏ chạy." },
      { phim: "E", ten: "Bloodlust", mota: "Buff lên đồng đội, tăng tốc độ đánh và tốc độ di chuyển. Dùng cho carry trước giao tranh hoặc khi đẩy trụ." },
      { phim: "R", ten: "Multicast", mota: "Ulti: bị động cho các skill có cơ hội tự kích hoạt thêm nhiều lần vào các mục tiêu xung quanh. Càng lên cao, một nút Fireblast có thể hoá thành hàng loạt cú choáng." }
    ],
    lenSkill: "Lên Fireblast và Ignite xen kẽ để có khống chế và sát thương sớm, điểm vào Bloodlust khi cần hỗ trợ carry, lấy Multicast ngay khi có thể.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Observer Wards"],
      giaiDoanDau: ["Magic Wand", "Boots of Speed", "Urn of Shadows"],
      coreItem: ["Arcane Boots", "Aghanim's Scepter", "Blink Dagger"],
      xaXi: ["Scythe of Vyse", "Shiva's Guard", "Refresher Orb"]
    },
    chienThuat: [
      "Sức mạnh cơ bản cao và kháng phép tự nhiên khiến Ogre rất trâu, có thể đứng chắn đường và ăn skill thay cho đồng đội.",
      "Đầu trận nên bám lane cùng carry, dùng Fireblast mỗi khi địch bước lên ăn last hit để trade máu.",
      "Aghanim's Scepter nâng mạnh Multicast, biến Ogre thành nguồn sát thương và khống chế thật sự chứ không chỉ là hỗ trợ."
    ],
    khacChe: [
      "Mọi sức mạnh phụ thuộc vào may rủi của Multicast, có ván xui thì combo gần như vô hại.",
      "Tầm tay ngắn và di chuyển chậm nếu không tự bật Bloodlust, dễ bị kite bởi tướng tầm xa."
    ]
  },
  {
    id: "omniknight",
    icon: "✨",
    danhHieu: "Purist Thunderwrath",
    skills: [
      { phim: "Q", ten: "Purification", mota: "Hồi máu tức thì cho một đồng đội, đồng thời gây sát thương phép cho mọi kẻ địch quanh mục tiêu. Vừa cứu người vừa dọn creep hoặc trade lane." },
      { phim: "W", ten: "Repel", mota: "Cho một đơn vị miễn nhiễm phép thuật trong thời gian ngắn, chặn hầu hết skill khống chế và sát thương phép. Có thể dùng để giải cứu đồng đội đang bị nhắm." },
      { phim: "E", ten: "Degen Aura", mota: "Hào quang bị động làm chậm nặng tốc độ di chuyển của kẻ địch đứng gần. Giúp Omni và đồng đội bám đuổi hoặc rút lui an toàn." },
      { phim: "R", ten: "Guardian Angel", mota: "Ulti: cho toàn bộ đồng minh trong vùng miễn nhiễm sát thương vật lý trong vài giây. Lật kèo giao tranh trước các đội thiên về sát thương đánh thường." }
    ],
    lenSkill: "Lên Purification sớm để trade lane và giữ máu cho carry, thêm điểm Repel, chỉ điểm Degen Aura khi thừa, ulti lấy ngay khi mở.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Clarity"],
      giaiDoanDau: ["Magic Wand", "Boots of Speed", "Ring of Basilius"],
      coreItem: ["Arcane Boots", "Mekansm", "Aghanim's Scepter"],
      xaXi: ["Shiva's Guard", "Refresher Orb", "Heart of Tarrasque"]
    },
    chienThuat: [
      "Purification hồi máu tức thì nên có thể cứu đồng đội đang gần chết ngay giữa combo địch, hãy luôn để dành mana cho nó.",
      "Repel dùng đúng lúc còn giá trị hơn ulti: nó vô hiệu hoá luôn combo khống chế của đội địch nhắm vào carry.",
      "Guardian Angel nên bật khi hai đội đã lao vào nhau, bật quá sớm sẽ hết trước khi giao tranh thật sự diễn ra."
    ],
    khacChe: [
      "Guardian Angel chỉ chặn sát thương vật lý, đội hình thiên về sát thương phép gần như bỏ qua ulti này.",
      "Các skill xoá buff hoặc gây câm lặng khiến Repel và ulti mất tác dụng, còn bản thân Omni thì di chuyển rất chậm."
    ]
  },
  {
    id: "pandarenbrewmaster",
    icon: "🐼",
    danhHieu: "Mangix",
    skills: [
      { phim: "Q", ten: "Thunder Clap", mota: "Đập đất gây sát thương phép diện rộng quanh bản thân, đồng thời làm chậm tốc độ di chuyển và tốc độ đánh của kẻ địch trúng phải." },
      { phim: "W", ten: "Drunken Haze", mota: "Ném rượu vào mục tiêu khiến nó bị say, làm chậm và có tỉ lệ cao đánh trượt đòn đánh thường. Vô hiệu hoá tạm thời một carry vật lý." },
      { phim: "E", ten: "Drunken Brawler", mota: "Bị động cho cơ hội né đòn và cơ hội chí mạng khi đánh thường, giúp Brewmaster vừa trâu vừa có sát thương ở giai đoạn đầu." },
      { phim: "R", ten: "Primal Split", mota: "Ulti: tách thành ba linh thú đất, lửa và gió, mỗi con có bộ skill riêng. Bản thân Brewmaster bất khả xâm phạm trong lúc tách; nếu các linh thú sống sót hết thời gian thì hồi sinh nguyên vẹn." }
    ],
    lenSkill: "Lên Thunder Clap và Drunken Haze xen kẽ để khống chế lane, điểm Drunken Brawler khi cần trụ, lấy Primal Split ngay khi mở.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Stout Shield"],
      giaiDoanDau: ["Magic Wand", "Boots of Speed", "Soul Ring"],
      coreItem: ["Blink Dagger", "Black King Bar", "Aghanim's Scepter"],
      xaXi: ["Shiva's Guard", "Refresher Orb", "Assault Cuirass"]
    },
    chienThuat: [
      "Blink Dagger là món thay đổi cuộc chơi: nhảy vào giữa đội địch rồi bung Primal Split để khoá cứng cả nhóm.",
      "Trong lúc tách, hãy điều linh thú đất đứng chắn và cyclone bằng linh thú gió lên tướng nguy hiểm nhất, đừng để cả ba con cùng đánh một mục tiêu.",
      "Drunken Haze là công cụ chống carry vật lý rất mạnh trong giao tranh, đừng chỉ dùng nó để farm."
    ],
    khacChe: [
      "Điều khiển ba linh thú cùng lúc đòi hỏi thao tác cao, chơi kém thì ulti gần như lãng phí.",
      "Nếu các linh thú bị giết hết trước khi hết giờ, Brewmaster hiện ra tại chỗ với máu còn lại rất dễ bị hạ ngay."
    ]
  },
  {
    id: "phantomlancer",
    icon: "🗡️",
    danhHieu: "Azwraith",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Spirit Lance", mota: "Phóng một ngọn giáo linh hồn gây sát thương và làm chậm mục tiêu, đồng thời tạo ra một ảnh ảo đánh vào mục tiêu đó. Dùng để quấy rối lane và bám đuổi." },
      { phim: "W", ten: "Doppelwalk", mota: "Tàng hình trong thời gian ngắn và để lại ảnh ảo tại chỗ, ảnh ảo này làm chậm kẻ địch đánh trúng nó. Vừa là chiêu thoát vừa là chiêu đánh lừa." },
      { phim: "E", ten: "Phantom Edge", mota: "Bị động tăng khả năng sống sót và tạo thêm ảnh ảo khi bị tấn công, giúp Azwraith khó bị chọn mục tiêu trong hỗn chiến." },
      { phim: "R", ten: "Juxtapose", mota: "Ulti: bị động cho Azwraith và các ảnh ảo cơ hội tự nhân bản thêm khi đánh thường, tạo ra biển ảnh ảo tràn ngập màn hình." }
    ],
    lenSkill: "Tối đa Spirit Lance trước để trade và bám đuổi, điểm vào Doppelwalk để an toàn, lấy Juxtapose mỗi khi mở khoá.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Quelling Blade"],
      giaiDoanDau: ["Wraith Band", "Boots of Speed", "Magic Wand"],
      coreItem: ["Power Treads", "Diffusal Blade", "Manta Style"],
      xaXi: ["Butterfly", "Heart of Tarrasque", "Skadi"]
    },
    chienThuat: [
      "Sức mạnh thật sự đến từ số lượng ảnh ảo, hãy farm rừng và lane liên tục để tích đồ chứ đừng lao vào giao tranh sớm.",
      "Diffusal Blade cho phép ảnh ảo đốt mana và làm chậm, biến cả đàn ảo thành công cụ khoá mục tiêu.",
      "Khi bị gank, dùng Doppelwalk và chạy ngược hướng ảnh ảo để đối thủ đánh nhầm."
    ],
    khacChe: [
      "Mọi skill sát thương diện rộng đều quét sạch ảnh ảo trong nháy mắt, đặc biệt là các tướng có ulti diện rộng.",
      "Rất yếu ở giai đoạn đầu, nếu bị đè lane và cấm farm thì gần như không thể vào trận."
    ]
  },
  {
    id: "phoenix",
    icon: "🔥",
    danhHieu: "Icarus",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Icarus Dive", mota: "Lao vọt theo một đường vòng cung, gây sát thương và làm chậm kẻ địch trên đường bay. Đổi lại một phần máu hiện tại của bản thân." },
      { phim: "W", ten: "Fire Spirits", mota: "Triệu hồi các linh hồn lửa có thể phóng vào kẻ địch, gây sát thương theo thời gian và giảm mạnh tốc độ đánh của mục tiêu." },
      { phim: "E", ten: "Sun Ray", mota: "Bắn một luồng nắng có thể xoay hướng, gây sát thương theo phần trăm máu lên kẻ địch và hồi máu cho đồng minh trên đường tia. Phoenix bị bất động trong lúc dùng." },
      { phim: "R", ten: "Supernova", mota: "Ulti: Phoenix hoá thành một mặt trời, làm choáng và đốt kẻ địch xung quanh. Kẻ địch phải đánh đủ số đòn để phá vỡ, nếu không Phoenix hồi sinh với máu đầy." }
    ],
    lenSkill: "Lên Fire Spirits sớm để quấy rối lane, thêm điểm Icarus Dive để cơ động, Sun Ray khi cần hồi máu đội, ulti lấy ngay khi mở.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Observer Wards"],
      giaiDoanDau: ["Magic Wand", "Boots of Speed", "Urn of Shadows"],
      coreItem: ["Arcane Boots", "Aghanim's Scepter", "Shiva's Guard"],
      xaXi: ["Refresher Orb", "Khadgar's Pipe of Insight", "Blade Mail"]
    },
    chienThuat: [
      "Các skill đều tiêu tốn máu hiện tại chứ không phải mana, nên đừng ngại xuống máu thấp miễn là còn Supernova để reset.",
      "Combo chuẩn là lao vào bằng Icarus Dive, dán Fire Spirits rồi bật Supernova ngay trong lòng đội địch để ép họ phải đánh vào mặt trời.",
      "Sun Ray gây sát thương theo phần trăm máu nên rất mạnh trước các tướng máu trâu, hãy xoay tia bám theo mục tiêu."
    ],
    khacChe: [
      "Supernova sẽ bị phá rất nhanh nếu đội địch có nhiều tướng tầm xa hoặc lính triệu hồi đánh vào.",
      "Trong lúc Sun Ray, Phoenix đứng yên và hoàn toàn hở sườn cho mọi đòn khống chế."
    ]
  },
  {
    id: "pitlord",
    icon: "🌋",
    danhHieu: "Azgalor",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Firestorm", mota: "Gọi mưa lửa xuống một khu vực, gây sát thương phép nhiều đợt và bỏng theo thời gian. Là công cụ dọn lính và đẩy lane rất mạnh." },
      { phim: "W", ten: "Pit of Malice", mota: "Tạo một vùng nguyền rủa; kẻ địch bước vào bị trói chân không thể di chuyển trong vài giây. Hố tồn tại một lúc nên có thể trói nhiều lần." },
      { phim: "E", ten: "Atrophy Aura", mota: "Hào quang bị động làm giảm sát thương đánh thường của kẻ địch xung quanh; mỗi đơn vị chết gần đó lại cộng thêm sát thương tạm thời cho Pit Lord." },
      { phim: "R", ten: "Dark Rift", mota: "Ulti: mở cổng dịch chuyển đưa Pit Lord cùng toàn bộ đồng đội gần đó tới một đơn vị đồng minh ở bất cứ đâu trên bản đồ. Dùng để đánh úp hoặc rút chạy cả đội." }
    ],
    lenSkill: "Tối đa Firestorm để kiểm soát lane và đẩy trụ, điểm sớm vào Pit of Malice để có khống chế, Atrophy Aura rải đều, ulti lấy khi mở.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Circlet of Nobility"],
      giaiDoanDau: ["Bracer", "Boots of Speed", "Magic Wand"],
      coreItem: ["Arcane Boots", "Hood of Defiance", "Aghanim's Scepter"],
      xaXi: ["Shiva's Guard", "Heart of Tarrasque", "Refresher Orb"]
    },
    chienThuat: [
      "Firestorm cộng Pit of Malice là combo đẩy lane cực mạnh, có thể ép trụ liên tục và tạo áp lực toàn bản đồ.",
      "Dark Rift dùng để đưa cả đội đánh úp một lane trống hoặc lao vào Roshan, hãy báo trước cho đồng đội đứng gần.",
      "Atrophy Aura khiến các carry vật lý địch yếu đi rõ rệt, nên đứng gần giao tranh chứ đừng đứng quá xa."
    ],
    khacChe: [
      "Di chuyển chậm và không có chiêu thoát tức thì, dễ bị bắt lẻ khi đang đẩy lane một mình.",
      "Dark Rift có thời gian niệm dài và địch nhìn thấy được, dễ bị cắt hoặc bị phản gank."
    ]
  },
  {
    id: "puck",
    icon: "🧚",
    danhHieu: "Faerie Dragon",
    skills: [
      { phim: "Q", ten: "Illusory Orb", mota: "Phóng một quả cầu bay thẳng gây sát thương lên kẻ địch trên đường đi. Puck có thể bấm lại để dịch chuyển tới vị trí quả cầu." },
      { phim: "W", ten: "Waning Rift", mota: "Nổ tung một vùng quanh bản thân, gây sát thương phép và làm câm lặng kẻ địch trúng phải trong vài giây." },
      { phim: "E", ten: "Phase Shift", mota: "Tạm thời rời khỏi mặt phẳng hiện tại, hoàn toàn miễn nhiễm sát thương nhưng không thể hành động. Dùng để né combo và câu giờ hồi chiêu." },
      { phim: "R", ten: "Dream Coil", mota: "Ulti: trói toàn bộ kẻ địch trong vùng bằng các sợi dây; nếu ai đi quá xa, dây đứt gây sát thương và làm choáng người đó." }
    ],
    lenSkill: "Lên Illusory Orb sớm để trade và cơ động, thêm điểm Waning Rift, giữ một điểm Phase Shift từ sớm, lấy Dream Coil ngay khi mở.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Mantle of Intelligence"],
      giaiDoanDau: ["Null Talisman", "Boots of Speed", "Magic Wand"],
      coreItem: ["Power Treads", "Blink Dagger", "Eul's Scepter of Divinity"],
      xaXi: ["Aghanim's Scepter", "Scythe of Vyse", "Shiva's Guard"]
    },
    chienThuat: [
      "Combo cơ bản: phóng Illusory Orb qua đội địch, Dream Coil, rồi bấm dịch chuyển tới quả cầu để vào giữa trói và bung Waning Rift.",
      "Phase Shift là kỹ năng quyết định trình độ Puck: bấm đúng nhịp có thể né trọn một đòn choáng hoặc combo sát thương lớn.",
      "Puck rất giỏi mở giao tranh và chạy thoát, đừng đứng đánh dai mà hãy vào ra liên tục."
    ],
    khacChe: [
      "Máu và giáp thấp, chỉ cần dính một đòn khống chế cứng là bị hạ ngay lập tức.",
      "Câm lặng hoặc các skill khoá mục tiêu tức thì làm mất hết khả năng luồn lách của Puck."
    ]
  },
  {
    id: "pugna",
    icon: "💀",
    danhHieu: "Oblivion",
    skills: [
      { phim: "Q", ten: "Nether Blast", mota: "Gây sát thương phép diện rộng sau một khoảng trễ ngắn, đồng thời gây sát thương mạnh lên công trình. Là chiêu đẩy trụ chủ lực." },
      { phim: "W", ten: "Decrepify", mota: "Biến mục tiêu thành dạng hồn ma: miễn nhiễm sát thương vật lý, di chuyển chậm và nhận thêm sát thương phép. Dùng lên địch để khoá, hoặc lên đồng đội để cứu." },
      { phim: "E", ten: "Nether Ward", mota: "Đặt một trụ ma thuật, hút mana và gây sát thương lên kẻ địch mỗi khi chúng tung skill trong tầm. Trừng phạt nặng các tướng phép thuật." },
      { phim: "R", ten: "Life Drain", mota: "Ulti: kênh một luồng sát thương liên tục hút máu mục tiêu và chuyển thành máu cho Pugna. Cũng có thể dùng ngược để truyền máu cho đồng đội." }
    ],
    lenSkill: "Tối đa Nether Blast để đẩy lane và đẩy trụ, điểm sớm vào Decrepify, đặt một điểm Nether Ward khi gặp đội nhiều phép, lấy Life Drain ngay khi mở.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Mantle of Intelligence"],
      giaiDoanDau: ["Null Talisman", "Boots of Speed", "Magic Wand"],
      coreItem: ["Arcane Boots", "Aghanim's Scepter", "Bloodstone"],
      xaXi: ["Scythe of Vyse", "Shiva's Guard", "Ethereal Blade"]
    },
    chienThuat: [
      "Pugna là một trong những tướng đẩy trụ nhanh nhất, hãy tận dụng Nether Blast để ép trụ ngay từ giữa trận.",
      "Combo Decrepify rồi Life Drain lên mục tiêu vừa khoá vừa hút máu, nhớ Decrepify chính mình hoặc đồng đội để né sát thương vật lý.",
      "Nether Ward đặt trong giao tranh có thể khiến các tướng phép địch tự sát khi tung skill, hãy đặt ở góc khuất."
    ],
    khacChe: [
      "Thân hình rất mỏng, không có chiêu thoát nên bị bắt lẻ là chết.",
      "Life Drain là chiêu kênh liên tục, chỉ cần một đòn khống chế hoặc chạy khỏi tầm là bị cắt ngay."
    ]
  },
  {
    id: "queenofpain",
    icon: "😈",
    danhHieu: "Akasha",
    skills: [
      { phim: "Q", ten: "Shadow Strike", mota: "Phóng phi tiêu độc gây sát thương tức thì rồi tiếp tục gây sát thương theo thời gian, kèm làm chậm nặng lúc đầu. Chiêu quấy rối lane rất khó chịu." },
      { phim: "W", ten: "Blink", mota: "Dịch chuyển tức thời một quãng ngắn, hồi chiêu rất nhanh. Vừa để lao vào giết mục tiêu vừa để thoát thân qua địa hình." },
      { phim: "E", ten: "Scream of Pain", mota: "Hét vang gây sát thương phép lên mọi kẻ địch xung quanh. Chiêu dọn lính và gây sát thương chính trong combo." },
      { phim: "R", ten: "Sonic Wave", mota: "Ulti: bắn một sóng âm hình nón gây sát thương phép rất lớn lên mọi kẻ địch trong đường sóng. Vũ khí kết liễu sau khi đã ép máu bằng combo." }
    ],
    lenSkill: "Ưu tiên Scream of Pain để dọn lính và gây sát thương, dùng Shadow Strike quấy rối, lấy một điểm Blink sớm, ulti mở khi có thể.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Circlet of Nobility"],
      giaiDoanDau: ["Null Talisman", "Bottle", "Boots of Speed"],
      coreItem: ["Power Treads", "Orchid Malevolence", "Black King Bar"],
      xaXi: ["Scythe of Vyse", "Shiva's Guard", "Ethereal Blade"]
    },
    chienThuat: [
      "Blink hồi chiêu ngắn cho phép vào ra liên tục, hãy nhảy vào bung combo rồi nhảy ra ngay trước khi địch phản đòn.",
      "Orchid Malevolence khoá mọi khả năng phản kháng của tướng phép địch và cộng thêm sát thương, là món cực hợp với Akasha.",
      "Shadow Strike có thể dùng để đẩy nhanh lane hoặc dí một mục tiêu đang chạy, đừng quên nó chỉ vì mê combo nổ."
    ],
    khacChe: [
      "Máu thấp, chỉ cần bị bắt dính khống chế cứng là dễ bị hạ trước khi kịp Blink.",
      "Sát thương thuần phép nên các món kháng phép hoặc miễn nhiễm phép làm combo mất hiệu quả rõ rệt."
    ]
  },
  {
    id: "razor",
    icon: "⚡",
    danhHieu: "Lightning Revenant",
    skills: [
      { phim: "Q", ten: "Plasma Field", mota: "Phóng một vòng plasma lan rộng rồi thu lại, gây sát thương tăng dần theo khoảng cách. Đánh trúng lúc vòng đang thu về sẽ đau nhất." },
      { phim: "W", ten: "Static Link", mota: "Nối một sợi dây điện với mục tiêu, liên tục hút sát thương đánh thường của nó sang cho Razor trong một khoảng thời gian. Dây đứt nếu mục tiêu chạy quá xa." },
      { phim: "E", ten: "Unstable Current", mota: "Bị động tăng tốc độ di chuyển và gây sát thương kèm làm chậm lên kẻ địch tung skill gần Razor. Giúp Razor bám dính mục tiêu." },
      { phim: "R", ten: "Eye of the Storm", mota: "Ulti: gọi một đám mây bão liên tục đánh xuống kẻ địch có máu thấp nhất xung quanh, gây sát thương và giảm giáp mục tiêu." }
    ],
    lenSkill: "Lên Static Link sớm để trade lane và ăn sát thương của đối thủ, tối đa Plasma Field để dọn lính, Unstable Current rải đều, ulti lấy ngay khi mở.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Slippers of Agility"],
      giaiDoanDau: ["Wraith Band", "Boots of Speed", "Magic Wand"],
      coreItem: ["Power Treads", "Black King Bar", "Sange and Yasha"],
      xaXi: ["Satanic", "Assault Cuirass", "Butterfly"]
    },
    chienThuat: [
      "Static Link là linh hồn của Razor: hút sát thương của carry địch để vừa làm nó vô hại vừa biến mình thành sát thủ.",
      "Đầu trận hãy dùng Static Link lên tướng đối lane rồi bám đánh, chênh lệch sát thương đủ để thắng mọi cuộc trade.",
      "Eye of the Storm giảm giáp liên tục nên rất mạnh khi kết hợp với Assault Cuirass và các đồng đội đánh thường."
    ],
    khacChe: [
      "Static Link đứt nếu mục tiêu chạy xa, các skill dịch chuyển hoặc đẩy lùi phá combo dễ dàng.",
      "Không có khống chế cứng, nếu bị khoá chân hoặc câm lặng thì Razor gần như không làm gì được."
    ]
  },
  {
    id: "rhasta",
    icon: "🐍",
    danhHieu: "Rhasta",
    skills: [
      { phim: "Q", ten: "Forked Lightning", mota: "Bắn tia sét hình nón gây sát thương phép lên nhiều kẻ địch cùng lúc. Chiêu dọn lính và quấy rối lane chủ lực từ đầu trận." },
      { phim: "W", ten: "Voodoo", mota: "Biến mục tiêu thành con vật vô hại trong vài giây, mất hết skill và tốc độ. Là chiêu khống chế đơn mục tiêu mạnh bậc nhất giai đoạn đầu." },
      { phim: "E", ten: "Shackles", mota: "Trói cứng mục tiêu tại chỗ và gây sát thương liên tục trong lúc kênh. Nối tiếp ngay sau Voodoo sẽ khoá địch cực lâu." },
      { phim: "R", ten: "Mass Serpent Ward", mota: "Ulti: triệu hồi một dàn trụ rắn gây sát thương vật lý rất mạnh trong khu vực. Dùng để hạ trụ chớp nhoáng hoặc thiêu rụi địch trong giao tranh." }
    ],
    lenSkill: "Lên Forked Lightning và Voodoo xen kẽ ở lane, thêm điểm Shackles khi đi gank cùng đồng đội, lấy Mass Serpent Ward ngay khi mở.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Observer Wards"],
      giaiDoanDau: ["Magic Wand", "Boots of Speed", "Ring of Basilius"],
      coreItem: ["Arcane Boots", "Blink Dagger", "Black King Bar"],
      xaXi: ["Aghanim's Scepter", "Scythe of Vyse", "Refresher Orb"]
    },
    chienThuat: [
      "Combo Voodoo rồi Shackles khoá một mục tiêu gần như suốt cả giao tranh, đủ để đồng đội hạ gọn.",
      "Mass Serpent Ward đặt đúng chỗ có thể hạ một trụ trong vài giây, hãy dùng nó để bẻ nhịp trận đấu chứ không chỉ để đánh nhau.",
      "Blink Dagger giúp vào tầm cắm ward và mở combo, còn Black King Bar giúp kênh trọn Shackles mà không bị cắt."
    ],
    khacChe: [
      "Thân hình rất mỏng và di chuyển chậm, không có bất kỳ chiêu thoát nào.",
      "Shackles là chiêu kênh liên tục nên chỉ một đòn khống chế nhẹ cũng cắt được toàn bộ combo."
    ]
  }
,
  {
    id: "rubick",
    icon: "🎩",
    danhHieu: "Grand Magus",
    skills: [
      { phim: "Q", ten: "Telekinesis", mota: "Nhấc bổng mục tiêu lên không trung khiến nó bất động, sau đó ném xuống một điểm gần đó, gây choáng thêm cho các kẻ địch quanh chỗ rơi." },
      { phim: "W", ten: "Fade Bolt", mota: "Phóng một tia phép nảy lần lượt qua nhiều kẻ địch, gây sát thương phép và giảm sát thương đánh thường của những mục tiêu trúng chiêu." },
      { phim: "E", ten: "Null Field", mota: "Hào quang bị động tăng kháng phép cho bản thân và đồng đội xung quanh." },
      { phim: "R", ten: "Spell Steal", mota: "Ulti: Cướp lấy chiêu thức cuối cùng mà một tướng địch vừa sử dụng và dùng lại nó với cấp độ của chính Rubick." }
    ],
    lenSkill: "Ưu tiên Telekinesis để khống chế, xen kẽ Fade Bolt để đẩy lính và quấy rối, lấy Spell Steal ngay khi đủ cấp, Null Field lên cuối.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Observer Wards"],
      coreItem: ["Arcane Boots", "Blink Dagger", "Force Staff"],
      xaXi: ["Aghanim's Scepter", "Scythe of Vyse", "Refresher Orb"]
    },
    chienThuat: [
      "Telekinesis có độ trễ trước khi mục tiêu rơi xuống, hãy canh hướng ném để hất kẻ địch về phía đồng đội hoặc đẩy chúng ra xa khỏi giao tranh.",
      "Blink Dagger giúp vào tầm cướp chiêu an toàn; luôn cướp chiêu mạnh nhất vừa được đối phương tung ra thay vì chiêu đầu tiên nhìn thấy.",
      "Giá trị của Rubick phụ thuộc hoàn toàn vào đội hình địch, hãy nhớ đối phương có những chiêu nào đáng cướp trước khi giao tranh nổ ra."
    ],
    khacChe: [
      "Rubick rất mỏng máu và ít giáp, chỉ cần một chiêu khống chế trúng trước là gần như vô hại.",
      "Đội hình địch có thể ép Rubick lộ vị trí rồi nhảy vào, hoặc cố tình dùng chiêu rác trước để Rubick cướp phải chiêu vô dụng."
    ]
  },
  {
    id: "sandking",
    icon: "🦂",
    danhHieu: "Crixalis",
    skills: [
      { phim: "Q", ten: "Burrowstrike", mota: "Chui xuống đất lao thẳng về phía trước, hất tung và làm choáng mọi kẻ địch trên đường đi." },
      { phim: "W", ten: "Sand Storm", mota: "Tạo cơn bão cát quanh mình, gây sát thương theo thời gian cho kẻ địch đứng trong vùng và giúp Sand King tàng hình khi đứng yên trong bão." },
      { phim: "E", ten: "Caustic Finale", mota: "Bị động: đòn đánh tẩm độc khiến mục tiêu phát nổ khi chết, gây sát thương diện rộng cho các đơn vị xung quanh." },
      { phim: "R", ten: "Epicenter", mota: "Ulti: Sau thời gian niệm chú, tạo ra nhiều đợt chấn động lan rộng dần, gây sát thương lớn và làm chậm toàn bộ kẻ địch trong vùng." }
    ],
    lenSkill: "Max Burrowstrike để gank sớm, kết hợp Sand Storm giữ mana và cắm trại, lấy Epicenter ngay khi đủ cấp, Caustic Finale để dành đẩy lính về sau.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Circlet of Nobility"],
      giaiDoanDau: ["Magic Wand", "Boots of Speed", "Bottle"],
      coreItem: ["Arcane Boots", "Blink Dagger", "Black King Bar"],
      xaXi: ["Shiva's Guard", "Aghanim's Scepter", "Scythe of Vyse"]
    },
    chienThuat: [
      "Combo chuẩn là Blink Dagger vào giữa đội hình địch, mở Epicenter rồi Burrowstrike để giữ chân đối phương trong vùng chấn động.",
      "Sand Storm cho phép ẩn mình ngay giữa đường, dùng để phục kích hoặc thoát hiểm khi bị đuổi.",
      "Đầu trận có thể farm rừng bằng Sand Storm để lên Blink Dagger sớm mà không tranh lính với đồng đội."
    ],
    khacChe: [
      "Dust of Appearance và Sentry Ward vô hiệu hoá khả năng tàng hình trong Sand Storm.",
      "Ép Sand King phải mở Epicenter trước hoặc dí sát khiến hắn không kịp niệm ulti sẽ làm giao tranh mất hẳn sát thương diện rộng."
    ]
  },
  {
    id: "shadowdemon",
    icon: "👿",
    danhHieu: "Eredar",
    skills: [
      { phim: "Q", ten: "Disruption", mota: "Đẩy mục tiêu vào một chiều không gian khác trong vài giây, khiến nó biến mất hoàn toàn; khi trở lại sẽ sinh ra hai bản sao ảo tấn công theo Shadow Demon." },
      { phim: "W", ten: "Soul Catcher", mota: "Đánh dấu một kẻ địch, khiến nó phải nhận thêm sát thương từ mọi nguồn trong thời gian ngắn." },
      { phim: "E", ten: "Shadow Poison", mota: "Bắn luồng độc theo đường thẳng, cộng dồn nhiều lớp lên mục tiêu; có thể kích nổ để gây sát thương tăng vọt theo số lớp đã tích." },
      { phim: "R", ten: "Demonic Purge", mota: "Ulti: Thanh tẩy mục tiêu, gỡ bỏ hiệu ứng tăng cường và làm chậm cực mạnh trong thời gian dài kèm sát thương theo thời gian." }
    ],
    lenSkill: "Max Shadow Poison để quấy rối và đẩy lính, giữ một điểm Disruption sớm để cứu đồng đội hoặc mở gank, lấy Demonic Purge đúng cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Magic Wand", "Boots of Speed", "Observer Wards"],
      coreItem: ["Arcane Boots", "Aghanim's Scepter", "Force Staff"],
      xaXi: ["Scythe of Vyse", "Shiva's Guard", "Refresher Orb"]
    },
    chienThuat: [
      "Disruption vừa là chiêu khống chế vừa là chiêu cứu người: dùng lên đồng đội sắp chết để né sát thương đang bay tới.",
      "Cộng dồn nhiều lớp Shadow Poison rồi mới kích nổ, kết hợp Soul Catcher ngay trước khi nổ để nhân sát thương lên mục tiêu chính.",
      "Demonic Purge gỡ mọi buff tăng tốc và hiệu ứng cường hoá, rất mạnh khi nhắm vào carry vừa bật chiêu."
    ],
    khacChe: [
      "Shadow Demon cực kỳ mỏng manh và tiêu mana nhanh, gank sớm hoặc gây áp lực đường sẽ khiến hắn vô dụng.",
      "Black King Bar và các hiệu ứng miễn nhiễm phép chặn được toàn bộ bộ chiêu của hắn."
    ]
  },
  {
    id: "shadowfiend",
    icon: "💀",
    danhHieu: "Nevermore",
    skills: [
      { phim: "Q", ten: "Shadowraze (near)", mota: "Đốt cháy một vùng nhỏ ngay phía trước Shadow Fiend, gây sát thương phép; đánh trúng liên tiếp bằng nhiều tầm Shadowraze sẽ cộng dồn sát thương." },
      { phim: "W", ten: "Shadowraze (medium)", mota: "Cùng cơ chế nhưng nổ ở khoảng cách trung bình phía trước." },
      { phim: "E", ten: "Shadowraze (far)", mota: "Cùng cơ chế nhưng nổ ở khoảng cách xa nhất phía trước." },
      { phim: "R", ten: "Requiem of Souls", mota: "Ulti: Giải phóng toàn bộ linh hồn đã thu thập thành các làn sóng bóng tối lan ra mọi hướng, gây sát thương lớn và làm kẻ địch trúng chiêu bị suy yếu, chậm chạp." }
    ],
    lenSkill: "Max cả ba tầm Shadowraze song song để áp đảo đường giữa, kết hợp điểm vào Necromastery, lấy Requiem of Souls đúng cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Slippers of Agility"],
      giaiDoanDau: ["Bottle", "Boots of Speed", "Magic Wand"],
      coreItem: ["Power Treads", "Lothar's Edge", "Black King Bar"],
      xaXi: ["Butterfly", "Daedalus", "Satanic"]
    },
    chienThuat: [
      "Ngoài bốn chiêu trên, Shadow Fiend còn hai nội tại quan trọng: Necromastery tích linh hồn từ đơn vị bị giết để tăng sát thương đánh thường, và Presence of the Dark Lord giảm giáp mọi kẻ địch xung quanh.",
      "Ba tầm Shadowraze có khoảng cách cố định so với hướng mặt, phải xoay người canh cự ly chứ không nhắm chuột vào mục tiêu.",
      "Requiem of Souls mạnh nhất khi xuất hiện bất ngờ ngay sát đối phương, nên dùng sau khi tàng hình bằng Lothar's Edge hoặc sau khi bị hất tung."
    ],
    khacChe: [
      "Shadow Fiend không có chiêu thoát và máu rất thấp, mọi chiêu khống chế đơn mục tiêu đều giết hắn dễ dàng.",
      "Giết Shadow Fiend làm rơi bớt linh hồn đã tích, khiến sát thương và sức mạnh Requiem sụt giảm rõ rệt."
    ]
  },
  {
    id: "silencer",
    icon: "🤐",
    danhHieu: "Nortrom",
    skills: [
      { phim: "Q", ten: "Curse of the Silent", mota: "Nguyền rủa kẻ địch trong một vùng, khiến chúng liên tục mất máu và mana nếu không dùng chiêu hoặc đánh thường để gỡ lời nguyền." },
      { phim: "W", ten: "Glaives of Wisdom", mota: "Đòn đánh bồi thêm sát thương phép dựa trên trí tuệ của Silencer; kèm khả năng cộng dồn trí tuệ vĩnh viễn từ những tướng chết gần Silencer." },
      { phim: "E", ten: "Last Word", mota: "Đánh dấu một mục tiêu; nếu nó dùng chiêu sẽ bị kích hoạt ngay, còn nếu không thì sau thời gian chờ vẫn phát nổ gây sát thương và làm im lặng." },
      { phim: "R", ten: "Global Silence", mota: "Ulti: Làm im lặng toàn bộ tướng địch trên cả bản đồ, khiến chúng không thể dùng chiêu lẫn item kích hoạt trong vài giây." }
    ],
    lenSkill: "Max Curse of the Silent để ép đường, thêm điểm Glaives of Wisdom để quấy rối và tích trí tuệ, lấy Global Silence ngay khi có thể.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Null Talisman", "Boots of Speed", "Magic Wand"],
      coreItem: ["Arcane Boots", "Force Staff", "Eul's Scepter of Divinity"],
      xaXi: ["Aghanim's Scepter", "Scythe of Vyse", "Refresher Orb"]
    },
    chienThuat: [
      "Global Silence là chiêu mở hoặc phản giao tranh mạnh nhất game, hãy giữ cho tới khi đối phương định tung chuỗi chiêu quyết định.",
      "Curse of the Silent bào rất nặng đầu trận, dùng liên tục để ép hai tướng đường địch phải về nhà.",
      "Trí tuệ cộng dồn khiến Silencer càng về sau càng nhiều mana và sát thương phép từ Glaives, hãy có mặt ở các pha giao tranh dù chỉ để đứng gần."
    ],
    khacChe: [
      "Black King Bar và các item gỡ hiệu ứng vô hiệu hoá Global Silence, khiến Silencer mất gần hết giá trị.",
      "Silencer chậm chạp và không có chiêu thoát, dễ bị nhảy vào giết trước khi kịp bấm ulti."
    ]
  },
  {
    id: "skeletonking",
    icon: "☠️",
    danhHieu: "King Leoric",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Hellfire Blast", mota: "Phóng quả cầu lửa địa ngục gây sát thương, làm choáng và tiếp tục thiêu đốt mục tiêu theo thời gian kèm làm chậm." },
      { phim: "W", ten: "Vampiric Aura", mota: "Hào quang giúp Skeleton King và các đơn vị đánh thường phe mình hút một phần sát thương gây ra thành máu." },
      { phim: "E", ten: "Critical Strike", mota: "Bị động: có tỉ lệ tung ra đòn chí mạng gây sát thương nhân lên nhiều lần." },
      { phim: "R", ten: "Reincarnation", mota: "Ulti: Khi chết, Skeleton King hồi sinh ngay tại chỗ sau vài giây với đầy máu và mana, đồng thời làm chậm kẻ địch xung quanh." }
    ],
    lenSkill: "Max Hellfire Blast để gank và giữ chân, xen Critical Strike để farm, lấy Reincarnation đúng cấp, Vampiric Aura lên sau.",
    doBuild: {
      khoiDau: ["Tangoes", "Gauntlets of Ogre Strength", "Branch"],
      giaiDoanDau: ["Magic Wand", "Boots of Speed", "Bracer"],
      coreItem: ["Power Treads", "Armlet of Mordiggian", "Black King Bar"],
      xaXi: ["Assault Cuirass", "Heart of Tarrasque", "Satanic"]
    },
    chienThuat: [
      "Reincarnation cho phép đánh liều: cứ lao vào giao tranh, chết một lần vẫn đứng dậy đánh tiếp nếu còn đủ mana.",
      "Luôn giữ đủ mana cho Reincarnation, hết mana đồng nghĩa với chết thật.",
      "Vampiric Aura kết hợp sát thương lớn khiến Skeleton King rất khó bị hạ trong giao tranh kéo dài, đặc biệt khi có thêm hồi máu từ item."
    ],
    khacChe: [
      "Các hiệu ứng giảm hồi máu và giảm giáp làm suy yếu mạnh khả năng bám trụ của hắn.",
      "Thay vì cố giết hai lần, hãy ép Skeleton King cạn mana hoặc khống chế hắn ngay khoảnh khắc vừa hồi sinh."
    ]
  },
  {
    id: "skywrathmage",
    icon: "🦅",
    danhHieu: "Dragonus",
    skills: [
      { phim: "Q", ten: "Arcane Bolt", mota: "Bắn viên đạn phép tự truy đuổi mục tiêu, sát thương tăng theo trí tuệ của Skywrath Mage." },
      { phim: "W", ten: "Concussive Shot", mota: "Bắn một phát đạn vào tướng địch gần nhất trong tầm rất xa, gây sát thương diện nhỏ và làm chậm mục tiêu chính." },
      { phim: "E", ten: "Ancient Seal", mota: "Phong ấn một mục tiêu, làm im lặng và khiến nó phải nhận thêm sát thương phép trong thời gian đó." },
      { phim: "R", ten: "Mystic Flare", mota: "Ulti: Triệu hồi vùng năng lượng phép trút xuống một khu vực nhỏ, tổng sát thương rất lớn nhưng chia đều cho tất cả tướng địch đứng trong vùng." }
    ],
    lenSkill: "Max Arcane Bolt để sát thương ổn định, giữ sớm một điểm Ancient Seal để mở combo, thêm Concussive Shot khi cần đuổi, lấy Mystic Flare đúng cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Null Talisman", "Boots of Speed", "Magic Wand"],
      coreItem: ["Arcane Boots", "Eul's Scepter of Divinity", "Force Staff"],
      xaXi: ["Scythe of Vyse", "Aghanim's Scepter", "Orchid Malevolence"]
    },
    chienThuat: [
      "Combo chuẩn: Ancient Seal trước để im lặng và khuếch đại sát thương phép, rồi mới thả Arcane Bolt và Mystic Flare.",
      "Mystic Flare chỉ phát huy tối đa khi trúng đúng một mục tiêu, hãy thả vào tướng đơn độc hoặc kết hợp Eul's Scepter of Divinity để giữ chân.",
      "Tầm chiêu rất xa cho phép quấy rối liên tục từ ngoài tầm nhìn, nhưng phải chú ý lượng mana vì mọi chiêu đều ngốn nhiều."
    ],
    khacChe: [
      "Máu và giáp cực thấp, chỉ cần bắt trúng một lần là chết ngay, hãy chủ động săn hắn khi đi lẻ.",
      "Kháng phép cao, Hood of Defiance hay Black King Bar làm sát thương của Skywrath Mage giảm hẳn."
    ]
  },
  {
    id: "slardar",
    icon: "🐟",
    danhHieu: "Slithereen Guard",
    skills: [
      { phim: "Q", ten: "Sprint", mota: "Tăng mạnh tốc độ chạy trong thời gian ngắn, đổi lại phải nhận thêm sát thương trong lúc chiêu còn hiệu lực." },
      { phim: "W", ten: "Slithereen Crush", mota: "Đập mạnh xuống đất, làm choáng toàn bộ kẻ địch xung quanh và tiếp tục làm chậm chúng sau khi hết choáng." },
      { phim: "E", ten: "Bash", mota: "Bị động: đòn đánh có tỉ lệ làm choáng ngắn mục tiêu kèm sát thương cộng thêm." },
      { phim: "R", ten: "Amplify Damage", mota: "Ulti: Giảm mạnh giáp của một mục tiêu và soi rõ nó kể cả khi tàng hình trong suốt thời gian hiệu lực." }
    ],
    lenSkill: "Max Slithereen Crush để khống chế, thêm điểm Sprint để đuổi và di chuyển, lấy Amplify Damage đúng cấp, Bash lên sau.",
    doBuild: {
      khoiDau: ["Tangoes", "Gauntlets of Ogre Strength", "Branch"],
      giaiDoanDau: ["Magic Wand", "Boots of Speed", "Bracer"],
      coreItem: ["Power Treads", "Blink Dagger", "Black King Bar"],
      xaXi: ["Assault Cuirass", "Heart of Tarrasque", "Satanic"]
    },
    chienThuat: [
      "Blink Dagger là món quan trọng nhất: nhảy vào, Slithereen Crush rồi Amplify Damage lên mục tiêu chính.",
      "Amplify Damage khiến cả đội đánh thường mạnh hơn hẳn, hãy dùng lên carry địch hoặc tướng nhiều giáp thay vì tướng giấy.",
      "Sprint giúp gank sớm cực hiệu quả nhưng làm nhận thêm sát thương, nên tắt hoặc tránh bật khi đang bị tập trung đánh."
    ],
    khacChe: [
      "Slardar dựa vào việc áp sát, mọi hiệu ứng đẩy lùi, làm chậm hay Force Staff đều phá vỡ pha nhảy vào của hắn.",
      "Giữ khoảng cách và khống chế hắn trước khi kịp dùng Slithereen Crush sẽ vô hiệu hoá phần lớn sức mạnh."
    ]
  },
  {
    id: "slark",
    icon: "🦈",
    danhHieu: "Murloc Nightcrawler",
    skills: [
      { phim: "Q", ten: "Dark Pact", mota: "Sau một khoảng trễ ngắn, bùng nổ năng lượng quanh mình gây sát thương diện rộng đồng thời gỡ bỏ phần lớn hiệu ứng bất lợi đang dính trên Slark." },
      { phim: "W", ten: "Pounce", mota: "Lao vọt về phía trước, trói chân tướng địch đầu tiên chạm phải khiến nó không thể rời xa Slark trong thời gian ngắn." },
      { phim: "E", ten: "Essence Shift", mota: "Mỗi đòn đánh lên tướng địch rút bớt chỉ số của nó và cộng tạm thời vào nhanh nhẹn của Slark, càng đánh lâu càng mạnh." },
      { phim: "R", ten: "Shadow Dance", mota: "Ulti: Tàng hình trong thời gian ngắn, vẫn đánh và dùng chiêu bình thường, kèm hồi máu và tăng tốc; bị động cũng hồi máu nhanh khi Slark không bị đối phương nhìn thấy." }
    ],
    lenSkill: "Max Dark Pact để farm và gỡ khống chế, thêm điểm Pounce để bắt mục tiêu, lấy Shadow Dance đúng cấp, Essence Shift lên sau khi đã có đồ.",
    doBuild: {
      khoiDau: ["Tangoes", "Slippers of Agility", "Branch"],
      giaiDoanDau: ["Magic Wand", "Boots of Speed", "Wraith Band"],
      coreItem: ["Power Treads", "Lothar's Edge", "Skadi"],
      xaXi: ["Satanic", "Butterfly", "Heart of Tarrasque"]
    },
    chienThuat: [
      "Dark Pact có độ trễ, hãy bấm ngay khi thấy chiêu khống chế hoặc độc sắp bay tới để gỡ sạch hiệu ứng.",
      "Pounce kết hợp Shadow Dance là combo bắt lẻ chuẩn: lao tới trói chân rồi tàng hình đánh cho tới khi đối phương chết.",
      "Slark mạnh nhất khi bắt lẻ từng người, tránh lao vào giao tranh tổng khi chưa tích được chỉ số từ Essence Shift."
    ],
    khacChe: [
      "Dust of Appearance, Sentry Ward và Gem of True Sight vô hiệu hoá Shadow Dance.",
      "Đi theo nhóm và giữ tầm nhìn ở khu rừng khiến Slark không thể hồi máu lén cũng như không bắt lẻ được ai."
    ]
  },
  {
    id: "spectre",
    icon: "👻",
    danhHieu: "Mercurial",
    skills: [
      { phim: "Q", ten: "Spectral Dagger", mota: "Phóng con dao để lại vệt đường ma; Spectre chạy trên vệt này được tăng tốc và đi xuyên địa hình, còn kẻ địch dính vệt thì bị làm chậm." },
      { phim: "W", ten: "Desolate", mota: "Bị động: gây thêm sát thương khi đánh trúng kẻ địch đang đứng một mình, không có đơn vị đồng minh nào bên cạnh." },
      { phim: "E", ten: "Dispersion", mota: "Bị động: phản lại một phần sát thương Spectre phải nhận lên các kẻ địch xung quanh." },
      { phim: "R", ten: "Haunt", mota: "Ulti: Tạo ra ảnh ảo đuổi theo mọi tướng địch trên toàn bản đồ; Spectre có thể dịch chuyển tới vị trí một ảnh ảo bất kỳ trong thời gian chiêu còn hiệu lực." }
    ],
    lenSkill: "Ưu tiên Desolate và Dispersion để farm an toàn, giữ một điểm Spectral Dagger sớm để thoát thân, lấy Haunt ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Stout Shield", "Branch"],
      giaiDoanDau: ["Quelling Blade", "Boots of Speed", "Ring of Health"],
      coreItem: ["Power Treads", "Radiance", "Manta Style"],
      xaXi: ["Butterfly", "Skadi", "Heart of Tarrasque"]
    },
    chienThuat: [
      "Spectre yếu ở giai đoạn đầu, hãy tập trung farm và chỉ tham gia giao tranh bằng Haunt từ xa để kiếm mạng miễn phí.",
      "Radiance cộng hưởng cực mạnh với Haunt vì mỗi ảnh ảo cũng mang theo hiệu ứng thiêu đốt vào giữa đội hình địch.",
      "Dispersion khiến việc tập trung đánh Spectre trở nên nguy hiểm, càng về cuối trận Spectre càng khó bị hạ trong giao tranh tổng."
    ],
    khacChe: [
      "Gây áp lực mạnh giai đoạn đầu và cấm Spectre farm là cách khắc chế hiệu quả nhất, vì cô ta rất chậm phát triển.",
      "Kết thúc trận sớm hoặc đẩy trụ liên tục trước khi Spectre kịp lên đủ đồ cốt lõi."
    ]
  },
  {
    id: "stormspirit",
    icon: "⚡",
    danhHieu: "Raijin Thunderkeg",
    skills: [
      { phim: "Q", ten: "Static Remnant", mota: "Tạo ra một hình nhân tĩnh điện đứng yên tại chỗ, phát nổ gây sát thương phép khi có kẻ địch tới gần." },
      { phim: "W", ten: "Electric Vortex", mota: "Kéo một tướng địch về phía mình trong thời gian ngắn, đổi lại Storm Spirit phải mất một phần máu." },
      { phim: "E", ten: "Overload", mota: "Bị động: sau mỗi lần dùng chiêu, đòn đánh kế tiếp phóng ra luồng điện gây sát thương diện nhỏ và làm chậm kẻ địch xung quanh." },
      { phim: "R", ten: "Ball Lightning", mota: "Ulti: Biến thành quả cầu sét lao tới bất kỳ vị trí nào trên bản đồ, gây sát thương cho kẻ địch trên đường bay và tiêu tốn mana tỉ lệ theo quãng đường di chuyển." }
    ],
    lenSkill: "Max Static Remnant kết hợp Overload để đè đường giữa, giữ một điểm Electric Vortex để bắt người, nâng Ball Lightning đúng cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Mantle of Intelligence"],
      giaiDoanDau: ["Bottle", "Boots of Speed", "Null Talisman"],
      coreItem: ["Power Treads", "Orchid Malevolence", "Bloodstone"],
      xaXi: ["Scythe of Vyse", "Black King Bar", "Shiva's Guard"]
    },
    chienThuat: [
      "Ball Lightning vừa là chiêu đuổi vừa là chiêu thoát; bay một đoạn ngắn cũng kích hoạt Overload nên hãy xen kẽ bay và đánh liên tục.",
      "Bloodstone và lượng mana lớn quyết định sức mạnh của Storm Spirit, càng nhiều mana càng bay được xa và đánh được lâu.",
      "Combo bắt lẻ: Ball Lightning tới gần, Electric Vortex kéo lại, thả Static Remnant rồi đánh thường liên tục nhờ Overload."
    ],
    khacChe: [
      "Mọi hiệu ứng đốt mana hay ép Storm Spirit tiêu hao mana đều khiến hắn mất khả năng cơ động lẫn sát thương.",
      "Im lặng và khống chế cứng ngay khi hắn vừa hạ cánh sẽ khoá chết hắn giữa đội hình đối phương."
    ]
  },
  {
    id: "taurenchieftaint",
    icon: "🐂",
    danhHieu: "Cairne Bloodhoof",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Echo Stomp", mota: "Dậm mạnh xuống đất sau thời gian niệm, khiến kẻ địch xung quanh chìm vào giấc ngủ; chúng sẽ tỉnh dậy nếu bị đánh trúng." },
      { phim: "W", ten: "Ancestral Spirit", mota: "Phóng linh hồn tổ tiên bay ra rồi quay về, gây sát thương cho kẻ địch trên đường đi và mang thêm chỉ số về cho Tauren Chieftain tuỳ theo số đơn vị mà nó đi qua." },
      { phim: "E", ten: "Natural Order", mota: "Bị động: hào quang làm giảm giáp và kháng phép của toàn bộ kẻ địch trong vùng xung quanh." },
      { phim: "R", ten: "Earth Splitter", mota: "Ulti: Xẻ một vết nứt dài trên mặt đất, sau độ trễ vết nứt bung ra gây sát thương theo lượng máu tối đa và làm chậm mạnh mọi kẻ địch trúng chiêu." }
    ],
    lenSkill: "Max Echo Stomp để khống chế diện rộng, thêm Natural Order để tăng sát thương cho cả đội, lấy Earth Splitter đúng cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Gauntlets of Ogre Strength"],
      giaiDoanDau: ["Magic Wand", "Boots of Speed", "Bracer"],
      coreItem: ["Arcane Boots", "Blink Dagger", "Vladmir's Offering"],
      xaXi: ["Shiva's Guard", "Assault Cuirass", "Black King Bar"]
    },
    chienThuat: [
      "Echo Stomp có thời gian niệm khá lâu, hãy dùng Blink Dagger để vào vị trí rồi mới dậm, hoặc phối hợp cùng chiêu khống chế của đồng đội.",
      "Natural Order giảm giáp và kháng phép nên chỉ cần Tauren Chieftain đứng gần là cả đội đánh mạnh hơn hẳn.",
      "Earth Splitter là đường thẳng dài với độ trễ, hãy quét ngang toàn bộ đội hình địch thay vì nhắm một mục tiêu."
    ],
    khacChe: [
      "Đánh nhẹ một cái là gỡ ngay hiệu ứng ngủ của Echo Stomp, đội hình có sát thương lan hoặc lính đi kèm sẽ ít bị khống chế.",
      "Đứng tản ra và tránh xa hào quang Natural Order, đồng thời né đường vết nứt của Earth Splitter khi thấy mặt đất bị xẻ."
    ]
  }
,
  {
    id: "techies",
    icon: "💣",
    danhHieu: "Goblin Techies",
    skills: [
      { phim: "Q", ten: "Land Mines", mota: "Đặt mìn tàng hình dưới đất, phát nổ gây sát thương lớn diện rộng khi địch bước vào bán kính kích hoạt. Có thể xếp chồng nhiều quả một chỗ để giết ngay lập tức." },
      { phim: "W", ten: "Stasis Trap", mota: "Đặt bẫy tàng hình, khi địch đến gần sẽ nổ và làm choáng mọi kẻ địch xung quanh trong vài giây. Không gây sát thương, dùng để giữ chân cho mìn nổ." },
      { phim: "E", ten: "Suicide Squad, Attack!", mota: "Techies tự sát, gây sát thương rất lớn cho toàn bộ địch xung quanh và làm chậm chúng. Techies chết nhưng địch cũng chết theo." },
      { phim: "R", ten: "Remote Mines", mota: "Ulti: Đặt mìn điều khiển từ xa, tàng hình và chỉ nổ khi người chơi ra lệnh. Xếp chồng nhiều quả rồi kích nổ cùng lúc để bốc hơi mục tiêu." }
    ],
    lenSkill: "Max Land Mines trước để bảo vệ đường và farm, điểm sớm vào Stasis Trap, lấy Remote Mines ngay khi có thể.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Clarity"],
      giaiDoanDau: ["Boots of Speed", "Soul Ring", "Magic Wand"],
      coreItem: ["Arcane Boots", "Force Staff", "Aghanim's Scepter"],
      xaXi: ["Boots of Travel", "Bloodstone", "Scythe of Vyse"]
    },
    chienThuat: [
      "Đặt mìn ở các lối đi hẹp, cửa rừng và đường vào Roshan — nơi địch buộc phải đi qua.",
      "Kết hợp Stasis Trap ngay cạnh bãi mìn: địch bị choáng đứng yên và ăn trọn sát thương.",
      "Remote Mines nên xếp thành cụm gần trụ hoặc điểm giao tranh, kích nổ tất cả cùng lúc chứ đừng nổ lẻ tẻ."
    ],
    khacChe: [
      "Gem of True Sight và Sentry Ward vô hiệu hóa hoàn toàn lối chơi mìn — luôn có người mang gem khi đối đầu Techies.",
      "Necronomicon và các đơn vị triệu hồi dùng để dò đường, cho lính ăn mìn thay vì tướng."
    ]
  },
  {
    id: "templarassassin",
    icon: "🔮",
    danhHieu: "Lanaya",
    skills: [
      { phim: "Q", ten: "Refraction", mota: "Tạo lớp khiên hấp thụ trọn vẹn một số đòn sát thương, đồng thời cộng thêm sát thương cho một số đòn đánh tiếp theo. Hai phần đếm riêng." },
      { phim: "W", ten: "Meld", mota: "Tàng hình khi đứng yên; đòn đánh thoát khỏi trạng thái này gây thêm sát thương và giảm giáp mục tiêu." },
      { phim: "E", ten: "Psi Blades", mota: "Đòn đánh xuyên qua mục tiêu, gây sát thương lan cho kẻ địch phía sau theo một đường thẳng. Cũng tăng tầm đánh." },
      { phim: "R", ten: "Psionic Trap", mota: "Ulti: Đặt bẫy tàng hình ở xa, khi kích hoạt sẽ làm chậm mạnh kẻ địch trong vùng. Dùng để soi bản đồ và bắt mục tiêu chạy trốn." }
    ],
    lenSkill: "Ưu tiên Refraction để cầm đường an toàn, điểm Psi Blades để farm, lấy Psionic Trap đúng cấp và max Meld sau.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Slippers of Agility"],
      giaiDoanDau: ["Boots of Speed", "Wraith Band", "Magic Wand"],
      coreItem: ["Power Treads", "Blink Dagger", "Desolator"],
      xaXi: ["Black King Bar", "Butterfly", "Daedalus"]
    },
    chienThuat: [
      "Refraction trước khi vào giao tranh — lớp khiên giúp sống sót qua loạt combo đầu tiên.",
      "Đứng sau lính khi last hit để Psi Blades chém lan vào cả dàn lính địch, đẩy đường rất nhanh.",
      "Rải Psionic Trap quanh rừng và cửa sông làm mắt di động, vừa cảnh báo vừa bắt gank ngược."
    ],
    khacChe: [
      "Sát thương diện rộng và bùa lửa như Radiance bóc Refraction rất nhanh, khiến cô ta mỏng manh trở lại.",
      "Dust of Appearance và Sentry Ward vô hiệu Meld, ngăn cô ta rình rập bất ngờ."
    ]
  },
  {
    id: "terrorblade",
    icon: "😈",
    danhHieu: "Soul Keeper",
    skills: [
      { phim: "Q", ten: "Reflection", mota: "Tạo ảnh phản chiếu của kẻ địch tấn công chính chúng, đồng thời làm chậm mục tiêu trong thời gian ngắn." },
      { phim: "W", ten: "Conjure Image", mota: "Tạo ra một ảnh ảo của bản thân gây một phần sát thương gốc. Dùng để farm nhanh và đẩy trụ." },
      { phim: "E", ten: "Metamorphosis", mota: "Biến thành hình dạng ác quỷ tầm xa với sát thương tăng mạnh trong một khoảng thời gian, nhưng chậm chân hơn." },
      { phim: "R", ten: "Sunder", mota: "Ulti: Hoán đổi tỉ lệ máu hiện tại với một tướng địch hoặc đồng minh. Vừa là công cụ thoát chết vừa là đòn kết liễu." }
    ],
    lenSkill: "Max Conjure Image để farm nhanh, điểm Metamorphosis vừa đủ, lấy Sunder ngay khi đủ cấp làm bùa hộ mệnh.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Slippers of Agility"],
      giaiDoanDau: ["Boots of Speed", "Wraith Band", "Ring of Health"],
      coreItem: ["Power Treads", "Yasha", "Manta Style"],
      xaXi: ["Black King Bar", "Skadi", "Butterfly"]
    },
    chienThuat: [
      "Dùng ảnh ảo dọn nhiều bãi rừng cùng lúc giai đoạn đầu, đây là tướng farm nhanh bậc nhất.",
      "Bật Metamorphosis trước khi đánh trụ — dạng tầm xa cộng ảnh ảo hạ trụ cực nhanh.",
      "Giữ Sunder làm át chủ bài: cứ để máu tụt thấp rồi hoán đổi với tướng địch máu đầy để lật kèo."
    ],
    khacChe: [
      "Sát thương diện rộng quét sạch ảnh ảo, làm mất phần lớn sức mạnh của Terrorblade.",
      "Khống chế cứng ngay đầu giao tranh khiến hắn chết trước khi kịp dùng Sunder."
    ]
  },
  {
    id: "thrall",
    icon: "⚡",
    danhHieu: "Disruptor",
    skills: [
      { phim: "Q", ten: "Thunder Strike", mota: "Giáng sét lên mục tiêu nhiều lần, mỗi lần gây sát thương diện rộng nhỏ quanh mục tiêu và soi sáng khu vực." },
      { phim: "W", ten: "Glimpse", mota: "Kéo kẻ địch quay ngược về vị trí chúng đứng vài giây trước đó. Dùng để chặn đường chạy trốn hoặc kéo địch ra khỏi đội hình." },
      { phim: "E", ten: "Kinetic Field", mota: "Tạo một vòng năng lượng sau một khoảng trễ, kẻ địch bên trong không thể ra ngoài." },
      { phim: "R", ten: "Static Storm", mota: "Ulti: Tạo bão tĩnh điện gây sát thương tăng dần và khóa hoàn toàn phép của mọi kẻ địch trong vùng." }
    ],
    lenSkill: "Điểm Glimpse sớm để bắt lẻ, max Thunder Strike hoặc Kinetic Field tùy nhu cầu, lấy Static Storm ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Observer Wards"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Urn of Shadows"],
      coreItem: ["Arcane Boots", "Force Staff", "Aghanim's Scepter"],
      xaXi: ["Refresher Orb", "Scythe of Vyse", "Shiva's Guard"]
    },
    chienThuat: [
      "Kinetic Field úp trước rồi Static Storm chồng lên trên — địch vừa không thoát ra được vừa không dùng được phép.",
      "Glimpse dùng ngay khi địch vừa blink hoặc chạy khỏi giao tranh, kéo chúng về đúng chỗ chết.",
      "Thunder Strike lên tướng địch giai đoạn đầu vừa quấy rối vừa soi rừng, hạn chế gank bất ngờ."
    ],
    khacChe: [
      "Black King Bar giúp tướng đánh chính đi xuyên qua toàn bộ combo của Disruptor.",
      "Hắn rất mỏng và không có kỹ năng thoát thân — nhắm hắn trước trong giao tranh."
    ]
  },
  {
    id: "tinker",
    icon: "🔧",
    danhHieu: "Boush",
    skills: [
      { phim: "Q", ten: "Laser", mota: "Bắn tia laser gây sát thương phép lớn lên một mục tiêu và làm nó mù, đánh thường trượt hoàn toàn trong thời gian ngắn." },
      { phim: "W", ten: "Heat-Seeking Missile", mota: "Phóng tên lửa tự tìm mục tiêu, bay đến các tướng địch gần nhất trong tầm và gây sát thương phép." },
      { phim: "E", ten: "March of the Machines", mota: "Triệu hồi bầy máy bay càn quét một vùng rộng, gây sát thương lên mọi kẻ địch và lính đi qua." },
      { phim: "R", ten: "Rearm", mota: "Ulti: Sau một khoảng niệm, hồi lại toàn bộ thời gian hồi của kỹ năng và phần lớn trang bị. Là trái tim của lối chơi Tinker." }
    ],
    lenSkill: "Max March of the Machines để dọn lính và farm, điểm Laser để đối đầu, lấy Rearm ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Mantle of Intelligence"],
      giaiDoanDau: ["Boots of Speed", "Null Talisman", "Bottle"],
      coreItem: ["Boots of Travel", "Soul Ring", "Blink Dagger"],
      xaXi: ["Aghanim's Scepter", "Shiva's Guard", "Ethereal Blade"]
    },
    chienThuat: [
      "Boots of Travel là món bắt buộc: dịch chuyển về lính, Rearm hồi lại, rồi dịch chuyển đi đường khác liên tục.",
      "Blink vào tầm bắn, xả hết chiêu, blink ra, Rearm rồi lặp lại — đó là combo cốt lõi.",
      "Dọn lính bằng March rồi tranh thủ đẩy nhiều đường cùng lúc, ép địch phải chia quân về giữ."
    ],
    khacChe: [
      "Bắt hắn ở nơi không có lính để dịch chuyển về, hoặc dựng mắt để canh vị trí farm rừng của hắn.",
      "Khống chế im lặng như Orchid Malevolence khiến hắn không Rearm được và chết ngay."
    ]
  },
  {
    id: "treantprotector",
    icon: "🌳",
    danhHieu: "Rooftrellen",
    skills: [
      { phim: "Q", ten: "Nature's Grasp", mota: "Trói chân kẻ địch bằng rễ cây, khiến chúng không thể di chuyển và nhận sát thương theo thời gian." },
      { phim: "W", ten: "Leech Seed", mota: "Gieo hạt lên kẻ địch, hút máu của chúng theo từng nhịp, làm chậm chúng và hồi máu cho đồng minh xung quanh." },
      { phim: "E", ten: "Living Armor", mota: "Hồi máu cho một đơn vị đồng minh hoặc công trình bất kỳ trên bản đồ và tăng giáp cho nó. Dùng được cả để cứu trụ." },
      { phim: "R", ten: "Overgrowth", mota: "Ulti: Cây cối mọc trói chặt toàn bộ kẻ địch quanh Treant, khiến chúng không di chuyển và không đánh thường được." }
    ],
    lenSkill: "Max Leech Seed để quấy rối và hồi máu đường, rải điểm vào Living Armor để giữ đồng đội, lấy Overgrowth ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Observer Wards"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Ring of Basilius"],
      coreItem: ["Arcane Boots", "Blink Dagger", "Mekansm"],
      xaXi: ["Refresher Orb", "Shiva's Guard", "Aghanim's Scepter"]
    },
    chienThuat: [
      "Blink Dagger là món thay đổi cục diện: nhảy vào giữa đội hình địch rồi Overgrowth khóa cả đội.",
      "Living Armor cứu trụ và cứu đồng đội từ xa — luôn để mắt bản đồ và bấm khi ai đó bị gank.",
      "Trong rừng Treant tàng hình khi đứng cạnh cây, dùng để mai phục ở cửa rừng."
    ],
    khacChe: [
      "Black King Bar và các món giải khống chế phá vỡ Overgrowth.",
      "Chặt cây hoặc soi sáng bằng mắt để lộ vị trí mai phục của hắn."
    ],
    chuaChac: true
  },
  {
    id: "trollwarlord",
    icon: "🪓",
    danhHieu: "Jah'rakal",
    skills: [
      { phim: "Q", ten: "Berserker's Rage", mota: "Chuyển giữa dạng cận chiến và tầm xa. Dạng cận chiến có thêm máu, giáp, tốc chạy và đòn đánh có cơ hội làm choáng." },
      { phim: "W", ten: "Whirling Axes", mota: "Ném rìu xoáy; ở dạng tầm xa gây sát thương diện rộng và làm mù kẻ địch, ở dạng cận chiến gây sát thương và làm chậm xung quanh." },
      { phim: "E", ten: "Fervor", mota: "Càng đánh liên tiếp cùng một mục tiêu thì tốc độ đánh càng tăng, cộng dồn tới một giới hạn." },
      { phim: "R", ten: "Battle Trance", mota: "Ulti: Tăng mạnh tốc độ đánh cho Troll và toàn bộ đồng minh xung quanh trong thời gian ngắn." }
    ],
    lenSkill: "Max Whirling Axes hoặc Berserker's Rage để đối đầu đường, điểm Fervor để tăng lực đánh, lấy Battle Trance đúng cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Quelling Blade", "Slippers of Agility"],
      giaiDoanDau: ["Boots of Speed", "Wraith Band", "Magic Wand"],
      coreItem: ["Power Treads", "Black King Bar", "Sange and Yasha"],
      xaXi: ["Monkey King Bar", "Butterfly", "Satanic"]
    },
    chienThuat: [
      "Đổi dạng linh hoạt: tầm xa để quấy rối và last hit an toàn, cận chiến để lao vào giết.",
      "Choáng bị động từ dạng cận chiến rất phiền — bám chặt một mục tiêu để vừa choáng vừa cộng dồn Fervor.",
      "Bật Battle Trance khi cả đội đang đánh nhau, không chỉ để giết mà còn để hạ trụ hoặc Roshan cực nhanh."
    ],
    khacChe: [
      "Khống chế cứng và đẩy lùi khiến hắn mất chồng Fervor và không đánh liên tục được.",
      "Ghost Scepter hoặc các món né đòn làm hắn vô dụng vì hắn thuần đánh thường."
    ]
  },
  {
    id: "tuskarr",
    icon: "🐧",
    danhHieu: "Tusk",
    skills: [
      { phim: "Q", ten: "Ice Shards", mota: "Ném một khối băng về phía trước, tạo thành bức tường băng chặn đường di chuyển của kẻ địch và gây sát thương." },
      { phim: "W", ten: "Snowball", mota: "Cuộn thành quả cầu tuyết lăn về phía kẻ địch, cuốn theo đồng minh gần đó; khi trúng sẽ gây sát thương và làm choáng." },
      { phim: "E", ten: "Frozen Sigil", mota: "Triệu hồi một linh vật bay làm chậm tốc độ di chuyển và tốc độ đánh của kẻ địch xung quanh nó." },
      { phim: "R", ten: "Walrus Punch", mota: "Ulti: Đòn đánh kế tiếp gây sát thương chí mạng cực lớn, hất mục tiêu lên trời và làm chậm nặng khi rơi xuống." }
    ],
    lenSkill: "Điểm Snowball sớm để gank, max Ice Shards để chặn đường, lấy Walrus Punch ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Gauntlets of Ogre Strength"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Bracer"],
      coreItem: ["Phase Boots", "Blink Dagger", "Urn of Shadows"],
      xaXi: ["Shiva's Guard", "Assault Cuirass", "Black King Bar"]
    },
    chienThuat: [
      "Snowball cuốn theo đồng đội — báo trước cho họ đứng gần để cùng lao vào mục tiêu.",
      "Ice Shards dùng để nhốt địch lại một góc hoặc chặn đường rút của cả đội bạn khi bị đuổi.",
      "Walrus Punch kết hợp với đồng đội có khống chế: mục tiêu bị hất lên rồi bị trói ngay khi tiếp đất."
    ],
    khacChe: [
      "Mắt ở cửa rừng phát hiện sớm Snowball đang lăn tới, đủ thời gian để né hoặc dùng chiêu thoát.",
      "Sau khi hắn lao vào là hắn đứng giữa đội bạn — tập trung giết ngay vì hắn không quá dày."
    ]
  },
  {
    id: "undying",
    icon: "💀",
    danhHieu: "Dirge",
    skills: [
      { phim: "Q", ten: "Decay", mota: "Rút bớt sức mạnh của kẻ địch trong vùng và cộng số sức mạnh đó cho Undying trong một khoảng thời gian, có thể cộng dồn." },
      { phim: "W", ten: "Soul Rip", mota: "Hút linh hồn từ các đơn vị xung quanh để hồi máu cho đồng minh hoặc gây sát thương cho kẻ địch; càng nhiều đơn vị quanh mục tiêu càng mạnh." },
      { phim: "E", ten: "Tombstone", mota: "Dựng bia mộ liên tục sinh ra zombie bám theo kẻ địch gần đó, làm chậm chúng. Bia mộ phải bị đánh sập mới hết." },
      { phim: "R", ten: "Flesh Golem", mota: "Ulti: Biến thành golem khổng lồ, làm chậm và tăng sát thương phải chịu của mọi kẻ địch xung quanh, đồng thời tăng máu và tốc chạy cho bản thân." }
    ],
    lenSkill: "Max Decay để mạnh dần và làm yếu đối thủ đường, điểm Tombstone sớm để đôi co, lấy Flesh Golem đúng cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Gauntlets of Ogre Strength"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Bracer"],
      coreItem: ["Arcane Boots", "Mekansm", "Vanguard"],
      xaXi: ["Shiva's Guard", "Heart of Tarrasque", "Aghanim's Scepter"]
    },
    chienThuat: [
      "Spam Decay lên tướng địch từ cấp đầu — mỗi lần dùng bạn khỏe lên còn chúng yếu đi, thắng đường rất dễ.",
      "Tombstone đặt giữa giao tranh ép địch phải dừng lại đập bia mộ thay vì đánh đồng đội bạn.",
      "Flesh Golem bật rồi lao thẳng vào giữa đội hình địch — hào quang khiến cả đội bạn giết nhanh hơn hẳn."
    ],
    khacChe: [
      "Sát thương diện rộng phá Tombstone rất nhanh, làm mất công cụ mạnh nhất của hắn.",
      "Giữ khoảng cách với Flesh Golem — hào quang chỉ có tác dụng trong bán kính quanh hắn."
    ]
  },
  {
    id: "ursawarrior",
    icon: "🐻",
    danhHieu: "Ulfsaar",
    skills: [
      { phim: "Q", ten: "Earthshock", mota: "Nhảy lên và giáng xuống đất, gây sát thương và làm chậm mạnh mọi kẻ địch xung quanh. Cũng dùng để nhảy qua địa hình ngắn." },
      { phim: "W", ten: "Overpower", mota: "Tăng vọt tốc độ đánh cho một số đòn đánh tiếp theo. Là chìa khóa để hạ Roshan và giết mục tiêu tức thì." },
      { phim: "E", ten: "Fury Swipes", mota: "Mỗi đòn đánh liên tiếp lên cùng mục tiêu cộng thêm sát thương, chồng dần lên rất nhanh." },
      { phim: "R", ten: "Enrage", mota: "Ulti: Giảm mạnh sát thương phải chịu trong thời gian ngắn, giúp Ursa sống sót qua đòn tập trung." }
    ],
    lenSkill: "Max Fury Swipes để sát thương chồng nhanh, điểm Overpower và Earthshock xen kẽ, lấy Enrage ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Quelling Blade", "Stout Shield"],
      giaiDoanDau: ["Boots of Speed", "Ring of Health", "Magic Wand"],
      coreItem: ["Phase Boots", "Vladmir's Offering", "Blink Dagger"],
      xaXi: ["Black King Bar", "Skadi", "Satanic"]
    },
    chienThuat: [
      "Ursa hạ Roshan sớm hơn hầu hết tướng khác — dùng Overpower rồi đánh, lấy Aegis of the Immortal khi địch chưa kịp phản ứng.",
      "Trong giao tranh chỉ nhắm đúng một mục tiêu: Fury Swipes chồng lên càng lâu càng chết nhanh.",
      "Blink Dagger vào, Earthshock làm chậm, Overpower xả đòn — mục tiêu gần như không kịp chạy."
    ],
    khacChe: [
      "Khống chế và đẩy lùi ngắt chuỗi đánh khiến Fury Swipes mất chồng.",
      "Ursa rất sợ đánh nhau ở tầm xa: bay tới không được thì hắn hoàn toàn vô hại."
    ]
  },
  {
    id: "vengefulspirit",
    icon: "🦇",
    danhHieu: "Shendelzare Silkwood",
    skills: [
      { phim: "Q", ten: "Magic Missile", mota: "Phóng tên lửa phép vào một mục tiêu, gây sát thương và làm choáng trong vài giây." },
      { phim: "W", ten: "Terrify", mota: "Khiến kẻ địch trong vùng khiếp sợ và bỏ chạy, không thể tấn công trong thời gian ngắn." },
      { phim: "E", ten: "Vengeance Aura", mota: "Hào quang tăng sát thương cho toàn bộ đồng minh xung quanh." },
      { phim: "R", ten: "Nether Swap", mota: "Ulti: Hoán đổi vị trí tức thì với một tướng bất kỳ. Kéo địch vào giữa đội bạn hoặc cứu đồng đội đang sắp chết." }
    ],
    lenSkill: "Max Magic Missile để khống chế, giữ Vengeance Aura ở mức vừa đủ cho đồng đội, lấy Nether Swap ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Observer Wards"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Urn of Shadows"],
      coreItem: ["Arcane Boots", "Force Staff", "Vladmir's Offering"],
      xaXi: ["Aghanim's Scepter", "Scythe of Vyse", "Shiva's Guard"]
    },
    chienThuat: [
      "Nether Swap kéo carry địch vào giữa đội bạn là cách khởi chiến hiệu quả nhất — nhưng bạn sẽ đứng đúng chỗ nguy hiểm.",
      "Cũng dùng Nether Swap để cứu đồng đội bị bắt lẻ: bạn chết thay còn họ sống.",
      "Vengeance Aura khiến cả đội đánh mạnh hơn — luôn đứng gần carry trong giao tranh và khi hạ Roshan."
    ],
    khacChe: [
      "Linken's Sphere chặn hoàn toàn Nether Swap và Magic Missile.",
      "Cô ta cực mỏng — bất kỳ combo nào cũng giết được trước khi cô ta kịp swap."
    ],
    chuaChac: true
  },
  {
    id: "venomancer",
    icon: "🐍",
    danhHieu: "Lesale Deathbringer",
    skills: [
      { phim: "Q", ten: "Venomous Gale", mota: "Phóng luồng độc theo đường thẳng, gây sát thương theo thời gian và làm chậm nặng mọi kẻ địch trúng phải." },
      { phim: "W", ten: "Poison Sting", mota: "Đòn đánh thường nhiễm độc, gây sát thương theo thời gian và làm chậm mục tiêu." },
      { phim: "E", ten: "Plague Ward", mota: "Triệu hồi một tháp độc nhỏ tấn công kẻ địch xung quanh, đòn đánh cũng mang độc. Dùng để chặn đường, đẩy trụ và soi bản đồ." },
      { phim: "R", ten: "Poison Nova", mota: "Ulti: Tung sóng độc lan ra vòng tròn rộng, gây sát thương theo thời gian rất lớn lên toàn bộ kẻ địch trúng phải." }
    ],
    lenSkill: "Max Plague Ward để kiểm soát đường và farm, điểm Venomous Gale sớm để quấy rối, lấy Poison Nova ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Circlet of Nobility"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Bracer"],
      coreItem: ["Arcane Boots", "Blink Dagger", "Force Staff"],
      xaXi: ["Aghanim's Scepter", "Shiva's Guard", "Ethereal Blade"]
    },
    chienThuat: [
      "Rải Plague Ward khắp rừng và cửa sông làm mắt miễn phí, đồng thời chặn địch đẩy đường.",
      "Blink vào giữa rồi Poison Nova — độc lan hết cả đội địch, đồng đội chỉ cần dọn nốt.",
      "Venomous Gale làm chậm cực nặng, dùng để mở gank hoặc chặn địch rút lui."
    ],
    khacChe: [
      "Sát thương diện rộng dọn sạch Plague Ward, phá thế kiểm soát bản đồ của hắn.",
      "Các món hồi máu và giải độc như Khadgar's Pipe of Insight giảm mạnh hiệu quả sát thương theo thời gian."
    ]
  }
,
  {
    id: "viper",
    icon: "🐍",
    danhHieu: "Netherdrake",
    skills: [
      { phim: "Q", ten: "Poison Attack", mota: "Tẩm độc vào đòn đánh tầm xa, gây sát thương theo thời gian và làm chậm tốc chạy lẫn tốc đánh của mục tiêu. Đây là hiệu ứng dạng orb nên không cộng dồn với các orb khác." },
      { phim: "W", ten: "Nethertoxin", mota: "Nội tại: đòn đánh nhiễm độc gây thêm sát thương, mục tiêu càng mất nhiều máu thì càng đau, đồng thời vô hiệu hóa nội tại (passive) của mục tiêu trong lúc bị dính độc." },
      { phim: "E", ten: "Corrosive Skin", mota: "Nội tại: tăng kháng phép cho Viper, đồng thời kẻ nào đánh hoặc dùng phép lên Viper sẽ bị dính độc, mất máu theo thời gian và bị chậm." },
      { phim: "R", ten: "Viper Strike", mota: "Ulti: phun nọc cực mạnh lên một mục tiêu, làm chậm nặng cả tốc chạy lẫn tốc đánh và gây sát thương theo thời gian. Gần như án tử cho hero yếu máu vì không thể chạy thoát." }
    ],
    lenSkill: "Max Poison Attack trước để quấy rối lane, điểm lẻ vào Corrosive Skin cho lì đòn, lấy Viper Strike ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Circlet of Nobility"],
      giaiDoanDau: ["Power Treads", "Magic Wand", "Wraith Band"],
      coreItem: ["Black King Bar", "Monkey King Bar"],
      xaXi: ["Butterfly", "Skadi", "Satanic"]
    },
    chienThuat: [
      "Giai đoạn lane cực mạnh: dùng Poison Attack liên tục để đẩy đối thủ ra khỏi tầm ăn lính mà không tốn nhiều mana.",
      "Corrosive Skin khiến Viper rất khó bị hạ bằng phép, nên tự tin đứng tuyến trước trong giao tranh nhỏ.",
      "Viper Strike nên để dành cho hero chạy nhanh hoặc hero cần giết gọn, đừng phí lên mục tiêu sắp chết.",
      "Vì thiếu khả năng di chuyển, luôn giữ Scroll of Town Portal và chơi gần đồng đội."
    ],
    khacChe: [
      "Rất chậm và không có kỹ năng thoát thân, dễ chết trước hero có choáng hoặc trói dài.",
      "Sát thương chủ yếu là vật lý cộng độc, nên giáp cao và hồi máu mạnh làm Viper mất tác dụng.",
      "Kháng phép của Corrosive Skin không cứu được trước sát thương vật lý bùng nổ."
    ]
  },
  {
    id: "visage",
    icon: "🦅",
    danhHieu: "Necro'lic",
    skills: [
      { phim: "Q", ten: "Grave Chill", mota: "Hút tốc chạy và tốc đánh của một mục tiêu rồi cộng vào cho bản thân trong thời gian ngắn, vừa để đuổi giết vừa để chạy thoát." },
      { phim: "W", ten: "Soul Assumption", mota: "Tích tụ điện tích mỗi khi có hero gần đó nhận sát thương; khi tung ra sẽ bắn một luồng năng lượng gây sát thương càng lớn nếu tích được càng nhiều điện tích." },
      { phim: "E", ten: "Gravekeeper's Cloak", mota: "Nội tại: tạo nhiều lớp giáp giảm sát thương; mỗi lần trúng đòn đủ mạnh sẽ mất một lớp, các lớp tự hồi lại sau một lúc không bị đánh." },
      { phim: "R", ten: "Summon Familiars", mota: "Ulti: triệu hồi các Familiar bay được, điều khiển riêng và đánh rất đau. Chúng có thể hóa đá (Stone Form) để bất tử và hồi máu, khi đáp xuống gây choáng kẻ địch xung quanh." }
    ],
    lenSkill: "Max Soul Assumption để gank và dọn lính, điểm sớm vào Grave Chill, lấy Summon Familiars ngay mỗi mốc ulti vì đó mới là sức mạnh chính.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Circlet of Nobility"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Null Talisman"],
      coreItem: ["Arcane Boots", "Aghanim's Scepter", "Necronomicon 2"],
      xaXi: ["Shiva's Guard", "Assault Cuirass", "Refresher Orb"]
    },
    chienThuat: [
      "Familiar là nguồn sát thương chính: tách chúng ra để đẩy trụ, kéo Roshan hoặc chặn đường chạy của địch.",
      "Dùng Stone Form đúng lúc để cứu Familiar khỏi chết và tạo thêm một nhịp choáng trong giao tranh.",
      "Gravekeeper's Cloak giúp Visage rất lì trước sát thương lẻ tẻ, nhưng sẽ bay hết lớp nếu ăn combo dồn.",
      "Yêu cầu điều khiển nhiều đơn vị cùng lúc, hãy tập gán nhóm phím trước khi chơi trong trận nghiêm túc."
    ],
    khacChe: [
      "Kỹ năng diện rộng dọn quái triệu hồi (như các đòn AoE mạnh) xóa sạch Familiar rất nhanh.",
      "Bản thân Visage chậm chạp và mỏng khi mất hết lớp Cloak, dễ bị bắt lẻ.",
      "Nếu bị ép giao tranh lúc ulti đang hồi chiêu, Visage gần như vô hại."
    ]
  },
  {
    id: "warlock",
    icon: "👹",
    danhHieu: "Demnok Lannik",
    skills: [
      { phim: "Q", ten: "Fatal Bonds", mota: "Trói liên kết nhiều kẻ địch lại với nhau; mỗi khi một mục tiêu nhận sát thương, phần lớn sát thương đó bị chia lây sang tất cả các mục tiêu còn lại trong liên kết." },
      { phim: "W", ten: "Shadow Word", mota: "Đọc chú lên một đơn vị: nếu là đồng minh thì hồi máu theo thời gian, nếu là kẻ địch thì rút máu theo thời gian." },
      { phim: "E", ten: "Upheaval", mota: "Kênh phép tạo vùng hỗn loạn làm chậm kẻ địch trong đó; kênh càng lâu thì mức làm chậm càng nặng, đủ lâu sẽ khiến địch gần như đứng yên." },
      { phim: "R", ten: "Chaotic Offering", mota: "Ulti: mở cổng triệu hồi Golem, gây choáng diện rộng khi Golem xuất hiện. Golem có aura thiêu đốt và đòn đánh lửa, gây sát thương lớn lên đội hình địch." }
    ],
    lenSkill: "Max Shadow Word hoặc Fatal Bonds tùy lane cần đổi máu hay cần sát thương giao tranh, điểm lẻ Upheaval, luôn lấy Chaotic Offering ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Headdress of Rejuvenation"],
      coreItem: ["Arcane Boots", "Mekansm", "Aghanim's Scepter"],
      xaXi: ["Refresher Orb", "Shiva's Guard", "Scythe of Vyse"]
    },
    chienThuat: [
      "Fatal Bonds phải bung trước khi giao tranh nổ ra, càng trói được nhiều mục tiêu thì sát thương lây lan càng khủng khiếp.",
      "Combo chuẩn: Fatal Bonds lên cả đội địch, thả Chaotic Offering vào giữa, rồi kênh Upheaval để không ai chạy thoát.",
      "Refresher Orb cho phép thả hai Golem liên tiếp, thường là đòn kết liễu một giao tranh tổng.",
      "Warlock rất chậm và không có kỹ năng thoát, luôn đứng sau và giữ khoảng cách an toàn."
    ],
    khacChe: [
      "Ulti có thời gian ngâm rất rõ, địch hoàn toàn có thể chạy khỏi tâm trước khi Golem hiện ra.",
      "Bị bắt lẻ khi chưa kịp trói Fatal Bonds thì Warlock gần như không đóng góp gì cho giao tranh.",
      "Kỹ năng câm lặng hoặc đẩy vị trí sẽ phá vỡ kênh phép Upheaval ngay lập tức."
    ]
  },
  {
    id: "weaver",
    icon: "🕷️",
    danhHieu: "Skitskurr",
    skills: [
      { phim: "Q", ten: "The Swarm", mota: "Thả một đàn bọ bay về phía trước, bám vào kẻ địch chúng gặp; bọ bám sẽ trừ giáp và soi mục tiêu, phải đánh vài lần mới gỡ được." },
      { phim: "W", ten: "Shukuchi", mota: "Tàng hình và tăng mạnh tốc chạy trong chốc lát; đi xuyên qua kẻ địch nào thì gây sát thương lên kẻ đó, nhưng đánh hoặc dùng phép sẽ hủy tàng hình." },
      { phim: "E", ten: "Geminate Attack", mota: "Nội tại: thỉnh thoảng tung thêm một đòn đánh phụ ngay sau đòn đánh thường, tăng đáng kể sát thương thực tế." },
      { phim: "R", ten: "Time Lapse", mota: "Ulti: quay ngược thời gian cho bản thân, trở về đúng vị trí, lượng máu và mana của vài giây trước. Không xóa được debuff dạng vĩnh viễn nhưng cứu mạng cực tốt." }
    ],
    lenSkill: "Max Shukuchi trước để farm và sống sót, kết hợp điểm vào The Swarm để quấy rối, lấy Time Lapse ngay khi đủ cấp và max Geminate Attack sau.",
    doBuild: {
      khoiDau: ["Tangoes", "Slippers of Agility", "Branch"],
      giaiDoanDau: ["Power Treads", "Magic Wand", "Wraith Band"],
      coreItem: ["Desolator", "Linken's Sphere"],
      xaXi: ["Butterfly", "Daedalus", "Monkey King Bar"]
    },
    chienThuat: [
      "Shukuchi biến Weaver thành hero khó bắt nhất bản đồ: dùng để farm rừng an toàn và luân chuyển lane liên tục.",
      "The Swarm trừ giáp rất nặng nên hãy thả trước khi lao vào đánh mục tiêu chính.",
      "Time Lapse dùng như nút cứu mạng: chờ ăn hết combo của địch rồi mới bấm để hoàn máu và thoát khỏi ổ phục kích.",
      "Weaver mỏng máu, đừng vào giao tranh sớm mà hãy tạt sườn dứt điểm hero yếu máu phía sau."
    ],
    khacChe: [
      "Dust of Appearance, Sentry Ward và Gem of True Sight khiến Shukuchi mất hết giá trị.",
      "Máu rất thấp, chỉ cần một combo choáng cứng là chết trước khi kịp bấm Time Lapse.",
      "Kỹ năng câm lặng chặn cả Shukuchi lẫn Time Lapse, đó là cách khắc chế triệt để nhất."
    ]
  },
  {
    id: "windrunner",
    icon: "🏹",
    danhHieu: "Alleria",
    skills: [
      { phim: "Q", ten: "Shackleshot", mota: "Bắn một mũi tên trói mục tiêu vào cây hoặc vào một đơn vị đứng ngay phía sau, làm choáng cả hai; nếu không có gì phía sau thì chỉ trói rất ngắn." },
      { phim: "W", ten: "Powershot", mota: "Kênh phép giương cung: kênh càng đủ lâu thì mũi tên bay càng mạnh, xuyên thẳng một đường dài nhưng giảm dần sát thương qua mỗi đơn vị trúng phải." },
      { phim: "E", ten: "Windrun", mota: "Tự bọc mình trong gió: né toàn bộ đòn đánh thường trong thời gian ngắn, tăng tốc chạy cho bản thân và làm chậm kẻ địch xung quanh." },
      { phim: "R", ten: "Focus Fire", mota: "Ulti: khóa vào một mục tiêu và đánh với tốc đánh tối đa, đổi lại mỗi đòn bị giảm sát thương. Rất mạnh để hạ trụ hoặc thiêu rụi hero máu dày." }
    ],
    lenSkill: "Max Powershot để đẩy lane và gây sát thương từ xa, luôn giữ một điểm Shackleshot sớm để gank, lấy Focus Fire mỗi mốc ulti.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Circlet of Nobility"],
      giaiDoanDau: ["Bottle", "Power Treads", "Magic Wand"],
      coreItem: ["Maelstrom", "Orchid Malevolence", "Force Staff"],
      xaXi: ["Mjollnir", "Butterfly", "Monkey King Bar"]
    },
    chienThuat: [
      "Shackleshot là kỹ năng phụ thuộc góc bắn: hãy đứng sao cho mục tiêu và cây hoặc lính nằm thẳng hàng phía sau.",
      "Powershot vừa dọn cả tốp lính vừa chọc máu hero, dùng để kiểm soát lane từ khoảng cách rất xa.",
      "Windrun giúp thoát khỏi mọi hero đánh thường, nhưng vô dụng trước sát thương phép nên đừng dựa vào nó khi bị dồn skill.",
      "Focus Fire kết hợp Orchid Malevolence là combo giết gọn hero mỏng chỉ trong vài giây."
    ],
    khacChe: [
      "Máu thấp và tầm đánh không quá xa, dễ bị hero lao vào áp sát dứt điểm.",
      "Windrun bị vô hiệu trước sát thương phép và trước Monkey King Bar cùng các nguồn xuyên né.",
      "Nếu Shackleshot trượt góc thì Windrunner gần như không còn khả năng khống chế trong giao tranh đó."
    ]
  },
  {
    id: "winterwyvern",
    icon: "❄️",
    danhHieu: "",
    chuaChac: true,
    skills: [
      { phim: "Q", ten: "Arctic Burn", mota: "Bay lên không trung, tăng tầm nhìn và tầm đánh; các đòn đánh trong lúc này gây sát thương theo lượng máu tối đa của mục tiêu và làm chậm nặng." },
      { phim: "W", ten: "Splinter Blast", mota: "Bắn một khối băng vào một đơn vị rồi vỡ ra văng sang các kẻ địch xung quanh, gây sát thương và làm chậm chúng; mục tiêu bị nhắm ban đầu không nhận sát thương." },
      { phim: "E", ten: "Cold Embrace", mota: "Bọc một đồng minh trong băng: đồng minh đó miễn nhiễm sát thương vật lý và được hồi máu liên tục, nhưng không thể di chuyển hay hành động." },
      { phim: "R", ten: "Winter's Curse", mota: "Ulti: đóng băng một kẻ địch khiến nó bất khả xâm phạm, đồng thời ép các kẻ địch xung quanh buộc phải lao vào đánh chính đồng đội của mình với tốc đánh tăng vọt." }
    ],
    lenSkill: "Max Splinter Blast để dọn lính và quấy rối, giữ Cold Embrace ở mức đủ dùng để cứu đồng đội, lấy Winter's Curse ngay khi đủ cấp.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Null Talisman"],
      coreItem: ["Arcane Boots", "Force Staff", "Aghanim's Scepter"],
      xaXi: ["Scythe of Vyse", "Refresher Orb", "Shiva's Guard"]
    },
    chienThuat: [
      "LƯU Ý ĐỘ TIN CẬY: Winter Wyvern là hero ra mắt ở mốc 6.84 trên Dota 2, bản đồ DotA 1 Allstars chính thức (dừng ở 6.83) KHÔNG có tướng này. Mô tả dưới đây dựa theo phiên bản Dota 2 nên cần kiểm chứng lại trước khi đăng.",
      "Cold Embrace là công cụ cứu mạng cực mạnh trước các hero sát thương vật lý, nhưng đồng minh bị khóa hành động nên phải canh đúng thời điểm.",
      "Winter's Curse nên nhắm vào hero đứng giữa đội hình địch để lôi kéo được nhiều kẻ địch tự đánh nhau nhất.",
      "Splinter Blast không gây sát thương lên mục tiêu bị nhắm, hãy nhắm vào lính hoặc hero rìa để dồn sát thương vào đám còn lại."
    ],
    khacChe: [
      "Rất mỏng và chậm nếu bị áp sát khi Arctic Burn đang hồi chiêu.",
      "Winter's Curse có thể phản tác dụng nếu địch chủ động dùng để chặn combo, cần chọn mục tiêu cẩn thận.",
      "Phụ thuộc nhiều vào mana, dễ bị bào cạn bởi các hero rút mana."
    ]
  },
  {
    id: "wisp",
    icon: "💫",
    danhHieu: "Guardian Wisp",
    skills: [
      { phim: "Q", ten: "Tether", mota: "Nối một sợi dây năng lượng tới một đồng minh: đồng minh được kéo tốc chạy theo Wisp và nhận phần hồi máu, hồi mana mà Wisp đang có; kẻ địch chạm vào sợi dây bị làm chậm." },
      { phim: "W", ten: "Spirits", mota: "Triệu hồi các linh hồn xoay quanh Wisp, gây sát thương cho kẻ địch chúng va phải; có thể ra lệnh cho chúng tỏa rộng ra hoặc thu hẹp lại để canh trúng mục tiêu." },
      { phim: "E", ten: "Overcharge", mota: "Bật trạng thái tăng mạnh tốc đánh và giảm sát thương nhận vào cho cả Wisp lẫn đồng minh đang nối Tether, đổi lại liên tục hao máu và mana khi bật." },
      { phim: "R", ten: "Relocate", mota: "Ulti: sau một nhịp chờ, dịch chuyển Wisp cùng đồng minh đang nối Tether tới bất kỳ điểm nào trên bản đồ, rồi tự đưa cả hai trở về chỗ cũ khi hết hiệu lực." }
    ],
    lenSkill: "Lấy Tether và Spirits sớm để đi lane, tăng dần Overcharge khi bắt đầu đi cùng carry, luôn lấy Relocate mỗi mốc ulti.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Animal Courier"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Urn of Shadows"],
      coreItem: ["Bottle", "Mekansm", "Boots of Travel"],
      xaXi: ["Heart of Tarrasque", "Shiva's Guard", "Khadgar's Pipe of Insight"]
    },
    chienThuat: [
      "Wisp gần như luôn đi kèm một carry cố định: mọi hồi phục và mọi món đồ Wisp mua đều là để nuôi người đó.",
      "Combo cổ điển: Relocate xuống lane địch, bật Overcharge cùng Tether cho carry giết gọn rồi tự động rút về an toàn.",
      "Spirits vừa là nguồn sát thương lane vừa là cách dọn lính, tập điều khiển thu ra thu vào để chạm trúng hero.",
      "Có thể dùng Relocate như công cụ cứu đồng đội đang bị vây, hoặc để cắm sâu vào chỗ trống bản đồ."
    ],
    khacChe: [
      "Máu rất thấp, chỉ cần một combo là chết dù có Overcharge đang bật.",
      "Relocate có nhịp báo hiệu rõ ràng, đối thủ tinh ý sẽ kịp dạt ra hoặc chuẩn bị phản đòn tại điểm đến.",
      "Nếu carry được nuôi bị bắt chết lẻ hoặc chơi tệ, Wisp gần như không còn giá trị."
    ]
  },
  {
    id: "witchdoctor",
    icon: "🧿",
    danhHieu: "Zharvakko",
    skills: [
      { phim: "Q", ten: "Paralyzing Cask", mota: "Ném một hũ độc nảy qua lại giữa các kẻ địch, mỗi lần nảy trúng đều gây sát thương và làm choáng; choáng lên lính rất lâu còn lên hero thì ngắn nhưng đủ để cắt nhịp." },
      { phim: "W", ten: "Voodoo Restoration", mota: "Bật tắt vùng hồi máu quanh Witch Doctor, liên tục hồi máu cho đồng minh trong vùng nhưng ngốn mana đều đặn khi bật." },
      { phim: "E", ten: "Maledict", mota: "Nguyền rủa các kẻ địch trong một vùng; sau từng nhịp, mỗi mục tiêu nhận thêm sát thương dựa trên lượng máu đã mất kể từ lúc bị nguyền, càng bị đánh nhiều thì càng đau." },
      { phim: "R", ten: "Death Ward", mota: "Ulti: kênh phép dựng một mắt thần tấn công liên tục các hero địch xung quanh, gây sát thương rất lớn nếu được kênh trọn vẹn." }
    ],
    lenSkill: "Max Maledict để tạo sát thương gank khủng, điểm sớm Paralyzing Cask để cắt combo, giữ một điểm Voodoo Restoration khi cần trụ lane, lấy Death Ward mỗi mốc ulti.",
    doBuild: {
      khoiDau: ["Tangoes", "Clarity", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Urn of Shadows"],
      coreItem: ["Arcane Boots", "Force Staff", "Aghanim's Scepter"],
      xaXi: ["Scythe of Vyse", "Refresher Orb", "Shiva's Guard"]
    },
    chienThuat: [
      "Maledict phải bung ngay đầu combo: đồng đội càng dồn sát thương nhanh thì mỗi nhịp nguyền càng nổ mạnh.",
      "Paralyzing Cask nảy rất khó lường khi có nhiều lính, hãy dùng ở chỗ đông để tăng cơ hội trói được hero.",
      "Death Ward cần đứng yên kênh phép, nên chỉ bấm khi đội đã khống chế xong hoặc khi Witch Doctor đang được che chắn.",
      "Black King Bar hoặc Aghanim's Scepter giúp kênh trọn Death Ward, đó là lúc Witch Doctor có sát thương cao nhất trận."
    ],
    khacChe: [
      "Mọi khống chế nhẹ nhất cũng cắt được Death Ward, chỉ cần một cú choáng là mất trắng ulti.",
      "Cực mỏng máu và không có kỹ năng thoát thân, dễ bị hero lao vào bắt lẻ.",
      "Hồi máu mạnh hoặc kháng phép cao làm giảm đáng kể sức nổ của Maledict."
    ]
  }
,
];
