// Danh mục item DotA 1 — tên, giá mua/bán, công dụng và ảnh đều lấy từ
// gaming-tools.com/warcraft-3/dota-items/ (cột Function, Price, Selling Price).
// Mô tả tiếng Việt dịch sát theo cột Function của nguồn, không tự thêm số liệu.
// `tenGoc` là tên gốc trong DotA 1 khi khác với tên quen dùng.
const ITEM_IMG_BASE = "https://gaming-tools.com/warcraft-3/wp-content/uploads/sites/2/2020/04";

const ITEMS = [
  // ===== Đồ cơ bản / nguyên liệu =====
  { ten: "Branch", tenGoc: "Ironwood Branch", icon: "🌿", mua: 57, ban: 28, file: "Ironwoodbranch.jpg", mota: "+1 tất cả chỉ số. Rẻ nhất game, dùng làm nguyên liệu ghép đồ." },
  { ten: "Clarity", tenGoc: "Clarity Potion", icon: "🧪", mua: 50, ban: 25, file: "Claritypotion.jpg", mota: "Hồi 100 mana trong 30 giây. Mất tác dụng nếu bị tấn công." },
  { ten: "Tangoes", tenGoc: "Ancient Tango of Essifation", icon: "🥭", mua: 90, ban: 45, file: "Ancienttangoofessifation.jpg", mota: "Hồi 115 máu trong 16 giây, có 3 lượt dùng." },
  { ten: "Healing Salve", icon: "💊", mua: 100, ban: 50, file: "Healingsalve.jpg", mota: "Hồi 400 máu trong 10 giây." },
  { ten: "Scroll of Town Portal", icon: "📜", mua: 135, ban: 67, file: "Townportal.jpg", mota: "Dịch chuyển về công trình của phe mình, hồi chiêu 65 giây, tốn 75 mana." },
  { ten: "Gauntlets of Ogre Strength", icon: "🧤", mua: 150, ban: 75, file: "Gauntletsofstrength.jpg", mota: "+3 Sức mạnh." },
  { ten: "Slippers of Agility", icon: "🩰", mua: 150, ban: 75, file: "Slippersofagility.jpg", mota: "+3 Nhanh nhẹn." },
  { ten: "Mantle of Intelligence", icon: "📘", mua: 150, ban: 75, file: "Mantleofintelligence.jpg", mota: "+3 Phép thuật." },
  { ten: "Animal Courier", icon: "🐴", mua: 170, ban: 85, file: "Animalcourier.jpg", mota: "Thú vận chuyển 6 ô đồ ra đường, nâng cấp được thành gà bay." },
  { ten: "Ring of Protection", icon: "💍", mua: 175, ban: 87, file: "Ringofprotection.jpg", mota: "+2 giáp." },
  { ten: "Dust of Appearance", icon: "✨", mua: 180, ban: 90, file: "Dustofappearance.jpg", mota: "Hiện hình địch tàng hình trong bán kính 1050, có 2 lượt dùng." },
  { ten: "Circlet of Nobility", icon: "👒", mua: 185, ban: 92, file: "Circletofnobility.jpg", mota: "+2 tất cả chỉ số." },
  { ten: "Magic Stick", icon: "🪄", mua: 200, ban: 100, file: "Magicstick.jpg", mota: "Tích tối đa 10 điểm mỗi khi địch dùng phép gần đó; mỗi điểm hồi 15 máu và mana." },
  { ten: "Observer Wards", icon: "👁️", mua: 200, ban: 100, file: "Observerwards.jpg", mota: "2 mắt tàng hình cho tầm nhìn trong 6 phút, không phát hiện được tàng hình." },
  { ten: "Sentry Ward", tenGoc: "Sentry Wards", icon: "🔍", mua: 200, ban: 100, file: "Sentrywards.jpg", mota: "Mắt tàng hình phát hiện địch tàng hình trong vùng 950, kéo dài 3 phút." },
  { ten: "Quelling Blade", icon: "🪓", mua: 225, ban: 0, file: "Quellingblade.jpg", mota: "+32% sát thương đánh thường lên đơn vị không phải tướng (+12% với tướng tầm xa)." },
  { ten: "Stout Shield", icon: "🛡️", mua: 250, ban: 125, file: "Stoutshield.jpg", mota: "60% cơ hội chặn 20 sát thương." },
  { ten: "Sobi Mask", icon: "😷", mua: 325, ban: 162, file: "Sobimask.jpg", mota: "+50% hồi mana." },
  { ten: "Ring of Regeneration", icon: "💚", mua: 350, ban: 175, file: "Ringofregeneration.jpg", mota: "+2 hồi máu mỗi giây." },
  { ten: "Flying Courier", icon: "🕊️", mua: 400, ban: 200, file: "Flyingcourier.jpg", mota: "Gà bay 6 ô đồ, 150 máu, 10 giáp, dùng được tăng tốc và khiên." },
  { ten: "Blades of Attack", icon: "🗡️", mua: 450, ban: 225, file: "Bladesofattack.jpg", mota: "+9 sát thương." },
  { ten: "Belt of Giant Strength", icon: "🎗️", mua: 450, ban: 225, file: "Beltofgiantstrength.jpg", mota: "+6 Sức mạnh." },
  { ten: "Robe of the Magi", icon: "👘", mua: 450, ban: 225, file: "Robeofthemagi.jpg", mota: "+6 Phép thuật." },
  { ten: "Boots of Elvenskin", icon: "🥿", mua: 450, ban: 225, file: "Bootsofelvenskin.jpg", mota: "+6 Nhanh nhẹn." },
  { ten: "Wraith Band", icon: "🔗", mua: 485, ban: 242, file: "Wraithband.jpg", mota: "+6 Nhanh nhẹn, +3 Phép thuật, +3 Sức mạnh, +3 sát thương." },
  { ten: "Boots of Speed", icon: "👢", mua: 500, ban: 250, file: "Bootsofspeed.jpg", mota: "Tăng 55 tốc độ chạy. Nguyên liệu cho mọi loại giày cao cấp." },
  { ten: "Gloves of Haste", icon: "🧤", mua: 500, ban: 275, file: "Glovesofhaste.jpg", mota: "+15% tốc độ đánh." },
  { ten: "Planeswalker's Cloak", icon: "🧣", mua: 500, ban: 250, file: "Planeswalkerscloak.jpg", mota: "+15% kháng phép." },
  { ten: "Ring of Basilius", icon: "💫", mua: 500, ban: 250, file: "Ringofbasilius.jpg", mota: "+6 sát thương, +1 giáp; hào quang +0,65 hồi mana và +2 giáp cho đồng đội." },
  { ten: "Null Talisman", icon: "🔷", mua: 505, ban: 252, file: "Nulltalisman.jpg", mota: "+6 Phép thuật, +3 Nhanh nhẹn, +3 Sức mạnh, +3 sát thương." },
  { ten: "Magic Wand", icon: "🪄", mua: 509, ban: 254, file: "Magicwand.jpg", mota: "+3 tất cả chỉ số; tích tối đa 15 điểm khi địch dùng phép gần đó, mỗi điểm hồi 15 máu và mana." },
  { ten: "Bracer", icon: "🔗", mua: 525, ban: 262, file: "Bracer.jpg", mota: "+6 Sức mạnh, +3 Nhanh nhẹn, +3 Phép thuật, +3 sát thương." },
  { ten: "Chainmail", icon: "⛓️", mua: 550, ban: 275, file: "Chainmail.jpg", mota: "+5 giáp." },
  { ten: "Poor Man's Shield", icon: "🛡️", mua: 550, ban: 275, file: "Poormansshield.jpg", mota: "+6 Nhanh nhẹn; chặn chắc 20 sát thương từ tướng, 60% cơ hội chặn với lính." },
  { ten: "Orb of Venom", icon: "🧪", mua: 550, ban: 275, file: "OrbOfVenom.jpg", mota: "Đòn đánh gây độc 3 sát thương/giây trong 4 giây; làm chậm 12% (cận chiến) hoặc 4% (tầm xa)." },
  { ten: "Bottle", icon: "🍶", mua: 600, ban: 300, file: "Bottle.jpg", mota: "3 lượt nước, nạp bằng rune hoặc suối; mỗi lượt hồi 135 máu và 70 mana." },
  { ten: "Headdress of Rejuvenation", icon: "🪶", mua: 603, ban: 301, file: "Headdressofrejuvenation.jpg", mota: "+2 tất cả chỉ số; hào quang +3 hồi máu cho đồng đội." },
  { ten: "Gem of True Sight", icon: "💎", mua: 700, ban: null, file: "Gemoftruesight.jpg", mota: "Cho phép nhìn thấy đơn vị tàng hình trong bán kính nhỏ. Rơi ra khi chết." },
  { ten: "Soul Ring", icon: "🔵", mua: 800, ban: 400, file: "Soul_Ring.jpg", mota: "+3 hồi máu, +50% hồi mana; kích hoạt đổi 150 máu lấy 150 mana dùng trong 10 giây." },
  { ten: "Natherezim Buckler", icon: "🔰", mua: 803, ban: 401, file: "Nathrezimbuckler.jpg", mota: "+5 giáp, +2 tất cả chỉ số; kích hoạt cho +2 giáp diện rộng." },
  { ten: "Urn of Shadows", icon: "⚱️", mua: 875, ban: 437, file: "Urnofshadows.jpg", mota: "+50% hồi mana, +6 Sức mạnh; tích điểm khi có tướng chết gần đó, mỗi điểm hồi 400 máu cho đồng minh hoặc rút 200 máu của địch trong 8 giây." },
  { ten: "Ring of Health", icon: "❤️", mua: 875, ban: 437, file: "Ringofhealth.jpg", mota: "+4 hồi máu mỗi giây." },
  { ten: "Void Stone", icon: "🪨", mua: 875, ban: 450, file: "Voidstone.jpg", mota: "+100% hồi mana." },
  { ten: "Quarterstaff", icon: "🪈", mua: 900, ban: 575, file: "Quarterstaff.jpg", mota: "+10% tốc độ đánh, +10 sát thương." },
  { ten: "Mask of Death", icon: "💀", mua: 900, ban: 450, file: "Maskofdeath.jpg", mota: "10% hút máu (hiệu ứng Orb)." },
  { ten: "Helm of Iron Will", icon: "⛑️", mua: 950, ban: 475, file: "Helmofironwill.jpg", mota: "+5 giáp, +3 hồi máu mỗi giây." },
  { ten: "Ogre Axe", icon: "🪓", mua: 1000, ban: 500, file: "Ogreaxe.jpg", mota: "+10 Sức mạnh." },
  { ten: "Blade of Alacrity", icon: "⚡", mua: 1000, ban: 500, file: "Bladesofalacrity.jpg", mota: "+10 Nhanh nhẹn." },
  { ten: "Staff of Wizardry", icon: "🪄", mua: 1000, ban: 500, file: "Staffofwizardry.jpg", mota: "+10 Phép thuật." },
  { ten: "Energy Booster", icon: "🔋", mua: 1000, ban: 500, file: "Energybooster.jpg", mota: "+250 mana." },
  { ten: "Vitality Booster", icon: "🫀", mua: 1100, ban: 550, file: "Vitalitybooster.jpg", mota: "+250 máu." },
  { ten: "Point Booster", icon: "🔆", mua: 1200, ban: 600, file: "Pointbooster.jpg", mota: "+150 mana, +200 máu." },
  { ten: "Broadsword", icon: "🗡️", mua: 1200, ban: 600, file: "Broadsword.jpg", mota: "+18 sát thương." },
  { ten: "Claymore", icon: "⚔️", mua: 1400, ban: 700, file: "Claymore.jpg", mota: "+21 sát thương." },
  { ten: "Plate Mail", icon: "🛡️", mua: 1400, ban: 700, file: "Platemail.jpg", mota: "+10 giáp." },
  { ten: "Javelin", icon: "🎯", mua: 1500, ban: 750, file: "Javelin.jpg", mota: "+21 sát thương, 20% cơ hội gây thêm 40 sát thương mỗi đòn." },
  { ten: "Mithril Hammer", icon: "🔨", mua: 1600, ban: 800, file: "Mithrilhammer.jpg", mota: "+24 sát thương." },
  { ten: "Oblivion Staff", icon: "🪄", mua: 1675, ban: 837, file: "Oblivionstaff.jpg", mota: "+6 Phép thuật, +10% tốc độ đánh, +15 sát thương, +75% hồi mana." },
  { ten: "Perseverance", icon: "🔮", mua: 1750, ban: 875, file: "Perseverance.jpg", mota: "+10 sát thương, +5 hồi máu, +125% hồi mana." },
  { ten: "Talisman of Evasion", icon: "🍀", mua: 1800, ban: 900, file: "Talismanofevasion.jpg", mota: "+25% né đòn." },
  { ten: "Demon Edge", icon: "🗡️", mua: 2400, ban: 1300, file: "Demonedge.jpg", mota: "+46 sát thương." },
  { ten: "Hyperstone", icon: "💠", mua: 2100, ban: 1050, file: "Hyperstone.jpg", mota: "+55% tốc độ đánh." },
  { ten: "Ultimate Orb", icon: "💠", mua: 2100, ban: 1050, file: "Ultimateorb.jpg", mota: "+10 tất cả chỉ số." },
  { ten: "Mystic Staff", icon: "🔱", mua: 2700, ban: 1350, file: "Mysticstaff.jpg", mota: "+25 Phép thuật." },
  { ten: "Eaglehorn", icon: "🦅", mua: 3300, ban: 1650, file: "Eaglehorn.jpg", mota: "+25 Nhanh nhẹn." },
  { ten: "Messerschmidt's Reaver", icon: "🪓", mua: 3200, ban: 1600, file: "Messerschmidtsreaver.jpg", mota: "+25 Sức mạnh." },
  { ten: "Soul Booster", icon: "💙", mua: 3300, ban: 1650, file: "Soulbooster.jpg", mota: "+450 máu, +400 mana, +50% hồi mana, +2 hồi máu mỗi giây." },
  { ten: "Sacred Relic", icon: "⚜️", mua: 3800, ban: 1900, file: "Sacredrelic.jpg", mota: "+60 sát thương." },

  // ===== Giày =====
  { ten: "Power Treads", icon: "👟", mua: 1450, ban: 725, file: "Powertreads.jpg", mota: "+60 tốc chạy, +25 tốc đánh, +8 chỉ số đang chọn; đổi qua lại giữa Sức mạnh / Nhanh nhẹn / Phép thuật." },
  { ten: "Phase Boots", icon: "💨", mua: 1400, ban: 700, file: "Phaseboots.jpg", mota: "+60 tốc chạy, +24 sát thương; kích hoạt xuyên qua đơn vị và +15% tốc chạy trong 4 giây." },
  { ten: "Arcane Boots", icon: "💧", mua: 1500, ban: 750, file: "ArcaneBoots.jpg", mota: "+65 tốc chạy, +250 mana; kích hoạt hồi 135 mana cho bản thân và đồng đội trong vùng 600." },
  { ten: "Boots of Travel", icon: "🌀", mua: 2700, ban: 1350, file: "Bootsoftravel.jpg", mota: "+95 tốc chạy; kích hoạt dịch chuyển tới bất kỳ đơn vị phe mình (không phải tướng)." },

  // ===== Đồ tầm trung =====
  { ten: "Vladmir's Offering", icon: "🩸", mua: 2050, ban: 1025, file: "Vladimirsoffering.jpg", mota: "Hào quang cho cả đội: +16% hút máu (cận chiến), +0,8 hồi mana, +5 giáp, +15% sát thương." },
  { ten: "Hood of Defiance", icon: "🧥", mua: 2075, ban: 1037, file: "Hoodofdefiance.jpg", mota: "+30% kháng phép, +8 hồi máu." },
  { ten: "Blade Mail", icon: "🪞", mua: 2200, ban: 1100, file: "Blademail.jpg", mota: "+22 sát thương, +5 giáp, +10 Phép thuật; kích hoạt phản 100% sát thương nhận vào dưới dạng phép trong 4 giây." },
  { ten: "Force Staff", icon: "➡️", mua: 2200, ban: 1100, file: "Forcestaff.jpg", mota: "+10 Phép thuật, +10 sát thương, +10% tốc đánh; kích hoạt đẩy một đơn vị bất kỳ đi 600 đơn vị theo hướng nó đang quay." },
  { ten: "Vanguard", icon: "🧱", mua: 2225, ban: 1112, file: "Vanguard.jpg", mota: "+6 hồi máu, +275 máu, 70% cơ hội chặn 40 sát thương (20 với tướng tầm xa)." },
  { ten: "Mekansm", icon: "⛨", mua: 2306, ban: 1153, file: "Mekansm.jpg", mota: "+5 tất cả chỉ số, +3 giáp, hào quang +4 hồi máu; kích hoạt hồi 250 máu và +2 giáp cho cả đội trong vùng 750." },
  { ten: "Crystalys", icon: "💥", mua: 2150, ban: 1075, file: "Crystalys.jpg", mota: "+35 sát thương, 10% cơ hội chí mạng 1,75 lần." },
  { ten: "Sange", icon: "🌑", mua: 2150, ban: 1075, file: "Sange.jpg", mota: "+16 Sức mạnh, +10 sát thương, 15% cơ hội làm chậm 20% tốc chạy và tốc đánh trong 6 giây (Orb)." },
  { ten: "Yasha", icon: "🌘", mua: 2150, ban: 1075, file: "Yasha.jpg", mota: "+16 Nhanh nhẹn, +10% tốc chạy, +15% tốc đánh." },
  { ten: "Blink Dagger", tenGoc: "Kelen's Dagger", icon: "🗡️", mua: 2150, ban: 1075, file: "Kelensdagger.jpg", mota: "Kích hoạt dịch chuyển tức thời tối đa 1200 đơn vị; bị khoá nếu vừa nhận sát thương trong 3 giây trước đó." },
  { ten: "Eul's Scepter of Divinity", icon: "🌪️", mua: 2800, ban: 1400, file: "Eulsscepterofdivinity.jpg", mota: "+10 Phép thuật, +150% hồi mana, +25 tốc chạy; kích hoạt thổi bay một mục tiêu (hoặc chính mình) trong 2,5 giây." },
  { ten: "Maelstrom", icon: "⚡", mua: 2900, ban: 1450, file: "Maelstrom.jpg", mota: "+25% tốc đánh, +24 sát thương; 25% cơ hội phóng sét dây 120 sát thương lan 4 mục tiêu (Orb)." },
  { ten: "Cranium Basher", icon: "🔨", mua: 3100, ban: 1550, file: "Craniumbasher.jpg", mota: "+40 sát thương, +6 Sức mạnh; đòn đánh có 25% cơ hội choáng 1,4 giây (10% với tướng tầm xa)." },
  { ten: "Diffusal Blade", icon: "🔹", mua: 3300, ban: 1650, file: "Diffusalblade.jpg", mota: "+22/26 Nhanh nhẹn, +6/10 Phép thuật; đốt mana mục tiêu mỗi đòn đánh (Orb); kích hoạt làm chậm và gỡ hiệu ứng, có 8 lượt dùng." },
  { ten: "Lothar's Edge", icon: "🌫️", mua: 3400, ban: 1700, file: "Lotharsedge.jpg", mota: "+10 tốc đánh, +38 sát thương; kích hoạt tàng hình 9 giây kèm +20% tốc chạy và 125 sát thương đâm lén." },
  { ten: "Khadgar's Pipe of Insight", icon: "🎺", mua: 3753, ban: 1876, file: "Khadgarspipeofinsight.jpg", mota: "+10 hồi máu, +30% kháng phép; kích hoạt tạo khiên chắn 400 sát thương phép cho cả đội trong vùng 500, kéo dài 8 giây." },
  { ten: "Mask of Madness", icon: "😡", mua: 1900, ban: 950, file: "Maskofmadness.jpg", mota: "17% hút máu (Orb); kích hoạt +100% tốc đánh và +20% tốc chạy nhưng nhận thêm 30% sát thương." },
  { ten: "Hand of Midas", icon: "🪙", mua: 1900, ban: 950, file: "Handofmidas.jpg", mota: "+30% tốc đánh; kích hoạt biến một con lính thành vàng, cho gấp 2,5 lần vàng và kinh nghiệm." },
  { ten: "Helm of the Dominator", icon: "🐺", mua: 1850, ban: 925, file: "Helmofthedominator.jpg", mota: "+20 sát thương, +5 giáp, 15% hút máu (Orb); kích hoạt chiếm quyền điều khiển một con lính/quái địch." },
  { ten: "Armlet of Mordiggian", icon: "🦾", mua: 2600, ban: 1300, file: "Armletofmordiggian.jpg", mota: "+9 sát thương, +15% tốc đánh, +5 giáp, +5 hồi máu; kích hoạt +25 Sức mạnh và +31 sát thương nhưng mất 37 máu mỗi giây." },

  // ===== Đồ mạnh / cuối game =====
  { ten: "Black King Bar", icon: "🖤", mua: 3900, ban: 1950, file: "Blackkingbar.jpg", mota: "+10 Sức mạnh, +24 sát thương; kích hoạt miễn nhiễm phép trong 10 giây, giảm dần còn 5 giây qua mỗi lần dùng." },
  { ten: "Battle Fury", icon: "🌊", mua: 4350, ban: 2175, file: "Battlefury.jpg", mota: "+65 sát thương, +150% hồi mana, +6 hồi máu; đòn đánh lan 35% sát thương ra xung quanh (chỉ tướng cận chiến)." },
  { ten: "Desolator", tenGoc: "Stygian Desolator", icon: "💀", mua: 4400, ban: 2200, file: "Stygiandesolator.jpg", mota: "+60 sát thương; đòn đánh giảm 6 giáp mục tiêu trong 7 giây (Orb)." },
  { ten: "Sange and Yasha", icon: "🌗", mua: 4400, ban: 2200, file: "Sangeandyasha.jpg", mota: "+16 Sức mạnh, +16 Nhanh nhẹn, +12 sát thương, +12% tốc chạy, +15% tốc đánh; 15% cơ hội làm chậm mạnh mục tiêu (Orb)." },
  { ten: "Shiva's Guard", icon: "❄️", mua: 4700, ban: 2350, file: "Shivasguard.jpg", mota: "+15 giáp, +30 Phép thuật, hào quang giảm 15% tốc đánh của địch; kích hoạt gây 200 sát thương và làm chậm 40% tốc chạy diện rộng." },
  { ten: "Ethereal Blade", icon: "👻", mua: 4800, ban: 2400, file: "Etheral_Blade.jpg", mota: "+40 Nhanh nhẹn, +10 Sức mạnh, +10 Phép thuật; kích hoạt đẩy cả mình lẫn mục tiêu sang thể phi vật chất 3 giây, gây sát thương phép bằng 2,5 lần Nhanh nhẹn và làm chậm 45%." },
  { ten: "Manta Style", icon: "👥", mua: 4900, ban: 2450, file: "Mantastyle.jpg", mota: "+26 Nhanh nhẹn, +10 Sức mạnh, +10 Phép thuật, +15% tốc đánh, +10% tốc chạy; kích hoạt tạo bản sao ảo và gỡ một số hiệu ứng xấu." },
  { ten: "Orchid Malevolence", icon: "🌸", mua: 5025, ban: 2512, file: "Orchidmalevolence.jpg", mota: "+20 Phép thuật, +45 sát thương, +30% tốc đánh, +225% hồi mana; kích hoạt câm lặng mục tiêu 5 giây và tăng 20% sát thương gây lên nó." },
  { ten: "Bloodstone", icon: "🔴", mua: 5050, ban: 2525, file: "Bloodstone.jpg", mota: "+500 máu, +400 mana, +150% hồi mana, +6 hồi máu; tích điểm khi có tướng địch chết gần đó, mỗi điểm +1 hồi mana. Mất 1/3 điểm khi chết nhưng toả ra một vùng hồi máu." },
  { ten: "Radiance", icon: "☀️", mua: 5150, ban: 2575, file: "Radiance.jpg", mota: "+60 sát thương; hào quang thiêu đốt gây 40 sát thương mỗi giây cho địch trong vùng 650." },
  { ten: "Linken's Sphere", tenGoc: "Linkens Sphere", icon: "🌐", mua: 5175, ban: 2587, file: "Linkenssphere.jpg", mota: "+15 tất cả chỉ số, +6 hồi máu, +150% hồi mana; tự chặn một phép đơn mục tiêu mỗi 20 giây." },
  { ten: "Refresher Orb", icon: "🔄", mua: 5300, ban: 2650, file: "Refresherorb.jpg", mota: "+5 hồi máu, +200% hồi mana, +40 sát thương; kích hoạt làm mới toàn bộ thời gian hồi chiêu." },
  { ten: "Monkey King Bar", icon: "🐒", mua: 5400, ban: 2700, file: "Monkeykingbar.jpg", mota: "+88 sát thương, +15% tốc đánh; đòn đánh không bao giờ trượt, 35% cơ hội gây thêm 100 sát thương và ngắt phép đang niệm." },
  { ten: "Assault Cuirass", icon: "🛡️", mua: 5550, ban: 2775, file: "Assaultcuirass.jpg", mota: "+10 giáp, +35% tốc đánh; hào quang +5 giáp và +20% tốc đánh cho đồng đội, -5 giáp cho địch xung quanh." },
  { ten: "Scythe of Vyse", tenGoc: "Hex / Guinsoo's Scythe of Vyse", icon: "🔱", mua: 5675, ban: 2837, file: "Guinsoosscytheofvyse.jpg", mota: "+35 Phép thuật, +10 Sức mạnh, +10 Nhanh nhẹn, +200% hồi mana; kích hoạt biến mục tiêu thành cừu 3,5 giây." },
  { ten: "Heart of Tarrasque", icon: "❤️", mua: 5500, ban: 2750, file: "Heartoftarrasque.jpg", mota: "+40 Sức mạnh, +300 máu, hồi 2% máu tối đa mỗi giây nếu không bị đánh trong 6 giây gần nhất." },
  { ten: "Mjollnir", icon: "🔨", mua: 5500, ban: 2750, file: "Mjollnir.jpg", mota: "+70 tốc đánh, +24 sát thương; 25% cơ hội phóng sét dây 160 sát thương lan 4 mục tiêu (Orb); kích hoạt tạo lá chắn sét phản đòn cho đồng minh." },
  { ten: "Daedalus", tenGoc: "Buriza-do Kyanon", icon: "💥", mua: 5750, ban: 2875, file: "Burizadokyanon.jpg", mota: "+81 sát thương, 20% cơ hội chí mạng 2,5 lần." },
  { ten: "Skadi", tenGoc: "Eye of Skadi", icon: "🧊", mua: 5950, ban: 2975, file: "Eyeofskadi.jpg", mota: "+25 tất cả chỉ số, +200 máu, +150 mana; đòn đánh làm chậm 30% tốc chạy và 20% tốc đánh của mục tiêu (Orb)." },
  { ten: "Butterfly", icon: "🦋", mua: 6000, ban: 3000, file: "Butterfly.jpg", mota: "+30 Nhanh nhẹn, +30 sát thương, +30% tốc đánh, +30% né đòn." },
  { ten: "Satanic", icon: "🩸", mua: 6150, ban: 3075, file: "Satanic.jpg", mota: "+25 Sức mạnh, +20 sát thương, +5 giáp, 25% hút máu (Orb); kích hoạt +175% hút máu trong 3,5 giây." },
  { ten: "Divine Rapier", icon: "⚔️", mua: 6200, ban: 3100, file: "Divinerapier.jpg", mota: "+250 sát thương. Rơi ra khỏi tay khi chết — con dao hai lưỡi." },
  { ten: "Aghanim's Scepter", icon: "👑", mua: 4200, ban: 2100, file: "Aghanimsscepter.jpg", mota: "+10 tất cả chỉ số, +200 máu, +150 mana; nâng cấp ulti cho khoảng 30 tướng (Zeus, Lina, Lion, Pudge, Invoker, Juggernaut, Crystal Maiden, Sand King, Faceless Void...)." },

  // ===== Dagon & Necronomicon (nhiều cấp) =====
  { ten: "Dagon 1", icon: "🔺", mua: 2805, ban: 1402, file: "Dagon.jpg", mota: "+13 Phép thuật, +9 sát thương, +3 tất cả chỉ số; kích hoạt gây 400 sát thương lên một mục tiêu." },
  { ten: "Dagon 2", icon: "🔺", mua: 4105, ban: 2052, file: "Dagon.jpg", mota: "+13 Phép thuật, +9 sát thương, +3 tất cả chỉ số; kích hoạt gây 500 sát thương lên một mục tiêu." },
  { ten: "Dagon 3", icon: "🔺", mua: 5405, ban: 2702, file: "Dagon.jpg", mota: "+13 Phép thuật, +9 sát thương, +3 tất cả chỉ số; kích hoạt gây 600 sát thương lên một mục tiêu." },
  { ten: "Dagon 4", icon: "🔺", mua: 6705, ban: 3352, file: "Dagon.jpg", mota: "+13 Phép thuật, +9 sát thương, +3 tất cả chỉ số; kích hoạt gây 700 sát thương lên một mục tiêu." },
  { ten: "Dagon 5", icon: "🔺", mua: 8005, ban: 4002, file: "Dagon.jpg", mota: "+13 Phép thuật, +9 sát thương, +3 tất cả chỉ số; kích hoạt gây 800 sát thương lên một mục tiêu." },
  { ten: "Necronomicon 1", icon: "📕", mua: 2700, ban: 1350, file: "Necronomicon.jpg", mota: "+15 Phép thuật, +6 Sức mạnh; kích hoạt triệu hồi 2 quỷ có kỹ năng riêng." },
  { ten: "Necronomicon 2", icon: "📕", mua: 3950, ban: 1975, file: "Necronomicon.jpg", mota: "+15 Phép thuật, +6 Sức mạnh; kích hoạt triệu hồi 2 quỷ mạnh hơn." },
  { ten: "Necronomicon 3", icon: "📕", mua: 5200, ban: 2600, file: "Necronomicon.jpg", mota: "+15 Phép thuật, +6 Sức mạnh; kích hoạt triệu hồi 2 quỷ mạnh nhất, phát hiện được đơn vị tàng hình." },

  // ===== Đồ đặc biệt (Roshan) =====
  { ten: "Aegis of the Immortal", icon: "🏆", mua: null, ban: null, file: "Aegisoftheimmortal.jpg", mota: "Hồi sinh tướng ngay tại chỗ chết sau vài giây. Nhận được khi hạ Roshan." },
  { ten: "Cheese", icon: "🧀", mua: null, ban: 500, file: "Cheese.jpg", mota: "Hồi ngay 2500 máu và 1000 mana. Nhận được khi hạ Roshan." },
  { ten: "Ghost Scepter", icon: "👻", mua: 1600, ban: 800, file: "Ghostscepter.jpg", mota: "+7 tất cả chỉ số; kích hoạt sang thể phi vật chất 4 giây — không đánh và không bị đánh, nhưng nhận thêm 44% sát thương phép." }
];

