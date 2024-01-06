import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useGlobalData from '@docusaurus/useGlobalData';
import React from 'react';

const FileList = (args) => {
  const globalData = useGlobalData();
  console.log(globalData)
  const files = globalData['gather-files'];
    console.log(args)
    const val = parseInt(args["i"])
    if (!files || !files.default || !files.default[val] || files.default[val].some(x => !x)){
        return <></>
    }
  return (
    <ul>
      {files.default[val].map((file) => (
        <li><a href={`./docs${file.slug}`}>{file.title}</a></li>
      ))}
    </ul>
  );
};


const FeatureList = [
  {
    title: 'Unity Animation',
    img: require('@site/static/img/unity.png').default,
    description: (
        <FileList i = "0"/>
    ),
  },
  {
    title: 'Avatar 3.0',
    img: require('@site/static/img/avatars.png').default,
    description: (
        <FileList i = "1"/>
    ),
  },
  {
    title: 'Other',
    img: require('@site/static/img/other.png').default,
    description: (
        <FileList i = "2"/>
    ),
  },
];


function Feature({img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img src={img} className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        {description}
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
