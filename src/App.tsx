import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'
import { Input } from './components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from './components/ui/tabs'
import { Progress } from './components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import { Bell, Mail, Settings, Users, BarChart3, Calendar, Search, Plus } from 'lucide-react'

function App() {
  const [activeTab, setActiveTab] = useState('dashboard')

  const stats = [
    { label: 'Total Emails', value: '12,345', change: '+12%', trend: 'up' },
    { label: 'Open Rate', value: '68.2%', change: '+5.4%', trend: 'up' },
    { label: 'Click Rate', value: '24.1%', change: '-2.1%', trend: 'down' },
    { label: 'Conversions', value: '1,234', change: '+18%', trend: 'up' },
  ]

  const campaigns = [
    { name: 'Q4 Product Launch', status: 'Active', progress: 85, priority: 'high' },
    { name: 'Holiday Newsletter', status: 'Draft', progress: 45, priority: 'medium' },
    { name: 'Customer Onboarding', status: 'Scheduled', progress: 100, priority: 'positive' },
    { name: 'Feedback Survey', status: 'Paused', progress: 30, priority: 'medium' },
  ]

  const team = [
    { name: 'Sarah Chen', role: 'Marketing Manager', avatar: 'SC', status: 'online' },
    { name: 'Mike Johnson', role: 'Email Specialist', avatar: 'MJ', status: 'away' },
    { name: 'Emily Davis', role: 'Designer', avatar: 'ED', status: 'online' },
    { name: 'Alex Rodriguez', role: 'Analyst', avatar: 'AR', status: 'offline' },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Mixmax gradient */}
      <header className="mixmax-gradient text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-bold">Mixmax</h1>
              <nav className="hidden md:flex space-x-6">
                <button className="text-white/90 hover:text-white transition-colors">Dashboard</button>
                <button className="text-white/90 hover:text-white transition-colors">Campaigns</button>
                <button className="text-white/90 hover:text-white transition-colors">Analytics</button>
                <button className="text-white/90 hover:text-white transition-colors">Team</button>
              </nav>
            </div>
            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/60 h-4 w-4" />
                <Input 
                  placeholder="Search..." 
                  className="pl-10 bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:bg-white/30"
                />
              </div>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-white hover:bg-white/20">
                <Settings className="h-5 w-5" />
              </Button>
              <Avatar>
                <AvatarFallback className="bg-white/20 text-white">JD</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, John!</h2>
          <p className="text-gray-600">Here's what's happening with your email campaigns today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="mixmax-card">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.label}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <div className={`text-sm font-medium ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`}>
                    {stat.change}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
                <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
              </TabsList>

              <TabsContent value="dashboard" className="space-y-6">
                <Card className="mixmax-card">
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-2">
                      <BarChart3 className="h-5 w-5 text-indigo-500" />
                      <span>Performance Overview</span>
                    </CardTitle>
                    <CardDescription>Your email marketing performance this month</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Email Deliverability</span>
                          <span className="font-medium">94%</span>
                        </div>
                        <Progress value={94} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Engagement Rate</span>
                          <span className="font-medium">68%</span>
                        </div>
                        <Progress value={68} className="h-2" />
                      </div>
                      <div>
                        <div className="flex justify-between text-sm mb-2">
                          <span>Conversion Rate</span>
                          <span className="font-medium">12%</span>
                        </div>
                        <Progress value={12} className="h-2" />
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="campaigns" className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold text-gray-900">Active Campaigns</h3>
                  <Button className="mixmax-button-primary">
                    <Plus className="h-4 w-4 mr-2" />
                    New Campaign
                  </Button>
                </div>
                
                <div className="space-y-4">
                  {campaigns.map((campaign, index) => (
                    <Card key={index} className="mixmax-card">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div>
                            <h4 className="font-semibold text-gray-900">{campaign.name}</h4>
                            <p className="text-sm text-gray-600">{campaign.status}</p>
                          </div>
                          <Badge 
                            variant="outline" 
                            className={
                              campaign.priority === 'high' ? 'mixmax-status-high' :
                              campaign.priority === 'medium' ? 'mixmax-status-medium' :
                              'mixmax-status-positive'
                            }
                          >
                            {campaign.priority}
                          </Badge>
                        </div>
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progress</span>
                            <span className="font-medium">{campaign.progress}%</span>
                          </div>
                          <Progress value={campaign.progress} className="h-2" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </TabsContent>

              <TabsContent value="analytics" className="space-y-6">
                <Card className="mixmax-card">
                  <CardHeader>
                    <CardTitle>Analytics Dashboard</CardTitle>
                    <CardDescription>Detailed insights into your email performance</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-center py-12">
                      <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-medium text-gray-900 mb-2">Advanced Analytics</h3>
                      <p className="text-gray-600 mb-4">Get detailed insights into your email campaigns</p>
                      <Button className="mixmax-button-primary">View Full Analytics</Button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Team Section */}
            <Card className="mixmax-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-indigo-500" />
                  <span>Team</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {team.map((member, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Avatar>
                      <AvatarFallback className="bg-indigo-100 text-indigo-600">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-sm font-medium text-gray-900">{member.name}</p>
                      <p className="text-xs text-gray-600">{member.role}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${
                      member.status === 'online' ? 'bg-green-500' :
                      member.status === 'away' ? 'bg-yellow-500' :
                      'bg-gray-400'
                    }`} />
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card className="mixmax-card">
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start">
                  <Mail className="h-4 w-4 mr-2" />
                  Create Email
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <Calendar className="h-4 w-4 mr-2" />
                  Schedule Campaign
                </Button>
                <Button variant="outline" className="w-full justify-start">
                  <BarChart3 className="h-4 w-4 mr-2" />
                  View Reports
                </Button>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="mixmax-card">
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Campaign "Holiday Sale" sent</p>
                  <p className="text-gray-600">2 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">New subscriber added</p>
                  <p className="text-gray-600">4 hours ago</p>
                </div>
                <div className="text-sm">
                  <p className="font-medium text-gray-900">Template "Welcome Series" updated</p>
                  <p className="text-gray-600">1 day ago</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App