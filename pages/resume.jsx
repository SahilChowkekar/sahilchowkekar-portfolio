import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Sahil Chowkekar</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center  text-gray-900'>
          <h2 className='text-center'>Sahil Chowkekar</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/sahil-chowkekar-9676a71b4/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/SahilChowkekar'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Proven Leadership <span className='px-1'>|</span> Web Development{' '}
              <span className='px-1'>|</span> Complex Problem Solving
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Proven Leadership</p>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p  style={{ marginLeft: '20px' , textAlign: 'justify'  }}>
        Highly skilled in analytical thinking, innovation, and leading teams in 
        fast-paced and demanding settings. Proficient in devising effective strategies 
        and implementing efficient processes. Possesses a diverse range of analytical abilities,
         excels at teamwork and building strong relationships. A dedicated professional with 
         exceptional interpersonal skills and adept at solving complex problems. Demonstrates 
         a successful history of critical thinking, generating novel ideas, and maximizing productivity.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Technical Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Languages</span>
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>C++
            <span className='px-2'>|</span>C
            <span className='px-2'>|</span> HTML
            <span className='px-2'>|</span>CSS
            <span className='px-2'>|</span>Javascript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next JS
            <span className='px-2'>|</span>NoSQL
            <span className='px-2'>|</span>Shell scripting
            <span className='px-2'>|</span>Java 
            <span className='px-2'>|</span> Node.js
          </p>
          <p className='py-2'>
            <span className='font-bold'>Database</span>
            <span className='px-2'>|</span>SQL
            <span className='px-2'>|</span>MongoDB
            <span className='px-2'>|</span>Firebase
          </p>

          <p className='py-2'>
            <span className='font-bold'>Developer Tools and Technologies</span>
            <span className='px-2'>|</span>Keras
            <span className='px-2'>|</span>Pytorch
            <span className='px-2'>|</span>Tensorflow
            <span className='px-2'>|</span> MySQL
            <span className='px-2'>|</span>Git
            <span className='px-2'>|</span>GitHub
            <span className='px-2'>|</span>Apache Hadoop
            <span className='px-2'>|</span>Apache Spark
            <span className='px-2'>|</span>AWS
          </p>
         
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
        EDUCATION

        </h5>
        {/* EDUCATION */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            University of California, Riverside
            </span>
            <span className='px-2'>|</span>California, USA
          </p>
          <p className='py-1 italic'>Masters in Computer Science (Sep 2022 - Present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            <b>Coursework</b>- Big Data Management, Artificial Intelligence, Fundamental of Machine Learning, Deep Learning, Data
Mining, Natural Language Generation with Deep Learning, Database Management System
           </li>
          </ul>
        </div>


        {/* Personal Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Vidyavardhini’s College of Engineering and Technology; Mumbai University
            </span>
            <span className='px-2'>|</span>Mumbai, India
          </p>
          <p className='py-1 italic'>Bachelor in Computer Engineering (2019 - 2022)</p>
          
        </div>

         {/* Personal Experience */}
         <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
            Vidyavardhini’s Bhausaheb Vartak Polytechnic College; MSBTE
            </span>
            <span className='px-2'>|</span>Mumbai, India
          </p>
          <p className='py-1 italic'>Diploma in Computer Engineering (2016 - 2019)</p>
          
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
          Work Experience
        </h5>
      
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>University of California, Riverside</span>
            <span className='px-2'>|</span>California, USA
          </p>
          <p className='py-1 italic'>Grader- CS141: Intermediate Data Structures and Algorithms (April 2023 - June 2023)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Demonstrated expertise in grading assignments, exams, and projects promptly and accurately, while delivering
constructive feedback to facilitate student improvement.
            </li>
            <li>
            Actively participated in grading meetings and discussions, contributing insights and suggestions to enhance the
grading process and ensure consistent evaluation.
            </li>
            <li>
            Collaborated closely with the course instructor and fellow graders to ensure consistency in grading standards
and fairness in evaluations.

            </li>
            
          </ul>
        </div>

        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>VI Solution</span>
            <span className='px-2'>|</span>Bangalore, India
          </p>
          <p className='py-1 italic'> Intern (Jun 2021 - July 2021)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Implemented IoT-based application using LabVIEW and was able to build graphical user interfaces for
systems.
            </li>
            <li>
            The Industrial IoT, Machine learning Internship and provide more knowledge about specific tools relevant in
the field of instrumentation and control engineering.
            </li>
         
            
          </ul>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
        EXTRACURRICULAR

        </h5>

        {/* EXTRACURRICULAR*/}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Volunteer</span>
            <span className='px-2'>|</span>Mumbai, India
          </p>
          {/* <p className='py-1 italic'> Intern (Jun 2021 - July 2021)</p> */}
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Volunteer at NGO in “Durga Mata Sevabhavi Organization” for donating food to poor people. (2020).

            </li>
            <li>
            Volunteer at NGO in “Swami Samarth Nagari Seva Sahakari Sanstha Marya” for beach cleaning
program.(2019)
            </li>
         
            
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
