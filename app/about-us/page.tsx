import { BreadcrumbComponent } from '@/components/BreadcrumbComponent';
import { IconBuildingStore, IconCar, IconCarSuv, IconUsers } from '@tabler/icons-react'
import { ArrowUpRight } from 'lucide-react'
import { Libre_Baskerville } from 'next/font/google';
import Image from 'next/image'
import React from 'react'

export const metadata = {
    title: "About Us | Vipul Motors",
    description: "Discover the story behind Vipul Motors – our legacy, values, and commitment to delivering unmatched car buying and ownership experiences.",
};

const libre = Libre_Baskerville({ subsets: ["latin"], weight: ["400", "700"] });


export default function page() {
    return (
        <div className='flex w-full justify-center'>
            <div className='flex flex-col w-full justify-center'>
                {/* <div>
                    <BreadcrumbComponent />
                </div> */}

                <div className='flex flex-col w-full border-b-1 bg-white border-gray-200 items-center gap-2 py-4'>
                    <div className='text-xl sm:text-2xl font-semibold'>About Us</div>
                    <div className='flex gap-2 items-center'>
                        <a href="/">
                            <div className='text-sm text-red-500 hover:text-text-600'>Home</div>
                        </a>
                        <div className='text-sm'>/</div>
                        <div className='text-sm'>About Us</div>
                    </div>
                </div>

                <div className='flex w-full justify-center'>
                    {/* <div className='flex w-full md:w-[65%] flex-col sm:justify-center py-4 sm:pt-8 sm:pb-16 px-4 md:px-0 gap-12 sm:gap-16'> */}
                    <div className='flex w-full flex-col sm:justify-center p-4 sm:py-8 gap-12 sm:gap-16 max-w-6xl'>

                        {/* <div className='sm:w-1/2 w-full flex flex-col gap-4'> */}
                        <div className='w-full flex flex-col sm:flex-row gap-8 sm:gap-4 h-full'>
                            <div className='w-full sm:w-1/3 flex flex-col gap-4 justify-between'>
                                <div className='flex flex-col gap-1'>
                                    <div className={`${libre.className} text-xl font-semibold`}>DRIVEN BY TRUST.</div>
                                    <div className={`${libre.className} text-xl font-semibold`}>DEFINED BY EXCELLENCE.</div>
                                </div>

                                <div className="hidden sm:flex w-full flex-col justify-center gap-8">

                                    <div className="flex flex-col gap-1 w-full">

                                        <div className="flex gap-4 items-center">
                                            <div className="py-1.5">
                                                <IconUsers size={22} />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="font-semibold">100+ Happy Customers</div>
                                                {/* <div>Trusted by over 50 lakh satisfied customers across the country.</div> */}
                                            </div>
                                        </div>
                                        <div className="flex gap-4 items-center">
                                            <div className="py-1">
                                                <IconBuildingStore size={22} />
                                            </div>
                                            <div className="flex flex-col">
                                                <div className="font-semibold">2 Workshops</div>
                                                {/* <div>Get expert care and service at our 19 authorized workshops.</div> */}
                                            </div>
                                        </div>

                                    </div>

                                    {/* <Button className='w-fit'>Contact Us</Button> */}
                                    <a href="/contact-us" className="group flex gap-2 items-center border-1 bg-red-500 hover:bg-red-600 text-white w-fit h-fit px-4 py-3">
                                        <div className="text-sm">Contact Us</div>
                                        <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                    </a>

                                </div>

                            </div>

                            <div className="w-full sm:w-2/3 flex flex-col gap-2">
                                <div>
                                    SGS Technical Solutions – Engineering Excellence, Delivered with Precision
                                </div>
                                <div>
                                    Established in 2010, SGS Technical Solutions has emerged as a trusted leader in providing high-quality fire-rated doors, panels, partitions, and modular space solutions for commercial, industrial, and institutional projects. With a strong commitment to safety, innovation, and precision, we deliver solutions that protect lives, enhance operational efficiency, and elevate interior spaces.
                                </div>
                                <div>
                                    Over the years, we have partnered with leading organizations across construction, healthcare, corporate, and industrial sectors, providing tailored solutions that meet both functional and regulatory requirements. Our expertise spans installation, customization, and maintenance of fire-rated structures, ensuring compliance with the highest safety standards.
                                </div>
                                <div>
                                    At SGS Technical Solutions, we believe excellence is achieved through a blend of technical expertise, meticulous execution, and customer-centric service. Our team of skilled engineers, technicians, and project managers brings in-depth knowledge, hands-on experience, and dedication to every project, ensuring timely delivery without compromising quality.
                                </div>
                                <div>
                                    Our vision is to create safer, smarter, and more flexible spaces. From concept to installation, SGS Technical Solutions stands as a dependable partner, committed to protecting assets, optimizing environments, and building long-term relationships through trust, integrity, and exceptional service.
                                </div>
                            </div>


                            <div className="flex sm:hidden w-full flex-col justify-center gap-8">

                                {/* <div className="flex flex-col gap-1 w-full"> */}
                                <div className="grid grid-cols-2 gap-1 w-full">

                                    <div className="flex flex-col gap-1">
                                        <div className="py-1">
                                            <IconUsers size={36} />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="font-semibold">100+ Happy Customers</div>
                                            {/* <div>Trusted by over 50 lakh satisfied customers across the country.</div> */}
                                        </div>
                                    </div>

                                    <div className="flex flex-col gap-1">
                                        <div className="py-1">
                                            <IconBuildingStore size={36} />
                                        </div>
                                        <div className="flex flex-col">
                                            <div className="font-semibold">2 Workshops</div>
                                            {/* <div>Get expert care and service at our 19 authorized workshops.</div> */}
                                        </div>
                                    </div>

                                </div>

                                {/* <Button className='w-fit'>Contact Us</Button> */}
                                <a href="/contact-us" className="group flex gap-2 items-center border-1 bg-red-500 hover:bg-red-600 text-white w-fit h-fit px-4 py-3">
                                    <div className="text-sm">Contact Us</div>
                                    <ArrowUpRight size={20} className="transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1" />
                                </a>

                            </div>

                        </div>

                        {/* Our team */}
                        {/* <div className='flex flex-col gap-4'>
                        <div className='text-3xl font-semibold'>Our Team</div>
                        <div className='grid grid-cols-1 sm:grid-cols-3 w-full h-full sm:gap-4 gap-8'>

                            <div className='flex flex-col gap-2'>
                                <div className='h-[360px] w-full'>
                                    <Image
                                        width={200}
                                        height={200}
                                        alt='anniversary'
                                        src='/Mr-Vinit-Beriwala.jpeg'
                                        className="w-full h-full sm:h-full object-cover object-left"
                                    />
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-semibold'>Mr. Vinit Beriwala</div>
                                    <div className='text-sm'>Managing Director, Vipul Motors Pvt. Ltd.</div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='h-[360px] w-full'>
                                    <Image
                                        width={200}
                                        height={200}
                                        alt='anniversary'
                                        src='/Mr-Vitthal-Beriwala.jpeg'
                                        className="w-full h-full sm:h-full object-cover object-left"
                                    />
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-semibold'>Mr. Vitthal Beriwala</div>
                                    <div className='text-sm'>Director, Vipul Motors Pvt. Ltd.</div>
                                </div>
                            </div>

                            <div className='flex flex-col gap-2'>
                                <div className='h-[360px] w-full'>
                                    <Image
                                        width={200}
                                        height={200}
                                        alt='anniversary'
                                        src='/Mr-Manan-Kedia.jpeg'
                                        className="w-full h-full sm:h-full object-cover object-left"
                                    />
                                </div>

                                <div className='flex flex-col gap-1'>
                                    <div className='text-lg font-semibold'>Mr. Manan Kedia</div>
                                    <div className='text-sm'>CEO Nexa, Vipul Motors Pvt. Ltd.</div>
                                </div>
                            </div>


                        </div>
                    </div> */}

                    </div>
                </div>
            </div>
        </div>
    )
}
