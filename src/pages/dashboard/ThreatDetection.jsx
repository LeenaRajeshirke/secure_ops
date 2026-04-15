import React from 'react';
import { ShieldAlert, AlertTriangle, Eye, ShieldCheck } from 'lucide-react';

const ThreatDetection = () => {
  const threats = [
    { id: 'TRT-892', type: 'DDoS Attack Attempt', source: 'Multiple IPs', severity: 'High', status: 'Active', time: '2 mins ago' },
    { id: 'TRT-891', type: 'Privilege Escalation', source: 'User-Host-02', severity: 'Critical', status: 'Mitigated', time: '1 hr ago' },
    { id: 'TRT-890', type: 'Malware Pattern', source: 'Email Att.', severity: 'Medium', status: 'Quarantined', time: '3 hrs ago' },
    { id: 'TRT-889', type: 'Failed Auth Spike', source: '10.0.0.8', severity: 'Low', status: 'Monitoring', time: '5 hrs ago' },
  ];

  const getSeverityStyle = (sev) => {
    switch(sev) {
      case 'Critical': return 'text-red-500 bg-red-500/10 border-red-500/30';
      case 'High': return 'text-orange-500 bg-orange-500/10 border-orange-500/30';
      case 'Medium': return 'text-yellow-500 bg-yellow-500/10 border-yellow-500/30';
      default: return 'text-blue-500 bg-blue-500/10 border-blue-500/30';
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-3xl font-bold text-white">Threat Detection Center</h1>
        <p className="text-gray-400 mt-1">Identify, analyze, and neutralize potential risks</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="glass-card flex flex-col">
          <div className="text-gray-400 mb-2">Total Threats (24h)</div>
          <div className="text-4xl font-bold text-white">124</div>
          <div className="text-sm text-green-500 mt-2">↓ 12% from yesterday</div>
        </div>
        <div className="glass-card flex flex-col border-red-500/30">
           <div className="text-gray-400 mb-2 items-center flex gap-2"><AlertTriangle className="h-4 w-4 text-red-500"/> Critical Action Needed</div>
          <div className="text-4xl font-bold text-red-500">2</div>
          <div className="text-sm text-red-400 mt-2">Requires immediate response</div>
        </div>
        <div className="glass-card flex flex-col border-blue-500/30">
          <div className="text-gray-400 mb-2 items-center flex gap-2"><ShieldCheck className="h-4 w-4 text-blue-500"/> Auto-Mitigated</div>
          <div className="text-4xl font-bold text-blue-500">86</div>
          <div className="text-sm text-gray-400 mt-2">Handled by SecureOps Policy</div>
        </div>
      </div>

      <div className="glass-panel overflow-hidden">
        <div className="p-6 border-b border-cyber-700 flex justify-between items-center bg-cyber-800/50">
          <h3 className="text-lg font-bold text-white">Threat Logbook</h3>
          <div className="flex gap-2">
             <button className="px-3 py-1 bg-cyber-900 border border-cyber-700 rounded text-sm hover:border-cyber-neon/50">Filter</button>
             <button className="px-3 py-1 bg-cyber-900 border border-cyber-700 rounded text-sm hover:border-cyber-neon/50">Export</button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-cyber-900 text-gray-400 text-sm border-b border-cyber-700">
                <th className="p-4 font-medium">ID</th>
                <th className="p-4 font-medium">Threat Type</th>
                <th className="p-4 font-medium">Source</th>
                <th className="p-4 font-medium">Severity</th>
                <th className="p-4 font-medium">Status</th>
                <th className="p-4 font-medium">Time</th>
                <th className="p-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cyber-700/50">
              {threats.map((t) => (
                <tr key={t.id} className="hover:bg-cyber-800/30 transition-colors">
                  <td className="p-4 text-gray-300 font-mono text-sm">{t.id}</td>
                  <td className="p-4 text-white font-medium flex items-center gap-2">
                    {t.severity === 'Critical' && <ShieldAlert className="h-4 w-4 text-red-500" />}
                    {t.type}
                  </td>
                  <td className="p-4 text-gray-300">{t.source}</td>
                  <td className="p-4">
                    <span className={`px-2.5 py-1 rounded-full text-xs font-semibold border ${getSeverityStyle(t.severity)}`}>
                      {t.severity}
                    </span>
                  </td>
                  <td className="p-4 text-gray-300">{t.status}</td>
                  <td className="p-4 text-gray-400 text-sm">{t.time}</td>
                  <td className="p-4 flex gap-2 justify-end">
                    <button className="p-1.5 hover:bg-cyber-700 rounded text-gray-400 hover:text-white" title="Analyze">
                      <Eye className="h-4 w-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ThreatDetection;
