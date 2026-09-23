'use client';

import React, { useEffect, useState } from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import { Book } from '@/components/types/books.type';
import { getReadBooks } from '@/utlis/localStorage';

// Distinct colors for each custom bar
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF4560', '#8884d8'];

// Custom SVG Triangular/Cone Bar Path Function
const getPath = (x: number, y: number, width: number, height: number) => {
  return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${
    y + height / 3
  } ${x + width / 2}, ${y} C${x + width / 2},${y + height / 3} ${
    x + (2 * width) / 3
  },${y + height} ${x + width}, ${y + height} Z`;
};

// Custom Bar Shape Interface
interface TriangleBarProps {
  fill?: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
}

const TriangleBar = (props: TriangleBarProps) => {
  const { fill = '#8884d8', x = 0, y = 0, width = 0, height = 0 } = props;
  return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
};

// Custom Tooltip Props Interface
interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: {
      name: string;
      pages: number;
    };
  }>;
}

// Custom Tooltip Component (No Recharts Generic Mismatches, No 'any')
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    const item = payload[0];
    return (
      <div className="bg-white p-3 border border-gray-200 rounded-lg shadow-md">
        <p className="text-sm font-semibold text-[#131313]">{item.payload.name}</p>
        <p className="text-sm text-[#23BE0A] font-bold">{`Total Pages: ${item.value}`}</p>
      </div>
    );
  }
  return null;
};

export default function PagesToReadPage() {
  const [readBooks, setReadBooks] = useState<Book[]>([]);

  // Defer state update to prevent synchronous re-renders
  useEffect(() => {
    queueMicrotask(() => {
      setReadBooks(getReadBooks());
    });
  }, []);

  // Format dataset for Recharts
  const chartData = readBooks.map((book) => ({
    name: book.bookName,
    pages: book.totalPages || 0,
  }));

  return (
    <div className="container mx-auto px-4 md:px-12 my-10">
      <div className="bg-gray-50 p-6 md:p-12 rounded-3xl border border-gray-100 flex flex-col items-center justify-center min-h-[500px]">
        {chartData.length > 0 ? (
          <div className="w-full h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={chartData}
                margin={{ top: 20, right: 30, left: 20, bottom: 60 }}
              >
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis
                  dataKey="name"
                  interval={0}
                  tick={{ fontSize: 12, fill: '#131313' }}
                  dy={10}
                />
                <YAxis />
                
                {/* Custom Tooltip */}
                <Tooltip content={<CustomTooltip />} />
                
                <Bar
                  dataKey="pages"
                  fill="#8884d8"
                  shape={<TriangleBar />}
                  label={{ position: 'top', fill: '#131313', fontSize: 14 }}
                >
                  {chartData.map((_, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <div className="text-center text-gray-500 font-medium py-12">
            <p className="text-lg">No books added to the Read List yet.</p>
            <p className="text-sm mt-1 text-gray-400">
              Add books to your Read list from the home or book details page to view the chart.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}