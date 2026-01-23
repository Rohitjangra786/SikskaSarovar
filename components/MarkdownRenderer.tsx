
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
            return <h1 key={index} className="text-4xl md:text-5xl font-black text-slate-900 dark:text-slate-100 mb-6 mt-10 tracking-tight leading-tight">{renderInline(firstLine.slice(2))}</h1>;
        }
        if (firstLine.startsWith('## ')) {
            return <h2 key={index} className="text-3xl font-black text-slate-800 dark:text-slate-200 mb-4 mt-8 border-l-4 border-brand-500 pl-4 tracking-tight">{renderInline(firstLine.slice(3))}</h2>;
        }
        if (firstLine.startsWith('### ')) {
            return <h3 key={index} className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-3 mt-6 tracking-tight">{renderInline(firstLine.slice(4))}</h3>;
        }
        if (firstLine.startsWith('#### ')) {
            return <h4 key={index} className="text-xl font-bold text-slate-600 dark:text-slate-400 mb-2 mt-4 tracking-tight">{renderInline(firstLine.slice(5))}</h4>;
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
                <div key={index} className="my-6 overflow-x-auto rounded-xl shadow-lg border border-slate-200 dark:border-slate-700">
                    <table className="w-full border-collapse bg-white dark:bg-slate-800 text-sm">
                        <thead>
                            <tr className="bg-brand-50 dark:bg-slate-700 border-b border-brand-100 dark:border-slate-600">
                                {headers.map((header, i) => (
                                    <th key={i} className={`p-4 font-bold text-brand-900 dark:text-brand-100 uppercase tracking-wider text-${alignments[i] || 'left'}`}>
                                        {renderInline(header)}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-700">
                            {dataRows.map((row, rowIndex) => (
                                <tr key={rowIndex} className="hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors even:bg-slate-50/50 dark:even:bg-slate-800/50">
                                    {row.map((cell, cellIndex) => (
                                        <td key={cellIndex} className={`p-4 text-slate-600 dark:text-slate-300 text-${alignments[cellIndex] || 'left'}`}>
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
        if (firstLine.startsWith('• ') || firstLine.startsWith('- ') || firstLine.startsWith('* ')) {
            const listItems: { text: string; children: string[] }[] = [];
            let currentItem: { text: string; children: string[] } | null = null;

            // Normalize indentation
            const nonEmptyLines = lines.filter(l => l.trim().length > 0);
            const baseIndent = nonEmptyLines.length > 0
                ? Math.min(...nonEmptyLines.map(l => l.search(/\S/)))
                : 0;

            lines.forEach((line) => {
                const trimmed = line.trim();
                if (trimmed === '') return;

                const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ');
                const effectiveIndent = line.search(/\S/) - baseIndent;

                // Indented bullet = child (must be significantly indented relative to base)
                // Using 2 spaces as threshold for child
                if (isBullet) {
                    if (effectiveIndent >= 2 && currentItem) {
                        // It causes a sub-item
                        currentItem.children.push(trimmed.replace(/^[•\-\*]\s+/, ''));
                    } else {
                        // New root item
                        if (currentItem) listItems.push(currentItem);
                        currentItem = {
                            text: trimmed.replace(/^[•\-\*]\s+/, ''),
                            children: []
                        };
                    }
                } else {
                    // Continuation text
                    if (currentItem) {
                        currentItem.text += ' ' + trimmed;
                    }
                }
            });
            if (currentItem) listItems.push(currentItem);

            return (
                <ul key={index} className="list-disc list-inside mb-4 space-y-2 text-slate-600 dark:text-slate-300 marker:text-brand-500">
                    {listItems.map((item, i) => (
                        <li key={i} className="pl-2">
                            {renderInline(item.text)}
                            {item.children.length > 0 && (
                                <ul className="list-[circle] list-inside ml-4 mt-2 space-y-1 text-slate-500 dark:text-slate-400">
                                    {item.children.map((child, ci) => (
                                        <li key={ci} className="pl-1 text-sm">{renderInline(child)}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ul>
            );
        }

        // Numbered Lists
        if (/^\d+\.\s/.test(firstLine)) {
            const listItems: { text: string; children: string[] }[] = [];
            let currentItem: { text: string; children: string[] } | null = null;

            lines.forEach((line) => {
                const trimmed = line.trim();
                const isNumbered = /^\d+\.\s/.test(trimmed);
                const isBullet = trimmed.startsWith('- ') || trimmed.startsWith('• ') || trimmed.startsWith('* ');

                if (isNumbered) {
                    if (currentItem) listItems.push(currentItem);
                    currentItem = {
                        text: trimmed.replace(/^\d+\.\s+/, ''),
                        children: []
                    };
                } else if (isBullet) {
                    const childText = trimmed.replace(/^[•\-\*]\s+/, '');
                    if (currentItem) {
                        currentItem.children.push(childText);
                    } else {
                        // Fallback for bullet at start or mixed content
                        currentItem = { text: childText, children: [] };
                    }
                } else {
                    // Continuation text
                    if (currentItem) {
                        currentItem.text += ' ' + trimmed;
                    }
                }
            });
            if (currentItem) listItems.push(currentItem);

            return (
                <ol key={index} className="list-decimal list-inside mb-4 space-y-2 text-slate-600 dark:text-slate-300 marker:text-brand-500 marker:font-bold">
                    {listItems.map((item, i) => (
                        <li key={i} className="pl-2">
                            {renderInline(item.text)}
                            {item.children.length > 0 && (
                                <ul className="list-disc list-inside ml-4 mt-2 space-y-1 text-slate-500 dark:text-slate-400">
                                    {item.children.map((child, ci) => (
                                        <li key={ci} className="pl-1 text-sm">{renderInline(child)}</li>
                                    ))}
                                </ul>
                            )}
                        </li>
                    ))}
                </ol>
            );
        }

        // Images
        if (firstLine.startsWith('![') && firstLine.includes('](')) {
            const match = firstLine.match(/!\[(.*?)\]\((.*?)\)/);
            if (match) {
                return (
                    <div key={index} className="my-6 rounded-2xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-700">
                        <img src={match[2]} alt={match[1]} className="w-full h-auto object-cover" />
                        {match[1] && <p className="text-center text-xs text-slate-400 mt-2 p-2 bg-slate-50 dark:bg-slate-800 italic">{match[1]}</p>}
                    </div>
                );
            }
        }

        // Code Blocks (Basic)
        if (firstLine.startsWith('```')) {
            const codeLines = lines.slice(1, -1);
            const contentLines = codeLines.filter(line => line.trim().length > 0);
            const minIndent = contentLines.length > 0
                ? Math.min(...contentLines.map(line => line.search(/\S|$/)))
                : 0;

            const codeContent = codeLines.map(line =>
                line.length >= minIndent ? line.slice(minIndent) : line
            ).join('\n');

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
                <blockquote key={index} className="border-l-4 border-amber-400 bg-amber-50 dark:bg-amber-900/10 p-4 rounded-r-xl my-4 text-amber-900 dark:text-amber-100 italic">
                    {renderInline(lines.join(' ').replace(/^>\s+/gm, ''))}
                </blockquote>
            );
        }


        // Default Paragraph
        return <p key={index} className="mb-4 text-slate-600 dark:text-slate-300 leading-relaxed text-lg">{renderInline(block)}</p>;
    };

    const renderInline = (text: string) => {
        // Simple inline parser for **bold**, *italic*, `code`
        // Also handling simple *italic*

        let parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/g);

        return parts.map((part, i) => {
            if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-bold text-slate-900 dark:text-slate-100">{part.slice(2, -2)}</strong>;
            }
            if (part.startsWith('`') && part.endsWith('`')) {
                return <code key={i} className="bg-slate-100 dark:bg-slate-800 text-brand-600 dark:text-brand-400 font-mono px-1.5 py-0.5 rounded text-sm border border-slate-200 dark:border-slate-700">{part.slice(1, -1)}</code>;
            }
            // Add italic support
            if (part.startsWith('*') && part.endsWith('*') && part.length > 2 && !part.startsWith('**')) {
                return <em key={i} className="italic text-slate-800 dark:text-slate-200">{part.slice(1, -1)}</em>;
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

    const isListLine = (line: string) => {
        const trimmed = line.trim();
        return trimmed.startsWith('• ') || trimmed.startsWith('- ') || trimmed.startsWith('* ') || /^\d+\.\s/.test(trimmed);
    };

    const isHeaderLine = (line: string) => {
        return /^#{1,6}\s/.test(line.trim());
    };

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

            // Handle Headers - Split strictly
            if (isHeaderLine(line)) {
                if (currentBlock.length > 0) {
                    blocks.push(currentBlock.join('\n'));
                }
                blocks.push(line);
                currentBlock = [];
                return;
            }

            // Handle Lists - Split if switching between text and list
            if (trimmed !== '') {
                const isLineList = isListLine(line);

                if (currentBlock.length > 0) {
                    const firstLineOfBlock = currentBlock[0];
                    const isBlockList = isListLine(firstLineOfBlock);

                    // If we switch from text to list, or list to text (that isn't a continued list), split.
                    if (isBlockList !== isLineList) {
                        blocks.push(currentBlock.join('\n'));
                        currentBlock = [];
                    }
                }
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
