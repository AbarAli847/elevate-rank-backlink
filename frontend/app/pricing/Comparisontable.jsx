"use client"

import React from 'react';
import SEOCTA from './Seocta';

const services = [
  {
    name: 'Fiverr',
    logo: '/fiver.png', // Replace with actual path
    checks: [false, false, false, false, true],
  },
  {
    name: 'Freelancer',
    logo: 'freelance.jpg',
    checks: [true, true, false, false, false],
  },
  {
    name: 'ElevateRank',
    logo: '/linkbuilder.png',
    highlight: true,
    checks: [true, true, true, true, true],
  },
  {
    name: 'Link Brokers',
    logo: '/broker.jpg',
    checks: [false, false, false, false, true],
  },
  {
    name: 'Other Agencies',
    logo: '/agenci.jpg',
    checks: [true, false, false, false, true],
  },
];

const headings = ['Strategist', 'Analysis', 'Sustainable', 'Relationships', 'Big Scale'];

const ComparisonTable = () => {
  return (
    <>
    <div className="bg-gray-200 py-12 px-4 sm:px-10">
      <div className="text-center mb-10">
        <p className="text-xl">🤔 Us vs. Competitors</p>
        <h2 className="text-4xl font-bold mt-7">
          Why choose <span className="bg-blue-800 text-white px-3 py-1 rounded-md">ElevateRank?</span>
        </h2>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-2xl shadow-md">
          <thead>
            <tr className="border-b">
              <th className="p-4 text-left">Other Services</th>
              {headings.map((h, idx) => (
                <th key={idx} className="p-4 text-center font-medium">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {services.map((service, idx) => (
              <tr key={idx} className={`text-center ${service.highlight ? 'bg-blue-800 text-white' : ''}`}>
                <td className="flex items-center gap-3 p-4">
                  <img src={service.logo} alt={service.name} className="h-10 w-10 rounded-md" />
                  <span className="font-semibold text-white dark:text-white">{service.name}</span>
                </td>
                {service.checks.map((check, cIdx) => (
                  <td key={cIdx} className="p-4">
                    {check ? (
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center ${service.highlight ? 'bg-black' : 'bg-blue-800'}`}>
                        <span className="text-white font-bold">✓</span>
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border-2 border-gray-400 flex items-center justify-center">
                        <span className="text-gray-400 text-lg">×</span>
                      </div>
                    )}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
      <SEOCTA/>
    
    </>
  );
};

export default ComparisonTable;