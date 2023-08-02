import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutIMG from '../public/assets/About.gif';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#39a5ab]' style={{ marginLeft: '20px' }}>
            About
          </p>
          <h2 className='py-4' style={{ marginLeft: '20px' }}>Who I Am</h2>
          <p className='py-2'style={{ marginLeft: '20px' , textAlign: 'justify'  }}>
          Hello there! I&#39;m Sahil Chowkekar, a passionate and ambitious individual with a strong background in computer science.
           I hold a Bachelor's degree in Computer Engineering from Vidyavardhini&#39;s College of Engineering and Technology, Mumbai University.
           Currently, I am pursuing my Master's in Computer Science at the esteemed University of California, Riverside, with a specialization 
           in Data Science and Full Stack Development.
           </p>
          <p className='py-2 ' style={{ marginLeft: '20px' , textAlign: 'justify'  }}>
          I have programming skills in Python, C, C++, JavaScript, and Java, with web development
           expertise in HTML, CSS, React.js, Next.js, and Node.js. Proficient in SQL, MongoDB, and 
           Firebase, I also have hands-on experience with Keras, Pytorch, TensorFlow, MySQL, Git, 
           GitHub, Apache Hadoop, Apache Spark, and AWS. My interests are in cutting-edge technologies,
            and I aim to contribute to innovative projects in Data Science and Full Stack Development.
          </p>
          <p className='py-2 ' style={{ marginLeft: '20px' , textAlign: 'justify'  }}>
          In all my endeavors, I embrace the philosophy of continuous growth and strive
           to stay at the forefront of technology. I am eager to collaborate with like-minded 
           individuals and organizations to create innovative solutions that make a positive 
           impact on the world. Let's connect and embark on this exciting journey together!
          </p>
          <Link href='/#projects'>
            <p className='py-2 underline cursor-pointer' style={{ marginLeft: '20px' }}>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutIMG} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
