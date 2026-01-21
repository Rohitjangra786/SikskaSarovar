
import React from 'react';

interface MarkdownRendererProps {
    content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
    const renderBlock = (block: string, index: number) => {
        const lines = block.split('\n');
        const firstLine = lines[0].trim();

        // Headers
        if (firstLine.startsWith('# ')) {
            return <h1 key={index} className="text-3xl font-black text-slate-900 mb-4 mt-8">{renderInline(firstLine.slice(2))}</h1>;
        }
        if (firstLine.startsWith('## ')) {
            return <h2 key={index} className="text-2xl font-bold text-slate-800 mb-3 mt-6 border-l-4 border-brand-500 pl-3">{renderInline(firstLine.slice(3))}</h2>;
        }
        if (firstLine.startsWith('### ')) {
            return <h3 key={index} className="text-xl font-bold text-slate-700 mb-2 mt-5">{renderInline(firstLine.slice(4))}</h3>;
        }

        // Tables
        if (firstLine.startsWith('|')) {
            const rows = lines.filter(line => line.trim().startsWith('|')).map(line => {
                return line.split('|').filter((cell, i, arr) => i !== 0 && i !== arr.length - 1).map(cell => cell.trim());
            });

            if (rows.length < 2) return null; // Invalid table

            const headers = rows[0];
            const alignments = rows[1].map(cell => {
                if (cell.includes(':-') && cell.includes('-:')) return 'center';
                if (cell.includes('-:')) return 'right';
                return 'left';
            });
            const dataRows = rows.slice(2);

            return (
                <div key={index} className="my-6 overflow-x-auto rounded-xl shadow-lg border border-slate-200">
                    <table className="w-full border-collapse bg-white text-sm">
                        <thead>
                            <tr className="bg-brand-50 border-b border-brand-100">
                                {headers.map((header, i) => (
                                    <th key={i} className={`p-4 font-bold text-brand-900 uppercase tracking-wider text-${alignments[i] || 'left'}`}>
                                        {renderInline(header)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {dataRows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-slate-50 transition-colors even:bg-slate-50/50">
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className={`p-4 text-slate-600 text-${alignments[cellIndex] || 'left'}`}>
                                            {renderInline(cell)}
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            );
        }

        // Lists (Unordered)
        if (firstLine.startsWith('• ') || firstLine.startsWith('- ')) {
            return (
                <ul key={index} className="list-disc list-inside mb-4 space-y-2 text-slate-600 marker:text-brand-500">
                    {lines.map((line, i) => (
                        <li key={i} className="pl-2">{renderInline(line.replace(/^[•-]\s+/, ''))}</li>
                    ))}
                </ul>
            );
        }

        // Numbered Lists
        if (/^\d+\.\s/.test(firstLine)) {
            return (
                <ol key={index} className="list-decimal list-inside mb-4 space-y-2 text-slate-600 marker:text-brand-500 marker:font-bold">
                    {lines.map((line, i) => (
                        <li key={i} className="pl-2">{renderInline(line.replace(/^\d+\.\s+/, ''))}</li>
                    ))}
                </ol>
            );
        }

        // Images
        if (firstLine.startsWith('![') && firstLine.includes('](')) {
            const match = firstLine.match(/!\[(.*?)\]\((.*?)\)/);
            if (match) {
                return (
                    <div key={index} className="my-6 rounded-2xl overflow-hidden shadow-md border border-slate-100">
                        <img src={match[2]} alt={match[1]} className="w-full h-auto object-cover" />
                        {match[1] && <p className="text-center text-xs text-slate-400 mt-2 p-2 bg-slate-50 italic">{match[1]}</p>}
                    </div>
                );
            }
        }

        // Code Blocks (Basic)
        if (firstLine.startsWith('```')) {
            const codeContent = lines.slice(1, -1).join('\n');
            return (
                <div key={index} className="my-6 bg-slate-900 rounded-xl p-4 overflow-x-auto border border-slate-800 shadow-inner">
                    <pre className="text-sm font-mono text-brand-100">
                        {codeContent}
                    </pre>
                </div>
            )
        }

        // Blockquotes
        if (firstLine.startsWith('> ')) {
            return (
                <blockquote key={index} className="border-l-4 border-amber-400 bg-amber-50 p-4 rounded-r-xl my-4 text-amber-900 italic">
                    {renderInline(lines.join(' ').replace(/^>\s+/gm, ''))}
                </blockquote>
            );
        }


        // Default Paragraph
        return <p key={index} className="mb-4 text-slate-600 leading-relaxed text-lg">{renderInline(block)}</p>;
    };

    const renderInline = (text: string) => {
        // Simple inline parser for **bold**, *italic*, `code`
        // This is recursive/regex based. For simplicity, we'll chain replacements or use a splitter.

        // We can split by ** first
        const parts = text.split(/(\*\*.*?\*\*|`.*?`)/g);

        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-bold text-slate-900">{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('`') && part.endsWith('`')) {
                return <code key={i} className="bg-slate-100 text-brand-600 font-mono px-1.5 py-0.5 rounded text-sm border border-slate-200">{part.slice(1, -1)}</code>;
            }
            return part;
        });
    };

    // Split content by double newlines to handle blocks, but keep tables together
    // A table block is continuous lines starting with |
    // We need a smarter splitter.

    const blocks: string[] = [];
    const lines = content.split('\n');
    let currentBlock: string[] = [];
    let inTable = false;
    let inCode = false;

    lines.forEach(line => {
        const trimmed = line.trim();

        // Handle Code Blocks
        if (trimmed.startsWith('```')) {
            if (inCode) {
                currentBlock.push(line);
                blocks.push(currentBlock.join('\n'));
                currentBlock = [];
                inCode = false;
            } else {
                if (currentBlock.length > 0) blocks.push(currentBlock.join('\n'));
                currentBlock = [line];
                inCode = true;
            }
            return;
        }
        if (inCode) {
            currentBlock.push(line);
            return;
        }

        // Handle Tables
        if (trimmed.startsWith('|')) {
            if (!inTable) {
                if (currentBlock.length > 0) blocks.push(currentBlock.join('\n'));
                currentBlock = [];
                inTable = true;
            }
            currentBlock.push(line);
        } else {
            if (inTable) {
                blocks.push(currentBlock.join('\n'));
                currentBlock = [];
                inTable = false;
            }

            if (trimmed === '') {
                if (currentBlock.length > 0) {
                    blocks.push(currentBlock.join('\n'));
                    currentBlock = [];
                }
            } else {
                currentBlock.push(line);
            }
        }
    });
    if (currentBlock.length > 0) blocks.push(currentBlock.join('\n'));


    return (
        <div className="markdown-content">
            {blocks.map((block, index) => renderBlock(block, index))}
        </div>
    );
};

export default MarkdownRenderer;
