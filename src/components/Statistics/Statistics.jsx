import css from './Statistics.module.css';
import getRandomColor from '../utils/getRandomColor';
export default function Statistics({ title, stats }) {
  const statElements = stats.map(statElement => (
    <li
      key={statElement.id}
      className={css.item}
      style={{
        backgroundColor: getRandomColor(),
      }}
    >
      <span className={css.label}>{statElement.label}</span>
      <span className={css.percentage}>{statElement.percentage}%</span>
    </li>
  ));

  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>{statElements}</ul>
    </section>
  );
}
