import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import GuestLayout from '@/Layouts/GuestLayout';
import { Head } from '@inertiajs/react';

export default function Dashboard() {
    return (
        <GuestLayout>
            <Head title="Landing Page" />

            <div className="py-12">
                {/*<div className="mx-auto max-w-7xl sm:px-6 lg:px-8">*/}
                <div className="mx-auto flex w-full flex-col items-center justify-center gap-12 p-6 text-gray-900 md:flex-row xl:max-w-screen-xl">
                    <img
                        className={'max-h-48 rounded-full'}
                        alt={
                            'Leah, a woman with brown hair and blue eyes, is wearing headphones and smiling towards the camera.'
                        }
                        src={'LeahTCodes_picture.jpg'}
                    />
                    <div className={'flex flex-col gap-4'}>
                        <h1 className={'text-2xl'}>Hi, I'm Leah!</h1>
                        <h2>
                            Full Stack Developer @ Rugged Software | Technical
                            Content Creator
                        </h2>
                        <p className={''}>
                            I’m a full stack dev experienced with TS, React,
                            Laravel, python, and APIs. I also love math and
                            education! Currently looking at roles in developer
                            relations and advocacy. Outside of programming, my
                            hobbies include reading, cuddling with my dogs,
                            hiking, and streaming.
                        </p>
                        <div className={'flex justify-around gap-4'}>
                            <a
                                target="_blank"
                                href={'https://www.twitch.tv/leahtcodes'}
                                rel="noreferrer"
                            >
                                <svg
                                    id="twitchSVG"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width={32}
                                    height={32}
                                >
                                    <path d="M3 0 0 5v23h8v4h4l4-4h5l9-9V0H3zm23 17-5 5h-5l-4 4v-4H6V4h20v13z" />
                                    <path d="M19 8h3v8h-3V8zm-6 0h3v8h-3V8z" />
                                </svg>
                            </a>
                            <a
                                target="_blank"
                                href={'https://www.youtube.com/@leahtcodes'}
                                rel="noreferrer"
                            >
                                <svg
                                    id={'youtubeSVG'}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width={32}
                                    height={32}
                                >
                                    <path d="M31.7 9.6s-.3-2.2-1.3-3.2c-1.2-1.3-2.6-1.3-3.2-1.3-4.5-.4-11.2-.4-11.2-.4s-6.7 0-11.2.4c-.6 0-2 0-3.2 1.3C.6 7.4.3 9.6.3 9.6S0 12.2 0 14.8v2.4c0 2.6.3 5.2.3 5.2s.3 2.2 1.3 3.2c1.2 1.2 2.8 1.2 3.5 1.3 2.6.3 11 .4 11 .4s6.6 0 11.1-.4c.6 0 2 0 3.2-1.3 1-1 1.3-3.2 1.3-3.2s.3-2.6.3-5.2v-2.4c0-2.6-.3-5.2-.3-5.2zm-19 10.5v-9l8.6 4.6-8.6 4.4z" />
                                </svg>
                            </a>
                            <a
                                target="_blank"
                                href={'https://www.github.com/leahthompson01'}
                                rel="noreferrer"
                            >
                                <svg
                                    id={'githubSVG'}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width={32}
                                    height={32}
                                >
                                    <path d="M16 .4a16 16 0 0 0-5 31.2c.7.1 1-.4 1-.8v-3c-4.4 1-5.4-1.9-5.4-1.9-.7-1.8-1.8-2.3-1.8-2.3-1.4-1 .2-1 .2-1 1.6.1 2.4 1.7 2.4 1.7 1.4 2.4 3.8 1.7 4.7 1.3a3 3 0 0 1 1-2.1c-3.6-.4-7.3-1.8-7.3-8a6 6 0 0 1 1.6-4.2c-.1-.4-.7-2 .2-4.3 0 0 1.3-.4 4.4 1.7a15.4 15.4 0 0 1 8 0C23 6.6 24.4 7 24.4 7c.9 2.2.3 3.9.2 4.3a6 6 0 0 1 1.6 4.3c0 6.1-3.7 7.5-7.3 7.9.6.4 1 1.4 1 3v4.3c0 .4.4 1 1.2.8A16 16 0 0 0 16 .4z" />
                                </svg>
                            </a>
                            <a
                                target="_blank"
                                href={'https://www.twitter.com/leahtcodes'}
                                rel="noreferrer"
                            >
                                <svg
                                    id={'twitterSVG'}
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 32 32"
                                    width={32}
                                    height={32}
                                >
                                    <path d="M32 7a13 13 0 0 1-3.8 1.1 6.6 6.6 0 0 0 3-3.6c-1.4.7-2.8 1.3-4.3 1.6a6.6 6.6 0 0 0-11.1 6A18.6 18.6 0 0 1 2.2 5a6.6 6.6 0 0 0 2 8.9c-1 0-2-.4-3-.9v.1c0 3.2 2.4 5.9 5.4 6.5a6.6 6.6 0 0 1-3 0 6.6 6.6 0 0 0 6.1 4.6A13.2 13.2 0 0 1 0 27.1a18.6 18.6 0 0 0 28.7-16.6C30 9.5 31.1 8.4 32 7z" />
                                </svg>
                            </a>
                            <a
                                target="_blank"
                                href={'https://bsky.app/profile/leaht.codes'}
                                rel="noreferrer"
                            >
                                <svg
                                    id={'blueskySVG'}
                                    width={32}
                                    height={32}
                                    viewBox="0 0 568 501"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M123.121 33.6637C188.241 82.5526 258.281 181.681 284 234.873C309.719 181.681 379.759 82.5526 444.879 33.6637C491.866 -1.61183 568 -28.9064 568 57.9464C568 75.2916 558.055 203.659 552.222 224.501C531.947 296.954 458.067 315.434 392.347 304.249C507.222 323.8 536.444 388.56 473.333 453.32C353.473 576.312 301.061 422.461 287.631 383.039C285.169 375.812 284.017 372.431 284 375.306C283.983 372.431 282.831 375.812 280.369 383.039C266.939 422.461 214.527 576.312 94.6667 453.32C31.5556 388.56 60.7778 323.8 175.653 304.249C109.933 315.434 36.0535 296.954 15.7778 224.501C9.94525 203.659 0 75.2916 0 57.9464C0 -28.9064 76.1345 -1.61183 123.121 33.6637Z"
                                        fill="black"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                {/*</div>*/}
            </div>
        </GuestLayout>
    );
}
