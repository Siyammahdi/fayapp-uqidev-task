import Image from 'next/image';
import React from 'react';
import keyboard from '../../../public/keyboard.png'
import key from '../../../public/BorderedKey.png'
import GradientText from '@/app/Components/GradientText/GradientText';
import BriefText from '@/app/Components/BriefText/BriefText';
import ComponentLayout from '@/app/ComponentLayout/ComponentLayout';

const Command = () => {
    return (
        <div className='bg-[#0f0f12]'>
            <ComponentLayout>
                <div className='w-full flex justify-between py-24'>
                    <div className='w-1/2'><GradientText>Always at your command.</GradientText></div>
                    <div className='w-2/5'><BriefText>The Fey Command lets you have full control at your fingertips. Manage your portfolio, view transactions and execute real-time orders in seconds, all without ever touching your mouse.</BriefText></div>
                </div>
                <div>
                    <div>
                        <Image src={keyboard} width={1000} height={300} alt='keyboard' />
                        <Image className='absolute top-[400px]' src={key} width={1000} height={300} alt='keyboard' />
                    </div>
                </div>
            </ComponentLayout>
        </div>
    );
};

export default Command;