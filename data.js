// Dữ liệu tướng Dota 1 (mốc DotA Allstars 6.83/6.84).
// Số liệu mô tả theo tính chất kỹ năng, không ghi số chính xác vì thay đổi theo từng bản/patch.

const HEROES = [
  // ================= SỨC MẠNH =================
  {
    id: "axe",
    icon: "🪓",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/axe.png",
    ten: "Axe",
    danhHieu: "Mogul Khan",
    he: "str",
    vaiTro: ["Đấu sĩ", "Khởi chiến", "Càn creep"],
    skills: [
      { phim: "Q", ten: "Berserker's Call", mota: "Ép toàn bộ quân địch trong phạm vi phải tấn công Axe, đồng thời tăng giáp cho bản thân trong lúc gồng." },
      { phim: "W", ten: "Battle Hunger", mota: "Nguyền một mục tiêu, gây sát thương theo thời gian và làm chậm tốc độ chạy; hiệu ứng chỉ hết khi mục tiêu giết được một đơn vị khác." },
      { phim: "E", ten: "Counter Helix", mota: "Bị động: mỗi khi bị đánh trúng có tỉ lệ phản đòn, gây sát thương lan toả quanh Axe." },
      { phim: "R", ten: "Culling Blade", mota: "Ulti: xử tử ngay lập tức mục tiêu có máu dưới ngưỡng, nếu giết được thì Axe và đồng đội xung quanh được tăng tốc chạy." }
    ],
    lenSkill: "Max Counter Helix trước, xen Berserker's Call ở mốc có thể khởi chiến, Culling Blade lên mỗi khi có thể.",
    doBuild: {
      khoiDau: ["Quelling Blade", "Tangoes", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand", "Vanguard"],
      coreItem: ["Blink Dagger", "Black King Bar"],
      xaXi: ["Blade Mail", "Assault Cuirass", "Heart of Tarrasque"]
    },
    chienThuat: [
      "Blink vào giữa đội hình địch rồi Call — kéo càng nhiều tướng địch đánh Axe càng có lợi vì Counter Helix phản sát thương diện rộng.",
      "Dùng Culling Blade để chốt hạ tướng máu yếu, không cần đánh thường thêm.",
      "Rất mạnh khi càn creep rừng nhờ Counter Helix, farm nhanh dù không phải carry chính."
    ],
    khacChe: ["Sợ silence/disable trước khi kịp Call.", "Bị khắc bởi tướng có thể trốn hoặc tự chữa máu nhanh hơn Battle Hunger."]
  },
  {
    id: "sven",
    icon: "⚔️",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sven.png",
    ten: "Sven",
    danhHieu: "Rogue Knight",
    he: "str",
    vaiTro: ["Carry", "Đấu sĩ"],
    skills: [
      { phim: "Q", ten: "Storm Bolt", mota: "Ném búa gây sát thương và choáng mục tiêu trúng đòn, tầm xa vừa phải." },
      { phim: "W", ten: "Great Cleave", mota: "Bị động: mỗi đòn đánh thường lan sang các mục tiêu lân cận với phần trăm sát thương giảm dần." },
      { phim: "E", ten: "Warcry", mota: "Tăng giáp và tốc độ chạy cho Sven và đồng đội xung quanh trong một khoảng thời gian." },
      { phim: "R", ten: "God's Strength", mota: "Ulti: tăng mạnh sát thương vật lý của Sven theo phần trăm, biến thành cỗ máy sát thương thuần." }
    ],
    lenSkill: "Max Great Cleave sớm để farm nhanh, Storm Bolt đủ dùng combo, God's Strength lên mỗi khi có thể.",
    doBuild: {
      khoiDau: ["Quelling Blade", "Tangoes", "Branch"],
      giaiDoanDau: ["Power Treads", "Magic Wand"],
      coreItem: ["Black King Bar", "Armlet of Mordiggian"],
      xaXi: ["Assault Cuirass", "Satanic", "Daedalus"]
    },
    chienThuat: [
      "Great Cleave khiến Sven farm rừng và lane cực nhanh, ưu tiên item tăng sát thương thay vì tốc độ đánh.",
      "Storm Bolt tầm xa nên dùng để mở giao tranh hoặc câu đầu, không cần đợi địch vào tầm đánh gần.",
      "God's Strength + BKB là combo chuẩn để lao vào giữa đội hình địch mà không sợ bị khống chế."
    ],
    khacChe: ["Yếu giai đoạn đầu, dễ bị gank khi chưa lên đồ.", "Bị disable dài hoặc kite tầm xa sẽ rất khó chịu."]
  },
  {
    id: "tiny",
    icon: "🗿",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tiny.png",
    ten: "Tiny",
    danhHieu: "Stone Giant",
    he: "str",
    vaiTro: ["Carry", "Đấu sĩ", "Nuker"],
    skills: [
      { phim: "Q", ten: "Avalanche", mota: "Gọi đá rơi vào một khu vực, gây sát thương và làm choáng nhẹ các đơn vị trúng đòn." },
      { phim: "W", ten: "Toss", mota: "Ném một đơn vị (quân mình hoặc địch) ra xa, gây sát thương cho mục tiêu bị ném trúng lúc rơi xuống." },
      { phim: "E", ten: "Craggy Exterior", mota: "Bị động: khi bị đánh có tỉ lệ làm choáng đối phương và giảm sát thương phải nhận." },
      { phim: "R", ten: "Grow", mota: "Ulti: Tiny lớn dần theo cấp độ, tăng sát thương và tầm đánh, đổi lại giảm tốc độ đánh." }
    ],
    lenSkill: "Max Avalanche trước để farm và combo, Toss lên sớm để kết hợp Avalanche + Toss gây burst lớn.",
    doBuild: {
      khoiDau: ["Quelling Blade", "Tangoes", "Branch"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand"],
      coreItem: ["Blink Dagger", "Aghanim's Scepter"],
      xaXi: ["Assault Cuirass", "Daedalus", "Black King Bar"]
    },
    chienThuat: [
      "Combo Avalanche rồi Toss ngay lập tức lên mục tiêu để nhân sát thương của toàn bộ trận đá rơi lên một tướng duy nhất.",
      "Blink Dagger giúp Tiny lao vào combo bất ngờ, rất mạnh giai đoạn giữa game.",
      "Aghanim's Scepter cho Toss thêm hiệu ứng, là item đặc trưng của Tiny."
    ],
    khacChe: ["Late game sát thương tương đối chững nếu không farm được đồ tăng crit.", "Dễ bị counter bởi tướng có thể phá combo Avalanche+Toss (silence, tàng hình)."]
  },
  {
    id: "centaur",
    icon: "🐎",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/centaur.png",
    ten: "Centaur Warrunner",
    danhHieu: "—",
    he: "str",
    vaiTro: ["Đấu sĩ", "Khởi chiến", "Tank"],
    skills: [
      { phim: "Q", ten: "Hoof Stomp", mota: "Giậm chân gây sát thương và choáng diện rộng quanh Centaur." },
      { phim: "W", ten: "Double Edge", mota: "Lao vào gây sát thương cho cả mục tiêu lẫn bản thân Centaur, sát thương càng lớn nếu Centaur càng nhiều máu." },
      { phim: "E", ten: "Return", mota: "Bị động: phản lại một phần sát thương vật lý phải nhận cho kẻ tấn công." },
      { phim: "R", ten: "Stampede", mota: "Ulti: triệu hồi đàn ngựa chạy theo một hướng, tăng mạnh tốc độ chạy cho Centaur và đồng đội trúng hiệu ứng." }
    ],
    lenSkill: "Max Return để farm và trả sát thương khi bị vây, Hoof Stomp lên đủ để khởi chiến, Stampede mỗi khi có thể.",
    doBuild: {
      khoiDau: ["Ring of Protection", "Tangoes", "Branch"],
      giaiDoanDau: ["Phase Boots", "Vanguard"],
      coreItem: ["Blink Dagger", "Heart of Tarrasque"],
      xaXi: ["Assault Cuirass", "Shiva's Guard"]
    },
    chienThuat: [
      "Blink vào giữa đội hình rồi Hoof Stomp mở giao tranh, tận dụng máu dày để gồng chịu sát thương.",
      "Return khiến việc cận chiến với Centaur rất bất lợi cho tướng đánh thường của địch.",
      "Stampede rất mạnh để đuổi theo hoặc rút lui cả đội, luôn báo đồng đội trước khi dùng."
    ],
    khacChe: ["Thiếu sát thương phép, dễ bị counter bởi disable kéo dài.", "Không có cách thoát thân riêng ngoài Stampede/Blink nên dễ bị bắt lẻ."]
  },
  {
    id: "tidehunter",
    icon: "🐙",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/tidehunter.png",
    ten: "Tidehunter",
    danhHieu: "Leviathan",
    he: "str",
    vaiTro: ["Tank", "Khởi chiến", "Hỗ trợ"],
    skills: [
      { phim: "Q", ten: "Gush", mota: "Gây sát thương và làm chậm mạnh tốc độ chạy của mục tiêu, đồng thời giảm giáp." },
      { phim: "W", ten: "Kraken Shell", mota: "Bị động: giảm sát thương nhận vào và tự gỡ một số hiệu ứng khống chế sau một khoảng thời gian tích luỹ sát thương." },
      { phim: "E", ten: "Anchor Smash", mota: "Vung xúc tu gây sát thương lan toả quanh Tidehunter, đồng thời giảm sát thương đánh thường của quân địch trúng đòn." },
      { phim: "R", ten: "Ravage", mota: "Ulti: các xúc tu khổng lồ trồi lên khắp bản đồ quanh Tidehunter, gây sát thương và choáng diện rộng cực lớn." }
    ],
    lenSkill: "Max Kraken Shell và Gush song song để trụ lane, Ravage lên mỗi khi có thể vì tầm ảnh hưởng cực lớn.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Ring of Protection"],
      giaiDoanDau: ["Boots of Speed", "Soul Ring"],
      coreItem: ["Blink Dagger", "Vanguard"],
      xaXi: ["Shiva's Guard", "Heart of Tarrasque", "Refresher Orb"]
    },
    chienThuat: [
      "Ravage là một trong những ulti khởi chiến mạnh nhất — trúng full đội hình có thể quyết định cả trận đấu.",
      "Blink Dagger gần như bắt buộc để đảm bảo Ravage trúng đúng vị trí, vì tầm ném giới hạn.",
      "Kraken Shell giúp Tidehunter trụ line và trụ giao tranh rất tốt dù không cần nhiều đồ."
    ],
    khacChe: ["Ravage bắn hụt gần như mất hết giá trị trong giao tranh đó.", "Bị khắc bởi các skill có thể phân tán đội hình địch trước khi Ravage nổ."]
  },
  {
    id: "pudge",
    icon: "🪝",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/pudge.png",
    ten: "Pudge",
    danhHieu: "Butcher",
    he: "str",
    vaiTro: ["Khởi chiến", "Bắt lẻ", "Tank"],
    skills: [
      { phim: "Q", ten: "Meat Hook", mota: "Móc xích tầm xa, kéo mục tiêu trúng đòn (kể cả quân mình) về phía Pudge và gây sát thương." },
      { phim: "W", ten: "Rot", mota: "Kích hoạt vùng độc quanh Pudge, gây sát thương theo thời gian cho cả địch lẫn chính Pudge, làm chậm tốc độ chạy." },
      { phim: "E", ten: "Flesh Heap", mota: "Bị động: cộng dồn sức mạnh vĩnh viễn mỗi khi có tướng gần đó tử vong, đồng thời kháng phép khi cộng dồn cao." },
      { phim: "R", ten: "Dismember", mota: "Ulti: giữ chặt mục tiêu không cho hành động, liên tục rút máu gây sát thương và hồi máu cho Pudge." }
    ],
    lenSkill: "Max Meat Hook trước tiên để bắt lẻ, Rot xen kẽ để farm và gây áp lực đường, Dismember lên mỗi khi có thể.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Clarity"],
      giaiDoanDau: ["Arcane Boots", "Urn of Shadows"],
      coreItem: ["Blink Dagger", "Aghanim's Scepter"],
      xaXi: ["Shiva's Guard", "Heart of Tarrasque"]
    },
    chienThuat: [
      "Móc trúng một tướng địch giữa lòng team địch gần như luôn đổi được mạng, kể cả khi Pudge một mình.",
      "Rot gây sát thương cho cả bản thân nên chú ý máu khi bật lâu, đặc biệt giai đoạn đầu game.",
      "Aghanim's Scepter tăng tầm Meat Hook đáng kể, biến Pudge thành mối đe doạ toàn bản đồ."
    ],
    khacChe: ["Móc trượt gần như vô dụng trong pha đó, cần luyện phản xạ nhắm hướng.", "Dễ bị burst chết nhanh nếu chưa kịp cộng dồn Flesh Heap."]
  },

  // ================= NHANH NHẸN =================
  {
    id: "antimage",
    icon: "🔷",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/antimage.png",
    ten: "Anti-Mage",
    danhHieu: "Magina",
    he: "agi",
    vaiTro: ["Carry", "Khắc phép"],
    skills: [
      { phim: "Q", ten: "Mana Break", mota: "Bị động: mỗi đòn đánh thường đốt một phần mana của mục tiêu, mất càng nhiều mana thì sát thương nhận thêm càng cao." },
      { phim: "W", ten: "Blink", mota: "Dịch chuyển tức thời trong tầm ngắn, dùng để đuổi đánh hoặc rút lui." },
      { phim: "E", ten: "Counterspell", mota: "Bị động/chủ động: có tỉ lệ phản phép đơn mục tiêu nhắm vào Anti-Mage; có thể bật chủ động để chắc chắn phản." },
      { phim: "R", ten: "Mana Void", mota: "Ulti: sau một nhịp trễ, gây sát thương lên khu vực dựa theo lượng mana đã mất của mục tiêu." }
    ],
    lenSkill: "Max Mana Break để farm nhanh và khắc chế tướng phép, Blink lên sớm để né/đuổi, Mana Void mỗi khi có thể.",
    doBuild: {
      khoiDau: ["Quelling Blade", "Tangoes", "Branch"],
      giaiDoanDau: ["Power Treads", "Battle Fury"],
      coreItem: ["Manta Style", "Black King Bar"],
      xaXi: ["Butterfly", "Abyssal Blade", "Satanic"]
    },
    chienThuat: [
      "Farm rừng và các lane vắng thật nhanh nhờ Battle Fury, tránh giao tranh sớm khi chưa đủ đồ.",
      "Blink giúp Anti-Mage lách vào combat để đánh đúng carry/support địch rồi rút ngay.",
      "Rất mạnh trước đội hình nhiều tướng phép nhờ Mana Break và Counterspell, nhưng vẫn sợ disable vật lý và stun cứng."
    ],
    khacChe: ["Yếu đầu game, dễ bị gank nếu farm quá tham.", "Bị khắc bởi các tướng silence/root dài hoặc gây sát thương phép trực tiếp không qua mana."]
  },
  {
    id: "phantomassassin",
    icon: "🔪",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/phantom_assassin.png",
    ten: "Phantom Assassin",
    danhHieu: "Mortred",
    he: "agi",
    vaiTro: ["Carry", "Sát thủ"],
    skills: [
      { phim: "Q", ten: "Stifling Dagger", mota: "Ném dao gây sát thương và làm chậm tốc độ chạy mục tiêu trúng đòn." },
      { phim: "W", ten: "Phantom Strike", mota: "Dịch chuyển tới cạnh mục tiêu và tăng mạnh tốc độ đánh trong vài đòn tiếp theo." },
      { phim: "E", ten: "Blur", mota: "Bị động: tăng né đòn, và mờ dần gần như tàng hình khi không nhận sát thương trong một khoảng thời gian." },
      { phim: "R", ten: "Coup de Grace", mota: "Bị động: mỗi đòn đánh có tỉ lệ chí mạng gây sát thương cực lớn, tỉ lệ và mức chí mạng cao hơn hẳn tướng thường." }
    ],
    lenSkill: "Max Stifling Dagger đầu để farm và trao đổi lane, Phantom Strike lên đủ combo, Coup de Grace mỗi khi có thể — đây là kỹ năng cốt lõi.",
    doBuild: {
      khoiDau: ["Quelling Blade", "Slippers of Agility", "Tangoes"],
      giaiDoanDau: ["Power Treads", "Bracer"],
      coreItem: ["Black King Bar", "Desolator"],
      xaXi: ["Butterfly", "Satanic", "Daedalus"]
    },
    chienThuat: [
      "Chí mạng của Coup de Grace khiến PA có thể một đòn hạ gục tướng máu mỏng, đặc biệt nguy hiểm cuối game.",
      "Blur làm giảm độ chính xác khi địch nhắm đánh PA, tận dụng để farm và đi rừng an toàn hơn.",
      "Phantom Strike dùng để đuổi theo mục tiêu chạy trốn hoặc rút lui khỏi giao tranh bất lợi."
    ],
    khacChe: ["Yếu trước true strike (không thể bị né/miss) và các hiệu ứng phát hiện tàng hình.", "Sát thương thất thường vì phụ thuộc crit, dễ bị đổi mạng nếu không trúng chí mạng."]
  },
  {
    id: "juggernaut",
    icon: "🌀",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/juggernaut.png",
    ten: "Juggernaut",
    danhHieu: "Yurnero",
    he: "agi",
    vaiTro: ["Carry", "Đấu sĩ"],
    skills: [
      { phim: "Q", ten: "Blade Fury", mota: "Xoay kiếm gây sát thương liên tục quanh Juggernaut, miễn nhiễm hiệu ứng phép trong lúc xoay." },
      { phim: "W", ten: "Healing Ward", mota: "Triệu hồi một totem di động hồi máu cho Juggernaut và đồng đội đứng gần nó." },
      { phim: "E", ten: "Blade Dance", mota: "Bị động: tăng tỉ lệ chí mạng cho các đòn đánh thường." },
      { phim: "R", ten: "Omnislash", mota: "Ulti: nhảy chém liên tiếp nhiều mục tiêu địch xung quanh, gây sát thương từng đòn." }
    ],
    lenSkill: "Max Blade Fury để farm nhanh và trụ lane, Healing Ward xen kẽ, Omnislash mỗi khi có thể.",
    doBuild: {
      khoiDau: ["Quelling Blade", "Tangoes", "Branch"],
      giaiDoanDau: ["Power Treads", "Magic Wand"],
      coreItem: ["Battle Fury", "Manta Style"],
      xaXi: ["Butterfly", "Abyssal Blade", "Satanic"]
    },
    chienThuat: [
      "Blade Fury vừa farm nhanh vừa là cách an toàn để né skill hướng mục tiêu trong giao tranh.",
      "Omnislash gây sát thương cực lớn khi có nhiều mục tiêu địch đứng gần nhau, nên tận dụng lúc địch dồn cụm.",
      "Healing Ward âm thầm hồi máu ổn định, đặt gần vị trí combat để cả team hưởng lợi."
    ],
    khacChe: ["Omnislash có thể bị ngắt bởi các hiệu ứng miễn nhiễm mục tiêu hoặc hoá phép.", "Blade Fury không né được sát thương vật lý nên vẫn có thể bị stun/kite bằng đòn đánh thường."]
  },
  {
    id: "facelessvoid",
    icon: "⏳",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/faceless_void.png",
    ten: "Faceless Void",
    danhHieu: "Darkterror",
    he: "agi",
    vaiTro: ["Carry", "Khởi chiến"],
    skills: [
      { phim: "Q", ten: "Time Walk", mota: "Lao nhanh theo hướng di chuyển, khi kết thúc sẽ hoàn tác lại sát thương Void nhận trong khoảng thời gian đó." },
      { phim: "W", ten: "Time Lock", mota: "Bị động: mỗi đòn đánh có tỉ lệ gây thêm sát thương và làm choáng ngắn mục tiêu." },
      { phim: "E", ten: "Time Dilation", mota: "Làm chậm hồi chiêu và tốc độ hành động của quân địch trong khu vực, đồng thời gây sát thương." },
      { phim: "R", ten: "Chronosphere", mota: "Ulti: tạo một vùng đóng băng thời gian, mọi đơn vị bên trong (trừ Void) không thể hành động." }
    ],
    lenSkill: "Max Time Walk để farm và combat sớm, Time Lock xen kẽ, Chronosphere mỗi khi có thể.",
    doBuild: {
      khoiDau: ["Quelling Blade", "Tangoes", "Branch"],
      giaiDoanDau: ["Power Treads", "Magic Wand"],
      coreItem: ["Battle Fury", "Black King Bar"],
      xaXi: ["Butterfly", "Satanic", "Skadi"]
    },
    chienThuat: [
      "Chronosphere là một trong những ulti khởi chiến mạnh nhất game, nên đặt đúng vị trí để nhốt trọn đội hình địch.",
      "Time Walk vừa dùng để né đòn/skill vừa để đuổi theo mục tiêu, luyện thời điểm dùng cho hợp lý.",
      "Sau khi Chronosphere nổ, đồng đội tầm xa cần tranh thủ dồn sát thương tối đa vào bên trong."
    ],
    khacChe: ["Bị khắc bởi các hiệu ứng có thể xuyên qua hoặc phá Chronosphere.", "Yếu đầu game, cần được hỗ trợ farm để lên đồ kịp thời điểm."]
  },
  {
    id: "riki",
    icon: "🥷",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/riki.png",
    ten: "Riki",
    danhHieu: "Stealth Assassin",
    he: "agi",
    vaiTro: ["Sát thủ", "Bắt lẻ"],
    skills: [
      { phim: "Q", ten: "Smoke Screen", mota: "Ném khói vào khu vực, gây sát thương theo thời gian, làm mù và câm lặng các đơn vị địch bên trong." },
      { phim: "W", ten: "Blink Strike", mota: "Dịch chuyển tới cạnh mục tiêu (quân mình hoặc địch) và gây sát thương nếu là địch." },
      { phim: "E", ten: "Tricks of the Trade", mota: "Riki biến mất và di chuyển nhanh tới các mục tiêu chỉ định, gây sát thương rồi hiện lại." },
      { phim: "R", ten: "Permanent Invisibility", mota: "Ulti bị động: Riki tự động tàng hình khi không hành động trong thời gian ngắn, đòn đánh từ tàng hình gây thêm sát thương." }
    ],
    lenSkill: "Max Blink Strike để di chuyển và gây sát thương, Smoke Screen xen kẽ để khống chế, Tricks of the Trade mỗi khi có thể.",
    doBuild: {
      khoiDau: ["Quelling Blade", "Tangoes", "Ring of Protection"],
      giaiDoanDau: ["Boots of Speed", "Magic Wand"],
      coreItem: ["Black King Bar", "Aghanim's Scepter"],
      xaXi: ["Butterfly", "Satanic", "Desolator"]
    },
    chienThuat: [
      "Tàng hình gần như liên tục khiến Riki cực mạnh khi bắt lẻ tướng địch tách đoàn.",
      "Smoke Screen vừa khống chế vừa ngăn địch dùng phép, nên mở đầu combo bắt lẻ bằng skill này.",
      "Tránh đứng lại đánh thường quá lâu vì sẽ lộ hình, làm gián đoạn chuỗi tàng hình."
    ],
    khacChe: ["Bị khắc hoàn toàn bởi các hiệu ứng phát hiện tàng hình (True Sight, Sentry Ward, Gem).", "Sát thương không quá cao nếu không farm được đồ tăng sát thương."]
  },
  {
    id: "sniper",
    icon: "🎯",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/sniper.png",
    ten: "Sniper",
    danhHieu: "Gondar",
    he: "agi",
    vaiTro: ["Carry", "Đánh xa"],
    skills: [
      { phim: "Q", ten: "Shrapnel", mota: "Rải mảnh đạn xuống một khu vực, gây sát thương theo thời gian, làm chậm và tạo tầm nhìn." },
      { phim: "W", ten: "Headshot", mota: "Bị động: mỗi đòn đánh có tỉ lệ gây thêm sát thương và làm choáng cực ngắn (ministun)." },
      { phim: "E", ten: "Take Aim", mota: "Bị động: tăng tầm đánh thường, giúp Sniper đứng từ rất xa vẫn gây sát thương." },
      { phim: "R", ten: "Assassinate", mota: "Ulti: nhắm bắn một mục tiêu ở tầm cực xa, gây sát thương lớn sau một nhịp channel (bị huỷ nếu Sniper bị gây sát thương)." }
    ],
    lenSkill: "Max Headshot và Take Aim song song để tối đa hoá sát thương đánh thường, Shrapnel xen kẽ, Assassinate mỗi khi có thể.",
    doBuild: {
      khoiDau: ["Quelling Blade", "Tangoes", "Branch"],
      giaiDoanDau: ["Power Treads", "Magic Wand"],
      coreItem: ["Black King Bar"],
      xaXi: ["Butterfly", "Daedalus", "Satanic"]
    },
    chienThuat: [
      "Tầm đánh xa là vũ khí chính — luôn giữ khoảng cách, không để tướng cận chiến địch áp sát.",
      "Assassinate rất mạnh để bắt lẻ từ xa hoặc câu mạng, nhưng dễ bị huỷ nếu Sniper bị tấn công giữa chừng.",
      "Cần đội hình che chắn phía trước vì Sniper gần như không có khả năng tự vệ khi bị áp sát."
    ],
    khacChe: ["Cực yếu khi bị gank hoặc bị đối phương lao thẳng vào (gap close).", "Bị khắc bởi các tướng có blink/dash mạnh và disable tầm xa."]
  },

  // ================= PHÉP THUẬT =================
  {
    id: "invoker",
    icon: "🔮",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/invoker.png",
    ten: "Invoker",
    danhHieu: "Kael, Carl",
    he: "int",
    vaiTro: ["Nuker", "Combo", "Linh hoạt"],
    skills: [
      { phim: "Q/W/E", ten: "Quas / Wex / Exort", mota: "Ba trụ thuộc tính: Quas cộng máu hồi và giáp, Wex cộng tốc đánh/chạy và giảm hồi chiêu, Exort cộng sát thương phép. Mức mỗi trụ quyết định phép được Invoke ra." },
      { phim: "R", ten: "Invoke", mota: "Ulti: hoán đổi và triệu hồi 2 trong số 10 phép dựa trên tổ hợp Quas/Wex/Exort hiện tại, ví dụ Cold Snap, EMP, Tornado, Alacrity, Sun Strike, Forge Spirit, Chaos Meteor, Deafening Blast, Ghost Walk, Ice Wall." }
    ],
    lenSkill: "Build Quas-Wex (hỗ trợ/gank) lên Wex và Quas trước, giữ Exort ở mức thấp; hoặc build Exort (carry) để tối đa sát thương phép giai đoạn giữa-cuối game.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Mantle of Intelligence"],
      giaiDoanDau: ["Boots of Speed", "Null Talisman"],
      coreItem: ["Black King Bar", "Kaya"],
      xaXi: ["Scythe of Vyse", "Octarine Core", "Refresher Orb"]
    },
    chienThuat: [
      "Tướng có độ khó cao nhất vì phải nhớ tổ hợp phím và Invoke đúng cặp phép cho từng tình huống.",
      "Combo phổ biến: Cold Snap khoá đòn đánh, hoặc Tornado + Sun Strike/EMP để burst từ xa.",
      "Build Quas-Wex linh hoạt hơn cho việc gank sớm, build Exort mạnh hơn ở giao tranh tổng cuối game."
    ],
    khacChe: ["Dễ mắc lỗi bấm sai tổ hợp phím trong lúc gấp.", "Yếu nếu bị bắt bài combo hoặc bị silence trước khi kịp Invoke."]
  },
  {
    id: "lina",
    icon: "🔥",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lina.png",
    ten: "Lina",
    danhHieu: "Slayer",
    he: "int",
    vaiTro: ["Nuker", "Carry phép"],
    skills: [
      { phim: "Q", ten: "Dragon Slave", mota: "Phun lửa theo một đường thẳng, gây sát thương diện rộng cho mọi đơn vị trúng đòn." },
      { phim: "W", ten: "Light Strike Array", mota: "Gọi cột lửa nổ chậm tại một khu vực, gây sát thương và làm choáng ngắn các mục tiêu trúng." },
      { phim: "E", ten: "Fiery Soul", mota: "Bị động: mỗi lần dùng phép được cộng dồn tốc đánh và tốc chạy trong thời gian ngắn." },
      { phim: "R", ten: "Laguna Blade", mota: "Ulti: phóng tia sét gây sát thương cực lớn lên một mục tiêu duy nhất." }
    ],
    lenSkill: "Max Dragon Slave để farm và gây áp lực đường, Light Strike Array xen kẽ để combo choáng, Laguna Blade mỗi khi có thể.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Clarity"],
      giaiDoanDau: ["Arcane Boots", "Null Talisman"],
      coreItem: ["Black King Bar", "Kaya and Sange"],
      xaXi: ["Scythe of Vyse", "Octarine Core", "Refresher Orb"]
    },
    chienThuat: [
      "Combo chuẩn: Light Strike Array choáng trước rồi Laguna Blade/Dragon Slave burst tiếp theo.",
      "Fiery Soul giúp Lina càng đánh phép liên tục càng nhanh nhẹn, tận dụng để rút lui hoặc truy kích.",
      "Farm nhanh nhờ Dragon Slave diện rộng, có thể lên đồ carry để tự đánh thường ở giai đoạn cuối."
    ],
    khacChe: ["Máu mỏng, dễ chết nếu bị bắt lẻ trước khi kịp phản ứng.", "Laguna Blade có thể bị chặn bởi khiên phép hoặc miễn nhiễm phép."]
  },
  {
    id: "lion",
    icon: "🦁",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lion.png",
    ten: "Lion",
    danhHieu: "Demon Witch",
    he: "int",
    vaiTro: ["Hỗ trợ", "Khống chế", "Gank"],
    skills: [
      { phim: "Q", ten: "Earth Spike", mota: "Gai đất trồi lên theo một đường thẳng, gây sát thương và làm choáng các mục tiêu trúng." },
      { phim: "W", ten: "Hex", mota: "Biến mục tiêu thành thú nhỏ vô hại trong một khoảng thời gian, vô hiệu hoá hoàn toàn khả năng hành động và kỹ năng." },
      { phim: "E", ten: "Mana Drain", mota: "Channel để rút mana của mục tiêu về cho Lion, đồng thời làm chậm mục tiêu trong lúc channel." },
      { phim: "R", ten: "Finger of Death", mota: "Ulti: gây một lượng sát thương phép cực lớn ngay lập tức lên một mục tiêu duy nhất." }
    ],
    lenSkill: "Max Earth Spike và Hex song song tuỳ tình huống gank, Mana Drain xen kẽ, Finger of Death mỗi khi có thể.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Sentry Ward"],
      giaiDoanDau: ["Arcane Boots", "Magic Wand"],
      coreItem: ["Aghanim's Scepter", "Blink Dagger"],
      xaXi: ["Scythe of Vyse", "Octarine Core"]
    },
    chienThuat: [
      "Hex là một trong những skill vô hiệu hoá mạnh nhất game — dùng để loại tướng nguy hiểm nhất khỏi giao tranh trong vài giây quyết định.",
      "Combo Earth Spike (choáng) nối Finger of Death gần như luôn hạ gục tướng máu mỏng.",
      "Là support gank chủ lực giai đoạn đầu, cần đi cùng carry để tạo lợi thế sớm."
    ],
    khacChe: ["Máu rất mỏng, dễ bị counter-gank ngược.", "Hex và Finger of Death có thể bị chặn bởi các hiệu ứng miễn nhiễm/phản phép."]
  },
  {
    id: "crystalmaiden",
    icon: "❄️",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/crystal_maiden.png",
    ten: "Crystal Maiden",
    danhHieu: "Rylai",
    he: "int",
    vaiTro: ["Hỗ trợ", "Khống chế", "Cấp mana"],
    skills: [
      { phim: "Q", ten: "Crystal Nova", mota: "Đóng băng một khu vực, gây sát thương và làm chậm tốc chạy lẫn tốc đánh của mọi đơn vị trúng." },
      { phim: "W", ten: "Frostbite", mota: "Đóng băng mục tiêu tại chỗ, gây sát thương liên tục và khoá hoàn toàn khả năng di chuyển/tấn công." },
      { phim: "E", ten: "Arcane Aura", mota: "Bị động: hồi thêm mana theo thời gian cho Crystal Maiden và toàn bộ đồng đội trên bản đồ." },
      { phim: "R", ten: "Freezing Field", mota: "Ulti: channel tạo hàng loạt vụ nổ băng ngẫu nhiên quanh khu vực, gây sát thương và làm chậm diện rộng." }
    ],
    lenSkill: "Max Frostbite để khống chế gank, Crystal Nova xen kẽ, Freezing Field mỗi khi có thể dùng an toàn.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Sentry Ward"],
      giaiDoanDau: ["Arcane Boots", "Glimmer Cape"],
      coreItem: ["Aghanim's Scepter", "Force Staff"],
      xaXi: ["Scythe of Vyse", "Aeon Disk"]
    },
    chienThuat: [
      "Arcane Aura giúp cả đội thoải mái dùng phép hơn hẳn, đặc biệt hiệu quả với đội hình nhiều tướng phép.",
      "Frostbite là công cụ khoá cứng cực mạnh để gank giai đoạn đầu, kết hợp cùng carry đường.",
      "Freezing Field gây sát thương rất lớn nhưng đứng yên và dễ bị ngắt, chỉ nên dùng khi đã an toàn hoặc có bảo vệ."
    ],
    khacChe: ["Máu và giáp cực thấp, gần như chết ngay nếu bị bắt lẻ.", "Freezing Field dễ bị huỷ giữa chừng nếu Crystal Maiden bị stun hoặc silence."]
  },
  {
    id: "zeus",
    icon: "⚡",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/zuus.png",
    ten: "Zeus",
    danhHieu: "Lord of Olympia",
    he: "int",
    vaiTro: ["Nuker", "Gây áp lực đường", "Farm nhanh"],
    skills: [
      { phim: "Q", ten: "Arc Lightning", mota: "Phóng tia sét nảy qua nhiều mục tiêu liên tiếp, gây sát thương giảm dần mỗi lần nảy." },
      { phim: "W", ten: "Lightning Bolt", mota: "Đánh sét trực tiếp vào một mục tiêu, gây sát thương và tạo tầm nhìn thật (true sight) ngắn quanh khu vực." },
      { phim: "E", ten: "Static Field", mota: "Bị động: mỗi lần dùng phép gây thêm một phần sát thương dựa theo máu hiện tại của tất cả kẻ địch trong tầm nhìn." },
      { phim: "R", ten: "Thundergod's Wrath", mota: "Ulti: gây sát thương phép tức thời lên toàn bộ tướng địch trên bản đồ, bất kể khoảng cách." }
    ],
    lenSkill: "Max Arc Lightning để farm và gây áp lực đường liên tục, Lightning Bolt xen kẽ, Thundergod's Wrath mỗi khi có thể.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Clarity"],
      giaiDoanDau: ["Arcane Boots", "Null Talisman"],
      coreItem: ["Aghanim's Scepter", "Black King Bar"],
      xaXi: ["Octarine Core", "Refresher Orb", "Shiva's Guard"]
    },
    chienThuat: [
      "Farm và giữ đường cực nhanh nhờ Arc Lightning gây sát thương diện rộng lên lính mỗi lần cast.",
      "Thundergod's Wrath không cần thấy mục tiêu, rất mạnh để câu mạng tướng máu yếu đang đi một mình ở xa.",
      "Static Field khiến việc dùng phép liên tục của Zeus luôn kèm sát thương phụ trội, nên spam phép nhiều khi mana cho phép."
    ],
    khacChe: ["Máu rất mỏng và không có khả năng tự vệ cận chiến.", "Bị khắc bởi các tướng có thể bắt lẻ nhanh (blink/dash) trước khi Zeus kịp phản ứng."]
  },
  {
    id: "lich",
    icon: "☠️",
    img: "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/heroes/lich.png",
    ten: "Lich",
    danhHieu: "Ethreain",
    he: "int",
    vaiTro: ["Hỗ trợ", "Khống chế", "Gây áp lực đường"],
    skills: [
      { phim: "Q", ten: "Frost Blast", mota: "Ném cầu băng gây sát thương và làm chậm mạnh mục tiêu cùng khu vực xung quanh." },
      { phim: "W", ten: "Frost Armor", mota: "Phủ giáp băng lên một đơn vị: nếu là đồng minh sẽ tăng giáp, nếu là kẻ địch sẽ giảm giáp; kẻ tấn công mục tiêu có giáp băng bị chậm lại." },
      { phim: "E", ten: "Sacrifice", mota: "Hy sinh một lính của Lich để hồi máu/mana cho đồng đội, đồng thời loại lính đó khỏi vòng farm của cả hai bên (deny)." },
      { phim: "R", ten: "Chain Frost", mota: "Ulti: bắn quả cầu băng nảy liên tục giữa các mục tiêu địch gần nhau, mỗi lần trúng gây sát thương và làm chậm." }
    ],
    lenSkill: "Max Frost Blast để khống chế gank, Frost Armor xen kẽ để hỗ trợ trụ đường, Chain Frost mỗi khi có thể.",
    doBuild: {
      khoiDau: ["Tangoes", "Branch", "Sentry Ward"],
      giaiDoanDau: ["Arcane Boots", "Glimmer Cape"],
      coreItem: ["Aghanim's Scepter", "Force Staff"],
      xaXi: ["Scythe of Vyse", "Aeon Disk"]
    },
    chienThuat: [
      "Chain Frost gây sát thương cực lớn khi đội địch đứng cụm, tận dụng lúc giao tranh tổng nổ ra.",
      "Frost Blast là công cụ mở giao tranh/gank hiệu quả nhờ làm chậm diện rộng ngay khi trúng.",
      "Sacrifice giúp hỗ trợ đồng đội hồi máu/mana miễn phí và làm chậm tốc độ farm của đối phương trên đường."
    ],
    khacChe: ["Máu và giáp rất thấp, dễ bị bắt lẻ.", "Chain Frost cần địch đứng gần nhau mới phát huy hết giá trị, dễ bị né nếu đội hình địch dàn trải."]
  }
];

