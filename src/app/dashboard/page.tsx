
"use client"

import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const initialSalesData = [
  { name: "Jan", sales: 0 },
  { name: "Feb", sales: 0 },
  { name: "Mar", sales: 0 },
  { name: "Apr", sales: 0 },
  { name: "May", sales: 0 },
  { name: "Jun", sales: 0 },
];

const trafficData = [
    { name: 'Organic', value: 400, fill: 'hsl(var(--primary))' },
    { name: 'Direct', value: 300, fill: 'hsl(var(--accent))' },
    { name: 'Referral', value: 300, fill: '#82ca9d' },
    { name: 'Social', value: 200, fill: '#ffc658' },
];

export default function DashboardPage() {
  const [salesData, setSalesData] = useState(initialSalesData);

  useEffect(() => {
    setSalesData(initialSalesData.map(d => ({ ...d, sales: Math.floor(Math.random() * 2000) + 1000 })));
  }, []);

  return (
    <div className="container py-12">
      <div className="w-full max-w-6xl mx-auto">
        <div className="services-anim">
            <h1 className="text-4xl font-bold font-headline tracking-tighter mb-8">
            Real-Time Dashboard
            </h1>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-8">
          <Card className="services-card-anim" style={{ animationDelay: '100ms' }}>
            <CardHeader>
              <CardTitle>Total Revenue</CardTitle>
              <CardDescription>Last 30 days</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">$45,231.89</p>
              <p className="text-xs text-muted-foreground">+20.1% from last month</p>
            </CardContent>
          </Card>
          <Card className="services-card-anim" style={{ animationDelay: '200ms' }}>
            <CardHeader>
              <CardTitle>Subscriptions</CardTitle>
              <CardDescription>Active subscriptions</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">+2350</p>
              <p className="text-xs text-muted-foreground">+180.1% from last month</p>
            </CardContent>
          </Card>
          <Card className="services-card-anim" style={{ animationDelay: '300ms' }}>
            <CardHeader>
              <CardTitle>Sales</CardTitle>
              <CardDescription>This month</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">+12,234</p>
              <p className="text-xs text-muted-foreground">+19% from last month</p>
            </CardContent>
          </Card>
          <Card className="services-card-anim" style={{ animationDelay: '400ms' }}>
            <CardHeader>
              <CardTitle>Active Now</CardTitle>
              <CardDescription>Live users on platform</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold">+573</p>
              <p className="text-xs text-muted-foreground">Updated every 5 seconds</p>
            </CardContent>
          </Card>
        </div>
        <div className="grid gap-8 md:grid-cols-2">
          <Card className="services-card-anim" style={{ animationDelay: '500ms' }}>
            <CardHeader>
              <CardTitle>Sales Overview</CardTitle>
              <CardDescription>Monthly sales performance</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={salesData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="name" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                  <Line type="monotone" dataKey="sales" stroke="hsl(var(--primary))" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
          <Card className="services-card-anim" style={{ animationDelay: '600ms' }}>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your users are coming from</CardDescription>
            </CardHeader>
            <CardContent>
               <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                      <Pie data={trafficData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={100} label />
                      <Tooltip contentStyle={{ backgroundColor: 'hsl(var(--background))', border: '1px solid hsl(var(--border))' }}/>
                  </PieChart>
               </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
