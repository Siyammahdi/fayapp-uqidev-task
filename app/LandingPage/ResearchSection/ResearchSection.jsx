"use client"
import ComponentLayout from '@/app/ComponentLayout/ComponentLayout';
import GradientText from '@/app/Components/GradientText/GradientText';
import Image from 'next/image';
import React, { useState } from 'react';
import laptopClosed from '../../../public/ResearchSection/laptopClosed.png'
import logoHovered from '../../../public/ResearchSection/logoHovered.png'
import logoUnhovered from '../../../public/ResearchSection/logoUnhovered.png'

const ResearchSection = () => {

    const [hovered, setHovered] = useState(false)

    return (
        <div className='pt-28'>
            <ComponentLayout>
                <div className='py-28'>
                    <div className='absolute top-[650px] left-40' style={{ backgroundImage: 'radial-gradient(circle, rgb(42, 43, 48) 1px, rgb(42, 43, 48) 1px, transparent 1px, transparent 100%)', backgroundRepeat:'repeat', width: '1000px', height: '700px', maskImage: 'radial-gradient(rgb(0, 0, 0), transparent 50%)', backgroundSize:'8px 8px'}}>

                    </div>
                    <GradientText className="text-center w-1/4 mx-auto mb-8">A whole new take on research.</GradientText>
                    <div className='flex justify-center'>
                        <button onMouseOut={() => setHovered(false)} onMouseEnter={() => setHovered(true)} className='btn btn-outline z-10 bg-white bg-opacity-5 rounded-full px-16 py-0 hover:bg-white text-white border-white font-bold shadow-lg shadow-gray-800'>Try it free</button>

                    </div>
                </div>
                <div>
                    <Image src={laptopClosed} height={4000} width={1200} alt='laptop' />
                    {
                        hovered ? <Image className='absolute -bottom-[892px] left-[75px]' src={logoHovered} height={4000} width={1200} alt='hovered' /> 
                        :
                        <Image className='absolute -bottom-[892px] left-[75px]' src={logoUnhovered} height={4000} width={1200} alt='hovered' /> 
                    }
                </div>
                
            </ComponentLayout>
        </div>
    );
};

export default ResearchSection;