// Tra cứu nhanh theo tên
const ITEM_MAP = {};
ITEMS.forEach(it => { ITEM_MAP[it.ten] = it; });

function timItem(ten) { return ITEM_MAP[ten] || null; }
function anhItem(ten) {
  const it = ITEM_MAP[ten];
  return it ? `${ITEM_IMG_BASE}/${it.file}` : "";
}

// Công thức ghép đồ. Nguồn không có bảng này nên em tự dựng, NHƯNG kiểm được bằng
// phép cộng: tổng giá các món thành phần + giá giấy ghép = đúng giá món cuối.
// Giá giấy ghép được app tự tính ra (giá món cuối trừ tổng thành phần), nên nếu
// danh sách thành phần sai thì con số hiện ra sẽ vô lý (âm) và lộ ngay.
// `chuaChac: true` = công thức em không dám chắc.
const CONG_THUC = {
  // --- Đồ nhỏ ---
  "Wraith Band": { tu: ["Circlet of Nobility", "Slippers of Agility"] },
  "Bracer": { tu: ["Circlet of Nobility", "Gauntlets of Ogre Strength"] },
  "Null Talisman": { tu: ["Circlet of Nobility", "Mantle of Intelligence"] },
  "Magic Wand": { tu: ["Magic Stick", "Branch", "Branch"] },
  "Poor Man's Shield": { tu: ["Stout Shield", "Slippers of Agility"] },
  "Ring of Basilius": { tu: ["Ring of Protection", "Sobi Mask"] },
  "Soul Ring": { tu: ["Ring of Regeneration", "Sobi Mask"] },
  "Headdress of Rejuvenation": { tu: ["Ring of Regeneration", "Circlet of Nobility"] },
  "Natherezim Buckler": { tu: ["Chainmail", "Circlet of Nobility"] },
  "Urn of Shadows": { tu: ["Sobi Mask", "Gauntlets of Ogre Strength", "Gauntlets of Ogre Strength"] },
  "Perseverance": { tu: ["Ring of Health", "Void Stone"] },
  "Oblivion Staff": { tu: ["Quarterstaff", "Robe of the Magi", "Sobi Mask"] },

  // --- Giày ---
  "Power Treads": { tu: ["Boots of Speed", "Gloves of Haste", "Belt of Giant Strength"] },
  "Phase Boots": { tu: ["Boots of Speed", "Blades of Attack", "Blades of Attack"] },
  "Arcane Boots": { tu: ["Boots of Speed", "Energy Booster"] },
  "Boots of Travel": { tu: ["Boots of Speed"] },

  // --- Tầm trung ---
  "Vanguard": { tu: ["Ring of Health", "Vitality Booster", "Stout Shield"] },
  "Hood of Defiance": { tu: ["Ring of Health", "Planeswalker's Cloak"] },
  "Blade Mail": { tu: ["Broadsword", "Chainmail", "Robe of the Magi"] },
  "Force Staff": { tu: ["Staff of Wizardry", "Ring of Regeneration"] },
  "Mekansm": { tu: ["Headdress of Rejuvenation", "Natherezim Buckler"] },
  "Vladmir's Offering": { tu: ["Ring of Basilius", "Mask of Death"] },
  "Crystalys": { tu: ["Blades of Attack", "Broadsword"] },
  "Sange": { tu: ["Ogre Axe", "Belt of Giant Strength"] },
  "Yasha": { tu: ["Blade of Alacrity", "Boots of Elvenskin"] },
  "Eul's Scepter of Divinity": { tu: ["Staff of Wizardry", "Void Stone"] },
  "Cranium Basher": { tu: ["Mithril Hammer", "Belt of Giant Strength"] },
  "Lothar's Edge": { tu: ["Claymore", "Quarterstaff"] },
  "Mask of Madness": { tu: ["Mask of Death", "Quarterstaff"] },
  "Hand of Midas": { tu: ["Gloves of Haste"] },
  "Helm of the Dominator": { tu: ["Helm of Iron Will", "Mask of Death"] },
  "Armlet of Mordiggian": { tu: ["Helm of Iron Will", "Blades of Attack", "Gloves of Haste"] },
  "Khadgar's Pipe of Insight": { tu: ["Hood of Defiance", "Headdress of Rejuvenation"] },
  "Soul Booster": { tu: ["Point Booster", "Energy Booster", "Vitality Booster"] },
  "Maelstrom": { tu: ["Mithril Hammer", "Gloves of Haste"], chuaChac: true },
  "Diffusal Blade": { tu: ["Blade of Alacrity", "Robe of the Magi"], chuaChac: true },

  // --- Đồ mạnh ---
  "Black King Bar": { tu: ["Ogre Axe", "Mithril Hammer"] },
  "Battle Fury": { tu: ["Broadsword", "Claymore", "Perseverance"] },
  "Desolator": { tu: ["Mithril Hammer", "Mithril Hammer"] },
  "Sange and Yasha": { tu: ["Sange", "Yasha"] },
  "Shiva's Guard": { tu: ["Plate Mail", "Mystic Staff"] },
  "Manta Style": { tu: ["Yasha", "Ultimate Orb"] },
  "Orchid Malevolence": { tu: ["Oblivion Staff", "Oblivion Staff"] },
  "Bloodstone": { tu: ["Soul Booster", "Perseverance"] },
  "Radiance": { tu: ["Sacred Relic"] },
  "Linken's Sphere": { tu: ["Perseverance", "Ultimate Orb"] },
  "Refresher Orb": { tu: ["Perseverance", "Perseverance"] },
  "Monkey King Bar": { tu: ["Demon Edge", "Javelin", "Javelin"] },
  "Assault Cuirass": { tu: ["Plate Mail", "Hyperstone", "Chainmail"] },
  "Scythe of Vyse": { tu: ["Mystic Staff", "Ultimate Orb", "Void Stone"] },
  "Heart of Tarrasque": { tu: ["Messerschmidt's Reaver", "Vitality Booster"] },
  "Mjollnir": { tu: ["Maelstrom", "Hyperstone"] },
  "Daedalus": { tu: ["Crystalys", "Demon Edge"] },
  "Skadi": { tu: ["Ultimate Orb", "Ultimate Orb", "Point Booster"] },
  "Butterfly": { tu: ["Talisman of Evasion", "Eaglehorn", "Quarterstaff"] },
  "Satanic": { tu: ["Messerschmidt's Reaver", "Mask of Death", "Helm of Iron Will"] },
  "Divine Rapier": { tu: ["Sacred Relic", "Demon Edge"] },
  "Aghanim's Scepter": { tu: ["Point Booster", "Staff of Wizardry", "Ogre Axe", "Blade of Alacrity"] },
  "Ethereal Blade": { tu: ["Ghost Scepter", "Messerschmidt's Reaver"], chuaChac: true },
  "Dagon 1": { tu: ["Null Talisman", "Staff of Wizardry"] },
  "Necronomicon 1": { tu: ["Staff of Wizardry", "Belt of Giant Strength"] },

  // Nâng cấp theo cấp — mỗi cấp cộng thêm đúng một khoản cố định,
  // Dagon +1300/cấp và Necronomicon +1250/cấp (khớp đều qua cả 4 cấp).
  "Dagon 2": { tu: ["Dagon 1"] },
  "Dagon 3": { tu: ["Dagon 2"] },
  "Dagon 4": { tu: ["Dagon 3"] },
  "Dagon 5": { tu: ["Dagon 4"] },
  "Necronomicon 2": { tu: ["Necronomicon 1"] },
  "Necronomicon 3": { tu: ["Necronomicon 2"] }
};

// Giá giấy ghép = giá món cuối - tổng giá thành phần. Âm nghĩa là công thức sai.
function giayGhep(ten) {
  const ct = CONG_THUC[ten], it = ITEM_MAP[ten];
  if (!ct || !it || it.mua === null) return null;
  const tong = ct.tu.reduce((s, t) => s + ((ITEM_MAP[t] && ITEM_MAP[t].mua) || 0), 0);
  return it.mua - tong;
}
