import React, { useState } from 'react';
import { Filter, Download, Terminal } from 'lucide-react';

const Logs = () => {
  const [filter, setFilter] = useState('ALL');

  const logs = [
    { id: '10293', date: '2023-10-27 14:02:11', user: 'SYSTEM', event: 'Firewall rules updated', type: 'INFO' },
    { id: '10294', date: '2023-10-27 14:15:33', user: 'admin_ops', event: 'Manual override on Port 22', type: 'WARN' },
    { id: '10295', date: '2023-10-27 14:18:01', user: 'SYSTEM', event: 'Failed authentication attempt', type: 'ERROR' },
    { id: '10296', date: '2023-10-27 14:22:45', user: 'jdoe', event: 'Accessed sensitive directory /var/log/auth', type: 'WARN' },
    { id: '10297', date: '2023-10-27 14:50:10', user: 'SYSTEM', event: 'Routine malware scan completed', type: 'INFO' },
    { id: '10298', date: '2023-10-27 15:05:22', user: 'UNKNOWN', event: 'Unauthorized protocol detected on Intranet', type: 'ERROR' },
  ];

  const filteredLogs = logs.filter(log => filter === 'ALL' || log.type === filter);

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex justify-between items-end mb-6">
        <div>
          <h1 className="text-3xl font-bold text-white flex items-center gap-2">
            <Terminal className="h-8 w-8 text-cyber-neon" /> System Logs
          </h1>
          <p className="text-gray-400 mt-1">Raw telemetry and event history</p>
        </div>
        <div className="flex gap-2">
          <button className="btn-outline flex items-center gap-2">
            <Filter className="h-4 w-4" /> Filter
          </button>
          <button className="btn-outline flex items-center gap-2">
            <Download className="h-4 w-4" /> Export CSV
          </button>
        </div>
      </div>

      <div className="flex gap-2 mb-4">
        {['ALL', 'INFO', 'WARN', 'ERROR'].map(f => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-4 py-1 rounded-full text-xs font-medium transition-colors border ${
              filter === f 
                ? 'bg-cyber-neon/20 text-cyber-neon border-cyber-neon/50' 
                : 'bg-cyber-800 text-gray-400 border-cyber-700 hover:text-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="glass-panel overflow-hidden font-mono text-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-cyber-900 border-b border-cyber-700 text-gray-500">
                <th className="p-3 font-normal">TIMESTAMP</th>
                <th className="p-3 font-normal">TYPE</th>
                <th className="p-3 font-normal">USER/PROCESS</th>
                <th className="p-3 font-normal w-1/2">EVENT DETAILS</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyber-700/50">
              {filteredLogs.map((log) => (
                <tr key={log.id} className="hover:bg-cyber-800/30 transition-colors">
                  <td className="p-3 text-gray-400">{log.date}</td>
                  <td className="p-3">
                    <span className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold border
                      ${log.type === 'ERROR' ? 'bg-red-500/10 text-red-500 border-red-500/30' : 
                        log.type === 'WARN' ? 'bg-yellow-500/10 text-yellow-500 border-yellow-500/30' : 
                        'bg-blue-500/10 text-blue-500 border-blue-500/30'}`}
                    >
                      {log.type}
                    </span>
                  </td>
                  <td className="p-3 text-cyber-neon">{log.user}</td>
                  <td className="p-3 text-gray-300">{log.event}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filteredLogs.length === 0 && (
            <div className="p-8 text-center text-gray-500 italic">No logs found for the selected filter.</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Logs;
