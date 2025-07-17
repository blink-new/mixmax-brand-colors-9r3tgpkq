import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card'
import { Button } from './components/ui/button'
import { Badge } from './components/ui/badge'
import { Avatar, AvatarFallback } from './components/ui/avatar'
import { 
  Calendar, 
  Clock, 
  Mail, 
  Phone, 
  MapPin, 
  CheckCircle2, 
  Circle, 
  Star,
  MessageSquare,
  ArrowRight,
  CalendarDays,
  Settings,
  MoreHorizontal,
  Lightbulb,
  Target
} from 'lucide-react'

function App() {
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({})

  const toggleCheck = (id: string) => {
    setCheckedItems(prev => ({ ...prev, [id]: !prev[id] }))
  }

  const actionItems = [
    {
      id: 'tech-docs',
      text: 'Send technical documentation for security features',
      dueDate: '2024-01-16',
      priority: 'high'
    },
    {
      id: 'integration-proposal',
      text: 'Prepare custom integration proposal',
      dueDate: '2024-01-18',
      priority: 'high'
    },
    {
      id: 'deep-dive',
      text: 'Schedule technical deep-dive session',
      dueDate: '2024-01-20',
      priority: 'medium'
    }
  ]

  const keyPoints = [
    'Budget approved for Q1',
    'Pain points with legacy system',
    'Timeline: Implementation in March'
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 mixmax-gradient rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">M</span>
              </div>
              <div>
                <h1 className="text-lg font-semibold text-gray-900">Meeting summary: Communicate working session</h1>
                <p className="text-sm text-gray-500">Inbox</p>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-8">
        {/* Mixmax Notifications Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center space-x-3">
            <div className="w-6 h-6 mixmax-gradient rounded flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <span className="text-sm font-medium text-gray-700">Mixmax Notifications</span>
          </div>
          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Wed, Jul 16, 7:05 PM (21 hours ago)</span>
            <Star className="h-4 w-4" />
          </div>
        </div>

        {/* Main Header Card */}
        <Card className="mixmax-card mb-8">
          <CardContent className="p-0">
            <div className="mixmax-gradient text-white p-8 rounded-t-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-3xl font-bold mb-2">Sales Meeting Preparation</h1>
                  <p className="text-white/90 text-lg">Get ready for your upcoming sales meetings with comprehensive insights and preparation tools</p>
                </div>
                <div className="text-right">
                  <div className="flex items-center space-x-2 text-white/90 mb-1">
                    <span className="text-sm">Next Meeting</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <CalendarDays className="h-5 w-5" />
                    <span className="text-xl font-semibold">10:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Meeting Details */}
        <Card className="mixmax-card mb-8">
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <Target className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">Discovery Call with Acme Corp</h2>
                  <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>2024-01-15</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-4 w-4" />
                      <span>10:00 AM (60 min)</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Badge className="mixmax-status-positive">Discovery</Badge>
                <Button className="mixmax-button-primary">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Join Meeting
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Prospect Information */}
            <Card className="mixmax-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Star className="h-5 w-5 text-yellow-500" />
                  <span>Prospect Information</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-4">
                  <Avatar className="w-12 h-12">
                    <AvatarFallback className="bg-indigo-100 text-indigo-600 text-lg font-semibold">
                      SJ
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900">Sarah Johnson</h3>
                    <p className="text-gray-600 mb-2">VP of Operations</p>
                    <div className="flex items-center space-x-2 mb-2">
                      <div className="w-4 h-4 bg-blue-600 rounded flex items-center justify-center">
                        <span className="text-white text-xs font-bold">A</span>
                      </div>
                      <span className="text-sm text-gray-700">Acme Corp</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-700">sarah.johnson@acme.com</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="h-4 w-4 text-gray-400" />
                    <span className="text-gray-700">San Francisco, CA</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-4">
                  <Badge variant="outline" className="text-xs">Decision Maker</Badge>
                  <Badge variant="outline" className="text-xs">Warm Lead</Badge>
                  <Badge variant="outline" className="text-xs">Enterprise</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Past Conversation Summary */}
            <Card className="mixmax-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <MessageSquare className="h-5 w-5 text-blue-500" />
                  <span>Past Conversation Summary</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-medium text-gray-900">Discovery Call</h4>
                      <div className="flex space-x-2">
                        <Badge className="mixmax-status-positive text-xs">positive</Badge>
                        <Badge className="mixmax-status-high text-xs">high</Badge>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-3">
                      <Clock className="h-3 w-3" />
                      <span>2024-01-14</span>
                    </div>
                    <p className="text-sm text-gray-700 mb-4">
                      Sarah expressed strong interest in our enterprise integration capabilities. She mentioned current pain points with their legacy system and budget approval for Q1 implementation.
                    </p>
                    
                    <div>
                      <h5 className="font-medium text-gray-900 mb-2">Key Points:</h5>
                      <ul className="space-y-1">
                        {keyPoints.map((point, index) => (
                          <li key={index} className="flex items-start space-x-2 text-sm text-gray-700">
                            <ArrowRight className="h-3 w-3 text-gray-400 mt-0.5 flex-shrink-0" />
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Action Items from Last Meeting */}
            <Card className="mixmax-card">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <CheckCircle2 className="h-5 w-5 text-green-500" />
                  <span>Action Items from Last Meeting</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {actionItems.map((item) => (
                    <div key={item.id} className="flex items-start space-x-3 p-3 rounded-lg border border-gray-100 hover:bg-gray-50 transition-colors">
                      <button
                        onClick={() => toggleCheck(item.id)}
                        className="mt-0.5 flex-shrink-0"
                      >
                        {checkedItems[item.id] ? (
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                        ) : (
                          <Circle className="h-5 w-5 text-gray-400 hover:text-gray-600" />
                        )}
                      </button>
                      <div className="flex-1">
                        <p className={`text-sm ${checkedItems[item.id] ? 'line-through text-gray-500' : 'text-gray-900'}`}>
                          {item.text}
                        </p>
                        <div className="flex items-center space-x-3 mt-2">
                          <span className="text-xs text-gray-500">Due: {item.dueDate}</span>
                          <Badge 
                            className={`text-xs ${
                              item.priority === 'high' ? 'mixmax-status-high' : 'mixmax-status-medium'
                            }`}
                          >
                            {item.priority}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Need More Insights */}
            <Card className="mixmax-card">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lightbulb className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Need More Insights?</h3>
                <p className="text-gray-600 mb-6">Get personalized recommendations and answers about this prospect</p>
                <Button className="mixmax-button-primary w-full">
                  <Star className="h-4 w-4 mr-2" />
                  ASK AI Anything
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App