import React from 'react'
import { Users, DollarSign, ShoppingBag, TrendingUp } from 'lucide-react'

const StatCard = ({ title, value, icon: Icon, change, changeType }) => (
  <div className="bg-white overflow-hidden rounded-lg shadow">
    <div className="p-5">
      <div className="flex items-center">
        <div className="flex-shrink-0">
          <Icon className="h-6 w-6 text-gray-400" />
        </div>
        <div className="ml-5 w-0 flex-1">
          <dl>
            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
            <dd><div className="text-lg font-medium text-gray-900">{value}</div></dd>
          </dl>
        </div>
      </div>
    </div>
    <div className="bg-gray-50 px-5 py-3">
      <div className="text-sm"><span className={`font-medium ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>{change}</span> <span className="text-gray-500"> from last month</span></div>
    </div>
  </div>
)

export const Dashboard = () => {
  const stats = [
    { title: 'Total Customers', value: '2,543', icon: Users, change: '+12%', changeType: 'positive' },
    { title: 'Total Revenue', value: '₹45,231', icon: DollarSign, change: '+5.4%', changeType: 'positive' },
    { title: 'Active Orders', value: '42', icon: ShoppingBag, change: '-2%', changeType: 'negative' },
    { title: 'Growth Rate', value: '18.2%', icon: TrendingUp, change: '+4.1%', changeType: 'positive' }
  ]

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">Overview of your business performance.</p>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((s) => <StatCard key={s.title} {...s} />)}
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="px-4 py-5 sm:p-6">
          <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Activity</h3>
          <div className="mt-4 border-t border-gray-200">
            <ul className="divide-y divide-gray-200">
              {[1,2,3].map((i) => (
                <li key={i} className="py-4">
                  <div className="flex space-x-3">
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-medium">New Order #{1000 + i}</h3>
                        <p className="text-sm text-gray-500">2h ago</p>
                      </div>
                      <p className="text-sm text-gray-500">Customer placed a new order for RMP POS System.</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
