import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Codebase',
    Svg: require('@site/static/img/computer-monitor-svgrepo-com.svg').default,
    description: (
      <>
        
      </>
    ),
  },
  {
    title: 'Documentation',
    Svg: require('@site/static/img/notepad-with-spring-svgrepo-com.svg').default,
    description: (
      <>
      </>
    ),
  },
  {
    title: 'Explanation',
    Svg: require('@site/static/img/eco-lightbulb-symbol-svgrepo-com.svg').default,
    description: (
      <>
        
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
