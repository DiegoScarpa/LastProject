"use client";


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons';

const Profile = () => {
    return (
        <div className="w-full flex flex-col items-start gap-6 p-6 bg-white shadow-none dark:bg-black">
            <div className="w-16 h-16 p-2 bg-opacity-90 bg-white rounded-full flex justify-center items-center">
                <img
                    className="w-15 h-15 rounded-full"
                    src="/image.jpeg"
                    alt="Profile"
                />
            </div>
            <div className="text-black dark:text-white text-3xl font-bold leading-9">
                Software engineer
            </div>
            <div className="text-gray-600 dark:text-gray-400 text-base leading-7">
            Hi, I'm Diego! I'm a passionate software engineer specializing in building intuitive user interfaces and efficient backend solutions. I have a strong background in JavaScript, React, and Node.js, and I love creating seamless web experiences. When I'm not coding, you can find me streaming on Twitch or exploring new tech trends.            </div>
            <div className="bg-gray-100 p-2 rounded-md flex gap-3">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
                    <button className="w-6 h-6 flex items-center justify-center focus:outline-none">
                        <FontAwesomeIcon icon={faLinkedin} className="w-5 h-5 text-gray-600" />
                    </button>
                </a>

                {/* Twitter */}
                <a href="https://twitter.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <button className="w-6 h-6 flex items-center justify-center focus:outline-none">
                        <FontAwesomeIcon icon={faTwitter} className="w-5 h-5 text-gray-600" />
                    </button>
                </a>

                {/* GitHub */}
                <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
                    <button className="w-6 h-6 flex items-center justify-center focus:outline-none">
                        <FontAwesomeIcon icon={faGithub} className="w-5 h-5 text-gray-600" />
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Profile;