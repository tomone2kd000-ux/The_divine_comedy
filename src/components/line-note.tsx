'use client';

import React, { useState } from 'react';

interface LineNoteProps {
  line: string;
  note?: string;
  number?: string | number;
}

export function LineNote({ line, note, number }: LineNoteProps) {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="group relative my-1.5 rounded-md p-2 transition-colors hover:bg-amber-500/10 dark:hover:bg-amber-500/15 border border-transparent hover:border-amber-400/30">
      <div className="flex items-start gap-2 text-base leading-relaxed">
        {number && (
          <span className="select-none font-mono text-xs text-zinc-400 dark:text-zinc-500 pt-0.5 min-w-[28px] text-right">
            {number}.
          </span>
        )}
        <span className="flex-1 font-serif text-zinc-800 dark:text-zinc-200">
          {line}
        </span>
        {note && (
          <button
            type="button"
            className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-amber-100 dark:bg-amber-900/50 text-amber-700 dark:text-amber-300 hover:bg-amber-200 dark:hover:bg-amber-800 text-xs font-bold transition-all transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-amber-500/50 cursor-pointer"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
            onClick={() => setShowTooltip((prev) => !prev)}
            aria-label="Xem chú giải"
          >
            ?
          </button>
        )}
      </div>

      {note && showTooltip && (
        <div className="absolute left-6 right-6 top-full z-50 mt-1 rounded-lg border border-amber-200 dark:border-amber-800/60 bg-amber-50 dark:bg-zinc-900 p-3 text-xs text-zinc-800 dark:text-zinc-200 shadow-xl backdrop-blur-md transition-all">
          <div className="font-semibold text-amber-800 dark:text-amber-400 mb-1 flex items-center gap-1">
            <span>💡 Chú giải & Ý nghĩa:</span>
          </div>
          <div className="leading-normal">{note}</div>
        </div>
      )}
    </div>
  );
}