const stats = [
  ['15+', 'Years of experience'],
  ['40+', 'Clients'],
  ['50+', 'Projects'],
  ['5', 'Star ratings'],
];
export default function PersonalStats() {
  return <section className="personal-stats" aria-label="Experience and results"><div className="container"><dl className="personal-stats__grid">
    {stats.map(([value, label]) => <div className="personal-stats__item" key={label}><dt>{label}</dt><dd>{value}{label === 'Star ratings' && <span className="personal-stats__stars" aria-hidden="true">&#9733;&#9733;&#9733;&#9733;&#9733;</span>}</dd></div>)}
  </dl></div></section>;
}
