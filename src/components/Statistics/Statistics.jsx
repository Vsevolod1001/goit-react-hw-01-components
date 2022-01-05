import PropTypes from 'prop-types';

import { StatsTitle, StatLi, StatUl, StatsSpan, StatsSections } from "./Statistics.styled"

export default function Statistics ({stats, title}) {
  
    return (<StatsSections>
    <StatsTitle>{title.length > 0 ? title : false}</StatsTitle>
  
    <StatUl>
        {stats.map(({id, label, percentage})=> (
           <StatLi key = {id}>
           <span>{label}</span>
           <StatsSpan>{percentage}%</StatsSpan>
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
  title: PropTypes.string.isRequired,
};

