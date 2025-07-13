'use client';
import { useState, useEffect } from 'react';

interface Publication {
  id: string;
  title: string;
  authors: string;
  journal: string;
  year: string;
  url?: string;
}

export default function Publications() {
  const [publications, setPublications] = useState<Publication[]>([]);
  const [filterYear, setFilterYear] = useState('all');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/publications`)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => setPublications(data))
      .catch(err => {
        console.error('Error fetching publications:', err);
        setError('Failed to load publications. Please try again later.');
      });
  }, []);

  const filteredPublications = publications.filter(pub => {
    const matchesYear = filterYear === 'all' || pub.year === filterYear;
    const matchesKeyword = searchKeyword === '' ||
      pub.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      pub.authors.toLowerCase().includes(searchKeyword.toLowerCase()) ||
      pub.journal.toLowerCase().includes(searchKeyword.toLowerCase());
    return matchesYear && matchesKeyword;
  });

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-white">
      <h2 className="text-3xl font-bold mb-6">Publications</h2>
      <div className="max-w-3xl w-full">
        <div className="mb-4 flex flex-col sm:flex-row gap-4 justify-center">
          <div>
            <label htmlFor="yearFilter" className="block text-center">Filter by Year:</label>
            <select
              id="yearFilter"
              value={filterYear}
              onChange={(e) => setFilterYear(e.target.value)}
              className="p-2 border rounded"
            >
              <option value="all">All Years</option>
              <option value="2024">2024</option>
              <option value="2025">2025</option>
            </select>
          </div>
          <div>
            <label htmlFor="searchKeyword" className="block text-center">Search by Keyword:</label>
            <input
              id="searchKeyword"
              type="text"
              value={searchKeyword}
              onChange={(e) => setSearchKeyword(e.target.value)}
              placeholder="Search title, authors, or journal"
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        {error ? (
          <p className="text-center text-red-600">{error}</p>
        ) : filteredPublications.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPublications.map(pub => (
              <div key={pub.id} className="p-4 bg-gray-100 rounded-lg shadow-lg">
                <p>{pub.authors}, "{pub.title}," <i>{pub.journal}</i>, {pub.year}.</p>
                {pub.url && (
                  <a href={pub.url} target="_blank" className="text-blue-600 hover:underline">Read More</a>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center">No publications found.</p>
        )}
      </div>
    </div>
  );
}
