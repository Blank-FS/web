import { Card } from '@/components/ui/card';
import { Mail, Twitter, Users } from 'lucide-react';

/* 
TODO #8 (Large TODO): Add metrics for the following:
1. total users
2. total applications
3. overall rejection rate
4. overall success rate
5. overall pending rate (which is 1 - rejection rate - success rate)

There is an "admin_metrics" table which has this information, fetch the data from there and display it in these cards
Remove any additional cards that aren't needed as well, think about other metrics, which we can implement later.
*/

export function LeaderboardMetrics() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card className="border-[#374151] p-4">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">Active last 30d</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#374151]">
              <span className="text-xs">i</span>
            </div>
          </div>
          <div className="mb-1 text-2xl font-bold">370</div>
          <div className="text-sm text-gray-400">Users made applications</div>
          <div className="mt-4 text-sm text-gray-400">3% of all</div>
        </div>
      </Card>

      <Card className="border-[#374151] p-4">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">Total applications</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#374151]">
              <span className="text-xs">i</span>
            </div>
          </div>
          <div className="mb-1 text-2xl font-bold">10,823</div>
          <div className="text-sm text-gray-400">Across all platforms</div>
          <div className="mt-4 text-sm text-gray-400">$694.7 average</div>
        </div>
      </Card>

      <Card className="border-[#374151] p-4">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">Success rate</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#374151]">
              <span className="text-xs">i</span>
            </div>
          </div>
          <div className="mb-1 text-2xl font-bold">28.4%</div>
          <div className="text-sm text-gray-400">Total</div>
          <div className="mt-4 text-sm text-gray-400">95% have 10+ applications</div>
        </div>
      </Card>

      <Card className="border-[#374151] p-4">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">Avg. response time</span>
            <div className="flex h-5 w-5 items-center justify-center rounded-full bg-[#374151]">
              <span className="text-xs">i</span>
            </div>
          </div>
          <div className="flex items-end gap-2">
            <div className="h-16 w-6 rounded-sm bg-[#22c55e]"></div>
            <div className="h-10 w-6 rounded-sm bg-[#22c55e]"></div>
            <div className="h-6 w-6 rounded-sm bg-[#22c55e]"></div>
            <div className="h-4 w-6 rounded-sm bg-[#22c55e]"></div>
          </div>
          <div className="mt-2 flex justify-between text-xs text-gray-400">
            <span>&lt;1wk</span>
            <span>1-2wk</span>
            <span>2-4wk</span>
            <span>&gt;4wk</span>
          </div>
        </div>
      </Card>

      <Card className="border-[#374151] p-4">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">Email</span>
            <Mail className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mb-1 text-2xl font-bold">3,928</div>
          <div className="text-sm text-gray-400">Contacts available</div>
          <div className="mt-4 text-sm text-gray-400">4% of all</div>
        </div>
      </Card>

      <Card className="border-[#374151] p-4">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">LinkedIn</span>
            <Twitter className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mb-1 text-2xl font-bold">15,037</div>
          <div className="text-sm text-gray-400">Contacts available</div>
          <div className="mt-4 text-sm text-gray-400">23% of all</div>
        </div>
      </Card>

      <Card className="border-[#374151] p-4">
        <div className="flex flex-col">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-sm text-gray-400">Referrals</span>
            <Users className="h-4 w-4 text-gray-400" />
          </div>
          <div className="mb-1 text-2xl font-bold">29,203</div>
          <div className="text-sm text-gray-400">3k+ LinkedIn connections</div>
          <div className="mt-4 text-sm text-gray-400">25% of all</div>
        </div>
      </Card>
    </div>
  );
}
