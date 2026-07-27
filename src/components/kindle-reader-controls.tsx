'use client';

import { useState, useEffect } from 'react';
import { BookOpen, Type, Palette, RotateCcw } from 'lucide-react';

export function KindleReaderControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'default' | 'sepia' | 'warm' | 'black'>('default');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
  const [fontFamily, setFontFamily] = useState<'sans' | 'serif'>('sans');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('kindle-theme') as any) || 'default';
    const savedSize = (localStorage.getItem('kindle-font-size') as any) || 'md';
    const savedFamily = (localStorage.getItem('kindle-font-family') as any) || 'sans';

    setTheme(savedTheme);
    setFontSize(savedSize);
    setFontFamily(savedFamily);

    applyTheme(savedTheme);
    applyFontSize(savedSize);
    applyFontFamily(savedFamily);
  }, []);

  const applyTheme = (newTheme: string) => {
    if (newTheme === 'default') {
      document.documentElement.removeAttribute('data-kindle-theme');
    } else {
      document.documentElement.setAttribute('data-kindle-theme', newTheme);
    }
  };

  const applyFontSize = (newSize: string) => {
    document.documentElement.setAttribute('data-kindle-font-size', newSize);
  };

  const applyFontFamily = (newFamily: string) => {
    document.documentElement.setAttribute('data-kindle-font-family', newFamily);
  };

  const handleThemeChange = (newTheme: 'default' | 'sepia' | 'warm' | 'black') => {
    setTheme(newTheme);
    localStorage.setItem('kindle-theme', newTheme);
    applyTheme(newTheme);
  };

  const handleFontSizeChange = (newSize: 'sm' | 'md' | 'lg' | 'xl') => {
    setFontSize(newSize);
    localStorage.setItem('kindle-font-size', newSize);
    applyFontSize(newSize);
  };

  const handleFontFamilyChange = (newFamily: 'sans' | 'serif') => {
    setFontFamily(newFamily);
    localStorage.setItem('kindle-font-family', newFamily);
    applyFontFamily(newFamily);
  };

  const resetAll = () => {
    handleThemeChange('default');
    handleFontSizeChange('md');
    handleFontFamilyChange('sans');
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 bg-white hover:bg-zinc-50 text-xs font-medium text-zinc-700 shadow-xs transition-all cursor-pointer"
        title="Chế độ đọc sách Kindle"
      >
        <BookOpen className="w-3.5 h-3.5 text-zinc-600" />
        <span>Kindle Reader</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 rounded-2xl bg-white p-4 shadow-xl border border-zinc-200 z-50 text-zinc-900 space-y-4 font-sans animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between border-b border-zinc-100 pb-2">
            <div className="flex items-center gap-2 font-semibold text-sm">
              <BookOpen className="w-4 h-4 text-zinc-700" />
              <span>Chế Độ Đọc Kindle</span>
            </div>
            <button
              onClick={resetAll}
              className="text-zinc-400 hover:text-zinc-700 p-1 rounded transition-colors"
              title="Đặt lại mặc định"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Color Scheme Picker */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
              <Palette className="w-3.5 h-3.5" />
              <span>Màu Nền Đọc Sách</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              <button
                onClick={() => handleThemeChange('default')}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border text-[11px] font-medium transition-all ${
                  theme === 'default'
                    ? 'border-zinc-900 bg-zinc-100 font-semibold ring-1 ring-zinc-900'
                    : 'border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                <span className="w-4 h-4 rounded-full border border-zinc-300 bg-white mb-1"></span>
                <span>Trắng</span>
              </button>

              <button
                onClick={() => handleThemeChange('sepia')}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border text-[11px] font-medium transition-all ${
                  theme === 'sepia'
                    ? 'border-amber-700 bg-amber-50 text-amber-950 ring-1 ring-amber-700'
                    : 'border-amber-200/60 bg-[#fbf0d9] text-amber-900 hover:opacity-90'
                }`}
              >
                <span className="w-4 h-4 rounded-full border border-amber-300 bg-[#fbf0d9] mb-1"></span>
                <span>Sepia</span>
              </button>

              <button
                onClick={() => handleThemeChange('warm')}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border text-[11px] font-medium transition-all ${
                  theme === 'warm'
                    ? 'border-amber-800 bg-amber-100 text-amber-950 ring-1 ring-amber-800'
                    : 'border-amber-200 bg-[#f4ebd0] text-amber-900 hover:opacity-90'
                }`}
              >
                <span className="w-4 h-4 rounded-full border border-amber-300 bg-[#f4ebd0] mb-1"></span>
                <span>Giấy Ấm</span>
              </button>

              <button
                onClick={() => handleThemeChange('black')}
                className={`flex flex-col items-center justify-center p-2 rounded-xl border text-[11px] font-medium transition-all ${
                  theme === 'black'
                    ? 'border-zinc-400 bg-zinc-900 text-white ring-1 ring-zinc-400'
                    : 'border-zinc-800 bg-[#050505] text-zinc-300 hover:opacity-90'
                }`}
              >
                <span className="w-4 h-4 rounded-full border border-zinc-700 bg-black mb-1"></span>
                <span>OLED</span>
              </button>
            </div>
          </div>

          {/* Font Size Adjuster */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs text-zinc-500 font-medium">
              <Type className="w-3.5 h-3.5" />
              <span>Cỡ Chữ Đọc</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 bg-zinc-100 p-1 rounded-xl">
              {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => handleFontSizeChange(size)}
                  className={`py-1 rounded-lg text-xs font-medium transition-all ${
                    fontSize === size
                      ? 'bg-white shadow-xs text-zinc-900 font-bold'
                      : 'text-zinc-600 hover:text-zinc-900'
                  }`}
                >
                  {size === 'sm' ? 'Nhỏ' : size === 'md' ? 'Vừa' : size === 'lg' ? 'Lớn' : 'Rất lớn'}
                </button>
              ))}
            </div>
          </div>

          {/* Font Family Selector */}
          <div className="space-y-1.5">
            <div className="text-xs text-zinc-500 font-medium">Phông Chữ Văn Bản</div>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => handleFontFamilyChange('sans')}
                className={`py-1.5 px-3 rounded-xl border text-xs font-sans transition-all ${
                  fontFamily === 'sans'
                    ? 'border-zinc-900 bg-zinc-100 font-semibold'
                    : 'border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                Hiện đại (Sans)
              </button>
              <button
                onClick={() => handleFontFamilyChange('serif')}
                className={`py-1.5 px-3 rounded-xl border text-xs font-serif transition-all ${
                  fontFamily === 'serif'
                    ? 'border-zinc-900 bg-zinc-100 font-semibold'
                    : 'border-zinc-200 bg-white text-zinc-600 hover:bg-zinc-50'
                }`}
              >
                Sách Cổ (Serif)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
