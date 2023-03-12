import { Run } from '../Run/Run'

export const RunList = ({ runs }) => (
  <ul>
    {runs.map(run => (
      <Run key={run.id} {...run} />
    ))}
  </ul>
)
