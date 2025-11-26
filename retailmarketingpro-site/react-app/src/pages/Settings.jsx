import React from 'react'
import { Bell, Lock, User, Globe } from 'lucide-react'

export const Settings = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-semibold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">Manage your account settings and preferences.</p>
      </div>

      <div className="bg-white shadow overflow-hidden sm:rounded-md">
        <div className="divide-y divide-gray-200">
          <div className="px-4 py-5 sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Profile</h3>
                <p className="mt-1 text-sm text-gray-500">This information will be displayed publicly so be careful what you share.</p>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <form>
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">First name</label>
                      <input type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label className="block text-sm font-medium text-gray-700">Last name</label>
                      <input type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
                    </div>
                    <div className="col-span-6 sm:col-span-4">
                      <label className="block text-sm font-medium text-gray-700">Email address</label>
                      <input type="text" className="mt-1 focus:ring-blue-500 focus:border-blue-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md p-2" />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="px-4 py-5 sm:p-6">
            <div className="md:grid md:grid-cols-3 md:gap-6">
              <div className="md:col-span-1">
                <h3 className="text-lg font-medium leading-6 text-gray-900">Notifications</h3>
                <p className="mt-1 text-sm text-gray-500">Decide which communications you'd like to receive and how.</p>
              </div>
              <div className="mt-5 md:mt-0 md:col-span-2">
                <fieldset>
                  <legend className="sr-only">By Email</legend>
                  <div className="text-base font-medium text-gray-900">By Email</div>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="comments" name="comments" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="font-medium text-gray-700">Comments</label>
                        <p className="text-gray-500">Get notified when someone posts a comment on a posting.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input id="candidates" name="candidates" type="checkbox" className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded" />
                      </div>
                      <div className="ml-3 text-sm">
                        <label className="font-medium text-gray-700">Candidates</label>
                        <p className="text-gray-500">Get notified when a candidate applies for a job.</p>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
