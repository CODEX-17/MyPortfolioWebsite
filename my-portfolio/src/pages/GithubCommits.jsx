import { useState, useEffect } from "react";

const GitHubCommits = ({ owner, repo }) => {
  const [commitCount, setCommitCount] = useState(null);

  useEffect(() => {
    const fetchCommits = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/repos/${owner}/${repo}/commits`
        );
        const data = await response.json();

        console.log(data)
        setCommitCount(data.length); 
      } catch (error) {
        console.error("Error fetching commit data:", error);
      }
    };

    fetchCommits();
  }, [owner, repo]);

  return <p>Total Commits: {commitCount !== null ? commitCount : "Loading..."}</p>;
};

export default GitHubCommits;
