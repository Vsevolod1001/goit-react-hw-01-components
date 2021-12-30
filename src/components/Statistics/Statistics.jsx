import { StatsTitle, StatLi, StatUl, StatsSpan, StatsSections } from "./Statistics.styled"

export default function Statistics ({stats , title}) {
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