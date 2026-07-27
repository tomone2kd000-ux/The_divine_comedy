import Image from 'next/image';
import Link from 'next/link';
import {
  BookOpen,
  ArrowRight,
  GitBranch,
  Flame,
  Compass,
  Sun,
  Scroll,
  Check,
} from 'lucide-react';

export default function HomePage() {
  const chapters = [
    {
      part: 'Phần I: Giới Thiệu & Bối Cảnh Lịch Sử',
      desc: 'Tiểu sử Dante Alighieri, bối cảnh Florence thế kỷ XIV & nghệ thuật biểu tượng.',
      items: [
        { num: '00', title: 'Hướng Dẫn Đọc & Bối Cảnh Thần Khúc', href: '/docs/huong-dan-doc-va-bco-canh' },
        { num: '00b', title: 'Phụ Lục: Niên Biểu Cuộc Đời & Sơ Đồ 3 Cõi', href: '/docs/phu-luc-tieu-su-va-so-do-ba-coi' },
      ],
    },
    {
      part: 'Phần II: Inferno (Địa Ngục - Full 34 Cantos)',
      desc: 'Hành trình vượt qua 9 Tầng Địa Ngục cùng nhà thơ Virgil.',
      items: [
        { num: '01', title: 'Tổng Quan 9 Tầng Địa Ngục', href: '/docs/phan-1-inferno-dia-nguc' },
        { num: '02', title: 'Canto 1 đến Canto 5 (Rừng tối, Cổng 地 Ngục & Limbo)', href: '/docs/phan-1-inferno-dia-nguc/01-canto-1-den-5' },
        { num: '03', title: 'Canto 6 đến Canto 10 (Phàm ăn, Tham lam, Sông Styx & Dis)', href: '/docs/phan-1-inferno-dia-nguc/02-canto-6-den-10' },
        { num: '04', title: 'Canto 11 đến Canto 15 (Tầng Dị giáo & Bạo lực sông máu)', href: '/docs/phan-1-inferno-dia-nguc/03-canto-11-den-15' },
        { num: '05', title: 'Canto 16 đến Canto 20 (Rừng tự sát, Quái thú Geryon & Malebolge)', href: '/docs/phan-1-inferno-dia-nguc/04-canto-16-den-20' },
        { num: '06', title: 'Canto 21 đến Canto 25 (Hào nhựa đường, Áo chì & Rắn độc)', href: '/docs/phan-1-inferno-dia-nguc/05-canto-21-den-25' },
        { num: '07', title: 'Canto 26 đến Canto 30 (Ngọn lửa Ulysses & Kẻ chia rẽ)', href: '/docs/phan-1-inferno-dia-nguc/06-canto-26-den-30' },
        { num: '08', title: 'Canto 31 đến Canto 35 (Hồ băng Cocytus & Lucifer 3 mặt)', href: '/docs/phan-1-inferno-dia-nguc/07-canto-31-den-35' },
      ],
    },
    {
      part: 'Phần III: Purgatorio (Tĩnh Ngục - Full 33 Cantos)',
      desc: 'Hành trình leo Núi Tĩnh Ngục thanh tẩy 7 Mối Tội Đầu.',
      items: [
        { num: '09', title: 'Tổng Quan Núi Tĩnh Ngục', href: '/docs/phan-2-purgatorio-tinh-nguc' },
        { num: '10', title: 'Canto 1 đến Canto 5 (Bờ biển Tĩnh Ngục & Cato xứ Utica)', href: '/docs/phan-2-purgatorio-tinh-nguc/01-canto-1-den-5' },
        { num: '11', title: 'Canto 6 đến Canto 10 (Tiền Tĩnh Ngục & Cổng Tĩnh Ngục)', href: '/docs/phan-2-purgatorio-tinh-nguc/02-canto-6-den-10' },
        { num: '12', title: 'Canto 11 đến Canto 15 (Tầng Kiêu ngạo, Đố đố & Phẫn nộ)', href: '/docs/phan-2-purgatorio-tinh-nguc/03-canto-11-den-15' },
        { num: '13', title: 'Canto 16 đến Canto 20 (Tầng Lười biếng, Tham lam & Hoang phí)', href: '/docs/phan-2-purgatorio-tinh-nguc/04-canto-16-den-20' },
        { num: '14', title: 'Canto 21 đến Canto 25 (Nhà thơ Statius & Tầng Phàm ăn)', href: '/docs/phan-2-purgatorio-tinh-nguc/05-canto-21-den-25' },
        { num: '15', title: 'Canto 26 đến Canto 29 (Bức tường lửa & Vườn Địa Bàng)', href: '/docs/phan-2-purgatorio-tinh-nguc/06-canto-26-den-29' },
        { num: '16', title: 'Canto 30 đến Canto 33 (Cuộc gặp Beatrice & Tắm 2 dòng sông)', href: '/docs/phan-2-purgatorio-tinh-nguc/07-canto-30-den-33' },
      ],
    },
    {
      part: 'Phần IV: Paradiso (Thiên Đường - Full 33 Cantos)',
      desc: 'Thăng hoa qua 9 Tầng Thiên Đường đến Cõi Hồng Bông (Empyrean).',
      items: [
        { num: '17', title: 'Tổng Quan 9 Tầng Thiên Đường', href: '/docs/phan-3-paradiso-thien-duong' },
        { num: '18', title: 'Canto 1 đến Canto 5 (Tầng Mặt Trăng & Thủy Tinh)', href: '/docs/phan-3-paradiso-thien-duong/01-canto-1-den-5' },
        { num: '19', title: 'Canto 6 đến Canto 10 (Tầng Kim Tinh & Thái Dương)', href: '/docs/phan-3-paradiso-thien-duong/02-canto-6-den-10' },
        { num: '20', title: 'Canto 11 đến Canto 15 (Thánh Thomas Aquinas & Hỏa Tinh)', href: '/docs/phan-3-paradiso-thien-duong/03-canto-11-den-15' },
        { num: '21', title: 'Canto 16 đến Canto 20 (Cụ tổ Cacciaguida & Mộc Tinh)', href: '/docs/phan-3-paradiso-thien-duong/04-canto-16-den-20' },
        { num: '22', title: 'Canto 21 đến Canto 25 (Thang Vàng Saturn & Khảo sát 3 Đức Tin)', href: '/docs/phan-3-paradiso-thien-duong/05-canto-25-den-29' },
        { num: '23', title: 'Canto 30 đến Canto 33 (Hoa Hồng Bạch & Ánh Sáng Tối Cao)', href: '/docs/phan-3-paradiso-thien-duong/06-canto-30-den-32' },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-white text-zinc-900 selection:bg-zinc-900 selection:text-white font-sans antialiased">
      {/* Main Hero Section */}
      <section className="max-w-5xl mx-auto px-6 pt-12 pb-16 md:pt-16 md:pb-24">
        <div className="grid md:grid-cols-12 gap-10 items-center">
          {/* Left Hero Column */}
          <div className="md:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.15]">
              The Divine Comedy <br />
              <span className="text-zinc-900 font-bold">Thần Khúc</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-xl">
              Trường ca vĩ đại nhất của Dante Alighieri - Đầy đủ 100 Khúc thơ (Cantos) nguyên tác Terza Rima & hệ thống chú giải chi tiết của John Ciardi.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium transition-all shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>Đọc Toàn Văn Ngay</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="https://github.com/tomone2kd000-ux/The_divine_comedy"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-zinc-700 hover:text-zinc-900 text-sm font-medium transition-all"
              >
                <GitBranch className="w-4 h-4 text-zinc-500" />
                <span>GitHub Repo</span>
              </a>
            </div>

            {/* Key Features Quick List */}
            <div className="grid grid-cols-2 gap-y-2 gap-x-4 pt-6 border-t border-zinc-100 text-xs text-zinc-600">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-zinc-900" />
                <span>Đủ 100 Khúc Thơ (Cantos) Nguyên Tác</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-zinc-900" />
                <span>Chú Giải Chi Tiết John Ciardi</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-zinc-900" />
                <span>Kindle Reader & Phông Sách Lora</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-zinc-900" />
                <span>Miễn phí 100%</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Clean Minimal Book Cover */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative max-w-xs sm:max-w-sm w-full p-2 bg-white rounded-2xl border border-zinc-200 shadow-xl shadow-zinc-200/50">
              <div className="relative overflow-hidden rounded-xl bg-zinc-50">
                <Image
                  src="/cover.jpeg"
                  alt="The Divine Comedy Book Cover"
                  width={600}
                  height={800}
                  priority
                  className="rounded-xl w-full h-auto object-cover"
                />
              </div>

              <div className="mt-3 px-2 py-1.5 flex items-center justify-between text-xs text-zinc-500">
                <span className="font-medium text-zinc-700">Tác giả: Dante Alighieri</span>
                <span className="px-2 py-0.5 rounded bg-zinc-100 text-zinc-600 font-mono text-[10px]">Vietnamese Edition</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Minimal Feature Section */}
      <section className="border-t border-zinc-100 bg-zinc-50/50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Cấu Trúc Cốt Lõi 3 Cõi Tâm Linh
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Bản đồ hành trình từ bóng tối tội lỗi đến ánh sáng linh thiêng Thượng Đế.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-colors">
              <Flame className="w-5 h-5 text-zinc-900 mb-3" />
              <h3 className="text-sm font-semibold text-zinc-900 mb-1">Inferno (34 Cantos)</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Toàn văn 34 Khúc thơ Địa Ngục. Trừng phạt tội lỗi theo nguyên tắc Contrapasso.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-colors">
              <Compass className="w-5 h-5 text-zinc-900 mb-3" />
              <h3 className="text-sm font-semibold text-zinc-900 mb-1">Purgatorio (33 Cantos)</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Toàn văn 33 Khúc thơ Tĩnh Ngục thanh tẩy 7 Mối Tội Đầu trước khi vào Thiên Đường.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-colors">
              <Sun className="w-5 h-5 text-zinc-900 mb-3" />
              <h3 className="text-sm font-semibold text-zinc-900 mb-1">Paradiso (33 Cantos)</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Toàn văn 33 Khúc thơ Thiên Đường. Nơi Beatrice dẫn đường đến Ánh Sáng Tối Cao.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-colors">
              <Scroll className="w-5 h-5 text-zinc-900 mb-3" />
              <h3 className="text-sm font-semibold text-zinc-900 mb-1">Phụ Lục & Chú Giải</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Niên biểu Dante, chú giải John Ciardi, bối cảnh lịch sử & bảng thuật ngữ.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapter Roadmap List (With Exact Routes) */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Danh Mục Đầy Đủ 100 Khúc Thơ Nguyên Tác
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Chọn nhóm Canto bên dưới để đọc toàn văn thơ và chú giải tương ứng.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {chapters.map((group, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-zinc-200 bg-white">
              <h3 className="text-base font-semibold text-zinc-900 mb-1">{group.part}</h3>
              <p className="text-xs text-zinc-500 mb-4">{group.desc}</p>

              <div className="space-y-2">
                {group.items.map((item, itemIdx) => (
                  <Link
                    key={itemIdx}
                    href={item.href}
                    className="group flex items-center justify-between p-2.5 rounded-lg bg-zinc-50 hover:bg-zinc-100 border border-zinc-100 transition-all text-xs"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[11px] text-zinc-400 font-medium">
                        {item.num}
                      </span>
                      <span className="font-medium text-zinc-800 group-hover:text-zinc-900">
                        {item.title}
                      </span>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-900 group-hover:translate-x-0.5 transition-all" />
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Clean Minimal Footer */}
      <footer className="border-t border-zinc-100 py-10 bg-zinc-50/50 text-center text-xs text-zinc-500">
        <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            The Divine Comedy - Thần Khúc (Complete 100 Cantos Edition)
          </div>
          <div className="flex items-center gap-4">
            <Link href="/docs" className="hover:text-zinc-900 transition-colors">
              Đọc Sách
            </Link>
            <a
              href="https://github.com/tomone2kd000-ux/The_divine_comedy"
              target="_blank"
              rel="noreferrer"
              className="hover:text-zinc-900 transition-colors"
            >
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
