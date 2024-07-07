import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

const blinkAnimation = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0; }
  100% { opacity: 1; }
`;

const BlinkingText = styled.span`
  color: red;
  animation: ${blinkAnimation} 1s infinite;
  font-size: 0.8rem;
  margin-left: 0.5rem;
`;

const LeetCodeLink = styled.a`
  color: inherit;
  text-decoration: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
`;

const LeetCodeSymbol = styled.span`
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;

function Problems() {
  const [totalSolved, setTotalSolved] = useState(0);

  useEffect(() => {
    fetch('https://leetcode-stats-api.herokuapp.com/pavankalyan140200')
      .then(response => response.json())
      .then(data => {
        if (data.status === 'success') {
          setTotalSolved(data.totalSolved);
        }
      })
      .catch(error => console.error('Error fetching LeetCode stats:', error));
  }, []);

  const handleLeetCodeClick = () => {
    window.open('https://leetcode.com/u/pavankalyan140200/', '_blank');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <LeetCodeLink onClick={handleLeetCodeClick}>
        <LeetCodeSymbol>🔥</LeetCodeSymbol>
        <h1>LeetCode</h1>
        <BlinkingText>Live</BlinkingText>
      </LeetCodeLink>
      <p>Total Problems Solved: {totalSolved}</p>
    </div>
  );
}

export default Problems;
