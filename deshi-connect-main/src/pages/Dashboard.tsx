
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { 
  Home,
  Briefcase,
  MessageSquare,
  Bell,
  User,
  LogOut,
  Settings,
  Wallet,
  BarChart,
  CheckCircle,
  Clock,
  AlertCircle
} from 'lucide-react';
import { cn } from '@/lib/utils';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  
  // Mock data for dashboard
  const userType = 'freelancer'; // or 'client'
  const stats = {
    freelancer: {
      earnings: '৳12,450',
      activeOrders: 3,
      completedOrders: 27,
      pendingOrders: 1
    },
    client: {
      spent: '৳35,750',
      activeOrders: 2,
      completedOrders: 15,
      pendingReviews: 3
    }
  };
  
  const orders = [
    {
      id: 'ORD-1234',
      title: 'Create a responsive website',
      client: 'Rahim Technologies',
      freelancer: 'Sakib A.',
      price: '৳3,500',
      status: 'active',
      dueDate: '2023-11-30'
    },
    {
      id: 'ORD-1235',
      title: 'Design company logo and branding',
      client: 'Green Touch',
      freelancer: 'Fariha K.',
      price: '৳1,200',
      status: 'active',
      dueDate: '2023-11-25'
    },
    {
      id: 'ORD-1236',
      title: 'Social media marketing campaign',
      client: 'Daily Foods Ltd',
      freelancer: 'Mahfuz A.',
      price: '৳2,800',
      status: 'active',
      dueDate: '2023-12-10'
    }
  ];
  
  const messages = [
    {
      id: 'm1',
      from: 'Rahim Technologies',
      message: 'Can you please update the color scheme as we discussed?',
      time: '2 hours ago',
      unread: true
    },
    {
      id: 'm2',
      from: 'Green Touch',
      message: 'The logo looks great! I have some feedback for the business cards.',
      time: '5 hours ago',
      unread: false
    },
    {
      id: 'm3',
      from: 'Daily Foods Ltd',
      message: 'When can we expect the first draft of the ad copy?',
      time: '1 day ago',
      unread: false
    }
  ];
  
  const notifications = [
    {
      id: 'n1',
      title: 'Order Completed',
      message: 'Your order ORD-1230 has been marked as complete.',
      time: '3 hours ago',
      type: 'success'
    },
    {
      id: 'n2',
      title: 'New Message',
      message: 'You have a new message from Rahim Technologies.',
      time: '5 hours ago',
      type: 'info'
    },
    {
      id: 'n3',
      title: 'Payment Received',
      message: 'You received a payment of ৳2,500 from Green Touch.',
      time: '1 day ago',
      type: 'success'
    }
  ];

  const sidebarItems = [
    { name: 'Overview', icon: Home, id: 'overview' },
    { name: userType === 'freelancer' ? 'My Gigs' : 'My Jobs', icon: Briefcase, id: 'gigs' },
    { name: 'Messages', icon: MessageSquare, id: 'messages', badge: 2 },
    { name: 'Notifications', icon: Bell, id: 'notifications', badge: 1 },
    { name: 'Profile', icon: User, id: 'profile' },
    { name: userType === 'freelancer' ? 'Earnings' : 'Payments', icon: Wallet, id: 'earnings' },
    { name: 'Settings', icon: Settings, id: 'settings' }
  ];

  return (
    <div className="min-h-screen flex">
      {/* Sidebar */}
      <div className="bg-deshi-blue text-white w-64 flex-shrink-0 fixed h-full">
        <div className="p-4 border-b border-white/10">
          <Link to="/" className="flex items-center">
            <h1 className="text-xl font-bold">
              <span className="text-deshi-teal">Deshi</span>Gig
            </h1>
          </Link>
        </div>
        
        <div className="p-4">
          <div className="flex items-center space-x-3 mb-6 pb-6 border-b border-white/10">
            <div className="w-10 h-10 rounded-full bg-deshi-teal flex items-center justify-center text-white font-semibold">
              {userType === 'freelancer' ? 'S' : 'R'}
            </div>
            <div>
              <h3 className="font-semibold">
                {userType === 'freelancer' ? 'Sakib Ahmed' : 'Rahim Technologies'}
              </h3>
              <p className="text-xs text-white/70 capitalize">{userType}</p>
            </div>
          </div>
          
          <nav>
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setActiveTab(item.id)}
                    className={cn(
                      "w-full flex items-center space-x-3 px-3 py-2 rounded-lg transition-colors",
                      activeTab === item.id
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="ml-auto bg-deshi-orange text-white text-xs px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </button>
                </li>
              ))}
              
              <li className="pt-4 mt-4 border-t border-white/10">
                <Link to="/" className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-white/70 hover:bg-white/5 hover:text-white transition-colors">
                  <LogOut className="w-5 h-5" />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-grow ml-64 bg-gray-50 min-h-screen">
        {/* Top bar */}
        <div className="bg-white h-16 border-b border-gray-200 flex items-center justify-between px-6 sticky top-0 z-10">
          <h2 className="text-xl font-semibold text-deshi-blue">
            {sidebarItems.find(item => item.id === activeTab)?.name}
          </h2>
          
          <div className="flex items-center space-x-4">
            <button className="relative">
              <Bell className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-deshi-orange text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                3
              </span>
            </button>
            
            <button className="relative">
              <MessageSquare className="w-5 h-5 text-gray-600" />
              <span className="absolute -top-1 -right-1 bg-deshi-teal text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                2
              </span>
            </button>
            
            <div className="w-8 h-8 rounded-full bg-deshi-blue flex items-center justify-center text-white font-semibold">
              {userType === 'freelancer' ? 'S' : 'R'}
            </div>
          </div>
        </div>

        {/* Dashboard content */}
        <div className="p-6">
          {activeTab === 'overview' && (
            <div className="animate-fade-in-up">
              {/* Stats cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 text-sm">
                      {userType === 'freelancer' ? 'Total Earnings' : 'Total Spent'}
                    </h3>
                    <div className="bg-deshi-blue/10 p-2 rounded-lg">
                      <Wallet className="w-5 h-5 text-deshi-blue" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold">
                    {userType === 'freelancer' ? stats.freelancer.earnings : stats.client.spent}
                  </p>
                  <p className="text-green-500 text-sm flex items-center mt-2">
                    <span className="inline-block mr-1">+12.5%</span>
                    <span>this month</span>
                  </p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 text-sm">Active Orders</h3>
                    <div className="bg-deshi-orange/10 p-2 rounded-lg">
                      <Clock className="w-5 h-5 text-deshi-orange" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold">
                    {userType === 'freelancer' ? stats.freelancer.activeOrders : stats.client.activeOrders}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Orders in progress</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 text-sm">Completed Orders</h3>
                    <div className="bg-green-500/10 p-2 rounded-lg">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold">
                    {userType === 'freelancer' ? stats.freelancer.completedOrders : stats.client.completedOrders}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Successfully delivered</p>
                </div>
                
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-gray-500 text-sm">
                      {userType === 'freelancer' ? 'Pending Orders' : 'Pending Reviews'}
                    </h3>
                    <div className="bg-yellow-500/10 p-2 rounded-lg">
                      <AlertCircle className="w-5 h-5 text-yellow-500" />
                    </div>
                  </div>
                  <p className="text-2xl font-bold">
                    {userType === 'freelancer' ? stats.freelancer.pendingOrders : stats.client.pendingReviews}
                  </p>
                  <p className="text-sm text-gray-500 mt-2">Awaiting action</p>
                </div>
              </div>

              {/* Active orders */}
              <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 mb-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-lg font-semibold">Active Orders</h3>
                  <Button variant="outline" size="sm">View All</Button>
                </div>
                
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="text-left text-gray-500 border-b">
                        <th className="pb-3 font-medium">Order ID</th>
                        <th className="pb-3 font-medium">Project</th>
                        <th className="pb-3 font-medium">
                          {userType === 'freelancer' ? 'Client' : 'Freelancer'}
                        </th>
                        <th className="pb-3 font-medium">Price</th>
                        <th className="pb-3 font-medium">Due Date</th>
                        <th className="pb-3 font-medium">Status</th>
                        <th className="pb-3 font-medium"></th>
                      </tr>
                    </thead>
                    <tbody>
                      {orders.map((order) => (
                        <tr key={order.id} className="border-b hover:bg-gray-50">
                          <td className="py-4">{order.id}</td>
                          <td className="py-4">{order.title}</td>
                          <td className="py-4">
                            {userType === 'freelancer' ? order.client : order.freelancer}
                          </td>
                          <td className="py-4">{order.price}</td>
                          <td className="py-4">{new Date(order.dueDate).toLocaleDateString()}</td>
                          <td className="py-4">
                            <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs">
                              In Progress
                            </span>
                          </td>
                          <td className="py-4">
                            <Button variant="link" size="sm">View</Button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Recent messages and notifications */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Messages */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Recent Messages</h3>
                    <Button variant="ghost" size="sm">View All</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div 
                        key={message.id} 
                        className={cn(
                          "p-4 rounded-lg border flex items-start",
                          message.unread ? "bg-blue-50 border-blue-100" : "bg-white border-gray-100"
                        )}
                      >
                        <div className="mr-3 mt-1">
                          <div className="w-8 h-8 rounded-full bg-deshi-blue flex items-center justify-center text-white font-semibold">
                            {message.from.charAt(0)}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between mb-1">
                            <h4 className="font-medium">
                              {message.from}
                              {message.unread && (
                                <span className="ml-2 bg-deshi-teal text-white text-xs px-2 py-0.5 rounded-full">
                                  New
                                </span>
                              )}
                            </h4>
                            <span className="text-gray-400 text-xs">{message.time}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{message.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Notifications */}
                <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-lg font-semibold">Recent Notifications</h3>
                    <Button variant="ghost" size="sm">View All</Button>
                  </div>
                  
                  <div className="space-y-4">
                    {notifications.map((notification) => (
                      <div 
                        key={notification.id} 
                        className="p-4 rounded-lg border border-gray-100 flex items-start"
                      >
                        <div className="mr-3 mt-1">
                          <div className={cn(
                            "w-8 h-8 rounded-full flex items-center justify-center",
                            notification.type === 'success' ? "bg-green-100 text-green-500" : 
                            notification.type === 'info' ? "bg-blue-100 text-blue-500" :
                            "bg-yellow-100 text-yellow-500"
                          )}>
                            {notification.type === 'success' ? (
                              <CheckCircle className="w-4 h-4" />
                            ) : notification.type === 'info' ? (
                              <MessageSquare className="w-4 h-4" />
                            ) : (
                              <AlertCircle className="w-4 h-4" />
                            )}
                          </div>
                        </div>
                        <div className="flex-grow">
                          <div className="flex justify-between mb-1">
                            <h4 className="font-medium">{notification.title}</h4>
                            <span className="text-gray-400 text-xs">{notification.time}</span>
                          </div>
                          <p className="text-gray-600 text-sm">{notification.message}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab !== 'overview' && (
            <div className="bg-white rounded-xl shadow p-8 text-center">
              <h3 className="text-xl font-medium mb-2">This Section is Coming Soon</h3>
              <p className="text-gray-500 mb-4">
                We're currently working on building the {activeTab} functionality.
              </p>
              <Button
                variant="outline"
                onClick={() => setActiveTab('overview')}
              >
                Return to Overview
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
