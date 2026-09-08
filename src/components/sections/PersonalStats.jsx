const stats = [
  ['15+', 'Years in Software Engineering'],
  ['Amazon', 'Enterprise Engineering Experience'],
  ['10+', 'Enterprise Solutions Delivered'],
  ['40%', 'Operational Impact Reduction'],
];
export default function PersonalStats() {
  return <section className="personal-stats" aria-label="Experience and results"><div className="container"><dl className="personal-stats__grid">
    {stats.map(([value, label]) => <div className="personal-stats__item" key={label}><dt>{label}</dt><dd className={value === 'Amazon' ? 'personal-stats__text-value' : undefined}>{value}</dd></div>)}
  </dl></div></section>;
}
