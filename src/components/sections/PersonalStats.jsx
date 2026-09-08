const stats = [
  ['15+', 'Years in Software Engineering'],
  ['Apple + Amazon', 'Enterprise Engineering Experience'],
  ['20+', 'Production Projects Delivered'],
  ['40%', 'Operational Impact Reduction'],
];
export default function PersonalStats() {
  return <section className="personal-stats" aria-label="Experience and results"><div className="container"><dl className="personal-stats__grid">
    {stats.map(([value, label]) => <div className="personal-stats__item" key={label}><dt>{label}</dt><dd className={value === 'Apple + Amazon' ? 'personal-stats__text-value' : undefined}>{value}</dd></div>)}
  </dl></div></section>;
}
