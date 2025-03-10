
import * as React from "react";
import {
  AreaChart as RechartsAreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  BarChart as RechartsBarChart,
  Bar,
  LineChart as RechartsLineChart,
  Line,
  PieChart as RechartsPieChart,
  Pie,
  Cell,
} from "recharts";
import { ChartContainer, ChartTooltipContent } from "@/components/ui/chart";

interface ChartProps {
  data: Array<Record<string, any>>;
  categories?: string[];
  index?: string;
  colors?: string[];
  valueFormatter?: (value: number) => string;
  startEndOnly?: boolean;
  showXAxis?: boolean;
  showYAxis?: boolean;
  showLegend?: boolean;
  yAxisWidth?: number;
  showGridLines?: boolean;
}

interface BarChartProps extends ChartProps {
  layout?: "vertical" | "horizontal";
}

export const BarChart = ({
  data,
  categories = ["value"],
  index = "name",
  colors = ["#3B82F6"],
  valueFormatter = (value) => value.toString(),
  startEndOnly = false,
  showXAxis = true,
  showYAxis = true,
  showLegend = true,
  yAxisWidth = 40,
  showGridLines = true,
  layout = "vertical",
}: BarChartProps) => {
  const isHorizontal = layout === "horizontal";

  return (
    <ChartContainer
      config={{
        ...Object.fromEntries(
          categories.map((category, i) => [
            category,
            { color: colors[i % colors.length] },
          ])
        ),
      }}
    >
      <RechartsBarChart
        data={data}
        layout={isHorizontal ? "vertical" : "horizontal"}
        margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
      >
        {showGridLines && <CartesianGrid strokeDasharray="3 3" />}
        {!isHorizontal ? (
          <>
            <XAxis
              dataKey={index}
              hide={!showXAxis}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) =>
                startEndOnly ? (value as string) : (value as string)
              }
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              hide={!showYAxis}
              width={yAxisWidth}
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => valueFormatter(value as number)}
              axisLine={false}
              tickLine={false}
            />
          </>
        ) : (
          <>
            <XAxis
              hide={!showYAxis}
              type="number"
              tick={{ fontSize: 12 }}
              tickFormatter={(value) => valueFormatter(value as number)}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              dataKey={index}
              hide={!showXAxis}
              width={yAxisWidth}
              type="category"
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
          </>
        )}
        <Tooltip content={<ChartTooltipContent />} />
        {showLegend && <Legend />}
        {categories.map((category, i) => (
          <Bar
            key={category}
            dataKey={category}
            fill={colors[i % colors.length]}
            radius={4}
            barSize={isHorizontal ? 20 : undefined}
          />
        ))}
      </RechartsBarChart>
    </ChartContainer>
  );
};

export const LineChart = ({
  data,
  categories = ["value"],
  index = "name",
  colors = ["#3B82F6"],
  valueFormatter = (value) => value.toString(),
  startEndOnly = false,
  showXAxis = true,
  showYAxis = true,
  showLegend = true,
  yAxisWidth = 40,
  showGridLines = true,
}: ChartProps) => {
  return (
    <ChartContainer
      config={{
        ...Object.fromEntries(
          categories.map((category, i) => [
            category,
            { color: colors[i % colors.length] },
          ])
        ),
      }}
    >
      <RechartsLineChart
        data={data}
        margin={{ top: 10, right: 10, left: 0, bottom: 10 }}
      >
        {showGridLines && <CartesianGrid strokeDasharray="3 3" />}
        <XAxis
          dataKey={index}
          hide={!showXAxis}
          tick={{ fontSize: 12 }}
          tickFormatter={(value) =>
            startEndOnly ? (value as string) : (value as string)
          }
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          hide={!showYAxis}
          width={yAxisWidth}
          tick={{ fontSize: 12 }}
          tickFormatter={(value) => valueFormatter(value as number)}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<ChartTooltipContent />} />
        {showLegend && <Legend />}
        {categories.map((category, i) => (
          <Line
            key={category}
            type="monotone"
            dataKey={category}
            stroke={colors[i % colors.length]}
            strokeWidth={2}
            dot={{ r: 4, strokeWidth: 1 }}
            activeDot={{ r: 6, strokeWidth: 2 }}
          />
        ))}
      </RechartsLineChart>
    </ChartContainer>
  );
};

interface PieChartProps extends Omit<ChartProps, 'categories'> {
  dataKey?: string;
  nameKey?: string;
  innerRadius?: number;
  outerRadius?: number;
}

export const PieChart = ({
  data,
  colors = ["#3B82F6", "#FFCE00", "#4F46E5", "#10B981", "#F97316"],
  valueFormatter = (value) => value.toString(),
  showLegend = true,
  dataKey = "value",
  nameKey = "name",
  innerRadius = 0,
  outerRadius = 80,
}: PieChartProps) => {
  return (
    <ChartContainer
      config={{
        ...Object.fromEntries(
          data.map((item, i) => [
            item[nameKey],
            { color: colors[i % colors.length] },
          ])
        ),
      }}
    >
      <RechartsPieChart margin={{ top: 10, right: 10, left: 10, bottom: 10 }}>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          paddingAngle={2}
          dataKey={dataKey}
          nameKey={nameKey}
          label={(entry) => entry[nameKey]}
          labelLine={true}
        >
          {data.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              fill={colors[index % colors.length]}
            />
          ))}
        </Pie>
        <Tooltip
          formatter={(value) => valueFormatter(value as number)}
          content={<ChartTooltipContent />}
        />
        {showLegend && <Legend />}
      </RechartsPieChart>
    </ChartContainer>
  );
};
