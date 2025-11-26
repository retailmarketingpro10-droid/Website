import React from 'react'
import { Mail, Phone, MoreVertical } from 'lucide-react'

const contacts = [
  { id: 1, name: 'Jane Cooper', email: 'jane.cooper@example.com', role: 'Admin', phone: '+91 98765 43210', status: 'Active' },
  { id: 2, name: 'Cody Fisher', email: 'cody.fisher@example.com', role: 'Owner', phone: '+91 98765 43211', status: 'Active' },
  { id: 3, name: 'Esther Howard', email: 'esther.howard@example.com', role: 'Manager', phone: '+91 98765 43212', status: 'Inactive' }
]

export const Contacts = () => {
  return (
    <div className="space-y-6">
      <div className="sm:flex sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900">Contacts</h1>
          <p className="mt-1 text-sm text-gray-500">A list of all the users in your account.</p>
        </div>
        <div className="mt-4 sm:mt-0">
          <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">Add Contact</button>
        </div>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200">
          {contacts.map((contact) => (
            <li key={contact.id}>
              <div className="px-4 py-4 flex items-center sm:px-6">
                <div className="min-w-0 flex-1 sm:flex sm:items-center sm:justify-between">
                  <div className="truncate">
                    <div className="flex text-sm">
                      <p className="font-medium text-blue-600 truncate">{contact.name}</p>
                      <p className="ml-1 flex-shrink-0 font-normal text-gray-500">in {contact.role}</p>
                    </div>
                    <div className="mt-2 flex">
                      <div className="flex items-center text-sm text-gray-500"><Mail className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />{contact.email}</div>
                    </div>
                  </div>
                  <div className="mt-4 flex-shrink-0 sm:mt-0 sm:ml-5">
                    <div className="flex overflow-hidden -space-x-1">
                      <div className="flex items-center text-sm text-gray-500"><Phone className="flex-shrink-0 mr-1.5 h-5 w-5 text-gray-400" />{contact.phone}</div>
                    </div>
                  </div>
                </div>
                <div className="ml-5 flex-shrink-0"><span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${contact.status === 'Active' ? 'bg-green-100 text-green-800' : 'bg-gray-100 text-gray-800'}`}>{contact.status}</span></div>
                <div className="ml-5 flex-shrink-0"><MoreVertical className="h-5 w-5 text-gray-400" /></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
