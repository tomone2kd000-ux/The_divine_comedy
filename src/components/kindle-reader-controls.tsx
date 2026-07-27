'use client';

import { useState, useEffect } from 'react';
import { BookOpen, Type, Palette, RotateCcw } from 'lucide-react';

export function KindleReaderControls() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState<'cream' | 'warm' | 'parchment' | 'night' | 'black'>('cream');
  const [fontSize, setFontSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
  const [fontFamily, setFontFamily] = useState<'sans' | 'serif'>('serif');

  useEffect(() => {
    const savedTheme = (localStorage.getItem('kindle-theme') as any) || 'cream';
    const savedSize = (localStorage.getItem('kindle-font-size') as any) || 'md';
    const savedFamily = (localStorage.getItem('kindle-font-family') as any) || 'serif';

    setTheme(savedTheme);
    setFontSize(savedSize);
    setFontFamily(savedFamily);

    applyTheme(savedTheme);
    applyFontSize(savedSize);
    applyFontFamily(savedFamily);
  }, []);

  const applyTheme = (newTheme: string) => {
    document.documentElement.setAttribute('data-kindle-theme', newTheme);
  };

  const applyFontSize = (newSize: string) => {
    document.documentElement.setAttribute('data-kindle-font-size', newSize);
  };

  const applyFontFamily = (newFamily: string) => {
    document.documentElement.setAttribute('data-kindle-font-family', newFamily);
  };

  const handleThemeChange = (newTheme: 'cream' | 'warm' | 'parchment' | 'night' | 'black') => {
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
    handleThemeChange('cream');
    handleFontSizeChange('md');
    handleFontFamilyChange('serif');
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-amber-900/20 bg-amber-50/80 hover:bg-amber-100/80 text-xs font-medium text-amber-950 shadow-xs transition-all cursor-pointer"
        title="Bảng điều khiển đọc sách Kindle"
      >
        <BookOpen className="w-3.5 h-3.5 text-amber-900" />
        <span>Kindle Reader</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 rounded-2xl bg-[#faf7f0] p-4 shadow-xl border border-amber-900/15 z-50 text-amber-950 space-y-4 font-sans animate-in fade-in zoom-in-95 duration-150">
          <div className="flex items-center justify-between border-b border-amber-900/10 pb-2">
            <div className="flex items-center gap-2 font-semibold text-sm">
              <BookOpen className="w-4 h-4 text-amber-900" />
              <span>Chế Độ Giấy Đọc Sách</span>
            </div>
            <button
              onClick={resetAll}
              className="text-amber-700/60 hover:text-amber-900 p-1 rounded transition-colors"
              title="Đặt lại mặc định"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Color Scheme Picker */}
          <div className="space-y-1.5">
            <div className="flex items-center gap-1.5 text-xs text-amber-900/70 font-medium">
              <Palette className="w-3.5 h-3.5" />
              <span>Tone Màu Giấy & Ánh Sáng</span>
            </div>
            <div className="grid grid-cols-5 gap-1">
              <button
                onClick={() => handleThemeChange('cream')}
                className={`flex flex-col items-center justify-center p-1.5 rounded-xl border text-[10px] font-medium transition-all ${
                  theme === 'cream'
                    ? 'border-amber-800 bg-white font-bold ring-1 ring-amber-800 shadow-xs'
                    : 'border-amber-200 bg-[#fbf7ef] text-amber-900 hover:bg-white'
                }`}
              >
                <span className="w-4 h-4 rounded-full border border-amber-300 bg-[#fbf7ef] mb-1"></span>
                <span>Giấy Kem</span>
              </button>

              <button
                onClick={() => handleThemeChange('warm')}
                className={`flex flex-col items-center justify-center p-1.5 rounded-xl border text-[10px] font-medium transition-all ${
                  theme === 'warm'
                    ? 'border-amber-800 bg-[#f4ebd0] font-bold ring-1 ring-amber-800 shadow-xs'
                    : 'border-amber-200 bg-[#f4ebd0] text-amber-950 hover:opacity-90'
                }`}
              >
                <span className="w-4 h-4 rounded-full border border-amber-400 bg-[#f4ebd0] mb-1"></span>
                <span>Vàng Ấm</span>
              </button>

              <button
                onClick={() => handleThemeChange('parchment')}
                className={`flex flex-col items-center justify-center p-1.5 rounded-xl border text-[10px] font-medium transition-all ${
                  theme === 'parchment'
                    ? 'border-amber-900 bg-[#eee3c7] font-bold ring-1 ring-amber-900 shadow-xs'
                    : 'border-amber-300 bg-[#eee3c7] text-amber-950 hover:opacity-90'
                }`}
              >
                <span className="w-4 h-4 rounded-full border border-amber-400 bg-[#eee3c7] mb-1"></span>
                <span>Sách Cổ</span>
              </button>

              <button
                onClick={() => handleThemeChange('night')}
                className={`flex flex-col items-center justify-center p-1.5 rounded-xl border text-[10px] font-medium transition-all ${
                  theme === 'night'
                    ? 'border-amber-500 bg-[#1c1b18] text-amber-100 font-bold ring-1 ring-amber-500 shadow-xs'
                    : 'border-zinc-700 bg-[#1c1b18] text-amber-200 hover:opacity-90'
                }`}
              >
                <span className="w-4 h-4 rounded-full border border-zinc-600 bg-[#1c1b18] mb-1"></span>
                <span>Đêm Mềm</span>
              </button>

              <button
                onClick={() => handleThemeChange('black')}
                className={`flex flex-col items-center justify-center p-1.5 rounded-xl border text-[10px] font-medium transition-all ${
                  theme === 'black'
                    ? 'border-zinc-400 bg-black text-white font-bold ring-1 ring-zinc-400 shadow-xs'
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
            <div className="flex items-center gap-1.5 text-xs text-amber-900/70 font-medium">
              <Type className="w-3.5 h-3.5" />
              <span>Cỡ Chữ Đọc Văn Bản</span>
            </div>
            <div className="grid grid-cols-4 gap-1.5 bg-amber-100/60 p-1 rounded-xl">
              {(['sm', 'md', 'lg', 'xl'] as const).map((size) => (
                <button
                  key={size}
                  onClick={() => handleFontSizeChange(size)}
                  className={`py-1 rounded-lg text-xs font-medium transition-all ${
                    fontSize === size
                      ? 'bg-white shadow-xs text-amber-950 font-bold'
                      : 'text-amber-900/70 hover:text-amber-950'
                  }`}
                >
                  {size === 'sm' ? 'Nhỏ' : size === 'md' ? 'Vừa' : size === 'lg' ? 'Lớn' : 'Rất lớn'}
                </button>
              ))}
            </div>
          </div>

          {/* Font Family Selector */}
          <div className="space-y-1.5">
            <div className="text-xs text-amber-900/70 font-medium">Phông Chữ Văn Bản</div>
            <div className="grid grid-cols-2 gap-1.5">
              <button
                onClick={() => handleFontFamilyChange('serif')}
                className={`py-1.5 px-3 rounded-xl border text-xs font-serif transition-all ${
                  fontFamily === 'serif'
                    ? 'border-amber-900 bg-amber-100 font-bold text-amber-950 shadow-xs'
                    : 'border-amber-200 bg-white text-amber-900/80 hover:bg-amber-50'
                }`}
              >
                Sách Cổ Lora (Serif)
              </button>
              <button
                onClick={() => handleFontFamilyChange('sans')}
                className={`py-1.5 px-3 rounded-xl border text-xs font-sans transition-all ${
                  fontFamily === 'sans'
                    ? 'border-amber-900 bg-amber-100 font-bold text-amber-950 shadow-xs'
                    : 'border-amber-200 bg-white text-amber-900/80 hover:bg-amber-50'
                }`}
              >
                Hiện đại Inter (Sans)
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
