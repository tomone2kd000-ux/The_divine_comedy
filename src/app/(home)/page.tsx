import Link from 'next/link';
import {
  BookOpen,
  ArrowRight,
  GitBranch,
  Compass,
  Flame,
  Feather,
  Sun,
  Check,
} from 'lucide-react';

export default function HomePage() {
  const parts = [
    {
      title: 'Giới Thiệu & Bối Cảnh Lịch Sử',
      desc: 'Tiểu sử Dante Alighieri, bối cảnh Florence thế kỷ XIV & nghệ thuật biểu tượng.',
      items: [
        { num: '00', title: 'Hướng Dẫn Đọc & Bối Cảnh Thần Khúc', href: '/docs/huong-dan-doc-va-bco-canh' },
        { num: '00b', title: 'Phụ Lục: Niên Biểu Cuộc Đời & Sơ Đồ 3 Cõi', href: '/docs/phu-luc-tieu-su-va-so-do-ba-coi' },
      ],
    },
    {
      title: 'Phần I: Inferno (Địa Ngục)',
      desc: 'Hành trình vượt qua 9 Tầng Địa Ngục cùng nhà thơ Virgil.',
      items: [
        { num: '01', title: 'Tổng Quan 9 Tầng Địa Ngục', href: '/docs/phan-1-inferno-dia-nguc' },
        { num: '02', title: 'Canto I - Nửa Đời Rừng Rậm & Ba Cánh Thú', href: '/docs/phan-1-inferno-dia-nguc/01-canto-1-nua-doi-giao-lo' },
        { num: '03', title: 'Canto II & III - Cổng Địa Ngục & Sông Acheron', href: '/docs/phan-1-inferno-dia-nguc/02-canto-2-3-cong-dia-nguc' },
        { num: '04', title: 'Tầng 1 đến Tầng 5 - Limbo, Dục Vọng & Phẫn Nộ', href: '/docs/phan-1-inferno-dia-nguc/03-tang-1-5-limbo-duc-vong-phan-no' },
        { num: '05', title: 'Tầng 6 & 7 - Thành Dis & Các Vòng Bạo Lực', href: '/docs/phan-1-inferno-dia-nguc/04-tang-6-7-thanh-dis-va-bao-luc' },
        { num: '06', title: 'Tầng 8 - 10 Hào Đá Malebolge', href: '/docs/phan-1-inferno-dia-nguc/05-tang-8-10-hao-da-malebolge' },
        { num: '07', title: 'Tầng 9 - Hồ Băng Cocytus & Lucifer', href: '/docs/phan-1-inferno-dia-nguc/06-tang-9-ho-bang-cocytus-lucifer' },
      ],
    },
    {
      title: 'Phần II: Purgatorio (Tĩnh Ngục)',
      desc: 'Hành trình leo Núi Tĩnh Ngục thanh tẩy 7 Mối Tội Đầu.',
      items: [
        { num: '08', title: 'Tổng Quan Núi Tĩnh Ngục', href: '/docs/phan-2-purgatorio-tinh-nguc' },
        { num: '09', title: 'Bờ Biển & Tiền Tĩnh Ngục (Ante-Purgatory)', href: '/docs/phan-2-purgatorio-tinh-nguc/01-bo-bien-va-tien-tinh-nguc' },
        { num: '10', title: '7 Tầng Sám Hối Trên Núi Tĩnh Ngục', href: '/docs/phan-2-purgatorio-tinh-nguc/02-7-tang-sam-hoi' },
        { num: '11', title: 'Vườn Địa Bàng & Cuộc Gặp Beatrice', href: '/docs/phan-2-purgatorio-tinh-nguc/03-dia-bang-va-beatrice' },
      ],
    },
    {
      title: 'Phần III: Paradiso (Thiên Đường)',
      desc: 'Thăng hoa qua 9 Tầng Thiên Đường đến Cõi Hồng Bông (Empyrean).',
      items: [
        { num: '12', title: 'Tổng Quan 9 Tầng Thiên Đường', href: '/docs/phan-3-paradiso-thien-duong' },
        { num: '13', title: 'Các Tầng Hành Tinh & Thiên Thần', href: '/docs/phan-3-paradiso-thien-duong/01-cac-tang-hanh-tinh' },
        { num: '14', title: 'Sao Cố Định & Động Cơ Ban Đầu (Primum Mobile)', href: '/docs/phan-3-paradiso-thien-duong/02-sao-co-dinh-va-primum-mobile' },
        { num: '15', title: 'Cõi Empyrean & Trải Nghiệm Ánh Sáng Thượng Đế', href: '/docs/phan-3-paradiso-thien-duong/03-coi-empyrean-anh-sang-toi-cao' },
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-medium text-zinc-700">
              <Feather className="w-3.5 h-3.5" />
              <span>Kiệt Tác Văn Học Thế Giới</span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.15]">
              The Divine Comedy <br />
              <span className="text-zinc-900 font-bold">Thần Khúc</span>
            </h1>

            <p className="text-base sm:text-lg text-zinc-600 font-normal leading-relaxed max-w-xl">
              Hành trình vĩ đại của Dante Alighieri qua ba cõi Địa Ngục (Inferno), Tĩnh Ngục (Purgatorio) và Thiên Đường (Paradiso). Bản dịch & phân tích chú giải chi tiết.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/docs"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-white text-sm font-medium transition-all shadow-sm"
              >
                <BookOpen className="w-4 h-4" />
                <span>Khám Phá Tài Liệu</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>

              <a
                href="https://github.com/tomone2kd000-ux/the-divine-comedy"
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
                <span>Phân tích & Chú giải chi tiết</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-zinc-900" />
                <span>Đủ 3 Phần: Inferno, Purgatorio, Paradiso</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-zinc-900" />
                <span>Chuẩn Fumadocs Web Reader</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-zinc-900" />
                <span>Nội dung thoát ý & mượt mà</span>
              </div>
            </div>
          </div>

          {/* Right Hero Column: Minimalist Book Info */}
          <div className="md:col-span-5 flex justify-center">
            <div className="relative max-w-xs sm:max-w-sm w-full p-6 bg-zinc-50 rounded-2xl border border-zinc-200 shadow-sm space-y-4">
              <div className="border-b border-zinc-200 pb-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-zinc-400">Tác giả & Dịch giả</span>
                <h3 className="text-lg font-bold text-zinc-900 mt-1">Dante Alighieri</h3>
                <p className="text-xs text-zinc-500">Bản dịch tiếng Anh: John Ciardi</p>
              </div>

              <div className="space-y-3 text-xs text-zinc-600">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">Thể loại:</span>
                  <span className="font-medium text-zinc-800">Trường ca Thần học / Triết học</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">Cấu trúc:</span>
                  <span className="font-medium text-zinc-800">100 Khúc (Cantos) - Terza Rima</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500">Người dẫn đường:</span>
                  <span className="font-medium text-zinc-800">Virgil & Beatrice</span>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="/docs/huong-dan-doc-va-bco-canh"
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-zinc-900 text-white text-xs font-medium hover:bg-zinc-800 transition-all"
                >
                  <span>Bắt đầu đọc Hướng dẫn</span>
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Section */}
      <section className="border-t border-zinc-100 bg-zinc-50/50 py-16">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-10 max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
              Cấu Trúc Ba Cõi Tâm Linh
            </h2>
            <p className="text-sm text-zinc-500 mt-1">
              Bản đồ hành trình từ bóng tối tội lỗi đến ánh sáng linh thiêng Thượng Đế.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4">
            <div className="p-5 rounded-xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-colors">
              <Flame className="w-5 h-5 text-zinc-900 mb-3" />
              <h3 className="text-sm font-semibold text-zinc-900 mb-1">I. Inferno (Địa Ngục)</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                9 Tầng Địa Ngục xoáy trôn ốc hình phễu lòng đất. Nơi trừng phạt các linh hồn phạm tội theo nguyên tắc Contrapasso.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-colors">
              <Compass className="w-5 h-5 text-zinc-900 mb-3" />
              <h3 className="text-sm font-semibold text-zinc-900 mb-1">II. Purgatorio (Tĩnh Ngục)</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                Ngọn núi Tĩnh Ngục ở Nam Bán Cầu. Nơi các linh hồn được thanh tẩy qua 7 tầng sám hối tương ứng 7 Mối Tội Đầu.
              </p>
            </div>

            <div className="p-5 rounded-xl bg-white border border-zinc-200/80 shadow-xs hover:border-zinc-300 transition-colors">
              <Sun className="w-5 h-5 text-zinc-900 mb-3" />
              <h3 className="text-sm font-semibold text-zinc-900 mb-1">III. Paradiso (Thiên Đường)</h3>
              <p className="text-xs text-zinc-500 leading-relaxed">
                9 Tầng Thiên Đường xoay quanh Trái Đất và cõi Empyrean vô tận. Nơi Beatrice dẫn đường đến Ánh Sáng Tối Cao.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters Roadmap */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900">
            Danh Mục Bài Học & Phân Phối Căn Bản
          </h2>
          <p className="text-sm text-zinc-500 mt-1">
            Chọn các chương bên dưới để đi thẳng tới bài đọc chi tiết.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {parts.map((group, idx) => (
            <div key={idx} className="p-5 rounded-xl border border-zinc-200 bg-white">
              <h3 className="text-base font-semibold text-zinc-900 mb-1">{group.title}</h3>
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
            The Divine Comedy - Thần Khúc (Fumadocs Edition)
          </div>
          <div className="flex items-center gap-4">
            <Link href="/docs" className="hover:text-zinc-900 transition-colors">
              Đọc Sách
            </Link>
            <a
              href="https://github.com/tomone2kd000-ux/the-divine-comedy"
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