const NHAN_HE = { str: "Sức mạnh", agi: "Nhanh nhẹn", int: "Phép thuật" };
const MAU_HE = { str: "#c0392b", agi: "#27ae60", int: "#2980b9" };

// Icon minh hoạ cho item — biểu tượng tự chọn, không dùng ảnh gốc trong game.
const ITEM_ICONS = {
  "Quelling Blade": "🪓",
  "Tangoes": "🥭",
  "Branch": "🌿",
  "Boots of Speed": "👢",
  "Magic Wand": "🪄",
  "Vanguard": "🧱",
  "Blink Dagger": "🗡️",
  "Black King Bar": "🖤",
  "Blade Mail": "🪞",
  "Assault Cuirass": "🛡️",
  "Heart of Tarrasque": "❤️",
  "Power Treads": "👟",
  "Armlet of Mordiggian": "🦾",
  "Satanic": "🩸",
  "Daedalus": "💥",
  "Aghanim's Scepter": "👑",
  "Ring of Protection": "💍",
  "Phase Boots": "💨",
  "Shiva's Guard": "❄️",
  "Soul Ring": "🔵",
  "Refresher Orb": "🔄",
  "Clarity": "🧪",
  "Arcane Boots": "💧",
  "Urn of Shadows": "⚱️",
  "Battle Fury": "🌊",
  "Manta Style": "👥",
  "Butterfly": "🦋",
  "Abyssal Blade": "⛓️",
  "Slippers of Agility": "🩰",
  "Bracer": "🔗",
  "Desolator": "💀",
  "Skadi": "🧊",
  "Mantle of Intelligence": "📘",
  "Null Talisman": "🔷",
  "Kaya": "🟢",
  "Scythe of Vyse": "🔱",
  "Octarine Core": "💫",
  "Kaya and Sange": "🌗",
  "Sentry Ward": "👁️",
  "Glimmer Cape": "🧥",
  "Force Staff": "➡️",
  "Aeon Disk": "⏱️"
};

