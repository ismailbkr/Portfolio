'use client';

import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Swiper stilleri
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type ProjectImage = {
    id: number;
    url: string;
    alt: string;
}

type Project = {
    id: number;
    title: string;
    description: string;
    images: ProjectImage[];
}

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <div className="bg-secondary dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden mb-12">
            {/* Proje Fotoğrafları Slider */}
            <div className="h-64 md:h-96">
                <Swiper
                    modules={[Autoplay, Pagination, Navigation]}
                    spaceBetween={0}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    navigation={true}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    className="w-full h-full"
                >
                    {project.images.map((image) => (
                        <SwiperSlide key={image.id}>
                            <div className="w-full h-full relative bg-accent-light/30 dark:bg-gray-700 flex items-center justify-center">
                                <Image
                                    src={image.url}
                                    alt={image.alt}
                                    fill
                                    className="object-contain"
                                    sizes="(max-width: 768px) 100vw, 80vw"
                                />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Proje Bilgileri */}
            <div className="p-6">
                <h3 className="text-2xl font-bold mb-4 text-main">{project.title}</h3>
                <p className="text-main mb-4">
                    {project.description}
                </p>
            </div>
        </div>
    );
} 