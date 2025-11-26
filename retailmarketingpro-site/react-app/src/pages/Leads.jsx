import React from 'react'
import { Filter, Search } from 'lucide-react'

const leads = [
  { id: 1, company: 'Tech Solutions Ltd', contact: 'Rahul Sharma', value: '₹1,20,000', stage: 'Negotiation', probability: '75%' },
  { id: 2, company: 'Assam Tea Gardens', contact: 'Priya Das', value: '₹85,000', stage: 'Proposal', probability: '50%' },
  { id: 3, company: 'Guwahati Retail', contact: 'Amit Singh', value: '₹45,000', stage: 'Qualified', probability: '40%' }
]

export const Leads = () => {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Leads</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your sales pipeline and potential opportunities.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">Add Lead</button>
        </div>
      </div>

      <div className="bg-white p-4 rounded-lg shadow flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none"><Search className="h-5 w-5 text-gray-400" /></div>
          <input type="text" className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md" placeholder="Search leads..." />
        </div>
        <button className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"><Filter className="mr-2 h-5 w-5 text-gray-400" />Filters</button>
      </div>

      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Company</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Contact</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Stage</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Probability</th>
                    <th className="relative px-6 py-3"><span className="sr-only">Edit</span></th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {leads.map((lead) => (
                    <tr key={lead.id}>
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{lead.company}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.contact}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.value}</td>
                      <td className="px-6 py-4 whitespace-nowrap"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${lead.stage === 'Qualified' ? 'bg-green-100 text-green-800' : lead.stage === 'New' ? 'bg-blue-100 text-blue-800' : 'bg-yellow-100 text-yellow-800'}`}>{lead.stage}</span></td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{lead.probability}</td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium"><a href="#" className="text-blue-600 hover:text-blue-900">Edit</a></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