// Ảnh item thật, dẫn link thẳng tới CDN chính thức của Valve (không tải về/host lại).
// Mỗi URL đã được kiểm tra tồn tại (HTTP 200) trước khi đưa vào.
const ITEM_IMG_BASE = "https://cdn.cloudflare.steamstatic.com/apps/dota2/images/dota_react/items";
const ITEM_IMG = {
  "Quelling Blade": `${ITEM_IMG_BASE}/quelling_blade.png`,
  "Tangoes": `${ITEM_IMG_BASE}/tango.png`,
  "Branch": `${ITEM_IMG_BASE}/branches.png`,
  "Boots of Speed": `${ITEM_IMG_BASE}/boots.png`,
  "Magic Wand": `${ITEM_IMG_BASE}/magic_wand.png`,
  "Vanguard": `${ITEM_IMG_BASE}/vanguard.png`,
  "Blink Dagger": `${ITEM_IMG_BASE}/blink.png`,
  "Black King Bar": `${ITEM_IMG_BASE}/black_king_bar.png`,
  "Blade Mail": `${ITEM_IMG_BASE}/blade_mail.png`,
  "Assault Cuirass": `${ITEM_IMG_BASE}/assault.png`,
  "Heart of Tarrasque": `${ITEM_IMG_BASE}/heart.png`,
  "Power Treads": `${ITEM_IMG_BASE}/power_treads.png`,
  "Armlet of Mordiggian": `${ITEM_IMG_BASE}/armlet.png`,
  "Satanic": `${ITEM_IMG_BASE}/satanic.png`,
  "Daedalus": `${ITEM_IMG_BASE}/greater_crit.png`,
  "Aghanim's Scepter": `${ITEM_IMG_BASE}/ultimate_scepter.png`,
  "Ring of Protection": `${ITEM_IMG_BASE}/ring_of_protection.png`,
  "Phase Boots": `${ITEM_IMG_BASE}/phase_boots.png`,
  "Shiva's Guard": `${ITEM_IMG_BASE}/shivas_guard.png`,
  "Soul Ring": `${ITEM_IMG_BASE}/soul_ring.png`,
  "Refresher Orb": `${ITEM_IMG_BASE}/refresher.png`,
  "Clarity": `${ITEM_IMG_BASE}/clarity.png`,
  "Arcane Boots": `${ITEM_IMG_BASE}/arcane_boots.png`,
  "Urn of Shadows": `${ITEM_IMG_BASE}/urn_of_shadows.png`,
  "Battle Fury": `${ITEM_IMG_BASE}/bfury.png`,
  "Manta Style": `${ITEM_IMG_BASE}/manta.png`,
  "Butterfly": `${ITEM_IMG_BASE}/butterfly.png`,
  "Abyssal Blade": `${ITEM_IMG_BASE}/abyssal_blade.png`,
  "Slippers of Agility": `${ITEM_IMG_BASE}/slippers.png`,
  "Bracer": `${ITEM_IMG_BASE}/bracer.png`,
  "Desolator": `${ITEM_IMG_BASE}/desolator.png`,
  "Skadi": `${ITEM_IMG_BASE}/skadi.png`,
  "Mantle of Intelligence": `${ITEM_IMG_BASE}/mantle.png`,
  "Null Talisman": `${ITEM_IMG_BASE}/null_talisman.png`,
  "Kaya": `${ITEM_IMG_BASE}/kaya.png`,
  "Scythe of Vyse": `${ITEM_IMG_BASE}/sheepstick.png`,
  "Octarine Core": `${ITEM_IMG_BASE}/octarine_core.png`,
  "Kaya and Sange": `${ITEM_IMG_BASE}/kaya_and_sange.png`,
  "Sentry Ward": `${ITEM_IMG_BASE}/ward_sentry.png`,
  "Glimmer Cape": `${ITEM_IMG_BASE}/glimmer_cape.png`,
  "Force Staff": `${ITEM_IMG_BASE}/force_staff.png`,
  "Aeon Disk": `${ITEM_IMG_BASE}/aeon_disk.png`
};
