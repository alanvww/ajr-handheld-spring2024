'use client';
import {
	CiCloudSun,
	CiCalendarDate,
	CiMail,
	CiCircleCheck,
	CiWallet,
} from 'react-icons/ci';

export default function Home() {
	return (
		<main
			className={`flex flex-col items-center justify-around overflow-hidden h-screen p-4 bg-gradient-to-tr from-[#8787FA] to-[#609F5A]`}
		>
			{/* Weather Icon and Temperature */}
			<div
				className={`flex flex-col items-center gap-y-8 backdrop-blur-sm rounded-lg p-4 my-5 opacity-70`}
			>
				<div
					className={`text-4xl font-bold bg-white bg-opacity-30 p-6 rounded-full backdrop-blur-sm`}
				>
					Feb 11th <span className={`text-2xl font-extralight`}>2024</span>
				</div>
				<div
					className={`flex flex-row gap-x-4 items-center justify-center font-extralight`}
				>
					<div className={`text-8xl`}>
						<CiCloudSun />
					</div>
					<div className={`flex flex-col items-center justify-center `}>
						<div className={`text-xl `}>L:72°F </div>
						<div className={`text-xl `}>H:85°F </div>
					</div>
				</div>
			</div>

			{/* Favorite Apps List */}
			<ul className={`list-none text-xl font-extralight mb-[100px]`}>
				<li
					className={` opacity-70 hover:bg-white hover:bg-opacity-30 p-4 rounded-full backdrop-blur-sm`}
				>
					<CiCalendarDate className="inline-block text-4xl m-1" />
					<span className="align-middle"> Calendar</span>
				</li>
				<li
					className={` opacity-70 hover:bg-white hover:bg-opacity-30 p-4 rounded-full backdrop-blur-sm`}
				>
					<CiMail className="inline-block text-4xl m-1" />
					<span className="align-middle"> Email</span>
				</li>
				<li
					className={` opacity-70 hover:bg-white hover:bg-opacity-30 p-4 rounded-full backdrop-blur-sm`}
				>
					<CiCircleCheck className="inline-block text-4xl m-1" />
					<span className="align-middle"> To-do List</span>
				</li>
				<li
					className={`  opacity-70 hover:bg-white hover:bg-opacity-30 p-4 rounded-full backdrop-blur-sm `}
				>
					<CiWallet className="inline-block text-4xl m-1" />
					<span className="align-middle"> Wallet</span>
				</li>
				{/* Add more apps as needed */}
			</ul>

			{/* Tab Indicator */}
			<div
				className={`flex   space-x-2 items-center justify-center p-2 rounded-full bg-white opacity-30 backdrop-blur-sm`}
			>
				<div className={`w-2 h-2  rounded-full bg-black`}></div>
				<div className={`w-2 h-2 rounded-full bg-gray-400`}></div>
				<div className={`w-2 h-2 rounded-full bg-gray-400`}></div>
			</div>

			{/* Search Bar */}
			<div
				className={`w-full flex-grow-0 m-2 px-2 py-2 rounded-full bg-white opacity-30 backdrop-blur-sm `}
			>
				<input
					type="search"
					placeholder="Search"
					className={`w-full p-1 rounded bg-transparent`}
				/>
			</div>
		</main>
	);
}
