import PropTypes from 'prop-types';

import { StatsTitle, StatLi, StatUl, StatsSpan, StatsSections } from "./Statistics.styled"

export default function Statistics ({stats, title}) {
    return (<StatsSections>
    <StatsTitle>{title}</StatsTitle>
  
    <StatUl>
        {stats.map(stat => (
           <StatLi key = {stat.id}>
           <span>{stat.label}</span>
           <StatsSpan>{stat.percentage}%</StatsSpan>
         </StatLi>
        ))}       
    </StatUl>
  </StatsSections>
    )
}

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
      PropTypes.shape({
          id: PropTypes.string.isRequired,
          label: PropTypes.string.isRequired,
          percentage: PropTypes.number.isRequired,
      }),
  ),
};

