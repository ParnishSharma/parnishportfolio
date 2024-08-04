// components/LeetcodeStats.js

import { useEffect, useState } from 'react';

const fetchLeetcodeData = async (username) => {
  try {
    const response = await fetch(`https://leetcode-stats-api.herokuapp.com/${username}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching Leetcode data:', error);
    throw error;
  }
};

const LeetcodeStats = ({ username }) => {
  const [solvedQuestions, setSolvedQuestions] = useState(0);
  const [ranking, setRanking] = useState(0); // Add ranking state
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLeetcodeData = async () => {
      try {
        const data = await fetchLeetcodeData(username);
        setSolvedQuestions(data.totalSolved);
        setRanking(data.ranking); // Set ranking from data
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    getLeetcodeData();
  }, [username]);

  if (loading) {
    return <div className="text-center">Loading...</div>;
  }

  if (error) {
    return <div className="text-center">Error: {error}</div>;
  }

  return (
    <div className="flex flex-col items-center space-y-4 " >
      <div className='text-center text-4xl bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-transparent bg-clip-text py-14 px-8'>
        LEETCODE STATUS
      </div>
      <div className='flex flex-col items-center space-y-4 bg-white  text-center rounded-2xl shadow-2xl p-9  dark:bg-gray-600'>
        <p className='text-2xl text-black font-medium '>Solved Questions: <span className='text-teal-600'>{solvedQuestions}</span></p>
        <p className=' font-medium text-2xl text-black '>Ranking: <span className='text-teal-600'>{ranking}</span></p>
      </div>
    </div>
  );
};

export default LeetcodeStats;
