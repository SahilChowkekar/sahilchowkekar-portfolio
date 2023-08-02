import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import mapreduceImg from '../public/assets/projects/Mapreduce.png';
import ARImg from '../public/assets/projects/AR.jpeg'
import BSPImg from '../public/assets/projects/breastCancer.png'
import ClgImg from '../public/assets/projects/college.png'
import ProjectItem from './ProjectItem';



const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#34749f]' style={{ marginLeft: '20px' }}>
          Projects
        </p>
        <h2 className='py-4' style={{ marginLeft: '20px' }}>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Big Data Processing and Revenue Analysis using MapReduce'
            backgroundImg={mapreduceImg}
            projectUrl='https://github.com/SahilChowkekar/Augmented-Reality-for-the-learning-of-3D-geometry'
            
          />
          <ProjectItem
            title='Augmented Reality for the learning of 3D geometry'
            backgroundImg={ARImg}
            projectUrl='https://github.com/SahilChowkekar/Augmented-Reality-for-the-learning-of-3D-geometry'
            

          />
          <ProjectItem
            title='Breast Cancer Prediction'
            backgroundImg={BSPImg}
            projectUrl='https://github.com/SahilChowkekar/Breast-Cancer-Prediction'
           

          />
          <ProjectItem
            title='College Website'
            backgroundImg={ClgImg}
            projectUrl='https://sahilchowkekar.github.io/CollegeWebsite/'
            

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
