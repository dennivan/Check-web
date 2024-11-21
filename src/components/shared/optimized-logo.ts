import logo from '@/images/logo.webp';
import { getImage } from 'astro:assets';

export const getOptimizedFavicon = async () => {
    return await getImage({
        src: logo,
        width: 50,
        height: 50,
        format: 'webp'
    });
};
export const getOptimizedLogo = async () => {
    return await getImage({
        src: logo,
        width: 70,
        height: 70,
        format: 'webp'
    });
};
export const getOptimizedImage = async (
    image: string | ImageMetadata,
    width?: number,
    height?: number
) => {
    return await getImage({
        src: image,
        width,
        height,
        format: 'webp'
    });
};
